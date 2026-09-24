<!-- Verbatim source section; overview: [[../fm-ar-referee]] -->
<!-- SOURCE-BODY-START -->
## A9. No traditional baseline on the classification task — doctrine violation
- **Hits:** the paper's fair-comparison doctrine (classification leg).
- **Why it bites:** energy regression has 5 pinned classical baselines (21/21 Wilcoxon); angle has a literature overlay; **classification has nothing** — no traditional classifier has ever touched the Garfield task (fm-ar-comparisons §1). A referee applying the paper's own standard asks "where is the non-deep baseline?"
- **Already answered?** In flight — D2 (physics-features LogReg) *is* that baseline; it must be reported with α-recall vs RN-Raw 0.8925/0.636, not just accuracy (comparisons report rank 1).
- **Cheapest check:** **CPU, free** — harvest D2 from the lead's diagnostic run already on box (`exp3_h1_diagnostics.py` implements it). Caveat for the writeup: the LogReg standardizes features while the deep model doesn't (fm-ar-feature-norm §4) — if D2 is weak on Raw, part of the gap is optimization, not information.

<!-- SOURCE-BODY-END -->
