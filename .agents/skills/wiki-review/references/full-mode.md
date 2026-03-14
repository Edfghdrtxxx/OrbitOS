# Full Mode — MIT-Infused Deep Review

Deep review session combining FRS methodology with adversarial learning (MIT Learning Philosophy). Designed for depth over throughput — pressure-test 1-2 notes per session.

## Note Acquisition

If a specific `[[NoteName]]` was provided in the invocation, use that note directly. It can be from any folder (`40_Wiki/`, `30_Research/`, `50_Resources/`).

If no note was specified:
1. Ensure Scan & Triage has been run (run it per SKILL.md if not already done in this session).
2. Use `AskUserQuestion` to let the user choose which note to review. Options: the top notes from the ready queue (up to 4), plus "skip" to end the session.
3. If the user skips, stop.

## Setup

Once a note is selected:

1. **Read the full note content** using the Read tool.
2. If the note lacks review frontmatter fields (`last_reviewed`, `next_review`, `review_interval`), add them before proceeding (set `review_interval: 0`).
3. Run the five phases below.

---

## Phase 1 — Feynman Check

Ask the user: *"Explain [[Note Name]] in your own words."*

Wait for their response. Then:
- Point out **errors**, **omissions**, and **imprecise areas**
- Ask **3 follow-up questions** to probe understanding depth
- Flag any **English expression issues** and provide concise corrections

Wait for the user to respond to follow-ups before proceeding.

## Phase 2 — Weaponize the Material

Generate **5 adversarial questions** designed to expose weaknesses:

| Type | Count | Purpose |
|------|-------|---------|
| Trick / Misconception trap | 2 | Questions that exploit common misunderstandings of the concept |
| Cross-concept synthesis | 2 | Combine this concept with related notes (use `[[wikilinks]]` from the note's body and Related Concepts) |
| Exam-style ambush | 1 | The hardest realistic question — "how would a professor weaponize this on a final?" |

Present questions **one at a time**. Wait for the user's answer before grading and moving on. Track the score (X/5).

After grading each answer, flag English expression issues in the user's response.

## Phase 3 — Pattern Diagnosis

Read `99_System/review_log.md`. Filter for rows matching the current note.

- **If prior history exists:** Compare today's mistakes to past weaknesses. Surface recurring patterns:
  *"You've struggled with [X] in [N] previous sessions (dates). This suggests a persistent gap in [underlying concept]."*
  If today's mistakes are new (not seen before), note that as progress.
- **If no prior history:** Skip this phase — state "First full review of this note — no pattern data yet."

## Phase 4 — Weak Spot Prediction

Based on:
- The note's `[[wikilinks]]` and Related Concepts
- Today's mistakes
- The mistake ledger (patterns across ALL notes, not just this one)

Predict: *"Based on your performance, you are likely least prepared for [[LinkedNote]]. Here's why: [reasoning]."*

Suggest 1-2 notes to review next (prioritize those already in the review queue if possible).

## Phase 5 — Update

### Score Threshold & Interval

- **Score >= 3/5:** Advance interval by 1 level (max 7)
- **Score < 3/5:** Regress interval by 1 level (minimum level 1). The note comes back sooner.

Compute new frontmatter values per the Frontmatter Update Procedure in SKILL.md.

### Mistake Ledger Write

Append a row to `99_System/review_log.md`:

```
| YYYY-MM-DD | [[Note Name]] | full | X/5 | concise weakness description |
```

If the user scored 5/5 with no issues, write `—` in the Weaknesses column.

### Continue or Stop

Use `AskUserQuestion` to ask if the user wants to review another note or stop.

Hints: `/wiki-review quick` → rapid recall mode · `/wiki-review quick [[Note]]` → rapid review a specific note
