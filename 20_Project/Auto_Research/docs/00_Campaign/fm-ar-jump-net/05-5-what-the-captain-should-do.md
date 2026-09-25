<!-- Verbatim source section; overview: [[../fm-ar-jump-net]] -->
<!-- SOURCE-BODY-START -->
## 5. What the captain should do

There is **no client-side fix** — the host must be restarted or an alternate route provided. Minimal procedure:

### Step 1 — Confirm it's still down (30 seconds, any network)

```bash
nc -vz -G 8 210.77.75.12 9910
```
- **Expected while down:** `nc: connectx to 210.77.75.12 port 9910 (tcp) failed: Operation timed out`
- **If it comes back:** `Connection to 210.77.75.12 port 9910 [tcp/*] succeeded!`

> ⚠️ **Do not trust `nc` without `-G` while FlClash TUN is on** — the TUN fakes "succeeded" then gives 0 bytes. `-G 8` (connect timeout) still goes through the TUN; for a *true* test bypass the TUN:
> ```bash
> python3 -c "import socket;s=socket.socket();s.settimeout(8);s.setsockopt(socket.IPPROTO_IP,25,socket.if_nametoindex('en0'));s.connect(('210.77.75.12',9910));print('REAL connect OK')"
> ```
> `REAL connect OK` = host is back. `timed out` = still down. (This is the exact probe used in §3.2.)

### Step 2 — Get the host restarted / get an alternate route

Contact the IMP admin (or whoever physically manages `210.77.75.12`) and report:
> "Jump host `210.77.75.12` is unreachable on all ports from 4+ external networks (China Mobile home net, Aliyun, iPhone hotspot, US exit). Traceroute reaches the institute internal gateway `192.168.17.30` then dies — the host appears powered off or its segment is down. `imp.cas.cn` is reachable, so the institute edge is up. Please restart the host or confirm its status."

Ask specifically for: (a) host restart, or (b) an alternate jump host / VPN for the `172.17.116.0/24` internal net.

### Step 3 — When it's back, verify the full route

```bash
ssh -p 9910 tpc_usr_imp@210.77.75.12
```
- **Expected:** password prompt (password in `IMP_server_context.md` §1, "verified working 2026-06-27" entry — do not paste it anywhere).
- Then through the jump to the target:
  ```bash
  ssh -J tpc_usr_imp@210.77.75.12:9910 stu_2021@172.17.116.64
  ```
  (uses the `~/.ssh/id_ed25519` key authorized on the target, per §1.)

### Per-network notes

- **Personal hotspot / home CN net / any external net:** all equivalent — the host is down for all of them. No network-specific procedure helps.
- **IMP-Wireless:** worth one test *if* the captain is on campus, because an internal source might bypass a border ACL — but §3.5 shows the edge is up and the host is dark, so even IMP-Wireless will very likely fail. If it *does* work from IMP-Wireless, that changes the diagnosis to "border ACL blocking external sources" — tell the admin that instead.
- **FlClash:** leave it on or off — it is not the cause. If the captain wants clean `nc`/`ssh` output without the TUN artifact, either quit FlClash or use the `IP_BOUND_IF` probe in Step 1.

<!-- SOURCE-BODY-END -->
