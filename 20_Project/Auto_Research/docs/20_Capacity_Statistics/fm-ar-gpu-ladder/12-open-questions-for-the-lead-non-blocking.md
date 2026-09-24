<!-- Verbatim source section; overview: [[../fm-ar-gpu-ladder]] -->
<!-- SOURCE-BODY-START -->
## Open questions for the lead (non-blocking)

1. Are `3He_100k.h5`/`4He_100k.h5` (NimpSim) anywhere on box 176, or must they come from IMP/legacy disk? Gates R8/R9 entirely.
2. Do all 11 `best_model.pth` still exist on box? `predump_chain` needs them.
3. Are the three remaining `-lf` configs staged on box, or generated ad hoc? Recipe verified (`file_class_list [1,1,1,1,0]`).
4. XA-Raw-lf `run.log` unsynced — actual wall-clock needed to calibrate R3's ~33h.
5. fm-ar-augment / fm-ar-kuchera-baselines are in flight — R9/R10 code prereqs land when they do; no report yet.

<!-- SOURCE-BODY-END -->
