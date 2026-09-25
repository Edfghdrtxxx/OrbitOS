<!-- Verbatim source section; overview: [[../fm-ar-jump-net]] -->
<!-- SOURCE-BODY-START -->
## 1. TL;DR

| Hypothesis | Result | Evidence |
|---|---|---|
| (a) FlClash TUN fakes the handshake, upstream leg fails | **Partially true but not the cause.** TUN completes the local handshake then returns EOF because its upstream dial fails — but the upstream dial fails because the host is dead, not because FlClash misroutes. | §3.1, §3.2 |
| (b) Jump host / port 9910 down or filtered for this source | **CONFIRMED — host down.** All ports on `210.77.75.12` time out from 4 independent source networks; the institute's own edge (`imp.cas.cn`) is reachable from the same egress, so it is not a border ACL. | §3.3, §3.4 |
| (c) SSH-side problem (banner wait, kex) | **Ruled out.** TCP connect itself never completes on the physical path — failure is below SSH. | §3.2 |

**The "accepted but silent" symptom is a FlClash TUN artifact:** the TUN intercepts the SYN, completes the handshake locally, then its upstream dial to the dead host fails and it closes the local leg — so `nc`/`ssh` see "connected, 0 bytes." The real path (bound to en0) just times out.

<!-- SOURCE-BODY-END -->
