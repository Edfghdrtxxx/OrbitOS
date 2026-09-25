> Origin: `fm-ar-jump-route` scout report; recorded 2026-09-25.

<!-- SOURCE-PREFIX-START -->
# fm-ar-jump-route — IMP route history, alternatives, and captain procedure

**Date:** 2026-09-25 ~11:35–13:00. **Author:** crewmate (omp/SWE-2), scout task.
**Sibling:** `fm-ar-jump-net` (Mac-side network diagnosis) — its report (`data/fm-ar-jump-net/report.md`) proves the jump host `210.77.75.12` is **down** (all ports timeout from 4+ networks; institute edge `imp.cas.cn` is up). This report covers the other half: every route that ever worked, and what to try now.

---

<!-- SOURCE-PREFIX-END -->

<!-- Original report body is reconstructed from the prefix and linked verbatim sections below. -->
## Status

**Route history and ranked alternatives.** The jump host last worked 2026-09-21 ~17:05–18:17 (box 176 pulled 9.1 GB `Garfield_Raw` through it) and died before 2026-09-25 ~09:30. The Mac has never used the jump host — every Mac→IMP connection went direct to `172.17.116.64:22` on the institute internal network. Best route now: direct from campus/IMP-Wireless (captain procedure in section 6).

## Contents

- [[00_Campaign/fm-ar-jump-route/01-1-verdict|1. Verdict]]
- [[00_Campaign/fm-ar-jump-route/02-2-route-history-table-dated-sourced|2. Route history table (dated, sourced)]]
- [[00_Campaign/fm-ar-jump-route/03-3-proof-that-the-macs-sep-20-connect-went-direct-not-via-jum|3. Proof that the Mac's Sep 20 connect went DIRECT, not via jump]]
- [[00_Campaign/fm-ar-jump-route/04-4-what-i-tested-from-here-2026-09-25-mac-on-home-cn-net-192|4. What I tested from here (2026-09-25, Mac on home CN net `192.168.1.4`)]]
- [[00_Campaign/fm-ar-jump-route/05-5-ranked-routes-to-try|5. Ranked routes to try]]
- [[00_Campaign/fm-ar-jump-route/06-6-minimal-captain-procedure-direct-route-from-campus-route-1|6. Minimal captain procedure — direct route from campus (route #1)]]
- [[00_Campaign/fm-ar-jump-route/07-7-files-state-touched|7. Files / state touched]]

<!-- ORIGINAL-BODY-SHA256: 821324d7d6ef8712a5f4d1148ecb610dc3869ab6e852dc04126bdf0590bc3866 -->
<!-- ORIGINAL-BODY-BYTES: 14147 -->
