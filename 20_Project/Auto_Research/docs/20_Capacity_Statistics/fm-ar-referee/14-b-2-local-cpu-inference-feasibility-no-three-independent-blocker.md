<!-- Verbatim source section; overview: [[../fm-ar-referee]] -->
<!-- SOURCE-BODY-START -->
## B.2 Local CPU inference feasibility — NO (three independent blockers)

1. No EXP3 checkpoints local (all on box 176). 2. No torch on this Mac. 3. No Garfield H5 (~25GB, box-only).
**Feasible on box 176 (proven):** the 6-checkpoint × 5-condition battery already ran there CPU-only under the 2GB cap. Full-25k inference ≈ 12.5× a battery condition ≈ tens of minutes per checkpoint; ~2–4 CPU-h for all 11. **Do not pull H5 to the Mac; run on-box, sync `predictions.csv` (~1MB each).** Under an hour locally: impossible.

<!-- SOURCE-BODY-END -->
