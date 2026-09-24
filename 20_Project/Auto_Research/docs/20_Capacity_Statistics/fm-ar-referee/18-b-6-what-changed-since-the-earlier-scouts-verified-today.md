<!-- Verbatim source section; overview: [[../fm-ar-referee]] -->
<!-- SOURCE-BODY-START -->
## B.6 What changed since the earlier scouts (verified today)

1. Label-fix run **completed and synced**: metrics.json (0.92136), history.json (22 ep, early-stopped), config.yaml (`file_class_list [1,1,1,1,0]`). Was "partial/killed" in seed-evidence; "completed" in gpu-plan-draft.
2. Label-fix `counterfactual_battery.json` is now the **corrected** run (0.9275 original) — audit flag F2 resolved; the buggy 0.7005 JSON is no longer on disk.
3. Still missing: `data_split.json` 0 bytes for XA-Raw-s0 and XA-Raw-lf; no `predictions.csv` beyond RN-HC-s42; no `h1_diagnostics.json` (D1–D4 not yet synced); no D5 conditions in any battery JSON; no `exp4_attention_metrics.json` for XA-Raw-s0 or XA-Raw-lf.

<!-- SOURCE-BODY-END -->
