<!-- Verbatim source section; overview: [[../fm-ar-jump-net]] -->
<!-- SOURCE-BODY-START -->
## 2. Environment at test time

- **Mac egress:** en0 (Wi-Fi), `192.168.1.4`, gateway `192.168.1.1` (Skyworth router, `f4:d4:54` OUI, answers HTTP on :80). This is a **home/dorm CN network**, not IMP-Wireless and not the iPhone hotspot (`172.20.10.x`). SSID is redacted by macOS privacy tooling but PHY is 802.11ax, country code CN.
- **FlClash:** running (PID 3418), TUN mode on `utun4` (`198.18.0.1`), `mixed-port 7890`, `fake-ip` DNS (`198.18.0.1/16`), `log-level: error`.
- **Rules** (`~/Library/Application Support/com.follow.clash/config.yaml`): `IP-CIDR` private ranges → DIRECT, `GEOIP,CN` → DIRECT, `MATCH` → proxy. `210.77.75.12` is CN (CSTNET, `210.77.64.0/20`) → **DIRECT**. So FlClash dials it from the Mac's physical egress — same path as a bound socket.

<!-- SOURCE-BODY-END -->
