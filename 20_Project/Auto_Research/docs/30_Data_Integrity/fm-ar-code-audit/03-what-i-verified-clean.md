<!-- Verbatim source section; overview: [[../fm-ar-code-audit]] -->
<!-- SOURCE-BODY-START -->
## What I verified clean

- PR 1's exact McNemar implementation matches SciPy's two-sided exact binomial oracle in the focused tests; paired bootstrap uses the same resample indices for both arms.
- PR 2's angle baseline changes (orientation, CSV validation, finite-prediction guards, lazy torch import) passed the baseline-angle and smoke tests; no event-order or slot-contract failure was reproduced.
- PR 3's isotope parser/features and separability metrics passed their focused tests. The raw-label convention used to diagnose PR 5 is explicit in this code.
- PR 4 provenance and restored battery invocation passed provenance tests; provenance does not alter numerical calculations.
- PR 6 D6 conditions, subset invariant, and swap cursor passed focused tests. The skipped-condition behavior is the fallback risk noted above.
- PR 7 physics normalization passed all dedicated tests. The main training path computes physics statistics from `norm_train_indices` only (`src/run_experiment.py:1363-1377`) and evaluation paths load the persisted scaler; I found no train/validation leakage in the merged code.
- PR 8 table collector passed its focused tests. Its “triton-vs-rest (label bug)” label is consistent with the raw Garfield label contract; the label-fix run has `file_class_list`.
- PR 9 subset provenance, threshold sweep mechanics, selection-bias parsing, and reproducibility tests passed; only the joint-threshold verdict logic above is incorrect.

<!-- SOURCE-BODY-END -->
