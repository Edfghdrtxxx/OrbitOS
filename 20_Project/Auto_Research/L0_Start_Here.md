---
title: Auto-Research L0 — Start Here
type: plan
status: active
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

## Current state (2026-09-21)

- Outer state: `active: EXP3 cheapest-first, seed 1 training`.
- Remote training window: **Authorized until 2026-10-06 00:00 AM**; **Hard Freeze** thereafter.
- Dual-channel $(80\times48\times2)$ is the sole input invariant.
- AutoDL 176 **on** (Reid 开机). Host `3187449845-e1386a94`, SSH `:43812`. Sequential only.
- Cap **16.0** h. Spent: Z-01 **114 s** + seed 42 **166.3 min** + seed 0 **205.4 min** ≈ **6.2 h**. Remainder ~9.8 h. Seed 1 in flight.
- EXP3 seed 42: eval **0.95908**, val **0.95904**, $\alpha$ recall **0.8484**.
- EXP3 seed 0 **complete**: eval/val **0.95448**, $\alpha$ recall **0.8472**, best epoch 30, early-stop 36. Run `20260921_092858`.
- Seed 1 launched **2026-09-21 12:56:13** at `.../EXP3-ResNet-HC-100k-seed1/20260921_125613/`. Gate unmeasured until seed 1 `run_complete.json`.

## Next action

1. Let seed 1 finish. Sequential only. Do not start another train.
2. Then std of `{42,0,1}` val acc. If $>0.5$ pp, stop EXP3.
3. Do not clip Z-01. Do not train F/G/H. Do not skip cheapest-first.

## Disclosure instructions

| If you need… | Open |
|---|---|
| Campaign identity, two-tier boundary, planned paths, blockers, artifact locations | [[L1_Current_Campaign]] |
| Claim lock, council, recording, security, launch gate | [[L2_Contracts]] (authority: [[Auto_Research_Blueprint]]) |
| Historical deltas, reviews, source roster, remote-storage map | [[L3_Forensics_Index]] |
| Scientific why / found / next | Z-01 `20_doc/Experiment Recordings/2026-09-19_z01-overnight-20260919-01.md`; EXP3 seed 42 `20_doc/Experiment Recordings/2026-09-21_exp3-resnet-hc-seed42.md` |
Never treat a frozen delta or this page as launch approval.
