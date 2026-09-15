# Handoff prompts for Mac agent

Copy one block at a time into the Mac session (OrbitOS vault at `/Users/Reid Hu/OrbitOS`).

---

## Handoff A — Verify personal/research parity vs Windows archive

```markdown
# Handoff: Verify Mac has everything before Windows PC wipe

## Why This Matters
User is selling the Windows PC. Mac has been primary for months, but Windows still holds a large archive (`D:\Something` ≈ 288 GB) and ML artifacts. Cloud-upload only what Mac is missing. Do not bulk-copy regenerable installs or abandoned chat stores.

## Current State
- Windows sale-prep notes (may be pulled via OrbitOS git): `99_System/.scratch/windows-sale-prep/`
- Expected Mac vault: `/Users/Reid Hu/OrbitOS`
- Expected Mac research: `/Users/Reid Hu/MATE-Automation` (and any sibling research folders under home)
- Windows hotspots the Mac must compare against (names only — inventory Mac side):
  - Personal docs/IDs/visa: Windows `D:\Something\documents\` (~0.1 GB)
  - Coursework: Windows `D:\Something\coursework\`
  - MATE tree: Windows `D:\Something\research\MATE-Automation-V4\` (~199 GB; `data`~180, `runs`~12)
  - AFTPC tree: Windows `D:\Something\research\AFTPC_V3_MultiAgentVersion\` (~71 GB; git ahead of origin; `dataset`~46, `outputs`~23)
  - Job-prep repo with NO remote: Windows `D:\Something\research\github_repo_forJob\` (~14 GB)
  - Standalone checkpoints: Windows `D:\outputs\` (~1.56 GB, ViT CrossAttention)
  - WSL disk image: Windows `D:\WSL\Ubuntu\ext4.vhdx` (~37 GB) — skim whether anything unique lived only there
  - C: one-offs: Downloads invoices/出签信/CV/Gemini exports; `Documents\录音`; legacy `Documents\Obsidian Vault`

## Success Criteria
- A written gap list: paths present on Windows but missing/outdated on Mac (or remote), with size class (small cloud-ok / large needs selective sync)
- Explicit "already on Mac — safe to destroy on Windows" list for documents + research datasets/checkpoints
- Call out any Windows-only git state that must be pushed or archived (especially AFTPC unpushed "Back up" commit and remote-less `github_repo_forJob`)

## Non-document facts
- User chose cloud-first transfer for large gaps.
- User said Mac already has working SSH keys/API tokens — do not ask to import Windows keys; Windows copies will be destroyed.
- Local WeChat/QQ on Windows will be abandoned — do not treat chat DB parity as in-scope.
- Chrome bookmarks/passwords are covered by Chrome Sync.

## Principles of Paramount Importance
- **Zero Assumptions:** Never guess user intent. If multiple implementations exist or requirements are incomplete, **halt and use the `AskUserQuestion` tool** to gather explicit direction.
- **No Silent Assumptions:** Even when the task is requested, confirm the *method* if it wasn't specified.
```

---

## Handoff B — After gaps known: cloud pull + confirm ready-to-wipe

```markdown
# Handoff: Confirm Mac received Windows export gaps, then greenlight wipe

## Why This Matters
Windows wipe must not destroy the only copy of IDs, research datasets, or checkpoints. Mac confirms cloud downloads landed and checksums/sizes look right.

## Current State
- Gap list from Handoff A (attach or point to the file the Mac agent wrote)
- Cloud staging location: (user will name Drive/iCloud/Baidu folder)
- Windows still holds originals until Mac says verified

## Success Criteria
- Every MUST-KEEP gap from Handoff A exists on Mac (or an agreed remote) with spot-checked open/read success for a sample of files
- User receives a one-line "SAFE TO WIPE WINDOWS C: and D:" or a blocker list

## Non-document facts
- Windows volumes: C: Windows-SSD ~300 GB; D: Data ~652 GB — both must be wiped; C-only reset is insufficient.
- Secrets on Windows are destroy-only (Clash profiles, AI app configs, `.ssh`, `.claude`/`.grok`/`.codex`) — Mac already authenticated.

## Principles of Paramount Importance
- **Zero Assumptions:** Never guess user intent. If multiple implementations exist or requirements are incomplete, **halt and use the `AskUserQuestion` tool** to gather explicit direction.
- **No Silent Assumptions:** Even when the task is requested, confirm the *method* if it wasn't specified.
```
