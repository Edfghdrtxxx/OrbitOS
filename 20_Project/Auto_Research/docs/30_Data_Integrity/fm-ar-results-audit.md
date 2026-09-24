> Origin: `fm-ar-results-audit` scout report; recorded 2026-09-24.

<!-- SOURCE-PREFIX-START -->
# EXP3 Results Audit — which quantitative claims are backed by current artifacts

**Auditor:** fm-ar-results-audit (scout, read-only on `/Users/Reid Hu/MATE-Automation`)
**Date:** 2026-09-24
**Scope:** every quantitative claim in `20_doc/EXP3_closing_analysis_2026-09-24.md` (closing doc) and `20_doc/Experiment Recordings/2026-09-23_exp3-xa-raw-cell.md` (recording doc), plus the Results claims in `20_doc/paper/paper_anchor.md` (read-only), checked against `runs/EXP3-*/` artifacts (metrics.json, history.json, counterfactual_battery.json, exp4_attention_metrics.json, run_complete.json, config.yaml, run.log, data_split.json, normalization_stats.json) and `20_doc/audits/2026-09-23_raw-hc-input-audit.json`.

**Method:** recomputed all means/stds/deltas/z-tests from the JSONs with python3; ran `scripts/analysis/compare_exp3_runs.py` (reproduces the full 11-run table); grepped configs and source for recipe/label-map claims. "Unbacked" = the number cannot be reproduced from any artifact present in the local checkout (it may exist in box-side logs the lead has; flagged as open questions, not errors).

**Verdict summary:** the core result tables (§1, §2, §3, §8, §9, §11, §12 of the closing doc) are **numerically accurate** — every battery and metrics number recomputes exactly. The problems are: (a) one sign error, (b) two count/wording errors, (c) a block of unbacked numbers (label-fix val trajectory, EXP4 sink stats, most audit-derived numbers), (d) the label-fix battery file may be the known-buggy run, and (e) several headline claims rest on n=1 or on the contested zero_cls reading.

---

<!-- SOURCE-PREFIX-END -->

<!-- Original report body is reconstructed from the prefix and linked verbatim sections below. -->
## Contents

- [[30_Data_Integrity/fm-ar-results-audit/01-1-closing-doc-20doc-exp3closinganalysis2026-09-24-md|1. Closing doc `20_doc/EXP3_closing_analysis_2026-09-24.md`]]
- [[30_Data_Integrity/fm-ar-results-audit/02-2-recording-doc-20doc-experiment-recordings-2026-09-23exp3-xa-ra|2. Recording doc `20_doc/Experiment Recordings/2026-09-23_exp3-xa-raw-cell.md`]]
- [[30_Data_Integrity/fm-ar-results-audit/03-3-20doc-paper-paperanchor-md-read-only|3. `20_doc/paper/paper_anchor.md` (read-only)]]
- [[30_Data_Integrity/fm-ar-results-audit/04-4-cross-cutting-flags|4. Cross-cutting flags]]
- [[30_Data_Integrity/fm-ar-results-audit/05-5-prioritized-corrections-for-the-lead|5. Prioritized corrections for the lead]]
- [[30_Data_Integrity/fm-ar-results-audit/06-6-open-questions-need-lead-box-access|6. Open questions (need lead/box access)]]
- [[30_Data_Integrity/fm-ar-results-audit/07-appendix-commands-used|Appendix — commands used]]

<!-- ORIGINAL-BODY-SHA256: c7945a0b9f87302a23d1acb2ba2973334d5f3b1396ada99ed3501fa4d9003523 -->
<!-- ORIGINAL-BODY-BYTES: 23126 -->
