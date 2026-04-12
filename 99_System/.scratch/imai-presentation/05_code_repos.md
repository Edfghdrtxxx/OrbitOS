# Code Repositories: MATE/AFTPC Thesis ML Work

_Generated: 2026-04-12 | Source code and repositories perspective_

---

## Repository Summary

Two primary repos on this machine:
- **AFTPC_V3_MultiAgentVersion** (legacy multi-agent original codebase)
- **MATE-Automation-V4** (active clean-room reimplementation for EXP1-7 thesis experiments)

No Jupyter notebooks in either repo. All training/analysis is script-based.

---

## 1. MATE-Automation-V4 (Primary / Active)

**Path:** D:\Somethingesearch\MATE-Automation-V4
**Git repo:** Yes
**Python version:** CPython 3.13 (inferred from __pycache__ bytecode filenames)

### Source Tree

```
src/models/backbone.py         -- ModifiedResNet18: 3x3/stride-1 conv, maxpool->Identity, in_channels=2
src/models/cross_attention.py  -- CrossAttentionFusion: physics query attends to 60 CNN spatial tokens
src/models/gated_fusion.py     -- GatedFusion (EXP2 comparison)
src/models/concat_fusion.py    -- ConcatFusion (EXP2 comparison)
src/models/classifier.py       -- ClassifierHead: Linear(68,128)->ReLU->Dropout(0.3)->Linear(128,2)
src/models/model.py            -- MATEModel: fusion_type in {cross_attention,gated,concat,none}
src/data/dataset.py            -- MATEDataset: HDF5 NHWC->NCHW, physics features, per-file subsampling
src/data/normalization.py      -- variance_floor normalization
src/training/trainer.py        -- AdamW, linear warmup, ReduceLROnPlateau, early stopping
src/evaluation/evaluate.py, evaluate_trk_*.py, statistical_tests.py
src/run_experiment.py          -- Main CLI entrypoint: config -> build -> train -> eval
```

**Config files (configs/):**
- base.yaml (default hyperparameters)
- EXP1_XA_HC_100k.yaml
- EXP2_CrossAtt_HC_100k_13C14C.yaml
- EXP2_ConcatFusion_HC_100k_{13C14C,3He4He}.yaml
- EXP2_GatedFusion_HC_100k_{13C14C,3He4He}.yaml
- TRK1_ResNet_TrackClass.yaml ... TRK4_v2_XA_AngleReg.yaml

**Run command:**
```bash
python src/run_experiment.py --config configs/EXP1_XA_HC_100k.yaml
```

Outputs: runs/<experiment_id>/<YYYYMMDD_HHMMSS>_seed<N>/ containing
metrics.json, best_model.pth, config.yaml, history.json, training_curves.csv,
confusion_matrix_*.png, predictions.csv, data_split.json, normalization_stats.json

**Plotting (scripts/plotting/):** plot_EXP1.py ... plot_EXP7.py, plot_TRK*.py (15+ scripts)
**Preprocessing (scripts/preprocessing/):** ROOT->HDF5 converters, merge_trk_h5.py, npz_to_h5.py

**openspec/changes/:** Per-experiment design specs
- EXP1-matched-training-size/ (propose.md, implementation_log.md, task.md, review_*.md)
- EXP2-fusion-mechanism-comparison/
- EXP3-seed-variance/propose.md
- EXP4-quantitative-attention/propose.md
- EXP5-dataset-scaling-up/propose.md
- EXP6-13C14C-ablation/propose.md
- EXP7-pdt-baseline/propose.md
- TRK-*/

**Other dirs:** 10_Papers-Thesis/Physics_Informed/ (LaTeX draft), 20_doc/Legacy Codebase/ (cross-ref index)

---

## 2. Model Architecture Details

### Modified ResNet-18 Backbone (src/models/backbone.py)

Input: (B, 2, 80, 48) -- Ch0: charge deposition (log-encoded), Ch1: drift time (mean)
conv1: 3x3/stride-1/padding-1  (replaces standard 7x7/stride-2)
maxpool: replaced with nn.Identity (resolution fully preserved)
Spatial trace: 80x48 -> 80x48 (layer1) -> 40x24 (layer2) -> 20x12 (layer3) -> 10x6 (layer4)
Outputs: feature_map (B,512,10,6)  AND  gap_vector (B,512) via AdaptiveAvgPool2d(1,1)
Pretrained weight adaptation: center-crop 7x7->3x3, avg RGB->1ch, repeat to 2ch
Parameters: ~11,169,256

### CrossAttentionFusion (src/models/cross_attention.py)

Physics features (B,4) -> query_proj Linear(4,64) -> Q: (B,1,64)
CNN tokens: feature_map.permute(0,2,3,1).reshape(B,60,512) -> kv_proj Linear(512,64) -> kv: (B,60,64)
  (single projection: K and V are identical at MHA input -- shared kv_proj)
nn.MultiheadAttention(embed_dim=64, num_heads=4, batch_first=True, dropout=0.0)
Output: attended (B,64)  [squeeze length-1 sequence dim]

IMPORTANT double-projection (documented, as-published architecture):
  kv_proj: Linear(512->64), then MHA in_proj_weight (192,64) projects 64->64 again.
  K and V effectively projected twice. Not a bug -- this produced the published results.

Parameters: 49,792
  query_proj: 4*64+64 = 320
  kv_proj: 512*64+64 = 32,832
  MHA (in_proj 192x64 + in_proj_bias 192 + out_proj 64x64+64): 16,640

### ClassifierHead (src/models/classifier.py)

CrossAtt path input: cat([attended(B,64), physics(B,4)]) = (B,68)
Linear(68,128) -> ReLU -> Dropout(0.3) -> Linear(128,2) -> raw logits
Parameters: 9,090

### Full MATEModel (src/models/model.py)

| fusion_type | Classifier input | Total params |
|-------------|-----------------|-------------|
| cross_attention | (B,68)  | ~11,228,882 |
| gated | (B,516) | ~11,237,666 |
| concat | (B,516) | ~11,234,818 |
| none (ResNet baseline) | (B,512) | ~11,168,xxx |

KEY: In CrossAtt path, the GAP vector is computed but intentionally UNUSED.
Gradients reach the backbone ONLY through cross-attention on the 60 spatial tokens.
Physics features are NEVER normalized (passed raw to query_proj and classifier).

---

## 3. Training Configuration (configs/base.yaml defaults)

| Hyperparameter | Value |
|----------------|-------|
| Optimizer | AdamW |
| Learning rate | 1e-4 |
| Weight decay | 1e-4 |
| Batch size | 128 |
| Max epochs | 100 (EXP1: 110) |
| LR warmup | linear, 5 epochs, start_lr=1e-6 |
| LR scheduler | ReduceLROnPlateau, factor=0.5, patience=5 |
| Early stopping | patience=15, min_delta=1e-4, monitor=val_loss |
| Label smoothing | 0.05 |
| Gradient clipping | 0.5 |
| Normalization | variance_floor (per-channel z-score with variance floor) |
| Checkpoint selection | best_val_accuracy |

---

## 4. EXP1-7 Mapping and Status

| Exp | Config YAML | Description | Status |
|-----|-------------|-------------|--------|
| EXP1 | EXP1_XA_HC_100k.yaml | CrossAtt+HC vs ResNet+HC at matched 100k | COMPLETE: 95.796 0x0p+0ccuracy, seed42, epoch18 |
| EXP2 | EXP2_*.yaml (5 configs) | Fusion comparison: CrossAtt vs Gated vs Concat on 3He/4He + 13C/14C | Runs in runs/ |
| EXP3 | openspec only | Seed variance: 3 seeds x 4 configs. Conditional: skip if std > 0.5pp | Design stage |
| EXP4 | openspec only | Bragg peak attention fraction -- post-hoc, no retraining needed | Design stage |
| EXP5 | openspec only | Dataset scaling: 10k to 400k learning curves, CrossAtt+HC vs ResNet+Raw | Figures in runs/EXP5/ |
| EXP6 | openspec only | 13C/14C 2x2 factorial ablation (CrossAtt/ResNet x HC/Raw) | Partial runs |
| EXP7 | openspec only | p/d/t 3-class baseline (large delta-A/Z = 1.0 control) | Figures in runs/EXP7/ |

EXP3 decision gate: if seed-to-seed std > 0.5pp, skip entirely (deadline constraint).
EXP4 post-hoc only: extract attention weights from trained model; compute f_Bragg = 
  (attention in last 200f track) / (total attention). Expected f_Bragg >> 0.20.

---
## 5. HDF5 Dataset Schema

Files in D:\Somethingesearch\AFTPC_V3_MultiAgentVersion\dataset\Garfield_HC\

```
images:            (N, 80, 48, 2)  float32  -- NHWC on disk; transposed to NCHW in loader
labels:            (N,)            int32
physics_features:  (N, 4)          float32  -- [Iyy, Izz, Iyz, total_mass]
metadata/          attrs group (conversion_complete, num_events, ...)
```

Per-species files (100k events each):
- sim_inv_12C300MeV_4He_3He_100k_garfield_v5_hc.h5  (3He recoil)
- sim_inv_12C300MeV_4He_4He_100k_garfield_v5_hc.h5  (4He recoil)
- sim_inv_12C300MeV_4He_p/d/t_100k_garfield_v5_hc.h5 (proton, deuteron, triton)
- sim_12C300MeV_13C_elastic_100k_garfield_v5_hc.h5
- sim_12C300MeV_14C_elastic_100k_garfield_v5_hc.h5

Also: Garfield_Raw/ (same species, no DBSCAN), Garfield_Output_V5/ (ROOT source)

HC (HitChannel) preprocessing = DBSCAN denoising in 2D (y,z) pad coordinates.
This is one axis of the 2x2 ablation: HC vs Raw preprocessing.

---

## 6. AFTPC_V3_MultiAgentVersion (Legacy Reference)

Path: D:\Somethingesearch\AFTPC_V3_MultiAgentVersion
Role: Original multi-agent codebase. Now reference-only; MATE-Automation-V4 is canonical.

Key legacy scripts:
- scripts/models/backbones/resnet_small.py      original backbone
- scripts/models/v4_cross_attention.py          original CrossAtt model
- scripts/models/v4_gated_fusion.py
- scripts/models/v5_vit_cross_attention.py      ViT variant
- scripts/models/v5_vit_gated_fusion.py
- scripts/data/unified_tpc_dataset.py           unified dataset loader
- scripts/utils/physics_features.py            MoI extraction, length, eccentricity
- scripts/preprocessing/hc_preprocessing.py    DBSCAN (HC) preprocessing
- scripts/preprocessing/convert_root_to_h5_data.py  ROOT->HDF5 conversion
- scripts/preprocessing/garfield_postprocessor_v5.C Garfield C postprocessor
- scripts/main_controller.py                    legacy training orchestrator
- tests/  unit tests (HC preprocessing, physics feature truncation, geometry alignment)

Completed legacy runs in outputs/:
- 3He_vs_4He_Binary_20251121_153920_100k/
- Baseline_13C_vs_14C_20260108_123555_modular/
- Hyperparam_Sweep_V3_20251026_124935/  (LR sweep: 1e-6 to 1.5e-4)
- V4_GatedFusion_5Class_20251128_204528/  (5-class p/d/t/3He/4He baseline)
- Comparisons/  (ablation tables, scaling comparisons)

---

## 7. Libraries and Frameworks

From AFTPC_V3/requirements.txt (applies to both repos):
```
torch        -- PyTorch (version not pinned in requirements.txt)
torchvision  -- ResNet-18 pretrained weights
h5py         -- HDF5 data access
numpy, scikit-learn
matplotlib, seaborn
uproot       -- ROOT file reading (data preprocessing only)
pandas, PyYAML, reportlab
```

Python 3.13 (CPython, inferred from cpython-313 bytecode in MATE-Automation-V4 __pycache__).

---

## 8. Key File Paths Quick Reference

**MATE-Automation-V4 (active):**
| File | Path |
|------|------|
| MATEModel (top-level) | D:\Somethingesearch\MATE-Automation-V4\src\models\model.py |
| CrossAttentionFusion | D:\Somethingesearch\MATE-Automation-V4\src\models\cross_attention.py |
| Backbone | D:\Somethingesearch\MATE-Automation-V4\src\modelsackbone.py |
| Trainer | D:\Somethingesearch\MATE-Automation-V4\src	raining	rainer.py |
| Run entrypoint | D:\Somethingesearch\MATE-Automation-V4\srcun_experiment.py |
| EXP1 config | D:\Somethingesearch\MATE-Automation-V4\configs\EXP1_XA_HC_100k.yaml |
| Base config | D:\Somethingesearch\MATE-Automation-V4\configsase.yaml |
| EXP1 metrics | D:\Somethingesearch\MATE-Automation-V4uns\EXP1-XA-HC-100k60317_191552_seed42\metrics.json |
| Legacy codebase index | D:\Somethingesearch\MATE-Automation-V4_doc\Legacy Codebase\Legacy Codebase.md |

**AFTPC_V3_MultiAgentVersion (legacy):**
| File | Path |
|------|------|
| Original CrossAtt | D:\Somethingesearch\AFTPC_V3_MultiAgentVersion\scripts\models4_cross_attention.py |
| Original backbone | D:\Somethingesearch\AFTPC_V3_MultiAgentVersion\scripts\modelsackbonesesnet_small.py |
| Training data | D:\Somethingesearch\AFTPC_V3_MultiAgentVersion\dataset\Garfield_HC\ |
| network_architecture.svg | D:\Somethingesearch\AFTPC_V3_MultiAgentVersion	hesis\Physics_Informed_LegacyBackupigures
etwork_architecture.svg |
| cross_attention_schema.png | D:\Somethingesearch\AFTPC_V3_MultiAgentVersion	hesis\Physics_Informed_LegacyBackupigures\cross_attention_schema.png |
| attention_overlay.png | D:\Somethingesearch\AFTPC_V3_MultiAgentVersion	hesis\Physics_Informed_LegacyBackupiguresttention_overlay.png |
| CrossAtt explainer SVG | D:\Somethingesearch\AFTPC_V3_MultiAgentVersion\docsrchitecture\cross_attention_explainer.svg |

---

_End of code repos exploration._
