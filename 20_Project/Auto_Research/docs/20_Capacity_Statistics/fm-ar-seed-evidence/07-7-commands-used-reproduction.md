<!-- Verbatim source section; overview: [[../fm-ar-seed-evidence]] -->
<!-- SOURCE-BODY-START -->
## 7. Commands used (reproduction)

```bash
# inventory
ls /Users/Reid\ Hu/MATE-Automation/runs/EXP3-*/*/
find /Users/Reid\ Hu/MATE-Automation/runs -name '*.pth'        # → EXP8 only
# metrics/stats: python3 json.load on metrics.json, counterfactual_battery.json,
#   exp4_attention_metrics.json, history.json, run_complete.json per run dir
# split identity: diff of val_indices in the two s42 data_split.json → identical
# stats: Wilson CI, unpaired z, McNemar bound χ²≥nΔ² — plain python3, no deps
```

<!-- SOURCE-BODY-END -->
