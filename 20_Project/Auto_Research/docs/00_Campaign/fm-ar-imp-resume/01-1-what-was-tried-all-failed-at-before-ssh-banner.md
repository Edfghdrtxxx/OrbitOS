<!-- Verbatim source section; overview: [[../fm-ar-imp-resume]] -->
<!-- SOURCE-BODY-START -->
## 1. What was tried (all failed at/before SSH banner)

| Path | Command basis | Result |
|---|---|---|
| Mac → jump host `210.77.75.12:9910` (paramiko wrapper `remote_exec.py`) | `MATE_IMP_*` env per `IMP_server_context.md` §1 | `Error reading SSH protocol banner` — TCP connects, banner never arrives, ×3 retries |
| Mac → jump host (OpenSSH `ssh -p 9910`) | direct | `kex_exchange_identification: Connection closed by remote host`, ×4 over ~2 min |
| Mac → target `172.17.116.64:22` direct (key auth) | `ssh -o BatchMode=yes` | `Connection closed` at banner — expected (Mac is not on IMP internal net; route goes via FlClash TUN) |
| Box 176 → jump host `210.77.75.12:9910` | `sshpass` + `/dev/tcp` probe (documented §4a route: sim→jump→GPU) | TCP connect **fails outright** (`9910-TCP-FAIL`, ×3); port 22 also fails |
| Box 176 → target `172.17.116.64:22` | `/dev/tcp` probe | `No route to host` (expected — internal IP) |
| Raw banner reads (`nc < /dev/null`) | Mac → `210.77.75.12:{22,443,9910}`, `172.17.116.{64,65}:22` | TCP handshake completes (TUN intercepts), **zero bytes returned** on every port |
| `ping` both hosts | ICMP | 100% loss (ICMP likely filtered; inconclusive alone) |

**Diagnosis:** the IMP jump host `210.77.75.12` is not serving SSH to any of our vantage points — Mac direct egress (China Telecom hotspot, `172.20.10.1` gateway), Mac via FlClash US exit (`69.85.83.135`), and AutoDL box 176 (Aliyun). TCP to :9910 completes from the Mac but the banner never arrives (firewall tarpit or sshd down); from box 176 the TCP connect itself fails. No alternate gateway, port, or credential is documented anywhere in `20_doc/servers/`, the vault, or firstmate records — the only IMP ingress on file is this jump host.

**Ruled out:** local proxy misrouting (AutoDL SSH works fine through the same TUN — verified `ssh -p 43812 root@connect.westb.seetacloud.com` → `autodl-container-3187449845` at 09:35); credential issue (failure precedes auth); transient relay flap (consistent failure across ~30 min, two source networks, three protocols).

<!-- SOURCE-BODY-END -->
