<!-- Verbatim source section; overview: [[../fm-ar-gpu-ladder]] -->
<!-- SOURCE-BODY-START -->
## 1.3 The ladder

Costs shown as **train / billed-with-headroom**. "Wait for" = CPU results that should land first (doctrine: no cures before diagnosis; also avoids dead spend).

### Rung 0 — ~5 GPU-h: the single decisive run
| Run | Cost | Decides | Outcomes |
|---|---|---|---|
| **R1: RN-Raw-lf s42** | 4.8 / ~6.2 h | **C11 — the paper's central claim.** The paired Δ_Raw on the *true* 4He task. XA-Raw-lf already exists: test 0.92136, α-recall 0.7254. | RN ≈ 0.92 → XA parity on Raw on the true task → central claim dead on Raw too; campaign pivots to mechanism/seed evidence. RN < 0.92 → first evidence the physics path helps where the paper predicted → headline survives, seeds become urgent. |

- **Wait for:** nothing — this run is itself the diagnostic for the paired-Δ gate (closing doc §6). In parallel the box-176 CPU chains should finish: `predump_chain` (12 prediction dumps → true McNemar), `d5_chain`/`d6` (permuted_cls/mean_cls/scaled_cls → load-bearing vs OOD-artifact), `diag_chain` (D1–D4 → H1a vs H1b).
- **Prereqs:** lf config = triton RN-Raw config + `file_class_list [1,1,1,1,0]` over hdf5 order (p,d,t,³He,⁴He) — recipe verified in the completed run's `config.yaml`; no code change. Garfield_Raw H5s already on box. Its `data_split.json` must be produced by the run itself (the lf run's local split is 0 bytes — re-pull both before pairing).

### Rung 1 — ~16 GPU-h: the 4He 2×2 at seed 42
**R1 + R2** = 3 runs, **11.2 h train / ~14.6 h billed** (fits with ~1.4h spare; nothing else fits without stranding a half-pair).

| Run | Decides | Outcomes |
|---|---|---|
| R2: XA-HC-lf + RN-HC-lf s42 | **C11 interaction term** — the paper's claim is architecture×representation; without HC cells there is no interaction to report, only a Raw pairwise Δ. | HC Δ ≈ 0 (as on triton) + Raw Δ < 0 → clean interaction story. HC Δ < 0 too → physics path hurts everywhere on 4He → mechanism question dominates. |

- **Alternative 16h package (competing, flag for captain):** R1 + **R8 NimpSim Option A** (~10h/13h) = ~15–19h billed — buys the headline 4He comparator *and* the first honest matched XA-vs-RN on the real ³He/⁴He task (repairs §5.5's mislabeled decomposition). Costs the HC interaction cells. Choose by whether the paper's flagship NimpSim claim or the Garfield 2×2 design matters more.
- **Wait for:** same CPU chains as Rung 0. If D5 shows zero_cls collapse is a pure OOD artifact, the mechanism narrative changes before the 2×2 is even interpreted — but the 2×2 runs are claim-decisive either way, so they need not wait.

### Rung 2 — ~30 GPU-h: seed-robust Raw headline
**R1 + R2 + second seed of the Raw pair (XA-Raw-lf s1 + RN-Raw-lf s1)** = 5 runs, **21.5 h train / ~28 h billed**.

- Decides: whether the headline Δ_Raw (whatever sign R1 gives) is seed-robust. Anchor policy: no delta may be presented as seed-robust on n=1. Two seeds give a sign check; three give mean±sd.
- **Gated alternative:** if R1 returns Δ_Raw ≥ 0 (claim dead), do **not** buy more lf seeds — spend the ~14h remainder on R8 (NimpSim Option A) or hold for mechanism work per the closing-doc gate.
- **Wait for:** R1's Δ_Raw sign (the pre-registered gate: Δ_Raw ≥ 0 → seeds; Δ_Raw < 0 → mechanism work first).

### Rung 3 — ~60 GPU-h: full 4He 2×2 × 3 seeds
**R1 + R2 + R3** = 9 runs, **44.6 h train / ~58 h billed** — the paper's PID section stands on the same n=3 footing as the triton record.

- The ~2h billed remainder fits nothing; in train-hour terms ~15h remains for **one** gated item: R5-mechanism (~5.5h), R4 triton grid hole (~5.5h), or part of R8/R9 — **choose only after Δ_Raw sign and D1–D6 readouts**. Do not commit the remainder now.
- **Explicitly gated, NOT in any rung** (cures/diagnostics that must wait for CPU readouts): R5 mechanism pack (needs Δ_Raw < 0 AND D1–D5 localization), R6 hyperparameter control (needs D1/D3 to fail to explain the deficit), R7 physicsnorm retrain (needs `scaled_cls` ≪ original — if `scaled_cls` ≈ original the deficit is content-driven and the retrain buys nothing), R9 Option B (needs augmentation wired — see below), R10 VGG16 (needs backbone code; also the weakest claim-per-hour in the set — a method-family transfer point, not a claim-decider).

<!-- SOURCE-BODY-END -->
