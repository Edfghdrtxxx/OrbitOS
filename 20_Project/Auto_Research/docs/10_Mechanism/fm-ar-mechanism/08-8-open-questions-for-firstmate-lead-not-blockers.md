<!-- Verbatim source section; overview: [[../fm-ar-mechanism]] -->
<!-- SOURCE-BODY-START -->
## 8. Open questions for firstmate/lead (not blockers)

1. Sync the corrected label-fix battery JSON and non-empty label-fix split before quoting any 4He counterfactual. The local JSON is the void pre-fix positional-label run.
2. Sync prediction dumps for the missing checkpoints; retain the event IDs and true-label equality checks. The paired-stat implementation should fail on any shared-label mismatch rather than silently dropping rows.
3. Confirm whether the pending `threshold_sweep` uses a single joint threshold for both accuracy and balanced accuracy; the existing audit identified a possible “marginal thresholds” false calibration verdict.
4. The query permutation is weak on Raw because Raw physics is near constant; the HC map-level test is the decisive version.
5. D2 physics-only LogReg is the missing traditional classification baseline. Energy regression already has a fair common-roster CNN-versus-classical comparison; angle remains literature-only.

<!-- SOURCE-BODY-END -->
