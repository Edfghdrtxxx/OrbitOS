# Recent Progress and Future Plans/Next Steps
**Assembled for:** Imai-san online meeting (2026-04-13 09:30)
**Assembled on:** 2026-04-12

---

## 1. What Has the User Accomplished Recently (Last ~4 Weeks)

### Thesis / MATE-Automation (ML-PID Codebase)

**Strategy pivot (~mid-March 2026):** Shifted from full legacy reproduction to 7 targeted experiments (EXP1-7):
- EXP1 - Matched Training Size: isolate CrossAtt+HC architecture effect vs data-scaling confound
- EXP2 - Fusion Mechanism Comparison: CrossAtt vs GatedFusion vs Concat on 3He/4He and 13C/14C
- EXP3 - Seed Variance: 3 seeds x 4 configs for error bars on 2x2 ablation
- EXP4 - Quantitative Attention: Bragg peak attention fraction metric (post-hoc, no retraining)
- EXP5 - Learning Curves: accuracy vs training size (10k-400k)
- EXP6 - 13C/14C 2x2 Ablation: hardest particle pair
- EXP7 - p/d/t Baseline: ResNet+Raw on 93% 3-class result (low priority, deferrable)

**TRK (Trajectory Reconstruction) pipeline shipped 2026-04-11:**
- Completed TRK implementation via /orchestrate inline-mode (4 commits)
- 7 review cycles, plotting upgrade, LaTeX tables, TRK_T6 regen, TeX compile
- 14 plot_TRK* scripts updated + 4 new scripts added
- TRK pipeline fully instrumented and documented

**Current thesis state (as of 2026-04-12):**
- Simulation data available, ResNet PID model trained, preliminary AUC metrics in hand
- 3-class result baseline ~93% (p/d/t); CrossAtt+HC architecture developed
- Core thesis writing NOT yet started (thesis note last modified 2026-03-06, 37 days stale)
- Upstream blocker: substantiation outline task (~45 min) blocks EXP3-7 and paper improvement
- EXP1 and EXP2 appear deprioritized/dropped; EXP3-7 remain pending

### Japan/UTokyo Progress

- Supervisor acceptance ACHIEVED (2026-03-09): Aoi Nori and Nobuaki Imai conditionally accepted via IMP advisor warm introduction.
- Group decision (2026-03-24): Chose Imai group (DONUTS), pending confirmation via one-on-one (today).
- Contacted Jiatai Li (2026-03-25): Emailed Chinese senior student (D3, graduated Jan 2026).
- TOEFL iBT Attempt #1 registered (2026-04-09): Booked 2026-08-30 at STN80118A Beijing; code 8002-01.
- Imai research study (March-April 2026):
  - Nobuaki_Imai_Research_Program.md created (30_Research/Physics/): OEDO-SHARAQ, DGT/0vbb, SAKURA, detector R&D
  - NotebookLM quiz on Imai research (in progress 2026-04-11/12)
  - Nobuaki_Imai_Research_Landscape.canvas visual map created
  - Factual accuracy evaluation (imai-review scratch, 2026-03-15)
  - IMP group meeting presentation prepared (2026-03-25)
- Wiki knowledge building (March 2026): ~25 atomic notes + RIB_Experiment_Workflow.md (552-line pipeline document)
- Japan trip visa (May 2026): Applied, outcome pending 2026-04-09/10

### Other Milestones
- New wiki notes: Doppler Broadening, Dark Matter, Fine Structure Constant, Schmidt Line, Magnetic Moment (2026-04-10)
- Updated Discussion for PhD excalidraw diagram (2026-04-10)
- Cross-section significance: Doppler Broadening, Reaction Rate, sigma-flux-N relationship (2026-04-12)

---

## 2. Planned Next Steps for the Thesis

**Immediate unblock:** Draft substantiation outline (~45 min): baseline to modification 1 to modification 2. Single task blocking EXP3-7 and all paper improvement. 37+ days deferred.

**Experiments (EXP3-7) priority order:**
1. EXP3 - Seed Variance (3 seeds x 4 configs): error bars on 2x2 ablation (gate: ResNet+HC std < 0.5pp)
2. EXP4 - Quantitative Attention: Bragg peak attention on existing CrossAtt model (post-hoc, no retraining)
3. EXP5 - Learning Curves: data efficiency (CrossAtt+HC vs ResNet+Raw, 10k-400k training sizes)
4. EXP6 - 13C/14C 2x2 Ablation: hardest particle pair; validate improvements extend
5. EXP7 - p/d/t Baseline: ResNet+Raw for 93% result (low priority)

**Analysis improvements pending:**
- Fix heatmap plot visualization
- Extract knowledge from Physics_Informed supplemental papers (30+ days deferred)
- CrossAtt+HC architecture inspirations from Claude Code chat (EUPE_inspiration_note.md)
- Explore vertex reconstruction in MATE-Automation

**Thesis Writing (Phase 3 - not started):**
- Draft outline with IMP supervisor
- Chapters: Introduction, Methodology, Results, Discussion/Conclusion
- Target: complete before spring 2027 exam season overlap

**WARNING - Timeline conflict:** IMP thesis defense spring 2027 may overlap UTokyo entrance exam (~Jan-Feb 2027). Front-load thesis completion.

---

## 3. What the User Plans to Discuss With Imai Regarding the PhD

**Presentation structure for 2026-04-13 meeting:**
1. Comprehension of Imai research: background, directions, approaches
2. Why I want to join you: connection between IMP research and Imai program
3. My follow-up project: planned research direction if admitted
4. My timeline and schedule

**Key questions to confirm with Imai:**
- UA: Does Special Selection require a written exam, or purely document + oral?
- UB: Oral exam format (duration, presentation, content)?
- UD: Can GRE Physics score waive a written exam component?
- UE: Unpublished minimum GRE/TOEFL score cutoffs at Physics dept?
- CRITICAL: GSGC vs Special Selection sub-track decision (Phase 0 target: 2026-04-30, D-18)
- Confirm application deadline for Special Selection/GSGC (~Dec 2026)

**Pre-meeting questions for Imai-san:**
1. What thesis topic would Imai-san envision for AFTPC + ML/PID background?
2. What does a typical week look like for PhD students?
3. Can the user connect with Jiatai Li for navigation advice?

**Research overlap with Imai program:**
- TPC + direct reactions at IMP -> OEDO-SHARAQ experiments at RIKEN RIBF
- ML-based PID (ResNet/ViT) -> transferable analysis/reconstruction tools
- AFTPC framework -> applicable to active-target TPCs with DG-M-THGEM detectors
- SAKURA program (d,p surrogate reactions constraining r-process n,gamma) = motivation for choosing Imai

**PhD research direction:**
- Surrogate nuclear reactions -> astrophysical r-process cross-sections (SAKURA)
- OEDO-SHARAQ beam experiments at RIKEN RIBF
- Potential: bring ML analysis tools from AFTPC to CNS experiments
- Open to pivoting from TPC hardware to reaction-measurement physics

---

## 4. Timeline and Milestones

**Near-Term (NOW to 2026-04-30):**
| Date | Milestone | Status |
|------|-----------|--------|
| 2026-04-13 09:30 | Online meeting with Imai-san | SCHEDULED TODAY |
| 2026-04-30 | GSGC vs Special Selection sub-track clarified | PENDING D-18 |
| 2026-04-30 | UTokyo FY2027 Special Selection guideline release | Expected late April 2026 VERIFIED |

**Mid-Term (2026-05 to 2026-12):**
| Date | Milestone | Status |
|------|-----------|--------|
| 2026-06-19 | Register for TOEFL Attempt #2 | PENDING |
| 2026-07-01 | Backstop: GSGC/SS sub-track resolved | Contingency |
| 2026-08-30 | TOEFL iBT Attempt #1 at STN80118A Beijing (arrive 08:30) | BOOKED 2026-04-09 |
| 2026-09/10 | GRE Physics Subject Test (single-shot, UTokyo code 7048) | PENDING |
| Nov 2026 | TOEFL iBT Attempt #2 | PENDING |
| Dec 5-22 2026 | Special Selection application window Period 2 | UNVERIFIED for FY2027 |

**Long-Term:**
| Date | Milestone | Status |
|------|-----------|--------|
| Jan-Feb 2027 est. | UTokyo entrance exam written + oral | UNVERIFIED dates |
| Spring 2027 | IMP master thesis defense | Writing not started |
| June 2027 | IMP graduation | Hard prerequisite for UTokyo |
| 2027-10-01 | PhD D1 enrollment UTokyo (primary) or Kenkyusei (fallback) | |

---

## 5. Previous Meeting Notes With Imai

No dedicated meeting notes exist in the vault. The 2026-04-13 meeting is the first one-on-one with Imai-san. The 2026-03-09 acceptance came via IMP advisor warm introduction only.

Preparation appeared as Priority 0 in every daily note from 2026-03-15 through 2026-04-12, without a single day skipped.

---

## 6. Source Files

- D:/obsidian/OrbitOS/90_Plans/Plan_2026-02-15_UTokyo_Oct2027_Application.md
- D:/obsidian/OrbitOS/20_Project/MaterThesisPapers/Masters_Thesis.md
- D:/obsidian/OrbitOS/20_Project/MATE-Automation.md
- D:/obsidian/OrbitOS/20_Project/Japan_Itinerary/UTokyo_RIKEN.md
- D:/obsidian/OrbitOS/20_Project/Japan_Itinerary/Supervisor_Relationship_Management.md
- D:/obsidian/OrbitOS/20_Project/Japan_Itinerary/Group_Decision_Imai.md
- D:/obsidian/OrbitOS/20_Project/Japan_Itinerary/Questions_and_Verifiable_Source.md
- D:/obsidian/OrbitOS/20_Project/Japan_Itinerary/Professors/Prof_Nobuaki_Imai.md
- D:/obsidian/OrbitOS/30_Research/Physics/Nobuaki_Imai_Research_Program.md
- D:/obsidian/OrbitOS/10_Daily/2026-04-09.md through 2026-04-12.md
