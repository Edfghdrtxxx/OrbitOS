# Spec Mode

Use standard but light-weight spec workflow to accomplish complex tasks.

## Directory structure

```
openspec/
└── changes/
    ├── [change-name]/
    │   ├── task.md
    │   ├── review_01.md
    │   └── review_01b.md  (revision round 2, if needed)
    └── archive/
        └── YYYY-MM-DD-[name]/
            └── task.md
```

## The task.md format

```markdown
# [Change Name]

## Purpose
[2-4 sentences. What problem this solves and why it matters now.
This replaces the entire proposal document. Be direct -- no "Objective / Problem / Solution" sub-sections.]

## Context
[Optional. Include only information that would be lost between dispatch rounds:
file paths, data shapes, architectural constraints, physics parameters.
Do NOT put motivation (belongs in Purpose) or progress notes (belong in Tasks).
Skip this section entirely for straightforward work.]

## Tasks

- [ ] 1. First thing to do
  - Detail or command if needed
- [ ] 2. Second thing to do
- [ ] 3. Third thing to do
  - Sub-step detail
- [x] 4. Completed task (update in place as work progresses)

## Outcome
[Optional. Filled in after completion. 2-3 sentences on what was actually done and any decisions made along the way.]
```

## Format rules

- **Tasks use checkboxes.** Update them in place as work completes. This is the single source of truth for progress.
- **Outcome is written at the end**, not planned upfront. It captures what actually happened, not what was intended.

## Lifecycle

1. **Create** -- Draft task.md content during DECOMPOSE, dispatch a sub-agent to write it to disk.
2. **Execute** -- Sub-agents check off tasks as they complete.

The task.md is a coordination artifact, not a contract. If scope changes mid-execution, update it in place rather than creating a new document.

## Progress tracking

The task.md file is the single source of truth for all project progress. Do not track progress in conversation summaries, agent outputs, or any other artifact. Every completion, revision, or scope change must be reflected in task.md — if it is not in the file, it did not happen.

**Direct verification (list-first):** Follow the tiered access priority from SKILL.md:
1. **Glob first** — list `openspec/changes/<change-name>/` to confirm expected files exist (e.g., `review_01.md` was written). This is enough for most progress checks.
2. **Read targeted** — read `task.md` to verify checkbox state, or a specific `review_*.md` to inspect its verdict, only when the sub-agent's return summary is ambiguous or conflicting.
3. **Read full content** — only as a last resort when routing genuinely cannot proceed without the content. Prefer dispatching an Explore agent over pulling large files into the orchestrator's context.

## Phase 2 — DECOMPOSE

1. Break the confirmed task into discrete sub-tasks. Each sub-task must have:
   - A clear **objective** (what it produces)
   - **Input context** (file paths, prior outputs, constraints)
   - **Output format** (what the sub-agent should return or write)
2. Draft this decomposition as the task.md `Purpose` + `Tasks` sections — this is the decomposition output for spec-mode, replacing a plain numbered list. The `Tasks` section is the numbered sub-task list with checkboxes.
3. Present the drafted task.md content to the user for confirmation. This is the single Phase 2 confirmation step — do not ask for separate list approval and then task.md approval.
4. After confirmation, dispatch a sub-agent to write the task.md to `openspec/changes/[change-name]/task.md`. Wait for this dispatch to complete before proceeding to Phase 3 — do not background it.

## Phase 3 — DISPATCH

For each sub-task, spawn a sub-agent via the **Agent** tool.

**Core philosophy:** Transfer the mental model — WHY this matters and WHAT success looks like — then let the sub-agent own the HOW entirely. Treat every sub-agent as a **senior peer, not a subordinate**. Trust it to figure out the implementation.

Self-check before sending any dispatch prompt: *"Am I telling the agent what to think, or giving it what it needs to think for itself?"* If the former, cut.

**Parallelism rules:**
- Independent sub-tasks → dispatch in parallel (`run_in_background: true`)
- Dependent sub-tasks → dispatch sequentially; feed prior output as input context

**Isolation rule:**
- When sub-agents make file changes, use `isolation: "worktree"` to prevent write conflicts between parallel agents.
- **Exception — reviewers:** Reviewers write review files to the change directory (`openspec/changes/[change-name]/`). They must **NOT** use worktree isolation — their review files need to be on the shared filesystem so downstream implementers can read them. Non-overlapping file names (`review_01.md`, `review_02.md`) prevent write conflicts without worktree overhead.

**Sub-agent types:** The Agent tool's `subagent_type` parameter selects different capabilities — `Explore` (fast, read-only codebase discovery), `Plan` (architecture design, returns plans not code), and `general-purpose` (full tool access, default). Choose based on what the sub-task actually needs.

**Context injection:** Point sub-agents to the task.md file path so they can read it directly. Only paste task.md content into the prompt when the sub-agent is in an isolated worktree without access to the openspec/ path. The task.md writer sub-agent does not need worktree isolation because it writes to a non-competing path.

## Phase 4 — REVIEW

**Every implementer agent MUST be paired with a separate reviewer agent.**

The reviewer's role is **skeptical auditor** — its job is to find problems, not to help. Give it the implementer's output and the files changed, then let it own HOW it audits. The reviewer decides its own approach to scrutiny.

**Worktree access:** When the implementer ran in a worktree, pass the worktree path to the reviewer so it can read the implementer's actual file changes directly (e.g., "The implementer's changes are at `/tmp/worktree-abc123/` — read files from that path to review them"). The reviewer writes its review file to the shared change directory (`openspec/changes/[change-name]/`), not to the worktree.

**Hard rules:**
- Reviewers are **read-only w.r.t. implementation files** — they MUST NOT modify deliverables or any files written by implementers.
- Reviewers **write a single review file** to the change directory: `review_<NN>.md` (where `<NN>` matches the task number, e.g., `review_01.md`). This is the reviewer's only permitted write. The orchestrator tells each reviewer its output path in the dispatch prompt.
- Reviewers return a **1-2 sentence summary** to the orchestrator (approved/needs-revision + scope covered). The detailed findings live in the review file — the orchestrator does not need the full content.

**Review file format:** Verdict line (`approved` or `needs-revision`), then a Findings section with specific, actionable items (file paths, line numbers, what's wrong, why it matters).

**Revision loop:**
1. If the reviewer returns **needs-revision**, dispatch a new implementer with the review file path as input context (e.g., "Read `openspec/changes/[change-name]/review_01.md` for reviewer feedback"). Prefer file paths over re-serialization, but paste the review content into the dispatch prompt if the revision implementer runs in a worktree without access to the change directory (same pattern as the task.md context injection rule).
2. After the new implementer completes, dispatch a new reviewer (which writes `review_<NN>b.md` for round 2, `review_<NN>c.md` for round 3, etc.).
3. **Max 4 revision rounds** per sub-task. If still unresolved, escalate to the user with full context (original objective, implementer output paths, review file paths).

**Checkpoint update:** After each review passes, dispatch a sub-agent to mark the corresponding checkbox in task.md as `[x]`. This keeps task.md as the live source of truth for progress.

## Phase 5 — SYNTHESIZE

**Structural gate:** Before synthesizing, `Glob` the change directory (`openspec/changes/<change-name>/`) and verify it contains at least one implementation-produced file paired with at least one corresponding review file (`review_*.md`). If the directory lacks this minimum structure — e.g., implementation output exists but no review was written, or vice versa — halt and investigate before proceeding. Every implementation must have been reviewed.

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

**Outcome write-back:** After presenting the summary, dispatch a sub-agent to fill in the `## Outcome` section of task.md with 2-3 sentences on what was actually done and any decisions made. Do not archive the task directory — archiving (moving to `archive/YYYY-MM-DD-[name]/`) is done manually by the user.

# Failure Handling

- If a sub-agent fails, **retry once** with adjusted instructions (e.g., narrower scope, more explicit paths).
- If it fails again, **report the failure** to the user with: original objective, error context, and a suggested next step.

# Progress Updates

**Wait for all agents in a stage to complete before outputting.** Do not send incremental status updates as individual agents finish — hold until the entire dispatch round (all parallel agents) has resolved, then give one consolidated update. This preserves the context window and reduces noise.

When you do update, keep it brief: 1-2 lines per sub-task. Do not dump verbose logs.

# Edge Cases

- **No argument provided:** Ask the user what they'd like to orchestrate. Do not assume a default task.
- **Single trivial sub-task after decomposition:** Inform the user that spec-mode overhead may be disproportionate for a single task, and offer to switch to inline-mode. If the user confirms spec-mode, proceed normally.
- **User changes mind mid-dispatch:** Acknowledge the change, halt outstanding dispatches where possible, and re-enter the UNDERSTAND phase with the updated intent.
- **Mode switch requested:** If the user asks to switch to inline-mode mid-execution, halt outstanding dispatches and return to SKILL.md Phase 1.5 to re-select the mode. Completed sub-tasks should already be reflected as `[x]` items in task.md — the file persists regardless of mode switch.
- **Referenced skill file doesn't exist:** Inform the user that the skill file was not found, then proceed without skill-specific conventions.
- **Scope narrows after DECOMPOSE reveals the true complexity:** If the mode gate criteria no longer hold, inform the user and offer to switch to inline-mode.
