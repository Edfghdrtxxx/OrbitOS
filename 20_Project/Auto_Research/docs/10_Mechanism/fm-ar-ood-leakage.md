> Origin: `fm-ar-ood-leakage` scout report; recorded 2026-09-24.

# Scout report: why the XA arm leaks unseen carbons into the proton class (EXP8)

**Question (firstmate spec):** why does the cross-attention (physics-informed) arm leak unseen carbon isotopes into the proton class at ~8% on EXP8 while the ResNet arm leaks ~1.5%? Quantify leakage per isotope/arm, confidence/entropy of leaked vs correct events, clustering in stored features, rejection-rule AUROC, connect to the `zero_cls` collapse, cite OOD literature, deliver a verdict + paper paragraph + cheapest confirming experiment.

**Verdict (short):** The leak is an **out-of-distribution magnitude artifact in the classifier-side raw physics input**, not image-space confusion and not attention routing. The XA head consumes the 4 unnormalized physics features (`[Iyy, Izz, Iyz, total_mass]`) concatenated onto the 64-d attended vector (`cat → Linear(68→128) → ReLU → Linear(128→3)`; `src/models/model.py:32`, `src/models/classifier.py:6`). Carbon events push hidden activations to ~4× the seen range (per-event max |h| median 26.4, p99 63.5 vs 12.9–16.6 for seen classes — measured on the cached penultimate dump), and the leaked sub-population's excess hidden direction lies 58% inside the span of the four physics weight columns, aligned +Iyy/−Izz. The same events are correctly rejected by ResNet (90.3–90.9% → other; their RN p_A is *lower* than the channel median), so the images are not proton-like — the physics pathway manufactures the leak. This is the inference-time twin of the `zero_cls` collapse: the head leans on raw physics magnitudes, and any input far outside the training range (zeroed, or carbon-scale) produces a confident, wrong, fixed-direction answer. Confidence/entropy/rejection-score cannot separate the leaks (AUROC ≤ 0.18 within channel; OOD AUROC ≈ 0.47–0.51 for carbons on XA, **inverted** 0.29–0.30 on RN); a hidden-activation-norm score reaches AUROC ≈ 0.90.

---

## 1. Data used (all read-only under `/Users/Reid Hu/MATE-Automation/runs`)

| Artifact | Path | Used for |
|---|---|---|
| Per-event predictions | `runs/EXP8-{XA,ResNet}-Ideal-UnseenChannel/auditfix_d570d34_01/eval_exp8/predictions.csv` (475,000 rows each; `channel,global_idx,true_class,pred_class,p_A,p_B,p_other,rejection_score`) | all leak/confidence/AUROC tables |
| Eval metrics | `…/eval_exp8/metrics.json` | cross-checks (my AUROC recomputation matches `ood.*.auroc` to 4 decimals) |
| Frozen head weights | `…/best_model.pth` → `classifier.classifier.{0,3}.{weight,bias}` (parsed without torch via zip+pickle) | head extrapolation sweeps, leak-direction decomposition |
| Penultimate cache | `outputs/figures/EXP8/_cache_feature_embedding/{CrossAtt,ResNet}_penultimate.npz` (128-d post-`Linear(68→128)+ReLU` hidden, 1500 events/group: A, B, C+D, E, F+G+H) | hidden-space mechanism evidence |
| Leaked event displays | `outputs/figures/EXP8/Leaked Event Displays/exp8_leaked_LEAKED_ev*.png` | visual check of leaked events |
| Closing doc | `20_doc/EXP3_closing_analysis_2026-09-24.md` §8–12 | `zero_cls`/`permuted_q` context |

Channel map (from `metrics.json:data_inputs`): A=p (class 0), B=d (class 1), C=t, D=³He, null (class 2, seen); E=⁴He, F=¹³C, G=¹⁴C, H=¹²C (unseen, all labeled class 2). `rejection_score = 1 − max(p_A, p_B)` (`src/evaluation/evaluate_exp8_unseen.py:130-133`). Unseen channels are evaluated with their **real** stored physics features (`evaluate_exp8_unseen.py:384-385` — `needs_physics` → `model(images, physics_features=batch[1])`).

## 2. Leakage per unseen isotope, per arm

Directional routing rates (fraction of channel events predicted into each class):

| ch | isotope | n | XA→A | XA→B | XA→other | RN→A | RN→B | RN→other | Δ→A (XA−RN) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| E | ⁴He | 100k | 0.0189 | 0.0379 | 0.9433 | 0.0215 | 0.0358 | 0.9427 | −0.003 |
| F | ¹³C | 100k | **0.0828** | 0.0267 | 0.8905 | 0.0148 | 0.0229 | 0.9623 | **+0.068** |
| G | ¹⁴C | 100k | **0.0847** | 0.0246 | 0.8908 | 0.0139 | 0.0216 | 0.9645 | **+0.071** |
| H | ¹²C | 100k | **0.0803** | 0.0270 | 0.8927 | 0.0158 | 0.0244 | 0.9598 | **+0.065** |

- The arm gap is **specific to far-OOD carbons → class A** (+6.5–7.1pp; McNemar p_holm significant per `metrics.json:arm_comparison.leak_mcnemar_by_channel`). ⁴He (interpolation OOD) shows no arm gap (−0.3pp), and leak→B is arm-symmetric (+0.3–0.4pp). Seen-channel routing is identical within 0.3pp.
- The three carbons are statistically indistinguishable per arm (XA 8.03–8.47%, RN 1.39–1.58%) — consistent with the difficulty report's ΔA/A-below-resolution observation.
- No clustering in `global_idx`: decile leak rates are flat (XA F: 0.079–0.087 across index deciles; KS leaked-vs-correct p ≥ 0.15 all channels/arms). If file order encodes energy, the leak is not an energy-edge artifact.

## 3. Confidence and entropy: leaked vs correctly-routed (same channel)

Medians (XA arm; RN in parentheses where it differs materially):

| group | n (XA, F) | maxp med | entropy med | p_A med | p_other med |
|---|---:|---:|---:|---:|---:|
| F→A leaked | 8,284 | **0.765** (RN 0.547) | 0.69 (RN 0.96) | 0.765 | 0.091 |
| F→B leaked | 2,665 | 0.466 | 1.02 | 0.178 | 0.322 |
| F correct (→other) | 89,051 | 0.912 | 0.36 | 0.045 | 0.912 |
| seen-A correct | 13,859 | 0.980 | 0.11 | — | — |

- **XA's carbon→A leaks are confident**: median maxp 0.75–0.77, 84–85% of leaked events have maxp > 0.5, ~12% have maxp > 0.9. RN's rare carbon→A leaks are marginal (median maxp 0.55). XA leaks are *more* confident than its own correct routing of the same channel is wrong — the signature of a systematic bias, not boundary noise.
- p_A on carbons is **bimodal on XA**: decile histogram has a second mode at p_A ∈ [0.8,0.9] holding 2.5–2.7% of events (vs 0.1% on RN). The leak is a distinct high-p_A sub-population, not a diffuse tail.
- ⁴He→A leaks look different: lower confidence (XA med 0.54, RN 0.60) and **18.5× cross-arm overlap enrichment** (751 events leak on both arms vs 41 expected under independence) → genuine image-level ambiguity. Carbon→A overlap enrichment is only 3.8–4.2×, and 92–94% of XA's carbon leaks are XA-only.

## 4. Cross-arm event-level test (the decisive table)

For the exact events XA leaks to A, what does RN say?

| ch | XA→A n | of those, RN→other | RN p_A med on them | RN p_A med, whole channel |
|---|---:|---:|---:|---:|
| F | 8,284 | 90.3% | **0.029** | 0.038 |
| G | 8,466 | 90.9% | **0.030** | 0.038 |
| H | 8,025 | 88.3% | **0.030** | 0.038 |
| E | 1,887 | 32.4% | 0.291 | 0.044 |

XA's leaked carbons are events the image-only arm finds *less* proton-like than average (RN p_A 0.029–0.030 vs channel median 0.038). The leak cannot come from the image; it is injected by the physics pathway. (For ⁴He the two arms leak the same ambiguous events — different mechanism.)

## 5. Rejection rules: AUROC per arm

**(a) Leaked vs correctly-routed events within the same unseen channel** (score high ⇒ "leaky"; Mann-Whitney AUROC):

| arm | ch | p_A | maxp | −entropy | rejection_score |
|---|---|---:|---:|---:|---:|
| XA | F | 0.9998 | 0.147 | 0.176 | 0.0003 |
| XA | G | 0.9998 | 0.153 | 0.183 | 0.0003 |
| XA | H | 0.9998 | 0.127 | 0.153 | 0.0004 |
| XA | E | 0.9999 | 0.133 | 0.133 | 0.0011 |
| RN | F/G/H | ≈0.9999 | 0.08 | 0.08 | 0.0003 |

Within a channel, `p_A` trivially identifies the leaks (it *is* the leak criterion); **max-probability and entropy anti-separate** (AUROC 0.08–0.18): leaked events are *more* confident than correctly-routed ones. No threshold on confidence or entropy can remove the leaks without removing the correctly-routed events first.

**(b) Unseen channel vs seen C+D "other" events** (standard open-set detection; matches `metrics.json:ood`):

| arm | ch | rejection_score | entropy | −maxp | p_other | **max\|h\| (penultimate)** |
|---|---|---:|---:|---:|---:|---:|
| XA | E | 0.592 | 0.399 | 0.399 | 0.610 | 0.651 |
| XA | F | 0.487 | 0.500 | 0.503 | 0.499 | — |
| XA | G | 0.475 | 0.511 | 0.514 | 0.488 | — |
| XA | H | 0.509 | 0.481 | 0.483 | 0.520 | — |
| XA | F+G+H | — | — | — | — | **0.903** |
| RN | E | 0.395 | 0.486 | 0.494 | 0.514 | 0.710 |
| RN | F/G/H | 0.29–0.30 | 0.41 | 0.42 | 0.59 | 0.898 (F+G+H) |

- On XA, confidence-based OOD detection of carbons is **at chance** (0.47–0.51). On RN it is **worse than chance** (0.29–0.30): ResNet is *more* confident on unseen carbons than on seen t/³He — textbook softmax overconfidence on OOD (Hendrycks & Gimpel 2017; Nguyen et al. 2015), yet it still routes them correctly.
- **Operating points** (reject if rejection_score > t, t = seen-C+D 95th pct): XA rejects only 35–39% of carbons while sacrificing 5% of seen other-events; RN rejects 7%. At the 99th pct: XA 31–35%, RN 2%. A confidence threshold tuned on seen data cannot catch XA's confident leaks.
- **What does work**: max |h| of the 128-d penultimate (post-physics hidden) separates F+G+H from seen C+D at AUROC ≈ 0.90 on *both* arms — the OOD signal lives in activation magnitude, not in the softmax. This is the ReAct/activation-magnitude family of OOD scores (Sun et al. 2021; Djurisic et al. 2023).

## 6. Mechanism: where the leak is manufactured

Architecture (verified in `src/models/model.py:27-33`, `src/models/classifier.py:6-18`, EXP8 `config.yaml`): XA arm = `attended(64) ⊕ physics(4) → Linear(68→128) → ReLU → Dropout → Linear(128→3)`. Physics features are **raw, unnormalized** (dataset returns them untransformed; `normalization_stats.json` covers image channels only). RN arm (`fusion_type: none`) = `GAP(512) → same head shape`, no physics anywhere.

Evidence chain:

1. **Hidden activations explode on carbons, XA only.** Per-event max |h| (cached penultimate, n=1500/group): XA seen groups 12.9–16.6 (median), F+G+H **26.4 median / 63.5 p99 / 76.9 max**. RN: all groups 2.1–3.6, F+G+H 3.6/8.4/10.8. The physics input inflates XA's head pre-activations ~4× beyond anything in training.
2. **The leak direction is physics-shaped.** Leaked-minus-correct mean hidden direction: 57.7% of its norm lies in the column space of `W1[:,64:68]` (the four physics inputs); cosines +0.43 (Iyy), −0.40 (Izz), +0.15 (Iyz), +0.01 (M). Leaked events have ~2× mean |h| (4.75 vs 2.52) and fewer dead ReLU units (46% vs 65% zeros) — many units pushed deep into their linear regime.
3. **The head extrapolates linearly and confidently.** Sweeping the frozen head (attended=0): logits grow linearly with feature magnitude — e.g. M=1000 → logits [31.9, 40.6, 5.3]; Iyy=+100 → [1.7, 1.0, −0.3] → A; Iyy=+100 & Iyz=+100 → [2.8, 1.2, −1.0] → A. Nothing in the head bounds the physics contribution; whichever class the extrapolated direction favors wins with arbitrary confidence. The A-favoring region is reached mainly via large +Iyy (transverse moment) combined with small/negative Izz or +Iyz — i.e. **elongated transverse-moment signatures**, not total charge alone (large M alone → B).
4. **The bulk of carbons is not near the proton cluster.** Nearest-centroid in the 128-d space: 99.9% of F+G+H nearest C+D centroid on both arms. The leak is a tail phenomenon — events whose extreme physics pushes h across the A boundary — not a wholesale representation collapse.
5. **Attention is not the route.** `permuted_q` = original on all 6 EXP3 checkpoints (closing doc §9): the physics query carries no event-specific signal. The leak enters through the **classifier-side concat**, the same pathway whose zeroing collapses XA-Raw to the minority-class rate (0.19–0.41). `zero_cls` and the carbon leak are the same phenomenon seen from two sides: the head treats raw physics magnitude as a load-bearing input, so out-of-range values — whether zeroed or carbon-scale — produce confident garbage. D5 (`permuted_cls`/`mean_cls`) is the designed discriminator and remains the right next diagnostic; this report adds that on EXP8 the dependence is already proven harmful on real OOD inputs.
6. **Leaked events are faint tracks, not proton-like.** `exp8_leaked_LEAKED_ev55361_F.png`: a sparse, low-charge track; XA→A at p=0.95, RN→other. Consistent with extreme *feature* values (large moment relative to charge), not visual similarity.

**Mechanism verdict:** the XA arm's physics pathway is an unbounded linear side-channel into the classifier. On in-distribution data it is redundant-but-harmless (HC) or learned redundancy that crowds the head (Raw, per the closing doc). On far-OOD data it becomes a liability: carbon events' physics vectors land outside the training range, the linear extrapolation inflates hidden activations ~4×, and a ~8% tail crosses into the A region with high confidence. ResNet, lacking the side-channel, leaks only via genuine image ambiguity (~1.5%, marginal confidence, 18× event overlap with XA's ⁴He leaks but not its carbon leaks). This is a fused-feature OOD bias artifact: the physics prior that helps interpolation (⁴He gap ≈ 0) actively hurts extrapolation.

## 7. Paper-ready framing paragraph

> On the unseen-channel task, the physics-informed arm rejects interpolation-OOD ⁴He at the same rate as the generic CNN but leaks far-OOD carbon recoils into the proton class at 8.0–8.5% versus 1.4–1.6% — a 5× false-target penalty concentrated entirely in the physics pathway. Event-level pairing shows the leaked events are not proton-like in image space (the physics-free arm assigns them *below-median* proton probability and rejects 90%); instead, the unnormalized physics features — moment-of-inertia components and total charge — act as an unbounded linear side-channel into the classification head, and out-of-distribution feature magnitudes inflate the head's activations roughly four-fold beyond the training range, pushing a confident tail across the proton boundary. Confidence- and entropy-based rejection cannot detect these leaks (AUROC ≈ 0.5, and the leaked events are *more* confident than correctly rejected ones), whereas an activation-magnitude score separates them at AUROC ≈ 0.9. The physics prior therefore improves in-distribution discrimination at the cost of a new, confident failure mode under distribution shift — a fused-feature analogue of the classic OOD-extrapolation pathology — and motivates either feature clipping/normalization or an activation-space rejection stage before the physics-informed classifier can be deployed on unlabeled data.

## 8. Cheapest box-side experiment to confirm (ranked)

All CPU-feasible under the 2 GB cap, no training, no GPU:

1. **E1 — feature audit (minutes, pandas+h5py only, no model).** Load `physics_features` for channels A,B,C,D,E,F,G,H from `data/exp8/*.h5`; join to `eval_exp8/predictions.csv` by `global_idx`. Report per-channel feature quantiles and leaked-vs-correct feature distributions. Prediction: leaked events sit at the extreme of `Iyy` (and/or low `Izz`), outside the seen-channel range. This alone names the driving feature and closes the "clustering in stored features" question this report could only answer in hidden space.
2. **E2 — clipped-physics eval (the decisive counterfactual; ~10–20 min CPU on 400k unseen events, batched forward only).** Re-run EXP8 eval on E–H with physics features **clipped to the seen-channel [min,max] per feature**. Prediction: carbon→A leak collapses from ~8% to ≈RN's ~1.5% while seen-channel accuracy is unchanged (clipping is a no-op in-distribution). If confirmed, the mechanism is magnitude extrapolation, full stop — and the fix is a one-line clamp or feature normalization.
3. **E3 — zero/permuted-physics on unseen channels (same cost as E2).** `zero_cls` on carbons should drive them to a single fixed class (the OOD-bias prediction); `permuted_cls` (physics shuffled across the batch) should leave the leak rate ≈ unchanged if the leak is a static magnitude artifact vs drop if event-specific. This is D5 applied to the OOD setting and ties the EXP8 leak directly to the EXP3 `zero_cls` ambiguity.

E1+E2 together are the minimum sufficient confirmation; E3 is the mechanistic tie-in. None touches training or the manuscript.

## 9. OOD literature to cite

- **Hendrycks & Gimpel, ICLR 2017** — max-softmax-probability baseline for OOD detection; our Table 5 is exactly this baseline failing (AUROC ≈ 0.5 / inverted).
- **Nguyen, Yosinski & Clune, CVPR 2015** — deep networks produce high-confidence predictions on unrecognizable/OOD inputs; matches the confident-leak signature.
- **Liu et al., NeurIPS 2020** — energy-based OOD scoring; energy ≈ logsumexp of logits would inherit the same inflated-logit failure here (worth one sentence, not a fix).
- **Sun, Guo & Li, ICML 2021 (ReAct)** — OOD inputs trigger abnormally large penultimate activations; rectifying activations restores detection. Directly matches our max|h| AUROC ≈ 0.90 finding and motivates the activation-space rejection stage.
- **Djurisic et al., ICLR 2023 (ASH)** — activation-shaping OOD detection; same family, alternative citation.
- **Lee et al., NeurIPS 2018 (Mahalanobis)** — feature-space distance OOD detection; relevant if the lead wants a centroid-distance variant on the 128-d cache (carbons sit near C+D centroid, so Mahalanobis alone likely fails — the leak is a directional tail, not a cluster shift; say this if cited).
- **Hendrycks et al., ICLR 2019 (OE)** / **Yang et al., ICLR 2024 (OpenOOD survey)** — optional framing refs for "OOD detection for fused/multi-modal features" context.

## 10. Open questions for the lead (not blocking)

- **Per-event physics features for E–H** live only in `data/exp8/*.h5` on the box — no local copy. E1 above closes this; until then the "+Iyy/−Izz" attribution is from the hidden-space direction (58% in physics subspace), not a direct feature measurement.
- **Why class A and not B**: the head's extrapolation direction favors A for the (+Iyy, −Izz/+Iyz) region but B for large +M alone. Which region real carbon events occupy needs E1. If carbons' `total_mass` is *low* (faint elastic tracks, cf. ev55361), the M→A direction (M=−100 → A in the sweep) may dominate instead — E1 decides between "large moment" and "low charge" variants of the same artifact.
- **EXP8 counterfactual battery**: the EXP3 battery script (`exp3_counterfactual_battery.py`) runs triton/4He checkpoints; an EXP8 variant feeding unseen-channel physics through `zero/permute/clip_cls` is the E2/E3 implementation — presumably a small patch, but I did not verify the script's channel handling.
- **Seed robustness**: all EXP8 numbers are seed 42. The closing doc warns counterfactual responses vary wildly across seeds (zero_q −6.5 vs −57.1pp); the leak mechanism should be re-checked on a second seed before the paper quantifies it.
- **null channel**: `physics_features` are all-zero for null events (verified in local fixture H5s) and null leaks 0.0% on both arms — consistent with zero-physics being a *seen* condition during training (null was a training file), not a counterexample.

## 11. Reproduction

```bash
# All read-only. Analysis script: /tmp/ood_leak/analyze.py (worktree-local, ~150 lines).
python3 /tmp/ood_leak/analyze.py   # tables 1-9: leakage, confidence, AUROC, idx-clustering, cross-arm
# Head-weight extraction + sweeps: zip+pickle parse of best_model.pth (no torch needed),
#   keys classifier.classifier.{0,3}.{weight,bias}; W1[:,64:68] = physics columns.
# Penultimate cache: outputs/figures/EXP8/_cache_feature_embedding/{CrossAtt,ResNet}_penultimate.npz
#   X (7500,128) post-Linear(68->128)+ReLU hidden; y in {A,B,C+D,E,F+G+H}, 1500 each.
#   logits = X @ W2.T + b2 reproduces the full-data leak rates (XA F+G+H 8.4% vs 8.3%).
```

Key numbers cross-validated: my recomputed `rejection_score` AUROCs equal `metrics.json:ood.*.auroc` to 4 decimals; cached-hidden leak rate (8.4%) matches full-data rate (8.3%); per-channel confusion matches `metrics.json:per_channel_confusion` exactly.
