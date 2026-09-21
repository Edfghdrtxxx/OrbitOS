---
title: Auto-Research Autonomous Loop Blueprint
type: plan
status: active
created: 2026-09-19
revised: 2026-09-19
area: "[[Physics Research]]"
parent:
  - "[[Plan_2026-09-18_GRE_Park_Research_Contract]]"
  - "[[MATE-Automation]]"
related:
  - "[[Auto_Research_Mid-Automation_Report]]"
  - "[[L0_Start_Here]]"
  - "[[L1_Current_Campaign]]"
  - "[[L2_Contracts]]"
  - "[[L3_Forensics_Index]]"
tags:
  - plan
  - mate
  - auto-research
session: 2026-09-19 Q1=D Q2=3 Q3=B; direction z01_then_exp3
authority: autonomous-loop-spec
live_execution: gated
---
# Auto-Research Autonomous Loop Blueprint

This file is the **authoritative autonomous-loop spec**. MATE package `src.autoresearch` (`CampaignManifest`, `CampaignState`, `ArmState`) must implement it. CLI: `python -m src.autoresearch validate|plan|digest`. v0 **must not** spawn training or evaluation subprocesses. The Wave 1 mid-automation report is a **frozen historical archive**, not live state and not a second spec. Current state lives in [[L0_Start_Here]] / [[L1_Current_Campaign]]. Scientific narrative lives in Experiment Recordings. Machine artifacts stay under campaign roots.

Progressive disclosure (L0 first; do not load the full repository): [[L0_Start_Here]], [[L1_Current_Campaign]], [[L2_Contracts]], [[L3_Forensics_Index]]. The GRE-park contract at `90_Plans/Plan_2026-09-18_GRE_Park_Research_Contract.md` is the lightweight continuation entrypoint into this project; this blueprint remains loop authority. Contract §10.4 is historical and superseded here.

> [!danger] Live execution is not authorized by this document
> Do **not** access AutoDL, IMP, private credentials, or WebAccess. Do **not** download Zenodo files, power a GPU box, train, or alter server state. **C-09 is unresolved:** an interview request to waive it is not authorization to read tracked plaintext credential documents. Launch requires a separate point-of-risk confirmation that records the **exact host, campaign ID, data root, and GPU-hour cap**, plus safe IMP access while C-09 remains open.

> [!info] Session lock (2026-09-19)
> Wave 1 interview **Q1=D / Q2=3 / Q3=B**. Direction interview: first window `z01_then_exp3`; campaign-level claim `physics_vs_generic_with_traditional_context` **where an independent physics vector exists**; council `strategic_gates`; Z-01 route `imp_then_autodl`; recording `labelled_hypotheses`. **Strategic council (Z-01):** physics-informed name unwarranted on Z-01; traditional context mandatory; two frozen arms; no fused arm. Historical GRE-park decisions in [[Plan_2026-09-18_GRE_Park_Research_Contract]] remain; the 2026-09-18 **no-implementation** rule is superseded for this session’s coordinator + docs only.

## 0. Authorized scope

| ID | Choice | Meaning |
|---|---|---|
| Q1 | **D** | Full autonomous **method-optimization loop** toward physics-informed TPC PID on public reliable data. Not a literature fleet, not Karpathy `autoresearch`, not manuscript writing. **This window does not spend that loop on Z-01 architecture search.** |
| Q2 | **3** | At most **16.0 GPU-hours** for **one overnight window**. Cumulative, including failed arms. First-window split: attempt **≤2.0** Z-01 classification smoke **first**; remaining budget (up to **~14.0**) may go to MATE EXP3 if **EXP3's own** MATE data, provenance, approval, and preflight pass. **Z-01 success or scientific lift is not required.** If Z-01 fails, record it and continue to EXP3 when those EXP3 prerequisites independently pass. Hard cap raised 2026-09-19 from the original 8.0 interview number; window count unchanged. |
| Q3 | **B** | Certified artifacts **plus** `digest.md`. Digest may summarize metrics and failures. It must not make physical claims or write paper prose. Scientific why/found/next belong in Experiment Recordings. |

**Scientific direction:** campaign-level claim `physics_vs_generic_with_traditional_context` holds **only where an independent physics vector exists**. **Z-01 cannot support that claim.** There is no independent physics vector; image-derived moments are duplicate summaries of the same pixels. **Do not label any Z-01 arm physics-informed.** First data target is survey row **Z-01**: [Zenodo 10.5281/zenodo.3473953](https://zenodo.org/records/3473953) AT-TPC **sim** 2D projections (⁴⁶Ar(p), 8000 unlabeled + 2400 labelled `.npy`, proton vs carbon; four publisher-MD5 files). arXiv [2008.02757](https://arxiv.org/abs/2008.02757): 128×128 single-channel projections summed over time; published VGG16+k-means clusters were near-perfect. FRIB Micromegas ≠ MATE GEM; this is a **public-data capability / classification smoke**, not a MATE-detector surrogate, not a physics-informed-vs-generic test. **Z-01 supports classification only. It does not support angle or energy regression.**

**Authorized autonomy (this window):** Z-01 is a **fixed two-arm ≤2 GPU-hour classification smoke** (pipeline / cross-detector check), attempted first. **No architecture search. No fused or cross-attention arm. No tuning after seeing scores.** EXP3 follows the existing 3 seeds × 4 configs proposal with its conditional first gate — not a new search — and is **not** gated on Z-01 success. v0 of `src.autoresearch` **plans** steps and writes artifacts; it does not launch them. Broader generated-config iteration remains a Q1=D outer goal and is **not** authorized as this window’s work.

**Not authorized under Q1=D:** automatic dataset acquisition; OpenAlex/INSPIRE/catalog fleets; physical interpretation or pictures; edits to `10_Papers-Thesis/`, `main.tex`, Overleaf, daily priorities, or GRE notes; reading credentials from tracked docs; silent retries; agent-subprocess training; mutating tracked `configs/`; Z-01 angle/energy claims; labelling any Z-01 arm physics-informed; adding a fused Z-01 arm because LogReg scores high; waiving C-09 without direct confirmation.

## 0.1 User intent and context contract

Recorded from the user on **2026-09-19**. Context agents must preserve these statements when starting from scratch:

- **Intention:** hand off an autonomous method-optimization loop during examination preparation so research keeps moving without requiring daily human orchestration.
- **Primary motivation:** protect the GRE daytime a-block from the anxiety and cognitive load of parked research, while still producing authentic scientific progress rather than a decorative plan or an unreadable review queue.
- **Goal:** push TPC particle-identification methods toward evidence on reliable public data, beginning with a Z-01 classification smoke (attempted first, ≤2 h, **not** a physics-informed claim) and then MATE EXP3 on remaining budget when **EXP3's own** preflight passes (Z-01 success not required), and return certified structured artifacts plus a concise digest and Experiment Recordings. The next context agent must reconstruct state from L0/L1 without rereading the whole repository or treating the frozen Wave 1 report as live.

These are the product requirements. Safety, provenance, human physics interpretation, and the live-launch confirmation gate remain hard invariants; they are not reasons to silently replace the goal with documentation-only work.

## 0.2 Progressive-disclosure context loading

The context mechanism is intentionally layered, like the vault memory system:

| Level | Load first | Load only when needed |
|---|---|---|
| **L0 — startup packet** | [[L0_Start_Here]]: primary goal, PM rule, **current state**, next action. Exclusive live state with L1. | Frozen Wave 1 report; full Blueprint; Experiment Recordings unless the next action is scientific. |
| **L1 — campaign packet** | [[L1_Current_Campaign]] (two-tier identity, planned paths, blockers, Z-01 capability). If a campaign root exists: `manifest.frozen.json`, `manifest.sha256`, `status.jsonl` tail, `digest.md`. | Relevant arm config, evaluator, and artifact manifests only. |
| **L2 — verification packet** | [[L2_Contracts]] plus exact source files named by the current blocker, gate, or failed transition; input manifest and hashes; approval record. | Full MATE repository, historical logs, or unrelated task families. |
| **L3 — forensic packet** | [[L3_Forensics_Index]], then complete logs, **frozen** prior deltas, source-roster details, and external/public-source records. | Only for a reproducibility audit or explicit re-planning decision. |

Every morning orchestrator must begin at L0, advance one level at a time, and keep current state in L0/L1. Never load the full vault, full MATE repository, or all historical reports by default. **Do not append** [[Auto_Research_Mid-Automation_Report]]. This blueprint remains the authority for invariants and transitions.

## 0.3 PM operating mode

The context agent / PM owns the big picture — primary scientific goal, current state, next action, and disclosure — and **delegates code and execution by default**. It may coordinate and document. It must **not** silently launch or execute research: no AutoDL, IMP, WebAccess, dataset download, GPU power-on, training, or server mutation. Server lifecycle (CLI then WebAccess) is allowed only after **exact** approval and must not scrape tracked secrets.

Live execution remains a separate four-value point-of-risk confirmation (exact host, campaign ID, data root, cap ≤ 16.0) **and**, while C-09 is unresolved, direct confirmation of safe IMP access. Implementation of staging, hashing, and coordinator changes is delegated work, not an implied launch.

## 0.4 Planned versus verified remote paths

Do not treat documented roots as live-verified, and do not treat planned targets as existing.

| Kind | Path | Status |
|---|---|---|
| IMP durable MATE root | `/home/stu_2021/huzh_2022/NimpSim_workdir_after/Mate/ver2` | documented / **unverified** this session |
| AutoDL ephemeral work root | `/root/autodl-tmp` | documented / **unverified** this session |
| AutoDL repo convention | `/root/autodl-tmp/MATE-Automation-V4/` | documented / **unverified** this session |
| Canonical IMP Z-01 landing | `/home/stu_2021/huzh_2022/NimpSim_workdir_after/Mate/ver2/autoresearch_inputs/z01/` | **planned / unverified** |
| AutoDL Z-01 execution mirror | `/root/autodl-tmp/MATE-Automation-V4/autoresearch_inputs/z01/` | **planned / unverified** |

Current Z-01 route choice: **IMP then AutoDL** (`imp_then_autodl`). Prefer IMP as durable canonical data landing and AutoDL as a mirrored execution staging root. This blueprint does **not** claim those `autoresearch_inputs/z01/` directories or Z-01 bytes currently exist. The choice is unused until safe IMP access is confirmed.


## 0.5 Campaign tiers, council, recording, C-09

| Tier | Budget | Design | Limit |
|---|---|---|---|
| **Z-01 smoke** | **≤2.0** GPU-hours | **Exactly two frozen arms** (CPU LogReg on four moments + generic image-only ModifiedResNet18). No search. No fused arm. Do **not** label physics-informed. | Cross-detector classification smoke. Not a MATE GEM surrogate. Not angle/energy. Cannot support physics-informed-vs-generic. |
| **MATE EXP3** | Remaining budget after the ≤2.0 Z-01 attempt (up to **~14.0**). Independent of Z-01 success; requires EXP3's own MATE data, provenance, approval, and preflight | Existing proposal: 3 seeds × 4 configs (CrossAtt/ResNet × HC/Raw); cheapest-first gate (skip remainder if ResNet+HC std > 0.5 pp) | Publication seed-variance on the NIM A 2×2 table, not a new architecture hunt |

Council at **`strategic_gates` only** (claim, budget split, go/no-go). Do not council every mechanical step.

Recording policy **`labelled_hypotheses`**: Experiment Recordings (`/Users/Reid Hu/MATE-Automation/20_doc/Experiment Recordings/`) may use `OBSERVATION:` / `HYPOTHESIS:` labels. Physical claims remain human. One Markdown file per campaign until there are at least three campaigns. Link hashed machine artifacts; do not paste raw JSON or configs.

**C-09 remains unresolved** pending direct point-of-risk confirmation. Do not read `20_doc/servers/remote_GPU_context.md`, `IMP_server_context.md`, or other tracked credential documents. Do not silently remove this rule.

## 0.6 Frozen Z-01 design (strategic council 2026-09-19)

Three-advisor consensus: the name **physics-informed is unwarranted on Z-01**; traditional context is **mandatory**. Z-01 has **no independent physics vector**. Image-derived moments are duplicate summaries of the same pixels. **Do not label any Z-01 arm physics-informed.**

| ID | Role | Frozen spec |
|---|---|---|
| **A** | Mandatory CPU traditional baseline | `LogisticRegression(penalty=l2, C=1, class_weight=balanced, solver=lbfgs, max_iter=1000, random_state=42)` on standardized four raw-image projection features |
| **B** | Generic image-only CNN | MATE `ModifiedResNet18`, `fusion_type=none`, `in_channels=1`, pretrained backbone, seed 42, batch 32, `max_epochs=15`, warmup 2, AMP on CUDA, early-stop `val_loss` patience 4, **no augmentation** |

No fused / cross-attention arm. Run **exactly** these two arms within ≤2 GPU-hours. **No tuning regardless of outcome.** A high traditional score limits scientific meaning but **does not** trigger a fused arm. Ceiling effect / trivial separability is the strongest validity threat.

**Feature vector** (deterministic; raw nonnegative image weights; normalized central moments):

- \(M = \sum w\) (total charge)
- centroid \((\bar x, \bar y)\)
- \(I_{xx} = \sum w (x-\bar x)^2 / M\), \(I_{yy} = \sum w (y-\bar y)^2 / M\), \(I_{xy} = \sum w (x-\bar x)(y-\bar y) / M\)
- vector \([I_{xx}, I_{yy}, I_{xy}, M]\)
- `StandardScaler` fitted on **train only**
- Zero-mass events: map all four features to 0; **count and report**
- Any **negative or non-finite** raw pixel → **hard preflight failure** pending data review; **no clipping**

**Splits:** publisher train/test roles **fixed**. Stratified seed-42 80/20 train/val **inside publisher train**. Test untouched until **both** arms are frozen and trained, then evaluated **once**. Image mean/std from **train only**.

**Metrics:** primary `pid_balanced_accuracy` **must be emitted** (no undefined placeholder). Secondary: macro-F1, accuracy, per-class recall, confusion matrix. Pairwise McNemar plus paired bootstrap CI. **No hard scientific-lift threshold.** Artifact integrity is **hard**; metrics are **descriptive / informational**.

**Next engineering:** standalone contract-aware Z-01 runner/adapter plus coordinator planner routing; **synthetic tests only until real bytes**.


## 1. Cross-unit names (do not rename)

| Role | Name |
|---|---|
| Spec | `20_Project/Auto_Research/Auto_Research_Blueprint.md` |
| L0 startup | `20_Project/Auto_Research/L0_Start_Here.md` |
| L1 campaign | `20_Project/Auto_Research/L1_Current_Campaign.md` |
| L2 contracts | `20_Project/Auto_Research/L2_Contracts.md` |
| L3 forensics | `20_Project/Auto_Research/L3_Forensics_Index.md` |
| Frozen Wave 1 log | `20_Project/Auto_Research/Auto_Research_Mid-Automation_Report.md` (**historical**; do not append) |
| Experiment recordings | `/Users/Reid Hu/MATE-Automation/20_doc/Experiment Recordings/` |
| GRE-park entrypoint | `90_Plans/Plan_2026-09-18_GRE_Park_Research_Contract.md` |
| Campaign root | `campaigns/<campaign_id>/` under the MATE repo (or `$MATE_CAMPAIGN_ROOT/<campaign_id>/` if set) |
| Frozen manifest | `campaigns/<campaign_id>/manifest.frozen.json` plus `manifest.sha256` |
| Status log | `campaigns/<campaign_id>/status.jsonl` (append-only JSONL) |
| Approval record | `campaigns/<campaign_id>/human_approval.json` |
| Generated configs | `campaigns/<campaign_id>/generated_configs/` |
| Input manifest | `campaigns/<campaign_id>/campaign_inputs.json` |
| Digest | `campaigns/<campaign_id>/digest.md` |
| Success terminal | `campaigns/<campaign_id>/campaign_complete.json` |
| Other terminal | `campaigns/<campaign_id>/campaign_terminal.json` |
| Per-arm runs | `runs/<experiment_id>/<campaign_id>/` |

`--run-subdir` **is** `<campaign_id>`. `--resume` is forbidden for every v0 arm.
Types: `CampaignManifest` (schema), `CampaignState` (outer), `ArmState` (per arm). v0 commands: `validate` (schema + preflight, no GPU side effects; add `--write-frozen` to emit `manifest.frozen.json`, `manifest.sha256`, and initial `status.jsonl`), `plan` (emit sequential argv, refuse `--resume`, refuse existing run dirs), `digest` (deterministic `digest.md` + JSONL/report inputs). No subprocess launch in v0.

## 2. State machines

### 2.1 Outer campaign states

Legal forward path:

```text
declared
  → preflighted
  → awaiting_execution_approval
  → running
  → digesting
  → awaiting_next_decision
  → complete | budget_exhausted | blocked | failed
```

| State | Meaning | Who may leave it |
|---|---|---|
| `declared` | `CampaignManifest` bytes exist as `manifest.frozen.json` and have a SHA-256. | Coordinator `validate`, after schema parse. |
| `preflighted` | All hard preflight checks passed for **this** frozen manifest. | Coordinator `validate`. |
| `awaiting_execution_approval` | Preflight OK; **no** training subprocess has been created (v0 cannot create one). | Human approval record whose host, `campaign_id`, `data_root`, and `max_gpu_hours` **byte-equal** the manifest. |
| `running` | Sequential arm execution in progress **outside** v0 (human or later launcher using `plan` argv). | When the current iteration’s arms are done, blocked, or failed. |
| `digesting` | Writing `digest.md`. No new training. Scientific notes go to Experiment Recordings. **Do not** append the frozen Wave 1 report. | Coordinator, after atomic digest write. |
| `awaiting_next_decision` | Iteration complete; morning orchestrator or in-window loop rule chooses the next transition. | See §2.3. |
| `complete` | Terminal success: all required arms `certified` and hard gates passed. | None. |
| `budget_exhausted` | Terminal: `gpu_hours_cumulative >= 16.0` or `max_iterations` / stagnation hit with no remaining legal arm. | None. |
| `blocked` | Terminal-until-human: missing input, adapter, approval, secret-injection path, or a declared human decision. | New approval or a new campaign identity. |
| `failed` | Terminal integrity/runtime/security error. Partial artifacts preserved. | None (new `campaign_id` required). |

Any state may jump to `blocked` or `failed`. A hard scientific-gate failure records the gate result, preserves artifacts, and terminates as `failed` or `blocked` per gate `severity`; it must **not** mutate a config and retry.

### 2.2 Arm states

```text
pending
  → validated
  → training
  → training_complete
  → evaluating
  → evaluated
  → gated
  → certified | blocked | failed
```

| State | Contract |
|---|---|
| `pending` | Listed in the frozen manifest; not started. |
| `validated` | Generated config hash, input manifest, dependency arms, and evaluator exist. Existing `runs/<experiment_id>/<campaign_id>/` is **absent**. |
| `training` | Intended argv is `python src/run_experiment.py --config <generated> --base-config <read-only base> --run-subdir <campaign_id>` with **no** `--resume`. v0 `plan` emits this argv; v0 must not `Popen` it. Direct process ownership only, never an agent subprocess. |
| `training_complete` | `run_complete.json` present and provenance-valid. |
| `evaluating` | Evaluator bound to that run directory, config hash, split identity, and input-manifest SHA-256. |
| `evaluated` | Atomic evaluation-completion record written. |
| `gated` | Predeclared gates applied; results recorded. |
| `certified` | Arm artifacts + hashes bound; eligible for comparison dependents. |
| `blocked` | Missing dependency, input, or human decision. Dependents must not start. |
| `failed` | Training/eval/integrity error. Dependents must not start. No silent retry. |

Dependency failure **blocks dependents**. Comparisons (`compare_to`) require both arms `certified` and identical input-manifest + split hashes.

### 2.3 Loop rule after `awaiting_next_decision`

This is the Q1=D loop. It is finite.

1. If `gpu_hours_cumulative >= max_gpu_hours` (16.0) → `budget_exhausted`.
2. If `iterations_completed >= max_iterations` (default **3**) → `budget_exhausted` unless every required arm is already `certified`, then `complete`.
3. If `stagnation_count >= stagnation_limit` (default **2**) on the primary gated metric → `budget_exhausted`.
4. If the next arm set would change **host**, **data_root**, **max_gpu_hours**, or set `auto_acquire: true` → `blocked` (new approval required).
5. If the next arm set is already covered by the recorded approval, preflight still holds, remaining GPU-hours ≥ the next arm’s declared estimate, and no dependent is blocked → `running` (same overnight window).
6. Otherwise stay `awaiting_next_decision` for the morning orchestrator.

**Iteration:** one outer cycle `running → digesting → awaiting_next_decision`. Arms inside an iteration run **sequentially**. Evaluations may overlap only after their training arm is `training_complete`; training itself never overlaps.

**Stagnation:** no improvement of the manifest’s `primary_metric` relative to the best `certified` value over two consecutive **completed** iterations. Informational gates do not reset stagnation. Missing metric → fail closed (`failed`), not “no change.”

## 3. Finite defaults

| Knob | Default | Hard? |
|---|---|---|
| `execution.max_gpu_hours` | **16.0** | Yes. Cumulative. |
| `execution.max_concurrent_training` | **1** | Yes. |
| `execution.allow_resume` | **false** | Yes. |
| `execution.fresh_only` | **true** | Yes. Existing run directory → reject. |
| `execution.max_iterations` | **3** | Yes for v0. |
| `execution.stagnation_limit` | **2** | Yes for v0. |
| `execution.max_disk_gb` | **20** | Yes; preflight fails if free space is below this. |
| `inputs.auto_acquire` | **false** | Yes until a future approval explicitly sets true **and** records it. |
| Overnight windows this campaign | **1** | Yes for Q2=3. A second night needs a new approval record. |

Do not start an arm unless `max_gpu_hours - gpu_hours_cumulative >= arm.max_gpu_hours_estimate`. If a running arm overruns the campaign cap, preserve artifacts, do not retry, and terminate `budget_exhausted` after that process exits.

## 4. Manifest schema

`schema_version: 1`. Unknown fields fail closed. Generated configs live only under the campaign root; tracked `configs/` is read-only.

```yaml
schema_version: 1
campaign_id: "pid-public-z01-<yyyymmdd>"   # [A-Za-z0-9._-]+ ; also --run-subdir
purpose: "Cross-detector classification smoke on public AT-TPC sim (Z-01). Not physics-informed."
scientific_direction: "Z-01 classification smoke; not physics-informed"
primary_metric: "pid_balanced_accuracy"    # must be emitted; informational, no lift threshold
expected_commit: "<40-char git commit>"

execution:
  host_role: "autodl"          # autodl | imp | local-cold
  host_id: null                # required exact identity before running
  max_concurrent_training: 1
  max_gpu_hours: 16.0
  max_disk_gb: 20
  max_iterations: 3
  stagnation_limit: 2
  allow_resume: false
  fresh_only: true

inputs:
  auto_acquire: false
  data_root: null              # required exact path before running
  source:
    id: "Z-01"
    doi: "10.5281/zenodo.3473953"
    record: "3473953"
    kind: "attpc_sim_npy"
    note: "Confirmed files in the 2026-09-18 survey. Not a MATE GEM surrogate."
  manifest_path: "campaign_inputs.json"
  manifest_sha256: "<sha256 of campaign_inputs.json bytes>"

generated_configs:
  root: "generated_configs"
  mutate_tracked_configs: false

arms: []                       # see §4.1
gates: []                      # see §4.2
human:
  approve_execution:
    required: true
  approve_scientific_interpretation: true
outputs:
  root_dir: "campaigns/<campaign_id>"
```

Freeze by writing the canonical JSON `CampaignManifest` to `campaigns/<campaign_id>/manifest.frozen.json` and the lowercase hex SHA-256 of **those exact bytes** to `manifest.sha256` (64 hex chars, newline optional). Canonical JSON: UTF-8, sorted keys, no insignificant whitespace beyond one `:`/` ,` space if the implementer documents it — **whatever encoder `validate` uses must be the same encoder `plan`/`digest` hash**. Later edits require a **new** `campaign_id`.

### 4.1 Arm object

```yaml
- id: "z01-logreg-moments"
  experiment_id: "Z01-LogReg-Moments"
  config: "generated_configs/z01-logreg-moments.yaml"
  config_sha256: "<sha256 of generated YAML bytes>"
  base_config: null             # Z-01 configs are standalone; inherited bytes are rejected
  evaluator: "<python module or script path>"
  input_contract: "attpc_sim_npy_v0"
  depends_on: []
  compare_to: null
  max_gpu_hours_estimate: 0.25
- id: "z01-resnet18-image"
  experiment_id: "Z01-ResNet18-Image"
  config: "generated_configs/z01-resnet18-image.yaml"
  config_sha256: "<sha256 of generated YAML bytes>"
  base_config: null             # Z-01 configs are standalone; inherited bytes are rejected
  evaluator: "<python module or script path>"
  input_contract: "attpc_sim_npy_v0"
  depends_on: []
  compare_to: "z01-logreg-moments"
  max_gpu_hours_estimate: 1.75
```

Do **not** use example id `pi-cnn-z01-a`. Do **not** label either arm physics-informed.

`input_contract` values:

| Contract | When legal |
|---|---|
| `attpc_sim_npy_v0` | Z-01 `.npy` 2D projections after an **approved** adapter. Default for this campaign. |
| `exp8_hdf5_v1` | Only if `campaign_inputs.json` binds the nine canonical EXP8 HDF5 files via `src/exp8_contract.py`. |

The existing MATE runner’s input/provenance contract is **EXP8-specific**. Feeding Zenodo `.npy` through `exp8_contract.py` is a hard preflight failure. An adapter (npy → training tensors) is a declared, hashed generated-config + code identity, not an implicit conversion.

### 4.2 Gate object

```yaml
- id: "artifact_integrity"
  kind: "artifact_integrity"
  severity: "hard"
- id: "primary_pid_emitted"
  kind: "metric_present"
  severity: "hard"
  metric: "pid_balanced_accuracy"
  accessor: "metrics.pid_balanced_accuracy"
```

`pid_balanced_accuracy` **must be emitted**. There is **no** hard scientific-lift threshold and **no** `threshold: 0.0` placeholder. Artifact integrity is hard; the metric itself is descriptive/informational. Missing accessor still fails closed. Informational gates never launch a new arm by themselves.

### 4.3 Input manifest (`campaign_inputs.json`)

Must list every file the arms will read. The object shape is the nested
`source` plus `files` matching `inputs.records`; there is no alternate
flat `source_id` / `doi` / `role` form. `inputs.manifest_sha256` is
**required** in the campaign manifest and is the SHA-256 of these exact
bytes. Preflight must require the file and verify that hash.

```json
{
  "source": {
    "id": "Z-01",
    "doi": "10.5281/zenodo.3473953",
    "record": "3473953",
    "kind": "attpc_sim_npy",
    "note": "Confirmed files in the 2026-09-18 survey. Not a MATE GEM surrogate."
  },
  "data_root": "<absolute>",
  "files": [
    {
      "path": "<relative to data_root>",
      "size": 0,
      "sha256": "<64 hex>",
      "schema": "<declared schema>",
      "split_id": "<split identity>"
    }
  ]
}
```

`source` must byte-equal `inputs.source`. `files` must byte-equal
`inputs.records` (`path`, `size`, `sha256`, `schema`, `split_id`).
SHA-256 is **required** for every file. Until the files exist locally
and hashes are computed from bytes, preflight fails closed. **Do not
invent hashes.** Auto-download is forbidden while `auto_acquire` is
false.

## 5. Human approval record

`human_approval.json` is a gate, not a boolean. Training is illegal until this file exists and matches the frozen manifest.

```json
{
  "schema_version": 1,
  "kind": "execution_approval",
  "campaign_id": "<exact>",
  "host": "<exact host identity>",
  "data_root": "<exact absolute path>",
  "max_gpu_hours": 16.0,
  "auto_acquire": false,
  "approved_at": "<ISO-8601>",
  "actor": "<user>",
  "scope": "one overnight window"
}
```

Mismatch on `campaign_id`, `host`, `data_root`, `max_gpu_hours`, or `auto_acquire` → fail closed. The interview verdict is **not** this record.

## 6. Preflight (all hard; fail closed)

Run before `preflighted`. Re-run before every return to `running` if process identity may have changed.

| Class | Checks |
|---|---|
| Schema | Manifest + input JSON parse; `schema_version == 1`; `allow_resume == false`; `fresh_only == true`; `max_concurrent_training == 1`; `max_gpu_hours <= 16.0`; `campaign_id` legal; generated configs exist and match `config_sha256`. |
| Provenance | `expected_commit` is HEAD; clean worktree; `execution_contract.validate_clean_provenance`; frozen manifest SHA-256 matches file bytes. |
| Inputs | `data_root` set; every listed file exists; SHA-256 matches; `auto_acquire` is false unless approval says otherwise; `input_contract` compatible with file kind. No legacy-machine path fallback. `MATE_DATA_ROOT` may be used only when it **equals** the approved `data_root`. |
| Runtime | Declared Python/CUDA/torch (or CPU-only for `local-cold`); one GPU lock for training hosts; free disk ≥ `max_disk_gb`. `local-cold` must refuse real training. |
| Resource | Single-campaign flock (pattern: `runs/.autoresearch_<campaign_id>.lock` or repo-wide `runs/.autoresearch_gpu.lock`). Second campaign cannot acquire the GPU lock. |
| Security | Secrets only from environment / agent secret injection. **Never** read `20_doc/servers/remote_GPU_context.md`, `IMP_server_context.md`, Memoranda password files, or any other tracked doc for credentials. If the only known password location is a tracked file → `blocked`. |
| Freshness | `runs/<experiment_id>/<campaign_id>/` must not exist for any arm about to train. |
| Runner | `plan` may emit only `src/run_experiment.py` with `--run-subdir <campaign_id>` and without `--resume`. Combining them is a coordinator bug (`failed`). v0 must not execute the argv. |
| Human | For transition into `running`: `human_approval.json` present and matching (§5). v0 stops at `awaiting_execution_approval` without that record and still does not spawn a process if the record appears. |

## 7. Training, evaluation, certification

1. **Training (post-v0 / human).** Sequential. Direct process ownership of the `plan` argv. **No** Agent-tool / subagent training. Unique `--run-subdir`. Reject stale directories (`mkdir(..., exist_ok=False)` already in the MATE runner). Preserve partial artifacts on failure. **No silent retry** and no config mutation on failure. v0 coordinator **must not** launch this step.
2. **Evaluation.** Requires valid `run_complete.json`. Bind predictions/metrics to run dir, generated-config hash, split identity, and input-manifest SHA-256. Write an atomic evaluation-completion JSON in the run dir.
3. **Gating.** Only predeclared gates. Hard failure stops new arms. Informational results still enter the digest.
4. **Certification.** Bind hashes; mark arm `certified`.
5. **Campaign terminal write.** Atomic temp-file + rename:
   - `complete` → `campaign_complete.json`
   - `budget_exhausted` \| `blocked` \| `failed` → `campaign_terminal.json`
   Both include: campaign identity, frozen-manifest SHA-256, arm statuses, artifact hashes, metrics, gate results, `gpu_hours_cumulative`, final status, path to `digest.md`.

## 8. `digest.md` (Q3=B)

Written by `python -m src.autoresearch digest`. Human-readable, short, reconstructable, **deterministic**: the same campaign-root bytes (frozen manifest, status.jsonl, eval records) must produce an identical `digest.md`. Use timestamps only from already-recorded JSONL/approval fields; sort arms by `id`; stable metric key order. Do not embed wall-clock “now” or host-local paths that are not in the manifest.

Must include: campaign_id, outer `CampaignState`, each `ArmState`, metrics table, gate pass/fail, `gpu_hours_cumulative` vs 16.0, iterations/`stagnation_limit` counters, blocker (if any), **exact next action**.

Must not include: physical interpretation, detector-physics claims, paper prose, Acknowledgements, or any write into manuscript paths.

## 9. Experiment recording protocol

[[Auto_Research_Mid-Automation_Report]] is a **frozen Wave 1 historical archive**. Do **not** append it.

After a run or iteration:

- Keep **current state** in [[L0_Start_Here]] / [[L1_Current_Campaign]] only.
- Write scientific why / found / next in Experiment Recordings (`labelled_hypotheses`: `OBSERVATION:` / `HYPOTHESIS:`). Physical claims remain human.
- Leave machine artifacts under the campaign root; **link** hashed files from the recording. Do not paste raw JSON or configs.
- Never write this prose into `10_Papers-Thesis/` or `main.tex`.

## 10. Daily orchestrator handoff

A new morning orchestrator, given the same prompt, must:

1. Read [[L0_Start_Here]] (exclusive startup state). Given only the GRE-park contract, that file is the first disclosure layer.
2. Read this blueprint only as far as needed for the named next action (authority for invariants).
3. Read [[L1_Current_Campaign]] if identity, two-tier boundary, or blockers are required. Do **not** treat the frozen Wave 1 report as current status.
4. Read `status.jsonl` tail and `digest.md` if the campaign root exists; read the current Experiment Recording for scientific narrative.
5. Not relaunch remote compute unless §5 approval still covers host / campaign_id / data_root / cap **and** remaining budget is positive **and** the next action is `running` or “start approved overnight window” **and** C-09 is resolved or replaced by explicit in-session access confirmation.
6. Not re-train `certified` arms; not overwrite existing run directories.
7. Update L0/L1 for state changes; update Experiment Recordings for scientific notes. Do not append the frozen report.

GRE remains the daytime a-block. Overnight work is at most the one approved window.

## 11. Hard non-goals

- Manuscript / Overleaf / `main.tex` / `10_Papers-Thesis/` edits.
- Daily-priority or GRE-note edits as a side effect of this loop.
- Credentials from tracked docs. **C-09 unresolved** pending direct confirmation; do not scrape server notes.
- Physical interpretation or physical pictures (human only).
- Silent retries, config self-mutation, or stale-directory overwrite.
- Agent-spawned training, and **any** subprocess launch from `src.autoresearch` v0 (`validate`/`plan`/`digest` only).
- Automatic data acquisition until an approval record sets `auto_acquire: true`.
- Mutating tracked `configs/`.
- Vendoring `karpathy/autoresearch`, OpenAlex fleets, cron daemons.
- Applying `exp8_contract` to Z-01 npy.
- This wave: AutoDL, IMP, WebAccess, live server mutation.

## 12. Outcome codes (v0)

| Code | Terminal? | Meaning |
|---|---|---|
| 0 | yes | `complete` / certified campaign |
| 10 | yes | `blocked` during preflight or missing human input |
| 15 | no | `awaiting_execution_approval` |
| 20 | yes | training/execution `failed` |
| 30 | yes | evaluation `failed` |
| 40 | yes | hard scientific-gate failure |
| 50 | yes | integrity or security violation |
| 60 | yes | `budget_exhausted` |

## 13. Cold-profile acceptance (Wave 1)

Parent runs **one** smoke check after docs + coordinator land. Implementers do not run project-wide tests.

Cold profile (`host_role: local-cold`) must:

1. `python -m src.autoresearch validate --manifest <path> --repo-root <repo> --write-frozen` parses, preflights, and writes a fixture campaign root as `manifest.frozen.json` + `manifest.sha256` + initial `status.jsonl`; without `--write-frozen`, it writes nothing.
2. `plan` refuses `--resume` and refuses an existing `runs/<experiment_id>/<campaign_id>/`.
3. Fail closed on missing `data_root`, missing file hashes, dirty/missing commit, missing approval, tracked-doc secret paths, and `input_contract: exp8_hdf5_v1` paired with npy sources. Provenance must not be weaker than `src/execution_contract.py`.
4. Isolate generated YAMLs under the campaign root and hash them; leave tracked `configs/` untouched.
5. Append a status JSONL line for `declared` (and `blocked` or `awaiting_execution_approval` as appropriate).
6. `digest` is deterministic on fixture artifacts. Write no files under `10_Papers-Thesis/`, GRE notes, or remote hosts.
7. Never invoke real training or any subprocess launcher.

## 14. Launch checklist (later wave; not this wave)

Do not treat a checked box here as approval. Immediate pre-launch confirmation must restate the four exact values.

- [ ] Frozen `manifest.frozen.json` + `manifest.sha256` under `campaigns/<campaign_id>/`
- [ ] `campaign_inputs.json` with **byte-verified** SHA-256 for every file
- [ ] `input_contract` matches those files; adapter hashed if Z-01
- [ ] Generated configs only under `generated_configs/`; tracked `configs/` unmodified
- [ ] Clean worktree; `expected_commit` == HEAD
- [ ] Runtime/resource/security preflight passed (no tracked-doc credentials)
- [ ] GPU lock free; `max_concurrent_training: 1`
- [ ] `human_approval.json` records **exact**:
  - host = ________________
  - campaign_id = ________________
  - data_root = ________________
  - max_gpu_hours = ________________ (≤ 16.0)
- [ ] Remaining GPU-hours and iteration/stagnation counters allow one overnight window
- [ ] Current Experiment Recording updated with labelled findings; L0/L1 state current; frozen Wave 1 report **not** appended
- [ ] Explicit user confirmation of the four values **at point of risk**, and of safe IMP access while C-09 is unresolved

Until that confirmation exists, outer state must not leave `awaiting_execution_approval`.
