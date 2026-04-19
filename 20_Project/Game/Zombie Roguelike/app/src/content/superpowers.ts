// Super power pool — zombie_roguelike.html src 2624–2650. After each boss
// clear (except final-floor), the player picks 1 of 4 randomly drawn from
// this pool. Already-picked powers are excluded. NO reroll.

import type { SuperPower, SuperPowerId } from '../types';

export const SUPERPOWERS: SuperPower[] = [
  { id:'sp_juggernaut',  name:'Juggernaut',   icon:'🛡',  color:'#4ecdc4',
    desc:'+60% max HP (heals). −10% move speed.' },
  { id:'sp_glasscannon', name:'Glass Cannon', icon:'💥', color:'#ff6b6b',
    desc:'+70% damage. −30% max HP.' },
  { id:'sp_berserker',   name:'Berserker',    icon:'🔥', color:'#ff7b28',
    desc:'Below 50% HP: +60% damage, +30% attack speed.' },
  { id:'sp_giantslayer', name:'Giant Slayer', icon:'👹', color:'#ffbd2e',
    desc:'+45% damage vs. bosses.' },
  { id:'sp_bloodthirst', name:'Bloodthirst',  icon:'🩸', color:'#c73866',
    desc:'Heal 4% max HP on every kill.' },
  { id:'sp_marathon',    name:'Marathon',     icon:'👟', color:'#4ecdc4',
    desc:'+35% move speed.' },
  { id:'sp_ironwall',    name:'Iron Wall',    icon:'🛡',  color:'#c881ff',
    desc:'Incoming damage reduced by 25%.' },
  { id:'sp_sharpshot',   name:'Sharpshot',    icon:'🎯', color:'#ff6b6b',
    desc:'+25% crit chance. Crit damage 2.5× → 4×.' },
  { id:'sp_quickdraw',   name:'Quickdraw',    icon:'⚡', color:'#ffbd2e',
    desc:'+40% attack speed (fire rate / swing).' },
  { id:'sp_overkill',    name:'Overkill',     icon:'💣', color:'#ff6b6b',
    desc:'Killing blows erupt — 80 damage, 90px radius.' },
  { id:'sp_phoenix',     name:'Phoenix',      icon:'🦅', color:'#ffd966',
    desc:'Revive once per run at 50% HP on death.' },
  { id:'sp_warlord',     name:'Warlord',      icon:'🏆', color:'#ffd966',
    desc:'+25% damage, +20% max HP, +15% move speed.' },
];

export const SP_BY_ID: Record<SuperPowerId, SuperPower> = Object.fromEntries(
  SUPERPOWERS.map((s) => [s.id, s]),
) as Record<SuperPowerId, SuperPower>;
