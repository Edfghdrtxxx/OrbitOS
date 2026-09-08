---
name: start-my-day
description: >
  Daily planning workflow — review last note, plan today, connect to active projects.
  Optional lightweight/short mode (copy last daily + day-count delta + item delta) only when the user
  explicitly says short, lightweight, light, residual, or copy-forward; bare /start-my-day is always full.
---
# Start my day
Read `evolution.md` first; the shared rules below supersede older conflicting lessons.

## Mode
Full is the default, including low energy or “quick morning.” Only an explicit `short`, `lightweight`, `light`, `residual`, `copy-forward`, `day-counter only`, or equivalent mode request selects [lightweight mode](references/lightweight-mode.md).

# Shared rules

## Copy, then edit
- Find the latest top-level `10_Daily/YYYY-MM-DD.md` dated before today; ignore archives and future notes.
- If today is absent, run `cp 10_Daily/<last-date>.md 10_Daily/<today>.md` via bash, then use `edit` for every change: never rebuild the note or use a script to rewrite it.
- If neither today nor a prior note exists, stop and explain; no template fallback.
- If today exists, preserve its progress: no copy, counter bump, morning checkbox reset, or Log/Evening Review clearing; full mode may still plan and refresh context.
- On a new copy, update date, weekday, ISO week and title.
- On a new copy, transfer “One priority for tomorrow” once before clearing reviews: unless explicitly renewed, skip it if already in the source Priorities (even completed) or unchanged from the source’s preceding note; otherwise add it.

## Carry tasks forward
Apply this table only to a new copy’s Priorities, top to bottom; leave Appendix tasks alone.

| Task | Change |
|---|---|
| `#weekly` | Keep; reset `[x]` to `[ ]`, preserve `(n/N)` |
| `#daily` | Keep; reset `[x]` to `[ ]` |
| Child under `#weekly` | Ephemeral daily target: remove if `[x]`; keep in place if `[ ]` or `[*]`. Full mode injects a new child only when the parent has no existing child. |
| Other `[x]` | Remove, or keep unchanged if any descendant must survive |
| `[ ]` or `[*]` | Keep in place |
Never delete a retained child with its parent, or resurrect a finished one-off as a new task.

## Weekly plan
- A weekly checkbox means today’s occurrence is done; `(n/N)` is the user’s weekly total and target, never inferred from ticks.
- Priorities owns weekly rows and counts; refresh the Notes summary as plain bullets, removing checkbox markers (unless preserving an unresolved conflict).
- Before refreshing Notes, match legacy weekly rows by the action and linked project, not exact wording or counts alone; move only genuinely summary-only tasks into Priorities, with morning resets only on a new copy.
- If a match or count is uncertain, full mode asks; lightweight keeps both versions and reports it without merging, duplicating or overwriting them.
- Review is due when `week_plan` is missing or at least 7 days old; Sunday is preferred, not a forced reset.
- Lightweight carries the plan and reports a due review; full mode asks for count corrections and accept/adjust/decline of the next plan in one reply.
- Apply explicit count corrections even when rollover is declined; without acceptance, keep the current plan and refresh only agreed summaries.
- On acceptance, set `week_plan` to today and start counts at zero; if today’s work is already recorded, first confirm which week it belongs to and the new starting counts, never infer them from ticks.
- Keep all rows unless the user retires them, preserve today’s ticks on an existing note, and never stack catch-up work.

## Check before finishing
Compare the result with the copied source, or with today’s pre-edit contents on a repeat run: every open/in-progress task, weekly row and retained child must survive unless the user explicitly removed it.
Check counts, summary agreement, allowed resets/removals and preservation of today’s progress; repair only unintended edits, never recopy over today.
Report a short retention check, including any unresolved weekly conflict.

# Full mode

## 1. Gather context
- Read the last note and today if present; collect active projects, next actions and deadlines from `20_Project/`.
- Read pause context from the latest daily note (including Appendix and Related Projects), relevant project notes and user instructions: status, paused work, reason, resume/review date or condition, and source; unknown stays unknown.
- Compute `plan-stale` days with `git log -1 --format="%ai" -- <project-file-or-folder>`; use the whole folder for folder projects so sibling edits count.
- Launch three read-only subagents together using `scout` (fast read-only specialist; fallback: `glm-5_3`):
  - [Deadline](agent-prompts/deadline.md): `{today}`, `{cutoff}` (+60 days), `{project_context}` (pause context above).
  - [Staleness](agent-prompts/staleness.md): `{today}`, `{projects}` (all active projects, vault/external paths and plan-stale), the same `{project_context}`.
  - [Learning Target](agent-prompts/learning-target.md): `{today}`, `{main_focus}`, `{last_daily_note}`, `8-Week-Syllabus.md`, `03_Topic_Sets/`, `Formula-Recall-Decks.md`, and `Misses-Log.md`.
- Wait for all three before writing recommendations; full mode never silently skips them.
- Use `min(plan-stale, activity-stale)`, falling back to plan-stale when activity is unknown; flag unpaused work at ≥4 days, not deliberate pauses or repeated copied ticks; a partial pause does not excuse unrelated work.
- Keep pauses visible with their reason; surface due reviews and external deadlines even for paused projects, without treating a review date as automatic resumption.
- For `#Deferred` tasks, check the past 7 days and flag 5+ consecutive days of deferral; do not call deliberately parked work stuck.

## 2. Ask together
1. Main focus: offer relevant active projects.
2. Energy: high, normal, low, or tired.
3. Fixed commitments: meetings, classes, appointments, deadlines.
4. New tasks, ideas or blockers; QQ / WeChat / Gmail / CAS email selections mean “checked, nothing to capture,” while free text is the capture.

Use answers already supplied; resolve conflicting tasks and any due weekly review here.
Energy changes emphasis and new suggestions, never retention: high = deep work, normal = standard, low = 2–3 priorities, tired = one priority plus maintenance.

## 3. Apply the changes
Follow Shared rules; use wikilinks and create no intermediate plan files.
- Set energy, commitments and Main Focus from the answers; add genuinely new next actions in their topic sections.
- For the primary learning/exam block (e.g. `a1. GRE Physics Prep`), inject the concrete objectives proposed by the Learning Target subagent as indented child checkboxes directly beneath the stable `#weekly` parent rows in `## Priorities`.
  - Stable parent rows preserve `(n/N) #weekly` rollover and week-plan alignment.
  - Indented child checkboxes provide concrete daily execution targets (e.g. `Set 01: Kinematics & Newton's Laws (Q1–25)`, specific formula recall batch, and targeted error rework).
  - Gated injection: on a new copy, inject only under weekly parents that do not already carry an uncompleted child from yesterday; never replace a surviving uncompleted child, inject duplicates, or inject under rows that have reached `(N/N)`; never inject on repeat same-day runs.
- Keep Anchor unchanged; a separate skill owns it.
- On a new copy only, after the shared transfer check, empty Log and Evening Review (keep only their `##` headings); remove AI Digest if present.
- Keep reusable context and the weekly plan when refreshing Notes; use the callouts below, omitting empty ones, then loose bullets for focus, energy, commitments, inbox and review context.
  1. `[!info] Week plan` — summary from Priorities, retaining relevant target/deadline explanations.
  2. `[!warning] Upcoming Deadlines` — agent findings without source file paths.
  3. `[!Staleness] Project staleness (≥ 4 days)` — unpaused work only; distinguish omitted fresh projects from paused ones.
  4. `[!Stuck] Stuck & slow-moving items` — active deferrals, bottlenecks and carry-overs.
- Related Projects lists all active projects and known pauses; no 4-day filter here.
- Show activity age as `(M days stale via daily tasks)`; add `N days plan-stale` when ages differ by ≥7 days; without activity evidence use `(N days stale)`, and label paused work as paused rather than stale.
- Deduplicate new user captures against today and projects, then pass the remaining batch to `/daily-note-addition`; it owns capture placement.

## 4. Finish
Run the shared retention check; report today’s link, energy, priority/project counts and any gap or due review.
Run `/reflect`, present its findings without acting on them, and recommend `/breakdown-tasks` → `/estimate-time`.