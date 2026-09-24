<!-- Verbatim source section; overview: [[../fm-ar-closing-check]] -->
<!-- SOURCE-BODY-START -->
## What I verified on disk myself

```bash
cat runs/EXP3-XA-Raw-100k-label-fix-seed42/20260923_154749/counterfactual_battery.json
# → corrected run: original 0.9275, zero_q 0.8065, permuted_q 0.9275, zero_cls 0.1935, zero_both 0.5235 (mtime 15:21)
cat runs/EXP3-XA-Raw-100k-label-fix-seed42/20260923_154749/metrics.json
# → accuracy 0.92136, alpha_recall 0.7254, best_epoch 13, best_val_acc 0.9214, CM [[3627,1373],[593,19407]]
#   (field is best_val_acc — "test acc" in §4 is validation accuracy; no test split exists)
history.json → 22 epochs (early-stopped; doc's "ep21" = 0-indexed epoch 21)
all 6 counterfactual_battery.json → 5 conditions each; no permuted_cls/mean_cls/event_indices/script-version
find runs/EXP3-* -name 'predictions*' → still only RN-HC-s42 predictions.csv (predump chain not yet synced)
```

<!-- SOURCE-BODY-END -->
