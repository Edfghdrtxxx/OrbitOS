<!-- Verbatim source section; overview: [[../fm-ar-imp-resume]] -->
<!-- SOURCE-BODY-START -->
## 3. What is needed to unblock (captain/firstmate)

1. **Confirm the jump host is alive** — `210.77.75.12:9910` from a known-good vantage (e.g., campus network, or ask IMP admin). If the host/IP/port changed, update `IMP_server_context.md` §1.
2. **Or provide an alternate route** — e.g., a different jump host, VPN credentials for the IMP internal net, or confirmation the Mac should be on a specific network when connecting.
3. Once reachable, the resume plan is unchanged and ready: inventory (torch/deps/cores/RAM/disk) → stage `z01-exec` snapshot + 5 checkpoints + `Garfield_{Raw,HC}` data → run sequentially: D6-s42 battery → diag-s0 (500 ev) → redump ×5 → paired stats → heldout eval on lf → prereg re-score → pull results to Mac `runs/`.

<!-- SOURCE-BODY-END -->
