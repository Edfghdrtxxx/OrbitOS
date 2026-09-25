<!-- Verbatim source section; overview: [[../fm-ar-label-settle]] -->
<!-- SOURCE-BODY-START -->
## 0. TL;DR

| Concern | Settled from surviving evidence? | Verdict | Confidence |
|---|---|---|---|
| **1. V6 Table 4** (96.6/95.8/95.1/93.5, Feb 2026) | **Not to certainty — but the surviving evidence converges on one answer** | **Table 4 is almost certainly triton-vs-rest** (the same `{4:0}`-on-OLD-labels bug that hit EXP3), not α-vs-rest | **~80%** |
| **2. EXP2 clean α-vs-rest accuracy** | **No — unrecoverable** | Exact clean number is lost with the Windows `predictions.csv`/`data_split.json`/checkpoints; the estimate ≈95.7–95.8% stands | estimate only |

Smallest covering task set (details §3, §4):
- **T1 (GPU, ~10–15 h):** run the 3 remaining EXP3 label-fix arms on box 176 — configs already exist — to complete a true 4He-vs-rest 2×2 at 100k/25k. This *replaces* Table 4's comparative claims at matched size (and removes V6's 400k-vs-100k confound).
- **T2 (GPU, ~30–50 h, optional):** two new V6-faithful 400k/100k XA configs if the manuscript wants to keep 400k-scale numbers.
- **T3 (GPU, ~5–8 h):** clean retrain of the two EXP2 3He4He arms — **configs are already repaired** (explicit 5-file list + `file_class_list`); produces clean-*trained* numbers, fully controlled vs EXP1-XA.
- **T4 (CPU, ~0):** when the box-176 copy lands at `/Users/Reid Hu/MATE-data-archive/autodl-176/` (**currently empty — copy still in flight**), re-verify labels/attrs locally; plus the already-planned EXP3 checkpoint prediction dump on box-176 CPU.
- **T5 (0 GPU-h alternative):** manuscript-only repair — annotate/relabel Table 4 and the EXP2 arm; the clean 13C/14C arm already carries the fusion claim.

All GPU items are **awaiting the captain's GPU-time decision** (set aside pending the graduate-supervisor talk). CPU items can run on the free IMP server once reachable, or on box-176 CPU.

---

<!-- SOURCE-BODY-END -->
