---
area: "[[Physics]]"
tags: [accelerator-physics, nuclear-physics]
aliases: [ion source]
created: 2026-03-15
last_reviewed:
next_review: 2026-03-15
review_interval: 0
---
# Ion Source

## Definition

An ion source is a device that produces charged particles (ions) for injection into a particle accelerator. It determines the beam species available, the achievable charge state (and therefore maximum energy), and the beam intensity that propagates through the entire accelerator chain.

## Key Points

- **ECR (Electron Cyclotron Resonance) sources** are the workhorse for modern heavy-ion facilities. Microwaves at the electron [[Cyclotron]] frequency ($\omega_c = eB/m_e$) heat plasma electrons to tens of keV, which then strip neutral atoms through stepwise ionization. Minimum-B magnetic confinement (axial mirror + radial sextupole) traps ions long enough (~10 ms) for high charge states to build up. See [[Superconducting Electron Cyclotron Resonance]].
- **Material feeding methods:** Gas injection (for H, noble gases, N, O), resistive or high-temperature ovens (Ca, Fe, Sn, U), sputtering (Ni, Au, Pb), and MIVOC (Metal Ions from Volatile Compounds, for transition metals). The **gas mixing effect** -- adding a lighter gas like helium or oxygen -- improves charge state distributions of the heavier species.
- **2.45 GHz microwave sources** produce high-current, low-charge-state beams (e.g., up to 100 emA of H$^+$) for medical isotope production and accelerator-driven systems.
- **Laser ion sources** generate highly charged ions in intense, short pulses (ns timescale) via the Direct Plasma Injection Scheme (DPIS), suitable for pulsed linac injection.
- **Negative-ion sources** produce H$^-$, O$^-$, and similar species for charge-exchange injection into synchrotrons or for applications such as proton therapy.
- **Charge state selection** is performed by a dipole analyzing magnet downstream of the source, selecting ions with the desired $q/A$ ratio through a slit. Because maximum [[Cyclotron]] energy scales as $E/A = K(q/A)^2$, higher charge states enable higher beam energies.

## Examples

- **SECRAL** at [[HIRFL]]: A third-generation fully superconducting ECR source (18--28 GHz) that holds world records for several ion species, including 202 e$\mu$A of $^{238}\text{U}^{33+}$
- Compact 2.45 GHz sources producing 10--30 MeV proton beams for PET radioisotope synthesis in medical [[Cyclotron]]s

## Related Concepts

- [[Superconducting Electron Cyclotron Resonance]]
- [[HIRFL]]
- [[Cyclotron]]
- [[Synchrotron]]
- [[Magnetic Rigidity]]

## References

- H.W. Zhao et al., "Intense beam production with SECRAL," *Rev. Sci. Instrum.* **81**, 02A202 (2010)
- H.W. Zhao et al., "SECRAL-II commissioning," *Rev. Sci. Instrum.* (2018)
- R. Geller, *Electron Cyclotron Resonance Ion Sources and ECR Plasmas* (IOP Publishing, 1996)