<!-- Verbatim source section; overview: [[../fm-ar-ood-leakage]] -->
<!-- SOURCE-BODY-START -->
## 10. Open questions for the lead (not blocking)

- **Per-event physics features for E–H** live only in `data/exp8/*.h5` on the box — no local copy. E1 above closes this; until then the "+Iyy/−Izz" attribution is from the hidden-space direction (58% in physics subspace), not a direct feature measurement.
- **Why class A and not B**: the head's extrapolation direction favors A for the (+Iyy, −Izz/+Iyz) region but B for large +M alone. Which region real carbon events occupy needs E1. If carbons' `total_mass` is *low* (faint elastic tracks, cf. ev55361), the M→A direction (M=−100 → A in the sweep) may dominate instead — E1 decides between "large moment" and "low charge" variants of the same artifact.
- **EXP8 counterfactual battery**: the EXP3 battery script (`exp3_counterfactual_battery.py`) runs triton/4He checkpoints; an EXP8 variant feeding unseen-channel physics through `zero/permute/clip_cls` is the E2/E3 implementation — presumably a small patch, but I did not verify the script's channel handling.
- **Seed robustness**: all EXP8 numbers are seed 42. The closing doc warns counterfactual responses vary wildly across seeds (zero_q −6.5 vs −57.1pp); the leak mechanism should be re-checked on a second seed before the paper quantifies it.
- **null channel**: `physics_features` are all-zero for null events (verified in local fixture H5s) and null leaks 0.0% on both arms — consistent with zero-physics being a *seen* condition during training (null was a training file), not a counterexample.

<!-- SOURCE-BODY-END -->
