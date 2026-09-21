---
title: Auto-Research L3 — Forensics Index
type: plan
status: active
created: 2026-09-19
revised: 2026-09-19
parent: "[[L0_Start_Here]]"
related:
  - "[[Auto_Research_Mid-Automation_Report]]"
  - "[[Auto_Research_Blueprint]]"
---
# L3 — Forensics Index

Load only for a reproducibility audit, named blocker, or explicit re-planning. Pointers only — do not ingest these files by default. L0–L3 live under `20_Project/Auto_Research/`, **not** `90_Plans/`.

## Historical deltas (frozen)

Wave 1 archive (do **not** append; not live state): `20_Project/Auto_Research/Auto_Research_Mid-Automation_Report.md`

| Delta | What it recorded |
|---|---|
| 0 | Wave 1 docs; Q1=D / Q2=3 / Q3=B; cap then 8.0; no launch |
| 1 | Coordinator landed; 15 cold tests (historical) |
| 2 | Progressive-disclosure contract in the blueprint; 26 tests (historical) |
| 3 | Adversarial hardening; 33 tests (historical) |
| 4 | Input-manifest / approval / terminal / protected-path alignment; 40 tests (historical) |
| 5 | Cap **16.0**; planned IMP/AutoDL input targets; L0–L3 files; **no live actions** |

Prior deltas that say `0.0 / 8.0` are historical. Current hard cap is **16.0**. Current state is **only** in [[L0_Start_Here]] / [[L1_Current_Campaign]].

## Reviews and contracts

- `90_Plans/Plan_2026-09-18_GRE_Park_Research_Contract.md` — GRE-park calendar, Phase N, §10 C-01–C-10, lightweight entrypoint into this project. Contract §10.4 is **superseded** by the Blueprint (historical text preserved).
- `20_Project/Auto_Research/Auto_Research_Blueprint.md` — autonomous-loop authority (states, schema, preflight, launch checklist)
- `20_Project/Auto_Research/L0_Start_Here.md` — exclusive startup state
- `20_Project/Auto_Research/L1_Current_Campaign.md` — two-tier campaign packet
- `20_Project/Auto_Research/L2_Contracts.md` — claim / council / security map
- Contract §9 review log — grill-me lock, 2026-09-19 implementation supersession, project-folder move
- Deltas 3–4 — last recorded adversarial coordinator reviews (frozen)

## Scientific recordings

Legal home for scientific why / found / next: `/Users/Reid Hu/MATE-Automation/20_doc/Experiment Recordings/`

- `README.md` — architecture (one Markdown file per campaign until ≥3 campaigns)
- `_Campaign_Template.md` — Why / Pre-registered comparison / Found / Next / Artifact links / Review
- `2026-09-19_z01-overnight-20260919-01.md` — current campaign record

Machine artifacts stay under campaign roots; recordings **link** hashed files and do not paste raw JSON/configs.

## Source evidence (MATE)

Repo: `/Users/Reid Hu/MATE-Automation/`

| Pointer | Why |
|---|---|
| `src/autoresearch/` | v0 coordinator (`validate` / `plan` / `digest`) |
| `tests/test_autoresearch_coordinator.py` | Cold-profile coordinator tests |
| `src/execution_contract.py` (`TRAINING_SOURCE_HASH_ROSTER`) | Provenance roster the manifest must hash exactly |
| `src/run_experiment.py` | Training seam `plan` may emit (v0 must not Popen) |
| `src/exp8_contract.py` | EXP8 HDF5 contract; illegal on Z-01 `.npy` |
| `scripts/remote/run_exp8_full.sh` | Sequential GPU-lock prototype |
| `openspec/changes/EXP3-seed-variance/propose.md` | EXP3 3×4 seed-variance proposal with conditional first gate |
| `AGENTS.md` | Sequential training; no agent-subprocess training |

## Remote storage map

- `90_Plans/Windows_PC_Sale/remote-storage-map.md` — Drive / IMP / AutoDL landing matrix (PC-sale context; not a Z-01 existence claim)
- Documented, **unverified** compute roots and **planned** Z-01 targets: [[L1_Current_Campaign]]

## Do not open for credentials (C-09, unresolved)

These exist as forensic path names only. Interview requested a C-09 waiver; **parent still requires direct confirmation** before anyone reads plaintext credential documents. If the only known password location is a tracked file, the campaign stays `blocked`:

- `/Users/Reid Hu/MATE-Automation/20_doc/servers/remote_GPU_context.md`
- `/Users/Reid Hu/MATE-Automation/20_doc/servers/IMP_server_context.md`

## Full-repository forensics (last resort)

Open only the file named by the current blocker. Do not load the whole vault, `10_Papers-Thesis/`, GRE notes, or manuscript paths. Physical interpretation remains human.
