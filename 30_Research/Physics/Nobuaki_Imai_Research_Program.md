---
type: research
status: active
tags:
  - nuclear-physics
  - UTokyo-CNS
  - RIKEN-RIBF
  - direct-reactions
  - detector-development
created: 2026-03-13
---
# Prof. Nobuaki Imai — Research Program

## 1. Prof. Nobuaki Imai — Overview

**Nobuaki Imai** (今井伸明) is an Associate Professor at the [[UTokyo CNS|Center for Nuclear Study (CNS)]], University of Tokyo, a position he has held since 2014. He is the scientific coordinator of the **[[OEDO]]-[[SHARAQ Spectrometer|SHARAQ]]** beamline system at [[RIKEN Nishina Center for Accelerator-Based Science (RNC)|RIKEN RIBF]].

**Career trajectory:**
- **PhD** — University of Tokyo
- **RIKEN** — postdoctoral research
- **KEK** (High Energy Accelerator Research Organization) — ~10 years, including 2 years as a visiting researcher at **CERN**
- **CNS, UTokyo** — Associate Professor (2014–present)

His publication record spans **~288 publications** with **4,461+ citations**, reflecting sustained contributions across three interconnected research themes:

1. **Nuclear structure via [[Radioactive Isotope Beam|RI beams]]** — probing [[Shell Evolution|shell evolution]], [[Deformation Coexistence|deformation coexistence]], and collective modes far from stability
2. **Nuclear reaction dynamics** — [[Charge-Exchange Reaction|charge-exchange reactions]], [[Transfer Reactions|nucleon transfer]], and [[Surrogate Reaction|surrogate methods]] for astrophysical cross sections
3. **Detector development** — diamond detectors, GEM/THGEM-based TPCs, and beam diagnostics for low-energy RI beam experiments

---

## 2. DONUTS Group

**DONUTS** is Imai's research group at [[UTokyo CNS]]. The acronym expansion is not publicly documented in available materials.

### Research Program

The group's physics program spans two broad pillars:

**Nuclear Structure:**
- [[Deformation Coexistence]] in neutron-rich nuclei
- Collective motions (rotational bands, vibrational excitations)
- Extreme rotation and high-spin states

**Nuclear Reaction Dynamics:**
- Astrophysical nucleosynthesis — neutron capture cross sections relevant to the [[r-process|rapid neutron capture process]]
- Superheavy element production mechanisms
- Nuclear waste transmutation via surrogate reaction methods

### SAKURA Sub-project

**SAKURA** — *Study of Astrophysical Key reactions in the Universe with low-energy RI beam Apparatus* — is the group's main astrophysics initiative. It exploits the OEDO beamline to produce low-energy RI beams for surrogate $(d,p)$ reactions that constrain $(n,\gamma)$ cross sections on unstable nuclei inaccessible to direct neutron irradiation.

### Current Members (as of early 2026)

| Role | Name | Notes |
|------|------|-------|
| PI | Nobuaki Imai | Associate Professor |
| D2 | Jiatai Li | RIKEN JRA fellow |
| Research student | Qin Hao | — |
| MEXT scholar | Yasmin Anuar | — |

**Related group at CNS:** Prof. Nori Aoi leads the **NUSPEQ** group (Nuclear Structure and Production of Exotic Quanta), which operates the CAT-M [[Active-Target TPC|active-target TPC]]. Both groups share the OEDO-SHARAQ infrastructure and collaborate closely.

---

## 3. OEDO-SHARAQ System

### 3.1 Purpose and Motivation

The **OEDO** system (*Optimized Energy-Degrading Optics for RI beams*) solves a fundamental problem at in-flight [[Radioactive Isotope Beam|RI beam]] facilities: projectile fragmentation and in-flight fission at [[BigRIPS]] produce secondary beams at $\sim200$ MeV/u, but many reaction studies — [[Transfer Reactions|nucleon transfer]], sub-barrier [[Coulomb Excitation|Coulomb excitation]], [[Surrogate Reaction|surrogate reactions]] — require beam energies of $10$–$50$ MeV/u with good energy resolution.

Conventional thick degraders destroy beam quality (emittance blow-up, straggling). OEDO achieves achromatic energy degradation while preserving beam optics.

**Construction completed:** March 2017. **First beam:** June 2017.

### 3.2 Technical Design — Three Key Components

#### 1. Angle-Tunable Wedge Degrader (at dispersive focus)

Placed at the momentum-dispersive focal plane of [[BigRIPS]], the wedge degrader exploits the position–momentum correlation: higher-momentum particles traverse more material and lose more energy. By matching the wedge angle to the dispersion, the energy degradation becomes **achromatic** — all momentum components converge to the same mean energy downstream, eliminating first-order momentum spread from the degrader.

#### 2. RF Deflector

A radio-frequency deflecting cavity converts **longitudinal phase-space correlations** (time-of-flight ↔ energy correlations introduced by the degrader) into **transverse position correlations**. The RF field kicks particles sideways proportionally to their arrival time, mapping the time structure onto spatial coordinates that downstream optics can correct.

A critical secondary function: particles with the **wrong mass-to-charge ratio** $A/Q$ arrive at different RF phases and receive different transverse kicks, enabling **contaminant filtering** without additional material in the beam path. A slit system downstream of the RF deflector selects the corrected beam component and rejects contaminants that received off-phase kicks.

#### 3. Superconducting Quadrupole Triplet Magnets (two sets)

Two sets of superconducting quadrupole triplets **refocus** the decelerated beam onto the secondary reaction target at the S0 focal point, compensating for the emittance growth from energy degradation and restoring a usable beam spot.

### 3.3 Performance

| Parameter | Value |
|-----------|-------|
| Momentum acceptance | $\pm 2\%$ |
| Beam spot at S0 | $< 10$ mm |
| Transmission (BigRIPS → S0) | $\sim 18\%$ |
| Output energy range | $10$–$50$ MeV/u (tunable) |

### 3.4 SHARAQ Spectrometer

Downstream of S0, the **SHARAQ** magnetic spectrometer (configuration: **QQDQD** — two quadrupoles, dipole, quadrupole, dipole) performs high-resolution [[Missing-Mass Spectroscopy|missing-mass spectroscopy]] with a resolving power of:

$$\frac{\Delta p}{p} = \frac{1}{15000}$$

This combination — an energy-degrading RI beamline feeding a high-resolution spectrometer — is currently the only facility of its kind, combining achromatic energy degradation with high-resolution missing-mass spectroscopy for RI beams ([Imai et al., PTEP 2019, 023D02](https://doi.org/10.1093/ptep/ptz002)).

### 3.5 Physics Enabled

- **Nucleon transfer reactions** $(d,p)$, $(p,d)$ at $10$–$30$ MeV/u on unstable targets (in [[Inverse Kinematics|inverse kinematics]]) — extract [[Spectroscopic Factor|spectroscopic factors]] and single-particle structure via [[DWBA]] analysis
- **Sub-barrier [[Coulomb Excitation|Coulomb excitation]]** — measure $B(E2)$ values and probe deformation in exotic nuclei
- **Surrogate reactions** for astrophysics — $(d,p)$ as a surrogate for $(n,\gamma)$ to constrain r-process reaction rates on short-lived nuclei

---

## 4. Double Gamow-Teller Giant Resonance

### 4.1 Gamow-Teller Transitions

The **[[Gamow-Teller Transition|Gamow-Teller (GT) transition]]** is mediated by the axial-vector part of the weak interaction. The transition operator is:

$$\hat{O}_{GT} = g_A \sum_k \boldsymbol{\sigma}_k \boldsymbol{\tau}_k$$

where $\boldsymbol{\sigma}$ is the spin operator and $\boldsymbol{\tau}$ the isospin-lowering (or raising) operator. The selection rules are:

- $\Delta J = 0, \pm 1$ (but $0 \to 0$ forbidden)
- $\Delta \pi = 0$ (no parity change)
- $\Delta T_z = \pm 1$ (isospin flip)

This is a **spin-flip, isospin-flip** excitation — distinct from [[Fermi Transition|Fermi transitions]] ($\boldsymbol{\tau}$ only, $\Delta J = 0$).

### 4.2 GT Giant Resonance (GTGR)

The **Gamow-Teller Giant Resonance** is a coherent superposition of $1^+$ particle-hole excitations — a collective spin-isospin oscillation of the nucleus. It was first observed experimentally in $(p,n)$ reactions in the 1980s. The centroid energy lies above the [[Isobaric Analog State]] by a few MeV, governed by the residual spin-isospin interaction.

### 4.3 Double GT (DGT) Resonance

The **Double Gamow-Teller** transition applies the GT operator twice in sequence (a sequential double application of the GT operator):

$$\hat{O}_{DGT} = \sum_{k,l} (\boldsymbol{\sigma}_k \tau^-_k)(\boldsymbol{\sigma}_l \tau^-_l)$$

where the sum runs over nucleon pairs $(k, l)$. This results in $\Delta Z = \pm 2$ (double charge change). The DGT is a **two-phonon [[Giant Resonance|giant resonance]]**, first predicted theoretically by **Auerbach, Zamick & Zheng (1989)**.

### 4.4 Scientific Importance — Connection to $0\nu\beta\beta$

The DGT resonance has gained enormous significance because of a **linear correlation** between the DGT nuclear matrix element and the nuclear matrix element governing **[[Neutrinoless Double-Beta Decay|neutrinoless double-beta decay]]** ($0\nu\beta\beta$), as demonstrated by **Shimizu et al. (PRL, 2018)**.

The $0\nu\beta\beta$ decay — if observed — would prove neutrinos are Majorana fermions and violate lepton number conservation. Extracting the neutrino mass from a $0\nu\beta\beta$ half-life measurement requires the [[Nuclear Matrix Element|nuclear matrix element]] $M^{0\nu}$, which is currently model-dependent and uncertain by factors of $\sim 2$–$3$. Measuring the DGT strength experimentally provides an **independent constraint** on these NMEs through a reaction mechanism that probes the same nuclear structure.

### 4.5 Experimental Access at RIKEN

The DGT resonance is accessed via **heavy-ion double charge-exchange (DCX) reactions**:

$${}^{48}\text{Ca}({}^{12}\text{C}, {}^{12}\text{Be}(0^+_2))$$

at $250$ MeV/u using the RIBF facility at RIKEN.

**Why ${}^{12}\text{Be}(0^+_2)$?** The selection of the $0^+_2$ excited state of ${}^{12}\text{Be}$ ensures the DGT pathway. The double charge-exchange proceeds through a ${}^{12}\text{B}(1^+)$ intermediate state, requiring two successive spin-flip transitions — the hallmark of the DGT mechanism.

**Detection method:** The ${}^{12}\text{Be}(0^+_2)$ state decays via an $E0$ transition (electric monopole, $0^+ \to 0^+$), which proceeds by **internal pair creation** ($e^+e^-$). The positron subsequently annihilates, producing characteristic **511 keV $\gamma$-rays** that serve as the experimental tag.

### 4.6 2024 PTEP Result

**Sasano, Yako, Imai et al.** reported the **first candidate observation of the DGTGR** in ${}^{48}\text{Ca}$:

- **Forward-angle ($0°$) cross section:** $1.33 \pm 0.12$ $\mu$b/sr for excitation energies below $34$ MeV in ${}^{48}\text{Ti}$
- **DGT fraction:** $\sim 40\%$ of the observed cross section attributed to DGT transitions, based on [[DWBA]] multipole decomposition
- **Status:** Described as a **"candidate"** observation — not yet definitive

### 4.7 Challenges

- **Extremely small cross sections** — $\mu$b/sr regime, requiring high beam intensity and long run times
- **Background separation** — multi-step reaction processes (sequential single charge-exchange) produce the same final state; disentangling direct DGT from sequential mechanisms is non-trivial
- **Statistics** — current data are suggestive but insufficient for a definitive claim; further beam time is needed

---

## 5. Charge-Exchange Reactions

### 5.1 Single Charge-Exchange (SCE)

Single CE reactions probe $\Delta T_z = \pm 1$ spin-isospin excitations:

| Reaction | Direction | Probe type |
|----------|-----------|------------|
| $(p,n)$ | $T_z - 1$ | Free proton beam |
| $(n,p)$ | $T_z + 1$ | Neutron beam (quasi-free) |
| $({}^3\text{He}, t)$ | $T_z - 1$ | Light-ion alternative |
| $(t, {}^3\text{He})$ | $T_z + 1$ | Light-ion alternative |

At intermediate energies ($> 100$ MeV/u), the nucleon-nucleon interaction is dominated by **one-pion exchange**, which is predominantly $\boldsymbol{\sigma} \cdot \boldsymbol{\tau}$ in character. This ensures that the **forward-angle ($0°$) cross section** is proportional to the reduced GT transition strength:

$$\left(\frac{d\sigma}{d\Omega}\right)_{0°} \propto B(GT)$$

This proportionality is the foundation of the "$(p,n)$ method" for extracting GT strengths.

**Key modes excited:**
- **[[Fermi Transition|Fermi transitions]]** ($\boldsymbol{\tau}$ only) $\to$ **[[Isobaric Analog State|Isobaric Analog State (IAS)]]** — sharp, well-defined peak
- **GT transitions** ($\boldsymbol{\sigma} \cdot \boldsymbol{\tau}$) $\to$ **GTGR** — broad resonance above the IAS

### 5.2 Double Charge-Exchange (DCX)

DCX reactions change the nuclear charge by $\Delta Z = \pm 2$:

| Reaction | Notes |
|----------|-------|
| $(\pi^+, \pi^-)$ | Historical probe, pion beams |
| $({}^{12}\text{C}, {}^{12}\text{Be})$ | Heavy-ion DCX at RIKEN |
| $({}^{18}\text{O}, {}^{18}\text{Ne})$ | NUMEN project at INFN-LNS |
| $({}^{20}\text{Ne}, {}^{20}\text{O})$ | NUMEN project at INFN-LNS |

### 5.3 Connection to $0\nu\beta\beta$ Decay

The initial and final nuclear states in a DCX reaction are **identical** to those in double-beta decay:

$$(A, Z) \to (A, Z \pm 2)$$

While the transition operators are not identical — DCX proceeds via the strong interaction while $\beta\beta$ proceeds via the weak interaction — they probe **formally similar nuclear structure** (two-nucleon correlations, pairing, short-range correlations). This makes DCX a powerful tool for constraining $0\nu\beta\beta$ nuclear matrix elements.

### 5.4 NUMEN Project (INFN-LNS, Catania)

The **NUMEN** (NUclear Matrix Elements for Neutrinoless double-beta decay) project at INFN-LNS (Catania, Italy) is a dedicated DCX program using $({}^{18}\text{O}, {}^{18}\text{Ne})$ and $({}^{20}\text{Ne}, {}^{20}\text{O})$ reactions at $15$–$70$ MeV/u. It aims to systematically measure DCX cross sections on all candidate $\beta\beta$ nuclei.

### 5.5 RIKEN Approach

The RIKEN program operates at $250$ MeV/u — significantly higher than NUMEN. At these energies, the **direct reaction mechanism dominates** over multi-step processes, yielding a **simpler theoretical interpretation** via [[DWBA]] and distorted-wave approaches. The trade-off is lower cross sections at forward angles.

---

## 6. Detector R&D

### 6.1 Diamond Detectors

Imai has pursued **CVD (Chemical Vapor Deposition) diamond** as a detector material for beam diagnostics and [[Particle Identification|particle identification]] at OEDO.

**Material advantages of diamond:**

| Property | Value / Benefit |
|----------|----------------|
| Band gap | $5.47$ eV — no cooling required (negligible leakage current at room temperature) |
| Timing resolution | Sub-$100$ ps — excellent for time-of-flight measurements |
| Radiation hardness | Extreme — survives high-fluence RI beam environments |
| Count rate capability | Very high — suitable for beam rates $> 10^6$ pps |

**Ultra-thin diamond $\Delta E/E$ telescopes:** By fabricating diamond films $< 10$ $\mu$m thick, Imai's group has developed $\Delta E$–$E$ telescope configurations for **low-energy heavy-ion PID** at $2$–$3$ MeV/u. At these energies, conventional silicon $\Delta E$ detectors are too thick (ions stop in the $\Delta E$ layer), making ultra-thin diamond essential.

These detectors are particularly suited for **beam tracking and diagnostics** at OEDO, where slowed-down RI beams have low energy and high $Z$, demanding thin, fast, radiation-hard detectors.

### 6.2 GEM/THGEM for Active-Target TPC

A 2023 PTEP paper (Iwamoto, Ota, Imai et al.) describes the **DG-M-THGEM** prototype — a dual-gain Micro-pattern THGEM (Thick Gas Electron Multiplier) designed for **[[Active-Target TPC|active-target TPC]]** experiments at CNS.

**Key innovation — dual gain regions:**

| Region | Gain | Purpose |
|--------|------|---------|
| Beam region | $< 100$ | Prevents saturation from high-ionization beam particles |
| Recoil region | $\sim 2000$ | Amplifies faint recoil tracks for detection |

This solves the fundamental dynamic-range problem in active-target TPCs: the beam particle deposits orders of magnitude more energy than the light recoil products of interest.

**Stability:** Demonstrated stable operation up to $2.5 \times 10^6$ pps beam intensity.

### 6.3 Other Detector Systems

- **GRAPE** — Germanium Array for Prompt $\gamma$-ray Emission; high-resolution $\gamma$-ray detection array
- **CAT-M** — CNS Active Target TPC (primarily Aoi's NUSPEQ group, but shared infrastructure)
- **TiNA** — detector system used in conjunction with SHARAQ experiments
- **PANDORA** — detector system in the CNS experimental program

---

## 7. Key Publications

| Year | Journal | Title / Topic | Key Result |
|------|---------|---------------|------------|
| 2024 | **PLB** | ${}^{79}$Se$(d,p)$ neutron capture cross-section via surrogate method at OEDO ([[#SAKURA Sub-project|SAKURA]]) | First surrogate $(d,p)$ measurement of ${}^{79}$Se$(n,\gamma)$ for nuclear waste transmutation; press coverage from UTokyo, ScienceDaily, Phys.org. **Imai first-author flagship paper.** |
| 2024 | **PTEP** | DGT candidate in ${}^{48}$Ca via $({}^{12}\text{C}, {}^{12}\text{Be}(0^+_2))$ | First candidate observation of DGTGR; $0°$ cross section $1.33 \pm 0.12$ $\mu$b/sr; ~40% DGT via [[DWBA]] decomposition |
| 2024 | **PRL** | $3n$/$3p$ spectroscopy | Spectroscopy of three-nucleon systems |
| 2024 | — (preprint or proceeding) | ${}^{93}$Zr spallation cross-sections | Cross-section measurements for long-lived fission product ${}^{93}$Zr |
| 2024 | **PRC** v110 | ${}^{130}$Sn neutron capture for r-process | Constraining r-process nucleosynthesis path near $N=82$ shell closure |
| 2023 | **PTEP** | DG-M-THGEM for [[Active-Target TPC|active-target TPC]] | Dual-gain THGEM prototype; stable to $2.5 \times 10^6$ pps; gain ratio beam/recoil < 100/2000 |
| 2019 | **PTEP** | OEDO beamline description | Comprehensive technical paper on OEDO design and commissioning. **Imai first-author.** |

---

## 8. Currently Approved Experiments

- **SHARAQ21–25**: As of December 2025, three new experimental proposals have been approved for the OEDO-SHARAQ system.
- **SHARAQ19**: Completed. Jiatai Li (D2 student, RIKEN JRA) completed his PhD thesis based on SHARAQ19 data in **January 2026**.

---

## References

### Local Vault Links

- [[UTokyo CNS]]
- [[RIKEN Nishina Center for Accelerator-Based Science (RNC)]]
- [[Direct Reactions]]
- [[Transfer Reactions]]
- [[Knockout Reactions]]
- [[DWBA]]
- [[Spectroscopic Factor]]
- [[Time Projection Chamber]]
- [[Particle Identification]]
- [[BigRIPS]]
- [[Radioactive Isotope Beam]]
- [[Charge-Exchange Reaction]]
- [[Gamow-Teller Transition]]
- [[Fermi Transition]]
- [[Surrogate Reaction]]
- [[Inverse Kinematics]]
- [[Coulomb Excitation]]
- [[Missing-Mass Spectroscopy]]
- [[Isobaric Analog State]]
- [[Giant Resonance]]
- [[Shell Evolution]]
- [[Deformation Coexistence]]
- [[Neutrinoless Double-Beta Decay]]
- [[Nuclear Matrix Element]]
- [[Active-Target TPC]]
- [[Diamond Detector]]
- [[Double Gamow-Teller Giant Resonance]]

### Online Sources

**Imai Profile & Group:**
- [Nobuaki Imai — CNS Staff Page](https://www.cns.s.u-tokyo.ac.jp/en/staff/imai/)
- [Nobuaki Imai — INSPIRE-HEP](https://inspirehep.net/authors/1040753)
- [DONUTS Group — CNS](https://www.cns.s.u-tokyo.ac.jp/en/research/donuts/)

**OEDO-SHARAQ:**
- [OEDO Beamline — CNS Experimental Page](https://www.cns.s.u-tokyo.ac.jp/en/research/oedo/)
- [N. Imai et al., PTEP 2019, 023D02 — OEDO Technical Paper](https://doi.org/10.1093/ptep/ptz002)
- [SHARAQ Spectrometer — CNS](https://www.cns.s.u-tokyo.ac.jp/en/research/sharaq/)

**Double Gamow-Teller & Charge-Exchange:**
- [M. Sasano, K. Yako, N. Imai et al., PTEP 2024 — DGT Candidate in ⁴⁸Ca](https://doi.org/10.1093/ptep/ptae049)
- [N. Shimizu et al., PRL 120, 142502 (2018) — DGT–0νββ Correlation](https://doi.org/10.1103/PhysRevLett.120.142502)
- [N. Auerbach, L. Zamick, D.C. Zheng, Ann. Phys. 192, 77 (1989) — DGT Prediction](https://doi.org/10.1016/0003-4916(89)90095-3)
- [NUMEN Project — INFN-LNS](https://web.infn.it/NUMEN/)

**⁷⁹Se Surrogate Measurement (Flagship Paper):**
- [N. Imai et al., PLB 2024 — ⁷⁹Se(d,p) Surrogate](https://doi.org/10.1016/j.physletb.2024.138817)
- [UTokyo Press Release — ⁷⁹Se Result](https://www.u-tokyo.ac.jp/focus/en/press/z0508_00341.html)
- [ScienceDaily Coverage](https://www.sciencedaily.com/releases/2024/07/240722121927.htm)
- [Phys.org Coverage](https://phys.org/news/2024-07-nuclear-reaction-radioactive-waste.html)

**Detector Development:**
- [C. Iwamoto, S. Ota, N. Imai et al., PTEP 2023 — DG-M-THGEM](https://doi.org/10.1093/ptep/ptad038)

**Other Key Publications:**
- [3n/3p Spectroscopy — PRL 2024](https://doi.org/10.1103/PhysRevLett.133.212501)
- [¹³⁰Sn Neutron Capture — PRC v110, 2024](https://doi.org/10.1103/PhysRevC.110.015803)
- ⁹³Zr spallation cross-sections — 2024 (preprint or proceeding; DOI not verified)