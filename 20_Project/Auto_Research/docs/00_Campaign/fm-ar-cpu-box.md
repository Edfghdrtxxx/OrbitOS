> Origin: `fm-ar-cpu-box` lead session report (closing); recorded 2026-09-25.

<!-- SOURCE-PREFIX-START -->
# CPU-box session report — 2026-09-25 (box 176, no-GPU mode)

**Context.** IMP jump host `210.77.75.12:9910` unreachable from all vantage points (see `fm-ar-imp-resume/report.md`). Captain approved running the halt-report pending items on the AutoDL box for a small fee. Campaign manager executed; this is the closing report — session ends after this.

**Setup.** Box code at `/root/autodl-tmp/z01-exec` was synced to `origin/master 15016d6` (14 files uploaded, sha256-verified, `IMPORTS-OK` smoke passed). Chain `cpu_chain2.sh` launched via nohup at `2026-09-25T11:58:04+08:00`, sequential only (2GB cgroup kills concurrent CPU jobs silently). All work under `/root/autodl-tmp/z01-exec`; logs in `/root/autodl-tmp/.autodl/cpu_chain2.log` + per-step logs.

<!-- SOURCE-PREFIX-END -->

<!-- Original report body is reconstructed from the prefix and linked verbatim sections below. -->
## Status

**IMP was unreachable, so the halt-report pending CPU jobs ran on paid AutoDL box 176.** Chain launched 11:58, `CHAIN2_DONE` 14:02, report 14:16 (2026-09-25, +08:00); the lead session then ended. D6-s42 battery, diag-s0, all five redumps, within-family paired stats, and the held-out LF eval all VERIFY-OK ([[00_Campaign/fm-ar-halt/03-3-pending-list-ordered|halt pending list]] items 2–6). Outstanding queue unchanged: GPU Rung 1, B2 copies, e23 batching rewrite, `exp3_collect_tables.py`, closing-doc revision, IMP move.

## Contents

- [[00_Campaign/fm-ar-cpu-box/01-1-results-d6-s42-battery-diag-s0-redump-x5|1. Results — D6-s42 battery, diag-s0, redump ×5 (all VERIFY-OK)]]
- [[00_Campaign/fm-ar-cpu-box/02-2-paired-stats-chain-verify-fail-pairing-guard|2. paired_stats — chain VERIFY-FAIL (pairing guard)]]
- [[00_Campaign/fm-ar-cpu-box/03-3-paired-stats-rerun-heldout-lf|3. paired_stats rerun + heldout_lf (VERIFY-OK)]]
- [[00_Campaign/fm-ar-cpu-box/04-4-prereg-scorer-local|4. Prereg scorer (local)]]
- [[00_Campaign/fm-ar-cpu-box/05-5-mac-artifact-custody|5. Mac artifact custody]]
- [[00_Campaign/fm-ar-cpu-box/06-6-state-at-handoff|6. State at handoff]]

<!-- ORIGINAL-BODY-SHA256: 5d583a0c902797e4d5fbe9c22a6c5a2dad764c9003fd188e23ec2c14085bbc8d -->
<!-- ORIGINAL-BODY-BYTES: 6272 -->
