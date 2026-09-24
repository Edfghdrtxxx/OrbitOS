<!-- Verbatim source section; overview: [[../fm-ar-d14-bign]] -->
<!-- SOURCE-BODY-START -->
## 4. Analytic answer to the verdict question (n=8000, k=5 CV)

Cannot be measured here, so this is the power analysis of what the run *will* resolve — computed exactly, not estimated:

| Quantity | n=8000 5-fold OOF | Resolves? |
|---|---|---|
| Single-probe acc CI half-width (p≈0.88) | ±0.71pp | — |
| Single-probe acc CI half-width (p≈0.79) | ±0.89pp | — |
| **D1/D3 paired probe gap MDE (95%)** | **±0.69–1.03pp** (discordant fraction q=0.10–0.22) | observed +1.2pp gap: **yes if real ≥1pp** |
| D2 vs majority MDE | ≲±0.7pp paired | yes — sub-pp departures detectable |
| D4 error-rate diff MDE | ±0.49–0.69pp (q=0.05–0.10) | observed +1.0pp: yes |
| D4 shared-error concentration | expected both=88 (sd 8.4) at n=500 rates; even both=200 → P≈9e-33 | **decisive either way** |

**Minimal detectable difference: ≈1.0pp for the paired probe gaps (worst-case discordant fraction), ≈0.7pp typical.** So at n=8000 the design separates H1a from H1b *if the true D1/D3 gap is ≥~1pp* — the n=500 point estimate (+1.2pp) sits exactly at that edge. If the true gap is ~0.5pp it stays unresolved, but then the H1a/H1b distinction is operationally moot anyway (a sub-pp feature-quality gap cannot explain a −1.7pp model gap). D4's concentration question resolves decisively at any plausible effect size — the n=500 enrichment (28 vs 5.5 expected) scales to P<1e-100 if it holds.

**Memory:** the d14-power model holds — n-scaling ≈2.6KB/event features + ~30KB/event image reads ≈ 270MB at n=8000 over a ~1.2–1.5GB fixed floor; the two-phase split keeps torch and sklearn peaks disjoint. Fits 2GB. n=12500 (stride 2, strict superset of the n=500 events) adds only ~140MB more and is also feasible.

<!-- SOURCE-BODY-END -->
