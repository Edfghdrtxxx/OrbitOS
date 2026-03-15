# Create Mode — Atomic Wiki Note

Create a single atomic concept note in `40_Wiki/` with automatic wikilink discovery.

## C1. Vault Investigation (Explore Agent)

Launch an Explore agent (`Agent` tool, `subagent_type: Explore`) with the following prompt — substitute `{topic}` with the actual topic name:

> Vault investigation for **"{topic}"**:
> 1. **Duplicate check:** Glob `40_Wiki/**/{topic}.md` — report exact match path or "none"
> 2. **Near-duplicate scan:** Glob `50_Resources/**/*{topic}*.md` and `30_Research/**/*{topic}*.md` — report matching filenames and paths
> 3. **Subfolder listing:** Glob `40_Wiki/*/` — list all subfolder names
> 4. **Wikilink candidates:** Glob `40_Wiki/**/*.md`, `30_Research/**/*.md`, `50_Resources/**/*.md` — return all filenames (without extension) as a flat list
>
> Return all four results clearly labeled.

**If the user specified a source file** (e.g. `/atomic-note {topic} in <file>`), append this additional step to the Explore agent prompt before sending — substitute `{source_path}` with the actual file path:

> 5. **Backlink scan:** Grep `{source_path}` for plain-text mentions of `{topic}` (not already wrapped in `[[]]`). Report line numbers and surrounding context for each match.

**Main agent rules on returned results:**

- **Exact duplicate found →** report and **stop**.
- **Near-duplicates found →** report them, ask user: proceed / merge / stop. Do NOT silently create a duplicate.
- **Subfolder placement:** use a subfolder only if the topic **clearly** fits one. Ask only if genuinely ambiguous between 2+. Otherwise default to `40_Wiki/`.
- **Wikilink matching:** match collected note names against the new topic's content — insert `[[ExistingNote]]` wikilinks in Definition, Key Points, and Related Concepts. Terms that could become future atomic notes → stub wikilinks in Related Concepts.
- **Backlink insertion (if step 5 was included):** After the note is created (C2–C3), offer the user to insert `[[{topic}]]` wikilinks at the reported locations in the source file. Insert only on confirmation.

## C2. Note Generation

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

## C3. Image Enrichment

Read and follow `references/image-enrichment.md` (in this same skill directory). Run all steps (I1–I4) — the subagent fetches images, you view/confirm them, then embed. The `## Schematics` section goes after the `# Heading` and before `## Definition`.

## C4. Post-Creation Report

Output:
```
Created: 40_Wiki/<path>/<Topic>.md

Wikilinks inserted:
  Existing: [[Note1]], [[Note2]]
  Stubs:    [[Future1]], [[Future2]]

{I5 image report — see image-enrichment.md}

Review queue: note will appear automatically in 99_System/Bases/Wiki_Review.base
```

After the report, append a brief **Hints** line listing other available modes:

```
Hints: `/atomic-note extend TopicA, TopicB` → comparison note · `/atomic-note` + attached file → scan for wikilink gaps
```
