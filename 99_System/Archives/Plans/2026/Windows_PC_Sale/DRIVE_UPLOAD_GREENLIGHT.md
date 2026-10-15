# Drive upload greenlight (Mac → Windows)

**Date:** 2026-09-15  
**Mac agent** after `git pull` of `cb727fc`  
**Verdict:** `SAFE FOR WINDOWS TO START DRIVE UPLOAD FLEET`

---

## 1. Canonical Google account

| Decision | Value |
|----------|--------|
| **Upload account** | **`edfghdrtxxx@gmail.com` only** |
| Do **not** use | `pom.0852853295@gmail.com` (not inventoried; different profile) |
| Quota | 5 TB membership; ~2.5 GB used; **headroom OK** for personal pack + ~14 GB forJob |

Chrome profile that already has this account logged into Drive (Mac scouts used it). Windows fleet must sign into the **same** account.

---

## 2. Target folder map (create once, then upload into)

**Parent:** create a **new top-level** folder on My Drive:

| Field | Value |
|-------|--------|
| Name | `Windows_PC_Sale_202609` |
| Why new top-level | Keeps sale residuals out of OrbitOS-shaped `50_`/`60_`/`70_` trees; matches existing pattern of topic roots (`Job Searching`, `Transfer`, `Finance & Investment`). Easy to find/delete later. |
| Folder id | *(Windows creates via Drive UI/API → write id back into upload receipt)* |

### Children (create under that parent)

| # | Drive folder name | Windows source | Notes |
|---|-------------------|----------------|-------|
| 1 | `01_documents` | `D:\Something\documents\` | Full tree; IDs/visa scans |
| 2 | `02_media_photos_ID` | `D:\Something\media\photos\` | IDFace/IDFlag/证件照/SongID* — personal pack |
| 3 | `03_C_Downloads_keep` | C: Downloads **keep-set only** (see §2b) | Flat or preserve subfolders (`Gemini_Chats\`) |
| 4 | `04_录音` | `C:\Users\petro\Documents\录音\` | If non-empty |
| 5 | `05_ExpenseTracker_input` | OrbitOS Expense Tracker `input\` WeChat/Alipay exports | **Sensitive** — restrict link sharing; no “anyone with link” |
| 6 | `06_github_repo_forJob` | `D:\Something\research\github_repo_forJob\` | **Mirrored folder tree** (not single zip). Exclude `node_modules`, `.venv`, `__pycache__`, large regenerable envs if present |
| 7 | `07_WPS_working_uniques` | Only files Mac skip-list does **not** cover from WPS offline + `D:\working\` | Upload **gaps only** after WPS cloud check; empty folder OK if nothing unique |

Optional sibling (not required for fleet start):

| Drive path | Use |
|------------|-----|
| Existing `Job Searching/` | Do **not** dump 14 GB forJob here — keep career Docs separate from full repo mirror under `06_…` |
| Existing `70_Notes/Personal Information/` | Passwords Doc already there — **do not** upload `memoranda` plaintext password dumps (see §5) |

### 2b. C: Downloads keep-set (into `03_C_Downloads_keep`)

Upload if present on Windows (names from `c-drive-triage.md`):

- 出签信 PDF(s)
- `dzfp_*` e-invoices
- `个人简历-hzh*.pdf` (and any other Reid CV finals **not** already the Corpy PDF on Drive)
- `Rednote Housing Search_ March 2026.xlsx`
- `Japan_ML_Weekly_Calendar_*.ics`
- `Registration-Overseas.docx`
- `National Day Itinerary.pdf`
- English practice `.m4a`s
- `Gemini_Chats\` + related `.md`
- Medical / 膝盖 PDF if still wanted

**Skip from Downloads:** installers, toolchains, junk 7z stubs, anything already on Mac Downloads with same name+size (optional hash).

---

## 3. Skip list (do **not** re-upload)

Already on Drive and/or Mac — Windows must **not** blind-reupload:

| Item | Where | Action |
|------|--------|--------|
| `NST-2025-0958_Proof_hi.pdf` | Drive Google AI Studio `1CjXlCtik0gj5lMoHXDDpwSaFO-OZe0AZ` | Skip |
| Named coursework PPT pack (`CNS_PPT_20250815`, `group_meeting_20260326`, ChannelScaling, Hyperparameters, `ML_in_NuclearPhysics`, …) | Drive `60_Presentations/` id `1uPdg0G4774qHi17XK0qDP5gRxdTYWlzu` | Skip pack; **optional later:** Windows dir listing diff vs 601–615 for *extras only* |
| Literature ML PDFs (~21) | Drive `50_Resources/Physics/Literature/Machine Learning/` | Skip known titles; extras only if Windows has unique PDFs |
| `Zhiheng_Hu_CV_Corpy.pdf` | Drive AI Studio `1j-WquAbw-HakJc5oFc6AiI5OygD6ujcz` | Skip Corpy twin; still upload other `个人简历-hzh*` finals if different |
| OrbitOS vault content | Mac git + GitHub | Skip vault trees |
| MATE-Automation-V4 **code** | Mac + GitHub | Skip |
| ViT `D:\outputs` | **IMP** `huzh_2022/windows_pc_sale_202609/outputs_ViT/` (both runs verified) | **Out of Drive fleet** |
| MATE selective `data/` / paper `runs/` | Landing = **IMP** (not this fleet) | **Out of Drive fleet** |
| AFTPC tree | Abandon (IMP already has 15G sibling copy) | Skip / abandon |
| WeChat / QQ DBs | Abandon | Skip |
| Windows SSH keys / API tokens | Mac already works | **Destroy**, do not upload |
| Chrome profile | Chrome Sync | Skip |
| Browser / Clash / AI agent home dirs | Destroy | Skip |
| Server context plaintext passwords (`IMP_server_context.md` etc.) | Private MATE git — rotate later | **Never upload to Drive** |

---

## 4. forJob layout + Mac disk

| Decision | Value |
|----------|--------|
| Layout | **Mirrored folder tree** under `06_github_repo_forJob/` (not one giant zip) |
| Why | Resumable uploads; selective Mac pull; git history stays as `.git` if present |
| Exclude | `node_modules/`, `.venv/`, `venv/`, `__pycache__/`, `*.pyc`, large caches |
| Also | After tree upload, optional: `git bundle --all` as single small extra file `forJob.bundle` inside same folder (history insurance) |
| Mac headroom | **~273 GB free** on Data volume — enough to pull ~14 GB later |
| Mac pull path (later) | e.g. `/Users/Reid Hu/github_repo_forJob` or external SSD — not required before Windows upload starts |

---

## 5. Secrets / memoranda

| Item | Mac decision |
|------|----------------|
| `D:\memoranda_Legacy\` + OrbitOS `100_Memoranda\*password*` | **Do not raw-dump to Drive** |
| Prefer | Import into a password manager on Mac (or confirm already there), then destroy Windows copies |
| Drive already has | `70_Notes` → Personal Information → `passwords` Google Doc — treat as existing notes, **not** a reason to upload more plaintext secret trees |
| Chrome passwords | Sync — skip |
| Expense Tracker CSVs | Allowed under `05_…` (financial history, not login secrets) — keep folder private |

---

## 6. Out of scope (reconfirmed)

- MATE selective data/runs → IMP  
- ViT → already on IMP  
- AFTPC / WeChat / QQ / Windows SSH → abandon  
- AutoDL → leave off  

---

## 7. Windows post-upload obligations

1. Write upload receipts (path → Drive file/folder id, size, time) into `90_Plans/Windows_PC_Sale/` (e.g. `DRIVE_UPLOAD_RECEIPTS.md`).  
2. Put created parent folder id into receipts + update `STATUS.md`.  
3. Commit + push OrbitOS; human tells Mac to pull for verify.  
4. Do **not** wipe until Mac opens samples from Drive (documents + one forJob path) once.

---

## 8. Greenlight line

```
SAFE FOR WINDOWS TO START DRIVE UPLOAD FLEET
```

Account: `edfghdrtxxx@gmail.com` only.  
Parent folder: create `Windows_PC_Sale_202609/` with children `01`–`07` as mapped above.  
Respect skip list. forJob = tree mirror under `06_`. No memoranda password dumps. No MATE/ViT/AFTPC on this fleet.
