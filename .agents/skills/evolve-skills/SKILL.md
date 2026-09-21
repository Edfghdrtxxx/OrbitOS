---
name: evolve-skills
description: On /evolve, propose fault/fix and user-captured lessons for confirmation, then append to per-skill evolution.md. Never write evolution without the user's explicit OK.
---

# Phase 0 — EVOLVE

Read `evolution.md` in this skill's folder. Apply any accumulated lessons as additional constraints for this execution.

# Evolve skills

Capture only what should survive the next rewrite: **faults/fixes** and **lessons the user captured**. Not a session diary.

## Trigger

`/evolve`

## Workflow

### 1. Review

From this conversation, list candidates tied to skills actually used:
- **Faults / fixes** — wrong output, broken steps, corrections that changed behavior
- **User-captured lessons** — lasting guidance the user stated (“always…”, “never…”, “from now on…”)

Skip: vague wins, speculative polish, preferences already in `SKILL.md` / references.

### 2. Confirm

Show the shortlist (skill → lesson bullets). User picks, edits, or rejects.

**Write nothing until they confirm.** Interview API / host Ask when the choice set needs it; plain confirm is enough for a small list.

### 3. Persist

For each confirmed skill:

1. **Read** existing `<skill-folder>/evolution.md` (if any)
2. **Deduplicate** — skip lessons that already exist in the file
3. **Append** new lessons under a dated entry (format below)
4. **Ensure consumption** — if the target skill's `SKILL.md` does not already contain a Phase 0 evolution read instruction, inject this block right after the frontmatter (before the skill's title heading):

   ```
   # Phase 0 — EVOLVE

   Read `evolution.md` in this skill's folder. Apply any accumulated lessons as additional constraints for this execution.
   ```

5. **Write** with Edit/Write only (no scripts, no JSON side channel)
6. If a lesson conflicts with the skill body/references, **propose** those edits and wait for a separate OK — don’t silently rewrite the skill

## evolution.md Format

```markdown
# Evolution Log

## 2026-03-04
### Lessons
- [lesson text]

### User Preferences
- [preference text]

### Fixes
- [fix text]
```

Only subsections with content. Dated headings; append, don’t reshape history.

## Rules

- Confirm before any write
- Scope = faults/fixes + user-captured lessons only (matches AGENTS.md)
- Deduplicate; actionable and specific — no mood or play-by-play
- Inject the Phase 0 read-instruction into the target `SKILL.md` only if missing
- Multi-skill session → one confirmed batch, then persist each
- Never treat a mid-task preference tweak as an auto-lesson