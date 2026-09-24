<!-- Verbatim source section; overview: [[../fm-ar-referee]] -->
<!-- SOURCE-BODY-START -->
## A1. Every headline number is the wrong task — the label bug
- **Hits:** the paper's central claim (XA > RN, advantage grows on Raw) and every EXP3 number presented as "4He/α-vs-rest".
- **Why it bites:** all 11 completed runs used `_LABEL_MAP_BINARY {4:0,…}` where raw label 4 = **triton**, not 4He (`src/data/dataloader.py:49`; audit `raw_labels` constant-per-file, `sim_..._t_...h5` is the minority file). On the triton task the physics-informed arm is *significantly worse* exactly where the paper predicted the largest advantage (Raw: −1.33/−2.13pp, McNemar-guaranteed p≤0.035/7.5e-4). A referee who spots the label map asks: "your mechanism story was built on the wrong task — why should any of it transfer?"
- **Already answered?** Partially — the campaign is transparent about it (closing doc §1, §4) and one true-4He run exists (XA-Raw-lf s42: test 0.92136, α-recall 0.7254). But the paired comparator (RN-Raw-lf) does not exist, so the sign of Δ_Raw on 4He is **unknown**. Not answerable from disk.
- **Cheapest check:** **needs GPU** — RN-Raw-lf s42 (~4.8h train, ~6.2h wall) is the single decisive run; completing the 4He 2×2 adds XA-HC-lf + RN-HC-lf (~6.4h train). No CPU substitute exists: the comparator is a trained model, not an analysis.

<!-- SOURCE-BODY-END -->
