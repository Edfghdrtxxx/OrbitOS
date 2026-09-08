---
type: system
status: active
tags: [system, planning]
---
# Daily Note Map

## One-sentence model
The week is the unit of planning; a single day can be zero; the only required act is one reply on plan day.

## How a day is made
Today's note = `cp` of the latest earlier daily note (top-level date strictly before today) + a surgical delta edit. Nothing is rebuilt from scratch. If today's note already exists it is never re-copied, and its resets/clears never replay. No earlier note and no today's note → stop; no template.

Mode is the user's choice: bare `/start-my-day` is always full; lightweight runs only on an explicit keyword (short / lightweight / light / residual / copy-forward).

## Who writes what
| Section | Written by | When |
|---|---|---|
| Anchor | anchor-game-framework; carried unchanged | Managed separately |
| Commitments | You (one morning question) | When asked |
| Priorities | start-my-day carries the rows; you tick and maintain (n/N) | Morning, then during the day |
| Log | You | Whenever something worth recording happens |
| Evening Review | end-my-day | Evening |
| Notes | start-my-day | Full: fresh context; lightweight: counters + week summary only |
| Related Projects | start-my-day | Morning |
| New captures | daily-note-addition | Any time a loose idea appears |
| (~ N mins) estimates | estimate-time | On request |

## Weekly rows and counts
- Weekly: `- [ ] <task> (n/N) #weekly` — the checkbox means today's occurrence; n/N is your weekly total, maintained by you. A fresh daily resets the checkbox to `[ ]` but never infers n. A `[x]` carried unchanged across dated notes is not a new completion.
- Daily habit: `- [ ] <task> #daily` — resets to `[ ]` every morning.
- Spare-time: `- [ ] <task> #spare-time` — optional, never counted.
- `#weekly` takes precedence over `#daily`/one-off deletion; weekly rows have no hard cap and stay until you retire them.
- Priorities owns weekly rows and counts; Notes only summarizes them, without checkboxes. Match legacy rows by their action and linked project, not wording or counts alone; full mode asks about uncertain matches/counts, lightweight preserves and reports them.
- Paused work stays visible — a pause is not neglect. Deadlines still matter.

## Plan day (weekly review)
Sunday preferred. Due when `week_plan` is absent or ≥ 7 days old — including missed Sundays. Full mode asks you to (1) correct last week's counts and (2) accept or adjust each row's N. Lightweight defers the review unchanged.
Corrections do not require a new plan. Acceptance advances `week_plan` and starts counts at zero, except for today's work assigned by you to the new week; confirm its starting counts before rollover. Declining keeps the current plan with any explicit corrections. Missed days carry forward; catch-up never stacks.

Keep useful target explanations, e.g. `4/wk → ~40 sets by 2026-11-01; plan needs 36` ([[GRE_Physics_Prep]] → [[UTokyo_RIKEN]]); habits may read `5/wk, no deadline`.

## If I disappear for days
Nothing breaks. Today's note is generated from the latest earlier note — no back-fill, no "you missed N days". A missed Sunday only delays plan day.

See [[Game_Framework]] for why these rows exist. Canonical detail: `.agents/skills/start-my-day/SKILL.md` (shared rules) and `references/lightweight-mode.md`.
