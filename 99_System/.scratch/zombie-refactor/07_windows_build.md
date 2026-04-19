# T7 — Windows .exe build (Tauri 2)

**Status:** SUCCESS
**Date:** 2026-04-19
**Working dir:** `D:\obsidian\OrbitOS\20_Project\Game\Zombie Roguelike\app\`

## Summary

Tauri 2 packaged three Windows artifacts:

- **Standalone .exe** — `src-tauri/target/release/zombie-roguelike.exe` (7.91 MB) — PE32+ GUI executable
- **NSIS installer** — `src-tauri/target/release/bundle/nsis/Zombie Roguelike_0.1.0_x64-setup.exe` (1.75 MB)
- **MSI installer** — `src-tauri/target/release/bundle/msi/Zombie Roguelike_0.1.0_x64_en-US.msi` (2.66 MB)

## Icon generation

**Method:** PowerShell `System.Drawing` generated a 1024×1024 placeholder PNG at `src-tauri/icons/source.png` — dark slate (RGB 40,40,50) background with a lime-green bold "Z" centered. Then fed through `npx @tauri-apps/cli icon src-tauri/icons/source.png`.

**Files produced in `src-tauri/icons/`:**

| File | Size |
| --- | --- |
| source.png (placeholder) | 11,127 B |
| 32x32.png | 528 B |
| 64x64.png | 878 B |
| 128x128.png | 1,494 B |
| 128x128@2x.png | 2,587 B |
| icon.png | 5,909 B |
| icon.ico | 5,862 B |
| icon.icns | 31,741 B |
| Square30x30Logo.png → Square310x310Logo.png | 492–3,022 B (9 Windows Store sizes) |
| StoreLogo.png | 729 B |
| android/mipmap-*/ic_launcher*.png | 3 PNGs × 5 densities |
| ios/AppIcon-*.png | 18 iOS variants |

`tauri.conf.json` `bundle.icon` array already referenced the correct paths — no edits needed.

## Build steps taken

1. `npm install` (Tauri CLI was not in `node_modules` initially) — 105 packages, 7 s.
2. `npx @tauri-apps/cli icon src-tauri/icons/source.png` — generated all platform icons.
3. First `npm run tauri:build` **failed** — transient Cargo deps (`darling 0.23.0`, `serde_with 3.18.0`, `time 0.3.47`, etc.) required rustc ≥ 1.88.0 but local toolchain was 1.87.0.
4. **Remediation:** `rustup update stable` → rustc 1.87.0 → **1.95.0**. No source edits.
5. Re-ran `npm run tauri:build` — compile took **3 min 09 s** release profile. Vite bundle built in 456 ms. Tauri then produced MSI (via downloaded wix3141) and NSIS (via downloaded nsis-3) installers.

## Build output (key lines)

```
vite v5.4.21 building for production...
✓ 15 modules transformed.
dist/index.html                 18.21 kB │ gzip:  4.45 kB
dist/assets/index-D0K_9OTM.css  29.49 kB │ gzip:  6.36 kB
dist/assets/index-D028H1Dh.js  146.81 kB │ gzip: 44.95 kB
✓ built in 456ms

PWA v0.21.2 — 6 precache entries (192.79 KiB), dist/sw.js + workbox-*.js

   Compiling zombie-roguelike v0.1.0 (…\src-tauri)
   Compiling tauri-macros v2.5.5
   Compiling tao v0.34.8
   Compiling webview2-com v0.38.2
    Finished `release` profile [optimized] target(s) in 3m 09s
    Built application at: …\target\release\zombie-roguelike.exe
    Info Verifying wix package
    Downloading https://github.com/wixtoolset/wix3/releases/download/wix3141rtm/wix314-binaries.zip
    Running light to produce …\bundle\msi\Zombie Roguelike_0.1.0_x64_en-US.msi
    Info Verifying NSIS package
    Downloading https://github.com/tauri-apps/binary-releases/releases/download/nsis-3/nsis-3.zip
    Downloading https://github.com/tauri-apps/nsis-tauri-utils/releases/download/nsis_tauri_utils-v0.4.1/nsis_tauri_utils.dll
    Running makensis.exe to produce …\bundle\nsis\Zombie Roguelike_0.1.0_x64-setup.exe
    Finished 2 bundles at:
        …\bundle\msi\Zombie Roguelike_0.1.0_x64_en-US.msi
        …\bundle\nsis\Zombie Roguelike_0.1.0_x64-setup.exe
```

Full log archived at `D:\obsidian\OrbitOS\99_System\.scratch\zombie-refactor\build-log.txt`.

## Sanity verification

```
$ file zombie-roguelike.exe
PE32+ executable for MS Windows 6.00 (GUI), x86-64, 6 sections
```

Non-zero size (8,294,912 B = 7.91 MB), correct architecture (x86-64), correct subsystem (GUI).

## First-launch instructions for user

**Option A — standalone .exe (portable, no install):**
1. Copy `D:\obsidian\OrbitOS\20_Project\Game\Zombie Roguelike\app\src-tauri\target\release\zombie-roguelike.exe` to any location.
2. Double-click — a 1220×720 Tauri window titled "Zombie Roguelike" opens, running the Vite-bundled WebView UI.
3. Note: the standalone .exe depends on WebView2 runtime, which ships with Windows 10/11 by default.

**Option B — NSIS installer (recommended for sharing):**
1. Run `Zombie Roguelike_0.1.0_x64-setup.exe` from `src-tauri/target/release/bundle/nsis/`.
2. Follow the wizard — installs under `C:\Program Files\Zombie Roguelike\` and creates Start Menu entry.
3. Launch via Start Menu "Zombie Roguelike" shortcut.

**Option C — MSI installer (enterprise/silent install):**
1. Double-click `Zombie Roguelike_0.1.0_x64_en-US.msi` OR run `msiexec /i "Zombie Roguelike_0.1.0_x64_en-US.msi" /quiet`.

## Warnings / non-fatal notes

- **Rust toolchain auto-upgraded:** rustc 1.87.0 → 1.95.0 via `rustup update stable`. Lockfile `Cargo.lock` was generated fresh (no prior lockfile existed). No source files (`main.rs`, `lib.rs`, `Cargo.toml`) were modified — only the toolchain.
- **Bundler dependencies downloaded on-demand:** wix3 (for MSI), nsis-3 (for NSIS installer), nsis_tauri_utils.dll. Cached under `%LOCALAPPDATA%\tauri\` — subsequent builds skip downloads.
- **Icon art is placeholder:** solid dark-slate square with a single lime-green "Z". When final art is ready, regenerate via `npx @tauri-apps/cli icon <final.png>` and rebuild.
- **No code-signing:** The .exe and installers are unsigned. Windows SmartScreen will warn on first launch ("Unknown publisher"). User must click "More info" → "Run anyway". For distribution, a code-signing cert is needed.
- **Build not committed:** Per T7 constraints, T9 handles commits. `src-tauri/target/` and the generated icons remain untracked.

## Artifacts summary

| Artifact | Path | Size |
| --- | --- | --- |
| Standalone .exe | `src-tauri/target/release/zombie-roguelike.exe` | 7.91 MB |
| NSIS installer | `src-tauri/target/release/bundle/nsis/Zombie Roguelike_0.1.0_x64-setup.exe` | 1.75 MB |
| MSI installer | `src-tauri/target/release/bundle/msi/Zombie Roguelike_0.1.0_x64_en-US.msi` | 2.66 MB |
