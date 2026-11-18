# Changelog

## 0.2.1

A labelled `done` keeps its words on a compact row: it is a choice (one answer of a question, such as "White" or "Oak"), and as a bare check mark several of them looked the same.

## 0.2.0

- Suggested next steps: a `step` action is a button whose label is a concrete next step; one tap records the press with the plugin, then sends the step and the item into a new conversation (or a given one) as the person, without a draft, and the button turns into a link to that conversation. Steps come first, look different from the fixed buttons, and wrap to full width on phones.
- Labels and prompts may be maps from language tag to text; the person's language is shown, then its primary tag, then English.
- `ActionBar` takes `part` (`steps` or `buttons`) for layouts that place them apart, and children for the page's own controls on the same line.
- `ctx.uiActions.start(about, { instruction, session })` sends like a step from a plugin's own code.

## 0.1.0

- First release: the action bar for plugin pages (ask, done, snooze, event, link) as one client service, `ctx.uiActions`, instead of a copy in each plugin.
- "Ask" opens a conversation with the item attached as a removable card in the message box (DSH's own quote chip, showing the item's title and first line); the person writes beside it. The sent message shows the same card above their words, with the offering plugin's icon and name. The model gets the item as a short quote: its title, a marker naming the plugin, the lines shown, and its ids as one line of JSON.
- Words in `locale/<tag>.json` (English, French, Chinese); a new language is one file.
