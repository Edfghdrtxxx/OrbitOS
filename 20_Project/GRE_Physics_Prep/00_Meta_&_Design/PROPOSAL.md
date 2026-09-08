# Feature-Gap Proposal — what mainstream prep platforms have that this site doesn't

*Written July 15, 2026 · exam October 28, 2026 · **status: ALL 15 ITEMS SHIPPED July 15, 2026** (see `DESIGN.md` §8 for where each landed). The "considered and ruled out" list below remains ruled out.*

A survey of features standard on mainstream test-prep platforms (Magoosh, UWorld,
Kaplan, Achievable, Anki/Quizlet-style flashcard apps, and the
[Career Employer GRE-physics flashcards](https://careeremployer.com/test-prep/flashcards/gre-physics-flashcards)
you shared) that Prep Studio currently lacks. Pick what you want; everything else stays unbuilt.

Now shipped and therefore *not* listed: per-attempt history, a permanent mistake book
with spaced repetition, and the formula-recall flip-card portal.

**Effort key** — S: ≲ half a day · M: 1–2 days · L: several days.
Anything marked **[post-import]** only becomes meaningful once the
*Conquering the Physics GRE* markdown and parser v2 deliver a real question bank.

---

## Tier 1 — highest value before exam day

### 1. Timed mock-exam simulator — **L** [post-import]
**What:** Full exam-room simulation: 70 questions / 120 min (plus the 100 × 170 legacy
format), countdown timer, question palette with flag-for-review, no feedback until
submission, scaled-score estimate, per-topic breakdown.
**Why:** The single highest-impact feature of every mainstream platform — pacing under
time pressure is its own skill, and your Phase-2/3 plan is built around mock results.
**Note:** Already fully designed in `20_docs/Project Docs/DESIGN.md` §4; deliberately deferred until the
real bank arrives, so this is mostly execution, not design.

### 2. Analytics & trends dashboard — **M**
**What:** Magoosh/UWorld-style analytics over the attempt log you now have: accuracy
trend per week, per-topic accuracy vs. exam weight (a "what's costing me the most
points" ranking), time-per-question distribution, pace vs. the ~103 s/question budget,
volume heatmap by day.
**Why:** The attempt history now records everything needed; this turns it from a log
into decisions ("drill EM, you're 12 points under weight-adjusted par"). Phase 3 of your
plan explicitly wants data-driven weak-topic drilling.

### 3. Custom quiz builder — **S–M** (rises to M–L [post-import] with subtopics)
**What:** UWorld's core loop: build a set by topic(s), difficulty, and status —
unseen / previously missed / slowest / bookmarked — instead of only "topic or all".
**Why:** Targeted re-practice is the main reason UWorld users improve; with 20 preview
questions it's thin, but the filters (missed, slowest) already have real data behind them.

### 4. Pace trainer — **S**
**What:** Optional per-question timer display during practice with a target
(~1.7 min/question), plus over/under-pace marking in feedback and in history.
**Why:** The GRE physics test is famously time-starved; every platform surfaces pace.
The `ms` field is already captured on every attempt — this is mostly UI.

## Tier 2 — strong additions

### 5. Extra flashcard study modes — **M**
**What:** From the Career Employer reference: **Match** (timed term↔definition pairing
game), **Type-to-recall** (see prompt, type the formula/term), and **auto-quiz**
(multiple-choice generated from cards).
**Why:** Mode variety fights memorization-by-card-order; typing is markedly stronger
recall practice than flipping. Builds directly on the formula portal + SRS engine.

### 6. Confidence tagging — **S**
**What:** After answering, one tap: "knew it / guessed". Correct-but-guessed answers
surface in the mistake book as "lucky guesses" to review.
**Why:** UWorld-style; a right answer you guessed is a hidden weakness the current
correct/incorrect split can't see.

### 7. Question of the day / formula of the day — **S**
**What:** A daily dashboard widget serving one question (or card) with a one-tap answer,
independent of sessions.
**Why:** Standard on Magoosh, Kaplan, and the flashcard site; a low-friction daily hook
that feeds the streak on rest days.

### 8. Personal notes & bookmarks on questions — **S–M**
**What:** A margin-note field and a bookmark star on any question; a browsable
bookmarks/notes list.
**Why:** Every serious QBank has it; "why I fell for this" notes in your own words are
the mistake book's natural companion.

### 9. Search — **S–M**
**What:** One search box across questions, solutions, mistake book, formula cards, and
imported book notes.
**Why:** Becomes important the moment the book import lands (hundreds of sections);
trivial while content is small, so cheap to do early.

## Tier 3 — nice to have

### 10. Score prediction / readiness indicator — **M** [post-import]
**What:** A projected scaled score + "exam readiness %" from recent accuracy, coverage,
and mock results (clearly labeled an estimate).
**Why:** Motivating and standard (Magoosh score predictor, readiness scores on most
platforms) — but honest only with a real bank and mocks behind it.

### 11. Study-time tracking — **S–M**
**What:** Log active minutes per session; weekly hours vs. the plan's 15–17 h target on
the dashboard.
**Why:** Your plan is hour-budgeted, but nothing measures actual hours.

### 12. Distractor explanations — **UI: S · content: L** [post-import]
**What:** Per wrong choice: why *that* trap is tempting and wrong (not just why the
right answer is right).
**Why:** UWorld's signature learning feature. Content-heavy — realistic only if parser
v2 can mine it from the book's worked solutions, or written by hand for your top misses.

### 13. Print / PDF export — **S–M**
**What:** Print-friendly export of the mistake book and (post-import) per-topic formula
sheets.
**Why:** Your plan schedules *paper* ETS tests; a paper mistake book for the final-week
memorization sweep fits how you already work.

### 14. Keyboard-first practice — **S**
**What:** A–E to answer, Enter/space for next, consistent with the formula portal's
space/1–4 keys.
**Why:** Small, but compounds over thousands of practice answers.

### 15. Dark mode — **M**
**What:** A `data-theme="dark"` layer over the existing palette.
**Why:** Late-night studying is real (the Night Owl achievement agrees). Explicitly
listed out of scope in the design doc — included here only for completeness.

---

## Considered and ruled out (violates the site's founding constraints)

- **Accounts, cloud sync, leaderboards, community/forums** — the point is fully local.
- **AI tutor / chat explanations** (now common on Magoosh & Kaplan) — needs a network
  service; the site is offline by design.
- **Mobile app / notifications** — it's a local website; the dashboard review queue is
  the in-scope substitute for reminder pushes.

## Suggested picking order

If you want a shortlist: **#2 (analytics)** and **#4 (pace trainer)** are pure wins on
data you're already collecting; **#6 (confidence tagging)** is tiny and makes the
mistake book smarter; **#1 (mock simulator)** stays the big one to schedule right after
the book import lands. Say which numbers you want and I'll build them in that order.
