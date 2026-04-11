---
area: "[[Physics]]"
tags: [gamma-spectroscopy, nuclear-physics, in-beam]
created: 2026-04-11
last_reviewed:
next_review: 2026-04-11
review_interval: 0
---
# Doppler Broadening
> [!important] All math expressions, equations, and formulas **must** use LaTeX notation (`$...$` for inline, `$$...$$` for display blocks).

## Schematics

![[Doppler_Broadening_principle.png]]
*Broadened (red dashed) versus unbroadened (black) emission line — the core effect of Doppler broadening on a spectral peak. (CC BY-SA 4.0, Wikimedia Commons)*

![[Doppler_Broadening_diagram.svg]]
*Doppler-effect wavefront geometry: a source moving relative to a stationary observer compresses wavefronts ahead and stretches them behind, the kinematic origin of the per-event energy shift. (CC BY-SA 3.0, Wikimedia Commons)*

![[Doppler_Broadening_schematic.svg]]
*Gaussian versus Lorentzian line shapes — Doppler broadening contributes a Gaussian component while natural (lifetime) broadening is Lorentzian; together they form a Voigt profile. (CC0, Wikimedia Commons)*

![[Doppler_Broadening_graph.svg]]
*Decomposition of an observed spectral peak into underlying component lines — the standard fitting approach when Doppler broadening obscures closely-spaced transitions. (CC0, Wikimedia Commons)*

## Definition

**Doppler broadening** is the widening of an observed [[Gamma Ray]] (or photon) peak caused by the distribution of velocities and emission angles of the emitting nuclei relative to the detector. Each photon's observed energy shifts event-by-event according to the relativistic Doppler formula
$$E_\gamma^{\text{obs}} = E_\gamma^{\text{rest}}\,\frac{\sqrt{1-\beta^2}}{1-\beta\cos\theta},$$
so a monoenergetic transition appears as a broadened line whose width encodes the recoil kinematics and detector geometry.

## Key Points

- **Dominant in in-beam experiments.** When recoiling nuclei emit while in flight (typical $\beta \sim 0.1$–$0.6$ at fragmentation facilities), uncorrected peaks can be 10–100× wider than the intrinsic [[HPGe Detector]] [[Energy Resolution]].
- **Width budget.** The observed FWHM adds (in quadrature with the intrinsic detector response and [[Compton Scattering]] tails) contributions from (a) the velocity spread $\Delta\beta$, (b) the finite detector opening angle $\Delta\theta$, and (c) uncertainty in the recoil direction used for correction: $\Delta E/E \approx \beta\sin\theta\,\Delta\theta + (\cos\theta - \beta)/(1-\beta\cos\theta)^2\cdot\Delta\beta$.
- **Doppler correction.** Event-by-event transformation back to the emitter rest frame, using a recoil tracking detector (magnetic spectrometer, TPC) for $\vec{\beta}$ and a segmented/position-sensitive Ge tracker for $\theta$. Requires a [[Lorentz Boost|Lorentz-boost]] back to the nucleus's rest frame.
- **Line shape is a physics probe, not just noise.** The residual broadened/shifted shape is how DSAM and RDDS extract picosecond–nanosecond excited-state lifetimes (see Examples).
- **Gaussian component.** Thermal/kinematic velocity distributions give a Gaussian profile; combined with the Lorentzian natural line shape of a finite [[Half-Life|lifetime]] the total is a **Voigt** profile.

## Examples

- **In-beam spectroscopy at RIBF.** A 1 MeV gamma ray emitted by a fragment at $\beta \approx 0.6$ in a single non-segmented HPGe crystal appears as a ~30 keV FWHM peak — unusable for structure work. Tracking arrays like **AGATA** and **GRETINA** recover ~3 keV FWHM by pinpointing the first interaction point and applying event-by-event Doppler correction.
- **DSAM (Doppler Shift Attenuation Method).** The recoil slows inside a thick stopper foil while the excited state decays; the resulting asymmetric, shifted line shape is fit against [[Stopping Power|stopping-power]] simulations to extract lifetimes in the sub-ps to ~1 ps range.
- **Recoil Distance / Plunger (RDDS).** Two thin foils at a variable separation produce a clean doublet — one peak shifted (decay in flight), one unshifted (decay after stopping). The shifted/unshifted intensity ratio versus foil distance yields lifetimes in the 1–1000 ps range, a key observable for [[Coulomb Excitation]] and [[Transfer Reactions|transfer-reaction]] studies of nuclear structure.
- **Thermal Doppler broadening of neutron resonances.** In reactor/cross-section work, the thermal motion of target nuclei smears narrow resonances (treated via the ψ/χ formalism) — conceptually identical to the gamma-ray case but with the target nuclei, not the emitters, carrying the velocity distribution.

## Related Concepts

- [[Gamma Ray]]
- [[HPGe Detector]]
- [[Energy Resolution]]
- [[Compton Scattering]]
- [[Nuclear Transition]]
- [[Inverse Kinematics]]
- [[Half-Life]]
- [[Stopping Power]]
- [[Coulomb Excitation]]
- [[Transfer Reactions]]
- [[Spectral Lines]]
- [[Relativity theory]]
- [[Lorentz Boost]]
- [[DSAM]]
- [[RDDS Plunger]]
- [[AGATA]]
- [[GRETINA]]
- [[Voigt Profile]]
- [[In-Beam Gamma Spectroscopy]]

## References

- K. S. Krane, *Introductory Nuclear Physics* (Wiley, 1988) — Ch. 10, gamma-ray spectroscopy and line-shape analysis.
- G. F. Knoll, *Radiation Detection and Measurement*, 4th ed. (Wiley, 2010) — Ch. 12, HPGe resolution and line broadening contributions.
- A. Dewald, O. Möller, P. Petkov, "Developing the Recoil Distance Doppler-Shift technique towards a versatile tool for lifetime measurements of excited nuclear states", *Prog. Part. Nucl. Phys.* **67**, 786 (2012).
- Wikipedia: [Doppler broadening](https://en.wikipedia.org/wiki/Doppler_broadening).
