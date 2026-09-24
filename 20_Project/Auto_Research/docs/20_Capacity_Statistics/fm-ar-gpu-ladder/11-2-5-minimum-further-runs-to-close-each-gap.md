<!-- Verbatim source section; overview: [[../fm-ar-gpu-ladder]] -->
<!-- SOURCE-BODY-START -->
## 2.5 Minimum further runs to close each gap

| Gap | Closer | Cost |
|---|---|---|
| True McNemar/bootstrap on all pairs | `predump_chain.sh` on box (in flight) + re-pull 2 zero-byte splits | 0 GPU-h; ~2–4 CPU-h |
| zero_cls interpretation | D5/D6 chain (in flight) | 0 GPU-h |
| 4He headline Δ_Raw | R1: RN-Raw-lf s42 | ~4.8 GPU-h |
| 4He interaction | R2: XA-HC-lf + RN-HC-lf s42 | ~6.4 GPU-h |
| 4He seed-robustness | R3: lf 2×2 seeds 0,1 (6 runs) | ~33 GPU-h |
| Triton grid 3/3 (optional) | R4: XA-Raw-seed1 | ~5.5 GPU-h — deficit already guaranteed-significant 2/2 |
| Mechanism (if gate fires) | R5/R6/R7, gated | ~5–5.5 GPU-h each |
| NimpSim §5.5 repair | R8 Option A / R9 Option B | ~10 / ~12–18 GPU-h + data staging |
| Attention second seed | exp4 metrics on XA-Raw-s0/lf ckpts | 0 GPU-h; ~1 CPU-h |

---

<!-- SOURCE-BODY-END -->
