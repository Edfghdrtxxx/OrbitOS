> Origin: `fm-ar-feature-norm` scout report; recorded 2026-09-24.

# Scout report: physics-feature scaling into the XA query and classifier head (EXP3/EXP8)

**Question (firstmate spec):** how are the physics features (`[Iyy, Izz, Iyz, total_mass]`) scaled on their way into the cross-attention query and the classifier head in the EXP3/EXP8 training/eval code, and could their scale explain the XA-Raw deficit and the OOD leak?

**Verdict (short):** The features are **completely unnormalized** — raw float32 straight from HDF5 into both `query_proj` and the classifier concat, by deliberate spec (Req-7.2). The dominant pathology is not just "unbounded" but **scale asymmetry inside the 4-vector**: `Izz` sits at ~130–245 (median ~170) while `Iyy`/`Iyz`/`M` sit at ~0–150/~±130/~2–8. On the EXP8 XA checkpoint, `Izz` alone contributes a ~386-norm DC component to the 64-d query (vs |bias|=2.9) and a ±28-unit DC offset to the 128-d hidden pre-activation (vs learned-bias rms 0.08), fixing the sign of **108/128 hidden units** across the entire seen feature range. Scale is therefore a *plausible and quantified* contributor to the XA-Raw deficit — it acts as a fixed capacity-reducing bias plus a variance-dominating side-channel — but it is a diagnostic hypothesis, not yet a confirmed mechanism; the cheapest discriminator is a `mean_cls`/`scaled_cls`/`clipped_cls` extension of the existing counterfactual battery (zero retraining, minutes of CPU). For the OOD leak, scale is almost certainly *the* mechanism: the head is a linear extrapolator on an unbounded input, and far-OOD feature magnitudes leave the training range.

---

## 1. Exact code path (file:line, worktree HEAD)

### 1.1 Feature computation (offline, server-side)
- `scripts/preprocessing/convert_trk_server_v2.py:443-461` — `compute_physics_features(image)`: charge = `image[:,:,0]` (the **log1p-compressed** Ch0, not raw charge); `total_mass = Σ charge`; `Iyy/Izz/Iyz` = charge-weighted second central moments in **pad-bin units** (y∈[0,80), z∈[0,48)); returns float32 `[Iyy, Izz, Iyz, total_mass]`. No minus sign on Iyz, no normalization, no clipping. Same function in `convert_trk_server_v3.py:464` and `convert_trk_root_to_h5_server.py:253`.
- Consequence: `total_mass` is Σ log1p(q) (energy proxy, O(2–8)); `Izz` is a moment over the 48-bin z axis → O(10²); `Iyy` over the 80-bin y axis → O(0–200); `Iyz` cross-term → O(±10²). The 4-vector is **internally scale-heterogeneous by ~2 orders of magnitude** before any model sees it.

### 1.2 Dataset → model (training and eval, identical path)
- `src/data/dataset.py:472-475` — `physics = f["physics_features"][local_idx]; torch.from_numpy(physics.copy()).float()`. Comment: "Read physics features raw (NOT normalized, Req-7.2)". Cache path identical (`dataset.py:524-525`).
- `src/data/normalization.py:24-27` — explicit: "Physics features are explicitly NOT normalized (Req-7.2). Published results used raw un-normalized physics features… This module does not provide any physics feature normalization." `normalization_stats.json` per run covers **image channels only** (verified: `runs/EXP3-XA-Raw-100k-seed42/20260922_185618/normalization_stats.json` has only `ch0/ch1_mean/std`).
- `src/training/trainer.py:532,650` — `physics_features = batch[1].to(device)` → `model(images, physics_features=…)`. No transform.
- `src/evaluation/evaluate.py:110-116` and `src/evaluation/evaluate_exp8_unseen.py:384-385` — eval passes `batch[1]` unchanged; unseen EXP8 channels get their **real stored** features.
- `src/run_experiment.py:1435-1447` — model kwargs; **no physics-normalization flag exists anywhere in configs** (grep for `physics_mean|physics_std|StandardScaler|log1p` over `src/`, `configs/`: only hits are the Z01 baseline and probe scripts, §4).

### 1.3 Inside the model (`fusion_type="cross_attention"`, EXP3 + EXP8-XA)
- `src/models/model.py:337` — `physics_features.to(x.device, dtype=x.dtype)` (float32; under AMP the physics vector is cast to the image dtype, i.e. fp16 in autocast regions — a ~170-magnitude input in fp16 is fine, but worth noting).
- `src/models/model.py:354-360` — query-side vector: real physics (or `physics_query_override` / zeros under `zero_physics_query`).
- `src/models/cross_attention.py:72,160` — `query = query_proj(physics).unsqueeze(1)`, `Linear(4→64)`. **No LayerNorm, no scaling** on the query; it goes straight into `nn.MultiheadAttention` (`cross_attention.py:190-200`), whose internal `in_proj` applies a second learned linear. Softmax over 60 tokens makes the *attended output* a convex combination of value vectors → attended magnitude is O(|V|) regardless of |Q|; query scale affects only *score sharpness* (and here, see §3, the query is ~constant anyway).
- `src/models/model.py:361-377` — classifier-side vector: `classifier_input = cat([attended(64), classifier_physics(4)])` → `(B,68)`, raw physics concatenated unmodified.
- `src/models/classifier.py:6,30-74` — `Linear(68→128) → ReLU → Dropout(0.3) → Linear(128→num_classes)`. No normalization layer anywhere in the head.
- `src/models/model.py:379-383` — `fusion_type="none"` (all ResNet arms): `classifier_input = gap_vector(512)`; physics accepted and **ignored**. The ResNet arm never sees the features — not in training, not in eval (`evaluate_exp8_unseen.py:361-365` `_needs_physics` returns False for `none`).

### 1.4 Raw vs HC: same code, different input distribution
Raw and HC runs use the **identical** code path and identical (absent) scaling — the only difference is which HDF5 the features were computed from: `Garfield_Raw/*_garfield_v5.h5` vs `Garfield_HC/*_garfield_v5_hc.h5` (run `config.yaml`s). HC features are computed from DBSCAN-denoised images; Raw features from noisy images with secondary hits. Recorded consequence (`20_doc/Experiment Recordings/2026-09-23_exp3-xa-raw-cell.md:101`): on Raw all 4 features are near-uninformative (|point-biserial r| vs species ≤ 0.038; `total_mass` CV ≈ 3% vs HC ≈ 27%), and Raw↔HC per-event correlation is only total_mass r=0.692 / Iyz r=0.440 / Izz r=0.256 (same physical events, noise-dominated feature values). So "Raw vs HC scaling" is not a normalization difference — it is a **signal-to-noise difference at identical scale**.

## 2. Feature scale table (measured)

Source: `scripts/plotting/paper_fig_data/physics_feature_distributions.npz` (2000 events/species, **Garfield_HC** — the only local artifact with real features; Raw H5s exist only on box 176). Columns `[Iyy, Izz, Iyz, total_mass]`, float32.

| feature | p (med, p1–p99) | d | t | ³He | ⁴He | pooled approx range |
|---|---|---|---|---|---|---|
| Iyy | 1.4 (0.08–13.9) | 2.4 (0.08–30.7) | 3.0 (0.07–55.7) | 5.3 (0.09–138.6) | 8.3 (0.08–148.2) | 0 – 212 |
| Izz | 167.4 (137.7–208.3) | 168.7 | 169.9 | 172.4 | 173.4 | 80 – 245 |
| Iyz | 0.3 (−35.9–36.8) | 0.3 (−50.6–53.3) | 0.2 (−65.5–67.0) | −0.1 (−77.3–77.3) | 0.2 (−96.2–91.7) | −128 – 143 |
| total_mass | 3.8 (2.5–6.6) | 3.9 | 3.8 | 3.4 | 3.3 | 2.2 – 8.4 |

- `Izz` is ~**170 ± 19 for every species** — a near-constant ~170 DC term with ~11% relative variation. It is the single largest number entering the network anywhere (image inputs are z-scored to O(1)).
- Feature L2 norm of a typical event ≈ √(5² + 170² + 0² + 4²) ≈ **170**, vs the attended 64-d vector whose elements are O(0.1–1) (bounded by |V| through softmax; empirically the attended contribution to hidden pre-activation is ~0.3–0.6 rms/unit, §3). In the concatenated 68-d head input, **>99.9% of the L2 norm is the 4 physics dims**.
- Raw-arm feature ranges: not locally measurable (no Raw H5 on this Mac). Recorded facts only: same code path, same units; noise inflates `total_mass` (CV 3% — compressed toward a common value) and decorrelates moments from HC (r ≤ 0.69). Expect Izz to remain O(10²) — the DC-offset analysis below transfers to Raw unchanged.

## 3. What the scale does inside the trained head (EXP8 XA checkpoint, measured)

Weights extracted torch-free (zip+pickle) from `runs/EXP8-XA-Ideal-UnseenChannel/auditfix_d570d34_01/best_model.pth` (`classifier.classifier.0.weight` (128,68), `fusion.query_proj.weight` (64,4)):

**(a) The head did NOT learn to downweight physics.** Physics-column weight rms 0.058 vs attended-column rms 0.075 — same order. The network compensated for scale only partially in weights; the residual imbalance is absorbed by the input magnitudes.

**(b) Physics dominates hidden pre-activation.** At a typical seen event (phys ≈ [5,170,0,4]): pre-activation from physics alone spans **−28.0 to +13.3** (rms 10.3); learned bias rms is 0.081; attended contribution ~0.3–0.6 rms/unit. **108/128 hidden units have their ReLU sign fixed across the entire seen feature range** (lo=[0.1,130,−60,2.3] → hi=[150,210,70,7.5]) — i.e. ~84% of the hidden layer is effectively hard-wired on/off by the physics DC offset, leaving ~20 units of free capacity for event-varying signal. This is a concrete, measured mechanism for "redundancy-crowding" (H1b): the unnormalized features don't just add information, they *tile the ReLU pattern* and shrink the effective head width.

**(c) The query is a ~constant vector.** `query_proj(physics)` at typical features has |q| ≈ **383**, of which the Izz term alone contributes |W[:,1]·170| ≈ 386 (bias |b| = 2.9). Across the full seen feature range |q| varies 350→525, but the *direction* is dominated by the fixed Izz component. This explains `permuted_q = original` on all 6 checkpoints without invoking "content-free physics": permuting the batch preserves the Izz≈170 DC almost exactly (Izz varies only ±11%), so the query barely changes. It also explains `zero_q` hurting: zeroing removes the 386-norm DC, producing an out-of-distribution query direction. **The counterfactual battery's query results are consistent with a pure scale artifact** — the query never carried event-specific *directional* information because one feature's DC swamps the others.

**(d) OOD extrapolation is unbounded.** Nothing clips or normalizes the physics input; the head is linear in it. Carbon-scale features (or zeroed features) land outside the training range and push hidden activations ~4× (prior scout's measurement: max|h| 26.4 vs 12.9–16.6 seen). `zero_cls` collapse and the carbon→A leak are the same artifact at opposite ends of the range.

## 4. Asymmetry worth flagging: Z01 baseline DOES standardize

`src/data/z01.py:571-593` — the Z01 logistic-moments baseline fits a train-only `StandardScaler` on `[Ixx,Iyy,Ixy,M]` and persists it. The H1 diagnostics probe (`scripts/analysis/exp3_h1_diagnostics.py:116-118`) also standardizes before LogReg. So the *only* consumers of raw physics are the deep XA models — the fair-comparison story ("traditional/simple baseline vs CNN") currently compares a standardized-feature logistic model against an unnormalized-feature deep model. If D2 (physics-only LogReg) comes out weak on Raw, part of the gap vs the deep head could be optimization, not information.

## 5. Manuscript discrepancy (for the lead; captain owns `10_Papers-Thesis/`)

`10_Papers-Thesis/Physics_Informed/main.tex:207` states the four features "are standardized using training-set statistics before fusion." The code does not do this (Req-7.2, `dataset.py:472`, `normalization.py:24-27`), and the spec resolution (`20_doc/Legacy Codebase/S1-foundation-data-pipeline/spec.md:569`, D-PHYS-NORM) records that the *published* V4/V6 scripts also fed physics raw — the standardization code existed in `unified_tpc_dataset.py` but was not on the training path. So the paper sentence describes a dead code path, not the live one. Flagging, not touching (captain-only files).

## 6. Verdict: is scale a plausible contributor to the XA-Raw deficit?

**Yes — as a diagnostic hypothesis, with two distinct mechanisms, both now quantified:**

1. **Capacity theft (in-distribution).** ~84% of hidden units have fixed ReLU signs set by the physics DC offset (§3b). The 128-unit head effectively operates at ~20 free units for image-derived signal. On HC this is tolerable (physics is informative, redundancy is cheap); on Raw the same fixed cost is paid for features that carry ~no class information (|r| ≤ 0.038) — the head pays capacity for noise. This is a *refinement* of H1b: not just "physics crowds the head" but "unnormalized physics fixes the ReLU tiling, and on Raw the tiling is bought with noise."
2. **Variance domination.** Event-varying physics contributes ~2.0 rms/unit of pre-activation variance vs ~0.3–0.6 from the 64-d attended vector — the image pathway is a minority contributor to its own classifier. On Raw, that dominant variance is noise, so the head's largest input signal is uninformative — consistent with XA-Raw < RN-Raw while XA-HC > RN-HC.

What scale does **not** explain by itself: why the deficit is Raw-specific in *accuracy* (the DC cost is identical on HC — the difference is feature informativeness, i.e. scale × SNR interaction), and the s0 anomaly (zero_both > zero_cls). Scale is a multiplier on the information content, not an independent cause. It is best framed as: **the unnormalized input makes the head's dependence on physics magnitude-based rather than content-based**, which is exactly what D5 (`permuted_cls`/`mean_cls`) is designed to detect.

For the OOD leak the verdict is stronger: scale is the mechanism. An unbounded linear side-channel plus out-of-range inputs is sufficient to produce the confident carbon→A tail; the prior scout's clipped-physics prediction (E2) directly tests it.

## 7. Cheapest CPU diagnostics for box 176 (ranked, all inference-only, no retraining)

All extend `scripts/analysis/exp3_counterfactual_battery.py` — the override hooks already exist (`model.py:263-264` `physics_query_override`, `classifier_physics_override`). Each new condition is ~5 lines + one val-set forward pass (2000 events, CPU-feasible under the 2 GB cap, minutes).

1. **D6a `mean_cls` — replace classifier physics with the per-feature train mean.** Preserves the DC offset (Izz→170) but destroys all event-specific content. Read: `mean_cls ≈ original` → the head uses physics as a *static bias*, not information → scale artifact confirmed, zero_cls collapse was OOD bias, H1b-as-information dead. `mean_cls ≈ zero_cls` → event content matters → genuine dependence. **This is the single most decisive addition** — it splits "magnitude" from "content" exactly where `zero_cls` is ambiguous. (D5's `permuted_cls` partially does this but permuted features can land off-manifold; mean is the cleanest version.)
2. **D6b `scaled_cls` — z-score classifier physics with train-split stats.** Preserves event content, destroys magnitude. Read: `scaled_cls ≈ original` → head is content-driven (scale harmless); `scaled_cls ≪ original` → head is magnitude-driven → scale confirmed as load-bearing. Together D6a+D6b form a 2×2 (content × magnitude) that fully decomposes the zero_cls ambiguity.
3. **D6c `clipped_cls` on EXP8 unseen channels — clip E–H physics to seen-channel [min,max].** The prior scout's E2; prediction: carbon→A leak 8% → ~1.5% (RN level). This is the OOD-leak confirmation and the direct test of "scale causes the leak."
4. **D6d `centered_q` — subtract train mean from query physics only.** Removes the 386-norm Izz DC while keeping event variation. Read: `centered_q ≈ original` → the query DC is functionally inert (softmax shift-invariance means only direction matters — actually predicts a *change*, so a null result would be informative about MHA's in_proj absorbing the DC); `centered_q` changes accuracy → the DC was doing something. Cheapest of all; run it, but interpret after D6a.
5. **Feature audit (E1, no model):** dump per-channel feature quantiles for EXP8 A–H and EXP3 Raw vs HC from the H5s — closes the Raw-range gap in §2 and names the OOD-driving feature. pandas+h5py only.

Suggested implementation note for the lead: `mean_cls`/`scaled_cls` need train-split physics stats — compute once from the training H5s (or the val loader's physics tensor) and pass as constants to the override fn; no dataset changes needed.

## 8. Open questions for the lead (not blocking)

- **Raw-arm feature ranges** (§2 gap): need `physics_features` quantiles from `Garfield_Raw/*.h5` on the box — E1 covers it. Prediction: Izz still O(10²), total_mass compressed (CV 3%).
- **EXP3 checkpoint head weights**: only EXP8 `best_model.pth` is local; the §3 quantification should be re-run on `EXP3-XA-Raw-100k-seed42` and `EXP3-XA-HC-100k-seed42` checkpoints (same torch-free recipe, §9) to check whether the Raw head's physics columns are *larger* (more reliance) or the ReLU tiling more frozen. Prediction under H1b: Raw head has comparable physics weights but the features are noise → same DC cost, zero information gain.
- **fp16 under AMP**: `mixed_precision: true` in all configs; physics is cast to `x.dtype` (`model.py:337`). Izz≈170 in fp16 is representable but the query's 386-norm DC in fp16 attention scores could sharpen softmax saturation. Minor; flag only.
- **Manuscript fix** (§5): captain's call — the "standardized" sentence is wrong for both the reproduction and (per spec D-PHYS-NORM) the original published runs.

## 9. Reproduction

```bash
# Feature ranges (table §2):
python3 - <<'EOF'
import numpy as np
d = np.load('scripts/plotting/paper_fig_data/physics_feature_distributions.npz')
for k in d.files:
    a = d[k]
    print(k, np.percentile(a, [1,50,99], axis=0))
EOF

# Head-weight / DC-offset analysis (§3): torch-free zip+pickle parse of
# runs/EXP8-XA-Ideal-UnseenChannel/auditfix_d570d34_01/best_model.pth
# keys: classifier.classifier.0.weight (128,68) — cols 64:68 = physics;
#       fusion.query_proj.weight (64,4). Storage tensors read as raw fp32
# from best_model/data/<key>. Full script used: /tmp/fm_feature_norm_weights.py
# (worktree-local, ~60 lines; reproducible from §3 description).

# Code path: src/data/dataset.py:472-475, src/data/normalization.py:24-27,
#   src/models/model.py:337,354-377, src/models/cross_attention.py:72,160,
#   src/models/classifier.py:6, src/evaluation/evaluate_exp8_unseen.py:361-365,384-385,
#   scripts/preprocessing/convert_trk_server_v2.py:443-461.
```

Cross-checks: EXP8 config `physics_dim: 4`, `fusion_type: cross_attention` vs ResNet `none` (configs read directly); counterfactual numbers quoted from `runs/EXP3-*/counterfactual_battery.json` and `20_doc/EXP3_closing_analysis_2026-09-24.md`; Raw-feature informativeness stats quoted from `20_doc/Experiment Recordings/2026-09-23_exp3-xa-raw-cell.md:66,101` (not re-derived — Raw H5s are box-only).
