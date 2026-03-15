# Extend Mode — Comparison / Synthesis Research Note

Generate a non-atomic comparison or synthesis note from multiple existing atomic Wiki notes. Output goes to `30_Research/<Area>/`, where `<Area>` is the area inferred in step E3.

## E1. Parse Input Topics

Extract the comma-separated topic names from the user's invocation. Trim whitespace from each topic. There must be at least two topics; if only one is provided, inform the user that extend mode requires multiple topics and **stop**.

## E2. Vault Investigation (Explore Agent)

Launch an Explore agent (`Agent` tool, `subagent_type: Explore`) with the following prompt — substitute `{topics}` with the comma-separated topic list:

> Source verification and duplicate check for extend-mode topics: **{topics}**
> 1. **Verify sources:** For each topic, glob `40_Wiki/**/<topic>.md`. Report found/not-found with paths.
> 2. **Read sources:** For each found topic, read the note in full. Return: path, full frontmatter (`area`, `tags`), and body content.
> 3. **Duplicate check:** Glob `30_Research/**/*.md`. Report any note whose filename contains ALL topic names (any order, case-insensitive).
> 4. **Wikilink candidates:** Glob `40_Wiki/**/*.md`, `30_Research/**/*.md` — return all filenames (without extension) as a flat list for cross-linking in the generated note.
>
> Return all results clearly labeled per topic.

**Main agent rules on returned results:**

- **Topics not found →** report which are missing, then use `AskUserQuestion` to offer:
  1. **Create the missing note(s), then resume Extend.** For each missing topic, run create-mode (C1–C3). After all processed, re-run E2 from the beginning.
  2. **Proceed with only the found topics (skip missing).** Enforce minimum 2 topics; if fewer remain, **stop**.
  3. **Stop.** Abort the extend flow.
- **Duplicate found →** report it, ask: overwrite / rename / stop.

## E3. Infer Metadata

- **Area:** If all source notes share the same `area` value, use it. If they differ, list the unique areas and pick the most common one; note the choice in the report.
- **Tags:** Union of all source notes' tags, plus `comparison` or `synthesis` (choose whichever better describes the relationship). Deduplicate.
- **Filename:** `<Topic1>_vs_<Topic2>[_vs_<TopicN>].md` — use the topic names joined with `_vs_`. Sanitise only invalid characters (`/\:*?"<>|`).
- **Folder:** Strip wikilink brackets (`[[` and `]]`) from the inferred area value to produce a clean folder name. The target directory is `30_Research/<Area>/`. Create this directory if it does not already exist.

## E4. Generate the Comparison / Synthesis Note

Create the note at `30_Research/<Area>/<Filename>.md` with the following structure.

### Frontmatter

```yaml
---
type: research
area: "[[InferredArea]]"
tags: [inferred, tags, here]
created: YYYY-MM-DD
sources:
  - "[[Topic1]]"
  - "[[Topic2]]"
---
```

No empty line after the closing `---`.

### Body

```markdown
# <Topic1> vs <Topic2> [vs <TopicN>]

## At a Glance

| Property | [[Topic1]] | [[Topic2]] | ... |
|---|---|---|---|
| Definition | ... | ... | ... |
| Key formula | $...$ | $...$ | ... |
| Domain / field | ... | ... | ... |
| Typical use case | ... | ... | ... |

## Definition Comparison

For each source concept, restate its definition (sourced from the atomic note) and highlight where definitions overlap or diverge. Use `[[wikilinks]]` and LaTeX where appropriate.

## Mathematical Relationships

Show how the concepts relate mathematically — shared variables, limiting cases where one reduces to another, or joint equations. Use `$$...$$` for display math. If no mathematical relationship exists, state so explicitly and remove this section.

## When to Use Which

Practical guidance: under what conditions, assumptions, or problem types should the reader reach for each concept? Use bullet points or a decision flowchart.

## Related Concepts

- [[RelatedConcept1]] — brief relevance note
- [[RelatedConcept2]] — brief relevance note
```

### Content rules

- Use `[[wikilinks]]` liberally — link to all source notes and any other existing Wiki / Research notes discovered during E2.
- Use LaTeX (`$...$` inline, `$$...$$` display) for all math.
- The note is deliberately **non-atomic** — it should be comprehensive and comparative.
- Sections may be expanded, merged, or reordered if the specific topic combination warrants it, but all four body sections above must appear (unless explicitly removed per the rules above).

## E4.5. Image Enrichment

Read and follow `references/image-enrichment.md` (in this same skill directory). For extend mode:

- Run all steps (I1–I5, including I3.5) for **each source topic** — check local images and Wikimedia for each concept individually.
- Use the `comparison` descriptor for any side-by-side or overlay diagrams that span multiple topics.
- Insert a single `## Schematics` section in the generated note (before `## At a Glance`), grouping images by source topic.

## E5. Post-Creation Report

Output:

```
Created: 30_Research/<Area>/<Filename>.md

Sources:
  [[Topic1]] — 40_Wiki/<path>/Topic1.md
  [[Topic2]] — 40_Wiki/<path>/Topic2.md

Area: [[InferredArea]]
Tags: [tag1, tag2, ...]

Sections generated:
  Schematics
  At a Glance (comparison table)
  Definition Comparison
  Mathematical Relationships
  When to Use Which
  Related Concepts

{I5 image report — see image-enrichment.md}
```

After the report, append a brief **Hints** line listing other available modes:

```
Hints: `/atomic-note <topic>` → create atomic note · `/atomic-note` + attached file → scan for wikilink gaps
```
