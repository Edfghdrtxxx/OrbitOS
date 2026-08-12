# Figures, Training Outputs and Result Data - MATE/AFTPC Experiments
Generated: 2026-04-12

All absolute paths. Root: D:/Something/research/MATE-Automation-V4/ | AFTPC: D:/Something/research/AFTPC_V3_MultiAgentVersion/

Path: D:/Something/research/MATE-Automation-V4/10_Papers-Thesis/Physics_Informed/figures/

example_tracks.png - Example TPC track images (two-channel 80x48 rasters)
mate_geometry_schema.pdf/.png - MATE AT-TPC detector geometry schematic
mate_pad_geometry.png/.svg - Pad plane geometry diagram
data_pipeline.png - Full data pipeline from simulation to ML input
hc_before_after.pdf/.png - Before/after Hierarchy Clustering preprocessing
cross_attention_schema.png - Cross-attention architecture diagram
attention_overlay.png - Attention weights overlaid on example TPC image
Standard_ResNet18_Architecture.png - ResNet-18 architecture reference
physics_feature_distributions.pdf - Distributions of 4 physics features (Iyy, Izz, Iyz, mtot)
training_dynamics.png - Training dynamics comparison
v6_training_curves.pdf/.png - V6 training loss/acc curves, ResNet vs CrossAtt
v6_confusion_matrix_grid.pdf/.png - Grid of confusion matrices across V6 ablation variants
v6_accuracy_comparison.png - V6 accuracy comparison bar chart
v6_class_performance.png - V6 per-class performance metrics
v6_ablation_bars.pdf - V6 feature ablation bar chart
v6_hc_impact.png - Impact of HC preprocessing on accuracy
v6_crossatt_hc_training.png - V6 CrossAtt HC training history
confusion_matrix_3He4He_baseline.png - Baseline 3He/4He confusion matrix

Main paper PDF: D:/Something/research/MATE-Automation-V4/10_Papers-Thesis/Physics_Informed/main.pdf

---

## 2. Thesis Proposal Figures

Path: D:/Something/research/AFTPC_V3_MultiAgentVersion/thesis_proposal_images/

1_task_difficulty_academic.pdf/.png - Task difficulty framing (why 3He/4He and 13C/14C are hard)
2_model_evolution_academic.pdf/.png - Model evolution V3 to V6
3_example_tracks.png - Three example track images
3_training_dynamics_comparison.pdf/.png - Training dynamics across model generations
task_difficulty_comparison.png - Side-by-side task difficulty for Bragg peak PID paradigms
model_evolution_trajectory.png - Visual summary of development trajectory

---

## 3. EXP1 - XA+HC, 100k (3He/4He binary)

Run: D:/Something/research/MATE-Automation-V4/runs/EXP1-XA-HC-100k/20260317_191552_seed42/

KEY METRICS:
  Accuracy: 95.796%  |  Macro F1: 0.9312  |  Alpha recall: 83.58%
  Best epoch: 18  |  Early stopped at epoch 33  |  Model params: 11,227,138

GAP DECOMPOSITION (vs legacy models, same 25k val set):
  Legacy ResNet@100k:    95.772%  alpha_recall=84.50%
  EXP1 CrossAtt@100k:   95.796%  alpha_recall=83.58%
  Legacy CrossAtt@400k: 97.568%  alpha_recall=89.76%
  Architecture effect (XA vs ResNet @100k): +0.024 pp  NOT significant (p=0.813)
  Data scaling effect (100k to 400k):       +1.772 pp  significant (p=1.27e-73)

CONFUSION MATRIX (25k val set):
  True alpha:     4179 correct / 821 wrong
  True non-alpha:  230 wrong   / 19770 correct

FIGURES:
  figures/exp1_training_curves.png      - Training loss and accuracy curves
  figures/exp1_confusion_matrices.png   - Side-by-side raw+normalized confusion matrices
  figures/exp1_overall_metrics.png      - Accuracy, F1, alpha recall bar chart
  figures/exp1_per_class_recall.png     - Per-class recall breakdown
  figures/exp1_gap_decomposition.png    - Architecture vs data-scaling stacked bar
  figures/paradigm_comparison.pdf/.png  - Two-paradigm: Range-Energy PID vs EXP1 confusion
  confusion_matrix_norm.png             - Standalone row-normalized confusion matrix
  confusion_matrix_raw.png              - Standalone raw count confusion matrix
  training_curves.png                   - Raw training curves

CHECKPOINTS:
  best_model.pth             epoch 18, val_acc=0.95796
  checkpoint_epoch_9/19/29.pth
  final_model.pth            epoch 33

---

## 4. EXP2 - Fusion Architecture Comparison

COMPARISON FIGURES: D:/Something/research/MATE-Automation-V4/runs/EXP2-fusion-comparison/figures/
  exp2_accuracy_bars.png          - Grouped bar: CrossAtt/GatedFusion/ConcatFusion on both pairs
  exp2_accuracy_f1_combined.png   - Combined accuracy + F1 comparison
  exp2_f1_bars.png                - F1 score grouped bar chart
  exp2_param_counts.png           - Parameter count comparison
  exp2_per_class_recall.png       - Per-class recall across fusion types
  exp2_training_curves_13C14C.png - Training curves overlay for 13C/14C
  exp2_training_curves_3He4He.png - Training curves overlay for 3He/4He

INDIVIDUAL RESULTS:

CrossAtt 13C/14C (runs/EXP2-CrossAtt-HC-100k-13C14C/20260318_231654_seed42/)
  Accuracy: 84.625%  Macro F1: 0.8460  Best epoch: 34
  13C precision=0.822 recall=0.884 F1=0.852  |  14C precision=0.875 recall=0.809 F1=0.840

GatedFusion 13C/14C (runs/EXP2-GatedFusion-HC-100k-13C14C/20260319_021019_seed42/)
  Accuracy: 85.74%   Macro F1: 0.8573  Best epoch: 27
  13C precision=0.872 recall=0.838 F1=0.855  |  14C precision=0.844 recall=0.876 F1=0.860

ConcatFusion 13C/14C (runs/EXP2-ConcatFusion-HC-100k-13C14C/20260319_041649_seed42/)
  Accuracy: 86.07%   Macro F1: 0.8607  Best epoch: 31
  13C precision=0.864 recall=0.856 F1=0.860  |  14C precision=0.857 recall=0.865 F1=0.861

ConcatFusion 3He/4He (runs/EXP2-ConcatFusion-HC-100k-3He4He/20260318_182051_seed42/)
  Accuracy: 96.98%   Macro F1: 0.9354  Alpha recall: 83.96%  Best epoch: 20

GatedFusion 3He/4He (runs/EXP2-GatedFusion-HC-100k-3He4He/20260318_144537_seed42/)
  Accuracy: 96.94%   Macro F1: 0.9346  Alpha recall: 83.92%  Best epoch: 18

Each run dir: confusion_matrix_norm.png, confusion_matrix_raw.png,
training_curves.png, best_model.pth, final_model.pth, metrics.json, history.json

---

## 5. EXP5 - Dataset Scaling

Figures: D:/Something/research/MATE-Automation-V4/runs/EXP5-dataset-scaling/figures/
  fig1_accuracy_vs_size.png     - Accuracy vs training set size scaling curve
  fig2_f1_vs_size.png           - Macro F1 vs training set size
  fig3_learning_curves.png      - Learning curves at multiple dataset sizes
  fig4_relative_improvement.png - Relative improvement vs baseline as data scales

---

## 6. EXP7 - PDT (p/d/t) Baseline

Figures: D:/Something/research/MATE-Automation-V4/runs/EXP7-pdt-baseline/figures/
  accuracy_summary_pdt.png    - Accuracy summary for p/d/t 3-class classification
  confusion_matrix_pdt.png    - Confusion matrix for p/d/t classes
  delta_az_context.png        - delta(A/Z) context plot (why p/d/t is harder)
  per_class_f1_comparison.png - Per-class F1 for p/d/t
  training_curves_pdt.png     - PDT training curves

---

## 7. TRK Series - Trajectory Reconstruction

Full narrative: D:/Something/research/MATE-Automation-V4/runs/TRK-comparison/summary.md

TRK CROSS-COMPARISON FIGURES:
Path: D:/Something/research/MATE-Automation-V4/runs/TRK-comparison/figures/
  TRK3_summary.pdf/.png                  - Phase 1/2 convergence, attention maps, cross-task bar
  angular_resolution_comparison.pdf/.png - Angular resolution ResNet vs CrossAtt overlay
  cross_task_honest_comparison.pdf/.png  - Three-panel: Isotope ID / Track Class / Angle Reg
  energy_stratified_comparison.pdf/.png  - Per-energy Phase 1 accuracy + Phase 2 MAE
  residual_overlay_comparison.pdf/.png   - Signed residual distributions TRK3-v2 vs TRK4-v2
  track_composition_comparison.pdf/.png  - Per-track-count MAE breakdown
  ransac_fragility_comparison.pdf/.png   - RANSAC baseline vs DL comparison
  ransac_unified_comparison.pdf/.png     - Unified RANSAC comparison

TRK TABLES: D:/Something/research/MATE-Automation-V4/runs/TRK-comparison/tables/
  TRK_T1_classification_summary.csv/.tex  - Phase 1 accuracy CI, per-class (KEY TABLE)
  TRK_T2_energy_stratified_accuracy.csv   - Phase 1 by energy
  TRK_T3_regression_summary.csv/.tex      - Phase 2 MAE/RMSE/tier fractions (KEY TABLE)
  TRK_T4_energy_stratified_angle_error.csv - Phase 2 MAE by energy
  TRK_T5_cross_task_comparison.csv/.tex   - Cross-task: Isotope ID / Track Class / Angle Reg
  TRK_T6_hp_optimization_effect.csv/.tex  - HP optimization TRK3 v1 to v2

TRK QUANTITATIVE RESULTS:

PHASE 1 - Track Count Classification (4-way, n=180k test events):
  TRK1 ResNet: 99.9983% accuracy (CI 99.9951-99.9994%), 3 errors/180k, best epoch 9
  TRK2 XA:    99.9994% accuracy (CI 99.9969-99.9999%), 1 error/180k,  best epoch 10
  McNemar p=0.4795 NOT significant. BOTH AT CEILING, task saturated.

PHASE 2 - Per-Track Polar Angle Regression (n=450k valid track slots):
  TRK3-v2 ResNet:
    MAE 0.9922 deg [0.9890-0.9954]  RMSE 1.4871  Median AE 0.6879  Bias -0.0763
    High-tier (<1 deg): 65.32%  Medium (1-3 deg): 29.91%  Low (>=3 deg): 4.77%
    Best epoch: 25
  TRK4-v2 XA CrossAtt:
    MAE 0.8324 deg [0.8295-0.8351]  RMSE 1.2909  Median AE 0.5515  Bias -0.0244
    High-tier (<1 deg): 72.87%  Medium (1-3 deg): 23.79%  Low (>=3 deg): 3.34%
    Best epoch: 58
  XA improvement: -16.1% relative MAE, +7.55 pp High-tier, p < 1e-16. CIs fully disjoint.

ENERGY-STRATIFIED MAE:
  0.5 MeV: ResNet 1.5438 deg  XA 1.3665 deg  (Rel delta -11.5%)
  2.0 MeV: ResNet 0.7693 deg  XA 0.6155 deg  (Rel delta -20.0%)
  3.2 MeV: ResNet 0.6636 deg  XA 0.5151 deg  (Rel delta -22.4%)

PER-TRACK-COUNT MAE (TRK3-v2 / TRK4-v2):
  1 track: 0.829 / 0.652 deg  |  2 tracks: 0.885 / 0.748 deg
  3 tracks: 0.979 / 0.812 deg  |  4 tracks: 1.097 / 0.934 deg

HP OPTIMIZATION (TRK3 v1->v2, dropout 0.3->0.05, weight_decay 1e-4->1e-5):
  MAE:       1.1120 -> 0.9922 deg (-10.8%)
  RMSE:      1.5957 -> 1.4871
  High-tier: 59.06% -> 65.32% (+6.26 pp)

TRK PER-RUN FIGURES:
  TRK1 (runs/TRK1-ResNet-TrackClass/20260321_212347_seed42/figures/):
    confusion_matrix.pdf/.png, per_class_metrics.pdf/.png,
    phase1_comparison.pdf/.png, training_curves.pdf/.png
  TRK2 (runs/TRK2-XA-TrackClass/seed42/figures/):
    confusion_matrix.pdf/.png, per_class_metrics.pdf/.png, training_curves.pdf/.png
  TRK3 v1 (runs/TRK3-ResNet-AngleReg/seed42/figures/):
    training_curves, residual_histogram_fit, predicted_vs_true_hexbin,
    per_track_mae, energy_stratified_mae, tier_breakdown, phase2_regression (all pdf/.png)
  TRK3-v2 (runs/TRK3-v2-ResNet-AngleReg/seed42/figures/):
    Same as TRK3 v1 minus phase2_regression, plus residual_before_after.pdf/.png
  TRK4-v2 (runs/TRK4-v2-XA-AngleReg/seed42/figures/):
    Same set as TRK3-v2

---

## 8. Model Checkpoints Summary

All in D:/Something/research/MATE-Automation-V4/runs/

EXP1 XA+HC 100k          EXP1-XA-HC-100k/20260317_191552_seed42/best_model.pth                  acc=0.95796 ep18
EXP2 CrossAtt 13C14C     EXP2-CrossAtt-HC-100k-13C14C/20260318_231654_seed42/best_model.pth     acc=0.84625 ep34
EXP2 GatedFusion 13C14C  EXP2-GatedFusion-HC-100k-13C14C/20260319_021019_seed42/best_model.pth  acc=0.8574  ep27
EXP2 ConcatFusion 13C14C EXP2-ConcatFusion-HC-100k-13C14C/20260319_041649_seed42/best_model.pth acc=0.8607  ep31
EXP2 ConcatFusion 3He4He EXP2-ConcatFusion-HC-100k-3He4He/20260318_182051_seed42/best_model.pth acc=0.9698  ep20
EXP2 GatedFusion 3He4He  EXP2-GatedFusion-HC-100k-3He4He/20260318_144537_seed42/best_model.pth  acc=0.9694  ep18
TRK1 ResNet TrackClass   TRK1-ResNet-TrackClass/20260321_212347_seed42/best_model.pth            acc=0.99999 ep9
TRK2 XA TrackClass       TRK2-XA-TrackClass/seed42/best_model.pth                               acc=0.99999 ep10
TRK3 v1 ResNet AngleReg  TRK3-ResNet-AngleReg/seed42/best_model.pth                             MAE=1.112   ep69
TRK3-v2 ResNet AngleReg  TRK3-v2-ResNet-AngleReg/seed42/best_model.pth                          MAE=0.992   ep25
TRK4-v2 XA AngleReg      TRK4-v2-XA-AngleReg/seed42/best_model.pth                             MAE=0.832   ep58

---

## 9. Legacy AFTPC_V3 Outputs (supplementary)

Path: D:/Something/research/AFTPC_V3_MultiAgentVersion/outputs/

V6_CrossAtt_HC_20260204_141711/
  val_acc=96.639%  alpha_recall=87.375% (100k val set)
  Files: training_history.png, per_class_metrics.png, metrics.json, best_model.pth

V6_ResNet_HC_20260204_004518/
  val_acc=95.752%  alpha_recall=84.36%
  Files: training_history.png, training_history_cleaned.png, metrics.json, best_model.pth

V6_CrossAtt_Raw_20260204_022458/ - CrossAtt without HC (for HC impact comparison)
V6_ResNet_Raw_20260202_185050/ - ResNet without HC (HC impact baseline)

Comparisons/3He_vs_4He_25k_vs_100k_20251125/ - Sample size ablation (25k vs 100k):
  comparison_training_history.png, f1_score_comparison_all.png,
  comparison_roc.png, comparison_metrics.png, comparison_confusion_matrix.png

12C_vs_13C_Binary_20251216_175728/ - 12C/13C binary task:
  roc_curve_youden.png, pr_curve.png, confusion_matrix.png, per_class_metrics.png
  Plus 3D track scatter PNGs for 12C and 13C events separately

V6_CrossAtt_HC_feat_* variants - HC feature ablation: each has training_history.png

---

## 10. Training Logs

D:/Something/research/MATE-Automation-V4/training_stdout.log
  EXP1 full training stdout with epoch-by-epoch loss/acc

D:/Something/research/MATE-Automation-V4/logs/trk_training.log
  TRK1 epoch-by-epoch log (note: post-training eval errored on KeyError best_val_acc;
  all training artifacts are valid)

D:/Something/research/MATE-Automation-V4/runs/*/run.log - per-experiment run logs
D:/Something/research/MATE-Automation-V4/runs/*/training_curves.csv - epoch-level loss/acc CSV

---

## 11. Key Numbers for Slides

MODEL ARCHITECTURE:
  All MATE models: ~11.23M parameters
  Backbone: ResNet-18 (modified), 2-channel input (charge C0 + drift proxy C1), 80x48 pads
  Physics features: 4 scalars (Iyy, Izz, Iyz, mtot) fused via cross-attention

EXP1 PRIMARY CLAIM:
  XA+HC@100k: 95.80% accuracy, 83.58% alpha recall
  Architecture effect vs ResNet@100k: +0.024 pp NOT significant (p=0.813)
  Data scaling gap @400k: +1.77 pp (p<1e-73) -- data volume is the lever, not architecture

EXP2 FUSION COMPARISON:
  3He/4He: all fusion types ~96.9-97.0% (similar) -- relatively easy task
  13C/14C: CrossAtt 84.6%, GatedFusion 85.7%, ConcatFusion 86.1% -- hard task (~11 pp harder)

TRK HEADLINE:
  Track count: both architectures >=99.998% (saturated, McNemar p=0.48)
  Angle regression XA improvement: MAE 0.992->0.832 deg (-16.1%, p<1e-16)
  High-tier fraction (|error| < 1 deg): 65.3% -> 72.9% (+7.55 pp)
  XA gain grows with energy: -11.5% at 0.5 MeV, -20.0% at 2.0 MeV, -22.4% at 3.2 MeV
