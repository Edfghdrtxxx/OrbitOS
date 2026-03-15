# Scan Mode — Wikilink Gap Analysis

Scan attached content for missing wiki notes and unlinked references.

## S1. Content Intake

Record the source file path (needed for patching in S4).

## S2. Vault Investigation (Explore Agent)

Launch an Explore agent (`Agent` tool, `subagent_type: Explore`) with the following prompt — substitute `{source_path}` with the actual file path:

> Wikilink gap analysis for **"{source_path}"**:
> 1. **Read source:** Read the file at `{source_path}` in full
> 2. **Collect vault notes:** Glob `40_Wiki/**/*.md`, `30_Research/**/*.md`, `50_Resources/**/*.md` — collect all filenames (without extension)
> 3. **Cross-reference:** For each vault note name, check if it appears in the source as `[[name]]` or `[[name|...]]` (already linked) vs as plain text (exists but unlinked, case-insensitive). Classify into: **already linked**, **exists but unlinked**. For each unlinked concept, also report the **line number and surrounding text** of its first occurrence in body text (skip frontmatter).
> 4. **Concept extraction:** Identify terms in the source that merit standalone atomic wiki notes but have no match in the vault. Filters: must be a real concept (not trivial words or generic phrases), must be atomic (single-concept), ignore context-local terms
>
> Return: already-linked list, exists-unlinked list (with line number + context for each), missing-concepts list.

**Main agent uses the returned results for S3 onward.**

## S3. Gap Report

Output:
```
Scanned: <source path>

Already linked:    [[A]], [[B]]
Exists (unlinked): [[C]], [[D]]
Missing concepts:  [[E]], [[F]], [[G]]
```

## S4. Source Note Patching

For each **Exists (unlinked)** concept:
- Wrap the **first occurrence** in body text (skip frontmatter) with `[[wikilink]]`.
- If filename ≠ surface text, use `[[Filename|surface text]]`.
- Report all insertions.

## S4.5. Image Enrichment

Read and follow `references/image-enrichment.md` (in this same skill directory). Run all steps (I1–I4) against the **scanned source note**:

- Use the source note's title as `{ConceptName}` for the local check (I1) and Wikimedia search (I2).
- If the source note already has a `## Schematics` section with images, report them and still proceed to fetch more from Wikimedia.
- If the source note has no `## Schematics` section, run the full I1–I4 flow and insert the section.

## S5. Batch Creation

Ask: **Create missing notes? (all / pick / skip)**

- **all** — create every missing concept.
- **pick** — use `AskUserQuestion` to let user select.
- **skip** — end with the report.

For each selected concept, read and follow `create-mode.md` (in this same `references/` directory). Note: each created note will also run its own C1 vault investigation and C3 image enrichment step.

## S6. Summary

```
Scan complete: <source path>

Wikilinks patched into source: [[C]], [[D]]
Notes created: [[E]], [[F]]
Skipped: [[G]]

{I5 image report — see image-enrichment.md}
```

After the report, append a brief **Hints** line listing other available modes:

```
Hints: `/atomic-note <topic>` → create atomic note · `/atomic-note extend TopicA, TopicB` → comparison note
```
