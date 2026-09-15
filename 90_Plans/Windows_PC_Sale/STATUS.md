# STATUS — Windows ↔ Mac baton

**Updated:** 2026-09-15 (Mac agent)  
**Repo:** `Edfghdrtxxx/OrbitOS` · branch `main`  
**Source of truth this turn:** Windows handoff prompt (git push blocked after sale logout) + Mac Drive CDP — **not** a fresh Windows OrbitOS tip commit.

## Baton holder: **Human / Windows local** (security clicks + dual wipe)

Mac cannot rely on `git pull` for the latest Windows tip (unpushed / auth gone). State below is locked from the handoff + Mac checks.

---

### Data gates (Mac view)

| Gate | Status | Evidence |
|------|--------|----------|
| Drive personal pack `Windows_PC_Sale_202609` | **VERIFIED** earlier | Parent `1fsARSKmyDDnoKO2wL4xzsmWAxXk1sHRG` · Passport / 出签信 / Expense spot-opens OK |
| Intentional Drive omissions (录音 / forJob / most Downloads extras / empty 07) | **Accepted** | Stand |
| **`100_Memoranda` on Drive** | **CONFIRMED** | Top-level folder id `10ZEumYOC2hkYie3zqQ7illvOcdrlwDSt` · https://drive.google.com/drive/folders/10ZEumYOC2hkYie3zqQ7illvOcdrlwDSt · lists notes + **plaintext secret files** (e.g. `tpc_usr_imp_password.txt`, `PYTPC_PWD.txt`, `Google_account.txt`, `Japan_Visa_2026`, …). Off-box complete for wipe of local copies; **prefer password-manager migration + rotate lab creds** (secrets now also live on Drive). |
| IMP archive `…/huzh_2022/windows_pc_sale_202609/` | **ACKNOWLEDGED (Windows-complete)** | Claimed: `outputs_ViT/` ~1.6G · `MATE/data_exp8/` ~838M · `MATE/runs/` ~8.7G (22 dirs) · **~11.1 GB total**; no bulk `trk_h5*` (accepted). **Mac live `du` not done** — no jump/SSH config on this Mac (`Permission denied` direct to `.64`). Trust Windows statement unless human wants later IMP check from lab network. |
| AFTPC / forJob / WeChat-QQ / Windows SSH | **Abandon** | Closed as keep |
| AutoDL | **Off** | Leave off |

---

### Wipe readiness

**Data keep-set for sale:** Drive personal + Memoranda off-box; IMP holds ViT + selective MATE. No further bulk export required for those trees.

**Still open before format (security / process — human):**

1. **Confirm local teardown finished on Windows:** TeamViewer **app + data** removed (was Running); ToDesk unbound if still present; Steam/Epic/etc. signed out as desired.  
2. **Autodesk Inventor 2026 seat — deactivate** if the license must not travel with the sold machine (still open unless human already did it).  
3. **Rotate lab passwords** that remain in **private MATE git** server-context docs **and** now appear as plaintext under Drive `100_Memoranda` (`tpc_usr_imp_password.txt`, etc.). Wipe does **not** remove GitHub or Drive copies.  
4. **WSL `ext4.vhdx`:** skim for unique secrets **or accept-loss** (handoff implies security path in progress; treat as human call).  
5. **Wipe procedure:** **both C: and D:** (C:-only Reset leaves all of D:). Prefer full reinstall / clean partitions for buyer.  
6. Optional: Drivers USB from `D:\Drivers` before D: wipe; BitLocker/MSA device cleanup.

```
SAFE TO WIPE WINDOWS C: AND D: AFTER HUMAN CONFIRMS SECURITY CLICKS DONE
```

**Meaning:** Mac is not blocking on missing Drive/IMP research/personal keep-sets.  
**Human must still confirm** Autodesk deactivate (if needed), password rotation (git + Drive memoranda), TeamViewer/ToDesk gone, WSL accept-loss or skim, then **wipe C: and D: together**.

**Not** “wipe right now without reading the list above.”

---

### Windows git / push

- Local Windows commit about IMP/security may be **ahead of origin and stuck** (re-auth timed out after intentional logout).  
- This `STATUS.md` **is** the durable Mac-side record of that handoff.  
- Re-auth + push from Windows later is optional history hygiene, **not** a wipe blocker.

---

### Prior chain

Mac greenlight → Drive upload + receipts → `DRIVE PERSONAL PACK VERIFIED` → Windows IMP complete + security in progress + push blocked → **this STATUS** (Memoranda confirmed; wipe line conditional on human security clicks).
