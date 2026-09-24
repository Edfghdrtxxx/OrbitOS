<!-- Verbatim source section; overview: [[../fm-ar-mechanism]] -->
<!-- SOURCE-BODY-START -->
## 6. Minimum further work and cost

Costs use observed training logs summarized in `fm-ar-gpu-ladder/report.md`; billed estimates include approximately 1.3× headroom, with Raw wall-time uncertainty.

| Gap | Minimum closure | Cost | What it closes |
|---|---|---:|---|
| Exact paired statistics | Generate `predictions.csv` for the 10 missing triton/label-fix checkpoints on box 176; sync only CSVs | 0 GPU h; roughly 2–4 CPU h on box | Exact paired bootstrap, McNemar, D4 error overlap. |
| OOD versus information interpretation | Run D5 (`permuted_cls`, `mean_cls`, class histogram), plus `scaled_cls`/`clipped_cls` | 0 GPU h; roughly 1–2 CPU h | Decides whether “load-bearing” means event-specific information or covariate shift. |
| H1a versus H1b localization | Run D1–D4 frozen probes | 0 GPU h; already queued | Separates representation capacity from head/crowding. |
| True 4He Raw comparator | RN-Raw-lf seed 42 | ~4.8 train h / ~6.2 billed | Decides sign of the paper’s central 4He Raw comparison. |
| Complete 4He 2×2 at seed 42 | RN-Raw-lf plus RN-HC-lf and XA-HC-lf | ~11.2 train h / ~14.6 billed | Adds the architecture×representation interaction term. |
| Seed-robust 4He headline | Add Raw and HC seeds 0 and 1 after the sign gate | ~33.4 train h / ~43 billed for six runs | Three-seed 4He means and spread. |
| Triton grid hole | XA-Raw seed 1 | ~5.5 train h / ~7.2 billed | Makes the diagnostic Raw result 3/3 seeds; optional if campaign pivots to 4He. |
| Capacity control | XA-Raw `attn_dim=512`, seed 42 | ~5.5 train h | Tests whether widening alone closes the Raw gap; gated on D1–D5. |
| Scale control | XA-Raw `physics_norm=zscore`, seed 42 | ~5 train h | Tests the raw-feature side-channel prediction; gated on `scaled_cls`. |
| Correct NimpSim 3He/4He decomposition | RN-modified 160k run (plus matched XA/RN controls if chosen) | ~12–18 train h, unverified until data staged | Repairs the mislabeled §5.5 claim. |

Do not quote any of the triton deltas as 4He evidence, and do not spend on capacity/normalization cures before the CPU diagnostics return.

<!-- SOURCE-BODY-END -->
