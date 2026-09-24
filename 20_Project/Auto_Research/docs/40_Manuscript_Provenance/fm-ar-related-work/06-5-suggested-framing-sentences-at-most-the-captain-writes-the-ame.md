<!-- Verbatim source section; overview: [[../fm-ar-related-work]] -->
<!-- SOURCE-BODY-START -->
## 5. Suggested framing sentences (at most — the captain writes the amendment)

- **L53/L67 (novelty, narrowed):** "…yet existing neural-network classifiers for AT-TPC data do not fuse physics-derived track descriptors with learned image features; we introduce such a fusion and evaluate it against an architecture-matched CNN."
- **L76 (add the missing lineage):** "Classical track finding in AT-TPCs spans RANSAC and Hough line fits [Fischler & Bolles; Duda & Hart], hierarchical clustering [Dalitz et al.], and Gaussian-mixture models [Arokiaraj et al.]; we benchmark against the first two families on identical inputs."
- **L79 (honest mechanism):** "…fused with the convolutional features through a cross-attention mechanism [Vaswani et al.; Perez et al.]; counterfactual tests show the attention branch functions as single-query pooling at this scale, so we report the fusion as physics-feature augmentation rather than query-driven routing."
- **L79 (fix the contradiction):** replace "consistently improves both classification and continuous regression" with "improves continuous regression and denoised classification, while on raw images the physics side channel can degrade the matched baseline — a scale pathology we diagnose explicitly."
- **L313/L319 (attention caveat):** "Attention weights are not by themselves evidence of mechanism [Jain & Wallace; Serrano & Smith]; we therefore treat the map as descriptive and verify routing by counterfactual permutation of the physics query."
- **L387 (portability):** "…should carry over to other AT-TPC configurations, though cross-experiment transfer of TPC representations is itself an open problem [Wheeler et al. 2026]."

---

<!-- SOURCE-BODY-END -->
