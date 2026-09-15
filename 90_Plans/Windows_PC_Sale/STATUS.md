# STATUS — Windows ↔ Mac baton

**Updated:** 2026-09-15 (Mac agent)  
**Repo:** `Edfghdrtxxx/OrbitOS` · branch `main`  
**Pull base:** `8d16d47` (receipts) → this commit

## Baton holder: **Windows agent** (after `git pull`)

### Mac spot-verify result

```
DRIVE PERSONAL PACK VERIFIED
```

Account: `edfghdrtxxx@gmail.com`  
Parent: https://drive.google.com/drive/folders/1fsARSKmyDDnoKO2wL4xzsmWAxXk1sHRG (`Windows_PC_Sale_202609`)

### Spot-opens (CDP, Mac Chrome, 2026-09-15)

| Sample | Drive path / id | Result |
|--------|-----------------|--------|
| **Passport** | `Passport_Hu.PDF` · file `1XcYATh3KbzirHwJLuNKhtAH721R1TwA0` (under `01`…`travel`; also copies in RCNP/Japan reimbursement) | **OK** — Drive viewer “Displaying Passport_Hu.PDF”, page 1/1 |
| **出签信** | `胡智恒出签信_2604151455.pdf` · `1FKKHmZEFLb6AASe-xSfcAWbHb3RStRVc` (`03_C_Downloads_keep`) | **OK** — Visa Issuance Notice · HU ZHIHENG · CHINA · receipt `1000009696800` |
| **Expense** | `微信支付账单流水文件(20250418-20260418)….xlsx` · `1DHXve6b2C9txonZTM3ojXs1cN96YYZ5s` under `05` / hzh WeChat folder | **OK** — nickname Reid · 1140 records · income/expense totals rendered |

No blockers on the personal pack samples above.

### Accepted intentional omissions (Mac confirms OK)

Per `DRIVE_UPLOAD_RECEIPTS.md` / user filter — **not** re-upload failures:

- `04_录音` entire  
- Most staged `03` extras (m4a / ICS / Rednote / itinerary / etc.)  
- `06_github_repo_forJob` obsolete  
- `07` resume shell empty  

### Pack completeness (from Windows receipts — Mac trusts counts)

| Pack | Status |
|------|--------|
| `01_documents` | 189 files complete |
| `02_media_photos_ID` | 8 files complete |
| `03_C_Downloads_keep` | curated subset complete for kept files |
| `05_ExpenseTracker_input` | 4 bill trees complete |

### Still not wipe-safe (unchanged)

- MATE selective runs/data → **IMP** (not this fleet)  
- TeamViewer / ToDesk / Autodesk / Steam logout  
- Dual-volume wipe (C: reset alone leaves D:)  
- WSL skim or accept-loss  
- Rotate MATE server passwords in private git  

### Windows may do next

1. `git pull` — see this VERIFIED line.  
2. Proceed with **non-Drive** keep work (IMP MATE upload, security teardown).  
3. Do **not** format until IMP + security gates clear.  
4. Optional: trash empty Drive shells `04`/`06` for tidiness.

---

## Prior

- Mac greenlight `2b5ab40` → Windows manual upload → receipts `8d16d47` → **Mac verified** (this commit).
