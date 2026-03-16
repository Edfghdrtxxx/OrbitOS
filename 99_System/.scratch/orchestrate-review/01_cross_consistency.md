# Orchestrate Skill — Cross-Consistency Audit

**Date:** 2026-03-16
**Files audited:**
- `.agents/skills/orchestrate/SKILL.md` (Phases 0, 1, 1.5; shared policy tables)
- `.agents/skills/orchestrate/references/spec-mode.md` (Phases 2-5 for spec mode)
- `.agents/skills/orchestrate/references/inline-mode.md` (Phases 2-5 for inline mode)

---

## 1. Duplicated Sections — Section-by-Section Comparison

### 1.1 Dispatch Philosophy (Phase 3)

**Files:** spec-mode.md (lines 84-88), inline-mode.md (lines 17-21)

**Status: CONSISTENT (identical)**

Both files contain the same core philosophy paragraph and self-check question:
> "Transfer the mental model — WHY this matters and WHAT success looks like — then let the sub-agent own the HOW entirely. Treat every sub-agent as a senior peer, not a subordinate."

No drift detected.

---

### 1.2 Parallelism Rules (Phase 3)

**Files:** spec-mode.md (lines 89-91), inline-mode.md (lines 42-44)

**Status: CONSISTENT (identical semantics)**

Both specify the same parallel/sequential dispatch rules. Inline-mode says "pass scratch file paths as input context" for dependent tasks, while spec-mode says "feed prior output as input context." This is an **intentional** difference — each mode references its own context-passing mechanism.

---

### 1.3 Isolation Rule (Phase 3)

**Files:** spec-mode.md (lines 93-95), inline-mode.md (lines 46-48)

**Status: CONSISTENT (intentional differences only)**

Both state the same principle (worktree for file mutations, no worktree for artifacts written to the shared directory). Each correctly references its own directory convention:
- Spec-mode: "reviewers write review files to the change directory"
- Inline-mode: "sub-agents that only write to the scratch directory... must NOT use worktree isolation"

The spec-mode exception is specifically about reviewers. The inline-mode exception is about any sub-agent writing only to scratch. This is an intentional structural difference — spec-mode's isolation exception is narrower (reviewer-only) while inline-mode's is broader (any scratch-only writer). This is correct given the different directory models.

---

### 1.4 Sub-agent Types (Phase 3)

**Files:** spec-mode.md (line 97), inline-mode.md (line 50)

**Status: CONSISTENT (identical)**

Both list the same three sub-agent types: Explore, Plan, general-purpose.

---

### 1.5 Review Rules (Phase 4)

**Files:** spec-mode.md (lines 105-123), inline-mode.md (lines 52-70)

**Status: MOSTLY CONSISTENT — one unintentional divergence found**

**Intentional differences:**
- Spec-mode says "Give it the implementer's report file path (`<NN>_<description>.md`) and any worktree path" (line 109).
- Inline-mode says "Give it the implementer's output files (both scratch files and final deliverables) and the files changed" (line 56).
  - This difference is intentional: in spec-mode the implementer's report IS the primary artifact for the reviewer; in inline-mode the scratch file may itself be the deliverable, so the reviewer gets both.

**Unintentional divergence #1 — reviewer write location phrasing:**
- Spec-mode (line 111): "The reviewer writes its review file to the shared change directory (`openspec/changes/[change-name]/`), not to the worktree."
- Inline-mode (line 58): "The reviewer writes its review file to the shared scratch directory, not to the worktree."
  - Both are correct for their respective modes. No issue.

**Hard rules, review file format, revision loop, max rounds:** All semantically identical across both files after accounting for directory-path substitutions (`openspec/changes/[change-name]/` vs. `99_System/.scratch/<session-id>/`). No drift.

---

### 1.6 Structural Gate (Phase 5)

**Files:** spec-mode.md (lines 129), inline-mode.md (line 74)

**Status: CONSISTENT (identical logic, different directory paths)**

Both require Glob-based verification that every implementer report has a matching review file. Wording is effectively identical modulo directory paths. Spec-mode says "implementer report (`<NN>_*.md`)" and inline-mode says "implementer output (`<NN>_*.md`)." The difference ("report" vs. "output") is minor but intentional — in inline-mode the scratch file may be the deliverable itself, not just a report.

---

### 1.7 Synthesize Template (Phase 5)

**Files:** spec-mode.md (lines 131-147), inline-mode.md (lines 76-96)

**Status: INTENTIONAL DIVERGENCE**

Inline-mode adds a `### Scratch Files` section to the synthesis template, listing the scratch directory for user cleanup. Spec-mode omits this (it instead has an "Outcome write-back" step to fill in task.md's Outcome section). Both are intentional and correct for their respective modes.

Spec-mode also includes the "Outcome write-back" paragraph (line 147) — dispatching a sub-agent to fill in the `## Outcome` section of task.md. Inline-mode has no equivalent because there is no task.md. **Intentional.**

---

### 1.8 Failure Handling

**Files:** spec-mode.md (lines 149-152), inline-mode.md (lines 98-101)

**Status: CONSISTENT (identical)**

Both are word-for-word identical:
> "If a sub-agent fails, retry once with adjusted instructions (e.g., narrower scope, more explicit paths). If it fails again, report the failure to the user with: original objective, error context, and a suggested next step."

---

### 1.9 Progress Updates

**Files:** spec-mode.md (lines 154-158), inline-mode.md (lines 103-107)

**Status: CONSISTENT (identical)**

Both are word-for-word identical:
> "Wait for all agents in a stage to complete before outputting..." / "When you do update, keep it brief: 1-2 lines per sub-task."

---

### 1.10 Edge Cases

**Files:** spec-mode.md (lines 160-167), inline-mode.md (lines 109-116)

**Status: MULTIPLE DIVERGENCES — mix of intentional and unintentional**

| Edge Case | spec-mode | inline-mode | Assessment |
|-----------|-----------|-------------|------------|
| No argument provided | "Ask the user what they'd like to orchestrate." | Identical | Consistent |
| Single trivial sub-task | "Inform the user that spec-mode overhead may be disproportionate for a single task, and offer to switch to inline-mode." | "Still dispatch via a sub-agent. The user explicitly chose orchestrator mode — respect that choice." | **Intentional** — spec-mode rightly questions its own overhead; inline-mode is lightweight enough that a single task is fine |
| User changes mind | Identical | Identical | Consistent |
| Mode switch requested | "If the user asks to switch to inline-mode..." | "If the user asks to switch to spec-mode..." | **Intentional** — each mode describes switching to the other |
| Referenced skill file doesn't exist | Identical | Identical | Consistent |
| Scope change after DECOMPOSE | "Scope **narrows** after DECOMPOSE reveals the true complexity... offer to switch to **inline-mode**" | "Scope **expands** after DECOMPOSE reveals greater complexity... offer to switch to **spec-mode**" | **Intentional** — each mode handles the case where decomposition reveals the work belongs in the other mode |

All edge case differences are intentional and correctly mirror each other.

---

## 2. Forward References to SKILL.md

### 2.1 "Tiered access priority from SKILL.md"

**Referenced in:** spec-mode.md (line 66), inline-mode.md (line 35)
**Target in SKILL.md:** Lines 33-39 (the "Session working directory" table with Priority 1/2/3)

**Status: ACCURATE**

Both mode files reference "the tiered access priority from SKILL.md" and then repeat the three tiers (Glob first, Read targeted, Read full content). The content in the mode files is consistent with SKILL.md's table. The mode files expand the tiers with mode-specific directory paths, which is correct.

**Minor observation:** Both mode files essentially duplicate the tiered access table rather than simply deferring to SKILL.md. This creates a maintenance risk — if SKILL.md's table changes, the mode files' copies could drift. However, the mode-specific directory paths in each copy justify the duplication. Currently, all three copies are consistent.

### 2.2 "Return to SKILL.md Phase 1.5"

**Referenced in:** spec-mode.md (line 165), inline-mode.md (line 114)
**Target in SKILL.md:** Lines 61-78 (Phase 1.5 — MODE SELECT)

**Status: ACCURATE**

Phase 1.5 exists in SKILL.md and contains the mode selection logic. The forward reference is valid.

### 2.3 "Read `evolution.md` in this skill's folder"

**Referenced in:** SKILL.md (line 7)
**Target:** `.agents/skills/orchestrate/evolution.md`

**Status: ACCURATE** — file exists (confirmed via Glob).

---

## 3. Structural / Protocol-Level Issues

### 3.1 ISSUE: No Explicit Iteration Enforcement on "needs-revision"

**Severity: HIGH**
**Affected files:** spec-mode.md (lines 120-123), inline-mode.md (lines 67-70)
**Confidence: HIGH**

Both mode files describe the revision loop procedure (dispatch new implementer, then new reviewer, max 4 rounds), but the language is **descriptive, not imperative**. The protocol says:

> "If the reviewer returns needs-revision, dispatch a new implementer..."

This reads as guidance ("here is how revisions work") rather than as a hard mandate ("you MUST dispatch a new implementer"). Compare with the review pairing rule, which uses imperative language: "Every implementer agent MUST be paired with a separate reviewer agent."

**The risk:** An orchestrator could interpret a "needs-revision" verdict, acknowledge it, and proceed to the next sub-task or to synthesis without actually dispatching the revision. Nothing in the protocol explicitly blocks this.

**Recommended resolution:**
1. Elevate the revision loop to a hard rule. Change "If the reviewer returns needs-revision, dispatch a new implementer..." to something like: "**If the reviewer returns needs-revision, the orchestrator MUST dispatch a revision implementer before the sub-task can be considered complete.** The orchestrator MUST NOT proceed to the next sub-task or to SYNTHESIZE until the sub-task receives an `approved` verdict (or hits the 4-round escalation limit)."
2. Add this as a hard rule in Phase 4's "Hard rules" section, alongside the existing reviewer constraints.
3. Apply the same change to both mode files to keep them in sync.

---

### 3.2 ISSUE: DECOMPOSE Phase Does Not Require Planning Review/Iteration Structure

**Severity: MEDIUM**
**Affected files:** spec-mode.md (lines 71-79), inline-mode.md (lines 6-12)
**Confidence: HIGH**

Both mode files define the DECOMPOSE phase as breaking work into sub-tasks with objective, input context, and output format. Neither requires the decomposition to explicitly plan:
- Which sub-tasks will have review gates (answer: all of them per Phase 4, but this isn't called out during planning)
- What the iteration/revision strategy is for each sub-task
- Dependencies between sub-tasks that affect review ordering

This means the orchestrator decomposes tasks without considering the review topology. In practice, this can lead to decompositions where:
- Sub-tasks are structured in a way that makes review difficult (e.g., a single sub-task that touches too many files for a reviewer to meaningfully audit)
- The orchestrator doesn't plan for revision time/rounds, leading to underestimation of the dispatch plan

**Recommended resolution:**
Add a requirement to Phase 2 (DECOMPOSE) in both mode files:
> "Each sub-task should be scoped so that it is independently reviewable. If a sub-task spans too many files or subsystems for a single reviewer to audit effectively, split it further. The decomposition should account for the fact that every sub-task will go through review (and potentially revision) before proceeding."

This connects the DECOMPOSE phase to the REVIEW phase structurally, rather than leaving them as independent protocol stages.

---

### 3.3 ISSUE: Spec-mode Checkpoint Update Has No Inline-mode Equivalent (Intentional, But Worth Noting)

**Severity: LOW (informational)**
**Affected files:** spec-mode.md (line 125)
**Confidence: HIGH**

Spec-mode has a "Checkpoint update" step after each review passes:
> "After each review passes, dispatch a sub-agent to mark the corresponding checkbox in task.md as [x]."

Inline-mode has no equivalent because there is no task.md. This is **intentional** — inline-mode is explicitly "no persistent state file." However, this means inline-mode has no mechanism to track which sub-tasks have been reviewed and approved vs. which are still pending, beyond the orchestrator's own memory of sub-agent return values.

For long inline-mode sessions with many sub-tasks, this could become a reliability concern — the orchestrator might lose track of which sub-tasks have passed review, especially if context window pressure causes earlier dispatch results to be compressed.

**Recommended resolution:** No action strictly required (this is by design). However, consider whether inline-mode should at least track completion state in a lightweight way (e.g., the orchestrator maintains a mental checklist, or writes a brief status file to the scratch directory). This is a design question, not a bug.

---

### 3.4 ISSUE: Structural Gate Does Not Verify Review Verdict

**Severity: MEDIUM**
**Affected files:** spec-mode.md (line 129), inline-mode.md (line 74)
**Confidence: HIGH**

The structural gate in both files verifies that every implementer report has a corresponding review file. However, it does NOT verify that the review verdict is `approved`. A review file could exist with a `needs-revision` verdict, and the structural gate would pass.

This is partially mitigated by Issue 3.1 (the revision loop should ensure that only `approved` sub-tasks reach synthesis), but since that loop itself lacks hard enforcement, the structural gate is the last line of defense — and it doesn't check verdicts.

**Recommended resolution:**
Strengthen the structural gate: after confirming file existence via Glob, read each `review_<NN>.md` (using the tiered access priority — this is a legitimate "targeted read" case) and verify the verdict line is `approved`. If any review has a `needs-revision` verdict, halt and investigate.

---

### 3.5 ISSUE: "Output convention" Naming Collision Between Implementer Reports and Review Files

**Severity: LOW**
**Affected files:** spec-mode.md, inline-mode.md
**Confidence: MEDIUM**

Both modes use `<NN>_<description>.md` for implementer output and `review_<NN>.md` for reviews. The structural gate's Glob pattern `<NN>_*.md` would match implementer files. However, if a sub-task description happened to start with "review" (e.g., `03_review_auth_module.md`), the Glob pattern could create confusion with `review_03.md`. This is unlikely but worth noting.

**Recommended resolution:** No immediate action needed. The `review_` prefix convention is distinct enough from the `<NN>_` prefix. Just ensure documentation doesn't use task descriptions starting with "review_" as examples.

---

### 3.6 ISSUE: Spec-mode Output Convention — Report Location for Worktree Implementers

**Severity: LOW**
**Affected files:** spec-mode.md (lines 99-101)
**Confidence: HIGH**

Spec-mode says:
> "When the implementer runs in a worktree, it writes the report to the shared change directory (not the worktree) so the orchestrator and reviewer can read it directly."

This is correct and clear. Inline-mode has the equivalent (line 31):
> "the scratch file is a report capturing what was changed... The implementer writes this report to the shared scratch directory, not the worktree."

Both are consistent on this point.

---

## 4. Summary of Findings

| # | Issue | Severity | Type | Files Affected |
|---|-------|----------|------|----------------|
| 3.1 | No hard enforcement of revision loop on "needs-revision" | HIGH | Protocol gap | spec-mode.md, inline-mode.md |
| 3.2 | DECOMPOSE does not require planning review/iteration structure | MEDIUM | Protocol gap | spec-mode.md, inline-mode.md |
| 3.4 | Structural gate checks file existence but not review verdict | MEDIUM | Protocol gap | spec-mode.md, inline-mode.md |
| 3.3 | Inline-mode has no progress tracking mechanism (by design) | LOW | Design observation | inline-mode.md |
| 3.5 | Theoretical naming collision between implementer/review files | LOW | Minor risk | spec-mode.md, inline-mode.md |

**Cross-file consistency verdict:** The duplicated sections (dispatch philosophy, review rules, structural gate, failure handling, progress updates) are well-synchronized. No unintentional semantic drift was found in the shared sections. All differences between the mode files are intentional and correspond to the structural differences between spec-mode (persistent task.md, openspec directory) and inline-mode (ephemeral scratch directory, no persistent state).

**Forward reference verdict:** All forward references from mode files to SKILL.md are accurate. The referenced content (tiered access table, Phase 1.5 mode select, evolution.md file) exists and matches expectations.

**Primary concern:** The protocol's weakest point is the revision enforcement chain: the revision loop (3.1) is descriptive rather than imperative, the structural gate (3.4) doesn't verify verdicts, and the DECOMPOSE phase (3.2) doesn't plan for reviewability. Together, these create a path where a "needs-revision" verdict could be acknowledged but not acted upon, and the structural gate would not catch it.
