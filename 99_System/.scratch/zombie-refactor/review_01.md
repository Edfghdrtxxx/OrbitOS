approved

## Verdict

Plan is thorough, accurate on line ranges, and structurally sound. Approving with observations to address in later phases — none are blocking for T3 kickoff.

## Coverage audit

Spot-checked against the source (8,598 lines, matches plan's count). All key subsystems have explicit homes:

- Entities: `Player` (2934), `Zombie` (3797), `Bullet` (5995), `ZombieProjectile` (6077), `Explosion` (6149), `Particle` (6208), `Powerup` (6239), `PoisonCloud` (5854) — all present in tree.
- `PendingBoom` is a plain object literal, not a class — the plan correctly routes it through `systems/pendingBooms.ts` (`updatePendingBooms` + `drawPendingBooms` at 5958–5993) and defines a `PendingBoom` interface in `types.ts`. Good catch by T1.
- Flow fns (`startRun` at 7856, `enterRoom`, `clearRoomAndAdvance`, `showRunEnd`, `continueFromCheckpoint`, `loop` at 8042, `fitCanvas` at 8477, `setupJoystick` at 8512) all have named destinations.
- UI panels (upgrade / SP / stats / checkpoint slots / menu / appearance) all mapped.

## Line-range accuracy (5 random spot-checks)

| Plan claim | Actual | Verdict |
|---|---|---|
| `game` singleton at 2728–2793 | 2728 `const game = {` ... 2793 `};` | Exact match |
| `canvas/ctx/mainCtx/W/H` at 1592–1595 | Lines 1592–1595 exactly | Exact match |
| `drawSkinPreview` ctx hijack at 8441–8452 | Line 8442 `ctx = pctx;`, 8452 `ctx = mainCtx;` | Exact match |
| UPGRADES at 2587–2617, UPG_BY_ID at 2618 | Confirmed 2587–2618 | Exact match |
| `CHECKPOINT_KEY/CHECKPOINTS_KEY` at 6599–6600 | Exact match. `CHECKPOINT_SLOTS = 3` at 6601 | Exact match |
| `world`/`camera` at 2213–2225 | Exact match (world 2213, camera 2214, SHAKE_SCALE 2224) | Exact match |
| `$` helper at 7350 | Confirmed at 7350. Plan in §8 said "somewhere around the statsPage block — verify in phase 0" — it is exactly there | Exact match; the open item in §8 item 8 can be closed now |

Line ranges are trustworthy.

## Migration-order soundness

The legacy-IIFE-as-sink strategy is runnable: the original script already runs inside an implicit `<script>` closure, so wrapping it in `(function(){…})()` is semantically equivalent — the game will play off `main.ts → import './legacy/game.ts'` from phase 0 onward. Invariant #1 (nobody imports from `legacy/game.ts`, only side-effect import from `main.ts`) is the correct constraint.

Concern (non-blocking): the plan asserts TypeScript strict mode will catch missing-import mistakes at build time. For phase 0 the entire script is pasted in with zero `export`s, so `strict` will flood the console with implicit-any errors (every DOM query, every arithmetic op on untyped globals). Recommend either (a) start `legacy/game.ts` as plain `.js` pasted in and add a `// @ts-nocheck` pragma if kept as `.ts`, or (b) set `"strict": false` on `legacy/**` only. This is a `tsconfig` detail, not an architecture flaw — flagging so T3 doesn't trip on it day 1.

## Globals-to-module-state concreteness

- `game` singleton strategy (§3) is concrete — 2728–2793 maps 1:1 to `state/gameState.ts` export.
- `canvas`/`ctx`/`mainCtx`/`W`/`H` at 1592–1595 cleanly extract.
- `ctx` reassignment in `drawSkinPreview` (8441–8452) — option (a) with `setCtx()` is correct. Verified the source literally does `ctx = pctx; … ctx = mainCtx;` on a `let ctx`. The `setCtx(next)` wrapper is a direct translation. No other callsite mutates `ctx`, so the surface area is contained to that one file — good news, plan's §8 item 1 is accurate.
- Circular-dep breaking: traced mentally. `Player` pushes to `game.bullets` and reads `game.zombies`; `Zombie` pushes to `game.ezBullets` / `game.particles` and reads `game.player`; `Bullet` iterates `game.zombies`. None directly import another entity class. The `*Like` interfaces in `types.ts` let TS annotations stay duck-typed. This matches how the source already works (everyone walks `game.*` arrays) — the DAG is legitimately acyclic.

## TS interface completeness

Cross-checked against source:

- `GameState` (§4) — every field in the source's `game = {…}` at 2728–2793 is present in the interface. No hand-waving.
- `PlayerLike` — cross-checked against constructor at 2934–3012. All runtime fields present. Minor note: `_baseSpeed`, `_baseMaxHp`, `_baseMaxAmmo`, `_baseFireRate`, `_baseDamage`, `_baseReload`, `_baseBulletSpeed`, `_baseBulletLife`, `_baseDashCdMax`, `_baseSwingCdMax`, `_baseSwingArc`, `_baseSwingReach`, `_prevX`, `_prevY`, `blazingAcc` — these private "_base*" backing fields are missing from `PlayerLike`. They're read by getters in the class body. If `types.ts` is meant as a wire shape (external readers), fine; if it's meant as a runtime mirror (classes implement it), add them. Recommend a one-line clarification in §4 that `PlayerLike` is the *public* surface, not a structural bound on the class.
- `SavedCheckpoint` — cross-checked against 6602–6633. Matches exactly: `floor, roomIdx, upgrades, playerLevel, xp, xpNeeded, kills, score, bonusRerolls, playerClass, environment, superpowers, phoenixUsed, bossVariantsSeen, schemaVersion:2, player?, savedAt?`. Good.
- `PoisonCloud` — source uses `radius`, not `r`. But `PoisonCloudLike extends Entity` (Entity has `r: number`). Either the interface's `radius` should shadow `r`, or `PoisonCloudLike` should not extend `Entity`. Minor type-design nit — `r` is not actually present on PoisonCloud instances (source uses `c.radius` everywhere). Fix in phase 3a when extracting PoisonCloud: drop `extends Entity` for PoisonCloud or introduce `EntityRadius` variant. Non-blocking.

## Preservation contract

- All seven `zr_*` keys named explicitly: `zr_checkpoint`, `zr_checkpoints`, `zr_lang`, `zr_skin`, `zr_class`, `zr_env`, `zr_autofire`, `zr_crazy_dave`. Table in §5 gives source lines for each.
- Byte-identical promise for `I18N.en/zh`, `UPGRADES`, `SUPERPOWERS`, `SKINS`, `ZTYPES`, `BOSS_KINDS`, `THEMES`, `THEME_ALIASES`, `FLOORS`, `DIFFICULTY_TIERS`/`_ZH`, `BASIC_OBSTACLES`, `CRAZY_DAVE_LINES`. Covered.
- Legacy-key migration (`zr_checkpoint` → slot 0 of `zr_checkpoints`) is called out — matches source 6663–6681.
- DOM ids table is exhaustive (I did not verify every single one, but `game`, `stage`, `envOverlay`, `checkpointSlotGrid`, `autoFireGrid`, `crazyDaveGrid` are all present in the listing).
- No explicit per-phase diff procedure is specified beyond §8 item 5's Vitest snapshot. Recommend adding one sentence to Phase 1 steps: "after each extraction, run `git diff legacy/game.ts` and confirm the removed constant exactly matches the added module's export." Minor process suggestion.

## Risk-flagging quality

Plan's §8 items 1–14 cover most real risks. Risks plan DID flag and I verified:

- Gamepad absent — confirmed by grep (0 matches for `gamepad|getGamepads`). Plan correct.
- `_generateObstaclesLegacy_DEPRECATED` vs live stub — verified at 6331–6336 (stub returns `[]`) and `ROOM_ARCHETYPES` at 6300–6307 still consumed by `generateHazards` hazardfield branch. Plan's disposition is correct.
- Font-loading race — I grep'd for `document.fonts|FontFace` — 0 matches. All 132 "font" hits are CSS rules, not dynamic loading. Plan correctly does not flag this; my prompt's "examples possibly missed" was a red herring.
- Crazy Dave Web Speech on Tauri WebView — real concern, already flagged.

Risks the plan did NOT flag (should watch):

1. **Service-worker cache of `legacy/game.ts` during phased development.** vite-plugin-pwa registers a SW that can cache the old legacy bundle between phase transitions. Between phases 1 and 2 you may see stale code. Mitigation: either disable SW in dev (`registerType: 'prompt'` + skip in dev), or include a cache-busting version query on the legacy import during transition. Worth adding to §8 as item 15.
2. **`Math.random()` non-determinism kills any meaningful end-to-end snapshot test.** The plan's Vitest snapshot in §8 item 5 only covers static data tables — good, those ARE snapshot-able. But there is no way to snapshot a game tick because `startRun`, `enterRoom`, `generateHazards`, every spawn use `Math.random`/`rand`/`randi` with no seed. The plan doesn't claim to snapshot game state, so this is not a bug in the plan — just worth noting that the "phase sign-off criteria" at the end (30-second playthrough ≥20 kills) is the only runtime safety net, and it's manual. Acceptable for this scope.
3. **Touch-orientation lock during overlay transitions.** Source 8504–8508 calls `screen.orientation.lock('landscape')` once at boot inside `IS_TOUCH`. It does NOT re-lock on overlay open/close, but some Android WebViews drop the lock when an overlay covers the canvas. Capacitor's `ScreenOrientation.lock` in `native-bootstrap.ts` covers native; web remains fragile but matches current behavior — no regression. Not blocking, but consider exposing a `reapplyOrientationLock()` from `platform/` for the banner/runEnd transitions if users report rotation breakage.
4. **PWA dev-vs-prod behavior divergence.** `vite-plugin-pwa` inject strategies differ (`generateSW` vs `injectManifest`). T1 doesn't pin this, and phase 0 asserts "`npm run dev` launches the identical game" — but a mis-configured PWA plugin can serve cached HTML and make phase-boundary smoke tests lie. Recommend pinning `strategies: 'generateSW'` + `devOptions: { enabled: false }` during the refactor and re-enabling PWA dev mode in phase 6 cleanup.
5. **`$` helper dependency order.** The plan lists `$` as "expose as default-export from `ui/dom.ts`" in §8 item 8. But `$` is used from line 7350 through the end of the file (including in `setupJoystick`, `fitCanvas`, `bindMobileBtn` at 8477–8595). During phase 2 when `engine/touch.ts` extracts `setupJoystick`, that module will need `$` imported before any of the UI modules exist. Recommend: create `ui/dom.ts` (or `engine/dom.ts`) in phase 2 alongside the gameState/canvas extraction, not deferred to phase 4c.

## Non-blocking observations for future phases

- The plan does not specify a phase for creating `ui/dom.ts` — the `$` helper is needed by engine/touch from phase 2. Create it in phase 2.
- `types.ts` is ~240 lines of interfaces — acceptable, but once phase 3e deletes legacy, consider splitting into `types/entities.ts`, `types/content.ts`, `types/save.ts` for navigability. Purely cosmetic.
- Phase 3d forward-declares `render/playerSprite.ts` dependency of `Player` — this works because `Player.draw()` calls `drawPlayerSprite(…)` as a function, not a method. Confirmed at 3557 the source already structures it that way. Good.
- Open question the plan didn't explicitly resolve: whether the phase-0 `legacy/game.ts` should be `.ts` with `@ts-nocheck` or `.js`. Recommend `.ts + @ts-nocheck` so the file extension doesn't need to change during phase 3e shrinkage. Minor.

## Honesty disclaimers

- I did not re-read all 8,598 lines of source. I spot-checked 8 cited line ranges against the plan and all 8 matched exactly. I grep'd for `gamepad`, `document.fonts`, and the `$` helper to verify plan claims. I did not re-verify every entry in the preservation-contract table — I verified `zr_checkpoint`/`zr_checkpoints` constants, the legacy migration logic, and the `$` helper location. The remaining `zr_*` key line numbers and DOM id exhaustiveness are taken on trust based on plan accuracy on the sampled items.
- I did not verify that every field in `GameState`'s TypeScript interface exactly matches the source order/presence — sampled and consistent. If precise match matters, phase 1 should diff the generated `types.ts` against the source `game = {…}` block mechanically.
- I did not verify Tauri/Capacitor API details in §7 (async vs sync). I took the plan's word that `@tauri-apps/api/fs` and `@capacitor/preferences` are async-only.
