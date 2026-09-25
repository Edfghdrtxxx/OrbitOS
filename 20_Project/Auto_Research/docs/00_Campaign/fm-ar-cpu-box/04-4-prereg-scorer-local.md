<!-- Verbatim source section; overview: [[../fm-ar-cpu-box]] -->
<!-- SOURCE-BODY-START -->
## Prereg scorer (local)

`scripts/analysis/exp3_prereg_score.py --battery <d5 s42> --attention <lf G7> --attention <s0 G7> --out runs/_autodl_out/prereg_score_s42.json`

- Hits: `permuted_cls`, `mean_cls` all rivals; `clipped_cls` 4/6; `centered_q` 4/6; `zero_ch1` 4/6.
- Misses: `scaled_cls` 6/6, `zero_ch0` 6/6, `map_permuted_q` 6/6.
- Falsifiers: `map_permuted_q_large_predictive` not_fired; `cls_drop_without_norm_gain` not_fired.
- Still pending: `swap_physics`, `threshold_sweep`, `selection_bias`, `rn_raw_lf_s42`, `he4_hc_pair`, `rn_mod_nimpsim`, `attn_dim_512`, `physics_norm_zscore` — need B2/copy artifacts not yet produced.

<!-- SOURCE-BODY-END -->
