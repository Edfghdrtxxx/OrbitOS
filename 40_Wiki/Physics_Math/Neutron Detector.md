---
area: "[[Physics]]"
tags: [nuclear-physics, detector, experimental]
created: 2026-03-19
last_reviewed:
next_review: 2026-03-19
review_interval: 0
---
# Neutron Detector

## Schematics

![[Neutron_Detector_cross_section.png]]
*Comparison of n-C (total and inelastic) and n-p (total) cross sections as a function of neutron kinetic energy (1–1000 MeV). The n-p cross section dominates at low energies and decreases monotonically, while n-C shows resonance structures and distinct thresholds.*

![[Neutron_Detector_reaction_channels.png]]
*Breakdown of individual $^{12}$C reaction channels — inelastic, $(n,np)$, $(n,2n)$, $(n,\gamma)$, $(n,3\alpha)$, $(n,\alpha)$, and $H(n,p)$ — as a function of neutron kinetic energy. Each channel has a distinct threshold and energy dependence.*

## Definition

A neutron detector is a device that detects neutrons indirectly by exploiting nuclear reactions that produce secondary charged particles, since neutrons carry no electric charge and cannot ionize matter directly. The detection strategy depends critically on neutron energy: fast neutrons ($E_n \gtrsim 100$ keV) are typically detected via proton recoil from n-p elastic scattering in hydrogen-rich materials, while thermal neutrons ($E_n \sim 25$ meV) are detected via capture reactions with high-cross-section isotopes such as $^3$He, $^6$Li, or $^{10}$B.

## Key Points

- **Indirect detection principle:** Neutrons must undergo a nuclear reaction to produce detectable charged particles; the choice of converter material and reaction determines sensitivity, efficiency, and energy range
- **Fast neutron detection:** Organic scintillators (containing H and C) detect fast neutrons primarily through n-p elastic scattering; the recoil proton energy spectrum encodes the incident neutron energy and can be unfolded for spectroscopy
- **Thermal neutron detection:** High-cross-section capture reactions — $^3$He$(n,p)^3$H ($\sigma = 5330$ b), $^{10}$B$(n,\alpha)^7$Li ($\sigma = 3840$ b), $^6$Li$(n,\alpha)^3$H ($\sigma = 940$ b) — are preferred for slow neutrons
- **Role of carbon in organic scintillators:** $^{12}$C is a structural component of the scintillator molecule; its cross section contributes additional reaction channels at higher energies (inelastic threshold $\sim$4.4 MeV), but recoil carbon nuclei are heavily quenched and produce less scintillation light per MeV than recoil protons
- **[[Neutron Moderation|Moderation]]:** To detect fast neutrons with thermal-sensitive detectors, a moderator (e.g. polyethylene) thermalizes the neutrons first, at the cost of losing energy information

## Examples

- **Organic liquid scintillator** (e.g. BC-501A): Uses n-p scattering for fast neutron spectroscopy; pulse shape discrimination separates neutron and gamma events via fast-to-slow [[Scintillation Detector|scintillation]] component ratios
- **$^3$He proportional counter:** The $^3$He$(n,p)^3$H reaction (Q = 764 keV) provides extremely high thermal neutron efficiency; used as the "gold standard" thermal detector in neutron monitors and portal systems

## Related Concepts

- [[Scintillation Detector]]
- [[Neutron Capture Cross Section]]
- [[Ionisation Chamber]]
- [[Time-of-Flight]]
- [[Photomultiplier Tube]]
- [[Energy Resolution]]
- [[Compton Scattering]]
- [[ΔE-E Method]]
- [[Proton Recoil]]
- [[Organic Scintillator]]
- [[Neutron Moderation]]

## References

- Knoll, G. F. *Radiation Detection and Measurement* (4th ed., Wiley, 2010), Chapters 14–15
- Leo, W. R. *Techniques for Nuclear and Particle Physics Experiments* (2nd ed., Springer, 1994), Chapter 2