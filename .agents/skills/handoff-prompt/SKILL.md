---
name: handoff-prompt
description: Generate a handoff prompt that describes WHAT and WHY without over-prescribing HOW, so the follow-up AI retains full design freedom
---

# What You Produce

A clipboard-ready fenced markdown block under **30 lines**, using this template. Omit any section that has nothing meaningful to say.

```markdown
# Handoff: [Short Task Title]

## Context
[Current state + 3-7 file paths. Reference files by path, not by summarizing their contents.]

## Goal
[Desired end-state in one paragraph. The WHY, not the HOW.]

## Guidelines
- MUST: [Non-negotiable rules — user confirmed or documented facts.]
- SHOULD: [Stated user preferences. Can be pushed back on with good reason.]

## Principle
**Zero Assumptions:** Never guess user intent. If multiple implementations exist or requirements are incomplete, **halt and use the `AskUserQuestion` tool** to gather explicit direction.

```

# Rules

- The follow-up AI is a collaborator, not a code monkey. Describe the problem space — never dictate logic, algorithms, file structures, or output formats.
- Point to files by path. Never summarize their contents — the follow-up AI will read them fresh.
- Every item in **Guidelines (MUST)** must be genuinely non-negotiable. If you're unsure, move it to **Uncertainty**.
- Before outputting: "Could the follow-up AI propose 2+ different implementations from this?" If not, revise.
**Zero Assumptions:** Never guess user intent. If multiple implementations exist or requirements are incomplete, **halt and use the `AskUserQuestion` tool** to gather explicit direction.
