<!-- Verbatim source section; overview: [[../fm-ar-jump-net]] -->
<!-- SOURCE-BODY-START -->
## 6. How to tell which hypothesis held (decision table)

| Observation | Meaning |
|---|---|
| `IP_BOUND_IF` probe times out + `imp.cas.cn` reachable | **Host down** (current state — hypothesis b) |
| `IP_BOUND_IF` probe times out + `imp.cas.cn` also fails | Institute border / edge down |
| `IP_BOUND_IF` probe connects, banner arrives | Host back up |
| Works on IMP-Wireless but not external | Border ACL filtering external sources |
| TUN `nc` "succeeds" but bound-en0 times out | FlClash artifact only — ignore the TUN result |

<!-- SOURCE-BODY-END -->
