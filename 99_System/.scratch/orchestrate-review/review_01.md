needs-revision

## Findings

### F1. Section 1.5 Header Contradicts Its Own Body (Accuracy)

The section header reads "MOSTLY CONSISTENT -- one unintentional divergence found" but the body fails to identify an actual unintentional divergence. The item labeled "Unintentional divergence #1 -- reviewer write location phrasing" is immediately followed by "Both are correct for their respective modes. No issue." If the conclusion is "no issue," this is not an unintentional divergence -- it is an intentional difference driven by the directory model, exactly like every other difference the implementer correctly classified.

This creates confusion: a reader scanning headers would believe there is one unintentional issue in the Review Rules section when there isn't. The header should be corrected to "CONSISTENT (intentional differences only)" or, if the implementer genuinely believes this is unintentional, the body needs to explain why.

**Severity:** Low (editorial, but undermines trust in the audit's precision).

---

### F2. Missed Divergence: Reviewer Hard Rules Differ Between Modes (Missed Issue)

Spec-mode line 114:
> "they MUST NOT modify deliverables or any files written by implementers"

Inline-mode line 61:
> "they MUST NOT modify deliverables, **scratch content**, or any files written by implementers"

Inline-mode explicitly adds "scratch content" as a prohibited modification target. This is almost certainly intentional (scratch files in inline-mode serve as deliverables, so they need extra protection), but the implementer's analysis does not mention this difference at all. The section-by-section comparison (1.5) claims to cover the Review Rules in detail and specifically quotes the reviewer write-location phrasing, yet misses this textual difference in the same paragraph.

Whether this is intentional or unintentional, it should have been called out and classified. Omitting it undermines the audit's completeness.

**Severity:** Medium (missed difference in a MUST-level rule).

---

### F3. Missed Divergence: Spec-mode Worktree Access Includes Example Prompt, Inline-mode Does Not (Missed Issue)

Spec-mode line 111 provides a concrete dispatch prompt example for reviewer worktree access:
> "The implementer's changes are at `/tmp/worktree-abc123/` -- read files from that path to review them. The implementer's report is at `openspec/changes/[change-name]/01_refactor_auth.md`."

Inline-mode line 58 has no such example -- it states the rule abstractly. The implementer's analysis (section 1.5) does not flag this difference. While likely intentional (spec-mode is more verbose throughout), this kind of prompt-template-level difference is worth documenting since a future maintainer could add an example to inline-mode and inadvertently create inconsistency by using the wrong directory paths.

**Severity:** Low (documentation completeness).

---

### F4. Missed Divergence: Inline-mode DECOMPOSE Has Scope-Adjustment Step, Spec-mode Does Not (Missed Issue)

Inline-mode DECOMPOSE step 3: "If the user adjusts scope, update the list and re-confirm."

Spec-mode DECOMPOSE has no equivalent step. After the user confirms the drafted task.md, spec-mode proceeds directly to dispatch (step 4 writes task.md to disk). This means spec-mode has no explicit protocol for handling user scope adjustments during the DECOMPOSE confirmation step.

The implementer's analysis (section 3.2) discusses DECOMPOSE gaps in terms of missing review/iteration planning, but does not compare the two DECOMPOSE phases against each other for cross-consistency. This is the exact kind of drift the cross-consistency audit should catch.

This is likely an unintentional omission from spec-mode rather than an intentional design choice -- there is no reason spec-mode should not handle scope adjustments during confirmation.

**Severity:** Medium (actual cross-file drift in a protocol step, not just a documentation gap).

---

### F5. Missed Gap: Skill Tool Usage Undefined in Mode Files (Missed Issue)

SKILL.md line 27 lists the `Skill` tool as permitted: "invoke skills directly when delegation overhead is unnecessary." However, neither spec-mode.md nor inline-mode.md ever mentions when or how the orchestrator should use the `Skill` tool vs. the `Agent` tool for dispatch. The DISPATCH phase in both modes exclusively discusses `Agent`-based sub-agent spawning.

This creates ambiguity: under what circumstances should the orchestrator use `Skill` directly? The permitted tools table grants the capability, but no mode protocol provides guidance on exercising it. This is a forward reference gap (SKILL.md promises a capability that the mode protocols don't operationalize).

The implementer's forward-reference audit (section 2) checked references FROM mode files TO SKILL.md but not the reverse direction -- capabilities declared in SKILL.md that the mode files should consume but don't.

**Severity:** Medium (functional gap in the protocol).

---

### F6. Missed Gap: Mode Switch From Inline to Spec Doesn't Address Scratch Directory (Missed Issue)

Spec-mode edge case (line 165) explains that completed sub-tasks are already reflected in task.md when switching modes. Inline-mode edge case (line 114) says to return to SKILL.md Phase 1.5 but does not address what happens to the scratch directory (`99_System/.scratch/<session-id>/`). Should it be abandoned? Should its contents be migrated into the new spec-mode change directory? Should the new task.md reference it?

The implementer's edge case comparison (section 1.10) correctly notes that spec-mode mentions task.md persistence during mode switch, but classifies the overall difference as "intentional" without flagging the missing state-migration guidance on the inline-mode side.

**Severity:** Low (edge case, but a real protocol gap for anyone who encounters a mode switch).

---

### F7. Issue 3.1 Severity Rating Is Justified but the Recommended Resolution Is Incomplete (Weak Recommendation)

The implementer correctly identifies the revision enforcement gap (3.1) as HIGH severity and proposes imperative language changes. However, the recommended resolution focuses entirely on textual changes to the revision loop language. It does not address the structural enforcement mechanism.

Specifically: even with imperative language ("the orchestrator MUST dispatch a revision implementer"), there is nothing in the protocol that would cause the orchestrator to halt or fail if it violates this rule. The language change converts a "should" to a "must," but enforcement remains honor-system.

The structural gate (issue 3.4) is the natural enforcement point, and the implementer correctly identifies this connection in the summary. But the resolution for 3.1 should explicitly reference 3.4 as the enforcement backstop and recommend that they be addressed as a single compound fix: (1) imperative language in the revision loop, AND (2) verdict checking in the structural gate. Presenting them as independent fixes understates the dependency between them.

**Severity:** Medium (the recommendation is correct in direction but incomplete in scope).

---

### F8. Issue 3.2 Severity Rating May Be Overstated (Severity Calibration)

The implementer rates the DECOMPOSE review-planning gap as MEDIUM severity. However, the Phase 4 protocol already universally requires review pairing ("Every implementer agent MUST be paired with a separate reviewer agent"). The DECOMPOSE phase doesn't need to re-plan what Phase 4 already mandates universally.

The valid sub-concern is about reviewability-aware scoping (sub-tasks being too large for meaningful review). This is a real design consideration, but it is not a cross-consistency issue -- it is a feature request. In a cross-consistency audit, it should be flagged as a design observation (like issue 3.3) rather than a protocol gap. The implementer is overstepping the audit scope by rating this MEDIUM.

That said, the user's stated concern about iteration enforcement does give this finding relevance. I would downgrade to LOW with a note that it merits consideration as a design enhancement rather than a consistency fix.

**Confidence:** Medium -- this depends on whether the audit scope includes protocol design gaps or is limited to cross-file consistency. The implementer's framing as "protocol-level issues" (section 3) suggests the broader scope was intended, in which case MEDIUM may be defensible.

---

### F9. Issue 3.5 (Naming Collision) Is a Non-Issue (Overclaim)

The implementer flags a theoretical naming collision between `<NN>_*.md` and `review_<NN>.md` patterns if a task description starts with "review." This is not a real risk because:

1. The Glob pattern for the structural gate matches `<NN>_*.md` where `<NN>` is a zero-padded number. A file named `03_review_auth_module.md` matches `03_*.md`, not `review_03.md`. These are different patterns.
2. The `review_` prefix uses a literal underscore after "review", while the implementer files use `<NN>_` (number-prefix). The patterns are structurally disjoint.

Including this as a finding, even at LOW severity, adds noise without value. The implementer should remove it or, at most, relegate it to a footnote.

**Severity:** Negligible (the analysis is correct that the risk is "unlikely," but it undersells how structurally impossible the collision actually is).

---

### F10. Adequacy of Iteration Enforcement Coverage (User's Key Concern)

The user's primary concern is iteration enforcement -- when quality is insufficient, the skill must explicitly require re-dispatch, and DECOMPOSE should plan for review/iteration.

The implementer addresses this through three findings (3.1, 3.2, 3.4) that form a chain: the revision loop language is weak (3.1), DECOMPOSE doesn't plan for review (3.2), and the structural gate doesn't verify verdicts (3.4). This chain analysis is the strongest part of the audit and the summary correctly identifies it as the "primary concern."

However, the implementer does not address one additional aspect of iteration enforcement: **what happens after the 4-round escalation limit?** Both mode files say "escalate to the user with full context," but after escalation, the protocol is silent. Can the orchestrator proceed to SYNTHESIZE with a sub-task that never received an `approved` verdict? The 4-round limit is effectively an escape hatch that bypasses the iteration enforcement the user cares about. The implementer should have flagged whether the post-escalation state is defined.

**Severity:** Medium (gap in the iteration enforcement analysis that the user specifically asked about).

---

## Summary Assessment

The implementer's analysis is structurally sound and catches the three most important protocol-level gaps. The chain analysis connecting issues 3.1, 3.2, and 3.4 is well-reasoned and directly addresses the user's iteration enforcement concern.

However, the audit has meaningful gaps:
- Four cross-file differences went undetected (F2, F3, F4, F6), of which F4 (spec-mode missing scope-adjustment step in DECOMPOSE) is genuine drift rather than a documentation nicety.
- One functional gap in the protocol was missed entirely (F5, Skill tool usage undefined).
- One aspect of iteration enforcement was not analyzed (F10, post-escalation behavior).
- One finding is a non-issue (F9, naming collision).
- One section header contradicts its body (F1).

The recommendations are directionally correct but need tightening: 3.1 and 3.4 should be presented as a compound fix rather than independent items (F7), and 3.2's severity should be reconsidered (F8).

**Verdict: needs-revision** -- primarily due to missed cross-file differences (F2, F4) and the incomplete iteration enforcement analysis (F10). The core findings are valid but the audit is not thorough enough to serve as a definitive cross-consistency report.
