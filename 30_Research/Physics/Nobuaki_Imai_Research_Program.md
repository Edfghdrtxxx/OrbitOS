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

> [!Feynman]- OEDO-SHARAQ as "Beam Prep + Precision Scale"
> **Q:** Could I interpret the OEDO-SHARAQ beamline system as a system with a determined low-energy RIB and a high momentum resolution mass spectrometer?
> 
> **Language note:** More natural phrasing: *"Can I think of the OEDO-SHARAQ system as combining a **well-defined** low-energy RIB source with a high-**momentum-resolution** spectrometer?"* — "determined" → "well-defined" (determined implies willpower, not precision); "mass spectrometer" → "spectrometer" (SHARAQ measures momentum, not mass directly); hyphenate "momentum-resolution" as a compound modifier.
>
> Yes — that decomposition captures the essential logic. Think of it as a two-stage machine:
>
> **Stage 1 — OEDO (the beam chef).** BigRIPS hands you a fast, messy RI beam at ~200 MeV/u. OEDO slows it down to 10–50 MeV/u *achromatically* — meaning the output energy is well-defined regardless of the momentum spread coming in. So "determined low-energy RIB" is accurate: you get a beam whose energy and identity you *know* with precision, not a smeared-out mess.
>
> **Stage 2 — SHARAQ (the precision scale).** After your prepared beam hits a reaction target, the outgoing particles enter SHARAQ. With $p/\Delta p = 15{,}000$, it measures the momentum of reaction products so precisely that you can reconstruct the *mass of what you can't see* — the excited state left behind in the target nucleus. That's **missing-mass spectroscopy**: you weigh the invisible product by measuring everything else.
>
> One nuance: calling SHARAQ a "mass spectrometer" works as intuition, but it's technically a **magnetic spectrometer** — it measures momentum, not mass directly. The mass information comes from kinematics (conservation of energy and momentum). A traditional mass spectrometer (like in chemistry) separates ions by $m/q$; SHARAQ instead reconstructs the missing mass of an undetected nuclear state from the precisely measured momentum of the detected ejectile.
>
> So your mental model is sound: OEDO gives you a *known, clean beam*, SHARAQ gives you *precision momentum measurement* → together they enable missing-mass spectroscopy on exotic nuclei that no other facility can do.

**See also:** [[Prof_Nobuaki_Imai|Professor Profile]] | [[Nobuaki_Imai_Research_Landscape.canvas|Research Landscape (canvas)]]

**Career trajectory:**
- **PhD** — University of Tokyo
- **RIKEN** — postdoctoral research
- **[[KEK]]** (High Energy Accelerator Research Organization) — ~10 years, including 2 years as a visiting researcher at **[[CERN]]**
- **CNS, UTokyo** — Associate Professor (2014–present)

His publication record spans **~288 publications** with **4,461+ citations**, reflecting sustained contributions across three interconnected research themes:

1. **Nuclear structure via [[Radioactive Isotope Beam|RI beams]]** — probing [[Shell Evolution|shell evolution]], [[Deformation Coexistence|deformation coexistence]], and collective modes far from stability
2. **Nuclear reaction dynamics** — [[Charge-Exchange Reaction|charge-exchange reactions]], [[Transfer Reactions|nucleon transfer]], and [[Surrogate Reaction|surrogate methods]] for astrophysical cross sections
3. **Detector development** — [[Diamond Detector|diamond detectors]], [[GEM Detector|GEM]]/[[THGEM]]-based TPCs, and beam diagnostics for low-energy RI beam experiments

---

## 2. DONUTS Group

**DONUTS** is Imai's research group at [[UTokyo CNS]]. The acronym expansion is not publicly documented in available materials.

### Research Program

The group's physics program spans two broad pillars:

**Nuclear Structure:**
- [[Deformation Coexistence]] in neutron-rich nuclei
- [[Collective Motions]] (rotational bands, vibrational excitations)
- [[Extreme Rotation]] and [[High-spin States]]

**Nuclear Reaction Dynamics:**
- Astrophysical nucleosynthesis — [[Neutron Capture Cross Section|neutron capture cross sections]] relevant to the [[r-process Nucleosynthesis|r-process]]
- [[Superheavy Element|Superheavy element]] production mechanisms
- Nuclear waste transmutation via surrogate reaction methods

### SAKURA Sub-project

**SAKURA** — *Study of Astrophysical Key reactions in the Universe with low-energy RI beam Apparatus* — is the group's main astrophysics initiative. It exploits the OEDO beamline to produce low-energy RI beams for surrogate $(d,p)$ reactions that constrain $(n,\gamma)$ cross sections on unstable nuclei inaccessible to direct neutron irradiation.

### Current Members (as of early 2026)

| Role | Name | Notes |
|------|------|-------|
| PI | Nobuaki Imai | Associate Professor |
| D3 (thesis completed Jan 2026) | Jiatai Li | RIKEN JRA fellow |
| Research student | Qin Hao | — |
| MEXT scholar | Yasmin Anuar | — |

**Related group at CNS:** Prof. [[Nori_Aoi_Research_Program|Nori Aoi]] leads the **NUSPEQ** group (Nuclear Spectroscopy for Extreme Quantum system), which operates the CAT-M [[Active-Target TPC|active-target TPC]]. Both groups share the OEDO-SHARAQ infrastructure and collaborate closely.

---

## 3. OEDO-SHARAQ System

### 3.1 Purpose and Motivation

The **OEDO** system (*Optimized Energy-Degrading Optics for RI beams*) solves a fundamental problem at in-flight [[Radioactive Isotope Beam|RI beam]] facilities: [[Projectile Fragmentation|projectile fragmentation]] and [[In-Flight Fission|in-flight fission]] at [[BigRIPS]] produce secondary beams at $\sim200$ MeV/u, but many reaction studies — [[Transfer Reactions|nucleon transfer]], sub-barrier [[Coulomb Excitation|Coulomb excitation]], [[Surrogate Reaction|surrogate reactions]] — require beam energies of $10$–$50$ MeV/u with good [[Energy Resolution|energy resolution]].

Conventional thick degraders destroy beam quality (emittance blow-up, straggling). OEDO achieves achromatic energy degradation while preserving beam optics. (see `Feynman: OEDO-SHARAQ as "Beam Prep + Precision Scale"`)
**Construction completed:** March 2017. **First beam:** June 2017.

### 3.2 Technical Design — Three Key Components

#### 1. Angle-Tunable Wedge Degrader (at dispersive focus)

Placed at the momentum-dispersive focal plane of [[BigRIPS]], the wedge degrader exploits the position–momentum correlation: higher-momentum particles traverse more material and lose more energy. By matching the wedge angle to the dispersion, the energy degradation becomes **achromatic** — all momentum components converge to the same mean energy downstream, eliminating first-order momentum spread from the degrader.

#### 2. RF Deflector

A radio-frequency deflecting cavity converts **longitudinal phase-space correlations** (time-of-flight ↔ energy correlations introduced by the degrader) into **transverse position correlations**. The RF field kicks particles sideways proportionally to their arrival time, mapping the time structure onto spatial coordinates that downstream optics can correct.

> [!Feynman]- RF Deflector
> **Q:** What is RF deflector?
> **Language note:** More natural phrasing: *"What is an RF deflector?"* — needs the article "an" before a countable noun.
>
> Imagine a line of runners crossing a finish line one after another. A fast camera can record *when* each runner arrives — that's **time information**. Now imagine instead of a camera, you have a fan blowing sideways that gets stronger and weaker in a cycle. Early arrivals get pushed left, late arrivals get pushed right. You've just converted *arrival time* into *sideways position* — and positions are much easier to deal with using lenses and slits.
>
> That's exactly what an RF deflector does to a particle beam. "RF" stands for **radio-frequency** — it's an electromagnetic cavity oscillating millions of times per second. As particles fly through the cavity, the oscillating electric field gives each particle a sideways kick whose strength depends on *when* that particle arrives.
>
> But why do particles arrive at different times? After passing through the wedge degrader, particles end up with slightly different energies. Higher-energy particles travel faster; lower-energy ones travel slower. Over the drift distance to the RF cavity, this energy spread fans out into a spread in arrival times — a **time-of-flight correlation**. The RF deflector exploits exactly this correlation.
>
> Once the time differences are mapped onto spatial positions, ordinary beam optics (magnets and slits) can correct or filter them. Why can't you just fix the timing directly? Because magnets and slits act on *where* a particle is and *what angle* it's moving at — they have no way to selectively grab particles based on *when* they pass through. There is no such thing as a "time slit." So the RF deflector serves as a translator: it converts the invisible time dimension into visible space, where the existing toolkit works.
>
> As a bonus, contaminant particles with the wrong mass-to-charge ratio ($A/Q$) also get filtered out. Why? After the degrader, energy loss depends on the particle's charge $Z$, and the resulting velocity depends on its mass $A$. Contaminants with the wrong $A/Q$ end up at different velocities, arrive at the RF cavity at the wrong moment in the oscillation cycle, and receive a sideways kick to the wrong place — where a slit blocks them. No extra material needed.

A critical secondary function: particles with the **wrong mass-to-charge ratio** $A/Q$ arrive at different RF phases and receive different transverse kicks, enabling **contaminant filtering** without additional material in the beam path. A slit system downstream of the RF deflector selects the corrected beam component and rejects contaminants that received off-phase kicks. (see `Feynman: RF Deflector`)

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

Downstream of S0, the **SHARAQ** magnetic spectrometer (configuration: **QQDQD** — two quadrupoles, dipole, quadrupole, dipole) performs high-resolution [[Missing-Mass Spectroscopy|missing-mass spectroscopy]] with a momentum resolution of: (see `Feynman: OEDO-SHARAQ as "Beam Prep + Precision Scale"`)

$$\frac{\Delta p}{p} = \frac{1}{15000}$$

(equivalently, a resolving power $p/\Delta p = 15000$).

This combination — an energy-degrading RI beamline feeding a high-resolution spectrometer — is currently the only facility of its kind, combining achromatic energy degradation with high-resolution missing-mass spectroscopy for RI beams ([Imai et al., PTEP 2019, 023D02](https://doi.org/10.1093/ptep/ptz002)). (see `Feynman: OEDO-SHARAQ as "Beam Prep + Precision Scale"`)

### 3.5 Physics Enabled

- **Nucleon transfer reactions** $(d,p)$, $(p,d)$ at $10$–$30$ MeV/u on unstable targets (in [[Inverse Kinematics|inverse kinematics]]) — extract [[Spectroscopic Factor|spectroscopic factors]] and single-particle structure via [[DWBA]] analysis
- **Sub-barrier [[Coulomb Excitation|Coulomb excitation]]** — measure [[B(E2)|$B(E2)$]] values and probe deformation in exotic nuclei
- **Surrogate reactions** for astrophysics — $(d,p)$ as a surrogate for $(n,\gamma)$ to constrain r-process reaction rates on short-lived nuclei

---

## 4. Double Gamow-Teller Giant Resonance

### 4.1 Gamow-Teller Transitions

The **[[Gamow-Teller Transition|Gamow-Teller (GT) transition]]** is mediated by the axial-vector part of the [[Weak Interaction|weak interaction]]. The transition operator is:

> [!Feynman]- GT Transitions, Weak Interaction & Axial-Vector
> **Q:** What is the Gamow-Teller Transitions, weak interaction and axial-vector part?
> **Language note:** More natural phrasing: *"What are Gamow-Teller transitions, the weak interaction, and the axial-vector part?"* — "Transitions" is plural, so use "What are" (not "What is"); "the weak interaction" needs the definite article "the"; don't capitalize "transitions" mid-sentence.
>
> Let's build this up in three layers.
>
> **Layer 1 — The weak interaction.** Nature has four fundamental forces. You know gravity and electromagnetism. The **weak interaction** (or "weak force") is a third one — it's the only force that can change one type of quark into another, which means it can turn a neutron into a proton or vice versa. This is exactly what happens in radioactive beta decay: a neutron inside a nucleus emits an electron and becomes a proton. Without the weak force, the Sun couldn't shine and most radioactive decay wouldn't happen.
>
> **Layer 2 — Vector vs. axial-vector.** When physicists write the math of the weak interaction, they find it has two "channels" — two different ways it couples to a particle. Think of them as two separate knobs:
> - The **vector part** acts on a particle's motion (its momentum direction) but does not care about its spin. This part drives **Fermi transitions** ($\Delta J = 0$, no spin change).
> - The **axial-vector part** reaches in and flips the particle's **spin**. "Axial" means it behaves like a rotation axis — it transforms differently from an ordinary arrow under mirror reflection. This part drives **Gamow-Teller transitions**.
>
> Here's what trips people up: "axial-vector" sounds intimidating, but all it really means is "the piece of the weak force that can flip a nucleon's spin direction." It's called "axial" because spin behaves like an axial vector — if you look at a spinning top in a mirror, the spin appears to reverse, unlike an ordinary arrow (say, pointing left) which stays the same in the mirror.
>
> **Layer 3 — Gamow-Teller transitions.** Now combine both ideas. A GT transition is a nuclear process where the weak interaction — specifically its axial-vector channel — simultaneously **flips a nucleon's spin** and **flips its isospin** (neutron $\leftrightarrow$ proton). That's why the operator $\boldsymbol{\sigma}\tau^{\pm}$ has both $\boldsymbol{\sigma}$ (spin operator) and $\tau^{\pm}$ (isospin-flip operator). Compare this to a Fermi transition, which only flips the isospin with no spin change.
>
> In short: the weak force has a spin-flipping channel (axial-vector) and a non-spin-flipping channel (vector). Gamow-Teller transitions are the ones that use the spin-flipping channel.

$$\hat{O}_{GT^\pm} = g_A \sum_k \boldsymbol{\sigma}_k \tau^\pm_k$$

where $\boldsymbol{\sigma}$ is the spin operator and $\tau^+$ ($\tau^-$) converts a neutron into a proton (proton into a neutron), corresponding to $\Delta T_z = -1$ ($+1$) respectively. The selection rules are:

- $\Delta J = 0, \pm 1$ (but $0 \to 0$ forbidden)
- $\Delta \pi = 0$ (no parity change)
- $\Delta T_z = \pm 1$ (isospin flip)

This is a **spin-flip, isospin-flip** excitation — distinct from [[Fermi Transition|Fermi transitions]] ($\boldsymbol{\tau}$ only, $\Delta J = 0$).

### 4.2 GT Giant Resonance (GTGR)

The **Gamow-Teller Giant Resonance** is a coherent superposition of $1^+$ particle-hole excitations — a collective spin-isospin oscillation of the nucleus. It was first observed experimentally in $(p,n)$ reactions in the 1980s. The centroid energy lies above the [[Isobaric Analog State]] by a few MeV, governed by the residual spin-isospin interaction.

### 4.3 Double GT (DGT) Resonance

The **[[Double Gamow-Teller Giant Resonance|Double Gamow-Teller]]** transition applies the GT operator twice in sequence (a sequential double application of the GT operator):

$$\hat{O}_{DGT^\pm} = \sum_{k,l} (\boldsymbol{\sigma}_k \tau^\pm_k)(\boldsymbol{\sigma}_l \tau^\pm_l)$$

where the sum runs over nucleon pairs $(k, l)$. The $\tau^+$ form converts two neutrons into protons ($\Delta Z = +2$ on the target), while the $\tau^-$ form converts two protons into neutrons ($\Delta Z = -2$). The DGT is a **two-phonon [[Giant Resonance|giant resonance]]**, first predicted theoretically by **Auerbach, Zamick & Zheng (1989)**.

### 4.4 Scientific Importance — Connection to $0\nu\beta\beta$

The DGT resonance has gained enormous significance because of a **linear correlation** between the DGT nuclear matrix element and the nuclear matrix element governing **[[Neutrinoless Double-Beta Decay|neutrinoless double-beta decay]]** ($0\nu\beta\beta$), as demonstrated by **Shimizu et al. (PRL, 2018)**.

The $0\nu\beta\beta$ decay — if observed — would prove neutrinos are [[Majorana Fermion|Majorana fermions]] and violate [[Lepton Number|lepton number]] conservation. Extracting the neutrino mass from a $0\nu\beta\beta$ half-life measurement requires the [[Nuclear Matrix Element|nuclear matrix element]] $M^{0\nu}$, which is currently model-dependent and uncertain by factors of $\sim 2$–$3$. Measuring the DGT strength experimentally provides an **independent constraint** on these NMEs through a reaction mechanism that probes the same nuclear structure.

### 4.5 Experimental Access at RIKEN

The DGT resonance is accessed via **heavy-ion double charge-exchange (DCX) reactions**:

$${}^{48}\text{Ca}({}^{12}\text{C}, {}^{12}\text{Be}(0^+_2)) \, {}^{48}\text{Ti}$$

at $250$ MeV/u using the RIBF facility at RIKEN. In this reaction, the target undergoes $\Delta Z = +2$ (${}^{48}\text{Ca} \to {}^{48}\text{Ti}$), corresponding to the $\hat{O}_{DGT^+}$ operator (two neutrons converted to protons).

**Why ${}^{12}\text{Be}(0^+_2)$?** The selection of the $0^+_2$ excited state of ${}^{12}\text{Be}$ ensures the DGT pathway. The double charge-exchange proceeds through a ${}^{12}\text{B}(1^+)$ intermediate state, requiring two successive spin-flip transitions — the hallmark of the DGT mechanism.

**Detection method:** The ${}^{12}\text{Be}(0^+_2)$ state decays via an $E0$ transition (electric monopole, $0^+ \to 0^+$), which proceeds by **[[Internal Pair Creation|internal pair creation]]** ($e^+e^-$). The positron subsequently annihilates, producing characteristic **511 keV [[Gamma Ray|$\gamma$-rays]]** that serve as the experimental tag.

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

At intermediate energies ($> 100$ MeV/u), the nucleon-nucleon interaction is dominated by **one-pion exchange**, which is predominantly $\boldsymbol{\sigma} \cdot \boldsymbol{\tau}$ in character. This ensures that the **forward-angle ($0°$) cross section** is proportional to the reduced GT transition strength: (see `Feynman: GT Transitions, Weak Interaction & Axial-Vector`)

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

While the transition operators are not identical — DCX proceeds via the [[Strong Interaction|strong interaction]] while $\beta\beta$ proceeds via the [[Weak Interaction|weak interaction]] — they probe **formally similar nuclear structure** (two-nucleon correlations, pairing, short-range correlations). (see `Feynman: GT Transitions, Weak Interaction & Axial-Vector`) This makes DCX a powerful tool for constraining $0\nu\beta\beta$ nuclear matrix elements.

### 5.4 NUMEN Project (INFN-LNS, Catania)

The **NUMEN** (NUclear Matrix Elements for Neutrinoless double-beta decay) project at INFN-LNS (Catania, Italy) is a dedicated DCX program using $({}^{18}\text{O}, {}^{18}\text{Ne})$ and $({}^{20}\text{Ne}, {}^{20}\text{O})$ reactions at $15$–$70$ MeV/u. It aims to systematically measure DCX cross sections on all candidate $\beta\beta$ nuclei.

### 5.5 RIKEN Approach

The RIKEN program operates at $250$ MeV/u — significantly higher than NUMEN. At these energies, the **[[Direct Reactions|direct reaction]] mechanism dominates** over multi-step processes, yielding a **simpler theoretical interpretation** via [[DWBA]] and distorted-wave approaches. The trade-off is lower cross sections at forward angles.

---

## 6. Detector R&D

### 6.1 Diamond Detectors

Imai has pursued **[[CVD|CVD (Chemical Vapor Deposition)]] diamond** as a detector material for beam diagnostics and [[Particle Identification|particle identification]] at OEDO.

**Material advantages of diamond:**

| Property | Value / Benefit |
|----------|----------------|
| Band gap | $5.47$ eV — no cooling required (negligible leakage current at room temperature) |
| Timing resolution | Sub-$100$ ps — excellent for time-of-flight measurements |
| Radiation hardness | Extreme — survives high-fluence RI beam environments |
| Count rate capability | Very high — suitable for beam rates $> 10^6$ pps |

**Ultra-thin diamond $\Delta E/E$ telescopes:** By fabricating diamond films $< 10$ $\mu$m thick, Imai's group has developed [[ΔE-E Method|$\Delta E$–$E$ telescope]] configurations for **low-energy heavy-ion PID** at $2$–$3$ MeV/u. At these energies, conventional silicon $\Delta E$ detectors are too thick (ions stop in the $\Delta E$ layer), making ultra-thin diamond essential.

These detectors are particularly suited for **beam tracking and diagnostics** at OEDO, where slowed-down RI beams have low energy and high $Z$, demanding thin, fast, radiation-hard detectors.

### 6.2 [[GEM Detector|GEM]]/[[THGEM]] for Active-Target TPC

A 2023 PTEP paper (Iwamoto, Ota, Imai et al.) describes the **DG-M-[[THGEM]]** prototype — a dual-gain Micro-pattern [[THGEM]] (Thick Gas Electron Multiplier) designed for **[[Active-Target TPC|active-target TPC]]** experiments at CNS.

**Key innovation — dual gain regions:**

| Region | Gain | Purpose |
|--------|------|---------|
| Beam region | $< 100$ | Prevents saturation from high-ionization beam particles |
| Recoil region | $\sim 2000$ | Amplifies faint recoil tracks for detection |

This solves the fundamental [[Dynamic Range|dynamic-range]] problem in active-target TPCs: the beam particle deposits orders of magnitude more energy than the light recoil products of interest.

**Stability:** Demonstrated stable operation up to $2.5 \times 10^6$ pps beam intensity.

### 6.3 Other Detector Systems

- **GRAPE** — Germanium Array for Prompt $\gamma$-ray Emission; high-resolution $\gamma$-ray detection array
- **CAT-M** — CNS Active Target TPC (primarily [[Nori_Aoi_Research_Program|Nori Aoi]]'s NUSPEQ group, but shared infrastructure)
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
| 2024 | **PRC** v110 | ${}^{130}$Sn neutron capture for r-process | Constraining r-process nucleosynthesis path near $N=82$ [[Shell closure|shell closure]] |
| 2023 | **PTEP** | DG-M-THGEM for [[Active-Target TPC|active-target TPC]] | Dual-gain THGEM prototype; stable to $2.5 \times 10^6$ pps; gain ratio beam/recoil < 100/2000 |
| 2019 | **PTEP** | OEDO beamline description | Comprehensive technical paper on OEDO design and commissioning. **Imai first-author.** |

---

## 8. Currently Approved Experiments

- **SHARAQ21–25**: As of December 2025, three new experimental proposals have been approved for the OEDO-SHARAQ system.
- **SHARAQ19**: Completed. Jiatai Li (D3 student, RIKEN JRA) completed his PhD thesis based on SHARAQ19 data in **January 2026**.

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
- [[KEK]]
- [[CERN]]
- [[Projectile Fragmentation]]
- [[In-Flight Fission]]
- [[Energy Resolution]]
- [[Neutron Capture Cross Section]]
- [[Superheavy Element]]
- [[B(E2)]]
- [[Weak Interaction]]
- [[Strong Interaction]]
- [[Majorana Fermion]]
- [[Lepton Number]]
- [[Internal Pair Creation]]
- [[Gamma Ray]]
- [[CVD]]
- [[ΔE-E Method]]
- [[Dynamic Range]]
- [[Shell closure]]

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