---
type: note
tags: [game-design, zombie-roguelike, risk-of-rain]
related: "[[zombie_roguelike]]"
---
# Risk of Rain–Inspired Improvements for Zombie Roguelike

Proposals grouped by how much they reshape the game, with #1 doing the most work for the least code.

## Tight, high-leverage adds

1. **Time-based difficulty escalation** (RoR1's core mechanic). Zombies in the current room get +X% HP/damage every 30s the player takes to clear it, with a visible "DIFFICULTY: Easy → Medium → Hard → HAHAHA" banner. Punishes camping, rewards aggression, and stretches replay value without new enemy types.
2. **Coin economy + post-room multishop** (RoR2 chests). Kills drop a small coin; after each cleared non-boss room, a 3-card shop appears with random upgrades you can buy (price tied to current floor). Decouples build choices from level-ups so unlucky drafts aren't run-killing.
3. **Elite affixes for non-boss zombies**: Blazing (burning aura — DoT if you stand next to it), Glacial (death pulse slows you), Overloading (small explosion on death). Roll on top of the existing elite flag. Big variety bump for one new behavior block per affix.

## Combat-feel adds

4. **Equipment slot (Q)** — single active item with cooldown, picked up rarely. Two starters: Grenade (lobs an AoE) and Blink (short teleport). Mirrors RoR2's equipment lane.
5. **Proc-on-hit upgrades** in the existing pool — Chain Lightning (X% to zap a 2nd enemy), Sticky Bomb (X% to plant a delayed explosive), Tougher Times (X% to dodge incoming damage). They thrive in the existing `Bullet`/`hurt` hooks and create the on-hit RNG that RoR builds love.

## Run-shape adds

6. **Teleporter boss event** — boss room replaces "boss + waves" with "charge the teleporter for 45s while infinite waves spawn, then the boss appears." Most of the wiring is already there.
7. **Difficulty selector on main menu** — Drizzle / Rainstorm / Monsoon multiply enemy HP/dmg/spawn-rate. One-line effect, big replay value.

## Polish

8. **Death screen "killed by" line** — record the last damage source on the player; show it on the run-end overlay (e.g. "KILLED BY: Boss charge"). Helps players learn threats from the buffed bosses.

## Recommended starting point

Implement **#1 + #3** first — they reshape pacing the most for the least surface area, and they pair well with the recent boss/density buffs.
