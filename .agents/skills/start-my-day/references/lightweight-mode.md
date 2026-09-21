# Lightweight mode
Use only after an explicit mode request; follow [Shared rules](../SKILL.md#shared-rules).
Skip agents, planning questions, Notes recommendations, `/daily-note-addition` and `/reflect`. No deadline, staleness, or learning-target scouts.

## 1. Copy
If today is missing, follow the shared `cp` rule and continue; let `g` be the calendar-day gap.
If today exists, apply only explicitly requested changes without replaying resets, then report its link and stop.

## 2. Edit
Use `edit`, not a rewrite script; apply the shared date/title updates, tomorrow-priority transfer and task table.

| Live text | Change on a new copy |
|---|---|
| `D-N`, `D+N`, `in N days` | Recalculate using `g`; elapsed deadlines become overdue |
| Activity/plan-stale day counts | Add `g` |
| Today’s weekday in planning prose | Use today’s weekday; remove `weekend` on weekdays |

Leave fixed dates, historical weekdays/links, interval descriptions and ranges unchanged.
Keep Anchor, Appendix, energy, commitments, and Main Focus. Do not regenerate deadline / staleness / stuck callouts or Related Projects — only bump live day counts. Do not rewrite Notes beyond those counters and the shared weekly-summary rule.
Apply any extra field changes the user explicitly named.

On a new copy only, after the shared transfer check:
- Empty Log and Evening Review (keep only their `##` headings); remove AI Digest if present.
- Inject GRE `#weekly` children with the shared gated rule (no scout):
  - Timed set: if the parent has no surviving child, next `[ ] Open` set **listed for the current week** in `20_Project/GRE_Physics_Prep/01_Syllabus_&_Plan/8-Week-Syllabus.md` (confirm status in `03_Topic_Sets/`). Not the global next Open across 01–35. From 2026-09-14: W1 = 03–07, or 02–06 if Set 02 still open. W6 timed = 26–29 only. W7 new timed = 32 then 33 only; after both closed, W7 Mon–Thu inject replay of the latest miss-heavy set, else replay 32. **Do not inject a timed child** on 2026-10-04, 2026-10-25, or W7 Friday–Sunday.
  - Formula recall: if the parent has no surviving child, the next authored batch in `Formula-Recall-Decks.md` after yesterday’s completed child; if the deck ends, recycle Batch 1 and report it — never invent a batch name.
  - Extra / misses: keep a surviving child; if none and the parent is not `(N/N)`, rework the current or last timed set into [[Misses-Log]] (misses-first; leftover 07/30/31/34/35 only if misses are empty).
  - Never replace a surviving `[ ]` / `[*]` child, inject duplicates, inject under `(N/N)`, or inject on a repeat same-day run.
  - On a **new copy**, normalize GRE parent `~ mins` to timed **~ 100**, formula **~ 60**, extra **~ 50** when they still show other hedges (e.g. timed `~ 60`/`~ 30`, formula `~ 50`/`~ 30`, extra `~ 30`). Do not wait for a full-mode week-plan accept.

## 3. Carry the week
Preserve `(n/N)` and `week_plan`, even across missed Sundays; do not infer counts or start a new plan.
Refresh the summary from Priorities after the shared legacy-checklist check; retain and report conflicts without planning questions.
If review is due, mention it in the summary and leave it for full mode.

## 4. Finish
Run the shared retention check; report source → today, gap, retained tasks, any injected GRE children, and any due review or conflict.
At the end of the response, output the user's primary concern recorded in the previous daily note's Evening Review (`**What's on my mind?**`).
Offer `/start-my-day` for a full replan; recommend `/breakdown-tasks` → `/estimate-time`.
