---
name: retention
description: >
  Re-test Progress-context threads and log the pass in Retention-context.
  Use when the user runs /retention or /wiki-review, says "retention check",
  "quiz me on what I learned", or wants to see if a solid thread still holds.
  Not for first-time teaching (/learn) or creating wiki notes (/atomic-note).
---
# Phase 0 — EVOLVE

Read `evolution.md` in this skill's folder. Apply accumulated lessons. English only.

# Job

Coverage checklist, not spaced forgetting. `/learn` writes `60_Learning_Progress/Progress-context.md`; `/retention` re-tests **Known solid** threads and writes `60_Learning_Progress/Retention-context.md`.

Do **not** scan `40_Wiki/`. Do **not** write wiki `last_reviewed` / `next_review` / `review_interval`. Named wiki / research / resources notes are extras; still log here.

# Files

Read both first:

1. `60_Learning_Progress/Progress-context.md`
2. `60_Learning_Progress/Retention-context.md` — if missing, create Open / Hold / Log; do not invent history
3. Matching session note (Progress-context **Session notes**)

# Queue

Named thread / item / `[[Note]]` → that target.

Else max **5**, then ask which:

1. **Open** (weak / fail)
2. **Never-checked** — Known solid with no Log row, oldest session date first

Skip **In progress**. Gaps / optional only if asked.

# Session (one pipeline, no modes)

Read the session note (or named note). Do not show answers first. Prefer last Open Weaknesses when picking items.

1. Reconstruct: one core item, own words or apply. Wait.
2. Two or three traps (misconception, transfer, near-miss). Wait per question unless they asked for a batch.
3. Mixed set: **3–4** items from the thread.
4. On each miss: instant correction (rule/answer in a few sentences) + **one** sibling item, then resume. No `/learn` arc.
5. Grade throughout: errors, omissions, imprecision; concise English correction. Not a bare pass/fail.

Physics: LaTeX in chat (`$...$` / `$$...$$`). No `$...$` in Retention-context pipe tables.

# Verdict (one, at the end)

- **hold** — reconstruct solid; no pattern still failing after its sibling. One slip that the sibling locked can hold.
- **weak** — reconstruct ok; a named pattern/item remains wrong.
- **fail** — reconstruct collapses, or the mixed set is mostly misses after corrections.

**hold** → Hold (date + note); remove from Open.
**weak** / **fail** → Open (name items in Weaknesses); remove from Hold.
**fail** also: point at `/learn` on that thread. Do not switch into `/learn` in this chat.

# Write

Read Retention-context fresh. Append Log: `YYYY-MM-DD | thread | verdict | one-line weaknesses or —`. Set `updated:` to today. Do not copy Known solid lists. Never-checked is derived.

Confirm in one short block. Offer one more from the remaining queue or stop.
