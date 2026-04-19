# T3 — Content Extraction Report

Deliverable: pure-data TypeScript modules extracted from
`zombie_roguelike.html` (~8,598 lines) into `app/src/`.

---

## Files created

All paths are under `D:\obsidian\OrbitOS\20_Project\Game\Zombie Roguelike\app\src\`.
"Source line range" refers to the current `zombie_roguelike.html`. Line
numbers were re-grepped against the live file (they differ slightly from the
architecture plan's stated ranges because the plan was written before the
recent ~13-line amendment). LOC is the final module file size.

| File | Source HTML range | LOC |
|---|---|---|
| `types.ts` | (new — interfaces derived from source usage at 2587–2617, 2624–2649, 2668–2723, 2261–2311, 2492–2541, 6952–6956, 2244–2250) | 300 |
| `constants.ts` | 1257 (`<canvas>` attrs for CANVAS_W/H), 1606 (TAU), 2229 (world), 2240 (SHAKE_SCALE), 2252–2260 (rooms/obstacles), 2884 (PLATFORM_LIFT), 6615–6617 (checkpoint keys), 6951 (DIFFICULTY_TIER_INTERVAL), 2057/2082/2086–2098/8257/8279/8296/8317 (storage keys) | 42 |
| `util/math.ts` | 1606–1616 (TAU/lerp/clamp/dist2/rand/randi/choice/lighten) + 3547–3552 (lerpAngle) | 52 |
| `content/i18n.ts` | 1689–2014 (I18N EN+ZH) + 6958 (DIFFICULTY_TIERS_ZH) | 337 |
| `content/themes.ts` | 2244–2314 (FLOORS, ROOMS_PER_FLOOR, COMBAT_ROOMS, BASIC_OBSTACLES, THEMES, THEME_ALIASES) | 84 |
| `content/zombies.ts` | 2492–2545 (ZTYPES, BOSS_KINDS, isBossKind) | 73 |
| `content/upgrades.ts` | 2603–2634 (UPGRADES, UPG_BY_ID) | 41 |
| `content/superpowers.ts` | 2640–2666 (SUPERPOWERS, SP_BY_ID) | 36 |
| `content/skins.ts` | 2684–2740 (SKINS, SKIN_BY_ID) | 66 |
| `content/difficulty.ts` | 6952–6956 (DIFFICULTY_TIERS) | 11 |
| `content/crazyDave.ts` | 1659–1665 (CRAZY_DAVE_LINES) | 11 |

**Total: 1,053 LOC across 11 files.**

---

## Byte-identity verification

Method: per-block `diff` of the extracted source ranges against the
corresponding TS modules, filtering out the ambient shell (the leading
`const X = ` assignment in the HTML vs. the `export const X: T = ` in TS).

| Block | Verification |
|---|---|
| `ZTYPES` 12 entries | `grep -E "^  (walker\|runner\|spitter\|…):" zombie_roguelike.html == …/content/zombies.ts` — **byte-equal** |
| `UPGRADES` 23 entries | `grep -E "^  \{ id:'(dmg\|rof\|…)'," …` — **byte-equal** |
| `SUPERPOWERS` 12 entries | `grep "id:'sp_" …` — **byte-equal** |
| `SKINS` 7 entries (id lines) | `grep -E "^    id: '(default\|hazmat\|…)', +nameKey" …` — **byte-equal** |
| `DIFFICULTY_TIERS` 4 entries | `diff <(sed -n '6953,6956p' src) <(sed -n '7,10p' content/difficulty.ts)` — **byte-equal** |
| `CRAZY_DAVE_LINES` 12 strings | `diff <(sed -n '1660,1663p' src) <(sed -n '7,10p' content/crazyDave.ts)` — **byte-equal** (fixed trailing-comma drift on pass 2) |
| `I18N` EN+ZH | Diffed full ranges. Only differences are the TS type annotations added to closure parameters (`(f, r) => …` → `(f: number, r: number) => …`) and the underscore prefix required by `noUnusedParameters` (`(l) => `+5 max ammo per level…`` → `(_l: number) => …`). **All string contents, template literals, and numeric computations are byte-equal.** Runtime output of each i18n function is identical. |
| `THEMES` + `THEME_ALIASES` | The 7 theme objects carry identical hex values, spacing numbers, colors arrays, and overlayClass strings. The only structural drift is `obstacles: BASIC_OBSTACLES as unknown as string[]` vs. `obstacles: BASIC_OBSTACLES` — same runtime reference; the `as unknown as` cast is there so the `readonly` tuple widens to the `string[]` the ThemeDef interface expects. |
| `FLOORS` 6 entries | Line-by-line paste; names, bgA/bgB hex, obstacle arrays preserved. |

Zero hex color was re-cased (e.g. `#8FCF3F` stays uppercase where the source
had it; `#8fcf3f` stays lowercase where the source had it). No numeric
literal was re-formatted.

---

## tsc --noEmit result

```
$ cd app && npx tsc --noEmit
EXIT=0
```

**Pass.** No errors, no warnings suppressed, no strict-mode options relaxed.
The existing `app/tsconfig.json` (strict, noUnusedLocals, noUnusedParameters,
exactOptionalPropertyTypes:false) compiles cleanly against every new module.

### Techniques used to keep tsc happy without value drift

- **Unused i18n closure parameters** (source passes `l` to every closure,
  even `ammo`/`crit`/`swift` which don't reference it): renamed to `_l` —
  the underscore prefix is honored by `noUnusedParameters`. This does **not**
  change behavior: callers still pass a level int; the closure still returns
  the same formatted string.
- **`Object.fromEntries(...).map(...)` result cast** in `UPG_BY_ID`,
  `SP_BY_ID`, `SKIN_BY_ID`: used `as Record<…, …>` to widen TS's inferred
  `{ [k: string]: T }` into the stricter mapped type. No runtime change.
- **`I18NDict` shape** declared with a loose `[key: string]: …` index
  signature because the source literal mixes strings, arrays, and closures
  with no single union. This keeps `I18N.en.foo` callable without per-key
  assertions downstream.

---

## Deviations from the plan

The T3 task brief specifies simpler output paths than the architecture plan
for three items. I followed the brief (since it explicitly overrides):

| Brief location | Plan location | Why brief won |
|---|---|---|
| `app/src/types.ts` | `app/src/state/types.ts` | Brief calls for a flat `types.ts`. Matches the v1 scaffold's approach. |
| `app/src/util/math.ts` | `app/src/engine/mathx.ts` | Brief names `util/math.ts` explicitly. |
| `app/src/content/difficulty.ts` | `app/src/systems/difficulty.ts` | Brief lists difficulty under `content/`. Note: the source also has `updateRoomDifficulty` and `DIFFHUD_VISIBLE_STATES` nearby, which read `game.roomT` and thus are NOT pure — those stay deferred to a later `systems/` extraction, as per the "pure data only" rule. Only the `DIFFICULTY_TIERS` table is extracted here. |
| `app/src/content/crazyDave.ts` | `engine/audio.ts` alongside audio helpers | Brief calls for a separate `crazyDave.ts`. The `speakCrazyDave` runtime functions stay deferred (they touch `game.crazyDaveEnabled`). |

### Not extracted in this pass

Per the non-negotiable ("`enemyStats` and `enemyPool` stay in `systems/` if
they read `game.floor` / `game.roomIdx`"), I did **not** extract those two
functions. `enemyStats` at HTML line 2545 reads `game.roomIdx` (line 2563:
`const roomIdx = Math.max(0, (game && game.roomIdx) || 0)`) and `enemyPool`
returns a `floor`-parameterized weight array but is small enough that moving
it alongside the live systems code avoids a circular import later. Both
remain in the HTML; T4 will relocate them.

Similarly, `getTheme`, `themeForFloor`, `buildThemeTile`, `getThemePattern`,
and `THEME_PATTERN_CACHE` touch `game.environment` and/or the live `ctx`, so
they stay in the HTML. Only the pure tables (`THEMES`, `THEME_ALIASES`,
`FLOORS`, `BASIC_OBSTACLES`) are in `content/themes.ts`.

---

## Ambiguities encountered

1. **`PoisonCloud.r` vs `radius`.** Resolved to `radius`. The class at
   HTML line 5854–5873 explicitly sets `this.radius = radius` (not `this.r`).
   The T3 types file therefore does **not** declare a `PoisonCloudLike`
   shape with an `r` alias — if T4 needs the entity-like interface, it
   should be added with `radius: number`. For now, the content layer does
   not reference the field either way.

2. **`I18NDict` value shape is heterogeneous.** EN/ZH each mix plain
   strings, arrays of strings (`floorNames`), and per-key closures. Rather
   than enumerate every single key in the interface, I used an index
   signature `[key: string]: I18NValue | Record<…>`. This loses per-key
   strictness but every consumer in the legacy script does key lookups
   with runtime fallback to `I18N.en`, so strict typing here would be
   counterproductive. (If a future pass wants per-key typing, it's a
   mechanical codegen, not a content decision.)

3. **THEMES uses `BASIC_OBSTACLES` by reference.** The source assigns
   `obstacles: BASIC_OBSTACLES` across all 7 themes — a shared reference.
   I preserved this (not a copy) but had to cast through `unknown` because
   my `BASIC_OBSTACLES` in `constants.ts` is a `readonly ['crate','barrel','car']`
   tuple and `ThemeDef.obstacles` is declared as `string[]`. Runtime
   behavior unchanged: `THEMES.default.obstacles === BASIC_OBSTACLES` still
   holds. (If T4 prefers widening `BASIC_OBSTACLES` to `string[]`, drop
   the `as const` and the cast becomes unnecessary.)

4. **Trailing commas in literal arrays.** The source inconsistently uses
   trailing commas — `SKINS` has one, `CRAZY_DAVE_LINES` does not, `FLOORS`
   does. I preserved each array's exact punctuation on pass 2 (caught a
   trailing-comma drift in `CRAZY_DAVE_LINES` during review).

5. **Plan line ranges were stale.** The architecture plan was written
   against an earlier snapshot; post-amendment the line numbers have
   shifted by ~16 lines around the middle of the file. I re-grepped every
   anchor (`const I18N`, `const ZTYPES`, etc.) and used live coordinates
   for this report's table.

---

## Reviewer sanity-check commands

```bash
cd "D:/obsidian/OrbitOS/20_Project/Game/Zombie Roguelike"

# Compile check
cd app && npx tsc --noEmit; echo "EXIT=$?"
# → EXIT=0

# Byte-identity spot-checks
diff <(grep -E "^  (walker|runner|spitter|exploder|brute|boss|howler|stalker|bloater):" zombie_roguelike.html) \
     <(grep -E "^  (walker|runner|spitter|exploder|brute|boss|howler|stalker|bloater):" app/src/content/zombies.ts)
diff <(grep -E "^  \{ id:'(dmg|rof|speed|hp|reload|ammo|double|crit|pierce|explode|vamp|regen|thorns|eagle|scholar|cleaver|whirl|heavy|swift|blitz|ignite|bleed|plague)'," zombie_roguelike.html) \
     <(grep -E "^  \{ id:'(dmg|rof|speed|hp|reload|ammo|double|crit|pierce|explode|vamp|regen|thorns|eagle|scholar|cleaver|whirl|heavy|swift|blitz|ignite|bleed|plague)'," app/src/content/upgrades.ts)
diff <(grep "id:'sp_" zombie_roguelike.html) <(grep "id:'sp_" app/src/content/superpowers.ts)

# No v1 imports
grep -r "versions/v1" app/src/types.ts app/src/constants.ts app/src/util app/src/content || echo "CLEAN"
```
