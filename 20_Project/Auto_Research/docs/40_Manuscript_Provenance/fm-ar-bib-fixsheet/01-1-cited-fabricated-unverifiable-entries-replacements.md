<!-- Verbatim source section; overview: [[../fm-ar-bib-fixsheet]] -->
<!-- SOURCE-BODY-START -->
## 1. Cited fabricated / unverifiable entries — replacements

### 1a. `He2020ResNetSmall` — cited at `main.tex:190` — FABRICATED

arXiv:2002.03544 is "On rational maps with buried critical points" (math); no such ResNet paper exists.

**Current sentence (L190):**
> The input images are compact ($80 \times 48$), so we modify ResNet-18 to preserve spatial detail while keeping the architecture lightweight, consistent with guidance for small-scale scientific data \cite{He2020ResNetSmall}.

**Suggested rewording** (the claim "guidance for small-scale scientific data" has no real source; the actual precedent is the CIFAR-scale ResNet configuration in the original ResNet paper §4.2 and its follow-up):
> The input images are compact ($80 \times 48$), so we modify ResNet-18 to preserve spatial detail while keeping the architecture lightweight, following the small-image ResNet configuration \cite{ResNet,He2016Identity}.

**Replacement entry (verified):** `He2016Identity` — arXiv:1603.05027 → *"Identity Mappings in Deep Residual Networks"*, He, Zhang, Ren, Sun, 2016. (`ResNet` is already in the bib; the 3×3 stride-1 / no-maxpool head is exactly its CIFAR-10 configuration.) Full BibTeX in `fixes.bib`.

### 1b. `Li2023CrossAttention` — cited at `main.tex:211` — FABRICATED

No such article exists in IEEE TNNLS or anywhere (Crossref title search returns unrelated papers).

**Current sentence (L211):**
> Spatial visual features from the ResNet backbone are fused with the physics features via cross-attention \cite{Li2023CrossAttention}.

**Suggested rewording** (mechanism description — cite the canonical attention reference, already in the bib, plus FiLM as the standard feature-conditioning mechanism):
> Spatial visual features from the ResNet backbone are fused with the physics features via cross-attention \cite{Attention,Perez2018FiLM}.

**Replacement entry (verified):** `Perez2018FiLM` — arXiv:1709.07871 → *"FiLM: Visual Reasoning with a General Conditioning Layer"*, Perez, Strub, de Vries, Dumoulin, Courville, AAAI 2018. `Attention` (Vaswani et al., arXiv:1706.03762) is already in the bib — I added its arXiv ID so the verifier can check it. Full BibTeX in `fixes.bib`.

### 1c. `Koch2021` — cited at `main.tex:313` — UNVERIFIABLE / likely fabricated

No such article in EPJA or Crossref. I searched arXiv for a dedicated "explainable ML in nuclear physics" paper — none exists; the honest replacement is the already-cited RMP Colloquium plus the standard attention-interpretation caveat.

**Current sentence (L313):**
> We visualize the spatial attention weights by projecting the attention map back to the $y$-$z$ plane and overlaying it on the charge image, in line with the recent emphasis on explainable ML in nuclear physics \cite{Koch2021}.

**Suggested rewording** (also absorbs the audit's §4 caveat — attention weights are not mechanism evidence):
> We visualize the spatial attention weights by projecting the attention map back to the $y$-$z$ plane and overlaying it on the charge image, in line with the emphasis on interpretable machine learning in nuclear physics \cite{NaturePhysicsReview}; attention weights alone are not evidence of mechanism \cite{Jain2019Attention}.

**Replacement entry (verified):** `Jain2019Attention` — arXiv:1902.10186 → *"Attention is not Explanation"*, Jain & Wallace, NAACL 2019. `NaturePhysicsReview` (Boehnlein et al., RMP 94:031003) is already in the bib — I added its DOI `10.1103/RevModPhys.94.031003` (verified → *"Colloquium: Machine learning in nuclear physics"*). Optional companion: Serrano & Smith, *"Is Attention Interpretable?"*, arXiv:1906.03731 (verified; not added to `fixes.bib` to keep the uncited list empty — add it only if you cite it).

---

<!-- SOURCE-BODY-END -->
