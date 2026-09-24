<!-- Verbatim source section; overview: [[../fm-ar-hc-vs-raw]] -->
<!-- SOURCE-BODY-START -->
## 2. What the input audit measured (`20_doc/audits/2026-09-23_raw-hc-input-audit.json`, 20k events/file × 5 files, paired)

| Quantity | Raw | HC | Read |
|---|---|---|---|
| Ch0 occupancy (pads>0 / 3,840) | 1,956 ± 31 (~51%) | 113 ± 23 (~3%) | half-normal noise floor vs sparse track |
| Ch0 sum | ~43.6–44.0 | ~3.5–3.9 | 92% of Raw Ch0 "charge" is noise |
| Ch0 class separation (α vs non-α occupancy) | 1,955.98 vs 1,955.47 | 114.3 vs 112.4 | Raw occupancy carries ~no class signal |
| Paired Ch0 pixel corr / occupancy Jaccard | — | r≈0.0016 / J≈0.029 | ≈ random-overlap prediction for 113 pads inside 1,956 — expected, not a bug |
| Event identity | physics_features lag-0 corr (total_mass r=0.69, 0 at lags ±1–5) | — | Raw[i] and HC[i] are the same physical event |

Follow-up diagnostics (recorded in `20_doc/Experiment Recordings/2026-09-23_exp3-xa-raw-cell.md`, "Raw/HC disjointness root cause"): **the track is genuinely absent from Raw Ch0** — mean Raw Ch0 at HC pads = unconditional mean (0.0115 vs 0.0114); all 8 dihedral transforms of the HC mask leave it there. **Raw Ch1 retains the track**: +35% elevation at HC pads (0.0255 vs 0.0189), same V geometry. Noise σ measured 0.028 ≈ paper's stated ENC noise. Verdict on disk: intended representation, genuine noise-robustness test.

<!-- SOURCE-BODY-END -->
