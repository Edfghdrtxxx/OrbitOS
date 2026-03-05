---
name: evolve-skills
description: Review session context and persist actionable lessons into per-skill evolution.md files. Scriptless — Claude uses native Read/Edit/Write tools directly.
---

# Skill Evolution Manager

Distills session experience — successful approaches, failures, user corrections, and preferences — into persistent, per-skill `evolution.md` files so lessons survive across conversations and skill rewrites.

## Trigger

`/evolve`

## Workflow

### 1. Review

Scan the current conversation context for:
- **Skills invoked** this session
- **Pain points** — errors, wrong output, user corrections, workarounds
- **Wins** — approaches that worked well, efficient patterns
- **User preferences** expressed (style, format, workflow choices)

### 2. Extract & Confirm

Present findings to the user via `AskUserQuestion`:
- Which skills to evolve (multiSelect)
- What lessons to record per skill
- User confirms or edits before anything is written

**Do not persist anything without explicit user confirmation.**

### 3. Persist

For each confirmed skill:

1. **Read** existing `<skill-folder>/evolution.md` (if any)
2. **Deduplicate** — skip lessons that already exist in the file
3. **Append** new lessons under a dated entry (format below)
4. **Ensure consumption** — if the target skill's `SKILL.md` does not already contain an evolution.md read instruction, inject this block:

   ```
   > **Evolution:** If `evolution.md` exists in this skill folder, read it before executing. It contains accumulated usage lessons.
   ```

5. **Write** using native Write/Edit tools (no scripts, no JSON intermediaries)

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

Only include subsections (Lessons / User Preferences / Fixes) that have content. Omit empty subsections.

## Rules

- Always confirm with the user before writing any file
- Deduplicate against existing entries — never record the same lesson twice
- Inject the read-instruction into the target SKILL.md only if it's missing
- Only record **actionable, specific** lessons — not vague observations
- If multiple skills were used in a session, evolve each one in turn


## Principles of Paramount Importance
 - **Zero Assumptions:** Never guess user intent. If multiple implementations exist or requirements are incomplete, **halt and use the `AskUserQuestion` tool** to gather explicit direction.
 - **No Silent Assumptions:** Even when the task is requested, confirm the *method* if it wasn’t specified. Don’t guess the user’s expectation.