<!-- Verbatim source section; overview: [[../fm-ar-gpu-ladder]] -->
<!-- SOURCE-BODY-START -->
## 1.1 Measured cost basis (from `run.log` "Training complete in N seconds", all on the same AutoDL box)

| Arm | Runs (epochs) | Train time each | Mean | min/epoch |
|---|---|---|---|---|
| RN-HC | 37 / 32 / 30 ep | 3.42 / 2.96 / 2.77 h | **3.1 h** | ~5.5 |
| RN-Raw | 20 / 19 / 20 ep | 4.84 / 4.59 / 4.89 h | **4.8 h** | ~14.6 |
| XA-HC | 31 / 37 / 38 ep | 2.93 / 3.49 / 3.52 h | **3.3 h** | ~5.6 |
| XA-Raw | 20 ep (s42); 23 ep (s0) | 4.91 h (s42, logged); s0 run.log not synced → est 23 ep × 14.7 ≈ 5.6 h | **~4.9–5.6 h** | ~14.7 |
| XA-Raw-lf (4He) | 22 ep, early-stopped | run.log not synced → est 22 ep × 14.7 ≈ **5.4 h** | — | — |

**Billed-wall caveat (cost disagreement, flagged):** gpu-plan-draft plans billed wall ≈ train ×1.3. The one observed XA-Raw run-directory wall span was ~13.7 h vs 4.91 h logged training (×2.8 — eval + queue/idle inside the job). seed-evidence's "XA-Raw 7–14 h" figure used that wall span, not train time — **not a real disagreement about GPU-hours consumed, but a real disagreement about what to budget**. Recommendation: budget Raw cells at the pessimistic ~7 h billed; HC cells are predictable (~3–4 h billed). All "billed" figures below use ×1.3 with the pessimistic Raw cap noted.

<!-- SOURCE-BODY-END -->
