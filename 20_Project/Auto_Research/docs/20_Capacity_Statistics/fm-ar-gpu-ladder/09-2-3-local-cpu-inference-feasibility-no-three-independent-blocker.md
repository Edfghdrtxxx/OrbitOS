<!-- Verbatim source section; overview: [[../fm-ar-gpu-ladder]] -->
<!-- SOURCE-BODY-START -->
## 2.3 Local CPU inference feasibility — NO (three independent blockers, all verified today)

1. Zero EXP3 checkpoints local (all on box 176). 2. No torch on this Mac (`import torch` → ModuleNotFoundError). 3. No Garfield H5 (~25GB, box-only). **Under an hour locally: impossible.** On box 176 it is proven feasible (~10 min/condition under the 2GB cap; the lead's `predump_chain.sh` is already producing the 12 dumps — do not duplicate).

<!-- SOURCE-BODY-END -->
