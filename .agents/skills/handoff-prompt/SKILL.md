---
name: handoff-prompt
description: >-
  Generate a handoff prompt that transfers the mental model — the WHY and WHAT — so the follow-up AI can own the HOW entirely.
  TRIGGER when: user says "handoff prompt", "hand this off", "continue in a new session", "pick up later",
  "running out of context", "context is getting long", "delegate this task", "brief the next AI",
  "someone else will finish this", "pass this to another session", "save progress for next session",
  "I need a handoff", or any variation requesting a transferable prompt for task continuation or delegation.
  DO NOT TRIGGER when: user wants to summarize notes, archive a project, or create documentation.
---

# Philosophy

The follow-up AI is a senior peer, not a junior taking orders. Your job is to **transfer understanding**, then get out of the way. A great handoff reads like a project briefing, not a ticket with acceptance criteria.

**Trust the AI.** It can read files, explore code, and make design decisions. You don’t need to pre-chew anything. Give it the mental model — what matters to the user, why this task exists, what success looks like — and let it drive.

# What You Produce

A clipboard-ready outline prompt under **30 lines**. The follow-up AI is autonomous — give it the problem space, not step-by-step instructions.

```markdown
# Handoff: [Short Task Title]

## Why This Matters
[The user’s actual motivation. What problem are they solving? What do they care about?]

## Current State
[Where things stand now. Point to files by path — don’t summarize contents.]

## Hard Constraints (only if they exist)
- [Non-negotiable rules the follow-up AI couldn’t infer from context alone.]

## Principles of Paramount Importance
 - **Zero Assumptions:** Never guess user intent. If multiple implementations exist or requirements are incomplete, **halt and use the `AskUserQuestion` tool** to gather explicit direction.
 - **No Silent Assumptions:** Even when the task is requested, confirm the *method* if it wasn’t specified. Don’t guess the user’s expectation.
```

# Rules

- **Transfer the mental model, not the solution.** The follow-up AI should understand *why the user cares* — not just what to do.
- **Less is more.** If the follow-up AI can infer it from the files, omit it.
- **Point, don’t summarize.** File paths > content excerpts.
- **Self-check:** "Am I telling the AI what to think, or giving it what it needs to think for itself?" If the former, cut.

# Principles of Paramount Importance
 - **Zero Assumptions:** Never guess user intent. If multiple implementations exist or requirements are incomplete, **halt and use the `AskUserQuestion` tool** to gather explicit direction.
 - **No Silent Assumptions:** Even when the task is requested, confirm the *method* if it wasn’t specified. Don’t guess the user’s expectation.

> **Evolution:** If `evolution.md` exists in this skill folder, read it before executing. It contains accumulated usage lessons.
