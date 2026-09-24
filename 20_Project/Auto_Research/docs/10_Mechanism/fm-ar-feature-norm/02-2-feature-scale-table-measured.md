<!-- Verbatim source section; overview: [[../fm-ar-feature-norm]] -->
<!-- SOURCE-BODY-START -->
## 2. Feature scale table (measured)

Source: `scripts/plotting/paper_fig_data/physics_feature_distributions.npz` (2000 events/species, **Garfield_HC** — the only local artifact with real features; Raw H5s exist only on box 176). Columns `[Iyy, Izz, Iyz, total_mass]`, float32.

| feature | p (med, p1–p99) | d | t | ³He | ⁴He | pooled approx range |
|---|---|---|---|---|---|---|
| Iyy | 1.4 (0.08–13.9) | 2.4 (0.08–30.7) | 3.0 (0.07–55.7) | 5.3 (0.09–138.6) | 8.3 (0.08–148.2) | 0 – 212 |
| Izz | 167.4 (137.7–208.3) | 168.7 | 169.9 | 172.4 | 173.4 | 80 – 245 |
| Iyz | 0.3 (−35.9–36.8) | 0.3 (−50.6–53.3) | 0.2 (−65.5–67.0) | −0.1 (−77.3–77.3) | 0.2 (−96.2–91.7) | −128 – 143 |
| total_mass | 3.8 (2.5–6.6) | 3.9 | 3.8 | 3.4 | 3.3 | 2.2 – 8.4 |

- `Izz` is ~**170 ± 19 for every species** — a near-constant ~170 DC term with ~11% relative variation. It is the single largest number entering the network anywhere (image inputs are z-scored to O(1)).
- Feature L2 norm of a typical event ≈ √(5² + 170² + 0² + 4²) ≈ **170**, vs the attended 64-d vector whose elements are O(0.1–1) (bounded by |V| through softmax; empirically the attended contribution to hidden pre-activation is ~0.3–0.6 rms/unit, §3). In the concatenated 68-d head input, **>99.9% of the L2 norm is the 4 physics dims**.
- Raw-arm feature ranges: not locally measurable (no Raw H5 on this Mac). Recorded facts only: same code path, same units; noise inflates `total_mass` (CV 3% — compressed toward a common value) and decorrelates moments from HC (r ≤ 0.69). Expect Izz to remain O(10²) — the DC-offset analysis below transfers to Raw unchanged.

<!-- SOURCE-BODY-END -->
