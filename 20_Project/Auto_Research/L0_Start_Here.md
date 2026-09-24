---
title: Auto-Research L0 — Start Here
type: plan
status: stopped
created: 2026-09-19
revised: 2026-09-19
parent: "[[Plan_2026-09-18_GRE_Park_Research_Contract]]"
related:
  - "[[L1_Current_Campaign]]"
  - "[[L2_Contracts]]"
  - "[[L3_Forensics_Index]]"
  - "[[Auto_Research_Blueprint]]"
  - "[[Auto_Research_Mid-Automation_Report]]"
---
# L0 — Start Here

Exclusive startup state. Stop here until the current state and next action are unambiguous. Do not load the full vault or MATE repository. Current state lives **only** here and in [[L1_Current_Campaign]]; the Wave 1 mid-automation report is frozen history, not a live log.

## Primary goal

Push TPC particle-identification research forward with **authentic public-data evidence** during GRE preparation. Campaign-level claim `physics_vs_generic_with_traditional_context` applies **only where an independent physics vector exists**. **Z-01 cannot support that claim:** image-derived moments are duplicate summaries of the same pixels. Do **not** label any Z-01 arm physics-informed. Z-01 is a cross-detector **classification smoke** only.

First window (`z01_then_exp3`): attempt a **≤2 GPU-hour** Z-01 smoke first — **exactly two frozen arms**, no search, no fused/cross-attention arm. EXP3 may then use the remaining cumulative budget (up to **~14 GPU-hours**) if **its own** MATE data, provenance, approval, and preflight pass. **Z-01 success or scientific lift is not required.** If Z-01 fails, record it and continue to EXP3 when those EXP3 prerequisites independently pass. Z-01 does **not** support angle or energy regression.

## PM operating rule

The PM / context agent owns the big picture (goal, state, next action, disclosure) and **delegates code and execution by default**. Do **not** silently launch or execute research: no AutoDL, IMP, WebAccess, Zenodo download, GPU power-on, training, probe connection, or server mutation. Live launch still needs a separate four-value point-of-risk confirmation (exact host, campaign ID, data root, cap). **C-09 is `code-path mitigated / operational authorization unresolved` — not closed.** Do not read tracked plaintext credential documents. Do not treat an interview waiver request, or the env-only SSH seam, as access authorization.

## Current state (2026-09-24 — CAMPAIGN STOPPED at captain's call)

- **AutoDL server closed 2026-09-24; all training halted. Nothing relaunches.** Queue, waiters, and watchdog stood down with the box.
- **Last in-flight run killed mid-flight:** `EXP3-XA-Raw-100k-label-fix-seed42` stopped at epoch ~13/109, last read val_acc **0.9214** (trending up from 0.8913 @ ep3). Never completed — no test metrics exist for any label-fix arm.
- **Never ran:** XA-HC-label-fix, ResNet-Raw-label-fix, ResNet-HC-label-fix, conditional 4He query ablation (paired-Δ gate armed but never reached), latent-Q / attn512 mechanism pack (staged configs only). ~32h of the 60h reserve unspent.
- **Measured (all triton-vs-rest under the label bug — NOT valid 4He):** ResNet+HC 95.70%±0.23pp (n=3), ResNet+Raw 89.13%±0.19pp (n=3), XA+HC 95.63%±0.19pp (n=3), XA+Raw 87.34% (n=2: seed42 0.87116, seed0 0.87572 recovered). Seed-variance gate PASSED (<0.5pp).
- **Label bug:** Garfield HDF5 labels {3He:0,4He:1,d:2,p:3,t:4} vs default map {4:0} → all 12 completed runs trained triton-vs-rest. Recurrence guard committed (`4ac3f1c`). The valid 4He 2×2 was in flight when the box closed.
- **EXP4 attention finding:** XA-HC collapses to fixed sink (argmax token 50 in 87%, f_Bragg ≤0.02, 3 seeds); XA-Raw track-focused (f_Bragg ≈0.47). Report: `20_doc/EXP4_attention_collapse_finding.md`.
- **Mechanism (unresolved):** XA-Raw deficit −2.1pp vs RN-Raw on triton task. Ranked: H1 capacity bottleneck (64-dim attended + 68-feature head vs 512-dim GAP) > H2 noisy direct physics > H3 query poisoning > H4 label residue. Independent researcher report: `/Users/Reid Hu/firstmate/data/fm-researcher-exp3/report.md`. Council verdict: `99_System/.scratch/exp3-schedule-council/verdict.md`.
- **Tooling left behind (untested on box):** counterfactual battery `scripts/analysis/exp3_counterfactual_battery.py` + `physics_query_override`/`classifier_physics_override` hooks; `query_mode: learned` (latent query); paired-Δ ablation waiter; EXP4 metrics script. All committed, local master pushed through `ad240f7`.
- Docs: `20_doc/EXP3_campaign_narrative_draft.md`, `EXP3_results_interpretation_predraft.md` (seed-0 filled), `EXP3_garfield_noise_robustness_analysis.md`.
- Closing analysis (measured vs pending, dynamics, EXP4 numbers, resume fire-order): `20_doc/EXP3_closing_analysis_2026-09-24.md`.
- Campaign id `exp3-garfield`; fleet record `/Users/Reid Hu/firstmate/data/auto-research-exp3.md`.

## Next action

None — campaign stopped. If resumed: rerun the 4He label-fix 2×2 first (all four arms, seed 42), then the paired-Δ-gated ablation; staged configs and battery survive in git.

## Disclosure instructions

| If you need… | Open |
|---|---|
| Campaign identity, two-tier boundary, planned paths, blockers, artifact locations | [[L1_Current_Campaign]] |
| Claim lock, council, recording, security, launch gate | [[L2_Contracts]] (authority: [[Auto_Research_Blueprint]]) |
| Historical deltas, reviews, source roster, remote-storage map | [[L3_Forensics_Index]] |
| Scientific why / found / next | Z-01 `20_doc/Experiment Recordings/2026-09-19_z01-overnight-20260919-01.md`; EXP3 seed 42 `20_doc/Experiment Recordings/2026-09-21_exp3-resnet-hc-seed42.md` |
Never treat a frozen delta or this page as launch approval.
