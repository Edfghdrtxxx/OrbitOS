<!-- Verbatim source section; overview: [[../fm-ar-halt]] -->
<!-- SOURCE-BODY-START -->
## 1. Events since 2026-09-25 03:55 (real clock)

| Time | Event |
|---|---|
| 03:33–03:49 | G7 s0 retry2 ran solo on box 176 → **completed**, `exp4_attention_metrics.json` written (acc 0.8660). First s0 attempt (00:01) had died silently — no OOM recorded (`failcnt=0`, `oom_kill=0`) but cgroup `max_usage` hit the 2 GB ceiling; attributed to memory contention with the concurrent LF job. |
| ~03:50–08:45 | Box 176 SSH unreachable at relay (`Connection closed by 198.18.x.x port 43812`). **Not an instance reboot** — uptime 1107 days on return; relay-side flakiness. All CPU processes were dead on return (none survived the window; cause unconfirmed — possibly killed during the outage window or finished/died earlier). |
| 08:48 | Box reachable again, still **no-GPU mode** (`nvidia-smi`: no devices). |
| 08:50 | Applied PR#14 code hunks (`--include` on `scripts/analysis/*`, `src/evaluation/*`; `src/baselines/run_kuchera.py` absent from box snapshot → skipped) and PR#17 code hunks (`exp3_heldout_unused.py` new + `exp4_attention_metrics.py` indices arg) to box `z01-exec` via `git apply`. Box checkout now carries uncommitted diffs (see §4). |
| 08:55 | Launched `cpu_requeue.sh` (sequential: D6-s42 → diag-s0@500ev → redump×5 → heldout_lf). D6-s42 started, reached "capped to 2000 events". |
| ~09:00 | **Halt order received.** Chain killed (`pkill` on script + python). Verified: no campaign python processes remain on box. D6-s42 produced no output file — listed pending. |
| 09:03 | Pulled 28 box-only artifacts to Mac `runs/` via single tar stream (relay flaky for scp; tar-over-ssh succeeded first try). Verified: both G7 JSONs real (418 KB each), lf `run.log`/`predictions.csv`/`training_curves.csv` recovered. |

<!-- SOURCE-BODY-END -->
