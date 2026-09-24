<!-- Verbatim source section; overview: [[../fm-ar-nimpsim-cost]] -->
<!-- SOURCE-BODY-START -->
## 2. Evidence-derived cost

### 2.1 The only measured anchors (same code path, same GPU box)

EXP3 runs on the AutoDL box, **RTX 3080 Ti 12 GB** (`20_doc/servers/remote_GPU_context.md:32`),
torch 2.1.2+cu121, `num_workers: 4`, `pin_memory: true`:

- **XA-Raw seed 42: 294.5 min total, early-stopped at epoch 19** → ~895 s/epoch
  (`20_doc/Experiment Recordings/2026-09-23_exp3-xa-raw-cell.md:19,141,147`).
  Config: 100k train, bs 128, AMP, no aug → 782 train steps/epoch.
- **RN-Raw seed 42 ≈ 4.6 h** — implied: the README's "4.6–4.9 h" bracket
  (`README.md:136`) spans the two Raw arms and 4.9 h = the measured XA value, so
  RN-Raw ≈ 4.6 h. RN-Raw best epoch ~18 (cell doc :100) → stopped ~ep 33 →
  **~500 s/epoch** (≈0.64 s/step at bs 128). ResNet without attention is ~1.8×
  faster per epoch than XA — consistent with attention adding ~0.5 s/step.
- Corroborating I/O-bound evidence: EXP8 runs on the same box were
  "**gzip-I/O-bound, GPU never the bottleneck**; num_workers 8 halved epoch time"
  (`99_System/memory/MATE-Automation-V4/project_exp8_state.md:16,25`). At bs 128
  the measured 0.64 s/step is ~99% overhead (compute for a ResNet-18-small on
  80×48×2 is ~ms-scale) — the pipeline is dataloader/overhead-bound, so epoch
  cost scales with **samples read**, not FLOPs.

### 2.2 Option B's shape (configs/V4HeHe_RNMod_NimpSim_160k_seed42.yaml)

- 160k train / 40k val (`per_file_limit: 100000`, :61-63), **bs 32** (:73) →
  **5,000 train + 1,250 val steps/epoch** vs EXP3's ~980 total.
- FP32 (`mixed_precision: false`, :81), augmentation `legacy_v4` (:79-80) —
  scipy `ndimage.rotate` per train sample (`src/data/augmentation.py:61-92`),
  CPU-side, ~1–3 ms/sample across 4 workers.
- `max_epochs: 100`, early stop patience 15 on val_loss (:74,:84-87).
- `num_workers: 4` (:67) — same as the EXP3 runs.

### 2.3 Epochs the run will actually need

The published 96.1% XA run this config pairs against —
`V4_CrossAttention_3HeVs4He_20251204_125611` — reached **best epoch 78**
(`99_System/.scratch/manuscript-0705/verify_headline.md:31`), i.e. it ran
~93–100 epochs under the same patience-15 rule. The V4 recipe's lr 3e-5 is
3.3× lower than EXP3's 1e-4, so late convergence is the norm, not the exception.
Planning range: **45–100 epochs** (45 = optimistic early plateau; 93–100 =
published-run trajectory).

### 2.4 Per-epoch estimate

Two bounding models, both anchored on the same box:

- **Sample-bound (I/O-bound like EXP8):** per-sample cost ≈ RN-Raw's
  500 s / 100k ≈ 5 ms/sample → 160k × 5 ms ≈ 800 s + aug ≈ **14–18 min/epoch**
  (if NimpSim H5s are gzip-chunked like the EXP8/TRK files).
- **Step-bound (fixed per-step overhead ~0.3–0.5 s at bs 32):** 6,250 steps ×
  0.3–0.5 s ≈ **31–52 min/epoch** (if per-step Python/launch overhead dominates
  and small-batch GPU underutilization bites).

Compression of the NimpSim H5s is **unverified** (the S1 spec and checker record
no compression field; `scripts/preprocessing/check_nimpsim_h5.py` doesn't check
it). Uncompressed files push toward the sample-bound floor.

### 2.5 Total

| Scenario | Epochs | min/epoch | Total |
|---|---|---|---|
| Optimistic | 45 | 14 | **~10.5 h** |
| Central | 60–80 | 18–30 | **~18–40 h** → best estimate **20–35 h** |
| Pessimistic | 100 | 30–50 | **~50–83 h** |

**Best estimate: ~20–35 GPU-h; defensible range 10–50 h.** Even the optimistic
edge (~10.5 h) exceeds the ~9.5 h reserve. The prereg's 12–18 h is achievable
only if the run is sample-bound AND early-stops before ~epoch 60 — possible,
not plannable. The README's 4–6 h is not achievable under any measured anchor:
it would require ~3–5 min/epoch, i.e. faster per-sample than the AMP bs-128
EXP3 runs it cites.

### 2.6 Hardware note

Past runs: RTX 3080 Ti 12 GB (AutoDL 193机). The published 96.1% run's hardware
is **not recorded anywhere in the repo** (legacy codebase, pre-repo). If the
next session lands on a comparable-or-better AutoDL card the estimate holds;
a materially faster GPU (4090-class) shifts the step-bound ceiling down but not
the I/O-bound floor.

<!-- SOURCE-BODY-END -->
