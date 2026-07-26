# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-player top-down zombie roguelike. Vanilla TypeScript + HTML Canvas, no game engine or UI framework. Primary distribution is a **single self-contained HTML file** (`dist/index.html`, ~13 MB) built via `vite-plugin-singlefile` — double-click to play, no hosting. Tauri 2 (desktop) and Capacitor 6 (mobile) wrappers are secondary.

## Source of truth

- **Live game code:** `app/src/legacy/game.ts` (~6,656-line transitional monolith).
- `zombie_roguelike.html` at the project root is an **older standalone export**, not the current source. Do not edit it when fixing game behavior.
- The monolith is wrapped by `app/src/main.ts` via `bootLegacyGame()`. New modules go in `app/src/content/` or `app/src/util/`.

## Working in the monolith

- Edit `legacy/game.ts` in place. When a change is naturally isolated (new content, a pure helper), extract it to `src/content/` or `src/util/` — don't force refactors that bloat the diff.
- Shared types live in `app/src/types.ts`; constants in `app/src/constants.ts`.

## Build & verify

All commands run from `app/`:

- `npm run dev` — Vite dev server on :5173
- `npm run build` — `tsc` check + `vite build` to `app/dist/`
- `npm run lint` — ESLint (typescript-eslint, flat config at `eslint.config.js`)
- `npm run format` — Prettier write (config at `.prettierrc.json`)
- `npm run tauri:dev` / `tauri:build` — desktop
- `npm run cap:sync` / `cap:open:android` / `cap:open:ios` — mobile

**Before marking a task done:** run `npm run build`, then `npm run dev` and check the dev server log for errors. No automated tests exist — gameplay verification is manual and up to the user.

## Gotchas

- `tsconfig.json` has `strict`, `noUnusedLocals`, and `noUnusedParameters` — any dead import or unused parameter breaks the build.
- Fonts are inlined from `@fontsource` (Bangers/Nunito Latin + Noto Sans SC/ZCOOL KuaiLe chinese-simplified) via imports in `src/main.ts`. Do **not** re-add Google Fonts CDN `<link>` tags — it would break the offline-playable guarantee.
- `build.assetsInlineLimit` is set to 100 MB in `vite.config.ts` so that all woff2s get base64-inlined by `vite-plugin-singlefile`. Lowering it will split the build into multiple files.
- PWA is abandoned (not deferred): `vite-plugin-pwa` is still in devDependencies but no longer wired in. Do not re-enable it.
- Primary deploy target is the single-file HTML. Tauri and Capacitor builds pick up web changes automatically unless native APIs are touched.
- `app/dist/` and `app/src-tauri/Cargo.lock` are committed intentionally.

## Git

This project lives inside the parent OrbitOS vault repo (`/Users/Reid Hu/OrbitOS` on Mac; treat vault root as git root on any host). There is no nested `.git` here. Unscoped `git` commands operate on the full vault — always pass explicit paths when staging or diffing project files.
