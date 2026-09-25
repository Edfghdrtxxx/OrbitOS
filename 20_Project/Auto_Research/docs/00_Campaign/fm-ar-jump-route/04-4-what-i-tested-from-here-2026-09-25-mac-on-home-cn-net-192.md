<!-- Verbatim source section; overview: [[../fm-ar-jump-route]] -->
<!-- SOURCE-BODY-START -->
## 4. What I tested from here (2026-09-25, Mac on home CN net `192.168.1.4`)

Raw sockets bound to `en0` (`IP_BOUND_IF`, bypasses FlClash TUN — same method as sibling §3.2):

```
en0 172.17.116.64:22  -> FAIL: timed out (8s)
en0 172.17.116.65:22  -> FAIL: timed out (8s)
en0 210.77.75.12:9910 -> FAIL: timed out (8s)   # matches sibling: host down
en0 192.168.17.30:22  -> FAIL: timed out (8s)   # institute internal gateway, expected
```

DNS (raw UDP to `223.5.5.5`, bound to en0 — FlClash fake-IP bypassed):

```
imp.cas.cn / www.imp.cas.cn -> 159.226.242.62   # institute edge, UP (sibling §3.5)
vpn.imp.cas.cn, sslvpn.imp.cas.cn, webvpn.imp.cas.cn, mail.imp.cas.cn, ssh.imp.cas.cn -> NXDOMAIN / no A record
```

**No institute VPN endpoint is publicly advertised.** If one exists it isn't under the obvious names; only the IMP admin can supply it.

Other local facts: `~/.ssh/config` does not exist; `scutil --nc list` shows only a disconnected Shadowrocket VPN (no institute VPN configured); shell histories contain no IMP commands (agents always used the wrappers).

<!-- SOURCE-BODY-END -->
