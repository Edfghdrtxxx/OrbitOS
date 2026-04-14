---
name: handoff-prompt
description: >-
  Generate a handoff prompt that transfers the mental model — the WHY and WHAT — so the follow-up AI can own the HOW entirely.
  TRIGGER when: user says "handoff prompt", "hand this off", "another context-clean AI", "pick up later",
  "delegate this task",
  or any variation requesting a transferable prompt for task continuation or delegation.
---

# Phase 0 — EVOLVE

Read `evolution.md` in this skill's folder. Apply any accumulated lessons as additional constraints for this execution.

# Philosophy

The follow-up AI is a **peer, not an intern**. Transfer the mental model, then get out of the way. **Less is more** — if the AI can infer it from the files, omit it. Point to paths; don't summarize contents. Self-check: *"Am I telling the AI what to think, or giving it what it needs to think for itself?"* If the former, cut.

# What You Produce

A clipboard-ready outline, **under 20–30 lines** (the principle block at the end counts toward the budget).

```markdown
# Handoff: [Short Task Title]

## Why This Matters
[User's actual motivation. What problem? What do they care about?]

## Current State
[File path pointers. No content summaries.]

## Hard Constraints (only if non-inferable)
- [Rules the follow-up AI couldn't get from context alone.]

## Principles of Paramount Importance
- **Zero Assumptions:** Never guess user intent. If multiple implementations exist or requirements are incomplete, **halt and use the `AskUserQuestion` tool** to gather explicit direction.
- **No Silent Assumptions:** Even when the task is requested, confirm the *method* if it wasn't specified.
```

# Principles of Paramount Importance

These apply not only to the follow-up AI receiving the handoff, **but also to you while drafting it**:
- **Zero Assumptions:** Never guess user intent. If multiple implementations exist or requirements are incomplete, **halt and use the `AskUserQuestion` tool** to gather explicit direction.
- **No Silent Assumptions:** Even when the task is requested, confirm the *method* if it wasn't specified.
