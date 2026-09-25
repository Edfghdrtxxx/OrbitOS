<!-- Verbatim source section; overview: [[../fm-ar-label-settle]] -->
<!-- SOURCE-BODY-START -->
## 2. Concern 2 — EXP2 clean accuracy: unrecoverable

- **No EXP2 artifact survives anywhere checked:** `find` on the Mac → zero EXP2 files under `runs/`; box 176 → zero EXP2 run dirs or checkpoints (only configs); OrbitOS → none. The two contaminated runs' `predictions.csv`, `data_split.json`, `metrics.json`, and `best_model.pth` existed only on Windows.
- **Option A (rescore) is dead** — nothing to join. `scripts/analysis/exp2_clean_rescore.py` exists (merged, PR https://github.com/Edfghdrtxxx/MATE-Automation-V4/pull/23) but has no inputs.
- **Option B (checkpoint CPU re-eval) is dead** — no checkpoints.
- **The estimate stands:** clean-subset ≈ **95.7–95.8%** for both arms (carbon accuracy physically ≈100%, CM-arithmetic bound ≥89%; exp2-contam §2.2). Statistically indistinguishable from EXP1-XA's 95.80%.
- **Verdict: cannot be settled from surviving evidence.** The exact number is gone; only a retrain produces a real one.

---

<!-- SOURCE-BODY-END -->
