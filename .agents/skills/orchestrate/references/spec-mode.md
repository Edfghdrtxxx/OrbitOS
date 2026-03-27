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

## Acceptance Criteria
- [AC 1]: [testable condition]

## Key Decisions
- [Decision 1]: [chosen option] — [rationale]

## Research Plan

- [ ] 1. [Research sub-task objective]
  - Input: [file paths, subsystems, constraints to investigate]
  - Output: [findings the report should contain]
  - Review focus: [what the reviewer should verify]
- [ ] 2. ...
- [x] 3. Completed sub-task (update in place as research passes review)
```

### Format rules

- **Purpose** grounds every sub-agent in the WHY. Keep it direct — no sub-sections.
- **Research Plan** uses checkboxes — the single source of truth for orchestration progress. Update in place as research passes review.

## The task.md format

```markdown
# [Change Name]

## Purpose
[2-4 sentences. What problem this solves and why it matters now.
This replaces the entire proposal document. Be direct -- no "Objective / Problem / Solution" sub-sections.]

## Acceptance Criteria
- [AC 1]: [testable condition]

## Context
[Optional. Include only information that would be lost between dispatch rounds:
file paths, data shapes, architectural constraints, physics parameters.
Skip this section entirely for straightforward work.]

## Tasks

- [ ] 1. First thing to do
  - Detail or command if needed
- [ ] 2. Second thing to do
- [x] 3. Completed task (update in place as work progresses)

## Outcome
[Filled in after completion. 2-3 sentences on what was actually done and any decisions made along the way.]
```

### Format rules

- **Tasks use checkboxes.** Each task should include enough context that an implementer can execute it without re-doing the research.
- **Outcome is written at the end**, not planned upfront.

## Lifecycle

1. **ELICIT** — Requirements conversation with the user. Lock acceptance criteria, constraints, scope, and key design decisions.
2. **DECOMPOSE** — Draft decomposition.md (research plan) and task.md skeleton (Purpose only).
3. **DISPATCH + REVIEW** — Sub-agents investigate per the research plan. Each report is reviewed. Passed sub-tasks are checked off in decomposition.md.
4. **SYNTHESIZE** — Compile approved findings into task.md. Review the synthesized spec. Iterate until clean.
5. **REFLECT** — Self-critique for orchestrator-level mistakes.
6. **REFINE** — Collaborative Q&A to confirm task.md reflects actual intent.

The decomposition.md is a coordination artifact. The task.md is the deliverable. If scope changes mid-research, update decomposition.md in place.

## Invariants

- **decomposition.md checkboxes are the single source of truth** for progress. If it's not checked off in the file, it didn't happen.
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
3. Transition to Phase 3. Pass the confirmed summary into the DECOMPOSE dispatch so it populates decomposition.md's AC and Key Decisions sections.

**Edge cases:**
- Clear requirements from Phase 1 → seed question can be confirmatory; 2-round minimum still applies.
- Task simpler than expected → offer to switch to inline-mode.
- User requests skip → warn, proceed, omit AC and Key Decisions from decomposition.md.

## Phase 3 — DECOMPOSE

1. **Sketch what task.md will need.** Use ELICIT's AC and decisions to identify which implementation areas matter. This sketch is disposable — it drives the research plan.

2. **Derive the research plan from unknowns.** Unknowns resolved during ELICIT don't need sub-tasks. For each area: *what don't I know that would make task.md wrong?* Those unknowns become decomposition.md sub-tasks.

3. Draft decomposition.md (Purpose, AC, Key Decisions, Research Plan) and a task.md skeleton (Purpose only — no other section headers yet).

4. Present both drafts for user confirmation. This confirms the research plan, not requirements (those were locked in ELICIT).

5. After confirmation, dispatch a sub-agent to write both files. Include the elicitation summary so it can populate AC and Key Decisions. Wait for completion before proceeding.

## Phase 4 — DISPATCH

For each research sub-task, spawn a sub-agent. Transfer the mental model — WHY this research matters and WHAT the spec needs — then let the sub-agent own the HOW. Treat sub-agents as senior peers, not subordinates.

Each dispatch prompt includes: the decomposition.md path, the sub-agent's output path (`<NN>_<description>.md`), and the read-only constraint. Inform each sub-agent its report will be reviewed.

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

1. Dispatch a sub-agent to synthesize. It carries AC from decomposition.md into task.md, populates the Tasks section from approved research, verifies Tasks satisfy all AC, and adds Context if needed. It returns per-sub-task one-line summaries.
2. Dispatch a reviewer to audit task.md against decomposition.md and all research reports. Review file: `review_synthesis.md`. Revision files: `review_synthesis_b.md`, `review_synthesis_c.md`. Max 3 synthesis rounds before escalation (see Invariants).

## Phase 7 — REFLECT

After synthesis review passes, invoke `/reflect` via the Skill tool. **Mandatory** — do not skip.

Purpose: catch orchestrator-level mistakes (scope drift, dropped sub-tasks, bad routing). Present findings to the user; do not act until explicitly approved.

## Phase 8 — REFINE

Collaborative Q&A after self-critique. Ensure task.md reflects actual intent, not just what research surfaced.

1. Dispatch a general-purpose sub-agent to read the completed task.md and produce **3-5 pointed questions**. Each question must reference a specific section or task and target: unstated assumptions, ambiguous scope, missing sequencing, or trade-offs the user hasn't weighed in on. Hollow or generic questions are prohibited — each must include enough context from task.md that the user can answer without reading the file.
2. Present questions to the user via AskUserQuestion.
3. Dispatch a general-purpose sub-agent to incorporate answers into task.md.
4. Repeat from step 1 until the user signals satisfaction. Cap at 3 rounds — flag remaining concerns and proceed.

**After the loop completes:**

5. Present the final summary:

```
### Specification Complete
- [sub-task 1]: [findings summary] — [reviewed | accepted-without-approval]

### Deliverable
- `openspec/changes/[change-name]/task.md` — ready for implementation

### Flags
- [any concerns needing user attention — omit section if none]
```

6. Dispatch a sub-agent to fill in task.md's Outcome section. Wait for completion. Archiving is manual (user-initiated).

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
