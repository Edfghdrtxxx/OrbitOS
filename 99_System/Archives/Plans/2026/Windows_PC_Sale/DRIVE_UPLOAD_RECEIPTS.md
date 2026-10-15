# Drive upload receipts (Windows)

**Account:** `edfghdrtxxx@gmail.com` only  
**Verified:** 2026-09-15 (after human manual upload)  
**Greenlight:** `DRIVE_UPLOAD_GREENLIGHT.md`  
**Method:** Human drag of packaged folders → Windows inventory via Drive API

## Parent

| Name | Folder id | Link |
|------|-----------|------|
| `Windows_PC_Sale_202609` | `1fsARSKmyDDnoKO2wL4xzsmWAxXk1sHRG` | https://drive.google.com/drive/folders/1fsARSKmyDDnoKO2wL4xzsmWAxXk1sHRG |

**Structure:** Flat children under parent — **no** nested `*_UPLOAD` wrapper. Organization OK; no agent moves required.

## Present on Drive (verified)

| Pack | Folder id | Drive content | vs local package |
|------|-----------|---------------|------------------|
| `01_documents` | `1sVyT32GaVjqyFfNXiu-0aqbHOsC_mZPn` | Full tree: admission, career, employment, forms, travel, travel_reimbursement + LZU论文封面 — **189 files** | **Complete** (189=189) |
| `02_media_photos_ID` | `1o9uO_IVIvHYpVwZQGOmIJswzAOEq4a8l` | 8 files (ID*/SongID*/证件照/selfie) | **Complete** |
| `03_C_Downloads_keep` | `1aSHH1kexbx2TrscMCDslWSf9UTMsm_qX` | Gemini_Chats (4 md) + 出签信 + 个人简历-hzh + 膝盖治疗建议 | **Partial by design** — see intentional omissions |
| `05_ExpenseTracker_input` | `1ArdL00JppZ4ynqiQ_2Tc4nRDY0VQnRxp` | 4 bill folders; sample xlsx present under hzh WeChat | **Complete** |
| `07_WPS_working_uniques` | `1WKLAUfXkJod6_SB3rUP-8R7-P9JnHCm7` | Empty folder shell | **Intentionally empty** (user filtered) |

### Key files spot-checked on Drive
- `Passport_Hu.PDF` in `01/.../travel`
- Admission 调档函 / 准考证 / 证件照
- `胡智恒出签信_2604151455.pdf` in `03`
- Expense Tracker WeChat bill xlsx under `05`

## Intentional omissions (user-confirmed 2026-09-15)

Do **not** treat as upload failures. User filtered stale / unneeded items:

| Omitted | Notes |
|---------|--------|
| Entire `04_录音` (5× m4a) | Not under parent; abandon |
| Most of staged `03` keep-set (~17 files) | e.g. English practice m4a, Japan ICS, Rednote xlsx, National Day itinerary, Registration-Overseas, Awesome_CV.zip, likely dzfp_* (dup of reimbursement) |
| `07` resume files (`个人简历.docx` / imagine.pdf) | Folder left empty |
| `06_github_repo_forJob` | Obsolete (earlier decision) |
| Package README | N/A |

## Empty / orphan Drive folders (harmless)

- `04_录音` id `11tqyVmdmUcs68VOdcymbaiXrnYkiW6n6` — empty or removed from parent listing  
- `06_github_repo_forJob` id `103VqzmyLbuOAYBfkz0mYEj5OL85f3zbL` — unused  
- `07` — empty shell kept  

Optional later: trash empty shells for tidiness (not done).

## Skip list (still honored)

NST / 60_Presentations / Literature / Corpy CV / vault / MATE / ViT / AFTPC / WeChat-QQ DBs / SSH / memoranda passwords — not in this upload.

## Mac verify checklist

1. `git pull`  
2. Open parent folder link above  
3. Spot-open: one admission PDF, `Passport_Hu.PDF`, 出签信, one Expense xlsx  
4. Confirm intentional omissions OK  
5. Reply in `STATUS.md` + push: `DRIVE PERSONAL PACK VERIFIED` or blockers  

## Wipe-gate impact (Drive personal residuals)

| Item | Status |
|------|--------|
| documents + ID photos + expense bills + curated Downloads | **On Drive** |
| 录音 / forJob / most Downloads staging / working resumes | **Accepted loss** |
| MATE selective → IMP | Still open |
| Security teardown (TeamViewer etc.) | Still open |
