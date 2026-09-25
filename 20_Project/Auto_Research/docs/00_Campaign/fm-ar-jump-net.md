> Origin: `fm-ar-jump-net` scout report; recorded 2026-09-25.

<!-- SOURCE-PREFIX-START -->
# fm-ar-jump-net — Mac-side network path diagnosis for jump host `210.77.75.12:9910`

**Date:** 2026-09-25 ~11:30–12:10. **Author:** crewmate (omp/SWE-2), scout task.
**Verdict:** **Hypothesis (b) — the jump host `210.77.75.12` is down.** Not FlClash, not the source network, not SSH. No client-side fix exists; the host must be restarted or an alternate route provided by the IMP admin.

---

<!-- SOURCE-PREFIX-END -->

<!-- Original report body is reconstructed from the prefix and linked verbatim sections below. -->
## Status

**Jump host `210.77.75.12` confirmed DOWN.** All ports time out from 4+ independent source networks while the institute edge (`imp.cas.cn`) stays up; the "accepted but silent" symptom is a FlClash TUN artifact, not a real connection. No client-side fix exists — unblock requires the IMP admin to restart the host or provide an alternate route.

## Contents

- [[00_Campaign/fm-ar-jump-net/01-1-tl-dr|1. TL;DR]]
- [[00_Campaign/fm-ar-jump-net/02-2-environment-at-test-time|2. Environment at test time]]
- [[00_Campaign/fm-ar-jump-net/03-3-evidence|3. Evidence]]
- [[00_Campaign/fm-ar-jump-net/04-4-failed-vantage-summary-4-independent-source-networks|4. Failed-vantage summary (4 independent source networks)]]
- [[00_Campaign/fm-ar-jump-net/05-5-what-the-captain-should-do|5. What the captain should do]]
- [[00_Campaign/fm-ar-jump-net/06-6-how-to-tell-which-hypothesis-held-decision-table|6. How to tell which hypothesis held (decision table)]]
- [[00_Campaign/fm-ar-jump-net/07-7-files-state-touched|7. Files / state touched]]
- [[00_Campaign/fm-ar-jump-net/08-8-bottom-line-for-firstmate|8. Bottom line for firstmate]]

<!-- ORIGINAL-BODY-SHA256: 8da1fe5617e3660f80e34a5f97323d6b8318ca3b8c3ed53ff9fcd543cb2a4a88 -->
<!-- ORIGINAL-BODY-BYTES: 10797 -->
