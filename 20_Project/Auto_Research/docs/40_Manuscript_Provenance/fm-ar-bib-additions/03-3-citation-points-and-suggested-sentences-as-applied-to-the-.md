<!-- Verbatim source section; overview: [[../fm-ar-bib-additions]] -->
<!-- SOURCE-BODY-START -->
## 3. Citation points and suggested sentences (as applied to the patched copy)

**L475** (§6.5, one edit covers all four method refs + the fix sheet's `Arokiaraj2025GMM`):
> …fixed-parameter RANSAC \cite{FischlerBolles1981}, Hough-transform \cite{DudaHart1972}, and hierarchical-clustering \cite{Dalitz2019} estimators; and validation-optimized Hough-transform and hierarchical-clustering variants; Gaussian-mixture-model track reconstruction in active targets \cite{Arokiaraj2025GMM} is a further classical alternative not included in this paired family. … Reconstructed range is converted to kinetic energy by linear inverse interpolation of the active LISE++ \cite{Tarasov2008LISE} table for $^{4}$He in He96C4O8 (96:4 He:CO$_{2}$), using the Hubert \emph{et al.} \cite{Hubert1990} column.

**L76** (related-work roster):
> …and PointNet on point-cloud representations \cite{Dey2025PointCloud}, CNN-based signal analysis \cite{Fortino2022}, and unpaired point-cloud translation for detector response \cite{Li2025PointCloud}.

(Optional alternative: also add `\cite{Wheeler2026Transfer}` to the "Architectures continue to diversify" clause — I placed it at L387 instead.)

**L73** (optional, classical-tracking lineage — ends the "conventional analysis" paragraph and pre-loads §6.5):
> …similarly fragile for short or overlapping tracks \cite{Li2024MTPC}. Classical track finding in AT-TPCs spans RANSAC and Hough line fits \cite{FischlerBolles1981,DudaHart1972}, hierarchical clustering \cite{Dalitz2019}, and Gaussian-mixture models \cite{Arokiaraj2025GMM}; we benchmark against the first two families on identical inputs.

**L53/L67** (novelty — sketch N1, narrowing; no new key needed):
> "…yet existing neural-network classifiers for AT-TPC data do not fuse physics-derived track descriptors with learned image features; we introduce such a fusion and evaluate it against an architecture-matched CNN."

**L387** (portability):
> …so the method is portable once detector-specific mapping and calibration are established, though cross-experiment transfer of TPC representations is itself an open problem \cite{Wheeler2026Transfer}.

**L381** (fusion-mechanism precedent — prepended to the "On both isotope pairs…" sentence):
> Multimodal models are known to match or beat their baselines while ignoring the cross-modal interaction \cite{HesselLee2020}. On both isotope pairs the simplest fusion is at least as accurate as…

**L332** (OOD mechanism hypothesis — Geirhos directly; Darcet + ReAct as documented phenomena for the proposed perturbation study):
> …which would bias the fused model toward a confident target assignment---an instance of shortcut learning \cite{Geirhos2020Shortcut}. Attention sinks on low-information tokens \cite{Darcet2024Registers} and activation-space OOD detection \cite{Sun2021ReAct} are documented phenomena that a controlled perturbation study could test here.

If the captain adds the campaign's counterfactual findings (HC attention sink; max|h| activation OOD), `Darcet2024Registers` and `Sun2021ReAct` can instead be cited as direct precedents at those new sentences — the entries need no change.

---

<!-- SOURCE-BODY-END -->
