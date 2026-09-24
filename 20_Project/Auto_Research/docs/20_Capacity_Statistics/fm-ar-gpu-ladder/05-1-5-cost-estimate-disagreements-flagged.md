<!-- Verbatim source section; overview: [[../fm-ar-gpu-ladder]] -->
<!-- SOURCE-BODY-START -->
## 1.5 Cost-estimate disagreements (flagged)

1. **XA-Raw hours:** seed-evidence "7–14h" vs gpu-plan/referee "4.9–5.6h". Resolution: logged training = 4.91h; 13.7h was run-dir wall span. Budget billed wall at ~7h for Raw cells (observed ×2.8 worst case), not ×1.3.
2. **4He 2×2 residual:** seed-evidence "~19–26h / 4 runs" vs gpu-plan "~11.2h / 3 runs". The former predates the XA-Raw-lf completion — superseded.
3. **VGG16:** transfer's "3–5× RN18 ≈ 15–25h" ignores that the Kuchera recipe is 10 epochs vs our 20–38; could be ~5–10h. Unmeasured either way — treat as ±2×.
4. **NimpSim Option A "~10h":** assumes NimpSim epoch cost ≈ Garfield Raw. Clean images, same event count — plausible but unverified; ±30%.
5. **XA-Raw-lf train time (~5.4h):** estimated from epochs × min/epoch; run.log unsynced. Affects R3's total by ±1h.

<!-- SOURCE-BODY-END -->
