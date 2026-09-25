<!-- Verbatim source section; overview: [[../fm-ar-halt]] -->
<!-- SOURCE-BODY-START -->
## 5. Artifact map

| Artifact | Box path (`/root/autodl-tmp/z01-exec/runs/`) | Mac path (`MATE-Automation/runs/`) |
|---|---|---|
| G7 lf s42 metrics | `EXP3-XA-Raw-100k-label-fix-seed42/20260923_154749/exp4_attention_metrics.json` | same rel path ✅ pulled 09:03 |
| G7 s0 metrics | `EXP3-XA-Raw-100k-seed0/20260923_084135/exp4_attention_metrics.json` | same ✅ pulled 09:03 |
| D6 batteries ×5 | `<run>/counterfactual_battery_d5.json` (all but XA-Raw-s42) | synced earlier ✅ |
| h1_diagnostics s42 | `EXP3-XA-Raw-100k-seed42/20260922_185618/h1_diagnostics.json` | ✅ |
| predictions_paired.csv ×7 | 6 RN dirs + `EXP3-XA-HC-100k-seed1/20260922_152448/` | ✅ pulled 09:03 |
| predictions.npz ×12 | all run dirs | ✅ pulled 09:03 |
| physics_feature_stats.json ×5 | XA-HC ×3, XA-Raw s42/s0, lf | ✅ pulled 09:03 |
| lf run.log / predictions.csv / training_curves.csv | `EXP3-XA-Raw-100k-label-fix-seed42/20260923_154749/` | ✅ pulled 09:03 |
| data_split.json ×2 (lf, s0) | 0-byte **on box** — known defect, not a pull failure | 0-byte stubs |
| Chain/diag logs | `/root/autodl-tmp/.autodl/*.log` (cpu_requeue, d6_s42_retry, g7_*_retry*, redump2_*) | not pulled (reproducible) |
| Prereg scorer + yaml | repo `20_doc/prereg/` (PR#15, commit `d23a948`) | local master, unpushed |
| Campaign record | — | `/Users/Reid Hu/firstmate/data/auto-research-exp3.md` (G7 entry appended 03:55) |
| Vault campaign docs | — | `OrbitOS/20_Project/Auto_Research/` (firstmate files via PR) |

**Known defect carried forward:** `data_split.json` is 0 bytes on box for XA-Raw-s0 and XA-Raw-lf — pairing for those runs relies on `subsample_indices` determinism (PR#17 exploits exactly this for the held-out pool).

**Operational lesson recorded:** on the 2 GB box, run CPU jobs strictly sequentially — two concurrent model+dataset loads hit the cgroup ceiling and die silently (`rc=0` in wrapper logs, no OOM counters). Verify output JSON existence, never trust rc.
<!-- SOURCE-BODY-END -->
