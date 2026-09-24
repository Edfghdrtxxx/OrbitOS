<!-- Verbatim source section; overview: [[../fm-ar-ood-leakage]] -->
<!-- SOURCE-BODY-START -->
## 11. Reproduction

```bash
# All read-only. Analysis script: /tmp/ood_leak/analyze.py (worktree-local, ~150 lines).
python3 /tmp/ood_leak/analyze.py   # tables 1-9: leakage, confidence, AUROC, idx-clustering, cross-arm
# Head-weight extraction + sweeps: zip+pickle parse of best_model.pth (no torch needed),
#   keys classifier.classifier.{0,3}.{weight,bias}; W1[:,64:68] = physics columns.
# Penultimate cache: outputs/figures/EXP8/_cache_feature_embedding/{CrossAtt,ResNet}_penultimate.npz
#   X (7500,128) post-Linear(68->128)+ReLU hidden; y in {A,B,C+D,E,F+G+H}, 1500 each.
#   logits = X @ W2.T + b2 reproduces the full-data leak rates (XA F+G+H 8.4% vs 8.3%).
```

Key numbers cross-validated: my recomputed `rejection_score` AUROCs equal `metrics.json:ood.*.auroc` to 4 decimals; cached-hidden leak rate (8.4%) matches full-data rate (8.3%); per-channel confusion matches `metrics.json:per_channel_confusion` exactly.
<!-- SOURCE-BODY-END -->
