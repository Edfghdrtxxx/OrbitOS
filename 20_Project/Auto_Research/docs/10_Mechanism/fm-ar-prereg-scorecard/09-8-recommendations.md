<!-- Verbatim source section; overview: [[../fm-ar-prereg-scorecard]] -->
<!-- SOURCE-BODY-START -->
## 8. Recommendations

1. **Ask the lead for the B2 copy** (s42 XA-Raw triton `best_model.pth` + 2000-event val subset + `physics_feature_stats.json`, ~200 MB): converts all 8 `conditions:` rows + falsifier `cls_drop_without_norm_gain` from pending to formal. Runs here in ~15–30 min CPU.
2. **Do not queue R3b** (`physics_norm_zscore`): its preregistered gate — "run only if scaled_cls improves the existing checkpoint" — is falsified on all three measured checkpoints.
3. **Check A (map-level permuted_q) is now the only path to `map_permuted_q_large_predictive` firing** — the cls-level acc_delta clause is already dead. If Check A runs, it needs a ≥2 pp accuracy loss to matter; the attention-map clauses alone cannot fire it.
4. **Mechanism wording must carry the seed qualifier**: "HC head ignores physics magnitude" is true on s42, false on s0 (−15.6 pp scaled_cls). The defensible statement is: on Raw the head uses physics as a magnitude-dependent static bias (both seeds, both tasks); on HC the physics dependence is weak and seed-variable.
5. **Ship the two scorer CLI flags** (§6) if the scorecard becomes a recurring artifact — small, torch-free, and it removes the hand-vs-scorer distinction that motivated this task.

<!-- SOURCE-BODY-END -->
