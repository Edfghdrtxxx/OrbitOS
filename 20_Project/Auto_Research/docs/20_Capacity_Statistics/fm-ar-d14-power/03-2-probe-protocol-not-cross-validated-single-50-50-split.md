<!-- Verbatim source section; overview: [[../fm-ar-d14-power]] -->
<!-- SOURCE-BODY-START -->
## 2. Probe protocol: not cross-validated — single 50/50 split

`_logreg_probe` (script lines 115-122): `StandardScaler` + `LogisticRegression(max_iter=2000, C=1.0)`, fit on `tr` (250 events), scored on `te` (250 events). One fixed split, seed 42. No CV, no repeated splits.

Optimism/variance assessment:

- **No leakage**: scaler and probe see only the train half. Test-half scores are honest for that split.
- **Single-split variance dominates**: each probe score is one draw; the ±4–5pp CIs above are the price. A different seed could easily flip the sign of the +1.2pp D1 gap.
- **Mild upstream optimism**: features come from checkpoints early-stopped on this same val set (`checkpoint_selection: best_val_accuracy`), so absolute probe accuracies are slightly optimistic vs. a truly held-out set. This affects both arms symmetrically — the *comparison* is fair.
- **Asymmetric regularization bias**: fixed C=1.0 with n_train=250 is relatively harsher on the 512-dim RN probe than the 68-dim XA probe (p/n = 2.05 vs 0.27). If anything this biases D1 *against* RN — yet RN still scored within 1.2pp, which weakly suggests the RN features are at least as good. Not decisive.
- All three probes share the same `tr`/`te` split, so D1/D2/D3 are paired across probes — but per-event probe predictions aren't stored, so that pairing is unexploitable post-hoc (see §6).

<!-- SOURCE-BODY-END -->
