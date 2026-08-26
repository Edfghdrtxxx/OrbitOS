---
name: preference_copy_source_over_recall
description: Prefer copy-paste from the source file over recalling content from the context window
type: preference
saved_at: 2026-08-15
---

# Copy source over context recall

**Rule:** If copy-paste is available, use that method in the first priority rather than directly recalling from the context window.

## Applies to
- Filing or storing an existing report, note, excerpt, or artifact into the vault
- Transferring content that already exists on disk (workflow output, Google Doc export, PDF extract, another note)
- Quoting or preserving a source when a path or selectable original is available

## Defaults
- First action: copy the source (`cp`, or Read the source file then Write that text). Do not reconstruct from session memory.
- Thin wrappers are allowed after the copy (frontmatter, a coverage callout, wikilinks). Do not rewrite the body from recall as the first move.
- Recalling from the context window is a fallback only when no source file, selection, or export exists.

## Origin
Stated 2026-08-15 after a `/deep-research` report was filed to `30_Research/Physiologics/Eyelid_Myokymia_and_Omen_Belief.md` by rewriting from context instead of copying `workflows/.../scratch/report.md`.
