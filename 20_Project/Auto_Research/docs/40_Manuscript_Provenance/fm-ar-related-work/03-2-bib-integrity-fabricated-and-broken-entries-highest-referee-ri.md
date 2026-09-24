<!-- Verbatim source section; overview: [[../fm-ar-related-work]] -->
<!-- SOURCE-BODY-START -->
## 2. Bib integrity — fabricated and broken entries (highest referee risk)

All verified against Crossref/arXiv today. "Resolves to" = what the DOI actually returns.

| Key | Bib says | Reality | Severity |
|-----|----------|---------|----------|
| `He2020ResNetSmall` | "ResNet revisited: Deep residual networks for small-scale scientific data", arXiv:2002.03544 | arXiv:2002.03544 is **"On rational maps with buried critical points"** (math). No such paper exists. | **Fabricated** — cited at L190 for backbone design guidance |
| `Li2023CrossAttention` | "Cross-attention mechanisms in multimodal scientific data fusion", IEEE TNNLS 34(7):3290-3303 | No such article in TNNLS or anywhere (Crossref title search returns unrelated papers). | **Fabricated** — cited at L211 as the cross-attention reference |
| `Li2021DomainAdapt` | "Domain adaptation in scientific deep learning", PRR 3:033259 | PRR 3:033259 is **"From operator statistics to wormholes"** (Altland). | **Fabricated** — uncited, dead entry |
| `Yao2022Calibration` | "Physics-constrained deep learning for nuclear detector calibration", NIMA 1035:166886 | DOI `10.1016/j.nima.2022.166886` does not exist; NIMA 1035:166886 slot is unrelated. | **Fabricated** — uncited, dead entry |
| `Koch2021` | "Explainable AI in nuclear physics data analysis", EPJA 57:273 | No such article found in EPJA or Crossref. | **Unverifiable / likely fabricated** — cited at L313 for explainable-ML framing |
| `Kuchera2019` | NIMA 940:156-167, DOI `...05.099` | Correct DOI is `10.1016/j.nima.2019.05.097`. The `...099` DOI resolves to **"Calibration and electric characterization of p-MNOS RADFETs"**. | **Wrong DOI → wrong paper** — the paper's most important prior-work citation |
| `Bradt2021` | NIMA 1003:165313, DOI `...165313` | Real paper is NIMA **1010:165461**, DOI `10.1016/j.nima.2021.165461`. Bib DOI does not resolve. | **Wrong volume+page+DOI** |
| `MATE_NIM` | NST 35:131, DOI `...01503-6` | Real DOI is `10.1007/s41365-024-01500-7`. Bib DOI does not resolve. | **Wrong DOI** — the detector's own reference |
| `ACTARTPC` | "The Active Target and Time Projection Chamber (ACTAR TPC)", NIMA 940:498-504, DOI `...06.030` | Real paper is **"Commissioning of the ACtive TARget and Time Projection Chamber (ACTAR TPC)"**, DOI `10.1016/j.nima.2019.06.067`. Bib DOI resolves to an unrelated energy-threshold paper. | **Wrong title + wrong DOI** |
| `Ayyad2020_PRL` | PRL 124:192502 (2020), DOI `...124.192502` | Real paper is PRL **123:082501 (2019)**, DOI `10.1103/PhysRevLett.123.082501`. Bib DOI resolves to "Electronic Bridge Excitation in Highly Charged Ions". | **Wrong volume+page+year+DOI** |
| `ATTPC` | NIMA 954:163627 | Real paper is NIMA 954:**161341**, DOI `10.1016/j.nima.2018.10.019`. | **Wrong page, no DOI** |
| `Wu2023ResNet` | "Machine learning methods for particle identification in the AT-TPC" | DOI resolves to **"Machine learning method for 12C event classification and reconstruction in the active target time-projection chamber"** (Wu, Wang, Wang, Deng, Cao, Fang — NIMA 1055:168528). Title in bib is wrong. | **Wrong title** (paper is real and correctly DOI'd) |
| `AGET` | "AGET, the GET front-end ASIC…", NIMA 887:81-93 | DOI resolves to **"GET: A generic electronics system for TPCs and nuclear physics instrumentation"** (Pollacco et al.). Title in bib is wrong. | **Wrong title** |
| `SAMURAITPC` | RSI 92:063302 | Correct journal/volume (RSI 92, 2021) but **no DOI**; real DOI is `10.1063/5.0041191`. | **Missing DOI** |
| `Das2025` | arXiv:2506.02506 | Now published: **JINST 20:P08036 (2025)**, DOI `10.1088/1748-0221/20/08/p08036`. | **Stale — upgrade to journal ref** |
| `Jadon2020Loss` | "A survey of loss functions for semantic segmentation", arXiv:2006.14822 | Real paper, but **miscited**: L248 uses it for *label smoothing*, which it does not cover. Correct refs: Szegedy et al. 2016 (arXiv:1512.00567) or Müller et al. 2019 (arXiv:1906.02629). | **Wrong citation for the claim** |
| `Adam` | Kingma & Ba, arXiv:1412.6980 | Real, but L526/L531 say **AdamW** — which is Loshchilov & Hutter, arXiv:1711.05101 (ICLR 2019). | **Wrong citation for the optimizer** |

**Uncited dead entries** (in bib, never `\cite`d): `Arokiaraj2025GMM`, `Cranmer2020`, `Dosovitskiy2021`, `Ganin2016`, `Li2021DomainAdapt`, `Shlomi2020`, `Yao2022Calibration`. Of these, `Arokiaraj2025GMM` *should* be cited (GMM track reconstruction in active targets — directly relevant to §6.5); the rest are either fabricated or unused.

---

<!-- SOURCE-BODY-END -->
