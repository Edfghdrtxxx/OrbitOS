# Scan Mode — Wikilink Gap Analysis

Scan attached content for missing wiki notes and unlinked references.

## S1. Content Intake

Record the source file path (needed for patching in S4).

## S2. Concept Extraction & Cross-Reference

**Extract candidates** — identify terms that merit standalone atomic wiki notes. Filters:
- Must be a concept, not a trivial word or generic phrase
- Must be atomic (single-concept)
- Ignore context-local terms

**Cross-reference** — Glob `40_Wiki/**/*.md`, `30_Research/**/*.md`, and `50_Resources/**/*.md`, collect filenames (without extension). Classify:

| Category | Condition |
|---|---|
| **Already linked** | Wiki note exists AND `[[wikilink]]` present in source |
| **Exists (unlinked)** | Wiki note exists but NOT linked in source |
| **Missing** | No wiki note exists |

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

Read and follow `references/image-enrichment.md` (in this same skill directory). Run all steps (I1–I5, including I3.5) against the **scanned source note**:

- Use the source note's title as `{ConceptName}` for the local check (I1) and Wikimedia search (I2).
- If the source note already has a `## Schematics` section with images, report them and still proceed to fetch more from Wikimedia.
- If the source note has no `## Schematics` section, run the full I1–I5 flow (including I3.5) and insert the section.

## S5. Batch Creation

Ask: **Create missing notes? (all / pick / skip)**

- **all** — create every missing concept.
- **pick** — use `AskUserQuestion` to let user select.
- **skip** — end with the report.

For each selected concept, read and follow `create-mode.md` (in this same `references/` directory). Note: each created note will also run its own C4.5 image enrichment step.

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
