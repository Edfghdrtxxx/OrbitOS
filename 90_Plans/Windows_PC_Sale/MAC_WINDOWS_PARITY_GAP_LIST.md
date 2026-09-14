# Mac ↔ Windows Parity Gap List (pre-wipe)

**Date:** 2026-09-14 (Mac inventory + **Google Drive CDP inventory**)  
**Purpose:** Cloud-upload only what Mac **and** Drive are missing before Windows PC sale.  
**Method:**  
1. Mac inventory under `/Users/Reid Hu` + `/Users/leyi`.  
2. Google Drive inventory via Chrome CDP (`edfghdrtxxx@gmail.com`, 2.5 GB / 5 TB used; Drive files ~1.01 GB).  
Windows sizes from handoff + 2026-04-12 Imai path maps. **No live Windows mount.**

**Out of scope (user-confirmed):** WeChat/QQ chat DBs · Chrome bookmarks/passwords (Sync) · SSH keys/API tokens (Mac already works; destroy Windows copies).

**Prior notes:** No dedicated sale-prep checklist existed on Mac. Closest Windows maps:  
`70_Presentations/711_imai-meeting-presentation-20260413/{05_code_repos,06_figures_outputs,07_presentations_docs}.md`

**Drive scout reports:**  
`DRIVE_SCOUT_PERSONAL.md` · `DRIVE_SCOUT_RESEARCH.md` · `DRIVE_SCOUT_COURSE_BACKUP.md`

**Drive headline:** Quota proves the ~288 GB Windows archive is **not** mirrored. Drive is slides + literature + Gemini artifacts (~1 GB files). **Computers** = “No computers syncing” (no Drive-for-desktop Windows backup). Other account `pom.0852853295@gmail.com` **not** inventoried.

---

## Executive summary

| Priority | Hotspot | Mac | Drive (`edfghdrtxxx`) | Action before wipe |
|---|---|---|---|---|
| **P0** | `D:\Something\documents\` IDs/visa scans (~0.1 GB) | **MISSING** | **MISSING** | Cloud-copy entire folder (Drive is empty of this pack) |
| **P0** | CNS `Invitation - ZhiHeng_Hu.pdf`, `CoE_nimai.pdf` | **MISSING** | **MISSING** (exact-title empty) | Cloud-copy from Windows `visa_ZhiHeng\` |
| **P0** | `github_repo_forJob` (~14 GB, **no remote**) | **MISSING** | **MISSING** | Full copy off Windows (ext/cloud); optional private git |
| **P0** | AFTPC git unpushed / “Back up” | Unknown | N/A | Windows: push all or `git bundle --all` |
| **P0** | AFTPC NST `NST-2025-0958_Proof_hi.pdf` | **MISSING** on Mac | **HIT** — Google AI Studio `1CjXlCtik0gj5lMoHXDDpwSaFO-OZe0AZ` | Drive covers cloud; optional pull to Mac |
| **P0** | AFTPC `Physics_Informed_LegacyBackup/` + architecture | **MISSING** | **MISSING** | Still must cloud from Windows |
| **P0** | AFTPC `dataset/` Garfield (~46 GB) | **MISSING** | **MISSING** (impossible at 1 GB Drive) | Copy-or-document-loss; not regenerable from Mac/Drive |
| **P1** | AFTPC `outputs/` + code tree | **MISSING** | **MISSING** | Selective after git safe |
| **P1** | MATE `data/` ~180 GB | Mac 23 MB only | **MISSING** | Selective H5 list |
| **P1** | MATE paper `runs/` EXP1–7 / TRK1–4 | PARTIAL (EXP8 only) | **MISSING** | Keep Windows until copied/abandoned |
| **P1** | Coursework PPT pack (CNS/group_meeting/ChannelScaling/…) | Mac missing tree | **HIT** under Drive `60_Presentations/` | PPT pack largely clouded; still diff Windows listing for extras |
| **P1** | Reid CV finals | Mac weak | **PARTIAL** — `Zhiheng_Hu_CV_Corpy.pdf` + Job Searching Docs | Confirm equals Windows finals; else copy |
| **P1** | `D:\outputs\` ViT ~1.56 GB | **MISSING** | **MISSING** (only ViT PPTX) | Copy or mark obsolete |
| **P2** | Literature ML PDFs | Mac partial | **HIT** ~21 PDFs under `50_Resources/Physics/Literature/` | Diff vs Windows; re-download OA gaps |
| **P2** | NUSYS 2024 / Beamer / meeting_record / 录音 / invoices / PPAC / simulations | Missing | **MISSING** | Windows list-or-abandon |
| **OK (narrow)** | OrbitOS, MATE **code** (git), Japan planning notes | Present | N/A (git/GitHub) | Safe for those Windows copies only |

**Bottom line:** Do **not** wipe Windows yet. Drive already covers **NST proof** + **named coursework PPT pack** + **literature PDFs** + **partial CV**. Drive does **not** cover IDs/visa/CoE, forJob, AFTPC tree/dataset/LegacyBackup, or MATE data/runs. Mac remains primary for vault + MATE code only.

---

## 1. Gap list (Windows present → Mac missing/outdated)

Size class: **S** = small cloud-OK (≲1 GB) · **M** = medium selective (1–20 GB) · **L** = large selective (≫20 GB; no blind full dump)

### 1.1 Personal / admin

| Windows path | ~Size | Mac | Drive | Class / action |
|---|---|---|---|---|
| `D:\Something\documents\` | ~0.1 GB | **None** (planning notes only) | **ABSENT** — no 护照/户口/身份证/出签 scans; no `documents` folder | **S — MUST cloud** (Drive empty) |
| CNS `...\visa_ZhiHeng\` (`Invitation - ZhiHeng_Hu.pdf`, `CoE_nimai.pdf`) | small | **Not found** | **ABSENT** (exact-title empty; CNS announcement Doc ≠ invitation) | **S — MUST cloud** |
| C: Downloads invoices / 出签信 / Reid CV | unknown | no 出签信; no Reid final CV | **出签/发票 ABSENT**; **CV PARTIAL** — `Zhiheng_Hu_CV_Corpy.pdf` (`1j-WquAbw-HakJc5oFc6AiI5OygD6ujcz`) + Job Searching Docs | **S** — still hunt 出签/invoices on Windows |
| `Documents\录音` | unknown | one mov only | **ABSENT** | **S–M** |
| Legacy Obsidian Vault | unknown | OrbitOS primary | N/A | **S** |

### 1.2 Coursework / presentations / literature

| Windows path | Mac | Drive | Class / action |
|---|---|---|---|
| `coursework\presentations\ML_in_Data_Analysis\` | No tree; newer decks in OrbitOS `70_Presentations/` only | **HIT** — named PPTX under Drive `60_Presentations/` (`603` CNS, `610` group_meeting, `608` ChannelScaling, `605` Hyperparameters, `601` ML_in_NuclearPhysics 56 MB, …). Folder id `1uPdg0G4774qHi17XK0qDP5gRxdTYWlzu` | **M** — pack largely **clouded**; still diff Windows listing for extras before abandoning Windows folder |
| `UCAS_Beamer` | Not found | HTML UCAS template only — **no Beamer** | **S** optional |
| `conferences\2024_NUSYS\`, `2025_CNS\` | Not found | CNS PPT **yes**; NUSYS **miss**; visa PDFs **miss** | **S–M** residual |
| `literature\MachineLearning\PDFVersion\` | Mac partial few PDFs | **HIT** ~21 ML PDFs under Drive `50_Resources/Physics/Literature/Machine Learning/` | **S** — diff vs Windows; OA re-download gaps |
| `meeting_record_2024.4.25.doc` | Not found | **MISS** | **S** |

### 1.3 Research trees

| Windows path | Win ~size | Mac | Drive | Class |
|---|---|---|---|---|
| MATE-Automation-V4 **code** | git | `/Users/Reid Hu/MATE-Automation` 3.6G · 0/0 vs possibly stale origin @ `53fff68` | N/A (GitHub) | fetch both sides |
| MATE `data\` | ~180 GB | 23 MB sidecar only | **MISS** (no .h5; Drive files total 1.01 GB) | **L selective** |
| MATE `runs\` | ~12 GB | 716 MB EXP8+baselines only | **MISS** (no .pth) | **M–L keep until copied** |
| MATE outputs + thesis figures | — | 482M + 19M figures | slides only | spot-check Imai figure names |
| AFTPC full tree | ~71 GB | **ABSENT** | **ABSENT** (search empty) | **L** |
| AFTPC NST proof PDF | small | Mac miss | **HIT** Google AI Studio `1CjXlCtik0gj5lMoHXDDpwSaFO-OZe0AZ` | **S clouded on Drive** |
| AFTPC LegacyBackup + architecture | S–M | miss | **MISS** | **S MUST cloud** |
| AFTPC Garfield dataset | ~46 GB | miss | **MISS** | **L copy-or-loss** |
| AFTPC outputs V4/V6 | ~23 GB | miss | **MISS** | **M selective** |
| `github_repo_forJob` | ~14 GB | miss; no remote | **MISS** (Job Searching ≠ repo) | **M full copy** |
| `D:\outputs` ViT | ~1.56 GB | miss | **MISS** (ViT PPTX only) | **M** |
| PPAC / simulations | ? | wiki only | **MISS** | list-or-abandon |
| Personal Website | — | Mac + GitHub | N/A | OK after git check |

### 1.4 WSL / C: system / Drive Computers

| Path | Mac / Drive | Notes |
|---|---|---|
| `D:\WSL\Ubuntu\ext4.vhdx` (~37 GB) | No Mac vhdx; Drive Computers empty | Skim Ubuntu home; default abandon if no uniques |
| Drive-for-desktop Computers | — | **“No computers syncing”** — Windows PC is **not** backed up to this Drive |
| Regenerable installs / venvs | — | Do not bulk-copy |

---

## 2. Mac-confirmed subset only — Windows twins of *these* may be destroyed

**Not a license to delete whole research trees.** Destroy the Windows copy of an item below **only** after the Mac/git check for that item. Everything in §1 gaps and the **DO NOT DESTROY** block stays until transferred or explicitly abandoned in writing.

### DO NOT DESTROY on Windows until gated
- Entire `AFTPC_V3_MultiAgentVersion\` (git + dataset + outputs + **LegacyBackup thesis**). NST proof PDF may stay if Drive copy verified opened once; still prefer local Mac pull.
- Entire `github_repo_forJob\`
- `D:\Something\documents\` and CNS `visa_ZhiHeng\` PDFs
- MATE `data\` bulk and MATE `runs\EXP1*`, `EXP2*`, `EXP3*`, `EXP4*`, `EXP5*`, `EXP6*`, `EXP7*`, `TRK1*`, `TRK2*`, `TRK3*`, `TRK4*`, `TRK-comparison\` (and any other run dir not present on Mac)
- `D:\outputs\` ViT until obsolete/copied decision
- Coursework `ML_in_Data_Analysis\` PPT pack until **Windows listing is diffed** vs Drive `60_Presentations/` (named decks already on Drive — extras unknown)
- `PPAC\`, `simulations\` until listed or abandoned

### Documents / knowledge (Mac primary)
- **OrbitOS vault** `/Users/Reid Hu/OrbitOS` — git `origin` → `Edfghdrtxxx/OrbitOS.git`, local main SHA equals last-known `origin/main` (`d4ea66a…`). Prefer one more `git fetch` before wiping any Windows vault clone. Covers daily notes, Japan_Itinerary **planning**, wiki, meeting outlines, thesis admin under `20_Project/MaterThesisPapers/`.
- Japan immigration **notes/checklists** (not scans): `20_Project/Japan_Itinerary/`, `40_Wiki/Japan_Immigration/`.
- GRE/TOEFL study materials + Physics GRE app under OrbitOS + `/Users/Reid Hu/Physics GRE`.
- Claude export archive under `99_System/Archives/Claude_Export/` (+ Gemini zip in Downloads).
- Personal Website Mac tree + remote (after Windows git status clean).

### Research — Mac-confirmed slices only
- **MATE-Automation-V4 git-tracked code** on Mac + GitHub — **after** `git fetch` on Mac shows still 0/0 **and** Windows `git log origin/master..HEAD` is empty (or pushed). Remote-tracking ref on Mac was last touched ~2026-08-19 at inventory time.
- MATE `data/srim/` + `truth_sidecar_v2.h5` only (not bulk `data\`).
- MATE run dirs **that exist on Mac** (EXP8 pair + listed baselines/TRK5–6 pred dirs) — Windows may delete **those same named dirs** only after optional checksum; **not** a blanket `runs\` delete.
- MATE thesis figures **after** spot-check vs Imai list (confirm or copy missing `example_tracks*`, `network_architecture*`, any AFTPC-only figure paths).
- Recent presentation work already in `OrbitOS/70_Presentations/` (711–716, Progress Beyond Paper, mid-term) — does **not** cover CNS 2025 / Mar-2026 group-meeting archive under coursework.

### Explicitly abandon on Windows (user policy)
- Local WeChat/QQ databases.
- Chrome profile (Sync covers bookmarks/passwords).
- Windows SSH keys / API token copies.
- Python/CUDA installs, WSL distro image (**after** skim for unique home files).
- Agent scratch, venvs, `__pycache__`, node_modules.

---

## 3. Windows-only git state (must push or archive)

| Repo | Remote | Risk | Required action on Windows |
|---|---|---|---|
| **AFTPC_V3_MultiAgentVersion** | Had origin historically; handoff: **ahead of origin**, unpushed **“Back up”** commit | **P0** — history + possibly last working tree state only on Windows | `git -C <aftpc> status -sb`; `git log origin..HEAD --oneline`; **push all branches + tags**. If push rejected/private remote gone → bundle: `git bundle create AFTPC_backup.bundle --all` and cloud that file |
| **github_repo_forJob** | **NO remote** | **P0 CRITICAL** — 14 GB + history die with disk; may include **physics-feature / dE-dx / Bragg** libraries (archive transcript), not only job-prep | Copy whole tree; optional private remote + push, or `git bundle --all` |
| **MATE-Automation-V4** | `Edfghdrtxxx/MATE-Automation-V4` | Mac local 0/0 vs **possibly stale** origin ref. Windows may still have unique commits; **runs/data never in git** | Mac + Windows: `git fetch`; Windows `git log origin/master..HEAD` → push. Push does **not** save `runs/` or `data/` |
| **OrbitOS** (old `D:\obsidian\OrbitOS`) | GitHub | Mac is primary | `git fetch` + confirm no unique unpushed commits on Windows vault clone |

**Cannot verify from Mac:** AFTPC ahead/behind, job-prep contents, whether “Back up” still exists. Those need a live Windows shell.

**Cloud-adjacent GitHub (account Edfghdrtxxx) — not substitutes for missing trees:**
- `MATE-Automation-V4` (private) — cloned, synced.
- `MATE-Event-Classifier-DL` (public, ~3.5 MB) — old slice, not 71 GB AFTPC.
- `Real-MATE-Identifier` (private, ~401 MB) — **not cloned**; unknown contents; still ≪ AFTPC/job-prep. Optional later clone, not wipe blockers alone.
- No GitHub repo named `AFTPC*` or `github_repo_forJob`.

---

## 4. Recommended transfer order (cloud-first)

1. **On Windows, freeze deletes.**  
2. **Git first (minutes):** push/bundle AFTPC (incl. “Back up”); bundle/remote for `github_repo_forJob`; fetch+push any unique MATE/OrbitOS commits.  
3. **Small irreplaceables still missing from Mac+Drive (cloud now):**  
   - `D:\Something\documents\` entire  
   - CNS `...\visa_ZhiHeng\` (`Invitation - ZhiHeng_Hu.pdf`, `CoE_nimai.pdf`) — **not** on Drive  
   - AFTPC `thesis\Physics_Informed_LegacyBackup\` + `docs\architecture\` + `thesis_proposal_images\` — **not** on Drive  
   - 出签信; invoices if any; `meeting_record_2024.4.25.doc`  
   - Optional: pull Drive NST proof + Corpy CV to Mac for offline  
4. **Already on Drive — skip re-upload unless Windows has newer/extra files:**  
   - Named coursework PPT pack → Drive `60_Presentations/`  
   - Literature ML PDFs → Drive `50_Resources/Physics/Literature/`  
   - `NST-2025-0958_Proof_hi.pdf` → Drive Google AI Studio  
   - Still **diff** Windows `ML_in_Data_Analysis\` listing vs Drive 601–615 before abandoning  
5. **Medium unique (cloud or SSD):** full `github_repo_forJob`; NUSYS posters if any; paper-cited AFTPC `outputs\`; paper-cited MATE `runs\EXP1*`–`EXP7*`, `TRK1*`–`TRK4*`, `TRK-comparison\`; `D:\outputs` ViT if still needed.  
6. **Large selective (external SSD preferred — Drive has 5 TB free but multi-day uploads):**  
   - AFTPC `dataset\` → copy or written accept-loss (not regenerable from Mac/Drive)  
   - MATE `data\` → named H5/NPZ subset only  
7. **Skim then drop:** WSL; PPAC/simulations list-or-abandon; venvs; installs; chat DBs.  
8. **Re-inventory Mac (+ optional second Drive account)**; tick §7; then wipe.

### Do not bulk-copy
- Full 180 GB MATE data if a **named** subset underpins published figures.  
- Agent scratch, `__pycache__`, tool installs, CUDA/Python distributions.  
- Re-uploading PPT/literature already on Drive without a Windows-vs-Drive diff.  
- **Do not** skip AFTPC Garfield dataset as “regenerable” without Windows script/seed/server evidence.

---

## 5. Evidence anchors (2026-09-14)

```
Mac /Users/Reid Hu/
  MATE-Automation/     3.6G   data 23M · runs 716M · outputs 482M · .git 1.4G
  OrbitOS/             ~1G    vault primary
  (no AFTPC*, no github_repo_forJob*, no Something/)

MATE git: origin MATE-Automation-V4.git @ 53fff68 · 0/0 vs local origin ref (fetch age ~2026-08-19)
.pth on Mac: EXP8 ResNet + EXP8 XA only

Google Drive edfghdrtxxx@gmail.com
  Quota: 2.49 GB / 5 TB (Drive files 1.01 GB · Photos 1.28 GB · Gmail 0.23 GB)
  Computers: No computers syncing
  HIT: NST-2025-0958_Proof_hi.pdf (Google AI Studio)
  HIT: 60_Presentations PPT pack (CNS, group_meeting, ChannelScaling, …)
  HIT: Literature/Machine Learning ~21 PDFs
  PARTIAL: Zhiheng_Hu_CV_Corpy.pdf
  MISS: documents/IDs, Invitation/CoE, forJob, AFTPC tree/dataset/LegacyBackup, MATE data/runs, NUSYS

Photos Mac: /Users/leyi/Pictures/Photos Library.photoslibrary (~197 MB)
Other Google account pom.0852853295@gmail.com: NOT inventoried
```

Mac scouts: `agent://PersonalDocs`, `MATETree`, `AFTPCJobCkpt`, `PriorNotes`, `GapReview`.  
Drive scouts: reports in `90_Plans/Windows_PC_Sale/DRIVE_SCOUT_*.md`.


---

## 6. Uncertainty / residual risk

| Flag | Impact |
|---|---|
| No live Windows filesystem | Gaps are Mac/Drive missing vs expected hotspot, not hash-diff |
| Unmounted USB/NAS/Time Machine | Could hold copies invisible here |
| Apple Photos | `Photos Library.photoslibrary` ~197 MB — open once for ID scans |
| Second Google account `pom.0852853295@gmail.com` | Drive **not** searched — residual cloud unknown |
| Shared drives / Team Drives | Sidebar showed none on this consumer account; **not proven zero** (scouts’ residual) |
| Drive Bin | Not fully inventoried |
| Drive PPT ≠ proven byte-identical to Windows | Diff file lists before abandoning Windows coursework |
| `Real-MATE-Identifier` uncloned (~401 MB) | Not a 71 GB stand-in |
| MATE/OrbitOS origin fetch age | Fetch on both machines before trusting 0/0 |
| Windows sizes user-given / Apr-2026 notes | Re-`du` before multi-day uploads |
| forJob contents unknown | Full-copy; may include physics-feature code |

---

## 7. Wipe gate checklist (all must be YES)

### P0 — blockers
- [ ] `documents\` (IDs/visa) on Mac **or** Drive and opened once  
- [ ] CNS `Invitation - ZhiHeng_Hu.pdf` + `CoE_nimai.pdf` on Mac **or** Drive  
- [ ] AFTPC: all commits pushed **or** `git bundle --all` saved  
- [x] AFTPC NST proof PDF **present** on Drive (`1CjXlCtik0gj5lMoHXDDpwSaFO-OZe0AZ`)  
- [ ] User opened/downloaded NST proof once (confirm readable offline or on Drive)  
- [ ] AFTPC `thesis/Physics_Informed_LegacyBackup/` (+ architecture) clouded — **still open**  
- [ ] `github_repo_forJob` full tree (or bundle) off Windows  
- [ ] AFTPC `dataset/` decision: **copied / accept loss** (regenerate only with Windows Garfield evidence)  

### P1 — science continuity
- [ ] Paper-cited MATE `runs` (EXP1–7, TRK1–4, TRK-comparison, …) copied or abandoned  
- [ ] ViT `D:\outputs` decision  
- [ ] Selective AFTPC `outputs/` copied or abandoned  
- [ ] MATE `data/` subset decision  
- [x] Named coursework PPT files **found** on Drive `60_Presentations/`  
- [ ] Windows `ML_in_Data_Analysis\` dir listing **diffed** vs Drive 601–615 (catch extras)  
- [ ] Thesis figures spot-check (`example_tracks*`, `network_architecture*`, …)  
- [ ] Mac + Windows `git fetch` clean for MATE + OrbitOS  
- [ ] Reid CV: accept Drive Corpy PDF as enough **or** copy Windows finals  

### P2 — skim
- [x] Literature ML PDFs largely on Drive — optional Windows diff  
- [ ] NUSYS / Beamer / meeting_record list-or-abandon  
- [ ] `PPAC\` + `simulations\` listed or abandoned  
- [ ] WSL home skimmed  
- [ ] Photos library opened once  
- [ ] Optional: inventory other Google account `pom.085…` Drive  
- [ ] This file updated with remaining “transferred” marks  

**Until every unchecked P0 box is YES: Windows disk is still load-bearing. Do not sell/wipe.**

---

## 8. Google Drive inventory summary (this session)

| Surface | Result |
|---|---|
| Account | `edfghdrtxxx@gmail.com` · Google membership · 5 TB |
| Used | **2.49 GB** total (Drive **1.01 GB** · Photos 1.28 GB · Gmail 0.23 GB) |
| Computers | **Empty** — no Windows/Mac desktop sync |
| Shared with me | RCNP only (4 items) — no datasets/IDs |
| Bin | Trivial md only |
| Already clouded (use; don’t re-upload blindly) | NST proof; `60_Presentations` PPT pack; Literature ML PDFs; partial CV |
| Still Windows-only after Drive hunt | documents/IDs; Invitation/CoE; 出签/invoices/录音; forJob; AFTPC tree/dataset/LegacyBackup/outputs; MATE data/runs; NUSYS; PPAC/simulations |
| Detail reports | `DRIVE_SCOUT_PERSONAL.md` · `DRIVE_SCOUT_RESEARCH.md` · `DRIVE_SCOUT_COURSE_BACKUP.md` |
