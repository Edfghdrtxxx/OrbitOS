<!-- Verbatim source section; overview: [[../fm-ar-ood-leakage]] -->
<!-- SOURCE-BODY-START -->
## 2. Leakage per unseen isotope, per arm

Directional routing rates (fraction of channel events predicted into each class):

| ch | isotope | n | XA→A | XA→B | XA→other | RN→A | RN→B | RN→other | Δ→A (XA−RN) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| E | ⁴He | 100k | 0.0189 | 0.0379 | 0.9433 | 0.0215 | 0.0358 | 0.9427 | −0.003 |
| F | ¹³C | 100k | **0.0828** | 0.0267 | 0.8905 | 0.0148 | 0.0229 | 0.9623 | **+0.068** |
| G | ¹⁴C | 100k | **0.0847** | 0.0246 | 0.8908 | 0.0139 | 0.0216 | 0.9645 | **+0.071** |
| H | ¹²C | 100k | **0.0803** | 0.0270 | 0.8927 | 0.0158 | 0.0244 | 0.9598 | **+0.065** |

- The arm gap is **specific to far-OOD carbons → class A** (+6.5–7.1pp; McNemar p_holm significant per `metrics.json:arm_comparison.leak_mcnemar_by_channel`). ⁴He (interpolation OOD) shows no arm gap (−0.3pp), and leak→B is arm-symmetric (+0.3–0.4pp). Seen-channel routing is identical within 0.3pp.
- The three carbons are statistically indistinguishable per arm (XA 8.03–8.47%, RN 1.39–1.58%) — consistent with the difficulty report's ΔA/A-below-resolution observation.
- No clustering in `global_idx`: decile leak rates are flat (XA F: 0.079–0.087 across index deciles; KS leaked-vs-correct p ≥ 0.15 all channels/arms). If file order encodes energy, the leak is not an energy-edge artifact.

<!-- SOURCE-BODY-END -->
