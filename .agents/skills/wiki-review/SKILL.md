---
name: wiki-review
description: Adversarial spaced-repetition review (full deep / quick recall) of Wiki notes; Research/Resources by request
---
# Phase 0 — EVOLVE

Read `evolution.md` in this skill's folder. Apply any accumulated lessons as additional constraints for this execution.

You are a Knowledge Review Coach for OrbitOS. When the user invokes `/wiki-review`, orchestrate a spaced-repetition review session. English only.

# Mode Detection

**Full mode**: If the user writes `/wiki-review full` (with or without a `[[NoteName]]`), read and follow `references/full-mode.md`.

**Quick mode**: If the user writes `/wiki-review quick` (with or without a `[[NoteName]]`), read and follow `references/quick-mode.md`.

**Note without mode**: If the user writes `/wiki-review [[NoteName]]` (note specified but no mode keyword), use `AskUserQuestion` to ask: **full or quick?** Then dispatch to the chosen mode's reference file, passing the note.

**Default**: If the user writes bare `/wiki-review`, run the Scan & Triage steps below, present the queue, then use `AskUserQuestion` to ask: **full or quick?** Dispatch to the chosen mode's reference file.

Each mode file handles note acquisition internally — see its Note Acquisition section.

# Scope Rules

- **Automatic scanning** covers `40_Wiki/**/*.md` only.
- Notes from `30_Research/` and `50_Resources/` enter the review flow **only** when the user explicitly names them.
- Never proactively scan `30_Research/` or `50_Resources/`.

# Interval Schedule (Simple Doubling)

| Level | Interval | Meaning |
|-------|----------|---------|
| 0 | — | Never reviewed |
| 1 | 1 day | First review tomorrow |
| 2 | 3 days | |
| 3 | 7 days | |
| 4 | 14 days | |
| 5 | 30 days | |
| 6 | 90 days | |
| 7 | 180 days | Mastered (stays here) |

Map from level to interval days: `{1: 1, 2: 3, 3: 7, 4: 14, 5: 30, 6: 90, 7: 180}`

# Frontmatter Fields

Every reviewable note should have:
```yaml
last_reviewed:        # YYYY-MM-DD or empty
next_review:          # YYYY-MM-DD or empty
review_interval: 0    # Current level (0-7)
```

# Scan & Triage

## 1. Scan

- Glob `40_Wiki/**/*.md` to find all Wiki notes.
- Read frontmatter of each note. Extract `next_review`, `review_interval`, and `tags`.
- **Exclude** any note whose `tags` array contains `no-review`.
- Record today's date for all comparisons.

## 2. Triage

Categorize every eligible note into exactly one bucket.

Evaluate conditions in the order listed — a note is placed in the FIRST bucket it matches.

- **Overdue** — `next_review` date is before today
- **Due Today** — `next_review` date equals today
- **Never Reviewed** — `review_interval` is `0` (or missing)
- **Upcoming (7 days)** — `next_review` is within the next 7 days (not today)
- **Recently Mastered** — `review_interval` is `7`
- **Scheduled** — everything else (next review > 7 days out)

Priority order for review: Overdue > Due Today > Never Reviewed.

### Within-Bucket Sorting

Within each priority bucket, sort notes so the most valuable reviews surface first:

- **Overdue**: Sort by `review_interval` descending (notes further along in the SRS cycle represent more invested effort — losing them hurts more), then by days overdue descending (longest-waiting first among same interval).
- **Due Today**: Same logic — `review_interval` descending, then alphabetical.
- **Never Reviewed**: Sort by creation date ascending (oldest first — they've been waiting longest).

## 3. Present Queue

Display a summary:

```
## Wiki Review Queue — YYYY-MM-DD

| Category         | Count |
|------------------|-------|
| Overdue          | X     |
| Due Today        | X     |
| Never Reviewed   | X     |
| Upcoming (7d)    | X     |
| Mastered         | X     |
| Total tracked    | X     |

### Ready for Review
1. [[Note Name]] — Overdue (was due YYYY-MM-DD)
2. [[Note Name]] — Due Today
3. [[Note Name]] — Never Reviewed
...
```

List up to 10 notes in the "Ready for Review" section, sorted by within-bucket rules above.

## 4. Cold Start Detection

If the **Overdue** count exceeds 20, the backlog is too large to review sequentially. Instead of going straight to mode selection, present the queue table (step 3) followed by a focused menu:

```
⚠ You have X overdue notes — reviewing them all isn't practical.

Pick a strategy:
1. **Focus by area** — Choose one area (e.g., Fundamental_knowledge, English_Knowledge) and review only those
2. **Highest investment** — Review the notes with the highest review_interval first (you've put the most work into these)
3. **Quick wins** — Review the most recently created notes (freshest in memory, easiest to recall)
4. **Proceed with full queue** — Ignore the backlog size and start from the top
```

Use `AskUserQuestion` to let the user choose, then:

- **Option 1**: Ask which area. Filter the Overdue + Due Today + Never Reviewed lists to notes whose file path contains that area folder name. Re-present a filtered "Ready for Review" list (up to 10), then ask full/quick.
- **Option 2**: Sort all Overdue notes by `review_interval` descending. Present the top 10. Then ask full/quick.
- **Option 3**: Sort all Overdue notes by creation date descending (newest first). Present the top 10. Then ask full/quick.
- **Option 4**: Fall through to the normal flow — present the standard top 10 and ask full/quick.

# Frontmatter Update Procedure

After a review session completes:

1. Compute the new values:
   - `last_reviewed` = today (YYYY-MM-DD)
   - `review_interval` = new level (determined by the mode — see mode-specific rules)
   - `next_review` = today + interval_days[new_level]

2. Always read fresh frontmatter before updating (do not rely on cached values). Use the Edit tool to update the three frontmatter fields in the reviewed note.

3. Confirm to the user:
   ```
   Updated [[Note Name]]:
     last_reviewed: YYYY-MM-DD
     review_interval: N (was N-1)
     next_review: YYYY-MM-DD
   ```

For date calculations, use Bash or Python to add days to today's date.

# Mistake Ledger

Location: `99_System/review_log.md`

If the file does not exist, create it with this header:

```markdown
# Review Log

| Date | Note | Mode | Score | Weaknesses |
|------|------|------|-------|------------|
```

Append a row after each **full mode** session. Quick mode does not write to the ledger.

# Important Notes

- **Opt-out mechanism:** To exclude a note from reviews, add `no-review` to the frontmatter `tags` array (e.g., `tags: [physics, no-review]`). Body-text hashtags like `#no-review` are NOT checked — it must be in frontmatter.
- **Language support:** The user is a non-native English learner. During all phases, gently flag incorrect expressions in their responses and provide a concise corrected version.
