# STATUS — Windows ↔ Mac baton

**Updated:** 2026-09-15 (Windows agent)  
**Repo:** `Edfghdrtxxx/OrbitOS` · branch `main`

## Baton holder: **Human** (manual Drive upload), then **Windows agent**

### Decision (Windows session)
- **`github_repo_forJob` EXCLUDED** from Drive pack — user: obsolete (2026-09-15).
- CDP web-access upload fleet **blocked** (Chrome remote-debugging Allow dropped).
- New plan: **one local package → human manual drag to Drive → Windows subagents organize/verify**.

### Package ready on Windows
Path:
`D:\obsidian\OrbitOS\99_System\.scratch\windows-sale-prep\Windows_PC_Sale_202609_UPLOAD\`

Contains: `01_documents`, `02_media_photos_ID`, `03_C_Downloads_keep`, `04_录音`, `05_ExpenseTracker_input`, `07_WPS_working_uniques`  
(~117 MB total; **no** `06_forJob`)

### Human upload steps
1. Sign into Drive as **`edfghdrtxxx@gmail.com` only**
2. Open: https://drive.google.com/drive/folders/1fsARSKmyDDnoKO2wL4xzsmWAxXk1sHRG
3. Drag folders `01`–`05` and `07` into that parent
4. Tell Windows agent: **manual upload finished**

### Then Windows will
- Dispatch subagents to verify contents / fix nesting
- Write `DRIVE_UPLOAD_RECEIPTS.md` → commit + push
- Human tells Mac to pull + spot-open samples

### Still not wipe-safe
TeamViewer/Autodesk/D: wipe/MATE selective→IMP/WSL/password rotate remain after Drive verify.

### Drive parent id
`Windows_PC_Sale_202609` = `1fsARSKmyDDnoKO2wL4xzsmWAxXk1sHRG`
