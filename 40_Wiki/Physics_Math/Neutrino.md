---
area: "[[Physics]]"
tags: [particle-physics, fermion, lepton]
created: 2026-03-31
last_reviewed:
next_review: 2026-03-31
review_interval: 0
---
# Neutrino

## Schematics

![[Neutrino_first_event.jpg|500]]
> The first observation of a neutrino interaction in a hydrogen bubble chamber (1970). An invisible neutrino collides with a proton, producing a muon and a [[Pi Meson|pion]]. (Public domain, Wikimedia Commons)

![[Neutrino_coherent_elastic_scattering.png|350]]
> Feynman diagram of coherent elastic neutrino-nucleus scattering via $Z^0$ boson exchange. The nucleus recoils as a whole, a process first observed by the COHERENT experiment in 2017. (CC BY 4.0, Wikimedia Commons)

## Definition

A **neutrino** ($\nu$) is a fundamental spin-$\frac{1}{2}$ [[fermion]] belonging to the [[lepton]] family of the Standard Model. Neutrinos carry no electric charge and interact only through the **weak nuclear force** and **gravity**, making them extraordinarily difficult to detect. They are the second most abundant particle in the universe after photons.

There are three known **flavors**, each paired with a charged lepton:

| Flavor | Symbol | Charged partner |
| ------ | ------ | --------------- |
| Electron neutrino | $\nu_e$ | $e^-$ |
| Muon neutrino | $\nu_\mu$ | $\mu^-$ |
| Tau neutrino | $\nu_\tau$ | $\tau^-$ |

Each flavor also has an **antineutrino** counterpart ($\bar{\nu}_e$, $\bar{\nu}_\mu$, $\bar{\nu}_\tau$).

## Key Points

### Neutrino Oscillations

- Neutrinos **change flavor** as they propagate -- a phenomenon called **neutrino oscillation**.
- This occurs because the three flavor eigenstates ($\nu_e, \nu_\mu, \nu_\tau$) are quantum [[Superposition|superpositions]] of three mass eigenstates ($\nu_1, \nu_2, \nu_3$):

$$|\nu_\alpha\rangle = \sum_{i=1}^{3} U_{\alpha i}^* \, |\nu_i\rangle$$

where $U$ is the **PMNS matrix** (Pontecorvo--Maki--Nakagawa--Sakata), the leptonic analogue of the CKM matrix in the quark sector.

- The PMNS matrix is parameterized by three mixing angles ($\theta_{12}$, $\theta_{23}$, $\theta_{13}$) and one CP-violating phase ($\delta_{CP}$). If neutrinos are Majorana particles, two additional phases appear.

- The oscillation probability between flavors $\alpha$ and $\beta$ in vacuum (two-flavor approximation) is:

$$P(\nu_\alpha \to \nu_\beta) = \sin^2(2\theta) \sin^2\!\left(\frac{\Delta m^2 L}{4E}\right)$$

where $\Delta m^2$ is the squared-mass difference, $L$ is the propagation distance, and $E$ is the neutrino energy.

- Oscillation experiments have measured two independent squared-mass splittings:
  - $\Delta m_{21}^2 \approx 7.5 \times 10^{-5} \; \text{eV}^2$ (solar)
  - $|\Delta m_{32}^2| \approx 2.5 \times 10^{-3} \; \text{eV}^2$ (atmospheric)

### Mass Hierarchy Problem

- Oscillation experiments determine $\Delta m^2$ values but not the **absolute mass scale**. The sum of neutrino masses is constrained cosmologically: $\sum m_\nu \lesssim 0.12 \; \text{eV}$ (Planck 2018).
- The **mass ordering** (hierarchy) remains an open question:
  - **Normal ordering (NO):** $m_1 < m_2 \ll m_3$
  - **Inverted ordering (IO):** $m_3 \ll m_1 < m_2$
- Current experiments (JUNO, DUNE, Hyper-Kamiokande) aim to resolve this.

### Dirac vs. Majorana Nature

- If neutrinos are **Dirac** particles, $\nu \neq \bar{\nu}$ and lepton number is conserved.
- If neutrinos are **Majorana** particles, $\nu = \bar{\nu}$ and lepton number is violated by 2 units.
- The experimental signature is [[Neutrinoless Double-Beta Decay]] ($0\nu\beta\beta$): observation would prove the Majorana nature and constrain the effective Majorana mass $\langle m_{\beta\beta} \rangle$.

### Sources and Detection

- **Key sources:** solar ($\nu_e$ from pp chain / CNO cycle), atmospheric (cosmic ray showers), reactor ($\bar{\nu}_e$), supernova (all flavors; SN 1987A was the first extrasolar detection), and accelerator beams ($\nu_\mu / \bar{\nu}_\mu$ at Fermilab, J-PARC)
- **Detection methods** exploit the rare weak interactions in massive targets: water Cherenkov detectors (Super-Kamiokande, IceCube), [[Scintillation Detector|liquid scintillator]] detectors (Borexino, JUNO), radiochemical experiments (Homestake, GALLEX/SAGE), and liquid argon [[Time Projection Chamber|TPCs]] (DUNE, MicroBooNE)

## Examples

1. **Solar neutrino problem:** Ray Davis's Homestake experiment (1968) detected only $\sim\frac{1}{3}$ of the predicted solar $\nu_e$ flux. This deficit was resolved by the SNO experiment (2001), which showed that $\nu_e$ oscillate into $\nu_\mu$ and $\nu_\tau$ en route to Earth (MSW matter effect in the Sun).

2. **Atmospheric neutrino anomaly:** Super-Kamiokande (1998) observed a zenith-angle-dependent deficit of $\nu_\mu$ from cosmic ray showers, providing the first definitive evidence of neutrino oscillations. This earned the 2015 Nobel Prize in Physics (Kajita and McDonald).

## Related Concepts

- [[Neutrinoless Double-Beta Decay]] -- Majorana nature test
- [[Radioactive Decay]] -- beta decay produces neutrinos
- [[Superposition]] -- flavor states as superpositions of mass states
- [[Hilbert Space]] -- quantum state space for oscillation formalism
- [[Probability Amplitude]] -- oscillation amplitudes
- [[Eigenvalues and Eigenvectors]] -- mass eigenstates vs. flavor eigenstates
- [[Quantum Numbers]] -- lepton number, flavor quantum numbers
- [[Mass Defect]] -- nuclear binding energy context
- [[Half-Life]] -- nuclear decay timescales
- [[Scintillation Detector]] -- neutrino detection technology
- [[Time Projection Chamber]] -- liquid argon TPC detectors
- [[Nuclear Shell Model]] -- nuclear structure context
- [[r-process Nucleosynthesis]] -- neutrino-driven nucleosynthesis
- [[p-process]] -- explosive nucleosynthesis
- [[Pi Meson]] -- produced in neutrino interactions

## References

- Particle Data Group, "Neutrino Masses, Mixing, and Oscillations," *Review of Particle Physics* (2024). [PDG Neutrino Review](https://pdg.lbl.gov/2024/reviews/rpp2024-rev-neutrino-mixing.pdf)
- Pontecorvo, B. "Mesonium and Anti-mesonium." *Sov. Phys. JETP* 6, 429 (1957).
- Maki, Z., Nakagawa, M., Sakata, S. "Remarks on the Unified Model of Elementary Particles." *Prog. Theor. Phys.* 28, 870 (1962).
- Fukuda, Y. et al. (Super-Kamiokande). "Evidence for Oscillation of Atmospheric Neutrinos." *Phys. Rev. Lett.* 81, 1562 (1998).
- Ahmad, Q.R. et al. (SNO). "Direct Evidence for Neutrino Flavor Transformation from Neutral-Current Interactions." *Phys. Rev. Lett.* 89, 011301 (2002).
- An, F.P. et al. (Daya Bay). "Observation of Electron-Antineutrino Disappearance at Daya Bay." *Phys. Rev. Lett.* 108, 171803 (2012).
- Zuber, K. *Neutrino Physics*. 2nd ed. CRC Press (2011).
