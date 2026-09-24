<!-- Verbatim source section; overview: [[../fm-ar-ood-leakage]] -->
<!-- SOURCE-BODY-START -->
## 5. Rejection rules: AUROC per arm

**(a) Leaked vs correctly-routed events within the same unseen channel** (score high ⇒ "leaky"; Mann-Whitney AUROC):

| arm | ch | p_A | maxp | −entropy | rejection_score |
|---|---|---:|---:|---:|---:|
| XA | F | 0.9998 | 0.147 | 0.176 | 0.0003 |
| XA | G | 0.9998 | 0.153 | 0.183 | 0.0003 |
| XA | H | 0.9998 | 0.127 | 0.153 | 0.0004 |
| XA | E | 0.9999 | 0.133 | 0.133 | 0.0011 |
| RN | F/G/H | ≈0.9999 | 0.08 | 0.08 | 0.0003 |

Within a channel, `p_A` trivially identifies the leaks (it *is* the leak criterion); **max-probability and entropy anti-separate** (AUROC 0.08–0.18): leaked events are *more* confident than correctly-routed ones. No threshold on confidence or entropy can remove the leaks without removing the correctly-routed events first.

**(b) Unseen channel vs seen C+D "other" events** (standard open-set detection; matches `metrics.json:ood`):

| arm | ch | rejection_score | entropy | −maxp | p_other | **max\|h\| (penultimate)** |
|---|---|---:|---:|---:|---:|---:|
| XA | E | 0.592 | 0.399 | 0.399 | 0.610 | 0.651 |
| XA | F | 0.487 | 0.500 | 0.503 | 0.499 | — |
| XA | G | 0.475 | 0.511 | 0.514 | 0.488 | — |
| XA | H | 0.509 | 0.481 | 0.483 | 0.520 | — |
| XA | F+G+H | — | — | — | — | **0.903** |
| RN | E | 0.395 | 0.486 | 0.494 | 0.514 | 0.710 |
| RN | F/G/H | 0.29–0.30 | 0.41 | 0.42 | 0.59 | 0.898 (F+G+H) |

- On XA, confidence-based OOD detection of carbons is **at chance** (0.47–0.51). On RN it is **worse than chance** (0.29–0.30): ResNet is *more* confident on unseen carbons than on seen t/³He — textbook softmax overconfidence on OOD (Hendrycks & Gimpel 2017; Nguyen et al. 2015), yet it still routes them correctly.
- **Operating points** (reject if rejection_score > t, t = seen-C+D 95th pct): XA rejects only 35–39% of carbons while sacrificing 5% of seen other-events; RN rejects 7%. At the 99th pct: XA 31–35%, RN 2%. A confidence threshold tuned on seen data cannot catch XA's confident leaks.
- **What does work**: max |h| of the 128-d penultimate (post-physics hidden) separates F+G+H from seen C+D at AUROC ≈ 0.90 on *both* arms — the OOD signal lives in activation magnitude, not in the softmax. This is the ReAct/activation-magnitude family of OOD scores (Sun et al. 2021; Djurisic et al. 2023).

<!-- SOURCE-BODY-END -->
