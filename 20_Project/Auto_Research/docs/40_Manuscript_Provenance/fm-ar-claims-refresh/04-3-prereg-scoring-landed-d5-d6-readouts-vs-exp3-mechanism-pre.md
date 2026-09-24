<!-- Verbatim source section; overview: [[../fm-ar-claims-refresh]] -->
<!-- SOURCE-BODY-START -->
## 3. Prereg scoring — landed D5/D6 readouts vs `exp3_mechanism_prereg_2026-09-24.yaml`

**Formal scorer verdict first:** the prereg locks `A0 = 0.8715` on the **s42 XA-Raw triton** checkpoint (`reference`, yaml:30-39) with `a0_tolerance: 0.001` (yaml:43). The three landed D6 batteries are on **s0 XA-Raw** (original 0.8675, |ΔA0|=0.004 → not_comparable), **lf XA-Raw** (0.9275, different task → not_comparable), and **HC s42** (0.953, different representation → not_comparable). The locked-checkpoint D6 battery has **not landed** — every `conditions:` row below is formally `not_comparable`/`pending` under the scorer's own precedence (yaml:50-51). Band-reads against the locked bands follow anyway, since the bands were set "broad enough to cover the observed seed mechanism variance" (yaml:36).

### 3a. Band-read — XA-Raw s0 (`counterfactual_battery_d5.json`, n=2000, original 0.8675)

| Condition (prereg id, yaml line) | Observed | Rivals' locked bands | Verdict |
|---|---|---|---|
| `permuted_cls` (:71-88) | 0.8685 (+0.1pp) | all six: 0.86–0.88 | **hit — all rivals** (non-discriminating) |
| `mean_cls` (:90-103) | 0.8685 (+0.1pp) | all six: 0.86–0.88 | **hit — all rivals** |
| `scaled_cls` (:105-124) | **0.4095 (−45.8pp)** | U: 0.88–0.91; O: 0.89–0.93; C/Q/I/S: 0.86–0.89 | **miss — ALL six rivals** (nobody predicted collapse) |
| `clipped_cls` (:126-145) | 0.8675 (0.0) | U: 0.88–0.91; O: 0.89–0.93; C/Q/I/S: 0.86–0.89 | **hit C/Q/I/S; miss U and O** |
| `centered_q` (:147-166) | **0.4770 (−39.1pp)** | U: 0.70–0.88; Q: 0.70–0.84; C: 0.82–0.88; I/S: 0.84–0.88; O: 0.70–0.88 | **miss — ALL six** (drop far exceeds every band) |
| `zero_ch0` (:168-185) | 0.7985 (−6.9pp) | U: 0.85–0.88 (+RN 0.87–0.90); C/Q/I/O/S: 0.84–0.89 | **miss — all** (RN arm not run) |
| `zero_ch1` (:187-200) | 0.7790 (−8.9pp) | U/Q: 0.55–0.75; C/I/O/S: 0.70–0.88 | **hit C/I/O/S; miss U and Q** (U predicted a larger loss) |
| `swap_physics` (:202-215) | — | — | **not yet scorable** (condition not run) |
| `map_permuted_q` (:217-244) | — | — | **not yet scorable** (needs attention JSON + HC battery; Check A pending) |
| `threshold_sweep` (:246-280) | — | — | **not yet scorable** (sweep not run; script had verdict bug fixed in #14) |
| `selection_bias` (:282-300) | final_gap = 0.85964 − 0.89028 = **−0.0306** (from `history.json` s42 pair) | U/C/Q/I/O: −0.025..−0.010; S: ≥−0.005 | **miss — ALL six** (final-epoch gap −3.06pp is *worse* than the best-epoch −2.13pp; selection bias does not explain the deficit — it understates it) |

### 3b. Band-read — XA-Raw label-fix s42 (4He task; original 0.9275) and XA-HC s42 (original 0.953)

Bands were locked to the triton s42 checkpoint; these are directional reads only.

| Condition | lf observed | HC observed | Read |
|---|---|---|---|
| permuted_cls / mean_cls | 0.9275 / 0.9270 | 0.9535 / 0.9530 | Same signature as s0: physics = static bias, **task- and representation-invariant**. |
| scaled_cls | **0.1935 (−73.4pp)** | **0.9540 (+0.1pp)** | Raw: magnitude-driven collapse (misses every band, as s0). HC: **no collapse** — the HC head does not even read magnitude; physics is a pure static bias there. |
| clipped_cls | 0.9275 | 0.9530 | No extrapolation either side — consistent with C/I/O/S bands. |
| centered_q | 0.8600 (−6.8pp) | 0.8870 (−6.6pp) | Query DC load-bearing but ~6× smaller cost than triton s0 (−39pp); inside U's −2..−17pp band informally. |
| zero_ch0 / zero_ch1 | 0.5700 / **0.1935** | 0.8065 / 0.8075 | 4He: Ch1 dominant (−73.4pp). HC: symmetric (−14.7/−14.6pp). |

### 3c. Falsifiers (yaml:421-466)

| Falsifier | Status |
|---|---|
| `map_permuted_q_large_predictive` (:423-439) | **pending** — needs the HC map-level attention run (Check A). |
| `cls_drop_without_norm_gain` (:441-466) | **not fired** on all 3 landed checkpoints: permuted/mean deltas are +0.001/0.0/−0.0005 (none ≤ −0.10). Consistent with the OOD-bias model (O). |

### 3d. GPU-run rows (yaml:307-414) — all pending

`rn_raw_lf_s42`, `he4_hc_pair` (Rung 1, not launched), `attn_dim_512` (R3a; gate "after D1–D5" — D5 has now landed on 3/6 checkpoints, s42-triton still missing), `physics_norm_zscore` (R3b; gate **not met** — `scaled_cls` collapsed rather than improved), `rn_mod_nimpsim` (match fixed `rn-mod`→`rnmod` in PR #29 per `scoring.notes` yaml:59; cost re-estimated 20–35 GPU-h — does not fit this session).

**Headline for the captain:** the locked prereg's discriminating rows all missed on the landed checkpoints — `scaled_cls`, `centered_q`, `zero_ch0`, and `selection_bias` produced outcomes **no rival predicted**. The unified model (U) was right on the static-bias signature (permuted/mean ≈ original) but wrong on magnitude (predicted z-scoring/clipping would *help*; it destroyed Raw and did nothing on HC). The data support a stronger statement than any locked rival: **on Raw the head uses unnormalized physics as a magnitude-dependent static bias; on HC it ignores physics almost entirely.**

<!-- SOURCE-BODY-END -->
