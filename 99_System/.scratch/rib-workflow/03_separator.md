# Fragment Separator & Secondary Beam Production

## 1. Production Target

When the primary beam exits the accelerator chain, it strikes a **production target** --- typically a thin foil of ${}^{9}\text{Be}$ (beryllium) or ${}^{12}\text{C}$ (carbon), chosen for their low atomic number to maximise the nuclear-interaction probability while minimising Coulomb scattering and secondary reactions that would destroy the desired fragments [Morrissey & Sherrill, *Phil. Trans. R. Soc. A* **356** (1998)].

Target thicknesses are tailored to the experiment: thin enough that fragments escape with beam-like velocities, thick enough that production yields are useful. Typical thicknesses range from a few hundred micrometres to several millimetres. For example, at RIBLL1 a 3.5 mm Be target was used with a 60 MeV/nucleon ${}^{12}\text{C}$ beam, while at RIBLL2 a 1581 $\mu$m ${}^{9}\text{Be}$ target was used for 80.6 MeV/nucleon ${}^{32}\text{S}$ fragmentation [Sun et al., *Phys. Rev. C* (IMP experiments); Kubo et al. PTEP 2012].

### What Happens: Projectile Fragmentation

The dominant reaction mechanism at intermediate and high energies (above ~50 MeV/nucleon) is **[[Projectile Fragmentation]]**. In a peripheral collision, only the overlap (surface) region of the projectile and target nuclei interacts. The projectile "core" survives largely intact and continues forward at nearly the beam velocity.

This process is described by the **abrasion-ablation model** in two steps [Gaimard & Schmidt, *Nucl. Phys. A* **531** (1991) 709]:

1. **Abrasion (fast, ~$10^{-23}$ s):** Nucleons in the geometric overlap zone between projectile and target are sheared off ("abraded"). The number of removed nucleons depends on the impact parameter --- more central collisions remove more nucleons. The surviving projectile remnant (the "prefragment") carries excitation energy roughly proportional to the number of abraded nucleons.

2. **Ablation (slower, ~$10^{-16}$--$10^{-19}$ s):** The excited prefragment de-excites by statistical evaporation of nucleons, light clusters ($\alpha$, $d$, $t$), and $\gamma$-rays, analogous to compound-nucleus decay (Weisskopf-Ewing theory). This second step determines the final identity ($Z$, $N$) of the fragment.

Because the fragment retains most of the beam velocity and is forward-focused, it can be captured and separated **in-flight** by a magnetic fragment separator --- a process that takes only microseconds, enabling access to isotopes with half-lives as short as sub-microsecond [Morrissey & Sherrill (1998)].

A wide distribution of isotopes is produced simultaneously: both proton-rich and neutron-rich species emerge, with cross sections spanning many orders of magnitude. The production cross section $\sigma$ for a specific fragment depends on the projectile-target combination and is typically calculated using semi-empirical parametrisations such as EPAX [Suemmerer & Blank, *Phys. Rev. C* **61** (2000) 034607] or modelled with codes like LISE++ [Tarasov & Bazin, *NIM B* **266** (2008) 4657].

---

## 2. RIBLL1 and RIBLL2 at IMP

The [[Institute of Modern Physics|IMP]] in Lanzhou operates two fragment separators as part of the HIRFL (Heavy Ion Research Facility in Lanzhou) complex.

### RIBLL1 (Radioactive Ion Beam Line in Lanzhou, 1st generation)

Constructed in July 1997 and operational since January 1998, RIBLL1 was designed as an **antisymmetric spectrometer with a double achromatic structure**, integrating design features from four existing intermediate-energy RIB facilities worldwide [Sun et al., *Sci. China* **42** (1999) 528; Sun et al., *NIM A* **503** (2003) 496].

| Parameter | Value |
|---|---|
| Total length | ~35 m |
| Magnet configuration | F0-Q$_2$DQ$_2$-F1-Q$_2$DQ$_2$-F2-Q$_2$DQ$_2$-F3-Q$_2$DQ$_2$-F4 |
| Dipole magnets | 4 (D) |
| Quadrupole magnets | 16 (Q), grouped in doublets |
| Focal planes | F0 (object), F1 & F3 (dispersive), F2 (intermediate achromatic), F4 (final achromatic) |
| Max. magnetic rigidity $B\rho_{\max}$ | 4.2 T$\cdot$m |
| Momentum acceptance $\Delta p/p$ | $\pm$5% (total 10%) |
| Solid angle acceptance $\Delta\Omega$ | $\geq$ 6.5 msr |
| Element resolution $Z/\Delta Z$ | > 150 |
| Mass resolution $A/\Delta A$ | > 300 (spectrometer mode); > 200 (separator mode) |

RIBLL1 is coupled to the SFC-SSC cyclotron chain and provides secondary beams at energies up to ~100 MeV/nucleon for light and medium-mass primary beams. It has produced more than one thousand short-lived ion beams, with the shortest-lived species having half-lives below 1 $\mu$s.

### RIBLL2 (2nd generation, at HIRFL-CSR)

RIBLL2 connects the CSRm (main Cooler Storage Ring, which serves as a synchrotron) to downstream experimental areas and the CSRe (experimental ring). It operates at significantly higher energies and rigidities than RIBLL1 [Sun et al., *Sci. Bull.* **63** (2018) 78; Tang et al., *Sci. Bull.* (2025)].

| Parameter | Value |
|---|---|
| Total length | ~55 m |
| Dipole magnets | 2 |
| Quadrupole magnets | 10 |
| Configuration | Mirror-symmetric, asymmetric double achromatic |
| Max. magnetic rigidity $B\rho_{\max}$ | 10.64 T$\cdot$m |
| Momentum acceptance $\Delta p/p$ | $\pm$1% |
| Angular acceptance | $\pm$25 mrad (horizontal and vertical) |
| Dispersive focus (F1) dispersion | 1.169 cm/% |
| 1st-order momentum resolving power (F1) | 1200 (for 1 mm object at F0) |
| Main operating energy | ~300--400 MeV/nucleon |

RIBLL2 is one of the few fragment separators in the world capable of delivering RIBs above 300 MeV/nucleon. Its focal plane detectors include:
- **F1:** plastic scintillator (timing start) + scintillator strip array (position)
- **F2:** multi-wire proportional chamber (MWPC, beam monitoring)
- **F3:** MWPC (position for $B\rho$ reconstruction)
- **F4:** plastic scintillator (timing stop) + multi-wire drift chambers (tracking) + multi-sampling ionisation chambers (MUSIC, for $\Delta E$)

---

## 3. The $B\rho$-$\Delta E$-$B\rho$ Method

The $B\rho$-$\Delta E$-$B\rho$ technique is the standard in-flight isotope-separation method used at all major fragment separators (RIBLL, [[BigRIPS]], FRS at GSI, A1900/ARIS at FRIB) [Geissel et al., *NIM B* **70** (1992) 286; Kubo et al., PTEP 2012, 03C003].

### Step 1: First $B\rho$ selection

After the production target (F0), fragments enter the first set of dipole magnets. Since [[Magnetic Rigidity]] is $B\rho = p/(Ze)$, and at a given velocity $B\rho \propto A/Z$, the first dipole stage selects a band of ions with similar $A/Z$ ratios. However, many different isotopes share similar $A/Z$ values (e.g., ${}^{12}\text{C}^{6+}$ and ${}^{6}\text{Li}^{3+}$ both have $A/Z = 2$), so this selection alone is insufficient.

### Step 2: Wedge-shaped degrader ($\Delta E$)

At the dispersive focal plane (F1), a wedge-shaped **[[Achromatic Degrader]]** --- typically aluminium or beryllium --- is inserted. The degrader introduces an energy loss $\Delta E$ that depends on $Z^2$ (via the [[Bethe-Bloch Formula]]):

$$-\frac{dE}{dx} \propto \frac{Z^2}{v^2}\ln\left(\frac{2m_e v^2}{I}\right)$$

where $I$ is the mean ionisation potential of the degrader material. Crucially, two ions with the same $A/Z$ but different $Z$ (and hence different $A$) lose different amounts of energy in the degrader, emerging with different momenta.

The **wedge shape** is essential: its thickness varies with horizontal position to compensate for the momentum dispersion introduced by the first dipole stage. Higher-rigidity ions, displaced further from the central orbit at the dispersive focus, traverse more material. This preserves the achromatic condition and maintains beam quality (emittance) downstream. Without the wedge profile, the momentum spread would blow up and transmission would collapse.

### Step 3: Second $B\rho$ selection

After the degrader, the second set of dipoles performs another $B\rho$ analysis. Since different-$Z$ ions now have different momenta, this second stage separates isotopes that were degenerate in the first stage. The combination of the two $B\rho$ selections with the $Z$-dependent energy loss in between provides **both mass ($A$) and charge ($Z$) selectivity**.

The net effect: the $B\rho$-$\Delta E$-$B\rho$ method converts a $Z$-blind momentum selection into a $Z$-sensitive one, dramatically improving the purity of the secondary beam.

---

## 4. Cocktail Beam

Even after $B\rho$-$\Delta E$-$B\rho$ purification, the secondary beam emerging from a fragment separator is typically not isotopically pure. Instead, it is a **cocktail beam**: a mixture of several isotopic species that passed through the separator's acceptance windows simultaneously.

### Why multiple species survive

- The separator has finite momentum and angular acceptance ($\Delta p/p$ of a few percent, solid angle of several msr), which admits ions within a band of $A/Z$ and $Z$.
- Production cross sections vary over many orders of magnitude; abundant species can leak into the acceptance window even when the separator is optimised for a rare isotope.
- Charge states: for beams at intermediate energies, ions may not be fully stripped, and multiple charge states ($q < Z$) can coexist, with each state having a different $B\rho = p/(qe)$.

### Purity

The purity of the isotope of interest within the cocktail beam depends on:
- How exotic (far from stability) the desired species is --- more exotic usually means lower purity because neighbouring, more abundantly produced isotopes contaminate the beam.
- Degrader thickness optimisation --- thicker degraders improve $Z$ separation but reduce transmission and increase angular/energy straggling.
- Separator resolving power --- higher resolving power (better $B\rho$ resolution) narrows the accepted band.

Typical purities range from a few percent for very exotic species up to >90% for species close to stability. At BigRIPS, for well-optimised settings, purities of 50--90% are routine for moderately exotic beams. At RIBLL, purities depend on the specific experiment and beam-target combination; the cocktail composition is always measured experimentally.

### Consequence

Because the beam is a cocktail, **particle-by-particle identification** is mandatory: every ion arriving at the experimental target must be tagged by its $Z$ and $A$ (see Section 5).

---

## 5. Particle-by-Particle Identification at the Separator

In-flight fragment separators operate with cocktail beams at rates from a few pps to $\sim 10^5$--$10^6$ pps, and each particle must be individually identified. The standard technique combines three independent measurements [Kubo et al., PTEP 2012; Tang et al., *Sci. Bull.* (2025)]:

### 5.1 Time-of-Flight (ToF)

Plastic scintillator detectors at two focal planes (e.g., F1 and F4 at RIBLL2; F3 and F7 at BigRIPS) measure the flight time $t$ over a known path length $L$. The velocity is:

$$v = \frac{L}{t}$$

Timing resolutions of $\sigma_t \sim 30$--100 ps are achieved with thin plastic scintillators, giving velocity resolutions of $\Delta v/v \sim 10^{-3}$.

### 5.2 Energy loss ($\Delta E$)

Ionisation chambers (e.g., MUSIC detectors at RIBLL2) or silicon detectors measure the energy deposited by each ion. From the [[Bethe-Bloch Formula]], $\Delta E \propto Z^2/v^2$ (to first order), so combined with the measured velocity, the atomic number $Z$ is extracted.

At RIBLL2, charge resolutions of $\sigma_Z \sim 0.12$--0.19 have been achieved, sufficient to resolve individual elements cleanly [Tang et al., *Sci. Bull.* (2025)].

### 5.3 Magnetic rigidity ($B\rho$)

Position-sensitive detectors (PPACs, MWPCs, or scintillator strip arrays) at dispersive focal planes measure each ion's horizontal position, which is related to its momentum through the known dispersion:

$$B\rho = \frac{p}{Ze} \quad\Rightarrow\quad \frac{A}{Z} = \frac{B\rho \cdot e}{m_u \cdot \gamma v}$$

where $m_u$ is the atomic mass unit and $\gamma$ is the Lorentz factor. At RIBLL2, the $B\rho$ is reconstructed using experimentally derived ion-optical transfer matrix elements from position and ToF data at F3, achieving $A/Q$ resolutions of $\sigma_{A/Q} \sim 5.8 \times 10^{-3}$ [Tang et al., *Sci. Bull.* (2025); arXiv:2106.04760].

### Putting it together

The three measurements yield two-dimensional particle-identification (PID) plots:
- **$\Delta E$ vs. ToF** (or equivalently $Z$ vs. $A/Q$): each isotope appears as a distinct cluster
- Clean separation requires that the resolution in both dimensions exceeds the spacing between neighbouring isotopes

This event-by-event tagging means that even in a cocktail beam with multiple species, the isotope of interest can be selected in offline analysis with high confidence.

---

## 6. Comparison with Other Facilities

### BigRIPS at RIKEN

[[BigRIPS]] (Big RIKEN Projectile-fragment Separator) at the RIKEN RI Beam Factory is the world's most powerful in-flight fragment separator [Kubo et al., PTEP 2012, 03C003]. Key comparisons with RIBLL:

| Feature | RIBLL1 | RIBLL2 | BigRIPS |
|---|---|---|---|
| $B\rho_{\max}$ | 4.2 T$\cdot$m | 10.64 T$\cdot$m | 9.5 T$\cdot$m |
| Dipole magnets | 4 (room-temp.) | 2 (room-temp.) | 6 (room-temp.), 30$^\circ$ bend each |
| Quadrupole magnets | 16 (room-temp.) | 10 (room-temp.) | 14 superconducting triplets (STQ) |
| $\Delta p/p$ acceptance | $\pm$5% | $\pm$1% | $\pm$3% |
| Angular acceptance | $\geq$6.5 msr | $\pm$25 mrad (H&V) | $\pm$40 mrad (H), $\pm$50 mrad (V), ~80 msr |
| Degrader stages | 1 (at F1) | 1 (at F1) | 2 (at F1 and F5) |
| Primary beam energy | ~30--100 MeV/u | ~300--400 MeV/u | up to 345 MeV/u (${}^{238}$U) |
| Focal planes | F0--F4 | F0--F4 | F0--F7 (separator) + F8--F11 (ZDS) |

BigRIPS uses a **two-stage** $B\rho$-$\Delta E$-$B\rho$ scheme: the first stage (F0--F2) with a degrader at F1, and the second stage (F3--F7) with a degrader at F5. This double purification yields higher purity than single-stage separators. BigRIPS's superconducting quadrupoles provide larger angular acceptance, and its coupling to the SRC (Superconducting Ring Cyclotron, up to 345 MeV/nucleon for uranium) gives access to the most neutron-rich nuclei via both projectile fragmentation and in-flight fission of actinide beams.

### ISOL approach

The [[ISOL]] (Isotope Separation On-Line) method is fundamentally different from in-flight separation:

| Aspect | In-flight (RIBLL, BigRIPS) | ISOL (ISOLDE, ISAC) |
|---|---|---|
| Target | Thin (~mm); fragments fly through | Thick & hot; products stop inside |
| Extraction | In-flight, ~$\mu$s | Diffusion + effusion, ~ms--s |
| Shortest accessible $t_{1/2}$ | Sub-$\mu$s | ~ms (limited by extraction time) |
| Beam quality (emittance) | Large (beam-like velocities, spread) | Excellent (re-ionised, mass-separated) |
| Chemistry dependence | None (universal for all elements) | Strong (refractory elements difficult) |
| Energy | High (tens--hundreds MeV/u) | Low (keV); post-acceleration needed |
| Typical application | Reaction studies, spectroscopy in-flight | Precision measurements, traps, lasers |

The two methods are **complementary**: in-flight separation excels at fast, universal access to short-lived species for reaction studies, while ISOL provides high-quality beams for precision experiments. HIRFL uses the in-flight approach exclusively; CERN's ISOLDE and TRIUMF's ISAC are the leading ISOL facilities [Blumenfeld et al., *Phys. Scr.* **T152** (2013)].

---

## 7. What Determines Secondary Beam Intensity

The intensity (rate) $R_{\text{sec}}$ of a specific secondary-beam isotope delivered to the experiment is governed by:

$$R_{\text{sec}} = R_{\text{prim}} \cdot n_t \cdot \sigma_{\text{prod}} \cdot \epsilon_{\text{sep}} \cdot T_{\text{det}}$$

where:

| Symbol | Meaning | Typical influence |
|---|---|---|
| $R_{\text{prim}}$ | Primary beam intensity (pps) | Linear scaling; higher is better. HIRFL-CSR delivers up to ~$10^8$--$10^9$ pps for light-medium beams |
| $n_t$ | Target areal number density (atoms/cm$^2$) | Proportional to target thickness; limited by energy loss and angular straggling |
| $\sigma_{\text{prod}}$ | Production cross section (cm$^2$) | Drops exponentially as the fragment moves farther from the primary beam in the nuclear chart. Parametrised by EPAX or computed by LISE++/ABRABLA |
| $\epsilon_{\text{sep}}$ | Separator transmission efficiency | Determined by $\Delta p/p$, $\Delta\Omega$, and degrader losses. BigRIPS achieves $\epsilon_{\text{sep}} \sim 50$--80% for well-centred fragments; RIBLL values depend on tuning |
| $T_{\text{det}}$ | Detector/DAQ live-time fraction | Typically 70--95%; limited by DAQ dead time at high rates |

### Key limiting factors

1. **Production cross section** --- the single most important factor for exotic species. For nuclei near the drip line, $\sigma_{\text{prod}}$ can be below 1 nanobarn ($10^{-33}$ cm$^2$), yielding only a few particles per day even with the most intense primary beams.

2. **Primary beam intensity** --- directly proportional to secondary yield. The push for higher primary beam intensities (e.g., FRIB's 400 kW beam power, RIBF's uranium beams at ~80 pnA) is driven entirely by the need to access the most exotic species.

3. **Separator acceptance** --- both angular ($\Delta\Omega$) and momentum ($\Delta p/p$). Fragments from projectile fragmentation have broad momentum distributions ($\Delta p/p \sim 2$--5% FWHM, increasing with nucleon removal), so a separator with narrow acceptance loses a significant fraction. BigRIPS's $\pm$3% and large solid angle (~80 msr) represent current state-of-the-art.

4. **Target thickness** --- increasing thickness raises yield but also increases energy loss, angular straggling, and secondary reactions (which destroy the desired fragment). An optimum thickness exists for each reaction.

5. **Degrader transmission** --- nuclear reactions in the degrader material destroy a fraction of the fragments (typically 10--30% loss), and energy/angular straggling in the degrader reduces the fraction captured by the second stage.

These factors are routinely simulated using the **LISE++** code [Tarasov & Bazin, *NIM B* **266** (2008) 4657], which combines production cross-section models, ion-optical transport, and energy-loss calculations to predict secondary beam rates and cocktail compositions for experiment planning.

---

## References

- Gaimard, J.-J. & Schmidt, K.-H. (1991). *Nucl. Phys. A* **531**, 709 --- abrasion-ablation model
- Geissel, H. et al. (1992). *NIM B* **70**, 286 --- the GSI Fragment Separator (FRS)
- Morrissey, D.J. & Sherrill, B.M. (1998). *Phil. Trans. R. Soc. A* **356**, 1985 --- review of in-flight separation
- Sun, Z. et al. (1999). *Sci. China* **42**, 528 --- RIBLL design
- Sun, Z. et al. (2003). *NIM A* **503**, 496 --- RIBLL performance
- Tarasov, O.B. & Bazin, D. (2008). *NIM B* **266**, 4657 --- LISE++ code
- Kubo, T. et al. (2012). *PTEP* 2012, 03C003 --- BigRIPS and ZeroDegree spectrometer
- Fukuda, N. et al. (2013). *NIM B* **317**, 323 --- BigRIPS identification and separation
- Blumenfeld, Y. et al. (2013). *Phys. Scr.* **T152**, 014023 --- comparison of ISOL and in-flight methods
- Sun, Z. et al. (2018). *Sci. Bull.* **63**, 78 --- RIBLL2 beam line at HIRFL-CSR
- Tang, S.W. et al. (2025). *Sci. Bull.* --- full realisation of RIBLL2 separator [arXiv:2505.00053]
- Ye, Y.L. et al. (2021). arXiv:2106.04760 --- improving PID at RIBLL2
