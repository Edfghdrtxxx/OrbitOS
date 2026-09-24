<!-- Verbatim source section; overview: [[../fm-ar-referee]] -->
<!-- SOURCE-BODY-START -->
## B.4 Paired comparisons (same-seed, n=25,000)

Per-event predictions exist for only **one** run (RN-HC-s42) → true McNemar/paired-bootstrap **not computable**. Substitutes: unpaired two-proportion z (conservative — same val events → positive covariance → paired test strictly more powerful) and the McNemar lower bound χ² ≥ n·Δ² (needs only the two accuracies; a guaranteed significance floor).

| Comparison | Δ acc (XA−RN) | unpaired z (p) | McNemar χ² ≥ nΔ² (p ≤) | Δ bal-acc | Δ class-0 rec |
|---|---|---|---|---|---|
| HC s0 | −0.04pp | −0.19 (0.85) | ≥0.004 (≤0.95) | −0.66pp | −1.7pp |
| HC s1 | +0.04pp | +0.22 (0.82) | ≥0.004 (≤0.95) | +0.56pp | +1.4pp |
| HC s42 | −0.23pp | −1.29 (0.20) | ≥0.13 (≤0.71) | −0.93pp | −2.1pp |
| **Raw s0** | **−1.33pp** | **−4.62 (3.8e-6)** | **≥4.44 (≤0.035)** | **−2.67pp** | **−4.9pp** |
| **Raw s42** | **−2.13pp** | **−7.38 (1.5e-13)** | **≥11.36 (≤7.5e-4)** | **−4.62pp** | **−8.7pp** |

New this report — **balanced accuracy** (from confusion matrices): the Raw deficit survives balancing (−2.7/−4.6pp), so it is not purely a threshold artifact (attack A6 weakened, not killed).

**Representation effect (HC − Raw), same arch+seed:** RN +6.54/+6.52/+6.66pp; XA +7.84/+8.56pp — 5/5 same sign, ~30× seed sd. Seed-robust.

<!-- SOURCE-BODY-END -->
