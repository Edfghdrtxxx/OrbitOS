<!-- Verbatim source section; overview: [[../fm-ar-d14-power]] -->
<!-- SOURCE-BODY-START -->
## 3. D2 vs majority: the lead's comparison is right in spirit, wrong in number — and the correction strengthens it

The lead compared D2 = 0.792 to "~0.81" majority. The **exact** test-half majority is 0.792 (52/250 class-0 → predict-all-rest = 198/250). D2 is *identical* to the majority baseline: the 4-feature LogReg extracted **zero** linear signal — it either predicted all-rest or made errors exactly canceling its class-0 hits.

Two caveats keep this honest:

- "Uninformative" means *linearly* uninformative to LogReg at n_train=250. A nonlinear or interaction signal, or a signal weaker than ~5pp, is not ruled out (the probe is powered to notice only ≥~5pp effects at this n).
- The pre-registered wording "acc ≈ chance → H1a" is ambiguous for an 80/20 task: literal chance (0.5) would have read 0.792 as "high → H1b viable." The lead's majority-baseline reading is the correct operationalization; the prereg text should have said "≈ majority baseline." Worth fixing in the table for the s0 re-run.

Also note D2's train-half majority was 0.812 — the probe had a slightly easier train split and still couldn't beat test majority.

<!-- SOURCE-BODY-END -->
