<!-- Verbatim source section; overview: [[../fm-ar-feature-norm]] -->
<!-- SOURCE-BODY-START -->
## 4. Asymmetry worth flagging: Z01 baseline DOES standardize

`src/data/z01.py:571-593` — the Z01 logistic-moments baseline fits a train-only `StandardScaler` on `[Ixx,Iyy,Ixy,M]` and persists it. The H1 diagnostics probe (`scripts/analysis/exp3_h1_diagnostics.py:116-118`) also standardizes before LogReg. So the *only* consumers of raw physics are the deep XA models — the fair-comparison story ("traditional/simple baseline vs CNN") currently compares a standardized-feature logistic model against an unnormalized-feature deep model. If D2 (physics-only LogReg) comes out weak on Raw, part of the gap vs the deep head could be optimization, not information.

<!-- SOURCE-BODY-END -->
