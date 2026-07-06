---
area: "[[Physics]]"
tags:
  - nuclear-physics
  - detector-physics
  - experimental-methods
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Particle Identification

## Definition

Particle Identification (PID) is the set of experimental techniques used to determine the species — specifically the mass and charge — of particles detected in nuclear and high-energy physics experiments, typically by combining multiple independent measurements such as energy loss, [[Time-of-Flight]], and magnetic rigidity.

## Key Points

- **dE/dx method:** Measures specific energy loss in a gas or silicon medium; in a [[Time Projection Chamber]], the ionisation pattern along the track follows the [[Bethe-Bloch Formula]] and separates species at a given momentum
- **[[Time-of-Flight]] (ToF):** Determines velocity from the flight time between two [[Scintillation Detector]]s; combined with momentum yields mass
- **Magnetic rigidity (Bρ):** A charged particle's momentum-to-charge ratio is fixed by the bending radius in a magnetic field, providing one constraint for PID
- **[[Cherenkov Radiation]]:** Emitted when a particle exceeds the local speed of light in a medium; threshold or ring-imaging detectors identify species by velocity

## Examples

- The SAMURAI spectrometer at [[RIKEN Nishina Center for Accelerator-Based Science (RNC)|RIKEN]] uses a combination of Bρ, ToF, and dE/dx in its [[Time Projection Chamber]] to identify isotopes produced in direct reactions
- ALICE at the LHC combines a TPC dE/dx measurement with a ToF detector wall and a RICH counter for hadron separation across a wide momentum range

## Related Concepts

- [[Time Projection Chamber]]
- [[Time-of-Flight]]
- [[Scintillation Detector]]
- [[Coincidence Detection]]
- [[DAQ]]
- [[Dead Time]]
- [[Bethe-Bloch Formula]]
- [[Cherenkov Radiation]]
- [[Magnetic Rigidity]]
- [[Mass-to-Charge Ratio]]

## References

- W.R. Leo, *Techniques for Nuclear and Particle Physics Experiments*, Springer
- K. Kleinknecht, *Detectors for Particle Radiation*, Cambridge University Press

## Papers

- [[Acciarri 2016 — CNNs Applied to Neutrino Events in a LArTPC]] (2016) — image-based five-species PID (e−, γ, μ−, π−, p) plus dedicated e−/γ and μ−/π− separation in a LArTPC, with particles simulated uniformly over **100 MeV–1 GeV** momenta and Faster-RCNN bounding-box detection.
- [[Aurisano 2016 — CNN Neutrino Event Classifier]] (2016) — Recasts neutrino flavor ID as image classification on raw detector topology instead of reconstructed engineered features; ν_μ CC selection reaches **96.4% purity at 58.2% efficiency**.
- [[Kuchera 2019 — ML Track Classification in the AT-TPC]] (2019) — replaces the visual goodness-of-fit cut with an explicit proton-vs-other classifier decoupled from track fitting; sim-trained CNN reaches **precision 0.90** (recall 0.60) on experimental 46Ar(p,p) events.
- [[Qu 2020 — Jet Tagging via Particle Clouds]] (2020) — adding experimentally realistic PID inputs (five particle types + electric charge) lifts quark-gluon background rejection by **10–15%**, reaching 1/eps_b = **98.6 ± 1.3** at eps_s = 30%.
- [[He 2023 — ML in Nuclear Physics at Low and Intermediate Energies]] (2023) — surveys ML event/particle identification: CNN PID in MicroBooNE, CNN 0νββ classification in PandaX beating topological cuts, and n/γ discrimination in plastic scintillators via SVM/NN; Bayesian-CNN identification of α-clustering initial states reaches **95% accuracy**.
- [[Wu 2023 — ML for 12C Event Classification in AT-TPC]] (2023) — identifies 12C decay events against 13C/14N/16O photonuclear backgrounds from track images alone; **recall 98.23%** (only 1.77% of 12C events missed) on 10^5-event-per-class datasets.
- [[Dey 2024 — Point-Cloud ML for Fission Event Classification in the AT-TPC]] (2024) — rare-event classification where fission is <3% of the data: bootstrap-training on heuristic labels plus 30-70 undersampling rebalancing yields **0.997 fission recall** on the 106k-event test set.
- [[Zhang 2025 — ML Event Classification and Vertex Reconstruction with MATE-TPC]] (2025) — image-based classification of five 12C+12C fusion channels replaces per-channel track-multiplicity cuts and flags ~1.5% traditional mislabels; **~95% channel accuracy (ResNet-18: 95.83%)**.
- [[Benchikhi — Domain Adaptation for Electron Identification]] (MSc thesis, n.d.) — ML electron ID from TPC dE/dx and TOF nσ inputs at ALICE: XGBoost reaches AUPRC **0.9886** on Monte Carlo with a 99%-purity sample at 80% recall, but precision and recall collapse on real data without domain adaptation.
