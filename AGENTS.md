# Maintainer notes

A DeepSeek Harness plugin with no Host behaviour: its Web client provides `ctx.uiActions` (action buttons, chat about an item) and draws items in sent messages. Users read `README.md`.

## Layout

- `src/item.js`: the item as model text (title, `[Item from <name> (<package>)]`, lines, `context:` JSON), reading it back, and the composer summary. Pure; exported as `./item`.
- `src/rule.js`: the UserText rule (order -20, before DSH's own quote rule) that turns an item quote into a `ui-actions-item` node and the blank lines around it into line breaks.
- `src/text.js`: text maps (`{ en, zh, … }`) shown in the person's language. `src/workspace.js`: where a step's new conversation goes (the workspace with the latest activity).
- `src/pending.js`: new conversations waiting for their composer (DSH's `startSession` takes text only and doesn't say which session it opened).
- `src/client/`: `index.js` (apply: words, styles, the service, slot registrations), `bar.js` (buttons), `chat.js` (opening a conversation; the composer member that swaps a seeded draft for the chip), `card.js` (the card in messages), `sources.js` (plugin names and icons), `look.js` (CSS, glyphs).
- `client.js`: built by `npm run build` from `src/client/` and `locale/*.json` (esbuild; `react` comes from DSH's loader). Committed so a linked checkout runs as it is; `npm run check` fails when it is stale.
- `index.js`: an empty Host row; DSH serves a package's client only for a loaded row.

## Rules

- The item text is read by models and kept in old messages: change it only additively, and keep `parseItem` reading every format ever sent.
- No assistant name and no language in code: words come from `locale/<tag>.json`; labels with a name come from the offering plugin's data.
- Client scripts run as classic scripts in one global scope: everything stays inside the loader factory (the build wraps it).
- DSH seams used: `insertQuote(text, summary)` (the summary from 0.2.2-rc.2; before that the chip shows the text), `uiWorkspace.startSession` / `openSession`, `sessions.create` + `sessions.using` → `session.prompt` (steps send as the person), `uiConversation.userText`, the slots `conversation.user.text.node` and `conversation.input.dock`. Check them against each new DSH release.

## Checks

`npm run check` (built client fresh, syntax) and `npm test` (item format, rule, pending, the built bundle and its words). Before a release, try it in a throwaway DSH home in a browser at phone and desktop widths, in two languages.

## Git

Conventional Commits, one-line subjects, squash merges. Versions follow semver from the commit types (below 1.0: feat or breaking → minor, fix → patch). Releases: bump `package.json` and `CHANGELOG.md`, build, merge, then pushing the tag `vX.Y.Z` runs `.github/workflows/publish.yml`, which publishes to npm by trusted publishing (OIDC, with provenance, no stored token; the package's trusted publisher on npmjs.com names this repo and `publish.yml`, so renaming either breaks it) and creates the GitHub release. Don't publish by hand.
