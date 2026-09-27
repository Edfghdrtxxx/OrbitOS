# Auto-research index

Firstmate's fleet-handle index for auto-research. Current campaign: exp3-garfield (EXP3 Garfield).
Renamed 2026-09-25 from `auto-research-exp3.md` at the captain's request, because "exp3" read as if the file covered only EXP3.
Captain 2026-09-25: firstmate keeps only indexes, with clear paths and locations; canonical content lives in OrbitOS docs.
Log entries, findings and reports go to docs, never here.

## Where things live (canonical)
- Docs root: `/Users/Reid Hu/OrbitOS/20_Project/Auto_Research/docs/` (README.md indexes it)
- Campaign log: `docs/00_Campaign/exp3-garfield.md` (complete through 2026-09-25 11:16)
- Where-things-live index (servers and their roles): `docs/00_Campaign/where-things-live.md`
- Halt chapter and resume point (pending list, artifact map): `docs/00_Campaign/fm-ar-halt.md`
- Science startup chain: `20_Project/Auto_Research/INDEX.md` → `L0_Start_Here.md` (carries this record's pointer) → `L1_Current_Campaign.md`
- Launch roster and doctrine: `20_Project/Auto_Research/Auto-Research Ideas from Reid Hu.md` (never edit)
- Scout and worker reports: filed in docs, each as a chapter named after its task id (`docs/<area>/fm-ar-<name>.md`; `docs/SPLIT_MANIFEST.json` maps most of them). Firstmate's `data/fm-ar-*/report.md` copies were removed 2026-09-25 (captain: one global index, not a pointer per file). Two stay until their captain calls are answered, because those calls cite their sections: `data/fm-ar-label-settle/report.md` and `data/fm-ar-nimpsim-cost/report.md`.

## Fleet handles
- Status: PAUSED since 2026-09-25 (temporary halt). No research threads and no GPU work until the captain reopens them.
- Lead: none. The omp lead session ended 2026-09-25 14:20 after its CPU-box report, as the captain planned; resume with `omp --resume 01a0bf45-69fc-743d-9460-ff4a1fda7034` (cwd `/Users/Reid Hu/OrbitOS`).
- Armed watches: none. `when-ar-cpu-box` fired and was retired 2026-09-25. The CPU-box session report is filed at `docs/00_Campaign/fm-ar-cpu-box.md` (OrbitOS PR #17, https://github.com/Edfghdrtxxx/OrbitOS/pull/17); firstmate's copy went to the Mac Trash folder `fm-ar-reports-2026-09-25/`. Box 176 is idle in no-GPU mode; small outputs also sit in the Mac's `MATE-Automation/runs/` (staging, move to IMP once reachable).
- Servers: IMP (first priority for storage and CPU jobs; currently unreachable, `docs/00_Campaign/fm-ar-imp-resume.md`; connection doc MATE-Automation `20_doc/servers/IMP_server_context.md`). AutoDL box 176 (scratch; holds the only copies of the EXP3 checkpoints and the Garfield data for now; inventory in `docs/00_Campaign/fm-ar-box-evac.md`). Mac (temporary staging only).
- Captain calls open (backlog): fm-ar-gpu-reserve-choice, fm-ar-label-settle-captain-calls.
- Running: none. The jump-host reports are filed at `docs/00_Campaign/fm-ar-jump-net.md` and `docs/00_Campaign/fm-ar-jump-route.md` (OrbitOS PR #15, https://github.com/Edfghdrtxxx/OrbitOS/pull/15). Then /reckon, excluding the jump host and the vault rule.
- Dispatch queue (backlog): fm-ar-t1-labelfix-2x2 and fm-ar-t3-exp2-retrain wait on the GPU decision.

## Index history
- 2026-09-25 11:30: slimmed from the full running record after OrbitOS PR #14 (https://github.com/Edfghdrtxxx/OrbitOS/pull/14) filed the last entries. Every entry was checked against docs; the only one absent was the 2026-09-25 00:11 bookkeeping note that OrbitOS PR #12 (https://github.com/Edfghdrtxxx/OrbitOS/pull/12) merged the final pre-halt filing. A copy of the full record is in the Mac Trash as `auto-research-exp3.full-record-2026-09-25.md`.
- 2026-09-26: record moved from the main firstmate home to the auto-research second-mate home on intake (this path). A pointer stub remains at the old main-home `data/auto-research-index.md` until OrbitOS `20_Project/Auto_Research/L0_Start_Here.md` and `docs/00_Campaign/where-things-live.md` are repointed here.
