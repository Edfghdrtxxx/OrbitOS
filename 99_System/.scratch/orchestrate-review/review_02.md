needs-revision

## Findings

### Finding 1: Factual inaccuracy — gate text is NOT identical across modes

The implementer states on line 3: "The gate text is identical in both files." This is wrong.

- **spec-mode (line 129):** "for every implementer **report** (`<NN>_*.md`)"
- **inline-mode (line 74):** "for every implementer **output** (`<NN>_*.md`)"

The word "report" vs "output" differs. While this does not affect the structural gate logic (the glob pattern and pairing mechanism are the same), calling the text "identical" is a factual error in the analysis. This matters because the two modes have different semantics for what `<NN>_*.md` represents — in spec-mode the scratch file is always a report about changes made elsewhere, while in inline-mode the scratch file can BE the deliverable (see inline-mode line 29-31: "Content producers: the scratch file IS the deliverable"). The gate operates the same way, but the implementer should not have asserted textual identity when none exists.

**Severity:** Low (does not affect any conclusions). **Confidence:** Certain — I compared the source text directly.

---

### Finding 2: Edge Case 1 — the file-persistence claim is correct but understated

The implementer claims: "the protocol never instructs deletion of initial reviews." This is accurate — I verified that nowhere in spec-mode.md or inline-mode.md is deletion of review files mentioned. However, the implementer misses a subtlety: the protocol also never *prohibits* deletion. The only constraint is the reviewer's "only permitted write" rule (spec-mode line 115, inline-mode line 62), which restricts what reviewers write but says nothing about what the orchestrator or other agents might do to existing files.

That said, the orchestrator's read-only mutation policy (SKILL.md line 9: "you dispatch, but never mutate") and the reviewers' read-only constraint on implementation files both make deletion by protocol-conforming agents impossible. Only a malformed or rogue agent could delete `review_01.md`. The implementer's reasoning holds under normal operation but should have acknowledged this assumption explicitly.

The recommended fix for Edge Case 1 (verify latest revision review is approved) is sound and compatible with tiered access rules.

**Severity:** Negligible. **Confidence:** High.

---

### Finding 3: Edge Case 5 — severity assessment is defensible but the fix has a gap

The implementer rates Edge Case 5 as HIGH severity. I agree the gap is real. The gate is purely structural. The "all reviews pass" phrasing on spec-mode line 131 / inline-mode line 76 is a *separate sentence* from the structural gate on line 129 / line 74 — it describes what should be true at that point in the flow, not an additional check the gate performs.

**However, the recommended fix has a compatibility issue the implementer glosses over.** The implementer says reading the first line of each review file is "already within the orchestrator's tiered access permissions at priority level 2." Let me verify this claim against SKILL.md lines 35-38:

> Priority 2 (targeted): **Read** a specific small file — Inspect review verdicts (`review_*.md`) **for dispatch decisions**, or read `task.md` to verify checkbox state. Use when a sub-agent summary is ambiguous or conflicting and you need the actual content to route correctly.

The key phrase is "for dispatch decisions" and "when a sub-agent summary is ambiguous or conflicting." Priority 2 is conditioned on the orchestrator needing content to **route correctly** — it is not a blanket permission to read all review files proactively. The Phase 5 structural gate is not a dispatch decision (Phase 3/4); it is a synthesis precondition (Phase 5). You could argue it is still "routing" (deciding whether to proceed to synthesis or halt), but the tiered access language is anchored in "dispatch" vocabulary.

This is not a fatal incompatibility — the tiered access rules are clearly intended to cover exactly this kind of verdict inspection, and the spirit of the rule supports the fix. But the implementer should have flagged that the fix relies on a reasonable *interpretation* of "dispatch decisions" rather than a literal match.

Additionally, the fix says "read the first line of each review file." The review file format specifies "Verdict line (`approved` or `needs-revision`)" first (spec-mode line 118, inline-mode line 65), so reading the first line is the right approach. But the fix should account for the possibility that a review file is malformed — e.g., the reviewer wrote a preamble before the verdict, or the first line is blank. The fix should specify what happens when the first line does not contain a recognizable verdict: treat it as a gate failure and halt, rather than silently passing.

**Severity of the edge case:** HIGH is defensible. **Confidence on the tiered-access compatibility concern:** Medium — I see both sides. The rule's intent supports the fix, but the literal text is dispatch-centric.

---

### Finding 4: Edge Case 3 — analysis is accurate, fix is good

The "or vice versa" clause exists in both files. The implementer's observation that an LLM orchestrator might implement only the forward check is a legitimate concern. The recommended fix (two explicit numbered steps) is clear and compatible with all constraints. No issues.

**Confidence:** High.

---

### Finding 5: Edge Case 4 — analysis is accurate but undersells an important implication

The implementer correctly identifies that the protocol says "a report file" (singular). But the analysis misses a downstream consequence: if multiple files exist under the same number, the reviewer was dispatched with a single report file path (spec-mode line 109: "Give it the implementer's report file path (`<NN>_<description>.md`)"). The reviewer may never see the second file. This means not only is the gate ambiguous, but the review itself may be incomplete — the reviewer audited `03_research.md` but never knew `03_supplementary.md` existed.

This strengthens the case for the "prohibit explicitly" fix, which the implementer already recommends. But the reasoning should include this review-coverage gap, not just the gate-logic ambiguity.

**Severity:** Low (the protocol strongly implies single files; this is a defensive-spec concern). **Confidence:** High.

---

### Finding 6: Missed edge case — race condition between parallel reviewer writes

The implementer did not analyze what happens when two reviewers for different sub-tasks are dispatched in parallel and write to the same directory simultaneously. Both spec-mode (line 95) and inline-mode (line 48) explicitly address this for implementers: "Non-overlapping file names (`review_01.md`, `review_02.md`) prevent write conflicts without worktree overhead." The protocol relies on non-overlapping filenames as the concurrency control mechanism.

But the structural gate runs AFTER all reviews complete. If both reviewers finish and the gate runs, it sees both files — no issue. The real risk is: what if one reviewer is slow and hasn't finished writing when the orchestrator begins the gate check? The protocol says (spec-mode line 156, inline-mode line 105): "Wait for all agents in a stage to complete before outputting." This covers it — the orchestrator should not start Phase 5 until all Phase 4 agents have returned.

So this edge case is actually handled by the progress-update batching rule. The implementer could have mentioned this as a "handled" case for completeness, but not flagging it is not a significant omission.

**Severity:** None (handled by existing rules). **Confidence:** High.

---

### Finding 7: Missed edge case — malformed review file

The implementer was specifically asked to consider "what happens if a sub-agent writes a malformed review file." This was not analyzed. Consider:

1. **Reviewer writes `review_01.md` but it is empty (0 bytes).** The gate checks existence — an empty file exists. Gate passes. But there is no verdict, no findings. The Phase 4 revision loop would have relied on the reviewer's 1-2 sentence summary returned to the orchestrator, which might say "approved" even though the file is empty. The gate cannot catch this.

2. **Reviewer writes to the wrong filename** (e.g., `rev_01.md` instead of `review_01.md`). The gate would see no review for sub-task 01 and correctly halt. Meanwhile, the orphaned `rev_01.md` would not be caught unless the bi-directional check from Edge Case 3's fix is implemented (and even then, `rev_01.md` does not match the `review_<NN>.md` pattern, so it would be invisible to the gate entirely).

3. **Reviewer writes the verdict as the second line instead of the first.** If Edge Case 5's fix is implemented (read first line for verdict), a review that starts with `## Findings` and puts `needs-revision` on line 3 would be misread. The fix should specify: scan for the verdict keyword in the file rather than assuming line position, or mandate strict format enforcement in the reviewer dispatch prompt.

The implementer should have addressed at least scenario 1 (empty file) and scenario 3 (verdict not on first line), since they are directly relevant to Edge Cases 5 and 1.

**Severity:** Medium. **Confidence:** High on scenarios 1 and 3 being real gaps. Scenario 2 is low-probability.

---

### Finding 8: Recommended fixes are compatible with read-only mutation policy

I verified that all five recommended fixes involve changes to the spec text (spec-mode.md, inline-mode.md), not orchestrator actions that would violate the mutation policy. The Edge Case 5 fix adds a Read action to the gate, which is permitted under the orchestrator's tiered access (Priority 2). The orchestrator itself never writes — it only reads and routes. All fixes are structurally compatible.

**Confidence:** High.

---

## Summary Assessment

The implementer's analysis is thorough and largely accurate. The five edge cases are well-reasoned and the severity rankings are defensible. However:

1. **One factual error** (gate text claimed identical when it is not).
2. **One missed edge case** that was explicitly requested (malformed review files).
3. **One understated implication** in Edge Case 4 (review coverage gap with multiple files).
4. **One glossed-over compatibility nuance** in Edge Case 5's fix (tiered access "dispatch decisions" language vs. Phase 5 gate usage).

None of these invalidate the core conclusions, but the malformed-review-file gap (Finding 7) is a meaningful omission that should be addressed before this analysis is considered complete. Verdict: **needs-revision** on that basis.
