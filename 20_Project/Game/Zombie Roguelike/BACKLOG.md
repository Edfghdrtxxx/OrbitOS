# Handoff: Death replay + cause of death on Game Over screen

## Why This Matters
Post-mortem clarity. When the player dies, they should see *what* killed them and *how* it unfolded, not just a "You Died" screen. Turns each death into a learning moment instead of a mystery.

## Current State
- Game source: `20_Project/Game/Zombie Roguelike/app/src/legacy/game.ts` (monolithic game body; grep for the existing game-over / death-screen code path).
- Game loop renders to the `<canvas id="game">` each frame — state snapshots for replay need to hook there.
- Damage application lives on `Player` class methods (search `this.hp = Math.max(0, this.hp - dmg)`).
- Single-file build (`vite-plugin-singlefile`) is the prior handoff; that must land first since everything ships through it.

## Non-document facts
- User selected Game Over / Death screen as the target surface (not the Checkpoint Portal).
- Replay format: **visual replay on canvas** of the last N seconds. N is unspecified — confirm with user (sensible default 5–10s). Implementation needs a ring buffer of game-state snapshots each frame (or every K frames to cap memory).
- Cause-of-death format: **event log + full damage breakdown** — timeline of last ~20 events (damage, spawns, upgrades, abilities) plus last 5 hits with source (enemy + attack type), amount, and timestamp.
- This task was scoped as a separate follow-up to the single-file-build handoff; do not bundle them.

## Principles of Paramount Importance
- **Zero Assumptions:** Never guess user intent. If multiple implementations exist or requirements are incomplete, **halt and use the `AskUserQuestion` tool** to gather explicit direction.
- **No Silent Assumptions:** Even when the task is requested, confirm the *method* if it wasn't specified.
