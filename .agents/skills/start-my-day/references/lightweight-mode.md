# Lightweight mode
Use only after an explicit mode request; follow [Shared rules](../SKILL.md#shared-rules).
Skip agents, planning questions, Notes recommendations, `/daily-note-addition` and `/reflect`.

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
Keep Anchor, Appendix, energy, commitments, Log and Evening Review bodies; do not rewrite Main Focus or Notes beyond these live counters and the shared weekly-summary rule.
Apply any extra field changes the user explicitly named.

## 3. Carry the week
Preserve `(n/N)` and `week_plan`, even across missed Sundays; do not infer counts or start a new plan.
Refresh the summary from Priorities after the shared legacy-checklist check; retain and report conflicts without planning questions.
If review is due, mention it in the summary and leave it for full mode.

## 4. Finish
Run the shared retention check; report source → today, gap, retained tasks and any due review or conflict.
Offer `/start-my-day` for a full replan; recommend `/breakdown-tasks` → `/estimate-time`.
