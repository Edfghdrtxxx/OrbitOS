// Enemy archetype catalog — zombie_roguelike.html src 2476–2528.
// Values are byte-identical to the source: tuning numbers, colors, eye hexes
// and optional ability fields must never be "tidied" or reordered.
//
// NOTE: `enemyStats` and `enemyPool` are NOT extracted here. They read the
// live `game.roomIdx` singleton (src 2547) and thus are not pure — they stay
// under `systems/` per the T3 non-negotiable ("pure data + pure helpers only").

import type { ZombieArchetype, ZombieTypeId } from '../types';

export const ZTYPES: Record<ZombieTypeId, ZombieArchetype> = {
  walker:   { hp: 28,  speed: 62,  damage: 10, radius: 20, color:'#8FCF3F', eye:'#c73866', score: 8,   xp: 4,  touchCd: 600, minFloor: 1 },
  runner:   { hp: 16,  speed: 135, damage: 6,  radius: 16, color:'#CEDE4E', eye:'#6c2a4e', score: 12,  xp: 6,  touchCd: 450, minFloor: 1, zigzagPeriod: 600, zigzagMag: 0.85 },
  spitter:  { hp: 22,  speed: 78,  damage: 12, radius: 18, color:'#b5d645', eye:'#ffbd2e', score: 18,  xp: 9,  touchCd: 700, minFloor: 2, range: 380, shootCd: 1800, projSpeed: 340, leadCap: 0.6 },
  exploder: { hp: 18,  speed: 115, damage: 28, radius: 17, color:'#ff7b5c', eye:'#fff0a0', score: 18,  xp: 10, touchCd: 100, minFloor: 3, fuse: 600, boomR: 95, lowHpFuse: 0.30 },
  brute:    { hp: 110, speed: 38,  damage: 22, radius: 32, color:'#5F8C3F', eye:'#ff6b6b', score: 40,  xp: 18, touchCd: 900, minFloor: 2, chargeRange: 170, chargeWindup: 380, chargeDur: 360, chargeCd: 4200, chargeSpdMul: 2.4, chargeDmgMul: 1.4 },
  boss:     { hp: 22000, speed: 1200, damage: 32, radius: 1160, color:'#3D5B2A', eye:'#ffbd2e', score: 6400, xp: 2800, touchCd: 12000, minFloor: 1 },

  // ---- new tier-2 regular monsters ----
  // Howler: support caster — buffs nearby zombies (speed/damage) inside auraR,
  // AND chills the player (movement slow) while they stand in the aura. Blue
  // means cold: standing close chills you slower, and the howler's buffing
  // allies makes peeling off to kill it a real decision.
  howler:   { hp: 34,  speed: 55,  damage: 12, radius: 19, color:'#7bb8e0', eye:'#ffe066', score: 28,  xp: 14, touchCd: 700, minFloor: 2,
              // Radius tightened 250->200 and chill softened 0.70->0.82 so the
              // howler is still "priority-target" but no longer dominates room
              // control when stacked with bloater puddles/glacial pulses.
              auraR: 200, auraSpdMul: 1.30, auraDmgMul: 1.20,
              chillMul: 0.82 },
  // Stalker: nearly invisible until reveal range, then commits to a leap-lunge.
  // Punishes tunnel-vision. Lower HP, sneak speed bonus when unrevealed.
  stalker:  { hp: 24,  speed: 95,  damage: 18, radius: 17, color:'#5a4a78', eye:'#ff6b6b', score: 26,  xp: 13, touchCd: 600, minFloor: 3,
              revealR: 220, sneakAlpha: 0.18, lungeRange: 90, lungeWindup: 350, lungeDur: 220, lungeSpdMul: 2.6, lungeCd: 2400 },
  // Bloater: fat slow tank. Leaves a lingering poison cloud on death that slows
  // the player while they stand in it. Forces you to move after the kill.
  bloater:  { hp: 70,  speed: 34,  damage: 14, radius: 26, color:'#9a7fbf', eye:'#a8e34b', score: 32,  xp: 16, touchCd: 800, minFloor: 3,
              cloudR: 95, cloudLife: 5.0, cloudSlow: 0.55, cloudDmg: 4 },

  // ---- boss variants ---- all are kind=boss for HP bar / sfx / scoring
  // Necromancer: ranged caster boss. Lower HP than classic. Raises walker
  // minions on a long-ish cooldown; zero charge, zero summon-on-cd of classic.
  // Player must close the distance or burn corpses fast.
  boss_necro:    { hp: 13000, speed: 1100, damage: 28, radius: 1000, color:'#4a2d6b', eye:'#a8e34b', score: 6400, xp: 2800, touchCd: 12000, minFloor: 2,
                   raiseCd: 80000, raiseCount: 60, raiseRange: 7200, keepDist: 7200 },
  // Berserker: single big zombie. No summons. Gains +20% speed and +20% damage
  // per 25% HP missing (max +60% at <25% HP). Burst-down or get ran down.
  boss_berserker:{ hp: 26000, speed: 1400, damage: 36, radius: 1120, color:'#a13a2a', eye:'#ffe066', score: 7200, xp: 3200, touchCd: 10000, minFloor: 3,
                   rageStep: 4.0, rageMaxStacks: 60, chargeRange: 4400, chargeWindup: 6400, chargeDur: 7600, chargeCd: 70000, chargeSpdMul: 52, chargeDmgMul: 30,
                   // Slam: tight radial burst around the boss. Quick 0.5s
                   // telegraph, high damage, short cooldown — punishes hugging.
                   slamCd: 104000, slamWindup: 10400, slamR: 4400, slamDmgMul: 36,
                   // Quake: field-wide shockwave centered on the player. Longer
                   // 1.1s telegraph with a ground-crack indicator, lower damage,
                   // long cooldown. Jumpable via amendment D i-frames.
                   quakeCd: 210000, quakeWindup: 22000, quakeR: 3600, quakeDmgMul: 22 },
  // Spitter Queen: 5-shot fan of slightly-homing projectiles every ~3s. Slow
  // walk, demands constant lateral movement. Mid HP, ranged area control.
  boss_queen:    { hp: 19000, speed: 1000, damage: 24, radius: 1040, color:'#7bb540', eye:'#ffbd2e', score: 6800, xp: 3000, touchCd: 12000, minFloor: 2,
                   shootCd: 60000, shotCount: 100, shotSpread: 11, projSpeed: 5600, projHomeAccel: 2200, projHomeDur: 20, range: 10400 },
};

// All variant ids that should be treated as a "boss" (HP bar, room rules,
// sfx). (src 2527)
export const BOSS_KINDS = new Set<ZombieTypeId>([
  'boss',
  'boss_necro',
  'boss_berserker',
  'boss_queen',
]);

export function isBossKind(type: ZombieTypeId): boolean {
  return BOSS_KINDS.has(type);
}
