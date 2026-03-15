---
area: "[[Physics]]"
tags: [accelerator-physics, nuclear-physics, IMP]
aliases: [Cooler Storage Ring, HIRFL-CSR]
created: 2026-03-15
last_reviewed:
next_review: 2026-03-15
review_interval: 0
---
# CSR

## Definition

The CSR (Cooler Storage Ring) is a [[Synchrotron]] complex at [[HIRFL]], consisting of two rings -- CSRm (main ring) and CSRe (experimental ring) -- connected by the [[RIBLL|RIBLL2]] [[Fragment Separator]]. It extends HIRFL's energy reach from the cyclotron regime into hundreds of MeV/u to ~1 GeV/u, enabling high-energy [[Projectile Fragmentation]], precision mass measurements, and in-ring nuclear reaction experiments (Xia et al., 2002).

## Key Points

- **CSRm (main ring):** Circumference 161 m, maximum [[Magnetic Rigidity|$B\rho$]] = 12.05 T$\cdot$m. Receives beam from SSC at 7--25 MeV/u and accelerates to ~1 GeV/u (light ions) or ~500 MeV/u (uranium). Uses DC magnetized electron cooling at injection energy for phase-space compression, accumulating up to $\sim 1.8 \times 10^{10}$ particles ($^{12}\text{C}^{6+}$).
- **Extraction modes:** Fast extraction (single-turn kicker) for [[Radioactive Isotope Beam]] production via fragmentation; slow extraction (third-order resonance with RF knockout) for quasi-continuous spill delivery to fixed-target terminals. An FPGA-based feedback system mitigates 50 Hz power-supply ripple for flat spill structure (Mao et al., 2013).
- **CSRe (experimental ring):** Circumference 128.8 m, dedicated storage ring for precision experiments. Supports Isochronous Mass Spectrometry (IMS) for exotic nuclides with half-lives as short as tens of microseconds, and Schottky Mass Spectrometry (SMS) for longer-lived species with very high mass precision.
- **In-ring reactions:** Silicon strip detectors and an internal gas-jet target in CSRe enable direct nuclear reaction measurements on stored beams (e.g., proton elastic scattering on $^{58}\text{Ni}$ and $^{78}\text{Kr}$).
- **[[Spill Gate]] and duty cycle:** Slow extraction produces a ~200 ms spill in a ~1 s cycle (~20% duty cycle), with instantaneous rates ~5$\times$ the average rate during spill-on periods.

## Examples

- $B\rho$-defined IMS at CSRe uses two ToF detectors to simultaneously measure velocity and revolution time, achieving mass resolving power $\sim 10^5$ (Tu et al., 2011; Xu et al., 2024)
- Combined IMS + SMS at CSRe measured half-lives of fully ionized $^{49}\text{Cr}^{24+}$ and $^{53}\text{Fe}^{26+}$ (Zeng et al., 2018)

## Related Concepts

- [[HIRFL]]
- [[Synchrotron]]
- [[RIBLL]]
- [[Spill Gate]]
- [[Magnetic Rigidity]]
- [[Radioactive Isotope Beam]]
- [[Projectile Fragmentation]]

## References

- J.W. Xia et al., "The heavy ion cooler-storage-ring project (HIRFL-CSR)," *NIM A* **488**, 11 (2002)
- X.L. Tu et al., "Precision isochronous mass measurements at CSRe," *NIM A* **654**, 213 (2011)
- X. Xu et al., "$B\rho$-defined isochronous mass spectrometry," *Nucl. Sci. Tech.* **35**, 203 (2024)
- R.S. Mao et al., "Feedback of slow extraction in CSRm," *NIM A* **723**, 99 (2013)