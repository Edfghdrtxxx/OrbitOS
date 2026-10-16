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

**Folder layout:** every UCAS/IMP degree document goes in `20_Project/Masters_Degree/`, one numbered subfolder per stage. Create a subfolder when its stage starts.

| Folder | Stage | Contents |
|---|---|---|
| `01_Proposal/` | 开题 | 开题报告, 登记表, 专家签名页, proposal slides, template |
| `02_Annual_Review/` | 学年考核 | 学年考核表, 打分表, 分组/成绩汇总, IMP/UCAS rules (附件2–8) |
| `03_Midterm/` | 中期考核 | — |
| `04_Thesis/` | 学位论文 | drafts, 查重, 送审 |
| `05_Defense/` | 答辩, 学位申请 | — |

Talk decks stay in `70_Presentations/` (e.g. `712_Mid-term_Assessment-0425/`).

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

### Parked until 2026-11-02

> [!note] Agent instruction
> Do not copy these into daily notes before 2026-11-02. On the first plan day on/after that date, propose which of these become weekly rows.

- Learn how to extract the ideas from literature by myself (~ 45 mins)
- Normalize the literature authors paradigm of the paper: the displayed name number should be consistent, and store it as a rule for all papers from now on. (~ 20 mins)
- Cross verify the results of angular regression to find more perspectives for confirmation and ensure all of them are consistent (~ 120 mins)
- Figure the anomaly in the distribution of energy regression of RANSAC out (~ 120 mins)
- Update the figure and overleaf project based on the anomaly analysis.
- One-shot BLOCK audit of the Physics_Informed NIM A paper (A) — [[MATE-Automation]] (`99_System/Handoff documents/paper-abd-2026-08-18/A_block_audit.md`) (~ 90 mins)
- Paper-completion chores: P1 funding, NST→NIM A packaging, blocked figures (D) — [[MATE-Automation]] (`99_System/Handoff documents/paper-abd-2026-08-18/D_paper_completion.md`) (~ 90 mins)

### Graduation map

Graduation gates, live SEP status, and the IMP defense clock: [[Graduation_Map]].

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
