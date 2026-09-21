# Evolution Log


## 2026-03-08
### Lessons
- Check ALL active projects for staleness, not just the ones mentioned in yesterday's note

## 2026-03-09
### Fixes
- Route Q4 free-text tasks through `/daily-note-addition` into today’s Priorities, not a separate Inbox copy.

## 2026-03-13
### Lessons
- Non-enumerated sections (e.g., "Thinking and Planning") that contain reusable working context must not be silently deleted. Migrate actionable insights into Notes before removing the section.

## 2026-06-13
### Lessons
- Remove finished one-offs, not `#daily` or `#weekly` rows; never resurrect a removed one-off as a Q1 addition, and preserve parents needed by retained children.

## 2026-08-18
### Lessons
- Lightweight carries tasks forward, not yesterday’s ticks: use the shared task table in `SKILL.md`; skip questions, agents, recommendations and `/reflect`.
- Remap leftover weekday tokens in residual prose (`high-energy Sunday`, `weekend Sunday`) to today; drop `weekend` on Mon–Fri. Leaving them made a Tuesday note still read as Sunday (2026-08-18).

## 2026-08-31
### Lessons
- **Custom Schedule Placement:** When the user provides an explicit schedule (e.g. `1. A, 2. B, 3. C`), place the ordered sequence at the top of `## Priorities` under `a0. Morning Schedule & Primary Focus`.
- On a new copy without a user schedule, return yesterday’s `a0. Morning Schedule` tasks to their topic sections without dropping them; do not rearrange today’s existing plan on a repeat run.

## 2026-09-05
### Lessons
- The daily note must ALWAYS be created via the ResNet identity shortcut: `cp 10_Daily/<last>.md 10_Daily/<today>.md` via bash, then surgical delta applied via `edit`. Never generate or write the daily note from scratch.
- The speculative "week-slice" rewrite from 2026-09-04 that attempted to retire `cp - delta` directly violated the Necessity Check and OrbitOS design principles — reverted.
- Carry tomorrow’s priority through the shared transfer check in `SKILL.md`, without duplicating or reviving an already-carried task.


## 2026-09-08
### Lessons
- omp subagents that end a turn in plain text then `yield` with no data get `exit 1` even though the report is in the previous turn. Dispatch read-only agents as `scout` with `outputSchema`; on that wrapper failure, read `history://<id>` instead of re-dispatching.

## 2026-09-15
### Lessons
- Daily appendix **Agent: Prep Studio pack launch** must not hardcode `http://localhost:8000/#/practice/pack/NN`. Progress is per origin; rich store on this machine is often `file://…/Physics GRE/index.html`. Carry-forward via `cp` preserves the appendix — keep it pointing at `/practice-physics-gre-set` (live-tab / same-origin rules), not a fixed http URL.
