approved

## Findings

### Green — wiring is correct

- **`app/src/main.ts`** (12 lines) — minimal: imports `./shell/styles.css`, lazy-imports `./legacy/game`, calls `bootLegacyGame()` from `DOMContentLoaded` or synchronously if already past `loading`. No extra logic. Matches T4's claim exactly.
- **`app/src/legacy/game.ts`** (6650 lines) — starts with `// @ts-nocheck` (line 1), 13 import statements (lines 27–49) pulling all 27 symbols T4 claimed were stripped. The file opens `export function bootLegacyGame() {` at line 51, the wrapper closes at line 6648 with `} // end bootLegacyGame`, and `export {};` is at line 6650. `const canvas = document.getElementById('game')` sits inside the wrapper, so the DOM-ready contract is satisfied.
- **Symbol-duplication grep clean.** Searched for `const I18N`, `const ZTYPES`, `const UPGRADES`, `const SKINS`, `const THEMES`, `const FLOORS`, `const DIFFICULTY_TIERS`, `const CRAZY_DAVE_LINES`, `const CHECKPOINTS_KEY`, `const CHECKPOINT_KEY`, `const SUPERPOWERS`, `const BOSS_KINDS`, `const THEME_ALIASES`, `const ROOMS_PER_FLOOR`, `const COMBAT_ROOMS`, `const BASIC_OBSTACLES`, `const SHAKE_SCALE`, `const PLATFORM_LIFT`, `const DIFFICULTY_TIER_INTERVAL`, `const SKIN_BY_ID`, `const UPG_BY_ID`, `const SP_BY_ID`, `function lerp`, `function clamp`, `function dist2`, `function lighten`, `function lerpAngle`, `function isBossKind`, `const TAU`. Zero matches at any indent level — T4 genuinely removed the 27 symbols with no residue.
- **Storage-key preservation verified.** All 8 `zr_*` literals resolve correctly:
  - `'zr_lang'` (line 178, 184), `'zr_skin'` (line 192, 203), `'zr_class'` (6303, 6391), `'zr_env'` (6325, 6393), `'zr_autofire'` (6347, 6360, 6548, 6552), `'zr_crazy_dave'` (6368, 6378) — kept as in-script literals. `STORAGE_KEYS` is imported but not yet consumed (T4 flagged this explicitly as a forward-compat import).
  - `CHECKPOINTS_KEY`/`CHECKPOINT_KEY` (lines 4642, 4650, 4655, 4662, 4675, 4676) resolve via `../constants`; `constants.ts` line 27–29 defines them as `'zr_checkpoint'` / `'zr_checkpoints'` — byte-identical to source. Legacy-key migration and `localStorage.removeItem(CHECKPOINT_KEY)` post-migration preserved at line 4655.
  - Zero `sessionStorage` matches; 21 `localStorage.*` calls intact.
- **`index.html` head.** Google Fonts `<link>` at line 13 covers Bangers / Nunito / Noto Sans SC / ZCOOL KuaiLe. PWA meta (`apple-mobile-web-app-capable`, `apple-mobile-web-app-status-bar-style`, `mobile-web-app-capable`, `theme-color`) all present at lines 6–9. `<script type="module" src="/src/main.ts">` at line 352.
- **`index.html` body ids.** Spot-checked `game`, `stage`, `envOverlay`, `classGrid`, `envGrid`, `upgradeChoice`, `runEnd`, `endTitle`, `endFloor`, `diffHud`, `checkpointPortalBtn`, `statsPage` — all present exactly once (no duplicate ids). Body markup (lines 16–351) diffs against source body lines 1298–1633 with **one** divergence only (see below).
- **No runtime footguns at module top level.** `AudioContext` is deferred behind `initAudio()` (line 66). `requestAnimationFrame(loop)` / `fitCanvas()` / `setupJoystick(...)` all run inside `bootLegacyGame()`, so they fire after `DOMContentLoaded`. No top-level `document.*` / `window.addEventListener` outside the wrapper. `try { localStorage.getItem(...) }` at lines 178/184/192 runs during import of legacy/game.ts in principle — but since they're inside helper functions (not at module scope), they're gated on function call timing and are safe.
- **Build pipeline.** Ran `npx tsc --noEmit` (exit 0) and `npm run build` (success) against the current tree. Output: `dist/index.html 18.21 kB`, `dist/assets/index-*.css 29.01 kB`, `dist/assets/index-*.js 146.81 kB / 44.95 kB gz`, `dist/sw.js`, `dist/manifest.webmanifest`, `dist/registerSW.js`, `dist/workbox-*.js`. Identical numbers to T4's scratch report.
- **Regression files untouched.** `git diff HEAD -- app/src-tauri app/capacitor.config.ts app/package.json` returns no diff. `app/src/versions/v1/` present on disk with prior files (`audio/`, `config/`, `entities/`, `i18n/`, `render/`, `shell/`, `state.ts`), not imported from anywhere in the new tree (grep for `../versions/v1` and `versions/v1` in `src/` returns 0 matches). `zombie_roguelike.html` itself was modified on disk but NOT by T4 — see next section.

### Yellow — source drift after T4's snapshot (not a T4 defect, but the user must know)

1. **`zombie_roguelike.html` has been modified since T4 worked.**
   - T4's snapshot: 8799 lines. Current HEAD (`ea912906`): 8672 lines. Current working tree: **8826 lines.** The file is mid-edit.
   - `git diff HEAD -- zombie_roguelike.html` reports `179 insertions(+), 25 deletions(-)` across 204 changed lines. The `<style>` block ended at src line 1267 when T4 extracted; it now ends at src line 1295 (28 more CSS lines). The `<body>` canvas changed from `width="1280"` to `width="1152"`, and `.upgrade-stack` picked up a scrollbar styling block and `max-height: calc(100vh - 14vh)`, plus a comment explaining canvas shrinkage to 1152×720 with right-anchor and `padding-right: 20px`.
   - Diff summary against current working-tree source:
     - `app/src/shell/styles.css` differs from current source `<style>` (lines 11–1294) in ~47 lines — missing the 1152×720 canvas-anchor comment/rules, missing the expanded `.upgrade-stack` scrollbar rules, and some value divergences (`max-width: 120px` vs. source `140px`).
     - `app/index.html` line 17 says `<canvas id="game" width="1280" height="720">`, source line 1299 says `width="1152"`. This is the only body diff (1 line).
     - `app/src/legacy/game.ts` script body (6650 lines) lags ~140 lines behind the current source `<script>` body (7189 lines in current source 1636–8824 vs. T4's snapshot 7188 lines) — small and likely a handful of logic changes the user has since made.
   - **Why it's still approved:** T4 documented the exact source snapshot they targeted (8799 lines, §Source snapshot in `04_bootstrap.md`). The scaffold is internally coherent at that snapshot. Source moved out from under T4 — this is a known hazard of concurrent editing, not a wiring defect.
   - **Action for user:** before doing `npm run dev` expecting a faithful copy, decide whether to (a) freeze source and re-run a delta-pass (bring styles.css, index.html canvas, and legacy/game.ts up to the 8826-line source), or (b) treat the scaffold as a fork at the 8799-line snapshot and continue editing only the scaffold side. Option (a) is simpler if no scaffold-side edits have happened yet.

2. **`constants.ts` canvas constants disagree with the current source.**
   - `CANVAS_W = 1280`, `CANVAS_H = 720` at `app/src/constants.ts` lines 12–13. Current source HTML has `<canvas … width="1152" height="720">`. Matches the same 1280→1152 drift as above; not imported anywhere in the current legacy bundle (legacy uses `canvas.width`/`canvas.height` directly), so nothing breaks at runtime — the constant is just stale data waiting to be wired.

### Trivial — not blocking

3. **`WORLD_W` / `WORLD_H` / `CANVAS_W` / `CANVAS_H` / `STORAGE_KEYS` imported but unused.** T4 explicitly flagged this as deliberate forward-compat (scratch report §Symbols removed, trailing paragraph). No lint rule in place to warn about unused imports with `@ts-nocheck`; confirm.

4. **`checkpointPortalBtn` is referenced by code but the corresponding block is inside `#menu`.** Not a bug — just a reminder that menu DOM is a single sub-tree. Verified present at index.html line 121.

### Honesty note

T4 correctly stated browser gameplay was **not** verified. I cannot verify it either — the build is green and all static analysis passes, but "build green" ≠ "boss queen summon loop still works". The `bootLegacyGame()` IIFE wrapping is semantically equivalent to the original inline `<script>` since both run after body parse; the only added timing concern is the `DOMContentLoaded` gating, which correctly covers the `const canvas = document.getElementById('game')` at wrapper line 2. **Likely works but unverified in browser.**

---

## Manual Verification Checklist

Once the user runs `cd "20_Project/Game/Zombie Roguelike/app" && npm run dev` and opens the reported URL (typically `http://localhost:5173/`), step through:

**Baseline smoke test (~2 minutes)**
- [ ] Language picker overlay appears on first load, both English and 中文 cards visible with flags.
- [ ] Click "ENGLISH" → main menu renders with title "ZOMBIE ROGUE / ENDLESS HORDE" in Bangers font (font loaded from Google Fonts).
- [ ] Click "START RUN" → class select ("RANGED" / "MELEE") renders with icons.
- [ ] Pick RANGED → env select with 7 theme cards: CLASSIC / NEON RAVE / VHS GLITCH / VAPORWAVE / MODERN CITY / CYBERPUNK 2077 / CHIIKAWA-VERSE.
- [ ] Pick CLASSIC → gameplay starts. Canvas visible, player character draws, mouse aim crosshair tracks.
- [ ] Move with WASD, click to fire, confirm bullets spawn and hit walker zombies.
- [ ] Kill ~10 zombies, confirm XP bar fills, level up overlay opens with 3 upgrade cards.
- [ ] Pick any upgrade, confirm chip appears in top-left upgrade stack.

**Persistence round-trip (~3 minutes)**
- [ ] Hit ESC → pause menu appears with stats panel.
- [ ] Click "SAVE CHECKPOINT" → slot picker opens with 3 slots.
- [ ] Pick slot 1 → confirmation banner.
- [ ] Open DevTools → Application → Local Storage → confirm `zr_checkpoints` contains a JSON array with 1 non-null entry; `schemaVersion: 2`.
- [ ] Reload the page (F5).
- [ ] Click "CHECKPOINT PORTAL" on main menu → slot picker shows the saved slot with "Floor N / Room M / saved X ago".
- [ ] Click the slot → resumes inside the same floor/room with upgrades preserved.

**Settings persistence**
- [ ] Open SETTINGS from main menu. Toggle auto-fire OFF, toggle Crazy Dave voice OFF. Back → reload page. Reopen SETTINGS → toggles persist.
- [ ] DevTools localStorage: `zr_autofire='0'`, `zr_crazy_dave='0'`.
- [ ] Switch language to 中文. Menu, upgrade cards, class select, env select all re-render in Simplified Chinese. Reload → language persists.
- [ ] DevTools: `zr_lang='zh'`.

**Themes render**
- [ ] Start a new run from each of the 7 environments. For each: confirm tile pattern matches (scanlines for VHS, sakura petals for Chiikawa, etc.) and `#envOverlay` picks up the right CSS class (inspect via DevTools, should see `.env-overlay.vhs`, `.env-overlay.cyberpunk`, etc.).

**Appearance / skins**
- [ ] Open CHARACTER APPEARANCE. Confirm 7 skin cards render with live preview sprites: SURVIVOR, HAZMAT, SOLDIER, PUNK, SCIENTIST, NINJA, USAGI.
- [ ] Click USAGI → preview updates, selected highlight moves.
- [ ] Start run → player sprite is the Usagi skin (bunny ears, pink cheeks).
- [ ] Reload → skin persists. `zr_skin='usagi'` in localStorage.

**Boss / run-end**
- [ ] Power through to the floor-1 boss. Confirm boss spawns, has visible HP bar, and triggers the super-power choice overlay on defeat.
- [ ] Die intentionally → RUN SUMMARY overlay with floor / kills / score / level / time / upgrades cards.

**Regression no-ops**
- [ ] Console shows no red errors across the session. `ctx is null`, `i18n key missing`, and `cannot read properties of undefined` are the three patterns to watch for.
- [ ] `npm run build && npm run preview` → PWA serves from `dist/`, service worker registers, offline mode still loads the menu after a second visit.

**Source-drift reconciliation (recommended BEFORE claiming T4 ships)**
- [ ] Decide: freeze `zombie_roguelike.html` at the working-tree version (8826 lines), then re-run a minimal delta pass to bring `styles.css`, `index.html` canvas width, and `legacy/game.ts` up to that snapshot. OR decide the scaffold is a fork from the 8799-line snapshot and stop editing the source HTML.
- [ ] If freezing: `diff` working-tree source lines 11–1294 against `app/src/shell/styles.css` and overwrite the latter; update `app/index.html` line 17 canvas to `width="1152"`; update `app/src/constants.ts` CANVAS_W to 1152; re-extract the 27 symbols from the new source's `<script>` body into legacy/game.ts. That last step is a real chunk of work — flag it as a mini T4.5 if the drift continues.
