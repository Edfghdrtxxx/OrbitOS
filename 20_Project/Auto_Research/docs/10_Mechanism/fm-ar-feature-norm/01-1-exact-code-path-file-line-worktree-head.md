<!-- Verbatim source section; overview: [[../fm-ar-feature-norm]] -->
<!-- SOURCE-BODY-START -->
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

<!-- SOURCE-BODY-END -->
