---
area:
tags: [deep-learning, computer-vision, neural-network-architecture, machine-learning-for-physics]
created: 2026-07-05
last_reviewed:
next_review: 2026-07-05
review_interval: 0
---
# Convolutional Neural Network

## Definition

A Convolutional Neural Network (CNN) is a deep neural network architecture for grid-structured data (images, spectrograms, time series) whose layers apply learnable filters that are shared across all spatial positions of the input. Each convolutional neuron computes $f_{i,j}(X) = \sigma\left(W_i \cdot X_j + b_i\right)$ over a local input patch $X_j$, and scanning the filter across the input yields translation-equivariant feature maps with far fewer parameters than a fully-connected network. Stacking convolutional and pooling layers lets the network learn hierarchical features, from local edges up to whole-object structure.

## Key Points

- The core operation is the discrete 2D convolution (implemented as cross-correlation in practice): $(I * K)(i, j) = \sum_{m}\sum_{n} I(i+m,\, j+n)\, K(m, n)$, where $K$ is a learnable kernel slid over the input $I$
- **Weight sharing** means the same kernel is applied at every position, so parameter count is independent of input size and translation equivariance is built in by construction
- The built-in inductive biases — **locality and translation equivariance** — make CNNs data-efficient: [[Vision Transformer]]s lose to ResNet50 on ~9M training images but overtake it beyond ~90M ([[Dosovitskiy 2020 — An Image is Worth 16x16 Words]]); [[Karniadakis 2021 — Physics-Informed Machine Learning]] casts the CNN as the archetypal inductive-bias architecture, analogous to finite-difference stencils
- Plain stacked CNNs **degrade with depth** (a 34-layer plain network underperforms an 18-layer one); the residual reformulation $\mathcal{F}(x) + x$ of [[ResNet]] reverses this at zero parameter cost ([[He 2015 — Deep Residual Learning]])
- Convolutional weight sharing generalizes beyond translations to discrete rotation/reflection groups (group-equivariant CNNs, [[Cohen 2016 — Group Equivariant Convolutional Networks]]), increasing capacity at fixed parameter count
- **Transfer learning** is the standard recipe for small scientific datasets: an ImageNet-pretrained backbone fine-tuned end-to-end beats both a fixed feature extractor and training from scratch, saturating after only ~550 labeled events in the AT-TPC study ([[Kuchera 2019 — ML Track Classification in the AT-TPC]])
- Self-attention challenges convolution on long-range dependencies: maximum path length between two positions is $O(1)$ for attention vs $O(\log_k n)$ for dilated convolution stacks and $O(n/k)$ for contiguous kernels ([[Vaswani 2017 — Attention Is All You Need]])
- Detector images violate the assumptions of photograph-trained CNNs — they are sparse and very large — so pipelines rely on cropping/downsizing (LArTPC) or on porting the CNN recipe to other geometries ([[Point Cloud Neural Network]]s for unordered hit clouds)

## Examples

- **MicroBooNE LArTPC particle ID**: AlexNet and GoogLeNet classify five simulated particle species ($e^-$, $\gamma$, $\mu^-$, $\pi^-$, proton) from wire-plane images of a liquid argon [[Time Projection Chamber]]; full 3456×9600 events are made tractable by a crop-and-downsize pipeline to 576×576 sub-images ([[Acciarri 2016 — CNNs Applied to Neutrino Events in a LArTPC]])
- **AT-TPC track classification**: ImageNet-pretrained VGG16 fine-tuned on 128×128 track projections of $^{46}\mathrm{Ar}(p,p)$ events beats logistic regression and fully-connected networks in every train→test regime and is uniquely robust to added noise (exp→exp multiclass F1 0.93) ([[Kuchera 2019 — ML Track Classification in the AT-TPC]])
- **Heavy-ion collision inverse problems**: CNNs classify nuclear EOS stiffness ($K_0$ = 200 vs 380 MeV) from proton spectra at 85% event-by-event / 95% event-summed accuracy, and reconstruct the impact parameter to $\Delta b \approx 0.8$ fm for Sn+Sn at 270 MeV/nucleon ([[He 2023 — ML in Nuclear Physics at Low and Intermediate Energies]])

## Papers

- [[He 2015 — Deep Residual Learning]] (2015) — showed plain stacked CNNs get *worse* with depth (34-layer plain: 28.54% vs 18-layer: 27.94% top-1) and that residual reformulation reverses this at zero parameter cost; ResNet-152 needs only **11.3 GFLOPs**, less than VGG-16/19.
- [[Acciarri 2016 — CNNs Applied to Neutrino Events in a LArTPC]] (2016) — MicroBooNE shows CNNs built for dense photographs work on sparse LArTPC wire images via a crop-and-downsize pipeline (3456×9600 full events → 576×576 sub-images); AlexNet/GoogLeNet trained on **22,000 images per particle class**.
- [[Aurisano 2016 — CNN Neutrino Event Classifier]] (2016) — CVN, a two-branch GoogLeNet-inspired CNN, classifies NOvA neutrino events directly from calibrated hit maps with no high-level reconstruction; **49% ν_e CC selection efficiency vs 35% for NOvA's previous selector**.
- [[Cohen 2016 — Group Equivariant Convolutional Networks]] (2016) — generalizes convolutional weight sharing from translations to discrete rotation/reflection groups (p4, p4m) with negligible overhead, increasing capacity at fixed parameter count; **2.28% error on rotated MNIST vs 3.98% prior SOTA**.
- [[George 2017 — Deep Neural Networks for Real-time Multimessenger Astrophysics]] (2017) — Dilated 1D CNNs fed raw noisy strain time series (no spectrograms) detect binary-black-hole gravitational-wave signals with **100% sensitivity for SNR ≥ 10** at ~0.5% single-detector false-alarm rate, evaluating in 106 μs/s of data on a GPU vs ~1.1 s for matched filtering.
- [[George 2017 — Deep Neural Networks for Real-time Multimessenger Astrophysics]] (2017) — Initializing the detection classifier from the fully trained parameter-estimation predictor (adding only a softmax layer) raised test accuracy from **96% to 99%** while cutting training time.
- [[Vaswani 2017 — Attention Is All You Need]] (2017) — argues self-attention over convolution for long-range dependencies: **O(1)** maximum path length between any two positions vs $O(\log_k n)$ for dilated conv stacks (ByteNet) and $O(n/k)$ for contiguous kernels.
- [[Kuchera 2019 — ML Track Classification in the AT-TPC]] (2019) — ImageNet-pretrained VGG16 fine-tuned on 128x128 track projections beats logistic regression and FCNNs in every regime and is uniquely robust to added noise; **exp→exp multiclass F1 0.93**.
- [[Dosovitskiy 2020 — An Image is Worth 16x16 Words]] (2020) — quantifies the value of CNN inductive biases (locality, translation equivariance): ViT-B/32 loses to ResNet50 on a **9M-image subset but wins on 90M+** subsets of JFT-300M.
- [[Kvasiuk 2020 — CNN Classification of EoS in Heavy-Ion Collisions]] (2020) — tiny 2-conv-layer CNN classifies nuclear EoS (hard vs. soft) event-by-event from 10x10 proton (pT, phi) histograms in UrQMD Au+Au collisions; **98% accuracy at sqrt(s) = 11 and 14 GeV**.
- [[Qu 2020 — Jet Tagging via Particle Clouds]] (2020) — EdgeConv carries the CNN recipe (shared kernels + hierarchical stacking) to unordered particle clouds, sidestepping jet-image sparsity where **>90% of pixels are blank**.
- [[Karniadakis 2021 — Physics-Informed Machine Learning]] (2021) — casts CNNs as the archetypal inductive-bias architecture (translation invariance), analogous to finite-difference stencils and the multigrid method, and the recommended PINN backbone for gridded **2D** domains.
- [[He 2023 — ML in Nuclear Physics at Low and Intermediate Energies]] (2023) — review shows CNNs decoding heavy-ion collision observables end-to-end: EOS stiffness (K0 = 200 vs 380 MeV) classified from proton spectra at **85% event-by-event / 95% event-summed accuracy**, and impact parameter reconstructed to Δb ≈ 0.8 fm (Sn+Sn, 270 MeV/nucleon).
- [[Wu 2023 — ML for 12C Event Classification in AT-TPC]] (2023) — encodes 3D TPC tracks as 2-channel (charge + drift time) 32x64 images for planar CNN classification and regression; **F1 = 0.9886** for signal vs background.
- [[Dey 2024 — Point-Cloud ML for Fission Event Classification in the AT-TPC]] (2024) — projection-free alternative to prior 2D-image CNN/ResNet/VGG-16 pipelines for active-target TPC events: PointNet consumes raw point clouds standardized to **64 points x 4 features**, reaching 0.929 recall on events the heuristic could not label.
- [[Murali 2024 — ViT vs CNN and ResNet for Chest X-ray Classification]] (2024) — a plain two-conv-layer CNN baseline trails all residual/attention models on the NIH Chest X-ray dataset (112,120 images); **91% test accuracy, 0.82 AUC**.
- [[Huang 2025 — Deep Learning for Nucleon-Nucleon Correlations]] (2025) — CNNs on single TRENTo entropy heatmaps stay below 60% accuracy, but stacking 50 events as image channels lifts pairwise classification of nuclear correlation types to **97% / 70% / 90%**.
- [[Zhang 2025 — ML Event Classification and Vertex Reconstruction with MATE-TPC]] (2025) — a compact 3-conv-layer CNN regresses the 12C+12C reaction vertex from 128×128 track images where deeper ResNet/VGG overfit; **vertex residual σ = 0.0386 cm (X, simulation), ~80% of residuals within 1σ**.
- [[Lu 2026 — KAN Correction of Nuclear Mass Models]] (2026) — motivates KANs as a data-efficient alternative to CNN-scale deep learning when only **2340 nuclei** (vs 60k MNIST / 14M ImageNet samples) are available for training.

## Related Concepts

- [[ResNet]]
- [[Vision Transformer]]
- [[Attention Mechanism]]
- [[Domain Adaptation]]
- [[Transfer Learning]]
- [[Physics-Informed Neural Network]]
- [[Point Cloud Neural Network]]
- [[Particle Identification]]
- [[Time Projection Chamber]]

## References

- R. Acciarri et al. (MicroBooNE Collaboration), "Convolutional Neural Networks Applied to Neutrino Events in a Liquid Argon Time Projection Chamber," arXiv:1611.05531 [physics.ins-det] (2016).
- M.P. Kuchera et al., "Machine learning methods for track classification in the AT-TPC," Nucl. Instrum. Methods Phys. Res. A (2019).
