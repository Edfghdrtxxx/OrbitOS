---
type: research
status: active
area: "[[Nuclear Physics]]"
tags:
  - RIB
  - experimental-workflow
  - IMP
  - HIRFL
created: 2026-03-15
---
# The Complete Workflow of a Radioactive Isotope Beam Experiment

This document is a comprehensive, end-to-end guide to how a [[Radioactive Isotope Beam]] experiment works -- from the first ionized atom leaving the [[Ion Source]] to the final spectroscopic factor appearing in a publication. It follows the physical journey of the beam through each stage of the experimental apparatus, explaining not just *what* happens at each step but *why* each step is necessary and how its performance constrains everything downstream. [[HIRFL]]-[[RIBLL]] at the Institute of Modern Physics (IMP) in Lanzhou serves as the concrete running example throughout, with notes on how other major facilities (RIKEN RIBF, FRIB, GSI/FAIR) differ. A Master's student reading this document should come away with a complete mental map of RIB experimental physics -- the kind of map that makes instrument choices, analysis decisions, and literature results immediately intelligible.

## Ion Source and Primary Beam Production

The entire experiment begins at the [[Ion Source]], which determines three things that propagate through the rest of the chain: which beam species are available, what charge state (and therefore maximum energy) can be reached, and how much beam intensity arrives at the production target.

### How ECR Ion Sources Work

Modern heavy-ion facilities use Electron Cyclotron Resonance (ECR) ion sources, which exploit the resonance between microwave radiation and the cyclotron motion of electrons in a magnetic field. When the microwave frequency matches the electron cyclotron frequency $\omega_c = eB/m_e$, electrons absorb energy efficiently, reaching kinetic energies of tens of keV. These hot electrons then collide with neutral gas atoms, stripping orbital electrons one by one through stepwise ionization. For a 28 GHz source, the resonance condition requires $B \approx 1.0\,\text{T}$ (see [[Superconducting Electron Cyclotron Resonance]]).

To achieve high charge states, ions must remain in the plasma long enough for many successive collisions -- typically $\sim 10\,\text{ms}$. ECR sources achieve this with a **minimum-B magnetic confinement**: an axial magnetic mirror field (solenoid coils) superimposed with a radial sextupole field. The resulting field is weakest at the plasma center and increases in every direction, creating a magnetic well that confines both electrons and ions. This configuration also defines a closed ECR resonance surface inside the chamber where microwave power is deposited.

The advantages of ECR sources over older technologies (Penning, EBIS) are decisive for heavy-ion accelerators: high charge states from extended confinement, high intensity (emA-level DC beam currents), continuous (CW) operation for days or weeks, and versatility across the full periodic table from hydrogen to uranium.

### Feeding Material into the Source

ECR sources can produce ions from virtually any element, but the method of introducing material into the plasma chamber depends on the element's physical properties (Zhao et al., 2010):

| Method | How it works | Typical elements |
|--------|-------------|-----------------|
| **Gas injection** | Gaseous elements or volatile compounds fed directly into the chamber | H, He, N, O, Ne, Ar, Kr, Xe |
| **Resistive oven** | Solid material heated in an external furnace; metal vapor injected radially through the sextupole gap | Ca, Fe, Ni, Sn, Bi, Pb |
| **High-temperature oven** | Specialized furnace reaching >2000 C for refractory metals | U, Ta, W |
| **Sputtering** | A biased metallic sample inside the chamber is bombarded by plasma ions, ejecting target atoms | Ni, Ag, Au, Pb, Bi |
| **MIVOC** (Metal Ions from Volatile Compounds) | Organometallic compounds with high vapor pressure are introduced as gas | Fe, Ni, Cr, various transition metals |

The **gas mixing effect** is an important operational technique: adding a lighter "mixing gas" (often oxygen or helium) alongside the primary element improves the charge state distribution and beam intensity of the heavier species. For oven-produced beams, metal oxides that sublime at lower temperatures can be used, with the oxygen serving double duty as both carrier and mixing gas.

### SECRAL and SECRAL-II at IMP

At [[HIRFL]], the workhorse injector is **SECRAL** (Superconducting ECR ion source with Advanced design in Lanzhou), a third-generation fully superconducting source operating at 18-28 GHz (Zhao et al., 2010). Its key innovation is placing the superconducting sextupole coils outside the three solenoid coils, simplifying construction while maintaining strong fields (axial injection mirror 3.6 T, sextupole at wall 2.0 T). SECRAL has accumulated over 28,000 hours of beam delivery and holds world records for several ion species, including 1.1 emA of $^{129}\text{Xe}^{26+}$ and 202 e$\mu$A of $^{238}\text{U}^{33+}$.

The upgraded **SECRAL-II** adds triple-frequency heating (28 + 45 + 18 GHz simultaneously), pushing the charge state distribution to even higher values (Zhao et al., 2018). SECRAL-II has achieved fully stripped $^{40}\text{Ar}^{18+}$ at 15 e$\mu$A and $^{129}\text{Xe}^{42+}$ at 17 e$\mu$A. The jump between generations illustrates the **frequency scaling law** in ECR physics: higher microwave frequencies demand stronger magnetic fields, which in turn produce better plasma confinement and access to higher charge states.

### Beam Extraction and Charge State Selection

The extracted beam is a "cocktail" of multiple ion species and charge states. A 90-degree double-focusing analyzing (dipole) magnet separates these by charge-to-mass ratio $q/A$, and only ions with the desired $q/A$ pass through a selection slit. The selected beam then traverses the Low Energy Beam Transport (LEBT) line -- an **axial injection line** that merges two ECR branches (SECRAL and the older LECR3) before injection into SFC, consisting of Glaser lenses, dipoles, quadrupoles, and solenoids -- which shapes and steers it into the accelerator's acceptance.

### Why Charge State Matters

The maximum energy a [[Cyclotron]] can deliver follows $E/A = K(q/A)^2$, where $K$ is a machine constant. Because energy scales with the *square* of the charge-to-mass ratio, even a modest increase in charge state yields a substantial gain in achievable energy. For example, raising $^{129}\text{Xe}$ from 27+ to 38+ roughly doubles the available energy per nucleon from the same machine. The ion source therefore directly determines the maximum beam energy and, consequently, what nuclear reactions and exotic isotopes become accessible.

### Beam Species Available at HIRFL

HIRFL can accelerate all ions from proton ($Z=1$) to uranium ($Z=92$) to energies of hundreds of MeV/u. The specific beam species depend on what the ECR sources can deliver at sufficient intensity and charge state:

| Category | Examples | Typical charge states |
|----------|----------|----------------------|
| Light ions | H, $^{7}$Li, $^{9}$Be, $^{12}$C, $^{14}$N, $^{16}$O | Fully or near-fully stripped |
| Medium-mass | $^{36,40}$Ar, $^{58}$Ni, $^{78,86}$Kr | 12+-18+ (Ar); 19+ (Ni); 19+-28+ (Kr) |
| Heavy | $^{112,124}$Sn, $^{129}$Xe | 26+ (Sn); 27+-42+ (Xe) |
| Very heavy | $^{209}$Bi, $^{238}$U | 31+-36+ (Bi); 32+-35+ (U) |

For an experiment at [[HIRFL]]-RIBLL, the choice of primary beam is dictated by what exotic isotopes one wants to produce via projectile fragmentation. The ion source must deliver that beam at sufficient intensity (typically > 100 enA at the target) and with a charge state high enough for the cyclotrons to reach the required energy (typically 30-80 MeV/u for fragmentation).

### Other Ion Source Types at IMP

While ECR sources are the primary injectors for nuclear physics at HIRFL, the Ion Source Group at IMP also develops complementary technologies:

- **2.45 GHz microwave ion sources**: High-current H$^+$/H$_2^+$ beams (up to 100 emA), used for the C-ADS (China Accelerator Driven System) injector and medical isotope production.
- **Laser ion sources**: Produce highly charged ions (e.g., Ti$^{16+-20+}$, Ni$^{18+-23+}$) in short, intense pulses (ns timescale) via the Direct Plasma Injection Scheme (DPIS) into RFQ linacs.
- **Negative ion sources**: Stable DC beams of H$^-$, O$^-$, O$_2^-$ for proton therapy and analytical applications.

### Looking Ahead: FECR for HIAF

The next-generation facility at IMP, the **High Intensity heavy-ion Accelerator Facility (HIAF)**, will require even more intense beams of very highly charged heavy ions. To meet this need, IMP is building **FECR** -- the world's first **fourth-generation ECR ion source** operating at **45 GHz**. Key FECR design parameters include an axial mirror field of 6.5 T, a sextupole field at the wall of 3.5 T, Nb$_3$Sn superconducting wire (the first ECR source to use this material, developed in collaboration with LBNL), a 20 kW microwave coupling system, and a target performance of pulsed 50 p$\mu$A $^{238}\text{U}^{35+}$ beam -- roughly 5x higher than existing ECR sources. FECR represents the continuation of the frequency scaling approach: 45 GHz demands fields achievable only with Nb$_3$Sn, as conventional NbTi wire cannot reach the required field strengths.

## The Accelerator Complex

### HIRFL: The Two-Cyclotron System

The [[HIRFL]] accelerator complex consists of two cyclotrons operated in tandem (Xia et al., 2002; Xia et al., 2018). The **Sector-Focusing Cyclotron (SFC)**, an isochronous cyclotron with $K = 69$, serves as the injector, pre-accelerating ions to 0.5-17 MeV/u. The **Separated-Sector Cyclotron (SSC)**, with $K = 450$, then boosts the beam to intermediate energies -- up to ~110 MeV/u for ions with $A/q \approx 2$ (e.g., $^{12}\text{C}^{6+}$), and 30-50 MeV/u for medium-mass species. Completed in December 1988, the SFC+SSC combination was the first large-scale heavy-ion accelerator system designed and built entirely in China.

For many experiments, the SSC energies are sufficient, and the beam goes directly to the [[RIBLL]] fragment separator. For higher energies, the beam continues to the [[CSR]] synchrotron complex.

### CSRm: The Cooler-Storage Ring Synchrotron

The [[CSR|CSRm]] (Cooler Storage Ring, main ring) is a [[Synchrotron]] with a circumference of 161 m and maximum magnetic rigidity of 12.05 T$\cdot$m (Xia et al., 2002). It receives beam from the SSC at 7-25 MeV/u and accelerates it up to ~1 GeV/u for light ions or ~500 MeV/u for uranium. The operating cycle proceeds in three phases:

1. **Injection and accumulation.** The quasi-continuous cyclotron beam is injected via multi-turn injection. DC magnetized electron cooling at the injection energy compresses the phase space, allowing many injection shots to stack on top of each other -- up to $\sim 1.8 \times 10^{10}$ particles for $^{12}\text{C}^{6+}$ (Yang et al., 2011).

2. **Acceleration.** The bending magnets ramp up synchronously with the RF frequency, maintaining the relation $B\rho = p/q$ at the design radius as momentum increases.

3. **Extraction.** Two modes are available: *fast extraction* (single-turn kicker for producing RIBs via fragmentation) and *slow extraction* (third-order resonance with RF knockout for quasi-continuous spill delivery to fixed-target terminals). An FPGA-based feedback system mitigates 50 Hz power-supply ripple in slow extraction, producing a flat spill structure essential for detector experiments (Mao et al., 2013).

### CSRe: The Experimental Storage Ring

The CSRe (experimental ring, circumference 128.8 m) is a dedicated storage ring for precision experiments (Litvinov & Bosch, 2011).

**Isochronous Mass Spectrometry (IMS).** The ring is tuned so that the revolution time depends only on $m/q$, enabling mass measurements of exotic nuclides with half-lives as short as tens of microseconds. A novel refinement, **$B\rho$-defined IMS**, uses two ToF detectors to simultaneously measure each ion's velocity and revolution time, dramatically improving mass resolving power to $\sim 10^5$ ($\sigma$) (Tu et al., 2011; Xu et al., 2024).

**Schottky Mass Spectrometry (SMS).** Electron-cooled beams allow a Schottky resonator to pick up tiny current fluctuations of individual ions, achieving very high mass precision but requiring longer-lived species.

**Combined IMS + SMS.** The first application of simultaneous isochronous and Schottky techniques at CSRe has been used to measure half-lives of fully ionized $^{49}\text{Cr}^{24+}$ and $^{53}\text{Fe}^{26+}$, demonstrating the power of combining both methods -- for example, using IMS for injection and identification while monitoring decay via SMS over time (Zeng et al., 2018).

**In-ring nuclear reactions.** Silicon strip detectors compatible with ultra-high vacuum have been installed in CSRe to measure direct nuclear reactions using an internal gas-jet target. Proton elastic scattering on stored $^{58}\text{Ni}$ and $^{78}\text{Kr}$ beams has been used to extract nuclear matter distribution radii.

### Beam Lines and Experimental Areas

| Beam line / Terminal | Source | Purpose |
|---|---|---|
| **RIBLL1** | SSC (direct) | RIB production at SSC energies (~tens of MeV/u); operational since 1998 |
| **RIBLL2** | CSRm (fast extraction) | RIB production at CSR energies (up to hundreds of MeV/u); connects CSRm to CSRe; 55 m length, 5 focal planes (F0-F4), $B\rho_\text{max}$ = 10.64 Tm |
| **ETF** (External Target Facility) | RIBLL2 (F2) | Fixed-target nuclear reaction experiments with RIBs; equipped with gamma-ray arrays, neutron walls, MUSIC chambers, MWDCs |
| **CSRm-ET1** | CSRm (slow extraction) | Biomedical research: heavy-ion radiobiology and therapy studies |
| **CSRm-ET2** | CSRm (slow extraction) | Nuclear data measurements: neutron TOF spectrometry, light charged-particle spectrometry, activation |
| **CSRe** | RIBLL2 injection | Storage-ring physics: mass measurements (IMS/SMS), in-ring reactions, lifetime measurements |

### Beam Energy and the Physics It Enables

The beam energy determines which reaction mechanisms are accessible:

| Energy regime | Source | Dominant reactions | Key physics |
|---|---|---|---|
| $< 10$ MeV/u | SFC | [[Coulomb Excitation]], sub-barrier fusion | Nuclear structure, astrophysical S-factors |
| 10-30 MeV/u | SFC+SSC | [[Transfer Reactions]], fusion-evaporation | Shell structure near stability |
| 30-300 MeV/u | SSC or CSRm | **[[Projectile Fragmentation]]** | RIB production, exotic nuclei far from stability |
| 300-1000 MeV/u | CSRm | Fragmentation, spallation | Nuclear EOS, stored-beam mass measurements |

The hybrid cyclotron-synchrotron design leverages each machine type's strengths: cyclotrons provide high-current continuous beam at moderate energies; the [[Synchrotron]] provides variable high energy with beam cooling (see [[Synchrotron_vs_Cyclotron]]).

## Fragment Separation and Secondary Beam Production

### The Production Target

When the primary beam exits the accelerator, it strikes a thin production target -- typically $^{9}$Be or $^{12}$C, chosen for their low atomic number to maximize nuclear-interaction probability while minimizing Coulomb scattering. Thicknesses range from a few hundred micrometres to several millimetres, balancing production yield against energy loss and angular straggling.

### Projectile Fragmentation

The dominant production mechanism at intermediate and high energies ($\gtrsim 50$ MeV/u) is [[Projectile Fragmentation]]. In a peripheral collision, only the overlap region of projectile and target interacts. The process is described by the **abrasion-ablation model** (Gaimard & Schmidt, 1991) in two steps:

1. **Abrasion** ($\sim 10^{-23}$ s): Nucleons in the geometric overlap are sheared off. The surviving "prefragment" carries excitation energy roughly proportional to the number of removed nucleons.

2. **Ablation** ($\sim 10^{-16}$-$10^{-19}$ s): The excited prefragment de-excites by evaporating nucleons, light clusters, and gamma rays, determining the final identity ($Z$, $N$) of the fragment.

Because fragments retain nearly the beam velocity and are forward-focused, they can be captured by a magnetic [[Fragment Separator]] in microseconds -- enabling access to isotopes with sub-microsecond half-lives. A wide distribution of isotopes is produced simultaneously, with cross sections spanning many orders of magnitude.

### The $B\rho$-$\Delta E$-$B\rho$ Separation Method

The standard in-flight separation technique at all major fragment separators ([[RIBLL]], [[BigRIPS]], FRS, ARIS) is the $B\rho$-$\Delta E$-$B\rho$ method (Geissel et al., 1992):

**Step 1 -- First $B\rho$ selection.** After the production target, dipole magnets select a band of ions with similar $A/Z$ via [[Magnetic Rigidity]] ($B\rho = p/Ze$). However, many isotopes share similar $A/Z$ values, so this alone is insufficient.

**Step 2 -- Wedge-shaped degrader.** At the dispersive focal plane, an [[Achromatic Degrader]] (typically aluminum or beryllium) introduces energy loss $\Delta E$ that depends on $Z^2$ via the [[Bethe-Bloch Formula]]. Two ions with the same $A/Z$ but different $Z$ lose different amounts of energy, emerging with different momenta. The wedge shape compensates for momentum dispersion, preserving beam quality. The energy loss in the degrader depends on the [[Stopping Power]] of the material, which is a function of the ion's charge and velocity.

**Step 3 -- Second $B\rho$ selection.** A second set of dipoles separates the now-differentiated ions. The combination converts a $Z$-blind momentum selection into a $Z$-sensitive one, providing both mass and charge selectivity.

### RIBLL1 and RIBLL2 at IMP

**[[RIBLL|RIBLL1]]** (operational since 1998) is coupled to the SFC-SSC chain, providing [[Secondary Beam|secondary beams]] at up to ~100 MeV/u (Sun et al., 1999; Sun et al., 2003). It features a 35 m antisymmetric double-achromatic design with four dipoles, 16 quadrupoles, and five focal planes (F0-F4), achieving $B\rho_{\max} = 4.2$ T$\cdot$m, $\Delta p/p = \pm 5\%$, and $\Delta\Omega \geq 6.5$ msr.

**[[RIBLL|RIBLL2]]** (at HIRFL-CSR) connects CSRm to downstream areas and CSRe over 55 m, operating at significantly higher energies (300-400 MeV/u) with $B\rho_{\max} = 10.64$ T$\cdot$m, $\Delta p/p = \pm 1\%$, and angular acceptance $\pm 25$ mrad (Sun et al., 2018; Tang et al., 2025). RIBLL2 is one of the few fragment separators in the world capable of delivering RIBs above 300 MeV/u. Its focal plane detectors include:

- **F1:** plastic scintillator (timing start) + scintillator strip array (position)
- **F2:** multi-wire proportional chamber (MWPC, beam monitoring); also the location of the **External Target Facility (ETF)**
- **F3:** MWPC (position for $B\rho$ reconstruction)
- **F4:** plastic scintillator (timing stop) + multi-wire drift chambers (tracking) + multi-sampling [[Ionisation Chamber|ionisation chambers]] ([[MUSIC Detector|MUSIC]], for $\Delta E$)

### [[ISOL]] vs. In-Flight Comparison

The [[ISOL]] (Isotope Separation On-Line) method is fundamentally different from the in-flight approach used at RIBLL. In ISOL facilities (e.g., CERN's ISOLDE, TRIUMF's ISAC), a thick, hot target stops the reaction products, which must then [[Diffusion|diffuse]] out of the target material and effuse to an ion source for re-ionization -- a process taking milliseconds to seconds (Blumenfeld et al., 2013). This limits ISOL to species with half-lives $\gtrsim$ ms and introduces chemistry dependence (refractory elements are difficult to extract). However, ISOL beams are re-ionized and mass-separated at low energy, producing excellent beam quality (low emittance) ideal for precision measurements with traps and lasers. In contrast, in-flight separation is universal (works for all elements), accesses sub-microsecond half-lives, and delivers beams at high energy suitable for direct-reaction studies -- but with larger emittance and energy spread. The two methods are complementary: HIRFL uses the in-flight approach exclusively.

### The Cocktail Beam Problem

Even after $B\rho$-$\Delta E$-$B\rho$ purification, the emerging [[Secondary Beam]] is typically a **cocktail beam** -- a mixture of several isotopic species. Purities range from a few percent for very exotic species to >90% near stability. This has a critical consequence: **particle-by-particle identification is mandatory**. Every ion arriving at the experimental target must be tagged by $Z$ and $A/Q$ using the combined $\Delta E$-$B\rho$-ToF method at the separator focal planes.

### What Determines Secondary Beam Intensity

The rate of a specific secondary isotope is governed by:

$$R_{\text{sec}} = R_{\text{prim}} \cdot n_t \cdot \sigma_{\text{prod}} \cdot \epsilon_{\text{sep}} \cdot T_{\text{det}}$$

The production cross section $\sigma_{\text{prod}}$ is the single most important factor for exotic species -- it drops exponentially as one moves further from stability, falling below 1 nanobarn near the drip lines. These factors are routinely simulated using the LISE++ code (Tarasov & Bazin, 2008) for experiment planning.

## Target and Reaction Mechanisms

### Experimental Targets

Three categories of targets serve RIB experiments. **Solid foils** (CH$_2$ for proton reactions, CD$_2$ for deuteron reactions, Pb for [[Coulomb Excitation]]) are most common at intermediate energies, with thicknesses from 0.3 to 100 mg/cm$^2$ -- trading energy resolution against luminosity. **Gas targets** (windowless gas jets, cryogenic cells) provide pure hydrogen or helium without carbon contamination. **Active targets** ([[Active-Target TPC]]) use the detector gas itself as the target, offering maximum luminosity without resolution loss because the reaction vertex is reconstructed in 3D.

### Inverse Kinematics

In conventional kinematics, a light projectile hits a heavy target. This cannot work for radioactive species -- they are too short-lived and too scarce to fabricate into targets. The solution is [[Inverse Kinematics]]: the heavy radioactive ion is the beam, and a light stable nucleus (H, D, He) is the target. This kinematic inversion is the enabling technique for essentially all direct-reaction studies with RIBs (Satchler, 1983; Aumann et al., 2013).

The large mass asymmetry produces several experimentally important effects. All reaction products are **forward-focused** by the Lorentz boost. Light ejectiles (protons, deuterons) are mapped to relatively large laboratory angles (30-80 degrees), requiring dedicated detector arrays. The mapping from center-of-mass angle $\theta_{\text{CM}}$ to lab angle $\theta_{\text{lab}}$ is highly nonlinear and compressed, demanding excellent angular resolution. [[Missing-Mass Spectroscopy]] becomes essential -- the excitation energy of the heavy residue is reconstructed solely from the measured energy and angle of the light ejectile.

### The Direct Reaction Toolkit

[[Direct Reactions]] occur on a fast timescale ($\sim 10^{-22}$ s), are peripheral, and involve one or a few nucleons. Their angular distributions encode the quantum numbers of the states involved, making them the primary spectroscopic tool for RIB experiments (Satchler, 1983; Glendenning, 2004).

**[[Transfer Reactions]]** (e.g., $(d,p)$, $(p,d)$) transfer nucleons between projectile and target. The angular distribution shape identifies the transferred orbital angular momentum $\ell$, enabling $J^\pi$ assignments. The magnitude of the [[Differential Cross Section]], compared with [[DWBA]] calculations, yields the [[Spectroscopic Factor]] $C^2S$ -- the overlap between the actual nuclear wave function and a pure single-particle configuration.

**[[Knockout Reactions]]** (e.g., $(p,2p)$, $(p,pn)$) eject a nucleon from the projectile via quasi-free scattering at intermediate energies ($\sim 200$-300 MeV/u). The inclusive cross section yields spectroscopic factors via eikonal theory, and the momentum distribution of the residue encodes the orbital angular momentum of the removed nucleon (Hansen & Tostevin, 2003).

**Inelastic scattering** ($(p,p')$, $(d,d')$) probes collective excitations and deformation parameters $\beta_L$, providing $B(E2)$ transition strengths complementary to [[Coulomb Excitation]].

**Elastic scattering** determines optical potential parameters essential for all [[DWBA]] calculations and reveals anomalous matter distributions in exotic nuclei (halos, diffuse surfaces). Total reaction cross sections $\sigma_R$ provide model-independent nuclear size information (Tanihata et al., 1985).

**[[Charge-Exchange Reaction|Charge-exchange reactions]]** ($(p,n)$, $(^3\text{He},t)$) probe spin-isospin excitations. At intermediate energies, the forward-angle cross section is proportional to the Gamow-Teller strength $B(GT)$. Double charge exchange constrains nuclear matrix elements relevant to neutrinoless double-beta decay.

### Physics Questions Addressed

The combination of radioactive beams and direct reactions opens access to fundamental questions: the evolution of nuclear shell structure far from stability (disappearance of traditional magic numbers, emergence of new ones) (Otsuka et al., 2020), the structure of halo nuclei with anomalously extended matter radii, the location of the neutron and proton drip lines, the nuclear physics inputs for r-process nucleosynthesis (Mumpower et al., 2023), and the systematic quenching of [[Spectroscopic Factor|spectroscopic factors]] that probes nucleon-nucleon correlations beyond the mean-field picture.

## Detector Systems

A RIB experiment deploys an orchestrated chain of detectors spanning three spatial regions: **upstream** (beam characterization before the target), the **reaction area** (where reactions occur and products are detected), and **downstream** (forward-going fragments and beam diagnostics). Only their combined information yields a complete event reconstruction.

### Upstream: Beam Characterization

Because in-flight RIBs are cocktail beams, every incoming particle must be identified event by event.

**[[PPAC|Parallel Plate Avalanche Counters (PPACs)]]** at separator focal planes provide sub-millimetre position ($x$, $y$) and ~100 ps timing with extremely low material budget (~30 mg/cm$^2$) (Kumagai et al., 2001). A pair of PPACs determines both position and angle, enabling [[Magnetic Rigidity]] reconstruction through the dipole magnets between them.

**Plastic [[Scintillation Detector|scintillators]]** at key focal planes provide fast timing (sub-nanosecond) for the [[Time-of-Flight]] measurement, serve as the master trigger for the [[DAQ]], and give coarse energy-loss information for online beam tuning. At RIBLL2-F1, a plastic scintillation sheet combined with a 50-strip scintillator array provides both timing and position (Tang et al., 2025). [[Diamond Detector|Diamond detectors]] can also serve as ToF start detectors, offering superior radiation hardness and excellent timing resolution (~30 ps) at high rates -- an alternative to plastic scintillators in high-intensity environments.

Together, these detectors implement the **$\Delta E$-$B\rho$-ToF method**: energy loss determines $Z$ via the [[Bethe-Bloch Formula]], magnetic rigidity gives $p/Q$, and time-of-flight gives velocity $\beta$. From $B\rho$ and $\beta$, one obtains $A/Q = B\rho/(3.107\,\beta\gamma)$ [u]. Combined with $Z$, each beam particle is uniquely identified in a two-dimensional [[PID|$Z$ vs. $A/Q$ plot]] (Fukuda et al., 2013).

### Reaction Area: Tracking and Particle Identification

The [[Time Projection Chamber]] is the workhorse for 3D charged-particle tracking. A uniform electric field drifts ionization electrons to a segmented readout plane; the $(x,y)$ position comes from pad hits and the $z$-coordinate from the [[Drift Time]]. Electron [[Diffusion]] during drift sets a fundamental limit on spatial resolution, with transverse diffusion broadening the charge cloud as it drifts over longer distances. The specific energy loss [[dE-dx|$\mathrm{d}E/\mathrm{d}x$]] along each track provides [[Particle Identification]] via the [[Bethe-Bloch Formula]].

In an [[Active-Target TPC]], the detector gas itself is the reaction target. This eliminates the resolution-luminosity trade-off: the full gas volume contributes to luminosity while the vertex position is reconstructed event by event. Near-$4\pi$ solid-angle coverage captures low-energy recoils that would stop in a conventional target. Sensitivity extends down to ~100 particles per second, critical for the most exotic beams. Gas amplification is provided by [[Micromegas]] meshes, [[GEM Detector|GEM]] foils, or THGEM structures, with signals digitized by dedicated electronics such as the GET system (Pollacco et al., 2018).

The **MATE** (Multi-purpose Active-target TPC) at [[HIRFL]] is a 4000-channel AT-TPC developed at IMP with GEM-based amplification and a segmented pad-plane readout. It is coupled with the MATE-PA auxiliary charged-particle array -- forward double-layer [[Silicon Detector|silicon detectors]] for [[ΔE-E Method|$\Delta E$-$E$]] identification of escaping light charged particles.

**[[Silicon Detector]] arrays** provide excellent energy resolution (~0.1-1%) through the low pair-creation energy in silicon (~3.6 eV per electron-hole pair) (Sun et al., 2018). They appear as $\Delta E$-$E$ telescopes (thin + thick layers) for isotope identification, and as position-sensitive Double-Sided Silicon Strip Detectors (DSSDs) with sub-millimetre spatial resolution.

**Gamma-ray detectors** ([[HPGe Detector|HPGe]] arrays for high-resolution spectroscopy at ~0.2% energy resolution, CsI arrays for high-efficiency in-beam measurements) detect prompt de-excitation gamma rays (Knoll, 2010). For fast beams ($\beta \sim 0.3$-0.6), **Doppler correction** using event-by-event velocity information is essential to recover intrinsic transition energies.

**[[MUSIC Detector|MUSIC]] (Multi-Sampling Ionization Chamber)** is a segmented variant of the [[Ionisation Chamber]], providing energy-loss measurements along the beam axis with averaging over 4-8 independent samples improving charge resolution by $\sqrt{N}$. At RIBLL2-F4, two MUSIC chambers achieve $\sigma_Z \sim 0.12$-0.18 (Tang et al., 2025).

### The External Target Facility (ETF)

The **External Target Facility (ETF)** at RIBLL2-F2 provides a dedicated secondary-target station for in-beam experiments with high-energy RIBs. The ETF is equipped with gamma-ray detector arrays for prompt spectroscopy and neutron walls for knockout and breakup measurements, along with Multi-Wire Proportional Chambers (MWPCs) for beam profile monitoring. This platform enables reaction studies at the full CSR energies (300-400 MeV/u) before the beam continues to F4 or CSRe.

### Downstream: Fragment and Neutron Detection

Forward-going heavy fragments are identified by downstream $\Delta E$-$E$ telescopes and MUSIC chambers. For reactions producing free neutrons (knockout, Coulomb dissociation), dedicated neutron arrays are placed 3-10 m downstream. These use plastic or liquid scintillator with neutron/gamma separation via pulse-shape discrimination. Neutron kinetic energy is determined from [[Time-of-Flight]] over the known distance. A Faraday cup or beam dump at the terminus provides the absolute beam intensity for cross-section normalization.

### How Detectors Work Together

A typical direct-reaction setup in [[Inverse Kinematics]] combines all these elements: upstream PPACs and scintillators tag each beam particle with $(Z, A/Q)$; the TPC or AT-TPC reconstructs the 3D vertex and all charged tracks; surrounding silicon telescopes catch escaping light particles; gamma-ray detectors tag specific final states in coincidence; downstream MUSIC and telescopes identify forward fragments; and the beam dump provides normalization. For a two-body reaction $A(d,p)B$, the proton energy and angle determine the excitation energy of nucleus $B$ via [[Missing-Mass Spectroscopy]], with coincident gamma rays cross-checking the result.

## Electronics, DAQ, and Digitization

### Traditional VME/CAMAC-Based Systems

Before describing modern purpose-built electronics, it is important to understand the traditional DAQ platforms that remain in widespread use and provide context for why specialized systems like GET were developed.

**CAMAC (Computer Automated Measurement And Control)** is a modular electronics standard dating from the 1960s, using a 24-bit dataway bus in standardized crates (Leo, 1994). CAMAC modules include ADCs, TDCs, scalers, coincidence units, and I/O registers. A crate controller interfaces to a host computer. CAMAC is simple and well-understood but limited by slow readout speeds (~$\mu$s per word) and is being phased out in favor of VME.

**VME (Versa Module Eurocard)** is the successor standard offering higher throughput (110 ns read cycle, ~40 MB/s for VME64x) and higher channel density. A single VME crate with modern multi-channel modules (e.g., CAEN V775 TDC with 32 channels, CAEN V785 ADC with 32 channels) can instrument hundreds of detector channels. VME systems significantly reduce cabling complexity and dead time compared to CAMAC.

Both standards use a common readout paradigm: a trigger signal gates the conversion modules, a readout controller reads out all modules sequentially, and the data is shipped to a host computer for event building and storage. However, for high-channel-count detectors like TPCs with thousands of pads, even VME becomes a bottleneck -- motivating the development of purpose-built, ASIC-based systems like GET.

### The Analog Signal Chain

When a charged particle traverses a detector, it produces a raw electrical signal -- typically femtocoulombs to picocoulombs of charge. The [[Preamplifier]] is the first active stage and its noise performance dominates the system's [[Signal-to-Noise Ratio]] (Spieler, 2005). Charge-sensitive preamplifiers (CSAs) integrate detector current onto a feedback capacitor, producing a voltage step proportional to total charge -- the standard choice for semiconductor detectors, HPGe, and TPC pad readouts. Current-sensitive preamplifiers preserve fast time structure for [[Time-of-Flight]] applications with PMTs.

**Shaping amplifiers** apply bandpass filtering (semi-Gaussian, CR-RC) to optimize the signal-to-noise ratio, with the shaping time $\tau$ balancing series noise (thermal, decreasing with longer $\tau$) against parallel noise (leakage current, increasing with longer $\tau$) (Knoll, 2010). Typical shaping times range from ~50 ns (fast timing) to ~10 $\mu$s (high-resolution gamma spectroscopy).

**Discriminators** convert analog pulses into digital logic signals. A [[Leading-Edge Discriminator]] fires at a fixed voltage threshold but suffers from time walk (amplitude-dependent timing error). A [[Constant Fraction Discriminator]] eliminates time walk by firing at a fixed fraction of pulse height, achieving sub-nanosecond time resolution essential for precision [[Time-of-Flight]] and [[Coincidence Detection]] (Gedcke & McDonald, 1967).

### Digitization: ADC and TDC

The [[ADC]] (Analog-to-Digital Converter) converts conditioned analog signals into numerical data. **Peak-sensing ADCs** digitize the maximum of a shaped pulse for energy spectroscopy. **Charge-integrating ADCs (QDCs)** integrate current over a gate window for scintillator-PMT systems. **Flash ADCs** (100 MS/s to 5 GS/s) capture entire waveforms, enabling post-acquisition extraction of energy, timing, and pulse shape from a single digitizer -- replacing multiple traditional modules. **Switched Capacitor Arrays (SCAs)**, as used in the GET system's [[ASIC|AGET ASIC]], write analog signals into a circular buffer of 512 capacitor cells at up to 100 MHz, achieving flash-ADC-like sampling with lower power consumption (Pollacco et al., 2018).

The [[TDC]] (Time-to-Digital Converter) measures time intervals between logic signals with resolutions from ~25 ps (dedicated ASICs) to ~100 ps ([[FPGA]]-based implementations). TDCs record *when*; ADCs record *what*. Together they provide the complete information for [[Particle Identification]]: energy loss from ADC, time-of-flight from TDC, and position from drift-time or hit patterns.

### Trigger System

The trigger system decides in real time which detector signals represent physics events worth recording. At the lowest level, discriminator outputs feed into coincidence units requiring two or more signals within a narrow resolving time, suppressing uncorrelated background (accidental rate $R_{\text{acc}} = 2\tau \cdot R_1 \cdot R_2$). A master trigger combines coincidence conditions with veto signals to gate the conversion modules. Modern systems implement programmable trigger logic in [[FPGA]]-based modules.

At synchrotron-based facilities, the [[Spill Gate]] marks the window during which beam is present. The DAQ only accepts triggers while the spill gate is open, reducing background. At [[HIRFL]]-CSR, a ~200 ms spill in a ~1 s cycle gives ~20% duty cycle, meaning the instantaneous rate during the spill is ~5x the average rate. Spill quality directly affects data quality; an FPGA-based feedback system mitigates 50 Hz power-supply ripple (Mao et al., 2013).

[[Dead Time]] -- the minimum interval after recording an event during which no new event can be accepted -- arises from ADC conversion, readout transfer, and event-building latency. Dead-time correction is essential for absolute cross-section measurements and is monitored by scalers counting accepted vs. presented triggers.

### The GET System

The **GET (General Electronics for TPCs)** system is a purpose-built, high-channel-count [[DAQ]] for time projection chambers (Pollacco et al., 2018). Its architecture stacks four levels: the **AGET** [[ASIC]] (64 channels with integrated CSA, shaper, discriminator, and 512-cell SCA per chip), the **AsAd** board (4 AGETs = 256 channels, with 12-bit external ADC), the **CoBo** concentration board (4 AsAds = 1024 channels, with [[FPGA]]-based zero suppression and timestamping), and the **MuTAnT** master trigger module (3-level programmable trigger with clock distribution). The system scales to 33,792 channels and is deployed at FRIB, GANIL, and IMP.

At [[HIRFL]], the GET system reads out the MATE TPC and a semi-cylindrical TPC for [[Charge-Exchange Reaction|charge-exchange reactions]], integrated with spill gate synchronization from CSR slow extraction and external trigger inputs from ancillary detectors. Typical beam rates of $10^3$-$10^5$ pps yield 10-1000 Hz event rates after triggering, with zero-suppressed data rates of 10-50 MB/s producing 1-5 TB per experiment week.

### DAQ Software Frameworks

Several software frameworks manage data flow, run control, online monitoring, and storage at RIB facilities:

- **MIDAS (Maximum Integration Data Acquisition System)**: Developed at PSI (Switzerland) and TRIUMF (Canada), MIDAS is a general-purpose framework for small to medium experiments, with web-based run control, online histogramming, and support for multiple front-end hardware standards. Widely used in nuclear physics worldwide.
- **NSCLDAQ**: Developed at NSCL/FRIB (Michigan State University), NSCLDAQ provides a modular architecture that breaks the DAQ problem into smaller applications (readout programs, event builders, analysis pipelines). It is the standard DAQ at FRIB and several university labs.
- **NARVAL / DCOD**: Developed at GANIL (France), originally for the AGATA gamma-tracking array. NARVAL is a distributed data-flow framework where "actors" (processing nodes) perform tasks such as energy calibration, time alignment, and pulse-shape analysis. Upgraded to DCOD in 2017 for improved rate capability.

The GET system includes its own DAQ software for configuring the AGET/AsAd/CoBo/MuTAnT chain, interfacing with experiment-level frameworks (e.g., NSCLDAQ at FRIB, NARVAL at GANIL) via standard protocols.

### Data Format and Event Structure

The fundamental unit of DAQ output is the **event** -- a snapshot of all detector signals associated with a single physics interaction:

- **Event header:** Trigger number, timestamp (from the master clock, typically with ~10 ns resolution), trigger type/pattern.
- **Data body:** For each fired channel -- channel ID, digitized values (ADC counts, TDC values, or full waveform samples). With zero suppression, only channels above threshold are included.
- **Event footer:** Data integrity checks (checksums), event size.

Data are initially written in **raw binary formats** optimized for write speed during acquisition. Offline, they are converted to **ROOT TTree format** (Brun & Rademakers, 1997) -- a columnar layout enabling selective branch reading, which is the standard for analysis in nuclear and particle physics. **HDF5** format is used at some facilities for large-array data such as TPC waveforms.

Typical data rates for GET-based systems: with 10,240 channels at 25 MHz sampling and 512 time buckets, raw data per event is $\sim 10240 \times 512 \times 2$ bytes $\approx$ 10 MB/event. At 100 Hz, this would be ~1 GB/s before zero suppression. Zero suppression (factor 10-100) reduces this to ~10-100 MB/s, manageable over Gigabit Ethernet. A typical week-long RIB experiment at IMP produces ~1-10 TB of compressed data.

## Data Analysis: From Raw Data to Physics Results

### Raw Data Processing

The DAQ writes binary event files containing digitized detector signals tagged with timestamps and channel addresses (Brun & Rademakers, 1997). The first step unpacks these into structured ROOT TTrees, mapping channel addresses to physical detector elements. Pedestal subtraction removes the DC offset from each channel (measured in no-beam runs or from pre-signal waveform regions). Gain matching and calibration convert raw ADC values to physical units: energy calibration uses known alpha sources or reactions with well-known $Q$-values; position calibration uses mask runs or known beams; timing calibration uses precision calibrators and time-walk corrections. For TPCs, the [[Drift Velocity]] $v_d$ converting [[Drift Time]] to position depends on gas composition, pressure, temperature, and field strength, and must be monitored continuously.

### Particle Identification

[[Particle Identification]] determines $Z$ and $A$ (or $A/Q$) of each detected particle.

**Upstream beam PID** combines ToF (from plastic scintillators or [[Diamond Detector|diamond detectors]]), $\Delta E$ (from [[Ionisation Chamber|ionization chambers]] or [[MUSIC Detector|MUSIC]]), and $B\rho$ (from [[PPAC]] positions at dispersive focal planes) to produce a $Z$ vs. $A/Q$ plot where each isotope forms a distinct cluster. At [[BigRIPS]], this achieves $\Delta(A/Q)/(A/Q) < 0.05\%$ (Fukuda et al., 2013).

**Reaction product PID** uses the [[ΔE-E Method]]: a thin $\Delta E$ detector and thick $E$ detector yield $\Delta E \times E \propto Z^2 A$, producing characteristic "banana" curves for each isotope (Tassan-Got & Stephan, 2002). 2D graphical gates in ROOT select specific species.

**TPC-based PID** uses spatially resolved [[dE-dx|$\mathrm{d}E/\mathrm{d}x$]] along tracks. The truncated mean of per-row charge measurements (discarding the highest 30-40% to suppress Landau-tail fluctuations) gives the best resolution (~5-10% for heavy ions). Plotting $\mathrm{d}E/\mathrm{d}x$ vs. total energy or magnetic rigidity separates species. Machine-learning classifiers (e.g., ResNet-based PID) are also being explored for improved gate efficiency and purity.

### Track Reconstruction

[[Track Reconstruction]] in TPC experiments converts raw pad signals into three-dimensional trajectories through a multi-stage chain.

**Hit and cluster finding.** Each pad waveform is analyzed for above-threshold peaks, fitted (typically with Gaussians) to extract amplitude, drift time ($z$-coordinate), and pad position ($x$, $y$). Adjacent hits are grouped into clusters representing spatial crossing points.

**Track finding** identifies which clusters belong to the same trajectory. The [[Hough Transform]] maps each point to a parameter space where track candidates appear as peaks -- robust against outliers and gaps. [[RANSAC]] (Random Sample Consensus) repeatedly samples minimal point subsets, fits a track model, and keeps the model with the highest inlier count -- effective when delta electrons and noise hits produce a high outlier fraction. Cellular automaton methods link nearby points into tracklets for fast, parallelizable processing.

**Track fitting** extracts trajectory parameters. The [[Kalman Filter]] is the standard method (Fruhwirth, 1987): it propagates the track state (position, momentum, covariance matrix) from hit to hit using equations of motion in the magnetic field, updating predictions at each measurement to produce minimum-variance estimates. It naturally incorporates multiple scattering and energy loss in the gas. The Extended Kalman Filter handles nonlinearities of helical motion.

**Vertex reconstruction** finds the reaction vertex by extrapolating beam and product tracks backward and finding the point of closest approach. In an active-target TPC, the vertex is directly visible in the 3D point cloud. Vertex resolution directly impacts excitation-energy resolution in missing-mass measurements.

### Physics Extraction

**[[Missing-Mass Spectroscopy]]** reconstructs the excitation energy of the heavy residue from the measured ejectile:

$$E_x = \sqrt{(E_A + E_a - E_b)^2 - |\vec{p}_A + \vec{p}_a - \vec{p}_b|^2 c^2} - M_B^{(\text{g.s.})} c^2$$

Only the light ejectile needs to be detected -- the heavy residue may be unbound or too short-lived to reach any detector. Resolution is limited by spectrometer momentum resolution, beam energy spread, and target energy-loss straggling. At RIKEN, the SHARAQ spectrometer achieves $p/\Delta p \sim 15000$ (Uesaka et al., 2012). In solenoidal spectrometers (HELIOS, ISS), excitation energy is reconstructed from the energy-position correlation of the ejectile (Kay et al., 2025).

**[[Differential Cross Section|Angular distributions]]** $\mathrm{d}\sigma/\mathrm{d}\Omega$ vs. $\theta_\text{CM}$ are extracted by correcting for detection efficiency (from Geant4 Monte Carlo simulations), transforming lab-frame angles to the center-of-mass frame via the relativistic Jacobian, subtracting backgrounds, and normalizing to solid angle.

**[[DWBA]] comparison and [[Spectroscopic Factor]] extraction.** The theoretical single-particle cross section is computed using [[DWBA]] codes (FRESCO, DWUCK4, TWOFNR) with chosen optical-model parameters and bound-state geometry (Satchler, 1983; Thompson & Nunes, 2009). The spectroscopic factor is the ratio:

$$C^2S = \frac{(\mathrm{d}\sigma/\mathrm{d}\Omega)_\text{exp}}{(\mathrm{d}\sigma/\mathrm{d}\Omega)_\text{DWBA}}$$

The angular distribution shape is diagnostic of the transferred orbital angular momentum $\ell$: $\ell = 0$ is forward-peaked with no diffraction minimum; $\ell = 1$ peaks near 10-20 degrees; $\ell = 2$ shows characteristic oscillations. Uncertainties in $C^2S$ are typically 25-35%, dominated by optical-model parameter choices.

**Excitation energy spectra.** The excitation-energy spectrum is a histogram of reconstructed $E_x$ values after gating on a specific reaction channel (beam isotope + ejectile species). Peaks in this spectrum correspond to populated states in the residual nucleus. From the spectrum one extracts:

- **Peak positions** ($E_x$): excitation energies of nuclear levels, typically fitted with Gaussians convolved with the experimental response function.
- **Peak widths**: the intrinsic width $\Gamma$ of the state (if broader than the experimental resolution) or an upper limit; broad states indicate short lifetimes or particle-unbound resonances.
- **Peak areas**: proportional to the cross section for populating that state, which feeds into the spectroscopic factor extraction.
- **Spin-parity assignments** ($J^\pi$): from the angular distribution shape at each $E_x$.

**Invariant mass reconstruction** handles particle-unbound states. When the residue decays in flight ($B^* \to B' + n$), the invariant mass of all decay products is reconstructed from coincident detection of the charged fragment (in a magnetic spectrometer) and the neutron (in a neutron array via ToF + position).

### From Observables to Conclusions

Spectroscopic factors reveal shell structure: large $C^2S$ for a specific $(n, \ell, j)$ confirms orbital occupation; sudden drops above magic numbers confirm shell gaps; evolution far from stability reveals the disappearance of traditional magic numbers (the "Island of Inversion" at $N \approx 20$) and the emergence of new ones ($N = 16$ in oxygen isotopes) (Otsuka et al., 2020). The systematic quenching of spectroscopic factors ($R_s = C^2S_\text{exp}/C^2S_\text{SM} \approx 0.55$-0.70) probes short-range and tensor correlations beyond the mean-field picture.

These nuclear structure data feed directly into astrophysics: the r-process path through neutron-rich nuclei depends on shell structure at magic numbers $N = 50, 82, 126$, and spectroscopic factors from $(d,p)$ reactions constrain neutron-capture rates for nuclei too short-lived for direct measurement (Mumpower et al., 2023).

### Constraining Nuclear Models

Experimental cross sections and spectroscopic factors constrain theoretical models at multiple levels:

- **Shell model**: Effective interactions (e.g., USD, SDPF-M, GXPF1) predict spectroscopic factors, level energies, and electromagnetic moments. Comparison with transfer-reaction data validates or refutes these interactions, especially for nuclei far from stability where the interactions were not originally fitted.
- **Ab initio methods**: Coupled-cluster, no-core shell model, and self-consistent Green's function calculations now reach medium-mass nuclei. Spectroscopic factors from knockout and transfer reactions provide direct benchmarks for these computations, testing the role of three-nucleon forces and continuum effects.
- **Collective models**: Inelastic scattering cross sections constrain deformation parameters ($\beta_2$, $\beta_4$) and the onset of collectivity, testing predictions from the interacting boson model and beyond-mean-field approaches.

### Typical Publication Structure

A publication reporting results from a RIB direct-reaction experiment typically contains:

1. **Experimental setup description**: beam production, target, detector array, trigger conditions.
2. **PID spectra**: $Z$ vs. $A/Q$ for beam identification; $\Delta E$ vs. $E$ for reaction product identification.
3. **Excitation-energy spectrum**: showing peaks for populated states, with fits indicating $E_x$, $\Gamma$, and cross sections.
4. **Angular distributions**: $\mathrm{d}\sigma/\mathrm{d}\Omega$ vs. $\theta_\text{CM}$ for each state, overlaid with DWBA curves for different $\ell$ transfers.
5. **Level scheme**: energy levels of the residual nucleus with $J^\pi$ assignments from angular distribution analysis.
6. **Spectroscopic factors table**: for each state, listing $E_x$, $J^\pi$, $\ell$, $C^2S_\text{exp}$, and comparison with shell-model predictions $C^2S_\text{SM}$.
7. **Discussion**: implications for shell evolution, comparison with theory, and astrophysical relevance.

An illustrative spectroscopic factors table:

| $E_x$ (MeV) | $J^\pi$ | $n\ell j$ | $C^2S_\text{exp}$ | $C^2S_\text{SM}$ | $R_s$ |
|---|---|---|---|---|---|
| 0.000 | $5/2^+$ | $0d_{5/2}$ | 0.71(18) | 0.92 | 0.77 |
| 0.871 | $1/2^+$ | $1s_{1/2}$ | 0.85(21) | 1.00 | 0.85 |
| 5.085 | $3/2^+$ | $0d_{3/2}$ | 0.60(15) | 0.88 | 0.68 |

*(Illustrative values based on the style of compilations such as Tsang et al., PRC 75 (2007) 064606.)*

### Software Ecosystem

| Software | Purpose |
|---|---|
| **ROOT** | Data analysis framework: TTrees, histograms, PID gates, fitting (Brun & Rademakers, 1997) |
| **Geant4** | Monte Carlo detector simulation for efficiency corrections |
| **LISE++** | Fragment production and separator transmission prediction (Tarasov & Bazin, 2008) |
| **FRESCO** | Coupled-channels and DWBA reaction calculations |
| **DWUCK4 / TWOFNR** | Standard DWBA codes for transfer reactions |
| **ATTPCROOTv2** | Dedicated analysis framework for AT-TPC data |

## References

### Facility and Accelerator References

- J.W. Xia et al., "The heavy ion cooler-storage-ring project (HIRFL-CSR)," *NIM A* **488**, 11 (2002): [ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0168900202004758)
- J.W. Xia et al., "Present status of HIRFL complex in Lanzhou," Proc. HIAT 2018: [JACOW](https://proceedings.jacow.org/hiat2018/papers/mozba01.pdf)
- IMP HIRFL facility: [https://english.imp.cas.cn/research/facilities/HIRFL/](https://english.imp.cas.cn/research/facilities/HIRFL/)
- X.D. Yang et al., "Electron cooling experiments in CSR," arXiv:1110.2543 (2011): [arXiv](https://arxiv.org/pdf/1110.2543)
- R.S. Mao et al., "Feedback of slow extraction in CSRm," *NIM A* **723**, 99 (2013): [ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0168900213001976)
- Yu.A. Litvinov & F. Bosch, "Beta decay of highly charged ions," *Rep. Prog. Phys.* **74**, 016301 (2011)
- X.L. Tu et al., "Precision isochronous mass measurements at the storage ring CSRe," *NIM A* **654**, 213 (2011): [ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0168900211014471)
- X. Xu et al., "$B\rho$-defined isochronous mass spectrometry," *Nucl. Sci. Tech.* **35**, 203 (2024): [Springer](https://link.springer.com/article/10.1007/s41365-024-01587-y)
- Q. Zeng et al., "First application of combined isochronous and Schottky mass spectrometry," *Phys. Rev. C* (2018)
- Springer, "Status of HIAF": [Springer](https://link.springer.com/article/10.1007/s43673-022-00064-1)

### Ion Source References

- H.W. Zhao et al., "Intense beam production with SECRAL," *Rev. Sci. Instrum.* **81**, 02A202 (2010): [PubMed](https://pubmed.ncbi.nlm.nih.gov/24593521/)
- H.W. Zhao et al., "SECRAL-II commissioning," *Rev. Sci. Instrum.* (2018): [PubMed](https://pubmed.ncbi.nlm.nih.gov/29864795/)
- SECRAL-II first commissioning: [JACOW](https://proceedings.jacow.org/ecris2016/papers/tuao04.pdf)
- FECR 4th-generation ECR source: [OSTI](https://www.osti.gov/pages/biblio/1581101)

### Fragment Separator References

- Z. Sun et al., "RIBLL design," *Sci. China* **42** (1999) 528
- Z. Sun et al., "RIBLL performance," *NIM A* **503** (2003) 496
- Z. Sun et al., "RIBLL2 beam line," *Sci. Bull.* **63** (2018) 78
- S.W. Tang et al., "Full realization of RIBLL2," arXiv:2505.00053 (2025): [arXiv](https://arxiv.org/html/2505.00053)
- T. Kubo et al., "BigRIPS and ZeroDegree spectrometer," *PTEP* 2012, 03C003
- N. Fukuda et al., "Identification and separation at BigRIPS," *NIM B* **317** (2013) 323
- H. Geissel et al., "The GSI Fragment Separator (FRS)," *NIM B* **70** (1992) 286
- Y. Blumenfeld et al., "Comparison of ISOL and in-flight methods," *Phys. Scr.* **T152** (2013) 014023
- O.B. Tarasov & D. Bazin, "LISE++ code," *NIM B* **266** (2008) 4657
- J.-J. Gaimard & K.-H. Schmidt, "Abrasion-ablation model," *Nucl. Phys. A* **531** (1991) 709

### Reaction Mechanism References

- G.R. Satchler, *Direct Nuclear Reactions* (Oxford University Press, 1983)
- N.K. Glendenning, *Direct Nuclear Reactions* (World Scientific, 2004)
- I.J. Thompson & F.M. Nunes, *Nuclear Reactions for Astrophysics* (Cambridge University Press, 2009)
- T. Aumann et al., "Quasifree (p,2p) and (p,pn) reactions," *Phys. Rev. C* **88**, 064610 (2013)
- P.G. Hansen & J.A. Tostevin, "Direct Reactions with Exotic Beams," *Annu. Rev. Nucl. Part. Sci.* **53**, 219 (2003)
- T. Otsuka et al., "Evolution of shell structure," *Rev. Mod. Phys.* **92**, 015002 (2020)
- I. Tanihata et al., "Measurements of interaction cross sections," *Phys. Rev. Lett.* **55**, 2676 (1985)
- S. Beceiro-Novo et al., "Active targets and TPCs," *Prog. Part. Nucl. Phys.* **84**, 124 (2015)

### Detector References

- H. Kumagai et al., "Delay-line PPAC," *NIM A* **470** (2001) 562
- L.J. Sun et al., "Silicon detector array at HIRFL-RIBLL," *NST* **29** (2018) 185
- MATE-PA, "Charged particle detector array for MATE," *NST* **35** (2024)
- G.F. Knoll, *Radiation Detection and Measurement*, 4th ed. (Wiley, 2010)
- W. Blum, W. Riegler & L. Rolandi, *Particle Detection with Drift Chambers*, 2nd ed. (Springer, 2008)
- F. Sauli, "GEM: A new concept for electron amplification," *NIM A* **386** (1997) 531

### Electronics and DAQ References

- E. Pollacco et al., "GET: A generic electronics system for TPCs," *NIM A* **887** (2018) 81: [ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0168900218300342)
- H. Spieler, *Semiconductor Detector Systems* (Oxford University Press, 2005)
- W.R. Leo, *Techniques for Nuclear and Particle Physics Experiments*, 2nd ed. (Springer, 1994)
- D.A. Gedcke & W.J. McDonald, "Constant fraction discriminator," *NIM* **55** (1967) 377
- Semi-cylindrical TPC at HIRFL: *Eur. Phys. J. C* **83** (2023); *NST* **36** (2025): [Springer](https://link.springer.com/article/10.1140/epjc/s10052-023-12170-x)

### Data Analysis References

- R. Brun & F. Rademakers, "ROOT," *NIM A* **389** (1997) 81
- R. Fruhwirth, "Kalman filtering for track and vertex fitting," *NIM A* **262** (1987) 444
- T. Uesaka et al., "The SHARAQ spectrometer," *Prog. Part. Nucl. Phys.* **67** (2012) 604
- M.R. Mumpower et al., "Nuclear quests for the r-process," *Eur. Phys. J. A* **59** (2023) 121
- B.P. Kay et al., "Solenoidal spectrometer kinematics," arXiv:2501.04731 (2025)
- L. Tassan-Got & C. Stephan, "$\Delta E$-$E$ identification," *NIM B* **194** (2002) 503

### Vault Links

[[Radioactive Isotope Beam]] | [[HIRFL]] | [[CSR]] | [[RIBLL]] | [[Ion Source]] | [[Fragment Separator]] | [[Secondary Beam]] | [[Superconducting Electron Cyclotron Resonance]] | [[Cyclotron]] | [[Synchrotron]] | [[Projectile Fragmentation]] | [[BigRIPS]] | [[Achromatic Degrader]] | [[Magnetic Rigidity]] | [[ISOL]] | [[Inverse Kinematics]] | [[Direct Reactions]] | [[Transfer Reactions]] | [[Knockout Reactions]] | [[Charge-Exchange Reaction]] | [[Spectroscopic Factor]] | [[Missing-Mass Spectroscopy]] | [[Differential Cross Section]] | [[DWBA]] | [[Time Projection Chamber]] | [[Active-Target TPC]] | [[PPAC]] | [[MUSIC Detector]] | [[Ionisation Chamber]] | [[Silicon Detector]] | [[Scintillation Detector]] | [[HPGe Detector]] | [[GEM Detector]] | [[Micromegas]] | [[Diamond Detector]] | [[DAQ]] | [[ADC]] | [[TDC]] | [[FPGA]] | [[ASIC]] | [[Preamplifier]] | [[Constant Fraction Discriminator]] | [[Leading-Edge Discriminator]] | [[Spill Gate]] | [[Dead Time]] | [[Coincidence Detection]] | [[Particle Identification]] | [[ΔE-E Method]] | [[dE-dx]] | [[Bethe-Bloch Formula]] | [[Time-of-Flight]] | [[Track Reconstruction]] | [[RANSAC]] | [[Kalman Filter]] | [[Hough Transform]] | [[Coulomb Excitation]] | [[Stopping Power]] | [[Diffusion]] | [[Drift Time]] | [[Drift Velocity]] | [[PID]] | [[Signal-to-Noise Ratio]]