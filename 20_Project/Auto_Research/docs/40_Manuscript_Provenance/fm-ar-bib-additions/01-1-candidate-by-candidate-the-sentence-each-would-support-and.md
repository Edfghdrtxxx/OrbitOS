<!-- Verbatim source section; overview: [[../fm-ar-bib-additions]] -->
<!-- SOURCE-BODY-START -->
## 1. Candidate-by-candidate: the sentence each would support, and the verdict

### 1a. §6.5 classical baselines — `main.tex:475` — ALL FOUR KEPT

Exact sentence (L475):
> The paired comparison contains seven methods evaluated on the same held-out events: the ResNet and cross-attention CNNs; fixed-parameter RANSAC, Hough-transform, and hierarchical-clustering estimators; and validation-optimized Hough-transform and hierarchical-clustering variants. … Reconstructed range is converted to kinetic energy by linear inverse interpolation of the active LISE++ table for $^{4}$He in He96C4O8 (96:4 He:CO$_{2}$), using the Hubert *et al.* column.

| Candidate | Supports? | Evidence |
|---|---|---|
| **RANSAC — Fischler & Bolles 1981** | YES | The sentence names "RANSAC" as an estimator with no citation; Fischler & Bolles is the defining paper. |
| **Hough transform — Duda & Hart 1972** | YES | "Hough-transform … estimators" named twice in the same sentence, uncited; Duda & Hart is the defining paper. |
| **LISE++ — Tarasov & Bazin 2008** | YES | "the active LISE++ table" is named in text, uncited; Tarasov & Bazin is the LISE++ reference. |
| **Hubert — Hubert, Bimbot & Gauvin 1990** | YES | "the Hubert *et al.* column" is named in text, uncited; Hubert et al. 1990 is that range-table paper. |

Bonus fit: the "hierarchical-clustering estimators" in the same sentence are the Dalitz et al. method family (see 1b) — citing `Dalitz2019` here covers the third classical method too.

### 1b. Related work — `main.tex:76` — THREE KEPT

Exact sentence (L76, abridged):
> …CNN-based track classification \cite{Kuchera2019}, unsupervised event identification \cite{Bradt2021}, ResNet-based event classification \cite{Wu2023ResNet}, Hoyle-state decay-branch classification \cite{Das2025}, and PointNet on point-cloud representations \cite{Dey2025PointCloud}. Architectures continue to diversify, with point-set transformers \cite{Robles2025}, attention-based graph networks \cite{Zhao2026GraphPT}, sparse convolutional embeddings \cite{Wheeler2025Sparse}, and domain-adaptive methods \cite{Guo2026DomainAdapt} applied to TPC data.

| Candidate | Supports? | Evidence |
|---|---|---|
| **Dalitz et al. (CPC 235:159, 2019)** | YES | AT-TPC trajectory recognition by hierarchical clustering — the paper's own HC baseline family and the closest classical-tracking prior; a referee will expect it. Also fits L475 and L73. |
| **Fortino & Zamora 2022 (NIMA 1031:166497)** | YES | CNN on AT-TPC signals — a direct ML-in-AT-TPC predecessor the roster omits. |
| **Li, Kuchera et al. 2025 (arXiv:2501.18674)** | YES | Unpaired point-cloud translation for detector response — same Kuchera-group lineage as the already-cited `Dey2025PointCloud`/`Wheeler2025Sparse`. |
| **Wheeler et al. 2026 (arXiv:2608.21756)** | YES — but better at L387 | Cross-experiment TPC representation transfer. It *could* join the L76 roster, but its strongest support is the L387 portability claim (1d); I placed it there to avoid a bloated roster. Alternative L76 placement noted in §3. |

### 1c. Novelty claim — `main.tex:53` (abstract) and `main.tex:67` — NO CITATION CAN FIX IT AS WRITTEN

L53: "…yet neither conventional cuts nor existing neural-network classifiers exploit the physics of energy loss encoded in track geometry."

**Verdict: the candidates do not support this claim — they contradict it.** Kuchera2019 (already cited) uses physics-derived moment features; Dalitz et al. exploits track geometry directly. Adding citations to the sentence as written would make it *more* wrong, not less. The fix is the narrowing the related-work audit proposed (§3, sketch N1), which needs no new key — the supporting citations land at L76/L73 instead. **No new entry is justified by L53/L67 alone.**

### 1d. Portability — `main.tex:387` — KEPT

Exact sentence:
> Despite these caveats, the approach should carry over to other AT-TPC configurations: the projection and feature definitions depend only on the pad geometry and coordinate system, so the method is portable once detector-specific mapping and calibration are established.

| Candidate | Supports? | Evidence |
|---|---|---|
| **Wheeler et al. 2026** | YES | "How Architecture and Training Affect TPC Representations Across Experiments" is the direct prior measuring cross-experiment TPC transfer — exactly what the portability claim asserts is easy. Citing it converts an unsupported assertion into a positioned one. |

### 1e. Failure-mode precedents — mechanism-section fits

| Candidate | Manuscript anchor | Supports? |
|---|---|---|
| **Hessel & Lee 2020 (EMNLP, arXiv:2010.06572)** | `main.tex:381` — "we compared plain concatenation, gated fusion, and cross-attention … On both isotope pairs the simplest fusion is at least as accurate as [cross-attention]" | **YES, directly.** The paper's title is literally the finding: multimodal models match baselines while ignoring cross-modal interactions. |
| **Geirhos et al. 2020 (Nat. Mach. Intell. 2:665)** | `main.tex:332` — "the physics-derived descriptors compress each track to global geometric summaries under which some unseen channels may resemble the trained targets … which would bias the fused model toward a confident target assignment" | **YES, directly.** That hypothesis *is* shortcut learning; Geirhos is the canonical reference. |
| **Darcet et al. 2024 (ICLR, arXiv:2309.16588)** | **No direct anchor.** The manuscript reports attention *maps* (L313–319) but never the campaign's HC sink finding (87% argmax on token 50). | **CONDITIONAL.** Supports the claim only if the captain adds the counterfactual finding. I kept it and wrote the suggested sentence so it is honest either way ("documented phenomena that a controlled perturbation study could test here" — asserts existence of the phenomenon, not that we observed it). Drop if the captain prefers zero conditional cites. |
| **Sun et al. 2021 ReAct (NeurIPS, arXiv:2111.12797)** | **No direct anchor.** L330 reports a *softmax* rejection score ($1-\max p$); the manuscript never mentions activation-space scoring (the campaign's max\|h\| result is not in the text). | **CONDITIONAL**, same construction as Darcet — cited as a documented remedy direction for the failed rejection score, not as a claim we tested it. Drop on the same condition. |

**Dropped outright: none.** All 12 candidates support a real manuscript sentence; two are conditional on the captain surfacing the counterfactual findings (or accepting the future-work framing I used).

---

<!-- SOURCE-BODY-END -->
