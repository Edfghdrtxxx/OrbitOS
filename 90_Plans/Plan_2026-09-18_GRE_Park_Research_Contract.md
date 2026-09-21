---
title: Research Automation Contract (Nov 1 gate → NIM A completion)
type: plan
status: active
created: 2026-09-18
revised: 2026-09-19
area: "[[Physics Research]]"
parent:
  - "[[GRE_Physics_Prep]]"
  - "[[Masters_Thesis]]"
  - "[[MATE-Automation]]"
expires: 2026-12-15
tags:
  - plan
  - gre
  - thesis
  - mate
session: grill-me 2026-09-18
consultants: GeminiQ3 + Swe2Q3
referee: locked Fable m1 2026-09-18
---
# Research Automation Contract

> [!info] Continuation map
> Reading this contract first yields the continuation map. **One path:** open [`20_Project/Auto_Research/L0_Start_Here.md`](../20_Project/Auto_Research/L0_Start_Here.md). Do not load the full repository. Do not follow historical `90_Plans/Auto_Research*` paths.
>
> **Primary goal:** push physics-informed TPC PID on public reliable data (Z-01 classification smoke first ≤2 h, then MATE EXP3 on remaining budget when EXP3's own preflight passes — Z-01 success not required) during GRE prep — authentic evidence, not a compliance exercise.
>
> **PM operating rule:** the PM owns the big picture and delegates code/execution by default; do not silently launch or execute research. Current state lives only in L0/L1.
>
> 1. [L0 — Start Here](../20_Project/Auto_Research/L0_Start_Here.md)
> 2. [L1 — Current Campaign](../20_Project/Auto_Research/L1_Current_Campaign.md)
> 3. [L2 — Contracts](../20_Project/Auto_Research/L2_Contracts.md)
> 4. [L3 — Forensics Index](../20_Project/Auto_Research/L3_Forensics_Index.md)
>
> Loop authority: [[Auto_Research_Blueprint]] (`20_Project/Auto_Research/Auto_Research_Blueprint.md`). Frozen Wave 1 history: [[Auto_Research_Mid-Automation_Report]]. Scientific narrative: `/Users/Reid Hu/MATE-Automation/20_doc/Experiment Recordings/`.

![[GRE_Park_Research_Contract.excalidraw|1000]]


> [!danger] Live-execution gate (still locked)
> Remote compute, AutoDL/IMP access, Zenodo download, and training launch are **not** authorized by this plan. Launch requires a separate point-of-risk confirmation that records the **exact host, campaign ID, data root, and GPU-hour cap**. **C-09 remains unresolved** pending the same class of direct confirmation; do not read tracked plaintext credential documents. No such confirmation has been given; **nothing has been launched**.

> [!warning] Implementation lock superseded (2026-09-19)
> The 2026-09-18 pre-gate **no-implementation** rule is superseded **for this session only**. Authorized work: [[Auto_Research_Blueprint]] (now under `20_Project/Auto_Research/`), the frozen Wave 1 [[Auto_Research_Mid-Automation_Report]], and MATE `src.autoresearch` (interview **Q1=D / Q2=3 / Q3=B**; direction `z01_then_exp3`). [[GRE_Physics_Prep]] remains the daytime a-block. Historical §0–§5 decisions stand. Catalog fleets, Karpathy `autoresearch`, manuscript edits, and GRE daily-note research rows remain forbidden. Live execution still needs the confirmation gate above. See §6.

> [!info] Origin
> `/grill-me` 2026-09-18. Standing consultants: Gemini-3.8-Flash + SWE-2. User overrules recorded below. Q7 (中期 vs NIM A overrun) **deferred** — too early.

## 0. Contract decisions (do not re-litigate)

| ID | Decision | Operational consequence |
|---|---|---|---|
| Q3 | Physical-picture + public ATTPC/MATE data | **C** (greedy) was rejected | Any future runner may discover structured/API records; physical interpretation and pictures remain human. |
| Q4 | Runner output | **A** | Structured fields or a sealed catalog only; no analysis prose as the primary output. |
| Q5 | Run catalog before the gate? | **A** | No. The existing survey is the current inventory; do not reopen it before the gate. |
| Q6 | First post-gate work | **B** | Complete the NIM A frozen chores before named-later research work. |
| Q7 | If NIM A remains open mid-November | **deferred** | Re-ask on **2026-11-15** or when the IMP 中期 notice arrives, whichever comes first. |

**Scope rationale:** the implementation gate is intentional. No pipeline work or new research reconnaissance occurs before the gate; the repository-derived implementation conflicts are recorded in §10 for later investigation.

## 1. Calendar

| Date | Event | This plan |
|---|---|---|
| **Now → 2026-10-06 00:00** | GRE primary a-block; **Authorized remote training window** (Auto-Research under strict budget caps) | Window locked 2026-09-20 by Reid Hu |
| **2026-10-06 00:00 → 2026-11-01** | **Hard Freeze** on all remote compute / server ops; 100% GRE focus | Pre-exam protection |
| 2026-10-04 | GRE diagnostic GR0177/GR0877 | GRE only |
| 2026-10-11 / 18 / 25 | Mocks | GRE only |
| 2026-10-28 | ETS reschedule deadline | If exam **moves**, gate release = **exam date + 1 day**, not fixed 2026-11-02; the pre-gate boundary extends. The **2026-11-15 Q7 trigger shifts by the same delta** (stays re-ask, never pre-decided) |
| **2026-11-01 14:00** | GRE Physics, STN80177D, target ≥900 | End of implementation gate (unless rescheduled) |
| **2026-11-02** | Gate lifts | **Phase N** starts: NIM A chores first |
| **2026-11-15** | Q7 trigger if Phase N remains OPEN | Stop N-expansion; **re-ask Q7** (no pre-decided pivot) |
| Nov–Dec 2026 | IMP 中期考核 batch (wait for notice) | **Not first.** Q7 deferred |
| ~2027-04-10 | Qualifying-paper proof | NIM A |
| 2027-06 | Thesis defense / graduation | After NIM A + thesis write |

Live GRE calendar: [[8-Week-Syllabus]]. Deferred research list: [[Parked-Topics]]. Graduation gates: [[Graduation_Map]].

## 2. Pre-gate boundary (now → 2026-11-01)

Until the gate lifts:

- Daily execution remains [[GRE_Physics_Prep]] plus already-established English maintenance.
- This plan is read-only except for user-directed patches and a dated §9 review-log entry.
- Do not create or run an auto-research/FARS/Karpathy/OpenAlex loop; reopen the sealed catalog; download Zenodo 3473953; clone ATTPC; stage datasets; power AutoDL; or train, evaluate, plot, or edit `/Users/Reid Hu/MATE-Automation`.
- Agents writing daily notes must not schedule research rows. New research ideas may be captured as plain text in [[Parked-Topics]], never as dated or checked actions.

## 3. Survey inventory (hunt already ran)

Confirmation bar (SWE-2): a row is valid only with **HTTP-resolvable files**, not “paper says data available.”

| ID | Object | Status | Use later? |
|---|---|---|---|
| Z-01 | [Zenodo 10.5281/zenodo.3473953](https://zenodo.org/records/3473953) AT-TPC **sim** 2D projections, ⁴⁶Ar(p), 8000 unlabeled + 2400 labelled `.npy`, proton vs carbon, 1.0 GB | **CONFIRMED files** | Named **later** public test (not Nov 2 first) |
| G-01 | [github.com/ATTPC](https://github.com/ATTPC) Spyral, ATTPCROOTv2, attpc_engine | **CONFIRMED software** | High-fid sim **PARTIAL** — see §3.1 |
| P-01 | arXiv [2605.28296](https://arxiv.org/abs/2605.28296) Zhang et al. MATE-TPC ¹²C+¹²C ResNet (~97% sim, ~90% exp) | **CONFIRMED paper** | Event dump **not** confirmed |
| F-01 | ScienceDB `10.57760/sciencedb.27854` | **FALSE LEAD** | Superheavy fusion-evaporation CS, **not** MATE TPC |
| C-01 | OpenAlex / INSPIRE-HEP / EXFOR / FRIB data policy | Metadata or policy | EXFOR ≠ TPC images; FRIB is publication-linked, not a bulk dump |

### 3.1 ATTPC sim fidelity (scout 2026-09-18)

- `attpc_engine`: Python MC, pad **point-clouds** `(pad, TB, Ne)`, theoretical GET amp/integral; **not** full 512-bucket traces. 10240-pad FRIB map. `mpgd_gain` = micromegas+THGEM combo.
- `ATTPCROOTv2`: FairRoot/VMC; `AtPulse` writes **512 TB** pad traces (Polya, GET gain, peaking time, noise). Docker/FairSoft heavy. Geometry: **10240 triangular Micromegas**, not MATE GEM ~3792 triangles.
- `Spyral`: analysis of traces, **no** simulator.
- **Verdict:** not a drop-in MATE surrogate. Nov 2+ test of physics-informed CNN on this stack is a **new campaign**, not a checkbox.

## 4. Phase N — NIM A chores after the gate

Repo: `/Users/Reid Hu/MATE-Automation`. Live paper: `10_Papers-Thesis/Physics_Informed/`. Handoff: `99_System/Handoff documents/paper-abd-2026-08-18/D_paper_completion.md`.

**Entry (owner: the first `/start-my-day` on or after gate release):** add exactly **one** a-block row — `Phase N — N0 re-read locks (Plan §4)`. Nothing from §5. Human runs N0–N5 with agent help; the agent never advances a step without the human in session.

**Phase N log = §9 of this plan.** Every N-step outcome (`done`, `blocked: <missing path>`, `waiting-on-human: <what>`) is appended there, dated. No separate log file.

> [!warning] Mac constraints (unchanged on Nov 2 unless user powers machines)
> Local Mac: **no torch**, no TRK image H5, no checkpoints. AutoDL RTX 3080 Ti **usually off**; 15-day-off **wipes**. Sequential GPU only. **No Agent-tool training.**

### 4.1 Order of operations (do in this order)

**N0 — Re-read locks (15 min)**  
This plan §0 + `D_paper_completion.md` + `paper_anchor.md`. Do not reopen S1–S8 by running experiments.

**N1 — Packaging (≤30 min, no science)**  
- [ ] `10_Papers-Thesis/Physics_Informed/README.md`: NST → NIM A / `elsarticle` to match `main.tex`. Do not delete `nst.cls` unless asked.
- [ ] Confirm class in `main.tex` is already `elsarticle` / NIM A.
- [ ] Check `10_Papers-Thesis/Physics_Informed/review/Review_online.tex` venue language matches NIM A / `elsarticle` (no science edits).

**N2 — P1 funding (human gate — record and continue)**  
- [ ] `main.tex` Acknowledgements still `[NEED to clarify later]`.
- [ ] **Ask** for funding text. Do **not** invent a grant number.
- [ ] If unknown: write `waiting-on-human: funding text` in the Phase N log. **Continue to N3.** Phase N stays **OPEN** until P1 is filled or the user accepts waiting-on-human as terminal. **Hard halt before N5** if P1 is still a placeholder — never push unconfirmed Acknowledgements to CSTCloud without explicit approval.

**N3 — Four blocked live figures (≤30 min, audit-only, no re-training)**  

| Figure | Generator | Missing on Mac (2026-07-28) | Rule |
|---|---|---|---|
| `figures/attention_overlay.png` | `plot_PAPER_attention_triptych.py` | Legacy V3 `attention_weights.npz` + ¹³C/¹⁴C H5 | Record missing path; next figure |
| `figures/generalization_gap.pdf` | `plot_PAPER_generalization_gap.py` | Legacy V3 training_history JSONs | Record missing path; next figure |
| `figures/angular_resolution_comparison.png` | `plot_TRK_angular_resolution.py` | TRK3-v2 / TRK4-v2 `predictions_regression.csv` | Record missing path; next figure |
| `figures/five_class_data_samples.png` | `plot_PAPER_five_class_samples.py` | Legacy five-class H5 | Record missing path; next figure |

- [ ] Re-run figure inventory: `99_System/Handoff documents/paper-figure-stale-audit/` / `.grok/workflows/paper-figure-stale-audit.rhai`.
- [ ] **CPU-only.** Check whether the listed artifacts **already exist on this Mac**. If yes, regenerate that figure. If no, mark **blocked** with the missing path — **continue to the next figure** (not a phase halt).
- [ ] Do **not** boot AutoDL, re-train, or debug legacy H5/CSV during N3. Those four misses are GPU-era artifacts; with AutoDL off they halt **by construction**. Unblock path = **user compute decision** (power AutoDL with a paid-hours cap **or** copy artifacts onto the Mac). Record that decision as waiting-on-human; do not absorb it into “try harder.”
- [ ] No fake pixels.

**N4 — Honesty surfaces (ask before apply)**  
- [ ] Abstract vs §5.2 hedge — abstract **read-only** unless user asks.
- [ ] Unapplied patches: `review/OUTLINE_HONESTY_PATCHES.md` — ask first.

**N5 — Overleaf**  
- [ ] **Git healthy** means: clean working tree, `main.tex` compiles locally, no uncommitted changes.
- [ ] Push **only** via `/paper-overleaf-sync` if **all four figure outcomes are recorded** (regenerated or named-blocked) **and** P1 is filled or the user **explicitly** approves pushing with named gaps. Live CSTCloud: `https://latex.cstcloud.cn/project/6a62f961a2ae2b9effcd4b16`. **No silent overwrite.**

**N6 — Stop**  
Do **not** continue into Zenodo download, ATTPC clone, AutoDL power-on, A-block BLOCK-audit experiments, or thesis chapters unless the user starts a **new** instruction after N5.

**Phase N clock:** if N is still OPEN on **2026-11-15** **or** IMP 中期 notice arrives, **stop expanding N** and **re-ask Q7**. Do not silently keep chores going.


### 4.2 Success / done definition

Phase N is **done** only when N0–N5 were each **attempted with a recorded outcome**. `waiting-on-human` items leave Phase N **OPEN**, not done. Named-later items (§5) must not unpark into that ambiguity.

- README venue matches manuscript.
- P1 is filled **or** explicitly waiting-on-human (OPEN until user accepts that as terminal).
- Each of the four figures is regenerated **or** still blocked with named missing artifact **and** named unblock path (user compute decision).
- No new science claims. No GRE-window work retroactively done.

## 5. Post-gate work queue

Do not copy these into daily Priorities until Phase N is **done** (§4.2) **or** the user re-orders.

1. **中期考核 packet** (Nov–Dec 2026, wait for IMP notice). Q7 deferred until **2026-11-15** or 中期 notice — **re-ask**, do not pre-decide. Consultants recommend hard 中期 cutoff + fallback to sim/existing figures **if asked then**.
2. **A-block audit** — `A_block_audit.md` (claim vs artifact). New experiments only on BLOCK rows.
3. **Zenodo 3473953 test** of current physics-informed method — public **sim** npy, not IMP data. Requires an explicit method (input adapter vs MATE dual-channel images). Not unread.
4. **ATTPC high-fid sim campaign** — only after deciding FRIB Micromegas ≠ MATE GEM is acceptable as a **capability demo**, not a MATE surrogate. `attpc_engine` (pip, clouds) vs `ATTPCROOTv2` (Docker, traces) is a method fork — **interview**, do not assume.
5. **Angular regression cross-check / RANSAC energy anomaly** — still parked items from [[Masters_Thesis]]; after N, propose which become weekly rows.
6. **Thesis chapters** — writing not started (last log 2026-02-26). Out of 2026-08-18 current-scope paper lock until user re-opens.

## 6. Agent / skill implementation details

### 6.1 Do not build

- No new OrbitOS skill `auto-research`, no cron, no tmux overnight MATE loop, no OpenAlex fleet.
- Do not vendor `karpathy/autoresearch`.
- Do not resurrect 2026-08-18 “autonomous experiment-filling multi-agent.”
- Do not edit `main.tex` / `10_Papers-Thesis/` / Overleaf as part of the loop.

**This session (2026-09-19) may implement** the MATE package `src.autoresearch` (`python -m src.autoresearch validate|plan|digest` only; **no subprocess launch** in v0) and the blueprint/report named in the top callout. Generated configs stay under the campaign root; do not mutate tracked `configs/`. That authorization is **not** live-execution approval.

### 6.2 Live execution (confirmation gate; not launched)

The 2026-09-18 filters (date ≥ gate release, **Phase N done** per §4.2) remain the historical default for any *other* runner. They are **not** deleted. For the 2026-09-19 Q1=D campaign, implementation may proceed now, but **running** still requires all of:

1. Point-of-risk confirmation recording exact **host**, **campaign ID**, **data_root**, and **cap** (≤ 16.0 GPU-hours, one overnight window).
2. Blueprint preflight passed (provenance, input SHA-256, fresh-only `--run-subdir` without `--resume`, no credentials from tracked docs).
3. Output is certified artifacts plus `digest.md` (Q3=B), not paper prose; physical pictures remain human.
4. No AutoDL power-on / IMP / WebAccess in a wave that lacks item 1. **This wave has not launched.**
5. No mutation of `main.tex` science numbers.

The interview verdict is not a launch record. Refuse if any item is missing.

### 6.3 Vault hygiene after this plan is locked (only if user says **lock**)

Not before the gate unless asked:

- [ ] One-line pointer from [[Masters_Thesis]] / [[MATE-Automation]] / [[Parked-Topics]] to this plan.
- [ ] Do **not** rewrite [[Game_Framework]] before the gate unless user asks; if asked: Quest 1 temporarily = GRE Physics Prep until gate release.

## 7. Paths (absolute)

| Role | Path |
|---|---|
| This plan | `/Users/Reid Hu/OrbitOS/90_Plans/Plan_2026-09-18_GRE_Park_Research_Contract.md` |
| Auto Research project | `/Users/Reid Hu/OrbitOS/20_Project/Auto_Research/` |
| L0 startup (first disclosure) | `/Users/Reid Hu/OrbitOS/20_Project/Auto_Research/L0_Start_Here.md` |
| Loop authority (Blueprint) | `/Users/Reid Hu/OrbitOS/20_Project/Auto_Research/Auto_Research_Blueprint.md` |
| Frozen Wave 1 report | `/Users/Reid Hu/OrbitOS/20_Project/Auto_Research/Auto_Research_Mid-Automation_Report.md` |
| Experiment recordings | `/Users/Reid Hu/MATE-Automation/20_doc/Experiment Recordings/` |
| GRE project | `/Users/Reid Hu/OrbitOS/20_Project/GRE_Physics_Prep/` |
| Prep Studio | `/Users/Reid Hu/Physics GRE/` |
| MATE repo | `/Users/Reid Hu/MATE-Automation/` |
| NIM A tex | `/Users/Reid Hu/MATE-Automation/10_Papers-Thesis/Physics_Informed/main.tex` |
| D handoff | `/Users/Reid Hu/MATE-Automation/99_System/Handoff documents/paper-abd-2026-08-18/D_paper_completion.md` |
| Diagram | `Excalidraw/GRE_Park_Research_Contract.excalidraw.md` |

## 8. Related

- [[GRE_Physics_Prep]] · [[Parked-Topics]] · [[8-Week-Syllabus]] · [[Masters_Thesis]] · [[MATE-Automation]] · [[Graduation_Map]] · [[Official_Deadlines]] · [[L0_Start_Here]] · [[Auto_Research_Blueprint]] · [[Auto_Research_Mid-Automation_Report]]

## 9. Review log

- 2026-09-18: v1 drafted from grill-me Q1–Q7 + Mate/GRE/ATTPC scouts.
- 2026-09-18: v2 — GeminiQ3 + Swe2Q3 patches applied (must + compatible should). Q7 remains re-ask, not a pre-decided 中期 pivot.
- 2026-09-18: **m1 locked (Fable referee).** Confirmed: zero MATE in G (no one-off), expires 2026-12-15, N2 continue + hard halt before N5, N3 CPU-only with user compute decision, RIB ≤1×/wk + glance ≤1×/day, §6.2 needs Phase N **done**. Patched holes: Q7 trigger shifts with any exam reschedule; Phase N entry owner = first `/start-my-day` after lift; Phase N log location = §9; capture-only path for Phase G ideas → [[Parked-Topics]]; `/daily-note-addition` `/breakdown-tasks` `/kickoff` added to agent no-unpark list; [[Parked-Topics]] added to §2.2 item 2. Q6=B and Q7 deferred untouched.
- 2026-09-18: Enabled `obsidian-excalidraw-plugin`. m2 v2 (33 elements) as `Excalidraw/GRE_Park_Research_Contract.excalidraw.md`. Reload Obsidian, then click Enable if the button is still there.
- 2026-09-19: Reduced repeated pre-gate parking language, retained the timing/safety boundary, and appended repository-derived conflicts C-01–C-10 plus a deferred investigation checklist in §10.
- 2026-09-19: Added §10.4 interim v0 pipeline contract: reusable repository seams, provisional campaign manifest, lifecycle, stage contracts, artifact requirements, and first vertical-slice acceptance tests. Marked as design-only pending later investigation.
- 2026-09-19: Hardened §10.4 with provisional outcome codes, fail-closed data-path resolution, stale-directory protection, and strict resume acceptance tests.
- 2026-09-19: User superseded the pre-gate **no-implementation** decision for this session (Q1=D / Q2=3 / Q3=B). Live-execution confirmation gate retained; remote compute **not** launched. Loop authority: [[Auto_Research_Blueprint]]. Historical §0–§5 and prior §9 entries unchanged.
- 2026-09-19: Continuation entrypoint: L0–L3 under `90_Plans/Auto_Research/` (historical path; **superseded** the same day by the `20_Project/Auto_Research/` move below). Hard cap raised to **16.0** GPU-hours. Planned IMP canonical Z-01 landing and AutoDL mirror recorded as **planned/unverified**. PM delegates execution; no live launch.
- 2026-09-19: Auto Research control plane moved to `20_Project/Auto_Research/`. This contract remains the lightweight GRE-park entrypoint into `L0_Start_Here.md`. Loop authority is the project Blueprint; §10.4 is superseded (historical text preserved). Wave 1 mid-automation report is a frozen archive. Direction lock: `z01_then_exp3`, `physics_vs_generic_with_traditional_context`, council `strategic_gates`, route `imp_then_autodl`, recording `labelled_hypotheses`. **C-09 unresolved** pending direct confirmation.

## 10. Repository-derived conflicts and investigation queue

**Purpose:** preserve the concrete conflicts found by inspecting `/Users/Reid Hu/MATE-Automation`. These are not resolved by this contract; later agents may investigate them after the gate and after Phase N. The existing plan remains the authority for timing, human gates, and safety boundaries.

### 10.1 What the repository already provides

- [`src/run_experiment.py`](</Users/Reid Hu/MATE-Automation/src/run_experiment.py:797>) is a reusable single-experiment runner: config merge/validation, deterministic splits, normalization, training, evaluation, logging, and completion artifacts.
- [`src/execution_contract.py`](</Users/Reid Hu/MATE-Automation/src/execution_contract.py:47>) provides source-hash, clean-worktree, config-hash, and strict resume-lineage checks.
- [`scripts/remote/run_exp8_full.sh`](</Users/Reid Hu/MATE-Automation/scripts/remote/run_exp8_full.sh:1>) is an existing campaign-shaped prototype: single-GPU lock, expected-commit checks, sequential arms, evaluation, and certification.
- [`src/exp8_contract.py`](</Users/Reid Hu/MATE-Automation/src/exp8_contract.py:31>) defines a concrete HDF5/input-manifest contract, while [`scripts/remote/exp8_certification.py`](</Users/Reid Hu/MATE-Automation/scripts/remote/exp8_certification.py:93>) binds training/evaluation artifacts to those inputs.
- Existing evaluators emit task-specific metrics and prediction artifacts; classification metrics are defined in [`src/evaluation/evaluate.py`](</Users/Reid Hu/MATE-Automation/src/evaluation/evaluate.py:142>), and TRK baselines consume the CNN split contract through [`src/baselines/run_baseline.py`](</Users/Reid Hu/MATE-Automation/src/baselines/run_baseline.py:350>).

### 10.2 Conflicts to resolve later

| ID | Conflict | Evidence | Later investigation question |
|---|---|---|---|
| C-01 | **Scope mismatch:** this contract forbids a general auto-research/FARS runner, while the repository already supports a narrower fixed experiment campaign. | §6.1 above; [`run_exp1`/`run_exp8` entry points](</Users/Reid Hu/MATE-Automation/src/run_experiment.py:797>) | Define v0 explicitly as a declared campaign of existing experiment arms, not autonomous hypothesis generation. |
| C-02 | **No campaign manifest:** experiment YAMLs exist, but there is no generic manifest for arms, dependencies, comparisons, gates, budgets, or human approvals. | [`configs/base.yaml`](</Users/Reid Hu/MATE-Automation/configs/base.yaml:1>); hard-coded EXP8 driver | Define and validate a campaign YAML schema. |
| C-03 | **No generic state machine/DAG:** EXP8 sequencing is hand-coded in shell; no reusable `declared → preflighted → running → evaluated → gated → certified` lifecycle exists. | [`run_exp8_full.sh`](</Users/Reid Hu/MATE-Automation/scripts/remote/run_exp8_full.sh:107>) | Specify states, legal transitions, exit codes, and resumability. |
| C-04 | **Provenance is uneven:** per-run training provenance is strong, but ordinary runs do not uniformly bind package versions, hardware/runtime, YAML bytes, or downstream evaluation completion. | [`run_complete` creation](</Users/Reid Hu/MATE-Automation/src/run_experiment.py:1578>); EXP8-only evaluation certification | Decide the minimum provenance contract for every task family, including TRK regression. |
| C-05 | **Resource policy is documented but not enforced:** remote host, GPU, wall-time, disk, and dependency assumptions are operational notes rather than preflight checks. | [`AGENTS.md`](</Users/Reid Hu/MATE-Automation/AGENTS.md:37>); [`remote_GPU_context.md`](</Users/Reid Hu/MATE-Automation/20_doc/servers/remote_GPU_context.md:1>) | Define resource declarations and fail-closed preflight checks. |
| C-06 | **Failure/retry semantics are incomplete:** strict training resume exists, but there is no generic campaign retry policy; evaluation failures require manual recovery. | [`execution_contract.py`](</Users/Reid Hu/MATE-Automation/src/execution_contract.py:156>); [`run_exp8_full.sh`](</Users/Reid Hu/MATE-Automation/scripts/remote/run_exp8_full.sh:153>) | Define recoverable versus terminal failures and preserve partial artifacts without silent reruns. |
| C-07 | **Generic evaluation certification is weaker than EXP8:** TRK training completion and later regression evaluation are not bound by the same atomic evaluation manifest. | [`evaluate_trk_regression.py`](</Users/Reid Hu/MATE-Automation/src/evaluation/evaluate_trk_regression.py:798>); EXP8 certification path | Generalize `evaluation_complete.json` and artifact/hash binding beyond EXP8. |
| C-08 | **Input acquisition is outside the runner:** data paths, remote staging, and dataset generation remain external/manual. | [`run_experiment.py` data resolution](</Users/Reid Hu/MATE-Automation/src/run_experiment.py:412>); [`IMP_server_context.md`](</Users/Reid Hu/MATE-Automation/20_doc/servers/IMP_server_context.md:1>) | Decide whether v0 consumes pre-staged immutable inputs only, with no automatic acquisition. |
| C-09 | **Credential hygiene conflict:** tracked remote-operation documentation contains credentials, which is incompatible with unattended automation. | [`remote_GPU_context.md`](</Users/Reid Hu/MATE-Automation/20_doc/servers/remote_GPU_context.md:1>); [`IMP_server_context.md`](</Users/Reid Hu/MATE-Automation/20_doc/servers/IMP_server_context.md:1>) | Rotate/remove tracked credentials and require environment/agent-based secret injection before any runner is built. |
| C-10 | **Existing operational rule:** training must remain sequential and must not be delegated to agent sub-processes. | [`AGENTS.md`](</Users/Reid Hu/MATE-Automation/AGENTS.md:52>); [`feedback_sequential_training.md`](</Users/Reid Hu/MATE-Automation/99_System/memory/MATE-Automation-V4/feedback_sequential_training.md:1>) | Encode single-GPU locking and direct process ownership as hard campaign invariants. |

### 10.3 Deferred investigation checklist

- [ ] Draft a campaign manifest/schema that reuses existing experiment YAMLs.
- [ ] Define the campaign state machine, exit-code taxonomy, and recovery rules.
- [ ] Generalize input manifests and evaluation completion certification beyond EXP8.
- [ ] Add runtime/package/hardware/resource preflight requirements.
- [ ] Decide the first vertical-slice campaign (recommended candidate: a fixed EXP8-style two-arm comparison).
- [ ] Resolve credential storage before any unattended remote execution.
- [ ] Keep hypothesis generation, physical interpretation, pictures, and paper prose outside v0 unless separately authorized.

### 10.4 Interim v0 pipeline contract (design only; not implementation authorization)

> [!warning] Superseded (2026-09-19)
> This subsection is a **historical design record**. Live autonomous-loop authority is [[Auto_Research_Blueprint]] at `20_Project/Auto_Research/Auto_Research_Blueprint.md`. Do not treat §10.4 as a competing live spec. Historical text below is preserved.

This subsection turns the repository findings into a concrete starting shape. It is deliberately a **design record**, not permission to build before the implementation gate. Later agents may revise it after investigating the C-01–C-10 conflicts.

#### Scope

v0 is a **declared experiment campaign** composed of existing MATE experiment configs. It does not generate hypotheses, search the literature, acquire datasets automatically, interpret physical results, generate physical pictures, or write paper prose. Inputs are pre-staged and bound by an immutable manifest.

#### Reusable seams

| Pipeline stage | Existing seam to reuse |
|---|---|
| Training | [`src/run_experiment.py`](</Users/Reid Hu/MATE-Automation/src/run_experiment.py:797>) with `--config`, `--base-config`, and fresh `--run-subdir` |
| Input validation | [`src/exp8_contract.py`](</Users/Reid Hu/MATE-Automation/src/exp8_contract.py:76>) as the first manifest-contract implementation |
| Training provenance | [`src/execution_contract.py`](</Users/Reid Hu/MATE-Automation/src/execution_contract.py:47>) and per-run `run_complete.json` |
| Evaluation | Existing classification/regression evaluators and canonical prediction files |
| Certification | [`scripts/remote/exp8_certification.py`](</Users/Reid Hu/MATE-Automation/scripts/remote/exp8_certification.py:93>) as the model for reusable training/evaluation binding |
| GPU serialization | The single-GPU lock and sequential order in [`run_exp8_full.sh`](</Users/Reid Hu/MATE-Automation/scripts/remote/run_exp8_full.sh:19>) |

#### Proposed campaign-manifest fields

```yaml
schema_version: 1
campaign_id: "EXP8-v0"
purpose: "One-sentence scientific purpose"
expected_commit: "<40-char Git commit>"

execution:
  host_role: "autodl"
  max_concurrent_training: 1
  max_gpu_hours: "<explicit cap>"
  max_disk_gb: "<explicit cap>"
  allow_resume: false

inputs:
  manifest_path: "campaign_inputs.json"
  manifest_sha256: "<sha256>"

arms:
  - id: "resnet"
    experiment_id: "EXP8-ResNet-Ideal-UnseenChannel"
    config: "configs/EXP8_ResNet_Ideal_UnseenChannel.yaml"
    base_config: "configs/base.yaml"
    evaluator: "src/evaluation/evaluate_exp8_unseen.py"
    depends_on: []
    compare_to: null
  - id: "cross_attention"
    experiment_id: "EXP8-XA-Ideal-UnseenChannel"
    config: "configs/EXP8_XA_Ideal_UnseenChannel.yaml"
    base_config: "configs/base.yaml"
    evaluator: "src/evaluation/evaluate_exp8_unseen.py"
    depends_on: ["resnet"]
    compare_to: "resnet"

gates:
  - id: "artifact_integrity"
    kind: "artifact_integrity"
    severity: "hard"
  - id: "seen_test_recall"
    kind: "metric_threshold"
    severity: "hard"
    metric: "A_and_B_recall"
    threshold: 0.90

human:
  approve_execution: true
  approve_scientific_interpretation: true

outputs:
  root_dir: "campaigns/EXP8-v0"
```

The exact field names remain provisional. The important requirement is that campaign-level decisions become machine-readable rather than remaining embedded in shell conditionals.

#### Proposed lifecycle

```text
declared
  → preflighted
  → running
  → training_complete
  → evaluated
  → gated
  → certified
```

Any stage may instead terminate as `blocked` (missing human decision/input/resource) or `failed` (execution/integrity error). A gate failure is recorded as a result and does not silently mutate a config or launch an unapproved alternative.

Proposed outcome classes: `0 = certified`, `10 = blocked during preflight`, `20 = training/execution failure`, `30 = evaluation failure`, `40 = hard scientific-gate failure`, `50 = integrity or security violation`. These codes are provisional until the later campaign-schema investigation.

#### Stage contracts

1. **Preflight:** verify campaign schema, expected commit, clean worktree, config files, input-manifest hashes, runtime/dependency requirements, resource budget, and single-campaign lock. Data paths must resolve from the declared manifest or an explicit `MATE_DATA_ROOT`; no legacy-machine fallback is permitted. No training starts if any hard check fails.
2. **Training:** invoke the existing runner with a unique campaign-bound `--run-subdir`; execute at most one training arm at a time; do not dispatch training to an agent subprocess.
3. **Evaluation:** require a valid per-run completion manifest; bind predictions and metrics to the training run, config, split, and input manifest; emit an atomic evaluation-completion record.
4. **Gating:** apply only predeclared metric/statistical gates. Informational results may continue; hard failures stop the campaign.
5. **Certification:** write one atomic `campaign_complete.json` containing campaign identity, arm statuses, hashes, metrics, gate results, runtime summary, and final status.

#### Minimum campaign artifacts

- frozen campaign manifest and its SHA-256;
- campaign status log with state transitions and timestamps;
- one isolated run directory per arm;
- per-arm training and evaluation completion manifests;
- gate-results record;
- atomic `campaign_complete.json`;
- no automatic prose report or mutation of `main.tex`.

#### Proposed acceptance tests for the first vertical slice

- Invalid commit or dirty worktree prevents any training invocation.
- A second campaign cannot acquire the single-GPU lock while the first is running.
- Changed input bytes or split identity invalidate evaluation/certification.
- A failed arm preserves its partial artifacts and does not silently retry with changed configuration.
- A stale or already-existing campaign/run directory is rejected rather than overwritten.
- Resume is allowed only when the campaign, commit, config, input manifest, and task-specific resume contract all match; otherwise the campaign requires a new run identity.
- A paired comparison rejects mismatched split/input manifests.
- A successful fixed two-arm campaign emits `campaign_complete.json` with all required hashes and gate results.

These tests should map one-to-one to the eventual campaign specification and implementation tasks. The later investigation queue must decide the exact schema, resource fingerprint, retry policy, and secret-injection mechanism before implementation begins.
