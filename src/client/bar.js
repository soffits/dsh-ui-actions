/**
 * Action buttons: chat, done, snooze, event and link, the same look and
 * behaviour wherever an item offers them. `chat` and `link` act in the page;
 * done, snooze and event go to the offering plugin's own `onPress`, which
 * resolves once its server accepted the press.
 */
import { createElement as h, useEffect, useRef, useState } from 'react'
import { pickText } from '../text.js'
import { PATHS } from './look.js'

/** The next 09:00 after now, as an ISO string. */
export function tomorrowMorning(now = new Date()) {
  const date = new Date(now)
  date.setDate(date.getDate() + 1)
  date.setHours(9, 0, 0, 0)
  return date.toISOString()
}

/** The chat a bar offers when the data declares none. */
export const DEFAULT_CHAT = Object.freeze({ kind: 'chat', id: '_chat' })

export function Glyph({ name }) {
  return h('svg', { viewBox: '0 0 16 16', fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' },
    h('path', { d: PATHS[name] ?? PATHS.event }))
}

/**
 * @param {object} options
 * @param {() => (key: string, params?: object) => string} options.useWords - this package's words, re-rendering on a language switch
 * @param {() => string} options.useLanguage - the person's language tag
 * @param {(about: object, options: object) => Promise<void>} options.chat
 * @param {(about: object, options: object) => Promise<string>} options.start - send a step, resolving to the session id
 * @param {(session: string) => void} options.open - show a session
 */
export function createBar({ useWords, useLanguage, chat, start, open }) {
  function SnoozeMenu({ onPick, onClose }) {
    const t = useWords()
    const [picking, setPicking] = useState(false)
    const [value, setValue] = useState('')
    const ref = useRef(null)
    useEffect(() => {
      const away = event => { if (ref.current && !ref.current.contains(event.target)) onClose() }
      const escape = event => { if (event.key === 'Escape') onClose() }
      document.addEventListener('pointerdown', away)
      document.addEventListener('keydown', escape)
      return () => { document.removeEventListener('pointerdown', away); document.removeEventListener('keydown', escape) }
    }, [onClose])
    return h('div', { className: 'ua-menu', ref, role: 'menu' },
      !picking && h('button', { type: 'button', role: 'menuitem', onClick: () => onPick(new Date(Date.now() + 3 * 3600 * 1000).toISOString()) }, t('in3h')),
      !picking && h('button', { type: 'button', role: 'menuitem', onClick: () => onPick(tomorrowMorning()) }, t('tomorrow')),
      !picking && h('button', { type: 'button', role: 'menuitem', onClick: () => setPicking(true) }, t('pick')),
      picking && h('input', { type: 'datetime-local', value, autoFocus: true, onChange: event => setValue(event.target.value) }),
      picking && h('div', { className: 'ua-menuRow' },
        h('button', { type: 'button', onClick: onClose }, t('cancel')),
        h('button', { type: 'button', disabled: value === '', onClick: () => onPick(new Date(value).toISOString()) }, t('set'))))
  }

  /**
   * One action as a button.
   * @param {object} props
   * @param {object} props.action - `{ kind, id, label?, payload? }`
   * @param {string} [props.state] - the server's view of the last press: pending, done or unhandled
   * @param {boolean} [props.compact] - icon only
   * @param {object} [props.about] - what a chat is about (see `chat`)
   * @param {(action: object, extra: object) => Promise<unknown>} [props.onPress]
   */
  function ActionButton({ action, state, compact = false, about, onPress }) {
    if (action.kind === 'step') return h(StepButton, { action, state, about, onPress })
    const t = useWords()
    const language = useLanguage()
    const [local, setLocal] = useState(null)
    const [error, setError] = useState(null)
    const [menu, setMenu] = useState(false)
    useEffect(() => { if (state) setLocal(null) }, [state])
    const shown = local ?? state
    const label = pickText(action.label, language) || t(action.kind === 'chat' && action.id === DEFAULT_CHAT.id ? 'chatAbout' : action.kind)
    const title = shown === 'sending' ? t('sending') : shown === 'pending' ? t('pending') : shown === 'done' ? t('handled') : shown === 'unhandled' ? t('unhandled') : error ?? label
    const icon = shown === 'done' ? 'done' : shown === 'unhandled' ? 'unhandled' : action.kind
    // A labelled done is a choice (one answer of a question): its words are what it means, so it keeps them on a row.
    const iconOnly = compact && !(action.kind === 'done' && pickText(action.label, language))
    const className = `ua-btn${iconOnly ? ' ua-icon' : ''}`
    const content = [h(Glyph, { key: 'i', name: icon }), !iconOnly && h('span', { key: 'l' }, label)]

    if (action.kind === 'link') {
      const url = action.payload?.url
      const external = /^https?:/i.test(url ?? '')
      return h('a', { className, href: url, title: label, 'aria-label': label, ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }, content)
    }
    const send = async extra => {
      setMenu(false)
      setError(null)
      setLocal('sending')
      try {
        if (action.kind === 'chat') {
          const payload = action.payload ?? {}
          await chat({ ...about, ...(payload.context === undefined ? {} : { context: payload.context }) }, { prompt: pickText(payload.prompt, language), session: payload.session ?? 'new' })
          setLocal(null)
        } else {
          if (onPress === undefined) throw new Error(t('noHandler'))
          await onPress(action, extra ?? {})
          setLocal('pending')
        }
      } catch (reason) {
        setLocal(null)
        setError(t('failed', { message: reason?.message ?? String(reason) }))
      }
    }
    const onClick = () => {
      if (action.kind === 'snooze' && action.payload?.until === undefined) setMenu(open => !open)
      else send()
    }
    const busy = shown === 'sending' || shown === 'pending'
    return h('span', { className: 'ua-wrap' },
      h('button', { type: 'button', className, title, 'aria-label': title !== label ? `${label} (${title})` : label, 'data-state': shown ?? undefined, disabled: busy, onClick }, content),
      menu && h(SnoozeMenu, { onPick: until => send({ until }), onClose: () => setMenu(false) }),
      error && !iconOnly && h('span', { className: 'ua-error', role: 'alert' }, error))
  }

  /**
   * A suggested next step: its label is the act, a tap is the person's
   * go-ahead. The press is recorded through `onPress` first (the offering
   * plugin's server logs who pressed what), then the instruction is sent with
   * the item into a session, and the button links to it. A press the server
   * already knows (`state`) shows as started.
   */
  function StepButton({ action, state, about, onPress }) {
    const t = useWords()
    const language = useLanguage()
    const [local, setLocal] = useState(null)
    const [error, setError] = useState(null)
    const label = pickText(action.label, language)
    const session = typeof local === 'object' && local !== null ? local.session : null
    const shown = local === 'starting' ? 'starting' : session || state ? 'started' : 'ready'
    const run = async () => {
      setError(null)
      setLocal('starting')
      try {
        if (onPress === undefined) throw new Error(t('noHandler'))
        await onPress(action, {})
        const payload = action.payload ?? {}
        const instruction = pickText(payload.prompt, language) || label
        const id = await start({ ...about, ...(payload.context === undefined ? {} : { context: payload.context }) }, { instruction, session: payload.session ?? 'new' })
        setLocal({ session: id })
      } catch (reason) {
        setLocal(null)
        setError(t('failed', { message: reason?.message ?? String(reason) }))
      }
    }
    if (shown === 'started') {
      return h('span', { className: 'ua-stepWrap' },
        h('span', { className: 'ua-step', 'data-state': 'started', title: t('started') },
          h(Glyph, { name: 'done' }), h('span', null, label)),
        session !== null && h('button', { type: 'button', className: 'ua-stepOpen', onClick: () => open(session) }, t('openSession')))
    }
    return h('span', { className: 'ua-stepWrap' },
      h('button', { type: 'button', className: 'ua-step', 'data-state': shown, disabled: shown === 'starting', title: shown === 'starting' ? t('starting') : label, onClick: run },
        h(Glyph, { name: shown === 'starting' ? 'pending' : 'step' }), h('span', null, label)),
      error && h('span', { className: 'ua-error', role: 'alert' }, error))
  }

  /**
   * A row of action buttons.
   * @param {object} props
   * @param {object[]} props.actions - as the data declares them
   * @param {Record<string, string>} [props.states] - press state by action id
   * @param {boolean} [props.compact] - icons only (rows)
   * @param {object} [props.about] - what a chat is about
   * @param {boolean} [props.defaultChat] - add a chat when the data declares none
   * @param {(action: object, extra: object) => Promise<unknown>} [props.onPress]
   * @param {'steps' | 'buttons'} [props.part] - only the suggested steps, or only the other buttons, for layouts that place
   *   them apart (a narrow row keeps its buttons beside the title and its steps on a line below); both when omitted
   * @param {*} [props.children] - the page's own controls, placed after the fixed buttons
   */
  function ActionBar({ actions = [], states = {}, compact = false, about, defaultChat = false, part, onPress, children }) {
    const declared = defaultChat && about !== undefined && !actions.some(action => action.kind === 'chat') ? [DEFAULT_CHAT, ...actions] : actions
    // Suggested steps lead, on their own line; the fixed buttons follow.
    const steps = part === 'buttons' ? [] : declared.filter(action => action.kind === 'step')
    const rest = part === 'steps' ? [] : declared.filter(action => action.kind !== 'step')
    if (steps.length + rest.length === 0) return children ? h('div', { className: 'ua-bar' }, children) : null
    const button = action => h(ActionButton, { key: action.id, action, state: states[action.id], compact, about, onPress })
    return h('div', { className: 'ua-bar' }, steps.map(button), steps.length > 0 && rest.length > 0 && h('span', { key: '_break', className: 'ua-break', 'aria-hidden': true }), rest.map(button), children)
  }

  return { ActionBar, ActionButton }
}
