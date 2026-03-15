# 1. Ion Source & Primary Beam Production

The very first stage of any RIB experiment is producing an intense, stable beam of primary ions. Everything downstream — the projectile fragmentation, the fragment separation, the detector response — depends on the quality, intensity, and species of this primary beam. At IMP's [[HIRFL]], this job falls to **Electron Cyclotron Resonance (ECR) ion sources**, specifically the world-class SECRAL family.

---

## 1.1 How ECR Ion Sources Work

### The Basic Principle

An ECR ion source exploits the resonance between microwave radiation and the cyclotron motion of electrons in a magnetic field. When the microwave frequency $\omega_\text{RF}$ matches the electron cyclotron frequency $\omega_c = eB/m_e$, electrons absorb energy efficiently, gaining kinetic energies of tens of keV. These "hot" electrons then collide with neutral gas atoms (or metal vapor), knocking off orbital electrons one by one through **stepwise (sequential) ionization**. ([Wikipedia — Electron cyclotron resonance](https://en.wikipedia.org/wiki/Electron_cyclotron_resonance); [Texas A&M Cyclotron Institute](https://cyclotron.tamu.edu/facilities/ecr-ion-sources/))

For a typical 28 GHz microwave source, the resonance condition requires $B \approx 1.0\,\text{T}$ (see [[Superconducting Electron Cyclotron Resonance]]).

### Minimum-B Magnetic Confinement

To reach high charge states, ions must remain in the plasma long enough for many successive ionization collisions — typically on the order of $\sim 10\,\text{ms}$. ECR sources achieve this with a **minimum-B configuration**: an axial magnetic mirror field (produced by solenoid coils) superimposed with a radial sextupole (hexapole) field. The resulting field is weakest at the center of the plasma chamber and increases in every direction outward, creating a magnetic "well" that confines both electrons and ions. ([EPJ Conferences — ECR sources: physics, performance and technology](https://www.epj-conferences.org/articles/epjconf/pdf/2017/18/epjconf_smp2017_01003.pdf))

The **solenoid coils** create two magnetic mirrors at the injection and extraction ends (trapping particles axially), while the **sextupole** provides radial confinement. Together, they also define a closed ECR resonance surface inside the chamber where microwave power is deposited into the electron population.

### Why ECR Sources Excel for Heavy Ions

Compared to older ion source technologies (Penning, EBIS, etc.), ECR sources offer a unique combination of advantages for heavy-ion accelerators:

- **High charge states**: Extended confinement + hot electrons → successive stripping of many electrons from heavy atoms (e.g., $\text{U}^{33+}$, $\text{Bi}^{31+}$)
- **High intensity**: Continuous (DC) beam currents reaching the emA (electrical milliampere) level for medium charge states
- **CW operation**: Unlike pulsed sources, ECR sources run continuously, providing stable beams for days or weeks
- **Versatility**: Can produce beams from hydrogen to uranium by changing the feed gas or oven material
- **Reliability**: Proven track record of thousands of hours of operation at facilities worldwide

([Texas A&M Cyclotron Institute](https://cyclotron.tamu.edu/facilities/ecr-ion-sources/); [OSTI — 4th Generation ECR Ion Sources](https://www.osti.gov/servlets/purl/974261))

---

## 1.2 Feeding Material into the Source

ECR sources can produce ions from virtually any element, but the method of introducing material into the plasma chamber depends on the element's physical properties:

| Method | How it works | Typical elements |
|--------|-------------|-----------------|
| **Gas injection** | Gaseous elements or volatile compounds fed directly into the chamber | H, He, N, O, Ne, Ar, Kr, Xe |
| **Resistive oven** | Solid material heated in an external furnace; metal vapor injected radially through the sextupole gap | Ca, Fe, Ni, Sn, Bi, Pb |
| **High-temperature oven** | Specialized furnace reaching >2000°C for refractory metals | U, Ta, W |
| **Sputtering** | A biased metallic sample inside the chamber is bombarded by plasma ions, ejecting target atoms | Ni, Ag, Au, Pb, Bi |
| **MIVOC** (Metal Ions from Volatile Compounds) | Organometallic compounds with high vapor pressure are introduced as gas | Fe, Ni, Cr, various transition metals |

The **gas mixing effect** is an important operational technique: adding a lighter "mixing gas" (often oxygen or helium) alongside the primary element improves the charge state distribution and beam intensity of the heavier species. For oven-produced beams, metal oxides that sublime at lower temperatures can be used, with the oxygen serving double duty as both carrier and mixing gas. ([OSTI — High Intensity Metal Ion Beam Production With ECR Ion Sources](https://www.osti.gov/servlets/purl/793745); [ResearchGate — MIVOC method](https://www.researchgate.net/publication/271823278_PRODUCTION_OF_METAL_ION_BEAMS_FROM_ECR_ION_SOURCES_BY_MIVOC_METHOD))

---

## 1.3 SECRAL and SECRAL-II at IMP

### SECRAL (Superconducting ECR ion source with Advanced design in Lanzhou)

SECRAL is a **third-generation, fully superconducting** ECR ion source that has been the workhorse injector for [[HIRFL]] since May 2007. Its key design innovation is placing the superconducting sextupole coils **outside** the three solenoid coils — an arrangement that simplifies construction while maintaining strong fields. ([PubMed — H.W. Zhao et al., Rev. Sci. Instrum. 2010](https://pubmed.ncbi.nlm.nih.gov/24593521/))

**SECRAL magnetic field parameters (28 GHz configuration):**

| Parameter | Value |
|-----------|-------|
| Injection mirror field (axial) | 3.6 T |
| Extraction mirror field (axial) | 2.2 T |
| Minimum axial field | ~0.5 T |
| Sextupole field at chamber wall | 2.0 T |
| Operating frequency | 18–28 GHz |

**Selected record beam intensities from SECRAL (at 24 GHz):**

| Ion beam | Intensity |
|----------|-----------|
| $^{40}\text{Ar}^{12+}$ | 1.4 emA |
| $^{129}\text{Xe}^{26+}$ | 1.1 emA |
| $^{129}\text{Xe}^{30+}$ | 0.36 emA |
| $^{209}\text{Bi}^{30+}$ | 420 eμA |
| $^{209}\text{Bi}^{31+}$ | 0.68 emA |
| $^{238}\text{U}^{33+}$ | 202 eμA |

### SECRAL-II

SECRAL-II is an upgraded source built in under three years and commissioned at the **full power of a 28 GHz gyrotron** with **triple-frequency heating** (28 + 45 + 18 GHz simultaneously). The addition of a 45 GHz component provides extra electron heating at a higher resonance field, pushing the charge state distribution to even higher values. ([JACOW — SECRAL-II first commissioning](https://proceedings.jacow.org/ecris2016/papers/tuao04.pdf); [PubMed — H.W. Zhao et al., Rev. Sci. Instrum. 2018](https://pubmed.ncbi.nlm.nih.gov/29864795/))

**New world records achieved with SECRAL-II:**

| Ion beam | Intensity |
|----------|-----------|
| $^{40}\text{Ar}^{16+}$ | 620 eμA |
| $^{40}\text{Ar}^{18+}$ (fully stripped) | 15 eμA |
| $^{86}\text{Kr}^{28+}$ | 146 eμA |
| $^{86}\text{Kr}^{33+}$ | 0.5 eμA |
| $^{129}\text{Xe}^{38+}$ | 53 eμA |
| $^{129}\text{Xe}^{42+}$ | 17 eμA |

The jump from SECRAL to SECRAL-II illustrates the **frequency scaling law** in ECR physics: higher microwave frequencies require stronger magnetic fields for resonance, which in turn produce better plasma confinement and higher charge states. This is the driving motivation behind the push from 18 → 24 → 28 → 45 GHz designs across successive generations.

---

## 1.4 Beam Extraction and Charge State Selection

### Extraction System

Ions are pulled out of the plasma through a small aperture (the **plasma electrode**) by an electrostatic field, typically a few kV/cm, applied between the plasma electrode and a grounded **puller electrode**. The extraction voltage is usually 15–30 kV, giving ions initial kinetic energies of $q \times V_\text{ext}$ (where $q$ is the ion charge). ([Texas A&M Cyclotron Institute](https://cyclotron.tamu.edu/facilities/ecr-ion-sources/))

A critical complication: the beam emerges from a region of strong axial magnetic field (the extraction mirror), which imparts a **rotational component** to the ion trajectories. The sextupole confinement field also imposes a characteristic **triangular cross-section** on the extracted beam. Both effects must be corrected or accounted for in the downstream beam optics.

### Analyzing Magnet and Charge-to-Mass Selection

The extracted beam is a "cocktail" containing **multiple ion species and charge states** simultaneously — for example, different charge states of the primary element, residual gas ions ($\text{O}^{n+}$, $\text{N}^{n+}$), and mixing-gas ions. A **90° double-focusing analyzing (dipole) magnet** downstream of the source separates these by their charge-to-mass ratio $q/A$ (or equivalently, magnetic rigidity $B\rho$). Only ions with the desired $q/A$ pass through a selection slit and continue to the accelerator. ([arXiv — Optimization of a charge-state analyzer for ECRIS beams](https://arxiv.org/abs/1204.5607))

### Low Energy Beam Transport (LEBT)

Between the ECR source and the cyclotron, the **Low Energy Beam Transport** (LEBT) line shapes, focuses, and steers the selected beam into the accelerator's acceptance. At HIRFL, the LEBT from SECRAL/SECRAL-II to the SFC (Sector Focusing Cyclotron) is an **axial injection line** consisting of Glaser lenses, a dipole magnet, quadrupole magnets, and solenoids. Two branches serve the two ECR sources (SECRAL and the older LECR3), merging before injection into SFC. ([ResearchGate — Axial injection beam line of SFC](https://www.researchgate.net/figure/The-axial-injection-beam-line-of-SFC-with-two-ECR-ion-sources-SECRAL-and-LECR3_fig11_238658472))

---

## 1.5 Why Charge State Matters for Acceleration

The maximum energy a cyclotron can deliver to an ion follows:

$$\frac{E}{A} = K \left(\frac{q}{A}\right)^2$$

where $E/A$ is the energy per nucleon, $K$ is the cyclotron's bending limit (a machine constant), and $q/A$ is the charge-to-mass ratio. Since the energy scales with the **square** of $q/A$, even a modest increase in charge state yields a substantial gain in achievable energy. ([FNAL USPAS — Cyclotron Basics](https://uspas.fnal.gov/materials/09UNM/Unit_10_Lecture_14_Cyclotron_basics.pdf))

**Practical example at HIRFL:**
- $^{129}\text{Xe}^{27+}$ has $q/A \approx 0.209$
- $^{129}\text{Xe}^{38+}$ has $q/A \approx 0.295$
- The higher charge state gives $(0.295/0.209)^2 \approx 2.0\times$ higher energy per nucleon from the same accelerator

This is exactly why the ion source group at IMP has invested decades in pushing ECR technology toward higher charge states. The ion source directly determines the **maximum beam energy** for a given accelerator, and therefore what nuclear reactions and exotic isotopes become accessible.

---

## 1.6 Beam Species Available at HIRFL

HIRFL can accelerate **all ions from proton ($Z=1$) to uranium ($Z=92$)** to energies of hundreds of MeV/u. The specific beam species available depend on what the ECR sources can deliver at sufficient intensity and charge state. ([IMP — HIRFL facility page](https://english.imp.cas.cn/research/facilities/HIRFL/))

**Representative beam species regularly provided:**

| Category | Examples | Typical charge states |
|----------|----------|----------------------|
| Light ions | H, $^{7}$Li, $^{9}$Be, $^{12}$C, $^{14}$N, $^{16}$O | Fully or near-fully stripped |
| Medium-mass | $^{36,40}$Ar, $^{58}$Ni, $^{78,86}$Kr | 12+–18+ (Ar); 19+ (Ni); 19+–28+ (Kr) |
| Heavy | $^{112,124}$Sn, $^{129}$Xe | 26+ (Sn); 27+–42+ (Xe) |
| Very heavy | $^{209}$Bi, $^{238}$U | 31+–36+ (Bi); 32+–35+ (U) |

([PubMed — Intense beam production with SECRAL](https://pubmed.ncbi.nlm.nih.gov/18315105/); [OSTI — Progress of SC-ECR ion sources at IMP](https://www.osti.gov/biblio/22253687))

For an experiment like those on [[HIRFL]]-RIBLL, the choice of primary beam is dictated by what exotic isotopes you want to produce via projectile fragmentation. The ion source must deliver that beam at sufficient intensity (typically > 100 enA at the target) and with a charge state high enough for the cyclotrons to reach the required energy (typically 30–80 MeV/u for fragmentation).

---

## 1.7 Other Ion Source Types at IMP

While ECR sources are the primary injectors for nuclear physics at HIRFL, the Ion Source Group at IMP also develops complementary technologies:

- **2.45 GHz microwave ion sources**: High-current H$^+$/H$_2^+$ beams (up to 100 emA), used for the C-ADS (China Accelerator Driven System) injector and medical isotope production
- **Laser ion sources**: Produce highly charged ions (e.g., Ti$^{16+\text{–}20+}$, Ni$^{18+\text{–}23+}$) in short, intense pulses (ns timescale) via the Direct Plasma Injection Scheme (DPIS) into RFQ linacs
- **Negative ion sources**: Stable DC beams of H$^-$, O$^-$, O$_2^-$ for proton therapy and analytical applications

([IMP — Ion Sources page](https://english.imp.cas.cn/research/rc/atc/isg/rf/202109/t20210922_283727.html))

---

## 1.8 Looking Ahead: FECR for HIAF

The next-generation facility at IMP, the **High Intensity heavy-ion Accelerator Facility (HIAF)**, will require even more intense beams of very highly charged heavy ions. To meet this need, IMP is building **FECR** — the world's first **fourth-generation ECR ion source** operating at **45 GHz**. ([OSTI — From 24-28 GHz SECRAL to 45 GHz fourth generation ECR](https://www.osti.gov/pages/biblio/1581101))

Key FECR design parameters:
- **Microwave frequency**: 45 GHz (primary) + lower frequencies for multi-frequency heating
- **Axial mirror field**: 6.5 T
- **Sextupole field at wall**: 3.5 T
- **Magnet technology**: Nb$_3$Sn superconducting wire (first ECR source to use this material), developed in collaboration with LBNL
- **Microwave power**: 20 kW coupling system
- **Target performance**: Pulsed 50 pμA $^{238}\text{U}^{35+}$ beam (~1 ms duration), roughly 5× higher than existing ECR sources

([ResearchGate — Nb$_3$Sn superconducting magnet for FECR](https://www.researchgate.net/publication/363187544); [Springer — Status of HIAF](https://link.springer.com/article/10.1007/s43673-022-00064-1))

FECR represents the continuation of the frequency scaling approach: 45 GHz demands fields achievable only with Nb$_3$Sn (conventional NbTi wire cannot reach the required 6.5 T sextupole fields), making this source a significant engineering challenge as well as a physics milestone.

---

## Summary

The ion source is the gatekeeper of the entire RIB experiment. It determines:

1. **Which beam species** are available (element and isotope)
2. **What charge state** can be achieved (setting the maximum energy via $E/A = K(q/A)^2$)
3. **How much beam intensity** reaches the production target (setting the RIB production rate)
4. **Beam quality** (emittance, stability) that propagates through the entire accelerator chain

At IMP, the SECRAL/SECRAL-II superconducting ECR ion sources provide world-leading performance across the full periodic table, from protons to uranium, enabling the diverse physics program at [[HIRFL]]-RIBLL and laying the groundwork for the next-generation [[HIAF]] facility.
