// Difficulty tier table — zombie_roguelike.html src 6936–6941.
// 4 tiers: EASY / MEDIUM / HARD / HAHAHA. Values byte-identical.

import type { DifficultyTier } from '../types';

export const DIFFICULTY_TIERS: DifficultyTier[] = [
  { name: 'EASY',    hpMul: 1.00, dmgMul: 1.00, color: '#8fcf3f' },
  { name: 'MEDIUM',  hpMul: 1.15, dmgMul: 1.10, color: '#ffbd2e' },
  { name: 'HARD',    hpMul: 1.32, dmgMul: 1.21, color: '#ff7b5c' },
  { name: 'HAHAHA',  hpMul: 1.52, dmgMul: 1.33, color: '#c73866' },
];
