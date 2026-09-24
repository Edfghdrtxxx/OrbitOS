<!-- Verbatim source section; overview: [[../fm-ar-closing-sync]] -->
<!-- SOURCE-BODY-START -->
## 6. Cross-report conflicts noticed (resolved by the reports themselves)

- **Label-fix battery JSON buggy vs corrected:** fm-ar-mechanism §4 still flags the local JSON as the buggy 0.7005 run — **stale**; closing-check R13 and claims-ledger §3 independently verified the corrected file on disk (original 0.9275, mtime 15:21). The lead should ignore mechanism §4's caveat on this point (its §1–3 analysis is unaffected).
- **McNemar bounds:** seed-evidence/referee quote p≤0.035/7.5e-4; gpu-ladder's p≤1.5e-5/4.5e-12 is newer and better-evidenced (claims-ledger §3 recomputed both) — use the tighter bounds.
- **EXP2 val size:** methods-audit said "same 25k val"; exp2-contam's CM arithmetic (35,000 = 0.2×7×25k) proves 35k with 10k carbon — exp2-contam is correct (claims-ledger §3 concurs).

<!-- SOURCE-BODY-END -->
