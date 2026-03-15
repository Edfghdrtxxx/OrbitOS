# Create Mode — Atomic Wiki Note

Create a single atomic concept note in `40_Wiki/` with automatic wikilink discovery.

## C1. Smart Filename & Duplicate Check

- Filename = topic verbatim (Obsidian supports spaces). Sanitise only invalid characters (`/\:*?"<>|`) silently.
- Glob `40_Wiki/**/<topic>.md` — if it exists, report the duplicate and **stop**.
- **Near-duplicate scan:** Also glob `50_Resources/**/*<topic>*.md` and `30_Research/**/*<topic>*.md` for notes whose filename contains the topic (or vice-versa). If any match, report them and ask the user whether to proceed, merge, or stop — do NOT silently create a duplicate.

## C2. Category Placement

- Glob `40_Wiki/*/` to list existing subfolders.
- Place in a subfolder only if the topic **clearly** fits one. Otherwise place directly in `40_Wiki/`.
- Only ask the user if genuinely ambiguous between two+ equally valid subfolders.

## C3. Wikilink Discovery

- Glob `40_Wiki/**/*.md`, `30_Research/**/*.md`, and `50_Resources/**/*.md`. Collect note names.
- Match existing note names against the new topic's content — insert `[[ExistingNote]]` wikilinks in Definition, Key Points, and Related Concepts.
- Identify terms that could become future atomic notes — add as stub wikilinks in Related Concepts.

## C4. Note Generation

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

## C4.5. Image Enrichment

Read and follow `references/image-enrichment.md` (in this same skill directory). Run steps I1–I4 to find, download, and embed schematics into the newly created note. The `## Schematics` section goes between the frontmatter and `## Definition`.

## C5. Post-Creation Report

Output:
```
Created: 40_Wiki/<path>/<Topic>.md

Wikilinks inserted:
  Existing: [[Note1]], [[Note2]]
  Stubs:    [[Future1]], [[Future2]]

Images:
  Local:    {count} existing in Attachments
  Fetched:  {count} downloaded from Wikimedia Commons
  Embedded: {list of ![[filenames]]}

Review queue: note will appear automatically in 99_System/Bases/Wiki_Review.base
```

After the report, append a brief **Hints** line listing other available modes:

```
Hints: `/atomic-note extend TopicA, TopicB` → comparison note · `/atomic-note` + attached file → scan for wikilink gaps
```
