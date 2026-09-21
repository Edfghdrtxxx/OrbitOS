---
title: Auto-Research Checkpoint & Handoff Packet
type: plan
status: active
date: 2026-09-20
author: Multi-Model Council (Gemini 3.1 Pro, Grok 4.6, SWE-2, GPT-5.6-Sol, Main)
parent: "[[L0_Start_Here]]"
related:
  - "[[INDEX]]"
  - "[[Auto_Research_Blueprint]]"
  - "[[Plan_2026-09-18_GRE_Park_Research_Contract]]"
  - "[[MATE_Physics_Picture_and_Pipeline_Role]]"
---

# Auto-Research Checkpoint & Handoff Packet (2026-09-20)

> **Purpose:** This file freezes the exact project state, ratified decisions, and open hypotheses as of **2026-09-20**. The project is currently **parked** for Reid Hu's upcoming consultation with his mentor and to protect his Physics GRE preparation. Any future agent picking up this project must start here and in `[[L0_Start_Here]]`.

---

## 1. Project Status & Timing Boundaries

* **Current Status:** `active: resumed_2026-09-20 (mentor discussion delayed; completing auto-research execution pipeline)`.
* **Authorized Remote Training Window:** **Now → October 6, 2026, 0:00 AM**.
  - During this window, remote GPU training is authorized under strict caps ($\le 16.0$ cumulative GPU-hours; $\le 2.0$h for Z-01 smoke).
* **GRE Hard Freeze:** **October 6, 2026, 0:00 AM → November 1, 2026 (Exam Date)**.
  - Zero remote server operations or overnight training permitted. Reid's cognitive bandwidth and daytime a-blocks are 100% reserved for GRE Physics prep.

---

## 2. Ratified Invariants & Architectural Scope

1. **The Sole Primary Input Invariant:**
   - **Dual-channel 2D image projection ($80 \times 48 \times 2$: Charge Deposition + Drift Time)** is the ONLY fixed input representation for MATE image campaigns.
2. **Backbone Status (ResNet-18 Demoted):**
   - `ModifiedResNet18` is **NOT** an invariant; it is an open hypothesis and historical reference control.
   - Flaws identified: aggressive early spatial downsampling ($80 \times 48 \rightarrow 10 \times 6$), parameter overcapacity ($\sim 11.2\text{M}$ params), and lack of coordinate-awareness.
   - Alternatives queued for search: **CoordConv-Light** ($\sim 0.8\text{M}$), **ConvNeXt-Atto/Femto** ($\sim 3.7-5.2\text{M}$), **Compact ViT (Patch-4)** ($\sim 3\text{M}$), and **MATE-Custom4** ($\sim 0.5\text{M}$).
   - Methodological constraint: Any new backbone must be evaluated as a **symmetric pair** ($\Delta_{\text{phys}}(A) = \text{Score}(A, \text{Physics}) - \text{Score}(A, \text{Generic})$).
3. **Physics Vector Evolution:**
   - $P_2$ ($M + \text{Inertia Tensor}$) is the primary baseline.
   - $P_3$ ($P_2 + \text{Longitudinal Skewness } \gamma_{1,\parallel}$) is endorsed as a nested ablation on MATE to capture Bragg peak directionality.
   - 3D Point Cloud (PointNet/DGCNN) is queued for Campaign 2.
4. **Classification Head Architecture (Jev's Decision Paradigm):**
   - **Core Hypothesis:** Explore adopting TypeSafe Jev's System One non-autoregressive decision architecture (State Encoder + Multi-Aspect Parallel Calibrated Heads) to replace naive, uncalibrated softmax linear layers.
   - **Target Impact:** Directly fixes MATE's open-set vulnerability (high false-target rates on unseen reaction channels) by producing epistemically calibrated posterior probabilities and simultaneously predicting species ($p, d, t, ^3\text{He}, \alpha$), active-volume containment, and track-quality metrics in a single forward pass.
   - **Detailed Reference:** Preserved in `99_System/.scratch/auto_research_ideas/jev_architecture_for_classification.md`.

---

## 3. Simplified Server Lifecycle Protocol

Reid Hu rejected the over-engineered multi-tier watchdog protocol in favor of a lean, reliable workflow:
1. **Power-On:** Reid manually powers on the AutoDL/IMP GPU instance from his side.
2. **Execution:** The agent connects via SSH (using injected tokens/keys via environment variables, adhering to C-09), runs the pre-registered training campaign, and syncs artifacts.
3. **Auto-Close:** Upon completion or error, the agent attempts automatic shutdown:
   ```bash
   /usr/bin/shutdown -h now
   ```
   *(AutoDL platform officially halts billing when the container OS halts).*
4. **Human Verification:** Reid performs a simple 1-minute visual glance at the console each morning. Zero cognitive stress.
5. **Dead-Man's Switch (Optional / Recommended):** If running unattended overnight before Oct 6, the agent arms `/usr/bin/shutdown -h +${TTL_MIN}` at boot.

---

## 4. Grounded Nuclear Physics Reference

The misunderstanding regarding $Z^2 A$ has been permanently resolved. The comprehensive reference document is at:
📁 **`30_Research/Physics/MATE_Physics_Picture_and_Pipeline_Role.md`**

* **Core Truth:** MATE is an Active-Target TPC for inverse kinematics reaction reconstruction ($E_x, d\sigma/d\Omega$). PID is the gatekeeper that labels particle mass $m$ for relativistic kinematics, not the isolated end goal.
* **Metric Alignment Principle (Point 9):** To fairly benchmark ML against classical RANSAC, convert RANSAC track length $L$ into kinetic energy $E_k$ using the identical, SHA-256-pinned range-energy table (`4he_range_lise_hubert_05bar.csv`).

---

## 5. Instructions for the Resuming Agent

When Reid Hu instructs you to resume this project:
1. **Do NOT re-read the full repository or past logs.** Load only `[[L0_Start_Here]]` and `[[INDEX]]`.
2. **Review Mentor Feedback:** Ask Reid what guidance his mentor provided regarding the paper outline, detector scope, or publication timeline.
3. **Respect the October 6 Deadline:** If today's date is between 2026-10-06 and 2026-11-01, **REFUSE** live execution and keep the system parked.
4. **Follow the Composed Map:** All campaign files, specs, and recordings are indexed in `[[INDEX]]`.
