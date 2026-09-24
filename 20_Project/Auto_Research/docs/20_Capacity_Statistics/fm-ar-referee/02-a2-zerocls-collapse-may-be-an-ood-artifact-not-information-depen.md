<!-- Verbatim source section; overview: [[../fm-ar-referee]] -->
<!-- SOURCE-BODY-START -->
## A2. `zero_cls` collapse may be an OOD artifact, not information dependence
- **Hits:** C6 "classifier-side physics load-bearing on Raw" and every "physics is load-bearing" sentence.
- **Why it bites:** zero_cls accuracy lands at 0.1935/0.2075 ≈ minority prevalence 0.20 — the signature of an MLP pushed off-distribution into predicting one class, not of losing informative features (fm-ar-capacity-critique §2; fm-ar-results-audit F1). If `permuted_cls` recovers accuracy, "load-bearing" is dead: the features are a static bias, and the collapse was a zeroing artifact. The closing doc hedges §8 but §9/§11 still say "leans on physics"/"task-invariant" — stronger than the evidence.
- **Already answered?** **No.** All 6 synced battery JSONs predate D5 — none contain `permuted_cls`/`mean_cls`/`pred_histograms` (verified: files are 458–482 bytes, 5 conditions only). `d5_chain.sh` is queued on box (closing doc §15).
- **Cheapest check:** **CPU, ~1–2h on box 176** — `permuted_cls` + `mean_cls` + predicted-class histogram on all 6 XA checkpoints (conditions already added to `exp3_counterfactual_battery.py`). `mean_cls` is the cleanest discriminator (fm-ar-feature-norm §7 D6a): preserves the Izz≈170 DC, destroys event content. `mean_cls ≈ original` → static-bias artifact; `mean_cls ≈ zero_cls` → genuine dependence.

<!-- SOURCE-BODY-END -->
