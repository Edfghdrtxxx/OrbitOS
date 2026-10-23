---
name: physics-gre-miss-drill
description: >
  Turn Physics GRE repeat misses into short targeted drills in Prep Studio, then
  debrief the finished drill and route each gap to a Recall card or a /learn
  session. Use when the user asks to drill mistakes, keep-missing or weak topics,
  build a drill from the mistake book or mock results, or reports a finished
  drill (often with a photo of handwritten work). Not timed packs
  (/practice-physics-gre-set) and not tutoring itself (/learn).
---

# Phase 0 — EVOLVE

Read `evolution.md` in this skill's folder if it exists; apply its lessons.

# Philosophy

Points before the test come from repeat misses that are cheap to fix. Rank before you drill; leave what is already solid. These are principles, not steps: adapt to the day.

# Core spirits

- **Evidence across mocks, counted per concept.** A concept is a target when it lost points (wrong, or flagged and guessed right) in two or more mocks, or a question on it is still wrong on the latest redo. A guessed right answer is not knowledge. A concept from one mock waits, even when its question sits in the mistake book.
- **Cheap first.** Prefer gaps that one fact or one rule fixes (about 60 s once known) over multi-step methods. Exam weight breaks ties.
- **Concepts, not questions.** Group misses into concepts. One drill holds one concept, or one kind of fix (facts, rules).
- **Unfixed only, plus transfer.** From a target concept, drill the questions never redone or still wrong on the latest redo, even ones from a single mock. Add unseen questions on the same concept: a right answer on a repeat may be memory.
- **Respect recorded decisions.** Leave out what the user chose to skip (the mock review records them, such as laser trivia).
- **Show the ranking.** Give the per-mock evidence, the drill's question ids, and what you left out and why. Launch when the user asks; otherwise propose.
- **Act in the user's live tab.** Use the existing Prep Studio tab and its origin's store. Check for a parked session before replacing it.
- **Debrief the work, not the score.** Read the handwritten work and the attempt `tags`. Right but unsure (tag `forgot` or `stuck`, "guessed", "don't know why", flagged) is a gap: answer the confusion the user wrote down. Compare time with about 103 s per question, and name the cue that would have made a slow question fast (often a limiting case).
- **Route each gap to the cheapest fix.**
  - One fact: a Recall card. Search the deck first and append to an existing card (back or note, front unchanged, so its schedule holds) instead of adding one; then put it in today's batch. A card that exists but was never opened is the usual cause; say so.
  - A "why" that recurs across mocks: `/learn` in its own session, briefed with the question ids, the picks, the user's own words, and the days left before the test.
  - Both, when a card holds the fact and the reason needs a session.
  - Neither: one sentence in the debrief.
- **Fit the calendar.** Tie the next step to the latest mock review and the next mock, and name a stop point. Sleep before a mock is worth more than one more drill.

# Where things are

- Data: `PGRE.store.state` (`attempts` with `tags`, `mistakes`, `cards` for Recall review state, `exams[]` with `order`, `answers`, `flags`, `qSec`); `PGRE.questionById(id, {includeExam: true})`; today's totals at `GET http://127.0.0.1:4789/pgre-status`. Check mock totals against the mock review in `20_Project/GRE_Physics_Prep/04_Diagnostics_&_Errors/`.
- Launch: `sessionStorage['pgre-quiz-config'] = {ids, label}`, then `#/practice/custom` (`PGRE.route()` if already there). Ids must be in `PGRE.allQuestions()`. The mistake book's own drill buttons filter by topic and the keep-failing flag, not by concept.
- Debrief order: Studio shuffles a drill; match the user's numbering to questions by attempt `ts`.
- Cards: `content/bank/` is gitignored, so copy a file to the scratchpad before editing it, then run `tools/test-recall-lists.js`. Reload `content/bank/cpg-lists.js` into the live tab with a cache-busting script tag before selecting, or the tab keeps the old text. `PGRE.formulaDeck()` returns a Promise; select with `PGRE.srs.addFormulaDaySoft(deck, ids)`. Card rules: Prep Studio `AGENTS.md`, "Recall card wording" and "Recall deck curation".
- Tab access and origin: `web-access`; memory `project_physics_gre.md`.
