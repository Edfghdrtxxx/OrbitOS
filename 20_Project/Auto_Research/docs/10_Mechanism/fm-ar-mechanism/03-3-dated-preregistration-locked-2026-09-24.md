<!-- Verbatim source section; overview: [[../fm-ar-mechanism]] -->
<!-- SOURCE-BODY-START -->
## 3. Dated preregistration (locked 2026-09-24)

This table is a prediction made before the pending CPU results are read. “Original” means the same checkpoint and same 2,000-event subset used by the current battery; for the s42 XA-Raw triton checkpoint, `A0=0.8715`. For all rows, report accuracy, Δ from original, class-0 recall, and the exact event count. Tolerance bands are intentionally broad enough to cover the observed seed mechanism variance; they are not post-hoc fits.

Rivals:

- **U:** unified model above (denoising + raw-physics side-channel/crowding + query-content invariance).
- **C:** pure capacity (the 64-d attended representation/head width is the sole cause).
- **Q:** query-routing model (event-specific physics query should control maps/predictions).
- **I:** image-only model (physics is redundant and cannot materially affect Raw predictions).
- **O:** zeroing/OOD-bias model (the `zero_cls` collapse is a covariate-shift artifact; event-specific physics is not required).
- **S:** selection/threshold model (the XA-RN gap is primarily threshold or best-epoch selection).

The table uses the following fixed interpretation of pending overrides: `mean_cls` replaces classifier physics by the train-subset mean; `scaled_cls` z-scores each classifier feature with train-subset mean/std; `clipped_cls` clips each feature to train-subset 1st–99th percentiles; `centered_q` subtracts train-subset physics means only before `query_proj`; channel conditions set one image channel to zero; `swap_physics` uses the index-matched HC physics vector for a Raw image; map-level permutation records max attention-map change and argmax agreement, not only accuracy.

| Pending condition | U prediction | C prediction | Q prediction | I prediction | O prediction | S prediction |
|---|---:|---:|---:|---:|---:|---:|
| `permuted_cls` | 0.86–0.88 (|Δ|≤2 pp) | 0.86–0.88 | 0.86–0.88 | 0.86–0.88 | 0.86–0.88 | 0.86–0.88 |
| `mean_cls` | 0.86–0.88; near original | 0.86–0.88 | 0.86–0.88 | 0.86–0.88 | 0.86–0.88 | 0.86–0.88 |
| `scaled_cls` | **0.88–0.91** (+1–4 pp) | 0.86–0.89 | 0.86–0.89 | 0.86–0.89 | **0.89–0.93** (+3–6 pp) | 0.86–0.89 |
| `clipped_cls` | **0.88–0.91** (+1–4 pp) | 0.86–0.89 | 0.86–0.89 | 0.86–0.89 | **0.89–0.93** (+3–6 pp) | 0.86–0.89 |
| `centered_q` | 0.70–0.88 (seed-sensitive, −2 to −17 pp) | 0.82–0.88 | **0.70–0.84** (≥3 pp loss) | 0.84–0.88 | 0.70–0.88 | 0.84–0.88 |
| `zero_ch0` (XA-Raw) | **0.85–0.88**; RN-Raw 0.87–0.90 | 0.84–0.89 | 0.84–0.89 | 0.84–0.89 | 0.84–0.89 | 0.84–0.89 |
| `zero_ch1` (XA-Raw) | **0.55–0.75** (large loss) | 0.70–0.88 | 0.55–0.75 | 0.70–0.88 | 0.70–0.88 | 0.70–0.88 |
| `swap_physics` (Raw image + HC vector) | **0.78–0.87** (distribution-shift loss) | 0.85–0.89 | 0.75–0.85 | 0.86–0.89 | **0.78–0.87** | 0.84–0.89 |
| map-level `permuted_q` | **max |Δmap| ≤0.01; argmax agreement ≥0.95; accuracy Δ≤0.1 pp** | max ≤0.03; agreement ≥0.90 | **max ≥0.10; agreement ≤0.80; accuracy loss ≥2 pp** | max ≤0.03; agreement ≥0.90 | max ≤0.03; agreement ≥0.90 | max ≤0.03; agreement ≥0.90 |
| threshold sweep | best XA acc 0.88–0.90, α-recall +5–15 pp; RN-XA gap remains ≥1 pp | same | same | same | same | **one threshold closes both acc and balanced-acc gaps; residual gap ≤0.5 pp** |
| selection-bias audit (best versus final/held-out) | XA-RN remains −1.0 to −2.5 pp | remains −1.0 to −2.5 pp | remains −1.0 to −2.5 pp | remains −1.0 to −2.5 pp | remains −1.0 to −2.5 pp | **gap shrinks to ≥−0.5 pp** |

The strongest discriminator in this block is `permuted_cls`/`mean_cls`: a large drop would damage O and the unified “static/OOD side-channel” reading, while no drop supports O. `centered_q` is deliberately a wide, seed-sensitive prediction because the existing `zero_q` response spans −57.1 to −5.8 pp on triton checkpoints; it should not be overinterpreted as a stable architecture effect.

### Planned GPU runs

Predictions below are for held-out accuracy; α-recall is reported where the task is binary Alpha-vs-rest. Costs are train-hour estimates from observed logs, with a billed headroom of roughly 1.3×; Raw cells can have larger wall span. The existing XA-Raw label-fix point is 0.92136 accuracy, α-recall 0.7254, but its split is zero bytes locally and it has no `run_complete.json`.

| Planned run | U prediction | C prediction | Q prediction | I prediction | O prediction | S prediction | Minimum cost / purpose |
|---|---:|---:|---:|---:|---:|---:|---|
| RN-Raw-lf s42 | 0.925–0.940; α-recall 0.70–0.78 | 0.925–0.940 | 0.925–0.940 | 0.925–0.940 | 0.925–0.940 | 0.925–0.940 | ~4.8 train h (~6.2 billed); decisive paired 4He Raw comparator. |
| 4He HC pair (RN-HC-lf + XA-HC-lf s42) | each 0.950–0.970; XA−RN −0.5 to +0.5 pp | XA 0.940–0.965 (1–3 pp below RN) | XA≈RN 0.950–0.970 | XA≈RN 0.950–0.970 | XA≈RN 0.950–0.970 | XA≈RN 0.950–0.970 | ~6.4 train h (~8.3 billed); completes the interaction term. |
| RN-modified at 160k, NimpSim 3He/4He | 0.930–0.970; balanced recall 0.88–0.96 | 0.930–0.970 | 0.930–0.970 | 0.930–0.970 | 0.930–0.970 | 0.930–0.970 | ~12–18 train h (unverified); repairs the mislabeled §5.5 decomposition. |
| `attn_dim=512` capacity control (XA-Raw, s42) | 0.885–0.910; **still 0.5–1.5 pp below RN-Raw** | **0.890–0.925; reaches RN within 0.5 pp** | 0.87–0.89 | 0.87–0.89 | 0.87–0.89 | 0.87–0.89 | ~5.5 train h; run only after D1–D5. |
| normalized-physics retrain (`physics_norm=zscore`, XA-Raw s42) | **0.900–0.925; carbon leak ≤2%** | 0.880–0.900; carbon leak 5–8% | 0.87–0.89; leak 8% | 0.87–0.89; leak 8% | **0.905–0.935; leak ≈1.5%** | 0.87–0.89 | ~5 train h; run only if `scaled_cls` improves the existing checkpoint. |

These predictions are not a license to run cures early. The run order remains: CPU prediction dumps/D5/D1-D4; then RN-Raw-lf; then the 4He HC pair; then capacity or normalization only if the readouts satisfy their gates.

<!-- SOURCE-BODY-END -->
