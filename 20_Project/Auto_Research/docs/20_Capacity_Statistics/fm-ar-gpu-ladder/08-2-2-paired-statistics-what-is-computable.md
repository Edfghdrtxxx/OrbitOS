<!-- Verbatim source section; overview: [[../fm-ar-gpu-ladder]] -->
<!-- SOURCE-BODY-START -->
## 2.2 Paired statistics — what is computable

**True McNemar/paired bootstrap: NOT computable.** Exactly one `predictions.csv` exists (RN-HC-s42); pairing needs both arms' per-event predictions. No new dumps have synced since the referee report (verified: `find runs/EXP3-* -name 'predictions*'` → 1 file).

**What IS computable — exact paired Δ and worst-case McNemar bounds** (recomputed by me from confusion matrices; method: d = b−c fixed by marginals, worst case maximizes discordants b+c ≤ min(err_A+err_B, n), χ² = (|d|−1)²/(b+c)). These bounds are tighter than the referee's n·Δ² floor because they use the actual error counts:

| Comparison (same events, n=25,000) | Δ acc | worst-case McNemar χ² / p-bound | unpaired z (p) | Δ bal-acc | Δ c0-rec |
|---|---|---|---|---|---|
| XA−RN, HC s0 | −0.036pp | 0.03 / p≤0.87 | −0.19 (0.85) | −0.65pp | −1.68pp |
| XA−RN, HC s1 | +0.040pp | 0.04 / p≤0.84 | +0.22 (0.82) | +0.56pp | +1.42pp |
| XA−RN, HC s42 | −0.232pp | 1.54 / p≤0.21 | −1.29 (0.20) | −0.92pp | −2.08pp |
| **XA−RN, Raw s0** | **−1.332pp** | **18.74 / p≤1.5e-5 guaranteed** | −4.62 (3.8e-6) | −2.66pp | −4.88pp |
| **XA−RN, Raw s42** | **−2.132pp** | **47.90 / p≤4.5e-12 guaranteed** | −7.38 (1.5e-13) | −4.61pp | −8.74pp |
| HC−Raw, RN s0/s1/s42 | +6.54/+6.52/+6.66pp | χ²≥683 / p≈0 guaranteed | — | +12–14pp | +21–26pp |
| HC−Raw, XA s0/s42 | +7.84/+8.56pp | χ²≥902 / p≈0 guaranteed | — | +15–16pp | +27–28pp |

"Guaranteed" = significant under *every* possible discordant split consistent with the marginals — no predictions.csv needed for these conclusions.

**Seed statistics (triton task, n=25,000/run):**

| Arm | seeds | mean ± sd | t-95% CI on mean |
|---|---|---|---|
| RN-HC | 0,1,42 | 0.95701 ± 0.0023 | [0.9512, 0.9628] |
| XA-HC | 0,1,42 | 0.95625 ± 0.0019 | [0.9515, 0.9611] |
| RN-Raw | 0,1,42 | 0.89125 ± 0.0019 | [0.8865, 0.8960] |
| XA-Raw | 0,42 | 0.87344 ± 0.0032 | [0.8445, 0.9024] (n=2, wide) |
| XA-Raw-lf (4He) | 42 | 0.92136 single | Wilson [0.9180, 0.9246] |

Per-run Wilson 95% CIs are ±0.25–0.42pp — the HC Δs are inside per-run noise; the Raw Δs are 3–5× wider than the CI widths.

<!-- SOURCE-BODY-END -->
