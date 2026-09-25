<!-- Verbatim source section; overview: [[../fm-ar-jump-route]] -->
<!-- SOURCE-BODY-START -->
## 3. Proof that the Mac's Sep 20 connect went DIRECT, not via jump

This matters: it means the Mac's only proven route is the internal network, and that the Mac was on such a network on Sep 20 (and Sep 15).

1. The Sep 20 session used the new env-based `_ssh_connect.py` (uncommitted then; committed `26578d6` Sep 21), which sets `paramiko.RejectPolicy()` (`scripts/utils/_ssh_connect.py:129`) — an unknown host key aborts the handshake *before* auth.
2. `~/.ssh/known_hosts` today contains `172.17.116.64` but **no `[210.77.75.12]:9910` entry** (verified by reading the file). The file's mtime (Sep 21 00:00 local) is the recorded `ssh-keyscan` **append** of the AutoDL `:43812` keys at 2026-09-20T16:00:01Z — appends don't delete lines, so the jump key was absent at 15:34 too.
3. `connect_ssh` swallows any jump-path exception and retries direct (`_ssh_connect.py:241-253`). So on Sep 20: jump path → `SSHException (not found in known_hosts)` → silent fallback → direct connect to `.64` → host key matched the existing `known_hosts` entry → auth (key or the target password from `IMP_server_context.md` §1) → `nagws1`.
4. The session's own words "IMP live via jump" are therefore wrong — an inference, not an observed fact. Consistent with everything else: the Sep 15 "Permission denied" (TCP+SSH reached `.64`, auth failed), and the absence of any jump-host key ever landing in `known_hosts` across the whole `AutoAddPolicy` era (Jun 28–Sep 19) — **the Mac has never completed a jump-host handshake.**

Corollary: on Sep 20 (and Sep 15) the Mac was on a network that routes to `172.17.116.0/24` — i.e., an institute internal network (campus LAN / IMP-Wireless / dorm wired). Today's home network does not (§4).

<!-- SOURCE-BODY-END -->
