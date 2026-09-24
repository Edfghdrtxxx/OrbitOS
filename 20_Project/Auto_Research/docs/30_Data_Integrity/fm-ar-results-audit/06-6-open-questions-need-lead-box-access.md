<!-- Verbatim source section; overview: [[../fm-ar-results-audit]] -->
<!-- SOURCE-BODY-START -->
## 6. Open questions (need lead/box access)

- **Q1:** label-fix `history.json`/`metrics.json` — do they exist on box? Needed to back 0.9214@ep13 / 0.8913@ep3.
- **Q2:** seed-0 patched checkpoint `best_val_acc` = 0.87584 — confirmable only on box.
- **Q3:** raw outputs behind the input-audit numbers (Jaccard, lag-corr, σ, dihedral, Ch1 elevation, point-biserial, CV) — which script/file produced them? `2026-09-23_raw-hc-input-audit.json` does not contain them.
- **Q4:** EXP4 sink stats (max-weight, entropy, argmax/token-50 histogram, on-track %) — which eval produced 444/512? The synced `exp4_attention_metrics.json` (n=500) lacks these fields.
- **Q5:** is the local label-fix `counterfactual_battery.json` the pre-fix or post-fix run?

<!-- SOURCE-BODY-END -->
