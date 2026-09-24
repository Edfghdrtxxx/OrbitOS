<!-- Verbatim source section; overview: [[../fm-ar-bib-fixsheet]] -->
<!-- SOURCE-BODY-START -->
## 4. Identifier additions needed for `verify_bib.py` to pass

`verify_bib.py` flags any entry with no resolvable DOI/arXiv ID as `no-identifier` (counts toward exit 1). These entries were not in the audit's broken list but need identifiers added for a clean run — all verified live:

| Key | Added identifier | Verified title |
|---|---|---|
| `Attention` | `eprint={1706.03762}` | "Attention Is All You Need" |
| `ResNet` | `doi={10.1109/CVPR.2016.90}` | "Deep Residual Learning for Image Recognition" (CVPR 2016 — keeps year 2016 consistent) |
| `PyTorch` | `eprint={1912.01703}` | "PyTorch: An Imperative Style, High-Performance Deep Learning Library" |
| `Geant4` | `doi={10.1016/S0168-9002(03)01368-8}` | "Geant4—a simulation toolkit" |
| `TPCTextbook` | `doi={10.1007/978-3-540-76684-1}` | "Particle Detection with Drift Chambers" |
| `NaturePhysicsReview` | `doi={10.1103/RevModPhys.94.031003}` | "Colloquium: Machine learning in nuclear physics" |
| `Radovic2018` | `doi={10.1038/s41586-018-0361-2}` | "Machine learning at the energy and intensity frontiers of particle physics" |
| `Raissi2019` | `doi={10.1016/j.jcp.2018.10.045}` | "Physics-informed neural networks: ..." |

**One entry cannot be made clean:** `DBSCAN` (Ester et al., KDD-96, AAAI Press) has **no DOI and no arXiv ID** — confirmed via Crossref bibliographic search (top hits are unrelated derivative works) and a direct check of the ACM Guide placeholder `10.5555/3001460.3001507` (404). It will always report `no-identifier`. Options: accept the single flag, or extend `verify_bib.py` with a whitelist for DOI-less venue papers.

---

<!-- SOURCE-BODY-END -->
