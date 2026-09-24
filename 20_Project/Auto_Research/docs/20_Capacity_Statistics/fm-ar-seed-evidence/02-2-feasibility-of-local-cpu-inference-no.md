<!-- Verbatim source section; overview: [[../fm-ar-seed-evidence]] -->
<!-- SOURCE-BODY-START -->
## 2. Feasibility of local CPU inference — NO

Three independent blockers on this Mac:

1. **No checkpoints.** `find runs -name '*.pth'` → only EXP8 weights. All 11 EXP3 `best_model.pth` (~45MB each) exist only on box 176 at `/root/autodl-tmp/z01-exec/runs/...` (paths enumerated in closing doc §7).
2. **No torch.** `python3 -c "import torch"` → ModuleNotFoundError (per AGENTS.md, torch is remote-only; installable ~200MB but pointless without 1 & 3).
3. **No Garfield H5.** `data/` contains only `srim/` and `trk_h5_v2/`; the ~25GB Garfield_{Raw,HC} files live on the box.

**Feasible on box 176 (proven, not estimated):** the counterfactual battery already ran there CPU-only under the 2GB cgroup cap (`--max-events 2000 --batch-size 64`, single-threaded) — 6 checkpoints × 5 conditions completed 2026-09-24. Full-25k inference per checkpoint ≈ 12.5× a battery condition ≈ tens of minutes CPU. **Do not pull 25GB of H5 to the Mac; run inference on-box and sync only `predictions.csv` (~1MB each).**

<!-- SOURCE-BODY-END -->
