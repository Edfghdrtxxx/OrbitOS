> Origin: `fm-ar-hehe-control` scout report; recorded 2026-09-24.

# Scout report: EXP3 §5.5 task-mislabel impact + seed-robust evidence from on-disk artifacts

**Date:** 2026-09-24 · **Worker:** fm-ar-hehe-control (scout, read-only on `/Users/Reid Hu/MATE-Automation`)
**Scope:** (Q1) what the methods-audit M2 finding (§5.5 "³He/⁴He" decomposition actually ran on Garfield_HC α-vs-Nonα) does to the paper's argument, and the cheapest matched comparison on the real NimpSim ³He/⁴He task; (Q2) seed-robust evidence extractable from EXP3 artifacts already on disk, with paired statistics where possible.
**Sources:** live checkout `runs/EXP3-*/` (gitignored, read in place), `10_Papers-Thesis/Physics_Informed/main.tex` (read-only), `20_doc/EXP3_closing_analysis_2026-09-24.md`, `20_doc/Legacy Codebase/S1–S5 specs`, `openspec/changes/{EXP1-matched-training-size,TRK-group-meeting-20260326,EXP2-fusion-mechanism-comparison}`, fm-ar-methods-audit + fm-ar-gpu-plan-draft reports.

---

## PART 1 — The mislabeled §5.5 decomposition

### 1a. Which headline claims depend on it, and how their strength changes

The two "controlled experiments" of §5.5 (`main.tex:369` and `:381`) are the paper's **only** controlled evidence for the flagship NimpSim ³He/⁴He result. Both ran on **Garfield_HC α-vs-Nonα** (⁴He vs {p,d,t,³He} pooled, 20% positive class, noisy Garfield images) — a different dataset, different task, and different class structure from the NimpSim ³He-vs-⁴He binary (clean sim, 50% positive) behind the 96.1% headline. Claim-by-claim:

| Manuscript claim (line) | Depends on mislabeled run? | Strength after correction |
|---|---|---|
| §5.5 ¶1: "on the ³He/⁴He task… XA 95.80% vs ResNet 95.77% at 100k; architecture effect +0.024pp, McNemar p=0.81, CI [−0.14,+0.19]pp" (369) | **Yes, entirely** | Numbers are real but describe Garfield_HC α/Nonα (EXP1-XA-HC-100k vs V6-RN-HC). As a statement about ³He/⁴He it is **unsupported — the experiment was never run on that task**. |
| §5.5 ¶1: "100k→400k adds +1.77pp; of the +1.80pp… ~99% is data scale, ~1% architecture" (369) | **Yes** | Same mislabel. The decomposition of the NimpSim margin **does not exist**. |
| §5.5 ¶1: "the decomposition shows how little of [the 96.1% headline's] margin over a matched ResNet is architectural" (369) | **Yes** | **False as written.** No matched ResNet exists on NimpSim ³He/⁴He at any size (see 1b). The 96.1-vs-91.9 margin remains confounded by ≥6 factors. |
| §5.5 intro: "Two controlled experiments locate the source of the in-distribution classification gains… a central finding of this work: the improvement comes from the physics-derived features and from training-data scale, not from the cross-attention mechanism" (367) | **Yes, partially** | Survives for the ¹³C/¹⁴C task (EXP2 fusion runs are correctly labeled) and as a Garfield α/Nonα statement, but its most important application — the flagship ³He/⁴He pair — is unevidenced. |
| §5.5 ¶3: fusion ordering "on the ³He/⁴He task… concat 96.98 / gated 96.94 / XA 95.80" (381) | **Yes** | Same mislabel (EXP2 *_3He4He configs run Garfield_HC α/Nonα). The NimpSim fusion ordering is unmeasured. The accompanying "smaller validation set" caveat is also wrong (audit M2: same 25k val). |
| §5.5 corollary: "cross-attention superiority is task-specific rather than general" (384) | **Indirectly** | Weakened, and new evidence cuts against it: on the EXP3 triton diagnostic task at matched size/protocol, XA−RN is **−1.3/−2.1pp on Raw** (sign-flipped vs the V6 +1.6pp Raw claim) and ≈0 on HC (Part 2). The V6 Raw architecture advantage was probably data-scale confound, not mechanism. |
| §5.2: "Section 5.5 decomposes this margin into data-scaling and architecture contributions at matched training size" (252) | **Yes** | False pointer — no such decomposition exists for this margin. |
| Table 2 headline itself (96.1% vs 91.9%) | No | Numbers stand (real legacy runs), but the +4.2pp margin is confounded by: data 160k-vs-40k, backbone modified-vs-standard, ImageNet init vs none, augmentation vs none, warmup 5-vs-0, LS 0.05-vs-0, clip 0.5-vs-1.0, bs 32-vs-64, lr 3e-5-vs-1e-4, epochs 100-vs-50, head 2-layer-vs-1-layer, norm-stats 2k-vs-10k (S3 spec 2.1/2.4; audit M4/M5). |

**Net:** the mislabel does not touch any measured number, but it converts §5.5's "central finding" into an extrapolation the paper currently presents as a controlled result. A referee who checks the task definitions will find the flagship pair was never decomposed. Honest repair options: (i) relabel §5.5 to "α-vs-Nonα on Garfield_HC" and explicitly state the NimpSim margin is un-decomposed and confounded; (ii) run the matched experiment in 1c and keep the decomposition structure.

### 1b. Does any existing run give a matched XA-vs-RN ³He/⁴He comparison?

**No.** Exhaustive check of live `runs/`, `20_doc` records, legacy specs, and openspec logs:

| Candidate | Task / data | Verdict |
|---|---|---|
| V4-HeHe (XA, 96.1%) vs V4-HeHe-RN (91.9%) | NimpSim ³He/⁴He ✓ | Right task, **unmatched on ≥6 axes** (list above). This is the confounded headline pair itself. |
| `V3_3He_vs_4He_Binary_ResNet18_conv1.py` (legacy script, `Legacy Codebase.md:92`) | NimpSim ³He/⁴He, possibly modified-backbone RN | Script exists; **no run record or metrics found** in any spec/investigation doc. Open question Q3 — one grep of the legacy Windows box would settle it. If it ran on 100k files with a modified backbone it could be the missing cell. |
| EXP1-XA-HC-100k (95.80%) vs V6-RN-HC (95.77%) | Garfield_HC α/Nonα | Matched size/protocol but **wrong task** — this is the mislabeled pair. |
| EXP2 fusion runs (concat 96.98/gated 96.94/XA 95.80) | Garfield_HC α/Nonα | Same wrong task. |
| EXP3 2×2 (11 runs) | Garfield_{Raw,HC} **triton-vs-rest** (label bug, `run_experiment.py:389-411` guard comment; Garfield labels {3He:0,4He:1,d:2,p:3,t:4} → map {4:0} picks triton) | Matched XA-vs-RN at 100k/25k, but wrong task AND wrong dataset. |
| EXP3-XA-Raw-label-fix (0.9214) | Garfield_Raw **4He-vs-rest** | True 4He task but Garfield, single arm, no RN comparator. |
| EXP8 unseen-channel pair | Garfield 3-class channel task | Wrong task. |

### 1c. The cheapest matched experiment on real NimpSim ³He/⁴He

**Data:** `3He_100k.h5`, `4He_100k.h5` (NimpSim; S1 spec:498,635). Schema is identical to what `MATEDataset` reads (`images (N,80,48,2)`, `labels`, `physics_features (N,4)` — S1 spec:507). **Location: not on the local Mac; presence on box 176 unverified** — the EXP3 data disk holds Garfield only (closing doc §7). Likely needs a transfer from the IMP server or the legacy Windows disk. Open question Q1.

**Label path:** the current code has no ³He-vs-⁴He binary map (`_LABEL_MAP_3HE4HE` is α-vs-rest). Use `data.file_class_list: [0, 1]` parallel to `hdf5_files: [3He_100k.h5, 4He_100k.h5]` — file-assigned classes bypass `label_map` entirely (`dataset.py:333-334`, `run_experiment.py:545-562`). This is the same mechanism the label-fix run used; no code change needed.

**Option A — EXP3-protocol matched pair (cheapest, recommended first):**
Clone the two EXP3 Raw configs (pattern in-repo at `configs/EXP3_XA_Raw_100k_physicsnorm_seed42.yaml`; the exact run configs sit on box at `/root/autodl-tmp/.autodl/EXP3_{XA,ResNet}_Raw_100k_seed42.yaml`) and change only:
```yaml
data:
  dataset: NimpSim
  hdf5_files: [<path>/3He_100k.h5, <path>/4He_100k.h5]
  file_class_list: [0, 1]        # 3He→0, 4He→1
  per_file_limit: 62500          # 125k total → 100k train / 25k val, same as EXP3
```
Everything else already matches between arms: modified backbone + ImageNet init both, warmup 5, LS 0.05, clip 0.5, bs 128, lr 1e-4, no aug, variance_floor norm, seed 42. This yields the clean XA-vs-RN architecture comparison on the real task at 100k — the direct analog of the mislabeled 95.80/95.77 pair.
**Cost:** RN-Raw measured 4.6–4.9h train, XA-Raw 4.9h (run.log "Training complete in"); NimpSim clean images should be ≤ Raw (lower occupancy → same epoch count, similar per-epoch cost). **Budget ~10h train / ~13h billed wall (×1.3)** for the pair — fits the 16h cut line in fm-ar-gpu-plan-draft.
**CPU feasibility:** training no (≈100× GPU time → days per run; also no torch/data locally). Only data staging and post-hoc eval are CPU-able. Nothing in this option is CPU-runnable.

**Option B — full §5.5 decomposition on the right task (what the paragraph actually needs):**
Reproduce the V4-HeHe protocol (S3 spec 2.1: bs 32, lr 3e-5, aug on, 100 ep) with the modified backbone for **both** arms:
1. `RN-mod @160k/40k` — architecture effect at full size vs existing XA@160k (96.1%). **The single most decision-relevant run.**
2. `XA @40k` + `RN-mod @40k` — the data-scaling leg (40k = V4-HeHe-RN's size; the legacy 91.9% run cannot serve as the RN@40k cell — wrong backbone/protocol).
**Cost:** ~3 runs × ~4–6h ≈ **12–18h train / ~16–23h billed** — at or just over the 16h cut. **Blocker:** `augmentation` is a **no-op** in the current pipeline (`dataset.py:587-588` — "Actual transforms wired in S2 (T3.6)" never landed). Option B needs HFlip/VFlip/Rotation(10°) implemented first (~30 lines) or it silently runs no-aug. Option A needs no code change.
**CPU feasibility:** same as A — GPU-only.

**Recommendation:** if the captain funds one number, it is **Option B run 1 (RN-mod@160k, ~4–6h)** — it isolates the architecture effect at headline scale. If the goal is the cheapest honest §5.5, **Option A (~10h)** gives a clean matched pair but at 100k, not headline scale. Both fit the 16h cut; A+B-run-1 (~15–19h billed) is the maximum that fits.

---

## PART 2 — EXP3 seed-robust evidence from on-disk artifacts

### 2a. Run inventory (live checkout `/Users/Reid Hu/MATE-Automation/runs/`, n=25,000 val each)

| Run | seed | acc | α-recall* | macroF1 | best ep | predictions | data_split | battery | ckpt |
|---|---|---|---|---|---|---|---|---|---|
| EXP3-ResNet-HC-100k | 0 | 0.95448 | 0.8472 | 0.9267 | 30 | ✗ | ✗ | — | ✗ |
| | 1 | 0.95748 | 0.8394 | 0.9307 | 27 | ✗ | ✗ | — | ✗ |
| | 42 | 0.95908 | 0.8484 | 0.9336 | 27 | **✓ csv** | ✓ | — | ✗ |
| EXP3-ResNet-Raw-100k | 0 | 0.88904 | 0.6086 | 0.8097 | 17 | ✗ | ✗ | — | ✗ |
| | 1 | 0.89224 | 0.5782 | 0.8086 | 3 | ✗ | ✗ | — | ✗ |
| | 42 | 0.89248 | 0.6356 | 0.8186 | 18 | ✗ | ✗ | — | ✗ |
| EXP3-XA-HC-100k | 0 | 0.95412 | 0.8304 | 0.9252 | 23 | ✗ | ✗ | ✓ | ✗ |
| | 1 | 0.95788 | 0.8536 | 0.9321 | 21 | ✗ | ✗ | ✓ | ✗ |
| | 42 | 0.95676 | 0.8276 | 0.9289 | 22 | ✗ | ✗ | ✓ | ✗ |
| EXP3-XA-Raw-100k | 0 | 0.87572 | 0.5598 | 0.7839 | 7 | ✗ | **0-byte** | ✓ | ✗ |
| | 42 | 0.87116 | 0.5482 | 0.7760 | 12 | ✗ | ✓ | ✓ | ✗ |
| | 1 | — **never ran** (queued behind s0; box closed) | | | | | | | |
| EXP3-XA-Raw-100k-label-fix | 42 | 0.92136 | 0.7254 | 0.8693 | 13 | ✗ | **0-byte** | ✓(buggy) | ✗ |

\* "α-recall" is the class-0 recall — **triton** recall for the 11 un-fixed runs (label bug), true ⁴He recall only for label-fix.
All 11 un-fixed runs = **triton-vs-rest** on Garfield (see 1b). `exp4_attention_metrics.json` exists for the 4 XA triton ckpts (not lf). **No `best_model.pth` exists locally for any run** — all checkpoints are on box 176 (closing doc §7 pull plan).

### 2b. Paired statistics — what is computable locally

Only one `predictions.csv` exists (RN-HC s42) → **no true paired test is computable locally**. However, same-seed val sets are identical across arms (verified by gpu-plan-draft: `val_indices` byte-identical), so the **exact paired Δ** is known from marginal counts, and McNemar can be **bounded**: with d = b−c fixed by the marginals, the worst case maximizes discordants (b+c = min(e_A+e_B, n)). Computed bounds (n=25,000):

| Comparison | seed | Δ acc (XA−RN or HC−Raw) | worst-case McNemar χ² / p | verdict |
|---|---|---|---|---|
| XA−RN, HC | 0 | −0.036pp | 0.03 / 0.87 | indeterminate (parity within noise either way) |
| XA−RN, HC | 1 | +0.040pp | 0.04 / 0.84 | indeterminate |
| XA−RN, HC | 42 | −0.232pp | 1.54 / 0.21 | indeterminate |
| XA−RN, Raw | 0 | **−1.332pp** | 18.74 / **p≤1.5e-5 guaranteed** | significant under every discordant split |
| XA−RN, Raw | 42 | **−2.132pp** | 47.90 / **p≤4.6e-12 guaranteed** | significant under every discordant split |
| HC−Raw, XA | 0 / 42 | +7.84 / +8.56pp | χ²≥902 / p≈0 guaranteed | significant |
| HC−Raw, RN | 0 / 1 / 42 | +6.54 / +6.52 / +6.66pp | χ²≥683 / p≈0 guaranteed | significant |

Class-0-recall paired Δ (XA−RN): HC −1.68 / +1.42 / −2.08pp (s0/s1/s42 — mixed); Raw **−4.88 / −8.74pp** (s0/s42 — the deficit concentrates on the minority class).

Seed means (triton task): RN-HC 0.95701±0.0023 (n=3) · XA-HC 0.95625±0.0019 (n=3) · RN-Raw 0.89125±0.0019 (n=3) · XA-Raw 0.87344±0.0032 (n=2). Per-arm Wilson 95% CIs are ±0.25–0.42pp (table in §4 reproduction output).

**CPU inference locally: infeasible.** Three independent blockers: (a) zero checkpoints synced locally; (b) no torch on this Mac (repo rule: dependency-light only); (c) no Garfield/NimpSim HDF5 locally (~25GB on box only). On-box CPU inference is already proven (~10 min/condition under the 2GB cap) and the lead's `predump_chain.sh` is producing the 12 prediction dumps that unlock true McNemar/bootstrap — **do not duplicate; the local bound analysis above is the stopgap.**

### 2c. Verdict per paper claim

| Claim | Evidence on disk | Verdict |
|---|---|---|
| XA ≈ RN at matched size on HC (the real content of the §5.5 arch-effect≈0 claim) | 3/3 seeds, \|Δ\| ≤ 0.23pp, McNemar indeterminate | **Seed-robust — but only on the triton diagnostic task**, not the task §5.5 names |
| XA > RN on Raw (V6 "+1.6pp on Raw… most valuable when image quality is degraded", main.tex ~296) | 2/2 seeds Δ = −1.33/−2.13pp, guaranteed-significant | **Contradicted at matched size** — the V6 Raw advantage was data-scale confound |
| HC > Raw within architecture | 5/5 pairs +6.5 to +8.6pp, guaranteed-significant | **Seed-robust** (triton task) |
| XA-Raw learns the 4He task ≥0.92 | 1 run, 0.92136 | **Single-seed only**; no RN comparator |
| Any ³He/⁴He NimpSim claim | nothing | **No evidence** — see Part 1 |
| Mechanism claims (query content-free, zero_cls collapse) | battery on 6 ckpts, 2000-event subsets | Seed-robust for permuted_q (6/6 Δ≤0.001); zero_q/zero_cls magnitudes vary wildly by seed (closing doc §12) — mechanism claims need multi-seed counterfactuals, accuracy-seed-std understates mechanism variance |

### 2d. Minimum further runs to close each gap

| Gap | Closer | Cost |
|---|---|---|
| True McNemar/bootstrap CIs on all EXP3 pairs | Lead's `predump_chain.sh` on box (in flight) — or checkpoint pull + local dump if box dies | 0 GPU-h; ~2–4 CPU-h on-box |
| XA-Raw triton seed 1 (3rd seed) | Existing config, GPU | ~5.5h — **optional**; deficit already guaranteed-significant 2/2 |
| 4He 2×2 completion (RN-Raw-lf, XA-HC-lf, RN-HC-lf) | gpu-plan G1+G2 | ~11.2h train / ~14.6h billed |
| **NimpSim ³He/⁴He matched pair** | Option A above | **~10h train / ~13h billed** |
| NimpSim full §5.5 decomposition | Option B (needs augmentation implemented) | ~12–18h train |

---

## 3. Open questions for the lead (non-blocking)

1. Are `3He_100k.h5`/`4He_100k.h5` (NimpSim) present anywhere on box 176, or must they be transferred from IMP/legacy disk before Option A/B can run?
2. Did `V3_3He_vs_4He_Binary_ResNet18_conv1.py` ever produce a run (legacy Windows box `outputs/`)? If yes and it used the modified backbone at 100k, it may already be the missing matched RN cell.
3. The corrected label-fix `counterfactual_battery.json` (original=0.9275 run) — still unsynced locally per gpu-plan-draft Q1; the local JSON is the void buggy one.
4. `data_split.json` for XA-Raw-s0 and XA-Raw-lf are 0-byte locally — needed for any future local paired stats; re-pull on next sync.

## 4. Reproduction

```bash
# Inventory + metrics (all numbers above):
ls /Users/Reid\ Hu/MATE-Automation/runs/EXP3-*/*/          # file inventory
cat runs/EXP3-*/*/metrics.json                            # acc, alpha_recall, macro_f1, confusion_matrix, best_epoch
# Paired-bound computation: marginals from confusion_matrix; d=b−c fixed;
# worst case b+c=min(e_A+e_B, 25000); χ²=(|d|−1)²/(b+c); exact binomial bound via scipy.stats.binomtest
# Training times: grep 'Training complete in' runs/EXP3-*/*/run.log
# Label bug: src/run_experiment.py:389-411 (guard comment), :628 (_LABEL_MAP_3HE4HE);
#   Garfield labels {3He:0,4He:1,d:2,p:3,t:4} → map {4:0} = triton-vs-rest
# file_class_list mechanism: src/run_experiment.py:545-562, src/data/dataset.py:333-334
# Augmentation no-op: src/data/dataset.py:587-588
# Manuscript: 10_Papers-Thesis/Physics_Informed/main.tex:252,369,381,384
# Legacy protocols: 20_doc/Legacy Codebase/S3-v4-reproduction/spec.md §2.1 (V4-HeHe), §2.4 (V4-HeHe-RN)
```

**Captain-hold inventory:** this report feeds the already-pending GPU-budget decision owned by the campaign lead/captain (fm-ar-gpu-plan-draft); it surfaces no new captain-only question that is not already held there. Completion gate: `complete --none`.
