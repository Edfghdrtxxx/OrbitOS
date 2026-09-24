<!-- Verbatim source section; overview: [[../fm-ar-claims-refresh]] -->
<!-- SOURCE-BODY-START -->
## 6. New manuscript claims/lines the new findings touch

Ordered by referee risk. Suggested wording = sketch only.

| Loc | Issue | Evidence | Sketch |
|-----|-------|----------|--------|
| **L190** | `\cite{He2020ResNetSmall}` — **fabricated** (arXiv:2002.03544 is a math paper) | bib-fixsheet §1a | `\cite{ResNet,He2016Identity}`; reword "guidance for small-scale scientific data" → "the small-image ResNet configuration". |
| **L211** | `\cite{Li2023CrossAttention}` — **fabricated** (no such TNNLS article) | bib-fixsheet §1b | `\cite{Attention,Perez2018FiLM}`. |
| **L313** | `\cite{Koch2021}` — **unverifiable/likely fabricated** | bib-fixsheet §1c | `\cite{NaturePhysicsReview}` + `\cite{Jain2019Attention}`; add "attention weights alone are not evidence of mechanism". |
| **L248** | `\cite{Jadon2020Loss}` — **miscited** (segmentation survey, no label smoothing) | bib-fixsheet §2 | `\cite{Szegedy2016LabelSmoothing}`. |
| **L526** | `\cite{Adam}` — **miscited** (text says AdamW) | bib-fixsheet §2 | `\cite{AdamW}` (arXiv:1711.05101). |
| **L475** | §6.5 classical baselines cite no methods refs; `Arokiaraj2025GMM` uncited in bib | related-work §3a; bib-fixsheet §3 | Add RANSAC (Fischler&Bolles), Hough (Duda&Hart), LISE++, Hubert citations; cite `Arokiaraj2025GMM` at L475 or L76. |
| **L53/L67** | Novelty claim overstated | related-work #1 | Narrow to "do not *fuse* physics-derived track descriptors with learned image features"; consider adding Dalitz 2018, Fortino&Zamora 2022, Li/Kuchera 2025, Wheeler 2026 to L76. |
| **L79** | "consistently improves both classification and continuous regression" — **contradicted** on Raw; "classification gains derive chiefly from the physics features" — contradicted (HC physics redundant; HC−Raw gap is denoising) | related-work #5/#6; D6 §3b | "improves continuous regression and denoised classification; on raw images the physics side channel can degrade the matched baseline — a scale pathology we diagnose explicitly." |
| **L323-332** (§Unseen-Channel) | If max\|h\| activation-OOD wording is added: **do not** write "flags unseen carbon isotopes at AUROC 0.90" | maxh-confound §3 | "A single penultimate unit separates far-OOD elastic-recoil channels from seen light-fragment channels (AUROC 0.90 vs C+D), but the same score separates the seen proton channel equally well and does not distinguish unseen from seen overall (0.67/0.58); it marks event scale rather than novelty." |
| **L359** (EXP8 forest caption) | Caption lists "the empty-target null channel" row — **the figure has no such row** (script excludes A/B/null by construction) | figure-provenance RISK 2 | Delete "the empty-target null channel," from the row list. |
| **L98 caption** | "pads fired by a representative simulated track" — the track is a parametric schematic, not simulated | figure-provenance RISK 8 | "a representative track". |
| **`figures/_legacy/v6_*.pdf`** | Three unreferenced V6 figures exist; reinstating them inherits the unsettled Table-4 label question | figure-provenance §0 | Do not re-add before the Windows label check. |
| **Mechanism wording affected by D6** (L170/L207, L211, L298, L313) | D6 lands the content×magnitude 2×2: physics = magnitude-dependent static bias on Raw, pure static bias on HC; query DC load-bearing (centered_q) while query content inert (permuted_q Δ=0) | closing doc §10b–10d; prereg §3a | The honest architecture description stays "single-query attention pooling + parallel physics concat"; add that the classifier-side dependence is on feature *scale*, not content — the same fact that makes L170/L207's "standardized" claim wrong. |
| **Bib integrity overall** | 4 fabricated + 1 unverifiable + 5 wrong-DOI + 3 wrong-title + 1 missing-DOI + 1 stale + 2 miscited; 7 uncited dead entries | related-work §2; bib-fixsheet (paste-ready `fixes.bib`; verify_bib 41/42 ok) | Apply `fixes.bib` wholesale; net 45→39 entries. `DBSCAN` has no DOI in existence — accept the single flag or whitelist. |

<!-- SOURCE-BODY-END -->
