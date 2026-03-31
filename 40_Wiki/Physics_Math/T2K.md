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

> [!info] Image placeholders
> The following diagrams are available on Wikimedia Commons but could not be auto-downloaded. Manually save them to `50_Resources/Attachments/` and update the embeds below.
>
> 1. **ND280 detector scheme** -- [ND280_detector_scheme.png](https://commons.wikimedia.org/wiki/File:ND280_detector_scheme.png) (CC BY 4.0, T2K Collaboration)
>    Save as: `T2K_ND280_detector_scheme.png`
> 2. **Neutrino beam production** -- [Neutrino_beam_production.svg](https://commons.wikimedia.org/wiki/File:Neutrino_beam_production.svg) (CC BY-SA 4.0)
>    Save as: `T2K_neutrino_beam_production.svg`
> 3. **ND280 pit photograph** -- [J-PARC_T2K_ND280_Pit.jpg](https://commons.wikimedia.org/wiki/File:J-PARC_T2K_ND280_Pit.jpg) (CC BY-SA 2.0)
>    Save as: `T2K_ND280_pit_photo.jpg`

<!-- Uncomment after downloading:
![[T2K_ND280_detector_scheme.png]]
![[T2K_neutrino_beam_production.svg]]
![[T2K_ND280_pit_photo.jpg]]
-->

## Definition

**T2K** (Tokai to Kamioka) is a long-baseline neutrino oscillation experiment in Japan. A high-intensity muon neutrino ($\nu_\mu$) beam is produced at the J-PARC accelerator complex in Tokai, Ibaraki Prefecture, and directed 295 km westward to the Super-Kamiokande water Cherenkov detector in Hida, Gifu Prefecture. The experiment measures neutrino oscillation parameters -- particularly the mixing angle $\theta_{13}$, the atmospheric mixing angle $\theta_{23}$, and the CP-violating phase $\delta_{CP}$ -- by observing how $\nu_\mu$ transform into $\nu_e$ (appearance) or disappear (disappearance) over the baseline.

Data collection began in **January 2010**. The collaboration comprises approximately 500 physicists from over 60 institutions across Europe, Asia, and North America.

## Key Points

### Beam Production

- Protons are accelerated to **30 GeV** by J-PARC's Main Ring [[Synchrotron]].
- The proton beam strikes a graphite target, producing [[Pi Meson|pions]] and kaons that decay in a 96 m decay volume into $\nu_\mu$ (or $\bar{\nu}_\mu$ in antineutrino mode).
- The beam is directed **2.5 degrees off-axis** from Super-Kamiokande. This off-axis technique narrows the neutrino energy spectrum, peaking at $\sim 600\;\text{MeV}$, which is tuned to the oscillation maximum at the 295 km baseline:

$$L/E \approx 295\;\text{km} / 0.6\;\text{GeV} \approx 500\;\text{km/GeV}$$

### Near Detector Complex (ND280)

The ND280 detector sits **280 m** downstream from the target at J-PARC and characterizes the unoscillated beam. It contains:

- **Pi-Zero Detector (P0D):** Measures neutral-current $\pi^0$ production.
- **Two Fine-Grained Detectors (FGDs):** Plastic scintillator bars serving as neutrino interaction targets.
- **Three [[Time Projection Chamber|Time Projection Chambers]] (TPCs):** The core tracking detectors, using [[Micromegas]] readout modules. They measure particle momentum (via curvature in a 0.2 T magnetic field), charge sign, and [[Particle Identification|particle identification]] through ionisation energy loss ($dE/dx$). Each TPC has $\sim 9000$ Micromegas pads per module.
- **Electromagnetic Calorimeter (ECal):** Surrounds the inner detectors; identifies photons and measures electromagnetic showers.
- **Side Muon Range Detector (SMRD):** Scintillator slabs in the magnet yoke gaps detect escaping muons.

### Far Detector: Super-Kamiokande

- A 50,000-ton (22,500-ton fiducial) water Cherenkov detector located 1,000 m underground in the Mozumi mine.
- Lined with $\sim 11,000$ 20-inch [[Photomultiplier Tube|photomultiplier tubes]].
- Distinguishes $\nu_e$ from $\nu_\mu$ interactions via the Cherenkov ring pattern: muon rings are sharp-edged while electron rings are fuzzy (electromagnetic showering).

### Key Physics Results

| Measurement | Result |
|---|---|
| $\nu_e$ appearance | First observation of $\nu_e$ appearance in a $\nu_\mu$ beam (2013), confirming $\theta_{13} \neq 0$ |
| $\theta_{23}$ | Most precise measurement; consistent with maximal mixing ($\theta_{23} \approx 45°$), slight preference for upper octant |
| $\delta_{CP}$ | First experiment to provide significant constraints on $\delta_{CP}$; data prefer $\delta_{CP} \approx -\pi/2$, excluding CP conservation at $> 2\sigma$ |
| Mass ordering | Slight preference for normal ordering ($m_1 < m_2 < m_3$) when combined with reactor data |

### Oscillation Physics

The $\nu_\mu \to \nu_e$ appearance probability (to leading order in vacuum) is:

$$P(\nu_\mu \to \nu_e) \approx \sin^2\theta_{23}\;\sin^2 2\theta_{13}\;\sin^2\!\left(\frac{\Delta m^2_{31}\,L}{4E}\right)$$

The CP asymmetry is measured by comparing $\nu_\mu \to \nu_e$ and $\bar{\nu}_\mu \to \bar{\nu}_e$ rates. A non-zero $\delta_{CP}$ introduces a difference:

$$A_{CP} = \frac{P(\nu_\mu \to \nu_e) - P(\bar{\nu}_\mu \to \bar{\nu}_e)}{P(\nu_\mu \to \nu_e) + P(\bar{\nu}_\mu \to \bar{\nu}_e)}$$

### T2K-II and Upgrades

- **T2K-II (2023--2026):** Beam power ramped toward **1.3 MW** (from initial $\sim 500\;\text{kW}$).
- **ND280 Upgrade:** Replaces the P0D with the **SuperFGD** (a 3D-segmented scintillator cube detector), two horizontal-drift Ar TPCs (**HATPCs**), and a **Time-of-Flight** system. This improves acceptance and reduces systematic uncertainties.
- **Hyper-Kamiokande:** The next-generation far detector ($\sim 260,000\;\text{ton}$), planned to begin operation around 2027, will dramatically increase statistics for CP violation measurement.

## Examples

- T2K's Micromegas TPCs are a prominent real-world application of [[Micromegas]] technology in a large-scale particle physics experiment, reading out $\sim 72,000$ channels across the three TPCs.
- The off-axis technique pioneered by T2K has become a standard approach in long-baseline neutrino experiments (also used by NOvA).
- T2K's measurement of $\theta_{13}$ was among the first indications that this parameter is non-zero, later confirmed precisely by reactor experiments (Daya Bay, RENO, Double Chooz).

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
