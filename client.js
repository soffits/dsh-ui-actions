/* @soffits/dsh-ui-actions 0.2.1: built by scripts/build.mjs from src/client/ and locale/. Do not edit. */
window.__ModuleLoader__.load({
  id: "@soffits/dsh-ui-actions",
  factory: (require) => {
    var module = { exports: {} }
    var exports = module.exports
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client/index.js
var index_exports = {};
__export(index_exports, {
  NS: () => NS,
  apply: () => apply,
  inject: () => inject,
  name: () => name
});
module.exports = __toCommonJS(index_exports);
var import_react5 = require("react");

// locales:locales
var locales_default = { "en": { "meta": { "title": "UI actions", "description": "Shared buttons for plugin pages (ask, done, snooze, open) and items attached to a chat as a card." }, "ui": { "chat": "Ask", "chatAbout": "Chat about this", "done": "Done", "snooze": "Snooze", "event": "Go", "link": "Open", "in3h": "In 3 hours", "tomorrow": "Tomorrow 9:00", "pick": "Pick a time\u2026", "set": "Snooze", "cancel": "Cancel", "sending": "Sending\u2026", "pending": "Waiting for it to be picked up", "handled": "Done", "unhandled": "Nothing picked this up yet", "failed": "Didn\u2019t go through: {message}", "noWorkspace": "Open a conversation once first, then try again.", "noSession": "That conversation didn\u2019t open. Try again from the conversation list.", "busy": "The message box is busy sending; try again in a moment.", "noHandler": "This button has nothing to send its press to.", "starting": "Starting\u2026", "started": "Started", "openSession": "Open conversation" } }, "fr": { "meta": { "title": "Actions d\u2019interface", "description": "Boutons partag\xE9s des pages de plugins (demander, fait, plus tard, ouvrir) et \xE9l\xE9ments joints \xE0 une conversation sous forme de carte." }, "ui": { "chat": "Demander", "chatAbout": "En discuter", "done": "Fait", "snooze": "Plus tard", "event": "Lancer", "link": "Ouvrir", "in3h": "Dans 3 heures", "tomorrow": "Demain 9:00", "pick": "Choisir une heure\u2026", "set": "Rappeler", "cancel": "Annuler", "sending": "Envoi\u2026", "pending": "En attente de traitement", "handled": "Fait", "unhandled": "Personne ne l\u2019a encore pris en charge", "failed": "\xC9chec : {message}", "noWorkspace": "Ouvrez d\u2019abord une conversation, puis r\xE9essayez.", "noSession": "La conversation ne s\u2019est pas ouverte. R\xE9essayez depuis la liste des conversations.", "busy": "La zone de message est en cours d\u2019envoi ; r\xE9essayez dans un instant.", "noHandler": "Ce bouton n\u2019a rien \xE0 qui transmettre l\u2019appui.", "starting": "D\xE9marrage\u2026", "started": "Lanc\xE9", "openSession": "Ouvrir la conversation" } }, "zh": { "meta": { "title": "\u754C\u9762\u64CD\u4F5C", "description": "\u63D2\u4EF6\u9875\u9762\u5171\u7528\u7684\u6309\u94AE\uFF08\u63D0\u95EE\u3001\u5B8C\u6210\u3001\u7A0D\u540E\u63D0\u9192\u3001\u6253\u5F00\uFF09\uFF0C\u4EE5\u53CA\u4EE5\u5361\u7247\u5F62\u5F0F\u9644\u5728\u5BF9\u8BDD\u91CC\u7684\u6761\u76EE\u3002" }, "ui": { "chat": "\u95EE\u95EE", "chatAbout": "\u804A\u804A\u8FD9\u4E2A", "done": "\u5B8C\u6210", "snooze": "\u7A0D\u540E\u63D0\u9192", "event": "\u6267\u884C", "link": "\u6253\u5F00", "in3h": "3 \u5C0F\u65F6\u540E", "tomorrow": "\u660E\u5929 9:00", "pick": "\u9009\u4E2A\u65F6\u95F4\u2026", "set": "\u7A0D\u540E\u63D0\u9192", "cancel": "\u53D6\u6D88", "sending": "\u53D1\u9001\u4E2D\u2026", "pending": "\u7B49\u5F85\u5904\u7406", "handled": "\u5DF2\u5904\u7406", "unhandled": "\u8FD8\u6CA1\u6709\u88AB\u5904\u7406", "failed": "\u6CA1\u6709\u6210\u529F\uFF1A{message}", "noWorkspace": "\u8BF7\u5148\u6253\u5F00\u4E00\u6B21\u5BF9\u8BDD\uFF0C\u518D\u8BD5\u4E00\u6B21\u3002", "noSession": "\u6CA1\u80FD\u6253\u5F00\u90A3\u4E2A\u4F1A\u8BDD\uFF0C\u8BF7\u4ECE\u4F1A\u8BDD\u5217\u8868\u518D\u8BD5\u4E00\u6B21\u3002", "busy": "\u8F93\u5165\u6846\u6B63\u5728\u53D1\u9001\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002", "noHandler": "\u8FD9\u4E2A\u6309\u94AE\u6CA1\u6709\u63A5\u6536\u65B9\u3002", "starting": "\u6B63\u5728\u5F00\u59CB\u2026", "started": "\u5DF2\u5F00\u59CB", "openSession": "\u6253\u5F00\u5BF9\u8BDD" } } };

// src/item.js
var TITLE_MAX = 200;
var LINE_MAX = 300;
var MAX_LINES = 15;
var CONTEXT_MAX = 2e3;
var MARKER = /^\[Item from (.+) \(([^\s()]+)\)\]$/;
var CONTEXT = "context: ";
function oneLine(value, max) {
  const text = String(value ?? "").replace(/\s+/gu, " ").trim();
  const chars = Array.from(text);
  return chars.length > max ? `${chars.slice(0, max - 1).join("")}\u2026` : text;
}
function itemText({ source, sourceName, title, lines = [], context }) {
  const id = oneLine(source, 120).replace(/[\s()]/gu, "");
  const name2 = oneLine(sourceName || id, 80).replace(/\]/gu, ")");
  const out = [oneLine(title, TITLE_MAX) || "\u2026", `[Item from ${name2} (${id})]`];
  for (const line of lines) {
    if (out.length > MAX_LINES + 1) break;
    const text = oneLine(line, LINE_MAX);
    if (text !== "") out.push(text);
  }
  if (context !== void 0 && context !== null) {
    const json = JSON.stringify(context);
    if (json !== void 0 && json.length <= CONTEXT_MAX) out.push(`${CONTEXT}${json}`);
  }
  return out.join("\n");
}
function parseItem(text) {
  const rows = String(text).replace(/\r\n?/gu, "\n").split("\n");
  const marker = MARKER.exec(rows[1] ?? "");
  if (marker === null || (rows[0] ?? "").trim() === "") return null;
  const lines = rows.slice(2).filter((line) => line.trim() !== "");
  const item = { source: marker[2], sourceName: marker[1], title: rows[0].trim(), lines };
  const last = lines[lines.length - 1];
  if (last?.startsWith(CONTEXT)) {
    try {
      item.context = JSON.parse(last.slice(CONTEXT.length));
      lines.pop();
    } catch {
    }
  }
  return item;
}
var unquote = (text) => text.replace(/\r\n?/gu, "\n").replace(/^ {0,3}>[ \t]?/gmu, "");
function itemRanges(text) {
  const ranges = [];
  for (const match of String(text).matchAll(/^ {0,3}>[^\r\n]*(?:\r?\n {0,3}>[^\r\n]*)*/gmu)) {
    const item = parseItem(unquote(match[0]));
    if (item !== null) ranges.push({ start: match.index, end: match.index + match[0].length, item });
  }
  return ranges;
}
function itemSummary({ sourceName, title, lines = [] }) {
  const shown = lines.map((line) => oneLine(line, LINE_MAX)).filter(Boolean);
  return {
    label: oneLine(title, TITLE_MAX) || "\u2026",
    title: oneLine(title, TITLE_MAX) || "\u2026",
    detail: oneLine(sourceName, 80),
    body: shown.join("\n")
  };
}
function stepMessage(instruction, item) {
  const quote = itemText(item).split("\n").map((line) => `> ${line}`).join("\n");
  return `${String(instruction).trim()}

${quote}`;
}

// src/rule.js
var ITEM_NODE = "ui-actions-item";
var cache = /* @__PURE__ */ new Map();
function rangesOf(text) {
  let ranges = cache.get(text);
  if (ranges === void 0) {
    ranges = itemRanges(text);
    if (cache.size > 200) cache.clear();
    cache.set(text, ranges);
  }
  return ranges;
}
var itemRule = {
  id: ITEM_NODE,
  order: -20,
  match(text, from) {
    for (const range of rangesOf(text)) {
      const lead = text.slice(0, range.start).match(/\r?\n(?:[ \t]*\r?\n)*$/u)?.[0];
      if (lead && range.start - lead.length >= from) return { id: "text", start: range.start - lead.length, end: range.start, data: { text: lead, display: "\n" } };
      if (range.start >= from) return { id: ITEM_NODE, start: range.start, end: range.end, data: range.item };
      const gap = text.slice(range.end).match(/^\r?\n(?:[ \t]*\r?\n)*/u)?.[0];
      if (range.end >= from && gap) return { id: "text", start: range.end, end: range.end + gap.length, data: { text: gap, display: "\n" } };
    }
    return void 0;
  }
};

// src/client/bar.js
var import_react = require("react");

// src/text.js
function pickText(value, language = "en") {
  if (typeof value === "string") return value;
  if (value === null || typeof value !== "object") return "";
  const tags = Object.keys(value);
  const want = String(language).toLowerCase();
  const primary = want.split("-")[0];
  const found = tags.find((tag) => tag.toLowerCase() === want) ?? tags.find((tag) => tag.toLowerCase() === primary) ?? tags.find((tag) => tag.toLowerCase().split("-")[0] === primary) ?? tags.find((tag) => tag.toLowerCase() === "en") ?? tags[0];
  return typeof value[found] === "string" ? value[found] : "";
}

// src/client/look.js
var STYLE_ID = "dsh-ui-actions-style";
var CSS = `
.ua-bar{display:flex;flex-wrap:wrap;gap:6px;align-items:center;min-width:0}
.ua-btn{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:32px;max-width:100%;padding:0 12px;border:0;border-radius:8px;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;line-height:18px;cursor:pointer;text-decoration:none;box-shadow:inset 0 0 0 .5px var(--dsw-alias-border-l3)}
.ua-btn span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ua-btn svg{flex:none;width:14px;height:14px}
.ua-btn:disabled{cursor:default;opacity:.7}
@media (hover:hover){.ua-btn:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}}
.ua-icon{width:32px;padding:0;box-shadow:none;color:var(--dsw-alias-label-tertiary)}
.ua-btn[data-state=pending] svg,.ua-btn[data-state=sending] svg{animation:ua-pulse 1.2s ease-in-out infinite}
.ua-btn[data-state=done]{color:var(--dsw-alias-state-success-primary)}
.ua-btn[data-state=unhandled]{color:var(--dsw-alias-state-warn-label,var(--dsw-alias-state-warn-primary))}
@keyframes ua-pulse{50%{opacity:.35}}
.ua-wrap{position:relative;display:inline-flex;max-width:100%;flex-wrap:wrap;align-items:center;gap:4px 8px}
.ua-menu{position:absolute;z-index:20;top:calc(100% + 4px);right:0;min-width:168px;padding:4px;border-radius:12px;background:var(--dsw-alias-bg-layer-2,var(--dsw-alias-bg-base));box-shadow:0 6px 24px #0000001f,inset 0 0 0 .5px var(--dsw-alias-border-l2);display:flex;flex-direction:column}
.ua-menu button{display:flex;align-items:center;gap:8px;min-height:36px;padding:7px 10px;border:0;border-radius:8px;background:none;color:var(--dsw-alias-label-primary);font:inherit;font-size:13px;text-align:left;cursor:pointer}
@media (hover:hover){.ua-menu button:hover{background:var(--dsw-alias-interactive-bg-hover)}}
.ua-menu input{margin:4px 6px;min-height:36px;padding:6px 8px;border:.5px solid var(--dsw-alias-border-l3);border-radius:8px;background:transparent;color:inherit;font:inherit;font-size:16px}
.ua-menuRow{display:flex;justify-content:flex-end;gap:4px;padding:2px 4px}
.ua-error{flex-basis:100%;color:var(--dsw-alias-state-error-primary);font-size:12px;overflow-wrap:anywhere}
@media (width<=768px),(pointer:coarse){
.ua-btn{min-height:40px}
.ua-icon{width:40px}
.ua-menu{position:fixed;z-index:1000;top:auto;left:12px;right:12px;bottom:12px;max-height:60vh;overflow:auto;padding:8px;box-shadow:0 8px 40px #00000040,inset 0 0 0 .5px var(--dsw-alias-border-l2)}
.ua-menu button{min-height:44px;font-size:15px}
.ua-menu input{min-height:44px}
}
.ua-break{flex-basis:100%;height:0}
.ua-stepWrap{display:inline-flex;flex-wrap:wrap;align-items:center;gap:4px 8px;max-width:100%}
.ua-step{box-sizing:border-box;display:inline-flex;align-items:flex-start;gap:8px;min-height:32px;max-width:100%;padding:6px 12px;border:0;border-radius:8px;background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 10%,transparent);color:var(--dsw-alias-state-business-primary);font:inherit;font-size:13px;line-height:20px;text-align:left;cursor:pointer;white-space:normal;overflow-wrap:anywhere}
.ua-step svg{flex:none;width:14px;height:14px;margin-top:3px}
@media (hover:hover){.ua-step:hover:not(:disabled):not([data-state=started]){background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 18%,transparent)}}
.ua-step:disabled{cursor:default}
.ua-step[data-state=starting] svg{animation:ua-pulse 1.2s ease-in-out infinite}
.ua-step[data-state=started]{background:transparent;box-shadow:inset 0 0 0 .5px var(--dsw-alias-border-l3);color:var(--dsw-alias-label-secondary);cursor:default}
.ua-step[data-state=started] svg{color:var(--dsw-alias-state-success-primary)}
.ua-stepOpen{border:0;background:none;padding:4px 2px;color:var(--dsw-alias-state-business-primary);font:inherit;font-size:13px;cursor:pointer;text-decoration:underline;text-underline-offset:2px}
@media (width<=640px){.ua-stepWrap,.ua-step{width:100%}.ua-step{min-height:40px;padding:9px 12px}}
.ua-item{box-sizing:border-box;display:inline-flex;align-items:center;gap:10px;vertical-align:top;width:min(100%,320px);max-width:100%;padding:8px 12px 8px 8px;border-radius:12px;background:var(--dsw-alias-bg-base);box-shadow:inset 0 0 0 .5px var(--dsw-alias-border-l2);color:var(--dsw-alias-label-primary);text-align:left;white-space:normal;line-height:18px}
.ua-itemIcon{flex:none;display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:8px;background:var(--dsw-alias-bg-layer-1,var(--dsw-alias-interactive-bg-hover));color:var(--dsw-alias-label-secondary)}
.ua-itemIcon svg{width:18px;height:18px}
.ua-itemText{display:flex;flex-direction:column;min-width:0;flex:1}
.ua-itemText span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ua-itemSource{color:var(--dsw-alias-label-tertiary);font-size:11px;line-height:16px}
.ua-itemTitle{font-size:13px;font-weight:500}
.ua-itemLine{color:var(--dsw-alias-label-secondary);font-size:12px}
`;
var PATHS = {
  chat: "M3 4.5A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5v5A1.5 1.5 0 0 1 11.5 11H7l-3 2.5V11h.5A1.5 1.5 0 0 1 3 9.5z",
  done: "M3.5 8.5l3 3 6-7",
  snooze: "M8 4.5V8l2.2 1.4M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z",
  event: "M8.8 2.5 4 9h4l-.8 4.5L12 7H8z",
  link: "M6 3.5H3.5v9h9V10M9 3h4v4M13 3 7.5 8.5",
  pending: "M8 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0",
  unhandled: "M8 3.5v5.5M8 12v.5",
  step: "M3 8h8.5M8.5 4.5 12 8l-3.5 3.5",
  item: "M3.5 2.5h6l3 3v8h-9zM9.5 2.5v3h3M5.5 8.5h5M5.5 11h3.5"
};

// src/client/bar.js
function tomorrowMorning(now = /* @__PURE__ */ new Date()) {
  const date = new Date(now);
  date.setDate(date.getDate() + 1);
  date.setHours(9, 0, 0, 0);
  return date.toISOString();
}
var DEFAULT_CHAT = Object.freeze({ kind: "chat", id: "_chat" });
function Glyph({ name: name2 }) {
  return (0, import_react.createElement)(
    "svg",
    { viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true, focusable: "false" },
    (0, import_react.createElement)("path", { d: PATHS[name2] ?? PATHS.event })
  );
}
function createBar({ useWords, useLanguage, chat, start, open }) {
  function SnoozeMenu({ onPick, onClose }) {
    const t = useWords();
    const [picking, setPicking] = (0, import_react.useState)(false);
    const [value, setValue] = (0, import_react.useState)("");
    const ref = (0, import_react.useRef)(null);
    (0, import_react.useEffect)(() => {
      const away = (event) => {
        if (ref.current && !ref.current.contains(event.target)) onClose();
      };
      const escape = (event) => {
        if (event.key === "Escape") onClose();
      };
      document.addEventListener("pointerdown", away);
      document.addEventListener("keydown", escape);
      return () => {
        document.removeEventListener("pointerdown", away);
        document.removeEventListener("keydown", escape);
      };
    }, [onClose]);
    return (0, import_react.createElement)(
      "div",
      { className: "ua-menu", ref, role: "menu" },
      !picking && (0, import_react.createElement)("button", { type: "button", role: "menuitem", onClick: () => onPick(new Date(Date.now() + 3 * 3600 * 1e3).toISOString()) }, t("in3h")),
      !picking && (0, import_react.createElement)("button", { type: "button", role: "menuitem", onClick: () => onPick(tomorrowMorning()) }, t("tomorrow")),
      !picking && (0, import_react.createElement)("button", { type: "button", role: "menuitem", onClick: () => setPicking(true) }, t("pick")),
      picking && (0, import_react.createElement)("input", { type: "datetime-local", value, autoFocus: true, onChange: (event) => setValue(event.target.value) }),
      picking && (0, import_react.createElement)(
        "div",
        { className: "ua-menuRow" },
        (0, import_react.createElement)("button", { type: "button", onClick: onClose }, t("cancel")),
        (0, import_react.createElement)("button", { type: "button", disabled: value === "", onClick: () => onPick(new Date(value).toISOString()) }, t("set"))
      )
    );
  }
  function ActionButton({ action, state, compact = false, about, onPress }) {
    if (action.kind === "step") return (0, import_react.createElement)(StepButton, { action, state, about, onPress });
    const t = useWords();
    const language = useLanguage();
    const [local, setLocal] = (0, import_react.useState)(null);
    const [error, setError] = (0, import_react.useState)(null);
    const [menu, setMenu] = (0, import_react.useState)(false);
    (0, import_react.useEffect)(() => {
      if (state) setLocal(null);
    }, [state]);
    const shown = local ?? state;
    const label = pickText(action.label, language) || t(action.kind === "chat" && action.id === DEFAULT_CHAT.id ? "chatAbout" : action.kind);
    const title = shown === "sending" ? t("sending") : shown === "pending" ? t("pending") : shown === "done" ? t("handled") : shown === "unhandled" ? t("unhandled") : error ?? label;
    const icon = shown === "done" ? "done" : shown === "unhandled" ? "unhandled" : action.kind;
    const iconOnly = compact && !(action.kind === "done" && pickText(action.label, language));
    const className = `ua-btn${iconOnly ? " ua-icon" : ""}`;
    const content = [(0, import_react.createElement)(Glyph, { key: "i", name: icon }), !iconOnly && (0, import_react.createElement)("span", { key: "l" }, label)];
    if (action.kind === "link") {
      const url = action.payload?.url;
      const external = /^https?:/i.test(url ?? "");
      return (0, import_react.createElement)("a", { className, href: url, title: label, "aria-label": label, ...external ? { target: "_blank", rel: "noopener noreferrer" } : {} }, content);
    }
    const send = async (extra) => {
      setMenu(false);
      setError(null);
      setLocal("sending");
      try {
        if (action.kind === "chat") {
          const payload = action.payload ?? {};
          await chat({ ...about, ...payload.context === void 0 ? {} : { context: payload.context } }, { prompt: pickText(payload.prompt, language), session: payload.session ?? "new" });
          setLocal(null);
        } else {
          if (onPress === void 0) throw new Error(t("noHandler"));
          await onPress(action, extra ?? {});
          setLocal("pending");
        }
      } catch (reason) {
        setLocal(null);
        setError(t("failed", { message: reason?.message ?? String(reason) }));
      }
    };
    const onClick = () => {
      if (action.kind === "snooze" && action.payload?.until === void 0) setMenu((open2) => !open2);
      else send();
    };
    const busy = shown === "sending" || shown === "pending";
    return (0, import_react.createElement)(
      "span",
      { className: "ua-wrap" },
      (0, import_react.createElement)("button", { type: "button", className, title, "aria-label": title !== label ? `${label} (${title})` : label, "data-state": shown ?? void 0, disabled: busy, onClick }, content),
      menu && (0, import_react.createElement)(SnoozeMenu, { onPick: (until) => send({ until }), onClose: () => setMenu(false) }),
      error && !iconOnly && (0, import_react.createElement)("span", { className: "ua-error", role: "alert" }, error)
    );
  }
  function StepButton({ action, state, about, onPress }) {
    const t = useWords();
    const language = useLanguage();
    const [local, setLocal] = (0, import_react.useState)(null);
    const [error, setError] = (0, import_react.useState)(null);
    const label = pickText(action.label, language);
    const session = typeof local === "object" && local !== null ? local.session : null;
    const shown = local === "starting" ? "starting" : session || state ? "started" : "ready";
    const run = async () => {
      setError(null);
      setLocal("starting");
      try {
        if (onPress === void 0) throw new Error(t("noHandler"));
        await onPress(action, {});
        const payload = action.payload ?? {};
        const instruction = pickText(payload.prompt, language) || label;
        const id = await start({ ...about, ...payload.context === void 0 ? {} : { context: payload.context } }, { instruction, session: payload.session ?? "new" });
        setLocal({ session: id });
      } catch (reason) {
        setLocal(null);
        setError(t("failed", { message: reason?.message ?? String(reason) }));
      }
    };
    if (shown === "started") {
      return (0, import_react.createElement)(
        "span",
        { className: "ua-stepWrap" },
        (0, import_react.createElement)(
          "span",
          { className: "ua-step", "data-state": "started", title: t("started") },
          (0, import_react.createElement)(Glyph, { name: "done" }),
          (0, import_react.createElement)("span", null, label)
        ),
        session !== null && (0, import_react.createElement)("button", { type: "button", className: "ua-stepOpen", onClick: () => open(session) }, t("openSession"))
      );
    }
    return (0, import_react.createElement)(
      "span",
      { className: "ua-stepWrap" },
      (0, import_react.createElement)(
        "button",
        { type: "button", className: "ua-step", "data-state": shown, disabled: shown === "starting", title: shown === "starting" ? t("starting") : label, onClick: run },
        (0, import_react.createElement)(Glyph, { name: shown === "starting" ? "pending" : "step" }),
        (0, import_react.createElement)("span", null, label)
      ),
      error && (0, import_react.createElement)("span", { className: "ua-error", role: "alert" }, error)
    );
  }
  function ActionBar({ actions = [], states = {}, compact = false, about, defaultChat = false, part, onPress, children }) {
    const declared = defaultChat && about !== void 0 && !actions.some((action) => action.kind === "chat") ? [DEFAULT_CHAT, ...actions] : actions;
    const steps = part === "buttons" ? [] : declared.filter((action) => action.kind === "step");
    const rest = part === "steps" ? [] : declared.filter((action) => action.kind !== "step");
    if (steps.length + rest.length === 0) return children ? (0, import_react.createElement)("div", { className: "ua-bar" }, children) : null;
    const button = (action) => (0, import_react.createElement)(ActionButton, { key: action.id, action, state: states[action.id], compact, about, onPress });
    return (0, import_react.createElement)("div", { className: "ua-bar" }, steps.map(button), steps.length > 0 && rest.length > 0 && (0, import_react.createElement)("span", { key: "_break", className: "ua-break", "aria-hidden": true }), rest.map(button), children);
  }
  return { ActionBar, ActionButton };
}

// src/client/card.js
var import_react2 = require("react");
function createCard({ sources }) {
  return function ItemCard({ node }) {
    const item = node.data;
    const source = sources.useSource(item.source);
    const name2 = source?.name || item.sourceName;
    const Icon = source?.icon;
    const line = item.lines[0];
    return (0, import_react2.createElement)(
      "span",
      { className: "ua-item", "data-item-source": item.source, title: [`${name2}: ${item.title}`, ...item.lines].join("\n") },
      (0, import_react2.createElement)("span", { className: "ua-itemIcon", "aria-hidden": true }, Icon ? (0, import_react2.createElement)(Icon, { size: 18 }) : (0, import_react2.createElement)(Glyph, { name: "item" })),
      (0, import_react2.createElement)(
        "span",
        { className: "ua-itemText" },
        (0, import_react2.createElement)("span", { className: "ua-itemSource" }, name2),
        (0, import_react2.createElement)("span", { className: "ua-itemTitle" }, item.title),
        line && (0, import_react2.createElement)("span", { className: "ua-itemLine" }, line)
      )
    );
  };
}

// src/client/chat.js
var import_react3 = require("react");

// src/pending.js
var PENDING_MS = 6e4;
var sameDraft = (a, b) => a.replace(/\s+/gu, " ").trim() === b.replace(/\s+/gu, " ").trim();
function draftText(itemText2, prompt = "") {
  const quote = itemText2.split("\n").map((line) => `> ${line}`).join("\n");
  return prompt.trim() === "" ? quote : `${quote}

${prompt}`;
}
function createPending() {
  let requests = [];
  return {
    /** @param {{ draft: string }} request */
    add(request, now = Date.now()) {
      requests = [...requests.filter((row) => now - row.at < PENDING_MS), { ...request, at: now }];
    },
    /** The fresh request this draft is, removed so it converts once; or undefined. */
    take(draft, now = Date.now()) {
      requests = requests.filter((row) => now - row.at < PENDING_MS);
      const index = requests.findIndex((row) => sameDraft(row.draft, draft));
      if (index < 0) return void 0;
      const [request] = requests.splice(index, 1);
      return request;
    },
    get size() {
      return requests.length;
    }
  };
}

// src/workspace.js
function recentWorkspace(workspaces, sessionsById) {
  let best;
  let bestTime = Number.NEGATIVE_INFINITY;
  for (const workspace of workspaces.items ?? []) {
    let latest = Number.NEGATIVE_INFINITY;
    for (const id of workspace.sessionIds ?? []) latest = Math.max(latest, sessionsById?.[id]?.updatedAt ?? Number.NEGATIVE_INFINITY);
    if (latest === Number.NEGATIVE_INFINITY) latest = Date.parse(workspace.createdAt) || 0;
    if (best === void 0 || latest > bestTime) {
      best = workspace.workspaceId;
      bestTime = latest;
    }
  }
  return best;
}

// src/client/chat.js
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function createChat({ ctx, t, sources }) {
  const pending = createPending();
  async function inputOf(session) {
    for (let i = 0; i < 50; i += 1) {
      const scope = ctx.get("sessions")?.scope(session);
      const conversation = scope?.get("conversation");
      if (scope !== void 0 && conversation !== void 0) return conversation.input.for(scope);
      await sleep(100);
    }
    return void 0;
  }
  async function chat(about, { prompt = "", session = "new" } = {}) {
    const workspace = ctx.get("uiWorkspace");
    if (workspace === void 0) throw new Error(t("noWorkspace"));
    const item = { ...about, sourceName: about.sourceName ?? sources.name(about.source) ?? about.source };
    const text = itemText(item);
    const summary = itemSummary(item);
    if (session === "new") {
      const draft = draftText(text, prompt);
      pending.add({ draft, text, summary, prompt });
      workspace.startSession(void 0, { prompt: draft, whenDraftExists: "replace" });
      return;
    }
    workspace.openSession(session);
    const input = await inputOf(session);
    if (input === void 0) throw new Error(t("noSession"));
    if (!input.insertQuote(text, summary)) throw new Error(t("busy"));
    const binding = ctx.get("sessions")?.binding(session);
    if (prompt.trim() !== "" && binding !== void 0) ctx.get("conversation")?.input.requestDraftInitialization(binding, { prompt, whenDraftExists: "append" });
  }
  async function start(about, { instruction, session = "new" }) {
    const sessions = ctx.get("sessions");
    if (sessions === void 0) throw new Error(t("noWorkspace"));
    const item = { ...about, sourceName: about.sourceName ?? sources.name(about.source) ?? about.source };
    let id = session;
    if (session === "new") {
      const workspaceId = recentWorkspace(ctx.get("workspaces")?.list.getSnapshot() ?? {}, sessions.list.getSnapshot().byId);
      if (workspaceId === void 0) throw new Error(t("noWorkspace"));
      id = await sessions.create({ workspaceId });
    }
    await sessions.using(id, { source: "uiActionsStep" }, async (reference) => {
      const { session: face } = await reference.ready;
      const result = await face.prompt([{ type: "text", text: stepMessage(instruction, item) }], "queue");
      if (!result.ok) throw new Error(result.error?.message ?? t("noSession"));
    });
    return id;
  }
  function open(session) {
    ctx.get("uiWorkspace")?.openSession(session);
  }
  function Adopter({ inputActions, useInput }) {
    const draft = useInput((state) => state.draft);
    const editable = useInput((state) => state.phase === "plain");
    (0, import_react3.useLayoutEffect)(() => {
      if (!editable || draft === "" || pending.size === 0) return;
      const request = pending.take(draft);
      if (request === void 0) return;
      inputActions.setDraft("");
      if (!inputActions.insertQuote(request.text, request.summary)) {
        inputActions.setDraft(request.draft);
        return;
      }
      if (request.prompt.trim() !== "") inputActions.insertText(request.prompt, inputActions.captureInsertion());
    }, [draft, editable]);
    return null;
  }
  return { chat, start, open, Adopter };
}

// src/client/sources.js
var import_react4 = require("react");
function createSources() {
  const entries = /* @__PURE__ */ new Map();
  const listeners = /* @__PURE__ */ new Set();
  let version = 0;
  const changed = () => {
    version += 1;
    for (const listener of listeners) listener();
  };
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const resolve = (entry) => entry === void 0 ? void 0 : { name: typeof entry.name === "function" ? entry.name() : entry.name, icon: entry.icon };
  return {
    /**
     * @param {{ id: string, name: string | (() => string), icon?: Function }} source - `id` is the package name; `icon` a component taking `{ size }`
     * @returns {() => void} unregisters
     */
    register(source) {
      if (typeof source?.id !== "string" || source.id === "") throw new TypeError("registerSource needs an id (the package name)");
      const entry = { name: source.name, icon: source.icon };
      entries.set(source.id, entry);
      changed();
      return () => {
        if (entries.get(source.id) === entry) {
          entries.delete(source.id);
          changed();
        }
      };
    },
    name: (id) => resolve(entries.get(id))?.name,
    useSource(id) {
      (0, import_react4.useSyncExternalStore)(subscribe, () => version);
      return resolve(entries.get(id));
    }
  };
}

// src/client/index.js
var NS = "dsh-ui-actions";
var name = "ui-actions";
var inject = ["slots", "locale"];
function apply(ctx) {
  ctx.effect(() => {
    const disposers = [];
    for (const [tag, file] of Object.entries(locales_default)) {
      try {
        disposers.push(ctx.locale.register(NS, tag, file.ui));
      } catch (error) {
        console.warn(`dsh-ui-actions: no ${tag} words`, error);
      }
    }
    return () => {
      for (const dispose of disposers) dispose();
    };
  }, "ui-actions: words");
  if (typeof document !== "undefined") {
    ctx.effect(() => {
      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.dataset.plugin = "@soffits/dsh-ui-actions";
      style.textContent = CSS;
      document.head.appendChild(style);
      return () => style.remove();
    }, "ui-actions: styles");
  }
  const t = ctx.locale.bind(NS);
  const useLanguage = () => {
    const subscribe = (0, import_react5.useCallback)((listener) => ctx.locale.subscribe(listener), []);
    return (0, import_react5.useSyncExternalStore)(subscribe, () => ctx.locale.getSnapshot().active);
  };
  const useWords = () => {
    useLanguage();
    return t;
  };
  const sources = createSources();
  const { chat, start, open, Adopter } = createChat({ ctx, t, sources });
  const { ActionBar, ActionButton } = createBar({ useWords, useLanguage, chat, start, open });
  const ItemCard = createCard({ sources });
  ctx.provide("uiActions", { ActionBar, ActionButton, chat, start, registerSource: (source) => sources.register(source) });
  ctx.inject(["uiConversation"], (scope) => {
    scope.effect(() => scope.uiConversation.userText.register(itemRule), "ui-actions: item rule");
  });
  ctx.slots.inject("conversation.user.text.node", () => ctx.slots.register({ name: "conversation.user.text.node", key: ITEM_NODE, priority: 100, locale: NS }, ItemCard));
  ctx.slots.inject("conversation.input.dock", () => ctx.slots.register({ name: "conversation.input.dock", id: "ui-actions.adopt", order: 100 }, Adopter));
}

    return module.exports
  },
})
