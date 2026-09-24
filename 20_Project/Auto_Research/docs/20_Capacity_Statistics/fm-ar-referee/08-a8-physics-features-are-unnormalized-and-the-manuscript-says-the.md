<!-- Verbatim source section; overview: [[../fm-ar-referee]] -->
<!-- SOURCE-BODY-START -->
## A8. Physics features are unnormalized — and the manuscript says they are standardized
- **Hits:** the mechanism story (all of it) + manuscript accuracy.
- **Why it bites:** features enter raw (`dataset.py:472-475`, Req-7.2); `Izz` ≈ 170 dominates the 4-vector's L2 norm (>99.9%), contributes a ~386-norm DC to the query and fixes 108/128 hidden ReLU signs (fm-ar-feature-norm §3). `main.tex:170,207` claims the features "are standardized using training-set statistics" — false for both the reproduction and the published legacy runs (fm-ar-methods-audit M1). A referee who checks the code finds the paper describes a normalization that would have prevented the mechanism under study. Worse: if the deficit/leak is a *scale artifact*, "physics-informed fails" becomes "unnormalized-input fails" — a bug, not a finding.
- **Already answered?** Mechanism quantified (feature-norm report); manuscript mismatch documented (methods-audit M1 — captain's file, flagged not touched). No normalized-input control exists.
- **Cheapest check:** **CPU, ~30 min on box 176** — `scaled_cls` battery condition (z-score classifier physics with train stats): `scaled_cls ≈ original` → content-driven (scale harmless); `scaled_cls ≪ original` → magnitude-driven → the deficit is a normalization bug. D6a+D6b together form a content×magnitude 2×2 that fully decomposes the zero_cls ambiguity (fm-ar-feature-norm §7). **GPU** only for the clean retrain with normalized physics (~5h, gated on the battery readout).

<!-- SOURCE-BODY-END -->
