---
area: "[[Physics]]"
tags: [experiment, neutrino, particle-physics]
created: 2026-03-31
last_reviewed:
next_review: 2026-03-31
review_interval: 0
---
# T2K

## Schematics

![[T2K_neutrino_beam_production.svg]]
*Muon neutrino beam production at J-PARC: protons strike a graphite target, magnetic horns focus positive pions/kaons into the decay volume, producing a $\nu_\mu$ beam. (CC BY-SA 4.0, Batmann / Wikimedia Commons)*

![[T2K_ND280_detector_scheme.png]]
*Exploded view of the ND280 off-axis near detector, showing TPCs, FGDs, P0D, ECal, SMRD, and the UA1 magnet yoke. (CC BY 4.0, T2K Collaboration, [arXiv:2002.09323](https://arxiv.org/abs/2002.09323))*

![[T2K_ND280_upgrade_scheme.png]]
*Upgraded ND280 inner configuration with two horizontal HA-TPCs and the Super-FGD. (CC BY 4.0, D. Attie et al., [arXiv:1907.07060](https://arxiv.org/abs/1907.07060))*

![[T2K_SuperK_PID.png]]
*Super-Kamiokande $e/\mu$ particle identification: PID discriminator distribution with insets showing electron-like (fuzzy ring) and muon-like (sharp ring) Cherenkov events. (CC BY 4.0, T2K Collaboration, [arXiv:1910.03887](https://arxiv.org/abs/1910.03887))*

## Definition

**T2K** (Tokai to Kamioka) is a long-baseline neutrino oscillation experiment in Japan. A high-intensity muon neutrino ($\nu_\mu$) beam is produced at the J-PARC accelerator complex in Tokai, Ibaraki Prefecture, and directed 295 km westward to the Super-Kamiokande water Cherenkov detector in Hida, Gifu Prefecture. The experiment measures neutrino oscillation parameters -- particularly the mixing angle $\theta_{13}$, the atmospheric mixing angle $\theta_{23}$, and the CP-violating phase $\delta_{CP}$ -- by observing how $\nu_\mu$ transform into $\nu_e$ (appearance) or disappear (disappearance) over the baseline.

Data collection began in **January 2010**. The collaboration comprises approximately 500 physicists from over 60 institutions across Europe, Asia, and North America.

## Key Points

- **Off-axis beam**: 30 GeV protons from J-PARC strike a graphite target; the resulting $\nu_\mu$ beam is directed **2.5° off-axis** from Super-Kamiokande, narrowing the energy spectrum to peak at $\sim 600\;\text{MeV}$ — tuned to the oscillation maximum at $L/E \approx 500\;\text{km/GeV}$.
- **ND280 near detector**: Located 280 m downstream, it characterises the unoscillated beam using three [[Time Projection Chamber|TPCs]] with [[Micromegas]] readout (1,728 pads per module, 48$\times$36 grid), two Fine-Grained Detectors (FGDs), and surrounding calorimeters, all in a 0.2 T magnetic field.
- **Super-Kamiokande far detector**: A 50,000-ton (22,500-ton fiducial) water Cherenkov detector 1,000 m underground, lined with $\sim 11,000$ 20-inch [[Photomultiplier Tube|PMTs]]. Distinguishes $\nu_e$ from $\nu_\mu$ via Cherenkov ring topology.
- **Key results**: First observation of $\nu_e$ appearance in a $\nu_\mu$ beam (2014), confirming $\theta_{13} \neq 0$; most precise $\theta_{23}$ measurement (consistent with maximal mixing); first significant constraints on $\delta_{CP}$, preferring $\approx -\pi/2$ and excluding CP conservation at $> 2\sigma$.
- **Oscillation formula**: The $\nu_\mu \to \nu_e$ appearance probability (leading order): $P(\nu_\mu \to \nu_e) \approx \sin^2\theta_{23}\;\sin^2 2\theta_{13}\;\sin^2(\Delta m^2_{31}\,L / 4E)$. CP violation is probed by comparing $\nu$ and $\bar{\nu}$ rates.

## Examples

- T2K's Micromegas TPCs are a prominent real-world application of [[Micromegas]] technology in a large-scale particle physics experiment, reading out ~10,368 channels across the three TPCs (3 TPCs $\times$ 2 modules $\times$ 1,728 pads).
- The off-axis beam technique pioneered by T2K has become a standard approach in long-baseline neutrino experiments (also used by NOvA).

## Related Concepts

- [[Time Projection Chamber]] -- The detector technology used in the ND280 near detector
- [[Micromegas]] -- The micro-pattern gas detector used as the TPC readout
- [[Track Reconstruction]] -- Reconstructing particle trajectories from TPC data
- [[Particle Identification]] -- $dE/dx$-based PID in the TPCs
- [[Scintillation Detector]] -- Used in FGDs, P0D, ECal, and SMRD
- [[Photomultiplier Tube]] -- Photo-sensors lining Super-Kamiokande
- [[Probability Amplitude]] -- Quantum mechanical basis of neutrino oscillations
- [[Superposition]] -- Flavour eigenstates as superpositions of mass eigenstates
- [[Synchrotron]] -- J-PARC Main Ring accelerator type
- [[Pi Meson]] -- Parent particles of the neutrino beam
- [[Drift Velocity]] -- Key parameter in TPC operation
- [[DAQ]] -- Data acquisition for the near and far detectors
- [[Neutrinoless Double-Beta Decay]] -- Complementary probe of neutrino mass

## References

- T2K Collaboration, K. Abe et al., "The T2K Experiment," *Nucl. Instrum. Meth. A* **659** (2011) 106--135. [arXiv:1106.1238](https://arxiv.org/abs/1106.1238)
- T2K Collaboration, K. Abe et al., "Observation of Electron Neutrino Appearance in a Muon Neutrino Beam," *Phys. Rev. Lett.* **112** (2014) 061802. [arXiv:1311.4750](https://arxiv.org/abs/1311.4750)
- T2K Collaboration, K. Abe et al., "Constraint on the matter-antimatter symmetry-violating phase in neutrino oscillations," *Nature* **580** (2020) 339--344. [arXiv:1910.03887](https://arxiv.org/abs/1910.03887)
- T2K ND280 TPC Collaboration, N. Abgrall et al., "Time Projection Chambers for the T2K Near Detectors," *Nucl. Instrum. Meth. A* **637** (2011) 25--46. [arXiv:1012.0865](https://arxiv.org/abs/1012.0865)
- [T2K official website](https://t2k-experiment.org/)
- [Wikipedia: T2K experiment](https://en.wikipedia.org/wiki/T2K_experiment)
