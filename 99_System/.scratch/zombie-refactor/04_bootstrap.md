# T4 — Game Bootstrap + Playability Wiring

Deliverable: turn the `app/` Vite scaffold into a fully playable version of
`zombie_roguelike.html` by (a) copying CSS + markup into the scaffold, (b)
pasting the remaining game JS as a transitional legacy bundle that imports
T3's extracted constants, (c) wiring it all through `main.ts`.

## Source snapshot

The live `zombie_roguelike.html` (re-verified with `awk 'END{print NR}'`)
is **8799 lines** — the architecture plan's quoted line ranges (8598 lines)
were stale by ~201 lines as of this pass. Boundaries below are from the
current file.

| Region | Source line range |
|---|---|
| `<style>` content | 11 – 1267 |
| `<body>` content | 1271 – 1606 |
| `<script>` content | 1609 – 8796 |

---

## Files created / modified

| File | Lines | Source line range | Notes |
|---|---|---|---|
| `app/src/shell/styles.css` | 1257 | `<style>` 11–1267 | Byte-copy. No CSS reformatting. |
| `app/index.html` | 354 | body content 1271–1606 + fresh head | Google Fonts link, PWA/viewport meta, single `<script type="module" src="/src/main.ts">`. |
| `app/src/legacy/game.ts` | 6650 | `<script>` 1609–8796 | 7188 source lines – 594 removed + 55-line import header + 1-line `export {};` footer. `@ts-nocheck` at top; wrapped in `export function bootLegacyGame() { … }` so DOM lookups fire after `DOMContentLoaded`. |
| `app/src/main.ts` | 12 | new | Imports `styles.css`, then calls `bootLegacyGame()` (on `DOMContentLoaded` or synchronously). Replaces the 16-line placeholder. |

`app/src-tauri/`, `app/capacitor.config.ts`, `app/package.json`,
`app/tsconfig.json`, `app/vite.config.ts`, and `app/src/versions/v1/` were
left untouched.

---

## Symbols removed from `legacy/game.ts`

All declarations listed below were deleted from the extracted script and
replaced with named imports.

| Symbol | Extracted-script line range | Replacement import |
|---|---|---|
| `TAU` | 11 | `../constants` |
| `lerp, clamp, dist2, rand, randi, choice` | 12–17 | `../util/math` |
| `function lighten` | 18–22 | `../util/math` |
| `CRAZY_DAVE_LINES` | 64–69 | `../content/crazyDave` |
| `I18N` (EN + ZH) | 94–419 | `../content/i18n` |
| `SHAKE_SCALE` | 645 | `../constants` |
| `FLOORS` | 649–656 | `../content/themes` |
| `ROOMS_PER_FLOOR` | 657 | `../constants` |
| `COMBAT_ROOMS` | 658 | `../constants` |
| `BASIC_OBSTACLES` | 665 | `../constants` |
| `THEMES` | 666–716 | `../content/themes` |
| `THEME_ALIASES` | 718 | `../content/themes` |
| `ZTYPES` | 897–946 | `../content/zombies` |
| `BOSS_KINDS` | 948 | `../content/zombies` |
| `function isBossKind` | 949 | `../content/zombies` |
| `UPGRADES` | 1008–1038 | `../content/upgrades` |
| `UPG_BY_ID` | 1039 | `../content/upgrades` |
| `SUPERPOWERS` | 1045–1070 | `../content/superpowers` |
| `SP_BY_ID` | 1071 | `../content/superpowers` |
| `SKINS` | 1089–1144 | `../content/skins` |
| `SKIN_BY_ID` | 1145 | `../content/skins` |
| `PLATFORM_LIFT` | 1289 | `../constants` |
| `function lerpAngle` | 1968–1973 | `../util/math` |
| `CHECKPOINT_KEY, CHECKPOINTS_KEY, CHECKPOINT_SLOTS` | 5099–5101 | `../constants` |
| `DIFFICULTY_TIER_INTERVAL` | 5446 | `../constants` |
| `DIFFICULTY_TIERS` | 5447–5452 | `../content/difficulty` |
| `DIFFICULTY_TIERS_ZH` | 5453 | `../content/i18n` |

Total: **594 lines removed, 27 symbols re-imported.** No logic edited.

Top-of-file imports added to `legacy/game.ts`:

```ts
// @ts-nocheck
import {
  TAU,
  WORLD_W, WORLD_H,
  CANVAS_W, CANVAS_H,
  ROOMS_PER_FLOOR, COMBAT_ROOMS, BASIC_OBSTACLES,
  PLATFORM_LIFT,
  DIFFICULTY_TIER_INTERVAL,
  CHECKPOINT_KEY, CHECKPOINTS_KEY, CHECKPOINT_SLOTS,
  STORAGE_KEYS,
  SHAKE_SCALE,
} from '../constants';
import {
  lerp, clamp, dist2, rand, randi, choice,
  lighten, lerpAngle,
} from '../util/math';
import { I18N, DIFFICULTY_TIERS_ZH } from '../content/i18n';
import { FLOORS, THEMES, THEME_ALIASES } from '../content/themes';
import { ZTYPES, BOSS_KINDS, isBossKind } from '../content/zombies';
import { UPGRADES, UPG_BY_ID } from '../content/upgrades';
import { SUPERPOWERS, SP_BY_ID } from '../content/superpowers';
import { SKINS, SKIN_BY_ID } from '../content/skins';
import { DIFFICULTY_TIERS } from '../content/difficulty';
import { CRAZY_DAVE_LINES } from '../content/crazyDave';
```

(`WORLD_W`, `WORLD_H`, `CANVAS_W`, `CANVAS_H`, `STORAGE_KEYS` are imported
but not yet referenced inside the legacy body — the in-script `W = canvas.width`,
inline `2880` / `1760` literals for world dims, and inline `'zr_lang'` etc.
still resolve identically. Keeping them imported is deliberate: later
extractions will swap call-sites onto them without touching imports.)

### Boot wrapper

The original script starts with `const canvas = document.getElementById('game'); let ctx = canvas.getContext('2d');` — these require the body DOM to be parsed. To guarantee that under Vite, the entire script body is wrapped:

```ts
export function bootLegacyGame() {
  const canvas = document.getElementById('game');
  let ctx = canvas.getContext('2d');
  // …7000+ lines…
}
```

`main.ts` calls `bootLegacyGame()` from `DOMContentLoaded` (or immediately
if `document.readyState !== 'loading'`). This is the "simpler option that
actually works" from the T4 brief. `export {};` keeps the file a module.

---

## Verification

### `tsc --noEmit`

```
$ cd app && npx tsc --noEmit
EXIT=0
```

**Pass.** All modules type-check (`types.ts`, `constants.ts`, `util/math.ts`,
`content/*.ts`, `main.ts`) under strict mode. `legacy/game.ts` is ignored
per `@ts-nocheck`.

### `npm run build`

```
$ npm run build
> zombie-roguelike@0.1.0 build
> tsc --noEmit && vite build

vite v5.4.21 building for production...
✓ 15 modules transformed.
dist/registerSW.js              0.13 kB
dist/manifest.webmanifest       0.26 kB
dist/index.html                18.21 kB │ gzip:  4.45 kB
dist/assets/index-Dlx3quzR.css 29.01 kB │ gzip:  6.25 kB
dist/assets/index-Bl2YZTdP.js 146.81 kB │ gzip: 44.95 kB
✓ built in 1.03s

PWA v0.21.2
mode      generateSW
precache  6 entries (192.32 KiB)
files generated
  dist/sw.js
  dist/workbox-8c29f6e4.js
```

**Pass.** PWA service worker + manifest regenerated. Bundle is 146 KB
un-gzipped / 45 KB gzipped — reasonable for a ~6500 LOC game script plus
11 content modules.

### `vite dev`

Spun up `npx vite --port 5176`, confirmed:
- `GET /` → `200` (HTML served, Google Fonts link intact, all 26+ overlay
  DOM ids present).
- `GET /src/main.ts` → `200`.
- `GET /src/legacy/game.ts` → `200`.
- `GET /src/shell/styles.css` → `200`.

The dev server transforms the TS bundle without errors.

---

## Playability verification — honest assessment

**What I verified:**
- `tsc --noEmit` exits 0.
- `npm run build` produces `dist/` with valid PWA artifacts.
- `vite dev` serves the index.html and all three new module entry points
  with HTTP 200.
- `dist/index.html` preserves all key DOM ids (`#game`, `#stage`,
  `#envOverlay`, `#hud`, `#langSelect`, `#menu`, etc.), the Google Fonts
  link, and `data-i18n` attributes — 108 total matches across the index/dist
  output.
- `dist/assets/index-*.js` contains all 8 `zr_*` localStorage keys
  (`zr_autofire`, `zr_checkpoint`, `zr_checkpoints`, `zr_class`,
  `zr_crazy_dave`, `zr_env`, `zr_lang`, `zr_skin`).
- Bundle includes `bootLegacyGame` wrapper semantics — DOM lookup deferred
  to `DOMContentLoaded`.

**What I did NOT verify (could not launch in a real browser):**
- Actual gameplay loop (player moves, shoots, kills zombies).
- Save/load round-trip: write `zr_checkpoints` from a run, reload, resume.
- Language toggle: switching EN↔ZH live re-renders menu copy.
- Skin selection persists across reload.
- Audio (beep/sfx/CrazyDave voice lines).
- Touch joystick + mobile buttons on a mobile viewport.
- Boss variants (necro/berserker/queen) behave identically.
- `versions/v1/` remains untouched and non-importing.

**What the user should manually verify:**
1. Open `http://localhost:5173/` after `npm run dev`, see the language
   picker overlay, click English, reach the menu, click START RUN, play
   for ~30 seconds, confirm no console errors.
2. Hit ESC → "SAVE CHECKPOINT" → reload → "CHECKPOINT PORTAL" — the slot
   should resume at the right floor/room.
3. Open `localStorage` in DevTools, confirm `zr_checkpoints` (and
   `zr_lang` / `zr_skin` / etc.) hold identical JSON shape to what the
   pre-refactor `zombie_roguelike.html` wrote.
4. Run `npm run build && npm run preview`, open the preview URL, verify
   the PWA installs and still runs offline.

---

## Preservation checklist

- [x] `localStorage['zr_checkpoints']` — key literal present in bundle
      (unchanged); `CHECKPOINTS_KEY` in `constants.ts` resolves to
      `'zr_checkpoints'` byte-identically.
- [x] `localStorage['zr_checkpoint']` — legacy key migration preserved.
- [x] `localStorage['zr_lang', 'zr_skin', 'zr_class', 'zr_env', 'zr_autofire', 'zr_crazy_dave']`
      — all present in `STORAGE_KEYS` + bundle output.
- [x] I18N EN/ZH — loaded from `../content/i18n`; legacy body never
      re-declares `I18N`.
- [x] Skins/themes/upgrades/zombies balance — imported from T3 modules;
      no in-legacy re-declaration exists after the strip.
- [x] Google Fonts `<link rel="stylesheet">` for Bangers/Nunito/Noto
      Sans SC/ZCOOL KuaiLe — preserved in `app/index.html` head.
- [x] Service worker / PWA manifest — `npm run build` emits
      `dist/sw.js`, `dist/manifest.webmanifest`, `dist/registerSW.js`.
- [x] PWA viewport + theme-color meta tags — preserved in head.
- [x] All ~50 DOM ids referenced by `applyTranslations()`, `updateHUD()`,
      and overlay openers — preserved in index.html (body markup is a
      byte-copy of source lines 1271–1606).

---

## Remaining un-extracted surface

`legacy/game.ts` still owns **~6595 lines of game logic**. Later phases
should pull out (approximate line ranges inside the legacy file, post-strip):

| Phase | Targets | Approx legacy lines |
|---|---|---|
| Phase 2 finish | `state/gameState.ts` (the `game` singleton literal), `state/world.ts`, `state/camera.ts`, `engine/canvas.ts`, `engine/audio.ts`, `engine/input.ts`, `engine/touch.ts`, `engine/collision.ts`, `save/checkpoint.ts`, `save/checkpointSlots.ts`, `save/prefs.ts` | ~700 |
| Phase 3 | `entities/Particle`, `Explosion`, `PoisonCloud`, `ZombieProjectile`, `Bullet`, `Powerup`, `helpers`, `Zombie`, `Player` | ~3500 |
| Phase 4 | `systems/*` (combat, howler, rooms, enterRoom, spawns, difficulty, upgrades, superpowers, flow, difficultyHud, pendingBooms), `render/*` (world, obstacle, playerSprite, reticle, menuScene, skinPreview), `ui/*` (overlays, hud, upgradeStack, statsPanel, upgradeChoice, superPowerChoice, menu, appearance, bindings), `engine/loop.ts` | ~2300 |
| Phase 5 | Delete `legacy/` folder + `versions/v1/` | 0 |

Nothing in the legacy bundle is `export`-ed from its IIFE. Other modules
must NOT import from `legacy/game.ts` — it remains a side-effect-only sink
until phase 3e deletes it entirely.

---

## Deviations from brief

- **Brief said:** "copy CSS from roughly lines 1–1243." **Actual:** live
  CSS is at 11–1267 (file grew ~24 lines since architecture plan was
  written). Extracted verbatim — 1257 LOC vs. brief's "~1243".
- **Brief said:** "body markup roughly 1244–1591." **Actual:** 1271–1606.
  Content preserved exactly.
- **Brief said:** "script body roughly 1592–8597." **Actual:** 1609–8796.
  Content preserved exactly.
- **`versions/v1/`:** left on disk untouched, not imported from.

No deviations from the preservation contract or the `@ts-nocheck` /
boot-wrapper approach specified in §6 of the architecture plan.
