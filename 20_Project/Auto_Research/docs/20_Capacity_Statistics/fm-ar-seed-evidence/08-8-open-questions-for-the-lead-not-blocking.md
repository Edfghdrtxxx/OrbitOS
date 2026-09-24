<!-- Verbatim source section; overview: [[../fm-ar-seed-evidence]] -->
<!-- SOURCE-BODY-START -->
## 8. Open questions for the lead (not blocking)

1. Do RN `best_model.pth` files still exist on box 176? Battery JSONs reference only XA checkpoints; G0 needs all 11.
2. Did the corrected label-fix battery re-run land? Local `EXP3-XA-Raw-100k-label-fix-seed42/.../counterfactual_battery.json` may predate the positional-label fix (closing doc §12 caveat).
3. XA-Raw-s0 `data_split.json` is 0 bytes locally — re-sync; also its `exp4_attention_metrics.json` was never produced (worth a CPU pass for the C10 single-seed gap).
4. Label-fix run dir has no metrics/history/config locally — does the full run record exist on-box (for the ep13 val trajectory + restart decision)?
5. `predictions.csv` exists only for ResNet-HC-s42 — was that a one-off manual eval, or does the training pipeline emit it only on demand? Determines whether G0 is a script flag or a new eval pass.
<!-- SOURCE-BODY-END -->
