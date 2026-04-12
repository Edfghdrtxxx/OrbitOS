# Physics Background - Imai Presentation Findings
Date: 2026-04-12 | Agent: Physics Background Specialist
Purpose: Slide deck for Prof. Nobuaki Imai (UTokyo CNS) progress report

---

## 1. Physics Case / Scientific Motivation

Core problem: Understanding shell evolution in exotic neutron-rich nuclei.
Traditional magic numbers (2,8,20,28,50,82,126) change far from stability.
Tensor force monopole component reshuffles single-particle energy levels.

Why it matters:
- Spectroscopic factors C2S from direct reactions probe shell structure
- Relevance: r-process nucleosynthesis, nuclear waste transmutation, fundamental forces
- Imai DONUTS group: surrogate (d,p) reactions proxy for (n,gamma) on short-lived nuclei

Physics via OEDO-SHARAQ (Nobuaki_Imai_Research_Program.md):
- (d,p),(p,d) transfer reactions at 10-30 MeV/u in inverse kinematics -> spectroscopic factors via DWBA
- Sub-barrier Coulomb excitation -> B(E2) values and deformation in exotic nuclei
- Surrogate reactions: (d,p) proxy for (n,gamma) -> r-process and waste transmutation
Flagship 2024: 79Se(d,p) surrogate for 79Se(n,gamma), Imai first author, PLB 2024

---

## 2. Thesis Research in Context

Scope (Masters_Thesis.md):
Deep learning PID for TPC using Geant4 simulation. Primary method: ResNet classification.
- Simulation only -- standard at Masters stage
- Pipeline: MATE-Automation codebase (D:/Something/research/MATE-Automation-V4)
- State: ResNet trained, preliminary AUC metrics in hand

Why PID matters: Without clean PID, light recoils (p,d,alpha) cannot be separated from
beam-related backgrounds -- angular distributions and spectroscopic factor extraction collapses.

Experiment pivot (project_thesis_experiment_pivot.md):
7 targeted supplementary experiments (EXP1-EXP7).
Key: EXP1 (data confound), EXP2 (fusion comparison), EXP6 (13C/14C ablation).

---

## 3. Detector: MATE (Active-Target TPC at IMP HIRFL-RIBLL)

Readout Geometry (MATE-Automation.md):
- Amplification stage: GEM (Gas Electron Multiplier) -- NOT Micromegas
- Pad plane: triangular pads, 48 rows x 80 pads = 3,792 total pads (0-3791)
- Row height ~0.606 units Z; Y pitch ~0.723 units
- Central hole: rows 46-47 split (56 pads each), beam pipe region Z ~ 28.3-29.57

Operating principle (Time Projection Chamber.md):
Ionized electrons drift to segmented pad plane. 3D track = 2D pad hits + drift time (TDC).
PID via dE/dx along track following Bethe-Bloch formula.

Active-target mode (Active-Target TPC.md):
Detector gas IS the reaction target.
- Near-unity geometric efficiency for short-range recoils
- 4pi solid-angle coverage
- Thick-target luminosity without degrading energy resolution
- Operating pressure: 50-500 Torr
Dynamic range challenge: beam deposits orders of magnitude more ionization than light recoils.
Solution: Dual-gain GEM -- low gain in beam region, high gain in recoil region.

Related CNS detector: CAT-M (Nori_Aoi_Research_Program.md section 7.2):
- CNS Active Target Medium, GEM-based; active area ~280 x 310 mm2
- Dual gain: beam < 100, recoil ~ 2000
- Shared infrastructure: NUSPEQ (Aoi) and DONUTS (Imai) groups
- DG-M-THGEM prototype (Iwamoto, Ota, Imai et al., PTEP 2023): stable to 2.5e6 pps

---

## 4. PID Challenge

Why TPC PID is hard (PID.md):
- Classical dE-E, Brho-TOF struggle with overlapping distributions and pile-up
- TPC PID: dE/dx along particle tracks + silicon detector energy deposits
- Quality depends on: calibration, timing resolution (TDC), energy resolution, track reconstruction

Thesis approach:
- ResNet image classification on 2D pad hit images from simulation
- Baseline: conventional chi2 PID cuts vs ResNet (AUC metric)
- Also exploring: ViT, domain adaptation (DANN, MCD)

PID physics (delta-E-E Method.md):
- Separation parameter ~ Z^2 x A^mu (mu~1); Tassan-Got and Stephan, NIM B194, 2002
- In TPC: spatially resolved dE/dx + integrated energy = continuous dE-E system
- Bethe-Bloch: dE/dx ~ Z^2 x f(E/A); strong Z separation, weaker A separation

---

## 5. Experimental Context: HIRFL-RIBLL

Source: RIB_Experiment_Workflow.md
HIRFL: SFC (K=69) + SSC (K=450) cyclotrons -> RIBLL fragment separator
Beam energies: 30-80 MeV/u; MATE operates in this range.
RIBLL separation: Brho-dE-Brho; cocktail beam identified event-by-event.
Inverse kinematics: heavy exotic beam on light target gas (D2, He-4) inside TPC.

Upstream PID (PID.md):
1. Brho from PPAC position measurements
2. TOF from plastic scintillators
3. dE from MUSIC ionisation chamber (segmented, multiple dE samples)
-> 2D PID plots: dE vs TOF, or Z vs A/Q

---

## 6. Key Theoretical Framework

Direct Reactions and DWBA (Direct Reactions.md, DWBA.md):
- Single-step peripheral process ~1e-22 s; probes nuclear surface
- Forward-peaked angular distribution encodes transferred l -> J-pi assignment
- DWBA: C2S = (dsigma/dOmega)_exp / (dsigma/dOmega)_DWBA
- Codes: DWUCK, FRESCO, TWOFNR

Spectroscopic factors (Spectroscopic Factor.md):
C2S = |<Psi_A | Psi_{A-1} tensor phi_{nlj}>|^2
- C2S = 1: perfect single-particle state; measured ~ 0.5-0.7 x shell model (quenching)
- Requires clean PID to gate on correct reaction channel

Bethe-Bloch (Bethe-Bloch Formula.md):
-dE/dx ~ Z^2 x f(beta*gamma)/beta^2; distinct curves per species -- basis for TPC PID

Shell Evolution (Shell Evolution.md):
epsilon_j_eff = epsilon_j_bare + sum V_mono(j,jp) x n_jp
N=20 vanishes (island of inversion); N=28 weakens (Si/Mg); N=16 in O; N=34 in 54Ca

---

## 7. Key References Found in Vault

Beceiro-Novo et al., PPNP 84 (2015) 124 -- AT-TPC review
Roger et al., NIM A 895 (2018) 126 -- AT-TPC demonstrator
Nygren (1974), PEP-0144 -- Original TPC paper
Blum, Riegler, Rolandi (2008) Springer -- Particle Detection with Drift Chambers
Sauli, NIM A 386 (1997) 531 -- GEM detector
Imai et al., PTEP 2019, 023D02 -- OEDO commissioning
Iwamoto, Ota, Imai et al., PTEP 2023 -- DG-M-THGEM dual-gain prototype
Imai, PLB 2024 -- 79Se(d,p) surrogate flagship
Otsuka et al., RMP 92, 015002 (2020) -- Shell evolution review
Satchler (1983) Oxford -- Direct Nuclear Reactions
Steppenbeck, Takeuchi, Aoi et al., Nature 502 (2013) -- N=34 magic number in 54Ca

---

## 8. Key Vault Source Files

Detector:
  D:/obsidian/OrbitOS/40_Wiki/Physics_Math/Time Projection Chamber.md
  D:/obsidian/OrbitOS/40_Wiki/Physics_Math/Active-Target TPC.md
  D:/obsidian/OrbitOS/40_Wiki/Physics_Math/GEM Detector.md
  D:/obsidian/OrbitOS/20_Project/MATE-Automation.md

Physics:
  D:/obsidian/OrbitOS/40_Wiki/Physics_Math/Direct Reactions.md
  D:/obsidian/OrbitOS/40_Wiki/Physics_Math/Transfer Reactions.md
  D:/obsidian/OrbitOS/40_Wiki/Physics_Math/Particle Identification.md
  D:/obsidian/OrbitOS/40_Wiki/Physics_Math/PID.md
  D:/obsidian/OrbitOS/40_Wiki/Physics_Math/dE-dx.md
  D:/obsidian/OrbitOS/40_Wiki/Physics_Math/Bethe-Bloch Formula.md
  D:/obsidian/OrbitOS/40_Wiki/Physics_Math/Spectroscopic Factor.md
  D:/obsidian/OrbitOS/40_Wiki/Physics_Math/DWBA.md
  D:/obsidian/OrbitOS/40_Wiki/Physics_Math/Shell Evolution.md

Supervisor and facility:
  D:/obsidian/OrbitOS/30_Research/Physics/Nobuaki_Imai_Research_Program.md
  D:/obsidian/OrbitOS/30_Research/Physics/Nori_Aoi_Research_Program.md
  D:/obsidian/OrbitOS/30_Research/Physics/RIB_Experiment_Workflow.md
  D:/obsidian/OrbitOS/20_Project/MaterThesisPapers/Masters_Thesis.md

---

## 9. Gaps Not Found in Vault

Exact beam/reaction channel: Not documented. EXP6 hints at 13C/14C particle species.
MATE fill gas: Not recorded (isobutane, He-4, D2 typical for AT-TPCs at these energies).
AUC numbers and model architecture: In MATE-Automation-V4 codebase only.
MATE figure/diagram: None in vault. OEDO-SHARAQ.png exists but depicts CNS detector not MATE.