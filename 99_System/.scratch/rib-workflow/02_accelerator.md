# 2. The Accelerator Complex

The production of radioactive ion beams (RIBs) via projectile fragmentation demands primary beams of sufficient energy and intensity. At IMP, the **Heavy Ion Research Facility in Lanzhou (HIRFL)** and its **Cooler Storage Ring (CSR)** extension form an integrated accelerator chain that takes ions from an ECR ion source all the way to experimental terminals at energies ranging from a few MeV/u up to ~1 GeV/u. This section traces the beam through each stage.

---

## 2.1 Ion Production: ECR Sources

The accelerator chain begins at the ion source. HIRFL uses **Electron Cyclotron Resonance (ECR)** ion sources to produce multiply-charged heavy ions. The flagship source is **SECRAL** (Superconducting ECR ion source with Advanced design in Lanzhou), a third-generation fully superconducting source operating at 18--24 GHz. Its superconducting magnet configuration produces axial fields up to 3.6 T and radial fields up to 2.0 T at the plasma chamber wall [1]. SECRAL routinely delivers highly charged heavy ion beams ranging from protons to bismuth (${}^{209}\text{Bi}^{36+}$, ${}^{209}\text{Bi}^{41+}$); as of 2017 it had accumulated over 28,000 hours of beam delivery to the accelerators [1]. The charge state $q$ selected at the source determines the charge-to-mass ratio $q/A$ and thus the maximum energy achievable downstream.

---

## 2.2 HIRFL: The Two-Cyclotron System

The cyclotron complex consists of two machines operated in tandem:

### 2.2.1 Sector-Focusing Cyclotron (SFC) --- the Injector

| Parameter | Value |
|---|---|
| Type | Isochronous sector-focusing cyclotron |
| K-value | K = 69 |
| Pole diameter | 1.7 m |
| Role | Injector for SSC; standalone low-energy physics |
| Energy range | 0.5--17 MeV/u (depending on ion species and $q/A$) |

The SFC was upgraded from a 1.5 m classical cyclotron built in 1962. As an [[Cyclotron|isochronous cyclotron]], it uses a radially increasing magnetic field $B(r) \propto \gamma(r)$ to maintain the resonance condition $f_\text{RF} = qB/(2\pi \gamma m) = \text{const}$ even as ions become mildly relativistic. When operated independently, the SFC provides beams for low-energy nuclear physics. In the standard RIB-production mode it serves as the injector, pre-accelerating ions to the energies required for injection into the SSC [2, 3].

### 2.2.2 Separated-Sector Cyclotron (SSC) --- the Main Cyclotron

| Parameter | Value |
|---|---|
| Type | Separated-sector cyclotron |
| K-value | K = 450 |
| Commissioned | December 1988 |
| Maximum energy | ~110 MeV/u for ions with $A/q \approx 2$ |
| Role | Main accelerator; delivers beam to RIBLL1 or CSRm |

The SSC receives the pre-accelerated beam from the SFC and boosts it to intermediate energies. The "separated-sector" design uses discrete magnet sectors with RF cavities placed in the field-free straight sections between them, allowing higher voltages and better orbit separation than a compact cyclotron. The maximum energy scales roughly as $T_\text{max} \propto K (q/A)^2$, so light fully-stripped ions ($q/A = 1/2$ for ${}^{12}\text{C}^{6+}$) reach higher energies per nucleon than heavy partially-stripped ions [2, 3].

The SFC+SSC combination was completed in December 1988 and represented the first large-scale heavy-ion accelerator system designed and built entirely in China [2].

**Typical energies from SSC (examples):**

| Ion | Charge state | Approx. energy from SSC |
|---|---|---|
| ${}^{12}\text{C}$ | $6+$ | ~80--100 MeV/u |
| ${}^{40}\text{Ar}$ | $18+$ | ~60--80 MeV/u |
| ${}^{78}\text{Kr}$ | ~$28+$--$36+$ | ~30--50 MeV/u |
| ${}^{238}\text{U}$ | ~$72+$ | ~10--20 MeV/u |

For many experiments --- particularly those requiring RIB production via projectile fragmentation --- the SSC energies are sufficient and the beam is sent directly to the **RIBLL1** fragment separator. However, for higher energies (hundreds of MeV/u), the beam must continue to the CSR synchrotron complex.

---

## 2.3 CSRm: The Main Cooler-Storage Ring (Synchrotron)

The HIRFL-CSR extension, commissioned in 2008, adds synchrotron capability to the facility. The **CSRm** (Cooler Storage Ring, main ring) is a [[Synchrotron]] that receives beam from the SSC and accelerates it to much higher energies.

### 2.3.1 Key Parameters

| Parameter | Value |
|---|---|
| Shape | Racetrack |
| Circumference | 161.00 m |
| Maximum magnetic rigidity $B\rho$ | 12.05 T$\cdot$m |
| Injection energy | 7--25 MeV/u (from SSC) |
| Maximum energy | ~1 GeV/u (${}^{12}\text{C}^{6+}$); ~500 MeV/u (${}^{238}\text{U}^{72+}$) |
| Electron cooler energy | up to 35 keV |
| RF frequency range | 0.25--1.7 MHz (acceleration cavity, $h = 1$) |
| RF stacking cavity | 6.0--14.0 MHz, up to 20 kV |

### 2.3.2 Operating Cycle

The CSRm operates as a synchrotron with the following cycle:

1. **Injection and accumulation.** Beam from the SSC (at 7--25 MeV/u) is injected into CSRm. Because the cyclotron delivers a quasi-continuous beam while the synchrotron has a fixed circumference, multi-turn injection is used. Powerful **DC magnetized electron cooling** at the injection energy compresses the phase space of the circulating beam, allowing many injection shots to be stacked on top of each other. This accumulation process is critical for building up intensity: for ${}^{12}\text{C}^{6+}$, up to $\sim 1.8 \times 10^{10}$ particles have been accumulated after cooling optimization [4].

2. **Acceleration.** Once sufficient intensity is accumulated, the bending magnets ramp up synchronously with the RF frequency (the defining feature of a [[Synchrotron]]). The relation $B\rho = p/q$ is maintained at the design radius as momentum $p$ increases. The beam is accelerated from the injection energy up to the desired extraction energy --- for example, from 7 MeV/u to 200, 400, or even ~900 MeV/u depending on the ion species and $B\rho$ capacity.

3. **Extraction.** Two extraction modes are available (discussed in Section 2.5).

### 2.3.3 Electron Cooling

Electron cooling is essential to CSRm operation. A cold, magnetically guided electron beam co-propagates with the ion beam over a straight section. Coulomb collisions between the "hot" ions and the "cold" electrons transfer energy from the ions to the electrons, reducing the ion beam's emittance and momentum spread. At CSRm the electron cooler operates at up to 35 keV electron energy, covering the full injection energy range from the SSC. Cooling is applied:

- **At injection energy** --- to shrink phase space and enable efficient stacking of multiple injection pulses
- **At intermediate energies** --- measurements have verified cooling performance at 7, 200, and 400 MeV/u for ${}^{12}\text{C}^{6+}$ [4]

---

## 2.4 CSRe: The Experimental Storage Ring

The **CSRe** (Cooler Storage Ring, experimental ring) is a dedicated storage ring designed for precision experiments with stored beams --- both primary and radioactive.

### 2.4.1 Key Parameters

| Parameter | Value |
|---|---|
| Circumference | 128.80 m |
| Maximum magnetic rigidity $B\rho$ | 9.4 T$\cdot$m |
| Transition energy $\gamma_t$ | ~1.395 (isochronous mode), corresponding to ~368 MeV/u for $A/q = 2$ ions |
| Cooling | Electron cooling + stochastic cooling (under development) |
| Detectors | Time-of-flight (TOF) detectors, Schottky resonator, internal gas-jet target, silicon strip detectors |

### 2.4.2 Experimental Techniques at CSRe

**Isochronous Mass Spectrometry (IMS).** The ring is tuned so that its transition energy $\gamma_t$ matches the Lorentz factor $\gamma$ of the stored ions. In this **isochronous mode**, faster ions travel a longer path and slower ions a shorter path, such that the revolution time depends only on the mass-to-charge ratio $m/q$, not on the velocity spread. By measuring revolution times with TOF detectors, nuclear masses can be determined for exotic nuclides with half-lives as short as tens of microseconds --- far too short for conventional Schottky methods that require cooling [5, 6].

A novel refinement, **$B\rho$-defined IMS**, uses two TOF detectors to simultaneously measure each ion's velocity and revolution time, enabling in-flight determination of $B\rho$ and dramatically improving mass resolving power to $\sim 10^5$ ($\sigma$) [6].

**Schottky Mass Spectrometry (SMS).** In this mode, the stored beam is first electron-cooled so that all ions circulate at nearly the same velocity. The revolution frequency then depends directly on $m/q$, and a Schottky resonator picks up the tiny current fluctuations of individual ions. SMS achieves very high mass precision but requires cooling times of seconds, limiting it to longer-lived species [5].

**Combined IMS + SMS.** The first application of simultaneous isochronous and Schottky techniques at CSRe has been used to measure half-lives of fully ionized ${}^{49}\text{Cr}^{24+}$ and ${}^{53}\text{Fe}^{26+}$, demonstrating the power of combining both methods [7].

**In-ring nuclear reactions.** Silicon strip detectors compatible with ultra-high vacuum have been installed in CSRe to measure direct nuclear reactions using an internal gas-jet target. Proton elastic scattering on stored ${}^{58}\text{Ni}$ and ${}^{78}\text{Kr}$ beams has been used to extract nuclear matter distribution radii [8].

---

## 2.5 Beam Extraction and Delivery

The CSRm provides two extraction modes, each suited to different experimental requirements:

### 2.5.1 Fast Extraction

- **Method:** Single-turn extraction using a fast kicker magnet that deflects the entire beam in one revolution
- **Beam structure:** Short, intense pulse (single bunch)
- **Primary use:** Producing RIBs via projectile fragmentation. The fast-extracted beam strikes a production target, and the fragments are separated in RIBLL2, then either delivered to external experimental terminals or injected into CSRe for storage-ring experiments.

### 2.5.2 Slow Extraction

- **Method:** Third-order resonance driven by sextupole magnets, combined with an **RF knockout (RF-KO)** excitation system. A transverse RF field (broadband noise) gradually pushes particles across the separatrix of the third-order resonance, causing them to spiral out of the ring over many turns.
- **Beam structure:** Quasi-continuous (seconds-long spill)
- **Spill quality:** A feedback system using fast-response quadrupoles suppresses ripple caused by main power supply noise, producing a flat spill structure essential for detector experiments [9]
- **Primary use:** Delivering beam to fixed-target experimental terminals (e.g., the biomedical irradiation terminal CSRm-ET1, the nuclear data terminal CSRm-ET2) where a uniform, sustained beam is required

### 2.5.3 Beam Lines and Experimental Areas

| Beam line / Terminal | Source | Purpose |
|---|---|---|
| **RIBLL1** | SSC (direct) | RIB production at SSC energies (~tens of MeV/u); operational since 1998 |
| **RIBLL2** | CSRm (fast extraction) | RIB production at CSR energies (up to hundreds of MeV/u); connects CSRm to CSRe; 55 m length, 4 focal planes (F0--F4), $B\rho_\text{max}$ = 10.64 Tm, angular acceptance $\pm$25 mrad, momentum acceptance $\pm$1%; operational since 2008 [10] |
| **ETF** (External Target Facility) | RIBLL2 (F4) | Fixed-target nuclear reaction experiments with RIBs; equipped with MUSIC ionization chambers, MWDCs, scintillator arrays |
| **CSRm-ET1** | CSRm (slow extraction) | Biomedical research: heavy-ion radiobiology and therapy studies; horizontal beam with passive/active delivery |
| **CSRm-ET2** | CSRm (slow extraction) | Nuclear data measurements: neutron TOF spectrometry, light charged-particle spectrometry, activation measurements |
| **CSRe** | RIBLL2 injection | Storage-ring physics: mass measurements (IMS/SMS), in-ring reactions, lifetime measurements |

---

## 2.6 Beam Energy and the Physics It Enables

The energy of the primary beam determines which nuclear reaction mechanisms are accessible and, consequently, what physics can be studied. The following energy regimes are relevant at HIRFL-CSR:

### 2.6.1 Below the Coulomb Barrier ($\lesssim 5$--$10$ MeV/u for heavy systems)

At energies below the Coulomb barrier $V_C \approx \frac{Z_1 Z_2 e^2}{4\pi\varepsilon_0 (R_1 + R_2)}$, the projectile and target nuclei cannot make contact. Only long-range Coulomb excitation and sub-barrier fusion (via quantum tunneling) are possible. This regime is accessible with the SFC alone.

### 2.6.2 Near and Above the Barrier ($\sim 5$--$30$ MeV/u)

Once the beam energy exceeds the Coulomb barrier, nuclear contact occurs. **Transfer reactions**, **deep-inelastic collisions**, **fusion-evaporation**, and **fusion-fission** become dominant. These energies are routinely provided by the SFC+SSC combination and are used at RIBLL1 for producing neutron-deficient RIBs near the valley of stability via fusion-evaporation and transfer reactions.

### 2.6.3 Intermediate Energy ($\sim 30$--$300$ MeV/u)

This is the **projectile fragmentation** regime, the primary mechanism for RIB production at HIRFL-CSR. At these energies the projectile velocity is a significant fraction of $c$, and peripheral nuclear collisions shear nucleons off the projectile, producing a forward-focused cone of fragments. Key characteristics:

- **Fragmentation cross-sections** become large ($\sim 100$ mb and above for individual isotopes) above $\sim 30$ MeV/u [11]
- The fragments emerge with nearly the same velocity as the projectile (kinematic focusing), enabling efficient collection by a fragment separator
- Both neutron-rich and neutron-deficient exotic nuclei are produced
- The RIBLL2 separator operates primarily around **300--400 MeV/u**, which has been demonstrated with ${}^{40}\text{Ar}$ at 400 MeV/u and ${}^{78}\text{Kr}$ at 350 MeV/u beams [10]

### 2.6.4 Relativistic Energy ($\gtrsim 300$ MeV/u up to ~1 GeV/u)

At these energies, available for light ions via CSRm, the nuclear reaction dynamics enter a regime where:

- **Multifragmentation** and **spallation** become significant
- Fragments are even more forward-focused, improving separator collection efficiency
- **Nuclear equation of state (EOS)** studies become possible through collective flow observables
- Storage ring experiments benefit from the higher $\gamma$, which stretches laboratory-frame lifetimes of short-lived nuclides via time dilation, aiding detection

### 2.6.5 Summary Table

| Energy regime | Typical source | Dominant reactions | Key physics |
|---|---|---|---|
| $< 10$ MeV/u | SFC | Coulomb excitation, sub-barrier fusion | Nuclear structure, astrophysical S-factors |
| 10--30 MeV/u | SFC+SSC | Transfer, deep-inelastic, fusion-evaporation | Shell structure, neutron-deficient nuclei |
| 30--300 MeV/u | SSC or CSRm | **Projectile fragmentation** | RIB production, exotic nuclei far from stability |
| 300--1000 MeV/u | CSRm | Fragmentation, spallation, multifragmentation | Nuclear EOS, stored-beam mass measurements |

---

## 2.7 From Cyclotrons to Synchrotron: Why Both?

The HIRFL-CSR complex exemplifies the **hybrid cyclotron-synchrotron** design philosophy common in modern heavy-ion facilities (see [[Synchrotron_vs_Cyclotron]]):

- **Cyclotrons** (SFC+SSC) provide **high-current, continuous beam** at moderate energies --- ideal for injection and for experiments that need high beam intensity but not extreme energy.
- **Synchrotrons** (CSRm) provide **variable, high energy** with beam cooling and accumulation --- essential for reaching the hundreds-of-MeV/u regime needed for efficient projectile fragmentation of medium-mass and heavy ions, and for preparing beams for storage-ring experiments.

The cyclotrons serve as the injector chain, and the synchrotron provides the final acceleration stage. This division of labor leverages each machine type's strengths (see [[Cyclotron]] and [[Synchrotron]] for detailed comparisons).

---

## References

[1] H.W. Zhao et al., "Intense beam production of highly charged heavy ions by SECRAL," *Rev. Sci. Instrum.* **81**, 02A202 (2010); also H.W. Zhao et al., *Phys. Rev. Accel. Beams* **20**, 094801 (2017). See [SECRAL at PubMed](https://pubmed.ncbi.nlm.nih.gov/22380167/).

[2] HIRFL facility page, Institute of Modern Physics, CAS: [https://english.imp.cas.cn/research/facilities/HIRFL/](https://english.imp.cas.cn/research/facilities/HIRFL/)

[3] J.W. Xia et al., "Present status of HIRFL complex in Lanzhou," Proc. HIAT 2018, MOZBA01: [https://proceedings.jacow.org/hiat2018/papers/mozba01.pdf](https://proceedings.jacow.org/hiat2018/papers/mozba01.pdf)

[4] X.D. Yang et al., "Electron cooling experiments in CSR," arXiv:1110.2543 (2011): [https://arxiv.org/pdf/1110.2543](https://arxiv.org/pdf/1110.2543); also Proc. SAP 2014, THPMH2: [https://proceedings.jacow.org/SAP2014/papers/thpmh2.pdf](https://proceedings.jacow.org/SAP2014/papers/thpmh2.pdf)

[5] Yu.A. Litvinov and F. Bosch, "Beta decay of highly charged ions," *Rep. Prog. Phys.* **74**, 016301 (2011); Storage Ring Nuclear Physics Group, IMP: [https://english.imp.cas.cn/research/rc/npr/srpg/](https://english.imp.cas.cn/research/rc/npr/srpg/)

[6] X.L. Tu et al., "Precision isochronous mass measurements at the storage ring CSRe in Lanzhou," *Nucl. Instrum. Methods A* **654**, 213 (2011): [https://www.sciencedirect.com/science/article/abs/pii/S0168900211014471](https://www.sciencedirect.com/science/article/abs/pii/S0168900211014471); also X. Xu et al., "$B\rho$-defined isochronous mass spectrometry," *Nucl. Sci. Tech.* **35**, 203 (2024): [https://link.springer.com/article/10.1007/s41365-024-01587-y](https://link.springer.com/article/10.1007/s41365-024-01587-y)

[7] Q. Zeng et al., "First application of combined isochronous and Schottky mass spectrometry," *Phys. Rev. C* (2018): [https://www.researchgate.net/publication/322810300](https://www.researchgate.net/publication/322810300)

[8] Radioactive Ion Beam Physics Group, IMP: [https://english.imp.cas.cn/research/rc/npr/ribpg/](https://english.imp.cas.cn/research/rc/npr/ribpg/); Storage Ring Nuclear Physics Group, IMP: [https://english.imp.cas.cn/research/rc/npr/srpg/](https://english.imp.cas.cn/research/rc/npr/srpg/)

[9] R.S. Mao et al., "Feedback of slow extraction in CSRm," *Nucl. Instrum. Methods A* **723**, 99 (2013): [https://www.sciencedirect.com/science/article/abs/pii/S0168900213001976](https://www.sciencedirect.com/science/article/abs/pii/S0168900213001976)

[10] Z. Sun et al., "Full realization of the RIBLL2 separator at the HIRFL-CSR facility," arXiv:2505.00053 (2025): [https://arxiv.org/html/2505.00053](https://arxiv.org/html/2505.00053); also Y.Z. Sun et al., *Sci. China Phys. Mech. Astron.* (2018): [https://www.sciencedirect.com/science/article/abs/pii/S2095927317306242](https://www.sciencedirect.com/science/article/abs/pii/S2095927317306242)

[11] Liverpool PHYS490 lecture notes on projectile fragmentation: [https://ns.ph.liv.ac.uk/PHYS490/Chapter13.pdf](https://ns.ph.liv.ac.uk/PHYS490/Chapter13.pdf); also J.W. Xia et al., "The heavy ion cooler-storage-ring project (HIRFL-CSR) at Lanzhou," *Nucl. Instrum. Methods A* **488**, 11 (2002): [https://www.sciencedirect.com/science/article/abs/pii/S0168900202004758](https://www.sciencedirect.com/science/article/abs/pii/S0168900202004758)
