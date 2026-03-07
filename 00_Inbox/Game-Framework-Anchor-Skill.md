---
created: 2026-03-07
status: pending
source: start-my-day
---
Create a separate skill to manage the Game Framework / Anchor section in daily notes. Decoupled from `/start-my-day` during the residual method refactor — the Anchor line now says "Leave as-is (managed by a separate skill)." This new skill should read `99_System/Game_Framework.md`, extract the identity statement and 1-year goal, and populate the `## Anchor` section in today's daily note.