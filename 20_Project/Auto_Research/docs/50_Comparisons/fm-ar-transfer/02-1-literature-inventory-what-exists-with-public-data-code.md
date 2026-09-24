<!-- Verbatim source section; overview: [[../fm-ar-transfer]] -->
<!-- SOURCE-BODY-START -->
## 1. Literature inventory: what exists with public data/code

| Work | Task | Data public? | Code public? | Aligned for transfer? |
|---|---|---|---|---|
| **Kuchera et al. 2019** (arXiv:1810.10350, Comput. Softw. Big Sci. 3:6) | p vs C vs other, ⁴⁶Ar(p,p); sim→sim, exp→exp, sim→exp | **YES** — Zenodo 3473953: `pr_train_simulated.npy` (5600×128×128×1 f64, 734 MB), `pr_test_simulated.npy` (2400, 315 MB), targets (45 KB + 19 KB). Sim only; the 2689 hand-labeled **experimental events are NOT in the record** | **YES** — github.com/ATTPC/event-classification (TF1/Keras; LR/FCNN/CNN arms + `data-processing/simulate_events.py`, `generate_images.py`) | **YES — the only one.** Representation identical in spirit (2D xy projections); task identical in kind (particle-ID classification) |
| Solli et al. 2021 (arXiv:2008.02757, NIM A 1040 167092) | Unsupervised event clustering, ⁴⁶Ar(p,p) | Same Zenodo record + unlabeled pool | None found | Partial — same data, different task (clustering not classification); their VGG16+k-means pipeline is what the campaign doc cites as "near-perfect" |
| Dey, Anthony, Hunt, Kuchera et al., NIM A (2025) DOI 10.1016/j.nima.2024.170002 | Point-cloud ML, rare-event classification | None found (NSF PAR entry only) | None found (`alpha-davidson/ATTPCLatent` is a different latent-space project) | No — no data; point-cloud repr. also mismatches our image pipeline |
| Wu et al. 2023 (arXiv:2304.13233, NIM A 1055 168528) | ¹²C Hoyle-band event vs background, SAT-TPC | None found | None found | No — different detector/task; cite only |
| SAT-TPC Hoyle branches 2025 (arXiv:2506.02506) | Multi-class decay-branch CNN | None found | None found | No |
| Zhang et al. 2026 (arXiv:2605.28296, Nucl. Sci. Tech.) | **MATE-TPC** ¹²C+¹²C elastic vs fusion, ResNet-50/34/18 + VGG-19, ~97% sim / ~90% exp | None found (PDF scanned: no github/zenodo/availability statement) | None found | Cite as sibling MATE work; no transfer possible |
| TPCpp-10M (Zenodo 16922968) | pp collisions for foundation models | Yes | — | No — different physics domain entirely |

**FACT:** Zenodo 3473953 file inventory via `curl https://zenodo.org/api/records/3473953`: title "Two dimensional projections of simulated events recorded by an AT-TPC", 2019-10-05, 4 files, sizes above. Total record ≈ 1.05 GB; train split alone = 734 MB + 45 KB (< 1 GB).

<!-- SOURCE-BODY-END -->
