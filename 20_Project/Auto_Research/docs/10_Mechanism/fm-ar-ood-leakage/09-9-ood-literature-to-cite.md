<!-- Verbatim source section; overview: [[../fm-ar-ood-leakage]] -->
<!-- SOURCE-BODY-START -->
## 9. OOD literature to cite

- **Hendrycks & Gimpel, ICLR 2017** — max-softmax-probability baseline for OOD detection; our Table 5 is exactly this baseline failing (AUROC ≈ 0.5 / inverted).
- **Nguyen, Yosinski & Clune, CVPR 2015** — deep networks produce high-confidence predictions on unrecognizable/OOD inputs; matches the confident-leak signature.
- **Liu et al., NeurIPS 2020** — energy-based OOD scoring; energy ≈ logsumexp of logits would inherit the same inflated-logit failure here (worth one sentence, not a fix).
- **Sun, Guo & Li, ICML 2021 (ReAct)** — OOD inputs trigger abnormally large penultimate activations; rectifying activations restores detection. Directly matches our max|h| AUROC ≈ 0.90 finding and motivates the activation-space rejection stage.
- **Djurisic et al., ICLR 2023 (ASH)** — activation-shaping OOD detection; same family, alternative citation.
- **Lee et al., NeurIPS 2018 (Mahalanobis)** — feature-space distance OOD detection; relevant if the lead wants a centroid-distance variant on the 128-d cache (carbons sit near C+D centroid, so Mahalanobis alone likely fails — the leak is a directional tail, not a cluster shift; say this if cited).
- **Hendrycks et al., ICLR 2019 (OE)** / **Yang et al., ICLR 2024 (OpenOOD survey)** — optional framing refs for "OOD detection for fused/multi-modal features" context.

<!-- SOURCE-BODY-END -->
