# Evolution Log

> [!warning] Superseded 2026-09-04
> Entries dated before 2026-09-04 describe the retired copy-yesterday method (a0 Morning Schedule placement, delta table, Q1 main focus, day-count lightweight). They are kept for history only — do NOT apply them. Only entries dated 2026-09-04 or later are active constraints.

## 2026-03-08
### Lessons
- Check ALL active projects for staleness, not just the ones mentioned in yesterday's note

## 2026-03-09
### Fixes
- Q4 free-text items must be added as tasks in today's Priorities section (placed in the appropriate topic group), not only captured to Inbox. The Q4 spec says "Treat what I said as a new task" — this means both: (1) create Inbox note, and (2) add to daily Priorities.

## 2026-03-13
### Lessons
- Non-enumerated sections (e.g., "Thinking and Planning") that contain reusable working context must not be silently deleted. Migrate actionable insights into Notes before removing the section.

## 2026-06-13
### Lessons
- `[x]` + no `#daily` → Remove is absolute. Don't re-add an identical `[ ]` copy under "add from Q1" — the missing `#daily` tag means the task was a one-off, and resurrecting it bypasses the `#daily` mechanism. "Add from Q1" is for genuinely new actions only.

## 2026-08-18
### Lessons
- Lightweight is residual planning, not a frozen photocopy. After the day-count bump, apply the Priorities item delta (`[x]` no `#daily` → remove; `[x]` `#daily` → reset to `[ ]`; `[ ]`/`[*]`/`#weekly` stay). Day-count-only left yesterday's completions frozen on today. Still skip Q1–Q4, agents, Notes rewrite, and `/reflect`.
- Remap leftover weekday tokens in residual prose (`high-energy Sunday`, `weekend Sunday`) to today; drop `weekend` on Mon–Fri. Leaving them made a Tuesday note still read as Sunday (2026-08-18).

## 2026-08-31
### Lessons
- **Custom Schedule Placement:** When the user provides an explicit schedule (e.g. `1. A, 2. B, 3. C`), place the ordered sequence at the top of `## Priorities` under `a0. Morning Schedule & Primary Focus`.
- **Automatic Re-sorting:** If no schedule is provided but the previous note had an `a0. Morning Schedule` block, re-sort those tasks back into their standard topic sections (`a1`, `b1`, etc.).

## 2026-09-04
### Lessons
- Copy-yesterday made lines immortal: tasks nobody touched (7/7 unchecked week after week) and the Appendix backlog survived every morning because the copy step never asked "should this still exist?" Week-slice generation carries only tagged rows; everything else is regenerated fresh.
- 2026-09-03's Evening Review was a verbatim copy of 09-02's. Review prose records one specific day — never carry it; `## Evening Review` always starts empty (end-my-day writes it).
- The Anchor drifted because no skill ever wrote it — "leave as-is (managed by a separate skill)" meant nobody owned it. start-my-day now regenerates it every morning from `99_System/Game_Framework.md` (italic identity statement + bold "Updated goal").
- `#weekly` existed with no count, no target, no boundary, and no trigger — nothing ever checked it. Now rows carry `(n/N)`, frontmatter carries `week_plan`, and plan day (today − `week_plan` ≥ 7 or key missing) is the only time N changes.
- A morning run must never reset a `(n/N)`. Checkbox-reset logic applies to `#daily` only; `#weekly` counts are the week's memory and change only on plan day, after the user confirms.



