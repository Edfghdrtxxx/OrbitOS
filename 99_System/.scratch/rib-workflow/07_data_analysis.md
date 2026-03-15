# 7. Data Analysis: From Raw Data to Physics Results

This section traces the complete analysis chain of a radioactive isotope beam (RIB) experiment --- from binary data off the DAQ to published physics conclusions. The workflow is presented in the order an experimenter encounters it: raw data processing, particle identification, track reconstruction, physics extraction, and interpretation.

---

## 7.1 Raw Data Processing

### 7.1.1 Unpacking Binary Data

The data acquisition system (DAQ) at a RIB facility --- for example the RIBDAQ system at RIKEN RIBF [Baba et al., NIM A 616 (2010) 65] or the FRIB DAQ at MSU --- writes binary event files containing digitized detector signals tagged with timestamps, module IDs, and channel numbers. The first analysis step converts ("unpacks") these binary streams into structured objects, almost universally stored as ROOT TTrees [Brun & Rademakers, NIM A 389 (1997) 81].

A typical unpacker:

1. **Reads raw binary words** from VME, GET electronics, or FPGA-based digitizers.
2. **Decodes header information**: event number, trigger type, timestamp.
3. **Maps channel addresses** to physical detector elements (pad number in a TPC, strip in a silicon detector, PMT of a scintillator).
4. **Writes structured TTrees** where each branch corresponds to a detector subsystem, enabling downstream analysis in ROOT macros or compiled C++ code.

### 7.1.2 Pedestal Subtraction and Baseline Correction

Every electronic channel has a non-zero output even in the absence of a signal --- the **pedestal**. Pedestal subtraction removes this DC offset:

- Pedestals are measured in dedicated runs with no beam (or from the pre-signal region of each waveform in self-triggered systems).
- For waveform-digitizing systems (e.g., GET electronics in the AT-TPC), **baseline restoration** is performed on a sample-by-sample basis, fitting or averaging the pre-trigger samples and subtracting the resulting baseline from the full waveform [IAEA-TECDOC-1706, "Instrumentation for Digital Nuclear Spectroscopy"].
- Slow baseline drifts caused by detector leakage current, count-rate effects, or temperature changes require dynamic baseline estimation algorithms (e.g., moving-average or digital trapezoidal filters).

### 7.1.3 Gain Matching and Calibration

After pedestal subtraction, raw ADC values must be converted to physical units (energy in MeV, position in mm, time in ns). This requires three classes of calibration:

**Energy calibration:**
- Use known alpha sources (${}^{241}$Am, ${}^{148}$Gd, triple-alpha) or internal calibration reactions with well-known $Q$-values.
- For silicon telescopes: calibrate each strip independently using a pulser + alpha source; correct for pulse-height defect at low energies.
- For TPC pads: equalize (gain-match) all pads so that the same energy deposit produces the same ADC response across the entire pad plane; residual gain variations propagate directly into dE/dx resolution.

**Position calibration:**
- For PPACs and MWDCs: convert delay-line or charge-division signals to position using mask calibrations or elastic scattering of known beams.
- For TPCs: the drift velocity $v_d$ converts drift time to the longitudinal ($z$) coordinate; it depends on gas composition, pressure, temperature, and electric field strength, and must be monitored continuously.

**Timing calibration:**
- Time-to-digital converters (TDCs) are calibrated using precision time calibrators.
- Time walk corrections are applied to constant-fraction discriminator (CFD) outputs.
- ToF offsets are determined from prompt gamma peaks or known-velocity beams.

---

## 7.2 Particle Identification (PID)

Particle identification determines the nuclear charge $Z$ and mass number $A$ (or mass-to-charge ratio $A/Q$) of each detected particle. Different detector subsystems contribute complementary PID information.

### 7.2.1 Upstream PID: Beam Identification

In a RIB experiment the beam itself is a cocktail of isotopes produced by projectile fragmentation or in-flight fission. Event-by-event beam identification is essential and uses three observables measured in the beam-line detectors:

| Observable | Detectors | Identifies |
|---|---|---|
| Time-of-Flight (ToF) | Plastic scintillators or diamond detectors at two stations | Velocity $\beta = L/c\Delta t$ |
| Energy loss ($\Delta E$) | Ionization chamber | $Z$ (via $\Delta E \propto Z^2/\beta^2$, [[Bethe-Bloch Formula]]) |
| Magnetic rigidity ($B\rho$) | Position at dispersive focal plane (PPACs) | $A/Q$ (via $B\rho = \gamma m v / Q$) |

Combining these yields a $Z$ vs. $A/Q$ plot where each isotope forms a distinct cluster. In the [[BigRIPS]] separator at RIKEN, this technique routinely identifies isotopes with $\Delta Z/Z < 0.4\%$ and $\Delta(A/Q)/(A/Q) < 0.05\%$ [Kubo, NIM B 204 (2003) 97; Fukuda et al., NIM B 317 (2013) 323].

### 7.2.2 The $\Delta E$-$E$ Method for Reaction Products

For charged particles that stop in a detector telescope (thin $\Delta E$ detector + thick $E$ detector), the product $\Delta E \times E$ (or its power-law generalization) yields a [[Particle Identification]] parameter proportional to $Z^2 A^\mu$ ($\mu \approx 1$) [Tassan-Got & Stephan, NIM B 194 (2002) 503]. This is the standard method for identifying reaction products (protons, deuterons, tritons, ${}^3$He, alphas) in silicon telescope arrays surrounding the target.

Key practical points:
- Particles must stop in the $E$ detector; punch-through events require separate treatment or an additional detector layer.
- Isotope resolution depends on the [[Energy Resolution]] of both detectors and the uniformity of the $\Delta E$ detector thickness.
- 2D gates ("banana gates") are drawn on the $\Delta E$ vs. $E$ plot to select specific isotopes.

### 7.2.3 dE/dx from TPC Tracks

In a [[Time Projection Chamber]], the charge deposited on each pad row provides a spatially resolved measurement of [[dE-dx|$\mathrm{d}E/\mathrm{d}x$]]. The ionization pattern along the track follows the [[Bethe-Bloch Formula]]:

$$-\frac{\mathrm{d}E}{\mathrm{d}x} \propto \frac{Z^2}{\beta^2}\left[\ln\frac{2m_e c^2 \beta^2 \gamma^2}{I} - \beta^2\right]$$

where $I$ is the mean excitation energy of the gas. The truncated mean of the per-row charge measurements (discarding the highest 30--40% to suppress Landau-tail fluctuations) gives the best dE/dx resolution ($\sim$5--10% for heavy ions). Plotting dE/dx vs. total energy or vs. magnetic rigidity separates species.

### 7.2.4 PID Spectra and Gating

The standard PID spectra are two-dimensional correlation plots:

- **$\Delta E$ vs. ToF**: Separates by $Z$ (vertical axis) and velocity (horizontal); used for beam-line PID.
- **$\Delta E$ vs. $E$**: The classic telescope PID for reaction products; "banana" curves for each isotope.
- **$Z$ vs. $A/Q$**: The canonical beam identification plot from $B\rho$-ToF-$\Delta E$.
- **dE/dx vs. total energy**: TPC-based PID for tracks.

An experimenter selects ("gates on") a specific isotope in these plots to isolate a reaction channel. Graphical cuts in ROOT (TCutG objects) or machine-learning classifiers (e.g., ResNet-based PID, relevant to the user's thesis work) define the selection region. The purity and efficiency of these gates directly affect the quality of downstream physics results.

---

## 7.3 Track Reconstruction (TPC Experiments)

[[Track Reconstruction]] converts raw pad signals into three-dimensional particle trajectories. The chain proceeds in stages of increasing abstraction.

### 7.3.1 Pad Signal $\to$ Hit Finding $\to$ Cluster Finding

1. **Pad signal processing**: After pedestal subtraction and gain matching, each pad's waveform is analyzed for peaks above threshold. A peak corresponds to ionization charge that drifted to the pad plane from a specific $(x, y, z)$ location.
2. **Hit finding**: Each above-threshold peak is fitted (typically with a Gaussian) to extract the hit amplitude (proportional to local dE/dx), the drift time (giving the $z$ coordinate), and the pad position (giving $x$ and $y$).
3. **Cluster finding**: Hits on adjacent pads and adjacent time buckets are grouped into clusters. A cluster represents a single spatial point where the track crossed a pad row. For liquid-argon TPCs, the MLEM (Maximum Likelihood Expectation Maximization) algorithm improves spatial resolution by deconvolving overlapping charge distributions [Collaboration, NIM A 804 (2015) 114].

### 7.3.2 Track Finding Algorithms

Given a set of space points (clusters), track finding identifies which points belong to the same particle trajectory. Three principal methods are used:

**[[Hough Transform]]:**
- Each space point votes in a parameter space (e.g., $\rho$-$\theta$ for lines, or curvature-dip angle for helices).
- Peaks in the accumulator correspond to track candidates.
- Robust against outliers and gaps; computational cost scales with parameter-space dimensionality.
- Used in the ALICE TPC for online and offline track finding [Vestbo et al., NIM A 566 (2006) 422].

**[[RANSAC]] (Random Sample Consensus):**
- Repeatedly samples minimal point subsets, fits a track model, and counts inliers within a distance threshold.
- The model with the highest inlier count is kept.
- Effective when the outlier fraction is high (e.g., delta electrons, noise hits).
- Used for track seeding in active-target TPCs such as the AT-TPC at FRIB.

**Cellular automaton / conformal mapping:**
- Links nearby space points into tracklets, then merges tracklets into full tracks.
- Fast and parallelizable; used in high-multiplicity environments.

### 7.3.3 Track Fitting

Once a set of hits is associated with a track, the trajectory parameters (position, direction, curvature) are extracted by fitting.

**[[Kalman Filter]]:**
- The standard method for track fitting in modern experiments [Fruhwirth, NIM A 262 (1987) 444].
- Propagates the track state (position, momentum, covariance matrix) from hit to hit using the equations of motion in the magnetic field.
- At each hit, the prediction is updated using the measurement, producing minimum-variance parameter estimates.
- Naturally incorporates multiple scattering and energy loss in the gas.
- The Extended Kalman Filter (EKF) handles the nonlinearities of helical motion in a magnetic field.

**Chi-square minimization:**
- A global fit minimizes $\chi^2 = \sum_i (d_i / \sigma_i)^2$, where $d_i$ is the residual between the hit and the fitted track and $\sigma_i$ is the hit resolution.
- Less flexible than the Kalman filter for handling material effects but conceptually simpler.

### 7.3.4 Vertex Reconstruction

The **reaction vertex** --- the point where the beam particle interacted with the target nucleus --- is found by:

- Extrapolating the beam track and the reaction-product tracks backward toward the target.
- Finding the point of closest approach (POCA) or minimizing the sum of distances.
- In an active-target TPC, the vertex is directly visible in the 3D point cloud as the junction of multiple tracks.
- Vertex resolution directly impacts the excitation-energy resolution in missing-mass measurements (see Section 7.4.1), because the reaction depth in the target determines the beam energy at the reaction point.

---

## 7.4 Physics Extraction

With particles identified and tracks reconstructed, the data are converted into physics observables.

### 7.4.1 Missing-Mass Spectroscopy

[[Missing-Mass Spectroscopy]] is the workhorse technique for measuring excitation energies in RIB experiments. For a two-body reaction $A(a, b)B$ in inverse kinematics (heavy beam $A$ on light target $a$, detecting the light ejectile $b$):

$$M_B^2 c^4 = (E_A + E_a - E_b)^2 - |\vec{p}_A + \vec{p}_a - \vec{p}_b|^2 c^2$$

The excitation energy of the residual nucleus $B$ is then:

$$E_x = M_B c^2 - M_B^{(\mathrm{g.s.})} c^2$$

Key features:
- Only the ejectile $b$ needs to be detected --- the heavy residue $B$ (which may be unbound or very short-lived) does not need to reach any detector.
- The technique is uniquely powerful for studying particle-unbound states, where the residue decays before detection.
- Resolution is limited by: (i) the momentum resolution of the spectrometer or detector system, (ii) the beam energy spread and angular divergence, (iii) energy-loss straggling in the target.
- At RIKEN, the SHARAQ spectrometer achieves $p/\Delta p \sim 15000$, resolving individual nuclear levels [Uesaka et al., Prog. Part. Nucl. Phys. 67 (2012) 604].
- In solenoidal spectrometers (HELIOS, ISS, AT-TPC in solenoid mode), excitation energy is reconstructed from the energy-position correlation of the ejectile, enabling high resolution without a large-acceptance magnetic spectrometer [Kay et al., arXiv:2501.04731].

### 7.4.2 Angular Distributions and Differential Cross Sections

The [[Differential Cross Section]] $\mathrm{d}\sigma/\mathrm{d}\Omega$ as a function of the center-of-mass scattering angle $\theta_\mathrm{CM}$ is the primary observable connecting experiment to reaction theory:

$$\frac{\mathrm{d}\sigma}{\mathrm{d}\Omega} = \frac{N_\mathrm{detected}}{N_\mathrm{beam} \cdot n_\mathrm{target} \cdot \Delta\Omega \cdot \varepsilon}$$

where $\varepsilon$ is the detection efficiency (often determined by Monte Carlo simulation with Geant4). The lab-frame angles are transformed to the center-of-mass frame using the relativistic Jacobian.

Extracting angular distributions requires:
- Accurate scattering-angle reconstruction from track parameters.
- Efficiency corrections as a function of angle (geometric acceptance, dead regions, trigger efficiency).
- Subtraction of background from target-frame contamination or misidentified particles.
- Binning in $\theta_\mathrm{CM}$ and normalizing to solid angle.

In inverse kinematics, the center-of-mass angular range maps to a compressed range in the lab frame, and forward CM angles correspond to large lab angles --- this is why large-area silicon arrays or active-target TPCs are essential.

### 7.4.3 DWBA Comparison and Spectroscopic Factor Extraction

The [[DWBA]] (Distorted Wave Born Approximation) provides the theoretical single-particle cross section for a direct reaction (transfer, inelastic scattering). Comparing experiment to theory extracts the [[Spectroscopic Factor]] $C^2S$:

$$C^2S = \frac{(\mathrm{d}\sigma/\mathrm{d}\Omega)_\mathrm{exp}}{(\mathrm{d}\sigma/\mathrm{d}\Omega)_\mathrm{DWBA}}$$

The procedure:
1. **Choose optical-model parameters** for the entrance and exit channels (from global parameterizations such as Chapel Hill 89 or Koning-Delaroche, or from fits to elastic scattering data).
2. **Define the bound-state potential** (Woods-Saxon geometry: radius $r_0$, diffuseness $a$, spin-orbit term) that reproduces the separation energy of the transferred nucleon.
3. **Specify the transferred quantum numbers** ($n$, $\ell$, $j$) for each state.
4. **Run DWBA codes** (FRESCO, DWUCK4, or TWOFNR) to compute $(\mathrm{d}\sigma/\mathrm{d}\Omega)_\mathrm{DWBA}$.
5. **Normalize** the DWBA curve to the data; the normalization factor is $C^2S$.

The angular distribution shape is diagnostic of the transferred orbital angular momentum $\ell$:
- $\ell = 0$: forward-peaked, no diffraction minimum.
- $\ell = 1$: peak near $\theta_\mathrm{CM} \sim 10$--$20^\circ$ with one minimum.
- $\ell = 2$: peak near $\theta_\mathrm{CM} \sim 20$--$30^\circ$ with a characteristic oscillatory pattern.

**Uncertainties** in $C^2S$ are typically 25--35% for single-nucleon transfer, dominated by the choice of optical-model parameters and bound-state geometry [Enguita et al., Front. Phys. 8 (2020) 602920; Satchler, *Direct Nuclear Reactions*, 1983].

### 7.4.4 Excitation Energy Spectra

The excitation-energy spectrum is a histogram of reconstructed $E_x$ values after gating on a specific reaction channel (beam isotope + ejectile species). Peaks in this spectrum correspond to populated states in the residual nucleus. From the spectrum one extracts:

- **Peak positions** ($E_x$): excitation energies of nuclear levels, typically fitted with Gaussians convolved with the experimental response function.
- **Peak widths**: the intrinsic width $\Gamma$ of the state (if broader than the experimental resolution) or an upper limit; broad states indicate short lifetimes or particle-unbound resonances.
- **Peak areas**: proportional to the cross section for populating that state, which feeds into the spectroscopic factor extraction.
- **Spin-parity assignments** ($J^\pi$): from the angular distribution shape at each $E_x$.

### 7.4.5 Invariant Mass Reconstruction (Unbound States)

When the residual nucleus $B$ is particle-unbound (e.g., above the neutron separation energy), it decays in flight: $B^* \to B' + n$ (or other decay channels). The invariant mass technique reconstructs the parent state:

$$M_\mathrm{inv}^2 c^4 = \left(\sum_i E_i\right)^2 - \left|\sum_i \vec{p}_i\right|^2 c^2$$

where the sum runs over all decay products (e.g., the charged fragment $B'$ measured in a magnetic spectrometer + the neutron measured in a neutron detector array like MoNA-LISA or NEBULA). The decay energy $E_d = M_\mathrm{inv} - M_{B'} - m_n$ gives the energy of the resonance above the decay threshold.

This method requires:
- Coincident detection of all decay products.
- Neutron detection with good position and time resolution (for the neutron four-vector via ToF + hit position).
- A large-acceptance charged-fragment spectrometer (e.g., the Sweeper Magnet at NSCL, or SAMURAI at RIKEN).
- Careful efficiency corrections from Geant4 simulations of the neutron detector response.

Applications include mapping neutron-unbound states in the "Island of Inversion" ($N \approx 20$) and searching for multi-neutron systems (e.g., the tetraneutron) [Kohley et al., NIM A 887 (2020); Duer et al., arXiv:2506.11623].

---

## 7.5 From Observables to Conclusions

### 7.5.1 Shell Structure and Spectroscopic Factors

The [[Spectroscopic Factor]] $C^2S$ measures the overlap between the actual nuclear wave function and a pure single-particle configuration:

$$C^2S = |\langle \Psi_A | \Psi_{A-1} \otimes \phi_{n\ell j} \rangle|^2$$

A value $C^2S = 1$ would mean the state is a perfect single-particle state; measured values are typically 55--70% of the independent-particle-model prediction due to nucleon-nucleon correlations (the **quenching problem**) [Aumann et al., Prog. Part. Nucl. Phys. (2021)].

How spectroscopic factors reveal structure:
- **Occupied orbitals**: Large $C^2S$ for a specific $(n, \ell, j)$ configuration confirms that the corresponding single-particle orbital is occupied in the ground state of the target nucleus.
- **Shell closures**: A sudden drop in occupation (small $C^2S$) above a magic number confirms a shell gap.
- **Shell evolution far from stability**: Spectroscopic factors for exotic nuclei reveal how shell gaps change with neutron-proton ratio --- e.g., the disappearance of the $N = 20$ shell closure in the "Island of Inversion."
- **Quenching systematics**: The ratio $R_s = C^2S_\mathrm{exp} / C^2S_\mathrm{SM}$ as a function of binding-energy asymmetry probes short-range correlations and tensor forces.

### 7.5.2 Angular Distributions and Transferred Angular Momentum

The shape of the angular distribution at each excitation energy determines the transferred orbital angular momentum $\ell$. Combined with selection rules:

- In a $(d,p)$ transfer reaction, the parity transfer is $(-1)^\ell$ and the total angular momentum transfer is $j = \ell \pm 1/2$.
- Comparison with DWBA calculations for different $\ell$ values unambiguously assigns $J^\pi$ to observed states.
- This is the primary tool for constructing **level schemes** of exotic nuclei where gamma spectroscopy is impractical.

### 7.5.3 Constraining Nuclear Models

Experimental cross sections and spectroscopic factors constrain theoretical models at multiple levels:

- **Shell model**: Effective interactions (e.g., USD, SDPF-M, GXPF1) predict spectroscopic factors, level energies, and electromagnetic moments. Comparison with transfer-reaction data validates or refutes these interactions, especially for nuclei far from stability.
- **Ab initio methods**: Coupled-cluster, no-core shell model, and self-consistent Green's function calculations now reach medium-mass nuclei. Spectroscopic factors from knockout and transfer reactions provide direct benchmarks.
- **Collective models**: Inelastic scattering cross sections constrain deformation parameters ($\beta_2$, $\beta_4$) and the onset of collectivity.

### 7.5.4 Connection to Nuclear Astrophysics

Nuclear structure data from RIB experiments feed directly into astrophysical models:

- **r-process nucleosynthesis**: The rapid neutron capture process builds heavy elements in neutron star mergers and core-collapse supernovae. The path of the r-process depends on nuclear masses, $\beta$-decay half-lives, and neutron-capture cross sections --- all of which depend on the shell structure (magic numbers, shell gaps) of neutron-rich nuclei [Mumpower et al., Eur. Phys. J. A 59 (2023) 121].
- **Waiting points**: At closed neutron shells ($N = 50, 82, 126$), neutron capture slows and the r-process "waits" for $\beta$-decay. The persistence or quenching of these shell closures far from stability directly affects the abundance pattern of heavy elements.
- **Reaction rates**: Spectroscopic factors from $(d,p)$ reactions on radioactive targets determine the direct-capture component of $(n, \gamma)$ rates for nuclei too short-lived for direct neutron-capture measurements. The asymptotic normalization coefficient (ANC), related to $C^2S$ for peripheral reactions, provides a model-independent constraint [Mukhamedzhanov & Timofeyuk, Front. Phys. 8 (2020) 602920].

### 7.5.5 What a Typical Publication Looks Like

A publication reporting results from a RIB direct-reaction experiment typically contains:

1. **Experimental setup description**: beam production, target, detector array, trigger conditions.
2. **PID spectra**: $Z$ vs. $A/Q$ for beam identification; $\Delta E$ vs. $E$ for reaction product identification.
3. **Excitation-energy spectrum**: showing peaks for populated states, with fits indicating $E_x$, $\Gamma$, and cross sections.
4. **Angular distributions**: $\mathrm{d}\sigma/\mathrm{d}\Omega$ vs. $\theta_\mathrm{CM}$ for each state, overlaid with DWBA curves for different $\ell$ transfers.
5. **Level scheme**: energy levels of the residual nucleus with $J^\pi$ assignments from angular distribution analysis.
6. **Spectroscopic factors table**: for each state, listing $E_x$, $J^\pi$, $\ell$, $C^2S_\mathrm{exp}$, and comparison with shell-model predictions $C^2S_\mathrm{SM}$.
7. **Discussion**: implications for shell evolution, comparison with theory, and astrophysical relevance.

Example format of a spectroscopic factors table:

| $E_x$ (MeV) | $J^\pi$ | $n\ell j$ | $C^2S_\mathrm{exp}$ | $C^2S_\mathrm{SM}$ | $R_s$ |
|---|---|---|---|---|---|
| 0.000 | $5/2^+$ | $0d_{5/2}$ | 0.71(18) | 0.92 | 0.77 |
| 0.871 | $1/2^+$ | $1s_{1/2}$ | 0.85(21) | 1.00 | 0.85 |
| 5.085 | $3/2^+$ | $0d_{3/2}$ | 0.60(15) | 0.88 | 0.68 |

*(Illustrative values based on the style of Enguita et al. and compilations such as Tsang et al., PRC 75 (2007) 064606.)*

---

## 7.6 Software Ecosystem

| Software | Purpose | Notes |
|---|---|---|
| **ROOT** | Data analysis framework | Industry standard; TTrees for data storage, TH1/TH2 for histograms, TCutG for PID gates, RooFit for fitting. Written in C++ with Python bindings (PyROOT). [root.cern] |
| **Geant4** | Monte Carlo detector simulation | Simulates particle transport through detector geometry; essential for efficiency corrections, response functions, and resolution studies. C++ toolkit with extensive physics lists for nuclear reactions. [geant4.web.cern.ch] |
| **LISE++** | Fragment production estimation | Predicts intensity and purity of RIBs from projectile fragmentation or in-flight fission; includes energy-loss, charge-state, and ion-optics calculations. Standard tool at all in-flight separator facilities. [lise.frib.msu.edu] |
| **FRESCO** | Coupled-channels reaction calculations | General-purpose code for DWBA, CCBA, CRC, and adiabatic calculations. Inputs: optical potentials, bound-state geometry, coupling schemes. Gold standard for transfer reaction analysis. [fresco.org.uk] |
| **DWUCK4** | DWBA calculations | Simpler and faster than FRESCO for standard one-step DWBA; widely used for $(d,p)$, $(p,d)$, etc. |
| **TWOFNR** | Finite-range DWBA | Handles finite-range and non-locality corrections for transfer reactions. |
| **SFRESCO** | Automated fitting with FRESCO | Wrapper for FRESCO that performs $\chi^2$ minimization of optical-model parameters or spectroscopic factors against data. |
| **TALYS / EMPIRE** | Statistical model codes | For compound-nucleus reactions (Hauser-Feshbach); used when direct-reaction contributions must be separated. |
| **NPTool / ATTPCROOTv2** | Analysis frameworks for specific detectors | NPTool: modular framework for nuclear physics experiments; ATTPCROOTv2: dedicated framework for AT-TPC data analysis including track reconstruction and kinematic fitting. |

---

## References

- Baba, H. et al. "New data acquisition system for the RIKEN Radioactive Isotope Beam Factory." *NIM A* 616 (2010) 65. [doi:10.1016/j.nima.2010.02.120]
- Brun, R. & Rademakers, F. "ROOT --- An object oriented data analysis framework." *NIM A* 389 (1997) 81.
- Fruhwirth, R. "Application of Kalman filtering to track and vertex fitting." *NIM A* 262 (1987) 444.
- Fukuda, N. et al. "Identification of new neutron-rich isotopes..." *NIM B* 317 (2013) 323.
- IAEA-TECDOC-1706, "Instrumentation for Digital Nuclear Spectroscopy" (2013).
- Kay, B. P. et al. "Kinematics calibration and excitation energy reconstruction for solenoidal spectrometers." arXiv:2501.04731 (2025).
- Kubo, T. "In-flight RI beam separator BigRIPS at RIKEN." *NIM B* 204 (2003) 97.
- Mumpower, M. R. et al. "Nuclear quests for the r-process." *Eur. Phys. J. A* 59 (2023) 121.
- Satchler, G. R. *Direct Nuclear Reactions*. Oxford University Press (1983).
- Tassan-Got, L. & Stephan, C. "A new functional for charge and mass identification in $\Delta E$-$E$ telescopes." *NIM B* 194 (2002) 503.
- Thompson, I. J. & Nunes, F. M. *Nuclear Reactions for Astrophysics*. Cambridge University Press (2009).
- Uesaka, T. et al. "The SHARAQ spectrometer." *Prog. Part. Nucl. Phys.* 67 (2012) 604.
- Enguita (Moro), A. M. "Transfer reactions: the DWBA method." ECT* lectures (2025).
- Vestbo, C. et al. "Fast Hough-transform track reconstruction for the ALICE TPC." *NIM A* 566 (2006) 422.

---

*Vault links: [[Particle Identification]], [[ΔE-E Method]], [[dE-dx]], [[Bethe-Bloch Formula]], [[Time-of-Flight]], [[Track Reconstruction]], [[RANSAC]], [[Kalman Filter]], [[Hough Transform]], [[Missing-Mass Spectroscopy]], [[DWBA]], [[Spectroscopic Factor]], [[Differential Cross Section]], [[PID]], [[Time Projection Chamber]], [[Direct Reactions]], [[Transfer Reactions]], [[BigRIPS]], [[SHARAQ Spectrometer]]*
