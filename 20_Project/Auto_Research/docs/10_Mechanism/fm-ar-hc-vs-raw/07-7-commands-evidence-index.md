<!-- Verbatim source section; overview: [[../fm-ar-hc-vs-raw]] -->
<!-- SOURCE-BODY-START -->
## 7. Commands / evidence index

```bash
# pipeline identity: src/data/dataset.py:424-502 (getitem), src/data/normalization.py:113-115
# ResNet physics-free: runs/EXP3-ResNet-HC-100k-seed42/*/config.yaml → fusion_type: none; src/models/model.py:199-202
# spec: 20_doc/Legacy Codebase/S1-foundation-data-pipeline/spec.md Req-2.3/2.4/2.5/3.1/3.2/4.1/4.4/5.1-5.5
# audit: 20_doc/audits/2026-09-23_raw-hc-input-audit.json (paired block per file; aggregate §)
# batteries: runs/EXP3-XA-*/2*/counterfactual_battery.json — all 6 lack permuted_cls/mean_cls/pred_histograms
# norm stats: runs/EXP3-*-seed42/*/normalization_stats.json (variance_floor, 3200 samples, seed-matched)
```

<!-- SOURCE-BODY-END -->
