# NimpSim Option B (`V4HeHe_RNMod_NimpSim_160k_seed42`) — cost settlement

**Verdict: Option B does NOT fit the ~9.5 GPU-h reserve.** Best estimate **~20–35 GPU-h**
(plausible range ~10–50 h), driven by batch_size 32 → 5,000 steps/epoch at 160k train
and a published-run trajectory that needed ~93–100 epochs. The README's 4–6 h is an
underived guess that ignores the 6.4× steps/epoch increase vs the EXP3 anchor; the
prereg's 12–18 h is also underived but lands inside the plausible band — treat it as
the floor, not the ceiling.

Read-only scout; no code/doc changes. All paths relative to repo root unless absolute.

---

## 1. Provenance of the two estimates

| Estimate | Source | Origin | Derivation |
|---|---|---|---|
| Option B ~4–6 h | `20_doc/nimpsim_reserve/README.md:136-139` | PR #13 (`git show b6eb7f9`, merged 1c0e39d) | **None.** The sentence derives only Option A ("EXP3 Raw arms measured 4.6–4.9 h each; clean NimpSim images should be ≤ Raw") and then asserts "Option B ~4–6 h" with no arithmetic. It silently ignores that Option B runs bs 32 (not 128), 160k train (not 100k), FP32 (not AMP), and augmentation — i.e. ~6.4× the optimizer steps per epoch of the anchor it cites. |
| ~12–18 train h (unverified) | `20_doc/prereg/exp3_mechanism_prereg_2026-09-24.yaml:357-359` (`id: rn_mod_nimpsim`, `cost_purpose: "~12–18 train h (unverified); repairs the mislabeled §5.5 decomposition."`) | PR #15 (`git show 034aa90`) — a **verbatim transcription** of the locked mechanism scout report's gpu_runs table ("Transcribes the locked 2026-09-24 preregistration … both tables verbatim"). PR #29 (3484020) only fixed the run-name match `rn-mod`→`rnmod`; no cost change. | **None recorded.** Self-flagged "unverified". No measured basis exists in the repo; it reads as a conservative guess that happens to sit inside the evidence-derived band below. |
| Queue doc | `20_doc/workflows/gpu_session_queue.md:120` | PR #34 (0ae4798) | Reports both numbers and flags the prereg one as "the risk case"; correct framing. |

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

## 3. Does it fit? No — cheapest ways to make it fit

Reserve after Rung 1: **~9.5 GPU-h** (`gpu_session_queue.md:21`). Option B at
20–35 h does not fit; at the optimistic 10.5 h it still doesn't fit.

Cheapest config changes, ranked by evidential-value preserved:

1. **`num_workers: 4 → 8–12` + keep everything else.** EXP8 evidence: workers 8
   "halved epoch time" on this box (memory file :16). If the run is I/O-bound
   this alone takes the central case to ~10–20 h — still not safely ≤9.5 h, and
   it changes nothing scientifically. Necessary but not sufficient.
2. **`per_file_limit: 100000 → 50000` (100k events → 80k/20k).** Halves epoch
   time → ~5–18 h central ~8–12 h; fits only at the lucky end. **Cost:** the
   pairing against the published 96.1% run is no longer at headline scale —
   the run becomes a smaller-scale probe, and any XA−RN gap measured at 80k
   can't be quoted against the 160k published number without a size caveat.
3. **`max_epochs: 100 → 40` (keep patience 15).** Guarantees ≤ ~20 h at the
   step-bound ceiling, ~9 h at the sample-bound floor — fits only in the
   optimistic model. **Cost:** real risk of truncating before convergence
   (published best was epoch 78); a truncated run biases the comparison
   whichever arm converges faster — the worst outcome for an
   architecture-isolation run.
4. **bs 32 → 128 + `mixed_precision: true`.** ~4× fewer steps → ~4–13 h;
   fits in the central case. **Cost:** breaks the V4-HeHe protocol match
   (bs 32/FP32 are part of the published recipe, config :11-18); the arm
   difference is no longer cleanly "fusion only" — optimization confound
   (batch size, precision) enters the pairing. Cheapest reliable fit, but it
   spends the run's core claim.
5. **Fallback already in the queue:** Option A ResNet arm alone
   (`EXP3_ResNet_NimpSim_HeHe_100k_seed42.yaml`, bs 128/AMP/100k) ≈ 4.5–5.5 h —
   fits, but pairs against nothing published (the Option A XA arm is the other
   ~5 h and the pair exceeds the reserve). Or reserve 5b (R3a, ~7.1 h billed,
   `gpu_session_queue.md:121`) which needs no NimpSim staging at all.

**Recommendation:** do not launch Option B this session. If NimpSim is the
priority, the honest cheap variant is (1)+(2): workers 8 + `per_file_limit`
50000 (~8–12 h, borderline) — but state plainly it is no longer the
headline-scale pairing. Otherwise spend the reserve on 5b and schedule
Option B as the first job of a future session where it can have ~35 h.

## 4. Files to stage

Config `data.hdf5_files` (:57-59) resolves under `$MATE_DATA_ROOT`:

| File | Class | Events | Size |
|---|---|---|---|
| `NimpSim/3He_100k.h5` | 0 (³He) | 100,000 | **not recorded** — uncompressed schema is 3.07 GB (`images` float32 (100000,80,48,2) = 3.072 GB + `physics_features` 1.6 MB + `labels` 0.4 MB); gzip typically 0.5–1.5 GB for sparse TPC images [INFERENCE] |
| `NimpSim/4He_100k.h5` | 1 (⁴He) | 100,000 | same |

- Expected on-box path: `/root/autodl-tmp/data/NimpSim/` if
  `MATE_DATA_ROOT=/root/autodl-tmp/data` (README :89-92). 50 GB persistent disk
  (`remote_GPU_context.md:41`) — fits either way.
- Legacy names were `sim_inv_12C300MeV_4He_{3He,4He}_100k.h5` — rename or
  symlink at staging (README :76, config :27-29).
- Schema the checker enforces: `images` float32 (N,80,48,2) NHWC,
  `physics_features` float32 (N,4), `labels` int32 (N,) constant per file,
  `conversion_complete` attr (`check_nimpsim_h5.py:7-12,39-40`).
- **Not verified on any GPU box** (README :101-106): ROOT sources live on IMP
  (`/home/stu_2021/huzh_2022/NimpSim_workdir_after/Mate/ver2/Reconstruction/`);
  converted-HDF5 location on IMP/legacy disk unverified; box 176's EXP3 disk
  holds Garfield only. Staging likely needs an IMP→box transfer
  (`remote_GPU_context.md` §4a documents the sim→jump→GPU path).
- Verify with `python scripts/preprocessing/check_nimpsim_h5.py --dir
  /root/autodl-tmp/data/NimpSim --expect-events 100000` (README :117-124).

## 5. Commands run

- `git log --all -- 20_doc/nimpsim_reserve/README.md configs/V4HeHe_RNMod_NimpSim_160k_seed42.yaml 20_doc/prereg/…yaml` → PR #13 (b6eb7f9/1c0e39d), #15 (034aa90), #20 (0fb1dd7), #29 (3484020), #34 (0ae4798).
- `git show b6eb7f9:20_doc/nimpsim_reserve/README.md` → 4–6 h present at pack creation, no derivation.
- `git show 034aa90 --stat` → prereg YAML added verbatim by the scorer PR.
- `git show 3484020 -- 20_doc/prereg/…` → only the `rn-mod`→`rnmod` match fix.
- `grep` sweeps for epoch/wall-time records across `20_doc/`, `99_System/`,
  `openspec/`, `00_Evolutions/` → the only measured per-epoch anchors are the
  EXP3 cell doc (~895 s/epoch XA-Raw; RN-Raw ≈4.6 h implied) and the EXP8
  memory note (gzip-I/O-bound, workers 8 halved epoch time). EXP2's ~21
  min/epoch (`99_System/.scratch/exp2-impl/03a_training_3He4He.md:24`) is an
  RTX 4060 Laptop run under 3-way GPU contention — not a usable anchor.
- `runs/` locally contains only `_scratch` — all run artifacts live on the box
  (expected; local Mac has no torch/checkpoints per AGENTS.md).

## 6. Caveats

- RN-Raw's 4.6 h is inferred from the README bracket + the measured XA 4.9 h,
  not from a directly recorded wall time — the run's `run.log` on the box would
  confirm it (the launcher parses `Training complete in N seconds`,
  `run_exp3_rung1.py:90`).
- NimpSim H5 compression is unverified; it is the single largest swing factor
  in the per-epoch estimate (sample-bound floor vs step-bound ceiling).
- No NimpSim training has ever run in this repo (README :11) — every number
  above is extrapolated from Garfield/EXP8 anchors on the same box.
