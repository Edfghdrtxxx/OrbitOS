> Origin: `fm-ar-methods-audit` scout report; recorded 2026-09-24.

<!-- SOURCE-PREFIX-START -->
# Scout report: manuscript method statements vs. code (EXP3 campaign audit)

**Question (firstmate spec):** which method/setup claims in `10_Papers-Thesis/Physics_Informed/main.tex` disagree with the code/configs that produced the reported results? Deliverable: claim-by-claim table (verified / mismatch / unverifiable, file:line on both sides) + prioritized mismatch list. Manuscript read-only; nothing under `10_Papers-Thesis/` touched.

**Manuscript audited:** `/Users/Reid Hu/MATE-Automation/10_Papers-Thesis/Physics_Informed/main.tex` (606 lines, rev. with EXP8 unseen-channel section). Line numbers below are that file.

**Evidence base.** Three provenance tiers:
- **This repo (worktree HEAD = live checkout code):** EXP1/EXP2/EXP3/EXP8/TRK1–6/Z01/baselines. Code cited as `src/...`, `configs/...`, `scripts/...` (identical in worktree and live checkout).
- **Run artifacts (live checkout `runs/`, gitignored):** `runs/<EXP>/<stamp>/{config.yaml,metrics.json,...}` — read-only.
- **Legacy V3/V4/V6 codebase** (Windows box, not locally readable): behavior pinned by the reproduction specs `20_doc/Legacy Codebase/S1..S5-*/spec.md`, which record audited legacy-code behavior with "divergence resolutions" (D-*). Where a claim depends on legacy code I cite the spec line; these are documented facts about the published runs, not inferences.

Verdict key: **V** = verified, **M** = mismatch, **P** = partially wrong / incomplete disclosure, **U** = unverifiable locally (needs box/legacy file).

---

<!-- SOURCE-PREFIX-END -->

<!-- Original report body is reconstructed from the prefix and linked verbatim sections below. -->
## Contents

- [[40_Manuscript_Provenance/fm-ar-methods-audit/01-1-claim-by-claim-table|1. Claim-by-claim table]]
- [[40_Manuscript_Provenance/fm-ar-methods-audit/02-2-prioritized-mismatches-for-the-captain|2. Prioritized mismatches for the captain]]
- [[40_Manuscript_Provenance/fm-ar-methods-audit/03-3-verified-clean-highlights-no-action-needed|3. Verified-clean highlights (no action needed)]]
- [[40_Manuscript_Provenance/fm-ar-methods-audit/04-4-open-questions-for-the-lead-not-blocking|4. Open questions for the lead (not blocking)]]
- [[40_Manuscript_Provenance/fm-ar-methods-audit/05-5-reproduction|5. Reproduction]]

<!-- ORIGINAL-BODY-SHA256: 775ca3ac9635c9e6709145a148f6afbdb5a9377f14ce94a0b932df08e083cb7c -->
<!-- ORIGINAL-BODY-BYTES: 31910 -->
