---
type: council-session
date: 2026-09-17
question: Correct remaining study hours for Prep Studio exam-horizon bar until Nov 1
chairman: Grok-4.5
members: [Grok-4.5, Grok-4.6, Gemini-3.8-Flash, Gemini-3.1-Pro]
thinking: high
quorum: 3/3 external (+ host synthesis)
status: complete
note: User requested Gemini Flash + Pro + Grok 4.6; peer-review stage collapsed to unanimous Stage-1 agreement and immediate repair.
---
# Exam horizon hours

## Question & Brief
What is the correct "hours remaining until the Physics GRE exam" quantity for Prep Studio's third study-time bar, and what is wrong with the current number?

Context: Exam 2026-11-01; survey day 2026-09-17 (~45 d). Syllabus lock 15–17 h/wk ≈ 16 h. PLAN week `hours` mostly 16, taper 8. UI showed `63.2–95.3 h left at 20–25 h/wk · 65.4 h ahead of pace` from `daysLeft×(20–25)/7 − lifetime surplus`.

## Stage 1 — First Opinions
### Grok-4.5 (Host) — PLAN sum ~97 h; kill surplus
**Thesis.** Remaining must be forward syllabus hours from non-historical `PGRE.PLAN` rows (pro-rate current week), ≈97 h on 2026-09-17 of 104 h live window. Weekly band must be 15–17, not 20–25.
**Weak Link.** Lifetime surplus subtraction treats past tab time as canceling future timed sets and mocks.
**Recommendation.** Drive remain from PLAN; fill = campaign log / 104; pace advisory only; unify weekly UI to 15–17.

### Grok-4.6 — Remaining is syllabus hours ~97
**Thesis.** Third bar = remaining scheduled hours on live syllabus; W1–W6 @16 + W7 @8 = 104 h window; on 2026-09-17 remain ≈97 h.
**Weak Link.** `daysLeft×(20–25)/7 − surplus` wrong three times (rate fossil, lifetime log, fungible debt).
**Recommendation.** PLAN pro-rate remain; fill campaign/104; move weekly bar to 15–17 same cut.

### Gemini-3.8-Flash — Curriculum workload ~97–104 h
**Thesis.** Bar = remaining scheduled curriculum (~97 h left of 104 h), not open-ended burn-down.
**Weak Link.** 20–25 rate + surplus shrink destroys operational meaning.
**Recommendation.** Anchor to PLAN; unify 15–17; pace never offsets remaining work.

### Gemini-3.1-Pro — Sum future PLAN hours ~95–100
**Thesis.** Correct quantity is scheduled workload left on syllabus (~95–100 h), from explicit future week `hours`.
**Weak Link.** Historical over-performance is not a discount on upcoming sets.
**Recommendation.** Scrap linear projection + surplus; remaining = forward PLAN sum; campaign fill vs ~110/104 total; weekly UI → 15–17.

## Stage 2 — Peer Review
Skipped as formal ballots: all four voices agreed on the same repair shape (PLAN remain, no surplus offset, 15–17 weekly). Host treated that as a 4-way lock and proceeded to implementation.

## Stage 3 — Chairman Synthesis
### Self-Bias Audit
Host stance matched Grok-4.6 / both Geminis; no minority host position to overweight.

### Final Answer
The broken bar mixed a fossil **20–25 h/wk** rate with **lifetime studyLog surplus**, so a heavy profile read “63–95 h left · 65 h ahead” while the syllabus still has ~**97 h** of scheduled work (45 d to Nov 1). Correct remaining hours = sum of non-historical `PGRE.PLAN` week `hours`, current week pro-rated by days left in that week. Live window total = **104 h**. Fill = hours logged since live start (2026-09-14) / 104. Pace is advisory only and must not shrink remaining. Weekly meters/copy move to **15–17 h**.

### Unresolved Tension
Tab-heartbeat “active hours” still undercount paper/PDF study vs syllabus scheduled hours — the bar is syllabus commitment, not a perfect wall-clock forecast.

### Recommendation
Shipped repair in Prep Studio (`view-study-time.js` horizon + 15–17 unify on dashboard/focus). Hard-refresh `#/study-time`.
