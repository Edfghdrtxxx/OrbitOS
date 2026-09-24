<!-- Verbatim source section; overview: [[../fm-ar-related-work]] -->
<!-- SOURCE-BODY-START -->
## 0. Headline

1. **The bib has a fabrication problem, not just gaps.** Four entries are fabricated or point at the wrong paper entirely (`He2020ResNetSmall`, `Li2023CrossAttention`, `Li2021DomainAdapt`, `Yao2022Calibration`), one more is unverifiable (`Koch2021`), and **five real papers carry wrong DOIs that resolve to unrelated articles** — including `Kuchera2019`, whose DOI `10.1016/j.nima.2019.05.099` resolves to a RADFET dosimetry paper (correct: `...05.097`). A referee who clicks any of these will find the wrong paper. This is the single most urgent fix.
2. **The core novelty claim survives but must be narrowed.** "Neither conventional cuts nor existing NN classifiers exploit the physics of energy loss encoded in track geometry" (L53) is **overstated**: Kuchera et al. 2019 (already cited) classify tracks using physics-derived moment features, and Dalitz/Ayyad et al. 2018 (uncited) do trajectory recognition via hierarchical clustering on AT-TPC data. The defensible claim is *first fusion of physics descriptors with CNN features via attention for isotope ID in an AT-TPC, evaluated against an architecture-matched CNN* — which the paper already half-says at L79.
3. **The failure modes are all precedented in the literature**, which is good news: each maps onto a named, citable phenomenon (attention sinks, ignored cross-modal interactions, shortcut learning, unnormalized side-channel leakage). The paper can reframe its negative results as a *mechanism diagnosis* contribution rather than a caveat.
4. **Methods citations are missing for every classical tool used**: RANSAC, Hough transform, LISE++, Hubert range tables, AdamW (miscited as Adam), label smoothing (miscited to a segmentation survey), and the SπRIT TPC DOI is absent.

---

<!-- SOURCE-BODY-END -->
