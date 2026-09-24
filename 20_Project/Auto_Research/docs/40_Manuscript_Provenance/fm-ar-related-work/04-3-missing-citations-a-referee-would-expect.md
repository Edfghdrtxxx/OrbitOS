<!-- Verbatim source section; overview: [[../fm-ar-related-work]] -->
<!-- SOURCE-BODY-START -->
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

<!-- SOURCE-BODY-END -->
