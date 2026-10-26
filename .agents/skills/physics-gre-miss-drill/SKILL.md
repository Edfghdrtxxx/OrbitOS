---
name: physics-gre-miss-drill
description: >
  Turn Physics GRE repeat misses into short targeted drills in Prep Studio, then
  debrief the finished drill and route each gap to a Recall card or a /learn
  session. Use when the user asks to drill mistakes, keep-missing or weak topics,
  build a drill from the mistake book or mock results, or reports a finished
  drill (often with a photo of handwritten work), or wants you alongside in
  real time during Recall cards or a drill. Not timed packs
  (/practice-physics-gre-set) and not tutoring itself (/learn).
---

# Phase 0 — EVOLVE

Read `evolution.md` in this skill's folder if it exists; apply its lessons.

# Philosophy

Points before the test come from the topics that lose the most, through misses that are cheap to fix. Rank before every drill; leave what is already solid. These are principles, not steps: adapt to the day.

# Core spirits

- **Points first, by topic.** The goal is the gap to the target score, not coverage. Concept rules below pick questions inside the chosen topics; they never pick the topics.
  - Gap: state how many questions the latest mock falls short of the target (the mock review gives it, such as 9–10 of 70 for 900).
  - Ranking: points lost per topic summed across the mocks (the mock review's per-topic table; for a mock not yet reviewed, `exams[].perTopic`). Rebuild it after each new mock.
  - Expected gain: a topic's lost points times the share of those misses a fact or a rule fixes. Draw from the top topics until the expected gains could close the gap.
  - A topic that already scores high waits, even when it has repeat-miss concepts: special relativity at 79% could add about one question out of 70.
  - Re-rank before every drill, including the second and third of a day. A drill built from the previous drill's leftovers inherits its topic mix: on 2026-10-24 Drill D came from Drill C's cut list, was topped up with whatever topic still had unseen questions, and ended 13 of 20 in special relativity, the topic losing the fewest points.
  - Before proposing, count the drill's questions per topic and check the counts against the ranking. Show the gap, the ranking table and the counts with the drill.
- **Evidence across mocks, counted per concept.** A concept is a target when it lost points (wrong, or flagged and guessed right) in two or more mocks, or a question on it is still wrong on the latest redo. A guessed right answer is not knowledge. A concept from one mock waits, even when its question sits in the mistake book.
- **Cheap first, strategic over complete.** The drill is for exam points. Prefer gaps that one fact or one rule fixes (about 60 s once known) over multi-step methods. Check each question, not only its concept: one that chains several steps (a matrix inversion, a paradox, an addition with a twist) is not cheap even when its concept is; leave it out unless the user asks. Studio `difficulty` 3 is a flag to check, not a rule. Points lost per topic break ties.
- **Concepts, not questions.** Group misses into concepts. One drill holds one concept, or one kind of fix (facts, rules). A drill has 20 questions unless the user names another size. When the unfixed questions on target concepts run short, fill first with other unfixed mistake-book questions that are cheap, from the top-ranked topics, then with transfer questions from those same topics.
- **Unfixed only, plus transfer.** From a target concept, drill the questions never redone or still wrong on the latest redo, even ones from a single mock. Add unseen questions on the same concept: a right answer on a repeat may be memory.
- **Respect recorded decisions.** Leave out what the user chose to skip (the mock review records them, such as laser trivia).
- **Show the ranking.** Give the per-mock evidence, the drill's question ids, and what you left out and why. Launch when the user asks; otherwise propose.
- **Act in the user's live tab.** Use the existing Prep Studio tab and its origin's store. Check for a parked session before replacing it.
- **Remind at launch.** Ask the user to tap the self-assessment chips after each answer: Guessed when unsure, Too slow, Forgot something, and Keep failing only for a question failed again and again. Ask for a photo of the handwritten work afterward, with one sentence on each doubt.
- **Debrief the work, not the score.** Read the handwritten work and each attempt's chips. Give feedback on every question, right ones included, drawn from the draft and the chips: a faster route, a wrong reason behind a right pick, a step the draft skipped. Right but unsure (Guessed, Forgot something, Keep failing, "don't know why" in the notes, flagged) is a gap: answer the confusion the user wrote down. Compare time with about 103 s per question, and name the cue that would have made a slow question fast (often a limiting case).
- **Walk the gaps one at a time.** Take the wrong and unsure questions in drill order; move on when the user says so. For each: the rule, the step where the draft went off, the fastest exam route, and a sign or limit check. End with one transfer question that changes one element and keeps the rule (RL step → RC charging; $\nabla^2(1/r)$ → $\nabla\cdot(\hat{\mathbf r}/r^2)$), answerable in about a minute without paper, and written in English, as on the test. Check the answer, refine the user's own memory rule where it falls short, then wait.
- **Route each gap to the cheapest fix.**
  - One fact: a Recall card. Search the deck first and append to an existing card (back or note, front unchanged, so its schedule holds) instead of adding one; then put it in today's batch. A card that exists but was never opened is the usual cause; say so.
  - A "why" that recurs across mocks: `/learn` in its own session, briefed with the question ids, the picks, the user's own words, and the days left before the test.
  - Both, when a card holds the fact and the reason needs a session.
  - Neither: one sentence in the debrief.
- **Study alongside on request.** When the user wants you with them in real time (Recall cards or a drill), read their tab for the current card instead of asking. Card and question text stay in English, as on the test; the user answers in English, often by dictation; you reply in Chinese with the English terms. Fit two choices to the set: who starts each turn (their message, a card change, an Again or Hard grade) and your role (answer them, warn of a trap they hit before, hear their answer before they flip, ask one transfer question after a right answer). A right answer on a familiar card is not transfer. The user brings only the cards they find unfamiliar or have a question on; answer those, and do not walk them through every card, which they find too slow.
- **Fit the calendar.** Tie the next step to the latest mock review and the next mock, and name a stop point. Sleep before a mock is worth more than one more drill.

# Where things are

- Chips (`js/app.js`, `PGRE.assess`): Knew it / Guessed → attempt `confidence` `sure` / `guess`; Too slow / Forgot something / Keep failing → attempt `tags` `slow` / `forgot` / `stuck`. Keep failing also flags the question for mistake-book retakes.
- Data: `PGRE.store.state` (`attempts` with `confidence` and `tags`, `mistakes`, `cards` for Recall review state, `exams[]` with `order`, `answers`, `flags`, `qSec`); `PGRE.questionById(id, {includeExam: true})`; today's totals at `GET http://127.0.0.1:4789/pgre-status`. Check mock totals against the mock review in `20_Project/GRE_Physics_Prep/04_Diagnostics_&_Errors/`.
- Launch: `sessionStorage['pgre-quiz-config'] = {ids, label}`, then `#/practice/custom` (`PGRE.route()` if already there). Ids must be in `PGRE.allQuestions()`. The mistake book's own drill buttons filter by topic and the keep-failing flag, not by concept.
- Debrief order: Studio shuffles a drill; its "Question N of M" follows the session's `ids`, the same order as the attempt `ts`. In the debrief, name each question by that number and its topic (第 6 题，厄米算符); an id alone is not enough, so put it after the number if at all.
- Cards: `content/bank/` is gitignored, so copy a file to the scratchpad before editing it, then run `tools/test-recall-lists.js`. `supp-*` cards live in the tracked `js/data-formulas.js`. Reload each edited file into the live tab with a cache-busting script tag before selecting, or the tab keeps the old text. `PGRE.formulaDeck()` returns a Promise; select with `PGRE.srs.addFormulaDaySoft(deck, ids)`. Card rules: Prep Studio `AGENTS.md`, "Recall card wording" and "Recall deck curation".
- Current Recall card (`#/formulas`): the line "Card N of M" and the `[data-goto]` button at index N−1, whose `data-id` is the card id; read its back from `PGRE.formulaDeck()`. Grades land in `state.formulaStudy.history` (`id`, `grade`). Reading these leaves the page alone. Studying chosen ids only: search has no id filter, so wrap `PGRE.formulaSearch.run` to return those ids for one query, click "Study these N", and restore it. This ad-hoc session replaces the parked daily one; carry over the ids in its `steps` (cards graded Again, still due back that day).
- Tab access and origin: `web-access`; memory `project_physics_gre.md`.
