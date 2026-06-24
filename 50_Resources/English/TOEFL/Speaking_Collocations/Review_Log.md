---
title: Speaking Collocation Review Log
type: resource
status: active
area: "[[Self-Development]]"
created: 2026-06-24
updated: 2026-06-24
tags: [english, TOEFL, speaking, spaced-repetition, review]
related:
  - "[[Speaking_Collocation_Bank]]"
review_target_per_day: 5
sr_scheme: NOT YET CHOSEN — next_review left blank until a scheme is decided
---
# Speaking Collocation Review Log

> [!info] Two parts
> 1. **Review-state table** — one row per collocation ID (the join key to [[Speaking_Collocation_Bank]]).
>    Holds the mutable memory state. SR-agnostic columns so any scheme can populate them later.
> 2. **Session log** — append-only record of each review session, so nothing silently repeats and
>    history stays queryable.

> [!warning] Spaced-repetition algorithm not yet built
> Per your decision, the SR scheme (e.g. Leitner vs SM-2) is **not implemented yet**, so
> `next_review` is blank. Until then, do daily review by **least-recently-reviewed first**
> (oldest `last_reviewed`, then `new` items), ~5 per day. Once you choose a scheme, the
> `next_review` column gets populated and a daily scheduled task can compute due items.

## Review-state table

| ID | Phrase (short) | status | reviews | last_reviewed | next_review |
|---|---|---|---|---|---|
| OPEN-01 | "I've never really thought about this before, but…" | new | 0 | — | — |
| OPIN-01 | "If you ask me… / Personally, I'd say…" | new | 0 | — | — |
| EXMP-01 | "A good example from my own experience is when…" | new | 0 | — | — |
| CONT-01 | "That said… / I can see both sides, but…" | new | 0 | — | — |
| CONC-01 | "So all in all… / That's basically why I…" | new | 0 | — | — |

**Column meanings**

- `status`: `new` → `learning` → `known` (your call each review).
- `reviews`: count of times reviewed.
- `last_reviewed`: date you last said it aloud in a full sentence (`YYYY-MM-DD`).
- `next_review`: blank until an SR scheme is chosen; then the due date.

## Session log

*(append one row per session — newest at top)*

| Date | IDs reviewed | Result / notes |
|---|---|---|
| — | — | (no sessions yet) |
