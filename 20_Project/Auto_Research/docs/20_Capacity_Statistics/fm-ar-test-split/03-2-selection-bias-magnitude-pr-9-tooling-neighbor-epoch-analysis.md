<!-- Verbatim source section; overview: [[../fm-ar-test-split]] -->
<!-- SOURCE-BODY-START -->
## 2. Selection-bias magnitude (PR#9 tooling + neighbor-epoch analysis)

Command run on the live checkout:

```bash
python3 scripts/analysis/exp3_selection_bias.py runs/EXP3-*/*/
```

Result over all 12 EXP3 histories (`best_val_acc − final_val_acc`, the disclosed bound from the tool's own definition):

| Run | best val | @ep | final val | gap | best−mean(nbrs) |
|---|---|---|---|---|---|
| RN-HC s0 | 0.95448 | 30 | 0.94880 | +0.57pp | +0.75pp |
| RN-HC s1 | 0.95752 | 27 | 0.95136 | +0.62pp | +0.29pp |
| RN-HC s42 | 0.95904 | 27 | 0.95416 | +0.49pp | +0.43pp |
| RN-Raw s0 | 0.88900 | 17 | 0.88592 | +0.31pp | +0.32pp |
| RN-Raw s1 | 0.89224 | 3 | 0.88128 | +1.10pp | +2.09pp |
| RN-Raw s42 | 0.89240 | 18 | 0.89028 | +0.21pp | +0.92pp |
| XA-HC s0 | 0.95420 | 23 | 0.94548 | +0.87pp | +0.18pp |
| XA-HC s1 | 0.95788 | 21 | 0.94936 | +0.85pp | +0.89pp |
| XA-HC s42 | 0.95672 | 22 | 0.95228 | +0.44pp | +0.03pp |
| **XA-Raw lf s42** | **0.92140** | **13** | **0.91924** | **+0.22pp** | **+0.37pp** |
| XA-Raw s0 | 0.87584 | 7 | 0.85844 | +1.74pp | +2.06pp |
| XA-Raw s42 | 0.87100 | 12 | 0.85964 | +1.14pp | +1.78pp |

Summary (tool output): `n_runs=12, gap_mean=0.71pp, gap_max=1.74pp, gap_min=0.21pp`.

Interpretation:

- The gap mixes two things: genuine late-training regression (overfitting — real, would also appear on a test set) and the selection premium (noise-picking — would not). The neighbor-epoch column (best minus mean of epochs best±1) isolates mostly the noise component: **0.03–2.1pp, typically ≲0.9pp**. Either way the honest bound to disclose is **≲1–2pp optimistic on any single-arm number, ≲0.3pp for the flagship lf run**.
- For the campaign's actual use — **paired XA-vs-RN deltas on the same val events** — the bias is arm-symmetric and largely cancels; McNemar on paired predictions is unaffected by the shared selection set (it conditions on per-event discordance, not on absolute accuracy).
- The tool is torch-free and ran locally in <1s. Its JSON output is reproducible; the per-run numbers above are its verbatim output plus my neighbor-epoch column computed from the same `history.json` files.

---

<!-- SOURCE-BODY-END -->
