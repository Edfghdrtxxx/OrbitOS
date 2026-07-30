# Spec Mode

Produce a well-researched implementation specification using an **indexed structure**: a lightweight `spec.md` index pointing to individual task files in `tasks/`. The orchestrator coordinates through a **decomposition.md** research plan — iteratively investigating, reviewing, and refining until the spec is a clean, actionable deliverable. This mode does NOT mutate the codebase.

**Design rationale:** A monolithic spec file forces every implementer and reviewer to load the entire specification into their context window, even when they only need one task. The indexed structure — modeled on the memory system's MEMORY.md + individual files pattern — keeps the index lean and lets agents load only what they need.

## Directory structure

```
openspec/
└── changes/
    ├── [change-name]/
    │   ├── decomposition.md              (coordination — research plan + progress)
    │   ├── spec.md                       (deliverable — index with Purpose, AC, task roster)
    │   ├── tasks/
    │   │   ├── 01_setup_auth.md          (individual task specification)
    │   │   ├── 02_migrate_schema.md
    │   │   └── 03_update_api.md
    │   ├── 01_explore_auth.md            (research report)
    │   ├── review_01.md
    │   ├── review_01b.md                 (revision round 2, if needed)
    │   ├── 02_analyze_schema.md          (research report)
    │   ├── review_02.md
    │   └── review_synthesis.md           (spec quality review)
    └── archive/                          (manual — user-initiated)
        └── YYYY-MM-DD-[name]/
            ├── decomposition.md
            ├── spec.md
            └── tasks/
```

## The decomposition.md format

decomposition.md is a **pure research checklist** — it tracks what to investigate and what's done. Purpose, AC, and key decisions live in spec.md (the single source of truth for the spec's identity).

```markdown
# [Change Name] — Research Plan

- [ ] 1. [Research sub-task objective]
  - Input: [file paths, subsystems, constraints to investigate]
  - Output: [findings the report should contain]
  - Review focus: [what the reviewer should verify]
- [ ] 2. ...
- [x] 3. Completed sub-task (update in place as research passes review)
```

### Format rules

- **Research Plan** uses checkboxes — the single source of truth for research progress. Update in place as research passes review.

## The spec.md format

spec.md is the **index** — a lightweight entry point that orients implementers without overwhelming them. It contains shared context and a roster of pointers to individual task files. Implementers read spec.md for grounding, then only the task file(s) assigned to them.

```markdown
# [Change Name]

## Purpose
[2-4 sentences. What problem this solves and why it matters now.
Be direct — no "Objective / Problem / Solution" sub-sections.]

## Acceptance Criteria
- AC-1: [testable condition]
- AC-2: [testable condition]

## Context
[Optional. Key design decisions, architectural constraints, data shapes, file paths —
information shared across tasks that would be lost between dispatch rounds.
Skip this section entirely for straightforward work.]

## Tasks

- [ ] [01_setup_auth](tasks/01_setup_auth.md) — Set up auth middleware [AC-1, AC-3]
- [ ] [02_migrate_schema](tasks/02_migrate_schema.md) — Migrate user schema [AC-2]
- [ ] [03_update_api](tasks/03_update_api.md) — Update API endpoints [AC-1, AC-4]

## Outcome
[Filled in after completion. 2-3 sentences on what was actually done and any decisions made along the way.]
```

### Format rules

- **Task roster uses checkboxes.** Each entry is one line: checkbox, file link, dash, one-line description, AC coverage in brackets. No inline details — those belong in the task file.
- **AC coverage brackets** map each task to the acceptance criteria it satisfies. Every AC must appear in at least one task's brackets.
- **Outcome is written at the end**, not planned upfront.

## Individual task file format

See **[`references/task-file-format.md`](task-file-format.md)**. Pass this path to synthesis writers and reviewers so they read the format directly.

## Lifecycle

1. **ELICIT** — Requirements conversation with the user. Lock acceptance criteria, constraints, scope, and key design decisions.
2. **DECOMPOSE** — Draft spec.md (Purpose, AC, Context) and decomposition.md (research plan).
3. **DISPATCH + REVIEW** — Sub-agents investigate per the research plan. Each report is reviewed. Passed sub-tasks are checked off in decomposition.md.
4. **SYNTHESIZE** — Compile approved findings into spec.md + individual task files in `tasks/`. Review the synthesized spec. Iterate until clean.
5. **REFLECT** — Self-critique for orchestrator-level mistakes.
6. **REFINE** — Collaborative Q&A to confirm the spec reflects actual intent.

The decomposition.md is a coordination artifact. The spec.md + task files are the deliverable. If scope changes mid-research, update decomposition.md in place.

## Invariants

- **decomposition.md checkboxes are the single source of truth** for research progress. If it's not checked off in the file, it didn't happen.
- **spec.md roster checkboxes are the single source of truth** for implementation progress. Implementers update step checkboxes in their task file and the roster checkbox in spec.md upon completion.
- **All sub-agents are read-only** — they do not mutate the codebase. Only write to the change directory.
- **Every research report gets a paired review.** No report reaches synthesis without an `approved` verdict.
- **Sub-agents return 1-2 sentence summaries only.** Detailed findings live in report files — the orchestrator does not pull full content unless routing is ambiguous.
- **Escalation protocol** (applies to both research and synthesis reviews): After max 4 revision rounds without approval, escalate to the user. The orchestrator MUST wait for explicit direction: accept as-is (flagged in summary), provide manual guidance, or abandon the sub-task. Never silently proceed past an escalation.
- **Reviews must have a recognized verdict** (`approved` or `needs-revision`) as the first line. If missing or malformed, halt and investigate.

## Phase 2 — ELICIT

Before decomposing, conduct a requirements conversation with the user. No sub-agents — orchestrator + user only.

**Goal:** Surface and lock acceptance criteria, constraints, scope boundaries, and key design decisions that would be expensive to change mid-research.

1. Use AskUserQuestion iteratively (minimum 2 rounds) to probe unknowns. Focus on what Phase 1 didn't surface — don't re-confirm the task.
2. When stable, present an **elicitation summary** (acceptance criteria, constraints, scope, key decisions — omit empty categories) for user confirmation.
3. Transition to Phase 3. Pass the confirmed summary into the DECOMPOSE dispatch so it populates spec.md's AC and Context (key decisions) sections.

**Edge cases:**
- Clear requirements from Phase 1 → seed question can be confirmatory; 2-round minimum still applies.
- Task simpler than expected → offer to switch to inline-mode.
- User requests skip → warn, proceed, omit AC and Context from spec.md.

## Phase 3 — DECOMPOSE

1. **Sketch what the spec will need.** Use ELICIT's AC and decisions to identify which implementation areas matter. This sketch is disposable — it drives the research plan.

2. **Derive the research plan from unknowns.** Unknowns resolved during ELICIT don't need sub-tasks. For each area: *what don't I know that would make the spec wrong?* Those unknowns become decomposition.md sub-tasks.

3. Draft spec.md (Purpose, AC, Context with key decisions — no Tasks roster yet) and decomposition.md (research plan only).

4. Present both drafts for user confirmation. This confirms the research plan, not requirements (those were locked in ELICIT).

5. After confirmation, dispatch a sub-agent to write both files and create the `tasks/` directory. Include the elicitation summary so it can populate spec.md's AC and Context. Wait for completion before proceeding.

## Phase 4 — DISPATCH

For each research sub-task, spawn a sub-agent. Transfer the mental model — WHY this research matters and WHAT the spec needs — then let the sub-agent own the HOW. Treat sub-agents as senior peers, not subordinates.

Each dispatch prompt includes: the spec.md path (for grounding — Purpose, AC, Context), the sub-agent's output path (`<NN>_<description>.md`), and the read-only constraint. Inform each sub-agent its report will be reviewed.

**Parallelism:** Independent sub-tasks run in parallel. Dependent sub-tasks (where one requires another's findings as input) run sequentially. Partial scope overlap is not a dependency — only data-flow is.

Use `subagent_type: "Explore"` for codebase discovery, `"Plan"` for architectural analysis, `general-purpose` only when other tools are needed (e.g., WebSearch).

## Phase 5 — REVIEW

Every research report MUST be paired with a separate reviewer agent. The reviewer is a **skeptical auditor** — it finds gaps and inaccuracies, not helps.

**Review output:** Each reviewer writes `review_<NN>.md` with a verdict line (`approved` or `needs-revision`) followed by specific, actionable findings. Reviewers are read-only — they must not modify research reports.

**Revision loop:** On `needs-revision`, re-dispatch research with the review file as input. Subsequent reviews use letter suffixes (`review_<NN>b.md`, `review_<NN>c.md`, etc.). Max 4 rounds before escalation (see Invariants).

After each review passes, update the corresponding checkbox in decomposition.md.

## Phase 6 — SYNTHESIZE

**Pre-synthesis gate:** Verify all current research sub-tasks have paired reviews with `approved` verdicts. If any sub-task is incomplete, return to Phase 5. Orphaned reports (from scope changes) are excluded from synthesis.

**Synthesis:**

1. Dispatch a sub-agent to synthesize. Pass it: spec.md path (Purpose, AC, Context already populated), all approved research report paths, and `references/task-file-format.md` (so it reads the task file format directly). It produces:
   - **spec.md** — adds the Tasks roster with one-line descriptions and AC coverage brackets. Purpose, AC, and Context are already in place from DECOMPOSE.
   - **tasks/NN_name.md** — one file per task, conforming to the task file format reference.
   The sub-agent verifies that every AC appears in at least one task's roster brackets. It returns per-task one-line summaries.

2. Dispatch a reviewer to audit the synthesized spec. Pass it: spec.md path, task file paths, and `references/task-file-format.md` (so it can verify format conformance). Review focus:
   - **spec.md**: AC completeness (every AC in at least one task's brackets), roster accuracy, shared Context relevance.
   - **Task files (sampled)**: actionability of steps, self-containedness, format conformance.
   - **Cross-check**: task Dependencies are acyclic and logically ordered.
   Review file: `review_synthesis.md`. Revision files: `review_synthesis_b.md`, `review_synthesis_c.md`. Max 3 synthesis rounds before escalation (see Invariants).

## Phase 7 — REFLECT

After synthesis review passes, invoke `/reflect` via the Skill tool. **Mandatory** — do not skip.

Purpose: catch orchestrator-level mistakes (scope drift, dropped sub-tasks, bad routing). Present findings to the user; do not act until explicitly approved.

## Phase 8 — REFINE

Collaborative Q&A after self-critique. Ensure the spec reflects actual intent, not just what research surfaced.

1. Dispatch a general-purpose sub-agent to read spec.md and all task files in `tasks/`, then produce **3-5 pointed questions**. Each question must reference a specific task file and section (e.g., "In `tasks/02_migrate_schema.md`, step 3 assumes the column is nullable — is that correct?") and target: unstated assumptions, ambiguous scope, missing sequencing, or trade-offs the user hasn't weighed in on. Hollow or generic questions are prohibited — each must include enough context that the user can answer without reading the files.
2. Present questions to the user via AskUserQuestion.
3. Dispatch a general-purpose sub-agent to incorporate answers into the affected files — spec.md and/or specific task files. The sub-agent edits only the files that need changes, not all task files.
4. Repeat from step 1 until the user signals satisfaction. Cap at 3 rounds — flag remaining concerns and proceed.

**After the loop completes:**

5. Present the final summary:

```
### Specification Complete
- [sub-task 1]: [findings summary] — [reviewed | accepted-without-approval]

### Deliverable
- `openspec/changes/[change-name]/spec.md` — specification index
- `openspec/changes/[change-name]/tasks/` — [N] task files

### Flags
- [any concerns needing user attention — omit section if none]
```

6. Dispatch a sub-agent to fill in spec.md's Outcome section. Wait for completion. Archiving is manual (user-initiated).

# Failure Handling

- Sub-agent fails → retry once with adjusted instructions. Fails again → report to user with objective, error context, and suggested next step.

# Progress Updates

Wait for all agents in a dispatch round to complete before updating. One consolidated update, 1-2 lines per sub-task.

# Edge Cases

- **No argument provided:** Ask the user what to orchestrate.
- **Single trivial sub-task:** Offer to switch to inline-mode.
- **User changes mind mid-dispatch:** Halt dispatches, re-enter UNDERSTAND.
- **Mode switch requested:** Halt dispatches, return to SKILL.md Phase 1.5. Completed work persists.
- **Referenced skill file missing:** Proceed without skill-specific conventions.
- **Scope narrows after DECOMPOSE:** Offer inline-mode if mode gate no longer holds.
- **Scope change after decomposition.md written:** Update decomposition.md in place. Orphaned reports excluded from synthesis.
