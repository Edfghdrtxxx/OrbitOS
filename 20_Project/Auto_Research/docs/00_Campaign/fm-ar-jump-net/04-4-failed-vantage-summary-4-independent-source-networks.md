<!-- Verbatim source section; overview: [[../fm-ar-jump-net]] -->
<!-- SOURCE-BODY-START -->
## 4. Failed-vantage summary (4 independent source networks)

| Source | Path | Result |
|---|---|---|
| Mac, home CN net (en0, TUN bypassed) | direct | all ports timeout |
| Mac, same net, via FlClash TUN | DIRECT rule | instant EOF (artifact) |
| Mac, same net, via FlClash SOCKS5 | DIRECT rule | instant EOF (artifact) |
| AutoDL box 176 (Aliyun) | direct | TCP connect fails |
| (prior report) Mac on iPhone hotspot | direct + FlClash US exit | banner never arrives |
| (prior report) Mac via FlClash US exit `69.85.83.135` | proxy | banner never arrives |

Six vantage points, all dead. **The jump host is down.**

<!-- SOURCE-BODY-END -->
