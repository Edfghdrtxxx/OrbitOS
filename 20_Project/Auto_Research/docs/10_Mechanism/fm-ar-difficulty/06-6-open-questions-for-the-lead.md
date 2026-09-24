<!-- Verbatim source section; overview: [[../fm-ar-difficulty]] -->
<!-- SOURCE-BODY-START -->
## 6. Open questions for the lead

- Per-isotope breakdown for the other 11 EXP3 runs (esp. the 4He label-fix run and the XA arms) requires either re-eval with per-event dumps on the box, or local H5+checkpoint availability — neither exists locally. One command on the box would fix this: re-run eval with `predictions.csv` output (the eval path already supports it — EXP3-RN-HC-s42 has one).
- Check whether p's anomalous easiness vs t is an energy-range artifact: compare deposited-energy/Bragg distributions of the p file vs d/t/³He/⁴He files in `Garfield_HC`/`Garfield_Raw` H5s.
- EXP8 unseen-carbon → p leakage on XA (~8%) vs RN (~1.5%): is this the same "physics features route by stopping-power-like quantity" mechanism? If so it's *confirming* evidence for Z²A (carbons' charge deposition resembles scaled-up light ions) — worth a sentence in the paper either way.

<!-- SOURCE-BODY-END -->
