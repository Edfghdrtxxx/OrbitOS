<!-- Verbatim source section; overview: [[../fm-ar-bib-additions]] -->
<!-- SOURCE-BODY-START -->
## 2. Full BibTeX + live verification

All entries are in `additions.bib`. Identifiers verified live 2026-09-24; quoted titles are the API responses.

| Key | Identifier | API-returned title (verbatim) |
|---|---|---|
| `FischlerBolles1981` | DOI `10.1145/358669.358692` | "Random sample consensus" — Comm. ACM 24(6):381–395, 1981 |
| `DudaHart1972` | DOI `10.1145/361237.361242` | "Use of the Hough transformation to detect lines and curves in pictures" — Comm. ACM 15(1):11–15, 1972 |
| `Dalitz2019` | DOI `10.1016/j.cpc.2018.09.010` | "Automatic trajectory recognition in Active Target Time Projection Chambers data by means of hierarchical clustering" — **CPC 235:159–168 (2019)**, Dalitz, Ayyad, Wilberg, Aymans, Bazin, Mittig. *Note: the journal version is 2019, not 2018 — hence the key `Dalitz2019`, not `Dalitz2018`.* |
| `Tarasov2008LISE` | DOI `10.1016/j.nimb.2008.05.110` | "LISE++: Radioactive beam production with in-flight separators" — NIMB 266(19–20):4657–4664, 2008 |
| `Hubert1990` | DOI `10.1016/0092-640X(90)90001-Z` | "Range and stopping-power tables for 2.5–500 MeV/nucleon heavy ions in solids" — ADNDT 46(1):1–213, 1990 |
| `Fortino2022` | DOI `10.1016/j.nima.2022.166497` | "Digital signal analysis based on convolutional neural networks for active target time projection chambers" — NIMA 1031:166497, 2022 |
| `Li2025PointCloud` | arXiv `2501.18674` | "Unpaired Translation of Point Clouds for Modeling Detector Response" — Li, Kuchera, Ramanujan, Anthony, Hunt, Ayyad, 2025 |
| `Wheeler2026Transfer` | arXiv `2608.21756` | "How Architecture and Training Affect TPC Representations Across Experiments" — Wheeler, Kuchera, Ramanujan, Sieland, Krupp, Ayyad, Bazin, et al., 2026 |
| `HesselLee2020` | DOI `10.18653/v1/2020.emnlp-main.62` | "Does my multimodal model learn cross-modal interactions? It's harder to tell than you might think!" — EMNLP 2020:861–877 |
| `Geirhos2020Shortcut` | DOI `10.1038/s42256-020-00257-z` | "Shortcut learning in deep neural networks" — Nat. Mach. Intell. 2(11):665–673, 2020 |
| `Darcet2024Registers` | arXiv `2309.16588` | "Vision Transformers Need Registers" — Darcet, Oquab, Mairal, Bojanowski. *arXiv year is 2023; entry uses `year={2023}, note={ICLR 2024}` (same convention as `AdamW` in fixes.bib) so the verifier's year check passes.* |
| `Sun2021ReAct` | arXiv `2111.12797` | "ReAct: Out-of-distribution Detection With Rectified Activations" — Sun, Guo, Li, NeurIPS 2021 |

Two verifier-driven adjustments vs. naive entries: `FischlerBolles1981` uses the short Crossref title "Random sample consensus" (the full subtitle trips the 0.90 title-similarity check — same class of fix the fix sheet applied to `Ayyad2020_PRL`); `Darcet2024Registers` uses arXiv-year 2023 + `note={ICLR 2024}`.

**Key-collision check:** all 12 keys absent from `references.bib` (48 keys) and `fixes.bib` (26 keys) — verified by set diff.

---

<!-- SOURCE-BODY-END -->
