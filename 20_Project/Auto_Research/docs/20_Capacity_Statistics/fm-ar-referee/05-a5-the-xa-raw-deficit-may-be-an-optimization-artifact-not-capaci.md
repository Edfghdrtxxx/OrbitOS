<!-- Verbatim source section; overview: [[../fm-ar-referee]] -->
<!-- SOURCE-BODY-START -->
## A5. The XA-Raw deficit may be an optimization artifact, not capacity
- **Hits:** C2 (XA < RN on Raw) and the H1a-capacity reading.
- **Why it bites:** XA-Raw is the only arm whose val_acc *falls* after peaking (best ep 7/12 → final −1.1/−1.7pp; closing doc §2). The recipe (lr 1e-4, dropout 0.3, wd 1e-4, bs 128, ls 0.05 — identical across all 12 configs, verified) was inherited, not tuned per-arm. A referee asks: "did you try *any* hyperparameter variation on the losing arm? A model that peaks at epoch 7 and degrades is under-regularized or over-noised, not necessarily capacity-limited." The deficit could shrink or vanish with lower lr / higher dropout / physics-input noise regularization.
- **Already answered?** Partially — closing doc §2 uses the degradation as evidence *for* H2 over H1a, but no control run exists. D1–D4 probes (in flight) localize the bottleneck but cannot exclude "a better-tuned XA-Raw matches RN-Raw."
- **Cheapest check:** **needs GPU** for the real answer (one XA-Raw run with e.g. dropout 0.5 or lr 3e-5, ~5h). CPU-partial: D1/D3 probes (in flight) bound how much is representation vs head — if `probe_XA ≈ probe_RN`, the capacity story dies regardless of tuning.

<!-- SOURCE-BODY-END -->
