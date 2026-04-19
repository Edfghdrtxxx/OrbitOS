// Upgrade catalog — zombie_roguelike.html src 2587–2618. Values and ordering
// are byte-identical to the source. Max stack counts preserved exactly
// (null = uncapped).

import type { Upgrade, UpgradeId } from '../types';

export const UPGRADES: Upgrade[] = [
  // Max stack counts bumped by +4 across the board (null entries stay
  // uncapped). Previously: rof/speed/crit/ammo 8, reload/regen/eagle/scholar/
  // heavy 6, pierce/thorns/cleaver/swift/blitz/ignite/bleed/plague 5,
  // double/explode/whirl 1.
  { id:'dmg',      name:'Boomstick',     color:'#ff6b6b', icon:'💥', max:null, cls:'shared' },
  { id:'rof',      name:'Hair Trigger',  color:'#ffbd2e', icon:'⚡',  max:22,  cls:'ranged' },
  { id:'speed',    name:'Sneakers',      color:'#4ecdc4', icon:'👟', max:12,  cls:'shared' },
  { id:'hp',       name:'Tough Skin',    color:'#ff6b6b', icon:'❤️', max:null, cls:'shared' },
  { id:'reload',   name:'Quick Hands',   color:'#ffbd2e', icon:'⏱️', max:20,  cls:'ranged' },
  { id:'ammo',     name:'Extra Clip',    color:'#a36841', icon:'📦', max:22,  cls:'ranged' },
  { id:'double',   name:'Double Tap',    color:'#ffbd2e', icon:'🔫', max:10,  cls:'ranged' },
  { id:'crit',     name:'Sharpshooter',  color:'#ff6b6b', icon:'🎯', max:12,  cls:'shared' },
  { id:'pierce',   name:'Piercing Rounds', color:'#7b68ee', icon:'🔩', max:9, cls:'ranged' },
  { id:'explode',  name:'Explosive Rounds', color:'#ff6b6b', icon:'💣', max:5, cls:'ranged' },
  { id:'vamp',     name:'Vampire',       color:'#c73866', icon:'🩸', max:null, cls:'shared' },
  { id:'regen',    name:'Regeneration',  color:'#8fcf3f', icon:'✚',  max:10,  cls:'shared' },
  { id:'thorns',   name:'Thorns',        color:'#c881ff', icon:'🌵', max:9,   cls:'shared' },
  { id:'eagle',    name:'Eagle Eye',     color:'#4ecdc4', icon:'🦅', max:10,  cls:'ranged' },
  { id:'scholar',  name:'Scholar',       color:'#7b68ee', icon:'📘', max:10,  cls:'shared' },
  // New paths
  { id:'cleaver',  name:'Cleaver',       color:'#ff9a3c', icon:'🪓', max:9,   cls:'melee' },
  { id:'whirl',    name:'Whirlwind',     color:'#c881ff', icon:'🌀', max:5,   cls:'melee' },
  { id:'heavy',    name:'Heavy Strike',  color:'#ff6b6b', icon:'🔨', max:10,  cls:'melee' },
  { id:'swift',    name:'Swift Steps',   color:'#4ecdc4', icon:'💨', max:14,  cls:'shared' },
  { id:'blitz',    name:'Blitz Dash',    color:'#ffd966', icon:'⚡', max:9,   cls:'shared' },
  // DoT build path
  { id:'ignite',   name:'Ignite',        color:'#ff7b28', icon:'🔥', max:9,   cls:'shared' },
  { id:'bleed',    name:'Bleeding Edge', color:'#c73866', icon:'🩸', max:9,   cls:'shared' },
  { id:'plague',   name:'Plague Carrier',color:'#8fcf3f', icon:'☣️', max:9,   cls:'shared' },
];

export const UPG_BY_ID: Record<UpgradeId, Upgrade> = Object.fromEntries(
  UPGRADES.map((u) => [u.id, u]),
) as Record<UpgradeId, Upgrade>;
