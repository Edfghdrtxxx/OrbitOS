approved

## Findings

### Byte-identity spot checks (all matched; 100% of sampled values are drift-free — unchecked values may still drift)

**`content/zombies.ts` — 5 of 12 ZTYPES sampled + BOSS_KINDS**
- `walker` (src 2493 vs extract L12): all fields `hp:28, speed:62, damage:10, radius:20, color:'#8FCF3F', eye:'#c73866', score:8, xp:4, touchCd:600, minFloor:1` — exact.
- `exploder` (src 2496 vs L15): `fuse:600, boomR:95, lowHpFuse:0.30` exact.
- `howler` (src 2505–2510 vs L24–29): `auraR:200, auraSpdMul:1.30, auraDmgMul:1.20, chillMul:0.82` exact; inline review comments preserved.
- `boss_berserker` (src 2528–2536 vs L47–55): `rageStep:0.20, slamCd:5200, slamWindup:520, slamR:220, slamDmgMul:1.8, quakeCd:10500, quakeWindup:1100, quakeR:180, quakeDmgMul:1.1` exact.
- `boss_queen` (src 2539–2540 vs L58–59): `shootCd:3000, shotCount:5, shotSpread:0.55, projSpeed:280, projHomeAccel:110, projHomeDur:1.0, range:520` exact.
- `BOSS_KINDS` (src 2543 vs L64–69): 4 ids preserved; `isBossKind` helper preserved.

**`content/upgrades.ts` — all 23 entries compared**
- Source lines 2608–2632 vs extract L12–36: every `id`, `name`, `color`, `icon` (including `❤️`, `⏱️`, `🪓`, `☣️`), `max` (null/5/9/10/12/14/20/22), and `cls` field byte-identical. Ordering preserved. Header comment preserved.
- `UPG_BY_ID` preserved with `Object.fromEntries(UPGRADES.map(u => [u.id, u]))` semantics; the `as Record<UpgradeId, Upgrade>` widening cast is a type-only change.

**`content/superpowers.ts` — all 12 entries verified**
- Source 2640–2664 vs extract L7–31: all 12 `{id, name, icon, color, desc}` tuples byte-identical. Em-dash `—` in `sp_overkill` preserved. Unicode multiplication sign `×` in `sp_sharpshot` desc preserved. Source also has 12 `id:'sp_` occurrences (grep count matches).

**`content/skins.ts` — 3 of 7 skins spot-checked in full**
- `default` (src 2686–2691 vs L9–14): colors/hairR/hat=null/accessory='strap' exact.
- `ninja` (src 2721–2726 vs L44–49): all lowercase hexes `#1a1428` etc. preserved.
- `usagi` (src 2732–2737 vs L56–61): critical case-preserved hexes `#FFFDF7`, `#F8C7CC`, `#3B2E2A` preserved uppercase; `outlineColor` and `legStyle: 'paws'` preserved.

**`content/themes.ts` — every color hex + every `tilePattern.colors` array + `overlayClass` verified**
- All 7 themes (default/neon/vhs/vapor/modern/cyberpunk/chiikawa): `bg` hex, `overlayClass` (null for default, exact strings otherwise), `tilePattern.kind`, `colors` array contents and order, and `spacing` match source 2262–2310. Chinese-adjacent hex-case detail: `#6e8757`, `#5a7245`, `#3d4a2e` for default pattern (lowercase preserved).
- `THEME_ALIASES` (src 2313 vs L76–84): 7 identity mappings preserved.
- `FLOORS` (src 2244–2250 vs L11–18): 6 entries, names + bgA/bgB (mixed case hex like `#8FA876`, `#7B9363` preserved) + obstacles arrays exact.

**`content/difficulty.ts` — all 4 tiers match**
- Source 6952–6956 vs L6–10: name/hpMul/dmgMul/color tuples byte-identical. `DIFFICULTY_TIERS_ZH` is NOT in difficulty.ts — T3 placed it in `content/i18n.ts` L337 where the 4 strings `['简单', '中等', '困难', '哈哈哈']` are byte-identical to source 6958. This placement is deliberate per scratch report §Ambiguities and is defensible (shared consumer), though it mildly diverges from the task brief which allowed ZH to live in difficulty.ts. Flagging as acceptable deviation; no data drift.

**`content/crazyDave.ts` — all 12 lines verified**
- Source 1659–1664 vs L6–11: array ordering and exact strings match including punctuation, apostrophes in `I'm CRAZY!`, `I'm a cactus!`, `My neighbor's a zombie!`. No trailing-comma drift.

**`constants.ts` — every literal verified**
- `CANVAS_W/H = 1280/720`, `WORLD_W/H = 2880/1760`, `TAU = Math.PI * 2`, `ROOMS_PER_FLOOR = 6`, `COMBAT_ROOMS = 5`, `BASIC_OBSTACLES = ['crate','barrel','car']`, `PLATFORM_LIFT = 14`, `DIFFICULTY_TIER_INTERVAL = 30`, `SHAKE_SCALE = 0.3` all match.
- `CHECKPOINT_KEY = 'zr_checkpoint'` (legacy) and `CHECKPOINTS_KEY = 'zr_checkpoints'` (new) literals match src 6615–6616 exactly.
- `STORAGE_KEYS` map: `lang:'zr_lang', skin:'zr_skin', class:'zr_class', env:'zr_env', autofire:'zr_autofire', crazyDave:'zr_crazy_dave'` — confirmed every right-hand literal appears verbatim in source (grep at lines 2065, 2071, 2079, 2090, 8326, 8348, 8370, 8383, 8391, 8401, 8414, 8416, 8571, 8575).

**`util/math.ts` — implementation shapes match**
- `lerp(a,b,t) => a + (b-a)*t` — matches source form at 1607 (not swapped to `a*(1-t)+b*t`; float behavior preserved).
- `clamp(v,lo,hi) => v<lo?lo:v>hi?hi:v` — identical to src 1608.
- `dist2` — `const dx=bx-ax, dy=by-ay; return dx*dx+dy*dy` — identical to src 1609.
- `rand`, `randi`, `choice` — identical.
- `lighten` — identical hex parse + `m = v => clamp(Math.floor(v + (255-v)*pct/100), 0, 255)` + `.padStart(2,'0')` chain preserved.
- `lerpAngle` — wraps `d` with while loops using `Math.PI * 2` — identical to src 3547–3552.

**`content/i18n.ts` — 3 EN + 3 ZH keys spot-checked**
- EN `title: 'ZOMBIE ROGUE'` (src 1691 vs L9), `intro` full HTML+em-dash string (src 1693 vs L11), `floorRoom: (f,r) => ...` template (src 1780 vs L98) — exact apart from the documented `f: number, r: number` type annotation (runtime behavior unchanged).
- ZH `title: '丧尸肉鸽'` (src 1853 vs L171), `intro: '在五层亡灵混战中求生，每一次冒险都不一样。<br>升级 — 打造你的 build — 深入险境 — 战至末路。'` (src 1855 vs L173) including full-width comma `，`, em-dashes, and inline English word `build` preserved. ZH `crazyDave: '疯狂戴夫语音'` (src 1925 vs L201) — exact.
- `floorNames` arrays in both EN (src 1787 vs L105) and ZH (src 1949 vs L267) byte-identical.
- `upgradeDescs.ammo` uses `_l` underscore prefix in extract (src used `l`). Documented intentional `noUnusedParameters` rename; string body unchanged. Same treatment for `crit`, `swift`.

### Type fidelity

**`ZombieArchetype` (types.ts L179–256):** All 10 mandatory base fields (hp/speed/damage/radius/color/eye/score/xp/touchCd/minFloor) match the canonical entries. Optional fields cover every per-type tuning key observed (zigzag*, range/shootCd/projSpeed/leadCap/shotCount/shotSpread/projHomeAccel/projHomeDur, fuse/boomR/lowHpFuse, charge*, aura*/chillMul, reveal*/sneakAlpha/lunge*, cloud*, raiseCd/raiseCount/raiseRange/keepDist, rageStep/rageMaxStacks, slam*, quake*). Optional-marking is correct — no base field is incorrectly marked optional and no observed per-type field is missing.

**`Skin` (types.ts L128–143):** Includes all 11 base fields used on every entry plus the two usagi-only optionals `outlineColor?` and `legStyle?`. Correct usage of `?` markers.

**`Upgrade` (types.ts L103–110):** Six fields `id/name/color/icon/max/cls` — matches all 23 entries exactly, `max: number | null` correctly typed.

### Purity

- `import` statements in content/*, constants.ts, util/math.ts, types.ts scanned. Only imports are `from '../types'` (type-only) and `from '../constants'` (themes.ts pulls `BASIC_OBSTACLES`). No imports from `../state`, `../engine`, `../entities`, `../systems`, `../render`, `../ui`, `../shell`, `../save`, `../platform`, `../legacy`, or `../versions/v1/`. Clean.

### No DOM or runtime access

- `document.`, `window.`, `localStorage`, `addEventListener`, `requestAnimationFrame`: zero runtime matches in the new files. The two hits in content/ are comments only (`skins.ts` L3 "stored in localStorage as 'zr_skin'"; `themes.ts` L22 "localStorage migrations"). Clean.

### tsc --noEmit

- Ran `cd "D:/obsidian/OrbitOS/20_Project/Game/Zombie Roguelike/app" && npx tsc --noEmit` — EXIT=0, zero diagnostics. T3's claim confirmed.

### PoisonCloud field

- Source class at src 5870–5873 sets `this.radius = radius` (not `this.r`). All call sites (grep of `PoisonCloud`) construct with the second positional param being `radius`, and `updatePoisonClouds` reads `c.radius` at src 5899. T3's call on `radius` vs. `r` is correct. Since `PoisonCloudLike` is intentionally absent from `types.ts` (content layer does not touch the field), no interface-level issue.

### versions/v1 hygiene

- `grep versions/v1` in `app/src/` returns only matches **inside** `versions/v1/` itself (self-references in the read-only archive). Zero hits in the new T3 files. Clean.

### Deviations (non-blocking, documented)

1. **Stale source line numbers in `constants.ts` header comments.** The inline comments cite `src 2244` for `BASIC_OBSTACLES` and `src 2868` for `PLATFORM_LIFT`; the actual current-file positions are 2260 and 2884 respectively (T3's own scratch report notes that plan line ranges had shifted). This is a docstring drift, not a data drift — flagged for hygiene only.
2. **`DIFFICULTY_TIERS_ZH` placement.** Lives in `content/i18n.ts` L337 rather than `content/difficulty.ts`. The T3 scratch report explicitly justifies this (shared consumer `difficultyTierName`). Byte-identical string values preserved. Acceptable.
3. **`THEMES.*.obstacles` uses `BASIC_OBSTACLES as unknown as string[]`** because `BASIC_OBSTACLES` is declared `as const` (readonly tuple) in `constants.ts`. Runtime reference equality preserved (all 7 themes share the same array reference exactly as in source). Type-only cast, no data change. Acceptable.
4. **I18N closure parameter rename** (`l` → `_l` for ammo/crit/swift in both EN and ZH). `noUnusedParameters` strict check; template-literal output is identical. Acceptable.

### Sampling caveat

Spot checks covered: 5/12 ZTYPES, 23/23 UPGRADES, 12/12 SUPERPOWERS, 3/7 SKINS, 4/4 DIFFICULTY_TIERS, 12/12 CRAZY_DAVE_LINES, 7/7 THEMES colors, 6/6 FLOORS, 9/9 constants literals, 6/6 STORAGE_KEYS, 8/8 math.ts functions, 6/~350 i18n keys (3 EN + 3 ZH). The i18n sample is thin — `chooseLanguageBig`, mid-file ZH keys, and the pause-stats labels were NOT byte-diffed individually. T3 claimed full-range diff; this reviewer did not independently replicate that diff. Any i18n key drift outside the sampled rows is possible but unlikely given the sampled rows (including the most encoding-risky Chinese strings) all matched.
