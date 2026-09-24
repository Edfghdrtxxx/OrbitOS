<!-- Verbatim source section; overview: [[../fm-ar-hc-vs-raw]] -->
<!-- SOURCE-BODY-START -->
## 4. Mechanism verdict

1. **HC−Raw gap (both architectures, 5/5 seed pairs, +6.5 to +8.6pp):** caused by DBSCAN denoising of the image — specifically making the sparse track the dominant Ch0 structure instead of a sub-noise-floor perturbation. Proven image-side by the physics-free ResNet arm. Charge normalization, hole mask, and Ch1 formula are ruled out as primary causes.
2. **Classifier-side physics redundant on HC / load-bearing on Raw:** the features are computed from Ch0, so their marginal value is inverse to how much of Ch0 the backbone can exploit. On HC the backbone sees everything the features encode (redundant). On Raw the backbone is starved of global charge structure and the head leans on the only global statistic it gets — but the collapse-below-baseline signature means genuine-dependence vs OOD-artifact is unresolved until D5.
3. **XA−RN deficit on Raw (−1.3/−2.1pp):** downstream of routing (permuted_q Δ=0 on 6/6 checkpoints kills query-poisoning); consistent with the lead's H1/H2 framing — the 64-dim attended vector + 4 noise-dominated features under-serve the minority class vs the 512-dim GAP. Not a representation question per se; D1–D4 own it.

<!-- SOURCE-BODY-END -->
