# 4. Target & Reaction Mechanisms

> **Scope.** Once a secondary radioactive beam has been produced, purified, and delivered to the experimental hall, it must interact with a target to induce the nuclear reaction of interest. This section covers the choice of target, the necessity of [[Inverse Kinematics]], the menu of [[Direct Reactions]] available, the physics questions they address, and the kinematic and cross-section considerations that shape every RIB experiment.

---

## 4.1 Experimental Targets

The choice of target is dictated by the reaction channel, the beam energy and intensity, and the required energy resolution. Three broad categories are used in RIB experiments.

### 4.1.1 Solid Targets

Solid foils remain the most common target type at intermediate-energy (50--300 MeV/u) facilities. Typical materials include:

| Material | Composition | Primary use | Notes |
|----------|-------------|-------------|-------|
| CH$_2$ (polyethylene) | $(CH_2)_n$ | Proton-induced reactions: $(p,p')$, $(p,2p)$, $(p,pn)$ | Pure H target obtained by subtracting a matched C-only run |
| CD$_2$ (deuterated PE) | $(CD_2)_n$ | Deuteron-induced [[Transfer Reactions]]: $(d,p)$, $(d,d')$ | Carbon background subtracted identically to CH$_2$ |
| C (carbon) | $^{12}$C | Background subtraction; also used for nucleon removal (knockout) reactions | Serves as the reference for CH$_2$/CD$_2$ subtraction |
| Pb (lead) | $^{208}$Pb | [[Coulomb Excitation]] at intermediate energies | High-$Z$ target maximizes the Coulomb field |

Typical areal densities range from 0.3 to 2.5 mg/cm$^2$ for thin foils used in high-resolution experiments, up to $\sim$100 mg/cm$^2$ for thick-target measurements where luminosity is prioritized over energy resolution [Mouginot et al., *JINST* **16** (2021) P07002]. A fundamental trade-off exists: thicker targets increase the reaction yield but degrade excitation-energy resolution through energy-loss straggling of both the beam and the ejectile inside the target material.

### 4.1.2 Gas Targets

Gas targets provide pure hydrogen, deuterium, or helium targets without the carbon contamination inherent in plastic foils:

- **Windowless gas-jet targets** such as JENSA (Joint Experiments in Nuclear Structure and Astrophysics) at FRIB deliver areal densities comparable to solid targets ($\sim 10^{18}$--$10^{19}$ atoms/cm$^2$) within a few-millimeter interaction region, enabling high-resolution studies of hydrogen- and helium-induced reactions [Schmidt et al., *NIM A* **765** (2014) 1].
- **Cryogenic targets** such as HeCTOR (the $^3$He Cryogenic Target of Orsay) use cooled liquid or high-pressure gas cells to provide thick, isotopically pure light targets for direct reactions with radioactive beams.
- **Gas-cell targets** with thin entrance/exit windows (e.g., Mylar or Havar foils) are used for lower-energy experiments; the windows introduce some additional energy straggling.

### 4.1.3 Active Targets (AT-TPC)

In an [[Active-Target TPC]], the detector gas itself serves simultaneously as the reaction target and the tracking medium. This design offers several decisive advantages for RIB experiments:

1. **Maximum luminosity:** The effective target thickness can be made very large (the entire gas volume) without sacrificing angular or vertex resolution, because the reaction vertex is reconstructed in 3D from the ionization tracks.
2. **Full solid-angle coverage:** Low-energy recoil particles that would stop inside a conventional solid target instead produce measurable tracks in the gas.
3. **Excitation-function measurement in a single setting:** Because the beam continuously loses energy as it traverses the gas, reactions occur over a range of beam energies, allowing excitation functions to be mapped without changing the beam energy.

Common fill gases include deuterium ($d_2$), $^4$He, and isobutane mixtures. Operating pressures range from $\sim$50 to $\sim$500 Torr, balancing luminosity against spatial resolution degraded by straggling and electron diffusion. Major active-target detectors include MAIKo (Kyoto/RCNP), the AT-TPC at FRIB, and CAT-M/CAT-S at RIKEN [Beceiro-Novo et al., *Prog. Part. Nucl. Phys.* **84** (2015) 124].

---

## 4.2 Inverse Kinematics: Why and How

### 4.2.1 The Necessity of Inverse Kinematics

In conventional ("normal") kinematics, a light projectile (proton, deuteron) is accelerated onto a heavy, stable target. This arrangement cannot work for radioactive species because:

- Radioactive isotopes are too short-lived ($t_{1/2} \lesssim 1$ s) to fabricate into solid or liquid targets.
- Even longer-lived species are produced in quantities far too small (nanograms or less) to form a macroscopic target.

The solution is **[[Inverse Kinematics]]**: the heavy radioactive ion is the beam, and a light stable nucleus (H, D, $^3$He, $^4$He) is the target. This kinematic inversion is the enabling technique for essentially all direct-reaction studies with RIBs [Satchler, *Introduction to Nuclear Reactions* (1990); Aumann et al., *Phys. Rev. C* **88** (2013) 064610].

### 4.2.2 Kinematic Consequences

The large mass asymmetry between beam and target produces several experimentally important effects:

1. **Forward focusing (Lorentz boost).** The center-of-mass (CM) frame moves forward in the laboratory with a velocity close to the beam velocity. All reaction products — both the heavy residue and the light ejectile — are boosted into a forward cone. The heavy residue travels nearly straight ahead and can be collected by a downstream [[Magnetic Spectrometer]] (e.g., [[SHARAQ Spectrometer|SHARAQ]], BigRIPS, SAMURAI).

2. **Light-particle detection at large lab angles.** Although the CM angular distribution is forward-peaked, the Lorentz boost maps the light ejectile (proton, deuteron) to relatively large laboratory angles (often 30--80 degrees). Dedicated silicon-strip or CsI detector arrays surrounding the target are required to intercept these particles.

3. **Kinematic compression.** The mapping from CM angle $\theta_{\text{CM}}$ to lab angle $\theta_{\text{lab}}$ is highly nonlinear and compressed, meaning that the angular resolution in the lab must be very good to resolve structure in the CM angular distribution. For a two-body reaction $A(a,b)B$ in inverse kinematics, the lab angle of the ejectile $b$ reaches a maximum value $\theta_{\text{max}}$ given by:

$$\sin\theta_{\text{max}} = \frac{p_{\text{CM}}^{(b)}}{p_{\text{lab,boost}}}$$

where $p_{\text{CM}}^{(b)}$ is the CM momentum of the ejectile and $p_{\text{lab,boost}} = m_b \cdot v_{\text{CM}}$ is the momentum corresponding to the CM velocity.

4. **Missing-mass reconstruction.** Because the heavy residue may be particle-unbound or too short-lived to detect, [[Missing-Mass Spectroscopy]] is often employed: the excitation energy of the residue is reconstructed solely from the measured energy and angle of the light ejectile, using four-momentum conservation. The [[SHARAQ Spectrometer]] at RIKEN achieves $p/\Delta p \sim 15{,}000$, resolving individual nuclear levels.

### 4.2.3 Center-of-Mass vs. Laboratory Frame

All nuclear reaction theory is formulated in the CM frame, where the total momentum is zero and angular distributions carry clean signatures of the reaction mechanism. The transformation between frames requires the Jacobian:

$$\frac{d\sigma}{d\Omega_{\text{CM}}} = \frac{d\sigma}{d\Omega_{\text{lab}}} \left|\frac{d\Omega_{\text{lab}}}{d\Omega_{\text{CM}}}\right|$$

In inverse kinematics the Jacobian factor can be large and angle-dependent, making careful kinematic reconstruction essential. At intermediate energies ($\gtrsim 100$ MeV/u), relativistic kinematics (Lorentz transformations) must be used for accurate frame conversion.

---

## 4.3 Direct Reactions: The Tool of Choice

[[Direct Reactions]] occur on a fast timescale ($\sim 10^{-22}$ s), comparable to the transit time of the projectile across the nucleus. They are peripheral, involving one or a few nucleons, and their angular distributions are forward-peaked with diffraction patterns that encode the quantum numbers of the states involved. This makes them the primary spectroscopic tool for RIB experiments [Satchler, *Direct Nuclear Reactions* (1983); Glendenning, *Direct Nuclear Reactions* (2004)].

Direct reactions contrast with [[Compound Nucleus]] reactions, which proceed through a long-lived, thermally equilibrated intermediate state and carry no memory of the entrance channel.

### 4.3.1 Transfer Reactions

[[Transfer Reactions]] involve the transfer of one or more nucleons between the projectile and target:

- **Stripping reactions** deposit nucleon(s) from the projectile onto the target nucleus. The workhorse is $(d,p)$, which strips a neutron from the deuteron onto the beam nucleus, populating specific neutron single-particle states in the $(A+1)$ residue.
- **Pickup reactions** remove nucleon(s) from the beam nucleus. Example: $(p,d)$ picks up a neutron, probing occupied neutron orbitals in the beam nucleus.

**What they measure:**
- The angular distribution shape identifies the transferred orbital angular momentum $\ell$, allowing spin-parity ($J^\pi$) assignments.
- The magnitude of the [[Differential Cross Section]], compared with [[DWBA]] calculations, yields the [[Spectroscopic Factor]] $C^2S$, which measures the overlap between the true many-body wave function and a pure single-particle configuration.
- Transfer reactions probe both occupied and unoccupied orbitals depending on the reaction direction (pickup vs. stripping), making them uniquely versatile for mapping the single-particle level scheme.

**Key examples:** $^{132}$Sn$(d,p)^{133}$Sn to study neutron single-particle states near the doubly-magic $^{132}$Sn, directly relevant to r-process nucleosynthesis; $^{11}$Be$(p,d)^{10}$Be probing the halo structure of $^{11}$Be [Thompson & Nunes, *Nuclear Reactions for Astrophysics* (2009)].

### 4.3.2 Knockout Reactions

[[Knockout Reactions]] eject a nucleon from the projectile by a sudden, quasi-free collision with a target nucleon:

- $(p,2p)$: a target proton knocks out a proton from the beam nucleus.
- $(p,pn)$: a target proton knocks out a neutron.

Knockout reactions are performed at intermediate energies ($\sim$200--300 MeV/u), where the impulse approximation is valid and the struck nucleon can be treated as quasi-free.

**What they measure:**
- The inclusive cross section (summed over all final states of the residue), compared with eikonal reaction theory, yields [[Spectroscopic Factor|spectroscopic factors]].
- The momentum distribution of the heavy residue encodes the orbital angular momentum $\ell$ of the removed nucleon, providing spin-parity information.
- Knockout is most effective for deeply-bound nucleons, complementary to transfer reactions that excel for weakly-bound states.

**Quenching puzzle:** Spectroscopic factors extracted from knockout reactions show a systematic reduction ("[[Quenching Problem|quenching]]") relative to shell-model predictions. The degree of quenching appears to depend on the asymmetry between proton and neutron separation energies. Reconciling knockout and transfer spectroscopic factors remains an active area of research [Aumann et al., *Prog. Part. Nucl. Phys.*; Hansen & Tostevin, *Annu. Rev. Nucl. Part. Sci.* **53** (2003) 219].

### 4.3.3 Inelastic Scattering

Inelastic scattering $(p,p')$ or $(d,d')$ excites the target (beam) nucleus to a higher-lying state without transferring nucleons:

**What it measures:**
- Collective excitations (vibrational and rotational states), especially the first $2^+$ state.
- Nuclear deformation parameters $\beta_L$ extracted by comparing measured cross sections with coupled-channels or [[DWBA]] calculations.
- The $B(E2; 0^+ \to 2^+)$ transition strength, a fundamental measure of collectivity.

Proton inelastic scattering at intermediate energies is sensitive to both proton and neutron transition matrix elements, unlike [[Coulomb Excitation]] which probes only the proton (charge) distribution. Combining $(p,p')$ with Coulomb excitation on a high-$Z$ target (e.g., Pb) can disentangle proton and neutron contributions to the transition density, a technique applied extensively at RIKEN and GSI.

### 4.3.4 Elastic Scattering

Elastic scattering preserves the internal states of both collision partners:

**What it measures:**
- The angular distribution, analyzed with the optical model, determines the optical potential parameters (real and imaginary depths, radii, diffuseness).
- These optical potentials are essential inputs to [[DWBA]] calculations for all other direct reactions.
- For exotic nuclei (especially halo nuclei like $^{6}$He, $^{11}$Li, $^{11}$Be), deviations from the elastic scattering patterns of stable nuclei reveal anomalous matter distributions — extended neutron halos, diffuse surfaces, and modified nuclear radii.
- Total reaction cross sections $\sigma_R$ extracted from elastic scattering (via the optical theorem) provide model-independent information on nuclear sizes: $\sigma_R \propto \pi(R_{\text{beam}} + R_{\text{target}})^2$.
- Interaction cross sections $\sigma_I$ measured in transmission experiments at intermediate energies have been the primary tool for discovering halo nuclei [Tanihata et al., *Phys. Rev. Lett.* **55** (1985) 2676].

### 4.3.5 Charge-Exchange Reactions

[[Charge-Exchange Reaction|Charge-exchange reactions]] transfer electric charge between projectile and target without changing the mass number:

- **Single charge exchange (SCE):** $(p,n)$, $(n,p)$, $(^3\text{He},t)$, $(t,^3\text{He})$ — probes $\Delta T_z = \pm 1$ spin-isospin excitations.
- **Double charge exchange (DCX):** $(^{12}\text{C},^{12}\text{Be})$, $(^{18}\text{O},^{18}\text{Ne})$ — accesses $\Delta Z = \pm 2$ transitions relevant to neutrinoless double-beta decay ($0\nu\beta\beta$).

**What they measure:**
- At intermediate energies ($>100$ MeV/u), the forward-angle cross section for SCE is proportional to the Gamow-Teller strength $B(GT)$, providing a nuclear-physics analogue of beta-decay matrix elements.
- The Isobaric Analog State (IAS) and Gamow-Teller Giant Resonance (GTGR) are prominent features in SCE spectra.
- DCX reactions constrain nuclear matrix elements needed to extract neutrino masses from $0\nu\beta\beta$ half-life measurements, since DCX and $0\nu\beta\beta$ connect the same initial and final nuclear states.

---

## 4.4 Physics Questions Addressed

The combination of radioactive beams and direct reactions opens access to fundamental questions in nuclear structure and astrophysics:

### 4.4.1 Shell Evolution Far from Stability

The nuclear shell structure observed in stable nuclei — magic numbers at $N, Z = 2, 8, 20, 28, 50, 82, 126$ — is not universal across the nuclear chart. Far from stability, shell gaps can erode or new ones can appear due to changes in the monopole component of the nucleon-nucleon interaction (especially the tensor force) [Otsuka et al., *Rev. Mod. Phys.* **92** (2020) 015002]. Transfer and knockout reactions with RIBs directly measure single-particle energies and occupancies, mapping how orbitals shift relative to each other as $N/Z$ changes. Key discoveries include:

- Disappearance of $N = 20$ in the "island of inversion" around $^{32}$Mg.
- Emergence of $N = 16$ as a new magic number in oxygen isotopes.
- Weakening of $N = 28$ in neutron-rich Si and S isotopes.

### 4.4.2 Halo Nuclei

Halo nuclei (e.g., $^{11}$Li, $^{11}$Be, $^{6}$He) have one or two weakly-bound valence nucleons extending far beyond the nuclear core, producing an anomalously large matter radius. Elastic scattering, knockout reactions, and Coulomb dissipation reveal the spatial extent and quantum numbers of the halo wave function [Tanihata, *Prog. Part. Nucl. Phys.* **68** (2013) 215].

### 4.4.3 Drip Lines

The neutron and proton drip lines mark the limits of nuclear existence — beyond them, additional nucleons are unbound. Transfer and knockout reactions near the drip lines probe the single-particle structure of the most weakly bound systems, testing the predictions of nuclear mass models and the role of continuum coupling.

### 4.4.4 Nuclear Astrophysics (r-Process Path)

The rapid neutron-capture process (r-process) synthesizes roughly half of all elements heavier than iron, proceeding through extremely neutron-rich nuclei far from stability. Direct reaction measurements — especially $(d,p)$ transfer reactions on neutron-rich nuclei — constrain:

- Neutron-capture cross sections via the [[Surrogate Reaction]] method and level-density/gamma-strength information.
- Single-particle structure near shell closures ($N = 50, 82, 126$) that define the r-process abundance peaks.
- Nuclear masses and separation energies through reaction $Q$-values.

The $(d,p)$ reaction on $^{130}$Sn, $^{132}$Sn, and neighboring nuclei at ORNL and RIKEN has been a flagship program connecting nuclear structure to astrophysical nucleosynthesis.

### 4.4.5 Nuclear Forces and the Quenching Problem

The systematic reduction of measured [[Spectroscopic Factor|spectroscopic factors]] relative to independent-particle-model predictions ("quenching," typically $R_s \approx 0.5$--$0.7$) reflects the role of short-range and tensor correlations not captured by the mean-field picture. RIB experiments provide a vastly expanded dataset of spectroscopic factors across the nuclear chart, testing whether quenching is universal or depends on binding-energy asymmetry, and constraining ab-initio nuclear theory.

---

## 4.5 Cross Sections: Magnitudes and Implications

The [[Differential Cross Section]] $d\sigma/d\Omega$ is the fundamental measured quantity:

$$\frac{d\sigma}{d\Omega} = \frac{N_{\text{detected}}}{N_{\text{beam}} \cdot n_{\text{target}} \cdot \Delta\Omega \cdot \epsilon}$$

where $N_{\text{beam}}$ is the number of beam particles, $n_{\text{target}}$ is the target areal density (atoms/cm$^2$), $\Delta\Omega$ is the solid angle subtended by the detector, and $\epsilon$ is the detection efficiency.

### 4.5.1 Typical Magnitudes

| Reaction type | Typical $\sigma$ | Notes |
|---------------|-------------------|-------|
| Elastic scattering | $\sim$1--10 b | Dominated by Coulomb scattering at forward angles |
| Inelastic scattering to $2_1^+$ | $\sim$10--100 mb | Depends on collectivity ($B(E2)$) |
| Transfer $(d,p)$ to a single state | $\sim$1--30 mb/sr (peak) | Scales with $C^2S$ and $(2j+1)$ |
| Knockout $(p,2p)$, $(p,pn)$ | $\sim$1--50 mb (inclusive) | Depends on binding energy and $\ell$ |
| Charge exchange (GT transitions) | $\sim$1--10 mb/sr (0$^\circ$) | Proportional to $B(GT)$ |
| Coulomb excitation | $\sim$100--500 mb | Scales as $Z_{\text{target}}^2 \cdot B(E2)$ |

These cross sections, combined with typical RIB intensities ($10^3$--$10^6$ particles per second for exotic species, compared to $10^{10}$--$10^{12}$ pps for stable beams), determine the experimental counting rate and hence the feasibility of any given measurement. For the most exotic species near the drip lines, only reactions with the largest cross sections (elastic scattering, Coulomb excitation, inclusive knockout) are feasible.

### 4.5.2 Luminosity Considerations

The event rate is:

$$R = \sigma \cdot \mathcal{L} = \sigma \cdot I_{\text{beam}} \cdot n_{\text{target}}$$

where $\mathcal{L}$ is the luminosity. For a beam intensity of $10^4$ pps on a 10 mg/cm$^2$ CH$_2$ target ($n_{\text{target}} \approx 4 \times 10^{20}$ H atoms/cm$^2$), a reaction cross section of 10 mb gives:

$$R \approx 10 \times 10^{-27}\,\text{cm}^2 \times 10^4\,\text{s}^{-1} \times 4 \times 10^{20}\,\text{cm}^{-2} \approx 4 \times 10^{-2}\,\text{s}^{-1} \approx 140\,\text{events/hour}$$

This illustrates why thick targets (high $n_{\text{target}}$), high-efficiency detectors (large $\Delta\Omega$, near-$4\pi$ coverage), and [[Active-Target TPC]] devices that combine target and detector are essential for RIB experiments.

---

## 4.6 Summary: Matching Reaction to Physics Goal

| Physics goal | Preferred reaction | Observable | Theory framework |
|-------------|-------------------|------------|-----------------|
| Single-particle energies, $J^\pi$ | $(d,p)$, $(p,d)$ transfer | Angular distribution shape ($\ell$) | [[DWBA]] |
| [[Spectroscopic Factor]] $C^2S$ | Transfer or knockout | Cross-section magnitude | [[DWBA]], eikonal |
| Collectivity, deformation | $(p,p')$ inelastic, Coulex | $B(E2)$, $\beta_2$ | Coupled channels |
| Matter radii, halo structure | Elastic scattering, $\sigma_I$ | $d\sigma/d\Omega$, $\sigma_R$ | Optical model, Glauber |
| Spin-isospin response, $B(GT)$ | $(p,n)$, $(^3$He$,t)$ CE | $0^\circ$ cross section | DWBA + $\sigma\tau$ |
| $0\nu\beta\beta$ matrix elements | DCX | Cross section | DWBA, IBM |
| Astrophysical $(n,\gamma)$ rates | $(d,p)$ surrogate | Level densities, $\gamma$-strengths | Statistical + DWBA |

---

## References

- Satchler, G.R. *Direct Nuclear Reactions* (Oxford University Press, 1983)
- Glendenning, N.K. *Direct Nuclear Reactions* (World Scientific, 2004)
- Satchler, G.R. *Introduction to Nuclear Reactions*, 2nd ed. (Oxford, 1990)
- Thompson, I.J. & Nunes, F.M. *Nuclear Reactions for Astrophysics* (Cambridge University Press, 2009)
- Aumann, T., Bertulani, C.A. & Ryckebusch, J. "Quasifree (p,2p) and (p,pn) reactions with unstable nuclei," *Phys. Rev. C* **88**, 064610 (2013)
- Hansen, P.G. & Tostevin, J.A. "Direct Reactions with Exotic Beams," *Annu. Rev. Nucl. Part. Sci.* **53**, 219 (2003)
- Otsuka, T. et al. "Evolution of shell structure in exotic nuclei," *Rev. Mod. Phys.* **92**, 015002 (2020)
- Tanihata, I. et al. "Measurements of interaction cross sections and nuclear radii," *Phys. Rev. Lett.* **55**, 2676 (1985)
- Tanihata, I. "Recent experimental progress in nuclear halo structure studies," *Prog. Part. Nucl. Phys.* **68**, 215 (2013)
- Beceiro-Novo, S. et al. "Active targets and time projection chambers for experiments in nuclear structure and nuclear astrophysics," *Prog. Part. Nucl. Phys.* **84**, 124 (2015)
- Schmidt, K. et al. "The JENSA gas jet target," *NIM A* **765**, 1 (2014)
- Mouginot, B. et al. "Development and characterization of polyethylene and deuterated polyethylene targets," *JINST* **16**, P07002 (2021)
- Uesaka, T. et al. "The SHARAQ spectrometer," *Prog. Part. Nucl. Phys.* **67**, 604 (2012)
- Krane, K.S. *Introductory Nuclear Physics* (Wiley, 1988)

### Web Sources Consulted

- [Frontiers: Modern Advances in Direct Reactions for Nuclear Structure](https://www.frontiersin.org/journals/physics/articles/10.3389/fphy.2025.1643501/full)
- [ScienceDirect: Elastic scattering and reactions of light exotic beams](https://www.sciencedirect.com/science/article/abs/pii/S0146641009000519)
- [ScienceDirect: Nuclear magic numbers far from stability](https://www.sciencedirect.com/science/article/abs/pii/S0146641008000380)
- [arXiv: Structure of Exotic Nuclei — A Theoretical Review (1703.09045)](https://arxiv.org/abs/1703.09045)
- [ScienceDirect: Nuclear astrophysics with radioactive beams](https://www.sciencedirect.com/science/article/abs/pii/S037015730900252X)
- [Bertulani: Physics of Radioactive Beams — Elastic and Inelastic Scattering](http://faculty.tamuc.edu/cbertulani/cab/Lectures/ElasticInelasticScattering.pdf)
- [ScienceDirect: Matter density distributions from proton elastic scattering](https://www.sciencedirect.com/science/article/abs/pii/S0375947404000831)
