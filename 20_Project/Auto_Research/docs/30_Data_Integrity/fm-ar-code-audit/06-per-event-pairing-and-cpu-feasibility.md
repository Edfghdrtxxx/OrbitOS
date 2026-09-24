<!-- Verbatim source section; overview: [[../fm-ar-code-audit]] -->
<!-- SOURCE-BODY-START -->
## Per-event pairing and CPU feasibility

- Only `EXP3-ResNet-HC-100k-seed42/.../predictions.csv` exists. It has `event_index,true_label,pred_label,confidence`; it is not a paired-stat dump and has no per-class probabilities.
- No EXP3 `best_model.pth` exists locally. The only `.pth` files under `runs/` belong to EXP8.
- No local EXP3 HDF5 image dataset is present for re-inference. Therefore CPU inference on a fixed validation subset cannot be run locally, and paired bootstrap/McNemar between EXP3 arms cannot be computed from the surviving artifacts.
- The counterfactual JSONs are 2,000-event val subsets, not paired arm prediction dumps.

<!-- SOURCE-BODY-END -->
