// Cross-module TypeScript interfaces for the Zombie Roguelike content layer.
// Extracted in T3 from zombie_roguelike.html; field names/shapes mirror the
// runtime usage in the monolithic source. Interfaces here are consumed by
// content/*, constants.ts, and (later) the systems/entities modules.

// =============================================================
// Identifier unions — fixed at data level, grown only by source edits.
// =============================================================

export type LangCode = 'en' | 'zh';

export type PlayerClass = 'ranged' | 'melee';

export type EnvironmentId =
  | 'default'
  | 'neon'
  | 'vhs'
  | 'vapor'
  | 'modern'
  | 'cyberpunk'
  | 'chiikawa';

export type SkinId =
  | 'default'
  | 'hazmat'
  | 'soldier'
  | 'punk'
  | 'scientist'
  | 'ninja'
  | 'usagi';

export type UpgradeId =
  | 'dmg'
  | 'rof'
  | 'speed'
  | 'hp'
  | 'reload'
  | 'ammo'
  | 'double'
  | 'crit'
  | 'pierce'
  | 'explode'
  | 'vamp'
  | 'regen'
  | 'thorns'
  | 'eagle'
  | 'scholar'
  | 'cleaver'
  | 'whirl'
  | 'heavy'
  | 'swift'
  | 'blitz'
  | 'ignite'
  | 'bleed'
  | 'plague';

export type UpgradeClass = 'shared' | 'ranged' | 'melee';

export type SuperPowerId =
  | 'sp_juggernaut'
  | 'sp_glasscannon'
  | 'sp_berserker'
  | 'sp_giantslayer'
  | 'sp_bloodthirst'
  | 'sp_marathon'
  | 'sp_ironwall'
  | 'sp_sharpshot'
  | 'sp_quickdraw'
  | 'sp_overkill'
  | 'sp_phoenix'
  | 'sp_warlord';

export type ZombieTypeId =
  | 'walker'
  | 'runner'
  | 'spitter'
  | 'exploder'
  | 'brute'
  | 'boss'
  | 'howler'
  | 'stalker'
  | 'bloater'
  | 'boss_necro'
  | 'boss_berserker'
  | 'boss_queen';

// =============================================================
// Minimal structural entity shape — used by helpers that only need x/y/r.
// =============================================================

export interface Entity {
  x: number;
  y: number;
  r: number;
  dead?: boolean;
  hp?: number;
}

// =============================================================
// Upgrade catalog — src 2587–2617
// =============================================================

export interface Upgrade {
  id: UpgradeId;
  name: string;
  color: string;
  icon: string;
  max: number | null;
  cls: UpgradeClass;
}

// =============================================================
// Super power catalog — src 2624–2649
// =============================================================

export interface SuperPower {
  id: SuperPowerId;
  name: string;
  icon: string;
  color: string;
  desc: string;
}

// =============================================================
// Player skin catalog — src 2668–2723
// =============================================================

export interface Skin {
  id: SkinId;
  nameKey: string;
  bodyColor: string;
  dashColor: string;
  accentColor: string;
  legColor: string;
  gunColor: string;
  headColor: string;
  hairColor: string;
  hairR: number;
  hat: string | null;
  accessory: string;
  outlineColor?: string;
  legStyle?: 'paws';
}

// =============================================================
// Theme definition — src 2245–2295
// =============================================================

export type ThemeTileKind =
  | 'doomsday'
  | 'circuit'
  | 'scanlines'
  | 'sand'
  | 'cracks'
  | 'hexGrid'
  | 'sakura';

export interface ThemeTilePattern {
  kind: ThemeTileKind;
  colors: string[];
  spacing: number;
}

export interface ThemeDef {
  id: EnvironmentId;
  nameKey: string;
  descKey: string;
  overlayClass: string | null;
  bg: string;
  obstacles: string[];
  tilePattern: ThemeTilePattern;
}

// =============================================================
// Zombie archetype — src 2476–2525. Only the intrinsic base stats are
// mandatory; per-type tuning fields are optional (presence depends on kind).
// =============================================================

export interface ZombieArchetype {
  hp: number;
  speed: number;
  damage: number;
  radius: number;
  color: string;
  eye: string;
  score: number;
  xp: number;
  touchCd: number;
  minFloor: number;

  // runner
  zigzagPeriod?: number;
  zigzagMag?: number;

  // spitter / boss_queen — ranged
  range?: number;
  shootCd?: number;
  projSpeed?: number;
  leadCap?: number;
  shotCount?: number;
  shotSpread?: number;
  projHomeAccel?: number;
  projHomeDur?: number;

  // exploder
  fuse?: number;
  boomR?: number;
  lowHpFuse?: number;

  // brute / berserker — charge
  chargeRange?: number;
  chargeWindup?: number;
  chargeDur?: number;
  chargeCd?: number;
  chargeSpdMul?: number;
  chargeDmgMul?: number;

  // howler
  auraR?: number;
  auraSpdMul?: number;
  auraDmgMul?: number;
  chillMul?: number;

  // stalker
  revealR?: number;
  sneakAlpha?: number;
  lungeRange?: number;
  lungeWindup?: number;
  lungeDur?: number;
  lungeSpdMul?: number;
  lungeCd?: number;

  // bloater
  cloudR?: number;
  cloudLife?: number;
  cloudSlow?: number;
  cloudDmg?: number;

  // boss shared — 3s periodic melee swipe + override for on-touch damage
  collisionDmg?: number;
  meleePower?: number;
  meleeCd?: number;
  meleeRange?: number;

  // boss_necro
  raiseCd?: number;
  raiseCount?: number;
  raiseRange?: number;
  keepDist?: number;

  // boss_berserker
  rageStep?: number;
  rageMaxStacks?: number;
  slamCd?: number;
  slamWindup?: number;
  slamR?: number;
  slamDmgMul?: number;
  quakeCd?: number;
  quakeWindup?: number;
  quakeR?: number;
  quakeDmgMul?: number;
}

// =============================================================
// Difficulty tier — src 6936–6941
// =============================================================

export interface DifficultyTier {
  name: 'EASY' | 'MEDIUM' | 'HARD' | 'HAHAHA';
  hpMul: number;
  dmgMul: number;
  color: string;
}

// =============================================================
// Floor definition — src 2228–2235
// =============================================================

export interface FloorDef {
  name: string;
  bgA: string;
  bgB: string;
  obstacles: string[];
}

// =============================================================
// I18N dict shape — intentionally loose (values may be strings or functions).
// Mirrors the original JS literal at src 1681–2006 verbatim.
// =============================================================

export type I18NValue = string | string[] | ((...args: any[]) => string);

export interface I18NUpgradeMaps {
  upgradeNames: Record<UpgradeId, string>;
  upgradeDescs: Record<UpgradeId, (level: number) => string>;
}

export interface I18NDict extends I18NUpgradeMaps {
  floorNames: string[];
  [key: string]: I18NValue | Record<string, string> | Record<string, (l: number) => string>;
}

export interface I18NRoot {
  en: I18NDict;
  zh: I18NDict;
}
