<!-- Verbatim source section; overview: [[../fm-ar-jump-net]] -->
<!-- SOURCE-BODY-START -->
## 8. Bottom line for firstmate

The jump host `210.77.75.12` is **down** — unreachable on all ports from every vantage point, while the institute's edge (`imp.cas.cn`) is up. The "accepted but silent" symptom is a FlClash TUN artifact (local handshake + failed upstream dial → EOF), not a real connection. **Unblock requires the IMP admin to restart the host or provide an alternate route** — there is no client-side or network-side workaround. The sibling scout (fm-ar-jump-route) is checking for alternate routes; if none exist, this task is blocked on external (admin) action.
<!-- SOURCE-BODY-END -->
