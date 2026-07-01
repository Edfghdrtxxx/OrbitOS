---
type: project
status: active
area: null
path: C:\Users\petro\token-monitor
---
Live token/cost tray widget (`Javis603/token-monitor`) for Claude Code, Codex, OpenCode, etc. Deployed 2026-07-01 as a local Electron app, **local-only mode** (no hub, no network sync). Codebase lives outside the vault at the `path` above.

## Run / Stop
- **Relaunch:** `cd C:\Users\petro\token-monitor; npm start`
- **Stop:** `Get-Process electron | Stop-Process`  (or tray icon → Quit)
- Lives in the **system tray** (no taskbar window). Tie-to-session: if launched from a Claude session it dies with it — use the relaunch command to run standalone.

## Setup gotcha
- Node ≥22.13 required. `npm install` works, but Electron's runtime binary won't download on the `npmmirror` registry — fix once with:
  `$env:ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/"; node node_modules\electron\install.js`

## Security (deployed as-is, not hardened)
- ⛔ Avoid Settings → *Download tokscale from npm* — downloads & executes a binary (risk H1). Bundled `tokscale` works without it.
- API keys entered in Settings are stored **plaintext** in `%APPDATA%\Token Monitor\settings.json`.
- No hub deployed. Before exposing a hub publicly: constant-time secret compare, drop `?secret=` param, lock CORS, cap request body (H2–H5).
