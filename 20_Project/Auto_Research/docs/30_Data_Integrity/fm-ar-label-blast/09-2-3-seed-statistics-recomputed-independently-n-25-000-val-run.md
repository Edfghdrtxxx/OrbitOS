<!-- Verbatim source section; overview: [[../fm-ar-label-blast]] -->
<!-- SOURCE-BODY-START -->
## 2.3 Seed statistics (recomputed independently; n=25,000 val/run)

| Arm | seeds | mean ± sd | t-95% CI | class-0 (triton) recall |
|---|---|---|---|---|
| RN-HC | 0,1,42 | 0.95701 ± 0.0023 | [0.9512, 0.9628] | 0.847/0.839/0.848 |
| XA-HC | 0,1,42 | 0.95625 ± 0.0019 | [0.9515, 0.9611] | 0.830/0.854/0.828 |
| RN-Raw | 0,1,42 | 0.89125 ± 0.0019 | [0.8865, 0.8960] | 0.609/0.578/0.636 |
| XA-Raw | 0,42 | 0.87344 ± 0.0032 | [0.8445, 0.9024] (n=2) | 0.560/0.548 |
| XA-Raw-lf (4He) | 42 | 0.92136 | single | 0.725 (α) |

Paired comparisons (same seed; per-event preds exist for only ONE run → true McNemar impossible; unpaired z + McNemar bound χ²≥nΔ²):

| Comparison | Δ (XA−RN) | unpaired z (p) | McNemar χ²≥ (p≤) | Δ bal-acc | Δ c0-rec |
|---|---|---|---|---|---|
| HC s0/s1/s42 | −0.04/+0.04/−0.23pp | −0.19/+0.22/−1.29 | ≤0.13 (n.s.) | −0.66/+0.56/−0.93pp | −1.7/+1.4/−2.1pp |
| **Raw s0** | **−1.33pp** | −4.62 (3.8e-6) | ≥4.44 (≤0.035) | −2.67pp | −4.9pp |
| **Raw s42** | **−2.13pp** | −7.39 (1.5e-13) | ≥11.36 (≤7.5e-4) | −4.62pp | −8.7pp |

Representation effect (HC−Raw, same arch+seed): +6.5 to +8.6pp, 5/5 same sign — seed-robust.

<!-- SOURCE-BODY-END -->
