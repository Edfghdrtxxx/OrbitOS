<!-- Verbatim source section; overview: [[../fm-ar-related-work]] -->
<!-- SOURCE-BODY-START -->
## 4. Prior papers reporting the same negative mechanisms (reframing ammunition)

Each maps a campaign finding onto a named, citable phenomenon — so the paper can present its diagnostics as *mechanism identification*, not just caveats.

| Campaign finding | Prior reporting the same mechanism | Reframing it enables |
|---|---|---|
| Physics query carries no event-specific signal (permuted_q Δ=0, 6/6 checkpoints) | Hessel & Lee 2020 (arXiv:2010.06572): multimodal models succeed while ignoring cross-modal interactions; Peng et al. 2022 (arXiv:2203.15332): modality imbalance | "We show the fusion mechanism is vestigial at this scale — a documented failure mode of multimodal architectures, here diagnosed by counterfactual query permutation." |
| HC attention collapses to a fixed near-empty token (87% argmax on token 50) | Darcet et al. 2024 (arXiv:2309.16588): ViT attention sinks on low-information tokens; Xiao et al. 2024 (arXiv:2309.17453): attention sinks in LLMs | "The attention learns a register/sink token, a known ViT phenomenon — the map is not evidence of physics routing." |
| Unnormalized MoI features act as a static DC bias / unbounded side channel (Izz≈170 fixes 108/128 hidden signs; carbon OOD 4× activation inflation) | Wang et al. 2021 (arXiv:2001.04536): gradient pathologies from scale mismatch in PINNs; Geirhos et al. 2020 (arXiv:2004.07780): shortcut learning | "The physics vector enters unnormalized and functions as a shortcut feature — a scale pathology, not a learned prior." |
| XA trails ResNet on Raw at matched size; physics features redundant on HC | Hessel & Lee 2020; Krishnapriyan et al. 2021 (arXiv:2109.01050): PINN gains are not guaranteed | "Physics-informed fusion is task- and representation-dependent; we identify when it helps (regression) and when it is redundant (denoised classification)." |
| Softmax confidence fails on far-OOD channels; activation magnitude detects them | Hendrycks & Gimpel 2017 (arXiv:1610.02136); Sun et al. 2021 ReAct (arXiv:2111.12797); Bendale & Boult 2016 (arXiv:1511.06233) | "The unseen-channel test is an open-set problem; confidence-based rejection fails as expected, and activation-space detection is the known remedy." |
| Attention map "physically consistent" reading | Jain & Wallace 2019 (arXiv:1902.10186); Serrano & Smith 2019 (arXiv:1906.03731) | "Attention maps are not explanations; we therefore verify mechanism by counterfactual permutation, not visualization." — this turns the paper's own counterfactual battery into the *methodological* contribution. |

**The strongest reframe available:** the paper's counterfactual battery (permuted_q, zero_cls, scaled_cls) is itself a contribution — a *mechanism-audit protocol* for physics-informed fusion that the prior AT-TPC ML literature (Kuchera, Wu, Dey, Zhang) never applied. Citing Hessel & Lee + Jain & Wallace positions it as bringing standard ML-rigor diagnostics to nuclear-physics fusion models for the first time.

---

<!-- SOURCE-BODY-END -->
