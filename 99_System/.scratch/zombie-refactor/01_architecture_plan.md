# T1: Architecture Plan — Zombie Roguelike Refactor

Target: split the single-file game at `20_Project/Game/Zombie Roguelike/zombie_roguelike.html` (verified **8,598 lines** as of this pass — `<style>` 10–1253, DOM 1255–1586, `<script>` 1587–8596) into the existing Vite 5 + TypeScript 5 + vite-plugin-pwa scaffold at `app/`, using vanilla TS + ES modules, a domain-split tree (engine/entities/systems/ui/content/save), and a single shared `game` state object imported from one module. Tauri 2 (desktop) and Capacitor 6 (iOS/Android) wrap the same `dist/` — see T2 (`02_native_packaging.md`). Migration is **incremental**: the game must launch and play every phase. All settings/saves/localization/skins/themes/upgrades are preserved **bit-for-bit**.

All line ranges below were re-verified against the current source (post-amendment).

---

## 1. Target module layout under `app/src/`

Every file on the tree has a single purpose. The tree covers every subsystem in the survey. Paths are forward-slash relative to `app/src/`.

```
app/src/
├── main.ts                          # bootstrap: loadSavedLang → game.init → requestAnimationFrame(loop)
├── index.css                        # extracted from <style> 10–1253 (verbatim; imported by main.ts)
│
├── platform/                        # Tauri/Capacitor/PWA divergence lives ONLY here
│   ├── PlatformBridge.ts            # interface PlatformBridge — see §7
│   ├── web.ts                       # localStorage impl (default)
│   ├── tauri.ts                     # @tauri-apps/api fs + appDataDir
│   ├── capacitor.ts                 # @capacitor/preferences wrapper
│   ├── detect.ts                    # selectPlatform(): returns bridge per runtime
│   └── native-bootstrap.ts          # StatusBar.hide + ScreenOrientation.lock (from T2 §5)
│
├── state/
│   ├── gameState.ts                 # THE `game` singleton (mirrors src 2728–2793)
│   ├── world.ts                     # `world = { w: 2880, h: 1760 }` (src 2213)
│   ├── camera.ts                    # camera{x,y,shake}, cameraUpdate, shakeCam, SHAKE_SCALE (2214–2225)
│   └── types.ts                     # ALL shared TS interfaces (§4)
│
├── engine/
│   ├── loop.ts                      # loop(now), lastT, the dt = min(0.05, …) step (src 8041–8143)
│   ├── canvas.ts                    # canvas/ctx/mainCtx/W/H exports (src 1592–1595); exposes setCtx for skin-preview hijack
│   ├── time.ts                      # performance.now helpers, pause gate
│   ├── mathx.ts                     # TAU, lerp, clamp, dist2, rand, randi, choice, lerpAngle, lighten (1598–1610, 3547–3556)
│   ├── collision.ts                 # collidesObstacle, pushOutOfObstacles, hasLineOfSight, sameLayer, platformAt, platformAtWithGrace, PLATFORM_LIFT (2802–2918)
│   ├── input.ts                     # keys, mouse, touchAim, clearInputs, keyboard+mouse listeners (2101–2212)
│   ├── touch.ts                     # setupJoystick, bindMobileBtn, IS_TOUCH, fitCanvas (8477–8594)
│   └── audio.ts                     # audioCtx, initAudio, beep, sfx, CRAZY_DAVE_LINES, speakCrazyDave, stopCrazyDave, triggerCrazyDaveEvent (1612–1679)
│
├── entities/
│   ├── Player.ts                    # class Player (2934–3516)
│   ├── Zombie.ts                    # class Zombie (3797–5777)
│   ├── Bullet.ts                    # class Bullet (5995–6075)
│   ├── ZombieProjectile.ts          # class ZombieProjectile (6077–6146)
│   ├── Explosion.ts                 # class Explosion (6149–6205)
│   ├── Particle.ts                  # class Particle (6208–6236)
│   ├── Powerup.ts                   # class Powerup (6239–6298)
│   ├── PoisonCloud.ts               # class PoisonCloud + updatePoisonClouds + drawPoisonClouds (5854–5956)
│   └── helpers.ts                   # drawShadow, drawHPBar, nearestZombie, anyZombieInRange (2920–2933, 3518–3546)
│
├── systems/
│   ├── combat.ts                    # applyOnHitDoT, spawnPlaguePuff, applySuperPowerOnKill (2654–2667, 7028–7065)
│   ├── pendingBooms.ts              # updatePendingBooms, drawPendingBooms (5958–5993)
│   ├── howler.ts                    # applyHowlerBuffs (5779–5852)
│   ├── rooms.ts                     # ROOM_ARCHETYPES, archetypeForRoom, obstacleSize, overlapsAny, generateObstacles (stub), generateHazards, generateRoomSpawns, _generateObstaclesLegacy_DEPRECATED (6300–6512)
│   ├── enterRoom.ts                 # enterRoom, clearRoomAndAdvance (6514–6594, 6792–6845)
│   ├── spawns.ts                    # updateSpawns, updateBossAdds, spawnZombie, endRoomCheck (6847–6934)
│   ├── difficulty.ts                # DIFFICULTY_TIER_INTERVAL, DIFFICULTY_TIERS, DIFFICULTY_TIERS_ZH, difficultyTierName, updateRoomDifficulty (6935–6970)
│   ├── upgrades.ts                  # rollUpgradeChoices, applyUpgrade (7067–7093)
│   ├── superpowers.ts               # rollSuperPowerChoices, hasSP helper re-export (2651–2653, 7224–7232)
│   ├── flow.ts                      # startRun, showRunEnd, continueFromCheckpoint, quitToMenu, applyEnvironmentOverlay, updateHUDForClass (7856–8040)
│   └── difficultyHud.ts             # DIFFHUD_VISIBLE_STATES, updateDifficultyHud, updateLevelHud (6972–7026)
│
├── save/
│   ├── checkpoint.ts                # CHECKPOINT_KEY, CHECKPOINTS_KEY, CHECKPOINT_SLOTS, saveCheckpoint, persistCheckpoint, persistCheckpointToSlot, readCheckpointsArray, writeCheckpointsArray, loadPersistedCheckpoint, clearPersistedCheckpoint, refreshCheckpointPortalBtn, formatRelativeTime (6596–6729)
│   ├── checkpointSlots.ts           # checkpointSlotsMode, openCheckpointSlots, renderCheckpointSlotGrid, handleCheckpointSlotClick (6731–6790)
│   └── prefs.ts                     # thin wrappers: langPref, skinPref, classPref, envPref, autoFirePref, crazyDavePref (zr_lang/zr_skin/zr_class/zr_env/zr_autofire/zr_crazy_dave)
│
├── content/                         # pure-data modules — no imports except types
│   ├── floors.ts                    # FLOORS, ROOMS_PER_FLOOR, COMBAT_ROOMS, BASIC_OBSTACLES (2228–2244)
│   ├── themes.ts                    # THEMES, THEME_ALIASES, getTheme, themeForFloor, THEME_PATTERN_CACHE, buildThemeTile, getThemePattern (2245–2475)
│   ├── zombies.ts                   # ZTYPES, BOSS_KINDS, isBossKind, enemyStats, enemyPool (2476–2586)
│   ├── upgrades.ts                  # UPGRADES, UPG_BY_ID (2587–2618)
│   ├── superpowers.ts               # SUPERPOWERS, SP_BY_ID (2620–2650)
│   └── skins.ts                     # SKINS, SKIN_BY_ID, getSkin (2668–2726)
│
├── i18n/
│   ├── index.ts                     # currentLang, t, tUpgradeName, tUpgradeDesc, tFloorName, applyTranslations, setLanguage, loadSavedLang (2008–2067)
│   ├── en.ts                        # I18N.en literal (src 1682–1843)
│   └── zh.ts                        # I18N.zh literal (src 1844–2006)
│
├── render/
│   ├── world.ts                     # drawWorld (7667–7746)
│   ├── obstacle.ts                  # drawObstacle (7748–7854)
│   ├── playerSprite.ts              # drawPlayerSprite (3557–3796)
│   ├── reticle.ts                   # drawReticle (8146–8172)
│   ├── menuScene.ts                 # drawMenuScene, menuT (8173–8207)
│   └── skinPreview.ts               # drawSkinPreview — calls engine/canvas.setCtx() rather than mutating a module global
│
├── ui/
│   ├── overlays.ts                  # overlays(), hideAllOverlays, showOverlay, showBanner, flashDamage, flashXP, flashPrePause, togglePause, tryReload, tryDash, tryJump (7351–7405)
│   ├── hud.ts                       # updateHUD (7620–7665)
│   ├── upgradeStack.ts              # renderUpgradeStack (7407–7451)
│   ├── statsPanel.ts                # renderStatsPanel, showStatsPage, hideStatsPage, statsPageReturnTo (7116–7617)
│   ├── upgradeChoice.ts             # showUpgradeChoice, renderChoiceCards, updateCardSelection, changeSelection, confirmSelectedUpgrade, rerollChoices, resumeFromUpgrade (7094–7215, 7331–7348)
│   ├── superPowerChoice.ts          # showSuperPowerChoice, renderSPChoiceCards, updateSPCardSelection, changeSPSelection, confirmSelectedSuperPower, resumeFromSuperPower (7234–7329)
│   ├── menu.ts                      # showClassSelect, refreshClassCardActive, showEnvSelect, refreshEnvCardActive, refreshAutoFireCardActive, refreshCrazyDaveCardActive, MENU_TIP_KEYS, menuTipIdx, renderMenuTip, settingsReturnId (8244–8391)
│   ├── appearance.ts                # appearanceReturnId, openAppearance, renderSkinCards, refreshSkinCardActive, refreshLangCardActive, setSkin (2069–2099, 8392–8466)
│   └── bindings.ts                  # all DOM event wiring not in engine/input: _checkpointPortalBtn, _pauseSaveBtn, _cpSlotsBack click listeners (8208–8243)
│
├── legacy/                          # sink: receives the residual script as phases extract
│   └── game.ts                      # IIFE-wrapped remainder during phases 3a–3e. Deleted at end of phase 3e.
│
└── versions/v1/                     # prior scaffold — READ-ONLY ARCHIVE; deleted in phase 5 (§8)
    └── (existing files untouched)
```

Total: **~55 TS modules** + 2 i18n data modules + platform submodules. No module exceeds ~900 lines except `Zombie.ts` (unavoidable — the single class is ~2,000 src lines of behavior and draw).

---

## 2. Migration order — phases that never break playability

Every phase ends with a playable build (`npm run dev` opens at `localhost:5173`; `npm run tauri:dev` on the desktop; `npx cap run` on mobile after phase 3e).

### Phase 0 — Freeze-and-copy (T3 boundary starts here)
1. Copy `zombie_roguelike.html` into `app/index.html` with two edits only: (a) replace the inline `<script>…</script>` block (1587–8596) with `<script type="module" src="/src/main.ts"></script>`, (b) leave the inline `<style>` in place for now (extracted in phase 2). DOM ids are left unchanged — they're load-bearing across every UI function.
2. Create `app/src/legacy/game.ts` containing the **entire original script body** (lines 1588–8595) wrapped as `(function(){ … })();`. No edits to the game logic. Global declarations (`const canvas = …`, `const game = …`, etc.) stay as closure-locals inside the IIFE.
3. `app/src/main.ts` becomes:
   ```ts
   import './index.css';       // (no-op until phase 2)
   import './legacy/game.ts';
   ```
4. Verify: `npm run dev` launches the identical game; `tauri:dev` and Capacitor work. **This is T3's first deliverable** — the build pipeline is active but no modularization has happened yet.

### Phase 1 — Extract pure-data content (T3's main deliverable)
No behavior change, just data islands moved out. Each extraction converts the in-IIFE `const X = {…}` into a top-level `export const X = {…}` in `content/` or `i18n/`, then the IIFE imports the symbol from the module.

1. `content/floors.ts` ← src 2228–2244
2. `content/themes.ts` ← src 2245–2475 (includes tile-pattern cache + builder)
3. `content/zombies.ts` ← src 2476–2586
4. `content/upgrades.ts` ← src 2587–2618
5. `content/superpowers.ts` ← src 2620–2650
6. `content/skins.ts` ← src 2668–2726
7. `i18n/en.ts`, `i18n/zh.ts`, `i18n/index.ts` ← src 1681–2067
8. `engine/mathx.ts` ← src 1598–1610

Each step: extract → import into `legacy/game.ts` → build → smoke test. **T3 ends here** — the legacy bundle is now ~6,700 lines of behavior, with every constant table living in its own module. These are the lowest-risk extractions because they're pure data with no back-references.

### Phase 2 — T4: CSS extract + scaffolding wires (T4's boundary)
1. Move `<style>` 10–1253 into `src/index.css` verbatim; `main.ts` imports it; remove the `<style>` tag from `index.html`.
2. Create `state/gameState.ts` — the `game` singleton moves out. The `const game = {…}` literal (src 2728–2793) becomes `export const game: GameState = {…}`. Legacy IIFE imports it. This is THE key structural step — from now on, `game` is a module import everywhere.
3. Create `state/world.ts`, `state/camera.ts` — the other two singletons.
4. Create `engine/canvas.ts` — exports `canvas`, `ctx` (mutable via `setCtx`), `mainCtx`, `W`, `H`. The IIFE's `let ctx` becomes the module's `ctx` import; `drawSkinPreview`'s hijack (src 8441–8452) becomes `setCtx(pctx)` / `setCtx(mainCtx)`. See §8 risk.
5. Create `engine/audio.ts`, `engine/input.ts`, `engine/touch.ts`, `engine/collision.ts` — function-only extractions. No state moves yet beyond what's already in `gameState`.
6. Create `save/checkpoint.ts`, `save/checkpointSlots.ts`, `save/prefs.ts` — extract the localStorage layer. `prefs.ts` routes through `platform/PlatformBridge.ts` from day one so phase 6 is a zero-diff swap.

End of phase 2: `legacy/game.ts` is now ~4,500 lines of mostly entity classes, rendering, and UI flow. **T4 ends here.**

### Phase 3 — Entities (later-session extraction)
Each class goes to its own module. Order picked so downstream classes extract before upstream (sinks before sources):
- 3a. `entities/Particle.ts`, `entities/Explosion.ts`, `entities/PoisonCloud.ts`, `entities/ZombieProjectile.ts`, `entities/Bullet.ts`, `entities/Powerup.ts` — leaves, no inter-entity imports.
- 3b. `entities/helpers.ts` — `nearestZombie`, `anyZombieInRange`, `drawShadow`, `drawHPBar`.
- 3c. `entities/Zombie.ts` — imports `game`, `content/zombies`, `entities/ZombieProjectile`, `entities/Particle`, `systems/pendingBooms`.
- 3d. `entities/Player.ts` — imports `game`, `entities/Bullet`, `entities/helpers`, `content/skins`, `render/playerSprite` (forward-declared).
- 3e. Delete `legacy/game.ts` once every top-level symbol has moved. Final sweep: the IIFE should be down to a few initialization lines (lines 8469–8475 and 8208–8243) which move into `main.ts` + `ui/bindings.ts`.

### Phase 4 — Systems & render & UI
- 4a. `systems/*` — combat, howler, rooms, enterRoom, spawns, difficulty, upgrades, superpowers, flow, difficultyHud.
- 4b. `render/*` — drawWorld, drawObstacle, drawPlayerSprite, drawReticle, drawMenuScene, drawSkinPreview.
- 4c. `ui/*` — overlays, hud, upgradeStack, statsPanel, upgradeChoice, superPowerChoice, menu, appearance, bindings.
- 4d. `engine/loop.ts` — the final `loop(now)` function + `lastT`. Orchestrates every subsystem via one-way imports.
- 4e. `main.ts` wires everything in deterministic order: `loadSavedLang` → `loadSavedSkin` → `applyTranslations` → `renderSkinCards` → `showOverlay(menu|langSelect)` → `requestAnimationFrame(loop)` → `fitCanvas` + `setupJoystick`s.

### Phase 5 — Cleanup
- Delete `app/src/versions/v1/` entirely.
- Delete `legacy/` folder (should already be empty).
- Delete `_generateObstaclesLegacy_DEPRECATED` + `ROOM_ARCHETYPES`/`archetypeForRoom` if confirmed dead (see §8 risks — needs playtest).

### Phase 6 — Platform storage swap
- `save/prefs.ts` and `save/checkpoint.ts` stop calling `localStorage` directly; instead call `PlatformBridge.getItem/setItem/removeItem`. JSON payloads unchanged. Tauri and Capacitor bridges come online. See §7.

---

## 3. Globals → module state strategy (concrete)

The source has **three top-level mutable singletons** and a pile of tiny caches. Strategy: centralize on `state/gameState.ts` + `state/world.ts` + `state/camera.ts`. Everything else becomes either (a) module-locals where they genuinely are, or (b) fields on `game` when cross-module.

### The one `game` singleton

`state/gameState.ts` exports `export const game: GameState = {…}` — literally the object at src 2728–2793. Every module reads and writes through `game.xxx`:
- `game.player: Player | null`
- `game.zombies: Zombie[]`
- `game.bullets: Bullet[]`
- `game.ezBullets: ZombieProjectile[]`
- `game.explosions: Explosion[]`
- `game.particles: Particle[]`
- `game.powerups: Powerup[]`
- `game.poisonClouds: PoisonCloud[]`
- `game.pendingBooms: PendingBoom[]`
- `game.damageNums: DamageNum[]`
- `game.state, floor, roomIdx, isBossRoom, obstacles, spawnQueue, spawnTimer, kills, score, upgrades, pendingLevelUps, runStartT, runTime, roomState, roomT, difficultyTier, transitionT, transitionTarget, levelupPauseT, selectedChoice, currentChoices, rerollAvailable, bonusRerolls, checkpoint, checkpoints, bossVariantsSeen, lastUpgradePickId, skinId, playerClass, environment, autoFire, crazyDaveEnabled, crazyDaveRandomT, crazyDaveEventCdT, superpowers, phoenixUsed, pendingSuperPower, pendingVictory, currentSPChoices, selectedSPChoice` — all in `GameState` (§4).

### How player ↔ zombie ↔ bullet circular deps are avoided

The classes never import each other directly. Instead:
- `Player.ts` imports `game` from `state/gameState`; reads `game.zombies` when it needs `nearestZombie`; pushes to `game.bullets` when firing. It does NOT import `Zombie` or `Bullet` as types (uses `ZombieLike` / `BulletLike` from `state/types.ts` for any annotation, or plain `any`/duck typing where the source does).
- `Zombie.ts` imports `game`; reads `game.player` for AI; pushes to `game.ezBullets` / `game.particles`. Does NOT import `Player`.
- `Bullet.ts` imports `game`; iterates `game.zombies` for hit resolution. Does NOT import `Zombie` or `Player`.
- `entities/helpers.ts` (`nearestZombie`, `anyZombieInRange`) takes a `p: { x: number; y: number }` param and iterates `game.zombies` — no type import of `Zombie`.

Result: the import graph is a DAG rooted at `state/gameState.ts`. No entity module imports another entity module. This mirrors how the original globals worked (every class walked the `game` arrays) and is the single most important structural decision.

### Module-local (not on `game`)

- `engine/canvas.ts`: `canvas`, `ctx`, `mainCtx`, `W`, `H` (src 1592–1595).
- `state/world.ts`: `world = { w: 2880, h: 1760 }` (src 2213).
- `state/camera.ts`: `camera = { x: 0, y: 0, shake: 0 }`, `SHAKE_SCALE` (src 2214, 2224).
- `engine/input.ts`: `keys`, `mouse`, `touchAim` (src 2101–2103).
- `i18n/index.ts`: `currentLang: 'en' | 'zh'` (src 2008).
- `content/themes.ts`: `THEME_PATTERN_CACHE` (src 2311).
- `render/menuScene.ts`: `menuT` (src 8173).
- `ui/statsPanel.ts`: `statsPageReturnTo` (src 7116).
- `ui/menu.ts`: `settingsReturnId` (src 8374), `menuTipIdx` (src 8352).
- `ui/appearance.ts`: `appearanceReturnId` (src 8392).
- `save/checkpointSlots.ts`: `checkpointSlotsMode: 'load' | 'save'` (src 6731).
- `engine/loop.ts`: `lastT` (src 8041), `_lvlHudLast` (src 7004).

These are truly local to one module — keeping them module-scoped avoids polluting `GameState`.

---

## 4. Concrete TypeScript interfaces

All of these live in `state/types.ts` and are imported by the modules that need them. Fields are listed exactly as seen in the current source — this is the contract, not a sketch.

```ts
// -------- Core singletons --------

export type GameMode =
  | 'menu' | 'classSelect' | 'envSelect' | 'playing'
  | 'paused' | 'levelup_pending' | 'upgradeChoice'
  | 'superPowerChoice' | 'runEnd' | 'victory'
  | 'checkpointSlots' | 'settings' | 'appearance' | 'langSelect';

export type PlayerClass = 'ranged' | 'melee';
export type LangCode = 'en' | 'zh';
export type ThemeId = 'default' | 'neon' | 'vhs' | 'vapor' | 'modern' | 'cyberpunk' | 'chiikawa';
export type SkinId = 'default' | 'hazmat' | 'soldier' | 'punk' | 'scientist' | 'ninja' | 'usagi';
export type ZombieType =
  | 'walker' | 'runner' | 'spitter' | 'exploder' | 'brute'
  | 'howler' | 'stalker' | 'bloater'
  | 'boss' | 'boss_necro' | 'boss_berserker' | 'boss_queen';
export type UpgradeId =
  | 'dmg' | 'rof' | 'speed' | 'hp' | 'reload' | 'ammo' | 'double' | 'crit'
  | 'pierce' | 'explode' | 'vamp' | 'regen' | 'thorns' | 'eagle' | 'scholar'
  | 'cleaver' | 'whirl' | 'heavy' | 'swift' | 'blitz'
  | 'ignite' | 'bleed' | 'plague';
export type SuperPowerId =
  | 'sp_juggernaut' | 'sp_glasscannon' | 'sp_berserker' | 'sp_giantslayer'
  | 'sp_bloodthirst' | 'sp_marathon' | 'sp_ironwall' | 'sp_sharpshot'
  | 'sp_quickdraw' | 'sp_overkill' | 'sp_phoenix' | 'sp_warlord';
export type EliteAffix = 'blazing' | 'glacial' | 'overload' | null;

export interface GameState {
  state: GameMode;
  floor: number;            // 1..6
  roomIdx: number;          // 0..5 within floor
  isBossRoom: boolean;
  obstacles: Obstacle[];
  player: PlayerLike | null;
  zombies: ZombieLike[];
  bullets: BulletLike[];
  ezBullets: ZombieProjectileLike[];
  explosions: ExplosionLike[];
  particles: ParticleLike[];
  damageNums: DamageNum[];
  powerups: PowerupLike[];
  poisonClouds: PoisonCloudLike[];
  pendingBooms: PendingBoom[];
  spawnQueue: SpawnQueueEntry[];
  spawnTimer: number;
  kills: number;
  score: number;
  upgrades: Partial<Record<UpgradeId, number>>;
  pendingLevelUps: number;
  runStartT: number;
  runTime: number;
  roomState: 'active' | 'cleared' | 'transitioning';
  roomT: number;
  difficultyTier: 0 | 1 | 2 | 3;
  transitionT: number;
  transitionTarget: { floor: number; roomIdx: number } | null;
  levelupPauseT: number;
  selectedChoice: number;
  currentChoices: Upgrade[];
  rerollAvailable: boolean;
  bonusRerolls: number;
  checkpoint: SavedCheckpoint | null;
  checkpoints: (SavedCheckpoint | null)[]; // up to 3
  bossVariantsSeen: ZombieType[];
  lastUpgradePickId: UpgradeId | null;
  skinId: SkinId;
  playerClass: PlayerClass;
  environment: ThemeId;
  autoFire: boolean;
  crazyDaveEnabled: boolean;
  crazyDaveRandomT: number;
  crazyDaveEventCdT: number;
  superpowers: Set<SuperPowerId>;
  phoenixUsed: boolean;
  pendingSuperPower: boolean;
  pendingVictory: boolean;
  currentSPChoices: SuperPower[];
  selectedSPChoice: number;
}

export interface InputState {
  keys: Record<string, boolean>;                // Object.create(null) in src
  mouse: { x: number; y: number; worldX: number; worldY: number; down: boolean };
  touchAim: { active: boolean; angle: number };
  leftStick: { x: number; y: number };          // from setupJoystick
  rightStick: { x: number; y: number };
}

// -------- Entity-shape aliases (duck types used across modules) --------

export interface Entity {
  x: number; y: number; r: number;
  dead?: boolean;
  hp?: number;
}

export interface PlayerLike extends Entity {
  angle: number; level: number; xp: number; xpNeeded: number;
  hp: number; maxHp: number;
  ammo: number; maxAmmo: number;
  reloading: boolean; reloadT: number; fireCd: number;
  walkPhase: number; iFrames: number; flashT: number;
  dashCd: number; dashCdMax: number; dashT: number;
  dashDx: number; dashDy: number; dashDuration: number; dashSpeed: number;
  blitzHitSet: Set<ZombieLike> | null;
  z: number; jumpT: number; jumpDuration: number; jumpPeak: number;
  jumpCd: number; jumpCdMax: number; layer: string;            // 'ground' | `platform:${id}`
  swingCd: number; swingCdMax: number; swingT: number; swingDuration: number;
  swingArc: number; swingReach: number; swingAngle: number;
  swingHitSet: Set<ZombieLike> | null;
  whirlT: number; whirlAngle: number;
  regenAcc: number; vx: number; vy: number;
  slowT: number; slowMul: number;
  // upgrade-derived getters (present on Player class, not on POJO):
  speed: number; fireRate: number; damage: number; reloadTime: number;
  critChance: number; critMul: number;
  bulletSpeed: number; bulletLife: number; pierce: number; explosive: number;
  doubleTap: number; knockback: number; isMelee: boolean;
  swingDmg: number; swingArcWidth: number;
  igniteChance: number; burnDps: number; bleedDps: number; plagueDps: number;
  // class-level getters / upgrade accessors:
  u(id: UpgradeId): number;
  update(dt: number): void;
  hurt(d: number): void;
  draw(): void;
}

export interface ZombieLike extends Entity {
  type: ZombieType; elite: boolean; affix: EliteAffix;
  hp: number; maxHp: number;
  speed: number; damage: number; color: string; eye: string;
  _baseSpeed: number; _baseDamage: number;
  score: number; xp: number;
  touchCdMax: number; touchCd: number;
  walkPhase: number; hitFlash: number; angle: number; wobble: number;
  shootCd: number; fusing: boolean; fuseT: number;
  chargeCd: number; charging: boolean; chargeT: number;
  chargeDx: number; chargeDy: number; summonCd: number;
  buffSpdMul: number; buffDmgMul: number;
  burnT: number; burnDps: number; burnAcc: number;
  bleedT: number; bleedDps: number; bleedAcc: number;
  howlPulse?: number;
  stalkRevealed?: boolean; stalkRevealT?: number; stalkLungeCd?: number;
  stalkState?: 'sneak' | 'windup' | 'lunge' | 'recover';
  stalkT?: number; stalkDx?: number; stalkDy?: number; stalkHit?: boolean;
  rageStacks?: number; slamT?: number; slamCd?: number;
  quakeT?: number; quakeCd?: number; quakeTargetX?: number; quakeTargetY?: number;
  bruteDx?: number; bruteDy?: number;
  raiseCd?: number;
  z: number; jumpT: number; jumpDuration: number; layer: string;
  update(dt: number, player: PlayerLike): void;
  hurt(dmg: number, sx: number, sy: number): void;
  draw(): void;
  die(): void;
}

export interface BulletLike extends Entity {
  vx: number; vy: number; angle: number; life: number;
  damage: number; pierce: number; piercedSet: Set<ZombieLike>;
  explosive: number; crit: boolean; trail: { x: number; y: number; a: number }[];
  update(dt: number): void; draw(): void;
}

export interface ZombieProjectileLike extends Entity {
  vx: number; vy: number; life: number; damage: number; phase: number;
  homeT: number; homeAccel: number; tint: string | null;
  update(dt: number, player: PlayerLike): void; draw(): void;
}

export interface ExplosionLike extends Entity {
  radius: number; damage: number; fromPlayer: boolean;
  t: number; life: number; hitSet: Set<ZombieLike | PlayerLike>;
  update(dt: number, player: PlayerLike): void; draw(): void;
}

export interface ParticleLike extends Entity {
  vx: number; vy: number; life: number; maxLife: number;
  color: string; fade?: boolean; gravity: number;
  update(dt: number): void; draw(): void;
}

export interface PoisonCloudLike extends Entity {
  radius: number; life: number; maxLife: number;
  slowMul: number; dps: number; dotAcc: number; phase: number;
}

export interface PowerupLike extends Entity {
  type: 'health' | 'ammo'; phase: number;
  update(dt: number, player: PlayerLike): void; draw(): void;
}

// -------- Content / data-shape interfaces --------

export interface Upgrade {
  id: UpgradeId;
  name: string;
  color: string;
  icon: string;            // emoji glyph
  max: number | null;      // null = uncapped
  cls: 'shared' | 'ranged' | 'melee';
}

export interface SuperPower {
  id: SuperPowerId;
  name: string;
  icon: string;
  color: string;
  desc: string;            // English-only in content, overridden by i18n if present
}

export interface Skin {
  id: SkinId;
  nameKey: string;                     // i18n lookup key
  bodyColor: string; dashColor: string; accentColor: string;
  legColor: string;  gunColor: string;
  headColor: string; hairColor: string; hairR: number;
  hat: string | null;                  // 'gasmask'|'helmet'|'mohawk'|'goggles'|'mask'|'usagi-ears'|null
  accessory: string;                   // 'strap'|'tape'|'vest'|'studs'|'pocket'|'sash'|'usagi-blush'
  outlineColor?: string;               // usagi override (#3B2E2A)
  legStyle?: 'paws';                   // usagi override
}

export interface ThemeDef {
  id: ThemeId;
  nameKey: string;
  descKey: string;
  overlayClass: string | null;         // CSS class on #envOverlay
  bg: string;                          // hex
  obstacles: string[];                 // ['crate','barrel','car']
  tilePattern: {
    kind: 'doomsday' | 'circuit' | 'scanlines' | 'sand' | 'hexGrid' | 'sakura';
    colors: string[];
    spacing: number;
  };
}

export interface ZombieArchetype {
  hp: number; speed: number; damage: number; radius: number;
  color: string; eye: string;
  score: number; xp: number;
  touchCd: number; minFloor: number;
  // optional per-type tuning — presence depends on type, see content/zombies.ts
  range?: number; shootCd?: number; projSpeed?: number; leadCap?: number;
  fuse?: number; boomR?: number; lowHpFuse?: number;
  chargeRange?: number; chargeWindup?: number; chargeDur?: number;
  chargeCd?: number; chargeSpdMul?: number; chargeDmgMul?: number;
  zigzagPeriod?: number; zigzagMag?: number;
  auraR?: number; auraSpdMul?: number; auraDmgMul?: number; chillMul?: number;
  revealR?: number; sneakAlpha?: number; lungeRange?: number;
  lungeWindup?: number; lungeDur?: number; lungeSpdMul?: number; lungeCd?: number;
  cloudR?: number; cloudLife?: number; cloudSlow?: number; cloudDmg?: number;
  raiseCd?: number; raiseCount?: number; raiseRange?: number; keepDist?: number;
  rageStep?: number; rageMaxStacks?: number;
  slamCd?: number; slamWindup?: number; slamR?: number; slamDmgMul?: number;
  quakeCd?: number; quakeWindup?: number; quakeR?: number; quakeDmgMul?: number;
  shotCount?: number; shotSpread?: number; projHomeAccel?: number; projHomeDur?: number;
}

export interface DifficultyTier {
  name: 'EASY' | 'MEDIUM' | 'HARD' | 'HAHAHA';
  hpMul: number;
  dmgMul: number;
  color: string;                       // hex
}

export interface SavedCheckpoint {
  floor: number;
  roomIdx: number;
  upgrades: Partial<Record<UpgradeId, number>>;
  playerLevel: number;
  xp: number;
  xpNeeded: number;
  kills: number;
  score: number;
  bonusRerolls: number;
  playerClass: PlayerClass;
  environment: ThemeId;
  superpowers: SuperPowerId[];         // serialized from Set
  phoenixUsed: boolean;
  bossVariantsSeen: ZombieType[];
  schemaVersion: 2;
  player: {
    hp: number;
    ammo: number;
    reloading: boolean;
    reloadT: number;
    fireCd: number;
    dashCd: number;
    jumpCd: number;
    swingCd: number;
    iFrames: number;
    slowT: number;
    slowMul: number;
  } | null;
  savedAt?: number;                    // Date.now() when persisted
}

export interface Obstacle {
  x: number; y: number; w: number; h: number;
  type: 'crate' | 'barrel' | 'car' | 'gap' | 'platform';
  walkOver?: boolean;                  // gaps
  platformId?: number;                 // platforms
  variant?: string;                    // for draw variation
}

export interface DamageNum { x: number; y: number; vy: number; life: number; value: number; color: string; }
export interface PendingBoom { x: number; y: number; r: number; dmg: number; t: number; windup: number; dead?: boolean; }
export interface SpawnQueueEntry { type: ZombieType; elite: boolean; delayMs: number; }
```

These mirror the actual fields seen at src 2728–2793 (GameState), 2934–3012 (Player), 3797–3885 (Zombie), 5854–5873 (PoisonCloud), 5995–6011 (Bullet), 6077–6093 (ZombieProjectile), 6149–6170 (Explosion), 6208–6219 (Particle), 6239–6246 (Powerup), 6602–6633 (SavedCheckpoint).

---

## 5. Preservation contract

Nothing below changes byte-for-byte across the refactor. Any drift is a bug.

| Asset | Source location | Destination | Preservation rule |
|---|---|---|---|
| `localStorage['zr_checkpoints']` | 6599–6685 | `save/checkpoint.ts` | JSON schema v2 (§4 `SavedCheckpoint`). Ring of ≤3. Legacy `zr_checkpoint` key migration intact. |
| `localStorage['zr_checkpoint']` (legacy) | 6599, 6673–6681 | `save/checkpoint.ts` | Read-once migration; promote to slot 0 of new ring; remove after. |
| `localStorage['zr_lang']` | 2057, 2063 | `save/prefs.ts` | String `'en' \| 'zh'`. |
| `localStorage['zr_skin']` | 2071, 2082 | `save/prefs.ts` | String matching `SkinId`. |
| `localStorage['zr_class']` | 8257, 8340 | `save/prefs.ts` | `'ranged' \| 'melee'`. |
| `localStorage['zr_env']` | 8279, 8342 | `save/prefs.ts` | `ThemeId` (unknown legacy id → default, no overwrite). |
| `localStorage['zr_autofire']` | 8296, 8309, 8497–8501 | `save/prefs.ts` | `'0' \| '1'`; unset on first touch-device visit defaults to `'1'`. |
| `localStorage['zr_crazy_dave']` | 8317, 8327 | `save/prefs.ts` | `'0' \| '1'` (default on, `'0'` disables). |
| `I18N.en` | 1682–1843 | `i18n/en.ts` | Verbatim export. Keys + floorNames + upgradeDescs closures preserved. |
| `I18N.zh` | 1844–2006 | `i18n/zh.ts` | Verbatim export. Same shape as `en`. |
| `FLOORS` | 2228–2235 | `content/floors.ts` | 6 entries, names/bgA/bgB/obstacles bit-identical. |
| `THEMES` | 2245–2295 | `content/themes.ts` | 7 entries (`default`, `neon`, `vhs`, `vapor`, `modern`, `cyberpunk`, `chiikawa`). `tilePattern.kind`/`colors`/`spacing` verbatim. |
| `THEME_ALIASES` | 2297 | `content/themes.ts` | 7-entry map, identity function by id. |
| `SKINS` | 2668–2723 | `content/skins.ts` | 7 entries; usagi's `outlineColor` + `legStyle` preserved. |
| `ZTYPES` | 2476–2525 | `content/zombies.ts` | 12 entries (walker, runner, spitter, exploder, brute, boss, howler, stalker, bloater, boss_necro, boss_berserker, boss_queen) — every tuning number preserved. |
| `BOSS_KINDS` | 2527 | `content/zombies.ts` | Set of 4 ids. |
| `UPGRADES` | 2587–2617 | `content/upgrades.ts` | 23 entries. `max` caps + `cls` flags preserved exactly. |
| `SUPERPOWERS` | 2624–2649 | `content/superpowers.ts` | 12 entries, `desc` strings verbatim. |
| `DIFFICULTY_TIERS` | 6936–6941 | `systems/difficulty.ts` | 4 tiers EASY/MEDIUM/HARD/HAHAHA with hpMul 1.00/1.15/1.32/1.52 and dmgMul 1.00/1.10/1.21/1.33. |
| `DIFFICULTY_TIERS_ZH` | 6942 | `systems/difficulty.ts` | 4 strings 简单/中等/困难/哈哈哈. |
| `DIFFICULTY_TIER_INTERVAL` | 6935 | `systems/difficulty.ts` | 30 seconds. |
| `ROOMS_PER_FLOOR`, `COMBAT_ROOMS` | 2236–2237 | `content/floors.ts` | 6, 5. |
| `BASIC_OBSTACLES` | 2244 | `content/floors.ts` | `['crate','barrel','car']`. |
| `CRAZY_DAVE_LINES` | 1651–1656 | `engine/audio.ts` | Array of strings verbatim. |
| CSS rules | `<style>` 10–1253 | `index.css` | Verbatim copy; class names load-bearing for `.touch`, `.hidden`, `.fade-in`, `.pill`, `.bar`, `.hp-fill`, `.xp-fill`, `.ammo-fill`, `.dash-fill`, `.diff-hud`, `.dh-*`, `.lvl-hud`, `.lh-*`, `.overlay`, `.env-overlay.{neon,vhs,vapor,modern,cyberpunk,chiikawa}`, `.lang-card`, `.class-card`, `.skin-card`, `.joystick-base`, `.stick`, `.mobile-btn`, `.rotate-prompt`, `.menu-tip`, `.tip-label`, `.choice-card`, `.sp-card`, `.checkpoint-slot`, `.upgrade-stack`, `.chip`, `.banner`, `.damage-flash`, `.xp-flash`, `.prepause-flash`, `.stats-title`, `.stats-col`, `.chip.active`. |
| DOM ids | `<body>` 1256–1586 | `index.html` | Every id preserved — referenced by: `game`, `stage`, `envOverlay`, `joyLeft`, `joyLeftStick`, `joyRight`, `joyRightStick`, `btnJump`, `btnDash`, `btnReload`, `btnPause`, `rotatePrompt`, `hud`, `floorText`, `roomText`, `lvlText`, `leftText`, `killText`, `scoreText`, `hpFill`, `hpText`, `xpFill`, `xpText`, `ammoFill`, `ammoText`, `dashIndicator`, `dashCool`, `jumpIndicator`, `jumpCool`, `upgradeStack`, `diffHud`, `dhTime`, `dhTier`, `dhFill`, `lvlHud`, `lhValue`, `banner`, `damageFlash`, `xpFlash`, `prepauseFlash`, `langSelect`, `langSelectGrid`, `menu`, `startBtn`, `checkpointPortalBtn`, `appearanceBtn`, `settingsBtn`, `menuTip`, `menuTipText`, `classSelect`, `classGrid`, `classBackBtn`, `envSelect`, `envGrid`, `upgradeChoice`, `choiceGrid`, `rerollBtn`, `superPowerChoice`, `spChoiceGrid`, `runEnd`, `endUpgradeList`, `continueBtn`, `pause`, `pauseSaveCheckpointBtn`, `settings`, `settingsLangGrid`, `autoFireGrid`, `crazyDaveGrid`, `appearance`, `skinGrid`, `checkpointSlots`, `checkpointSlotsTitle`, `checkpointSlotsSubtitle`, `checkpointSlotGrid`, `checkpointSlotsBackBtn`, `statsPage`, `statsColumns`. |
| `data-i18n` / `data-i18n-html` attributes | scattered in DOM | `index.html` | Untouched; `applyTranslations` (src 2030–2053) still walks them. |

---

## 6. Legacy-bundle transition

`app/src/legacy/game.ts` starts as a **nearly-verbatim** paste of the script body (src 1588–8595), wrapped:

```ts
// app/src/legacy/game.ts — phase 0 seed
import { game } from '../state/gameState';       // added progressively
import { FLOORS, ROOMS_PER_FLOOR, COMBAT_ROOMS, BASIC_OBSTACLES } from '../content/floors';
// …one import per extracted constant/module…

(function () {
  // --- original top-of-script globals that haven't been extracted yet ---
  const canvas = document.getElementById('game') as HTMLCanvasElement;
  let ctx = canvas.getContext('2d')!;
  const mainCtx = ctx;
  const W = canvas.width, H = canvas.height;
  // …
  // --- body shrinks as phases progress ---
})();
```

### Invariants

1. **Nobody imports `legacy/game.ts`.** It's a sink. `main.ts` imports it for the side effect of running the IIFE; other modules do not reach into it. No symbol inside the IIFE is ever `export`-ed.
2. **The IIFE reads from modules but modules do not read from it.** Extracted modules export; `legacy/game.ts` imports them at the top. Every extraction is: (a) add the `export` in the target module, (b) remove the declaration from the IIFE, (c) add the import at the top of the IIFE.
3. **Stateful singletons move first.** `game`, `world`, `camera`, and `ctx` are referenced by nearly every function. Extracting them in phase 2 (before any entity/system extraction) lets every later extraction import from a stable surface.
4. **Circular-import guard.** The IIFE may do `import { Player } from '../entities/Player'` once `Player` is extracted, but `Player.ts` must NEVER `import` from `legacy/game.ts`. If you ever find you need to, the symbol in the IIFE is in the wrong phase — hoist it out first.
5. **Shrinking is monotonic.** Each phase reduces the IIFE's line count. By end of phase 3e, the IIFE body should be ≤20 lines of bootstrap, which moves into `main.ts` and the folder is deleted.

### Why this works

The original file is already a single giant IIFE in effect (all globals are closed over by the DOMContentLoaded-implicit scope of an inline `<script>`). Wrapping it in `(function(){…})()` and importing individual modules into that scope is semantically equivalent to the starting state, provided every extracted symbol is imported back. TypeScript strict mode will catch any missing-import mistakes at build time.

---

## 7. Tauri + Capacitor integration

T2 already scaffolded the native shells. This plan adds the TS-side contract. Everything lives under `platform/`.

```ts
// platform/PlatformBridge.ts
export interface PlatformBridge {
  readonly kind: 'web' | 'tauri' | 'capacitor';
  // Storage (sync-feeling API; wrappers internally await where needed).
  getItem(key: string): string | null | Promise<string | null>;
  setItem(key: string, value: string): void | Promise<void>;
  removeItem(key: string): void | Promise<void>;
  // Lifecycle hooks.
  ready(): Promise<void>;
}
```

### Sync vs. async — the compromise

The original code calls `localStorage.getItem/setItem` synchronously (src 2057, 2063, 2071, 2082, 6665, 6685, etc.) and expects immediate return. Tauri's fs API and Capacitor's Preferences API are async-only. Strategy:

1. `save/prefs.ts` and `save/checkpoint.ts` expose a **sync** façade for web (the current code path) and a **hydrate-at-boot** façade for native:
   - At app start, `main.ts` awaits `PlatformBridge.ready()` which pulls every `zr_*` key into an in-memory cache.
   - Subsequent reads hit the cache synchronously.
   - Writes go into the cache synchronously AND fire-and-forget a persist to the native side (`void PlatformBridge.setItem(…)`).
2. This keeps every existing callsite unchanged — `readCheckpointsArray()` stays sync.
3. The only place awaits exist is `main.ts` startup and the persist tail (which we don't await).

### Per-platform storage implementations

| Key | Web | Tauri | Capacitor |
|---|---|---|---|
| `zr_checkpoints` | `localStorage` | `$APP_DATA/zr_checkpoints.json` via `@tauri-apps/api/fs` | `Preferences.set({ key:'zr_checkpoints', value: json })` |
| `zr_lang`, `zr_skin`, `zr_class`, `zr_env`, `zr_autofire`, `zr_crazy_dave` | `localStorage` | same file dir, one JSON file per key OR a single `prefs.json` | `Preferences` under each key |
| Legacy `zr_checkpoint` migration | inline in bridge | inline in bridge | inline in bridge |

**JSON payload is identical across platforms** — the `SavedCheckpoint` schema (§4) is the wire format. A web save can be exported and loaded in Tauri.

### Runtime bootstrap

`main.ts`:
```ts
import { selectPlatform } from './platform/detect';
import { applyNativeBootstrap } from './platform/native-bootstrap';
const bridge = selectPlatform();
await bridge.ready();
await applyNativeBootstrap();    // StatusBar.hide + ScreenOrientation.lock on native
// …load saved lang/skin/etc. from cache…
// …start loop…
```

`detect.ts` does `Capacitor.isNativePlatform() ? capacitor : ('__TAURI__' in window ? tauri : web)`.

`native-bootstrap.ts` is the implementation of T2's §5 stub (StatusBar.hide + ScreenOrientation.lock inside an `isNativePlatform()` guard).

---

## 8. Open questions / risks

### Must be resolved before phase 2

1. **`ctx` reassignment in `drawSkinPreview` (src 8441–8452).** The function mutates the module-global `ctx` to retarget `drawPlayerSprite` onto a preview canvas, then restores it. Two options:
   - (a) `engine/canvas.ts` exports `ctx` as a `let` + `setCtx(nextCtx)`; `drawSkinPreview` calls `setCtx(pctx)` / `setCtx(mainCtx)`. Simple, preserves behavior. **Recommended.**
   - (b) Refactor `drawPlayerSprite` to take a `ctx` parameter. Cleaner, but touches every caller.
   Ship with (a) in phase 2; consider (b) as a post-phase-5 cleanup.

2. **`_generateObstaclesLegacy_DEPRECATED` vs. the live stub.** `generateObstacles` at src 6331–6336 returns `[]` ("All collidable terrain stripped"). The deprecated fn at 6360–6457 still contains the real logic (gaps, platforms, chokepoints, arena rings). Questions:
   - Is the stripped version final design? If yes, delete the DEPRECATED fn in phase 5 and drop `ROOM_ARCHETYPES`+`archetypeForRoom` alongside it (they're still referenced by `generateHazards` for the hazardfield branch — keep `archetypeForRoom` for that single use).
   - If not, resurrecting it is a content decision, not a refactor decision; keep as-is until the user decides.

3. **`ROOM_ARCHETYPES` (src 6300–6307) is mostly dead machinery.** Only the `hazardfield` branch of `generateHazards` (6341–6358) consumes it. `generateObstacles` ignores the result. We can either:
   - Keep the array + `archetypeForRoom` for `generateHazards` only.
   - Delete the array, inline the `'hazardfield'` literal, remove `archetypeForRoom` entirely. **Lower-risk in phase 5; preserves hazardfield behavior exactly.**

4. **Gamepad — confirmed ABSENT in current source.** `grep -i "gamepad\|navigator\.getGamepads"` returns zero matches across the full HTML. The prior survey's mention was wrong. **Do not allocate a `systems/gamepad.ts`.** Input surfaces are: keyboard (src 2117–2200), mouse (2201–2212), touch joystick (8512–8583), mobile buttons (8585–8594), and Web Speech API (1657–1679).

### Should be watched during phases 3–4

5. **No test harness for balance preservation.** There's no automated check that `UPGRADES[].max` / `ZTYPES[].damage` / `DIFFICULTY_TIERS[].dmgMul` land identically. Mitigation: in phase 1, write `content/__tests__/snapshot.test.ts` that stringifies `UPGRADES`, `ZTYPES`, `SUPERPOWERS`, `SKINS`, `DIFFICULTY_TIERS`, `FLOORS`, `THEMES` and snapshots them. Any later accidental edit fails CI. Vitest is a ~5-line devDep add.

6. **`Zombie.ts` will be the largest module (~2,000 lines).** Boss AI branches (`boss_necro`, `boss_berserker`, `boss_queen`) are in-class. Splitting per-boss would require either per-type handler modules (good long-term) or a visitor pattern (over-engineered). Keep as a single class in phase 3; re-evaluate after phase 5 if iteration speed suffers.

7. **Duplicated `raise`/`slam`/`quake`/`fan-shot` code in Zombie.** The boss update loop at 3886–4689 and the die-path at 4783–4931 both reimplement summon/slam logic. The original's `bossVariantsSeen` machinery (src 3926–3945) layers prior variants' abilities onto the current boss. This survives the refactor untouched; flagging because it's dense and easy to break when extracting.

8. **ES5-style ambient DOM references.** `$('id')` shorthand is defined once (somewhere around the `statsPage` block — verify in phase 0) and used across every UI function. Expose it as a default-export from `ui/dom.ts`.

9. **`performance.now()` vs. RAF `now` drift.** `loop(now)` uses the RAF `now` (src 8042–8044), while `saveCheckpoint`/`formatRelativeTime` use `Date.now()` (src 6640, 6716) and `statsPanel` uses `performance.now()` (7568). No change — each caller picks its clock deliberately. Document in `engine/time.ts` JSDoc.

10. **Touch auto-fire default behavior.** src 8497–8501 sets `zr_autofire='1'` on first touch-device visit if unset. Preserve this exact boot-time side effect in `platform/web.ts`'s hydration — do not move it to generic startup code where it would misfire on desktop.

### Disposition of `app/src/versions/v1/`

The prior scaffold has files that overlap in name with this plan (`entities/Player.ts`, `entities/Zombie.ts`, `i18n/en.ts`, `state.ts`, etc.) but different shapes. **Rules:**
- **Do not import from `versions/v1/` at any phase.** Not even for reference — reading the current HTML is the source of truth.
- Leave the folder on disk untouched through phase 4.
- **Delete `versions/v1/` in phase 5** as a single `rm -rf` once the new tree is green. Add a commit that only does the delete, so bisect stays clean if anything regresses.
- If phase-4 review turns up a clever trick in `versions/v1/` worth salvaging, lift it by hand into the new tree — do not wire the two trees together.

### Risks flagged, not blocking

11. **CSP + inline `<style>`.** T2 set `style-src 'unsafe-inline'` for this. Once `<style>` moves to `src/index.css`, we can tighten to `'self'` in a later CSP pass — not in this refactor's scope.
12. **Crazy Dave voice lines use Web Speech API.** Not all Tauri WebViews support `SpeechSynthesisUtterance`; fail gracefully (the try/catch at src 1660–1666 already does). Log once per boot on native.
13. **`OffscreenCanvas` fallback** at src 2316–2317 already checks `typeof OffscreenCanvas !== 'undefined'`. Keep as-is.
14. **`game.skinId` defaults to `'default'`** (src 2778), but `main.ts` loads the saved skin before the first frame (8470–8471). Order is load-bearing: `loadSavedSkin()` must run before `renderSkinCards()` and before the first `drawWorld()` that calls `getSkin()`. Preserve this order in the new `main.ts`.

---

## Sign-off criteria for phase-by-phase review

- Each phase ships with: (a) `npm run build` green, (b) `npm run dev` launches to menu, (c) a saved checkpoint from the previous phase still loads and resumes correctly, (d) every overlay opens and closes, (e) a 30-second playthrough kills ≥20 zombies without console errors. No phase lands if any of these regresses.
