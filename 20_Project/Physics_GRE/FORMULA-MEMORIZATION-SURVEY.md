# Formula-Memorization Improvement Survey

*2026-07-16 — a 6-agent survey of Anki (+FSRS), Quizlet, Memrise, Brainscape, RemNote, SuperMemo, Mochi, Isaac Physics, Brilliant, Khan Academy, and the learning-science literature, cross-checked against a code audit of this app's formula module. 57 raw findings were deduplicated into the 12 recommendations below, ranked by impact-per-effort for a solo learner memorizing 334 formulas before the 2026-10-28 exam. Constraints respected: offline, no accounts, no external services, no AI, vanilla JS + KaTeX + localStorage.*

*Status 2026-07-16: ALL 12 recommendations implemented and E2E-verified (see DESIGN.md §4b for the shipped contracts). #4 shipped without the optional symbolic-equivalence parser; #12 shipped as conservative auto-cloze (skip-rather-than-garble) without the tile-assembly variant.*

Effort: S = hours · M = a day-scale feature · L = multi-day.

## 1. One-step undo of the last grade — impact HIGH, effort S
**From:** Anki's Ctrl+Z + code audit.
Grading is keyboard-first (1–4), and a fat-fingered "Again" on a mature card silently drops its ease by 0.20 and resets reps — corrupting that formula's schedule for weeks with no way back (`view-formulas.js` `grade()`, `srs.js` `gradeCard`). Snapshot `state.cards[id]` + queue position before each grade, keep a small undo stack on the session, add an Undo button + Ctrl+Z. Mirror in Type/Quiz.

## 2. Leech detection on the already-tracked lapse counter — impact HIGH, effort M
**From:** Anki leeches + code audit.
`gradeCard` already increments `st.lapses` on every Again (`srs.js:161`) but nothing ever reads it. Flag a card as a leech at ~8 lapses (re-warn at 12/16), show a "leech" chip in the Learned browse rows, and add a "Struggling formulas" drill (reuse `startStudy` over the leech set) plus a prompt to add a mnemonic note. Converts wasted churn into a targeted intervention list.

## 3. Exam-date interval cap with a guaranteed final pass — impact HIGH, effort M
**From:** Mochi's max-interval cap + Cepeda 2008 spacing research + code audit.
The scheduler is deadline-blind: a mature formula can currently schedule its next review *after* exam day. Add an exam-date setting and clamp intervals to `min(next, daysUntilExam − buffer)`; add a "final pass" mode that forces every learned card due within the last ~7 days. Guarantees all 334 formulas get at least one more pass before test day.

## 4. Type mode: use the auto-check it already computes, and 4 grades — impact HIGH, effort M
**From:** Isaac Physics equivalence marking + code audit.
`startType`'s `submit()` computes a correctness `hit` via `normText`/`acceptSet` (`flashmodes.js:313-320`) then throws it away, falling back to a 2-grade honor system (Close-enough/Missed → good/again only). Preselect the grade from `hit`, expose all four grades so typed recall can earn Easy intervals, and accept algebraically reordered answers via an aliases field. (Optional L upgrade: small expression parser + numeric sampling for true symbolic equivalence.)

## 5. Reverse cards: show the equation, ask what it is — impact HIGH, effort S
**From:** generation-effect / varied-practice research + code audit.
Every mode drills prompt→formula; the GRE also shows an equation and asks what it represents. Add a Reverse toggle in Study that swaps front/back rendering — reusing all 334 cards with zero new content authoring.

## 6. Near-miss Quiz distractors + strip the legend tell — impact HIGH, effort M
**From:** erroneous-examples research + code audit.
`buildOptions` (`flashmodes.js:405-421`) draws distractors as unrelated cards' full backs — eliminable by topic/shape alone — and the ~16 legend-bearing cards leak the answer by prose length. Generate algebra-perturbed twins instead (flip a sign, 2↔3 exponent, drop/add ½ or 2π, invert a ratio) and normalize options to formula-only. Forces discrimination on exactly the details the GRE probes.

## 7. Successive-relearning steps for new/lapsed cards — impact HIGH, effort M
**From:** Rawson & Dunlosky 2013 (3-correct criterion), Memrise planting + code audit.
A brand-new card graded Good once vanishes for 24h — where first-day forgetting is steepest. Require 2–3 correct in-session recalls (interleaved with other cards) before a new/lapsed card graduates to the day-scale SM-2 track. Implement as a session-scoped requeue counter; the persisted scheduler stays untouched.

## 8. Reconstruct-the-formula scaffold on Again — impact MEDIUM, effort S
**From:** arXiv 2506.19641 (coherence resources for physics formula memory).
On an Again grade (or a "try to rebuild" button), before revealing the answer show five generic prompts: units of the result, limiting behavior, scaling with each quantity, expected sign, one-sentence physical story. Turns a failed recall into effortful reconstruction — the encoding that lets a formula be re-derived on exam day. Pure static UI.

## 9. Deliberate topic interleaving in the daily queue — impact MEDIUM, effort S
**From:** Taylor & Rohrer 2010 + code audit.
Plain shuffle allows same-topic streaks, and topic-checklist picks cluster. Replace the session shuffle with a topic round-robin and bias random new-card sampling toward a spread across topics. Trains the situation→formula mapping the exam tests.

## 10. Retention stats + due-forecast panel — impact MEDIUM, effort M
**From:** Anki True Retention / Review Heatmap + code audit.
All the data already exists in `state.cards` (reps/lapses/ease/due/lastGrade). Show first-try pass rate on mature vs young cards and a 7/30-day due-load forecast strip — the signal for whether to raise or lower the daily target.

## 11. Chunk Study into ~10-card rounds with checkpoints — impact MEDIUM, effort S
**From:** Brainscape rounds + code audit.
Study currently runs the whole remaining batch in one sitting (can exceed 100 cards on heavy days; the games already cap their rounds). Insert a checkpoint screen every ~10 cards with a one-tap "+10 more" — natural stopping points sustain adherence over a 15-week plan.

## 12. Cloze / partial-equation recall for the hardest formulas — impact HIGH, effort L
**From:** Anki/RemNote cloze, SuperMemo's 20 rules, Memrise tile-tapping + code audit.
The hard part of a formula is usually one detail (the ½, r vs r², a sign) and all-or-nothing reveal lets you self-grade Good while fuzzy on it. Blank a single term of the KaTeX equation and ask for just that piece. Honest scope: reliable auto-cloze over arbitrary LaTeX is genuinely hard — auto-blank only simple token cases, hand-author clozes for the ~50 leech/hard cards, or use the lighter tile-assembly variant (split the equation into shuffled term tiles). Pairs naturally with #2 (leeches decide which cards earn clozes).

---

### Suggested bundles
- **Quick wins (one sitting):** #1 undo, #5 reverse cards, #8 rebuild scaffold, #9 interleaving, #11 rounds.
- **Scheduler integrity:** #3 exam-date cap, #7 learning steps, #2 leeches.
- **Sharper testing:** #4 Type auto-check, #6 near-miss distractors, then #12 cloze as the capstone.
