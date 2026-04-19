needs-revision

## Findings

### Verified correct

1. **CSS +27 line claim — accurate.**
   - Source `<style>` spans HTML lines 11–1294 (= 1284 lines). `app/src/shell/styles.css` is 1284 lines. Match.
   - Byte-identity confirmed: `diff -u <(awk 'NR>=11 && NR<=1294' zombie_roguelike.html) app/src/shell/styles.css` is empty (exit 0).
   - Spot-check `#stage` (styles.css:23–38) confirms `justify-content: flex-end; padding-right: 20px; box-sizing: border-box;` rework is in place and matches source.
   - Spot-check `.upgrade-stack` (styles.css:149–171) confirms `max-width: 140px`, `max-height: calc(100vh - 14vh)`, `overflow-y: auto`, `opacity: 0.9`, `pointer-events: auto`, `scrollbar-width: thin`, `scrollbar-color: var(--c-accent) …`.
   - Spot-check `::-webkit-scrollbar*` pseudo-rules (styles.css:172–184) match source.

2. **Canvas 1280 → 1220 propagation — all four call-sites correct.**
   - Source `<canvas id="game" width="1220" height="720">` at HTML line 1299. T6 correctly identified the number as 1220 (not 1152 — the "1152x720 play zone" mention at source lines 38–39 is a stale CSS comment describing an old iteration, not the actual canvas element).
   - `app/index.html:17`: `width="1220"` ✓
   - `app/src/constants.ts:12`: `CANVAS_W = 1220` ✓
   - `app/src/legacy/game.ts:6534`: `const ratio = 1220/720;` ✓ (matches source line 8711)
   - `app/src-tauri/tauri.conf.json:16–17`: `"width": 1220, "height": 720` ✓ (also `"minHeight": 378` preserving aspect).

3. **Build check — both pass.**
   - `npx tsc --noEmit` → EXIT=0
   - `npm run build` → EXIT=0, produced `dist/assets/index-D0K_9OTM.css` (29.49 kB, +0.48 kB vs T4 baseline, consistent with +27 CSS lines) and `dist/assets/index-D028H1Dh.js` (146.81 kB, same as T4 — JS bundle unchanged).

4. **Scope — no out-of-scope edits.**
   - `git diff --stat HEAD -- app/` reports exactly 5 files changed: `index.html`, `src-tauri/tauri.conf.json`, `src/constants.ts`, `src/legacy/game.ts`, `src/shell/styles.css`. Nothing touched in `package.json`, `capacitor.config.ts`, `src-tauri/src/`, or `versions/v1/`.

5. **Honesty probe — T6 was right to challenge the brief.**
   - Current source total is 8826 lines (T4 reported 8799 → delta +27), not +204 as the brief claimed. T6's correction is correct and properly footnoted. No penalty — flag is on the orchestrator's stale input, not on T6.
   - Canvas number is indeed 1220 (not 1152 as the brief hinted); T6 correctly synced to the authoritative live element and noted the stale CSS comment.

### Blocking issue — content-module drift that T6 missed

T6 claimed: "No changes needed... the scaffold's `content/*.ts` and `types.ts` remain byte-identical to source." **This is false for `app/src/content/zombies.ts`.**

All four boss archetype rows in the current source (`zombie_roguelike.html` lines 2538, 2548–2563) have been rebalanced to ~10–20× larger values, but `zombies.ts` still holds the pre-rebalance numbers:

| Archetype | Source (current) | Module (zombies.ts) | Drift |
|---|---|---|---|
| `boss` hp / speed / damage / radius / score / xp / touchCd | 22000 / 1200 / 320 / 1160 / 6400 / 2800 / 12000 | 1100 / 60 / 16 / 58 / 320 / 140 / 600 | ~20× across the board |
| `boss_necro` hp / speed / damage / radius / score / xp / touchCd + raiseCd / raiseCount / raiseRange / keepDist | 13000 / 1100 / 280 / 1000 / 6400 / 2800 / 12000 + 80000 / 60 / 7200 / 7200 | 650 / 55 / 14 / 50 / 320 / 140 / 600 + 4000 / 3 / 360 / 360 | ~20× |
| `boss_berserker` hp / speed / damage / radius / score / xp / touchCd + rageStep / rageMaxStacks / chargeRange / chargeWindup / chargeDur / chargeCd / chargeSpdMul / chargeDmgMul / slamCd / slamWindup / slamR / slamDmgMul / quakeCd / quakeWindup / quakeR / quakeDmgMul | 26000 / 1400 / 360 / 1120 / 7200 / 3200 / 10000 + 4.0 / 60 / 4400 / 6400 / 7600 / 70000 / 52 / 30 / 104000 / 10400 / 4400 / 36 / 210000 / 22000 / 3600 / 22 | 1300 / 70 / 18 / 56 / 360 / 160 / 500 + 0.20 / 3 / 220 / 320 / 380 / 3500 / 2.6 / 1.5 / 5200 / 520 / 220 / 1.8 / 10500 / 1100 / 180 / 1.1 | ~20× |
| `boss_queen` hp / speed / damage / radius / score / xp / touchCd + shootCd / shotCount / shotSpread / projSpeed / projHomeAccel / projHomeDur / range | 19000 / 1000 / 240 / 1040 / 6800 / 3000 / 12000 + 60000 / 100 / 11 / 5600 / 2200 / 20 / 10400 | 950 / 50 / 12 / 52 / 340 / 150 / 600 + 3000 / 5 / 0.55 / 280 / 110 / 1.0 / 520 | ~20× |

This is **real behavioral drift**, not doc drift — the scaffold build imports `ZTYPES` from `../content/zombies` (see legacy/game.ts lines 10 of T4's import list; `content/zombies.ts` exports these values), so the running app uses the stale 1100-HP boss while the authoritative source says 22000-HP. Playing the built game will feel wrong versus opening `zombie_roguelike.html` directly. The non-boss archetypes (walker/runner/spitter/exploder/brute/howler and the remaining tier-2 mobs) are byte-identical — only the 4 boss rows drift.

T6's method for justifying "no drift" was measuring script **line count** parity (7188 = 7188) plus spot-checking a few line offsets to confirm structural alignment. That method cannot detect within-line numeric re-tuning. Given that T6 also caught one within-line canvas-ratio edit in the script, the same class of edit must be searched for in content regions.

T6 verified `crazyDave.ts`, `difficulty.ts`, `upgrades.ts`, `superpowers.ts` byte-identical — independently re-verified here:
- `upgrades.ts` data rows vs source 2643–2691: byte-identical.
- `superpowers.ts` data rows vs source 2679–2706: byte-identical.
- `skins.ts` data rows (spot 2724–2731): byte-identical.
- `themes.ts` data rows vs source 2301–2353: byte-identical.
- `zombies.ts` data rows vs source 2532–2620: **non-boss rows identical; all 4 boss rows drift (~20×) as tabulated above.**

### Required revision

1. Re-port the four boss archetype rows (`boss`, `boss_necro`, `boss_berserker`, `boss_queen`) in `app/src/content/zombies.ts` to match the current live source values. Preserve formatting and type annotations; only the numeric fields change.
2. After re-porting, re-run `tsc --noEmit` and `npm run build`. No other files should be touched.
3. Also grep `app/src/legacy/game.ts` for any inline boss tuning literals (HP/damage multipliers keyed on the rebalanced numbers) that might have been re-tuned alongside the source boss rows — the source script body had at least one within-line edit (canvas ratio), and the boss numeric rebalance implies there may be co-tuned multipliers elsewhere. Re-verify legacy/game.ts region-by-region for within-line numeric drift, not just line-count drift. If any additional inline numbers drifted, re-port them too.

### Flags (not blocking)

- T6 correctly flagged that stale "src N–M" line-number annotations in content-module headers (e.g. `crazyDave.ts` says "src 1651–1656" while current source is 1699–1704) are doc-only and deliberately not repointed this cycle. Accept.
- T6's Tauri window 1220×720 choice (a 1:1 pixel match with the canvas) matches the brief's "match canvas dimensions" default. Accept.
- Orchestrator's "+204 lines" and "1280→1152" inputs were stale/wrong. T6 correctly overrode them using the live HTML as the source of truth. No fault on T6.
