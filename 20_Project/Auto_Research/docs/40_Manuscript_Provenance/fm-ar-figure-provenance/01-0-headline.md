<!-- Verbatim source section; overview: [[../fm-ar-figure-provenance]] -->
<!-- SOURCE-BODY-START -->
## 0. Headline

**No manuscript figure is built from an EXP3, EXP2, EXP1, or V6 run.** The triton-vs-rest label bug (11/12 EXP3 runs), the EXP2 carbon-contaminated negative pool, and the unsettled V6 Table-4 label question therefore touch **zero** of the 12 referenced figures. Every figure traces to one of four clean-or-isolated lineages: (a) TRK5/TRK6 + classical-baseline energy regression (true test split, verified pixel-identical regeneration locally), (b) EXP8 unseen-channel (file_class_list bypass, sha256-pinned provenance, true test split), (c) legacy V3/V4 NimpSim runs (per-file class labels, immune to the Garfield label-map bug), (d) vendored `paper_fig_data/*.npz` derived from Garfield files whose species identity comes from filenames, not the `labels` array.

The residual risk is **caption/text framing, not figure data**:

1. **`attention_overlay.png`** — the figure is a real event with real attention weights, but the caption and §5.6 text assert a physics-guided Bragg-peak reading that the campaign's counterfactual evidence refutes (image-driven map; `permuted_q` Δ=0 on 6/6 EXP3 checkpoints; HC collapses to a fixed sink token). Highest referee risk.
2. **`exp8_delta_false_target_forest.png`** — caption claims a "null channel" row that does not exist in the figure (script excludes A/B/null by construction; verified visually). A referee can check this in seconds.
3. **`angular_resolution_comparison.png`** — CNN σ_θ points come from TRK3-v2/TRK4-v2 CSVs that are **not on this Mac** (AutoDL only); unverifiable here. Caption already discloses the ±15–20% placement uncertainty.
4. **`generalization_gap.pdf`** — legacy V3 run histories, Windows-only; sound as hedged, unverifiable here.
5. Three figures (`five_class_data_samples`, `hc_before_after`, `physics_feature_distributions`) depend on Windows-only HDF5 or vendored npz — sound lineage, not locally re-derivable end-to-end.

**Latent hazard:** `figures/_legacy/` still holds `v6_ablation_bars.pdf`, `v6_confusion_matrix_grid.pdf`, `v6_training_curves.pdf` — generated from the four V6 runs (`V6_*_2026020{2,4}_*`, see `regenerate_paper_fig_data.py:54-60`). They are **not referenced** by either .tex file. If reinstated they inherit the unsettled V6 label question (fm-ar-label-blast §1.4) — do not re-add before the Windows h5py check.

---

<!-- SOURCE-BODY-END -->
