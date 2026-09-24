<!-- Verbatim source section; overview: [[../fm-ar-transfer]] -->
<!-- SOURCE-BODY-START -->
## 5. Fairness caveats (consolidated)

- **Ceiling:** p/C public task saturates CNNs; only traditional baselines and noise-robustness discriminate. Any direction-B accuracy claim must carry this caveat.
- **Physics-informed non-transferability:** the public data cannot host our method's distinguishing feature. Direction B can only ever test the generic backbone. State this explicitly in the paper or a referee will.
- **Representation mismatch both ways:** their 128×128 single-channel charge projections vs our 80×48 dual-channel (charge+drift). Direction A requires a documented rendering choice; direction B is already native.
- **Task mismatch:** p/C (different Z, easy) vs our isotope tasks (same-Z ³He/⁴He, ¹³C/¹⁴C — harder). Method-family comparison only; never compare absolute numbers across datasets.
- **Implementation fidelity:** their code is TF1/Keras (2019); any rerun is a reimplementation. Their TF1 repo cannot run on this stack without porting.
- **Single-seed:** all existing numbers (ours and theirs) are effectively single-seed; transfer claims inherit the EXP3 seed-variance caveat.

<!-- SOURCE-BODY-END -->
