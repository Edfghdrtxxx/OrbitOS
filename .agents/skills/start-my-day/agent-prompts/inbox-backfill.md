Search the OrbitOS vault at D:/obsidian/OrbitOS. Today is `{today}`.

## Task
Read today's daily note at `{daily_note_path}` and list all files in `00_Inbox/`.
For every TOP-LEVEL `- [ ]` or `- [*]` item in the daily note that lacks a
corresponding inbox note, emit a new inbox-note spec.

## "Top-level item" means
- Lives directly under a `**Bucket Heading**` in the note body
- Zero leading whitespace before the `- [`
- Children (indented sub-checkboxes) are IGNORED — they ride with their parent

## Exclusions (do not emit specs for these)
- Items tagged `#daily`
- Items tagged `#weekly`
- Items tagged `#Deferred`
- Items whose text contains a wikilink `[[Foo]]` where `00_Inbox/Foo.md` exists
  (lexical match — NOT project/wiki wikilinks)
- Items where an existing `00_Inbox/*.md` file's topic is a clear semantic
  match for the task (same object + verb + scope, not shared keywords alone).
  Err toward creating on semantic ambiguity — duplicates are cheap to archive.

## Output format
For each bare item, emit one block:

=== FILE: 00_Inbox/<Kebab-Case-Filename>.md ===
---
created: {today}
status: pending
source: start-my-day
related:
  - "[[ProjectName]]"   # pulled from wikilinks in the task text, if any
tags:
  - inbox
---
<Task text, verbatim or lightly clarified. Do not expand scope.>

**Source:** `{daily_note_path}` → <bucket heading that contained the item>
=== END FILE ===

If nothing to create, output exactly: NO BACKFILL NEEDED

## Filename rules
- Kebab-case, derived from the task's core noun phrase
- Strip filler verbs when they don't carry meaning ("Fix the heatmap plot" →
  `Heatmap-Plot-Visualization.md`)
- Must not collide with any existing file in `00_Inbox/`
