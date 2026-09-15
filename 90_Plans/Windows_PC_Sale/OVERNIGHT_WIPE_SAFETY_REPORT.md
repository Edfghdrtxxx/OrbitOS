# Overnight wipe-safety report (2026-09-15)

**Verdict: NOT safe to format yet.**  
Survey fleet covered leftover unique data, secrets/logouts, licenses/buyer handoff, keep-set completeness, D: misc, and PII outside `documents\`.

---

## Executive answer

| Question | Answer |
|----------|--------|
| Safe to format/sell tonight? | **No** |
| Why (data)? | Keep-set mostly still only on this PC: documents, forJob, MATE selective runs/data, Downloads personal, WPS offline, ID photos under `Something\media\photos`, Expense Tracker bills |
| Why (security)? | TeamViewer still bound/running; D: survives C:-only reset; MATE server passwords live in private GitHub even after wipe |
| Why (license)? | Autodesk Inventor seat not deactivated; Steam saved logins; Drivers USB not copied yet |
| What progressed overnight | IMP archive created; **both** ViT runs uploaded and verified (`…_112159` 1.2G + `…_150127` 394M; 21 files) |

---

## Hardware / disk (confirmed)

- Lenovo **82WK** (Legion), single Samsung NVMe ~1 TB  
- **C:** Windows-SSD ~300 GB · **D:** Data ~652 GB · WINRE  
- **No other data drives** (no E:/USB attached during survey)  
- Windows 11 Home China · **OEM:DM** licensed (stays with this machine)  
- BitLocker status: **unverified** (needs admin)

**Critical:** Reset-this-PC that only cleans C: leaves **all of D:** for the buyer.

---

## Keep-set status (wipe blockers)

| Item | Landing | Status |
|------|---------|--------|
| `D:\Something\documents` (~0.1 GB) | Drive/Mac | **NOT uploaded** |
| `D:\Something\media\photos` ID/证件照 | Drive/Mac (add to keep-set!) | **NOT uploaded** — found outside `documents\` |
| C: Downloads 出签/发票/CV/录音/Gemini | Drive/Mac | **NOT uploaded** |
| Expense Tracker WeChat/Alipay inputs | Drive/Mac (sensitive) | **NOT uploaded** |
| WPS Cloud Files / WPSDrive (~0.8 GB) | Verify cloud then export gaps | **OPEN** |
| `github_repo_forJob` (~14.4 GB, dirty, no remote) | Drive | **NOT uploaded** |
| MATE paper runs (~8.6 GB selective) | IMP | **NOT uploaded** |
| MATE `data/` subset (esp. `exp8` 0.82 GB; trk_* huge) | IMP | **Subset not chosen / not uploaded** |
| ViT `D:\outputs` | IMP `…/windows_pc_sale_202609/outputs_ViT/` | **DONE** — both non-empty runs verified on IMP (2026-09-15) |
| AFTPC / WeChat / QQ / Windows SSH | Abandon | Closed as keep |

---

## Newly found at-risk items (beyond prior keep-set)

1. **`D:\Something\media\photos\`** — IDFace/IDFlag/证件照/SongID* (must go with personal pack)  
2. **`D:\memoranda_Legacy\`** + OrbitOS `100_Memoranda\*password*` — move into password manager, then destroy  
3. **`D:\working\`** (~179 MB) — resume/interview drafts; diff vs forJob  
4. **WSL `ext4.vhdx` (~37 GB)** — still unskimmed; contains separate `.ssh` / `.git-credentials` / CLIProxyAPI secrets  
5. **WPS local caches** — thesis/公寓申请 may be clouded; confirm before abandoning local  
6. **Recycle Bin on D: (~9 GB)** — deleted `.pth` / trees; spot-check if anything unique  
7. **ApowerREC / Videos captures** — small demo mp4s; optional  

Email clients / password-manager vaults / crypto wallets / phone backups: **not found**.

---

## Security gate (before format)

**Must-do (ordered):**

1. Finish exports (table above)  
2. **Unbind TeamViewer** (installed, running, permanent-password material present)  
3. Unbind **ToDesk** account-side (`D:\ToDesk` leftover)  
4. **Rotate** IMP/jump/AutoDL passwords that live in git-tracked MATE server context docs (wipe does not remove GitHub copies)  
5. Confirm BitLocker recovery key escrow (MSA) if any  
6. Sign out OneDrive / Baidu / WPS / Quark / Microsoft / Steam (3 saved accounts) / Epic / Xbox / NVIDIA  
7. **Deactivate Autodesk Inventor 2026** seat  
8. Reset C: **Remove everything** + **separately wipe/format D:** (or delete all partitions via install media)  

**Residual after proper wipe:** private-repo plaintext server passwords until rotated; cloud accounts by design.

---

## Buyer handoff notes

- OEM Windows reactivates on same motherboard after clean install  
- Copy **`D:\Drivers`** (~4.6 GB, includes NVIDIA) to USB **before** wiping D:  
- Office HS2019 activation murky — do not sell as “includes activated Office”  
- Prefer full-disk reinstall for buyer, not C-only reset  

---

## Remote storage reminder

| Store | Role |
|-------|------|
| Google Drive | Personal docs, forJob |
| IMP `.64` (jump) | Research: ViT + selective MATE; **~348 GB free** |
| AutoDL | Compute only; user keeps powered off unless training/upload needed; currently unreachable on old port |

---

## Suggested morning order

1. Confirm ViT `150127` finished on IMP (`du` both folders)  
2. Drive-upload personal pack (documents + media/photos + Downloads keep + 录音 + memoranda secrets into manager)  
3. Drive-upload or SSD forJob (full tree; bundle alone insufficient)  
4. Name MATE runs + data subset → `remote_upload` to IMP archive  
5. WSL skim or accept-loss; TeamViewer/Autodesk/Steam teardown  
6. Drivers USB → dual-volume wipe  

Artifacts: `90_Plans/Windows_PC_Sale/`, `99_System/.scratch/windows-sale-prep/` (incl. this file + `wipe-gate-scorecard.md` + `remote-storage-map.md`).
