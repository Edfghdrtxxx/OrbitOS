---
title: Auto-Research Mid-Automation Report
type: log
status: frozen
created: 2026-09-19
area: "[[Physics Research]]"
parent: "[[Auto_Research_Blueprint]]"
related:
  - "[[Plan_2026-09-18_GRE_Park_Research_Contract]]"
  - "[[MATE-Automation]]"
  - "[[L0_Start_Here]]"
tags:
  - log
  - mate
  - auto-research
append_only: true
frozen: wave-1-historical-archive
---
# Auto-Research Mid-Automation Report

> [!warning] Frozen Wave 1 historical archive (2026-09-19)
> This file is **not** an active live-state log. Do **not** append. Current state lives in [[L0_Start_Here]] and [[L1_Current_Campaign]]. Scientific narrative lives in `/Users/Reid Hu/MATE-Automation/20_doc/Experiment Recordings/`. Machine artifacts stay under campaign roots. Path strings inside the deltas below that say `90_Plans/Auto_Research*` are historical. All existing deltas are preserved verbatim.

The remainder of this file is Wave 1 historical text. It is not launch approval and not the startup packet.

## User intent (do not paraphrase away)

- **Intention:** hand off an autonomous method-optimization loop during examination preparation so research keeps moving without daily human orchestration.
- **Primary motivation:** protect the GRE daytime a-block from parked-research anxiety and cognitive load while still producing authentic scientific progress.
- **Goal:** push the physics-informed TPC PID method toward evidence on reliable public data, beginning with Z-01, and leave certified artifacts plus a concise digest and delta trail that let the next context agent reconstruct the work and continue safely.

## How to append

Each delta is a new `## Delta N — YYYY-MM-DD` heading at the **bottom**. Required fields (copy the template):

```text
- state:
- artifacts:
- metric_or_gate:
- gpu_hours_cumulative:
- blocker:
- next_action:
```

`state` is the outer `CampaignState` (or `blocked: …` before a campaign root exists). `next_action` must be an executable instruction, not a vibe.

## Locked invariants (do not re-litigate in deltas)

Recorded 2026-09-19. If an invariant changes, append a delta that says so; do not edit this list in place.

- Spec: [[Auto_Research_Blueprint]] (Q1=**D**, Q2=**3**, Q3=**B**).
- Package: `src.autoresearch` — `CampaignManifest`, `CampaignState`, `ArmState`.
- CLI v0: `python -m src.autoresearch validate|plan|digest`. **No subprocess launch.**
- Outer: `declared → preflighted → awaiting_execution_approval → running → digesting → awaiting_next_decision → complete | budget_exhausted | blocked | failed`.
- Arm: `pending → validated → training → training_complete → evaluating → evaluated → gated → certified | blocked | failed`. Dependency failure blocks dependents.
- Fresh-only arms: `--run-subdir <campaign_id>`, never `--resume`; existing `runs/<experiment_id>/<campaign_id>/` is rejected.
- Cap: **16.0** GPU-hours, one overnight window; `max_iterations: 3`; `stagnation_limit: 2`; `max_concurrent_training: 1`. (Raised from 8.0 on 2026-09-19; see Delta 5.)
- Artifacts: `manifest.frozen.json` + `manifest.sha256`, `status.jsonl`, `generated_configs/`, `digest.md`, `campaign_complete.json` or `campaign_terminal.json`.
- Data: public Z-01 Zenodo `10.5281/zenodo.3473953` first; source SHA-256 required from bytes; `auto_acquire: false` until approved.
- Provenance fail-closed (do not weaken `execution_contract`). Secrets never from tracked docs.
- Physical interpretation/pictures remain human. No manuscript edits. No silent retries. No agent-spawned training.
- Live launch still needs point-of-risk confirmation of **exact host, campaign ID, data root, cap**. This wave: no AutoDL, IMP, WebAccess, or server mutation.

---

## Delta 0 — 2026-09-19

Wave 1 handoff (docs). No campaign root yet. No remote compute.

- **scope_decision:** Interview 2026-09-19 **Q1=D / Q2=3 / Q3=B** (verdict D). User authorized a full autonomous **method-optimization** loop toward physics-informed TPC PID on public reliable data, 8 GPU-hours for one overnight window, artifacts plus `digest.md`, no manuscript edits, append-only deltas here so a new orchestrator can continue each morning. The 2026-09-18 pre-gate **no-implementation** rule is superseded **for this session’s coordinator + blueprint + this log only**. Historical GRE-park calendar/Phase N/Q7 decisions remain. Live execution is **not** authorized by the interview; it still needs the four-value confirmation gate.
- **scientific_direction:** Physics-informed TPC PID; first public target Z-01 (AT-TPC sim `.npy`, not IMP data, not a MATE GEM surrogate). Input contract `attpc_sim_npy_v0`; `exp8_hdf5_v1` is illegal on those files.
- **verified_repository_conflicts:** From `/Users/Reid Hu/MATE-Automation` and the 2026-09-18 contract §10, still unresolved for live run:
  - **C-01** Scope: general auto-research vs declared campaign — resolved for v0 as Q1=D **method loop** on declared public inputs, not OpenAlex/Karpathy.
  - **C-02** No campaign manifest — Wave 1 schema in the blueprint; code owner adds `CampaignManifest`.
  - **C-03** No generic DAG/state machine — outer/arm states locked above.
  - **C-04** Uneven provenance — must not weaken `execution_contract`; eval/certification still EXP8-shaped.
  - **C-05** Resource policy not enforced — preflight required; not executed this wave.
  - **C-06** No generic retry policy — v0: **no silent retries**; preserve partial artifacts.
  - **C-07** Generic eval certification weaker than EXP8 — still a live-run blocker for non-EXP8 arms.
  - **C-08** Input acquisition outside runner — v0 consumes pre-staged hashed files only; Z-01 not on disk here; **no auto-acquire**.
  - **C-09** Tracked credentials in server docs — security preflight fail-closed; do not read those files.
  - **C-10** Sequential training, no agent subprocess — v0 CLI does not spawn processes.
  - **Extra (2026-09-19):** MATE runner forbids `--run-subdir` with `--resume` and rejects existing run dirs; EXP8 certifier requires fresh start_epoch 0; human approval must be a recorded JSON gate, not a boolean; gate accessors must be explicit; Z-01 npy ≠ EXP8 9-file HDF5.
- **state:** `blocked: awaiting implementation and live-execution confirmation`
- **artifacts:**
  - `90_Plans/Auto_Research_Blueprint.md` (spec)
  - `90_Plans/Auto_Research_Mid-Automation_Report.md` (this log)
  - surgical delta on `90_Plans/Plan_2026-09-18_GRE_Park_Research_Contract.md` (callout + §6)
  - MATE `src.autoresearch` + one unit test file (code owner; not launched)
- **metric_or_gate:** none (no arm evaluated)
- **gpu_hours_cumulative:** 0.0 / 8.0
- **blocker:** Wave 1 implementation still landing; no `human_approval.json`; Z-01 files/hashes absent; C-09 secret injection unresolved; v0 must not spawn training.
- **next_action:** Finish Wave 1 `src.autoresearch` (`validate`/`plan`/`digest` only). Parent runs **one** local-cold smoke check. Do **not** access AutoDL/IMP/WebAccess, do **not** download Zenodo 3473953, do **not** train. Live `running` waits on point-of-risk confirmation of exact host, campaign_id, data_root, and cap ≤ 8.0.

**Not launched:** no GPU job, no dataset fetch, no server state change.
## Delta 1 — 2026-09-19

Wave 1 implementation landed and passed the focused cold-profile unit suite. No remote execution.

- **state:** `blocked: awaiting live-execution confirmation`
- **artifacts:**
  - MATE `src/autoresearch/` coordinator package (`validate`, `plan`, `digest`)
  - `tests/test_autoresearch_coordinator.py`
  - blueprint and append-only report above
- **metric_or_gate:** no scientific arm evaluated; coordinator tests pass (`15/15`)
- **gpu_hours_cumulative:** 0.0 / 8.0
- **blocker:** Z-01 files and byte hashes are absent; no `human_approval.json`; tracked-secret remediation and live host identity remain unresolved. The v0 coordinator intentionally does not launch subprocesses.
- **next_action:** Prepare a concrete campaign manifest and public-input hash record only after the user supplies the exact live host, campaign ID, data root, and cap; then obtain point-of-risk confirmation before any AutoDL/IMP/WebAccess or training action.

**Verification:** `python3 -m unittest tests.test_autoresearch_coordinator` → 15 tests passed. `python3 -m src.autoresearch --help` loads the CLI. No GPU job, dataset fetch, or server state change.

## Delta 2 — 2026-09-19

Wave 1 hardening and progressive-disclosure context contract completed. No remote execution.

- **disclosure_level:** L0/L1 only; consulted the blueprint, this report, coordinator package, and focused tests. No full-repository load, AutoDL, IMP, WebAccess, dataset fetch, or server mutation.
- **state:** `blocked: awaiting live-execution confirmation`
- **artifacts:** coordinator schema/preflight/state-machine hardening; explicit `--write-frozen` freeze path; protected digest-root checks; user-intent and progressive-disclosure sections in [[Auto_Research_Blueprint]] and this report.
- **metric_or_gate:** no scientific arm evaluated; hardened coordinator tests pass (`26/26`).
- **gpu_hours_cumulative:** 0.0 / 8.0
- **blocker:** Z-01 files and byte hashes are absent; no matching `human_approval.json`; exact live host, campaign ID, and approved data root are not recorded; tracked-secret remediation remains unresolved.
- **next_action:** A future orchestrator starts at L0, then prepares a byte-hashed Z-01 input manifest and campaign manifest. It must stop at `awaiting_execution_approval` until the exact four-value launch confirmation is recorded.

**Verification:** `python3 -m unittest tests.test_autoresearch_coordinator` → 26 tests passed. `python3 -m src.autoresearch --help` loads the hardened CLI. No GPU job, dataset fetch, or server state change.

## Delta 3 — 2026-09-19

Final cold-profile hardening completed after an adversarial review.

- **disclosure_level:** L0/L1; no remote or full-repository context load.
- **state:** `blocked: awaiting live-execution confirmation`
- **artifacts:** strict approval binding, symlink-safe input resolution, bidirectional source/input-contract checks, parsed-and-bound `campaign_inputs.json`, malformed terminal-record rejection, protected digest writes, and 33 focused regression tests.
- **metric_or_gate:** no scientific arm evaluated; coordinator suite passes (`33/33`).
- **gpu_hours_cumulative:** 0.0 / 8.0
- **blocker:** live host/campaign/data-root values, Z-01 bytes/hashes, and point-of-risk approval are still absent. The coordinator remains v0 dry-run only and never launches a training subprocess.
- **next_action:** On a future handoff, read this delta and the L0 blueprint sections; do not advance to `running`. First stage the public input bytes, compute hashes, create the exact frozen manifest, and stop at the four-value launch confirmation.

**Verification:** `python3 -m unittest tests.test_autoresearch_coordinator` → 33 tests passed. No GPU job, dataset fetch, or server state change.

## Delta 4 — 2026-09-19

Input-manifest, approval, terminal-record, and protected-path contracts aligned with the authoritative blueprint after the final adversarial pass.

- **disclosure_level:** L0/L1; current package and targeted tests only.
- **state:** `blocked: awaiting live-execution confirmation`
- **artifacts:** nested `campaign_inputs.json` schema; required input-manifest byte hash; exact approval/data-root binding; symlink/protected-input rejection; canonical digest-root equality; nested terminal payload validation.
- **metric_or_gate:** no scientific arm evaluated; coordinator suite passes (`40/40`).
- **gpu_hours_cumulative:** 0.0 / 8.0
- **blocker:** no staged Z-01 bytes/hashes, no exact live host/campaign/data-root approval, and no live launcher by design.
- **next_action:** Future context agent starts at L0, validates a concrete frozen campaign locally, then stops at `awaiting_execution_approval`; live compute is a separate point-of-risk action.

**Verification:** `python3 -m unittest tests.test_autoresearch_coordinator` → 40 tests passed. `python3 -m src.autoresearch --help` loads the final CLI. No GPU job, dataset fetch, or server state change.

## Delta 5 — 2026-09-19

Refocused the control plane on authentic research progress: 16.0 GPU-hour hard cap, planned canonical input paths, and progressive-disclosure files. No live actions.

- **disclosure_level:** L0
- **decision_cap:** hard cap raised 8.0 → **16.0** cumulative GPU-hours. `max_iterations`, stagnation, sequential training, fresh-only, `auto_acquire: false`, approval binding, and no-subprocess v0 are unchanged.
- **decision_paths:** Prefer IMP as durable canonical landing and AutoDL as execution mirror. Planned/unverified targets (do **not** claim they exist):
  - IMP: `/home/stu_2021/huzh_2022/NimpSim_workdir_after/Mate/ver2/autoresearch_inputs/z01/`
  - AutoDL: `/root/autodl-tmp/MATE-Automation-V4/autoresearch_inputs/z01/`
- **provisional_values:** interview only, **not** launch approval (status `provisional/unverified`): host `78f345b3a1-6b25251c`, campaign ID `z01-overnight-20260919-01`, cap **16.0**, `auto_acquire: false`, `data_root: not staged`.
- **state:** `blocked: awaiting live-execution confirmation`
- **artifacts:**
  - `90_Plans/Auto_Research/L0_Start_Here.md`
  - `90_Plans/Auto_Research/L1_Current_Campaign.md`
  - `90_Plans/Auto_Research/L2_Contracts.md`
  - `90_Plans/Auto_Research/L3_Forensics_Index.md`
  - MATE `HARD_MAX_GPU_HOURS = 16.0` / `DEFAULT_MAX_GPU_HOURS = 16.0`
- **metric_or_gate:** no scientific arm evaluated; no tests run in this wave
- **gpu_hours_cumulative:** 0.0 / 16.0
- **blocker:** Z-01 bytes/hashes absent; planned remote directories unverified; no four-value launch confirmation; v0 does not launch subprocesses.
- **next_action:** Next context agent reads only [[Plan_2026-09-18_GRE_Park_Research_Contract]] then [[L0_Start_Here]]. Do not access AutoDL/IMP/WebAccess, do not download Zenodo 3473953, do not train. Delegate staging of hashed Z-01 inputs toward the planned IMP target (and AutoDL mirror). Freeze a local campaign at cap 16.0 and stop at `awaiting_execution_approval`.

**Not launched:** no GPU job, no dataset fetch, no server state change.
