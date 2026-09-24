<!-- Verbatim source section; overview: [[../fm-ar-gpu-plan-draft]] -->
<!-- SOURCE-BODY-START -->
## 1. GPU-hour basis (measured, not estimated)

From `run.log` "Training complete in N seconds" in each run dir (all trained on the same AutoDL box):

| Arm | Runs (epochs) | Train time each | Mean | min/epoch |
|---|---|---|---|---|
| RN-HC | 37 / 32 / 30 ep | 3.42 / 2.96 / 2.77 h | **3.1 h** | 5.5 |
| RN-Raw | 20 / 19 / 20 ep | 4.84 / 4.59 / 4.89 h | **4.8 h** | 14.6 |
| XA-HC | 31 / 37 / 38 ep | 2.93 / 3.49 / 3.52 h | **3.3 h** | 5.6 |
| XA-Raw | 20 ep (s42); 23 ep (s0, recovered) | 4.91 h (s42) | **~4.9–5.6 h** | 14.7 |
| XA-Raw-lf | 22 ep (done) | not logged locally | **~5.4 h est.** (22 ep × 14.7 min) | — |

**Variance warning:** XA-Raw-s42's run-*directory* wall span was ~13.7h vs 4.9h of logged training (eval + queue/idle inside the job). For budget gating, plan billed wall-clock ≈ train time ×1.3, or cap XA-Raw cells at ~7h. HC cells are cheap and predictable (~3h); Raw cells are the budget driver (~5h, up to ~7h worst case).

Label-fix configs: the completed run used the triton config + `file_class_list: [1,1,1,1,0]` over hdf5 order (p,d,t,³He,⁴He) — verified in its `config.yaml`. The other three -lf arms are the same mutation of their triton configs; no new config design needed.

<!-- SOURCE-BODY-END -->
