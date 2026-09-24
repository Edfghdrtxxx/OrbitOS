<!-- Verbatim source section; overview: [[../fm-ar-feature-norm]] -->
<!-- SOURCE-BODY-START -->
## 9. Reproduction

```bash
# Feature ranges (table §2):
python3 - <<'EOF'
import numpy as np
d = np.load('scripts/plotting/paper_fig_data/physics_feature_distributions.npz')
for k in d.files:
    a = d[k]
    print(k, np.percentile(a, [1,50,99], axis=0))
EOF

# Head-weight / DC-offset analysis (§3): torch-free zip+pickle parse of
# runs/EXP8-XA-Ideal-UnseenChannel/auditfix_d570d34_01/best_model.pth
# keys: classifier.classifier.0.weight (128,68) — cols 64:68 = physics;
#       fusion.query_proj.weight (64,4). Storage tensors read as raw fp32
# from best_model/data/<key>. Full script used: /tmp/fm_feature_norm_weights.py
# (worktree-local, ~60 lines; reproducible from §3 description).

# Code path: src/data/dataset.py:472-475, src/data/normalization.py:24-27,
#   src/models/model.py:337,354-377, src/models/cross_attention.py:72,160,
#   src/models/classifier.py:6, src/evaluation/evaluate_exp8_unseen.py:361-365,384-385,
#   scripts/preprocessing/convert_trk_server_v2.py:443-461.
```

Cross-checks: EXP8 config `physics_dim: 4`, `fusion_type: cross_attention` vs ResNet `none` (configs read directly); counterfactual numbers quoted from `runs/EXP3-*/counterfactual_battery.json` and `20_doc/EXP3_closing_analysis_2026-09-24.md`; Raw-feature informativeness stats quoted from `20_doc/Experiment Recordings/2026-09-23_exp3-xa-raw-cell.md:66,101` (not re-derived — Raw H5s are box-only).
<!-- SOURCE-BODY-END -->
