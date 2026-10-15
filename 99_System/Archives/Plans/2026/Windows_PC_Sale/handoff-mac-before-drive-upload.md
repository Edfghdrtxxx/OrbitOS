# Handoff: Confirm Mac/Drive state before Windows Drive upload fleet

```markdown
# Handoff: Pre-check before Windows uploads residuals to Google Drive

## Why This Matters
Windows is about to upload sale residuals to Google Drive (`edfghdrtxxx`). Mac already scouted Drive. Uploading without Mac confirmation risks duplicates, wrong folders, and missing “already on Mac” skips. User wants Drive kept well-organized and to respect the structure already there.

## Current State
- Parity + Drive scouts: `90_Plans/Windows_PC_Sale/` (`MAC_WINDOWS_PARITY_GAP_LIST.md`, `DRIVE_SCOUT_*.md`)
- Windows overnight report: `99_System/.scratch/windows-sale-prep/OVERNIGHT_WIPE_SAFETY_REPORT.md`
- Drive-bound upload pack (Windows → Drive; MATE science stays IMP):
  1. `D:\Something\documents\` (~0.1 GB)
  2. `D:\Something\media\photos\` (ID/证件照 — newly flagged)
  3. C: Downloads keep-set (出签信, dzfp invoices, CV, 录音-related m4a, Gemini_Chats, Japan ICS, Rednote xlsx, itinerary, medical PDF)
  4. `C:\Users\petro\Documents\录音\`
  5. OrbitOS Expense Tracker `input\` WeChat/Alipay exports (sensitive)
  6. `github_repo_forJob` (~14.4 GB, dirty, no remote) — full tree
  7. Small uniques only: WPS offline gaps, `D:\working\` resume drafts if not duplicated
- Already on Drive (do not re-upload blindly): NST proof; `60_Presentations/` PPT pack; Literature ML PDFs; partial CV Corpy
- ViT already on IMP — out of scope for Drive

## Success Criteria
- A written **target folder map**: each Windows residual → exact Drive parent folder name + folder id (create `Windows_PC_Sale_202609/` tree only if Mac agrees it fits existing structure)
- Explicit **skip list**: files/folders Mac or Drive already hold (opened/verified), so Windows must not upload
- Confirmation which Google account is canonical for this upload (`edfghdrtxxx` vs also check `pom.085…`)
- forJob: preferred Drive layout (single zip vs mirrored folder tree) and whether Mac has disk space to pull ~14 GB afterward
- Greenlight line: `SAFE FOR WINDOWS TO START DRIVE UPLOAD FLEET` or a blocker list

## Non-document facts
- User chose Drive for personal + forJob; IMP for MATE selective/ViT (ViT already done).
- User asked uploads to respect existing Drive structure and stay well-organized.
- Personal IDs/visa must not go to IMP/AutoDL.
- Chrome Sync covers browser passwords; do not upload browser profiles.
- Memoranda plaintext password files: prefer password-manager migration, not raw upload to Drive — Mac should say whether those secrets already live elsewhere.

## Principles of Paramount Importance
- **Zero Assumptions:** Never guess user intent. If multiple implementations exist or requirements are incomplete, **halt and use the `AskUserQuestion` tool** to gather explicit direction.
- **No Silent Assumptions:** Even when the task is requested, confirm the *method* if it wasn't specified.
```
