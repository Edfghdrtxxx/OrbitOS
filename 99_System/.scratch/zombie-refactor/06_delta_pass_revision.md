# T6 Delta-Pass Revision — Boss Content Module Drift

**Scope:** `app/src/content/*.ts` only (per task constraints; legacy/game.ts
explicitly out-of-scope this pass).

## 1. Primary fix: `app/src/content/zombies.ts` boss rows

Re-ported all 4 boss archetype rows byte-for-byte from the authoritative source
`zombie_roguelike.html` (ZTYPES block spans src 2532–2581).

### `boss` (src line 2538 → module line 17)

| Field   | Old (module) | New (source) |
|---------|--------------|--------------|
| hp      | 1100         | 22000        |
| speed   | 60           | 1200         |
| damage  | 16           | 320          |
| radius  | 58           | 1160         |
| score   | 320          | 6400         |
| xp      | 140          | 2800         |
| touchCd | 600          | 12000        |

(`color`, `eye`, `minFloor` unchanged.)

### `boss_necro` (src lines 2564–2565 → module lines 43–44)

| Field       | Old (module) | New (source) |
|-------------|--------------|--------------|
| hp          | 650          | 13000        |
| speed       | 55           | 1100         |
| damage      | 14           | 280          |
| radius      | 50           | 1000         |
| score       | 320          | 6400         |
| xp          | 140          | 2800         |
| touchCd     | 600          | 12000        |
| raiseCd     | 4000         | 80000        |
| raiseCount  | 3            | 60           |
| raiseRange  | 360          | 7200         |
| keepDist    | 360          | 7200         |

(`color`, `eye`, `minFloor` unchanged.)

### `boss_berserker` (src lines 2568–2576 → module lines 47–55)

| Field          | Old (module) | New (source) |
|----------------|--------------|--------------|
| hp             | 1300         | 26000        |
| speed          | 70           | 1400         |
| damage         | 18           | 360          |
| radius         | 56           | 1120         |
| score          | 360          | 7200         |
| xp             | 160          | 3200         |
| touchCd        | 500          | 10000        |
| rageStep       | 0.20         | 4.0          |
| rageMaxStacks  | 3            | 60           |
| chargeRange    | 220          | 4400         |
| chargeWindup   | 320          | 6400         |
| chargeDur      | 380          | 7600         |
| chargeCd       | 3500         | 70000        |
| chargeSpdMul   | 2.6          | 52           |
| chargeDmgMul   | 1.5          | 30           |
| slamCd         | 5200         | 104000       |
| slamWindup     | 520          | 10400        |
| slamR          | 220          | 4400         |
| slamDmgMul     | 1.8          | 36           |
| quakeCd        | 10500        | 210000       |
| quakeWindup    | 1100         | 22000        |
| quakeR         | 180          | 3600         |
| quakeDmgMul    | 1.1          | 22           |

(`color`, `eye`, `minFloor` and comment lines unchanged.)

### `boss_queen` (src lines 2579–2580 → module lines 58–59)

| Field         | Old (module) | New (source) |
|---------------|--------------|--------------|
| hp            | 950          | 19000        |
| speed         | 50           | 1000         |
| damage        | 12           | 240          |
| radius        | 52           | 1040         |
| score         | 340          | 6800         |
| xp            | 150          | 3000         |
| touchCd       | 600          | 12000        |
| shootCd       | 3000         | 60000        |
| shotCount     | 5            | 100          |
| shotSpread    | 0.55         | 11           |
| projSpeed     | 280          | 5600         |
| projHomeAccel | 110          | 2200         |
| projHomeDur   | 1.0          | 20           |
| range         | 520          | 10400        |

(`color`, `eye`, `minFloor` unchanged.)

## 2. Secondary scan — within-line drift across the ZTYPES block

Non-boss rows (walker, runner, spitter, exploder, brute, howler, stalker,
bloater) compared line-for-line against source 2533–2558. Result: all
byte-identical.

Verification (post-fix):

```
$ sed -n '2532,2581p' zombie_roguelike.html > /tmp/ztypes_src.txt
$ sed -n '11,60p' app/src/content/zombies.ts > /tmp/ztypes_ext.txt
$ diff /tmp/ztypes_src.txt /tmp/ztypes_ext.txt
1c1
< const ZTYPES = {
---
> export const ZTYPES: Record<ZombieTypeId, ZombieArchetype> = {
```

Only the declaration-line TS type annotation differs. All 50 data/comment lines
are byte-identical.

`BOSS_KINDS`: source line 2583 = `new Set(['boss', 'boss_necro', 'boss_berserker', 'boss_queen'])`.
Module (zombies.ts lines 64–69) holds the same 4 ids in the same order. No change.

## 3. Secondary scan — other content modules

| Module           | Source lines | Method                                               | Result        |
|------------------|--------------|------------------------------------------------------|---------------|
| `upgrades.ts`    | 2643–2673    | Read both; visual row-by-row compare of 23 entries   | Byte-identical |
| `superpowers.ts` | 2680–2705    | Read both; visual compare of 12 entries              | Byte-identical |
| `skins.ts`       | 2724–2779    | Read both; visual compare of 7 entries               | Byte-identical |
| `themes.ts`      | 2284–2353    | Read both; compare FLOORS(6), THEMES(7), THEME_ALIASES | Byte-identical |
| `difficulty.ts`  | 7082–7087    | Read both; compare DIFFICULTY_TIERS(4)               | Byte-identical |
| `i18n.ts`        | 1729–2054    | `diff` of both blocks (326 vs 331 lines)             | Only TS parameter annotations added (`(l)` → `(l: number)`, `(_l: number)` for unused params, `export const I18N: I18NRoot` on decl line); all string content, template literals, Math expressions, and key ordering byte-identical |

No numeric or string drift found outside the 4 boss rows in zombies.ts.

## 4. `tsc --noEmit` result

```
$ cd app && npx tsc --noEmit ; echo "EXIT=$?"
EXIT=0
```

Clean. No type errors.

## 5. Scope confirmation

- Only edited: `app/src/content/zombies.ts` (4 boss rows).
- `npm run build` / `vite build` NOT run (per Tauri-in-flight constraint).
- Live HTML source NOT modified.
- No files outside `app/src/content/` touched.
