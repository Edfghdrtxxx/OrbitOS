<!-- Verbatim source section; overview: [[../fm-ar-referee]] -->
<!-- SOURCE-BODY-START -->
## B.9 Open questions for the lead (non-blocking)

1. Do all 11 `best_model.pth` (incl. RN arms) still exist on box 176? G0 needs them; battery JSONs reference only XA ckpts.
2. Were all 6 battery runs evaluated on the *same* 2000-event subset? JSONs don't record indices — if yes, cross-checkpoint comparisons are paired; if not, they carry subset noise (A4).
3. Did `d5_chain.sh` / `diag_chain.sh` (D1–D4) / `predump_chain.sh` outputs land on box? None are synced locally as of this report.
4. XA-Raw-s0 and XA-Raw-lf `data_split.json` are 0 bytes locally — re-pull on next sync (blocks pairing the lf run).
5. Closing doc §10 NOTE: "the s0 anomaly does not replicate" on 4He — **incorrect as stated**: zero_both 0.5235 > zero_cls 0.1935 *is* the anomaly signature (A11). Recommend rewording to "the anomaly's magnitude shrank; its signature replicated."
6. EXP4 sink stats (token-50 444/512, max-weight 0.52, entropy) — which eval produced them? Not in any synced JSON (audit Q4 stands).
<!-- SOURCE-BODY-END -->
