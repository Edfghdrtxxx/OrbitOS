---
name: preference_applying_delta_over_direct_rewrite
description: Prefer copy-then-delta over rewrite-from-recall when a source exists
type: preference
saved_at: 2026-08-15
updated_at: 2026-09-17
status: archived-snapshot
note: "Live copy restored 2026-09-17 under 99_System/memory/ with necessity-check-style triggers; this file is historical only."
---
> **Historical snapshot.** Live memory: `99_System/memory/preference_applying_delta_over_direct_rewrite.md`. AGENTS principle is trigger-based (load-on-cue), not always-on prose alone.
**Trigger:** existing on-disk source, export, or selection to derive from; about to rewrite/rebuild a file that already has a base.

**Rule:** Base = exact source. Mutate = surgical deltas. Never rebuild or rewrite the body from context recall as the first move.

## Defaults
- First action: materialize the base (`cp`, or Read source → Write that text). Do not reconstruct from session memory.
- Then `edit` only the needed deltas. Thin wrappers after the copy are fine (frontmatter, callouts, wikilinks).
- Recall/rewrite from the context window is fallback only when no source, selection, or export exists.

## Canonical pattern (Don't read it, just for instance')
`/start-my-day`: `cp 10_Daily/<last>.md 10_Daily/<today>.md`, then `edit` for every change — never regenerate the daily note or script a full rewrite.

## Applies to
- New file derived from an existing one (daily rollover, copy-forward, residual carry)
- Filing/storing an on-disk report, note, export, or artifact into the vault
- Quoting or preserving a source when a path or selectable original is available
