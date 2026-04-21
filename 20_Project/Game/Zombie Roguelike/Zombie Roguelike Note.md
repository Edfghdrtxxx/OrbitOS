---
type: note
project: "[[Zombie Roguelike]]"
tags: [cheatsheet, commands]
---
# Zombie Roguelike — Human Operation Notes

Quick command reference for running the project manually. All npm commands run from `app/`.

## Setup (first time)
```bash
cd "D:/obsidian/OrbitOS/20_Project/Game/Zombie Roguelike/app"
npm install
```

## Development
```bash
cd "D:/obsidian/OrbitOS/20_Project/Game/Zombie Roguelike/app"
npm run dev          # -> open http://localhost:5173 in your browser
```

## Build (single-file HTML)
```bash
cd "D:/obsidian/OrbitOS/20_Project/Game/Zombie Roguelike/app"
npm run build        # -> app/dist/index.html  (~13 MB, self-contained)
npm run preview      # -> http://localhost:4173  (Vite default; serves app/dist/)
```
**Deliverable:** `app/dist/index.html` — double-click to play, no hosting needed.

## Lint & Format
```bash
cd "D:/obsidian/OrbitOS/20_Project/Game/Zombie Roguelike/app"
npm run lint         # no file output; prints issues to terminal
npm run format       # rewrites files under app/src/ in place
```

## Desktop (Tauri 2)
```bash
cd "D:/obsidian/OrbitOS/20_Project/Game/Zombie Roguelike/app"
npm run tauri:dev    # -> launches a dev window (live reload)
npm run tauri:build  # -> app/src-tauri/target/release/bundle/
```
**Deliverable (Windows):**
- Executable: `app/src-tauri/target/release/Zombie Roguelike.exe`
- Installers: `app/src-tauri/target/release/bundle/msi/*.msi` and `.../nsis/*-setup.exe`

## Mobile (Capacitor 6)
```bash
cd "D:/obsidian/OrbitOS/20_Project/Game/Zombie Roguelike/app"
# First time only: npx cap add android  &&  npx cap add ios
npm run cap:sync           # copies app/dist/ into app/android/ and app/ios/
npm run cap:open:android   # -> opens Android Studio; Build > Build APK(s)
npm run cap:open:ios       # -> opens Xcode; Product > Archive
```
**Deliverables (produced inside the IDEs, not by npm):**
- Android APK: `app/android/app/build/outputs/apk/debug/app-debug.apk` (or `release/app-release.apk`)
- iOS IPA: exported from Xcode Organizer after Archive

## Verify-before-done checklist
1. `npm run build` passes (tsc strict mode, no unused locals/params).
2. `npm run dev` starts cleanly — watch the dev server log for errors.
3. Manual gameplay check — no automated tests exist.

## Don't
- Don't edit `zombie_roguelike.html` at project root (stale standalone export).
- Don't re-add Google Fonts CDN `<link>` tags (breaks offline-playable guarantee).
- Don't lower `build.assetsInlineLimit` in `vite.config.ts` (would split the build).
- Don't re-enable `vite-plugin-pwa` (abandoned).
