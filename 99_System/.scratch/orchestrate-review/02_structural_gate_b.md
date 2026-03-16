# Structural Gate Stress Test — Phase 5 (SYNTHESIZE) [Revision B]

Examines the pairing gate in both `spec-mode.md` (line 129) and `inline-mode.md` (line 74). The gate text differs between the two files:

**spec-mode.md (line 129):**
> **Structural gate:** Before synthesizing, `Glob` the change directory (`openspec/changes/<change-name>/`) and verify pairing: for every implementer **report** (`<NN>_*.md`) there must be a corresponding review (`review_<NN>.md`). If any **report** lacks a review — or vice versa — halt and investigate before proceeding.

**inline-mode.md (line 74):**
> **Structural gate:** Before synthesizing, `Glob` the scratch directory (`99_System/.scratch/<session-id>/`) and verify pairing: for every implementer **output** (`<NN>_*.md`) there must be a corresponding review (`review_<NN>.md`). If any **output** lacks a review — or vice versa — halt and investigate before proceeding.

The differences are:
1. **"report" vs. "output"** — reflects a semantic distinction between modes. In spec-mode the `<NN>_*.md` file is always a report about changes made elsewhere (the implementer works in a worktree and writes a report to the shared change directory). In inline-mode the scratch file can BE the deliverable (inline-mode line 30: "Content producers: the scratch file IS the deliverable"). The gate logic (glob pattern, pairing mechanism) is identical; the vocabulary is not.
2. **Directory path** — `openspec/changes/<change-name>/` vs. `99_System/.scratch/<session-id>/`. Each mode operates in its own working directory.

Despite the textual differences, the structural gate *mechanism* is functionally identical: glob for `<NN>_*.md`, glob for `review_<NN>.md`, verify 1:1 pairing, halt on mismatch. All edge cases below apply equally to both modes.

---

## Edge Case 1: Revision Rounds and Review Pairing

### Description

The revision loop (spec-mode line 122, inline-mode line 69) creates review files with letter suffixes: `review_01b.md` (round 2), `review_01c.md` (round 3), etc. The structural gate checks for `review_<NN>.md` — which exactly matches only the *initial* review. Two sub-cases emerge:

**1a. Does the gate require only the initial review, or the latest?**

The gate says "there must be a corresponding review (`review_<NN>.md`)." This literally matches only the initial review file `review_01.md`. The revision-round files (`review_01b.md`, `review_01c.md`) do not match this pattern.

This is actually **correct behavior** for the intended flow: the initial review `review_01.md` is always created first. If it says `needs-revision`, the revision loop produces `review_01b.md` as an *additional* file — the original `review_01.md` is never deleted or superseded on disk. So the gate check for `review_01.md` will still pass because the file persists.

**1b. What if the initial review was superseded conceptually but still exists on disk?**

The gate only checks for file *existence*, not content. If `review_01.md` says `needs-revision` and `review_01b.md` says `approved`, the gate passes because `review_01.md` exists. The gate does NOT verify which review is the final one, or whether the latest review is `approved`. This connects to Edge Case 5 (quality verification).

**1c. What if someone manually deleted `review_01.md` and only `review_01b.md` exists?**

The gate would fail — it would see an implementer report `01_*.md` with no matching `review_01.md`. This would correctly trigger a halt-and-investigate. The protocol never instructs deletion of initial reviews, and the orchestrator's read-only mutation policy (SKILL.md line 9: "you dispatch, but never mutate") plus the reviewers' single-write constraint make deletion by protocol-conforming agents impossible. Only a malformed or rogue agent could cause this. The gate correctly catches it regardless of cause.

### Current Behavior

The gate checks for `review_<NN>.md` (initial review only). Revision files are not checked by the gate — they exist as supplementary audit trail.

### Verdict

**Partially handled.** The file-existence check works for the normal flow because initial reviews are never deleted (enforced by the mutation policy and reviewer write constraints, not just convention). However, the gate is silent on revision files entirely — it does not verify that the latest review in a revision chain is `approved`. This is a meaningful gap.

**Confidence:** High on the file-persistence claim (structurally enforced, not just by omission). Medium on whether this gap matters in practice — it depends on whether the orchestrator is expected to catch "all reviews exist but the sub-task is still in needs-revision state" at the gate level vs. earlier in Phase 4.

### Recommended Fix

Add a clause to the gate: "If revision reviews exist (`review_<NN>b.md`, etc.), verify that the *latest* review file (by alphabetical suffix) contains an `approved` verdict. If the latest revision review says `needs-revision`, the sub-task is incomplete — halt and investigate."

Alternatively, make the gate explicitly check `review_<NN>*.md` (glob with wildcard after NN) to capture revision files, and verify the latest one is approved.

---

## Edge Case 2: Glob Pattern Disambiguation

### Description

The implementer report pattern is `<NN>_*.md`. The review file pattern is `review_<NN>.md`. Could the implementer glob accidentally match review files?

### Analysis

The implementer pattern `<NN>_*.md` requires an underscore immediately after the two-digit number: `01_refactor_auth.md`, `02_update_tests.md`.

The review pattern is `review_<NN>.md` — this starts with the prefix `review_`, not with digits. When the orchestrator globs for `<NN>_*.md` (e.g., `[0-9][0-9]_*.md`), the `review_` prefix prevents any match because `review_01.md` does not start with two digits.

However, the spec never specifies how `<NN>_*.md` is implemented as an actual glob. If the orchestrator interprets it as literally "any .md file containing a two-digit number followed by underscore," the pattern `*[0-9][0-9]_*.md` could theoretically match `review_01_something.md` — but that naming convention is not used anywhere in the protocol. The review naming convention `review_<NN>.md` has no underscore after the digits.

**Revision review files:** `review_01b.md`, `review_01c.md` — these also do not match `<NN>_*.md` because they start with `review_`.

### Current Behavior

The two patterns are non-overlapping by construction: implementer files start with digits (`01_`), review files start with text (`review_`).

### Verdict

**Handled correctly.** The naming conventions are watertight. No realistic glob interpretation would cause cross-matching.

**Confidence:** High. The prefixes are structurally incompatible. The only risk would be a sub-agent choosing a non-standard file name, but that is an execution error, not a gate logic error.

### Recommended Fix

None required. Optionally, the spec could add an explicit note: "The `<NN>_` prefix for implementer files and `review_` prefix for review files are deliberately non-overlapping — do not deviate from these naming conventions."

---

## Edge Case 3: Orphaned Review Files

### Description

What if a review file exists (`review_03.md`) but its corresponding implementer report (`03_*.md`) does not? This could happen if: (a) the implementer failed and wrote nothing, but the reviewer was mistakenly dispatched; (b) the implementer's output was accidentally deleted; (c) the sub-task was cancelled after the implementer ran but the reviewer was already in flight.

### Analysis

The gate says: "If any report lacks a review — **or vice versa** — halt and investigate." The "or vice versa" clause explicitly covers orphaned reviews. If `review_03.md` exists but no `03_*.md` file exists, the gate should detect a review without a matching implementer report and halt.

However, the detection depends on the orchestrator's implementation of the pairing check. The spec describes the check in prose, not in code. Two reasonable implementations:

1. **Report-first:** List all `<NN>_*.md` files, extract their numbers, check that each has a `review_<NN>.md`. Then list all `review_<NN>.md` files, extract their numbers, check each has a matching `<NN>_*.md`. This correctly catches orphans in both directions.

2. **Report-first only:** List all `<NN>_*.md` files, check each has a review. This misses orphaned reviews entirely. The "or vice versa" clause would be ignored.

The prose says "or vice versa" which implies implementation (1), but since the orchestrator is an LLM interpreting natural language instructions, there is no guarantee it performs the reverse check.

### Current Behavior

The spec explicitly covers this with "or vice versa." The gate should halt on orphaned reviews.

### Verdict

**Handled in spec, but fragile in practice.** The "or vice versa" clause is easy for an LLM orchestrator to skip if it does a naive forward pass (list reports, check for reviews, done). The bi-directional check is specified but could be missed during execution.

**Confidence:** High on the spec covering it. Medium on whether an LLM orchestrator will reliably implement bi-directional checking without more explicit instructions.

### Recommended Fix

Make the bi-directional check explicit with two separate steps:

> 1. For every implementer report (`<NN>_*.md`), verify a corresponding `review_<NN>.md` exists.
> 2. For every review file (`review_<NN>.md`), verify a corresponding implementer report (`<NN>_*.md`) exists.
> If either check fails, halt and investigate.

This removes ambiguity and makes it harder for the orchestrator to skip the reverse check.

---

## Edge Case 4: Multiple Implementer Outputs per Sub-Task

### Description

Can a single sub-task produce multiple numbered files? For example, sub-task 3 might produce both `03_research.md` and `03_supplementary.md`. How does the gate handle this?

### Analysis

The output convention (spec-mode line 99, inline-mode line 28) says: "Every implementer sub-agent writes **a report file** to the change directory: `<NN>_<description>.md`." The singular "a report file" implies one file per sub-task.

However, the gate glob `<NN>_*.md` would match *all* files starting with that number. If `03_research.md` and `03_supplementary.md` both exist, the gate sees two implementer reports for sub-task 03. The check "there must be a corresponding review (`review_03.md`)" would find one review for two reports. Depending on interpretation:

- **Per-number pairing:** Extract unique numbers from implementer reports, check each number has a review. `03` has a review -> passes. This treats multiple files under the same number as a single logical sub-task.
- **Per-file pairing:** Each implementer file must have its own review. Two files need two reviews. `review_03.md` covers only one -> gate fails.

The spec's intent is clearly per-number pairing (the review is `review_<NN>.md`, not `review_<NN>_<description>.md`), so multiple files under the same number should be treated as one logical unit.

The real question is whether the protocol should *permit* multiple implementer files per sub-task. The singular "a report file" suggests not, but nothing explicitly prohibits it. If a sub-agent writes two files, the gate would not catch it as an error (under per-number pairing) even though it violates the intended convention.

**Downstream consequence:** If multiple files exist under the same number, the reviewer was dispatched with a single report file path (spec-mode line 109: "Give it the implementer's report file path (`<NN>_<description>.md`)"). The reviewer may never see the second file. This means not only is the gate ambiguous, but the review itself may be incomplete — the reviewer audited `03_research.md` but never knew `03_supplementary.md` existed. This strengthens the case for explicit prohibition.

### Current Behavior

The gate pairs by number, not by file. Multiple implementer files under the same number would pass the gate if a single `review_<NN>.md` exists.

### Verdict

**Ambiguous but tolerable.** The gate works correctly under per-number pairing, which aligns with the spec's intent. However, the possibility of multiple files per number is not addressed — it is neither prohibited nor acknowledged. The review-coverage gap (reviewer may never see the extra file) makes this more than a gate-logic concern.

**Confidence:** Medium. The "a report file" (singular) convention implies one file per sub-task, but enforcement is absent. An LLM sub-agent could plausibly write multiple files if it felt the output was too large for one.

### Recommended Fix

Either:
- **Prohibit explicitly:** "Each sub-task produces exactly one report file. If the output is too large, consolidate into a single file with sections."
- **Acknowledge and handle:** "If a sub-task produces multiple files under the same number (e.g., `03_research.md` and `03_supplementary.md`), the reviewer must cover all files. The gate pairs by number — one `review_<NN>.md` covers all `<NN>_*.md` files."

The first option is simpler and recommended — it also eliminates the review-coverage gap where the reviewer is given only one file path but multiple files exist.

---

## Edge Case 5: Quality Verification (Content vs. Existence)

### Description

The gate checks that review files *exist*. But does it verify that all reviews say `approved`? If `review_01.md` contains a `needs-revision` verdict and no revision round was ever dispatched, the gate would pass (the file exists) even though the sub-task was never actually approved.

### Analysis

The gate text is purely structural: "for every implementer report there must be a **corresponding review**." It does not say "corresponding *approved* review." The word "pass" appears only in Phase 5's framing ("After all agents complete and **all reviews pass**"), which is a separate statement from the structural gate.

The flow in Phase 4 is supposed to guarantee that by the time Phase 5 is reached, all reviews have passed through the revision loop and reached `approved`. The structural gate in Phase 5 is a *sanity check* that the file artifacts are consistent — not a re-validation of review outcomes.

However, this creates a gap: if the orchestrator's Phase 4 logic has a bug (e.g., it incorrectly interprets a `needs-revision` summary as approval and moves on), the Phase 5 gate will not catch it. The gate was designed as a backstop, but it backstops structure, not quality.

Consider the scenario:
1. Sub-agent 01 runs, writes `01_refactor_auth.md`.
2. Reviewer runs, writes `review_01.md` with verdict `needs-revision`.
3. Orchestrator misinterprets the reviewer's 1-2 sentence summary as positive and moves to Phase 5.
4. Phase 5 gate: `01_refactor_auth.md` exists, `review_01.md` exists. Gate passes.
5. Synthesis proceeds with an unapproved sub-task.

### Current Behavior

The gate checks file existence only. It does not inspect review file content for verdict status.

### Verdict

**Not handled — meaningful gap.** The gate is a structural backstop that catches missing files but not failed reviews. Given that the orchestrator is an LLM (which can misinterpret summaries, as noted in evolution.md's hallucination lesson), a content-level check would significantly strengthen the gate.

**Confidence:** High. The spec text is unambiguous — the gate is structural, not qualitative. The gap is real, not speculative. Whether it matters depends on the reliability of Phase 4 verdict interpretation.

### Tiered-Access Compatibility

The recommended fix below requires the orchestrator to Read review files at the Phase 5 gate. This must be justified within the tiered access framework defined in SKILL.md (lines 35-38).

**Priority 2 in SKILL.md states:**
> **Read** a specific small file — Inspect review verdicts (`review_*.md`) **for dispatch decisions**, or read `task.md` to verify checkbox state. Use when a sub-agent summary is ambiguous or conflicting and you need the actual content to route correctly.

The literal language is anchored in "dispatch decisions" and "route correctly" — vocabulary tied to Phase 3/4 dispatch routing, not Phase 5 synthesis gating. A strict reading would say: Priority 2 does not cover proactive verdict inspection at the synthesis gate, because the orchestrator is not making a dispatch decision at that point.

However, the spirit of Priority 2 clearly supports this use case:
- The action is identical: reading the first line of `review_*.md` to inspect a verdict.
- The purpose is identical: determining whether to proceed or halt (routing in the broad sense).
- The Phase 5 gate is *deciding whether to synthesize or return to Phase 4* — this is functionally a routing decision, even if the spec uses "dispatch" vocabulary.
- The tiered access rules explicitly name `review_*.md` files as the target of Priority 2 reads.

**Recommendation:** The fix is compatible with the *intent* of tiered access but not its *literal dispatch-centric phrasing*. To eliminate ambiguity, the tiered access table in SKILL.md should be updated to say "for dispatch or gate decisions" instead of "for dispatch decisions" — a one-word addition that removes the interpretive gap. Until that update is made, the fix relies on a reasonable interpretation, which should be acknowledged transparently.

### Recommended Fix

Extend the gate to include a content check:

> **Structural gate:** Before synthesizing, `Glob` the change directory and verify:
> 1. **Pairing:** For every implementer report (`<NN>_*.md`), a corresponding `review_<NN>.md` (or revision review) must exist, and vice versa.
> 2. **Verdict:** Read the verdict line of each review file — or the latest revision review if revision files exist. Every review must contain a recognized verdict (`approved` or `needs-revision`). If any review says `needs-revision`, the sub-task is incomplete — halt and return to Phase 4. If the verdict line is missing or unrecognizable, treat the review as malformed — halt and investigate (see Edge Case 6).

This adds minimal overhead (reading the first line of each review file) while catching the most dangerous failure mode. The tiered access justification is outlined above; a corresponding SKILL.md update ("for dispatch or gate decisions") is recommended to close the interpretive gap.

---

## Edge Case 6: Malformed Review Files

### Description

What happens when a review file exists on disk but does not conform to the expected format? The gate (and the Edge Case 5 verdict check) assumes review files follow the specified format: verdict line (`approved` or `needs-revision`) first, then a Findings section. Three malformation scenarios:

**6a. Empty review file (0 bytes).**

The reviewer sub-agent created `review_01.md` but wrote nothing — possibly due to a crash, timeout, or tool error. The file exists, so the current structural gate passes. The Phase 4 revision loop would have relied on the reviewer's 1-2 sentence summary returned to the orchestrator, which might say "approved" even though the file is empty (if the reviewer returned a summary before writing the file, or the file write silently failed). The gate cannot catch this under existence-only checking.

With the Edge Case 5 verdict-check fix applied: reading the first line of an empty file returns nothing — no recognized verdict. The fix should treat this as a gate failure.

**6b. Reviewer writes to the wrong filename.**

For example, `rev_01.md` instead of `review_01.md`. The gate would see no review for sub-task 01 and correctly halt. The misnamed file `rev_01.md` would not match the `review_<NN>.md` pattern, so it is invisible to the gate entirely. Even with the bi-directional check from Edge Case 3, `rev_01.md` does not match either pattern and would not be flagged as orphaned — it would simply go unnoticed.

This is low-probability (the orchestrator tells each reviewer its exact output path in the dispatch prompt), and the gate's halt-on-missing-review behavior provides a correct, if uninformative, catch.

**6c. Verdict not on the first line.**

The reviewer writes the review file with a preamble before the verdict — for example, starting with `## Findings` and placing `needs-revision` on line 3. If the Edge Case 5 fix is implemented as "read the first line for the verdict," a review that does not place the verdict first would be misread.

The review file format is specified in both modes (spec-mode line 118, inline-mode line 65): "Verdict line (`approved` or `needs-revision`), then a Findings section." This clearly mandates the verdict as the first line. But an LLM reviewer might not follow the format strictly, especially if the orchestrator's dispatch prompt does not re-emphasize the format requirement.

### Current Behavior

The gate does not address malformed review files. It checks existence only, so format is irrelevant. If the Edge Case 5 verdict check is added, malformed files become a gap.

### Verdict

**Not handled — becomes relevant when Edge Case 5 fix is applied.** Without the verdict check, malformation is invisible (the gate only checks existence). With the verdict check, all three scenarios can cause incorrect behavior: silent pass on empty files (6a), uninformative halt on wrong filenames (6b), misread verdict on non-standard format (6c).

**Confidence:** High on scenarios 6a and 6c being real gaps once the verdict check exists. 6b is low-probability and has a correct (if blunt) catch already.

### Recommended Fix

Add a malformation clause to the verdict-check step from Edge Case 5:

> 2. **Verdict:** Read the verdict line of each review file (or the latest revision review). The verdict must be one of the recognized keywords: `approved` or `needs-revision`.
>    - If the first line does not contain a recognized verdict keyword, **treat the review as malformed** — halt and investigate. Do not silently pass or silently fail.
>    - If the review file is empty (0 bytes), treat it as malformed.

To reduce the likelihood of scenario 6c, the reviewer dispatch prompt should explicitly re-state the format requirement: "Write the verdict (`approved` or `needs-revision`) as the **first line** of the review file, followed by a `## Findings` section."

For scenario 6b (wrong filename), no gate-level fix is needed — the existing halt-on-missing-review behavior is sufficient. The dispatch prompt already specifies the exact output path, which is the appropriate prevention mechanism.

---

## Summary Table

| # | Edge Case | Handled? | Severity | Fix Needed? |
|---|-----------|----------|----------|-------------|
| 1 | Revision rounds — gate only checks initial review | Partially | Medium | Yes — verify latest revision review is approved |
| 2 | Glob pattern overlap between reports and reviews | Yes | Low | No — naming conventions are watertight |
| 3 | Orphaned review files (no matching report) | In spec, fragile in practice | Medium | Yes — make bi-directional check explicit |
| 4 | Multiple implementer files per sub-task | Ambiguous | Low | Yes — either prohibit or acknowledge; review-coverage gap strengthens prohibit option |
| 5 | Gate checks existence, not verdict content | No | High | Yes — add verdict check to gate; update SKILL.md tiered access phrasing |
| 6 | Malformed review files (empty, wrong name, misplaced verdict) | No (becomes relevant with EC5 fix) | Medium | Yes — add malformation clause to verdict check; re-state format in dispatch prompt |

Edge cases 5 and 1 are the highest-priority fixes. Together they address the scenario where the gate passes structurally but the work is not actually approved. Edge case 6 is a necessary companion to edge case 5 — the verdict check must handle the case where the verdict is absent, unrecognizable, or misplaced. Edge case 3 is a spec-clarity issue that would be caught in a real run but could be missed by a hasty orchestrator. Edge cases 2 and 4 are low-risk.

### Cross-cutting recommendation

The Edge Case 5 fix introduces a Read action at the Phase 5 gate that stretches the literal "dispatch decisions" language in SKILL.md's tiered access table. A one-word update to SKILL.md Priority 2 — changing "for dispatch decisions" to "for dispatch or gate decisions" — would close this interpretive gap and make all recommended fixes cleanly compatible with the tiered access framework.
