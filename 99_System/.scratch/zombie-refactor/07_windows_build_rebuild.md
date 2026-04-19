# T7 Rebuild — Tauri 2 Windows Build with Corrected Boss Content

**Status:** SUCCESS
**Date:** 2026-04-19
**Working dir:** `D:\obsidian\OrbitOS\20_Project\Game\Zombie Roguelike\app\`
**Why this pass exists:** The original T7 ran against a stale Vite bundle (built at 22:42) that pre-dated T6 revision's boss-HP fix to `app/src/content/zombies.ts` (saved at 22:44:48). The prior installers shipped with hp=1100 / 650 / 1300 / 950 for the 4 bosses. This rebuild re-runs `npm run tauri:build` so Vite regenerates the bundle against the fixed source and Tauri re-bundles both installers.

## Pre-rebuild evidence of stale bundle

```
$ grep -oE '\{hp:[0-9]+,speed:[0-9]+' dist/assets/index-D028H1Dh.js
{hp:28,speed:62    … walker
{hp:16,speed:135   … runner
{hp:22,speed:78    … spitter
{hp:18,speed:115   … exploder
{hp:110,speed:38   … brute
{hp:1100,speed:60  ← STALE boss
{hp:34,speed:55    … howler
{hp:24,speed:95    … stalker
{hp:70,speed:34    … bloater
{hp:650,speed:55   ← STALE boss_necro
{hp:1300,speed:70  ← STALE boss_berserker
{hp:950,speed:50   ← STALE boss_queen
```

Vite bundle `index-D028H1Dh.js` mtime = `22:42` ; zombies.ts fix mtime = `22:44:48`. The original T7 had packaged content older than the T6 revision. Rebuild is required.

## Build invocation

```
$ npm run tauri:build    (single invocation)
```

Full log tee'd to `/tmp/tauri_rebuild.log`. Exit code 0.

### Build duration

| Phase | Original T7 (cold) | Rebuild T7 (hot cache) |
| --- | --- | --- |
| Vite + PWA | 456 ms | 551 ms |
| Rust compile + link (release) | 3 min 09 s | **43.76 s** |
| WiX MSI bundle | ~few s (+ wix3 download) | ~3 s (cached) |
| NSIS bundle | ~few s (+ nsis-3 download) | ~15 s (cached) |
| **Total (wall-clock)** | ~4 min | **~71 s** |

Rebuild ~3.4x faster — Cargo incremental cache + pre-downloaded wix3/nsis-3 bundler assets.

## Output artifacts (fresh)

| Artifact | Path | Size | mtime |
| --- | --- | --- | --- |
| Standalone exe | `src-tauri/target/release/zombie-roguelike.exe` | 8,294,912 B (7.91 MB) | 2026-04-19 22:49:44 |
| NSIS installer | `src-tauri/target/release/bundle/nsis/Zombie Roguelike_0.1.0_x64-setup.exe` | 1,838,080 B (1.75 MB) | 2026-04-19 22:50:02 |
| MSI installer | `src-tauri/target/release/bundle/msi/Zombie Roguelike_0.1.0_x64_en-US.msi` | 2,793,472 B (2.66 MB) | 2026-04-19 22:49:47 |
| Vite JS bundle | `dist/assets/index-DVN8-YAV.js` | 149,283 B | 2026-04-19 22:48:57 |
| Vite CSS bundle | `dist/assets/index-D0K_9OTM.css` | 29,496 B | 2026-04-19 22:48:57 |

Source-of-truth mtime reference: `app/src/content/zombies.ts` = **22:44:48**. All outputs above are **newer**, confirming freshness.

Standalone exe size and NSIS installer size are near-identical to the original T7 (exe: 8,294,912 B exactly identical — Rust code truly unchanged); NSIS grew by 114 bytes (1,837,966 → 1,838,080) reflecting the slightly larger compressed JS payload. MSI unchanged (2,793,472 B) — WiX MSI uses padding/alignment so small payload deltas can round to the same size.

## Evidence the bundle was refreshed with fixed content

### 1. Bundle hash changed (Vite content-addressing)

Old: `index-D028H1Dh.js` ; New: `index-DVN8-YAV.js`. Vite hashes the bundle by content, so a new hash means Vite observed new source bytes.

### 2. Spot-grep of new bundle for correct boss HP values

```
$ grep -oE 'hp:[0-9]+[^,]*,speed:[0-9]+' dist/assets/index-DVN8-YAV.js
hp:28,speed:62       walker
hp:16,speed:135      runner
hp:22,speed:78       spitter
hp:18,speed:115      exploder
hp:110,speed:38      brute
hp:22e3,speed:1200   ← boss       (22000 ✓)
hp:34,speed:55       howler
hp:24,speed:95       stalker
hp:70,speed:34       bloater
hp:13e3,speed:1100   ← boss_necro (13000 ✓)
hp:26e3,speed:1400   ← boss_berserker (26000 ✓)
hp:19e3,speed:1…     ← boss_queen (19000 ✓)
```

All 4 boss HP values match T6-revision targets (22000 / 13000 / 26000 / 19000). esbuild minified large decimals to scientific notation (`22e3` === `22000`). None of the stale values (1100 / 650 / 1300 / 950) appear as HP. One literal `1100` still appears in the file — it is `speed:1100` for boss_necro (correct per T6 revision), not stale HP.

### 3. Standalone exe embeds the new bundle

```
$ grep -aoE 'index-DVN8-YAV|index-D028H1Dh' src-tauri/target/release/zombie-roguelike.exe
index-DVN8-YAV    (count: 1)
```

Only the new hash appears — the exe's embedded asset manifest references the regenerated Vite output, not the old one. (Raw HP digits don't grep inside the exe because Tauri compresses the embedded web assets with its resource system, but the unique hash string passes through as the manifest key.)

## Warnings / notes

- `tsc --noEmit` ran clean during `npm run build` (no TS errors from the T6 zombies.ts edits).
- No source files modified in this pass — only Vite/Cargo outputs regenerated.
- No icons regenerated.
- No toolchain changes.
- PWA precache: 6 entries / 192.83 KiB (was 192.79 KiB pre-fix — minor growth from larger boss numbers).
- No commits made (per T9 boundary).

## Artifacts summary (final)

| Artifact | Path | Size |
| --- | --- | --- |
| Standalone .exe | `src-tauri/target/release/zombie-roguelike.exe` | 7.91 MB |
| NSIS installer | `src-tauri/target/release/bundle/nsis/Zombie Roguelike_0.1.0_x64-setup.exe` | 1.75 MB |
| MSI installer | `src-tauri/target/release/bundle/msi/Zombie Roguelike_0.1.0_x64_en-US.msi` | 2.66 MB |

Ready for T9 commit.
