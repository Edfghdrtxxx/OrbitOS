<!-- Verbatim source section; overview: [[../fm-ar-jump-net]] -->
<!-- SOURCE-BODY-START -->
## 3. Evidence

### 3.1 TUN path reproduces the symptom (and shows it's an artifact)

Raw socket bound to `utun4` (`IP_BOUND_IF`):
```
TUN  210.77.75.12:9910 -> connect ok (0.00s), recv 0B: b''
```
Instant "connect" + instant EOF. The TUN completes the handshake locally; FlClash's upstream dial fails fast (its DIRECT dialer hits the dead path and gives up / or its own timeout), so it closes the local leg. This is exactly the "accepted but silent" the captain saw — **it is not a real TCP connection to the jump host.**

Same via FlClash's SOCKS5 ingress (`127.0.0.1:7890`, rules still apply → GEOIP CN → DIRECT):
```
via socks5 210.77.75.12:9910 -> CONNECT ok (0.00s), recv: b''
```

### 3.2 Physical path (bypassing TUN) — the host is unreachable

Raw socket bound to `en0` (`IP_BOUND_IF`, index of en0) — this bypasses the TUN entirely:
```
en0  210.77.75.12:9910 -> connect FAIL (15.00s): timed out
en0  210.77.75.12:22   -> FAIL (8.0s): timed out
en0  210.77.75.12:80   -> FAIL (5.0s): timeout
en0  210.77.75.12:443  -> FAIL (8.0s): timed out
```
**Every port times out.** No SYN-ACK, no RST. The host does not respond at the TCP layer — so hypothesis (c) (SSH banner/kex) is impossible: the failure is below SSH.

Controls on the same egress prove the Mac's path is fine:
```
en0 223.5.5.5:53        -> OK (0.03s)   # AliDNS
en0 114.114.114.114:53  -> OK (0.04s)
en0 192.168.1.1:80      -> OK (0.01s)   # local gateway
en0 1.1.1.1:443         -> FAIL (6.0s)  # intl blocked on this CN net (expected)
```

### 3.3 Traceroute — the path reaches the institute, then dies at the host

`traceroute -n -s 192.168.1.4 210.77.75.12` (bound to en0, bypassing TUN):
```
 1  192.168.1.1        4 ms     # local gateway
 2  10.167.0.1         7 ms     # ISP
 3  117.157.95.133     6 ms     # China Mobile
 7  221.183.171.49    46 ms     # China Mobile backbone
10  159.226.254.73    32 ms     # CSTNET (CAS)
11  159.226.254.142   62 ms     # CSTNET
12  159.226.253.170   61 ms     # CSTNET
13  192.168.17.30     64 ms     # institute internal gateway
14  *  15  *  16  *             # nothing after — the host is dark
```
Packets traverse China Mobile → CSTNET → reach the institute's internal gateway `192.168.17.30` (hop 13, reproducible across runs) — then silence. **The route into the institute works; the host itself does not respond.** ICMP `ping` also 100% loss.

### 3.4 Second vantage point — AutoDL box 176 (Aliyun)

Read-only `/dev/tcp` probes over SSH (`connect.westb.seetacloud.com:43812`, per `remote_GPU_context.md` §Instance B):
```
PORT 9910: FAIL
PORT 22:   FAIL
PORT 443:  FAIL
ctrl 223.5.5.5:53 OK
```
TCP connect itself fails from Aliyun — consistent with the prior `fm-ar-imp-resume` report.

### 3.5 The institute edge is UP — so it's the host, not a border ACL

`imp.cas.cn` resolves (via DoH `223.5.5.5`, bypassing FlClash fake-IP) to `159.226.242.62` — same CSTNET edge:
```
en0 159.226.242.62:443 -> OK (0.04s)
en0 159.226.242.62:80  -> OK (0.12s)
```
The institute's public web server answers in 40ms from the same physical egress where `210.77.75.12` is dark on all ports. If the institute border were filtering our source, `imp.cas.cn` would fail too. **The failure is host-specific.**

### 3.6 Whole `/24` is dark

`210.77.75.1`, `210.77.75.12`, `210.77.75.100` all time out — the entire `210.77.75.0/24` (the institute's jump-host segment) is unresponsive, consistent with the host (or its segment) being powered off / its border link down.

<!-- SOURCE-BODY-END -->
