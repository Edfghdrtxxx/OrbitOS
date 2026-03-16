# Orchestrate Skill — Patch Report

**Date:** 2026-03-16
**Source audits:** `01_cross_consistency_b.md`, `02_structural_gate_b.md`, `03_temp_file_standards_b.md`, `04_gap_analysis_b.md`

---

## Patches Applied

### 1. Iteration Enforcement — Imperative Language (HIGH)

**Files:** `references/spec-mode.md` (Phase 4, Revision loop), `references/inline-mode.md` (Phase 4, Revision loop)
**Audit sources:** Cross-consistency 3.1, Gap analysis Gap 1

**What changed:** Added a mandatory enforcement statement before the revision loop steps in both modes:
> "The orchestrator MUST re-dispatch for revision when a reviewer returns `needs-revision`. The orchestrator MUST NOT proceed to the next sub-task or to SYNTHESIZE until the sub-task receives an `approved` verdict or hits the escalation limit below."

This converts the revision loop from a procedural description into an enforceable obligation, matching the imperative voice already used by the pairing rule ("Every implementer agent MUST be paired...").

---

### 2. Post-Escalation Protocol (MEDIUM-HIGH)

**Files:** `references/spec-mode.md` (Phase 4, after revision loop), `references/inline-mode.md` (Phase 4, after revision loop)
**Audit source:** Cross-consistency 3.1a

**What changed:** Added a post-escalation protocol after the 4-round max limit in both modes. Defines three explicit user options (accept-as-is, provide manual guidance, abandon) and mandates that the orchestrator MUST NOT silently proceed past an escalation.

Also replaced the vague "with full context" escalation language with a specific enumeration: "the original sub-task objective, the implementer report file path, all review file paths for this sub-task, and a 1-2 sentence summary of the unresolved disagreement." (Addresses Gap analysis Gap 9.)

---

### 3. Structural Gate — Verdict Verification + Malformed Review Handling (HIGH)

**Files:** `references/spec-mode.md` (Phase 5, Structural gate), `references/inline-mode.md` (Phase 5, Structural gate)
**Audit sources:** Cross-consistency 3.4, Structural gate Edge Cases 1/3/5/6

**What changed:** Expanded the structural gate from a single existence check into a three-step verification:

1. **Pairing** — retained the Glob check but made it explicitly bi-directional (for every report there must be a review, AND for every review there must be a report). Addresses the fragile "or vice versa" phrasing from Edge Case 3.
2. **Verdict** — added a Read step to verify the latest review file's verdict line is `approved`. References SKILL.md's tiered access Priority 2 ("gate decision") as justification. Handles revision chains by specifying that the latest alphabetical suffix takes precedence. Also verifies user escalation overrides were explicitly granted (ties back to Patch 2).
3. **Malformed reviews** — added handling for empty files and missing/unrecognizable verdict keywords. Mandates halt-and-investigate rather than silent pass or silent fail.

---

### 4. SKILL.md Tiered Access — "Gate Decisions" (MEDIUM)

**File:** `SKILL.md` (Permitted Tools, tiered access table, Priority 2)
**Audit source:** Structural gate Edge Case 5 (Tiered-Access Compatibility section)

**What changed:** Updated Priority 2's "When to use" column from "for dispatch decisions" to "for dispatch or gate decisions." Added clarifying text: "or when the structural gate needs to verify verdict content before synthesis." This closes the interpretive gap that would otherwise make the verdict-check Read in Patch 3 ambiguous under the tiered access framework.

---

### 5. DECOMPOSE — Review Focus Annotation (LOW)

**Files:** `references/spec-mode.md` (Phase 2, step 1), `references/inline-mode.md` (Phase 2, step 1)
**Audit sources:** Cross-consistency 3.2, Gap analysis Gap 2

**What changed:** Added a fourth bullet to the sub-task decomposition requirements in both modes:
> "Review focus (optional) — any specific criteria the reviewer should prioritize for this sub-task (e.g., 'verify physics constraints,' 'check path references'). Omit for straightforward tasks."

Lightweight — one optional annotation per sub-task. Connects DECOMPOSE to REVIEW without duplicating Phase 4's universal pairing mandate.

---

### 6. DECOMPOSE — Scope Adjustment Step in Spec-mode (MEDIUM)

**File:** `references/spec-mode.md` (Phase 2, between steps 3 and 4 — now steps 4 and 5)
**Audit source:** Cross-consistency 1.11

**What changed:** Added step 4: "If the user adjusts scope, update the drafted task.md content and re-present for confirmation." This mirrors inline-mode's existing step 3 and closes the unintentional cross-mode drift where spec-mode had no explicit protocol for user scope adjustments during the DECOMPOSE confirmation step.

---

### 7. Dispatch — Implementer Review Awareness (MEDIUM)

**Files:** `references/spec-mode.md` (Phase 3, Core philosophy), `references/inline-mode.md` (Phase 3, Core philosophy)
**Audit source:** Gap analysis Gap 2

**What changed:** Added one sentence to the dispatch philosophy in both modes:
> "Inform each implementer that its output will be reviewed by a separate agent and may require revision."

This costs nothing in the dispatch prompt and aligns with the existing philosophy of telling agents "WHAT success looks like" — the review cycle is part of that picture.

---

### 8. Content-Producer Review Clarification (HIGH)

**File:** `references/inline-mode.md` (Phase 4, before revision loop)
**Audit source:** Temp file standards 2.1-2.3

**What changed:** Added an explicit statement:
> "Content-producer review requirement: All sub-tasks — including content producers (where the scratch file IS the deliverable) — require review. Content-producer reviews assess completeness and accuracy of the deliverable itself, just as worktree-implementer reviews assess correctness of file changes."

This resolves the ambiguity where the protocol's "Every implementer agent MUST be paired with a separate reviewer agent" was unclear about whether content producers counted as "implementers." The `rib-workflow/` session (7 content files, zero reviews) demonstrated this gap was real.

---

## Audit Findings NOT Patched (and why)

| Finding | Reason for deferral |
|---------|-------------------|
| Skill tool operationalization (cross-consistency 2.4) | Design decision — requires deciding when Skill vs Agent is preferred. Not a protocol gap that causes failures. |
| Inline-mode mode-switch scratch state (cross-consistency 1.10.1) | LOW severity edge case. The orchestrator would naturally ask the user. |
| Inline-mode progress tracking (cross-consistency 3.3) | By design — inline-mode is explicitly ephemeral. |
| Reviewer isolation explicit callout in inline-mode (gap analysis Gap 3) | The existing rule ("sub-agents that only write to the scratch directory must NOT use worktree isolation") covers reviewers implicitly. Adding an explicit callout is a clarity improvement but not a gap. |
| Context injection in inline-mode initial dispatch (gap analysis Gap 4) | LOW severity. The principle is stated in the revision loop already; adding it to initial dispatch is polish. |
| Scratch directory creation failure (gap analysis Gap 5) | MEDIUM but requires a design decision (verification step vs idempotent mkdir). |
| Worktree merge timing (gap analysis Gap 6) | MEDIUM but depends on Agent tool implementation details not documented in the skill. |
| Phase 0 EVOLVE verification (gap analysis Gap 8) | LOW severity. Evolution.md is a runtime patch mechanism — adding verification would add bureaucracy without proportionate benefit. |
| Revised implementer filename convention (temp file 1) | Organic `_b` convention works in practice. Codifying it is polish, not a gap fix. |
| Session ID collision handling (temp file 7/11) | LOW practical risk. Descriptive naming makes collisions unlikely. |

---

## Cross-File Consistency Check

All patches that apply to both modes use semantically identical language, with only the expected directory-path substitutions (`openspec/changes/<change-name>/` vs `99_System/.scratch/<session-id>/`) and mode-specific vocabulary (`report` vs `output`). The inline-mode "scratch content" clause in reviewer hard rules was intentionally preserved (not synchronized to spec-mode) per cross-consistency audit 1.5.3.
