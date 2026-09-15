# Export + wipe checklist (C: + D:)

Do not wipe until Mac Handoff A/B says gaps are covered (or you explicitly accept loss).

## Phase 0 — Mac first

1. Paste **Handoff A** from `handoff-mac-parity.md` into the Mac agent.
2. Get a gap list (especially `D:\Something` documents vs research `data`/`runs`/`outputs`).
3. Cloud-upload only gaps (Baidu / Drive / etc.). Prefer selective sync: documents first, then `D:\outputs` (~1.6 GB), then missing MATE/AFTPC artifacts — **not** the full 288 GB blindly.

## Phase 1 — Export from Windows (cloud)

### C: (small)

- [ ] `Downloads`: 出签信, `dzfp_*` invoices, resumes/`Awesome_CV.zip`, Japan ICS, Rednote xlsx, itinerary, English `.m4a`, `Gemini_Chats\` + related `.md`, medical PDF if wanted
- [ ] `Documents\录音\` (5× `.m4a`)
- [ ] `Documents\课题临聘人员劳务费发放表黄2.xlsx`
- [ ] WPS: confirm cloud has `单身公寓申请_胡智恒.pdf` and ID scans; upload only offline-only files from `WPS Cloud Files` / `WPSDrive`
- [ ] Optional: legacy `Documents\Obsidian Vault` if Mac agent finds unique notes
- [ ] Optional: Xshell session folder if Mac SSH hosts incomplete
- [ ] Skip: Chrome export (Sync OK); skip `.ssh` / AI tokens (destroy only)

### D: (large — after Mac gap list)

- [ ] `D:\Something\documents\` always (~0.1 GB) unless Mac confirms full parity
- [ ] `D:\outputs\` (~1.6 GB) — keep decision
- [ ] MATE `data`/`runs`/`outputs`/`presentations` — **only missing pieces** (full tree ~199 GB)
- [ ] AFTPC: push or archive unpushed git state; upload missing `dataset`/`outputs` only if Mac lacks them
- [ ] `github_repo_forJob` (~14 GB, **no remote**) — cloud or abandon after Mac decision
- [ ] Skim `D:\WSL\Ubuntu\ext4.vhdx` (~37 GB) before uploading whole disk; prefer extract unique `~/` files
- [ ] OrbitOS: `git status` / push; Mac vault is source of truth after sync
- [ ] Skip: `D:\xwechat_files`, QQ on C:/D: (abandon)

## Phase 2 — Logout / revoke (before wipe)

- [ ] GitHub: `gh auth logout`; remove this PC’s SSH key from GitHub if it was ever added (Mac keeps its own keys)
- [ ] Grok / Claude / Codex / Cursor / Gemini — sign out
- [ ] Clash Verge / 雷神 — logout; treat subscriptions as secrets
- [ ] TeamViewer (+ ToDesk on D: if present) — remove device from account
- [ ] WeChat / QQ / WPS / Baidu / Steam / Microsoft — logout
- [ ] Credential Manager: clear Windows + Web credentials
- [ ] Google Account → devices / third-party access review (Chrome Sync stays on Mac)

## Phase 3 — Destroy sensitive leftovers (optional but deliberate)

Even though wipe follows, delete or shred high-sensitivity paths if you will leave the PC powered on:

- [ ] `C:\Users\petro\.ssh\`
- [ ] `.grok` `.claude` `.codex` `.gemini` `.cursor` `cliproxyapi` Clash profiles
- [ ] OrbitOS `100_Memoranda\*password*` / account plaintext (after moving into a password manager on Mac)
- [ ] `D:\memoranda_Legacy\` secrets

## Phase 4 — Format / reset (both volumes)

**Recommended order**

1. Confirm Mac/cloud verification complete.
2. **Format D:** (Data) — Disk Management or `format D: /fs:NTFS /v:Data` (destructive). This is mandatory; C:-only reset leaves D: readable.
3. **Reset this PC → Remove everything.** If the wizard offers cleaning **all drives**, prefer that (may cover D: in one step — still verify D: is empty/unallocated afterward).
4. Elevated check beforehand: `manage-bde -status C:` and `D:`. If BitLocker/Device Encryption is off, expect lower forensic assurance; optional: enable encryption then reset, or fill free space once after reset.
5. Boot to OOBE, create a throwaway local account, shut down — ready for buyer (or leave at setup screen).

## Done when

- [ ] Mac agent: “SAFE TO WIPE WINDOWS C: and D:”
- [ ] D: shows empty/fresh volume (or wiped by all-drives reset)
- [ ] Windows reinstalled on C: with no petro profile
- [ ] Remote accounts no longer list this PC / old Windows SSH key
