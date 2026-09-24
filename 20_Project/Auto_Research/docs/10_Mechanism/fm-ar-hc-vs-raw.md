> Origin: `fm-ar-hc-vs-raw` scout report; recorded 2026-09-24.

# EXP3 mechanism scout: why HC beats Raw, and why classifier-side physics is redundant on HC but load-bearing on Raw

**Date:** 2026-09-24 · **Worker:** fm-ar-hc-vs-raw (scout, read-only on live checkout `/Users/Reid Hu/MATE-Automation`) · **Deliverable:** mechanism verdict + paper-ready sentence + cheapest discriminating CPU check for box 176.

**Headline verdict:** the HC−Raw gap is an **input-denoising effect, not a feature effect**. The ResNet arm (`fusion_type: none`, physics features accepted but ignored — `src/models/model.py:199-202`) gains +6.5pp on HC with zero physics exposure, so the entire representation gap lives in the image. What HC does to the image is exactly one thing that matters: **DBSCAN largest-cluster filtering removes ~94% of pads (1,956→113 of 3,840), converting a noise-dominated Ch0 (track charge below the σ≈0.028 noise floor) into a sparse track-shaped image.** The classifier-side asymmetry follows from the same fact: physics features are computed **from Ch0 itself**, so on HC they are redundant with what the backbone already sees, while on Raw they are the head's only global charge statistic — and zeroing them is also a large out-of-distribution shift (zero_cls lands *below* the majority baseline), so "load-bearing" is still ambiguous between information-dependence and OOD artifact until D5 lands.

---

## 1. What HC does to the event vs Raw — code trace

The training-time pipeline is **identical** for both arms. `MATEDataset.__getitem__` (`src/data/dataset.py:424-502`) reads `images` (N,80,48,2 NHWC), transposes to NCHW, applies per-channel z-score `(x−mean)/(std+1e-6)` (lines 469-470), and returns `physics_features` raw (line 474). Same code, same normalization method (`variance_floor`, `std=sqrt(max(var,1e-12))` from ≤3,200 train images — `src/data/normalization.py:113-115`), same label map (`src/data/dataloader.py:49`). The only difference is **which HDF5 files are read** (`Garfield_Raw/*.h5` vs `Garfield_HC/*_hc.h5`, per run `config.yaml data.hdf5_files`).

The representation difference is entirely upstream, in conversion (spec: `20_doc/Legacy Codebase/S1-foundation-data-pipeline/spec.md`; legacy code `hc_preprocessing.py` / `convert_root_to_h5_data.py`, Windows box — not in this repo):

| Step | Garfield_Raw | Garfield_HC | Spec ref |
|---|---|---|---|
| Source | `garfield_postprocessor_v5.C` pre-binned `padSignals[80][48]`, `driftTime[80][48]`; per-pad Gaussian noise σ≈0.028 added to **every** pad | Raw 3D hits `(x,y,z,q)` from same events | Req-2.4 |
| DBSCAN | **none** | eps=10 mm, min_samples=3, on **2D (y,z)** only; keep largest non-noise cluster; no-cluster events kept as all-zero images | Req-5.1–5.4 |
| Re-projection | none (pre-binned) | surviving hits re-projected onto triangular pad grid; edge hits **clamped**, not discarded | Req-2.5 |
| Central hole mask (j≥46, 28≤i≤51) | **not applied** | applied at hit level | Req-2.3/2.4 |
| Ch0 | `log1p(clip(padSignals,0))` | `log1p(clip(sum q_i,0))` over cluster hits — **same formula** | Req-3.1 |
| Ch1 | `driftTime` passthrough = **charge-weighted** mean x_norm | **simple (unweighted)** mean x_norm over cluster hits | Req-3.2 |
| Physics features `[Iyy,Izz,Iyz,total_mass]` | computed from **Ch0 of the binned image** (post-log1p weights, bin-index coords) | same code, same formula — but Ch0 is now the denoised image | Req-4.1/4.4 |

So HC differs from Raw by exactly four mechanisms: (a) DBSCAN noise/secondary-hit removal, (b) central hole mask, (c) Ch1 weighted→unweighted mean, (d) downstream — physics features computed from a clean vs noise-dominated Ch0. Charge handling is otherwise identical (same log1p compression, same z-score recipe).

## 2. What the input audit measured (`20_doc/audits/2026-09-23_raw-hc-input-audit.json`, 20k events/file × 5 files, paired)

| Quantity | Raw | HC | Read |
|---|---|---|---|
| Ch0 occupancy (pads>0 / 3,840) | 1,956 ± 31 (~51%) | 113 ± 23 (~3%) | half-normal noise floor vs sparse track |
| Ch0 sum | ~43.6–44.0 | ~3.5–3.9 | 92% of Raw Ch0 "charge" is noise |
| Ch0 class separation (α vs non-α occupancy) | 1,955.98 vs 1,955.47 | 114.3 vs 112.4 | Raw occupancy carries ~no class signal |
| Paired Ch0 pixel corr / occupancy Jaccard | — | r≈0.0016 / J≈0.029 | ≈ random-overlap prediction for 113 pads inside 1,956 — expected, not a bug |
| Event identity | physics_features lag-0 corr (total_mass r=0.69, 0 at lags ±1–5) | — | Raw[i] and HC[i] are the same physical event |

Follow-up diagnostics (recorded in `20_doc/Experiment Recordings/2026-09-23_exp3-xa-raw-cell.md`, "Raw/HC disjointness root cause"): **the track is genuinely absent from Raw Ch0** — mean Raw Ch0 at HC pads = unconditional mean (0.0115 vs 0.0114); all 8 dihedral transforms of the HC mask leave it there. **Raw Ch1 retains the track**: +35% elevation at HC pads (0.0255 vs 0.0189), same V geometry. Noise σ measured 0.028 ≈ paper's stated ENC noise. Verdict on disk: intended representation, genuine noise-robustness test.

## 3. Candidate mechanisms — evidence for/against

**M1 — Noise removal (Ch0 denoise). SUPPORTED, dominant.**
- For: ResNet arm sees no physics at all (`fusion_type: none`) yet gains +6.54/+6.52/+6.66pp on HC (3/3 seeds) — the gap is image-side by construction.
- For: Raw Ch0 is 51% occupied by pure noise with the track below the floor (§2); HC removes it. Raw class-conditional occupancy is identical across classes → Ch0 gives the CNN almost nothing but noise to integrate.
- For: Raw Ch1 does retain track geometry (+35% at HC pads), consistent with RN-Raw reaching 0.89 at all — the residual Raw signal is real but weak.
- Against: nothing on disk contradicts it.

**M2 — Charge normalization difference. KILLED.**
- Both paths use `log1p(clip(·,0))` on Ch0 and identical `variance_floor` z-score at load (spec Req-3.1; `normalization_stats.json` per run — Raw ch0 mean/std 0.0114/0.0170 vs HC 0.0010/0.0082 is a *consequence* of denoising, not a different transform). The 12× Ch0 sum ratio is noise removal, not normalization.

**M3 — Geometric information added. WEAK / mostly killed.**
- HC adds no new geometry: the track sits at the same pads in Raw Ch1 (identity transform wins; +35% elevation). HC *restricts support* (removes pads), it doesn't add information. The hole mask removes a fixed 24×3-ish region — a constant mask, class-neutral, cannot explain a 6.5pp class-discrimination gain. Ch1 weighted→unweighted mean is a minor reweighting on the same support.
- Residual: DBSCAN could in principle remove real secondary hits that carry class info — but that would *hurt* HC, and HC wins, so net effect is still "removal helps".

**M4 — Feature-image redundancy (physics features computed from Ch0). SUPPORTED as the explanation for the classifier-side asymmetry — with an OOD caveat.**
- Physics features are moments of Ch0 (spec Req-4.1/4.4). On HC, Ch0 is the clean track → the 4 features are linear/global summaries of what the backbone already sees clearly → redundant: zero_cls Δ = +0.1/−0.4pp on HC s42/s1 (but −15.6pp on s0 — seed-variable, not absolute).
- On Raw, Ch0 is noise → the backbone cannot form global charge/moment statistics from it, so the 4 explicit features are the head's *only* global statistic. They are weak individually (|point-biserial r| ≤ 0.038 vs species; total_mass CV ≈3% on Raw vs ≈27% on HC — recorded in the exp3-xa-raw-cell record §"CrossAtt < ResNet on Raw") yet the head leans on them: zero_cls collapses on 3/3 Raw checkpoints (−67.8/−45.7/−49.3pp).
- **OOD caveat (important for wording):** zero_cls on Raw lands *below* the 0.80 majority baseline (0.19/0.41) — the head doesn't just lose information, it flips to predicting mostly class-0. That signature is consistent with "physics used as a learned scale/bias whose zeroing is off-distribution" as much as with genuine information dependence. `permuted_cls`/`mean_cls` conditions exist in `scripts/analysis/exp3_counterfactual_battery.py:129-130` but **no synced battery JSON contains them** — all 6 local JSONs ran only the original 5 conditions (pre-D5 script version). D5 (`d5_chain.sh`, queued per closing doc §11) is the discriminator; until it lands, "load-bearing" must stay provisional.
- Corroborating: XA-Raw s0 anomaly — zero_both 0.772 ≫ zero_cls 0.410. With cls physics zeroed, the *real* query actively hurts (−36pp); zeroing the query too recovers to ≈ majority baseline. The two physics entry points interact; single-pathway ablations don't decompose cleanly on Raw.

## 4. Mechanism verdict

1. **HC−Raw gap (both architectures, 5/5 seed pairs, +6.5 to +8.6pp):** caused by DBSCAN denoising of the image — specifically making the sparse track the dominant Ch0 structure instead of a sub-noise-floor perturbation. Proven image-side by the physics-free ResNet arm. Charge normalization, hole mask, and Ch1 formula are ruled out as primary causes.
2. **Classifier-side physics redundant on HC / load-bearing on Raw:** the features are computed from Ch0, so their marginal value is inverse to how much of Ch0 the backbone can exploit. On HC the backbone sees everything the features encode (redundant). On Raw the backbone is starved of global charge structure and the head leans on the only global statistic it gets — but the collapse-below-baseline signature means genuine-dependence vs OOD-artifact is unresolved until D5.
3. **XA−RN deficit on Raw (−1.3/−2.1pp):** downstream of routing (permuted_q Δ=0 on 6/6 checkpoints kills query-poisoning); consistent with the lead's H1/H2 framing — the 64-dim attended vector + 4 noise-dominated features under-serve the minority class vs the 512-dim GAP. Not a representation question per se; D1–D4 own it.

## 5. Paper-ready sentence

> "The HC representation contributes hit-level denoising, not new information: DBSCAN largest-cluster filtering (eps = 10 mm, min_samples = 3, in the pad plane) removes the ~51%-occupancy electronics-noise floor that submerges the primary track's charge signal in the raw pad image, reducing the active input to a ~113-pad sparse track; that this single change closes a 6.5–8.6 pp accuracy gap in a physics-free ResNet baseline shows the gain is image-side denoising, while the physics-feature vector — computed from the same charge channel — is redundant with the cleaned image but becomes the classifier's only global charge statistic on the noise-dominated input."

(Shorter variant if space is tight: "HC contributes denoising, not information: DBSCAN filtering removes the noise floor that hides the track's charge signal, and the resulting sparse image makes the physics-feature vector redundant rather than additive.")

## 6. Cheapest discriminating CPU check on box 176

The top two mechanisms for the *representation* gap are already separated by the ResNet arm (image-side proven). The live ambiguity is **within** image-side: does Raw fail because Ch0 noise is actively harmful, or because only Ch1 carries signal? And for the classifier asymmetry: information-dependence vs OOD artifact (D5, already queued).

**Recommended: channel-ablation inference battery on existing checkpoints** — same harness as `exp3_counterfactual_battery.py`, one new override that zeroes an image channel instead of physics. ~10 lines of new code, runs on-box CPU under the 2 GB cap at `--max-events 2000 --batch-size 64` (~5 min/checkpoint, same cost as one battery condition):

| Condition | RN-Raw prediction | XA-Raw prediction | Interpretation |
|---|---|---|---|
| `zero_ch0` (image[:,0]=0) | ≈0.89 (small drop) | ≈0.87 | Ch0 noise contributes nothing → HC's gain is purely "removing harmful noise"; Raw signal lives in Ch1 |
| `zero_ch0` | large drop | large drop | the CNN does extract sub-noise-floor Ch0 signal → HC's gain is "amplifying effective SNR", not just noise removal |
| `zero_ch1` | collapse | collapse | confirms Ch1 carries the Raw signal (expected given +35% elevation at HC pads) |

Discriminates "noise removal" (M1-as-subtraction) from "signal recovery" (M1-as-amplification) — the two readings the current data cannot separate. Optional second condition on XA only: `swap_physics` (feed the paired HC event's physics vector to the Raw checkpoint — event alignment is verified, so index-matched swap is legal). If XA-Raw + HC-physics ≈ 0.95, the XA-specific deficit is feature-quality; if ≈0.87, it is image-side — one extra forward pass, decisive for how much of the XA gap D1–D4 even need to explain.

**Do not bother with:** re-deriving per-event Raw-vs-HC feature correlations (already on disk), or a masked-Raw inference (Raw Ch0 masked to HC support) — the audit already shows Raw Ch0 at HC pads = unconditional mean, so masking only tests occupancy shape, which the channel ablation covers more cleanly.

## 7. Commands / evidence index

```bash
# pipeline identity: src/data/dataset.py:424-502 (getitem), src/data/normalization.py:113-115
# ResNet physics-free: runs/EXP3-ResNet-HC-100k-seed42/*/config.yaml → fusion_type: none; src/models/model.py:199-202
# spec: 20_doc/Legacy Codebase/S1-foundation-data-pipeline/spec.md Req-2.3/2.4/2.5/3.1/3.2/4.1/4.4/5.1-5.5
# audit: 20_doc/audits/2026-09-23_raw-hc-input-audit.json (paired block per file; aggregate §)
# batteries: runs/EXP3-XA-*/2*/counterfactual_battery.json — all 6 lack permuted_cls/mean_cls/pred_histograms
# norm stats: runs/EXP3-*-seed42/*/normalization_stats.json (variance_floor, 3200 samples, seed-matched)
```

## 8. Open questions for the lead (non-blocking)

1. Did `d5_chain.sh` (permuted_cls/mean_cls × 6) land? It is the sole discriminator for "load-bearing" vs "OOD artifact" on Raw zero_cls; every synced battery JSON predates those conditions.
2. Is the corrected label-fix battery JSON synced yet? Local `EXP3-XA-Raw-100k-label-fix-seed42/.../counterfactual_battery.json` may predate the positional-label fix (flagged in fm-ar-seed-evidence §8).
3. For `swap_physics`: confirm the eval loader iterates val events in `data_split.json` order so index i in Raw and HC datasets is the same physical event (audit verified file-level alignment; the split indices are byte-identical across arms for s42).
