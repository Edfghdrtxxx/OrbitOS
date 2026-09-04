---
type: system
status: active
tags: [system, planning]
---
# Daily Note Map

## One-sentence model
The week is the unit of planning; a single day can be zero; the only required act is one reply on plan day.

## Who writes what
| Section | Written by | When |
|---|---|---|
| Anchor | start-my-day, from [[Game_Framework]] | Every morning, regenerated fresh |
| Commitments | You (one morning question) | When asked |
| Priorities | start-my-day carries the #weekly/#daily/#spare-time rows; you tick and may bump (n/N) | Morning, then during the day |
| Log | You | Whenever something worth recording happens |
| Evening Review | end-my-day | Evening |
| Notes | start-my-day | Morning (deadlines + week-plan callout) |
| Related Projects | start-my-day | Morning |
| New captures | daily-note-addition | Any time a loose idea appears |
| (~ N mins) estimates | estimate-time | On request |

## Plan day
Fires when today is 7+ days past the `week_plan` date, or the key is missing. Sunday preferred; any day works.
You answer two questions in one reply: (1) correct last week's counts from memory; (2) accept or adjust each row's N for next week.
Every row shows a gap line, e.g. `4/wk → ~40 sets by 2026-11-01; plan needs 36` ([[GRE_Physics_Prep]] → [[UTokyo_RIKEN]]); habits without a deadline read `5/wk, no deadline`.

## What happens if I disappear for 3 days
Nothing breaks. Missed days cost nothing: today's note is generated from the latest note — no back-fill, no "you missed N days".
A missed Sunday only delays plan day. Under-reported counts shrink next week's N (fail-safe; they never grow). Catch-up never stacks.

## Row syntax
- Weekly: `- [ ] <task> (n/N) #weekly` — n = done this week, N = target; checked at n ≥ N. Max 5 per note.
- Daily habit: `- [ ] <task> #daily` — resets to `[ ]` every morning. Max 3 per note.
- Spare-time: `- [ ] <task> #spare-time` — optional, never counted.

See [[Game_Framework]] for why these rows exist.
