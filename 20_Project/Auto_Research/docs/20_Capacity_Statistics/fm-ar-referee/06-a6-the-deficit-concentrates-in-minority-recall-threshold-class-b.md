<!-- Verbatim source section; overview: [[../fm-ar-referee]] -->
<!-- SOURCE-BODY-START -->
## A6. The deficit concentrates in minority recall — threshold/class-balance confound
- **Hits:** C2/C3 — the headline "XA loses 4.9–8.7pp minority recall."
- **Why it bites:** no class weights were used (`class_weights: None` in all configs, verified) and the decision threshold is the default argmax. On an 80/20 imbalance, a small logit shift moves minority recall a lot. A referee asks: "is the deficit a capability gap or a calibration artifact that a threshold sweep or class weighting removes?" Balanced accuracy (recomputed, §B.4): XA-Raw 0.750/0.757 vs RN-Raw 0.775–0.796 — the gap survives in balanced terms (−2.6 to −4.6pp), so this attack *weakens* but does not die without a per-event threshold analysis.
- **Already answered?** Partially — this report's balanced-accuracy recomputation (§B.4) shows the gap persists; no prior report computed it.
- **Cheapest check:** **CPU, minutes on box 176** — once `predictions.csv` dumps land (predump_chain), sweep the class-0 decision threshold on paired XA-Raw/RN-Raw predictions: if XA matches RN at some threshold, the deficit is calibration; if no threshold closes it, it is capability. Zero new inference needed — works on the dumps already queued.

<!-- SOURCE-BODY-END -->
