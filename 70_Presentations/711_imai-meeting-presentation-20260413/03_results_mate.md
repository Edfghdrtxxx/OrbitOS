# MATE-Automation: Research Material for Imai Presentation

## What is MATE-Automation?

MATE-Automation is the ML pipeline for MATE-TPC at IMP, CAS. Codebase: D:\Something\research\MATE-Automation-V4 (outside vault).

What it automates:
- PID via deep learning (ResNet-based classification of TPC pad-plane images)
- Event classification: elastic scattering vs fusion reaction; multi-channel fusion discrimination
- Track reconstruction (TRK: 1-4 track classification + angle reconstruction)
- Vertex reconstruction via CNN
- Full chain: ROOT -> HDF5 -> image (224x224 px) -> ML inference

Detector (MATE-4000):
- 3792 triangular readout pads (48 rows x 80 pads), GEM amplification, GET electronics
- Active volume: 30x30x20 mm (H), triple-wire field cage

---

## Key Published Results (NST paper NST-2025-0958)

Source: 50_Resources/Physics/literature/MLforPhysics/NST-ML-12C12C-MATE/NST-ML-12C12C-MATE.md
Journal: Nuclear Science and Techniques. Submitted Nov 2025.

### Task 1: Elastic vs Fusion Classification (12C+12C)

Training: Cross Entropy Loss, Adam (lr=0.0001, batch=64), 8:2 split.
Sim data: 48000 elastic + 65000 fusion events (MATEROOT/Geant4).
Exp data: 3773 fusion + 1621 elastic events.
Input: 224x224 px track projection images (Z-X and Y-Z planes).

| Model     | Epochs | Accuracy (Exp) | Accuracy (Sim) |
|-----------|--------|----------------|----------------|
| ResNet-50 | 30     | 90.47%         | 97.89%         |
| ResNet-34 | 20     | 90.19%         | 97.61%         |
| ResNet-18 | 20     | 90.42%         | 97.80%         |
| VGG-19    | 20     | 89.75%         | 97.77%         |

ResNet-50 confusion matrix on experimental data:
- Precision = 0.948, Recall = 0.914, F1 = 0.931, FPR = 0.117
- ~1.5% of exp data mislabeled by traditional Hough method; ResNet-50 corrected some cases

### Task 2: Multi-Channel Fusion Classification (Simulated)

Channels: 12C(12C,p)23Na, 12C(12C,a)20Ne, 12C(12C,n)23Mg, 12C(12C,8Be)16O, 12C(12C,2a)16O
13000 simulated events per channel, 65000 total.

| Model     | Epochs | Accuracy |
|-----------|--------|----------|
| ResNet-50 | 50     | 95.35%   |
| ResNet-34 | 30     | 95.73%   |
| ResNet-18 | 30     | 95.83%   |
| VGG-19    | 30     | 94.98%   |

### Task 3: Vertex Reconstruction via CNN

Architecture: Conv2D(32)->MaxPool->Conv2D(64)->MaxPool->Conv2D(128)->GlobalAvgPool->FC(128)->Dropout(0.3)->Dense(3)
Input: 128x128 px color images. MSE loss, Adam (lr=0.001).
Sim-trained on sim data: sigX=0.0386 cm, sigY=0.0396 cm, sigZ=0.7021 cm
Sim-trained applied to exp data: sigX=0.7915 cm, sigY=0.3960 cm, sigZ=0.8359 cm
~80% of residuals within 1-sigma range.

---

## Thesis-Specific Results (AFTPC Physics-Informed Framework)

Source: Daily notes 2026-03-16 through 2026-04-12 in 10_Daily/
The thesis extends the NST paper with CrossAttention + Handcrafted features (CrossAtt+HC) novel architecture.
Key reference: 93% 3-class accuracy for p/d/t (proton/deuteron/triton) with ResNet+Raw (EXP7 baseline).
2x2 factorial ablation: architecture (ResNet vs CrossAtt) x features (Raw vs HC), on 3He/4He and 13C/14C.

### Supplementary Experiment Status (as of 2026-04-12)

| Exp  | Description                                                                | Status           |
|------|----------------------------------------------------------------------------|------------------|
| EXP1 | Matched Training Size: CrossAtt+HC @100k (isolate architecture effect)     | DONE 2026-03-18  |
| EXP2 | Fusion Mechanism: CrossAtt vs GatedFusion vs Concat on 3He/4He, 13C/14C  | DONE 2026-03-18  |
| EXP3 | Seed Variance: 3 seeds x 4 configs, error bars on 2x2 ablation             | Pending          |
| EXP4 | Quantitative Attention: Bragg peak attention fraction (post-hoc)           | Pending          |
| EXP5 | Learning Curves: accuracy vs training size 10k-400k                        | Pending          |
| EXP6 | 13C/14C 2x2 Ablation: hardest species pair (Delta(A/Z) ~8%)                | Pending          |
| EXP7 | p/d/t Baseline: ResNet+Raw 93% 3-class result (low priority)               | Pending          |

First training run: EXP1-XA-HC-100k, kicked off 2026-03-17.

### TRK Experiment Series (completed 2026-04-11)

Two-step pipeline:
1. Track Number Classification: ML-based 1-4 tracks from alpha source, Standard ResNet vs CrossAttention Fusion ResNet
2. Angle Reconstruction: 4-tier classification by angular deviation from truth

Deliverables (2026-04-11):
- Loss/residual curves + 4-tier classification statistics organized and plotted
- 14 plot_TRK* scripts updated + 4 new scripts (plot_TRK2, plot_TRK_angle_run, plot_TRK_v2_before_after, _trk_save)
- LaTeX tables generated, TRK_T6 regenerated, TeX compile successful
- Slide outline drafted (motivation -> method -> results -> next steps)

---

## Available Figures for Slides

### NST paper figures (12 images):
Path: D:/obsidian/OrbitOS/50_Resources/Physics/literature/MLforPhysics/NST-ML-12C12C-MATE/

- _page_3_Figure_9.jpeg   -- MATE-TPC schematic + pad plane layout [USE for intro/background]
- _page_4_Picture_5.jpeg  -- Experimental setup
- _page_5_Figure_3.jpeg   -- 3D track displays: 3 elastic + 3 fusion events (experimental)
- _page_7_Figure_3.jpeg   -- Simulated event examples
- _page_8_Figure_3.jpeg   -- [KEY] Accuracy/loss curves + confusion matrix, ResNet-50 on exp data
- _page_9_Figure_3.jpeg   -- [KEY] Multi-channel classification accuracy/loss + confusion matrix
- _page_9_Figure_5.jpeg   -- ML corrects traditional method mislabeling
- _page_10_Figure_3.jpeg  -- Vertex residuals (sim data)
- _page_11_Figure_3.jpeg  -- Vertex: sim-trained on exp data
- _page_11_Figure_5.jpeg  -- Vertex: exp-trained on exp data

### Vault attachments:
- 50_Resources/Attachments/GEM_Detector_diagram.png
- 50_Resources/Attachments/T2K_SuperK_PID.png  (comparable PID task, reference)
- 50_Resources/Attachments/OEDO-SHARAQ.png     (Imai lab hardware at UTokyo CNS)
- 50_Resources/Attachments/OEDO-SHARAQ_beam_comparison.png

---

## Pipeline Status

WORKING:
- Full chain: MATEROOT/Geant4 -> ROOT -> HDF5 -> image -> train -> evaluate
- ResNet-50/34/18 + VGG-19 event and channel classification (published results)
- CNN vertex reconstruction
- TRK trajectory + angle reconstruction (completed April 2026)
- CrossAtt+HC novel architecture, automated plotting (14+ scripts), LaTeX generation

PENDING:
- EXP3-7 supplementary experiments
- Attention heatmap visualization fix
- Thesis writing (substantiation outline is blocker, 37 days stale as of 2026-04-12)

---

## Framing for Imai Presentation

Problem: MATE-TPC generates large 3D track data. Traditional Hough-transform mislabels ~1.5% of events
and will not scale to next-generation ATTPCs at higher counting rates.

What MATE-Automation achieves:
- ~90-97% event classification accuracy (elastic vs. fusion)
- ~95% multi-channel fusion reaction discrimination (5 channels)
- Sub-cm vertex reconstruction (sigma ~0.04 cm on sim, ~0.4-0.8 cm on exp)
- Novel CrossAtt+HC architecture (Bragg-peak-aware features + raw pad images)
- Track number classification (1-4) + angle reconstruction (TRK pipeline)

Connection to Imai group: ML-based PID and tracking transfer to OEDO-SHARAQ analysis at UTokyo CNS.
The SAKURA (d,p) surrogate reaction program involves similar RI-beam data with comparable event
discrimination challenges.

Publication: NST-2025-0958, submitted to Nuclear Science and Techniques, November 2025.

---

## Key File Paths

- Project:             D:/obsidian/OrbitOS/20_Project/MATE-Automation.md
- Thesis:              D:/obsidian/OrbitOS/20_Project/MaterThesisPapers/Masters_Thesis.md
- NST ML paper:        D:/obsidian/OrbitOS/50_Resources/Physics/literature/MLforPhysics/NST-ML-12C12C-MATE/NST-ML-12C12C-MATE.md
- Commissioning paper: D:/obsidian/OrbitOS/50_Resources/Physics/literature/MATE/MATE_Configuration/MATE_Configuration_260309_104806.md
- NST paper figures:   D:/obsidian/OrbitOS/50_Resources/Physics/literature/MLforPhysics/NST-ML-12C12C-MATE/ (12 images)
- Codebase (external): D:\Something\research\MATE-Automation-V4