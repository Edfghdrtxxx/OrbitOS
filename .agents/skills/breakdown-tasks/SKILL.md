---
name: breakdown-tasks
description: Break down tasks into stratified subtasks with time estimates and dependency markers, then insert into today's daily note
---

# OBJECTIVE

Decompose tasks into a stratified checkbox hierarchy with contextual time estimates and dependency markers.

# WORKFLOW

## Step 1: Gather Context (Silent)

1. Read the input source — a `20_Project/` note, a task in today's daily note, or free-text goal
2. Read linked projects for phase/complexity context
3. Read today's `10_Daily/YYYY-MM-DD.md` if it exists

## Step 2: Clarify (Conditional)

If input is ambiguous (unclear scope, multiple interpretations, missing constraints), interview via `AskUserQuestion`. Skip when intent and scope are obvious from context.

## Step 3: Decompose

```
- [ ] **Task** (~total estimate)
  - [ ] Subtask 1 (~Xm)
    - [ ] Sub-subtask 1a (~Ym)
    - [ ] Sub-subtask 1b (~Zm)
  - [ ] Subtask 2 (~Wm) `[blocked by: Subtask 1]`
```

- **Depth:** 2–4 levels — match complexity, don't force depth
- **Estimates:** Every leaf gets minutes (nearest 5m); parents show sum; `~?` for uncertain. Use contextual reasoning, never keyword heuristics.
- **Dependencies:** `` `[blocked by: X]` `` only for genuine blocking relationships
- **Leaf size:** 10–60 minutes. Longer → decompose further.

## Step 4: Deliver

Present the breakdown, then ask where to insert via `AskUserQuestion`:
- **Today's daily note** (default) — replace/expand task line or insert under Priorities
- **Project note** — append to the relevant project's Actions section
- **Clipboard only** — just display, don't write anywhere

After insertion, show: task name, total estimate, depth, dependency count. If inserting into daily note, run a capacity check and flag overload.

# EDGE CASES

- **No daily note (and user picks daily note):** Tell user to run `/start-my-day` first
- **Task already broken down:** Ask whether to re-decompose or refine
