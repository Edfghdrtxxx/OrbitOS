needs-revision

## Findings

### Gap 1 (Iteration enforcement) — PARTIALLY AGREE, severity justified

**Claim verified:** The implementer correctly identifies that the revision loop in both modes uses "If the reviewer returns **needs-revision**, dispatch a new implementer..." which is procedural/conditional language, whereas the pairing rule uses "**MUST**." This contrast is real and accurately quoted.

**However, the analysis slightly overstates the risk.** The revision loop text is structured as a numbered procedure (steps 1-2-3) that the orchestrator follows. Step 1 says "If the reviewer returns needs-revision, dispatch a new implementer" — this is an instruction in imperative form ("dispatch"), not merely a description. It does not say "the orchestrator may dispatch" or "consider dispatching." The gap is real but narrower than claimed: the issue is the absence of an explicit prohibition on skipping iteration, not that the existing language is purely descriptive. The recommended fix (adding "The orchestrator MUST re-dispatch...") is appropriate and directly addresses the user's top priority.

**Severity HIGH:** Justified given user's stated top priority.

**Confidence:** High.

---

### Gap 2 (DECOMPOSE lacks review planning) — OVER-ENGINEERED

**The gap identification is valid** — DECOMPOSE does not mention review at all, and this is a genuine structural omission. However, the recommended fix introduces unnecessary complexity:

1. **"Review plan" as a fourth decomposition element** forces the orchestrator to predict per-task iteration counts ("expect 2-3 rounds") before any implementation has happened. This is speculative planning that adds overhead without clear benefit — the orchestrator cannot meaningfully predict revision rounds for tasks it hasn't seen implemented yet.

2. **"Reviewer pairing" in the decomposition** is premature. Phase 4 already mandates "every implementer MUST be paired with a separate reviewer." Making the orchestrator explicitly plan which reviewer handles which task during DECOMPOSE is redundant — the pairing rule is universal, not selective. There is nothing to plan.

3. **"Specific review criteria"** in the decomposition is the one element that has genuine value. Telling the orchestrator to think about what the reviewer should focus on during decomposition could improve review quality. But this belongs as a lightweight annotation, not a full "Review plan" element.

**Better fix:** Instead of a fourth decomposition element, add a single sentence to Phase 2 in both modes: "For each sub-task, note any specific review criteria the reviewer should focus on." This achieves the planning benefit without the overhead of iteration budgets and redundant pairing declarations.

The recommended Phase 3 addition (telling implementers they will be reviewed) is better placed as part of Gap 9's fix, not duplicated here.

**Severity HIGH:** Downgrade to MEDIUM. The gap is real but the fix is disproportionate, and the severity is inflated by bundling it with Gap 9 concerns (which is separately rated HIGH). The DECOMPOSE phase's actual omission is modest — it lacks review-criteria planning, not an entire "review plan" structure.

**Confidence:** High.

---

### Gap 3 (Reviewer isolation rule asymmetry) — VALID, correctly rated

The analysis accurately identifies that spec-mode has an explicit reviewer exception callout while inline-mode relies on the reader inferring that reviewers fall under the scratch-directory rule. The recommended one-sentence fix is proportionate.

**Severity MEDIUM:** Justified.

**Confidence:** High.

---

### Gap 4 (Context injection asymmetry) — VALID, correctly rated

The analysis correctly notes that inline-mode lacks a general context injection principle for initial dispatch, only mentioning it in the revision loop. The fix is lightweight and appropriate.

**Severity LOW:** Justified.

**Confidence:** High.

---

### Gap 5 (Scratch directory creation failure) — VALID but fix is awkward

The gap is real: if the first agent fails to create the scratch directory, subsequent agents break. However, the recommended fix (dispatch a "minimal setup agent" to create a directory) is disproportionate — spawning an entire sub-agent to run `mkdir` is heavy machinery for a trivial operation.

The implementer notes this tension ("this conflicts with the 'orchestrator must not write' rule") but does not resolve it. The simpler resolution is to acknowledge that the orchestrator's "no write" rule applies to implementation artifacts, and creating an empty directory is infrastructure setup, not execution. Alternatively, the fix could require the orchestrator to include the directory creation instruction in every agent's dispatch prompt (not just the first), making directory creation idempotent.

**Severity MEDIUM:** Justified, but the fix needs rework.

**Confidence:** High.

---

### Gap 6 (Worktree merge timing) — VALID, but confidence should be lower

The implementer rates this MEDIUM confidence ("inferred gap from the interaction of isolation and review rules; no explicit failure case observed yet"). This honesty is appreciated. The gap is theoretically valid — if the Agent tool auto-merges worktrees on agent completion, the reviewer loses access to the worktree path. But the analysis does not verify how the Agent tool actually handles worktree lifecycle. Without that information, this is a speculative gap.

**Severity MEDIUM:** Acceptable as a speculative item, but the implementer should have flagged that the severity depends on Agent tool behavior that was not verified.

**Confidence:** Medium (matches implementer's own rating).

---

### Gap 7 (Worktree report path in dispatch) — VALID, correctly rated

Minor but real. The recommended dispatch checklist is reasonable.

**Severity LOW:** Justified.

**Confidence:** High.

---

### Gap 8 (Evolution.md hallucination lesson not integrated) — CONTRADICTS USER'S STATED POSITION

**This is the most problematic gap in the analysis.**

The user explicitly designed evolution.md as a runtime patch mechanism: Phase 0 says "Read evolution.md... Apply any accumulated lessons as additional constraints." This is the intended architecture — evolution lessons are loaded at runtime and applied as constraints without being propagated into the protocol text. The implementer acknowledges this mechanism exists but then argues it is insufficient because the orchestrator might "forget to incorporate it" or "interpret 'apply' loosely."

This reasoning undermines the entire evolution.md design pattern. If the argument is "the orchestrator might not follow Phase 0 correctly," then the fix is to strengthen Phase 0's enforcement language, not to duplicate every evolution lesson into the protocol body. The latter approach would:

1. **Create a maintenance burden** — every new evolution lesson would need to be manually integrated into the protocol, defeating the purpose of having evolution.md as a separate, append-only file.
2. **Make evolution.md redundant** — if all lessons must be propagated into the protocol to be effective, there is no reason to have evolution.md at all.
3. **Contradict the user's architectural intent** — the user chose this pattern deliberately. The gap analysis should respect that choice unless it can demonstrate a concrete failure, not a hypothetical one.

**Recommendation:** Remove this gap entirely, or downgrade to INFORMATIONAL with a note that Phase 0's "apply" instruction could be strengthened (e.g., "Apply each lesson as a binding constraint — do not skip or partially apply lessons"). This respects the user's architecture while addressing the underlying concern.

**Severity MEDIUM:** Over-rated. Should be INFORMATIONAL at most.

**Confidence:** High.

---

### Gap 9 (Implementers not told about review) — QUESTIONABLE AS HIGH SEVERITY

**The core question:** Does telling an LLM agent "your work will be reviewed" actually change the quality of its output?

There is no strong evidence that LLM agents produce meaningfully better work when told they will be reviewed. LLMs do not have ego, career incentives, or social accountability — the mechanisms that make review awareness effective for humans. What does affect LLM output quality is:

1. **Clear success criteria** (already covered by Phase 3's "WHAT success looks like")
2. **Explicit quality requirements** (e.g., "include file paths in your report," "verify your claims against actual file contents")
3. **Structured output format** (already covered by the output convention)

Telling an agent "you will be reviewed" is a prompt engineering bet with uncertain payoff. It might help marginally (by activating "be careful" heuristics in the model's training distribution), but it is not a structural gap in the protocol.

**Additionally, this gap has significant overlap with Gap 2.** The implementer rates both as HIGH and acknowledges they are "closely related." The recommended fixes are nearly identical — Gap 2 says "add a dispatch-level requirement in Phase 3: inform implementers that their output will be reviewed" and Gap 9 says "inform each implementer that its output will be reviewed." These should be consolidated, not counted as separate HIGH-severity gaps.

**Severity HIGH:** Downgrade to LOW. The behavioral premise is unverified, and the fix overlaps with Gap 2. If kept, merge with Gap 2.

**Confidence:** Medium. The claim that review awareness improves LLM output is plausible but unsubstantiated.

---

### Missed Gaps

**1. Phase 0 EVOLVE has no verification step (MEDIUM).**
Phase 0 says "Read evolution.md... Apply any accumulated lessons as additional constraints." But there is no verification that the orchestrator actually read and applied the lessons. Unlike Phase 5's structural gate (which verifies review pairing via Glob), Phase 0 is entirely honor-system. If the implementer is concerned about evolution lessons not being applied (as argued in Gap 8), the structural fix is to add a Phase 0 verification step (e.g., "List the lessons you are applying from evolution.md before proceeding"), not to propagate lessons into the protocol body.

**2. The "max 4 revision rounds" escalation path is underspecified (LOW).**
Both modes say "If still unresolved, escalate to the user with full context." But "full context" is not defined — does the orchestrator paste the review files, list file paths, summarize the dispute? The Phase 4 escalation clause is vaguer than the rest of the protocol's typically precise language.

---

### Summary of Severity Adjustments

| Gap | Implementer Rating | Reviewer Rating | Reason |
|-----|-------------------|-----------------|--------|
| 1 | HIGH | HIGH | Justified; user's top priority |
| 2 | HIGH | MEDIUM | Fix is over-engineered; gap is real but narrower than claimed |
| 3 | MEDIUM | MEDIUM | Correct |
| 4 | LOW | LOW | Correct |
| 5 | MEDIUM | MEDIUM | Correct, but fix needs rework |
| 6 | MEDIUM | MEDIUM | Acceptable but speculative |
| 7 | LOW | LOW | Correct |
| 8 | MEDIUM | INFORMATIONAL | Contradicts user's stated architecture for evolution.md |
| 9 | HIGH | LOW | Unverified behavioral premise; overlaps with Gap 2 |

### Verdict Rationale

The analysis is thorough and well-structured, with accurate source quotations throughout. However, three issues require revision before acceptance: (1) Gap 8 contradicts the user's explicit architectural decision about evolution.md as a runtime patch mechanism; (2) Gap 9's HIGH severity rests on an unverified claim about LLM behavior and substantially overlaps with Gap 2; (3) Gap 2's recommended fix is over-engineered relative to the actual omission. The core finding (Gap 1) is solid and should be prioritized.
