> Origin: `fm-ar-d14-bign` scout report; recorded 2026-09-24.

<!-- SOURCE-PREFIX-START -->
# fm-ar-d14-bign: D1–D4 at n≈8000 — cannot run on this Mac; verified patch + exact GPU-box command + analytic MDE

**Date:** 2026-09-24 · **Worker:** fm-ar-d14-bign (scout) · **Scope:** re-run `scripts/analysis/exp3_h1_diagnostics.py` at n≈8000 with k-fold CV probes. **Outcome: STOPPED at spec step 1 — required inputs are not on this Mac.** No remote boxes touched (per campaign rules). The probe-side patch the run needs (k-fold CV + D4 hypergeometric test + `--report-peak-rss`) is written, verified end-to-end on synthetic features locally, and embedded below as a proposed patch.

---

<!-- SOURCE-PREFIX-END -->

<!-- Original report body is reconstructed from the prefix and linked verbatim sections below. -->
## Contents

- [[20_Capacity_Statistics/fm-ar-d14-bign/01-0-verdict-up-front|0. Verdict up front]]
- [[20_Capacity_Statistics/fm-ar-d14-bign/02-1-what-exists-where-evidence|1. What exists where (evidence)]]
- [[20_Capacity_Statistics/fm-ar-d14-bign/03-2-exact-command-for-a-cpu-capable-box-box-176-or-autodl|2. Exact command for a CPU-capable box (box 176 or AutoDL)]]
- [[20_Capacity_Statistics/fm-ar-d14-bign/04-3-proposed-patch-verified-locally-do-not-commit-from-this-sc|3. Proposed patch (verified locally — do not commit from this scout)]]
- [[20_Capacity_Statistics/fm-ar-d14-bign/05-4-analytic-answer-to-the-verdict-question-n-8000-k-5-cv|4. Analytic answer to the verdict question (n=8000, k=5 CV)]]
- [[20_Capacity_Statistics/fm-ar-d14-bign/06-5-doc-manuscript-implications-findings-only-no-edits-made|5. Doc/manuscript implications (findings only — no edits made)]]
- [[20_Capacity_Statistics/fm-ar-d14-bign/07-6-what-i-did|6. What I did]]
- [[20_Capacity_Statistics/fm-ar-d14-bign/08-7-captain-hold-inventory|7. Captain-hold inventory]]

<!-- ORIGINAL-BODY-SHA256: d252d2ac26d01337e76c4aaaca87c4bdfb161c807c43bee3ec6720243fef6ea6 -->
<!-- ORIGINAL-BODY-BYTES: 21151 -->
