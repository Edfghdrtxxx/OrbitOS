<!-- Verbatim source section; overview: [[../fm-ar-referee]] -->
<!-- SOURCE-BODY-START -->
## B.8 Commands used (reproduction)

```bash
# inventory:   ls runs/EXP3-*/*/ ; find runs -name '*.pth'  → EXP8 only
# metrics:     python3 json.load on every runs/EXP3-*/*/metrics.json (table §B.3)
# splits:      json.load both s42 data_split.json → val_indices byte-identical (n=25000)
# stats:       Wilson/t CIs, unpaired z, McNemar bound χ²≥nΔ², balanced acc from
#              confusion matrices — plain python3, no deps (script in §B.3 logic)
# configs:     yaml.safe_load all 12 config.yaml → identical recipe, fusion_type +
#              hdf5_files + file_class_list the only differences
# battery:     cat all 6 counterfactual_battery.json → 5 conditions each, no
#              permuted_cls/mean_cls/event_indices/script-version fields
# torch:       python3 -c "import torch" → ModuleNotFoundError
```

<!-- SOURCE-BODY-END -->
