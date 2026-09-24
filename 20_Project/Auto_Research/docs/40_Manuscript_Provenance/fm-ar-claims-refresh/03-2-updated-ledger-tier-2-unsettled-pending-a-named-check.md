<!-- Verbatim source section; overview: [[../fm-ar-claims-refresh]] -->
<!-- SOURCE-BODY-START -->
## 2. Updated ledger — TIER 2 (unsettled pending a named check)

| # | Loc | Claim | Status @16:53 | Status now | Settling check (updated) |
|---|-----|-------|---------------|------------|--------------------------|
| 11 | L282-291 (Table 4), L295, L503 | V6 2×2 numbers + "α vs Nonα" task identity | unverified (Windows label values) | **unverified — check now packaged** | `windows_visit_checks.py` checks [A]+[B]+[D] (PR #31, merged `661779f`): Garfield H5 raw labels + `label_map_version`, V6_ResNet_HC class-0 source file, label-blast scenario verdict — one command, one JSON. |
| 12 | L295 | "primary error mode is α→Nonα … ³He closest in stopping power" | unverified | **unverified — same check** | Windows kit [B] identifies the class-0 source file; the per-species `predictions.csv` join is the same visit (runbook §C). |
| 13 | L428 | RANSAC σ_θ ≈ 3.6/1.25/0.7° literature overlay + CNN σ values | unverified | **unverified — angle-baseline worker still in flight** (no report.md as of 22:00) | fm-ar-angle-baseline (in flight): same-sample RANSAC/Hough on TRK3-v2 split. |
| 14 | L481 | "RANSAC R²=0.878 raw point cloud vs 0.848 converted" | unverified | **unverified — unchanged** | Re-run `run_baseline_rawpoints.py` on box 176 / IMP (CPU, torch-free). |
| 15 | L555-557, L569-570 | p/d/t per-class; V6 per-class (App B/C) | unverified | **unverified — same Windows check as #11** | Windows kit + legacy artifacts. |
| 16 | L589-591 | Energy-stratified angle MAE (App D) | unverified locally | **unverified — unchanged** | Sync TRK3/4-v2 metrics.json from AutoDL. |
| 17 | L407-418 (Table 7), L426 | Angle MAE 0.832 vs 0.992° + stratification | stands for headline; stratification unverified | **unchanged** | Same as #16. |

<!-- SOURCE-BODY-END -->
