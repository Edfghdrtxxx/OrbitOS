<!-- Verbatim source section; overview: [[../fm-ar-hc-vs-raw]] -->
<!-- SOURCE-BODY-START -->
## 8. Open questions for the lead (non-blocking)

1. Did `d5_chain.sh` (permuted_cls/mean_cls × 6) land? It is the sole discriminator for "load-bearing" vs "OOD artifact" on Raw zero_cls; every synced battery JSON predates those conditions.
2. Is the corrected label-fix battery JSON synced yet? Local `EXP3-XA-Raw-100k-label-fix-seed42/.../counterfactual_battery.json` may predate the positional-label fix (flagged in fm-ar-seed-evidence §8).
3. For `swap_physics`: confirm the eval loader iterates val events in `data_split.json` order so index i in Raw and HC datasets is the same physical event (audit verified file-level alignment; the split indices are byte-identical across arms for s42).
<!-- SOURCE-BODY-END -->
