Search the OrbitOS vault at D:/obsidian/OrbitOS. Today is `{today}`.

## Task
Read:
- Today's daily note at `{daily_note_path}`
- The previous daily note at `{previous_daily_note_path}` (may be an empty
  string if no previous note exists — handle gracefully)
- All files in `00_Inbox/`
- All files in `99_System/Archives/Inbox/**/` (for semantic dedup against
  already-archived work)

Then run TWO passes, creating new inbox notes on disk via the Write tool:

- **Pass A — Mirror today.** For every TOP-LEVEL `- [ ]` or `- [*]` item in
  today's note that is genuinely novel (see De-duplication below), create an
  inbox note tagged `inbox`.
- **Pass B — Dropped-task safety net.** For every TOP-LEVEL `- [ ]` or `- [*]`
  item in the previous note whose task text is NOT present in today's note
  (at any indent level, any section), create an inbox note tagged
  `inbox` + `dropped-task`. These capture tasks the user removed between
  yesterday and today — so an accidental drop is never silently lost.

You own this workflow end-to-end: scanning, matching, AND writing. Do not
emit spec blocks for another agent to process — you are the writer.

## "Top-level item" means
- Lives directly under a `**Bucket Heading**` in the note body
- Zero leading whitespace before the `- [`
- Children (indented sub-checkboxes) are IGNORED — they ride with their parent

## Exclusions (do not create notes for these, either pass)
- Items tagged `#daily`
- Items tagged `#weekly`
- Items tagged `#Deferred`
- Items whose text contains a wikilink `[[Foo]]` where `00_Inbox/Foo.md`
  OR `99_System/Archives/Inbox/**/Foo.md` exists (lexical match — NOT
  project/wiki wikilinks)

## De-duplication (HARD-prefer SKIP over CREATE)
A task is "already captured" and MUST be skipped if any of these hold:
- Task text appears verbatim, paraphrased, or as a subset of another item
  elsewhere in either daily note — covers the case where a task was re-nested
  under a different parent rather than dropped.
- An existing file under `00_Inbox/*.md` OR
  `99_System/Archives/Inbox/**/*.md` has a body that is a clear semantic
  match (same object + verb + scope, not just shared keywords).
- Pass B only: the task text appears ANYWHERE in today's note (any indent,
  any section) — it wasn't dropped, just relocated.

**Stance: err toward SKIPPING.** Duplicate inbox items create triage bloat.
Only create on clear novelty. If uncertain, skip and log in the final report
so the user can decide.

## Write procedure (per matched item)
1. Compute target path `00_Inbox/<Kebab-Case-Filename>.md` using the filename
   rules below.
2. **Collision safety check**: if the target path already exists on disk,
   SKIP this item and record it in the collision list for the final report.
   Never overwrite an existing inbox file.
3. Otherwise, write the file with the body template below via the Write tool.

## File body template — Pass A (mirror)
```
---
type: inbox
created: {today}
topic:
due:
priority:
status: pending
source: start-my-day
related:
  - "[[ProjectName]]"   # pulled from wikilinks in the task text, if any
tags:
  - inbox
---
<Task text, verbatim or lightly clarified. Do not expand scope.>

**Source:** `{daily_note_path}` → <bucket heading that contained the item>
```

## File body template — Pass B (dropped-task safety net)
```
---
type: inbox
created: {today}
topic:
due:
priority:
status: pending
source: start-my-day-dropped
related:
  - "[[ProjectName]]"   # pulled from wikilinks in the task text, if any
tags:
  - inbox
  - dropped-task
---
<Task text, verbatim or lightly clarified. Do not expand scope.>

**Source:** `{previous_daily_note_path}` → <bucket heading that contained the item>
**Note:** Present in the previous daily note but removed from `{daily_note_path}`.
Flag for user review — may have been an accidental drop, or an intentional one
that should be archived.
```

## Frontmatter field rules
- `type: inbox` — always literal, never omit
- `topic:`, `due:`, `priority:` — leave empty (no value after the colon).
  Downstream skills (`/kickoff`, `/archive`) fill these later.
- `related:` — if the task text has NO wikilinks, emit `related: []` (empty
  list). Otherwise emit one `- "[[Name]]"` bullet per wikilink found,
  preserving order.

## Filename rules
- Kebab-case, derived from the task's core noun phrase
- Strip filler verbs when they don't carry meaning
  ("Fix the heatmap plot" → `Heatmap-Plot-Visualization.md`)

(Collision handling lives in the Write procedure above, not here — single
source of truth.)

## Final report (your last message)
After all Write calls finish, respond with **exactly one** of:

- `NO BACKFILL NEEDED` — if nothing matched after exclusions and dedup.
- A structured report:
  ```
  Pass A — Mirror (<N_A> created):
  - <filename>.md
  - ...

  Pass B — Dropped-task net (<N_B> created):
  - <filename>.md  ← previous-note section
  - ...

  Skipped (dedup, <N_S>):
  - <task title> — matched <existing-file>.md
  - ...

  Collisions skipped (<N_C>):
  - <collided-filename>.md
  - ...
  ```
  Omit any section whose count is zero.

Do NOT include the file bodies in the final report — they're already on disk.
Do NOT emit `=== FILE: ... === END FILE ===` blocks — that format is retired.
