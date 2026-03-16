# Inline Mode

Freeform orchestration for tasks that complete within a single dispatch round. No persistent state file.

## Phase 2 — DECOMPOSE

1. Break the confirmed task into discrete sub-tasks. Each sub-task must have:
   - A clear **objective** (what it produces)
   - **Input context** (file paths, prior outputs, constraints)
   - **Output format** (what the sub-agent should return or write)
   - **Review focus** — what the reviewer should prioritize for this sub-task (e.g., "verify physics constraints," "check path references")
2. Present the decomposition to the user as a numbered list and wait for confirmation before proceeding to Phase 3.
3. If the user adjusts scope, update the list and re-confirm.

## Phase 3 — DISPATCH

For each sub-task, spawn a sub-agent via the **Agent** tool.

**Core philosophy:** Transfer the mental model — WHY this matters and WHAT success looks like — then let the sub-agent own the HOW entirely. Treat every sub-agent as a **senior peer, not a subordinate**. Trust it to figure out the implementation.

Self-check before sending any dispatch prompt: *"Am I telling the agent what to think, or giving it what it needs to think for itself?"* If the former, cut.

Inform each implementer that its output will be reviewed by a separate agent and may require revision.

### File-Based Handoff

The orchestrator is a **control plane, not a data conduit**. Sub-agent research and intermediate outputs pass through the filesystem, not through the orchestrator's context.

**Setup:** The first dispatched sub-agent creates the scratch directory: `99_System/.scratch/<session-id>/` (use a short, descriptive session ID like `imai-research` or `tpc-wiki`). Include this as an explicit instruction in the first agent's dispatch prompt.

**Output convention:** Every implementer sub-agent writes a numbered file to the scratch directory: `<NN>_<description>.md` (e.g., `01_publications.md`, `02_physics_background.md`). The orchestrator tells each agent its output path in the dispatch prompt.

- **Content producers** (research, drafts, collected data): the scratch file IS the deliverable.
- **Worktree implementers** (mutate existing files): the scratch file is a report capturing what was changed, where (file paths), and any decisions made. The implementer writes this report to the **shared scratch directory**, not the worktree.

**What the orchestrator receives:** Sub-agents return only a **1-2 sentence summary** (success/failure + scope covered). The orchestrator uses this summary as the primary signal for routing decisions.

**Direct verification (list-first):** Follow the tiered access priority from SKILL.md:
1. **Glob first** — list `99_System/.scratch/<session-id>/` to confirm expected files exist (e.g., `01_publications.md`, `review_03.md` were written). This is enough for most progress checks.
2. **Read targeted** — read a specific small file (e.g., `review_*.md` to check its verdict) only when the sub-agent's return summary is ambiguous or conflicting and you need the actual content to route correctly.
3. **Read full content** — only as a last resort when downstream dispatch *cannot proceed* without understanding the content, AND dispatching an Explore agent would add unnecessary overhead. Pulling large scratch files into the orchestrator's context defeats the file-based handoff design.

**What downstream agents receive:** Dependent sub-agents are given **file paths to read**, not re-serialized content. Example: "Read `99_System/.scratch/imai-research/01_publications.md` for prior findings."

### Parallelism rules
- Independent sub-tasks → dispatch in parallel (`run_in_background: true`)
- Dependent sub-tasks → dispatch sequentially; pass scratch file paths as input context

**Isolation rule:**
- When sub-agents mutate **existing** files, use `isolation: "worktree"` to prevent write conflicts between parallel agents.
- Sub-agents that only write to the scratch directory (`99_System/.scratch/`) must **NOT** use worktree isolation — they need to write to the shared filesystem so downstream agents can read their output. Non-overlapping numbered file paths (e.g., `01_*.md`, `02_*.md`) prevent write conflicts without worktree overhead.

**Sub-agent types:** The Agent tool's `subagent_type` parameter selects different capabilities — `Explore` (fast, read-only codebase discovery), `Plan` (architecture design, returns plans not code), and `general-purpose` (full tool access, default). Choose based on what the sub-task actually needs.

## Phase 4 — REVIEW

**Every implementer agent MUST be paired with a separate reviewer agent.**

The reviewer's role is **skeptical auditor** — its job is to find problems, not to help. Give it the implementer's output files (both scratch files and final deliverables) and the files changed, then let it own HOW it audits. The reviewer decides its own approach to scrutiny — it can cross-check scratch files (source material) against deliverables.

**Worktree access:** When the implementer ran in a worktree (because it mutated existing files), pass the worktree path to the reviewer so it can read the implementer's actual file changes directly. The reviewer writes its review file to the shared scratch directory, not to the worktree.

**Hard rules:**
- Reviewers are **read-only w.r.t. implementation files** — they MUST NOT modify deliverables, scratch content, or any files written by implementers.
- Reviewers **write a single review file** to the scratch directory: `review_<NN>.md` (where `<NN>` matches the sub-task number, e.g., `review_03.md`). This is the reviewer's only permitted write. The orchestrator tells each reviewer its output path in the dispatch prompt.
- Reviewers return a **1-2 sentence summary** to the orchestrator (approved/needs-revision + scope covered). The detailed findings live in the review file — the orchestrator does not need the full content.

**Review file format:** Verdict line (`approved` or `needs-revision`), then a Findings section with specific, actionable items (file paths, line numbers, what's wrong, why it matters).

**Content-producer review requirement:** All sub-tasks — including content producers (where the scratch file IS the deliverable) — require review. Content-producer reviews assess completeness and accuracy of the deliverable itself, just as worktree-implementer reviews assess correctness of file changes.

**Revision loop:**

**The orchestrator MUST re-dispatch for revision when a reviewer returns `needs-revision`.** The orchestrator MUST NOT proceed to the next sub-task or to SYNTHESIZE until the sub-task receives an `approved` verdict or hits the escalation limit below.

1. If the reviewer returns **needs-revision**, dispatch a new implementer with the review file path as input context (e.g., "Read `99_System/.scratch/<session-id>/review_03.md` for reviewer feedback"). Prefer file paths over re-serialization, but paste the review content into the dispatch prompt if the revision implementer runs in a worktree without access to the scratch directory.
2. After the new implementer completes, dispatch a new reviewer (which writes `review_<NN>b.md` for round 2, `review_<NN>c.md` for round 3, etc.).
3. **Max 4 revision rounds** per sub-task. If still unresolved, escalate to the user with: the original sub-task objective, the implementer output file path, all review file paths for this sub-task, and a 1-2 sentence summary of the unresolved disagreement.

**Post-escalation:** After escalation, the orchestrator MUST wait for explicit user direction before proceeding. The user may:
- **Accept as-is:** Proceed, but flag the sub-task as `accepted-without-approval` in the synthesis summary.
- **Provide manual guidance:** The orchestrator dispatches a new implementer with the user's specific instructions (this does NOT reset the round counter — it is a user-directed override).
- **Abandon the sub-task:** Remove it from the decomposition. The synthesis summary notes the abandonment.

The orchestrator MUST NOT silently proceed past an escalation.

## Phase 5 — SYNTHESIZE

**Structural gate:** Before synthesizing, verify the scratch directory (`99_System/.scratch/<session-id>/`):

1. **Pairing:** `Glob` the directory. For every implementer output (`<NN>_*.md`), a corresponding `review_<NN>.md` (or revision review `review_<NN>[b-z].md`) must exist. Separately, for every review file (`review_<NN>*.md`), a corresponding implementer output (`<NN>_*.md`) must exist. If either check fails, halt and investigate.
2. **Verdict:** Read the verdict line of each review file — or the latest revision review if revision files exist (e.g., `review_03c.md` takes precedence over `review_03b.md` and `review_03.md`). This is a "gate decision" Read under SKILL.md's tiered access Priority 2. Every review must contain a recognized verdict (`approved` or `needs-revision`) as its first line. If any latest review says `needs-revision`, the sub-task is incomplete — halt and return to Phase 4. If a sub-task was accepted via user escalation override (post-escalation), verify the override was explicitly granted.
3. **Malformed reviews:** If a review file is empty or its first line does not contain a recognized verdict keyword (`approved` or `needs-revision`), treat the review as malformed — halt and investigate. Do not silently pass or silently fail.

After all agents complete and all reviews pass:

1. Present a structured summary (see template below).
2. **Scratch dir report:** List the scratch directory path (`99_System/.scratch/<session-id>/`) and its contents at the end of the summary so the user can review or clean up manually.

```
### Results
- [sub-task 1]: [outcome] — [reviewed]
- [sub-task 2]: [outcome] — [reviewed]

### Changes Made
- [file path]: [what changed]

### Flags
- [any concerns, conflicts, or items needing user attention]

### Scratch Files
- `99_System/.scratch/<session-id>/` — [list files, can be deleted]
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
