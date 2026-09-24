<!-- Verbatim source section; overview: [[../fm-ar-exp2-contam]] -->
<!-- SOURCE-BODY-START -->
## 2. Is the carbon trivially separable? Contaminated vs clean accuracy

**No EXP2 `predictions.csv`, `data_split.json`, `metrics.json`, or checkpoint exists on this Mac** (verified: `find runs -iname '*EXP2*'` → nothing; the only local `predictions.csv` files are EXP3-s42 and EXP8). Per-file metrics for the contaminated runs are not locally decidable — the exact clean-split number requires the Windows artifacts (§4). What is decidable locally:

### 2.1 Carbon is trivially separable — two independent arguments

1. **Physics:** 13C/14C have Z=6; every other species in the pool has Z≤2. The `total_mass` (total charge) physics feature — one of the 4 features fused into the classifier — is ~3× larger for carbon (measured means 6.85/6.86 for 13C/14C, `exp2-impl/01_data_generation.md:75`, vs ~1–2 for p/d/t/He). A model with access to that feature cannot confuse carbon with helium. Even the image channel is trivially distinct (438 avg hits/event for carbon vs far sparser light-ion tracks).
2. **Arithmetic bound from the confusion matrices** (`implementation_log.md:151-153`): let c = carbon val accuracy. For GatedFusion, 30,000·c + 5,000·a_light ≥ 29,734 correct class-1 predictions → c ≥ 0.893. For Concat, c ≥ 0.891. Carbon accuracy is bounded below by ~89% and physically ≈100%.

### 2.2 Clean-split estimate

Recompute accuracy on the 25k light-species subset (5k α + 20k non-α) from the same CMs, at carbon accuracy c:

| Model | reported (35k) | clean-subset acc (c=1.0) | clean range (c∈[0.9,1.0]) |
|---|---|---|---|
| EXP1-XA (CrossAtt) | 95.80% (25k, clean) | 95.80% | — |
| EXP2-GatedFusion | 96.94% | **95.72%** | [95.72%, 97.72%] |
| EXP2-ConcatFusion | 96.98% | **95.74%** | [95.74%, 97.74%] |

At the physically motivated c≈1.0: **Gated 95.72%, Concat 95.74%, XA 95.80% — a three-way tie within ±0.1 pp.** The +1.14/+1.18 pp advantage over XA is entirely the 10k near-free carbon events. The manuscript's fusion ordering on this arm is a val-composition artifact; on the clean task the three mechanisms are indistinguishable (single seed, n=25k → ±0.4 pp noise).

Caveat: this is the contaminated-*trained* model evaluated on a clean subset. A clean retrain could move the number in either direction (carbon in training is 28.6% of data — plausibly harmless or mildly helpful as easy negatives, but unmeasured).

---

<!-- SOURCE-BODY-END -->
