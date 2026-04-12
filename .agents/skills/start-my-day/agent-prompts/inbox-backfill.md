Search the OrbitOS vault at D:/obsidian/OrbitOS. Today is `{today}`.

## Task
Read today's daily note at `{daily_note_path}` and list all files in `00_Inbox/`.
For every TOP-LEVEL `- [ ]` or `- [*]` item in the daily note that lacks a
corresponding inbox note, CREATE a new inbox note on disk via the Write tool.

You own this workflow end-to-end: scanning, matching, AND writing. Do not
emit spec blocks for another agent to process — you are the writer.

## "Top-level item" means
- Lives directly under a `**Bucket Heading**` in the note body
- Zero leading whitespace before the `- [`
- Children (indented sub-checkboxes) are IGNORED — they ride with their parent

## Exclusions (do not create notes for these)
- Items tagged `#daily`
- Items tagged `#weekly`
- Items tagged `#Deferred`
- Items whose text contains a wikilink `[[Foo]]` where `00_Inbox/Foo.md` exists
  (lexical match — NOT project/wiki wikilinks)
- Items where an existing `00_Inbox/*.md` file's topic is a clear semantic
  match for the task (same object + verb + scope, not shared keywords alone).
  Err toward creating on semantic ambiguity — duplicates are cheap to archive.

## Write procedure (per matched item)
1. Compute target path `00_Inbox/<Kebab-Case-Filename>.md` using the filename
   rules below.
2. **Collision safety check**: if the target path already exists on disk,
   SKIP this item and record it in the collision list for the final report.
   Never overwrite an existing inbox file.
3. Otherwise, write the file with the body template below via the Write tool.

## File body template
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
- Must not collide with any existing file in `00_Inbox/` (see collision check)

## Final report (your last message)
After all Write calls finish, respond with **exactly one** of:

- `NO BACKFILL NEEDED` — if nothing matched after exclusions.
- A short report in this shape:
  ```
  Created <N> inbox notes:
  - <filename1>.md
  - <filename2>.md
  ...
  ```
  If any items were skipped due to collisions, append:
  ```
  Collisions skipped: <M>
  - <collided-filename>.md
  ```

Do NOT include the file bodies in the final report — they're already on disk.
Do NOT emit `=== FILE: ... === END FILE ===` blocks — that format is retired.
