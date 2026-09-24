<!-- Verbatim source section; overview: [[../fm-ar-amend-package]] -->
<!-- SOURCE-BODY-START -->
## 3. Bibliography — ordered checklist

Do not copy BibTeX by hand; both sheets are paste-ready and were verified end-to-end on a merged copy (`verify_bib.py`: 53 ok + 1 exempt, exit 0).

1. **Apply `fixes.bib`** (`data/fm-ar-bib-fixsheet/fixes.bib`, 26 entries): corrected entries for `Kuchera2019` (DOI …099 → …097 — the …099 DOI resolves to a RADFET paper), `Bradt2021` (Solli et al., NIMA 1010:165461), `MATE_NIM`, `ACTARTPC`, `Bradt2017` (title), `Ayyad2020_PRL` (PRL 123:082501 **2019**, eprint form), `ATTPC`, `Wu2023ResNet`, `AGET`, `SAMURAITPC`, `Das2025` (JINST), `Guo2026DomainAdapt`; identifier additions for `Attention`, `ResNet`, `PyTorch`, `Geant4`, `TPCTextbook`, `NaturePhysicsReview`, `Radovic2018`, `Raissi2019`; new keys `He2016Identity`, `Perez2018FiLM`, `Jain2019Attention`, `Szegedy2016LabelSmoothing`, `AdamW`.
2. **Delete 11 keys:** `He2020ResNetSmall`, `Li2023CrossAttention`, `Koch2021`, `Li2021DomainAdapt`, `Yao2022Calibration`, `Cranmer2020`, `Dosovitskiy2021`, `Ganin2016`, `Shlomi2020`, `Jadon2020Loss`, `Adam`.
3. **Apply `additions.bib`** (`data/fm-ar-bib-additions/additions.bib`, 12 entries): `FischlerBolles1981`, `DudaHart1972`, `Dalitz2019`, `Tarasov2008LISE`, `Hubert1990`, `Fortino2022`, `Li2025PointCloud`, `Wheeler2026Transfer`, `HesselLee2020`, `Geirhos2020Shortcut`, `Darcet2024Registers`, `Sun2021ReAct`. (`Darcet2024Registers`/`Sun2021ReAct` are conditional on the L332 future-work framing — safe default: keep.)
4. **Add the DBSCAN verify exemption:** `DBSCAN` (Ester et al., KDD-96, AAAI Press) has no DOI or arXiv ID in existence — add the `verify={no-identifier: …}` field per the PR #36 exemption mechanism, or accept the single `no-identifier` flag.
5. **Update the cite sites** per §1 rows: L190 → `\cite{ResNet,He2016Identity}`; L211 → `\cite{Attention,Perez2018FiLM}`; L248 → `\cite{Szegedy2016LabelSmoothing}`; L313 → `\cite{NaturePhysicsReview}` + `\cite{Jain2019Attention}`; L475 → add `\cite{FischlerBolles1981,DudaHart1972,Dalitz2019,Tarasov2008LISE,Hubert1990,Arokiaraj2025GMM}`; L526 → `\cite{AdamW}`; L76 → add `\cite{Fortino2022,Li2025PointCloud}` (+ optionally `Dalitz2019`/`Arokiaraj2025GMM` at L73); L332 → optionally `\cite{Geirhos2020Shortcut,Darcet2024Registers,Sun2021ReAct}`; L381 → optionally `\cite{HesselLee2020}`; L387 → `\cite{Wheeler2026Transfer}`.
6. **Optional key renames** (cosmetic; safe default = keep keys): `Bradt2021`→`Solli2021` (cite site L76), `Ayyad2020_PRL`→`Ayyad2019_PRL` (L70), `AGET`→`GET` (L142).
7. **Expected end state:** 54 entries (48 − 11 + 5 + 12), all cited, `verify_bib.py` exit 0 (53 ok + 1 exempt DBSCAN) — already demonstrated on the merged copy in `fm-ar-bib-additions` §4.

---

<!-- SOURCE-BODY-END -->
