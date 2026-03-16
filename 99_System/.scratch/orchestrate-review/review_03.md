needs-revision

## Findings

### Overall Assessment

The analysis is thorough and well-structured. Most of the 26 issues are genuine gaps in the protocol text. However, the report suffers from inflation -- several issues are restatements of each other, a few are noise that would add bureaucratic overhead without practical benefit, and the severity ratings need recalibration. The 7 recommendations are mostly sound but two would over-engineer a lightweight protocol.

---

### 1. Issue Count Inflation: 26 Is Overcounted

Several issues are explicitly marked as restatements by the implementer themselves, yet still counted separately:

- **Issue 5** is self-described as "reiteration of issue 1." Should not be a separate issue.
- **Issue 22** is self-described as "reiteration of issue 9." Should not be a separate issue.
- **Issue 21** says "The same issues (18-20) apply symmetrically." This is one observation (naming constraints are unspecified for both modes), not four separate issues.
- **Issue 4** is explicitly flagged as "no issue here, just noting for completeness." It should not be in the issue list at all.

Genuine distinct issue count is closer to **21**, not 26. This matters because the count shapes the reader's perception of how broken the protocol is. An inflated count overstates the problem.

### 2. Severity Overrating: Two "High Priority" Issues Should Be Medium

**Issue 11 (directory creation failure not handled):** Rated high, but in practice the `Write` tool creates parent directories automatically, and the protocol is consumed by LLM agents that will naturally retry or report errors. No user has ever reported a directory creation failure in the three observed sessions. The gap is real but the risk of "runtime failure" is theoretical. Should be **medium**.

**Issue 18/21 (session ID / change-name collision):** Rated high for both. Session IDs are chosen per-conversation and are descriptive of the task. Collision would require the user to orchestrate two sessions with identical topic names. The three real sessions (`imai-review`, `rib-workflow`, `orchestrate-review`) all have naturally unique names. This is a valid gap to document but calling it "could cause runtime failures" overstates the practical risk. **Medium** is more appropriate. The fix (glob before creating) is still worth recommending, but the severity should match reality.

**Issue 24 (no structured format for implementer reports):** Rated high, but the implementer's own evidence undermines this. The `imai-review/` session produced functioning reports that were successfully reviewed. The `rib-workflow/` session produced coherent content-producer files. LLM agents generate reasonable report structures from the prose description "what was changed, where, and any decisions made." A mandatory template would constrain without clear benefit. Should be **medium** at most.

**Correctly rated as high:** Issues 1 and 6 (revision file naming and structural gate ambiguity with revisions) are genuinely high priority. These represent real ambiguity that could cause the orchestrator to make incorrect routing decisions.

### 3. Noise Issues That Should Be Dropped or Demoted

**Issue 2 (`<description>` character constraints):** The report claims this matters because "the structural gate uses glob matching (`<NN>_*.md`)." But the glob `<NN>_*.md` would match regardless of whether the description uses hyphens, spaces, or underscores. The glob does not care about description format -- it matches on the `<NN>_` prefix and `.md` suffix. The only real risk is filenames with spaces causing shell issues, which is a general filesystem hygiene concern, not a protocol-specific gap. Specifying "lowercase, underscore-separated, ASCII alphanumeric only, max 40 characters" (as recommendation 2 proposes) is exactly the kind of bureaucratic overhead the user wants to avoid. **Demote to low or drop.**

**Issue 3 (zero-padding width):** The implementer correctly notes this is "unlikely in practice given typical task counts." The three real sessions have 7, 4, and 7 files respectively. An orchestrate session with 10+ tasks would be unusual and would likely trigger a decomposition review. **Noise -- drop.**

**Issue 19 (session ID character constraints):** Same over-specification problem as issue 2. LLM agents consistently generate kebab-case identifiers from the examples. Codifying "lowercase, hyphen-separated, ASCII alphanumeric only, max 30 characters" adds rules the LLM already follows by convention. The examples are sufficient. **Demote to low or drop.**

**Issue 16 (partial cleanup):** The implementer rates this low and acknowledges "this is arguably the user's problem." Agreed -- drop it entirely. A protocol should not tell users how to delete files selectively.

### 4. Missed Finding: `rib-workflow/` Is Stronger Evidence Than Presented

The implementer notes `rib-workflow/` has no reviews and speculates it "was either a research-only session where reviews were skipped or the orchestrator did not follow the review protocol." This undersells what is actually a significant finding.

The structural gate (inline-mode line 74) says: "for every implementer output (`<NN>_*.md`) there must be a corresponding review (`review_<NN>.md`)." The `rib-workflow/` session has 7 files matching `<NN>_*.md` and zero reviews. If the orchestrator ran the structural gate, it would have halted. Either:

(a) The structural gate was not enforced (protocol violation), or
(b) The orchestrator interpreted "content producers" as exempt from review (reasonable but not stated in the protocol), or
(c) The session was abandoned before reaching Phase 5 (the stale session hypothesis).

This is direct evidence that **the review requirement for content-producer-only sessions is ambiguous in the protocol text.** Inline-mode line 54 says "every implementer agent MUST be paired with a separate reviewer agent," but the content-producer/implementer distinction (lines 30-31) creates uncertainty about whether content producers are "implementers." This should have been called out as a distinct issue and rated at least medium -- it is a real ambiguity that manifested in a real session.

### 5. Missed Finding: `imai-review/` Has a Task Number Gap

The `imai-review/` session contains files for tasks 01 and 03 but no task 02 (no `02_*.md` file). The implementer cites this session as evidence for the `_b` suffix convention but does not mention the numbering gap. This gap is relevant to the `<NN>` semantics discussion (issue 1) -- it suggests task 02 may have been an Explore agent or other non-report-producing sub-agent, meaning `<NN>` numbering can have gaps in practice. This is worth noting as supporting evidence for issue 1 but is not a separate issue.

### 6. Recommendation Quality

**Recommendations 1, 3, 5: Sound and proportionate.** Codifying revision naming, clarifying the structural gate for revisions, and adding collision detection are all actionable fixes that address real ambiguity with minimal protocol bloat.

**Recommendation 2 (naming rules section): Over-engineered.** Specifying "max 40 characters," "ASCII alphanumeric only," and "max 30 characters" for session IDs adds constraint without demonstrated need. The examples in the protocol are sufficient for LLM agents. A lighter touch would be: "Follow the naming style shown in examples (lowercase, separated by underscores for descriptions and hyphens for session IDs)." No character limits needed.

**Recommendation 4 (directory creation validation): Reasonable but low-value.** The Write tool creates directories. A Glob check after the first sub-agent is cheap and harmless, so this can stay, but it solves a problem that has never manifested.

**Recommendation 6 (minimal report format): Borderline.** The status line concept has merit for machine parseability, but mandating a full template (`## What Was Done`, `## Open Questions`) adds rigidity that may not suit all report types. A lighter version -- just the status line requirement -- would be more proportionate.

**Recommendation 7 (standardize directory creation): Fine as stated.** Low priority, minimal cost.

### 7. A Missing Recommendation

The report does not recommend clarifying whether content-producer agents require review. Given the `rib-workflow/` evidence (Finding 4 above), this should be an explicit recommendation: either state that content-producer-only sub-tasks are exempt from mandatory review, or state that they are not.

---

## Summary of Verdict

The analysis identifies genuine protocol gaps, particularly around revision file naming (issue 1), structural gate ambiguity with revisions (issue 6), and the undocumented content-producer review exemption. However, the report overcounts issues through restatement, overrates several medium-priority items as high, includes noise issues that would add bureaucratic overhead, and misses the strongest implication of its own `rib-workflow/` evidence. Needs revision to tighten the issue list, recalibrate severities, and add the content-producer review ambiguity as a distinct finding.
