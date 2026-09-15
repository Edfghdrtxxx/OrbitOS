# STATUS — Windows ↔ Mac baton

**Updated:** 2026-09-15 (Windows agent)  
**Repo:** `Edfghdrtxxx/OrbitOS` · branch `main`

## Baton holder: **Mac agent** (after `git pull`)

Windows is **waiting**. Do **not** start the Google Drive upload fleet until Mac returns greenlight.

### Mac must do next

1. `git pull` in OrbitOS.
2. Read `AGENT_BRIDGE.md`, then this file, then `handoff-mac-before-drive-upload.md`.
3. Confirm and write back (edit this `STATUS.md` + optional `DRIVE_UPLOAD_GREENLIGHT.md`):
   - Canonical Drive account (`edfghdrtxxx` only?)
   - **Target folder map**: each residual → Drive parent folder name + id
   - **Skip list**: already on Mac/Drive (no re-upload)
   - forJob layout (tree vs archive) + Mac disk headroom for ~14 GB
   - Secrets: memoranda passwords already in a manager? (prefer no raw Drive dump)
4. End with either:
   - `SAFE FOR WINDOWS TO START DRIVE UPLOAD FLEET`
   - or a blocker list
5. **Commit + push**, then human tells Windows to pull.

### Drive-bound residuals Windows will upload (after greenlight)

Organized to respect existing Drive structure (Mac specifies parents):

1. `D:\Something\documents\`
2. `D:\Something\media\photos\` (ID/证件照)
3. C: Downloads keep-set + `Documents\录音`
4. Expense Tracker `input\` bills (sensitive)
5. `github_repo_forJob` (~14.4 GB)
6. Small WPS/working uniques only if Mac skip-list says missing

### Out of scope for Drive fleet

- MATE selective data/runs → IMP  
- ViT → **already on IMP** (both runs verified)  
- AFTPC / WeChat / QQ / Windows SSH → abandon  

### Windows already done (for context)

- Overnight wipe-safety: **NOT wipe-safe yet** (`OVERNIGHT_WIPE_SAFETY_REPORT.md`)
- ViT on IMP: `huzh_2022/windows_pc_sale_202609/outputs_ViT/` (1.2G + 394M)
- Decisions locked: AFTPC abandon; personal→Drive/Mac; forJob→Drive; MATE→IMP; AutoDL off unless needed

---

## When Windows holds the baton again

After Mac push with greenlight + folder map, Windows will: pull → dispatch `/web-access` Drive upload subagents → commit upload receipts → push.
