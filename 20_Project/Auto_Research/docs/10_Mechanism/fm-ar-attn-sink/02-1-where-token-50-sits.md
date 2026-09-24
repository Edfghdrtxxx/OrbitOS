<!-- Verbatim source section; overview: [[../fm-ar-attn-sink]] -->
<!-- SOURCE-BODY-START -->
## 1. Where token 50 sits

Token indexing (`scripts/analysis/exp4_attention_metrics.py:222-235`, `src/models/cross_attention.py:151`): the ResNet layer-4 map `(B,512,10,6)` is flattened row-major, `token = y_tok*6 + z_tok`, each token = an 8×8-pad block of the `(80,48)` image (`TOKEN_STRIDE=8`).

- **Token 50 = (y_tok=8, z_tok=2)** → image pads `y∈[64,72)`, `z∈[16,24)`.
- Physical extent (`convert_trk_server_v2.py:150-161`, `Y_MIN=-146.5`, `W_PAD≈3.66 mm`, `H_ROW≈6.16 mm`): `y∈[87.9, 117.2] mm`, `z∈[98.6, 147.8] mm` — the +y edge of the pad plane, mid-z.
- **Not the beam hole.** The hole mask is `(z≥46) & (28≤y≤51)` (`convert_trk_server_v2.py:261-262`), i.e. tokens `(y_tok∈{3..6}, z_tok=5)` = tokens 23,29,35,41,47 and `(y_tok∈{3..6}, z_tok=4)` partially — nowhere near token 50.
- **Not padding in the image sense** — the analytic pad model covers the full 80×48 rectangle, so pads there *can* receive hits. But it is edge-adjacent (y_tok=8 of 0–9) and empirically almost never on a track: the EXP4 eval found only **2.1% of argmax tokens on the occupied track while 87% of argmaxes land on token 50** (`20_doc/Experiment Recordings/2026-09-23_exp3-xa-raw-cell.md:135`). The audit figure `20_doc/audits/2026-09-23_raw-hc-examples.png` shows the same: at z 16–24 the HC tracks sit at y≲60; the y 64–72 block is black.
- **Verdict:** token 50 is a *low-information* patch, not a structurally dead one. Whether it is *systematically* emptier than other edge blocks is unmeasured — cheap check C below settles it.

<!-- SOURCE-BODY-END -->
