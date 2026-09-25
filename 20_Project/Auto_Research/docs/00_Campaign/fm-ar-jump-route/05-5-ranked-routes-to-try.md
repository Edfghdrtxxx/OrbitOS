<!-- Verbatim source section; overview: [[../fm-ar-jump-route]] -->
<!-- SOURCE-BODY-START -->
## 5. Ranked routes to try

| # | Route | Evidence for feasibility | Status |
|---|---|---|---|
| 1 | **Direct `stu_2021@172.17.116.64:22` from the institute internal network** (campus LAN, IMP-Wireless, or dorm wired) | The *only* route the Mac has ever used successfully (Sep 20, `nagws1`); `.64` host key already in `known_hosts`; key `~/.ssh/id_ed25519` authorized on target per §1; bypasses the dead jump host entirely. **Untested now** — requires the captain to be on campus. | **Recommended — procedure in §6** |
| 2 | Jump host `210.77.75.12:9910` → `.64` | Worked 2026-06-27 → 2026-09-21 from Windows and Aliyun. **Currently down** (sibling: all ports timeout from 4+ networks; `/24` dark). No client-side fix; needs admin restart. | Blocked on admin |
| 3 | Institute VPN → direct `.64` | No VPN endpoint found under `imp.cas.cn`; none configured on the Mac. May exist undocumented — ask the admin. | Unknown; ask admin |
| 4 | Sibling server `172.17.116.65` (`lilu`/`leelu@imp`, `hpnag`) | Same internal net, same jump host. From campus, `ssh lilu@172.17.116.65` tests whether the whole `172.17.116.0/24` is up when `.64` isn't — a useful diagnostic, and `.65` could relay to `.64` if only `.64`'s sshd is down. Credentials in `IMP_server_context.md` §7. | Untested; on-campus only |
| 5 | Reverse tunnel from `.64` to box 176 (`ssh -R`) | Would give durable access bypassing the jump host forever — but can only be created *from* `.64`, i.e., needs route #1 (or admin) once. Box 176 is up (`connect.westb.seetacloud.com:43812`). | Setup procedure in §6 step 5 |
| 6 | Run the CPU jobs on box 176 instead of IMP | Not a route to IMP — a fallback for the *work*. Box holds the only copies of the EXP3 checkpoints and Garfield data already. Costs a small fee; 2 GB cgroup cap in no-GPU mode. | Available now (captain's call, already filed as `fm-ar-imp-access`) |

**Dead ends confirmed:** no other jump host/port anywhere in git history (only `210.77.75.12:9910` since 2026-06-12); no reverse tunnel exists; no second group-controlled relay on file; `172.17.116.65` shares the same dead jump host for external access.

<!-- SOURCE-BODY-END -->
