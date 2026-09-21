---
title: Auto-Research Master Index & Knowledge Map (MOC)
type: index
status: active
area: "[[Physics Research]]"
parent: "[[MATE-Automation]]"
updated: 2026-09-20
---

# Auto-Research Master Index & Knowledge Map

> **Composed Navigation Hub:** This file is the single point of entry for the Auto-Research project and long-term research automation. It connects live execution state, career-level research manifestos, nuclear physics foundations, and verified experiment recordings.

---

## 1. Live Compass (Where We Are Right Now)

| Document | Role | Description |
|---|---|---|
| **[[L0_Start_Here]]** | **The Single Active Compass** | Current state, live campaign ID, host state (`active`), and immediate next action. |
| **[[CHECKPOINT_2026-09-20]]** | **Handoff Checkpoint Packet** | Ratified invariants, locked GRE window (till Oct 6), server lifecycle, and resume guide. |
| **[[L1_Current_Campaign]]** | **Active Campaign Specs** | In-flight parameters, frozen arm configs, and active blockers. |

---

## 2. Research Manifestos & Strategic Governance

| Document | Authority | Scope |
|---|---|---|
| **[[Auto-Research Ideas from Reid Hu]]** | **Global / Career-Level Manifesto** | Reid Hu's core research philosophy: non-sycophantic teamwork, fair baseline comparisons, metric alignment, and long-term research rules. |
| **[[Auto_Research_Blueprint]]** | **Autonomous Loop Spec** | Formal protocol for MATE `src.autoresearch` execution, budget caps (≤16.0h), and point-of-risk gates. |
| **[[council_synthesis]]** | **Council Deliberation Records** | Multi-model council verdicts, mathematical definitions (3rd-moment skewness), and teardown protocols. |

---

## 3. Physics Foundations & Detector Reference

| Document | Key Topic | Core Takeaway |
|---|---|---|
| **[[MATE_Physics_Picture_and_Pipeline_Role]]** | **Active-Target Kinematics** | MATE is a reaction spectrometer for inverse kinematics ($E_x, d\sigma/d\Omega$), not merely a $Z^2 A$ isotope counter. |
| **`paper_anchor.md`** | **NIM A Manuscript Anchor** | Physics paper using ML: physics-informed ResNet-18 vs generic ResNet-18. |
| **`Comparison_Mine_Others.md`** | **Literature Positioning** | Detailed comparison of AFTPC against AT-TPC, NOvA, UrQMD, and KAN literature. |

---

## 4. Master Campaign Ledger (Chronological Experiments)

| Campaign ID | Target Data | Core Question / Hypothesis | Budget | Status | Key Findings / Artifacts |
|---|---|---|---|---|---|
| `z01-overnight-20260919-01` | NSCL AT-TPC (Z-01) | Cross-detector pipeline smoke: CPU LogReg vs ModifiedResNet-18 (2 frozen arms) | $\le 2.0$ GPU-h | Planned | Pipeline validation; no physics-informed claims on Z-01. |
| `mate-exp3-seed-variance` | MATE Garfield++ (EXP3) | 3 seeds × 4 configs: seed-robustness of NIM A $2\times 2$ table (CrossAtt vs ResNet, HC vs Raw) | $\sim 14.0$ GPU-h | Queued | Pre-gated on cheapest-first gate (std $\le 0.5$ pp). |
| `mate-campaign2-sparse-physics` | MATE Raw 3D Hits | Campaign 2: 3D PointNet/DGCNN + 3rd-moment skewness $\gamma_{1,\parallel}$ nested ablation | TBD | Future | Symmetric comparison: generic PointNet vs physics PointNet. |

---

## 5. Experiment Recordings Archive (`MATE-Automation/20_doc/Experiment Recordings/`)

*All scientific narrative lives strictly in single files per campaign. No scratch or slop.*

- `2026-09-19_z01-overnight-20260919-01.md`: Initial Z-01 pre-registered comparison and validation gates.
- `_Campaign_Template.md`: Canonical template enforcing `OBSERVATION:` and `HYPOTHESIS:` labeling.

---

## 6. Remote Compute & Infrastructure Quick Reference

- **Host Policy:** Reid opens GPU instances manually; agents execute training and trigger auto-close.
- **Experiment environment:** The actual experiment environment is remote; local work is limited to preparation, contract checks, and artifact review until the remote seam is provisioned.
- **Dead-Man's Switch:** First SSH command armed at boot: `/usr/bin/shutdown -h +${TTL_MIN}`.
- **Billing Safe-Stop:** AutoDL stops billing upon in-container halt (`/usr/bin/shutdown`).
- **Data Landing:** IMP is canonical durable storage; AutoDL ephemeral disk (`/root/autodl-tmp`) is mirrored execution.
