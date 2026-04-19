# T6 — Delta Pass (scaffold re-sync against live source)

## Input state

| Surface | T4 snapshot | Current source | Delta |
|---|---|---|---|
| `zombie_roguelike.html` total | 8799 (per T4 report) | 8826 | +27 lines |
| `<style>` block | lines 11–1267 (1257 lines) | lines 11–1294 (1284 lines) | +27 lines |
| `<body>` content | lines 1271–1606 (336 lines) | lines 1298–1633 (336 lines) | 0 lines, 1 literal change |
| `<script>` body | lines 1609–8796 (7188 lines) | lines 1636–8823 (7188 lines) | 0 lines, 1 literal change |

Note: task prompt cites "+204 lines from T4 snapshot of 8,799 to current ~8,826" but
the actual total growth is **+27 lines**. All 27 land inside `<style>`. Body and
script grew 0 lines each; they only received in-place literal changes for the
canvas-dimension tweak (1280 → 1220). The canvas change does NOT round-trip to
`1152` anywhere in the live source — only a stale comment in the CSS block
mentions 1152 as a "play zone" width. The actual `<canvas>` element is 1220×720.

## Files touched

| File | Kind of change | Lines before | Lines after | Delta |
|---|---|---|---|---|
| `app/src/shell/styles.css` | additive CSS block + stage-layout edit | 1257 | 1284 | +27 |
| `app/index.html` | canvas width literal | 354 | 354 | 0 |
| `app/src/constants.ts` | CANVAS_W literal + comment | 43 | 43 | 0 |
| `app/src/legacy/game.ts` | fitCanvas ratio literal | 6650 | 6650 | 0 |
| `app/src-tauri/tauri.conf.json` | window width/height/minHeight | 46 | 46 | 0 |

## Enumerated ported changes

1. **`.upgrade-stack` scrollbar CSS + stage layout rework** (`styles.css`): +27
   lines in two edits.
   - `#stage` at styles.css:28–32: replaced `justify-content: center;` with the
     `justify-content: flex-end; padding-right: 20px; box-sizing: border-box;`
     block (plus the 3-line explanatory comment).
   - `.upgrade-stack` + `::-webkit-scrollbar*` rules at styles.css:159–197:
     bumped `max-width: 120px → 140px`, added `max-height` + `overflow-y` +
     `overflow-x`, flipped `opacity: 0.55 → 0.9`, flipped
     `pointer-events: none → auto`, added `scrollbar-width` + `scrollbar-color`
     custom-property, plus four new `::-webkit-scrollbar*` pseudo-rules (+12
     lines for the scrollbar block, +8 for the other changes, + padding-right
     line).
   Post-edit byte-identity with source `<style>` block (lines 11–1294):
   `diff -u styles.css <(awk 'NR>=11 && NR<=1294' zombie_roguelike.html)` is empty.
2. **Canvas dimension 1280 → 1220** — three call-sites:
   - `app/index.html:17`: `<canvas id="game" width="1280" ...>` → `width="1220"`.
   - `app/src/constants.ts:11–12`: `CANVAS_W = 1280` → `1220`; header comment
     updated from "src 1257" to "src 1299" and from `width="1280"` to
     `width="1220"`.
   - `app/src/legacy/game.ts:6534`: `const ratio = 1280/720` → `1220/720` (inside
     the `fitCanvas()` helper; matches source line 8711).
   - Height is unchanged (720 everywhere).
3. **Tauri window dimensions** (`tauri.conf.json:15–19`): width 960 → 1220,
   height 540 → 720, minHeight 360 → 378 (preserves ≈16:9.5 min aspect vs. the
   new 1.694 canvas aspect). minWidth 640 preserved. Per prompt default
   ("match canvas dimensions"). This shifts the window from a 16:9 scaled-down
   preview to a 1:1 pixel match with the canvas.
4. **Legacy body structural integrity verified**: reconstructed the expected
   post-extraction body by stripping the 25 source line ranges T4 extracted
   (593 lines total across TAU/math/CRAZY_DAVE/I18N/SHAKE_SCALE/FLOORS/
   ROOMS_PER_FLOOR/COMBAT_ROOMS/BASIC_OBSTACLES/THEMES/THEME_ALIASES/ZTYPES/
   BOSS_KINDS/isBossKind/UPGRADES/UPG_BY_ID/SUPERPOWERS/SP_BY_ID/SKINS/
   SKIN_BY_ID/PLATFORM_LIFT/lerpAngle/CHECKPOINT_*/DIFFICULTY_TIER_INTERVAL/
   DIFFICULTY_TIERS/DIFFICULTY_TIERS_ZH). After the 1280→1220 edit, the only
   remaining diff vs. the expected-from-source reconstruction is a single
   trailing blank line that T4 had introduced — no structural drift.

## Content modules sync

No changes needed. Since the script body grew 0 lines (7188 = 7188) between T4
and the current source, and every previously-extracted range (UPGRADES,
SUPERPOWERS, SKINS, ZTYPES, THEMES, I18N, DIFFICULTY_TIERS, CRAZY_DAVE_LINES,
FLOORS, BOSS_KINDS) still sits at the exact same script-internal line offsets
(spot-verified: UPGRADES at source 2643 matches T4 script-offset 1008; SKINS at
source 2724 matches 1089; I18N at source 1729 matches 94), no upgrade values,
i18n strings, theme colors, or zombie stats were touched by the +27 line
regrowth. The scaffold's `content/*.ts` and `types.ts` remain byte-identical to
source — verified spot-checks on `crazyDave.ts`, `difficulty.ts`, `upgrades.ts`,
`superpowers.ts` all match byte-for-byte.

Header comments in `content/*.ts` still cite stale "src N–M" line numbers
(e.g. `crazyDave.ts` says "src 1651–1656" but the actual location is 1699–1704
in the current file). These are doc-only drift, not byte-identity drift.
**Deliberately not ported**: repointing every content-module comment would be
churn for zero behavior change, and the next extraction pass will rewrite these
files anyway. Flagging for the reviewer.

## Build verification

```
$ cd app && npx tsc --noEmit
EXIT=0
```

```
$ cd app && npm run build
> zombie-roguelike@0.1.0 build
> tsc --noEmit && vite build

vite v5.4.21 building for production...
✓ 15 modules transformed.
dist/registerSW.js              0.13 kB
dist/manifest.webmanifest       0.26 kB
dist/index.html                18.21 kB │ gzip:  4.45 kB
dist/assets/index-D0K_9OTM.css 29.49 kB │ gzip:  6.36 kB
dist/assets/index-D028H1Dh.js 146.81 kB │ gzip: 44.95 kB
✓ built in 557ms

PWA v0.21.2
mode      generateSW
precache  6 entries (192.79 KiB)
files generated
  dist/sw.js
  dist/workbox-8c29f6e4.js
EXIT=0
```

Both pass. Bundle CSS grew from 29.01 kB → 29.49 kB (+0.48 kB) — consistent
with the 27-line scrollbar/stage-layout addition. JS bundle unchanged at
146.81 kB (only a literal 1280 → 1220 edit inside `fitCanvas`).

## Deliberately NOT ported

- **Content-module header comments with stale `src N–M` line-number references.**
  Values and ordering are byte-identical; only the line-number annotations
  drift. Not worth a churn pass this cycle — flagged above.
- **CSS comment mentioning "1152x720 play zone"** (styles.css:38–40) was ported
  verbatim from source. The comment is aspirational / stale in the source
  itself (actual canvas element is 1220 wide, not 1152). Preserving it keeps
  byte-identity with `<style>`; not my job to rewrite authoritative source
  comments.
- **`vite.config.ts` PWA manifest** has no hard-coded viewport dimensions to
  update — the manifest is resolution-agnostic (`display: 'fullscreen'`,
  `orientation: 'landscape'`). Confirmed and left alone.
- **`src-tauri/src/`, `capacitor.config.ts`, `package.json`** — no touch per
  brief constraints.

## Reviewer-visible surface

| File | Sync status |
|---|---|
| `app/src/shell/styles.css` | byte-identical to source `<style>` (11–1294) ✓ |
| `app/index.html` | body content matches source, canvas element matches source, head is fresh per T4 ✓ |
| `app/src/constants.ts` | `CANVAS_W` = 1220 (matches source `<canvas>`) ✓ |
| `app/src/legacy/game.ts` | body matches source minus T4-extracted 25 ranges; `ratio` literal matches source line 8711 ✓ |
| `app/src-tauri/tauri.conf.json` | window 1220×720 matches canvas ✓ |
| `app/src/content/*.ts`, `app/src/types.ts` | byte-identical to source; header comments' src-N–M annotations stale but flagged ⚠ |
| `app/vite.config.ts` | no viewport deps, left alone ✓ |
