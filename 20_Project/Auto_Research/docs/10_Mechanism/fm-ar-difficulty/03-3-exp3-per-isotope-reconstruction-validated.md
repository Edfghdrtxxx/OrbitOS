<!-- Verbatim source section; overview: [[../fm-ar-difficulty]] -->
<!-- SOURCE-BODY-START -->
## 3. EXP3 per-isotope reconstruction (validated)

Only `EXP3-ResNet-HC-100k-seed42` has `predictions.csv` (25,000 rows, `event_index` = row number, not global index). Mapping row *k* → `data_split.json:val_indices[k]` → isotope via `val_indices[k]//100000` against `file_paths` order `[3He, 4He, d, p, t]` reproduces `metrics.json`'s confusion matrix **exactly** ([[4242,758],[265,19735]]), so the mapping is verified, not assumed.

**EXP3-ResNet-HC-s42, triton-vs-rest task (label bug: class 0 = t):**

| isotope | n | →t false-positive | relZ²A vs t | \|Δ(A/Z)\| vs t |
|---|---|---|---|---|
| d | 5038 | **0.0363** | 0.50 | 1.00 |
| ³He | 5110 | 0.0065 | 3.00 | 1.50 |
| ⁴He | 4848 | 0.0066 | 4.33 | 1.00 |
| p | 5004 | **0.0034** | 2.00 | 2.00 |
| t recall | 5000 | 0.8484 (t→rest 0.1516) | — | — |

Rank correlations (n=4): relZ²A ρ=−0.20; \|Δ(A/Z)\| ρ=−0.95. Here Δ(A/Z) wins *only* because p is the easiest pair; note it cannot separate d from ⁴He (identical 1.0, 5.5× different FP). Z²A correctly picks d as hardest but misranks p. **p–t is the outlier** — possibly energy-range/simulation differences rather than stopping power; worth a lead-side check of per-file energy distributions before the paper leans on Z²A for hydrogen isotopes.

<!-- SOURCE-BODY-END -->
