<!-- Verbatim source section; overview: [[../fm-ar-gpu-plan-draft]] -->
<!-- SOURCE-BODY-START -->
## 5. Open questions for the lead (non-blocking)

1. Where is the **corrected** label-fix `counterfactual_battery.json` on box (the original=0.9275 run)? Local file is the buggy one; sync it before any 4He battery number is quoted.
2. Do all 11 `best_model.pth` (incl. RN arms) still exist on box 176? C0 needs them; battery JSONs only reference XA ckpts.
3. Actual wall-clock of the XA-Raw-lf run (for cost calibration of G3–G5) — `run.log` not synced locally.
4. Are `-lf` configs for the other three arms already staged on box, or generated ad hoc? (Recipe verified: triton cfg + `file_class_list [1,1,1,1,0]`.)
5. EXP4 sink stats (max-weight 0.52, token-50 444/512, entropy) — which eval produced them? Synced JSON lacks the fields (audit Q4).

<!-- SOURCE-BODY-END -->
