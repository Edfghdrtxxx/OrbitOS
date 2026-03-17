# Spec Mode

Produce a well-researched **task.md** implementation specification. The orchestrator coordinates through a **decomposition.md** research plan — iteratively investigating, reviewing, and refining until task.md is a clean, actionable deliverable. This mode does NOT mutate the codebase.

## Directory structure

```
openspec/
└── changes/
    ├── [change-name]/
    │   ├── decomposition.md              (coordination — research plan + progress)
    │   ├── task.md                        (deliverable — implementation specification)
    │   ├── 01_explore_auth.md             (research report)
    │   ├── review_01.md
    │   ├── review_01b.md                  (revision round 2, if needed)
    │   ├── 02_analyze_schema.md           (research report)
    │   ├── review_02.md
    │   └── review_synthesis.md            (task.md quality review)
    └── archive/                           (manual — user-initiated)
        └── YYYY-MM-DD-[name]/
            ├── decomposition.md
            └── task.md
```

## The decomposition.md format

```markdown
# [Change Name] — Decomposition

## Purpose
[2-4 sentences. What problem this solves and why it matters now.]

## Research Plan

- [ ] 1. [Research sub-task objective]
  - Input: [file paths, subsystems, constraints]
  - Output: [what the report should contain]
  - Review focus: [what the reviewer should prioritize]
- [ ] 2. ...
- [x] 3. Completed sub-task (update in place as research passes review)
```

### Format rules

- **Purpose** grounds every sub-agent in the WHY. Keep it direct — no sub-sections.
- **Research Plan** uses checkboxes. Update them in place as research reports pass review. This is the single source of truth for orchestration progress.
- Each sub-task includes Input (what to look at), Output (what the report should contain), and Review focus (what the reviewer should prioritize). These inform dispatch prompts.

## The task.md format

```markdown
# [Change Name]

## Purpose
[2-4 sentences. What problem this solves and why it matters now.
This replaces the entire proposal document. Be direct -- no "Objective / Problem / Solution" sub-sections.]

## Context
[Optional. Include only information that would be lost between dispatch rounds:
file paths, data shapes, architectural constraints, physics parameters.
Do NOT put motivation (belongs in Purpose) or progress notes (belong in decomposition.md).
Skip this section entirely for straightforward work.]

## Tasks

- [ ] 1. First thing to do
  - Detail or command if needed
- [ ] 2. Second thing to do
- [ ] 3. Third thing to do
  - Sub-step detail
- [x] 4. Completed task (update in place as work progresses)

## Outcome
[Filled in after completion. 2-3 sentences on what was actually done and any decisions made along the way.]
```

### Format rules

- **Tasks use checkboxes.** Each task should include enough context (file paths, constraints, dependencies) that an implementer — human or AI — can execute it without re-doing the research.
- **Outcome is written at the end**, not planned upfront. It captures what actually happened, not what was intended.

## Lifecycle

1. **DECOMPOSE** — Draft decomposition.md (research plan) and task.md skeleton (Purpose only).
2. **DISPATCH + REVIEW** — Sub-agents investigate per the research plan. Each sub-task's report is reviewed. Passed sub-tasks are checked off in decomposition.md.
3. **SYNTHESIZE** — Compile all approved findings into task.md's Tasks section. Review the synthesized spec for completeness and accuracy. Iterate until task.md is a clean, actionable deliverable.

The decomposition.md is a coordination artifact. The task.md is the deliverable. If scope changes mid-research, dispatch a sub-agent to update decomposition.md in place rather than creating a new document.

## Progress tracking

The **decomposition.md** file is the single source of truth for orchestration progress (which research sub-tasks are complete). The **task.md** file is the deliverable — its Tasks section is populated during SYNTHESIZE, not during research.

Do not track progress in conversation summaries, agent outputs, or any other artifact. Every research completion must be reflected as a `[x]` in decomposition.md — if it is not in the file, it did not happen.

**Direct verification (list-first):** Follow the tiered access priority from SKILL.md:
1. **Glob first** — list `openspec/changes/<change-name>/` to confirm expected files exist (e.g., `review_01.md` was written). This is enough for most progress checks.
2. **Read targeted** — read `decomposition.md` to verify checkbox state or sub-task count, or a specific `review_*.md` to inspect its verdict, only when the sub-agent's return summary is ambiguous or conflicting. This also covers the structural gate's completeness check and verdict verification before synthesis.
3. **Read full content** — only as a last resort when routing genuinely cannot proceed without the content. Prefer dispatching an Explore agent over pulling large files into the orchestrator's context.

## Phase 2 — DECOMPOSE

1. Break the confirmed task into **research and analysis sub-tasks** needed to produce a comprehensive implementation specification. Each sub-task must have:
   - A clear **objective** (what it investigates or analyzes)
   - **Input context** (file paths, subsystems to explore, constraints)
   - **Output format** (what the research report should contain)
   - **Review focus** — what the reviewer should prioritize (e.g., "verify completeness of dependency analysis," "check for missed edge cases")
2. Draft decomposition.md with `Purpose` and a `Research Plan` listing each sub-task.
3. Draft an initial task.md with the `## Purpose` section only (matching decomposition.md's Purpose). Do not include `## Tasks`, `## Context`, or `## Outcome` section headers — those are added during SYNTHESIZE.
4. Present both drafts to the user by pasting their content in the conversation (the orchestrator cannot write files directly). This is the single Phase 2 confirmation step — do not ask for separate approvals.
5. If the user adjusts scope, update the in-context drafts and re-present for confirmation.
6. After confirmation, dispatch a sub-agent to write both files to `openspec/changes/[change-name]/`. Wait for this dispatch to complete before proceeding to Phase 3 — do not background it.

## Phase 3 — DISPATCH

For each research sub-task in the decomposition.md Research Plan, spawn a sub-agent via the **Agent** tool.

**Core philosophy:** Transfer the mental model — WHY this research matters and WHAT the spec needs — then let the sub-agent own the HOW entirely. Treat every sub-agent as a **senior peer, not a subordinate**. Trust it to figure out the investigation approach.

Self-check before sending any dispatch prompt: *"Am I telling the agent what to think, or giving it what it needs to think for itself?"* If the former, cut.

Inform each sub-agent that its report will be reviewed by a separate agent and may require revision.

**Sub-agents are read-only.** Spec-mode sub-agents investigate and analyze — they do NOT mutate the codebase. Use `subagent_type: "Explore"` for codebase discovery or `subagent_type: "Plan"` for architectural analysis. Use `general-purpose` only when the sub-task requires tools beyond what Explore/Plan provide (e.g., WebSearch for external research), but still instruct it to make no file changes outside the change directory.

**No worktree isolation.** Since spec-mode sub-agents do not mutate the codebase, worktree isolation is unnecessary.

**Parallelism rules:**
- Independent research sub-tasks → dispatch in parallel (`run_in_background: true`)
- Dependent sub-tasks → dispatch sequentially; feed prior output as input context
- Two sub-tasks are **dependent** when one requires the other's findings as input. Partial scope overlap (e.g., both explore the same file for different questions) does not create a dependency — only data-flow does.

**Output convention:** Every research sub-agent writes a report to the change directory: `<NN>_<description>.md` (where `<NN>` matches the sub-task number in decomposition.md, e.g., `01_explore_auth.md`). The report captures findings, relevant file paths, constraints discovered, and recommendations for the spec. The orchestrator tells each sub-agent its output path in the dispatch prompt.

**What the orchestrator receives:** Sub-agents return only a **1-2 sentence summary** (success/failure + scope covered). The orchestrator uses this summary as the primary signal for routing decisions. Detailed findings live in the report file — the orchestrator does not need the full content.

**Context injection:** Each dispatch prompt must include: (1) the decomposition.md file path so the sub-agent can read the research plan and purpose, (2) the sub-agent's output file path, and (3) the read-only constraint. Only paste decomposition.md content into the prompt when the sub-agent cannot access the openspec/ path.

## Phase 4 — REVIEW

**Every research sub-agent MUST be paired with a separate reviewer agent.**

**Pre-review verification:** Before dispatching a reviewer, Glob the change directory to confirm the expected report file (`<NN>_<description>.md`) exists. If missing, treat the research sub-agent as failed and follow Failure Handling.

The reviewer's role is **skeptical auditor of the research quality** — its job is to find gaps, inaccuracies, or missed considerations, not to help. Give it the research report file path (`<NN>_<description>.md`) and let it own HOW it audits. The reviewer should verify findings against the actual codebase, check for completeness, and flag anything that would make the resulting spec unreliable.

**Hard rules:**
- Reviewers are **read-only** — they MUST NOT modify research reports or any other files.
- Reviewers **write a single review file** to the change directory: `review_<NN>.md` (where `<NN>` matches the sub-task number, e.g., `review_01.md`). This is the reviewer's only permitted write. The orchestrator tells each reviewer its output path in the dispatch prompt.
- Reviewers return a **1-2 sentence summary** to the orchestrator (approved/needs-revision + scope covered). The detailed findings live in the review file — the orchestrator does not need the full content.

**Review file format:** Verdict line (`approved` or `needs-revision`), then a Findings section with specific, actionable items (file paths, what's missing, why it matters for the spec).

**Revision loop:**

**The orchestrator MUST re-dispatch for revision when a reviewer returns `needs-revision`.** The orchestrator MUST NOT proceed to the next sub-task or to SYNTHESIZE until the sub-task receives an `approved` verdict or hits the escalation limit below.

1. If the reviewer returns **needs-revision**, dispatch a new research sub-agent with the review file path as input context (e.g., "Read `openspec/changes/[change-name]/review_01.md` for reviewer feedback").
2. After the new sub-agent completes, dispatch a new reviewer (which writes `review_<NN>b.md` for round 2, `review_<NN>c.md` for round 3, etc.).
3. **Max 4 revision rounds** per sub-task — i.e., if `review_<NN>d.md` returns `needs-revision`, escalate. If still unresolved, escalate to the user with: the original sub-task objective, the research report file path, all review file paths for this sub-task, and a 1-2 sentence summary of the unresolved disagreement.

**Post-escalation:** After escalation, the orchestrator MUST wait for explicit user direction before proceeding. The user may:
- **Accept as-is:** Proceed, but flag the sub-task as `accepted-without-approval` in the synthesis summary.
- **Provide manual guidance:** The orchestrator dispatches a new sub-agent with the user's specific instructions (this does NOT reset the round counter — it is a user-directed override).
- **Abandon the sub-task:** Remove it from the research plan. The synthesis summary notes the abandonment.

The orchestrator MUST NOT silently proceed past an escalation.

**Checkpoint update:** After each review passes, dispatch a `general-purpose` sub-agent to mark the corresponding checkbox in decomposition.md as `[x]`. Minimal prompt: the decomposition.md file path, which sub-task number to check off, and the instruction to make no changes outside the change directory. **When multiple sub-tasks complete in parallel, dispatch checkpoint sub-agents sequentially** — not in parallel — to avoid write conflicts on decomposition.md. These dispatches are lightweight (single checkbox edit) and do not warrant a progress update to the user.

## Phase 5 — SYNTHESIZE

**Structural gate:** Before synthesizing, verify the change directory (`openspec/changes/<change-name>/`):

1. **Pairing:** `Glob` the directory. For every research report (`<NN>_*.md`), a corresponding `review_<NN>.md` (or revision review `review_<NN>[b-z].md`) must exist. Separately, for every review file matching `review_<NN>*.md`, a corresponding research report (`<NN>_*.md`) must exist. `review_synthesis*.md` files are excluded from this pairing check — they are verified separately in the synthesis loop below. If pairing fails, dispatch an Explore agent to identify which files are missing or orphaned before halting.
2. **Completeness:** Read `decomposition.md` (Priority 2 targeted read) and extract the current Research Plan sub-task numbers. Compare against the `<NN>_*.md` reports found in step 1:
   - **Missing reports** (sub-task in plan but no report on disk): a sub-task was silently dropped — halt and escalate to the user.
   - **Orphaned reports** (report on disk but sub-task number no longer in plan): expected after a scope change. Verify the sub-task was intentionally removed from decomposition.md. These reports are excluded from synthesis (per the scope-change edge case) — proceed without halting.
3. **Verdict:** Read the verdict line of each review file for current (non-orphaned) sub-tasks — or the latest revision review if revision files exist (e.g., `review_01c.md` takes precedence over `review_01b.md` and `review_01.md`). Alphabetical ordering of the letter suffix determines recency (valid for up to 25 rounds; max is 4). This is a "gate decision" Read under SKILL.md's tiered access Priority 2. Every review must contain a recognized verdict (`approved` or `needs-revision`) as its first line. If any latest review says `needs-revision`, the sub-task is incomplete — halt and return to Phase 4. If a sub-task was accepted via user escalation override (post-escalation), verify the override was explicitly granted.
4. **Malformed reviews:** If any review file — including `review_synthesis*.md` files produced during the synthesis loop — is empty or its first line does not contain a recognized verdict keyword (`approved` or `needs-revision`), treat it as malformed — halt and investigate. Do not silently pass or silently fail.

After all research reports pass review, **synthesize findings into task.md**:

1. **Synthesis dispatch.** Dispatch a `general-purpose` sub-agent to synthesize. Pass it: the decomposition.md file path, the task.md file path (currently a skeleton), and all approved research report file paths. Instruct it to: populate task.md's `Tasks` section with detailed, actionable implementation steps informed by the research; add a `Context` section if there is information that would be lost between sessions; and return a **per-sub-task one-line summary** (not just a single summary) so the orchestrator can populate the final output template.
2. **Synthesis review.** Dispatch a reviewer to audit the synthesized task.md. Pass it: the task.md file path AND all approved research report file paths, so it can verify that all findings are accurately reflected, tasks are actionable and complete, and nothing was lost or misrepresented. The reviewer writes `review_synthesis.md` to the change directory.
3. **Synthesis verdict.** Read the verdict line of the synthesis review file (Priority 2 targeted read) to confirm the verdict — do not rely solely on the reviewer's return summary. If `approved`, proceed to step 4. If `needs-revision`, dispatch a new synthesis sub-agent with the review file path as input context. Re-review after each revision (revision files: `review_synthesis_b.md` for round 2, `review_synthesis_c.md` for round 3). If `review_synthesis_c.md` returns `needs-revision`, escalate to the user.

   **Synthesis naming convention:** Synthesis review files use an underscore before the revision letter (`review_synthesis_b.md`) because `synthesis` is a word, unlike the numeric research convention (`review_01b.md`). Both conventions are intentional.

   **Post-escalation** (mirrors Phase 4):
   - **Accept as-is:** Proceed, but flag task.md as `accepted-without-full-review` in the final summary.
   - **Provide manual guidance:** Dispatch a new synthesis sub-agent with the user's specific instructions.
   - **Abandon synthesis:** Present task.md in its current state with a warning that it did not pass review. Skip the outcome write-back and proceed directly to Phase 6 (REFLECT).

4. After the synthesis passes review (or is accepted via escalation), present the final summary to the user. Use the per-sub-task summaries returned by the synthesis sub-agent in step 1:

```
### Specification Complete
- [research sub-task 1]: [findings summary] — [reviewed | accepted-without-approval]
- [research sub-task 2]: [findings summary] — [reviewed]

### Deliverable
- `openspec/changes/[change-name]/task.md` — ready for implementation

### Flags
- [any concerns or items needing user attention]
```

If there are no flags, omit the Flags section.

**Outcome write-back:** After presenting the summary, dispatch a sub-agent to fill in the `## Outcome` section of task.md with 2-3 sentences on what was actually done and any decisions made. Wait for this dispatch to complete before proceeding to Phase 6 — do not background it. Do not archive the task directory — archiving (moving to `archive/YYYY-MM-DD-[name]/`) is done manually by the user.

## Phase 6 — REFLECT

After the outcome write-back completes, invoke `/reflect` using the Skill tool. This is a **mandatory** step — do not skip it.

The purpose is to catch **orchestrator-level mistakes** — scope drift, dropped sub-tasks, bad routing decisions, unverified assumptions made during decomposition or dispatch. Individual research quality is already covered by Phase 4 reviewers; this step audits the orchestration process itself.

Let the reflect skill run generically against the full session. Present its findings to the user. Do **not** act on any findings until the user explicitly approves — this is required by the reflect skill's own protocol.

# Failure Handling

- If a sub-agent fails, **retry once** with adjusted instructions (e.g., narrower scope, more explicit paths).
- If it fails again, **report the failure** to the user with: original objective, error context, and a suggested next step.

# Progress Updates

**Wait for all agents in a stage to complete before outputting.** Do not send incremental status updates as individual agents finish — hold until the entire dispatch round (all parallel agents) has resolved, then give one consolidated update. This preserves the context window and reduces noise.

When you do update, keep it brief: 1-2 lines per sub-task. Do not dump verbose logs.

# Edge Cases

- **No argument provided:** Ask the user what they'd like to orchestrate. Do not assume a default task.
- **Single trivial sub-task after decomposition:** Inform the user that spec-mode overhead may be disproportionate for a single research task, and offer to switch to inline-mode. If the user confirms spec-mode, proceed normally.
- **User changes mind mid-dispatch:** Acknowledge the change, halt outstanding dispatches where possible, and re-enter the UNDERSTAND phase with the updated intent.
- **Mode switch requested:** If the user asks to switch to inline-mode mid-execution, halt outstanding dispatches and return to SKILL.md Phase 1.5 to re-select the mode. Completed sub-tasks should already be reflected as `[x]` items in decomposition.md — the files persist regardless of mode switch.
- **Referenced skill file doesn't exist:** Inform the user that the skill file was not found, then proceed without skill-specific conventions.
- **Scope narrows after DECOMPOSE reveals the true complexity:** If the mode gate criteria no longer hold, inform the user and offer to switch to inline-mode.
- **Scope change after decomposition.md is written:** Dispatch a sub-agent to update decomposition.md in place (the orchestrator is read-only). Already-approved research reports for dropped sub-tasks remain on disk but must be excluded from synthesis — instruct the synthesis sub-agent to use only the sub-tasks currently marked in decomposition.md's Research Plan, ignoring orphaned report files.
