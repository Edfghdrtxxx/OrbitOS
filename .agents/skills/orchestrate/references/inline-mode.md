# Inline Mode

Freeform orchestration for tasks that complete within a single dispatch round. No persistent state file.

## Phase 2 — DECOMPOSE

1. Break the confirmed task into discrete sub-tasks. Each sub-task must have:
   - A clear **objective** (what it produces)
   - **Input context** (file paths, prior outputs, constraints)
   - **Output format** (what the sub-agent should return or write)
2. Present the decomposition to the user as a numbered list and wait for confirmation before proceeding to Phase 3.
3. If the user adjusts scope, update the list and re-confirm.

## Phase 3 — DISPATCH

For each sub-task, spawn a sub-agent via the **Agent** tool.

**Core philosophy:** Transfer the mental model — WHY this matters and WHAT success looks like — then let the sub-agent own the HOW entirely. Treat every sub-agent as a **senior peer, not a subordinate**. Trust it to figure out the implementation.

Self-check before sending any dispatch prompt: *"Am I telling the agent what to think, or giving it what it needs to think for itself?"* If the former, cut.

**Parallelism rules:**
- Independent sub-tasks → dispatch in parallel (`run_in_background: true`)
- Dependent sub-tasks → dispatch sequentially; feed prior output as input context

**Isolation rule:**
- When sub-agents make file changes, use `isolation: "worktree"` to prevent write conflicts between parallel agents.

**Sub-agent types:** The Agent tool's `subagent_type` parameter selects different capabilities — `Explore` (fast, read-only codebase discovery), `Plan` (architecture design, returns plans not code), and `general-purpose` (full tool access, default). Choose based on what the sub-task actually needs.

## Phase 4 — REVIEW

**Every implementer agent MUST be paired with a separate reviewer agent.**

The reviewer's role is **skeptical auditor** — its job is to find problems, not to help. Give it the implementer's output and the files changed, then let it own HOW it audits. The reviewer decides its own approach to scrutiny.

**Hard rules:**
- Reviewers are **read-only** — they report findings but MUST NOT make changes themselves. Only implementer agents write to files.
- Reviewers return one of: **approved** or **needs-revision** (with specific, actionable feedback).

**Revision loop:**
1. If the reviewer returns **needs-revision**, dispatch a new implementer with the reviewer's feedback as additional context.
2. After the new implementer completes, dispatch a new reviewer.
3. **Max 2 revision rounds** per sub-task. If still unresolved, escalate to the user with full context (original objective, implementer outputs, reviewer feedback).

## Phase 5 — SYNTHESIZE

After all agents complete and all reviews pass, present a structured summary:

```
### Results
- [sub-task 1]: [outcome] — [reviewed]
- [sub-task 2]: [outcome] — [reviewed]

### Changes Made
- [file path]: [what changed]

### Flags
- [any concerns, conflicts, or items needing user attention]
```

If there are no flags, omit the Flags section.

# Failure Handling

- If a sub-agent fails, **retry once** with adjusted instructions (e.g., narrower scope, more explicit paths).
- If it fails again, **report the failure** to the user with: original objective, error context, and a suggested next step.

# Progress Updates

**Wait for all agents in a stage to complete before outputting.** Do not send incremental status updates as individual agents finish — hold until the entire dispatch round (all parallel agents) has resolved, then give one consolidated update. This preserves the context window and reduces noise.

When you do update, keep it brief: 1-2 lines per sub-task. Do not dump verbose logs.

# Edge Cases

- **No argument provided:** Ask the user what they'd like to orchestrate. Do not assume a default task.
- **Single trivial sub-task after decomposition:** Still dispatch via a sub-agent. The user explicitly chose orchestrator mode — respect that choice.
- **User changes mind mid-dispatch:** Acknowledge the change, halt outstanding dispatches where possible, and re-enter the UNDERSTAND phase with the updated intent.
- **Mode switch requested:** If the user asks to switch to spec-mode mid-execution, halt outstanding dispatches and return to SKILL.md Phase 1.5 to re-select the mode.
- **Referenced skill file doesn't exist:** Inform the user that the skill file was not found, then proceed without skill-specific conventions.
- **Scope expands after DECOMPOSE reveals greater complexity:** If spec-mode criteria now apply (multi-step, stateful, reviewable), inform the user and offer to switch to spec-mode.
