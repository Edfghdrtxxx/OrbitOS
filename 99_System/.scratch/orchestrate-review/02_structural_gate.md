# Structural Gate Stress Test — Phase 5 (SYNTHESIZE)

Examines the pairing gate in both `spec-mode.md` (line 129) and `inline-mode.md` (line 74). The gate text is identical in both files:

> "for every implementer report (`<NN>_*.md`) there must be a corresponding review (`review_<NN>.md`). If any report lacks a review — or vice versa — halt and investigate before proceeding."

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

The gate would fail — it would see an implementer report `01_*.md` with no matching `review_01.md`. This would correctly trigger a halt-and-investigate, since the missing initial review is anomalous and worth investigating even if a revision review exists.

### Current Behavior

The gate checks for `review_<NN>.md` (initial review only). Revision files are not checked by the gate — they exist as supplementary audit trail.

### Verdict

**Partially handled.** The file-existence check works for the normal flow because initial reviews are never deleted. However, the gate is silent on revision files entirely — it does not verify that the latest review in a revision chain is `approved`. This is a meaningful gap.

**Confidence:** High on the file-persistence claim (the protocol never instructs deletion of initial reviews). Medium on whether this gap matters in practice — it depends on whether the orchestrator is expected to catch "all reviews exist but the sub-task is still in needs-revision state" at the gate level vs. earlier in Phase 4.

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

- **Per-number pairing:** Extract unique numbers from implementer reports, check each number has a review. `03` has a review → passes. This treats multiple files under the same number as a single logical sub-task.
- **Per-file pairing:** Each implementer file must have its own review. Two files need two reviews. `review_03.md` covers only one → gate fails.

The spec's intent is clearly per-number pairing (the review is `review_<NN>.md`, not `review_<NN>_<description>.md`), so multiple files under the same number should be treated as one logical unit.

The real question is whether the protocol should *permit* multiple implementer files per sub-task. The singular "a report file" suggests not, but nothing explicitly prohibits it. If a sub-agent writes two files, the gate would not catch it as an error (under per-number pairing) even though it violates the intended convention.

### Current Behavior

The gate pairs by number, not by file. Multiple implementer files under the same number would pass the gate if a single `review_<NN>.md` exists.

### Verdict

**Ambiguous but tolerable.** The gate works correctly under per-number pairing, which aligns with the spec's intent. However, the possibility of multiple files per number is not addressed — it is neither prohibited nor acknowledged.

**Confidence:** Medium. The "a report file" (singular) convention implies one file per sub-task, but enforcement is absent. An LLM sub-agent could plausibly write multiple files if it felt the output was too large for one.

### Recommended Fix

Either:
- **Prohibit explicitly:** "Each sub-task produces exactly one report file. If the output is too large, consolidate into a single file with sections."
- **Acknowledge and handle:** "If a sub-task produces multiple files under the same number (e.g., `03_research.md` and `03_supplementary.md`), the reviewer must cover all files. The gate pairs by number — one `review_<NN>.md` covers all `<NN>_*.md` files."

The first option is simpler and recommended.

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

### Recommended Fix

Extend the gate to include a content check:

> **Structural gate:** Before synthesizing, `Glob` the change directory and verify:
> 1. **Pairing:** For every implementer report (`<NN>_*.md`), a corresponding `review_<NN>.md` (or revision review) must exist, and vice versa.
> 2. **Verdict:** Read the first line of each review file (or the latest revision review if revision files exist). Every review must contain an `approved` verdict. If any review says `needs-revision`, the sub-task is incomplete — halt and return to Phase 4.

This adds minimal overhead (reading the first line of each review file, which is already within the orchestrator's tiered access permissions at priority level 2) while catching the most dangerous failure mode.

---

## Summary Table

| # | Edge Case | Handled? | Severity | Fix Needed? |
|---|-----------|----------|----------|-------------|
| 1 | Revision rounds — gate only checks initial review | Partially | Medium | Yes — verify latest revision review is approved |
| 2 | Glob pattern overlap between reports and reviews | Yes | Low | No — naming conventions are watertight |
| 3 | Orphaned review files (no matching report) | In spec, fragile in practice | Medium | Yes — make bi-directional check explicit |
| 4 | Multiple implementer files per sub-task | Ambiguous | Low | Yes — either prohibit or acknowledge |
| 5 | Gate checks existence, not verdict content | No | High | Yes — add verdict check to gate |

Edge cases 5 and 1 are the highest-priority fixes. Together they address the scenario where the gate passes structurally but the work is not actually approved. Edge case 3 is a spec-clarity issue that would be caught in a real run but could be missed by a hasty orchestrator. Edge cases 2 and 4 are low-risk.
