> Origin: `fm-ar-gpu-ladder` scout report; recorded 2026-09-24.

# fm-ar-gpu-ladder — consolidated GPU budget ladder + EXP3 seed-robust evidence audit

**Date:** 2026-09-24 · **Worker:** fm-ar-gpu-ladder (scout) · **Scope:** read-only on live checkout `/Users/Reid Hu/MATE-Automation` (`runs/` is gitignored, read in place); CPU-local recomputation only. No box-176/AutoDL/IMP contact. No manuscript or lead files touched.
**Inputs:** fm-ar-gpu-plan-draft, fm-ar-referee (§B.7), fm-ar-hehe-control (§1c), fm-ar-transfer, fm-ar-feature-norm reports; `20_doc/EXP3_closing_analysis_2026-09-24.md`; campaign record `firstmate/data/auto-research-exp3.md`; fresh re-verification of every `runs/EXP3-*/` artifact cited (all numbers below recomputed from `metrics.json`/`history.json`/`run.log` today, not copied).

---

# PART 1 — GPU budget ladder

## 1.1 Measured cost basis (from `run.log` "Training complete in N seconds", all on the same AutoDL box)

| Arm | Runs (epochs) | Train time each | Mean | min/epoch |
|---|---|---|---|---|
| RN-HC | 37 / 32 / 30 ep | 3.42 / 2.96 / 2.77 h | **3.1 h** | ~5.5 |
| RN-Raw | 20 / 19 / 20 ep | 4.84 / 4.59 / 4.89 h | **4.8 h** | ~14.6 |
| XA-HC | 31 / 37 / 38 ep | 2.93 / 3.49 / 3.52 h | **3.3 h** | ~5.6 |
| XA-Raw | 20 ep (s42); 23 ep (s0) | 4.91 h (s42, logged); s0 run.log not synced → est 23 ep × 14.7 ≈ 5.6 h | **~4.9–5.6 h** | ~14.7 |
| XA-Raw-lf (4He) | 22 ep, early-stopped | run.log not synced → est 22 ep × 14.7 ≈ **5.4 h** | — | — |

**Billed-wall caveat (cost disagreement, flagged):** gpu-plan-draft plans billed wall ≈ train ×1.3. The one observed XA-Raw run-directory wall span was ~13.7 h vs 4.91 h logged training (×2.8 — eval + queue/idle inside the job). seed-evidence's "XA-Raw 7–14 h" figure used that wall span, not train time — **not a real disagreement about GPU-hours consumed, but a real disagreement about what to budget**. Recommendation: budget Raw cells at the pessimistic ~7 h billed; HC cells are predictable (~3–4 h billed). All "billed" figures below use ×1.3 with the pessimistic Raw cap noted.

## 1.2 Consolidated, de-duplicated GPU run list (every proposal across the five reports)

| ID | Run | Proposed by | Train / billed est. | Status of estimate |
|---|---|---|---|---|
| R1 | **RN-Raw-lf s42** (4He comparator) | gpu-plan G1; referee G2/A1; hehe-control §2d | 4.8 / ~6.2 h | measured basis (RN-Raw) |
| R2 | **XA-HC-lf s42 + RN-HC-lf s42** | gpu-plan G2; referee G3; hehe-control §2d | 6.4 / ~8.3 h | measured basis |
| R3 | **lf seeds 0,1 — all 4 arms (6 runs)** | gpu-plan G3+G4+G5; referee G4 | 33.4 / ~43 h | measured basis; XA-Raw-lf cost is est. |
| R4 | **XA-Raw-seed1 (triton grid hole)** | gpu-plan G6; referee G6/A11; seed-evidence G1 | ~5.5 / ~7.2 h | measured basis; optional |
| R5 | **Mechanism pack** — `query_mode: learned` latent-Q; `attn_dim: 512` capacity control; 4He zero-Q ablation | gpu-plan G7; referee A5/A7/G5; closing doc §5 (staged, unrun) | ~5.5 h each | **GATED** — cures, not diagnostics |
| R6 | **XA-Raw hyperparameter control** (e.g. dropout 0.5 or lr 3e-5) | referee A5 | ~5 h | **GATED** on D1–D5 |
| R7 | **Normalized-physics retrain** (`physics_norm: zscore` XA-Raw s42) | feature-norm §7; referee A8 | ~5 h | **GATED** on `scaled_cls` readout; config already merged (`configs/EXP3_XA_Raw_100k_physicsnorm_seed42.yaml`, PR#7) |
| R8 | **NimpSim Option A** — XA-Raw + RN-Raw on real ³He/⁴He @100k | hehe-control §1c | ~10 / ~13 h | est.: assumes NimpSim epoch cost ≈ Garfield Raw (unverified) |
| R9 | **NimpSim Option B** — §5.5 decomposition: RN-mod@160k (decisive run) + XA@40k + RN-mod@40k | hehe-control §1c | 12–18 / ~16–23 h | est.; **blocked on augmentation code** |
| R10 | **VGG16 direction A** (Kuchera recipe on MATE tasks) | transfer §4 item 1 | ~15–25 h per task (3–5× RN18) | roughest estimate in the set; Kuchera recipe is only 10 epochs so could be much less; **blocked on backbone code** |

**Duplicates removed:** referee G2–G4 ≡ gpu-plan G1–G5 (same runs, same costs — consistent). seed-evidence G2 "4He 2×2 ~19–26h for 4 runs" is superseded: it predates the XA-Raw-lf completion and used the inflated 7–14h XA-Raw figure; correct residual is R1+R2 = 3 runs, ~11.2h train. hehe-control §2d's "4He 2×2 completion ~11.2h" matches gpu-plan exactly. referee A11's "second triton-Raw anomaly test" ≡ R4 (same run). referee A7's `attn_dim: 512` ≡ gpu-plan G7 mechanism-pack item. EXP7 p/d/t baseline: proposed in openspec but its own proposal rates it droppable — excluded. Energy-regression baselines: comparison complete (21/21 Wilcoxon) — excluded.

## 1.3 The ladder

Costs shown as **train / billed-with-headroom**. "Wait for" = CPU results that should land first (doctrine: no cures before diagnosis; also avoids dead spend).

### Rung 0 — ~5 GPU-h: the single decisive run
| Run | Cost | Decides | Outcomes |
|---|---|---|---|
| **R1: RN-Raw-lf s42** | 4.8 / ~6.2 h | **C11 — the paper's central claim.** The paired Δ_Raw on the *true* 4He task. XA-Raw-lf already exists: test 0.92136, α-recall 0.7254. | RN ≈ 0.92 → XA parity on Raw on the true task → central claim dead on Raw too; campaign pivots to mechanism/seed evidence. RN < 0.92 → first evidence the physics path helps where the paper predicted → headline survives, seeds become urgent. |

- **Wait for:** nothing — this run is itself the diagnostic for the paired-Δ gate (closing doc §6). In parallel the box-176 CPU chains should finish: `predump_chain` (12 prediction dumps → true McNemar), `d5_chain`/`d6` (permuted_cls/mean_cls/scaled_cls → load-bearing vs OOD-artifact), `diag_chain` (D1–D4 → H1a vs H1b).
- **Prereqs:** lf config = triton RN-Raw config + `file_class_list [1,1,1,1,0]` over hdf5 order (p,d,t,³He,⁴He) — recipe verified in the completed run's `config.yaml`; no code change. Garfield_Raw H5s already on box. Its `data_split.json` must be produced by the run itself (the lf run's local split is 0 bytes — re-pull both before pairing).

### Rung 1 — ~16 GPU-h: the 4He 2×2 at seed 42
**R1 + R2** = 3 runs, **11.2 h train / ~14.6 h billed** (fits with ~1.4h spare; nothing else fits without stranding a half-pair).

| Run | Decides | Outcomes |
|---|---|---|
| R2: XA-HC-lf + RN-HC-lf s42 | **C11 interaction term** — the paper's claim is architecture×representation; without HC cells there is no interaction to report, only a Raw pairwise Δ. | HC Δ ≈ 0 (as on triton) + Raw Δ < 0 → clean interaction story. HC Δ < 0 too → physics path hurts everywhere on 4He → mechanism question dominates. |

- **Alternative 16h package (competing, flag for captain):** R1 + **R8 NimpSim Option A** (~10h/13h) = ~15–19h billed — buys the headline 4He comparator *and* the first honest matched XA-vs-RN on the real ³He/⁴He task (repairs §5.5's mislabeled decomposition). Costs the HC interaction cells. Choose by whether the paper's flagship NimpSim claim or the Garfield 2×2 design matters more.
- **Wait for:** same CPU chains as Rung 0. If D5 shows zero_cls collapse is a pure OOD artifact, the mechanism narrative changes before the 2×2 is even interpreted — but the 2×2 runs are claim-decisive either way, so they need not wait.

### Rung 2 — ~30 GPU-h: seed-robust Raw headline
**R1 + R2 + second seed of the Raw pair (XA-Raw-lf s1 + RN-Raw-lf s1)** = 5 runs, **21.5 h train / ~28 h billed**.

- Decides: whether the headline Δ_Raw (whatever sign R1 gives) is seed-robust. Anchor policy: no delta may be presented as seed-robust on n=1. Two seeds give a sign check; three give mean±sd.
- **Gated alternative:** if R1 returns Δ_Raw ≥ 0 (claim dead), do **not** buy more lf seeds — spend the ~14h remainder on R8 (NimpSim Option A) or hold for mechanism work per the closing-doc gate.
- **Wait for:** R1's Δ_Raw sign (the pre-registered gate: Δ_Raw ≥ 0 → seeds; Δ_Raw < 0 → mechanism work first).

### Rung 3 — ~60 GPU-h: full 4He 2×2 × 3 seeds
**R1 + R2 + R3** = 9 runs, **44.6 h train / ~58 h billed** — the paper's PID section stands on the same n=3 footing as the triton record.

- The ~2h billed remainder fits nothing; in train-hour terms ~15h remains for **one** gated item: R5-mechanism (~5.5h), R4 triton grid hole (~5.5h), or part of R8/R9 — **choose only after Δ_Raw sign and D1–D6 readouts**. Do not commit the remainder now.
- **Explicitly gated, NOT in any rung** (cures/diagnostics that must wait for CPU readouts): R5 mechanism pack (needs Δ_Raw < 0 AND D1–D5 localization), R6 hyperparameter control (needs D1/D3 to fail to explain the deficit), R7 physicsnorm retrain (needs `scaled_cls` ≪ original — if `scaled_cls` ≈ original the deficit is content-driven and the retrain buys nothing), R9 Option B (needs augmentation wired — see below), R10 VGG16 (needs backbone code; also the weakest claim-per-hour in the set — a method-family transfer point, not a claim-decider).

## 1.4 Prerequisites consolidated

**CPU results to wait for (all on box 176, in flight or queued — closing doc §15):**
- `predump_chain.sh` → 12 `predictions.csv` dumps → true McNemar/paired bootstrap on all same-seed pairs (the only paired-statistics path; my §2 bounds are the stopgap).
- `diag_chain.sh` → D1–D4 probes → H1a capacity vs H1b crowding → gates R5/R6.
- `d5_chain.sh` + fm-ar-d6-battery → `permuted_cls`/`mean_cls`/`scaled_cls` + predicted-class histograms → gates R7 and every "load-bearing" sentence.
- `e23_chain.sh` → EXP8 clipped/zero/permuted physics → OOD-leak mechanism confirmation.
- Re-pulls: `data_split.json` ×2 (0-byte: XA-Raw-s0, XA-Raw-lf), XA-Raw-lf `run.log` (cost calibration for R3).

**Data staging:**
- NimpSim `3He_100k.h5`/`4He_100k.h5` — **presence on box 176 unverified; likely absent** (EXP3 disk holds Garfield only). Needs transfer from IMP server or legacy Windows disk before R8/R9. Open question Q1.
- Garfield H5s — already on box (all lf runs reuse them).
- VGG16 — ImageNet weights (`IMAGENET1K_V1`) must be downloadable/cached on box.

**Code:**
- **Augmentation is a silent no-op** (`src/data/dataset.py:587-588`, "Actual transforms wired in S2 (T3.6)" never landed). R9 Option B silently runs no-aug without it. fm-ar-augment is implementing the V4 recipe (HFlip/VFlip/Rot10°) now — in flight.
- **VGG16 backbone does not exist in MATEModel** — `configs/baseline_kuchera_vgg16.yaml` is a pinned hyperparameter contract, not runnable. fm-ar-kuchera-baselines is building the rendering + arms now — in flight.
- `physics_norm: zscore` — merged (PR#7); R7 is config-ready.
- lf configs for RN-Raw/XA-HC/RN-HC — recipe verified (`file_class_list [1,1,1,1,0]`); whether staged on box is open question Q3.
- NimpSim runs need **no code change** — `file_class_list: [0,1]` over `[3He_100k.h5, 4He_100k.h5]` bypasses `label_map` (`dataset.py:333-334`, `run_experiment.py:545-562`).

## 1.5 Cost-estimate disagreements (flagged)

1. **XA-Raw hours:** seed-evidence "7–14h" vs gpu-plan/referee "4.9–5.6h". Resolution: logged training = 4.91h; 13.7h was run-dir wall span. Budget billed wall at ~7h for Raw cells (observed ×2.8 worst case), not ×1.3.
2. **4He 2×2 residual:** seed-evidence "~19–26h / 4 runs" vs gpu-plan "~11.2h / 3 runs". The former predates the XA-Raw-lf completion — superseded.
3. **VGG16:** transfer's "3–5× RN18 ≈ 15–25h" ignores that the Kuchera recipe is 10 epochs vs our 20–38; could be ~5–10h. Unmeasured either way — treat as ±2×.
4. **NimpSim Option A "~10h":** assumes NimpSim epoch cost ≈ Garfield Raw. Clean images, same event count — plausible but unverified; ±30%.
5. **XA-Raw-lf train time (~5.4h):** estimated from epochs × min/epoch; run.log unsynced. Affects R3's total by ±1h.

## 1.6 Recommendation (one paragraph)

Fund **Rung 1 (~16 GPU-h: RN-Raw-lf + XA-HC-lf + RN-HC-lf, all seed 42)** as the unit — but if the captain will only fund one number, **RN-Raw-lf s42 alone (~5h)** is the single most decision-relevant run in the campaign: it produces the paired Δ_Raw on the true 4He task, which simultaneously decides the paper's central claim and fires the pre-registered gate that tells the campaign whether remaining budget goes to seeds (Δ ≥ 0) or mechanism work (Δ < 0). The full 2×2 is worth the extra ~8h because the paper's design is the architecture×representation interaction — a Raw-only Δ cannot carry that claim. Hold the ~30h and ~60h rungs uncommitted until R1 lands: buying 4He seeds before knowing the sign risks spending the entire reserve replicating a null, and buying mechanism runs before D1–D6 land violates the campaign's own no-cures-before-diagnosis rule. NimpSim Option A (~10h) is the strongest *alternative* spend at the 16h tier — it repairs the mislabeled §5.5 decomposition on the flagship task — but it needs data staging that may not be possible before November, so treat it as the swap-in only if the NimpSim files are confirmed on box 176.

---

# PART 2 — Seed-robust evidence from on-disk artifacts (EXP3 2×2)

## 2.1 Run inventory (re-verified today, live checkout)

12 run dirs, 11 completed training runs + 1 recovered. **No `best_model.pth` exists locally for any EXP3 run** (`find runs -name '*.pth'` → only two EXP8 checkpoints). `import torch` fails locally. No Garfield H5 locally (`data/` = 23MB total, sidecar only).

| Run | seed | status | acc | c0-recall* | macroF1 | best ep | preds | split | battery | attn | train |
|---|---|---|---|---|---|---|---|---|---|---|---|
| ResNet-HC | 0 | complete | 0.95448 | 0.8472 | 0.9267 | 30 | ✗ | ✗ | — | — | 3.42h |
| ResNet-HC | 1 | complete | 0.95748 | 0.8394 | 0.9307 | 27 | ✗ | ✗ | — | — | 2.96h |
| ResNet-HC | 42 | complete | 0.95908 | 0.8484 | 0.9336 | 27 | **✓ 25k csv** | ✓ | — | — | 2.77h |
| ResNet-Raw | 0 | complete | 0.88904 | 0.6086 | 0.8097 | 17 | ✗ | ✗ | — | — | 4.84h |
| ResNet-Raw | 1 | complete | 0.89224 | 0.5782 | 0.8086 | 3 | ✗ | ✗ | — | — | 4.59h |
| ResNet-Raw | 42 | complete | 0.89248 | 0.6356 | 0.8186 | 18 | ✗ | ✗ | — | — | 4.89h |
| XA-HC | 0 | complete | 0.95412 | 0.8304 | 0.9252 | 23 | ✗ | ✗ | ✓ | ✓ | 2.93h |
| XA-HC | 1 | complete | 0.95788 | 0.8536 | 0.9321 | 21 | ✗ | ✗ | ✓ | ✓ | 3.49h |
| XA-HC | 42 | complete | 0.95676 | 0.8276 | 0.9289 | 22 | ✗ | ✗ | ✓ | ✓ | 3.52h |
| XA-Raw | 0 | **recovered**¹ | 0.87572 | 0.5598 | 0.7839 | 7 | ✗ | **0-byte** | ✓ | ✗ | ~5.6h est² |
| XA-Raw | 42 | complete | 0.87116 | 0.5482 | 0.7760 | 12 | ✗ | ✓ | ✓ | ✓ | 4.91h |
| XA-Raw-lf (4He) | 42 | complete | 0.92136 | 0.7254 | 0.8693 | 13 | ✗ | **0-byte** | ✓ corrected³ | ✗ | ~5.4h est² |

\* class-0 recall = **triton** recall for the 11 un-fixed runs (label bug: `_LABEL_MAP_BINARY {4:0}` picks raw label 4 = triton, `src/data/dataloader.py:49`); true ⁴He recall only for label-fix.
¹ `run_complete.json` status "recovered": evaluator guard crash on AMP/FP32 drift (diff 1.2e-4); checkpoint metadata patched, weights untouched.
² run.log not synced; estimate from epochs × 14.7 min.
³ Corrected battery verified on disk: original 0.9275, zero_q 0.8065 (−12.1pp), permuted_q 0.9275, zero_cls 0.1935, zero_both 0.5235. The buggy 0.7005 JSON is gone.

**Grid:** triton 2×2 = 11/12 cells (XA-Raw-s1 never ran). 4He 2×2 = 1/12 (XA-Raw-lf s42 only).
**Split determinism (re-verified):** the two s42 `data_split.json` files have **byte-identical `val_indices`** (n=25,000, test_size 0.2, stratify, seed 42) → same-seed arms evaluate on identical events → paired in principle.

## 2.2 Paired statistics — what is computable

**True McNemar/paired bootstrap: NOT computable.** Exactly one `predictions.csv` exists (RN-HC-s42); pairing needs both arms' per-event predictions. No new dumps have synced since the referee report (verified: `find runs/EXP3-* -name 'predictions*'` → 1 file).

**What IS computable — exact paired Δ and worst-case McNemar bounds** (recomputed by me from confusion matrices; method: d = b−c fixed by marginals, worst case maximizes discordants b+c ≤ min(err_A+err_B, n), χ² = (|d|−1)²/(b+c)). These bounds are tighter than the referee's n·Δ² floor because they use the actual error counts:

| Comparison (same events, n=25,000) | Δ acc | worst-case McNemar χ² / p-bound | unpaired z (p) | Δ bal-acc | Δ c0-rec |
|---|---|---|---|---|---|
| XA−RN, HC s0 | −0.036pp | 0.03 / p≤0.87 | −0.19 (0.85) | −0.65pp | −1.68pp |
| XA−RN, HC s1 | +0.040pp | 0.04 / p≤0.84 | +0.22 (0.82) | +0.56pp | +1.42pp |
| XA−RN, HC s42 | −0.232pp | 1.54 / p≤0.21 | −1.29 (0.20) | −0.92pp | −2.08pp |
| **XA−RN, Raw s0** | **−1.332pp** | **18.74 / p≤1.5e-5 guaranteed** | −4.62 (3.8e-6) | −2.66pp | −4.88pp |
| **XA−RN, Raw s42** | **−2.132pp** | **47.90 / p≤4.5e-12 guaranteed** | −7.38 (1.5e-13) | −4.61pp | −8.74pp |
| HC−Raw, RN s0/s1/s42 | +6.54/+6.52/+6.66pp | χ²≥683 / p≈0 guaranteed | — | +12–14pp | +21–26pp |
| HC−Raw, XA s0/s42 | +7.84/+8.56pp | χ²≥902 / p≈0 guaranteed | — | +15–16pp | +27–28pp |

"Guaranteed" = significant under *every* possible discordant split consistent with the marginals — no predictions.csv needed for these conclusions.

**Seed statistics (triton task, n=25,000/run):**

| Arm | seeds | mean ± sd | t-95% CI on mean |
|---|---|---|---|
| RN-HC | 0,1,42 | 0.95701 ± 0.0023 | [0.9512, 0.9628] |
| XA-HC | 0,1,42 | 0.95625 ± 0.0019 | [0.9515, 0.9611] |
| RN-Raw | 0,1,42 | 0.89125 ± 0.0019 | [0.8865, 0.8960] |
| XA-Raw | 0,42 | 0.87344 ± 0.0032 | [0.8445, 0.9024] (n=2, wide) |
| XA-Raw-lf (4He) | 42 | 0.92136 single | Wilson [0.9180, 0.9246] |

Per-run Wilson 95% CIs are ±0.25–0.42pp — the HC Δs are inside per-run noise; the Raw Δs are 3–5× wider than the CI widths.

## 2.3 Local CPU inference feasibility — NO (three independent blockers, all verified today)

1. Zero EXP3 checkpoints local (all on box 176). 2. No torch on this Mac (`import torch` → ModuleNotFoundError). 3. No Garfield H5 (~25GB, box-only). **Under an hour locally: impossible.** On box 176 it is proven feasible (~10 min/condition under the 2GB cap; the lead's `predump_chain.sh` is already producing the 12 dumps — do not duplicate).

## 2.4 Verdict per paper claim

| Claim | Verdict | Evidence |
|---|---|---|
| XA ≈ RN on HC (triton) | **seed-robust** (3/3) | Δ ∈ [−0.23, +0.04]pp; no discordant split reaches p<0.05 |
| XA < RN on Raw (triton) | **seed-robust on observed seeds; grid 2/3** | 2/2 seeds, guaranteed p≤1.5e-5 / 4.5e-12; survives balanced-acc (−2.7/−4.6pp); s1 missing |
| Deficit concentrates in minority recall | **seed-robust** (2/2) | Δc0rec −4.9/−8.7pp |
| HC > Raw | **seed-robust** (5/5 pairs) | +6.5 to +8.6pp, guaranteed-significant |
| Query content-free (H3 refuted) | **seed-robust + task-robust, power caveat** | permuted_q Δ=0 on 6/6 ckpts incl. corrected 4He — but on Raw the query is ~constant by construction (Izz≈170 DC dominates; feature-norm §3c) |
| Classifier physics load-bearing on Raw | **direction-robust, interpretation open** | zero_cls collapse on 3/3 Raw ckpts + 4He — OOD-artifact vs genuine dependence awaits D5/D6 |
| Physics redundant in HC head | **seed-variable** | zero_cls Δ +0.1/−0.4/−15.6pp — holds 2/3 seeds |
| zero_q hurts | **direction-robust, wild magnitude** | −5.8 to −57.1pp triton; −12.1pp corrected 4He |
| s0 anomaly (zero_both > zero_cls) | **single-seed; signature replicates on 4He** | 4He: 0.5235 > 0.1935 (+33pp) — closing doc's corrected NOTE now agrees |
| HC sink / Raw Bragg-focus | sink **seed-robust** (3/3); Bragg-focus **single-seed** | XA-Raw-s0/lf attention never run |
| **Central claim: XA > RN, grows on Raw** | **contradicted on triton; untested on 4He** | Raw Δ = −1.3/−2.1pp guaranteed-significant; 4He has no comparator |
| 4He learnable by XA-Raw | **single-seed, real converged number** | 0.92136, α-recall 0.7254, best ep 13 |
| Any EXP3 number as a 4He result | **illegal except the lf run** | label bug; only `file_class_list [1,1,1,1,0]` is true 4He |

**Honest paper position today:** on the (mislabeled) triton task the physics-informed arm never beats the generic baseline and is significantly worse exactly where the largest advantage was predicted — seed-robust on the observed seeds, guaranteed-significant without any further compute. On the true 4He task exactly one arm of one cell exists (XA-Raw 0.9214) with no comparator — the central claim is untestable from disk. The strongest publishable mechanism facts are the query's content-freeness (6/6, with the Raw power caveat) and the documented OOD side-channel.

## 2.5 Minimum further runs to close each gap

| Gap | Closer | Cost |
|---|---|---|
| True McNemar/bootstrap on all pairs | `predump_chain.sh` on box (in flight) + re-pull 2 zero-byte splits | 0 GPU-h; ~2–4 CPU-h |
| zero_cls interpretation | D5/D6 chain (in flight) | 0 GPU-h |
| 4He headline Δ_Raw | R1: RN-Raw-lf s42 | ~4.8 GPU-h |
| 4He interaction | R2: XA-HC-lf + RN-HC-lf s42 | ~6.4 GPU-h |
| 4He seed-robustness | R3: lf 2×2 seeds 0,1 (6 runs) | ~33 GPU-h |
| Triton grid 3/3 (optional) | R4: XA-Raw-seed1 | ~5.5 GPU-h — deficit already guaranteed-significant 2/2 |
| Mechanism (if gate fires) | R5/R6/R7, gated | ~5–5.5 GPU-h each |
| NimpSim §5.5 repair | R8 Option A / R9 Option B | ~10 / ~12–18 GPU-h + data staging |
| Attention second seed | exp4 metrics on XA-Raw-s0/lf ckpts | 0 GPU-h; ~1 CPU-h |

---

## Open questions for the lead (non-blocking)

1. Are `3He_100k.h5`/`4He_100k.h5` (NimpSim) anywhere on box 176, or must they come from IMP/legacy disk? Gates R8/R9 entirely.
2. Do all 11 `best_model.pth` still exist on box? `predump_chain` needs them.
3. Are the three remaining `-lf` configs staged on box, or generated ad hoc? Recipe verified (`file_class_list [1,1,1,1,0]`).
4. XA-Raw-lf `run.log` unsynced — actual wall-clock needed to calibrate R3's ~33h.
5. fm-ar-augment / fm-ar-kuchera-baselines are in flight — R9/R10 code prereqs land when they do; no report yet.

## Reproduction

```bash
cd /Users/Reid\ Hu/MATE-Automation
ls runs/EXP3-*/*/                                   # inventory (§2.1)
python3 -c "import json; [print(d, json.load(open(d+'/metrics.json'))['accuracy']) for d in __import__('glob').glob('runs/EXP3-*/*/')]"
grep -H 'Training complete in' runs/EXP3-*/*/run.log # cost basis (§1.1)
find runs -name '*.pth'                              # → EXP8 only (§2.3)
find runs/EXP3-* -name 'predictions*'                # → 1 file (§2.2)
python3 -c "import torch"                            # → ModuleNotFoundError
# split identity: json.load both s42 data_split.json → val_indices byte-identical (n=25000)
# McNemar bounds: d=b−c from accuracy marginals; worst case b+c=min(err_A+err_B,25000);
#   χ²=(|d|−1)²/(b+c) — plain python3, confusion matrices from metrics.json (§2.2)
# label-fix recipe: runs/EXP3-XA-Raw-100k-label-fix-seed42/*/config.yaml → file_class_list [1,1,1,1,0]
# corrected battery: cat runs/EXP3-XA-Raw-100k-label-fix-seed42/*/counterfactual_battery.json → original 0.9275
```

**Captain-hold inventory:** this report feeds the already-held captain call `fm-ar-gpu-budget` (reopen GPU: no / 16h / 60h — campaign record line 43). It surfaces no new captain-only question beyond that held call. Completion gate: `complete --none`.
