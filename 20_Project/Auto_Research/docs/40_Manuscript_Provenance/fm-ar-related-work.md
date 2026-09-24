> Origin: `fm-ar-related-work` scout report; recorded 2026-09-24.

# fm-ar-related-work — related-work & novelty audit of the manuscript

**Date:** 2026-09-24 · **Worker:** fm-ar-related-work (scout) · **Scope:** read-only on live checkout `/Users/Reid Hu/MATE-Automation`. No manuscript, bib, server, or run file touched. Deliverable is this report only — the captain amends `10_Papers-Thesis/` himself.

**Manuscript audited:** `10_Papers-Thesis/Physics_Informed/main.tex` (606 lines) + `references.bib` (442 lines, 45 entries). Related work lives entirely in the Introduction: L67 (motivation), L70 (AT-TPC), L73 (conventional analysis), L76 (prior ML), L79 (this work). Fusion/attention claims also at L211 (architecture), L313/L319 (attention analysis), L363-391 (§5.8 discussion), L501-513 (conclusion).

**Evidence base:** campaign findings from `fm-ar-mechanism/report.md` and `fm-ar-claims-ledger/report.md` (read in full); every citation below verified against Crossref (`api.crossref.org/works/<doi>`) or the arXiv API (`export.arxiv.org/api/query?id_list=`). Nothing is asserted from memory.

---

## 0. Headline

1. **The bib has a fabrication problem, not just gaps.** Four entries are fabricated or point at the wrong paper entirely (`He2020ResNetSmall`, `Li2023CrossAttention`, `Li2021DomainAdapt`, `Yao2022Calibration`), one more is unverifiable (`Koch2021`), and **five real papers carry wrong DOIs that resolve to unrelated articles** — including `Kuchera2019`, whose DOI `10.1016/j.nima.2019.05.099` resolves to a RADFET dosimetry paper (correct: `...05.097`). A referee who clicks any of these will find the wrong paper. This is the single most urgent fix.
2. **The core novelty claim survives but must be narrowed.** "Neither conventional cuts nor existing NN classifiers exploit the physics of energy loss encoded in track geometry" (L53) is **overstated**: Kuchera et al. 2019 (already cited) classify tracks using physics-derived moment features, and Dalitz/Ayyad et al. 2018 (uncited) do trajectory recognition via hierarchical clustering on AT-TPC data. The defensible claim is *first fusion of physics descriptors with CNN features via attention for isotope ID in an AT-TPC, evaluated against an architecture-matched CNN* — which the paper already half-says at L79.
3. **The failure modes are all precedented in the literature**, which is good news: each maps onto a named, citable phenomenon (attention sinks, ignored cross-modal interactions, shortcut learning, unnormalized side-channel leakage). The paper can reframe its negative results as a *mechanism diagnosis* contribution rather than a caveat.
4. **Methods citations are missing for every classical tool used**: RANSAC, Hough transform, LISE++, Hubert range tables, AdamW (miscited as Adam), label smoothing (miscited to a segmentation survey), and the SπRIT TPC DOI is absent.

---

## 1. Claim-by-claim verdicts (novelty & related-work framing)

| # | Loc | Claim (compressed) | Verdict | Deciding papers / evidence |
|---|-----|--------------------|---------|---------------------------|
| 1 | L53 (abstract), L67 | "neither conventional cuts nor existing neural-network classifiers exploit the physics of energy loss encoded in track geometry" | **Overstated** | Kuchera2019 (cited) uses track-moment/geometry features in LR/SVM/FCNN classifiers; Dalitz et al. 2018 (arXiv:1807.03513, uncited) does AT-TPC trajectory recognition from track geometry; Wu2023ResNet (cited) does event classification + reconstruction. The gap that survives: *fusion of physics descriptors with learned image features via attention* — not "physics of energy loss" per se. |
| 2 | L76 | Related-work roster: Kuchera2019, Bradt2021, Wu2023ResNet, Das2025, Dey2025PointCloud, Robles2025, Zhao2026GraphPT, Wheeler2025Sparse, Guo2026DomainAdapt, Zhang2026MATE, Kohls2025, Cheng2024 | **Holds but incomplete** | Coverage is genuinely good and current. Missing a referee would expect: Dalitz et al. 2018 (hierarchical-clustering tracking — the paper's own HC baseline is this family); Fortino & Zamora 2022 (CNN signal analysis for AT-TPC, arXiv:2202.12941); Li, Kuchera et al. 2025 (unpaired point-cloud translation, arXiv:2501.18674); Wheeler et al. 2026 (cross-experiment TPC representations, arXiv:2608.21756); Arokiaraj2025GMM (in bib, never cited). |
| 3 | L79 | "physics descriptors … fused with the convolutional features through a cross-attention mechanism" — novelty of the mechanism | **Holds, narrowly** | Cross-attention/feature-conditioned fusion is established elsewhere (FiLM, Perez et al. 2018, arXiv:1709.07871; parameterized NNs in HEP, Baldi et al. 2016, arXiv:1601.07913). Novelty is the *application* (MoI physics vector → attention query in an AT-TPC), not the mechanism. The text already hedges ("emerging tool in TPC data analysis") — keep that register. |
| 4 | L79 | "evaluates rather than presumes its benefit by comparing throughout against an architecture-matched CNN" | **Holds — this is the paper's strongest framing** | The matched-ResNet control is exactly what the campaign evidence rewards. Lean into it. |
| 5 | L79 | "physics-informed fusion consistently improves both classification and continuous regression" | **Overstated / partially contradicted** | EXP3 matched-size: XA−RN = −1.33/−2.13 pp on Raw (McNemar-guaranteed significant), ≈0 on HC (fm-ar-mechanism §5.1). "Consistently" is falsified on Raw classification. The next clause ("benefit of cross-attention itself is task-dependent, clearest for regression") already contains the honest version — the two clauses contradict each other. |
| 6 | L79 | "classification gains derive chiefly from the physics features and from training-data scale" | **Overstated in the other direction** | Campaign evidence: on HC the physics features are largely redundant (zero_cls Δ = +0.1/−0.4/−15.6 pp across seeds); the HC−Raw gain is DBSCAN denoising, proven by the physics-free ResNet arm (+6.5 pp). Classification gains derive chiefly from *data scale and image denoising*; the physics features' contribution is seed-dependent and mostly redundant on HC. |
| 7 | L211 | "fused … via cross-attention" (mechanism description) | **Factually accurate, framing at risk** | The architecture does contain cross-attention, but the physics query carries no event-specific signal (permuted_q Δ=0 on 6/6 checkpoints). The honest description is *single-query attention pooling + parallel physics concat*. See §4 reframing. |
| 8 | L313, L319 | "elevated attention near the track termination … physically consistent with isotope discrimination" | **Overstated (causal reading refuted)** | fm-ar-attn-sink: on HC attention collapses to a fixed sink token (87% argmax on token 50, f_Bragg ≤0.02, 3/3 seeds); on Raw f_Bragg≈0.47 is seed-42-only and image-driven (permuted_q Δ=0). The spatial fact in the figure is real; "physically consistent" invites a causal reading the counterfactuals refute. Prior art for the caveat: Jain & Wallace 2019 "Attention is not Explanation" (arXiv:1902.10186); Serrano & Smith 2019 "Is Attention Interpretable?" (arXiv:1906.03731). |
| 9 | L387 | "the approach should carry over to other AT-TPC configurations" | **Unsupported (plausible, untested)** | fm-ar-transfer: the only public AT-TPC dataset (Kuchera Zenodo 3473953) cannot host the physics-informed arm — no independent physics vector exists in 2D projections. Wheeler et al. 2026 (arXiv:2608.21756) is now the relevant prior on cross-experiment TPC transfer. |
| 10 | L501-513 (conclusion) | "physics-informed framework … reaches 96.1% / 89.7% … gains of 4.2 and 6.9 pp" | **Numbers stand; attribution overstated** | fm-ar-claims-ledger #10: margins confounded by ≥6 factors (baseline architecture mismatch, training protocol, data scale). The abstract/conclusion state them unqualified; §5.2 already says "indicative". |

---

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

## 3. Missing citations a referee would expect

Grouped by where they belong. Every entry verified (DOI or arXiv ID confirmed today).

### 3a. Methods citations (hard gaps — tools used but never cited)

| Missing ref | Where needed | Full reference | Why |
|---|---|---|---|
| RANSAC | §6.5 (L475, L481, L485) | Fischler & Bolles, "Random sample consensus", *Comm. ACM* 24:381-395 (1981), DOI `10.1145/358669.358692` | The primary classical baseline; uncited anywhere. |
| Hough transform | §6.5 (L475, L485) | Duda & Hart, "Use of the Hough transformation to detect lines and curves in pictures", *Comm. ACM* 15:11-15 (1972), DOI `10.1145/361237.361242` | Second classical baseline; uncited. |
| LISE++ | §6.5 (L475) | Tarasov & Bazin, "LISE++: Radioactive beam production with in-flight separators", *NIMB* 266:4657-4664 (2008), DOI `10.1016/j.nimb.2008.05.110` | The range-energy table source; named in text but uncited. |
| Hubert range tables | §6.5 (L475) | Hubert, Bimbot & Gauvin, "Range and stopping-power tables for 2.5-500 MeV/nucleon heavy ions in solids", *At. Data Nucl. Data Tables* 46:1-213 (1990), DOI `10.1016/0092-640X(90)90001-Z` | The specific table column used; named in text but uncited. |
| AdamW | App. A (L526, L531) | Loshchilov & Hutter, "Decoupled Weight Decay Regularization", ICLR 2019, arXiv:1711.05101 | Text says AdamW; bib cites Adam (Kingma & Ba). Different algorithm. |
| Label smoothing | §5.1 (L248) | Szegedy et al., "Rethinking the Inception Architecture for Computer Vision", CVPR 2016, arXiv:1512.00567; or Müller, Kornblith & Hinton, "When Does Label Smoothing Help?", NeurIPS 2019, arXiv:1906.02629 | Currently miscited to a segmentation-loss survey. |

### 3b. Prior work the related-work paragraph should add

| Missing ref | Full reference | Why a referee expects it |
|---|---|---|
| Dalitz et al. 2018 | Dalitz, Ayyad, Wilberg, Aymans, Bazin, Mittig, "Automatic trajectory recognition in Active Target Time Projection Chambers data by means of hierarchical clustering", arXiv:1807.03513 | The paper's own HC baseline is this method family; the closest classical-tracking prior in AT-TPCs. |
| Fortino & Zamora 2022 | Fortino, Zamora, Tamayose, Hirata, Guimaraes, "Digital Signal Analysis based on Convolutional Neural Networks for Active Target Time Projection Chambers", arXiv:2202.12941 | CNN on AT-TPC signals — a direct ML-in-AT-TPC predecessor the L76 list omits. |
| Li, Kuchera et al. 2025 | Li, Kuchera, Ramanujan, Anthony, Hunt, Ayyad et al., "Unpaired Translation of Point Clouds for Modeling Detector Response", arXiv:2501.18674 | Kuchera-group successor on AT-TPC point clouds + sim-to-real; same lineage as Dey2025PointCloud/Wheeler2025Sparse already cited. |
| Wheeler et al. 2026 | Wheeler, Kuchera, Ramanujan, Sieland, Krupp, Ayyad et al., "How Architecture and Training Affect TPC Representations Across Experiments", arXiv:2608.21756 | Directly relevant to the L387 portability claim — the only prior measuring cross-experiment TPC representation transfer. |
| Arokiaraj et al. 2025 | Arokiaraj, Latif, Raabe, Thisse, Vandebrouck, "Applying Gaussian mixture models to track reconstruction in inelastic scattering experiments with active targets", arXiv:2512.16794 | Already in the bib, never cited; GMM tracking is the natural classical alternative to RANSAC/Hough in §6.5. |
| Karpatne et al. 2017 | Karpatne et al., "Theory-Guided Data Science: A New Paradigm for Scientific Discovery from Data", *IEEE TKDE* 29:2318-2331 (2017), DOI `10.1109/TKDE.2017.2720168`, arXiv:1612.08544 | The canonical citation for "domain knowledge enters the input representation" — the paper's stated paradigm (L76) — alongside Karniadakis/Raissi. |
| Baldi et al. 2016 | Baldi, Cranmer, Faucett, Sadowski, Whiteson, "Parameterized Machine Learning for High-Energy Physics", arXiv:1601.07913 (EPJC 76:235) | The closest HEP prior for injecting a physics parameter as a network input — the exact mechanism the paper calls "physics-informed". |
| Perez et al. 2018 (FiLM) | Perez, Strub, de Vries, Dumoulin, Courville, "FiLM: Visual Reasoning with a General Conditioning Layer", AAAI 2018, arXiv:1709.07871 | The canonical feature-conditioning mechanism; a referee in ML will expect it next to "cross-attention fusion of side features". |

### 3c. Failure-mode / interpretation citations (for the reframed findings)

| Missing ref | Full reference | Why |
|---|---|---|
| Jain & Wallace 2019 | "Attention is not Explanation", NAACL 2019, arXiv:1902.10186 | The standard caveat for the L313/L319 attention-map interpretation. |
| Serrano & Smith 2019 | "Is Attention Interpretable?", ACL 2019, arXiv:1906.03731 | Companion caveat; attention weights ≠ feature importance. |
| Darcet et al. 2024 | "Vision Transformers Need Registers", ICLR 2024, arXiv:2309.16588 | Documents attention collapsing onto low-information "sink" tokens in ViTs — the same phenomenon as the HC token-50 sink. Lets the paper cite the sink as a *known* mechanism, not a defect. |
| Xiao et al. 2024 | "Efficient Streaming Language Models with Attention Sinks", ICLR 2024, arXiv:2309.17453 | The LLM-side attention-sink reference; same phenomenon, different domain. |
| Hessel & Lee 2020 | "Does my multimodal model learn cross-modal interactions? It's harder to tell than you might think!", EMNLP 2020, arXiv:2010.06572 | Directly precedented: multimodal models can match/beat baselines while *ignoring* the cross-modal interaction — exactly the permuted_q result. |
| Peng et al. 2022 | "Balanced Multimodal Learning via On-the-fly Gradient Modulation", CVPR 2022, arXiv:2203.15332 | Modality imbalance / one modality dominating fusion — the Raw side-channel crowding mechanism. |
| Geirhos et al. 2020 | "Shortcut learning in deep neural networks", *Nat. Mach. Intell.* 2:665-673, DOI `10.1038/s42256-020-00257-z`, arXiv:2004.07780 | The canonical shortcut-learning reference; frames the unnormalized-physics side channel and the carbon OOD leak. |
| Krishnapriyan et al. 2021 | "Characterizing possible failure modes in physics-informed neural networks", NeurIPS 2021, arXiv:2109.01050 | PINN failure modes are an established literature; the paper's negative results join it rather than standing alone. |
| Wang et al. 2021 | "Understanding and mitigating gradient pathologies in physics-informed neural networks", *SIAM J. Sci. Comput.* 43:A3055-A3081, arXiv:2001.04536 | Unbalanced loss/gradient contributions from mismatched feature scales — the unnormalized-Izz mechanism. |
| Hendrycks & Gimpel 2017 | "A Baseline for Detecting Misclassified and Out-of-Distribution Examples in Neural Networks", ICLR 2017, arXiv:1610.02136 | The softmax-confidence OOD baseline the EXP8 unseen-channel test implicitly benchmarks against. |
| Bendale & Boult 2016 | "Towards Open Set Deep Networks", CVPR 2016, arXiv:1511.06233 | The open-set-recognition framing for the unseen-channel stress test. |
| Sun et al. 2021 (ReAct) | "ReAct: Out-of-distribution Detection With Rectified Activations", NeurIPS 2021, arXiv:2111.12797 | Activation-magnitude OOD detection — the concrete fix direction the campaign evidence points to (max|h| AUROC ≈0.90 vs confidence at chance). |

---

## 4. Prior papers reporting the same negative mechanisms (reframing ammunition)

Each maps a campaign finding onto a named, citable phenomenon — so the paper can present its diagnostics as *mechanism identification*, not just caveats.

| Campaign finding | Prior reporting the same mechanism | Reframing it enables |
|---|---|---|
| Physics query carries no event-specific signal (permuted_q Δ=0, 6/6 checkpoints) | Hessel & Lee 2020 (arXiv:2010.06572): multimodal models succeed while ignoring cross-modal interactions; Peng et al. 2022 (arXiv:2203.15332): modality imbalance | "We show the fusion mechanism is vestigial at this scale — a documented failure mode of multimodal architectures, here diagnosed by counterfactual query permutation." |
| HC attention collapses to a fixed near-empty token (87% argmax on token 50) | Darcet et al. 2024 (arXiv:2309.16588): ViT attention sinks on low-information tokens; Xiao et al. 2024 (arXiv:2309.17453): attention sinks in LLMs | "The attention learns a register/sink token, a known ViT phenomenon — the map is not evidence of physics routing." |
| Unnormalized MoI features act as a static DC bias / unbounded side channel (Izz≈170 fixes 108/128 hidden signs; carbon OOD 4× activation inflation) | Wang et al. 2021 (arXiv:2001.04536): gradient pathologies from scale mismatch in PINNs; Geirhos et al. 2020 (arXiv:2004.07780): shortcut learning | "The physics vector enters unnormalized and functions as a shortcut feature — a scale pathology, not a learned prior." |
| XA trails ResNet on Raw at matched size; physics features redundant on HC | Hessel & Lee 2020; Krishnapriyan et al. 2021 (arXiv:2109.01050): PINN gains are not guaranteed | "Physics-informed fusion is task- and representation-dependent; we identify when it helps (regression) and when it is redundant (denoised classification)." |
| Softmax confidence fails on far-OOD channels; activation magnitude detects them | Hendrycks & Gimpel 2017 (arXiv:1610.02136); Sun et al. 2021 ReAct (arXiv:2111.12797); Bendale & Boult 2016 (arXiv:1511.06233) | "The unseen-channel test is an open-set problem; confidence-based rejection fails as expected, and activation-space detection is the known remedy." |
| Attention map "physically consistent" reading | Jain & Wallace 2019 (arXiv:1902.10186); Serrano & Smith 2019 (arXiv:1906.03731) | "Attention maps are not explanations; we therefore verify mechanism by counterfactual permutation, not visualization." — this turns the paper's own counterfactual battery into the *methodological* contribution. |

**The strongest reframe available:** the paper's counterfactual battery (permuted_q, zero_cls, scaled_cls) is itself a contribution — a *mechanism-audit protocol* for physics-informed fusion that the prior AT-TPC ML literature (Kuchera, Wu, Dey, Zhang) never applied. Citing Hessel & Lee + Jain & Wallace positions it as bringing standard ML-rigor diagnostics to nuclear-physics fusion models for the first time.

---

## 5. Suggested framing sentences (at most — the captain writes the amendment)

- **L53/L67 (novelty, narrowed):** "…yet existing neural-network classifiers for AT-TPC data do not fuse physics-derived track descriptors with learned image features; we introduce such a fusion and evaluate it against an architecture-matched CNN."
- **L76 (add the missing lineage):** "Classical track finding in AT-TPCs spans RANSAC and Hough line fits [Fischler & Bolles; Duda & Hart], hierarchical clustering [Dalitz et al.], and Gaussian-mixture models [Arokiaraj et al.]; we benchmark against the first two families on identical inputs."
- **L79 (honest mechanism):** "…fused with the convolutional features through a cross-attention mechanism [Vaswani et al.; Perez et al.]; counterfactual tests show the attention branch functions as single-query pooling at this scale, so we report the fusion as physics-feature augmentation rather than query-driven routing."
- **L79 (fix the contradiction):** replace "consistently improves both classification and continuous regression" with "improves continuous regression and denoised classification, while on raw images the physics side channel can degrade the matched baseline — a scale pathology we diagnose explicitly."
- **L313/L319 (attention caveat):** "Attention weights are not by themselves evidence of mechanism [Jain & Wallace; Serrano & Smith]; we therefore treat the map as descriptive and verify routing by counterfactual permutation of the physics query."
- **L387 (portability):** "…should carry over to other AT-TPC configurations, though cross-experiment transfer of TPC representations is itself an open problem [Wheeler et al. 2026]."

---

## 6. What I did and verified

- Read `main.tex` (all 606 lines) and `references.bib` (all 45 entries) in the live checkout; extracted every `\cite` key and diffed against bib keys (7 uncited entries found).
- Verified **every** DOI in the bib against `api.crossref.org/works/<doi>` and every arXiv ID against `export.arxiv.org/api/query?id_list=`. Results in §2 — 4 fabricated, 1 unverifiable, 5 wrong-DOI, 3 wrong-title, 1 missing-DOI, 1 stale-preprint, 2 miscited.
- Verified **every candidate new citation** in §3 the same way before listing it (DOI or arXiv ID confirmed to resolve to the stated paper). No reference is asserted from memory.
- Read `fm-ar-mechanism/report.md` and `fm-ar-claims-ledger/report.md` in full for the campaign evidence behind each verdict.
- Web search tool was unavailable (auth-gated); all verification used direct Crossref/arXiv API calls — commands shown inline above.

## 7. Captain-hold inventory

No new captain-owned decision. Manuscript amendment is the captain's declared task; this report is its input. The bib-integrity findings (§2) are the only items that are *unambiguously* broken regardless of framing choices — wrong DOIs and fabricated entries need correction even if no prose changes. Completion gate: `complete --none`.
