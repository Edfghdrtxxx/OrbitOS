# Task File Format

Shared reference for synthesis writers and reviewers. Each file in `tasks/` is **self-contained** — an implementer can execute it by reading only `spec.md` (for grounding) and their task file. No need to read other task files unless an explicit dependency pointer says otherwise.

## Template

```markdown
# [Task Title]

## Objective
[1-2 sentences. What this task produces and why.]

## Context
[Optional. Task-specific context not already in spec.md's shared Context section.
Omit entirely if spec.md's Context is sufficient.]

## Steps
- [ ] 1. [Action]
  - Detail, command, or file path if needed
- [ ] 2. [Action]

## Dependencies
[Optional. Only present when this task requires another task's output.]
- Requires: [NN_name.md](NN_name.md) — [what it provides]

## Verification
[Optional. How to confirm this task is complete — test commands, expected output, or manual check.
Omit when completion is self-evident.]
```

## Rules

- **Steps use checkboxes.** Each step includes enough context that an implementer can execute it without re-doing the research.
- **Dependencies use file path pointers**, not task numbers alone — implementers can navigate directly.
- **Self-containedness is the priority.** If an implementer would need to read another task file to understand what to do, the task needs more context.
