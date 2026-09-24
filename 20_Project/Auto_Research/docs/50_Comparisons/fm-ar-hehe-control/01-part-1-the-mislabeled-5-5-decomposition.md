<!-- Verbatim source section; overview: [[../fm-ar-hehe-control]] -->
<!-- SOURCE-BODY-START -->
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

<!-- SOURCE-BODY-END -->
