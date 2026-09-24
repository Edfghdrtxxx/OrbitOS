<!-- Verbatim source section; overview: [[../fm-ar-results-audit]] -->
<!-- SOURCE-BODY-START -->
## 4. Cross-cutting flags

**F1 — zero_cls "load-bearing" claims sit at minority-class prevalence (OOD-artifact risk).** zero_cls accuracy = 0.1935 (Raw s42), 0.2075 (label-fix), vs. minority prevalence 0.20 — the model collapses to predicting ~one class, exactly the scout's OOD-bias signature. The closing doc already hedges §8 ("ambiguous … D5 decides") but §9 observation (3) still says "classifier leans on physics" and §11 observation (3) says "dependence is task-invariant on Raw" — both stronger than the evidence until `permuted_cls`/`mean_cls` (D5) lands. Also note s0-HC zero_cls = 0.7975 (−15.6pp): the "physics redundant on HC" reading holds for only 2 of 3 HC seeds.

**F2 — the label-fix battery JSON may be the known-buggy run.** §12's own caveat says the first battery run had a positional-label bug (`_assigned_classes` not re-sliced after subset cap) and a corrected re-run was in flight. The local file (`runs/EXP3-XA-Raw-100k-label-fix-seed42/20260923_154749/counterfactual_battery.json`, mtime Sep 24 13:41 vs 13:36 for the triton files) carries no script-version field, so I cannot tell which run produced it. **Every 4He number — including the headline "+9.2pp zero_q sign flip" (§11, §12) — is provisional until the lead confirms the file's provenance.** If it is the buggy run, the labels were positionally wrong and the row is void.

**F3 — single-seed / fragile-n claims presented near-headline level.** (a) The +9.2pp sign flip rests on one undertrained (ep13, still-climbing) checkpoint — the doc caveats this well, but §12 elevates it to a titled "Finding". (b) XA-Raw attention "track-focused" (§3, recording L136) is seed 42 only — no XA-Raw s0 attention metrics exist. (c) The XA-Raw deficit itself is n=2 — fine, but the "~8×/~10× seed std" framing should name its denominator.

**F4 — unbacked number clusters** (probably fine, but not auditable locally): label-fix val trajectory (0.9214@13, 0.8913@3); EXP4 sink stats (0.52 max-weight, 0.235·log60 entropy, token-50 444/512, 2.1% on-track, corr −0.02); audit-derived numbers (Jaccard 0.029, pixel corr 0.002, lag-corrs, σ≈0.028, dihedral transforms, Ch1 +35%, point-biserial ≤0.038, CV 3%/27%); seed-0 patched checkpoint 0.87584; box-side operational claims (md5-identical sync, PIDs, waiters). Recommend the lead sync the raw outputs behind these (audit script stdout/JSON, exp4 script full output, label-fix history.json) or mark them "box-log only".

**F5 — minor mismatches to fix in the docs:** "12 completed runs" → 11 (closing L7; recording L79 says 12 too); "500 correct val events" → 500 attempted / 442–483 correct (closing L29); s42-HC zero_cls delta −0.1pp → +0.1pp (closing L177); "climbs monotonically" → climbs with oscillation (recording L100); "first-5 avg 0.69–0.83" → 0.65–0.83 (closing L44); "all 10 finished runs" → 11 (recording L103/L185).

---

<!-- SOURCE-BODY-END -->
