---
area: "[[Physics]]"
tags:
  - nuclear-physics
  - particle-detection
  - experimental-methods
created: 2026-04-22
last_reviewed:
next_review: 2026-04-22
review_interval: 0
---
# ΔE-Bρ-TOF Identification

## Schematics

*No open-license schematic of the ΔE-Bρ-TOF technique itself (fragment-separator layout or Z vs A/Q scatter plot) was available on Wikimedia Commons — such figures live in journal-copyrighted papers. The images below illustrate the Bethe–Bloch physics that underlies the ΔE component of the method, not the full PID chain.*

![[DeltaE-Brho-TOF-Identification_principle.png]]
*Electronic stopping power of aluminium for protons: pure [[Bethe-Bloch Formula|Bethe]] prediction (red), Bethe with corrections (blue), and experimental data (circles). The ΔE measurement in ΔE-Bρ-TOF exploits exactly this $Z^2/\beta^2$ dependence to extract $Z$ once $\beta$ is fixed by TOF. (CC BY-SA 3.0, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:StoppingHinAlBethe.png))*

![[DeltaE-Brho-TOF-Identification_graph.png]]
*Mean excitation potential $I/Z$ vs atomic number $Z$ from ICRU Report 49 — the material-dependent parameter entering the logarithm of the [[Bethe-Bloch Formula|Bethe–Bloch]] expression and therefore the ΔE calibration of the ionisation chamber. (Public domain, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mean_Excitation_Potential.png))*

## Definition

The ΔE-Bρ-TOF method is an event-by-event [[Particle Identification]] technique used at in-flight [[Fragment Separator|fragment separators]]. It combines three independent measurements — energy loss ($\Delta E$) in an ionisation chamber, [[Magnetic Rigidity]] ($B\rho$) from a position measurement at a dispersive focal plane, and [[Time-of-Flight]] (TOF) between two thin scintillators — to reconstruct the atomic number $Z$ and the mass-to-charge ratio $A/Q$ of every transmitted ion.

## Key Points

- **Bρ gives momentum per charge:** from the bending radius in a dipole magnet, $B\rho = p/q = A u \beta\gamma c / (Qe)$; in practice $B\rho$ is derived from the ion's horizontal position at a dispersive focal plane (typically via [[PPAC|PPACs]]) combined with the nominal setting
- **TOF gives velocity:** $\beta = L / (c\,t_{\text{TOF}})$ measured between two [[Scintillation Detector|plastic scintillators]] along the flight path; typical path lengths are 10–50 m with timing resolution $\sigma_t \sim 30{-}100$ ps
- **Bρ and TOF together yield $A/Q$:** rearranging, $A/Q = eB\rho / (u c \beta\gamma)$ — for fully stripped ions this equals $A/Z$
- **ΔE yields Z independently:** energy loss in a [[MUSIC Detector]] or [[Ionisation Chamber]] follows the [[Bethe-Bloch Formula]], $\Delta E \propto Z^2 f(\beta)$, with the $\beta$ dependence removed using the TOF measurement
- **PID plot:** the final 2D histogram is $Z$ vs $A/Q$; fully-separated isotopes appear as well-localised clusters, in contrast to the $Z^2 A^\mu$ parameter of the [[ΔE-E Method]]
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
