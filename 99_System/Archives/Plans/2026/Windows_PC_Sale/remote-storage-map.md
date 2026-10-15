# Remote storage map (beyond Google Drive)

**Date:** 2026-09-14  
**Source:** MATE-Automation-V4 `20_doc/servers/` + SSH config + sale-prep subagent.  
**Credentials:** redacted — never copy plaintext passwords from server context files to Drive.

Canonical pair (the “two remote server contexts”):

| Context | Doc in MATE-V4 |
|---------|----------------|
| IMP NimpSim / lab node | `20_doc/servers/IMP_server_context.md` |
| AutoDL GPU box | `20_doc/servers/remote_GPU_context.md` |

`AGENTS.md` / `CLAUDE.md` use the same split: IMP = sim/convert/baselines; AutoDL = training.

---

## 1. IMP simulation server (durable lab store)

| Field | Detail |
|-------|--------|
| Role | NimpSim, ROOT→H5 conversion, classical baselines, long-lived home storage |
| Target | `172.17.116.64` · user `stu_2021` · SSH alias `final-server` |
| Jump | `210.77.75.12:9910` · user `tpc_usr_imp` · alias `jump-host` |
| Work root | `/home/stu_2021/huzh_2022/NimpSim_workdir_after/Mate/ver2` (`exp_sim/`, `Reconstruction/`, …) |
| Access | Off-campus via jump; on LAN direct. Key on target; jump password-auth |
| Wrappers | `remote_exec.py` / `remote_upload.py` / `remote_download.py` |
| Sale-prep use | **Best remote landing for large MATE research artifacts** (selective data/runs). **Not** for IDs/visa |
| Sibling | `.65` (`hpnag`, `lilu`) — 3D Hough; same jump; not primary dump unless quota granted |

Related: weak IMP network historically — prefer convert-on-server, move H5 not bulk ROOT; laptop may time out on large transfers.

## 2. AutoDL GPU box (ephemeral compute)

| Field | Detail |
|-------|--------|
| Role | Pay-per-hour GPU training; local-driver pattern |
| Host | `connect.westb.seetacloud.com` (westB); ports rotate per lease (docs historically 42457 / 43812) |
| Work root | `/root/autodl-tmp` (**50 GB** persistent) · repo at `…/MATE-Automation-V4/` |
| Access | Direct SSH; no IMP jump. Host/port/password rotate on recreate |
| Wrappers | `gpu_exec.py` / `gpu_upload.py` / `gpu_download.py` |
| Sale-prep use | **Poor as sole archive** — 50 GB cap; **powered off ≥15 days → wipe**; billing while on. Staging / pull existing `runs/` only if lease still alive |
| Cross-link | Docs support sim→jump→GPU pull so H5 never hits the laptop |

## 3. Google Drive (already scouted)

- Account `edfghdrtxxx`: ~1 GB Drive files; **not** a mirror of Windows ~288 GB research tree  
- Good for: personal docs, small packs, decks already there  
- Bad for: bulk MATE `data/`, full forJob as only copy without patience

## 4. Recommended landing matrix (current keep-set)

| Keep item | Preferred landing | Avoid |
|-----------|-------------------|--------|
| `D:\Something\documents` + visa/出签 | **Drive + Mac** | IMP / AutoDL (privacy) |
| `github_repo_forJob` (~14 GB) | Private git remote **or** Drive/SSD; IMP only if quota OK + scrub `ssh_context.md` | AutoDL as sole copy |
| MATE selective `data/` + paper-cited `runs/` | **IMP** (durable) + Mac offline critical subset; verify what already exists under `Reconstruction/` / `exp_sim/` before re-upload | Blind full Drive dump; AutoDL-only |
| ViT `D:\outputs` (~1.6 GB) | **IMP** (research training artifacts — see note below) | Not personal; Drive optional mirror only |

**Practical split:** personal → Drive/Mac · large MATE science + ViT outputs → IMP (+ selective Mac) · AutoDL = compute/staging only · forJob → Drive (per option-1 preference).

### Note: what `D:\outputs` actually is (inspected 2026-09-14)

Pure **ML training/eval artifacts**, not personal materials:

- Folders named `V5_ViTCrossAttention_20250917_*` (Sep 2025)
- Contents: `*.pth` checkpoints (~66 MB each), one `evaluation_results.h5` (~783 MB), ROC/PR/confusion PNGs, `training_history.json` / `classification_report.json`
- Two non-empty runs (~1.17 GB + ~0.38 GB); three empty timestamp dirs
- **No** passport/visa/CV/invoice-like filenames

→ Per user rule: training data/artifacts → **IMP**, not Drive-as-primary.

## 5. Secret hygiene (sale-relevant)

- `IMP_server_context.md` and `remote_GPU_context.md` contain **plaintext passwords** and are git-tracked in private MATE-V4.  
- Before wipe: confirm Mac still authenticates; after wipe: **rotate** jump/lab/AutoDL passwords.  
- Do not upload those context files to Drive as part of a “backup zip.”

## 6. Live inventory (2026-09-14, from this Windows PC)

### IMP `.64` — reachable via jump ✓

| Fact | Value |
|------|-------|
| `/home` filesystem | 4.7T total · **348G free** · 93% used |
| `huzh_2022/` | **168G** |
| `Mate/ver2` work tree | **138G** already on server |
| `exp_sim/` | 46G |
| `Garfield_Output_V5/` | 33G |
| `HDF5/` | 9.6G (`Garfield_Raw` 9.1G + `Garfield_HC` 511M) — EXP8-style `sim_inv_12C300MeV_4He_*_100k_garfield_v5*.h5` present |
| `Reconstruction/` | large ROOT/NPZ/rawhits (e.g. `new` 12G, `rawhits_v3` 4.5G, `ab_run` 1.8G) |
| Existing `AFTPC_V3_MultiAgentVersion` on IMP | **15G** under `huzh_2022/` (Windows AFTPC sync abandoned; server already has a copy) |
| `MATE-Automation-V4/runs` or Windows `outputs` archive on IMP | **Not found** under `huzh_2022` depth-3 search — paper `runs/` + ViT `D:\outputs` still need upload if kept |

**Headroom:** 348G free is enough for ViT (~1.6G) + selective paper runs (order ~10G class) with margin. Prefer a new clearly named archive dir e.g. `huzh_2022/windows_pc_sale_202609/` rather than mixing into `Mate/ver2`.

### AutoDL — **unreachable** on documented primary port

`gpu_exec.py` → SSH failed: unable to connect port **42457** (resolved host changed). Lease likely powered off or port rotated.

**User policy (2026-09-14):** AutoDL cards are expensive — **only power on when training or uploading is actually needed.** Do not leave the box on for idle inventory. 15-day wipe-while-off still applies to any data left only on AutoDL.

### Personal docs policy (locked)

Drive/Mac only — never IMP/AutoDL.

### Landing matrix (locked after ViT inspection)

| Item | Landing |
|------|---------|
| documents / visa / 出签 | Drive + Mac |
| `github_repo_forJob` | Drive |
| MATE selective data/runs | IMP (new archive dir) |
| ViT `D:\outputs` | IMP (research checkpoints/eval H5 — not personal) |

## 7. Still open

1. Exact named MATE run dirs + H5 files for the selective keep (Windows `runs\` list is long — need paper-cited subset).  
2. AutoDL console: power on + current port if any GPU-only artifacts must be pulled.  
3. Create `windows_pc_sale_202609/` on IMP and start `remote_upload` for ViT + selective runs?
