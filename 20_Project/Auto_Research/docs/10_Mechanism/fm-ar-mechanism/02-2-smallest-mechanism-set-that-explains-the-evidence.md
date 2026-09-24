<!-- Verbatim source section; overview: [[../fm-ar-mechanism]] -->
<!-- SOURCE-BODY-START -->
## 2. Smallest mechanism set that explains the evidence

### 2.1 Mechanism M1: HC is image-side denoising

**Facts.** The physics-free ResNet (`fusion_type: none`) improves from Raw to HC by 6.52–6.66 percentage points for seeds 0, 1, and 42. The paired input audit reports Raw Ch0 occupancy about 1,956/3,840 pads versus HC about 113/3,840 and Raw Ch0 charge dominated by the measured noise floor. The HC-vs-Raw scout traces the difference to largest-cluster DBSCAN filtering (plus the fixed hole mask and a small Ch1 averaging change); both paths use the same dataset z-score and physics-feature code. The source implementation confirms that the ResNet path sends a 512-d GAP vector directly to the head and ignores physics (`model.py:379-383`).

**Model claim.** The HC gain is a representation/SNR effect: denoising makes the track charge visible to the image backbone. It does not require a physics-feature explanation and is therefore independent evidence from the later XA-head mechanism.

### 2.2 Mechanism M2: raw, internally mismatched physics is a low-dimensional side channel

**Facts.** The dataset returns four raw float32 features (`dataset.py:470`; `normalization.py:24-30`). In XA, the same raw vector goes through `query_proj` and is concatenated with a 64-d attended vector to form a 68-d head input (`model.py:350-377`); the head is `Linear(68,128) -> ReLU -> Dropout -> Linear` (`classifier.py:5-10`). The feature-norm scout measured Izz around 170 while other components are orders smaller; it measured an Izz DC contribution that fixes 108/128 hidden signs in an EXP8 XA checkpoint. The EXP8 OOD scout measured carbon hidden activations about four times the seen range and carbon-to-proton leakage of 8.0–8.5% for XA versus 1.4–1.6% for ResNet.

**Model claim.** This is one cause with two consequences: (a) the query is dominated by a static scale/DC component, and (b) the direct classifier side channel is unbounded under distribution shift. It explains why `zero_cls` can collapse to a class-prevalence-like output without proving event-specific information use, and why the same pathway produces confident carbon OOD errors.

### 2.3 Mechanism M3: feature redundancy/crowding is representation dependent

**Facts.** On the existing 2,000-event batteries, `permuted_q` is within 0.001 of original for every synced triton checkpoint (five local triton JSONs; the closing record reports six including the corrected label-fix run). On HC, zeroing classifier physics changes accuracy by +0.1, −0.4, and −15.6 pp for seeds 42, 1, and 0 respectively. On Raw, zeroing classifier physics gives 0.1935/0.4105/0.1935 for XA-Raw s42/s0 and corrected label-fix 4He, i.e. collapse on every Raw checkpoint. The closing record reports Raw XA early best epochs and a 1.5 pp post-peak decline while RN-Raw plateaus.

**Model claim.** HC makes Ch0 sufficiently informative that the four moments are often redundant with image features. Raw makes Ch0 noisy; the 68-d XA head can crowd image information with a badly scaled direct side channel, producing an architecture-by-representation interaction. The Raw deficit is therefore downstream of image routing. Capacity (64-d attended vector versus RN's 512-d GAP) and crowding are not independent mechanisms: capacity is the structural opportunity, while the raw physics side channel is the proposed cause of the optimization/crowding penalty.

### 2.4 Mechanism M4: query permutation invariance and HC attention sinks are consequences, not separate causes

**Facts.** `permuted_q` does not change predictions. The attention scout reports HC token-50 argmax concentration and Raw Bragg-region mass around 0.47, but no evidence that the physics query causes either map. The query implementation is ordinary `query_proj(physics)` followed by softmax attention (`cross_attention.py:156-200`), with no positional encoding that would force token 50.

**Model claim.** The query is effectively a static or near-static key-selection bias. HC's fixed empty-token sink is a learned consequence of redundancy plus softmax; Raw's Bragg-like map is image/key driven. “Physics query guides attention” is falsified by the current counterfactuals.

### 2.5 Independent versus consequential pieces

| Piece | Status | Relationship |
|---|---|---|
| HC DBSCAN denoising | Supported, independent | Explains the HC-Raw gain even when physics is absent. |
| Raw physics scale asymmetry | Supported by code/EXP8 measurements | Common cause of query DC dominance and direct-head extrapolation. |
| Narrow XA head/crowding | Leading EXP3 explanation, not yet localized by D1-D5 | Uses M2; capacity and crowding are competing descriptions of the same downstream bottleneck. |
| Query-content poisoning | Refuted by permutation accuracy (within the tested manifold) | Not an independent cause; sink/query invariance follows M2/M3. |
| Zeroing-collapse interpretation | Unresolved | Could be information dependence or OOD bias shift; D5 is required. |
| Label/selection effects | Confounds, not mechanisms | EXP3 headline runs use triton-vs-rest mapping; true 4He has only one XA-Raw run. |

<!-- SOURCE-BODY-END -->
