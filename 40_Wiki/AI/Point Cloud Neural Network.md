---
area:
tags: [point-cloud, deep-learning, geometric-deep-learning, permutation-invariance, event-classification]
created: 2026-07-05
last_reviewed:
next_review: 2026-07-05
review_interval: 0
---
# Point Cloud Neural Network

## Definition

A point cloud neural network is a deep learning architecture that operates directly on unordered sets of points, each carrying spatial coordinates and per-point features, instead of on rasterized image grids. Because a point set has no canonical ordering, the network must be permutation-invariant — typically achieved by a shared per-point encoder followed by a symmetric aggregation function (the PointNet family) or by set-attention layers. In nuclear and particle physics this representation maps naturally onto detector output such as [[Time Projection Chamber]] pad hits or final-state particle lists, preserving spatial and kinematic precision that 2D projections discard.

## Key Points

- **Permutation invariance is the defining constraint**: [[PointNet]] approximates any set function with a shared per-point network $h$ and a symmetric aggregator $g$ (max pooling in practice),
$$f(\{x_1, \ldots, x_n\}) \approx g\big(h(x_1), \ldots, h(x_n)\big),$$
so the output is unchanged under any reordering of the input points.
- **Native detector representation**: each hit or particle becomes one point with features — AT-TPC pad hits as 4D $(x, y, z, q)$ tuples (Dey 2024), or final-state hadrons as 6-dim $(E, p_x, p_y, p_z, \text{charge}, \text{pid})$ vectors (Huang 2025) — avoiding the lossy 2D projections used by [[Convolutional Neural Network]] pipelines.
- **Sparsity efficiency**: a TPC event occupies only a small fraction of the >10,000-pad readout; a point cloud stores just the occupied channels, whereas an image spends most of its pixels on empty space.
- **Variable-length inputs need standardization**: uniform random down-sampling / duplication up-sampling to a fixed size (64 points per event in Dey 2024) or zero-padding to a maximum multiplicity (up to 700 particles per event in Huang 2025).
- **Per-point feature preprocessing matters**: Dey 2024 applies a safe log transform $q' = \log_{10}(q + 10^{-10})$ to pad charge followed by min–max scaling with training-set extrema, with spatial coordinates rescaled to detector-normalized geometry.
- **Attention as an alternative aggregator**: Huang 2025 embeds each particle via 1D convolutions into a 128-dim latent space, then applies multi-head self-attention ([[Attention Mechanism]]) to learn intra-event and inter-event particle correlations — the same building block as the [[Vision Transformer]], but on sets instead of image patches.
- **Weak-supervision pattern for label-scarce detector data**: bootstrap training labels from a high-confidence heuristic classifier, deploy the point-cloud model on the events the heuristic could not classify, and audit with a small hand-labeled set (Dey 2024).
- **Latent-space event mixing**: when single-event classification saturates at chance, correlating latent point-cloud features across many mixed events (50 in Huang 2025) can recover a statistical signal that raw-image averaging misses.

## Examples

- **Fission event classification in the AT-TPC** (Dey 2024): a modified PointNet trained on heuristic-labeled 4D $(x,y,z,q)$ point clouds recovers fission events from the 316,581-event Unlabeled category, nearly doubling counts near the pad plane and at small folding angles; the combined heuristic + ML pipeline identifies 98.9% of all fission events versus ~85% for the heuristic alone.
- **Nucleon-nucleon correlation detection in heavy-ion collisions** (Huang 2025): point-cloud embeddings of SMASH final-state hadron lists, processed with multi-head self-attention and 50-event latent mixing, distinguish correlated from uncorrelated $^{197}\mathrm{Au}$ initial states at 60–74% pairwise accuracy where single-event classifiers and traditional image averaging remain at chance (~50–51%).

## Papers

- [[Dey 2024 — Point-Cloud ML for Fission Event Classification in the AT-TPC]] (2024) — modified PointNet binary classifier (batch 32, 30 epochs, Adam, lr 5e-4) applied to the heuristic's 316,581 unlabeled AT-TPC events, tagging **23,720 (7.5%) as fission** and nearly doubling counts near the pad plane / at small folding angles.
- [[Huang 2025 — Deep Learning for Nucleon-Nucleon Correlations]] (2025) — 1D-conv point-cloud embedding of final-state hadron lists (up to 700 particles x 6 features, 17 species) with latent-space event mixing beats traditional 50-event image averaging (**~51%**), reaching **74% / 60% / 64%** pairwise accuracy on SMASH data.

## Related Concepts

- [[PointNet]]
- [[Convolutional Neural Network]]
- [[Attention Mechanism]]
- [[Vision Transformer]]
- [[ResNet]]
- [[Time Projection Chamber]]
- [[Particle Identification]]

## References

- Qi et al., PointNet (arXiv:1612.00593)
