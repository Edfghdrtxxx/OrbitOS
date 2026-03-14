# Quick Mode — Rapid Recall

Lightweight review optimized for throughput — review 5-8 notes in 10 minutes. Minimal friction, no deep probing.

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
3. Run the rapid-fire check below.

---

## Rapid-Fire Check

Generate **3 quick questions**:

| Type | Count |
|------|-------|
| Core definition / fact | 1 |
| Application / context | 1 |
| Cross-link (reference a `[[wikilink]]` from the note) | 1 |

Present **all 3 questions at once**. Wait for the user to answer, then grade all together.

Flag any English expression issues briefly.

## Verdict & Update

- **Pass (2/3 or better):** Advance interval by 1 level.
- **Fail (0-1/3):** Interval stays the same (no regression in quick mode).

Compute new frontmatter values per the Frontmatter Update Procedure in SKILL.md.

Quick mode does **not** write to the mistake ledger (`99_System/review_log.md`).

Confirm the update briefly (one line):
```
[[Note Name]]: interval N→N+1, next review YYYY-MM-DD
```

## Loop

Immediately use `AskUserQuestion` to offer:
- The next note from the ready queue (if scanning was done)
- Or ask the user to name another note
- Or stop

Keep looping until the user stops. Prioritize speed — minimal commentary between notes.

Hints: `/wiki-review full` → deep adversarial review · `/wiki-review full [[Note]]` → deep review a specific note
