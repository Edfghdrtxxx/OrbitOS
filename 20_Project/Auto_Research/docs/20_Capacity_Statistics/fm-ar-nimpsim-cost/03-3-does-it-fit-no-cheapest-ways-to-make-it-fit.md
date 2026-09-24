<!-- Verbatim source section; overview: [[../fm-ar-nimpsim-cost]] -->
<!-- SOURCE-BODY-START -->
## 3. Does it fit? No — cheapest ways to make it fit

Reserve after Rung 1: **~9.5 GPU-h** (`gpu_session_queue.md:21`). Option B at
20–35 h does not fit; at the optimistic 10.5 h it still doesn't fit.

Cheapest config changes, ranked by evidential-value preserved:

1. **`num_workers: 4 → 8–12` + keep everything else.** EXP8 evidence: workers 8
   "halved epoch time" on this box (memory file :16). If the run is I/O-bound
   this alone takes the central case to ~10–20 h — still not safely ≤9.5 h, and
   it changes nothing scientifically. Necessary but not sufficient.
2. **`per_file_limit: 100000 → 50000` (100k events → 80k/20k).** Halves epoch
   time → ~5–18 h central ~8–12 h; fits only at the lucky end. **Cost:** the
   pairing against the published 96.1% run is no longer at headline scale —
   the run becomes a smaller-scale probe, and any XA−RN gap measured at 80k
   can't be quoted against the 160k published number without a size caveat.
3. **`max_epochs: 100 → 40` (keep patience 15).** Guarantees ≤ ~20 h at the
   step-bound ceiling, ~9 h at the sample-bound floor — fits only in the
   optimistic model. **Cost:** real risk of truncating before convergence
   (published best was epoch 78); a truncated run biases the comparison
   whichever arm converges faster — the worst outcome for an
   architecture-isolation run.
4. **bs 32 → 128 + `mixed_precision: true`.** ~4× fewer steps → ~4–13 h;
   fits in the central case. **Cost:** breaks the V4-HeHe protocol match
   (bs 32/FP32 are part of the published recipe, config :11-18); the arm
   difference is no longer cleanly "fusion only" — optimization confound
   (batch size, precision) enters the pairing. Cheapest reliable fit, but it
   spends the run's core claim.
5. **Fallback already in the queue:** Option A ResNet arm alone
   (`EXP3_ResNet_NimpSim_HeHe_100k_seed42.yaml`, bs 128/AMP/100k) ≈ 4.5–5.5 h —
   fits, but pairs against nothing published (the Option A XA arm is the other
   ~5 h and the pair exceeds the reserve). Or reserve 5b (R3a, ~7.1 h billed,
   `gpu_session_queue.md:121`) which needs no NimpSim staging at all.

**Recommendation:** do not launch Option B this session. If NimpSim is the
priority, the honest cheap variant is (1)+(2): workers 8 + `per_file_limit`
50000 (~8–12 h, borderline) — but state plainly it is no longer the
headline-scale pairing. Otherwise spend the reserve on 5b and schedule
Option B as the first job of a future session where it can have ~35 h.

<!-- SOURCE-BODY-END -->
