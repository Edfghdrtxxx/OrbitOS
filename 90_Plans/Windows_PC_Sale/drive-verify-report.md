# Drive verify report — Windows_PC_Sale_202609

**Date:** 2026-09-15  
**Parent folder:** `Windows_PC_Sale_202609` (`1fsARSKmyDDnoKO2wL4xzsmWAxXk1sHRG`)  
**Method:** READ-ONLY `google_drive__list_folder` / `google_drive__search`  
**Local baseline:** `99_System/.scratch/windows-sale-prep/local_package_manifest.txt` (233 paths)

---

## Drive structure (as uploaded)

```
Windows_PC_Sale_202609/                    # parent — NO nested UPLOAD wrapper
├── 01_documents/                          # COMPLETE vs local (189 files)
│   ├── LZU论文封面.docx
│   ├── admission/                         # 16 files
│   ├── career/                            # 4 files
│   ├── employment/                        # 4 files
│   ├── forms/                             # 7 files
│   ├── travel/                            # 30 files + 3 subfolders
│   │   ├── Internal_Documents_IMP/        # 12 files
│   │   ├── 上海领区日本单次-电子签证须知3.10/  # 4 subfolders + 4 root files → 36 files total
│   │   └── 北京领区【日本单次】电子签证须知3.31/
│   │       └── 北京领区【日本单次】电子签证须知3.31/  # double-nest (matches local) → 39 files
│   └── travel_reimbursement/
│       ├── from_UCAS_Itinerary_202506/    # 7
│       ├── Japan_Itinerary_202508/        # 15
│       ├── RCNP_202511/                   # 14
│       └── RIBLL1_Exp_Dorm_202504/        # 4
├── 02_media_photos_ID/                    # COMPLETE (8 files)
├── 03_C_Downloads_keep/                   # PARTIAL (7 of 24)
│   ├── Gemini_Chats/                      # 4 .md — complete
│   ├── 个人简历-hzh (1).pdf
│   ├── 胡智恒出签信_2604151455.pdf
│   └── 膝盖治疗建议.pdf
├── 05_ExpenseTracker_input/               # COMPLETE (4 nested files)
│   ├── hzh微信支付…/ → 1 xlsx
│   ├── sxy微信支付…/ → 1 xlsx
│   ├── sxy支付宝…/ → 1 csv
│   └── 支付宝交易明细…/ → 1 csv
└── 07_WPS_working_uniques/                # EMPTY (0 of 2)
```

**Not present under parent:**
- `04_录音` (folder id `11tqyVmdmUcs68VOdcymbaiXrnYkiW6n6` lists empty; **not** a child of parent; name search finds no folder)
- `06_github_repo_forJob` (staging id `103VqzmyLbuOAYBfkz0mYEj5OL85f3zbL` lists empty; not under parent)
- `README_FOR_HUMAN.txt`
- Any `Windows_PC_Sale_202609_UPLOAD` wrapper (Drive-wide folder search: only the parent `Windows_PC_Sale_202609`)

---

## File counts per folder

| Folder | Drive files | Drive folders | Local manifest | Status |
|--------|------------:|--------------:|---------------:|--------|
| Parent root | 0 | 5 | 1 (README) | missing README; no 04 |
| 01_documents (all nested) | **189** | (structure OK) | 189 | **complete** |
| — admission | 16 | 0 | 16 | OK |
| — career | 4 | 0 | 4 | OK |
| — employment | 4 | 0 | 4 | OK |
| — forms | 7 | 0 | 7 | OK |
| — travel (+visa pkgs + IMP) | 117 | … | 117 | OK |
| — travel_reimbursement | 40 | 4 | 40 | OK |
| 02_media_photos_ID | **8** | 0 | 8 | **complete** |
| 03_C_Downloads_keep | **7** | 1 | 24 | **partial (−17)** |
| 04_录音 | **0** | — | 5 | **missing / empty orphan** |
| 05_ExpenseTracker_input | **4** | 4 | 4 | **complete** |
| 07_WPS_working_uniques | **0** | 0 | 2 | **empty** |
| **Approx. total files on Drive** | **~208** | | **233** | **~−25 vs local** |

Expected ballpark from handoff (~189 docs, 8 photos, 24 downloads, 5 录音, 4 expense, 2 working): docs/photos/expense match; downloads/录音/WPS/README do not.

---

## Likely user-filtered omissions (Drive missing vs local)

User said stale files were filtered. Treat these as **candidate intentional omissions** (confirm before re-upload):

### 03_C_Downloads_keep — 17 missing

**Likely filtered (audio / planning clutter):**
- `Daily plans .m4a`
- `day didn't go according to the plan .m4a`
- `efficiency .m4a`
- `Form of transportation .m4a`
- `How do you schedule your day .m4a`
- `Read fewer books .m4a`
- `Japan_ML_Weekly_Calendar_Jan-Jun_2026.ics`
- `National Day Itinerary.pdf`
- `Rednote Housing Search_ March 2026.xlsx`
- `Registration-Overseas.docx`
- `Awesome_CV.zip`

**Ambiguous (could be filter OR failed batch):**
- 6× `dzfp_25622000000051….pdf` (甘肃省外事服务中心 invoices — also appear inside `01_documents/travel_reimbursement/RCNP_202511/`, so dropping from Downloads may be deliberate dedupe)

**Present on Drive (kept):**
- `Gemini_Chats/` (4 md)
- `个人简历-hzh (1).pdf`
- `胡智恒出签信_2604151455.pdf`
- `膝盖治疗建议.pdf`

### Clear gaps that look like **incomplete upload**, not filtering

| Item | Local | Drive | Notes |
|------|------:|------:|-------|
| `04_录音/*.m4a` (5) | 5 | 0 | Entire category absent; folder not under parent |
| `07_WPS_working_uniques` (`个人简历.docx`, `个人简历imagine.pdf`) | 2 | 0 | Folder exists, empty |
| `README_FOR_HUMAN.txt` | 1 | 0 | Not at parent root |
| Nested `Windows_PC_Sale_202609_UPLOAD` | local staging only | **none** | Good — flat layout used |

Missing 03/04/07 names were also searched Drive-wide (`Awesome_CV.zip`, `National Day Itinerary.pdf`, `个人简历imagine.pdf`, `21c第一段.m4a`) — **not found elsewhere**.

---

## Organization issues (wrong nesting, duplicates, empty 04)

1. **`04_录音` missing from parent listing** — provided id returns empty contents; folder-name search returns nothing. Treat as empty/orphan or never correctly parented.
2. **`07_WPS_working_uniques` empty** under parent — shell folder only.
3. **`06_github_repo_forJob`** — staging id exists empty; not under sale parent (OK if intentionally excluded from this package).
4. **Beijing visa package double-nest** preserved:  
   `travel/北京领区…/北京领区…/` — **matches local**, not a Drive mistake; do not flatten unless user wants cleanup.
5. **Word lock files `~$…`** uploaded inside Shanghai/Beijing packages — also in local manifest; leave unless user wants purge.
6. **No nested UPLOAD wrapper** under parent or My Drive — good.
7. **No duplicate top-level sale folder** — only one `Windows_PC_Sale_202609`.
8. **Parent has no loose files** (no README).

---

## Recommended agent fix actions (move/rename only if clearly wrong)

**Do not delete anything.** Prefer upload / re-parent.

1. **Re-create or re-parent `04_录音` under parent** (`1fsARSKmyDDnoKO2wL4xzsmWAxXk1sHRG`), then upload the 5 local `21c*.m4a` files from staging/UPLOAD package.
2. **Upload into `07_WPS_working_uniques`:** `个人简历.docx`, `个人简历imagine.pdf`.
3. **Upload `README_FOR_HUMAN.txt` to parent root.**
4. **Ask user before touching `03` gaps:**  
   - If intentional filter → leave as-is; optionally note in README.  
   - If incomplete → upload the 17 missing files (or a user-approved subset; skip the 6 `dzfp_*` if already covered under RCNP reimbursement).
5. **Do not flatten** Beijing double-nest or rename Shanghai/Beijing packages (structure matches local).
6. **Do not move** expense nested wrappers (correct 1-file-per-subfolder layout).
7. **Optional later cleanup (ask first):** trash `~$` lock files; remove orphaned empty `04`/`06` ids if new folders are created under parent.
8. **No rename needed** for correctly placed 01/02/05 content.

### Suggested verify after fixes

Re-list parent + `03`/`04`/`07`; expect parent children `01–05,07` (+ optional 06) and file totals ≈ local minus any confirmed filters.
