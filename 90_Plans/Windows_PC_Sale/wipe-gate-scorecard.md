# Wipe-gate scorecard (live Windows disk)

**Date:** 2026-09-15  
**Scope:** Current keep-set vs live paths — existence, sizes, remote landing, open gates.  
**Verdict:** **NOT wipe-safe.** Multiple keep boxes still open.

---

## 1. Keep-path existence + re-measure

| Keep item | Live path | Exists | Size now | Landing target | Gate |
|-----------|-----------|--------|----------|----------------|------|
| Personal docs (D:) | `D:\Something\documents` | YES | **0.10 GB** (101.8 MB) | Drive + Mac | OPEN — path live; Drive/Mac receipt unverified |
| C: Downloads personal | `C:\Users\petro\Downloads` | YES | Candidates **~8 MB** (full Downloads 2.86 GB) | Drive + Mac | OPEN — files present; export unverified |
| Documents 录音 | `C:\Users\petro\Documents\录音` | YES | **3.6 MB** (5 files) | Drive + Mac | OPEN |
| WPS local caches | `Documents\WPS Cloud Files` + `WPSDrive` | YES | **0.42 + 0.35 GB** | Drive/Mac offline-only only | OPEN — offline-vs-cloud audit not done |
| `github_repo_forJob` | `D:\Something\research\github_repo_forJob` | YES | **14.44 GB** (dataset 13.49 + model_output 0.64 + .git 0.29) | Drive | OPEN — no remote; dirty tree; not copied |
| MATE paper runs | `...\MATE-Automation-V4\runs` (subset) | YES | cited subset **~8.63 GB** / all runs 11.64 GB | IMP | OPEN — not in sale archive yet |
| MATE data selective | `...\MATE-Automation-V4\data` | YES | **180.39 GB** total | IMP (named subset TBD) | OPEN — subset not locked |
| ViT `D:\outputs` | `D:\outputs` | YES | **1.56 GB** | IMP `.../windows_pc_sale_202609/outputs_ViT` | PARTIAL — see §4 |
| AFTPC entire tree | `D:\Something\research\AFTPC_V3_MultiAgentVersion` | YES (abandon) | 70.67 GB | — | CLOSED as keep (abandon) |
| WeChat/QQ / SSH keys | local stores | n/a | — | abandon / Mac already has keys | CLOSED as keep |

### Downloads personal candidates still on disk (~8 MB)

- `胡智恒出签信_2604151455.pdf`
- 6× `dzfp_*_甘肃省外事服务中心有限公司_*.pdf`
- `个人简历-hzh (1).pdf`, `Awesome_CV.zip`
- `Rednote Housing Search_ March 2026.xlsx`, `Japan_ML_Weekly_Calendar_Jan-Jun_2026.ics`
- `Registration-Overseas.docx`, `National Day Itinerary.pdf`, `膝盖治疗建议.pdf`
- English practice `.m4a`s (7), `Gemini_Chats\` (4 md)

### documents/ breakdown

| Subfolder | MB |
|-----------|----|
| travel | 47.4 |
| travel_reimbursement | 25.6 |
| admission | 24.9 |
| forms | 3.0 |
| employment | 0.7 |
| career | 0.1 |

---

## 2. Paper-cited MATE runs (Windows live)

Path: `D:\Something\research\MATE-Automation-V4\runs`  
**Cited-pattern dirs:** 22 · **sum ≈ 8.63 GB**  
**EXP3 / EXP4 / EXP6:** absent on this disk (no matching dirs).

| Dir | GB | MB | Mac prior gap flag |
|-----|----|----|--------------------|
| EXP1-XA-HC-100k | 0.633 | 648.3 | likely MISSING on Mac |
| EXP2-ConcatFusion-HC-100k-13C14C | 0.630 | 645.3 | likely MISSING |
| EXP2-ConcatFusion-HC-100k-3He4He | 0.506 | 517.8 | likely MISSING |
| EXP2-CrossAtt-HC-100k-13C14C | 0.757 | 774.8 | likely MISSING |
| EXP2-fusion-comparison | 0.001 | 1.0 | likely MISSING |
| EXP2-GatedFusion-HC-100k-13C14C | 0.505 | 516.7 | likely MISSING |
| EXP2-GatedFusion-HC-100k-3He4He | 0.760 | 778.5 | likely MISSING |
| EXP5-dataset-scaling | 0.001 | 0.6 | likely MISSING |
| EXP7-pdt-baseline | 0.001 | 0.6 | likely MISSING |
| EXP8-ResNet-Ideal-UnseenChannel | 0.663 | 679.1 | **Mac had EXP8 (verify which variant)** |
| EXP8-XA-Ideal-UnseenChannel | 0.663 | 678.8 | **Mac had EXP8 (verify which variant)** |
| TRK1-ResNet-TrackClass | 0.397 | 406.1 | likely MISSING |
| TRK2-XA-TrackClass | 0.522 | 534.2 | likely MISSING |
| TRK3-ResNet-AngleReg | 0.288 | 294.9 | likely MISSING |
| TRK3-v2-ResNet-AngleReg | 0.287 | 293.4 | likely MISSING |
| TRK4-v2-XA-AngleReg | 0.286 | 293.2 | likely MISSING |
| TRK5-ResNet-EnergyReg | 0.301 | 307.8 | likely MISSING |
| TRK6-XA-EnergyReg | 1.429 | 1463.7 | likely MISSING |
| TRK-comparison | 0.002 | 1.9 | likely MISSING |
| TRK-comparison-angle | 0.002 | 1.7 | likely MISSING |
| TRK-comparison-energy | ~0 | 0.1 | likely MISSING |
| TRK-comparison-energy-newrange | ~0 | ~0 | likely MISSING |

**IMP sale archive:** `windows_pc_sale_202609/` contains **only** `outputs_ViT` — **no** `runs/` upload yet. Depth search found no `EXP8*` under `huzh_2022` maxdepth 4 outside that need.

Mac parity note (prior gap list): **Mac had EXP8 only** — treat all non-EXP8 cited runs as Windows-unique until Mac Handoff A reconfirms.

---

## 3. MATE `data/` top-level (for selective subset decision)

Total **180.39 GB**.

| Name | Type | GB | MB | Notes for subset |
|------|------|----|----|------------------|
| trk_h5 | dir | 105.546 | 108078.8 | Dominant; children: `v1` 36.46 · `trk_all_uncompressed.h5` 34.45 · `cache` 34.38 · `alpha_sim_0_20_160` 0.25 |
| trk_h5_v3 | dir | 35.249 | 36095.3 | Large — keep only if paper needs v3 |
| trk_h5_v2 | dir | 35.210 | 36054.9 | Likely redundant vs v3/v1 — decide |
| trk_rawhits_v3 | dir | 1.356 | 1388.2 | |
| trk_npz | dir | 0.842 | 862.0 | |
| exp8 | dir | 0.818 | 837.9 | 9 H5 files (~100 MB each) — strong keep candidate |
| trk_npz_v3 | dir | 0.698 | 714.9 | |
| trk_npz_v2 | dir | 0.673 | 689.5 | |
| srim | dir | ~0 | 0.1 | |
| trk_hits_2mev | dir | 0 | 0 | empty |

**Still open:** exact named keep list (which trk_h5* / npz versions) not locked by user.

---

## 4. ViT upload on IMP (remote_exec OK)

Network/SSH: **succeeded**.

Local `D:\outputs` (1.56 GB):

| Folder | Local GB | Files | On IMP? |
|--------|----------|-------|---------|
| `V5_ViTCrossAttention_20250917_112159` | 1.171 | 14 | **YES** — full 1.2G, 14 files under `.../outputs_ViT/` |
| `V5_ViTCrossAttention_20250917_150127` | 0.384 | 7 | **NO** — checkpoints + `training_history.json` still Windows-only |
| three other timestamp dirs | 0 | 0 | n/a (empty) |

Remote root: `/home/stu_2021/huzh_2022/windows_pc_sale_202609/` = **1.2G** total, only `outputs_ViT/`.

**Gate:** PARTIAL — primary run landed; second non-empty run still needs upload (or explicit abandon).

---

## 5. `github_repo_forJob` dirty git (wipe risk)

- **Path:** `D:\Something\research\github_repo_forJob` (not `D:\github_repo_forJob`)
- **Remotes:** **none**
- **Branch:** `master` @ `bc16074` — no upstream
- **Dirty:** porcelain **423** lines ≈ **385 deletes** staged, **15** mods, **4** untracked
- Staged diffstat sample: **418 files changed**, large deletion hunk; sample deleted paths **already absent from disk** (recoverable from git objects at HEAD / pre-index)
- Bulk size is **`dataset/` ROOT files (~13.5 GB)** + `model_output` (~0.64 GB), mostly outside the tiny `.git` (0.29 GB)

**Wipe would lose:** (1) uncommitted index/worktree state, (2) the only copy of `dataset/` + `model_output` unless Drive/full-folder copy completes, (3) ability to restore staged-deleted paths if `.git` is not preserved.

**Recommend before wipe:**

1. `git bundle create github_repo_forJob.bundle --all` (captures commits/objects; ~0.3 GB class) **and/or**
2. **Full folder copy** to Drive/SSD including `dataset/` + `model_output` + `.git` (~14.4 GB) — **required** for the ROOT/data payload
3. Do **not** commit the mass deletes unless intentional; if committed later, keep parent commit in the bundle

---

## 6. Wipe-gate scorecard

| # | Box | Status | Blocker |
|---|-----|--------|---------|
| A | Personal `D:\Something\documents` → Drive/Mac | **OPEN** | Receipt/verify not done |
| B | C: Downloads personal pack → Drive/Mac | **OPEN** | Export not done (~8 MB ready) |
| C | `Documents\录音` → Drive/Mac | **OPEN** | Export not done |
| D | WPS offline-only triage → Drive/Mac | **OPEN** | Cloud parity not checked; 0.77 GB local |
| E | `github_repo_forJob` full copy or bundle+dataset | **OPEN** | No remote; dirty; 14.44 GB unique |
| F | MATE paper-cited runs → IMP | **OPEN** | 8.63 GB listed; sale dir has no runs yet; Mac only EXP8 historically |
| G | MATE data named subset locked + on IMP | **OPEN** | 180 GB tree; subset undecided |
| H | ViT `D:\outputs` complete on IMP | **CLOSED** | Both runs verified 2026-09-15: `112159` 1.2G + `150127` 394M (21 files) |
| I | Mac Handoff A/B gap confirmation | **OPEN** | Not closed in this Windows pass |
| J | Abandon AFTPC / WeChat / QQ / SSH | **CLOSED** | Keep-set excludes them |
| K | Dual-volume wipe plan (C:+D:) understood | **CLOSED** (procedural) | Still blocked by A–I |

### Bottom line

**Do not wipe.** Keep-set paths still exist and sizes match prior inventory (±noise), but **landing completeness fails** on personal Drive/Mac exports, forJob archive, MATE runs/data subset, and the remaining ViT run. Closest-to-done item: ViT primary run on IMP.

### Minimal next actions (ordered)

1. Upload Downloads personal pack + `录音` + decide WPS offline-only → Drive  
2. Full-copy `github_repo_forJob` (or Drive zip) **before** any wipe; optionally also `git bundle --all`  
3. Finish ViT: upload `V5_ViTCrossAttention_20250917_150127` or explicitly abandon  
4. Lock MATE data subset names; `remote_upload` paper runs (~8.6 GB) + subset to `windows_pc_sale_202609/`  
5. Mac Handoff B: confirm receipts → then dual-volume wipe
