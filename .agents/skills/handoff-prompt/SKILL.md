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

**Minimal instructions, clear intent.** The follow-up AI is a **peer, not an intern**. Transfer the mental model, then get out of the way. **Less is more** — if the AI can infer it from the files, omit it. Point to paths; don't summarize contents. Self-check: *"Am I telling the AI what to think, or giving it what it needs to think for itself?"* If the former, cut.

# What You Produce

A clipboard-ready outline, **under 20–30 lines** (the principle block at the end counts toward the budget).

```markdown
# Handoff: [Short Task Title]

## Why This Matters
[User's actual motivation. What problem? What do they care about?]

## Current State
[File path pointers. No content summaries.]

## Success Criteria
- [Outcome-shaped bullets — observable conditions that will be true when the task is complete. Write *"L6 LOW-energy RMSE appears in the summary table"*, not *"add L6 split to eval script"*. Conditions, not actions. Keep 1–3 bullets.]

## Non-document facts (only if such state exists)
- [Anything non-inferable from the files: decisions the user made, overrides, rejected alternatives, off-repo responsibilities, declared off-limits, environment realities. Write as past-tense state, not imperatives — *"User has declared the server off-limits"*, not *"Do not touch the server"*. The context carries the why; the rule follows from it. Keep a bullet only if omitting it would cause the follow-up AI to re-open a closed question.]

## Principles of Paramount Importance
- **Zero Assumptions:** Never guess user intent. If multiple implementations exist or requirements are incomplete, **halt and use the `AskUserQuestion` tool** to gather explicit direction.
- **No Silent Assumptions:** Even when the task is requested, confirm the *method* if it wasn't specified.
```

# Principles of Paramount Importance

These apply not only to the follow-up AI receiving the handoff, **but also to you while drafting it**:
- **Zero Assumptions:** Never guess user intent. If multiple implementations exist or requirements are incomplete, **halt and use the `AskUserQuestion` tool** to gather explicit direction.
- **No Silent Assumptions:** Even when the task is requested, confirm the *method* if it wasn't specified.

# Arguments
- When the user invokes this skill with the argument "with brief document" or any semantically equivalent phrase, produce a concise document that enables a subsequent AI to continue your work seaminglessly. 
- Brief document path: '/Users/Reid Hu/MATE-Automation/99_System/Handoff documents/<topic>/<topic.md>'