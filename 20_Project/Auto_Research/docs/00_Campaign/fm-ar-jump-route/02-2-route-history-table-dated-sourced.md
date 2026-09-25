<!-- Verbatim source section; overview: [[../fm-ar-jump-route]] -->
<!-- SOURCE-BODY-START -->
## 2. Route history table (dated, sourced)

| When | From | Route | Result | Evidence |
|---|---|---|---|---|
| ≤ 2026-03-19 | Windows PC (`C:\Users\petro`) | Direct `172.17.116.64:22`, internal net | Working (doc written from use) | `20_doc/ssh_context.md` @ `c930cc2`: "Direct connection works when on IMP internal network. No jump host required." |
| ≤ 2026-06-12 | Windows PC | Jump `210.77.75.12:9910` (`tpc_usr_imp`, historical password, see `IMP_server_context.md` §1) → `.64` | Working (first documented external route) | `20_doc/ssh_context.md` @ `c56c8c1`; `99_System/.scratch/remote_explore.py` (Windows key path `C:\Users\petro\.ssh\id_ed25519`, paramiko `direct-tcpip`) |
| 2026-06-27 | Windows PC (presumed) | Jump, the password now listed as verified in `IMP_server_context.md` §1 | **Verified working**; the older password rejected | `20_doc/ssh_context.md` @ `b763454` |
| 2026-07-09 | AutoDL box (Aliyun) | `sshpass` + `ssh -W` via jump `210.77.75.12:9910` → `.64` | **Verified**: 1 MiB file, SHA-256 matched end-to-end | `remote_GPU_context.md` §4a @ `33673b5` |
| 2026-07-12 | IMP itself | — | Full-scale baseline pipeline proven on `nagws1` (180k events, ~50 min) | `99_System/memory/MATE-Automation-V4/project_imp_server_pipeline.md` |
| 2026-07-15 | Windows PC (presumed) | IMP shell | EXP8 channel kinematics verified on server | commit `a43e53d` message |
| 2026-09-14 | Windows PC | Jump → `.64` | **Working**: live `du` inventory (`/home` 4.7T, 348G free) | OrbitOS `90_Plans/Windows_PC_Sale/remote-storage-map.md` §6 "IMP `.64` — reachable via jump ✓" |
| 2026-09-15 | Mac | Direct `172.17.116.64:22` | TCP+SSH handshake reached, **auth failed** ("Permission denied") — Mac was on a network that routes to `.64`; key not yet authorized / no password tried | OrbitOS `90_Plans/Windows_PC_Sale/STATUS.md` data-gates table |
| **2026-09-20 15:34 UTC** | **Mac** | **Direct `172.17.116.64:22` (jump path silently failed → fallback)** | **Working**: `probe_ssh_connect.py --connect` → `pwd: /home/stu_2021`, `hostname: nagws1`; then `remote_exec.py` inventory | omp session `2026-09-20T14-43-12…01a0bf45` lines 390–403; deduction in §3 |
| **2026-09-21 ~17:05–18:17 CST** | **AutoDL box 176 (Aliyun)** | **Jump `210.77.75.12:9910` → `.64` (rsync over `ssh -W`)** | **Working**: `pull_raw.sh` pulled 9.1 GB `Garfield_Raw` (5 files), `RAW_PULL_DONE` | same session, `215.bash.log`/`216.async.log`; script `OrbitOS/99_System/.scratch/next-after-seed42/pull_raw.sh` |
| 2026-09-25 09:30–10:00 | Mac (hotspot + FlClash US exit) and box 176 | Jump + direct | **All fail**: Mac TCP-accepted-but-no-banner (TUN artifact); box 176 TCP fails outright | `data/fm-ar-imp-resume/report.md` |
| 2026-09-25 ~11:30–12:10 | Mac (home CN net, en0 bound) + box 176 | Jump, all ports | **Host down**: every port times out; traceroute dies after institute gateway `192.168.17.30`; `imp.cas.cn` up | `data/fm-ar-jump-net/report.md` §3 |
| 2026-09-25 ~12:40 | Mac (en0 bound, TUN bypassed) | Direct `172.17.116.64:22`, `.65:22`, `192.168.17.30:22` | All timeout — this network does not route into `172.17.116.0/24` | this report, §4 |

**Gap:** no recorded IMP contact between 2026-09-21 ~18:17 and the 2026-09-25 failures. The host died inside that window.

<!-- SOURCE-BODY-END -->
