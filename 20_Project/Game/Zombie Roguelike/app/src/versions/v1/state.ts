import type { Player } from './entities/Player';
import type { Zombie } from './entities/Zombie';
import type { Bullet } from './entities/Bullet';
import type { ZombieProjectile } from './entities/ZombieProjectile';
import type { Explosion } from './entities/Explosion';
import type { Particle } from './entities/Particle';
import type { Powerup } from './entities/Powerup';
import type { UpgradeId } from './config/upgrades';
import type { SkinId } from './config/skins';
import type { ZombieType } from './config/zombies';
import { WORLD_W, WORLD_H, CANVAS_W, CANVAS_H } from './config/constants';

export type GameState =
  | 'menu'
  | 'playing'
  | 'paused'
  | 'upgradeChoice'
  | 'levelup_pending'
  | 'dead'
  | 'victory'
  | 'transition';

export interface Obstacle {
  x: number;
  y: number;
  w: number;
  h: number;
  type: string;
}

export interface DamageNum {
  x: number;
  y: number;
  vy: number;
  text: string;
  life: number;
  color: string;
}

export interface SpawnEntry {
  type: ZombieType;
  elite: boolean;
  delay: number;
}

export interface UpgradeChoice {
  id: UpgradeId;
  nextLevel: number;
  color: string;
  icon: string;
}

export interface Game {
  state: GameState;
  floor: number;
  roomIdx: number;
  isBossRoom: boolean;
  obstacles: Obstacle[];
  player: Player | null;
  zombies: Zombie[];
  bullets: Bullet[];
  ezBullets: ZombieProjectile[];
  explosions: Explosion[];
  particles: Particle[];
  damageNums: DamageNum[];
  powerups: Powerup[];
  spawnQueue: SpawnEntry[];
  spawnTimer: number;
  kills: number;
  score: number;
  upgrades: Partial<Record<UpgradeId, number>>;
  pendingLevelUps: number;
  runStartT: number;
  runTime: number;
  roomState: 'active' | 'cleared' | 'transitioning';
  transitionT: number;
  transitionTarget: { floor: number; roomIdx: number } | null;
  levelupPauseT: number;
  selectedChoice: number;
  currentChoices: UpgradeChoice[];
  skinId: SkinId;
}

export const game: Game = {
  state: 'menu',
  floor: 1,
  roomIdx: 0,
  isBossRoom: false,
  obstacles: [],
  player: null,
  zombies: [],
  bullets: [],
  ezBullets: [],
  explosions: [],
  particles: [],
  damageNums: [],
  powerups: [],
  spawnQueue: [],
  spawnTimer: 0,
  kills: 0,
  score: 0,
  upgrades: {},
  pendingLevelUps: 0,
  runStartT: 0,
  runTime: 0,
  roomState: 'active',
  transitionT: 0,
  transitionTarget: null,
  levelupPauseT: 0,
  selectedChoice: 0,
  currentChoices: [],
  skinId: 'default',
};

export const world = { w: WORLD_W, h: WORLD_H };

export const camera = { x: 0, y: 0, shake: 0 };

export const keys: Record<string, boolean> = Object.create(null) as Record<string, boolean>;

export const mouse = {
  x: CANVAS_W / 2,
  y: CANVAS_H / 2,
  worldX: 0,
  worldY: 0,
  down: false,
};

export function shakeCam(amt: number): void {
  camera.shake = Math.min(24, camera.shake + amt);
}

export function collidesObstacle(x: number, y: number, r: number): boolean {
  for (const o of game.obstacles) {
    const cx = x < o.x ? o.x : x > o.x + o.w ? o.x + o.w : x;
    const cy = y < o.y ? o.y : y > o.y + o.h ? o.y + o.h : y;
    const dx = x - cx;
    const dy = y - cy;
    if (dx * dx + dy * dy < r * r) return true;
  }
  return false;
}
