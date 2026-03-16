# Spec Mode

Use standard but light-weight spec workflow to accomplish complex tasks.

## Directory structure

```
openspec/
└── changes/
    ├── [change-name]/
    │   ├── task.md
    │   ├── 01_refactor_auth.md      (implementer report)
    │   ├── review_01.md
    │   ├── review_01b.md            (revision round 2, if needed)
    │   ├── 02_update_tests.md       (implementer report)
    │   └── review_02.md
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
   - **Review focus** — what the reviewer should prioritize for this sub-task (e.g., "verify physics constraints," "check path references")
2. Draft this decomposition as the task.md `Purpose` + `Tasks` sections — this is the decomposition output for spec-mode, replacing a plain numbered list. The `Tasks` section is the numbered sub-task list with checkboxes.
3. Present the drafted task.md content to the user for confirmation. This is the single Phase 2 confirmation step — do not ask for separate list approval and then task.md approval.
4. If the user adjusts scope, update the drafted task.md content and re-present for confirmation.
5. After confirmation, dispatch a sub-agent to write the task.md to `openspec/changes/[change-name]/task.md`. Wait for this dispatch to complete before proceeding to Phase 3 — do not background it.

## Phase 3 — DISPATCH

For each sub-task, spawn a sub-agent via the **Agent** tool.

**Core philosophy:** Transfer the mental model — WHY this matters and WHAT success looks like — then let the sub-agent own the HOW entirely. Treat every sub-agent as a **senior peer, not a subordinate**. Trust it to figure out the implementation.

Self-check before sending any dispatch prompt: *"Am I telling the agent what to think, or giving it what it needs to think for itself?"* If the former, cut.

Inform each implementer that its output will be reviewed by a separate agent and may require revision.

**Parallelism rules:**
- Independent sub-tasks → dispatch in parallel (`run_in_background: true`)
- Dependent sub-tasks → dispatch sequentially; feed prior output as input context

**Isolation rule:**
- When sub-agents make file changes, use `isolation: "worktree"` to prevent write conflicts between parallel agents.
- **Exception — reviewers:** Reviewers write review files to the change directory (`openspec/changes/[change-name]/`). They must **NOT** use worktree isolation — their review files need to be on the shared filesystem so downstream implementers can read them. Non-overlapping file names (`review_01.md`, `review_02.md`) prevent write conflicts without worktree overhead.

**Sub-agent types:** The Agent tool's `subagent_type` parameter selects different capabilities — `Explore` (fast, read-only codebase discovery), `Plan` (architecture design, returns plans not code), and `general-purpose` (full tool access, default). Choose based on what the sub-task actually needs.

**Output convention:** Every implementer sub-agent writes a report file to the change directory: `<NN>_<description>.md` (where `<NN>` matches the task number, e.g., `01_refactor_auth.md`). The report captures what was changed, where (file paths), and any decisions made. This serves as both an audit trail for the orchestrator and input context for the reviewer. The orchestrator tells each implementer its output path in the dispatch prompt.

When the implementer runs in a worktree, it writes the report to the **shared change directory** (not the worktree) so the orchestrator and reviewer can read it directly.

**Context injection:** Point sub-agents to the task.md file path so they can read it directly. Only paste task.md content into the prompt when the sub-agent is in an isolated worktree without access to the openspec/ path. The task.md writer sub-agent does not need worktree isolation because it writes to a non-competing path.

## Phase 4 — REVIEW

**Every implementer agent MUST be paired with a separate reviewer agent.**

The reviewer's role is **skeptical auditor** — its job is to find problems, not to help. Give it the implementer's report file path (`<NN>_<description>.md`) and any worktree path, then let it own HOW it audits. The reviewer decides its own approach to scrutiny — it can cross-check the report against the actual file changes.

**Worktree access:** When the implementer ran in a worktree, pass the worktree path to the reviewer so it can read the implementer's actual file changes directly (e.g., "The implementer's changes are at `/tmp/worktree-abc123/` — read files from that path to review them. The implementer's report is at `openspec/changes/[change-name]/01_refactor_auth.md`."). The reviewer writes its review file to the shared change directory (`openspec/changes/[change-name]/`), not to the worktree.

**Hard rules:**
- Reviewers are **read-only w.r.t. implementation files** — they MUST NOT modify deliverables or any files written by implementers.
- Reviewers **write a single review file** to the change directory: `review_<NN>.md` (where `<NN>` matches the task number, e.g., `review_01.md`). This is the reviewer's only permitted write. The orchestrator tells each reviewer its output path in the dispatch prompt.
- Reviewers return a **1-2 sentence summary** to the orchestrator (approved/needs-revision + scope covered). The detailed findings live in the review file — the orchestrator does not need the full content.

**Review file format:** Verdict line (`approved` or `needs-revision`), then a Findings section with specific, actionable items (file paths, line numbers, what's wrong, why it matters).

**Revision loop:**

**The orchestrator MUST re-dispatch for revision when a reviewer returns `needs-revision`.** The orchestrator MUST NOT proceed to the next sub-task or to SYNTHESIZE until the sub-task receives an `approved` verdict or hits the escalation limit below.

1. If the reviewer returns **needs-revision**, dispatch a new implementer with the review file path as input context (e.g., "Read `openspec/changes/[change-name]/review_01.md` for reviewer feedback"). Prefer file paths over re-serialization, but paste the review content into the dispatch prompt if the revision implementer runs in a worktree without access to the change directory (same pattern as the task.md context injection rule).
2. After the new implementer completes, dispatch a new reviewer (which writes `review_<NN>b.md` for round 2, `review_<NN>c.md` for round 3, etc.).
3. **Max 4 revision rounds** per sub-task. If still unresolved, escalate to the user with: the original sub-task objective, the implementer report file path, all review file paths for this sub-task, and a 1-2 sentence summary of the unresolved disagreement.

**Post-escalation:** After escalation, the orchestrator MUST wait for explicit user direction before proceeding. The user may:
- **Accept as-is:** Proceed, but flag the sub-task as `accepted-without-approval` in the synthesis summary.
- **Provide manual guidance:** The orchestrator dispatches a new implementer with the user's specific instructions (this does NOT reset the round counter — it is a user-directed override).
- **Abandon the sub-task:** Remove it from the task list. The synthesis summary notes the abandonment.

The orchestrator MUST NOT silently proceed past an escalation.

**Checkpoint update:** After each review passes, dispatch a sub-agent to mark the corresponding checkbox in task.md as `[x]`. This keeps task.md as the live source of truth for progress.

## Phase 5 — SYNTHESIZE

**Structural gate:** Before synthesizing, verify the change directory (`openspec/changes/<change-name>/`):

1. **Pairing:** `Glob` the directory. For every implementer report (`<NN>_*.md`), a corresponding `review_<NN>.md` (or revision review `review_<NN>[b-z].md`) must exist. Separately, for every review file (`review_<NN>*.md`), a corresponding implementer report (`<NN>_*.md`) must exist. If either check fails, halt and investigate.
2. **Verdict:** Read the verdict line of each review file — or the latest revision review if revision files exist (e.g., `review_01c.md` takes precedence over `review_01b.md` and `review_01.md`). This is a "gate decision" Read under SKILL.md's tiered access Priority 2. Every review must contain a recognized verdict (`approved` or `needs-revision`) as its first line. If any latest review says `needs-revision`, the sub-task is incomplete — halt and return to Phase 4. If a sub-task was accepted via user escalation override (post-escalation), verify the override was explicitly granted.
3. **Malformed reviews:** If a review file is empty or its first line does not contain a recognized verdict keyword (`approved` or `needs-revision`), treat the review as malformed — halt and investigate. Do not silently pass or silently fail.

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

## Phase 6 — REFLECT

After the outcome write-back, invoke `/reflect` using the Skill tool. This is a **mandatory** step — do not skip it.

The purpose is to catch **orchestrator-level mistakes** — scope drift, dropped sub-tasks, bad routing decisions, unverified assumptions made during decomposition or dispatch. Individual implementation quality is already covered by Phase 4 reviewers; this step audits the orchestration process itself.

Let the reflect skill run generically against the full session. Present its findings to the user. Do **not** act on any findings until the user explicitly approves — this is required by the reflect skill's own protocol.

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
