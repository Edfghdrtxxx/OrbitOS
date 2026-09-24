<!-- Verbatim source section; overview: [[../fm-ar-gpu-plan-draft]] -->
<!-- SOURCE-BODY-START -->
## 6. Commands used (reproduction)

```bash
# durations: grep 'Training complete in' runs/EXP3-*/*/run.log
# label-fix metrics: cat runs/EXP3-XA-Raw-100k-label-fix-seed42/*/metrics.json
#   → accuracy 0.92136, alpha_recall 0.7254, best_epoch 13
# history: runs/EXP3-XA-Raw-100k-label-fix-seed42/*/history.json → 22 epochs, early-stopped
# 0-byte splits: wc -c runs/EXP3-XA-Raw-100k-{seed0,label-fix-seed42}/*/data_split.json → 0
# buggy battery: cat runs/EXP3-XA-Raw-100k-label-fix-seed42/*/counterfactual_battery.json → original 0.7005
# label-fix recipe: runs/EXP3-XA-Raw-100k-label-fix-seed42/*/config.yaml → file_class_list [1,1,1,1,0]
# scripts present: scripts/analysis/{exp3_dump_predictions,exp3_h1_diagnostics,exp3_counterfactual_battery,exp4_attention_metrics}.py
```
<!-- SOURCE-BODY-END -->
