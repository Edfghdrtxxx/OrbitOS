needs-revision

## Scope audited

Commit `f7b17690` on `main`. 9 files under `20_Project/Game/Zombie Roguelike/app/`: `.gitignore`, `capacitor.config.ts`, `package.json`, `src-tauri/.gitignore`, `src-tauri/Cargo.toml`, `src-tauri/build.rs`, `src-tauri/icons/README.md`, `src-tauri/src/main.rs`, `src-tauri/tauri.conf.json`. Scratch report `02_native_packaging.md` read in full. Untouched-file claim verified via `git diff f7b17690^ f7b17690 -- src/main.ts index.html vite.config.ts tsconfig.json` (empty — confirmed unmodified). `git ls-tree` confirms no `target/`, `node_modules/`, `android/`, `ios/`, or `Cargo.lock` committed.

## Findings

### Blocker

**B1. `Cargo.toml` declares a `[lib]` target but `src/lib.rs` does not exist.** (`src-tauri/Cargo.toml` lines 9-11; `src-tauri/src/` contains only `main.rs`.)

```
[lib]
name = "zombie_roguelike_lib"
crate-type = ["staticlib", "cdylib", "rlib"]
```

Cargo's default lib path is `src/lib.rs`. With an explicit `[lib]` section and no `path = "..."` override, `cargo build` will error with *"can't find library `zombie_roguelike_lib`, rename file to `src/lib.rs` or specify lib.path"*. This breaks `npm run tauri:dev` and `tauri:build` out of the gate.

Two valid fixes — pick one and justify:
- **Drop the `[lib]` section entirely** if this is a desktop-only binary shell. Tauri 2 still works; mobile (Tauri's `tauri android init` / `tauri ios init`) would need lib target added later anyway.
- **Add a `src/lib.rs`** with the standard Tauri 2 mobile-ready pattern (a `pub fn run()` exported with `#[cfg_attr(mobile, tauri::mobile_entry_point)]`) and reduce `main.rs` to a thin wrapper calling `zombie_roguelike_lib::run()`. This is the idiomatic Tauri 2 template layout and is required if mobile targets will ever be added through `tauri android init`.

Either way, the current state won't compile. Flag confidence: **high** — I read the Cargo manifest and the directory listing directly; I have not actually invoked `cargo build`, but Cargo's behavior with a `[lib]` section lacking `src/lib.rs` is deterministic.

### Needs attention (non-blocking, but worth resolving before T3)

**N1. `package-lock.json` not regenerated after adding 7 new deps.** The commit modifies `package.json` (adds `@tauri-apps/cli`, `@tauri-apps/api`, `@capacitor/cli`, `@capacitor/core`, `@capacitor/android`, `@capacitor/ios`, `@capacitor/status-bar`, `@capacitor/splash-screen`, `@capacitor/screen-orientation`) but does not update `package-lock.json`. The scratch report acknowledges this as a required follow-up (`npm install`), but an out-of-sync `package-lock.json` on `main` will trigger CI/`npm ci` failures and drift for the next contributor. Recommend running `npm install` and committing the updated lockfile in a follow-up, or explicitly deleting `package-lock.json` to force regeneration.

**N2. `capacitor.config.ts` uses `bundledWebRuntime: false` (line 7).** This field was **removed in Capacitor 5** (was only meaningful for Cap 3 / legacy cordova-bridge). With Cap 6 the TypeScript types in `@capacitor/cli` no longer include this key, so `tsc` (invoked by `npm run build`'s `tsc --noEmit`) may emit an excess-property error when compiling `capacitor.config.ts` — though since the file is not imported by the Vite entry graph it likely won't be type-checked by `tsc --noEmit` against the default `tsconfig.json` include globs. Confidence: **medium** — depends on `tsconfig.json` includes which I did not inspect. Safe fix: delete the line.

**N3. Tauri CSP permits Google Fonts domains + inline styles as specified, but runtime untested.** CSP string (`tauri.conf.json` line 29):

```
default-src 'self' tauri:; img-src 'self' data: blob: tauri:; font-src 'self' https://fonts.gstatic.com data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' tauri:; connect-src 'self' ipc: http://ipc.localhost tauri: ws: wss: https://fonts.gstatic.com https://fonts.googleapis.com; worker-src 'self' blob:; manifest-src 'self'
```

Syntactically contains every directive the dispatch required: `'unsafe-inline'` on `style-src`, `fonts.googleapis.com` on `style-src` + `connect-src`, `fonts.gstatic.com` on `font-src` + `connect-src`, `worker-src 'self' blob:` for the PWA service worker, `ipc:` + `http://ipc.localhost` for the Tauri IPC bridge, `'wasm-unsafe-eval'` preemptively. I have NOT launched `tauri dev` so cannot confirm the game's specific inline-style block (implementer notes ~1,200 lines embedded `<style>`, though `index.html` at HEAD only shows ~30 lines of inline CSS — the "1,200-line embedded style block" claim in the original dispatch is not substantiated by the current `index.html`). Runtime CSP enforcement in a WebView2/WKWebView is the only authoritative check. **Non-blocking; flagged for T3 smoke test.**

**N4. Tauri window config: "fullscreen-capable" interpreted as `"fullscreen": false` default + `resizable: true`.** (`tauri.conf.json` lines 13-26.) The user can toggle fullscreen at runtime via OS shortcuts. Acceptable reading of the dispatch, but if the spec meant "launches fullscreen" rather than "can enter fullscreen", this is wrong. Recommend confirming with the orchestrator; a runtime `.set_fullscreen(true)` in `main.rs` setup hook is the typical "launch fullscreen" pattern.

**N5. `StatusBar.hide()` and `ScreenOrientation.lock()` are documented as T3 bootstrap work, not wired here.** (`capacitor.config.ts` lines 34-44; scratch report Open Risks section.) The config-level `lockOrientation: 'landscape'` under the `ScreenOrientation` plugin block is **not a recognized Capacitor plugin option** — the `@capacitor/screen-orientation` plugin has no config keys, only runtime APIs. This key is silently ignored at build time. Functionally harmless (report explicitly says runtime call must live in `main.ts`) but the config field is dead code and should be removed to avoid misleading future readers.

**N6. Capacitor `StatusBar.overlaysWebView: true`.** This keeps the status bar visible but lets the web content render underneath it. Dispatch asked for "status bar hidden". If the intent is truly hidden, `overlaysWebView` is orthogonal — the actual hide happens via runtime `StatusBar.hide()`. Current config is consistent with the report's plan; just noting the dispatch's phrasing is ambiguous and only runtime calls actually satisfy it.

**N7. Root `.gitignore` ignores `src-tauri/Cargo.lock`.** (`app/.gitignore` line 10.) The scratch report Open Risk #3 already flags this and asks the reviewer to decide. For a binary Tauri app (the end artifact is a distributable game executable), **committing `Cargo.lock` is the Rust convention** — it locks transitive dep versions so `tauri build` is reproducible across contributors and CI. For library crates the opposite applies. Recommend flipping to track `Cargo.lock`. Non-blocking but worth resolving before the first desktop release.

**N8. Redundant `src-tauri/.gitignore`.** (`app/src-tauri/.gitignore`.) The root `.gitignore` already covers `src-tauri/target/` and `src-tauri/gen/`. The nested file is labeled "belt-and-suspenders" in the report. It also ignores `Cargo.lock.bak` (non-standard / unclear purpose). Not harmful, just noise.

### Confidence summary

- **Verified by file inspection:** pinned versions, npm scripts, window dimensions, CSP string contents, `webDir`/`appId`/`appName`, `frontendDist`/`devUrl`, `.gitignore` coverage, untouched `src/main.ts` + `index.html` + `vite.config.ts` + `tsconfig.json` (via `git diff` — empty), absence of committed `target/` / `node_modules/` / `Cargo.lock` / `android/` / `ios/` (via `git ls-tree`).
- **Inferred but not executed:** CSP runtime behavior, `tsc --noEmit` of `capacitor.config.ts`, whether `cargo build` emits the expected "can't find library" error (high confidence from Cargo semantics, but not empirically run).
- **Contradicted by inspection:** dispatch's "~1,200-line embedded `<style>` block" — actual `index.html` at HEAD has ~30 lines of inline CSS. Either the game's HTML hasn't been embedded yet, or the dispatch was based on a different source file. Non-blocking for this review's scope but worth flagging back to the orchestrator.

### Summary of required changes before re-review

1. Fix the `[lib]` / `lib.rs` mismatch (B1) — either remove `[lib]` or add the standard Tauri 2 `src/lib.rs` + mobile entry point.

Everything else (N1-N8) is recommended cleanup; none alone blocks approval.
