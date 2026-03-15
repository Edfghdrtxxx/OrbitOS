# Detector Systems in RIB Experiments

A radioactive isotope beam (RIB) experiment deploys an orchestrated chain of detectors spanning three spatial regions: **upstream** (beam characterization before the target), the **reaction area** (where nuclear reactions occur and products are detected), and **downstream** (forward-going fragments, neutrons, and beam diagnostics). Each region addresses distinct physics observables, and only their combined information yields a complete event reconstruction.

---

## 1 Upstream Detectors — Beam Characterization

Because in-flight RIBs are cocktail beams containing multiple isotope species, every incoming particle must be identified and tracked **event by event** before it reaches the reaction target.

### 1.1 Parallel Plate Avalanche Counters (PPACs)

[[PPAC|PPACs]] are thin gaseous detectors placed at focal planes of the fragment separator (e.g., RIBLL1/RIBLL2 at IMP, or BigRIPS at RIKEN). Each PPAC consists of two parallel electrode plates filled with low-pressure gas (typically a few Torr of isobutane), providing:

- **Position** ($x$, $y$) via delay-line or strip readout, with sub-millimetre spatial resolution.
- **Timing** at the ~100 ps level, serving as a time-of-flight (ToF) start or stop signal.
- **Trajectory reconstruction** — a pair of PPACs at two focal planes (e.g., F3 and F5 in BigRIPS) determines both position and angle, enabling magnetic rigidity ($B\rho$) reconstruction through the dipole magnets between them.

The material budget of a PPAC is extremely low (~30 mg/cm$^2$), roughly one-tenth that of other position-sensitive gaseous detectors, so it introduces minimal energy loss and angular straggling to the beam [Kumagai et al., NIM A 470 (2001) 562].

### 1.2 Plastic Scintillators

Thin plastic scintillator foils are placed at key focal planes (e.g., F3 and F7 in BigRIPS, or F1 in RIBLL2) to provide:

- **Fast timing** — plastic scintillators coupled to [[Photomultiplier Tube|photomultiplier tubes]] deliver sub-nanosecond timing resolution, forming the start and stop of the ToF measurement over the flight path between focal planes.
- **Trigger generation** — the fast signal from a plastic scintillator serves as the master trigger for the DAQ system, defining the event timing reference.
- **Energy-loss information** — although coarse compared to a [[MUSIC Detector|MUSIC]] or [[Silicon Detector|silicon detector]], the pulse height gives a rough $\Delta E$ proportional to $Z^2$ that aids online beam tuning.

At RIBLL2-F1, a plastic scintillation sheet (100 $\times$ 100 mm$^2$ active area) combined with a 50-strip scintillator array provides both timing and position, achieving a momentum resolution of $\sim 1.9 \times 10^{-3}$ [RIBLL2 commissioning, arXiv:2505.00053].

### 1.3 Event-by-Event Beam Particle Identification

The upstream detectors work together through the **$\Delta E$–$B\rho$–ToF method**:

| Observable | Measured by | Determines |
|---|---|---|
| $\Delta E$ (energy loss) | MUSIC or plastic scintillator | Atomic number $Z$ ($\Delta E \propto Z^2$, [[Bethe-Bloch Formula]]) |
| $B\rho$ (magnetic rigidity) | PPACs at two focal planes + dipole field | Momentum per charge $p/Q$ |
| ToF (time of flight) | Plastic scintillators at two focal planes | Velocity $\beta = v/c$ |

From $B\rho$ and $\beta$, one obtains the mass-to-charge ratio $A/Q = B\rho / (3.107 \beta\gamma)$ [u]. Combined with $Z$ from $\Delta E$, each beam particle is uniquely identified in a two-dimensional $Z$ vs. $A/Q$ plot. At BigRIPS, this scheme achieves $A/Q$ resolution as good as $3.4 \times 10^{-4}$ (RMS), sufficient to resolve charge states of heavy fragments [Fukuda et al., NIM B 317 (2013) 323].

---

## 2 Reaction-Area Detectors

### 2.1 Time Projection Chambers (TPCs) and Active-Target TPCs

The [[Time Projection Chamber]] is the workhorse detector for 3D charged-particle tracking. A uniform electric field drifts ionization electrons to a segmented readout plane (pads or strips); the $(x,y)$ position comes from pad hits and the $z$-coordinate from the measured drift time. The specific energy loss $\mathrm{d}E/\mathrm{d}x$ along each track provides particle identification via the [[Bethe-Bloch Formula]].

In an [[Active-Target TPC]], the detector gas itself serves as the reaction target, eliminating a separate solid or liquid target. This has several critical advantages for RIB experiments:

- **Thick effective target without resolution loss** — because the vertex position is reconstructed event by event, the full gas volume contributes to luminosity without degrading energy resolution. Conventional thick targets would broaden the energy of reaction products.
- **Near-$4\pi$ solid-angle coverage** — short-range, low-energy recoils that would stop inside a conventional target are tracked directly in the gas.
- **Sensitivity at low beam intensities** — experiments are feasible down to ~100 particles per second (pps), critical for the most exotic beams.

The fill gas is chosen to match the desired target nucleus: ${}^4$He for $(\alpha,\alpha')$ scattering, deuterium gas for $(d,p)$ transfer reactions, or isobutane mixtures for heavier targets. Typical operating pressures are 50–500 Torr, balancing luminosity against spatial resolution (higher pressure increases straggling and diffusion).

**Gas amplification** before the readout plane is provided by [[Micromegas]] meshes, [[GEM Detector|GEM]] foils, or Thick-GEM (THGEM) structures. The amplified signals are digitized by dedicated electronics such as the GET (General Electronics for TPCs) system, which provides 256 channels per ASIC with a sampling rate up to 100 MHz [Pollacco et al., NIM A 887 (2018) 81].

When operated inside a **solenoidal magnet**, the AT-TPC gains additional capability: the curvature of tracks in the magnetic field provides a direct measurement of magnetic rigidity ($B\rho$), enabling particle identification and excitation-energy determination without auxiliary detectors. This configuration has been used at FRIB (MSU) for transfer reactions such as ${}^{12}$Be$(p,d){}^{11}$Be and inelastic scattering like ${}^{14}$C$(p,p')$ [Bradt et al., Front. Phys. (2025)].

**IMP-specific example:** The **MATE** (Multi-purpose Active-target Time projection chamber for nuclear astrophysical and Exotic beam experiments) at HIRFL is a 4000-channel AT-TPC developed by the Radioactive Ion Beam Physics Group at IMP. It is coupled with an auxiliary charged-particle array (MATE-PA) consisting of forward double-layer silicon detectors for $\Delta E$–$E$ identification of light charged particles. MATE is designed for nuclear fusions, transfer reactions, charge-exchange reactions, and exotic decay studies using radioactive beams from RIBLL [MATE-PA: NST 35 (2024)].

### 2.2 Silicon Detector Arrays

[[Silicon Detector|Silicon detectors]] provide excellent energy resolution ($\sim 0.1$–$1\%$) due to the low pair-creation energy in silicon ($\sim 3.6$ eV per electron-hole pair). In RIB experiments they appear in two main configurations:

**$\Delta E$–$E$ telescopes:** A thin silicon layer ($\sim 40$–$100\;\mu$m) measures the energy loss $\Delta E$, and a thick layer ($\sim 300$–$1500\;\mu$m) stops the particle and measures the residual energy $E$. The combination identifies particle species through the [[ΔE-E Method|$\Delta E$–$E$ method]], since $\Delta E \propto Z^2 A / E$.

**Position-sensitive configurations:**
- *Double-Sided Silicon Strip Detectors (DSSDs)* — orthogonal strip patterns on front and back faces give $(x,y)$ position with strip pitch as fine as $\sim 0.3$ mm.
- *Quadrant Silicon Detectors (QSDs)* — four-quadrant segmentation for coarser position with large area coverage.

At HIRFL-RIBLL, a silicon detector array consisting of **five telescope sets of three types** has been used for simultaneous measurement of elastic scattering and breakup angular distributions of light radioactive beams [Sun et al., NST 29 (2018) 185]. Silicon strip detectors downstream of an active-target TPC provide complementary $\Delta E$–$E$ particle identification for reaction products that escape the gas volume.

### 2.3 Gamma-Ray Detectors

Nuclear reactions often leave the residual nucleus in an excited bound state that de-excites by emitting prompt gamma rays. Measuring these gamma rays provides:

- **Level scheme information** — excited-state energies and spin-parity assignments.
- **Transition probabilities** — related to nuclear matrix elements and collectivity via $B(E2)$ values.
- **Event tagging** — gamma-ray coincidence selects specific reaction channels.

Three classes of gamma-ray detectors are used:

| Detector type | Energy resolution | Efficiency | Use case |
|---|---|---|---|
| [[HPGe Detector|HPGe arrays]] (e.g., GRETA, AGATA) | ~0.2% at 1.33 MeV | Lower (per crystal) | High-resolution spectroscopy, level schemes |
| CsI(Na) arrays (e.g., CAESAR) | ~10% FWHM at 1 MeV | ~35% full-energy peak | In-beam fast-beam experiments, high efficiency |
| NaI(Tl) or BaF$_2$ arrays | ~7% at 1.33 MeV | Moderate | Total-absorption spectroscopy, calorimetry |

For experiments with fast beams ($\beta \sim 0.3$–$0.6$), **Doppler correction** is essential: the gamma-ray energy in the lab frame is shifted by the Lorentz factor of the emitting nucleus, and event-by-event knowledge of the velocity vector (from upstream ToF and tracking) is required to recover the intrinsic transition energy.

At IMP's External Target Facility (ETF) on RIBLL2, gamma-ray detector arrays are deployed around the secondary target position for in-beam spectroscopy experiments [IMP RIB Physics Group].

### 2.4 MUSIC (Multi-Sampling Ionization Chamber)

The [[MUSIC Detector]] is a gas-filled [[Ionisation Chamber|ionization chamber]] segmented into 4–8 anode pads along the beam axis. Each segment independently measures the energy loss $\Delta E$ of a traversing heavy ion, and averaging $N$ independent samples improves the charge ($Z$) resolution by a factor of $\sqrt{N}$. Individual segments affected by delta electrons or pile-up can be rejected without losing the event.

MUSIC detectors are typically filled with CF$_4$ or P10 (Ar + 10% CH$_4$) gas. At both BigRIPS (RIKEN) and RIBLL2 (IMP), MUSIC chambers downstream of the separator provide the $\Delta E$ measurement for the $Z$ identification in the $\Delta E$–$B\rho$–ToF particle identification scheme. At RIBLL2-F4, two MUSIC chambers with a combined length of 520 mm provide charge resolution of $\sigma_Z \sim 0.12$–$0.18$ depending on the atomic number of the fragment [RIBLL2 commissioning, arXiv:2505.00053].

---

## 3 Downstream Detectors

### 3.1 $\Delta E$–$E$ Telescopes for Forward Fragments

In inverse-kinematics direct reactions (heavy beam on light target), the beam-like fragments and light recoils are strongly forward-focused. Downstream telescope arrays — typically combinations of silicon detectors and CsI(Tl) or plastic scintillator stopping layers — are placed at forward angles to:

- Identify the mass and charge of the heavy reaction residue.
- Measure its kinetic energy and angle for missing-mass reconstruction.
- Detect coincident light particles (protons, deuterons, alphas) emitted at forward angles.

The GODDESS (Gammasphere ORRUBA Dual Detectors for Experimental Structure Studies) system at ORNL is a representative example: a barrel of position-sensitive silicon strip detectors with upstream and downstream endcaps covers a large fraction of the solid angle, and it is coupled to a gamma-ray array for coincidence measurements.

### 3.2 Neutron Walls and Neutron Arrays

For reactions that produce free neutrons — particularly **nucleon knockout** $(p,pn)$, Coulomb dissociation, and nuclear breakup — dedicated neutron detectors are placed downstream at 3–10 m from the target:

- **Detector material:** Large-volume plastic scintillator bars or liquid scintillator cells. Neutrons are detected indirectly through $(n,p)$ elastic scattering in the hydrogen-rich scintillator; the recoil proton produces scintillation light.
- **Time-of-flight energy measurement:** The neutron kinetic energy is determined from the flight time over the known distance from the target.
- **Pulse-shape discrimination (PSD):** In liquid scintillators, the different scintillation decay profiles of proton recoils (neutrons) vs. electron recoils (gamma rays) allow neutron/gamma separation.

The **NEBULA** (NEutron-detection system for Breakup of Unstable nuclei with Large Acceptance) detector at RIKEN's SAMURAI spectrometer is a premier example: an array of plastic scintillator bars achieving >60% intrinsic efficiency for single-neutron detection at 100–300 MeV, with measured efficiency of ~32.5% per wall module. It operates in coincidence with the SAMURAI dipole magnet, which bends and identifies the charged heavy fragments [Kondo et al., NIM B 463 (2020) 173].

### 3.3 Beam Dump and Faraday Cup

At the terminus of the beamline, a **Faraday cup** or beam dump serves two purposes:

- **Beam current measurement:** The Faraday cup collects all unreacted beam particles and measures the resulting electrical current, providing the absolute beam intensity needed to normalize cross sections. A current of 1 nA corresponds to $\sim 6 \times 10^9$ singly-charged particles per second.
- **Radiation shielding:** The beam dump absorbs the remaining beam energy, preventing activation of downstream equipment and reducing background radiation in the experimental hall.

For secondary RIBs with intensities below $\sim 10^6$ pps, the beam current is too small for a Faraday cup, and normalization is instead performed using upstream scintillator counting rates or calibrated detector efficiencies.

---

## 4 How Detectors Work Together — A Typical Direct-Reaction Setup

A representative detector layout for a direct reaction experiment (e.g., $(d,p)$ transfer in inverse kinematics) at a RIB facility:

```
Beam direction →

[Fragment separator: production target + dipoles/quadrupoles]
        │
        ▼
═══════════════════════════════════════════════════════════════
 F1: Plastic scintillator (ToF start, trigger)
        │
 F2: PPAC pair (position + angle → Bρ₁)
        │
 F3: Plastic scintillator (ToF stop) + PPAC (position)
        │              ↕ Δ E–Bρ–ToF → beam PID
═══════════════════════════════════════════════════════════════
        ▼
  ┌─────────────────────────────────────────┐
  │        REACTION AREA                     │
  │                                          │
  │   [Gamma-ray array surrounding target]   │
  │         ┌───────────────────┐            │
  │         │  AT-TPC / Target  │            │
  │         │  (3D tracking,    │            │
  │         │   vertex, dE/dx)  │            │
  │         └───────────────────┘            │
  │   [Si telescope arrays at backward and   │
  │    lateral angles for light recoils]     │
  └─────────────────────────────────────────┘
        │
        ▼
═══════════════════════════════════════════════════════════════
 Downstream:
   ΔE–E telescopes (forward fragments)
   MUSIC (Z identification of residues)
   Neutron wall / NEBULA (if knockout channel)
   Faraday cup / beam dump
═══════════════════════════════════════════════════════════════
```

**What each detector measures and how measurements combine:**

1. **Beam identification (upstream):** The PPACs and plastic scintillators tag each beam particle with $(Z, A/Q)$, position, angle, and timing. This event-by-event identification ensures that even in a cocktail beam, only events from the desired isotope are analysed.

2. **Reaction vertex and tracks (reaction area):** The TPC or AT-TPC reconstructs the 3D interaction vertex and the trajectories of all charged products. The $\mathrm{d}E/\mathrm{d}x$ along each track identifies the particle species. If operated in a magnetic field, track curvature gives momentum.

3. **Light-particle identification (Si arrays):** Recoil protons, deuterons, or alphas escaping the TPC volume are caught by surrounding silicon telescopes, which provide $\Delta E$–$E$ identification and precise energy measurement.

4. **Gamma-ray tagging (gamma array):** Prompt gamma rays from de-exciting residual nuclei are detected in coincidence, selecting specific final states and providing level-scheme information. Doppler correction uses the known beam velocity.

5. **Fragment identification (downstream):** Forward-going heavy fragments pass through a MUSIC chamber for $Z$ identification and $\Delta E$–$E$ telescopes for $A$ determination. In knockout experiments, the coincident neutron is detected in the neutron wall.

6. **Normalization (beam dump):** The Faraday cup or scintillator count rate provides the total number of beam particles for absolute cross-section determination.

**Kinematic reconstruction:** For a two-body reaction $A(d,p)B$ in inverse kinematics, the proton energy and angle (from the Si array or TPC track) determine the excitation energy of nucleus $B$ via missing-mass analysis:

$$E^* = \sqrt{(E_\text{beam} + E_\text{target} - E_p)^2 - |\vec{p}_\text{beam} + \vec{p}_\text{target} - \vec{p}_p|^2 c^2} - M_B c^2$$

The gamma-ray energy measured in coincidence cross-checks the excitation energy and resolves overlapping states.

---

## 5 IMP-Specific Detector Systems

### 5.1 RIBLL1 at HIRFL

The original Radioactive Ion Beam Line in Lanzhou (RIBLL1) is a 35 m projectile-fragmentation separator with an anti-symmetric doubly-achromatic ion-optical design, operational since 1998. The standard detector suite includes:

- **PPACs** at focal planes for position and angle measurement.
- **Plastic scintillators** for ToF and triggering.
- **QSD (Quadrant Silicon Detectors)** for $\Delta E$ measurements of beam particles.
- **Silicon strip telescope arrays** at the experimental station — e.g., five telescope sets (thin DSSD + thick SSD + CsI backing) for simultaneous elastic scattering and breakup angular distribution measurements [Sun et al., NST 29 (2018) 185].

### 5.2 RIBLL2 at HIRFL-CSR

The Second Radioactive Ion Beam Line (RIBLL2) connects the CSRm and CSRe storage rings, providing RIBs at energies exceeding 300 MeV/u over a 55 m flight path with maximum magnetic rigidity of 10.64 Tm. Two experimental platforms:

- **External Target Facility (ETF) at F2:** A secondary target station equipped with gamma-ray arrays and neutron walls for knockout and production cross-section measurements. Multi-Wire Proportional Chambers (MWPCs) provide beam profile monitoring.
- **RIBLL2-F4 platform:** Newly constructed station with a plastic scintillator for timing, four Multi-Wire Drift Chambers (MWDCs) for trajectory reconstruction, two MUSIC chambers (520 mm total length) for charge identification ($\sigma_Z \sim 0.12$–$0.18$), and ten elongated scintillator bars for light-particle detection. Used for charge-changing cross-section measurements on medium- to heavy-mass nuclei [RIBLL2 commissioning, arXiv:2505.00053].

### 5.3 MATE Active-Target TPC

The **MATE** (Multi-purpose Active-target Time projection chamber for nuclear astrophysical and Exotic beam experiments) is a 4000-channel AT-TPC developed at IMP for experiments on RIBLL. Key features:

- GEM-based gas amplification with segmented pad-plane readout.
- Auxiliary **MATE-PA** charged-particle array: forward double-layer silicon detectors for $\Delta E$–$E$ identification of light charged particles escaping the gas volume, achieving ~1% ($\sigma$) energy resolution for ~10 MeV alpha energy loss.
- Designed for nuclear fusions, transfer reactions, charge-exchange reactions, and exotic decay studies with radioactive beams.
- A gating grid driver has been developed to suppress ion backflow and reduce space-charge effects during operation with intense beams [EPJ C 83 (2023) 618].

### 5.4 Future: HFRS at HIAF

The High energy FRagment Separator (HFRS) at the upcoming HIAF (High Intensity heavy-ion Accelerator Facility) in Huizhou will provide next-generation RIBs with significantly higher intensities. The RIB Physics Group at IMP is developing new detector systems for this facility, including advanced silicon arrays, gamma-ray tracking detectors, and neutron detection systems.

---

## References

- Kumagai, H. et al. (2001). "Delay-line PPAC for radioactive nuclear beams." *NIM A* 470, 562.
- Fukuda, T. et al. (2013). "Identification and separation of radioactive isotope beams by the BigRIPS separator at the RIKEN RI Beam Factory." *NIM B* 317, 323–332. [arXiv:1310.8351]
- Sun, L.J. et al. (2018). "Silicon detector array for radioactive beam experiments at HIRFL-RIBLL." *Nuclear Science and Techniques* 29, 185.
- RIBLL2 commissioning (2025). "Full realization of the RIBLL2 separator at the HIRFL-CSR facility." arXiv:2505.00053.
- Pfützner, M. et al. (1994). "A new MUSIC detector." *NIM A* 346, 73–80.
- Beceiro-Novo, S. et al. (2015). "Active targets and time projection chambers for experiments in nuclear structure and nuclear astrophysics." *Prog. Part. Nucl. Phys.* 84, 124–165.
- Roger, T. et al. (2018). "Demonstrator detection system for the AT-TPC." *NIM A* 895, 126–134.
- Bradt, J. et al. (2025). "Direct reactions with the AT-TPC." *Front. Phys.* doi:10.3389/fphy.2025.1539148.
- MATE-PA (2024). "Construction and performance test of charged particle detector array for MATE." *Nuclear Science and Techniques* 35.
- Kondo, Y. et al. (2020). "Recent progress and developments for experimental studies with the SAMURAI spectrometer." *NIM B* 463, 173.
- Weick, H. et al. (2013). "CAESAR — A high-efficiency CsI(Na) scintillator array for in-beam gamma-ray spectroscopy." *NIM A* 654, 127–134.
- Pollacco, E.C. et al. (2018). "GET: A generic electronics system for TPCs." *NIM A* 887, 81–93.
- Knoll, G.F. (2010). *Radiation Detection and Measurement*, 4th ed. Wiley.
- Blum, W., Riegler, W. & Rolandi, L. (2008). *Particle Detection with Drift Chambers*, 2nd ed. Springer.
- Sauli, F. (1997). "GEM: A new concept for electron amplification in gas detectors." *NIM A* 386, 531–534.
