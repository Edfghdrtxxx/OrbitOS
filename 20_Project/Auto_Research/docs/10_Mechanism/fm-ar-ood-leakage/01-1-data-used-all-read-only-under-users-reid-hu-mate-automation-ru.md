<!-- Verbatim source section; overview: [[../fm-ar-ood-leakage]] -->
<!-- SOURCE-BODY-START -->
## 1. Data used (all read-only under `/Users/Reid Hu/MATE-Automation/runs`)

| Artifact | Path | Used for |
|---|---|---|
| Per-event predictions | `runs/EXP8-{XA,ResNet}-Ideal-UnseenChannel/auditfix_d570d34_01/eval_exp8/predictions.csv` (475,000 rows each; `channel,global_idx,true_class,pred_class,p_A,p_B,p_other,rejection_score`) | all leak/confidence/AUROC tables |
| Eval metrics | `…/eval_exp8/metrics.json` | cross-checks (my AUROC recomputation matches `ood.*.auroc` to 4 decimals) |
| Frozen head weights | `…/best_model.pth` → `classifier.classifier.{0,3}.{weight,bias}` (parsed without torch via zip+pickle) | head extrapolation sweeps, leak-direction decomposition |
| Penultimate cache | `outputs/figures/EXP8/_cache_feature_embedding/{CrossAtt,ResNet}_penultimate.npz` (128-d post-`Linear(68→128)+ReLU` hidden, 1500 events/group: A, B, C+D, E, F+G+H) | hidden-space mechanism evidence |
| Leaked event displays | `outputs/figures/EXP8/Leaked Event Displays/exp8_leaked_LEAKED_ev*.png` | visual check of leaked events |
| Closing doc | `20_doc/EXP3_closing_analysis_2026-09-24.md` §8–12 | `zero_cls`/`permuted_q` context |

Channel map (from `metrics.json:data_inputs`): A=p (class 0), B=d (class 1), C=t, D=³He, null (class 2, seen); E=⁴He, F=¹³C, G=¹⁴C, H=¹²C (unseen, all labeled class 2). `rejection_score = 1 − max(p_A, p_B)` (`src/evaluation/evaluate_exp8_unseen.py:130-133`). Unseen channels are evaluated with their **real** stored physics features (`evaluate_exp8_unseen.py:384-385` — `needs_physics` → `model(images, physics_features=batch[1])`).

<!-- SOURCE-BODY-END -->
