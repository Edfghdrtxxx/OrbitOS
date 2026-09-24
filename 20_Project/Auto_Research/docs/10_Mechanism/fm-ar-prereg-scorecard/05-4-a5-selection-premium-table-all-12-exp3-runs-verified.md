<!-- Verbatim source section; overview: [[../fm-ar-prereg-scorecard]] -->
<!-- SOURCE-BODY-START -->
## 4. A5 — selection-premium table, all 12 EXP3 runs (verified)

`exp3_selection_bias.py` over every `history.json`; `selection_gap = best_val_acc − final_val_acc` (the disclosed upper bound on val-reuse optimism). Output: `selection_bias_12run.json`.

| Run | best val_acc @epoch | final val_acc | premium |
|---|---|---|---|
| EXP3-ResNet-HC-100k-seed0 | 0.95448 @30 | 0.94880 | +0.57 pp |
| EXP3-ResNet-HC-100k-seed1 | 0.95752 @27 | 0.95136 | +0.62 pp |
| EXP3-ResNet-HC-100k-seed42 | 0.95904 @27 | 0.95416 | +0.49 pp |
| EXP3-ResNet-Raw-100k-seed0 | 0.88900 @17 | 0.88592 | +0.31 pp |
| EXP3-ResNet-Raw-100k-seed1 | 0.89224 @3 | 0.88128 | +1.10 pp |
| EXP3-ResNet-Raw-100k-seed42 | 0.89240 @18 | 0.89028 | +0.21 pp |
| EXP3-XA-HC-100k-seed0 | 0.95420 @23 | 0.94548 | +0.87 pp |
| EXP3-XA-HC-100k-seed1 | 0.95788 @21 | 0.94936 | +0.85 pp |
| EXP3-XA-HC-100k-seed42 | 0.95672 @22 | 0.95228 | +0.44 pp |
| EXP3-XA-Raw-100k-label-fix-seed42 | 0.92140 @13 | 0.91924 | +0.22 pp |
| EXP3-XA-Raw-100k-seed0 | 0.87584 @7 | 0.85844 | +1.74 pp |
| EXP3-XA-Raw-100k-seed42 | 0.87100 @12 | 0.85964 | +1.14 pp |

**Summary (scorer JSON):** n=12, mean **+0.71 pp**, min **+0.21 pp**, max **+1.74 pp**. The agenda's "0.21–1.74 pp, mean 0.71 pp" is **verified exact**. The paired s42 XA-vs-RN final-epoch gap is −3.064 pp (vs −2.128 pp at best epoch) — arm-symmetric cancellation does not rescue the deficit; it deepens it.

---

<!-- SOURCE-BODY-END -->
