# Mechanism and representation

Reports on the EXP3 mechanism hypotheses, attention/query behavior, feature scaling, difficulty, and out-of-distribution leakage.

## Contents

- [[fm-ar-attn-sink|Attention-sink interpretation]] — Analyzes token 50 edge-sink behavior in EXP4, query-content invariance on HC, and empirical limits of the Bragg-focus claim.
- [[fm-ar-capacity-critique|Pre-registered capacity critique]] — Stress-tests the D1–D4 capacity decision table, zero_cls minority prevalence, and potential OOD artifacts.
- [[fm-ar-difficulty|Per-isotope-pair difficulty]] — Evaluates classification difficulty across isotope pairs to isolate intrinsic hardness from model capacity.
- [[fm-ar-feature-norm|Physics-feature scaling]] — Assesses effects of unstandardized versus standardized physics inputs on cross-attention performance.
- [[fm-ar-hc-vs-raw|HC versus Raw mechanism]] — Identifies DBSCAN clustering and denoising as the core driver of HC separation gains over Raw.
- [[fm-ar-mechanism|Unified mechanism model]] — Pre-registers unified M1–M4 architecture models and empirical falsification criteria.
- [[fm-ar-maxh-confound|Max|h| trivial-observable confound]] — Tests whether the EXP8 penultimate max|h| OOD signal is a deposition-scale proxy rather than novelty detection.
- [[fm-ar-ood-leakage|OOD leakage audit]] — Evaluates whether zero-physics tests measure out-of-distribution model sensitivity rather than valid ablations.
