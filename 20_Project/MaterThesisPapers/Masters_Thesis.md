---
title: Master's Thesis
type: project
status: active
area: "[[Physics Research]]"
created: 2026-02-13
due: 2027-06
priority: high
tags:
  - thesis
  - resnet
  - tpc
  - particle-id
updated: 2026-03-06
---
# Master's Thesis

## Context

**Objective:** Complete Master's thesis on deep learning-based particle identification (PID) for Time Projection Chambers (TPC) using simulated data. Primary method: ResNet-based classification. ^4d11fd

**Scope:** Simulation-only study — real experimental data is not required at this stage. The thesis demonstrates PID capability using the [[MATE-Automation]] pipeline.

**Success Metrics:**
- [ ] ResNet PID model achieves strong AUC / classification accuracy across target particle species on TPC simulation data
- [ ] Clear comparison baseline established (conventional method vs. ResNet)
- [ ] Thesis chapter structure drafted and approved by supervisor
- [ ] Thesis written and defended (June 2027)

**Key Constraints:**
- Data: TPC simulation data (Geant4-based or equivalent) — already available
- Compute: IMP lab resources; Python + ML framework (PyTorch or TensorFlow)
- Timeline: Thesis must be submitted before June 2027 (prerequisite for UTokyo Kenkyusei application)
- Dependencies: [[MATE-Automation]] codebase

---

## Actions

### Phase 1: Model Development & Results (Current)

> Current state: Simulation data available, ResNet PID model trained, preliminary AUC metrics produced.

- [ ] Document current model architecture (ResNet variant, input format, output classes)
- [ ] Record the first concrete milestone in the progress log (e.g., model architecture documented, baseline established)
- [ ] Identify remaining gaps: which particle types are underperforming?
- [ ] Run ablation or baseline comparison (e.g., conventional χ² PID vs. ResNet)
- [ ] Finalize training dataset scope and confirm reproducibility

### Phase 2: Analysis Deepening

- [ ] Evaluate model robustness: noise injection, energy range variation
- [ ] Clarify role of ViT / domain adaptation (DANN, MCD) — include in thesis if in scope; otherwise document as future work
- [ ] Produce publication-quality figures: ROC curves, confusion matrix, feature maps

### Phase 3: Thesis Writing

- [ ] Draft thesis structure and outline (discuss with supervisor)
- [ ] Write Chapter: Introduction & Motivation (TPC, PID problem, ML approach)
- [ ] Write Chapter: Methodology (ResNet architecture, training procedure, simulation setup)
- [ ] Write Chapter: Results (AUC, accuracy, comparisons, key figures)
- [ ] Write Chapter: Discussion & Conclusion
- [ ] Internal review with supervisor → revise
- [ ] Submit for defense (target: spring 2027)

---

## Progress

- 2026-02-13: [[2026-02-13]] - Project note created
- 2026-02-26: [[2026-02-26]] - Refactored from placeholder to active state. Current status: simulation data available, ResNet PID model trained, preliminary AUC metrics in hand. Thesis writing not yet started.

### Current Results Log

| Date | Milestone | Notes |
|---|---|---|
| — | Record key milestones here (e.g., baseline established, model finalized, chapter drafted) | Updated as milestones are reached |

---

## Related

- [[MATE-Automation]] — The codebase for this thesis
- [[Japan_Itinerary]] — Post-graduation plans; thesis completion is the #1 gate
- [[Fundamental_Knowledge]] — Physics depth supports thesis quality and PhD exam prep

---

## Notes

- Simulation-only is standard at this stage — do not treat absence of real data as a blocker
- Primary advisor deliverable: a clean, reproducible ML pipeline on TPC simulation + written thesis
- Thesis completion by June 2027 is a hard prerequisite for the UTokyo Kenkyusei application window
