<!-- Verbatim source section; overview: [[../fm-ar-bib-additions]] -->
<!-- SOURCE-BODY-START -->
## 5. What I did

- Read the fix sheet, claims refresh §6, and related-work audit §3; read `main.tex` lines 53, 67, 73, 76, 79, 296–335, 367–387, 469–495 verbatim and grepped for activation/sink/register/OOD anchors (none exist for Darcet/ReAct — hence conditional).
- Verified all 12 candidate identifiers live (5 DOIs + 7 arXiv IDs first pass; then found and verified journal DOIs for Dalitz → CPC `10.1016/j.cpc.2018.09.010`, Fortino → NIMA `10.1016/j.nima.2022.166497`, Hessel & Lee → EMNLP `10.18653/v1/2020.emnlp-main.62`); fetched full author lists from the arXiv API and Crossref.
- Wrote `additions.bib` (12 entries), built the merged bib + patched tex in `.scratch/bibadd/`, ran `verify_bib.py` twice — first run caught `FischlerBolles1981` title-mismatch and `Darcet2024Registers` year-mismatch, both fixed; second run clean.
- Noted for the record: `references.bib` has 48 entries, not the 45 the fix sheet reported (its net arithmetic — 45→39 — is correspondingly off; true post-merge count is 54 including my 12, i.e., 48 − 11 + 17).

<!-- SOURCE-BODY-END -->
