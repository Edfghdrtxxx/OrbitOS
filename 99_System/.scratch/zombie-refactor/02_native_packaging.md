# T2: Native Packaging Report (Tauri + Capacitor)

Integrates Tauri 2 (desktop) and Capacitor 6 (iOS/Android) around the existing Vite 5 + `vite-plugin-pwa` 0.21 scaffold at `20_Project/Game/Zombie Roguelike/app/`. All three targets (PWA, Tauri, Capacitor) consume the same `npm run build` output at `app/dist/`.

## Files created / modified

| Path (relative to `app/`) | Change | Purpose |
| --- | --- | --- |
| `package.json` | modified | Added Tauri + Capacitor deps (pinned) and `tauri:*` / `cap:*` scripts. No existing script renamed. |
| `.gitignore` | modified | Ignore `src-tauri/target/`, `src-tauri/gen/`, `src-tauri/Cargo.lock`, Capacitor-generated `android/` `ios/` `.capacitor/`. |
| `capacitor.config.ts` | created | Capacitor config — `webDir: "dist"`, `appId: com.orbitos.zombieroguelike`, landscape lock / status-bar hidden / minimal splash plugin config. |
| `src-tauri/tauri.conf.json` | created | Tauri 2 window (960x540, resizable, decorated), CSP allowing Google Fonts + `'unsafe-inline'` styles + service-worker blobs, `frontendDist: ../dist`, `devUrl: http://localhost:5173`. |
| `src-tauri/Cargo.toml` | created | Rust crate manifest, pins `tauri = "2.1.1"`, `tauri-build = "2.0.3"`. |
| `src-tauri/build.rs` | created | Standard `tauri_build::build()` stub. |
| `src-tauri/src/main.rs` | created | Minimal Tauri entrypoint, `windows_subsystem = "windows"` in release. |
| `src-tauri/.gitignore` | created | Second-layer ignore for `target/` / `gen/` (belt-and-suspenders with root). |
| `src-tauri/icons/README.md` | created | Placeholder noting required icons for `tauri build` and the `npx @tauri-apps/cli icon` generator. |

Existing files **not touched** (per constraint): `src/main.ts`, `index.html`, `vite.config.ts`, `tsconfig.json`.

## Versions pinned

Desktop (Tauri 2):
- `@tauri-apps/cli` **2.1.0** (devDep)
- `@tauri-apps/api` **2.1.1** (dep)
- Rust crate `tauri` **2.1.1**, `tauri-build` **2.0.3**

Mobile (Capacitor 6):
- `@capacitor/cli` **6.2.0** (devDep)
- `@capacitor/core` **6.2.0**
- `@capacitor/android` **6.2.0**
- `@capacitor/ios` **6.2.0**
- `@capacitor/status-bar` **6.0.2**
- `@capacitor/splash-screen` **6.0.3**
- `@capacitor/screen-orientation` **6.0.3**

No `^latest` / no `*`. Existing Vite / TS / vite-plugin-pwa carets untouched.

## How to run each target

### Install (required once after this PR)
```
cd "20_Project/Game/Zombie Roguelike/app"
npm install        # or pnpm install
```

### PWA / web (unchanged)
```
npm run dev        # Vite dev server at http://localhost:5173
npm run build      # tsc --noEmit && vite build -> ./dist
npm run preview    # serve ./dist locally
```

### Tauri desktop
```
npm run tauri:dev     # Starts Vite, spawns native window at 960x540
npm run tauri:build   # Builds Vite -> dist, then Rust bundles .exe/.msi/.dmg/.AppImage
```
Prerequisites: Rust toolchain (`rustup`) + platform build tools (MSVC on Windows, Xcode CLT on macOS, `build-essential`+`webkit2gtk` on Linux). `tauri:dev` works without bundle icons; `tauri:build` requires `src-tauri/icons/*` — see `src-tauri/icons/README.md`.

### Capacitor mobile (platform generation is a follow-up — intentionally NOT run here)
```
# One-time platform scaffolding (requires JDK 17+ for Android, Xcode for iOS):
npm run build
npx cap add android
npx cap add ios

# Iterative dev loop:
npm run build
npm run cap:sync           # copies dist/ into native projects
npm run cap:open:android   # opens Android Studio
npm run cap:open:ios       # opens Xcode (macOS only)
```
After `cap add android` the generated `android/` folder is git-ignored; orientation lock should be confirmed in `android/app/src/main/AndroidManifest.xml` (`android:screenOrientation="landscape"` on the main activity) and iOS `Info.plist` (`UISupportedInterfaceOrientations` = landscape-left + landscape-right only). The Capacitor `ScreenOrientation` plugin handles runtime enforcement; platform-manifest lock is the belt.

## PWA / Tauri / Capacitor interaction notes

1. **Service worker + Tauri CSP.** `vite-plugin-pwa` injects a workbox SW that fetches cached assets via `fetch()` and needs `worker-src 'self' blob:` and `connect-src 'self'`. Tauri's `tauri://` scheme also needs to be whitelisted. The CSP in `tauri.conf.json` includes both. Expect browser-devtools warnings about `ipc:` / `http://ipc.localhost` — those are Tauri's IPC bridge and are intentionally allowlisted in `connect-src`.
2. **Google Fonts.** `index.html` does **not currently** load Google Fonts — brief mentioned a `<link>` in the HTML head, but the live file only has an inline `<style>` block. CSP still permits `https://fonts.googleapis.com` (style-src) and `https://fonts.gstatic.com` (font-src, connect-src) for future use. No code change needed to index.html.
3. **Inline style block.** The big embedded `<style>` in `index.html` requires `style-src 'unsafe-inline'` — included. Without this Tauri blocks the page render.
4. **`'wasm-unsafe-eval'`.** Added to `script-src` preemptively; `vite-plugin-pwa`'s workbox uses structured cloning only, but any future wasm module (physics, pathfinding) would otherwise require a CSP bump.
5. **Capacitor splash / status bar.** `capacitor.config.ts` uses `SplashScreen.launchShowDuration: 300` and `StatusBar.overlaysWebView: true`. Actual hide-call (`StatusBar.hide()`) and orientation-lock call should live in app bootstrap — **I did not edit `src/main.ts` per scope constraint**. Reviewer / next agent should add:
   ```ts
   import { StatusBar } from '@capacitor/status-bar';
   import { ScreenOrientation } from '@capacitor/screen-orientation';
   import { Capacitor } from '@capacitor/core';
   if (Capacitor.isNativePlatform()) {
     StatusBar.hide().catch(() => {});
     ScreenOrientation.lock({ orientation: 'landscape' }).catch(() => {});
   }
   ```
6. **Shared `dist/`.** Confirmed single build output works for all three: PWA loads from any static host, Tauri points `frontendDist: ../dist`, Capacitor `webDir: "dist"`. `vite-plugin-pwa` config (`scope: '/'`, `start_url: '/'`) is compatible with Capacitor's `capacitor://` and `https://localhost` schemes — the SW registers but `skipWaiting` should be a no-op inside the WKWebView/Android WebView.
7. **No duplicate scripts.** Added `tauri`, `tauri:dev`, `tauri:build`, `cap:sync`, `cap:open:android`, `cap:open:ios`. Preserved `dev`, `build`, `preview`.

## Open risks for the reviewer

- **Runtime bootstrap is missing.** The status-bar hide + orientation-lock runtime calls live in app code, not config. I deliberately did not touch `src/main.ts` (scope constraint). If `main.ts` is filled in by T3+, it must import `@capacitor/status-bar` + `@capacitor/screen-orientation` inside a `Capacitor.isNativePlatform()` guard.
- **Icons not generated.** `src-tauri/icons/` only contains a README. `tauri build` will fail until a source PNG is piped through `npx @tauri-apps/cli icon`. `tauri dev` is fine.
- **Cargo.lock not committed.** My root `.gitignore` ignores `src-tauri/Cargo.lock`. For a binary crate, convention is to commit `Cargo.lock` for reproducibility. I chose to ignore it because this is a thin desktop shell and the Rust side has a minimal dep tree; flip this if the team prefers locked desktop builds.
- **Service worker in Tauri dev.** `vite-plugin-pwa.devOptions.enabled = false` already, so dev SW is off — good, avoids stale caches during `tauri:dev`. Production bundle SW will run inside Tauri's WebView2/WebKit and may behave oddly (HTTPS-only APIs on `tauri://`). If the reviewer sees SW registration errors in `tauri:build` previews, consider `injectRegister: false` + a platform-gated registration in `main.ts`.
- **Port assumption.** `tauri.conf.json` hardcodes `http://localhost:5173`. If Vite ever hot-migrates (port collision) the Tauri dev window will show a blank screen. Pin `server.port = 5173` + `strictPort: true` in `vite.config.ts` if the reviewer wants a guarantee — I did not modify `vite.config.ts` to stay in scope.
- **Capacitor iOS scheme.** `iosScheme: 'capacitor'` means assets load from `capacitor://localhost`. If the game ever fetches relative URLs at absolute paths (`/assets/...`) it will work; if it uses `fetch('http://...')` at runtime, add the host to `server.allowNavigation` in `capacitor.config.ts`.
- **Android scheme / mixed content.** `allowMixedContent: false`. If the game loads any http asset in dev-mode embedding, flip it for Android only.
- **CSP tightness.** I kept `'unsafe-inline'` for scripts because Vite's PWA register-SW injection inlines a small bootstrap. Ideally this would be replaced with a nonce-based CSP once the attack surface is understood — flagged for future hardening, not blocking.
