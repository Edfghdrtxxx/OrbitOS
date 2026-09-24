<!-- Verbatim source section; overview: [[../fm-ar-bib-fixsheet]] -->
<!-- SOURCE-BODY-START -->
## 2. Wrong-DOI / wrong-title / missing-DOI / stale entries — corrected BibTeX

All in `fixes.bib`; each DOI resolved live with the quoted title.

| Key | Fix | Verified resolution |
|---|---|---|
| `Kuchera2019` | DOI `.099` → `10.1016/j.nima.2019.05.097` | *"Machine learning methods for track classification in the AT-TPC"*, NIMA 940:156-167 (2019) |
| `Bradt2021` | vol/pages/DOI → 1010:165461, `10.1016/j.nima.2021.165461`; **author list corrected — first author is Solli, R., not Bradt, J.** | *"Unsupervised learning for identifying events in active target experiments"*, NIMA 1010:165461 (2021), Solli et al. **Recommend renaming the key `Bradt2021`→`Solli2021`** (cite site: L76) — or keep the key and fix only the authors. |
| `MATE_NIM` | DOI `...01503-6` → `10.1007/s41365-024-01500-7` | *"Construction and performance test of charged particle detector array for MATE"*, NST 35(8):131 (2024) |
| `ACTARTPC` | title + DOI → *"Commissioning of the ACtive TARget and Time Projection Chamber (ACTAR TPC)"*, `10.1016/j.nima.2019.06.067` | NIMA 940:498-504 (2019), Mauss et al. — volume/pages/year were already right |
| `Bradt2017` | **title wrong — the audit missed this; `verify_bib.py` caught it** → *"Commissioning of the Active-Target Time Projection Chamber"* | DOI `10.1016/j.nima.2017.09.013` resolves to that title, NIMA 875:85-99 (2017), Bradt et al. |
| `Ayyad2020_PRL` | vol/pages/year → PRL **123:082501 (2019)**; title → *"Direct Observation of Proton Emission in $^{11}$Be"*. **Uses `eprint={1907.00114}` instead of the DOI** — Crossref returns MathML markup in the title which trips the verifier's title check; DOI `10.1103/PhysRevLett.123.082501` is correct and may be added back. arXiv verified → *"Direct observation of proton emission in 11Be"* (2019). **Recommend renaming key `Ayyad2020_PRL`→`Ayyad2019_PRL`** (cite site: L70). |
| `ATTPC` | pages 163627 → **161341**, add DOI `10.1016/j.nima.2018.10.019` | *"Next-generation experiments with the Active Target Time Projection Chamber (AT-TPC)"*, NIMA 954:161341 (2020) |
| `Wu2023ResNet` | title → *"Machine learning method for $^{12}$C event classification and reconstruction in the active target time-projection chamber"*; authors → Wu, Wang, Wang, Deng, Cao, Fang | DOI `10.1016/j.nima.2023.168528` resolves to that title, NIMA 1055:168528 (2023) |
| `AGET` | title → *"GET: A generic electronics system for TPCs and nuclear physics instrumentation"* | DOI `10.1016/j.nima.2018.01.020` resolves to that title, NIMA 887:81-93 (2018), Pollacco et al. (the paper covers the GET system incl. the AGET ASIC; the old title belongs to no paper at this DOI). Optionally rename key `AGET`→`GET`. |
| `SAMURAITPC` | add DOI `10.1063/5.0041191` | *"The SπRIT time projection chamber"*, RSI 92:063302 (2021) |
| `Das2025` | stale preprint → journal ref: JINST 20:P08036 (2025), `10.1088/1748-0221/20/08/p08036` | *"Classification of Hoyle state decay branches in active target time projection chamber using neural network"* |
| `Guo2026DomainAdapt` | add volume/pages now final: **1088:171506** (DOI unchanged, already correct) | NIMA 1088:171506 (2026) — resolves the `% PRE-SUBMISSION` comment |

### Miscited entries (real papers, wrong claim)

| Key | Fix |
|---|---|
| `Jadon2020Loss` (L248, label smoothing) | **Delete**; cite `Szegedy2016LabelSmoothing` — DOI `10.1109/CVPR.2016.308` → *"Rethinking the Inception Architecture for Computer Vision"* (CVPR 2016; label smoothing introduced §7). Suggested: `label smoothing 0.05 \cite{Szegedy2016LabelSmoothing}`. Optional alternative: Müller, Kornblith & Hinton, *"When Does Label Smoothing Help?"*, arXiv:1906.02629 (verified). |
| `Adam` (L526, AdamW) | **Delete**; cite `AdamW` — arXiv:1711.05101 → *"Decoupled Weight Decay Regularization"*, Loshchilov & Hutter (year 2017, `note={ICLR 2019}`). Suggested: `the AdamW optimizer \cite{AdamW}`. |
---

<!-- SOURCE-BODY-END -->
