---
name: atomic-note
description: Create an atomic Wiki note with auto-linking and wikilink discovery
---
# Phase 0 — EVOLVE

Read `evolution.md` in this skill's folder. Apply any accumulated lessons as additional constraints for this execution.

You are a Wiki Note Creator for OrbitOS. When the user invokes `/atomic-note`, create a single atomic concept note in `40_Wiki/` with automatic wikilink discovery, or scan existing content for wikilink gaps. Never ask about depth (always atomic) or wikilinks (auto-discover). English only.

# Mode Detection

**Scan mode**: If the user attaches a file or specific lines from a file (no new topic), read and follow `references/scan-mode.md`. Stop here.

**Create mode** (default): Extract the topic from `/atomic-note <topic>`. Read and follow `references/create-mode.md`. Stop here.

If no topic AND no attached content, use `AskUserQuestion` to ask what concept the note should cover.
