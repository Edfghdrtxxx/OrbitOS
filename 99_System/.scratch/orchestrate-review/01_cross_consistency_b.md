# Orchestrate Skill — Cross-Consistency Audit (Revision B)

**Date:** 2026-03-16
**Files audited:**
- `.agents/skills/orchestrate/SKILL.md` (Phases 0, 1, 1.5; shared policy tables)
- `.agents/skills/orchestrate/references/spec-mode.md` (Phases 2-5 for spec mode)
- `.agents/skills/orchestrate/references/inline-mode.md` (Phases 2-5 for inline mode)

**Revision notes:** Revision B addresses reviewer feedback from `review_01.md`. Changes from the original audit are marked with **(Rev B)** annotations. A change log appears at the end.

---

## 1. Duplicated Sections — Section-by-Section Comparison

### 1.1 Dispatch Philosophy (Phase 3)

**Files:** spec-mode.md (lines 85-87), inline-mode.md (lines 17-20)

**Status: CONSISTENT (identical)**

Both files contain the same core philosophy paragraph and self-check question:
> "Transfer the mental model — WHY this matters and WHAT success looks like — then let the sub-agent own the HOW entirely. Treat every sub-agent as a senior peer, not a subordinate."

No drift detected.

---

### 1.2 Parallelism Rules (Phase 3)

**Files:** spec-mode.md (lines 89-91), inline-mode.md (lines 42-44)

**Status: CONSISTENT (intentional differences only)**

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

**Status: CONSISTENT (intentional differences only)** **(Rev B: header corrected from "MOSTLY CONSISTENT — one unintentional divergence found")**

**Intentional differences:**

1. **Reviewer input description:**
   - Spec-mode (line 109): "Give it the implementer's report file path (`<NN>_<description>.md`) and any worktree path"
   - Inline-mode (line 56): "Give it the implementer's output files (both scratch files and final deliverables) and the files changed"
   - This difference is intentional: in spec-mode the implementer's report IS the primary artifact for the reviewer; in inline-mode the scratch file may itself be the deliverable, so the reviewer gets both.

2. **Reviewer write location:**
   - Spec-mode (line 111): "The reviewer writes its review file to the shared change directory (`openspec/changes/[change-name]/`), not to the worktree."
   - Inline-mode (line 58): "The reviewer writes its review file to the shared scratch directory, not to the worktree."
   - Both are correct for their respective modes. Intentional directory-path substitution.

3. **(Rev B) Hard rules — reviewer modification prohibition scope:**
   - Spec-mode (line 114): "they MUST NOT modify deliverables or any files written by implementers"
   - Inline-mode (line 61): "they MUST NOT modify deliverables, **scratch content**, or any files written by implementers"
   - Inline-mode explicitly adds "scratch content" as a prohibited modification target. This is **intentional** — in inline-mode, scratch files serve dual duty as both intermediate outputs and potential final deliverables (see inline-mode line 30: "the scratch file IS the deliverable"), so they need explicit protection against reviewer modification. Spec-mode does not need this because implementer reports in the change directory are already covered by "any files written by implementers."
   - **Assessment:** Intentional and correctly reflects the different file models. However, this difference should be documented rather than left implicit, because a future maintainer synchronizing the hard rules across modes could inadvertently drop the "scratch content" clause from inline-mode, weakening its protections.

4. **(Rev B) Worktree access — example prompt:**
   - Spec-mode (line 111) provides a concrete dispatch prompt example: `"The implementer's changes are at /tmp/worktree-abc123/ — read files from that path to review them. The implementer's report is at openspec/changes/[change-name]/01_refactor_auth.md."`
   - Inline-mode (line 58) states the rule abstractly without an example prompt.
   - **Assessment:** Likely intentional — spec-mode is generally more verbose throughout. However, adding a parallel example to inline-mode would improve consistency and reduce the chance of a future maintainer adding an example with incorrect directory paths.

**Review file format, revision loop, max rounds:** All semantically identical across both files after accounting for directory-path substitutions. No drift.

---

### 1.6 Structural Gate (Phase 5)

**Files:** spec-mode.md (line 129), inline-mode.md (line 74)

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

**Status: MULTIPLE DIVERGENCES — all intentional, one with a protocol gap** **(Rev B: added F6 note on mode-switch state migration)**

| Edge Case | spec-mode | inline-mode | Assessment |
|-----------|-----------|-------------|------------|
| No argument provided | "Ask the user what they'd like to orchestrate." | Identical | Consistent |
| Single trivial sub-task | "Inform the user that spec-mode overhead may be disproportionate for a single task, and offer to switch to inline-mode." | "Still dispatch via a sub-agent. The user explicitly chose orchestrator mode — respect that choice." | **Intentional** — spec-mode rightly questions its own overhead; inline-mode is lightweight enough that a single task is fine |
| User changes mind | Identical | Identical | Consistent |
| Mode switch requested | "If the user asks to switch to inline-mode..." Completed sub-tasks already reflected as `[x]` in task.md. | "If the user asks to switch to spec-mode..." No mention of scratch directory state. | **Intentional mirror, but inline-mode has a gap** (see 1.10.1 below) |
| Referenced skill file doesn't exist | Identical | Identical | Consistent |
| Scope change after DECOMPOSE | "Scope **narrows** after DECOMPOSE reveals the true complexity... offer to switch to **inline-mode**" | "Scope **expands** after DECOMPOSE reveals greater complexity... offer to switch to **spec-mode**" | **Intentional** — each mode handles the case where decomposition reveals the work belongs in the other mode |

#### 1.10.1 (Rev B) Mode Switch: Inline-mode Does Not Address Scratch Directory State

Spec-mode's mode-switch edge case (line 165) explicitly addresses state persistence: "Completed sub-tasks should already be reflected as `[x]` items in task.md — the file persists regardless of mode switch."

Inline-mode's mode-switch edge case (line 114) says only "halt outstanding dispatches and return to SKILL.md Phase 1.5 to re-select the mode." It does not address what happens to the scratch directory (`99_System/.scratch/<session-id>/`). Specifically:
- Should the scratch directory be abandoned?
- Should its contents be migrated into the new spec-mode change directory?
- Should the new task.md reference it as context?

**Assessment:** This is a protocol gap rather than cross-file inconsistency. The spec-mode side handles the transition gracefully because task.md is persistent by design. The inline-mode side has no guidance for preserving or transferring work done before the mode switch.

**Severity: LOW** — mode switches mid-execution are an edge case, and the orchestrator would likely ask the user for guidance. But the asymmetry between spec-mode's explicit state-persistence note and inline-mode's silence is worth documenting.

---

### 1.11 (Rev B) DECOMPOSE Phase — Cross-mode Comparison

**Files:** spec-mode.md (lines 71-79), inline-mode.md (lines 5-12)

**Status: CROSS-FILE DRIFT — spec-mode lacks scope-adjustment step**

Both modes share the same step 1 (break task into sub-tasks with objective, input context, output format). However, they diverge on user confirmation and scope adjustment:

**Spec-mode DECOMPOSE:**
1. Break into sub-tasks (step 1)
2. Draft as task.md Purpose + Tasks sections (step 2)
3. Present to user for confirmation (step 3)
4. After confirmation, dispatch sub-agent to write task.md (step 4)

**Inline-mode DECOMPOSE:**
1. Break into sub-tasks (step 1)
2. Present as numbered list, wait for confirmation (step 2)
3. **If the user adjusts scope, update the list and re-confirm** (step 3)

Inline-mode step 3 explicitly handles user scope adjustment during confirmation. Spec-mode has no equivalent — after confirmation (step 3), it proceeds directly to writing task.md (step 4). This means spec-mode has no explicit protocol for the case where the user says "yes, but change sub-task 3 and drop sub-task 5."

**Assessment:** This is likely **unintentional drift** rather than an intentional design choice. There is no structural reason spec-mode should not handle scope adjustments during confirmation. The omission is particularly notable because spec-mode's task.md format ("The task.md is a coordination artifact, not a contract. If scope changes mid-execution, update it in place rather than creating a new document" — spec-mode line 60) explicitly anticipates scope changes, but only during execution, not during the DECOMPOSE confirmation step.

**Recommended resolution:** Add a scope-adjustment step to spec-mode DECOMPOSE between steps 3 and 4:
> "3b. If the user adjusts scope, update the drafted task.md content and re-present for confirmation."

**Severity: MEDIUM** — this is genuine cross-file drift in a protocol step. The gap is recoverable in practice (the orchestrator would likely handle scope adjustments naturally), but the asymmetry creates a maintenance risk and reduces protocol clarity.

---

## 2. Forward References

### 2.1 Mode files -> SKILL.md: Tiered Access Priority

**Referenced in:** spec-mode.md (line 66), inline-mode.md (line 35)
**Target in SKILL.md:** Lines 33-39 (the "Session working directory" table with Priority 1/2/3)

**Status: ACCURATE**

Both mode files reference "the tiered access priority from SKILL.md" and then repeat the three tiers (Glob first, Read targeted, Read full content). The content in the mode files is consistent with SKILL.md's table. The mode files expand the tiers with mode-specific directory paths, which is correct.

**Minor observation:** Both mode files essentially duplicate the tiered access table rather than simply deferring to SKILL.md. This creates a maintenance risk — if SKILL.md's table changes, the mode files' copies could drift. However, the mode-specific directory paths in each copy justify the duplication. Currently, all three copies are consistent.

### 2.2 Mode files -> SKILL.md: Phase 1.5 Mode Select

**Referenced in:** spec-mode.md (line 165), inline-mode.md (line 114)
**Target in SKILL.md:** Lines 61-78 (Phase 1.5 — MODE SELECT)

**Status: ACCURATE**

Phase 1.5 exists in SKILL.md and contains the mode selection logic. The forward reference is valid.

### 2.3 SKILL.md -> evolution.md

**Referenced in:** SKILL.md (line 7)
**Target:** `.agents/skills/orchestrate/evolution.md`

**Status: ACCURATE** — file exists (confirmed via Glob).

### 2.4 (Rev B) SKILL.md -> Mode files: Skill Tool Capability

**Referenced in:** SKILL.md (line 27)
**Consumed by:** spec-mode.md, inline-mode.md

**Status: FORWARD REFERENCE GAP — capability declared but never operationalized**

SKILL.md's permitted tools table (line 27) lists the `Skill` tool: "invoke skills directly when delegation overhead is unnecessary." However, neither spec-mode.md nor inline-mode.md ever mentions when or how the orchestrator should use the `Skill` tool vs. the `Agent` tool for dispatch. The DISPATCH phase in both modes exclusively discusses `Agent`-based sub-agent spawning.

This creates ambiguity: under what circumstances should the orchestrator use `Skill` directly? The permitted tools table grants the capability, but no mode protocol provides guidance on exercising it. The original audit checked forward references FROM mode files TO SKILL.md but not the reverse direction — capabilities declared in SKILL.md that the mode files should consume but don't.

**Assessment:** The `Skill` tool is likely intended for cases where the orchestrator needs to invoke a well-defined single-skill workflow (e.g., `/start-my-day`) as a sub-step without the overhead of spawning a full sub-agent. But this use case is not documented in either mode file's DISPATCH phase, leaving the decision entirely to the orchestrator's judgment.

**Recommended resolution:** Add a brief note to the DISPATCH phase (in both mode files or in SKILL.md's permitted tools section) clarifying when `Skill` is preferred over `Agent`. For example:
> "Use the `Skill` tool (instead of `Agent`) when a sub-task maps directly to an existing skill and does not require custom instructions, review, or worktree isolation. The skill handles its own workflow — no implementer/reviewer pairing is needed."

**Severity: MEDIUM** — this is a functional gap in the protocol. The capability exists but the conditions for using it are undefined, which could lead to inconsistent orchestrator behavior.

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

**Recommended resolution (Rev B: expanded to address the compound enforcement chain):**

Issues 3.1 and 3.4 form a compound enforcement mechanism and should be addressed together as a single fix:

1. **Imperative language in the revision loop (3.1):** Change "If the reviewer returns needs-revision, dispatch a new implementer..." to: "**If the reviewer returns needs-revision, the orchestrator MUST dispatch a revision implementer before the sub-task can be considered complete.** The orchestrator MUST NOT proceed to the next sub-task or to SYNTHESIZE until the sub-task receives an `approved` verdict (or hits the 4-round escalation limit)."
2. **Verdict checking in the structural gate (3.4):** The structural gate is the enforcement backstop. Even with imperative language in the revision loop, the structural gate should verify verdicts as a safety net. See issue 3.4 for the specific mechanism.
3. **Post-escalation behavior (3.1a):** The 4-round limit creates an escape hatch — see issue 3.1a below.
4. Add the imperative revision rule to Phase 4's "Hard rules" section in both mode files.
5. Apply the same changes to both mode files to keep them in sync.

---

### 3.1a (Rev B) ISSUE: Post-Escalation Behavior Undefined

**Severity: MEDIUM-HIGH**
**Affected files:** spec-mode.md (line 123), inline-mode.md (line 70)
**Confidence: HIGH**

Both mode files define the 4-round escalation limit:
> "Max 4 revision rounds per sub-task. If still unresolved, escalate to the user with full context (original objective, implementer output paths, review file paths)."

After escalation, the protocol is silent. Specifically:
- Can the orchestrator proceed to SYNTHESIZE with a sub-task that never received an `approved` verdict?
- Should the orchestrator wait for the user to provide a resolution (e.g., "accept as-is," "skip this sub-task," "try a different approach")?
- If the user says "proceed anyway," should the SYNTHESIZE summary flag the sub-task as un-approved?

This gap directly undermines the iteration enforcement the user cares about. The 4-round limit is the right safety valve (preventing infinite loops), but without defined post-escalation behavior, it becomes an escape hatch that silently bypasses the `approved` verdict requirement. An orchestrator hitting the limit could escalate, receive a vague "ok proceed" from the user, and move to SYNTHESIZE with an un-reviewed sub-task — which the structural gate (if it only checks file existence, not verdict content) would not catch.

**Recommended resolution:**

Add a post-escalation protocol to both mode files, immediately after the 4-round limit:
> "After escalation, the orchestrator MUST wait for explicit user direction before proceeding. The user may:
> - **Accept as-is:** Proceed, but flag the sub-task as `accepted-without-approval` in the synthesis summary.
> - **Provide manual guidance:** The orchestrator dispatches a new implementer with the user's specific instructions (this does NOT reset the round counter — it is a user-directed override).
> - **Abandon the sub-task:** Remove it from the task list / decomposition. The synthesis summary notes the abandonment.
>
> The orchestrator MUST NOT silently proceed past an escalation."

This closes the loop between the revision enforcement (3.1) and the structural gate (3.4) by ensuring that every sub-task reaching SYNTHESIZE either has an `approved` verdict, an explicit user override, or has been abandoned.

---

### 3.2 ISSUE: DECOMPOSE Phase Does Not Require Planning for Reviewability

**Severity: LOW** **(Rev B: downgraded from MEDIUM; reclassified as design observation)**
**Affected files:** spec-mode.md (lines 71-79), inline-mode.md (lines 6-12)
**Confidence: HIGH**

Both mode files define the DECOMPOSE phase as breaking work into sub-tasks with objective, input context, and output format. Neither requires the decomposition to account for the fact that every sub-task will undergo review (and potentially revision).

The Phase 4 protocol already universally requires review pairing ("Every implementer agent MUST be paired with a separate reviewer agent"), so DECOMPOSE does not need to re-plan what Phase 4 already mandates. The valid sub-concern is about **reviewability-aware scoping** — sub-tasks could be structured in a way that makes review difficult (e.g., a single sub-task that touches too many files for a reviewer to meaningfully audit).

**(Rev B)** This is a design enhancement rather than a cross-consistency issue or protocol gap. The DECOMPOSE phase is about task scoping, not review topology. Phase 4's universal mandate is sufficient to ensure review happens; the question of whether sub-tasks are *well-scoped for review* is an optimization concern.

**Recommended resolution:** Consider adding a lightweight note to Phase 2 in both mode files:
> "Each sub-task should be scoped so that it is independently reviewable. If a sub-task spans too many files or subsystems for a single reviewer to audit effectively, consider splitting it further."

This connects DECOMPOSE to REVIEW without duplicating Phase 4's mandate. It is a design improvement, not a bug fix.

---

### 3.3 ISSUE: Spec-mode Checkpoint Update Has No Inline-mode Equivalent (Intentional, But Worth Noting)

**Severity: LOW (informational)**
**Affected files:** spec-mode.md (line 125)
**Confidence: HIGH**

Spec-mode has a "Checkpoint update" step after each review passes:
> "After each review passes, dispatch a sub-agent to mark the corresponding checkbox in task.md as [x]."

Inline-mode has no equivalent because there is no task.md. This is **intentional** — inline-mode is explicitly "no persistent state file." However, this means inline-mode has no mechanism to track which sub-tasks have been reviewed and approved vs. which are still pending, beyond the orchestrator's own memory of sub-agent return values.

For long inline-mode sessions with many sub-tasks, this could become a reliability concern — the orchestrator might lose track of which sub-tasks have passed review, especially if context window pressure causes earlier dispatch results to be compressed.

**Recommended resolution:** No action strictly required (this is by design). However, consider whether inline-mode should at least track completion state in a lightweight way (e.g., the orchestrator writes a brief status line to a tracking file in the scratch directory). This is a design question, not a bug.

---

### 3.4 ISSUE: Structural Gate Does Not Verify Review Verdict

**Severity: MEDIUM**
**Affected files:** spec-mode.md (line 129), inline-mode.md (line 74)
**Confidence: HIGH**

The structural gate in both files verifies that every implementer report has a corresponding review file. However, it does NOT verify that the review verdict is `approved`. A review file could exist with a `needs-revision` verdict, and the structural gate would pass.

This is the enforcement backstop for issue 3.1. Even with imperative language in the revision loop, the structural gate is the last checkpoint before SYNTHESIZE. Without verdict verification, the entire iteration enforcement chain (3.1 -> 3.1a -> 3.4) has no structural failsafe.

**Recommended resolution:**
Strengthen the structural gate in both mode files. After confirming file existence via Glob, add a verdict-checking step:
> "After confirming pairing via Glob, read each `review_<NN>.md` (or the latest revision review `review_<NN>[b-z].md`) and verify the verdict line is `approved`. If any review has a `needs-revision` verdict, halt and investigate before proceeding. If any sub-task was accepted via user escalation override (see 3.1a), verify the override was explicitly granted."

This ties together with 3.1 (imperative revision language) and 3.1a (post-escalation behavior) to form a complete enforcement chain:
1. Revision loop language mandates re-dispatch on `needs-revision` (3.1)
2. Post-escalation protocol defines what happens when revision exhausts (3.1a)
3. Structural gate verifies verdicts before SYNTHESIZE (3.4)

---

## 4. Summary of Findings

| # | Issue | Severity | Type | Files Affected | Rev B Status |
|---|-------|----------|------|----------------|--------------|
| 1.5.3 | Reviewer hard rules: inline-mode adds "scratch content" to prohibition | — | Cross-file difference (intentional) | spec-mode.md, inline-mode.md | **NEW** |
| 1.5.4 | Worktree access: spec-mode has example prompt, inline-mode does not | — | Cross-file difference (intentional) | spec-mode.md, inline-mode.md | **NEW** |
| 1.10.1 | Mode switch: inline-mode does not address scratch directory state | LOW | Protocol gap (edge case) | inline-mode.md | **NEW** |
| 1.11 | DECOMPOSE: spec-mode lacks scope-adjustment step (inline-mode step 3) | MEDIUM | Cross-file drift (likely unintentional) | spec-mode.md | **NEW** |
| 2.4 | Skill tool declared in SKILL.md but never operationalized in mode files | MEDIUM | Forward reference gap | SKILL.md, spec-mode.md, inline-mode.md | **NEW** |
| 3.1 | No hard enforcement of revision loop on "needs-revision" | HIGH | Protocol gap | spec-mode.md, inline-mode.md | Retained; recommendation expanded to compound fix with 3.4 |
| 3.1a | Post-escalation behavior undefined after 4-round limit | MEDIUM-HIGH | Protocol gap | spec-mode.md, inline-mode.md | **NEW** |
| 3.2 | DECOMPOSE does not require planning for reviewability | LOW | Design observation | spec-mode.md, inline-mode.md | Retained; downgraded from MEDIUM, reclassified |
| 3.3 | Inline-mode has no progress tracking mechanism (by design) | LOW | Design observation | inline-mode.md | Retained |
| 3.4 | Structural gate checks file existence but not review verdict | MEDIUM | Protocol gap | spec-mode.md, inline-mode.md | Retained; recommendation expanded to link with 3.1 + 3.1a |

**(Rev B) Removed:** Issue 3.5 (naming collision between implementer/review file patterns) from the original audit. The `review_` prefix and `<NN>_` prefix patterns are structurally disjoint — `03_review_auth_module.md` matches `03_*.md`, not `review_03.md`. The risk is not merely "unlikely" but structurally impossible given the naming conventions. Including it added noise without value.

---

## 5. Iteration Enforcement — Compound Analysis

**(Rev B: new section consolidating the iteration enforcement chain)**

The user's primary concern is that when quality is insufficient, the skill must explicitly require re-dispatch, and DECOMPOSE should plan for review/iteration. The following findings form a chain that addresses this concern:

```
DECOMPOSE (3.2)          Revision Loop (3.1)        Escalation (3.1a)         Structural Gate (3.4)
"plan for reviewability"  "MUST re-dispatch"          "MUST wait for user"       "verify verdict"
      │                        │                           │                         │
      └─ design enhancement    └─ imperative language      └─ post-escalation        └─ enforcement
         (LOW)                    (HIGH)                      protocol                   backstop
                                                              (MEDIUM-HIGH)              (MEDIUM)
```

**Current state:** The revision loop (3.1) is the critical weak point — it uses descriptive language where imperative language is needed. The structural gate (3.4) is the natural enforcement point but currently only checks file existence. The post-escalation gap (3.1a) means the 4-round limit is an uncontrolled escape hatch.

**Recommended fix order:**
1. Fix 3.1 (imperative revision language) — highest impact, closes the primary gap
2. Fix 3.1a (post-escalation protocol) — closes the escape hatch
3. Fix 3.4 (verdict verification in structural gate) — adds a structural backstop
4. Consider 3.2 (reviewability-aware scoping in DECOMPOSE) — design enhancement, lowest priority

Fixing 3.1 alone would address the most likely failure mode (orchestrator skipping a revision). Fixing 3.1 + 3.4 together provides defense in depth. Fixing all four closes every identified gap in the iteration enforcement chain.

---

## 6. Cross-File Consistency Verdict

**Duplicated sections:** The shared sections (dispatch philosophy, parallelism rules, isolation rules, sub-agent types, review file format, revision loop, failure handling, progress updates) are well-synchronized. Two previously undetected differences exist in the review hard rules (section 1.5.3: "scratch content" clause, section 1.5.4: example prompt) — both are intentional and correctly reflect the different file models.

**DECOMPOSE phase:** Cross-file drift detected (section 1.11). Inline-mode has a scope-adjustment step that spec-mode lacks. This is likely unintentional and should be fixed.

**Forward references:** All references FROM mode files TO SKILL.md are accurate. One reverse reference gap detected (section 2.4): the Skill tool is declared in SKILL.md but never operationalized in either mode file.

**Edge cases:** All differences are intentional mirrors. One gap detected in inline-mode's mode-switch handling (section 1.10.1) — scratch directory state is not addressed.

**Primary concern (iteration enforcement):** The protocol's weakest point remains the revision enforcement chain. Three findings (3.1, 3.1a, 3.4) identify gaps that together create a path where a "needs-revision" verdict could be acknowledged but not acted upon, the 4-round limit could be used as an uncontrolled escape hatch, and the structural gate would not catch either failure. See section 5 for the compound analysis and recommended fix order.

---

## Appendix: Revision B Change Log

| Change | Source | What changed |
|--------|--------|--------------|
| Section 1.5 header corrected | Reviewer F1 | Changed from "MOSTLY CONSISTENT — one unintentional divergence found" to "CONSISTENT (intentional differences only)." The item previously labeled "unintentional divergence #1" was itself assessed as "no issue," contradicting the header. |
| Section 1.5.3 added | Reviewer F2 | Reviewer hard rules differ: inline-mode adds "scratch content" to the modification prohibition. Classified as intentional. |
| Section 1.5.4 added | Reviewer F3 | Spec-mode worktree access includes example prompt; inline-mode does not. Classified as intentional (consistency note). |
| Section 1.10.1 added | Reviewer F6 | Inline-mode mode-switch edge case does not address scratch directory state migration. |
| Section 1.11 added | Reviewer F4 | Inline-mode DECOMPOSE has scope-adjustment step (step 3); spec-mode does not. Classified as likely unintentional drift. MEDIUM severity. |
| Section 2.4 added | Reviewer F5 | Skill tool declared in SKILL.md's permitted tools but never referenced in mode files' DISPATCH phases. |
| Issue 3.1 recommendation expanded | Reviewer F7 | Revision loop and structural gate presented as compound fix rather than independent items. |
| Issue 3.1a added | Reviewer F10 | Post-escalation behavior undefined after 4-round limit. MEDIUM-HIGH severity. |
| Issue 3.2 downgraded | Reviewer F8 | Severity reduced from MEDIUM to LOW; reclassified from "protocol gap" to "design observation." Phase 4 already mandates universal review pairing; DECOMPOSE reviewability-aware scoping is an enhancement, not a consistency fix. |
| Issue 3.5 removed | Reviewer F9 | Naming collision was structurally impossible given the `review_` vs `<NN>_` prefix conventions. Removed as noise. |
| Section 5 added | Reviewer F10 | Compound analysis of the iteration enforcement chain, consolidating 3.1 + 3.1a + 3.2 + 3.4 with recommended fix order. |
