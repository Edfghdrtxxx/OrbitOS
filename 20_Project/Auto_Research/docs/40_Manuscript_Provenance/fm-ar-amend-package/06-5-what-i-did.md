<!-- Verbatim source section; overview: [[../fm-ar-amend-package]] -->
<!-- SOURCE-BODY-START -->
## 5. What I did

- Read all 10 source reports in full; read `main.tex` (all 606 lines, including full text of every flagged line via `sed`/`cut` for >768-char lines) and `references.bib` in the live checkout.
- Verified independently: `grep -c '^@' references.bib` = **48** (resolves the 45-vs-48 conflict); the "neither…exploit" novelty sentence exists only at L53; L369's "+0.024 pp" vs the printed 95.80−95.77 = 0.03 (nit folded into that row); `bin/fm-captain-hold.sh` present.
- Merged duplicate findings across reports into single rows (e.g., L170/L207 normalization flagged by methods-audit + claims-ledger + claims-refresh + closing-check; L313 flagged by bib-fixsheet + attn-sink + figure-provenance + related-work).
- Reconciled 13 cross-report disagreements (§2) with the deciding evidence named in each case.

<!-- SOURCE-BODY-END -->
