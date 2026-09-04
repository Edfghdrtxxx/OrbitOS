---
type: council-session
date: 2026-09-04
question: Where should the weekly cadence live - embedded #weekly count rows in the daily note (hand-bumped), embedded with end-my-day auto-bump, or a separate weekly note file?
chairman: Claude (devin/claude-fable-5-1)
members: [Claude, Grok-4.6, Gemini-3.8-Flash]
thinking: high
quorum: 3/3
status: complete
---
# Weekly cadence container for the OrbitOS daily note

## Question & Brief
**QUESTION.** Where should the weekly cadence live for a solo Obsidian daily-planning system: (A) embedded in the existing daily note as <=5 `#weekly` count rows `(n/N)` the user bumps by hand, with a Sunday branch in `start-my-day` proposing next week's counts; (B) same as A but `/end-my-day` parses `## Log` and bumps counters automatically; or (C) a separate weekly note file (`10_Daily/2026-W38.md`) as source of truth from which each daily note is derived?

**CONTEXT.** Exam-first sequence: TOEFL Sep 5-13, GRE Physics Sep 14-Nov 1 (min 900), applications Nov 2-Dec 22. Current `start-my-day` copies yesterday byte-for-byte, resets `#daily`, drops completed non-`#daily`, leaves `#weekly` untouched (tag unused in practice); template used 0/7. Failures over 7 notes: ~10 lines unchecked 7/7; Appendix backlog; Anchor drift from `Game_Framework.md`; 09-03 Evening Review verbatim copy of 09-02; `energy:` low 5/7 and unconsumed; ~9 h/day of estimates; Evening Review filled 3/7. User wants flexibility (only the week can fail), Sunday agent proposal, primary fear = over-engineering, rituals = one Sunday approval + daily ticking. Three skills bind to exact H2 headings and tags `#daily #weekly #Deferred`.

## Stage 1 - First Opinions
### Member-Host - Embed in daily note; hand-bump; no weekly file
Option A. Root cause: yesterday's note is the source of truth, so lines are immortal and nothing forces a re-decision. The fix is a weekly re-decision point, not a weekly document. A Sunday branch regenerating `## Priorities` from last week's `(n/N)`, deadlines and `Game_Framework.md` also kills Anchor drift and the Appendix backlog. `#weekly` already exists in the contract. Footprint: one skill edit, zero new files, zero parsing. Weak link of C: the count's only consumer is next Sunday's proposal, which reads last Saturday's note - a ledger nobody reads is the over-engineering the user fears. B: parsing free-text Log is the first hidden logic in the system and fails silently on the 4/7 days end-my-day is not run. Recommendation: lock A with <=5 `#weekly` rows + <=3 `#daily` habits, `[x]` only at target; revisit C only after the GRE window.

### Member-Grok - Ship A; stop copying Evening Review forward
Pick A. `#weekly` already survives copy-forward - that is the feature: the week is the failing unit, so counters must persist. Weak link of C: copy-forward of weekly counts is desired; observed failures are daily (fabricated reviews, drifted Anchor, dead template). `Game_Framework.md` is canonical and still drifted; a W38 file will drift the same way; deriving daily from weekly is two sources of truth pretending to be one. B: Log is the same class of section as Evening Review (3/7); auto-bump stalls or lies. Against "they will forget to bump": reviews were copy-forwarded as already-written prose; a live `(3/5)` is blank unfinished work - a checkbox, not composition. Recommendation: ship A; separately reset `## Evening Review` blank daily - that is the actual 09-03 failure. No weekly file, no Log parsing.

### Member-Gemini - Separate weekly file as circuit breaker
Option C. Justified not by counters but as a circuit breaker on the Markov-chain copy-forward that causes every observed failure. Weak link of A: it confuses agent implementation complexity with user operational friction - hand-bumping `(n/N)` violates "checkbox-ticking only", and rolling unchecked items forward keeps daily guilt alive. B is dead on arrival (3/7 Log). C puts structural weight on the agent; user keeps one Sunday approval + ticking. Recommendation: Sunday branch generates `10_Daily/YYYY-Www.md` with <=5 targets grounded in `Game_Framework.md`; weekdays instantiate fresh daily notes from that file.

## Stage 2 - Anonymized Peer Review
**Mapping:** A=Grok, B=Host, C=Gemini
### Member-Host review
Accuracy A > C (A isolates the 09-03 duplication as a body-copy bug fixable independent of container; C states hand-bump "violates" the constraint as fact rather than tradeoff, and misreads A as rolling unchecked items forward). Insight C > A ("circuit breaker on the Markov chain" is the sharpest root-cause statement; A's Game_Framework-drift analogy also cuts against A's own daily files). Strongest flaw: both accept a false dichotomy - the root cause is copy-forward from yesterday, not file count; A could regenerate daily Priorities from Sunday's note without a new file. Opinion change: partial - keep A's container, adopt C's mechanism. FINAL RANKING: 1. A, 2. C.

### Member-Grok review
Accuracy B > C; insight B > C. C is right that B is dead but overclaims: A does not destroy the daily ritual, and "zero added ceremony" is false - a W38 file that daily notes derive from is a two-file protocol with an unspecified write-back path (hidden agent logic or a file the user must open). Strongest flaw: C's category error - every listed failure is daily-section immortality; a W38 file fixes none uniquely. B's lesser miss: hand-bumped `(n/N)` vs the letter of "checkbox-ticking only" unresolved. No opinion change. FINAL RANKING: 1. B, 2. C.

### Member-Gemini review
Accuracy B > A; insight B > A (re-decision point, not document). A's claim that hand-editing `(n/N)` is "the same motor action as ticking" is a disqualifying misrepresentation. Strongest flaw across both: they diagnose copy-forward as root cause yet leave the Mon-Sat copy-forward chain untouched; a user who skips 4/7 reviews will mis-bump counters that then copy forward and poison the Sunday re-decision. No opinion change: C is an agent-managed circuit breaker; A shifts architectural debt onto willpower. FINAL RANKING: 1. B, 2. A.

## Stage 3 - Chairman Synthesis
### Self-Bias Audit
Member-Host (B) ranked first in both peer reviews and was not named strongest flaw; legitimate synthesis base - but both reviewers' strongest-flaw sections expose gaps in B (Mon-Sat copy-forward chain; `(n/N)` write-back), so the synthesis closes them rather than restating B.

### Final Answer
Embed the week in the daily note - no separate weekly file - but not as originally proposed. All three members agree the disease is that yesterday's note is the source of truth ("daily-section immortality", "Markov chain", "immortal lines"). A weekly re-decision point cures that; a weekly document is a second source of truth that `Game_Framework.md` has already shown will drift, with no specified write-back path - hence C lost 2-0 despite the sharpest diagnosis. Gemini's objection stands, though: the original A still copied Monday-Saturday from yesterday, so a mis-bumped counter propagates all week. Fix without a file: weekday generation regenerates from Sunday's note (the week's plan), carrying forward only the `#weekly` counts and `## Log`. That is Gemini's circuit breaker at Grok's footprint - one skill, zero new files, every non-counter section born fresh daily, and the duplicated Evening Review becomes structurally impossible. Option B (parse Log) rejected unanimously: a counter derived from a 3/7-filled section lies. The `(n/N)` hand-bump is a one-character edit, not composition, but it is not a checkbox; the strictly checkbox-only alternative is N nested checkboxes per row at the cost of note length.

### Unresolved Tension
Strict "ticking only" vs a <=5-line note: the hand-bump buys brevity by spending one keystroke of non-checkbox editing per completion.

### Recommendation
Lock A-prime: <=5 `#weekly (n/N)` rows + <=3 `#daily` habits; Sunday branch proposes counts (one approval reply); weekdays regenerate from Sunday's note carrying only counts + Log; Anchor read from `Game_Framework.md` at generation time. Ask the user one question: hand-bump `(n/N)` or nested checkboxes.
