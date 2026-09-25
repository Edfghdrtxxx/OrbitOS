<!-- Verbatim source section; overview: [[../fm-ar-box-evac]] -->
<!-- SOURCE-BODY-START -->
## Box-176 inventory for a later IMP move (all under `/root/autodl-tmp/`)

| Box path | Size | Files | Notes |
|---|---|---|---|
| `z01-exec/runs/` | 6.9G | 259 | 12 EXP3 run dirs + Z01-Logistic-Moments + Z01-ResNet-Generic; all checkpoints |
| `data/Garfield_Raw/` | 9.1G | 5 | **possibly sole copy** (Windows machine sold) |
| `data/Garfield_HC/` | 511M | 5 | possibly sole copy |
| `MATE-Automation-V4/data/` | 949M | 16 | exp8, trk_h5_v3, srim |
| `MATE-Automation-V4/runs/` | 4.2G | 263 | EXP8 + TRK1 + unweighted_archive checkpoints |
| `MATE-Automation-V4/.git/` | 790M | 25 | detached repo, origin = local bundle |
| `MATE-Automation-V4-legacy-20260703/` | 3.8G | 232 | legacy snapshot incl. runs/ 2.9G |
| `MATE-d570d34-full.bundle` | 789M | 1 | git bundle (V4 history source) |
| `MATE-d570d34.bundle` | 448M | 1 | git bundle |
| `autoresearch_inputs/` | 1.0G | 4 | z01 npy train/test |
| `.autodl/` | 9.3M | 177+ | logs, chain scripts, pr14.diff, pr17.diff, evac_manifest.sha256 |
| `z01-exec/` (code, excl. runs/) | ~3M | ~280 | partial snapshot + applied PR14/PR17 diffs (uncommitted); .git 1.1M |

**Total on box: ~28 GB.** Re-creatable items excluded from the list: none significant — the two repos are detached snapshots whose only upstream is the bundles (also on box).

<!-- SOURCE-BODY-END -->
