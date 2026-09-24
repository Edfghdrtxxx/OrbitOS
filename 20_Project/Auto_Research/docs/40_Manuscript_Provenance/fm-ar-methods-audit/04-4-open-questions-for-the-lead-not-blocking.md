<!-- Verbatim source section; overview: [[../fm-ar-methods-audit]] -->
<!-- SOURCE-BODY-START -->
## 4. Open questions for the lead (not blocking)

- **V6 best-epoch column** (Table 4: 21/20/8/17) and **p/d/t per-class metrics** (App B) are legacy-run artifacts not locally re-derivable; consistent with specs but unverified against raw history files.
- **TRK1-4 run artifacts** (multiplicity + angle metrics.json, σ_θ per energy, Table 7 cells) live on box 176; verified only via `20_doc/audits/TRK_reeval_2026-07-12_postaudit_regeneration.md` and `20_doc/workflows/baseline_angle_regression.md` quotes.
- **σ_θ values** (1.57/0.77/0.45 vs 1.70/0.90/0.59) and the **R²=0.878/0.848** internal-study numbers: provenance docs exist; raw artifacts on box.
- Whether the EXP1 "3He/4He" naming was ever a true binary ³He-vs-⁴He task in legacy V3 (the label map says no for all V4+ runs) — worth one grep of the legacy `V3_3He_vs_4He` script on the Windows box before the captain rewrites §5.5.

<!-- SOURCE-BODY-END -->
