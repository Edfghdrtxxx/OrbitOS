<!-- Verbatim source section; overview: [[../fm-ar-jump-route]] -->
<!-- SOURCE-BODY-START -->
## 1. Verdict

- **The jump host worked as recently as 2026-09-21 ~17:05–18:17** (box 176 pulled 9.1 GB `Garfield_Raw` from IMP *through* it). It died sometime between then and 2026-09-25 ~09:30. This is a server-side failure, not the hotspot, not FlClash, not credentials.
- **The Mac has never successfully used the jump host.** Every Mac→IMP connection on record went **direct to `172.17.116.64:22` on the institute internal network** (proof in §3). The jump host was the *Windows PC's* route (sold ~Sep 15) and the *AutoDL box's* route.
- **No alternate route is documented or discoverable from here:** no institute VPN endpoint exists under `imp.cas.cn`, no second jump host, no reverse tunnel, no other group-controlled relay on file.
- **Best untested route: direct `172.17.116.64:22` from the institute internal network** (campus LAN / IMP-Wireless). It bypasses the dead jump host entirely and is the only route the Mac has ever used successfully. Captain procedure in §6.
- **Latent second failure:** even after the jump host comes back, the Mac's wrappers will *still* fail through it — `~/.ssh/known_hosts` has no `[210.77.75.12]:9910` entry and `_ssh_connect.py` now enforces `RejectPolicy` (§5). One `ssh-keyscan` line fixes it; exact command in §6 step 4.

<!-- SOURCE-BODY-END -->
