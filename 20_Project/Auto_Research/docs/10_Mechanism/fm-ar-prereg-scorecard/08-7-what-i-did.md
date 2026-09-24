<!-- Verbatim source section; overview: [[../fm-ar-prereg-scorecard]] -->
<!-- SOURCE-BODY-START -->
## 7. What I did

- Read `scripts/analysis/exp3_prereg_score.py` (521 lines) and `20_doc/prereg/exp3_mechanism_prereg_2026-09-24.yaml` (466 lines) in full; read `exp3_selection_bias.py`.
- Inventoried all scorer inputs in the live checkout: 9 battery JSONs, 3 attention JSONs (no `query_invariance` block), 12 `history.json`, 12 `metrics.json`; confirmed no sweep/paired-predictions/selection JSONs exist.
- Built `selection_bias_2run.json` (s42 XA-Raw + ResNet-Raw pair per the prereg's `xa_match`/`rn_match`) and `selection_bias_12run.json` with the repo's own script.
- Ran the formal scorer twice (all batteries; locked battery only) → `score_all_batteries.json`, `score_locked_s42.json`.
- Wrote `offlock_bandread.py` (worktree) reusing `score()` verbatim with `expect` stripped and `battery_match` retargeted per yaml:59; produced 4 band-read JSONs.
- Verified the A5 figures (0.21–1.74 pp, mean 0.71 pp — exact) and the −0.03064 final gap against the hand-read −0.0306.
- Read `main.tex` L170/L207/L248/L298/L313 verbatim.
- Compared every scorer verdict against claims-refresh §3a–§3d (§3 above).

<!-- SOURCE-BODY-END -->
