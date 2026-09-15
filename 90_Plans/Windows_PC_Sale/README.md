# Windows PC sale prep (in progress)

Session inventory for selling this Windows machine. Mac is primary; transfer via cloud for large gaps; destroy Windows secrets (Mac already has working keys/tokens). Abandon local WeChat/QQ.

## Disk layout (critical)

| Volume | Label | Size | Used / Free | Role |
|--------|-------|------|-------------|------|
| C: | Windows-SSD | ~300 GB | ~206 / ~94 GB | OS + profile |
| D: | Data | ~652 GB | ~525 / ~126 GB | Personal archive, research, chats, WSL |

**Wipe risk:** A normal "Reset this PC" that only cleans C: leaves **D: intact**. Buyer would get `D:\Something`, vault, ML data, etc. Must wipe/format **both** volumes (or choose Reset → all drives if offered).

## Decisions locked

- Sell this Windows PC; prefer clean Windows for buyer after data offload
- Cloud-first for large unique files
- Mac already has SSH/API tokens → destroy Windows copies (no key export)
- WeChat/QQ local stores → abandon
- Mac agent must verify `D:\Something` parity before bulk upload
- Keep ML artifacts (`D:\outputs`, MATE `data`/`runs`) → upload if Mac lacks them

## Size hotspots (measured)

### D:
- `D:\Something` ≈ **288 GB** (research ≈ 285 GB)
  - `MATE-Automation-V4` ≈ 199 GB (`data` ≈ 180 GB, `runs` ≈ 12 GB)
  - `AFTPC_V3_MultiAgentVersion` ≈ 71 GB (`dataset` ≈ 46 GB, `outputs` ≈ 23 GB)
  - `github_repo_forJob` ≈ 14 GB (**no git remote**)
- `D:\outputs` ≈ 1.56 GB (ViT CrossAttention checkpoints)
- `D:\WSL\Ubuntu\ext4.vhdx` ≈ 37 GB
- `D:\xwechat_files` — abandon per decision

### C: (evaluated)

| Path | Size | Action |
|------|------|--------|
| AppData total | ~62.6 GB | Destroy with reset (secrets inside) |
| Documents | 6.13 GB | QQ ~4.9 GB abandon; WPS ~0.8 GB verify cloud; 录音 + payroll xlsx export |
| Downloads | 2.86 GB | Export personal PDFs/m4a/Gemini; abandon installers |
| Pictures/Screenshots | 1.60 GB | Default abandon (~3626 UI grabs) |
| AI/tool home dirs | ~2–3 GB | Destroy (Mac has tokens) |
| `.ssh` | tiny | **Destroy only** (Mac has keys) |
| WSL on C: | none | VHDX only on D: |
| BitLocker | unverified | Needs elevated `manage-bde` |

Full write-up: `c-drive-triage.md`. Execution order: `export-and-wipe-checklist.md`. Mac prompts: `handoff-mac-parity.md`.

## Git flags before wipe

- `D:\obsidian\OrbitOS`: `main` tracks `origin/main`; dirty submodule `20_Project/Marker`; local-only branch `claude/cool-rosalind`
- `D:\Something\research\AFTPC_V3_MultiAgentVersion`: **ahead of origin/main by 1+** ("Back up") + large working-tree deletes — resolve before wipe
- `github_repo_forJob`: no remote — hand-copy or cloud if still needed

## Next artifacts

- `handoff-mac-parity.md` — paste to Mac agent
- `export-and-wipe-checklist.md` — Windows execution order
