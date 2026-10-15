# Windows ↔ Mac agent bridge (git)

**Protocol (user-locked 2026-09-15):** Agents on Windows and Mac do **not** share a live session. They synchronize by **git commit + push**, then the human tells the other machine to **pull**.

## Rules

1. When an agent finishes a decision, inventory, handoff, or status change for the PC sale → **commit to `main` and push `origin/main`**.
2. Human tells the other agent: `git pull` (OrbitOS vault), then continue from `90_Plans/Windows_PC_Sale/`.
3. Prefer writing durable artifacts **here** (`90_Plans/Windows_PC_Sale/`), not only under gitignored `99_System/.scratch/`.
4. Each push that expects a reply should include a short **`STATUS.md`** (or update it) with: what changed, what the other agent must do next, and any greenlight/blocker lines.

## Canonical files in this folder

| File | Role |
|------|------|
| `STATUS.md` | Latest cross-machine baton (read first after pull) |
| `MAC_WINDOWS_PARITY_GAP_LIST.md` | Gap list + wipe gate |
| `DRIVE_SCOUT_*.md` | Mac Drive inventory |
| `OVERNIGHT_WIPE_SAFETY_REPORT.md` | Windows fleet wipe-safety verdict |
| `wipe-gate-scorecard.md` | Keep-set completeness |
| `remote-storage-map.md` | Drive / IMP / AutoDL landing matrix |
| `handoff-mac-before-drive-upload.md` | Mac must confirm before Windows Drive upload fleet |
| `export-and-wipe-checklist.md` | Execution checklist |
| `c-drive-triage.md` | C: triage |

## Current baton

See `STATUS.md`.
