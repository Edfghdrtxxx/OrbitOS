---
name: preference_applying_delta_over_direct_rewrite
description: Trigger-gated — when a path already exists or a source/export/selection is the base, load this and apply copy/read-then-edit; never full rewrite-from-recall as the first move
type: preference
saved_at: 2026-08-15
updated_at: 2026-09-17
---
Applied in these trigger contexts (per AGENTS.md) — **load this file before the write path**, then follow **How to apply**:
- **(a) Path already on disk:** any `Write`/full-replace/`cp` overwrite, skill/note/config “refresh,” multi-section restyle, or regenerate of a file that exists (including `SKILL.md` and references).
- **(b) Derived from a source:** new daily/note from a prior one, filing an export/report/artifact, or preserving a selection/quoted original when a path or selectable base is available.
- **(c) About to rebuild from recall:** composing the full body in-context and dumping it over a path that has (or had) a base — stop; switch to delta.

In those contexts, do not jump to a full-file rewrite. First load this memory and run the gate.

**Why:** Soft “prefer delta” principles get skipped under pace. Necessity Check works because it names **when to load** and **what to do**. Same shape here. Failure mode: `Write` of a reconstructed body over an existing skill/note (e.g. evolve-skills 2026-09-17) while the on-disk base was one `edit` away.

**How to apply:** Before creating or replacing content at a path:

1. **Does a base exist?** On-disk file at the target path, a source path to derive from, an export, or a selection? If yes → base = those exact bytes.
2. **Materialize the base** — `cp` for rollover/copy-forward; otherwise Read the source (not session memory). Do not reconstruct from recall.
3. **Mutate with surgical `edit` only** — change the lines that must change. Thin wrappers after copy are fine (frontmatter, callouts, wikilinks).
4. **Full `Write` only if** nothing exists yet at the path, or the user explicitly asked for a clean-slate rewrite.
5. **If you already drafted a full body in-context** — stop; diff against the real base and apply as edits (or discard the draft and edit).

**In scope (within the triggers):** skills, AGENTS.md, memory, daily notes, project notes, configs, any vault/repo file with an existing path; copy-forward and export filing.

**Out of scope:** brand-new paths with no source; tiny single-hunk `edit` already aimed at the live file; user-ordered clean-slate replace.

**Canonical example:** `/start-my-day` — `cp 10_Daily/<last>.md 10_Daily/<today>.md`, then `edit` every change. Never regenerate the daily note from recall.
