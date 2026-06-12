---
area: "[[Physics]]"
tags:
  - nuclear-physics
  - particle-detection
  - experimental-methods
  - review/physics
created: 2026-04-22
---
# ΔE-Bρ-TOF Identification

## Schematics

![[DeltaE-Brho-TOF-Identification_method-schematic.excalidraw|1000]]
*Measurement chain. A primary beam hits a thin production target; the resulting cocktail of fragments is bent through a dipole magnet. At the **dispersive focal plane**, a [[PPAC]] records horizontal position (fixing $B\rho = p/q$) and [[Scintillation Detector|Scint₁]] starts the TOF clock. At the **achromatic focal plane**, **Scint₂** stops the clock (giving $\beta = L/(c\,t_{\text{TOF}})$) and a [[MUSIC Detector|MUSIC]] ionisation chamber measures the energy loss $\Delta E$. Combining $B\rho$ with $\beta$ yields $A/Z$; combining $\Delta E$ with $\beta$ yields $Z$ — fully-separated isotopes appear as clusters on the final 2D $Z$-vs-$A/Z$ PID plot.*

*The two figures below illustrate the Bethe–Bloch physics that governs the $\Delta E$ component of the method above — not the full PID chain. Open-license schematics of the complete ΔE-Bρ-TOF apparatus live in journal-copyrighted papers, so the Commons figures here serve only to visualise the underlying stopping-power dependence that makes the $Z$ extraction possible.*

![[DeltaE-Brho-TOF-Identification_principle.png|1065]]
*Electronic stopping power of aluminium for protons: pure [[Bethe-Bloch Formula|Bethe]] prediction (red), Bethe with corrections (blue), and experimental data (circles). The $\Delta E$ stage of ΔE-Bρ-TOF exploits exactly this $Z^2/\beta^2$ dependence to extract $Z$ once $\beta$ is fixed by TOF. (CC BY-SA 3.0, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:StoppingHinAlBethe.png))*

![[DeltaE-Brho-TOF-Identification_graph.png|1067]]
*Mean excitation potential $I/Z$ vs atomic number $Z$ from ICRU Report 49 — the material-dependent parameter entering the logarithm of the [[Bethe-Bloch Formula|Bethe–Bloch]] expression and therefore the $\Delta E$ calibration of the ionisation chamber. (Public domain, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mean_Excitation_Potential.png))*

## Definition

The ΔE-Bρ-TOF method is an event-by-event [[Particle Identification]] technique used at in-flight [[Fragment Separator|fragment separators]]. It combines three independent measurements — energy loss ($\Delta E$) in an ionisation chamber, [[Magnetic Rigidity]] ($B\rho$) from a position measurement at a dispersive focal plane, and [[Time-of-Flight]] (TOF) between two thin scintillators — to reconstruct the atomic number $Z$ and the mass-to-charge ratio $A/Z$ of every transmitted ion.

## Key Points

- **Bρ gives momentum per charge:** from the bending radius in a dipole magnet, $B\rho = p/q = A u \beta\gamma c / (Ze)$; in practice $B\rho$ is derived from the ion's horizontal position at a dispersive focal plane (typically via [[PPAC|PPACs]]) combined with the nominal setting
- **TOF gives velocity:** $\beta = L / (c\,t_{\text{TOF}})$ measured between two [[Scintillation Detector|plastic scintillators]] along the flight path; typical path lengths are 10–50 m with timing resolution $\sigma_t \sim 30{-}100$ ps
- **Bρ and TOF together yield $A/Z$:** rearranging, $A/Z = eB\rho / (u c \beta\gamma)$ — for fully stripped ions this equals $A/Z$
- **ΔE yields Z independently:** energy loss in a [[MUSIC Detector]] or [[Ionisation Chamber]] follows the [[Bethe-Bloch Formula]], $\Delta E \propto Z^2 f(\beta)$, with the $\beta$ dependence removed using the TOF measurement
- **PID plot:** the final 2D histogram is $Z$ vs $A/Z$; fully-separated isotopes appear as well-localised clusters, in contrast to the $Z^2 A^\mu$ parameter of the [[ΔE-E Method]]
- **Complementary to ΔE-E:** ΔE-Bρ-TOF is the dominant technique for relativistic [[Projectile Fragmentation|fragmentation]] and [[In-Flight Fission|in-flight fission]] cocktail beams, whereas [[ΔE-E Method]] dominates at lower energies where particles stop in the detector

## Examples

- **[[BigRIPS]] at [[RIKEN Nishina Center for Accelerator-Based Science (RNC)|RIKEN]]:** $B\rho$ from PPACs at F3/F5, TOF from plastic scintillators at F3–F7 (≈47 m flight path), $\Delta E$ from the F7 MUSIC — the standard PID chain for rare-isotope experiments
- **[[RIBLL]] at [[HIRFL]]:** analogous layout with [[PPAC|PPACs]] + plastic scintillators + ionisation chamber, delivering the [[Secondary Beam]] cocktail used in the [[MUSIC Detector|MUSIC]]-based MATE-Automation thesis experiments

## Related Concepts

- [[Particle Identification]]
- [[PID]]
- [[ΔE-E Method]]
- [[Magnetic Rigidity]]
- [[Time-of-Flight]]
- [[Bethe-Bloch Formula]]
- [[dE-dx]]
- [[Fragment Separator]]
- [[BigRIPS]]
- [[RIBLL]]
- [[MUSIC Detector]]
- [[Ionisation Chamber]]
- [[PPAC]]
- [[Scintillation Detector]]
- [[Projectile Fragmentation]]
- [[Radioactive Isotope Beam]]

## References

- T. Kubo, "In-flight RI beam separator BigRIPS at RIKEN," *Nucl. Instrum. Methods B* **204** (2003) 97
- N. Fukuda et al., "Identification and separation of radioactive isotope beams by the BigRIPS separator at the RIKEN RI Beam Factory," *Nucl. Instrum. Methods B* **317** (2013) 323
