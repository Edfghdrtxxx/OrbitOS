---
area:
tags: [deep-learning, resnet, residual-learning, computer-vision, ml-for-physics]
created: 2026-07-05
last_reviewed:
next_review: 2026-07-05
review_interval: 0
---
# ResNet

## Definition

ResNet (Residual Network) is a deep [[Convolutional Neural Network]] architecture introduced by He, Zhang, Ren, and Sun (Microsoft Research) that reformulates stacked layers to learn a residual function $\mathcal{F}(\mathbf{x}) := \mathcal{H}(\mathbf{x}) - \mathbf{x}$ instead of the underlying mapping $\mathcal{H}(\mathbf{x})$, realized through identity shortcut connections so each block computes $\mathbf{y} = \mathcal{F}(\mathbf{x}) + \mathbf{x}$. This cures the *degradation problem* — training error that grows with depth in plain networks — making very deep networks (152+ layers) easy to optimize and letting accuracy improve with depth; a ResNet ensemble won the ILSVRC 2015 classification task with 3.57% top-5 error on ImageNet.

## Key Points

- **Residual building block**: $\mathbf{y} = \mathcal{F}(\mathbf{x}, \{W_i\}) + \mathbf{x}$, with $\mathcal{F} = W_2\,\sigma(W_1\mathbf{x})$ for a two-layer block ($\sigma$ = ReLU) and the second nonlinearity applied after the addition; when dimensions differ, a linear projection is used instead: $\mathbf{y} = \mathcal{F}(\mathbf{x}, \{W_i\}) + W_s\mathbf{x}$ ($1{\times}1$ convolutions only where dimensions increase).
- **Degradation problem**: deeper *plain* nets show higher *training* error (34-layer plain 28.54% vs 18-layer plain 27.94% top-1) — an optimization issue, not overfitting or the [[Vanishing Gradient Problem]]; identity shortcuts precondition optimization toward identity mappings and reverse the trend (ResNet-34 reaches 25.03%).
- **Identity shortcuts are free**: they add zero extra parameters and zero extra FLOPs, enabling fair plain-vs-residual comparisons at equal depth, width, and cost.
- **Bottleneck design** ($1{\times}1 \to 3{\times}3 \to 1{\times}1$ convolutions) makes ResNet-50/101/152 practical; ResNet-152 (11.3 GFLOPs) is still cheaper than VGG-16 (15.3) or VGG-19 (19.6 GFLOPs).
- **Depth becomes routine**: a 1202-layer ResNet trains on CIFAR-10 with no optimization difficulty (<0.1% training error); [[Batch Normalization]] is applied after each convolution, before activation.
- **The residual principle spread far beyond CNNs**: Transformer sub-layers compute $\mathrm{LayerNorm}(\mathbf{x} + \mathrm{Sublayer}(\mathbf{x}))$ explicitly citing He et al.; residual blocks preserve group equivariance (sums of equivariant maps are equivariant); and [[Skip Connection]]s can be read as a forward-Euler discretization of an autonomous ODE, linking ResNets to [[Physics-Informed Neural Network]]s.
- **Workhorse of ML-for-physics**: ResNet-18/34/50 are standard backbones for [[Time Projection Chamber]] track-image classification and regression, beating VGG on every task at lower compute in both AT-TPC and MATE-TPC studies — with depth mattering surprisingly little at this task scale.
- **Residual learning as a physics philosophy**: modeling only the theory–experiment discrepancy on top of an established physics model (e.g., nuclear mass corrections) applies the same "fit the residual, not the full mapping" idea outside network architecture.

## Examples

- **MATE-TPC event classification (IMP/SUSTech)**: ResNet-50/34/18 classify elastic-scattering vs fusion events of the $^{12}\mathrm{C}+{}^{12}\mathrm{C}$ reaction from two-plane track-projection images; all depths perform nearly identically (ResNet-50: 90.47% experimental / 97.89% simulated accuracy), and the models corrected some of the ~1.5% of events mislabeled by traditional Hough-transform analysis.
- **AT-TPC $^{12}$C event classification (fMata-TPC)**: ResNet-34 reaches 0.9951 precision separating $^{12}$C signal from $^{13}$C/$^{14}$N/$^{16}$O photonuclear backgrounds in only 10 epochs on $[2, 32, 64]$ charge + drift-time pad-plane images; ResNet-18 wins vertex/energy/angle regression at lower compute ($\sigma_E < 77$ keV, $\sigma_\theta < 0.1$ rad).

## Papers

- [[He 2015 — Deep Residual Learning]] (2015) — the founding ResNet paper: identity-shortcut residual blocks ($\mathbf{y} = \mathcal{F}(\mathbf{x}) + \mathbf{x}$) cure the degradation problem and make 152-layer training routine; ensemble hit **3.57% top-5 error** on ImageNet test, winning ILSVRC 2015.
- [[Acciarri 2016 — CNNs Applied to Neutrino Events in a LArTPC]] (2016) — early physics adoption of residual modules: truncated ResNet and simplified Inception-ResNet-v2 chosen for neutrino event ID for faster learning and higher accuracy, on whole-event images downsized ×2 in wire and ×6 in time to **1728×1008** pixels to fit 12 GB GPUs.
- [[Cohen 2016 — Group Equivariant Convolutional Networks]] (2016) — proves residual blocks stay equivariant (sums of equivariant maps are equivariant), so p4m convolutions drop into ResNets at matched parameters; ResNet44 CIFAR-10 error **9.45% → 6.46%** (2.62M vs 2.64M params).
- [[Vaswani 2017 — Attention Is All You Need]] (2017) — carries residual learning into attention stacks: every sub-layer is LayerNorm(x + Sublayer(x)), explicitly citing He et al., stabilizing a **6-layer encoder + 6-layer decoder** (up to **213M** parameters in the big model).
- [[Dosovitskiy 2020 — An Image is Worth 16x16 Words]] (2020) — fairest published ResNet-vs-ViT comparison: ViT matches BiT-ResNet transfer accuracy with **2–4× less pre-training compute (2.5k vs 9.9k TPUv3-core-days at the top end)**.
- [[Qu 2020 — Jet Tagging via Particle Clouds]] (2020) — each EdgeConv block embeds a ResNet-style shortcut connection, and ParticleNet-Lite beats the ResNet-family ResNeXt-50 jet-image baseline with **56× fewer parameters** (26k vs 1.46M).
- [[Karniadakis 2021 — Physics-Informed Machine Learning]] (2021) — frames ResNet skip connections as a forward-Euler discretization of autonomous ODEs, and a composite two-ResNet multi-fidelity network (synthetic FEM data + sparse experiments) cut yield-stress inference error in instrumented indentation from **over 100% to below 5%**.
- [[He 2023 — ML in Nuclear Physics at Low and Intermediate Energies]] (2023) — ResNet is among the architectures (with BDT, DNN, VGG, GNN) used for JUNO vertex/energy reconstruction trained on Monte Carlo; **σ_E ≈ 3% and vertex σ_x,y,z ≈ 10 cm at E_vis = 1 MeV**, meeting JUNO requirements.
- [[Wu 2023 — ML for 12C Event Classification in AT-TPC]] (2023) — ResNet beats VGG-16 on every AT-TPC task; ResNet-34 classifies 12C events with **0.9951 precision** in 10 epochs, ResNet-18 wins reconstruction at lower compute.
- [[Yang 2023 — Physics-Constrained Neural Network for K-Eigenvalue Problems]] (2023) — uses a ResNet-style backbone (two residual modules with skip connections, tanh, 20 neurons/layer) as a mesh-free eigenfunction approximator for reactor K-eigenvalue problems; **k_eff relative error 3.2020 × 10⁻⁵** on the 1D discontinuous-coefficient problem R2.
- [[Murali 2024 — ViT vs CNN and ResNet for Chest X-ray Classification]] (2024) — ResNet with 3/4/6/3 residual blocks of two 3x3 convs beats both from-scratch ViT variants on 14-disease chest X-ray multi-label classification; **93% test accuracy, 0.86 AUC**.
- [[Zhang 2025 — ML Event Classification and Vertex Reconstruction with MATE-TPC]] (2025) — ResNet-50/34/18 classify elastic-scattering vs fusion events from MATE-TPC track-projection images, with all depths performing nearly identically and correcting some traditional-method mislabels; **90.47% experimental / 97.89% simulated accuracy (ResNet-50)**.
- [[Lu 2026 — KAN Correction of Nuclear Mass Models]] (2026) — residual-learning philosophy applied to physics: the network models only the theory-experiment discrepancy M_delta on top of the WS4 model, cutting RMS error from **~0.3 MeV to 0.167 MeV** across the nuclide chart.

## Related Concepts

- [[Convolutional Neural Network]]
- [[Vision Transformer]]
- [[Attention Mechanism]]
- [[Skip Connection]]
- [[Batch Normalization]]
- [[Vanishing Gradient Problem]]
- [[Physics-Informed Neural Network]]
- [[Point Cloud Neural Network]]
- [[Time Projection Chamber]]
- [[Particle Identification]]
- [[Domain Adaptation]]

## References

- He, K., Zhang, X., Ren, S., & Sun, J. — *Deep Residual Learning for Image Recognition* (CVPR 2016, per the citation in [[Wu 2023 — ML for 12C Event Classification in AT-TPC]]); vault source note: [[He 2015 — Deep Residual Learning]].
- Wu et al., *Machine learning method for $^{12}$C event classification and reconstruction in the active target time-projection chamber*, Nucl. Instrum. Methods Phys. Res. A 1055, 168528 (2023), per the reference list in [[Zhang 2025 — ML Event Classification and Vertex Reconstruction with MATE-TPC]].
