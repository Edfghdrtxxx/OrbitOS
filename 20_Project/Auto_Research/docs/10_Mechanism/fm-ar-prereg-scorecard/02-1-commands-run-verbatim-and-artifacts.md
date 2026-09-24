<!-- Verbatim source section; overview: [[../fm-ar-prereg-scorecard]] -->
<!-- SOURCE-BODY-START -->
## 1. Commands run (verbatim) and artifacts

Worktree: `/Users/leyi/.treehouse/MATE-Automation-8e6480/3/MATE-Automation` @ `b06f16b`. `LIVE=/Users/Reid Hu/MATE-Automation`. Python 3.9.6, torch-free.

```bash
# (a) two-run selection_bias.json (prereg row: xa_match=["xa-raw","seed42"], rn_match=["resnet-raw","seed42"])
python3 scripts/analysis/exp3_selection_bias.py \
  "$LIVE/runs/EXP3-XA-Raw-100k-seed42/20260922_185618" \
  "$LIVE/runs/EXP3-ResNet-Raw-100k-seed42/20260921_181834" \
  --out prereg_scorecard_out/selection_bias_2run.json
# INFO 20260922_185618 best=0.87100@ep12 final=0.85964 gap=+0.01136
# INFO 20260921_181834 best=0.89240@ep18 final=0.89028 gap=+0.00212

# (b) 12-run selection_bias.json (A5 table)
python3 scripts/analysis/exp3_selection_bias.py "$LIVE"/runs/EXP3-*/*/ \
  --out prereg_scorecard_out/selection_bias_12run.json

# (c) FORMAL scorer run — all landed batteries + attention + selection + all 12 metrics.json
python3 scripts/analysis/exp3_prereg_score.py \
  --prereg 20_doc/prereg/exp3_mechanism_prereg_2026-09-24.yaml \
  --battery "$LIVE"/runs/EXP3-*/*/counterfactual_battery*.json \
  --attention "$LIVE/runs/EXP3-XA-HC-100k-seed42/20260922_085316/exp4_attention_metrics.json" \
  --selection prereg_scorecard_out/selection_bias_2run.json \
  --metrics "$LIVE"/runs/EXP3-*/*/metrics.json \
  --out prereg_scorecard_out/score_all_batteries.json

# (d) FORMAL scorer run — locked-checkpoint battery only (cleanest formal record)
python3 scripts/analysis/exp3_prereg_score.py \
  --prereg 20_doc/prereg/exp3_mechanism_prereg_2026-09-24.yaml \
  --battery "$LIVE/runs/EXP3-XA-Raw-100k-seed42/20260922_185618/counterfactual_battery.json" \
  --attention "$LIVE/runs/EXP3-XA-HC-100k-seed42/20260922_085316/exp4_attention_metrics.json" \
  --selection prereg_scorecard_out/selection_bias_2run.json \
  --metrics "$LIVE"/runs/EXP3-*/*/metrics.json \
  --out prereg_scorecard_out/score_locked_s42.json

# (e) OFF-LOCK band-reads — same scorer code path; driver strips `expect`
#     (A0 gate) and retargets battery_match substrings (sanctioned by
#     scoring.notes yaml:59). Driver: prereg_scorecard_out/offlock_bandread.py
python3 prereg_scorecard_out/offlock_bandread.py \
  "$LIVE/runs/EXP3-XA-Raw-100k-seed0/20260923_084135/counterfactual_battery_d5.json" \
  prereg_scorecard_out/bandread_s0_xaraw.json
python3 prereg_scorecard_out/offlock_bandread.py \
  "$LIVE/runs/EXP3-XA-Raw-100k-label-fix-seed42/20260923_154749/counterfactual_battery_d5.json" \
  prereg_scorecard_out/bandread_lf_xaraw.json
python3 prereg_scorecard_out/offlock_bandread.py \
  "$LIVE/runs/EXP3-XA-HC-100k-seed42/20260922_085316/counterfactual_battery_d5.json" \
  "$LIVE/runs/EXP3-XA-HC-100k-seed42/20260922_085316/counterfactual_battery.json" \
  prereg_scorecard_out/bandread_s42_xahc.json
python3 prereg_scorecard_out/offlock_bandread.py \
  "$LIVE/runs/EXP3-XA-HC-100k-seed0/20260922_122647/counterfactual_battery_d5.json" \
  "$LIVE/runs/EXP3-XA-HC-100k-seed0/20260922_122647/counterfactual_battery.json" \
  prereg_scorecard_out/bandread_s0_xahc.json
```

**Inputs inventoried** (`find $LIVE/runs -name 'counterfactual_battery*.json'` etc.): 9 battery JSONs (5 original D1–D4 + 4 d5/D6), 3 `exp4_attention_metrics.json` (none carries `query_invariance`), 12 `history.json`, 12 `metrics.json`. **No** `threshold_sweep`/`predictions_paired` JSON exists locally; **no** RN-Raw battery exists; **no** `selection_bias.json` pre-existed (built per (a)).

### Scorer output, verbatim — run (d), locked-checkpoint formal record

```
condition                      C               I               O               Q               S               U        
------------------------------------------------------------------------------------------------------------------------
permuted_cls                pending         pending         pending         pending         pending         pending     
mean_cls                    pending         pending         pending         pending         pending         pending     
scaled_cls                  pending         pending         pending         pending         pending         pending     
clipped_cls                 pending         pending         pending         pending         pending         pending     
centered_q                  pending         pending         pending         pending         pending         pending     
zero_ch0                    pending         pending         pending         pending         pending         pending     
zero_ch1                    pending         pending         pending         pending         pending         pending     
swap_physics                pending         pending         pending         pending         pending         pending     
map_permuted_q              pending         pending         pending         pending         pending         pending     
threshold_sweep             pending         pending         pending         pending         pending         pending     
selection_bias                miss            miss            miss            miss            miss            miss      
rn_raw_lf_s42               pending         pending         pending         pending         pending         pending     
he4_hc_pair                 pending         pending         pending         pending         pending         pending     
rn_mod_nimpsim              pending         pending         pending         pending         pending         pending     
attn_dim_512                pending         pending         pending         pending         pending         pending     
physics_norm_zscore         pending         pending         pending         pending         pending         pending     
------------------------------------------------------------------------------------------------------------------------
rival hit/miss/pend/n-c     0/1/15/0        0/1/15/0        0/1/15/0        0/1/15/0        0/1/15/0        0/1/15/0    
falsifier map_permuted_q_large_predictive: pending
falsifier cls_drop_without_norm_gain: pending
```

Run (c) — all batteries at once — produces the identical table (every battery row `pending` because `battery_match: ["xa-raw"]` matches 3 files → ambiguous → pending). The pending reasons from `score_locked_s42.json` (verbatim details):

- `permuted_cls.accuracy`: `…/counterfactual_battery.json: condition permuted_cls absent` (same for all D6 conditions)
- `zero_ch0.rn_accuracy`: `no battery input matches ['rn-raw']`
- `map_permuted_q.max_abs_diff`: `attention JSON lacks query_invariance.max_abs_diff_max`; `.acc_delta`: `no battery input matches ['hc']`
- `selection_bias.final_gap`: `ok, value=-0.03064` → miss vs U/C/Q/I/O band [−0.025,−0.010] and vs S clause ≥ −0.005
- `rn_raw_lf_s42.accuracy`: `no metrics.json matches ['resnet-raw', 'label-fix']` (no label-fix RN run exists)

---

<!-- SOURCE-BODY-END -->
