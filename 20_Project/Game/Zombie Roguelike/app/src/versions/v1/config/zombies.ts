export type ZombieType = 'walker' | 'runner' | 'spitter' | 'exploder' | 'brute' | 'boss';

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
  range?: number;
  shootCd?: number;
  fuse?: number;
  boomR?: number;
}

export const ZTYPES: Record<ZombieType, ZombieArchetype> = {
  walker:   { hp: 28,   speed: 62,  damage: 10, radius: 20, color: '#8FCF3F', eye: '#c73866', score: 8,   xp: 4,   touchCd: 600, minFloor: 1 },
  runner:   { hp: 16,   speed: 135, damage: 6,  radius: 16, color: '#CEDE4E', eye: '#6c2a4e', score: 12,  xp: 6,   touchCd: 450, minFloor: 1 },
  spitter:  { hp: 22,   speed: 78,  damage: 12, radius: 18, color: '#b5d645', eye: '#ffbd2e', score: 18,  xp: 9,   touchCd: 700, minFloor: 2, range: 380, shootCd: 1800 },
  exploder: { hp: 18,   speed: 115, damage: 28, radius: 17, color: '#ff7b5c', eye: '#fff0a0', score: 18,  xp: 10,  touchCd: 100, minFloor: 3, fuse: 600, boomR: 95 },
  brute:    { hp: 110,  speed: 38,  damage: 22, radius: 32, color: '#5F8C3F', eye: '#ff6b6b', score: 40,  xp: 18,  touchCd: 900, minFloor: 2 },
  boss:     { hp: 1100, speed: 60,  damage: 16, radius: 58, color: '#3D5B2A', eye: '#ffbd2e', score: 320, xp: 140, touchCd: 600, minFloor: 1 },
};

export interface ScaledStats {
  hp: number;
  damage: number;
  speed: number;
  radius: number;
  score: number;
  xp: number;
}

export function enemyStats(type: ZombieType, floor: number, elite: boolean): ScaledStats {
  const base = ZTYPES[type];
  const isBoss = type === 'boss';
  const bossHpBonus  = isBoss ? 1.8 * Math.pow(1.22, floor - 1) : 1;
  const bossDmgBonus = isBoss ? 1.1 * Math.pow(1.08, floor - 1) : 1;
  const bossSpdBonus = isBoss ? 1 + 0.06 * (floor - 1) : 1;
  const hpMul  = Math.pow(1.25, floor - 1) * (elite ? 2.0 : 1.0) * bossHpBonus;
  const dmgMul = Math.pow(1.15, floor - 1) * (elite ? 1.5 : 1.0) * bossDmgBonus;
  return {
    hp: Math.round(base.hp * hpMul),
    damage: Math.round(base.damage * dmgMul),
    speed: base.speed * bossSpdBonus,
    radius: base.radius * (elite ? 1.15 : 1.0),
    score: Math.round(base.score * (elite ? 2.5 : 1.0)),
    xp: Math.round(base.xp * (elite ? 3 : 1.0)),
  };
}

const WEIGHTS: Record<Exclude<ZombieType, 'boss'>, readonly [number, number, number, number, number]> = {
  walker:   [4, 4, 3, 3, 2],
  runner:   [2, 3, 3, 3, 3],
  spitter:  [0, 2, 2, 2, 2],
  exploder: [0, 0, 2, 2, 2],
  brute:    [0, 1, 1, 2, 2],
};

export function enemyPool(floor: number): ZombieType[] {
  const pool: ZombieType[] = [];
  for (const [type, w] of Object.entries(WEIGHTS) as [Exclude<ZombieType, 'boss'>, readonly number[]][]) {
    const weight = w[Math.min(4, floor - 1)] ?? 0;
    for (let i = 0; i < weight; i++) pool.push(type);
  }
  return pool;
}
