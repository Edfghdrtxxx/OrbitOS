---
area:
tags: [vision-transformer, self-attention, image-classification, transfer-learning, deep-learning]
created: 2026-07-05
last_reviewed:
next_review: 2026-07-05
review_interval: 0
---
# Vision Transformer

## Definition

The Vision Transformer (ViT) is an image classifier that applies a standard [[Transformer Architecture]] encoder — stacked multi-head self-attention and MLP blocks — directly to a sequence of flattened image patches, treating them exactly like NLP tokens. Introduced by Dosovitskiy et al. (2020), it carries no image-specific inductive bias beyond the initial patch extraction, so it trails comparably sized [[ResNet]]s on mid-sized datasets but matches or exceeds state-of-the-art CNNs when pre-trained on 14M–300M images (ImageNet-21k, JFT-300M). It established the pre-train-then-fine-tune Transformer paradigm for computer vision.

## Key Points

- **Patch embedding:** an image $\mathbf{x} \in \mathbb{R}^{H \times W \times C}$ is reshaped into $N = HW/P^2$ flattened patches, linearly projected to width $D$ and prepended with a BERT-style learnable `[class]` token: $$\mathbf{z}_0 = [\mathbf{x}_{\text{class}};\, \mathbf{x}_p^1\mathbf{E};\, \cdots;\, \mathbf{x}_p^N\mathbf{E}] + \mathbf{E}_{pos}, \qquad \mathbf{E} \in \mathbb{R}^{(P^2 \cdot C) \times D}$$
- **Encoder block** (pre-LayerNorm with residual connections): $$\mathbf{z}'_{\ell} = \mathrm{MSA}(\mathrm{LN}(\mathbf{z}_{\ell-1})) + \mathbf{z}_{\ell-1}, \qquad \mathbf{z}_{\ell} = \mathrm{MLP}(\mathrm{LN}(\mathbf{z}'_{\ell})) + \mathbf{z}'_{\ell}, \qquad \mathbf{y} = \mathrm{LN}(\mathbf{z}_L^0)$$
- The core operation is the scaled dot-product [[Attention Mechanism]] from Vaswani et al. (2017), $\operatorname{Attention}(Q, K, V) = \operatorname{softmax}\!\left(QK^{T}/\sqrt{d_k}\right) V$, run as multi-head attention over patch tokens; the residual sub-layers import [[ResNet]]-style identity shortcuts into the attention stack.
- **Data-scale crossover:** lacking the locality and translation-equivariance biases of a [[Convolutional Neural Network]], ViT underperforms ResNets below roughly tens of millions of training images but overtakes them as pre-training data grows — ViT-B/32 loses to ResNet50 on a 9M-image JFT subset yet wins on 90M+ subsets.
- **Naming and scale:** ViT-L/16 means the "Large" variant with $16 \times 16$ patches; sequence length scales as $1/P^2$. The family follows BERT configs: ViT-Base (86M), ViT-Large (307M), ViT-Huge (632M parameters).
- Learned 1D position embeddings suffice — they recover the 2D image topology during training, and 2D-aware or relative variants gave no measurable gain ([[Positional Encoding]]).
- **Compute efficiency:** ViT reaches the same transfer performance as ResNets with roughly 2–4× less pre-training compute (ViT-H/14: 2.5k TPUv3-core-days vs 9.9k for BiT-L ResNet152x4).
- **Hybrid ViT** (Transformer fed with ResNet feature-map patches) helps at small compute and data budgets; the gap to pure ViT vanishes at scale.

## Examples

- **TPC particle identification at IMP:** detector image datasets sit far below the ~90M-image regime where ViT beats ResNet from scratch, so pre-trained ViT backbones or CNN+Transformer hybrids are the realistic routes for [[Time Projection Chamber]]-based [[Particle Identification]] — not training ViT from scratch.
- **Medical-imaging scale check (Murali 2024):** on 85,000 NIH chest X-rays, from-scratch ViT-v1/32 and ViT-v2/32 lose to ResNet, but the ImageNet-21k pre-trained hybrid ViT-ResNet/16 wins with 93.9% test accuracy and ~10% faster training — the same $\sim 10^5$-image scale as typical detector datasets.
- **Attention-map interpretability:** averaging the attention weights of the last multi-head attention layer over heads/patches and superimposing them as a heatmap reveals which image regions drive predictions — a transferable recipe for verifying which track/hit regions drive PID decisions.

## Papers

- [[Vaswani 2017 — Attention Is All You Need]] (2017) — defines the exact encoder stack ($N=6$ layers, $d_{model}=512$, multi-head self-attention + FFN with LayerNorm residuals) that ViT later applies to image patches; big model reached SOTA translation after only **3.5 days on 8 P100 GPUs**.
- [[Dosovitskiy 2020 — An Image is Worth 16x16 Words]] (2020) — origin paper: a pure Transformer over 16×16 image patches matches or beats SOTA CNNs when pre-trained at scale; **88.55% ImageNet top-1 (ViT-H/14, JFT-300M)**.
- [[Murali 2024 — ViT vs CNN and ResNet for Chest X-ray Classification]] (2024) — from-scratch ViT-v1/32 and ViT-v2/32 lose to ResNet on 85,000 NIH chest X-rays, but the ImageNet-21k pre-trained hybrid ViT-ResNet/16 wins with **93.9% test accuracy**.

## Related Concepts

- [[Attention Mechanism]]
- [[ResNet]]
- [[Convolutional Neural Network]]
- [[Transformer Architecture]]
- [[Positional Encoding]]
- [[Transfer Learning]]
- [[Inductive Bias]]
- [[Domain Adaptation]]
- [[Particle Identification]]
- [[Time Projection Chamber]]

## References

- Dosovitskiy, Beyer, Kolesnikov, Weissenborn, Zhai, Unterthiner, Dehghani, Minderer, Heigold, Gelly, Uszkoreit, Houlsby (Google Research, Brain Team), "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale," 2020.
- Vaswani, Shazeer, Parmar, Uszkoreit, Jones, et al., "Attention Is All You Need," 2017.
