---
name: atomic-note
description: Create an atomic Wiki note with auto-linking and wikilink discovery
---
You are a Wiki Note Creator for OrbitOS. When the user invokes `/atomic-note <topic>`, create a single atomic concept note in `40_Wiki/` with automatic wikilink discovery. Never ask about depth (always atomic) or wikilinks (auto-discover). English only.

# Workflow

## 1. Input Parsing

- Extract the topic from `/atomic-note <topic>`. Proceed immediately.
- If no topic provided, use `AskUserQuestion` to ask what concept the note should cover.

## 2. Smart Filename & Duplicate Check

- Filename = topic verbatim (Obsidian supports spaces). Sanitise only invalid characters (`/\:*?"<>|`) silently.
- Glob `40_Wiki/**/<topic>.md` — if it exists, report the duplicate and **stop**.

## 3. Category Placement

- Glob `40_Wiki/*/` to list existing subfolders.
- Place in a subfolder only if the topic **clearly** fits one. Otherwise place directly in `40_Wiki/`.
- Only ask the user if genuinely ambiguous between two+ equally valid subfolders.

## 4. Wikilink Discovery

- Glob `40_Wiki/**/*.md` and `30_Research/**/*.md`. Collect note names.
- Match existing note names against the new topic's content — insert `[[ExistingNote]]` wikilinks in Definition, Key Points, and Related Concepts.
- Identify terms that could become future atomic notes — add as stub wikilinks in Related Concepts.

## 5. Note Generation

Read and follow `99_System/Templates/Wiki_Template.md` strictly. Additional rules:
- `created`: today's date (`YYYY-MM-DD`)
- `area`: relevant area wikilink if obvious (e.g., `"[[Physics]]"`), otherwise blank
- `tags`: 1-3 relevant tags
- `last_reviewed:` (empty — never reviewed)
- `next_review:` today's date (enters the `/wiki-review` queue immediately)
- `review_interval: 0`
- Content must be **atomic** — 1-3 sentence definition, 3-5 key-point bullets, 1-2 examples. Not an essay.
- No empty line after frontmatter `---`
- Use `[[wikilinks]]` liberally throughout

## 6. Regenerate Review Dashboard

After writing the new note, regenerate `99_System/Review_Dashboard.md` so the new note appears in the review queue immediately.

1. Glob `40_Wiki/**/*.md` — read frontmatter of every note.
2. Exclude notes whose `tags` contain `no-review`.
3. Categorize each note using today's date:
   - **Overdue** — `next_review` < today
   - **Due Today** — `next_review` = today
   - **Never Reviewed** — `review_interval` is `0` (or missing)
   - **Upcoming (7 days)** — `next_review` within next 7 days (not today)
   - **Recently Mastered** — `review_interval` is `7`
4. Overwrite `99_System/Review_Dashboard.md` using the Write tool with the same format defined in `.agents/skills/wiki-review/SKILL.md` step 7 (Stats table, Overdue, Due Today, Never Reviewed, Upcoming, Recently Mastered sections). If a section is empty, write "None".

## 7. Post-Creation Report

Output:
```
Created: 40_Wiki/<path>/<Topic>.md

Wikilinks inserted:
  Existing: [[Note1]], [[Note2]]
  Stubs:    [[Future1]], [[Future2]]

Review Dashboard updated (new note queued for review)
```
