---
title: GRE Physics 8-Week Syllabus & Plan
type: syllabus
status: active
area: "[[Japan_Itinerary]]"
start: 2026-09-07
due: 2026-11-01
updated: 2026-10-05
tags: [gre, physics, syllabus]
---
# GRE Physics Syllabus & Plan (ETS Computer Exam Blueprint)

> [!info] Live Exam Format (Since Sept 2023)
> Computer-delivered: **70 questions in 120 minutes**. Scaled score 200–990.
> Raw target for **≥900**: approximately **52–56 / 70**.
> Exam: **Sun 2026-11-01, 14:00**, STN80177D Beijing. Free score recipient **7048**.

> [!warning] Rewrite lock (2026-09-11)
> Live calendar starts **Mon 2026-09-14**. Week 0 (Sep 7–13) is historical, not replayed.
> Weekly load: **15–17 h scheduled** via the same **5+6+2** rows with hedged minutes:
> **5× ~100 min** timed + **6× ~50 min** formula + **2× ~50 min** extra ≈ **16 h**.
> Extra row is misses-first. Hard cap **5 new timed sets/week** except W7 taper.
> Prep Studio (`/Users/Reid Hu/Physics GRE`) is the drill app, not a second calendar. Its `#/plan` view is generated from this file via `tools/build-plan.js` (not a second calendar).
>
> Timed sets **01–35** are Studio-primary packs (`js/data-packs.js`): each has an explicit practice-pool `ids` list and honest `n` (`n` = that list’s length). Thin themes stay short (e.g. pack **07** fluids n=4, pack **24** hydrogen n=5). Launch a pack with `PGRE.launchPack('03')` → `#/practice/custom`. Vault titles and daily children cite pack id + `n`.

## Week 0 (historical, Sep 7–13)
- Assigned: CM Sets 01–05. **Set 01 done 2026-09-08.** Set 02 open as of 2026-09-11.
- Do not restart Week 0 on or after Sep 14.

## Carry rule (Set 02)
- If Set 02 is still `[ ]` on **2026-09-14**: it is the first timed child. W1 timed becomes **02–06**. Set **07** goes to extra rows in W1–W2 (only if misses are empty) — not a 6th timed set.
- If Set 02 is done before Sep 14: W1 timed is **03–07** as in the table.

## Live schedule (Sep 14 – Nov 1)

| Week | Dates | ETS focus | Timed sets (≤5 new) | Checkpoints / notes |
|---|---|---|---|---|
| **1** | Sep 14–20 | CM 20% | **03–07** (or **02–06** if 02 carried) | Kahn Ch. 1, Prep Studio CM Bank |
| **2** | Sep 21–27 | EM 18% + Optics 8% | EM **08–10** + Optics **14–15** | Kahn Ch. 2 + Ch. 3 |
| **3** | Sep 28–Oct 4 | EM + Optics | EM **11–13** + Optics **16** (4 timed) | **Sun Oct 4:** paper diagnostic GR0177/GR0877 replaces the 5th timed |
| **4** | Oct 5–11 | Thermo 10% | **17–20** + 1 thermo review slot | Kahn Ch. 4. Optics not parked (done in W2–W3). **Sun Oct 11:** ets2024 current-format mock (Mock schedule) |
| **5** | Oct 12–18 | QM 13% | **21–25** | Kahn Ch. 5.1–5.6. **Sun Oct 18:** GR1777 100q intact mock (Mock schedule) |
| **6** | Oct 19–25 | Atomic 10% + SR 6% | **26–29** (4 timed) | Kahn Ch. 5.7 & Ch. 6. **Sun Oct 25:** GR9677 99q intact mock replaces the 5th timed (Mock schedule). Extra light that day. Set **30** (nuclear properties) → extras after misses. |
| **7** | Oct 26–Nov 1 | Lab 6% + Specialized 9% | **2 new:** Set **32** Error Analysis, Set **33** Particle/conservation. Other weekday timed slots = replay of the latest miss-heavy set, else replay **32**. **Timed child = none Fri–Sun.** | Fri logistics/formula; Sat sleep/travel; Sun exam. Deferred new: **30, 31, 34, 35** → extras after misses, else after 2026-11-01 |

## Mock schedule

Sundays are diagnostic days (Oct 4 paper diagnostic GR0177/GR0877 is already the W3 checkpoint on the live table). Remaining Sundays before exam day **2026-11-01**:

| Date | Form | Format | Role |
|---|---|---|---|
| **Sun 2026-10-11** | **ets2024** | 70Q/120 | Current-format sit. Highest-value unused mock. Occupies W4 Sunday; weekday timed 17–20 and the thermo review slot stay. |
| **Sun 2026-10-18** | **GR1777** | 100Q/170 | Unused 100q intact form. Occupies W5 Sunday; weekday timed 21–25 stay. |
| **Sun 2026-10-25** | **GR9677** | 99Q/170 | Unused intact form (99 questions as released). Replaces the 5th timed in W6 (live table). |

Book Sample Exams 1–3 (Prep Studio `cpg-exams`) are **optional extras**, not calendar rows. Use a spare weekday only after misses are empty. They already feed the weighted 70-question draw, so an intact sitting is optional, not required.

Do not schedule GR8677 or GR9277 as mocks (`ets-drill`, already in the daily pool). GR0177/GR0877 were the Oct 4 paper diagnostic — do not re-sit as computer mocks.

## Drill contract
- **35 Studio packs** still exist (honest `n` each; see [[01_Classical_Mechanics]] and siblings). W7 does not finish 31–35 as new timed work.
- **Formula Recall:** 20 formulas/session × 6 days/week via [[Formula-Recall-Decks]]. Hedged **~50 min**.
- **Error Rework:** 2× ~50 min/week into [[Misses-Log]]. Misses-first; only then leftover sets (07 if carried; 30; 31/34/35).
- **Diagnostics (dated, not extra weekly rows):**
  - Oct 4: volume diagnostic, ETS paper GR0177/GR0877.
  - Oct 11: ets2024, 70Q/120 current-format computer mock.
  - Oct 18: GR1777, 100Q/170 intact computer mock.
  - Oct 25: GR9677, 99Q/170 intact computer mock (replaces W6 5th timed).
  - Book Sample Exams 1–3: optional extras, not calendar rows.
- Parent `#weekly` rows on daily notes should read **~100 min / ~50 min / ~50 min** from the Sep 14 week rollover. Topic-set files that still say ~60 min are superseded by this hedge.

## Replan 2026-10-04 (overrides the live table from Oct 4)

Premise: all 35 packs are sat before 2026-11-01. The live table and the mock table above stay as written because `tools/build-plan.js` parses them; from 2026-10-04 the day table below decides the timed child.

**Evidence** — Prep Studio state, Chrome Profile 1 `file://` store, read 2026-10-04; dates in UTC+8.
- Packs fully sat: 02 (10/13, Sep 16), 03 (first-attempt 3/8, no receipt), 04 (10/11, Sep 18), 05 (7/15, Sep 24), 13 (6/7, Sep 21). Pack 01: 4 of 11 questions attempted in this store.
- Pack questions attempted: 101 of 366. New questions since Sep 14: 67 in 20 days (3.4 per day).
- Logged study time since Sep 14: 2.4 h per day (48 h). Time spent answering questions: 254 min in practice and 104 min in mistake drills (6 h). The time went to formula recall, reading and derivations, not to packs.
- Pace on first attempts: about 160–180 s per question on CM and EM; the exam allows 103 s.
- Formula cards: 176 of 336 learned — CM 52/52, EM complete, QM 28/52; Optics 0/32, Thermo 0/45, Atomic 1/12, SR 0/29, Lab 5/19, Specialized 0/9 (deck totals from the 2026-09-20 formula receipt).
- Mistake book: 64 active, 37 due or overdue.

**Evidence** — same store, read 2026-10-05 08:19.
- Pack 08 sat 2026-10-04: 9/16; 43.2 min of answering, 162 s per question on average, 9 of 16 over 103 s; answers spread from 11:35 to 17:32.
- First attempts since Sep 28: EM 9/19 (47%).
- Formula deck: 468 cards (the 336 above came from the 2026-09-20 receipt). 180 seen, 288 unseen — Optics 32, Thermo 48, book chapter 5 (QM + Atomic) 55, chapter 6: 33, chapter 7: 27, chapter 8: 24, chapter 9: 1, supplemental 68. New cards on Oct 4: 4.
- Mistake book: 73 active, 55 due or overdue; 9 added on Oct 4.

**Rules**
- Unit is questions per day, not packs per week: 30 packs (312 questions) over 21 working days ≈ 15 questions per day.
- Daily block: timed pack(s) at 103 s per question plus miss review (~65 min), formula recall (~35 min), mistake book 25 questions per day (~50 min; raised from 15 by Reid 2026-10-05).
- **Daily sequence (accepted by Reid 2026-10-04):** timed pack and its misses first, then formula recall, then the mistake book; `/learn`, derivations and reading come after. Reason: 48 h were logged since Sep 14 and only 6 h went to answering questions. This is a default order, not a gate: on a day when another order fits better, Reid chooses.
- Order follows the book: EM → Optics → Thermo → QM → Atomic → SR → Lab/Specialized; unfinished CM (01, 06) and the replays of 05 and 03 close the plan.
- A slipped pack moves to the next working day; Oct 28–29 are the only buffer. No pack sitting on Oct 30–31.
- Formula recall: clear due cards daily, plus 14 new cards per working day in book order (all 288 unseen cards; Reid 2026-10-05) — Optics (32) → Thermo (48) → chapter 5 (55) → chapter 6 (33) → chapter 7 (27) → chapter 8 (24) → chapter 9 (1) → supplemental (68). 21 working days from Oct 6 × 14 = 294; ends Oct 29. Diagnostic and mock days: due cards only.
- Sundays keep the mock schedule above. The paper diagnostic GR0177/GR0877 moved from Sun Oct 4 to Mon Oct 5, 14:00.

| Date | Timed packs | Questions |
|---|---|---|
| Sun Oct 4 | 08 | 16 |
| Mon Oct 5 | Diagnostic GR0177/GR0877, 14:00 | 100 |
| Tue Oct 6 | 09 | 14 |
| Wed Oct 7 | 10, 11 | 18 |
| Thu Oct 8 | 12 | 13 |
| Fri Oct 9 | 14, 15 | 21 |
| Sat Oct 10 | 16 | 14 |
| Sun Oct 11 | Mock ets2024 | 70 |
| Mon Oct 12 | 17, 18 | 14 |
| Tue Oct 13 | 19, 07 | 12 |
| Wed Oct 14 | 20 | 14 |
| Thu Oct 15 | 21, 22 | 14 |
| Fri Oct 16 | 23 | 18 |
| Sat Oct 17 | 24, 25 | 15 |
| Sun Oct 18 | Mock GR1777 | 100 |
| Mon Oct 19 | 26 | 20 |
| Tue Oct 20 | 27 | 13 |
| Wed Oct 21 | 28 | 15 |
| Thu Oct 22 | 29, 30 | 16 |
| Fri Oct 23 | 31, 32 | 17 |
| Sat Oct 24 | 33, 35 | 14 |
| Sun Oct 25 | Mock GR9677 | 99 |
| Mon Oct 26 | 34 | 14 |
| Tue Oct 27 | 01, 06 | 20 |
| Wed Oct 28 | Buffer, else replay 05 | 15 |
| Thu Oct 29 | Buffer, else replay 03 | 8 |
| Fri Oct 30 | No pack: logistics, due formula cards | — |
| Sat Oct 31 | No pack: sleep, travel | — |
| Sun Nov 1 | Exam, 14:00 | 70 |

Weekly targets for the daily-note rows: timed packs 8 (Oct 4–10), 10 (Oct 12–17), 9 (Oct 19–24), 3 + 2 replays (Oct 26–29); formula recall 6 per week; extra rework 2 per week (the misses of that week's diagnostic or mock first).

## start-my-day
Canonical Learning Target input. From 2026-10-04 the Replan day table above decides the timed child and the formula topic; a pack not yet sat on its date is sat first. Week boundaries and set lists in the live table override older examples (Week 0 = Set 01, Week 1 = Set 06).
