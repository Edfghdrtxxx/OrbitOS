<!-- Verbatim source section; overview: [[../fm-ar-feature-norm]] -->
<!-- SOURCE-BODY-START -->
## 6. Verdict: is scale a plausible contributor to the XA-Raw deficit?

**Yes — as a diagnostic hypothesis, with two distinct mechanisms, both now quantified:**

1. **Capacity theft (in-distribution).** ~84% of hidden units have fixed ReLU signs set by the physics DC offset (§3b). The 128-unit head effectively operates at ~20 free units for image-derived signal. On HC this is tolerable (physics is informative, redundancy is cheap); on Raw the same fixed cost is paid for features that carry ~no class information (|r| ≤ 0.038) — the head pays capacity for noise. This is a *refinement* of H1b: not just "physics crowds the head" but "unnormalized physics fixes the ReLU tiling, and on Raw the tiling is bought with noise."
2. **Variance domination.** Event-varying physics contributes ~2.0 rms/unit of pre-activation variance vs ~0.3–0.6 from the 64-d attended vector — the image pathway is a minority contributor to its own classifier. On Raw, that dominant variance is noise, so the head's largest input signal is uninformative — consistent with XA-Raw < RN-Raw while XA-HC > RN-HC.

What scale does **not** explain by itself: why the deficit is Raw-specific in *accuracy* (the DC cost is identical on HC — the difference is feature informativeness, i.e. scale × SNR interaction), and the s0 anomaly (zero_both > zero_cls). Scale is a multiplier on the information content, not an independent cause. It is best framed as: **the unnormalized input makes the head's dependence on physics magnitude-based rather than content-based**, which is exactly what D5 (`permuted_cls`/`mean_cls`) is designed to detect.

For the OOD leak the verdict is stronger: scale is the mechanism. An unbounded linear side-channel plus out-of-range inputs is sufficient to produce the confident carbon→A tail; the prior scout's clipped-physics prediction (E2) directly tests it.

<!-- SOURCE-BODY-END -->
