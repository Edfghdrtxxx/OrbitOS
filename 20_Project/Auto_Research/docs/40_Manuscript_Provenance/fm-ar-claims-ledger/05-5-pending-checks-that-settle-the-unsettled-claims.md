<!-- Verbatim source section; overview: [[../fm-ar-claims-ledger]] -->
<!-- SOURCE-BODY-START -->
## 5. Pending checks that settle the unsettled claims

| Check | Where | Cost | Settles |
|---|---|---|---|
| Windows h5py label check (`t` file: 4=OLD→V6 buggy, 2=v6) + V6 `predictions.csv`×split join | Windows box | ~1–5 min | #11 (V6 Table 4 task identity), #15 App C |
| EXP2 Option A: predictions×split join, drop carbon (idx <50,000) | Windows box | ~5 min | #2 exact clean-subset numbers |
| Rung-1 GPU: RN-Raw-lf + XA-HC-lf + RN-HC-lf s42 | AutoDL | ~11.2 GPU-h | #8 direction on true 4He; the campaign's central claim |
| NimpSim Option A (matched XA/RN @100k) or B (RN-mod@160k) | AutoDL + data staging (`3He/4He_100k.h5` location unverified) | ~10–18 GPU-h | #1, #7, #10 — the real ³He/⁴He decomposition |
| Box-176 CPU chains (in flight): `predump_chain` (paired stats), `d5/d6` (`permuted_cls`/`mean_cls`/`scaled_cls` + histograms), `diag_chain` (D1–D4), `e23` (EXP8 clipped/zero/permuted physics) | box 176 | ~4–7 CPU-h | #9 mechanism wording; every "load-bearing" sentence; OOD-leak mechanism confirmation |
| `exp4_attention_metrics.py` on XA-Raw-s0 + XA-Raw-lf; map-level `permuted_q` | box 176 | ~1 CPU-h | #9 second seed; map-invariance upgrade |
| fm-ar-angle-baseline (in flight): RANSAC/Hough angle baseline on TRK3-v2 split | IMP/CPU | in flight | #13 same-sample angle comparison |
| Re-pulls: 0-byte `data_split.json` ×2 (XA-Raw-s0, XA-Raw-lf), XA-Raw-lf `run.log` | box 176 sync | minutes | pairing for the lf run; cost calibration |
| Test-split question | n/a — answered | — | EXP3 classification has no test split (80/20 val doubles as selection set); EXP8 and TRK have true test splits. Only a disclosure sentence is needed (#20). |

**Code bugs that gate pending results** (fm-ar-code-audit — fix before quoting): `exp3_threshold_sweep.py` can emit a false "calibration" verdict (marginal vs joint threshold); `paired_stats.align_pair` silently drops label-mismatched events and accepts duplicate event IDs; `src/baselines/kuchera.py` hard-codes the same `{4:0}` triton map while naming class 0 "Alpha (4He)".

---

<!-- SOURCE-BODY-END -->
