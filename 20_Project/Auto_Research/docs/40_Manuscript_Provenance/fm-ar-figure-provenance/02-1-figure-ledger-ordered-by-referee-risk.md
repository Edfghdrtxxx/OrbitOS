<!-- Verbatim source section; overview: [[../fm-ar-figure-provenance]] -->
<!-- SOURCE-BODY-START -->
## 1. Figure ledger, ordered by referee risk

Status key: **sound** (data/labels/split clean) · **tainted** (named finding) · **unverifiable-here** (named missing artifact + location). "Regen" = cost to regenerate the figure file itself.

### RISK 1 — `figures/attention_overlay.png` (main.tex L318, `fig:attention-maps`)

| Field | Value |
|---|---|
| Script | `scripts/plotting/plot_PAPER_attention_triptych.py` (writes `outputs/figures/PAPER/attention_triptych.png` → copied to `figures/attention_overlay.png`) |
| Data | Legacy V3 run `D:/.../AFTPC_V3_MultiAgentVersion/outputs/V4_CrossAttention_13CVs14C_20251225_144853_modular` (`attention_weights.npz` + `predictions.json`) + NimpSim `HDF5_Form/sim_12C300MeV_1{3,4}C_elastic_100k.h5`; val event 15807, hand-selected; split-alignment verified in-script against `predictions.json` (script L82-148; main.tex L315 comment) |
| Labels/split | NimpSim per-file classes → **clean** regardless of label-map bug (label-blast §1.2). 80/20 val-only (test-split R1) — irrelevant to a single-event display |
| Verdict | **Sound as an image; caption/text framing is the problem.** The pixels are a real ¹⁴C event with real attention weights. But caption L319 ("attention concentrates on the high-z end of the track, where the Bragg peak forms") + text L313 ("physically consistent with isotope discrimination") assert a physics-guided reading that fm-ar-attn-sink refutes on EXP3 checkpoints: the map is key(image)-driven (`permuted_q` Δ=0 on 6/6), HC collapses to a fixed sink (87% argmax on token 50, f_Bragg ≤0.02, 3/3 seeds), and Raw's f_Bragg≈0.47 is single-seed. **Caveat:** the counterfactual battery was never run on *this* V4-CC checkpoint — the figure's claim is unverified for this specific model, and contradicted on the only models where it was tested. Also single-event, single-seed, single-representation. |
| Regen | **Not local.** Needs Windows legacy run dir + HDF5 (script hard-codes `D:/...` paths, L76-79). |
| What would change | Nothing about the pixels; the fix is textual (captain's amendment). If the captain wants a *verified* attention figure, the honest replacement is an EXP3 XA-Raw-s42 map labeled as image-driven attention pooling — needs box-176 (checkpoint + HDF5 live there). |

### RISK 2 — `figures/exp8_delta_false_target_forest.png` (main.tex L358, `fig:exp8-forest`)

| Field | Value |
|---|---|
| Script | `scripts/plotting/plot_EXP8_delta_forest.py` (+ `exp8_artifacts.py` provenance/validation helpers) |
| Data | `runs/EXP8-{ResNet,XA}-Ideal-UnseenChannel/auditfix_d570d34_01/eval_exp8/{metrics.json,predictions.csv}` — both present locally; `figures/exp8_delta_false_target_forest.png.provenance.json` pins every input by sha256 (git `d570d34`, generated on AutoDL 2026-07-12) |
| Labels/split | `file_class_list [0,1,2,2,2]` bypasses raw labels → **clean** (label-blast §1.2). True 70/15/15 test split, seen-test n=75,000 evaluated (test-split §1) |
| Verdict | **Sound data; caption mismatch.** Caption L359: "Rows span seen-clutter (C, D), **the empty-target null channel**, interpolation (E), and the three far-out-of-distribution channels (F, G, H)". The figure has **no null-channel row** — script L66-67: `SINGLE_CHANNELS = ["C","D","E","F","G","H"]`, "A, B, null are excluded by construction". Verified visually: rows are C, D, E, F, G, H + pooled F+G+H diamond (+0.071). Minor second nit: the figure carries an embedded title ("Per-channel target-leakage difference (forest plot)") — repo convention is caption-only titles. |
| Regen | Script + all inputs local, **but the run-integrity validator pins AutoDL absolute paths**: `--xa-run-dir/--resnet-run-dir` fails with `Training run-directory mismatch in run_complete.json` (manifest records `/root/autodl-tmp/...`). Regenerable on AutoDL; locally would need a validator bypass. The manuscript copy is **pixel-identical** to `outputs/figures/EXP8/exp8_delta_false_target_forest.png` (max\|d\|=0). |
| What would change | Caption fix only (drop "the empty-target null channel," or add the row — script change, cheap on AutoDL). |

### RISK 3 — `figures/angular_resolution_comparison.png` (main.tex L433, `fig:angular-resolution`)

| Field | Value |
|---|---|
| Script | `scripts/plotting/plot_TRK_angular_resolution.py` |
| Data | `runs/TRK3-v2-ResNet-AngleReg/seed42/predictions_regression.csv` + `runs/TRK4-v2-XA-AngleReg/seed42/predictions_regression.csv` — **absent locally** (`find runs -name 'TRK3*'` → nothing; live on AutoDL). Plus hardcoded digitized MATEROOT Fig. 8 RANSAC curve + laser point (script L70-78) and a hardcoded energy→range map (L83-84) |
| Labels/split | TRK regression — unaffected by isotope label bug; TRK runs use true test splits |
| Verdict | **Unverifiable here** — missing artifact: the two `predictions_regression.csv` files, on AutoDL (`/root/autodl-tmp/MATE-Automation-V4/runs/`). The caption already discloses both weaknesses a referee would probe: different simulation campaigns and ±15–20% energy→range placement uncertainty. Consistent with ledger item 13 (CNN σ values are box-side artifacts). |
| Regen | Needs the two CSVs synced from AutoDL; also the script requires Python ≥3.10 (`float \| None` at L123 fails on the local default 3.9 — cosmetic, python3.12 exists on this Mac). |
| What would change | fm-ar-angle-baseline (in flight) adds a same-sample RANSAC/Hough angle baseline pinned to the TRK3-v2 split — if it lands, this figure's literature-overlay panel could be replaced or supplemented with a same-sample curve. |

### RISK 4 — `figures/generalization_gap.pdf` (main.tex L376, `fig:generalization-gap`)

| Field | Value |
|---|---|
| Script | `scripts/plotting/plot_PAPER_generalization_gap.py` |
| Data | Legacy V3 `training_history.json` ×2: `Baseline_13C_vs_14C_20260108_123555_modular` (20k train) vs `V4_CrossAttention_13CVs14C_20251225_144853_modular` (160k train) — script defaults L60-62; confirmed by main.tex L373 provenance comment |
| Labels/split | NimpSim per-file classes → clean. Val curves are the selection signal (80/20), but the figure shows the train−val *gap*, which is the intended diagnostic |
| Verdict | **Sound as hedged; unverifiable here.** Caption explicitly discloses "20k versus 160k events … overfitting-behavior diagnostic rather than a controlled architecture comparison" — matches ledger item 22 (stands). Missing artifact: the two legacy `training_history.json` files (Windows `D:/.../outputs/`). |
| Regen | Needs Windows legacy runs. |
| What would change | Nothing unless the §5.5 decomposition text it supports is amended (ledger item 1 — the ³He/⁴He task mislabel is in the *text*, not this figure). |

### RISK 5 — `figures/hc_before_after.pdf` (main.tex L302, `fig:hc-before-after`)

| Field | Value |
|---|---|
| Script | `scripts/plotting/plot_hc_before_after.py` |
| Data | Vendored `scripts/plotting/paper_fig_data/hc_before_after.npz` (git-tracked): event 42 of the 4He and p Garfield files, Raw vs HC channels; regenerator `paper_fig_data/regenerate_paper_fig_data.py:182-197` reads legacy `D:/.../dataset/Garfield_{Raw,HC}/` |
| Labels/split | Species identity from **filenames**, not the `labels` array → immune to the label-map bug under both conventions |
| Verdict | **Sound.** Caption ("α (⁴He) track; proton track; DBSCAN ε=10 mm, min_samples=3") matches the npz contents and the regenerator constants. |
| Regen | **Cheap, verified:** re-rendered in the worktree → `hc_before_after.png` pixel-identical to the manuscript PNG (max\|d\|=0). Regenerating the *npz* needs Windows Garfield files. |
| What would change | Nothing. |

### RISK 6 — `figures/five_class_data_samples.png` (supplementary.tex L33, `fig:five-class-samples`)

| Field | Value |
|---|---|
| Script | `scripts/plotting/plot_PAPER_five_class_samples.py` |
| Data | Legacy NimpSim `D:/.../dataset/HDF5_Form/sim_inv_12C_4He_{p,d,t,3He,4He}_25k.h5`, events 0–1 per species (script L57-70; supplementary.tex L29 comment) |
| Labels/split | Per-file species identity → clean |
| Verdict | **Sound; unverifiable here** (Windows HDF5). Caption matches content (dual-channel, 2 events × 5 species). |
| Regen | Needs Windows HDF5_Form files. |
| What would change | Nothing. |

### RISK 7 — `figures/physics_feature_distributions.pdf` (supplementary.tex L41, `fig:physics-feature-distributions`)

| Field | Value |
|---|---|
| Script | `scripts/plotting/plot_physics_feature_distributions.py` |
| Data | Vendored `paper_fig_data/physics_feature_distributions.npz` (git-tracked): 2000 MoI vectors/species, seed 42, from legacy `Garfield_HC/` files (regenerator L62-69,159-179) |
| Labels/split | Species from filenames → clean |
| Verdict | **Sound.** Bonus consistency: the plotted raw I_zz scale (~10²) is exactly the unnormalized-feature regime fm-ar-feature-norm measured — the figure silently corroborates that features enter raw (relevant to the L170/L207 "standardized" text bug, which is a text issue, not a figure issue). |
| Regen | **Cheap, verified:** re-rendered pixel-identical in worktree. npz regen needs Windows Garfield. |
| What would change | Nothing. |

### RISK 8 — `figures/mate_geometry_schema.png` (main.tex L98, `fig:mate-geometry`)

| Field | Value |
|---|---|
| Script | `scripts/plotting/plot_mate_geometry_schema.py` |
| Data | Vendored `paper_fig_data/MATE_4000ch_trianglePad_geo.txt` (git-tracked pad geometry); the "representative track" is a **parametric schematic line** (script L274-288: straight line z 40→250, pads marked by nearest-centroid), not a simulated event |
| Labels/split | n/a — geometry |
| Verdict | **Sound; one caption nit.** Caption says "the pads fired by a representative simulated track" — the track is illustrative, not from simulation. Trivially fixable wording ("a representative track"). |
| Regen | **Cheap, verified:** pixel-identical regen (max\|d\|=0). |
| What would change | Caption wording only. |

### RISK 9 — `figures/cross_attention_schema.pdf` (main.tex L227, `fig:cross-attention`)

| Field | Value |
|---|---|
| Script | `scripts/plotting/plot_PAPER_cross_attention_schema.py` — pure schematic, zero data inputs (grep: no file loads) |
| Data | none |
| Verdict | **Sound** as an architecture diagram; matches `src/models/cross_attention.py` (64-d Q/K/V, concat → 68-d). Note for the captain: the *trained* module behaves as single-query attention pooling + parallel physics concat (attn-sink §3) — that is a §5.6 text/framing matter, not a defect in this schematic. |
| Regen | **Cheap, verified:** PNG output pixel-identical to `figures/cross_attention_schema.png`. |
| What would change | Nothing. |

### RISK 10-12 — `figures/F4_predicted_vs_truth_hexbin.png` (main.tex L468), `figures/F1_residual_hist_overlay.png` + `figures/F2_per_energy_bin_rmse.png` (supplementary.tex L49, L57)

| Field | Value |
|---|---|
| Script | `scripts/plotting/plot_TRK5_TRK6_baselines_comparison.py` (`plot_f4_pred_vs_truth`, `plot_f1_residual_overlay`, `plot_f2_energy_bin_rmse`) via `plot_TRK_energy_common.py` |
| Data | Seven local run dirs (`plot_TRK_energy_common.py:86-94`): `TRK5-ResNet-EnergyReg/seed42`, `TRK6-XA-EnergyReg/seed42`, `baseline-{ransac,hough,hc,hough-opt,hc-opt}/seed42` — all `predictions_regression.csv` + `metrics.json` **present locally** (verified). Baselines pinned to the CNN `data_split.json` (same test events) |
| Labels/split | Energy regression on TRK data — no isotope labels; true test split (test-split §1: baselines consume `test_indices`) |
| Verdict | **Sound — fully verified.** I regenerated all three in the worktree (~35 s total): **pixel-identical** to the manuscript copies (max\|d\|=0 on all three). Caption numbers (CNN σ ≤0.037 MeV, R² ≥0.999, classical σ 0.37–0.49) are consistent with the metrics.json values the ledger re-verified (§3, item 17). |
| Regen | **Cheap — done.** One caveat: `main()` also needs `runs/TRK-comparison-energy/comparison_matrix.json` (absent locally) for F7 — but F7 is not in the manuscript; F1/F2/F4 don't need it. |
| What would change | Nothing. |

---

<!-- SOURCE-BODY-END -->
