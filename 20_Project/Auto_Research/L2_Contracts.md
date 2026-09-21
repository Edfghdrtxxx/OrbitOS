---
title: Auto-Research L2 — Contracts
type: plan
status: active
created: 2026-09-19
revised: 2026-09-19
parent: "[[L0_Start_Here]]"
related:
  - "[[Auto_Research_Blueprint]]"
  - "[[L1_Current_Campaign]]"
---
# L2 — Contracts

Do not duplicate the spec. Authority is [[Auto_Research_Blueprint]]. This page is a map of the hard contracts and the launch gate.

## Scientific and governance locks (2026-09-19)

| Lock | Value | Operational consequence |
|---|---|---|
| Primary claim | `physics_vs_generic_with_traditional_context` **only where an independent physics vector exists** | **Z-01 cannot instantiate this claim.** Image-derived moments are duplicate pixel summaries. Do **not** label any Z-01 arm physics-informed. Traditional context is still **mandatory** (frozen LogReg arm). Fair traditional methods remain mandatory on later datasets that actually carry independent physics / angle / energy labels. |
| First window | `z01_then_exp3` | Attempt ≤2 GPU-hour Z-01 smoke first (**exactly two frozen arms**); then EXP3 on remaining budget if **EXP3's own** MATE data, provenance, approval, and preflight pass. **Z-01 success is not a gate.** If Z-01 fails, record it and continue to EXP3 when those prerequisites independently pass. |
| Z-01 design | Strategic council 2026-09-19 **locked** | Arm A: CPU LogReg(l2,C=1,balanced,lbfgs,max_iter=1000,seed=42) on `[Ixx,Iyy,Ixy,M]`. Arm B: generic `ModifiedResNet18` `fusion_type=none`. **No fused/cross-attention arm. No search. No tuning.** High LogReg score does not unlock a fused arm. |
| Council | `strategic_gates` | Z-01 design lock **complete**. Invoke again only at later strategic gates (EXP3 go/no-go, claim on datasets that have an independent physics vector). Do not council every mechanical step. |
| Recording | `labelled_hypotheses` | Experiment Recordings may use labelled `OBSERVATION:` / `HYPOTHESIS:` lines. Physical claims remain **human**. |
| Z-01 route | `imp_then_autodl` | Durable landing on IMP, execution mirror on AutoDL — unused until access is confirmed. |
| C-09 | **`code-path mitigated / operational authorization unresolved`** (not closed) | IMP and AutoDL SSH seams are env-only, known-host `RejectPolicy`, fail closed, and have dry-run probes. IMP supports key-first/password fallback and fresh jump channels; AutoDL is key-only with bounded output and traversal/symlink-safe downloads. Each passes 16 focused tests plus behavior/security review. **No probe/connect/transfer/launch.** Credentials and topology are not provisioned. Do **not** scrape tracked server docs. An interview waiver request is not authorization. |
| Server lifecycle | CLI then WebAccess | Open/close AutoDL (and analogous IMP steps) **only after exact approval**, trying CLI first, WebAccess second, without tracked-secret scraping. |

| Contract | Where | v0 invariant |
|---|---|---|
| Manifest | Blueprint §4; `CampaignManifest` | `schema_version: 1`; unknown fields fail closed; generated configs only under the campaign root |
| GPU-hour cap | Blueprint §3, §5, §6, §8 | Hard ceiling **16.0** cumulative hours, including failed arms. `max_gpu_hours <= 16.0`. First-window split: Z-01 **≤ 2.0** attempted first; remaining (up to **~14.0**) available to EXP3 on EXP3's own preflight. Z-01 success not required. One overnight window |
| Finite loop | Blueprint §2.3, §3 | `max_iterations: 3`; `stagnation_limit: 2`; sequential training (`max_concurrent_training: 1`) |
| Fresh-only | Blueprint §3, §6 | `allow_resume: false`; `fresh_only: true`; existing run dir → reject; never `--resume` |
| Inputs | Blueprint §4.3 | Pre-staged hashed files; `auto_acquire: false` until a future approval explicitly sets true |
| Input contract | Blueprint §4.1 | Z-01 → `attpc_sim_npy_v0`. `exp8_hdf5_v1` on `.npy` is a hard failure. Four canonical files and every approved digest are rechecked at train/eval |
| Z-01 task | Blueprint §0.6 | Classification smoke only. No angle/energy. No physics-informed label. Publisher splits fixed; test once. `pid_balanced_accuracy` **emitted**, informational; artifact integrity hard; **no** lift threshold / **no** `threshold: 0.0`. Standalone configs only; exact fresh run dir; safe model artifacts; hash-approved local pretrained cache; invalid comparator rejected before test loading |
| Provenance | Blueprint §6; `execution_contract` | `expected_commit` is HEAD; clean worktree; approved config/input hashes and source roster match bytes at train/eval; do not weaken provenance |
| Security | Blueprint §6 Security | Secrets from environment / agent injection only. `_ssh_connect.py` must not read tracked markdown. C-09 is **not closed**. |
| State machines | Blueprint §2 | Outer: `declared → preflighted → awaiting_execution_approval → running → digesting → awaiting_next_decision → complete \| budget_exhausted \| blocked \| failed`. Arms sequential; dependency failure blocks dependents |
| Approval binding | Blueprint §5 | `human_approval.json` must **byte-equal** host, `campaign_id`, `data_root`, `max_gpu_hours`; `auto_acquire` must match |
| v0 CLI | Blueprint §1, §11 | `python -m src.autoresearch validate\|plan\|digest` only. **No subprocess launch.** Z-01 plan carries expected config/input/commit/experiment bindings and exact run directories; 27 Z-01 tests (4 torch-gated skips) plus 41 coordinator tests pass |
| Digest | Blueprint §8 (Q3=B) | Metrics, gates, `gpu_hours_cumulative` vs **16.0**, counters, blocker, exact next action. No physics claims or paper prose |
| Scientific narrative | Experiment Recordings | Labelled OBSERVATION/HYPOTHESIS allowed; link hashed machine artifacts; do not paste raw JSON/configs |
| Launch gate | Blueprint §14 | Point-of-risk confirmation of **exact** host, campaign ID, data root, and cap **≤ 16.0**. **Separate** direct authorization is required even for a read-only IMP inventory through the env seam. Interview verdict and code-path mitigation are not that record |

Until the four-value launch confirmation exists **and** direct operational authorization is given in-session for the intended IMP action, outer state must not leave `blocked`. C-09 is not closed. This page is not launch approval.

Unchanged by the 16.0 raise: `max_iterations`, stagnation, sequential training, fresh-only, `auto_acquire: false`, approval binding, no-subprocess v0.
