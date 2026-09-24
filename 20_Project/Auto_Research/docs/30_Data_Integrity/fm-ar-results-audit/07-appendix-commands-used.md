<!-- Verbatim source section; overview: [[../fm-ar-results-audit]] -->
<!-- SOURCE-BODY-START -->
## Appendix — commands used

```bash
# metrics dump: for d in runs/EXP3-*/*/; cat $d/metrics.json
# battery:      cat runs/EXP3-*/*/counterfactual_battery.json  (6 files)
# attention:    cat runs/EXP3-*/*/exp4_attention_metrics.json  (4 files)
# dynamics:     python3 -c 'history.json → best/final/first-5 val_acc, train_acc'
# table:        python3 scripts/analysis/compare_exp3_runs.py
# audit:        python3 -c 'walk 20_doc/audits/2026-09-23_raw-hc-input-audit.json'
# recipe:       cat runs/EXP3-XA-Raw-100k-seed42/20260922_185618/config.yaml
# label map:    grep _LABEL_MAP_BINARY src/data/dataloader.py  (line 49)
# guard:        grep allow_legacy_label_map src/run_experiment.py  (lines 383-400)
# hooks:        grep physics_query_override src/models/model.py  (lines 263-264)
# recovery:     metrics.json → evaluation_recovery; run.log tail (RuntimeError, 294.5 min)
# checkpoints:  find runs -name '*.pth'  → only EXP8 (no EXP3 weights local)
```
<!-- SOURCE-BODY-END -->
