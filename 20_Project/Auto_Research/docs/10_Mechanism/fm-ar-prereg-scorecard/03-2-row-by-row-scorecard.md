<!-- Verbatim source section; overview: [[../fm-ar-prereg-scorecard]] -->
<!-- SOURCE-BODY-START -->
## 2. Row-by-row scorecard

### 2a. FORMAL verdicts (scored off the locked checkpoint / locked inputs)

| Prereg row (yaml lines) | Verdict | Observed | Notes |
|---|---|---|---|
| `selection_bias` (:282-300) | **miss — all 6 rivals** | final_gap = 0.85964 − 0.89028 = **−0.03064** | U/C/Q/I/O band [−0.025,−0.010]: −3.06 pp is *below* the band. S clause ≥ −0.005: falsified. Best-epoch gap was −2.13 pp (0.87100−0.89240); final-epoch is −3.06 pp — selection bias hides part of the deficit, it does not create it. |

That is the complete formal scorecard. Everything else is pending or off-lock.

### 2b. Pending rows — exact missing input named

| Prereg row | Missing input (scorer detail, verbatim) | What unblocks it |
|---|---|---|
| `permuted_cls`, `mean_cls`, `scaled_cls`, `clipped_cls`, `centered_q`, `zero_ch0`, `zero_ch1`, `swap_physics` (:71-215) | `condition <X> absent` in the locked s42 battery | D6 battery on the **s42 XA-Raw triton checkpoint** (agenda B2: ~200 MB copy of `best_model.pth` + 2000-event val subset + `physics_feature_stats.json`; ~15–30 min CPU here or on box 176) |
| `zero_ch0.rn_accuracy` (:174-176) | `no battery input matches ['rn-raw']` | `zero_ch0` battery on the RN-Raw s42 checkpoint (same B2-style copy) |
| `map_permuted_q` (:217-244) | `attention JSON lacks query_invariance.max_abs_diff_max` / `.argmax_agreement_frac`; acc_delta resolves (see §3) | `exp4_attention_metrics.py --query-invariance` run (Check A, map-level permuted_q on HC; ~1 h CPU) |
| `threshold_sweep` (:246-280) | no `--sweep` input; no `predictions_paired.csv` exists locally | predump chain output from box 176 (agenda B1, ~10–50 MB) |
| `rn_raw_lf_s42` (:309-323) | `no metrics.json matches ['resnet-raw','label-fix']` | Rung-1 R1 training run (GPU; captain-held) |
| `he4_hc_pair` (:325-355) | `no metrics.json matches ['xa-hc','label-fix']` / `['resnet-hc','label-fix']` | Rung-1 R2a/R2b (GPU; captain-held) |
| `rn_mod_nimpsim` (:357-371) | `no metrics.json matches ['rnmod']` | NimpSim Option B, ~20–35 GPU-h (captain-held; does not fit reserve) |
| `attn_dim_512` (:373-390) | `no metrics.json matches ['xa-raw','512']` | R3a reserve run (GPU; gate "after D1–D5" — D5 landed on 3/6 checkpoints, s42-triton still missing) |
| `physics_norm_zscore` (:392-414) | `no metrics.json matches ['xa-raw','zscore']` | R3b — **gate not met** (scaled_cls collapsed, did not improve); do not queue |
| falsifier `map_permuted_q_large_predictive` (:423-439) | attention `query_invariance` metrics | Check A — but see §3: already `not_fired` on the cls-level acc_delta clause |
| falsifier `cls_drop_without_norm_gain` (:441-466) | D6 deltas on the locked checkpoint | Same B2 battery as the conditions rows |

### 2c. OFF-LOCK band-reads (deterministic; NOT formal verdicts)

Method: `offlock_bandread.py` calls `exp3_prereg_score.score()` unchanged; it only strips the `expect` A0-comparability gate and retargets `battery_match` substrings (`"xa-raw"`→`"counterfactual_battery_d5"`, `"hc"`→`"counterfactual_battery.json"`) — both moves sanctioned by `scoring.notes` yaml:59. Bands, tolerances, clause logic, precedence untouched.

**XA-Raw s0** (`counterfactual_battery_d5.json`, n=2000, original 0.8675, |ΔA0|=0.004 → formally not_comparable):

| Condition | Observed (Δ) | Scorer band-read | Hand-read (claims-refresh §3a) | Agree? |
|---|---|---|---|---|
| permuted_cls | 0.8685 (+0.10 pp) | hit ×6 | hit — all rivals | ✓ |
| mean_cls | 0.8685 (+0.10 pp) | hit ×6 | hit — all rivals | ✓ |
| scaled_cls | **0.4095 (−45.8 pp)** | **miss ×6** | miss — ALL six | ✓ |
| clipped_cls | 0.8675 (0.0) | hit C/I/Q/S; miss U,O | hit C/Q/I/S; miss U and O | ✓ |
| centered_q | **0.4770 (−39.1 pp)** | **miss ×6** | miss — ALL six | ✓ |
| zero_ch0 | 0.7985 (−6.9 pp) | miss ×6 (rn arm pending) | miss — all | ✓ |
| zero_ch1 | 0.7790 (−8.9 pp) | hit C/I/O/S; miss U,Q | hit C/I/O/S; miss U and Q | ✓ |
| falsifier `cls_drop_without_norm_gain` | permuted/mean Δ = +0.001/+0.001 | **not_fired** | not fired | ✓ |

**XA-Raw label-fix s42** (4He task; original 0.9275 — different task, directional only):

| Condition | Observed (Δ) | Scorer band-read |
|---|---|---|
| permuted_cls / mean_cls | 0.9275 (0.0) / 0.9270 (−0.05 pp) | miss ×6 / miss ×6 (bands locked to triton A0 — expected; the *signature* matches s0: physics = static bias) |
| scaled_cls | **0.1935 (−73.4 pp)** | miss ×6 |
| clipped_cls | 0.9275 (0.0) | miss ×6 (band artifact of off-lock A0) |
| centered_q | 0.8600 (−6.8 pp) | hit U/C/I/O/S; miss Q (Q required ≥3 pp loss *and* acc ≤0.84 — observed 0.86) |
| zero_ch0 / zero_ch1 | 0.5700 (−35.8 pp) / **0.1935 (−73.4 pp)** | miss ×6 / miss ×6 |
| falsifier `cls_drop_without_norm_gain` | | **not_fired** |

**XA-HC s42** (original 0.953 — different representation, directional only):

| Condition | Observed (Δ) | Scorer band-read |
|---|---|---|
| permuted_cls / mean_cls | 0.9535 (+0.05) / 0.9530 (0.0) | miss ×6 (off-lock bands) — signature: static bias |
| scaled_cls | 0.9540 (+0.10 pp) | miss ×6 — **no collapse on HC s42** |
| clipped_cls | 0.9530 (0.0) | miss ×6 |
| centered_q | 0.8870 (−6.6 pp) | miss ×6 (band artifact; Δ inside U's −2..−17 pp informally) |
| zero_ch0 / zero_ch1 | 0.8065 (−14.7) / 0.8075 (−14.6) | miss ×6 / hit C/I/O/S, miss U,Q |
| map_permuted_q acc_delta | −0.0005 | resolves → falsifier clause `acc_delta ≤ −0.02` = **miss** |
| falsifier `map_permuted_q_large_predictive` | | **not_fired** (acc_delta clause fails outright) |
| falsifier `cls_drop_without_norm_gain` | | **not_fired** |

**XA-HC s0** (original 0.953; d5 mtime 09-24 22:46 — **landed after the claims-refresh; new to this scorecard**):

| Condition | Observed (Δ) | Scorer band-read |
|---|---|---|
| permuted_cls / mean_cls | 0.9530 (0.0) / 0.9525 (−0.05) | miss ×6 — static-bias signature holds |
| scaled_cls | **0.7975 (−15.6 pp)** | miss ×6 — **collapses on HC s0, unlike HC s42** |
| clipped_cls | 0.9530 (0.0) | miss ×6 |
| centered_q | **0.5565 (−39.7 pp)** | miss ×6 — as large as Raw s0's −39.1 pp |
| zero_ch0 / zero_ch1 | 0.7985 (−15.5) / 0.7940 (−15.9) | miss ×6 / hit C/I/O/S, miss U,Q |
| map_permuted_q acc_delta | +0.0005 | falsifier `map_permuted_q_large_predictive` = **not_fired** |
| falsifier `cls_drop_without_norm_gain` | | **not_fired** |

---

<!-- SOURCE-BODY-END -->
