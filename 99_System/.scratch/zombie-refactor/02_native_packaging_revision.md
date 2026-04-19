# T2 Revision Report (Native Packaging)

Addresses `review_02.md` verdict `needs-revision` on commit `f7b17690`. Work applied directly to `main` as additional commits; history untouched.

## Files changed

| Path (relative to `app/`) | Change | One-line reason |
| --- | --- | --- |
| `src-tauri/src/lib.rs` | **created** | Provides the `pub fn run()` entry point that the `[lib]` target in `Cargo.toml` declared but did not have on disk — the canonical Tauri 2 mobile-ready layout. |
| `src-tauri/src/main.rs` | modified | Reduced to a thin wrapper calling `zombie_roguelike_lib::run()`; keeps the `windows_subsystem` attribute on the binary. |
| `capacitor.config.ts` | modified | Removed the Capacitor-5-deprecated `bundledWebRuntime: false` field; removed the non-existent `ScreenOrientation.lockOrientation` plugin key (replaced with a comment pointing to the runtime API). |
| `.gitignore` (root of `app/`) | modified | Dropped `src-tauri/Cargo.lock` from ignore list — Tauri application crates are binaries, so locking transitive deps is the Rust convention. |
| `package-lock.json` | **deleted (git rm)** | Stale relative to the updated `package.json` (7 new deps unreflected). A regenerated lockfile will appear on the next `npm install`. |

## Review findings resolved

- **B1 (blocker) — `[lib]` without `src/lib.rs`.** Resolved by creating `src/lib.rs` with a `pub fn run()` annotated `#[cfg_attr(mobile, tauri::mobile_entry_point)]`, and shrinking `main.rs` to `zombie_roguelike_lib::run()`. Matches the `[lib] name = "zombie_roguelike_lib"` already in `Cargo.toml`. This is the idiomatic Tauri 2 template layout — also unblocks future `tauri android init` / `tauri ios init` without further restructuring.
- **N1 — stale `package-lock.json`.** Resolved by deleting the tracked lockfile. The next contributor's `npm install` regenerates it against the new dep set.
- **N2 — deprecated `bundledWebRuntime`.** Resolved by removing the field. Capacitor 6 types no longer include it.
- **N5 — dead `ScreenOrientation.lockOrientation` config key.** Resolved by deleting the key; replaced with an inline comment documenting that the lock happens at runtime via `ScreenOrientation.lock({ orientation: 'landscape' })` in the app bootstrap (T3 scope).
- **N7 — `Cargo.lock` ignore convention.** Resolved by removing `src-tauri/Cargo.lock` from the root `.gitignore` and adding a comment explaining why it is now tracked. The file itself will be committed on the next Rust build.

## Review findings left open (with reason)

- **N3 — untested runtime CSP.** Left open by instruction. No way to verify without launching Tauri; flagged for T3 smoke test.
- **N4 — ambiguous "fullscreen-capable".** Left open by instruction. Current reading (`fullscreen: false` + `resizable: true` so user can toggle) is acceptable; T3 / orchestrator can revisit if launch-fullscreen is truly required.
- **N6 — `StatusBar.overlaysWebView: true` semantics.** Left open. Orthogonal to the hide call; the actual hide happens at runtime in T3's `main.ts` bootstrap per scope constraint.
- **N8 — redundant `src-tauri/.gitignore`.** Left open. Not in the mandated cleanup list; harmless belt-and-suspenders.
- **Dispatch vs. reality mismatch ("~1,200-line style block" claim).** Left open — an orchestrator-level observation, not a T2 artifact to fix.

## Constraints honored

- `app/src/main.ts`, `app/index.html`, `app/vite.config.ts` — untouched.
- No `npm install`, `cap add`, or `tauri init` executed.
- `src-tauri/.gitignore` touched? No — its `Cargo.lock.bak` entry is not a real concern and was not in the cheap-fix list.

## Post-revision expected state

- `cargo check` (if run) resolves both the binary and the `zombie_roguelike_lib` library targets. B1 should no longer fire.
- `tsc --noEmit` on `capacitor.config.ts` (if triggered) will not emit excess-property warnings for `bundledWebRuntime` or `ScreenOrientation.lockOrientation`.
- First `npm install` regenerates a lockfile matching the 7 new deps; committing that lockfile is a follow-up the user can do after install.
- First `cargo build` populates `Cargo.lock`, which will be committed (no longer ignored).
