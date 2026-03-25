---
title: Learning Progress
type: project
status: active
area: "[[Physics]]"
created: 2026-02-13
priority: high
tags: [learning, physics, math, PhD-prep, self-assessment]
---
# Fundamental Learning Progress

> [!info] Purpose
> Track knowledge gaps identified from thesis reference papers and build foundations for PhD entrance exam prep. **Primary target: Route B exam for direct PhD entry (Summer 2027).** Fallback: retake for Summer 2028 if Kenkyusei path activated. Items are ordered by dependency so earlier items unlock later ones.

> [!important] Two-stage learning pathway (updated 2026-03-09 — Route B chosen)
> **Stage 1 (this plan):** Thesis/paper comprehension + solid foundations in all four exam subjects through 2027.
> **Stage 2 (separate project):** Intensive PhD entrance exam prep. For Route B: GRE Physics + TOEFL + possible department written exam. Stage 2 targets **Summer 2027** for direct PhD entry. If Kenkyusei fallback activates, Stage 2 extends to Summer 2028.
> This plan covers Stage 1. Phases 0–4 are thesis-driven. Phases 5–7 build strong working foundations (not just conversational) so that Stage 2 can focus on exam-level drilling rather than learning from scratch.

> [!success] Decision Gate: Exam Route RESOLVED (2026-03-09)
> **Route B chosen** (decision by user + IMP supervisor). Route A archived. Sub-track (GSGC vs Special Selection) undecided.
> **Note:** While Route B is chosen, the **GSGC vs Special Selection sub-track distinction is pending** — GSGC is a 5-year integrated M+D program; Special Selection is 3-year doctoral only. Which applies to someone with an existing master's degree is unresolved. See [[DG_GSGC_vs_Special_Selection]] for full decision gate.
> GSGC-specific details (whether written exam is waived by supervisor) are **pending professor meeting**. If written exam is waived, Phases 5–7 can revert to "conversational" level and freed hours shift to **GRE Physics prep**. Phase 0.5 (Complex Analysis) becomes optional.
> If GSGC written exam is required by supervisor, study plan mostly stays — add GRE Physics as parallel track.
> **Action:** Update this plan after professor meeting confirms GSGC written exam requirement. See [[UTokyo_RIKEN#Admission Routes Summary]].

> [!abstract] UTokyo PhD Entrance Exam — Confirmed Structure (Route A only — ARCHIVED; Route B chosen)
> **Format:** 240 min, 4 mandatory problems, 400 points total
> | Problem | Subject | Weight |
> |---------|---------|--------|
> | 1 | Mathematics (linear algebra, complex analysis, Fourier, ODEs) | 100 pts |
> | 2 | Quantum Mechanics | 100 pts |
> | 3 | Statistical Mechanics | 100 pts |
> | 4 | Classical Mechanics + Electromagnetism | 100 pts |
>
> **English:** 100 pts via TOEFL iBT/TOEIC (submitted in advance). **Total: 500 pts.**
> **Answers can be written in English** — no Japanese writing barrier.
> **Past papers (2015–2025):** `50_Resources/Physics/UTokyo_Past_Exams/` | Solutions: miyake.github.io (2006–2025)

## Schedule at a Glance

| Period | Main Track | Parallel Track | Weeks |
|--------|---------------------------|----------------|-------|
| **Feb 2026** | Phase 0.1: Linear Algebra + find past exam papers | - | 3 |
| **Mar** | Phase 0.2–0.4: Calculus, ODEs, Fourier | - | 4 |
| **Apr (wk 8–9)** | Phase 0.5: Complex Analysis | - | 2 |
| **Apr–early May (wk 10–14)** | Phase 1.1–1.3: QM foundations, angular momentum, perturbation | - | 5 |
| **Late May–Jun** | Phase 2.1: Shell model core | Phase 5: CM (3 hrs/wk) | 5 |
| **Jul** | Phase 2.2–2.3: Paper evidence chain | Phase 5 continue (3 hrs/wk) | 4 |
| **Aug** | Phase 3: Experimental methods | Phase 6: EM (3 hrs) + Phase 7.1 (2 hrs) | 5 |
| **Sep** | Phase 3 finish + Phase 4 start | Phase 6 + Phase 7.1 continue | 4 |
| **Oct** | Phase 4: Ab initio theory | Phase 7.2 start (3 hrs/wk) | 4 |
| **Nov** | Phase 4 finish | Phase 7.2 continue (3 hrs/wk) | 4 |
| **Dec** | Buffer + Phase 7.3 | - | 5 |
| **Jan–Mar 2027** | Review + Phase 7.3 + CM/EM deepening | - | 12 |
| **Apr 2027** | Thesis defense window (light study only) | - | 4 |
| **May–Sep 2027** | Strengthen weakest exam subjects + Stage 2 planning | - | 21 |

> [!tip] Current Status
> **Phase:** 0.1 — Linear Algebra
> **Week:** 3 of 84 (Mar 3, 2026)
> **Status:** In progress

---

## Map of Content — Knowledge Trace

> [!tip] How to use
> Work top-down within each subject. Check off items as you can **explain the concept clearly and solve a basic problem** using it. Each `[[wikilink]]` points to an atomic note — create it when you start studying that concept.
>
> **Two checkbox systems:** MOC checkboxes = concept mastery ("I understand this"). Timeline checkboxes below = weekly tasks ("I did this study session"). Track both independently.

### Dependency Map

```
Math Foundations + Complex Analysis ─┬─→ Quantum Mechanics ──→ Nuclear Shell Model ──→ Experimental Methods
                                     │                                              └──→ Ab Initio Theory
                                     ├─→ Classical Mechanics
                                     ├─→ Electromagnetism
                                     └─→ Statistical Mechanics (Thermo — no QM needed)
                                                    │
                      Quantum Mechanics ─→ StatMech 7.2–7.3 (needs QM for quantum statistics)
```

> [!important] Phases 0–4 are thesis-driven (research competence). Phases 5–7 build working foundations in all four exam subjects so Stage 2 can focus on exam-speed drilling, not learning from scratch. All four subjects carry equal weight (100 pts each).

### Mathematics Foundations

#### Linear Algebra

> **Why:** Eigenvalue problems appear everywhere — QM energy levels, shell model diagonalization, coupled-cluster theory. You cannot read the Tran (2018) paper's theory section without this. SVD is also essential for your ML work.

- [ ] [[Vector_Spaces]] — basis, span, linear independence, dimension
- [ ] [[Matrix_Operations]] — multiplication, transpose, inverse, determinant
- [ ] [[Systems_of_Linear_Equations]] — Gaussian elimination, rank
- [ ] [[Eigenvalues_and_Eigenvectors]] — definition, characteristic equation
- [ ] [[Diagonalization]] — when possible, similarity transformations
- [ ] [[Hermitian_and_Unitary_Matrices]] — properties, guaranteed real eigenvalues
- [ ] [[Change_of_Basis]] — coordinate transformations
- [ ] [[Inner_Product_Spaces]] — orthogonality, Gram-Schmidt process
- [ ] [[Singular_Value_Decomposition]] — geometric meaning, applications to ML (ResNet feature analysis)
- [ ] [[Trace_and_Determinant]] — physical meaning, invariance properties

#### Calculus & Integration

> **Why:** Nuclear density distributions ρ(r) are integrated in spherical coordinates. The proton radius definition Rp = (∫ρ(r)r²dr)^(1/2) in Tran (2018) Eq.(2) requires this directly.

- [ ] [[Multivariable_Calculus]] — partial derivatives, gradient, divergence, curl
- [ ] [[Multiple_Integrals]] — double/triple integrals, change of variables (Jacobian)
- [ ] [[Spherical_and_Cylindrical_Coordinates]] — volume elements, common integrals
- [ ] [[Line_and_Surface_Integrals]] — physical applications (flux, circulation)
- [ ] [[Dirac_Delta_Function]] — definition, sifting property, 3D form
- [ ] [[Gaussian_Integrals]] — standard results, completing the square trick

#### Differential Equations

> **Why:** The nuclear shell model starts from solving the Schrödinger equation with a harmonic oscillator potential — the math of Phase 0.3 is exactly what generates magic numbers.

- [ ] [[First_Order_ODEs]] — separable, linear, integrating factors
- [ ] [[Second_Order_Linear_ODEs]] — constant coefficients, characteristic equation
- [ ] [[Boundary_Value_Problems]] — physical meaning of boundary conditions
- [ ] [[Separation_of_Variables_PDEs]] — concept and procedure
- [ ] [[Schrodinger_Equation_as_Eigenvalue_ODE]] — recognize the structure
- [ ] [[Harmonic_Oscillator_ODE]] — solutions (Hermite polynomials), energy levels

#### Fourier Analysis

- [ ] [[Fourier_Series]] — decomposing periodic functions
- [ ] [[Fourier_Transform]] — concept, frequency domain, convolution theorem
- [ ] [[Fourier_Transform_in_QM]] — momentum-space vs position-space wavefunctions

#### Complex Analysis (Exam-Critical)

> [!warning] Contour integrals appear in nearly every Math problem across 10 years of UTokyo past papers. This is not optional.

> **Why:** The UTokyo Math problem routinely tests contour integration and the residue theorem. This is confirmed across 2015–2025 past papers. Mastery here directly earns points on Problem 1.
> **Resource:** Brown & Churchill "Complex Variables and Applications" Ch.4–7, or Boas "Mathematical Methods" Ch.14

- [ ] [[Complex_Numbers]] — Euler's formula, polar form, complex exponentials
- [ ] [[Analytic_Functions]] — Cauchy-Riemann equations, concept of holomorphic functions
- [ ] [[Contour_Integration]] — parameterizing paths, line integrals in the complex plane
- [ ] [[Cauchy_Integral_Theorem]] — Cauchy's integral theorem and formula
- [ ] [[Laurent_Series]] — classification of singularities (poles, essential singularities)
- [ ] [[Residue_Theorem]] — computing residues, applying to real integrals
- [ ] [[Standard_Contour_Integral_Applications]] — rational functions, trigonometric integrals, branch cuts (concept)

---

### Quantum Mechanics

#### QM Foundations

- [ ] [[Wavefunctions]] — normalization, probability interpretation, expectation values
- [ ] [[Quantum_Operators]] — position, momentum, Hamiltonian — what "operator" means
- [ ] [[Commutators]] — [x, p] = iℏ, physical meaning (uncertainty principle)
- [ ] [[Dirac_Notation]] — |ψ⟩, ⟨ψ|, ⟨φ|ψ⟩ inner product, completeness relation
- [ ] [[Matrix_Representation_of_Operators]] — connecting linear algebra to QM
- [ ] [[Measurement_Postulate]] — eigenvalues as outcomes, collapse

#### Angular Momentum (Critical for Nuclear Physics)

> **Why:** This is the core math behind the SO splitting that creates magic numbers 28, 50, 82, 126 and the Z=6 subshell closure in the Tran paper. The splitting formula E_SO ∝ ⟨L·S⟩ with j=l+1/2 pushed down is the central mechanism.

- [ ] [[Orbital_Angular_Momentum]] — L = r × p, L², Lz operators
- [ ] [[Angular_Momentum_Eigenvalues]] — quantum numbers l and ml
- [ ] [[Spherical_Harmonics]] — Ylm: what they look like, orthogonality
- [ ] [[Spin_Angular_Momentum]] — spin-1/2, Pauli matrices, spinors
- [ ] [[Spin_Orbit_Coupling]] — V_SO ∝ L·S, how to compute L·S using J = L + S
- [ ] [[Total_Angular_Momentum]] — j = l ± 1/2, mj quantum number
- [ ] [[Clebsch_Gordan_Coefficients]] — coupling two angular momenta (concept level)

#### Perturbation Theory & Variational Method

> **Why:** Perturbation theory explains SO splitting directly. The variational method is a standard PhD exam topic and conceptually important for understanding ab initio approaches.

- [ ] [[Time_Independent_Perturbation_Theory]] — first-order energy correction
- [ ] [[Non_Degenerate_Perturbation]] — E_n^(1) = ⟨n|H'|n⟩
- [ ] [[Degenerate_Perturbation_Theory]] — concept (diagonalize within subspace)
- [ ] [[SO_Coupling_as_Perturbation]] — physical example: SO coupling to the central potential
- [ ] [[Variational_Principle]] — E_trial ≥ E_ground, choosing trial wavefunctions
- [ ] [[Variational_Method_Applications]] — hydrogen-like atom or helium ground state (one worked example)

---

### Nuclear Shell Model (Paper Core)

#### Nuclear Potential & Shell Structure

> **Milestone:** After this section, re-read Tran (2018) Fig. 1 and the introduction — it should make complete sense.

- [ ] [[Mean_Field_Concept]] — nucleons move in an average potential created by all others
- [ ] [[Harmonic_Oscillator_Potential]] — energy levels E = (2n + l + 3/2)ℏω
- [ ] [[Shell_Closures_HO]] — degeneracy and closures at N = 2, 8, 20 (HO magic numbers — first series)
- [ ] [[L_Squared_Term]] — partial lifting of l-degeneracy
- [ ] [[Nuclear_Spin_Orbit_Splitting]] — adding V_SO = -V_ls (l·s), splitting j = l+1/2 and j = l-1/2
- [ ] [[Nuclear_vs_Atomic_SO]] — why j = l+1/2 is lower in energy (sign convention, nuclear SO is opposite to atomic)
- [ ] [[Magic_Numbers_Derivation]] — fill levels with (2j+1) nucleons each → derive 28, 50, 82, 126 (second series)
- [ ] [[Z6_Subshell_Closure]] — Z = 6 as the smallest SO closure: 1p₃/₂ filled with 4 protons

#### Evidence for Magic Numbers (Mayer 1948)

- [ ] [[Isotopic_Abundances]] — why magic-number nuclei are over-represented in nature
- [ ] [[Stable_Isotones]] — more stable nuclei at N = 50, 82, 126
- [ ] [[Neutron_Absorption_Cross_Sections]] — magic nuclei have low σ (tightly bound, less reactive)
- [ ] [[Binding_Energy_Discontinuities]] — extra binding at shell closures
- [ ] [[Semi_Empirical_Mass_Formula]] — Weizsäcker formula terms (volume, surface, Coulomb, asymmetry, pairing) — derive each term's physical origin and estimate B/A

#### Modern Evidence for Z=6 (Tran 2018 — the Main Paper)

- [ ] [[Three_Signatures_Z6]] — Rp systematics, B(E2), binding energy gaps
- [ ] [[Constant_Rp_Carbon_Isotopes]] — why constant Rp across C-13 to C-19 implies inert proton core
- [ ] [[BE2_Weisskopf_Units]] — small values = protons don't participate in collective motion = closed shell
- [ ] [[Shell_Gap_Indicator_Delta_p3]] — second derivative of binding energies, Eq.(1) in paper
- [ ] [[One_Proton_Separation_Energy]] — Sp(N,Z) and its relation to single-particle energies
- [ ] [[Pairing_Energy_Subtraction]] — why empirical Δp = 12A^(-1/2) MeV is needed
- [ ] [[Kink_Analysis_Rp]] — Rp/Rp^cal vs Z plots (Fig. 3a): what kinks signify

---

### Experimental Methods

#### Cross Sections Basics

- [ ] [[Total_Cross_Section]] — geometric interpretation, units (barn = 10⁻²⁴ cm²)
- [ ] [[Reaction_vs_Elastic_Cross_Section]] — reaction cross section vs elastic scattering
- [ ] [[Charge_Changing_Cross_Section]] — σ_CC: all processes that change Z of projectile
- [ ] [[Transmission_Method]] — count incident vs surviving projectiles

#### Proton Radii Extraction

- [ ] [[Point_Proton_RMS_Radius]] — Rp = (∫ρ_p(r) r² dr)^(1/2) — Eq.(2) in Tran
- [ ] [[Density_Distribution_Models]] — Harmonic oscillator type vs Woods-Saxon type
- [ ] [[Glauber_Model]] — optical-limit approximation, connects σ_CC to ρ_p(r)
- [ ] [[Rp_Extraction_Procedure]] — assume ρ_p shape → calculate σ_CC → fit → compute Rp

#### Electromagnetic Transitions

- [ ] [[Electric_Quadrupole_E2_Transitions]] — 2⁺ → 0⁺ in even-even nuclei
- [ ] [[BE2_Reduced_Transition_Probability]] — measures collectivity of transition
- [ ] [[Weisskopf_Unit]] — single-particle estimate; B(E2) < 3 W.u. = near single-particle = closed shell
- [ ] [[Lifetime_Measurements]] — how B(E2) is extracted from excited-state lifetimes

---

### Ab Initio Nuclear Theory (Conceptual)

> Aim for understanding the logic, not the math details.

#### Chiral Effective Field Theory

- [ ] [[Chiral_EFT_Concept]] — derive nuclear forces from QCD symmetries (chiral symmetry)
- [ ] [[Power_Counting]] — LO → NLO → NNLO → N³LO (systematic improvement)
- [ ] [[Two_Nucleon_Forces]] — NN forces: dominant interaction
- [ ] [[Three_Nucleon_Forces]] — 3NFs: appear at NNLO, crucial for reproducing radii and drip lines
- [ ] [[Cutoff_Dependence]] — different cutoffs (1.8, 2.0, 2.2, 2.8 fm⁻¹) give different predictions
- [ ] [[NNLOsat_Interaction]] — optimized to reproduce radii and binding energies simultaneously

#### Many-Body Methods

- [ ] [[Independent_Particle_Model]] — mean field → beyond mean field: the hierarchy
- [ ] [[Shell_Model_Diagonalization]] — diagonalize Hamiltonian in a valence space (conceptual)
- [ ] [[Coupled_Cluster_Method]] — exponential ansatz, builds correlations on top of reference state
- [ ] [[Lambda_CCSD_T]] — singles, doubles, perturbative triples — levels of approximation
- [ ] [[EOM_CC]] — equation-of-motion extension for open-shell nuclei (particle-attached/removed)
- [ ] [[Similarity_Renormalization_Group]] — SRG: softens interaction to make calculation feasible

#### Key Results from Tran (2018)

- [ ] [[NN_plus_3NF_Results]] — proton radii and binding energies of C-14, C-15 reproduced well
- [ ] [[Without_3NF_Comparison]] — radii ~10-15% too small, ground states overbound by ~24%
- [ ] [[3NF_Implication_Z6]] — 3NFs are essential for reproducing the Z=6 subshell closure
- [ ] [[Shell_Evolution_3NF]] — 3NFs widen the 1p₃/₂ – 1p₁/₂ gap in carbon isotopes

---

### Classical Mechanics (Working Foundations)

> Goal: solid problem-solving foundations — be able to solve textbook problems, not just discuss concepts. Stage 2 will drill exam-level speed and difficulty. (CM+EM = 100 pts on the exam, equal weight to QM or StatMech.)

#### Lagrangian Mechanics

- [ ] [[Generalized_Coordinates]] — what they are, why use them
- [ ] [[Lagrangian_Mechanics]] — L = T - V: kinetic minus potential energy
- [ ] [[Euler_Lagrange_Equations]] — d/dt(∂L/∂q̇) - ∂L/∂q = 0
- [ ] [[Constraints_and_Lagrange_Multipliers]] — holonomic vs non-holonomic
- [ ] [[Noethers_Theorem]] — symmetry and conservation, cyclic coordinates

#### Hamiltonian Mechanics

- [ ] [[Legendre_Transform]] — L(q, q̇) → H(q, p) with p = ∂L/∂q̇
- [ ] [[Hamiltons_Equations]] — q̇ = ∂H/∂p, ṗ = -∂H/∂q
- [ ] [[Phase_Space]] — concept, Liouville's theorem (concept)
- [ ] [[Poisson_Brackets]] — {f, g}, connection to QM commutators

#### Key Problems

- [ ] [[Central_Force_Problem]] — reduced mass, effective potential, orbits
- [ ] [[Small_Oscillations_Normal_Modes]] — normal modes, eigenvalue problem (connects to linear algebra)

> **Resource:** Taylor "Classical Mechanics" — accessible, good problems

---

### Electromagnetism (Working Foundations)

> Goal: solid problem-solving foundations. Rebuild from Maxwell's equations up — be able to solve standard textbook problems (Griffiths level). Stage 2 will drill exam-level speed. (CM+EM share Problem 4, worth 100 pts.)

#### Electrostatics & Magnetostatics

- [ ] [[Coulombs_Law_and_Gauss_Law]] — electric field, integral and differential forms
- [ ] [[Electric_Potential]] — Poisson/Laplace equations
- [ ] [[Conductors_Capacitors_Dielectrics]] — concept level
- [ ] [[Biot_Savart_and_Amperes_Law]] — magnetic vector potential
- [ ] [[Magnetic_Dipole_and_Magnetization]] — magnetization in materials (concept level)

#### Maxwell's Equations & Waves

- [ ] [[Maxwells_Equations]] — full set: differential and integral forms
- [ ] [[Displacement_Current]] — why it's needed, physical meaning
- [ ] [[Electromagnetic_Wave_Equation]] — derivation from Maxwell's equations
- [ ] [[Plane_Wave_Solutions]] — E and B relationship, Poynting vector, energy flux
- [ ] [[EM_Boundary_Conditions]] — reflection, transmission at interfaces (concept level)

#### Potentials & Radiation

- [ ] [[Scalar_and_Vector_Potentials]] — (φ, A), gauge invariance (Coulomb vs Lorenz gauge)
- [ ] [[Electromagnetic_Energy_and_Momentum]] — energy density (concept)
- [ ] [[Electric_Dipole_Radiation]] — far-field pattern (concept — connects to E2 transitions in nuclear)

> **Resource:** Griffiths "Introduction to Electrodynamics" — Ch.7–9 for waves/radiation

---

### Statistical Mechanics (Working Foundations)

> Goal: solid problem-solving foundations — partition functions, ensembles, quantum statistics at textbook level. Built from scratch — this is the largest gap. Stage 2 will drill exam-level problems. (StatMech = Problem 3, worth 100 pts.)

#### Thermodynamics Review

- [ ] [[Laws_of_Thermodynamics]] — Zeroth, First, Second, Third laws
- [ ] [[State_Variables]] — T, P, V, S, U — extensive vs intensive
- [ ] [[Work_Heat_Internal_Energy]] — dU = δQ - δW
- [ ] [[Entropy]] — definition, direction of spontaneous processes
- [ ] [[Free_Energies]] — Helmholtz F = U - TS, Gibbs G = U + PV - TS — when to use which
- [ ] [[Maxwell_Relations]] — derived from exactness of differentials
- [ ] [[Thermodynamic_Potentials_Legendre_Transform]] — connects to Hamiltonian mechanics

#### Statistical Foundations

- [ ] [[Microstates_and_Macrostates]] — what they mean
- [ ] [[Boltzmann_Entropy]] — S = k_B ln Ω
- [ ] [[Boltzmann_Distribution]] — P_i ∝ exp(-E_i / k_B T)
- [ ] [[Partition_Function]] — definition, how all thermodynamic quantities derive from it
- [ ] [[Microcanonical_Ensemble]] — isolated system, fixed E, N, V
- [ ] [[Canonical_Ensemble]] — fixed T, N, V — the workhorse
- [ ] [[Grand_Canonical_Ensemble]] — fixed T, μ, V — for open systems
- [ ] [[Ensemble_Equivalence]] — connection between ensembles in thermodynamic limit

#### Applications

- [ ] [[Ideal_Gas_Statistical]] — partition function, equation of state, heat capacity
- [ ] [[Quantum_Harmonic_Oscillators]] — quantum vs classical, Einstein model of solids
- [ ] [[Two_Level_Systems]] — paramagnets, Schottky anomaly
- [ ] [[Quantum_Statistics]] — Fermi-Dirac vs Bose-Einstein distributions
- [ ] [[Fermi_Gas]] — Fermi energy, density of states, electron gas in metals (connects to nuclear Fermi gas model)
- [ ] [[Blackbody_Radiation]] — Planck distribution (concept level)
- [ ] [[Phase_Transitions]] — first vs second order, Ising model (concept level)

> **Resource:** Schroeder "An Introduction to Thermal Physics" (readable) or Pathria (more rigorous)

---

## Past Exam Papers

> [!success] Completed (2026-02-17) — see exam structure callout at top.

### Past Papers (saved to `50_Resources/Physics/UTokyo_Past_Exams/`)

- [x] Find UTokyo Graduate School of Science Physics PhD entrance exam past papers
- [x] Review 2–3 years of past papers to identify format (number of problems, time limits, choice vs mandatory)
- [x] Note which topics appear most frequently in each subject
- [x] Save papers to `50_Resources/Physics/` for future use

**Official past papers page:** [博士課程 過去問題集](https://www.phys.s.u-tokyo.ac.jp/about/35361/)

| Year | File | Notes |
|------|------|-------|
| R7 (2025) | `R7Doctor_2025.pdf` | Downloaded (password-protected) |
| R6 (2024) | `R6Doctor_2024.pdf` | Downloaded (password-protected) |
| R5 (2023) | `R5Doctor_2023.pdf` | Downloaded (password-protected) |
| R3 (2021) | — | No written exam (COVID-19) |
| R2–H27 (2020–2015) | Available on official page | Download as needed |

> [!warning] PDFs are password-protected — you'll need to open them in a browser or request the password from the department.

**Unofficial solutions (master's + doctoral):** [miyake.github.io](https://miyake.github.io/exams/) — covers 2006–2025, useful for topic analysis and practice.

### Topic Frequency Analysis (from 10 years of past papers)

| Subject | Recurring Topics |
|---------|-----------------|
| **Math** | Linear algebra (eigenvalues, Pauli matrices, matrix exponentials), complex analysis (contour integrals), Fourier analysis, ODEs/PDEs |
| **QM** | Spin systems, 1D potentials, wave packets, perturbation theory, angular momentum |
| **StatMech** | Ideal gas, partition functions, heat capacity, phase transitions, Fermi/Bose statistics |
| **CM + EM** | Maxwell's equations, EM waves, coaxial geometries, Lagrangian/Hamiltonian mechanics |

### Admission Routes

- **Route A (Regular exam / 一般入試):** The written exam above. Open to all nationalities. **ARCHIVED** — not the active plan (Route B chosen).
- **Route B (GSGC / Special Selection):** Document-based, requires GRE Physics + TOEFL iBT + possible department written exam. **CHOSEN** (decision by user + IMP supervisor, 2026-03-09). Primary target: Summer 2027 for direct PhD entry. *(Note: GSGC vs Special Selection sub-track distinction pending — see [[DG_GSGC_vs_Special_Selection]])*
- **Internal students (修士→博士):** Skip written exam entirely — thesis defense serves as evaluation. Does NOT apply to Kenkyusei.

## GSGC Physics — Verified (2026-02-17)

> [!info] GSGC is an alternative admission route (document-based + GRE Physics + possible written exam). Nuclear Theory (A0) and Experimental Nuclear/Particle Physics (A2) are within scope. Full details moved to [[UTokyo_RIKEN#Route B — GSGC Physics (Global Science Graduate Course)]].

---

## Learning Timeline (Feb 2026 to Sep 2027)

> [!info] Constraints
> - **Graduation:** June 2027
> - **Thesis defense:** ~April 2027 (~1 month intensive)
> - **PhD entrance exam (primary):** GSGC route, target Summer 2027 for direct PhD entry. If Kenkyusei fallback: retake Summer 2028.
> - **Study budget:** 8-12 hrs/week (~10 hrs average), flexible daily blocks

### Detailed Monthly Plan

#### Feb 2026 (Weeks 1-3): Linear Algebra + Urgent Tasks
> ~10 hrs/week x 3 weeks = 30 hrs

- [x] ~~**Urgent:** Find and review UTokyo past exam papers~~ (DONE — see exam structure callout at top)
- [ ] Week 1: Vector spaces, basis, linear independence, matrix operations - *solve 5 problems from MIT 18.06 PS1*
- [ ] Week 2: Eigenvalues, eigenvectors, diagonalization, Hermitian matrices - *diagonalize 3 matrices by hand*
- [ ] Week 3: Inner product spaces, Gram-Schmidt, SVD, change of basis - *apply SVD to a small data matrix*
- **Resource:** 3Blue1Brown "Essence of Linear Algebra" (watch first), then MIT 18.06 problem sets
- **Checkpoint:** Can you diagonalize a 3x3 matrix and explain what eigenvalues mean geometrically?

#### Mar 2026 (Weeks 4–7): Calculus, DEs, Fourier
> ~10 hrs/week × 4 weeks = 40 hrs

- [ ] Week 4: Multivariable calculus — partial derivatives, gradient, divergence, curl — *solve Griffiths EM Ch.1 problems 1.11–1.18*
- [ ] Week 5: Multiple integrals, spherical/cylindrical coordinates, Jacobians — *evaluate 3 integrals in spherical coords*
- [ ] Week 6: Dirac delta function, Gaussian integrals + Fourier series/transform basics — *compute 2 Fourier transforms*
- [ ] Week 7: ODEs (1st & 2nd order), separation of variables for PDEs, HO equation — *solve the 1D QHO structure*
- **Resource:** MIT OCW 18.02, Paul's Online Math Notes (ODEs)
- **Checkpoint:** Can you evaluate ∫ρ(r)r²d³r in spherical coordinates? Can you solve the 1D HO Schrödinger equation structure?

#### Apr 2026 (Weeks 8–9): Complex Analysis (Exam-Critical)
> ~10 hrs/week × 2 weeks = 20 hrs

- [ ] Week 8: Complex numbers review, analytic functions, Cauchy-Riemann equations, contour integration basics — *parameterize and evaluate 3 simple contour integrals*
- [ ] Week 9: Laurent series, residue theorem, standard applications (rational function integrals, trigonometric integrals) — *solve 5 residue theorem problems*
- **Resource:** Brown & Churchill Ch.4–7, or Boas Ch.14
- **Checkpoint:** Can you evaluate ∫₋∞^∞ dx/(x²+1)² using the residue theorem?

#### Apr–early May 2026 (Weeks 10–14): QM Math Core (5 weeks)
> ~10 hrs/week × 5 weeks = 50 hrs

- [ ] Week 10: Wavefunctions, operators, commutators, expectation values — *solve Griffiths QM problems 1.3, 1.5, 1.9*
- [ ] Week 11: Dirac notation, matrix representation, measurement postulate — *represent a 2-state system in both notations*
- [ ] Week 12: Orbital angular momentum (L², Lz), spherical harmonics — *verify Y₁₀, Y₁₁ satisfy the eigenvalue equation*
- [ ] Week 13: Spin-1/2, Pauli matrices, **spin-orbit coupling L·S**, total angular momentum J — *compute ⟨L·S⟩ for p-shell*
- [ ] Week 14: Clebsch-Gordan coefficients (concept + use tables), perturbation theory (1st order), variational method (one worked example)
- **Resource:** Griffiths QM Ch.4 (angular momentum), Ch.6 (perturbation), Ch.8 §8.1 (variational)
- **Checkpoint:** Can you derive ⟨L·S⟩ = ½[j(j+1) - l(l+1) - s(s+1)]ℏ² and explain why j = l+1/2 is lower energy in nuclei?
- **Escape route:** If stuck on Clebsch-Gordan after 1 week, skip to using tabulated values only. Momentum matters more than perfection.

#### Late May–Jun 2026 (Weeks 15–19): Shell Model Core
> ~10 hrs/week × 5 weeks = 50 hrs (last 2 weeks begin Phase 5 parallel at 3 hrs/wk)

- [ ] Week 15: Mean-field concept, HO potential energy levels, shell closures at 2, 8, 20
- [ ] Week 16: l² term + **SO splitting → 28, 50, 82, 126** — *fill levels and count by hand*
- [ ] Week 17: **Z = 6 from 1p₃/₂ subshell closure** — *draw the full level scheme up to Z = 20*
- [ ] Week 18: Semi-empirical mass formula — *estimate B/A for C-12 and Fe-56*
- [ ] Week 19: Begin Phase 2.2 (Mayer paper) + Phase 5 parallel starts (generalized coords, Lagrangian)
- **Resource:** Krane Ch.5 (Nuclear Shell Model)
- **Milestone:** Re-read Tran (2018) Fig. 1 and introduction — should be fully clear now

#### Jul 2026 (Weeks 20–23): Magic Number Evidence
> Main: 7 hrs/week | Parallel: Phase 5 at 3 hrs/week

- [ ] Week 20: Mayer (1948) paper deep read — abundances, isotones, cross sections, binding energy arguments
- [ ] Week 21: Tran (2018) evidence — Rp systematics, B(E2) values, shell gap Δp^(3)
- [ ] Week 22: Separation energies, pairing energy subtraction, kink analysis (Fig. 3)
- [ ] Week 23: Synthesize — write a 1-page summary connecting both papers' evidence chains
- **Phase 5 parallel:** Hamiltonian mechanics, Hamilton's equations, Poisson brackets — *solve 3 Lagrangian/Hamiltonian problems from Taylor*
- **Checkpoint:** Can you explain THREE independent lines of evidence for Z=6 being magic?

#### Aug 2026 (Weeks 24–28): Experimental Methods
> Main: 5 hrs/week | Parallel: Phase 6 EM (3 hrs) + Phase 7.1 Thermo (2 hrs)

- [ ] Week 24–25: Cross section concepts, σ_CC, transmission method
- [ ] Week 26–27: Proton radii extraction — density distributions (HO, Woods-Saxon), Glauber model concept
- [ ] Week 28: E2 transitions, B(E2), Weisskopf units, lifetime measurements
- **Phase 6 parallel:** Electrostatics review, Gauss's law, electric potential — *solve Griffiths EM problems from Ch.2–3*
- **Phase 7.1 parallel:** Thermodynamics laws, state variables, First/Second law — *read Schroeder Ch.1–2, solve end-of-chapter problems*
- **Checkpoint:** Can you trace "measured σ_CC → extracted Rp → constant Rp = closed shell"?

#### Sep 2026 (Weeks 29–32): Phase 3 Finish + Phase 4 Start
> Main: 5 hrs/week | Parallel: Phase 6 (3 hrs) + Phase 7.1 (2 hrs)

- [ ] Week 29: Phase 3 wrap-up, review experimental chain of logic
- [ ] Week 30–31: Chiral EFT — power counting, NN vs 3NF, cutoff dependence
- [ ] Week 32: NNLOsat interaction, SRG softening concept
- **Phase 6 parallel:** Maxwell's equations, EM wave equation, plane waves — *solve Griffiths EM Ch.7–9 problems*
- **Phase 7.1 parallel:** Entropy, free energies, Maxwell relations — *read Schroeder Ch.3–5, solve problems*

#### Oct 2026 (Weeks 33–36): Ab Initio Theory + Phase 7.2 Start
> Main: 5 hrs/week | Parallel: Phase 7.2 (3 hrs) + Phase 5/6 review (2 hrs)

- [ ] Week 33–34: Many-body methods — shell model diagonalization (concept), coupled-cluster
- [ ] Week 35–36: Λ-CCSD(T), EOM-CC, Tran (2018) theory results, 3NF impact summary
- **Phase 7.2 parallel:** Boltzmann distribution, partition function, canonical ensemble — *derive ideal gas Z, solve 3 problems*
- **Phase 5/6 review:** Solve 2 CM problems (Taylor) + 2 EM problems (Griffiths) per week
- **Checkpoint:** Can you explain why 3NFs are essential for the Z=6 subshell closure?

#### Nov 2026 (Weeks 37–40): Phase 4 Finish + Phase 7.2 Deepening
> Phase 4 wrap-up: 4 hrs/week | Phase 7.2: 4 hrs/week | CM/EM review: 2 hrs/week

- [ ] Week 37: Phase 4 final review — connect ab initio results to experimental evidence
- [ ] Week 38–39: Phase 7.2 — ensembles, partition function applications — *solve 5 canonical ensemble problems*
- [ ] Week 40: Consolidate notes + update weak spots across all exam subjects
- **CM/EM review:** Continue solving textbook problems (2 per week)
- **Milestone:** All thesis/paper phases (0–4) complete.

#### Dec 2026 (Weeks 41–45): BUFFER + Phase 7.3

> [!warning] This is a REAL buffer. If you're on track, continue Phase 7 and deepen CM/EM. If behind, catch up here.

- [ ] Weeks 41–42: **Buffer** — catch up on any incomplete phases, or deepen weak areas
- [ ] Week 43–44: Phase 7.2–7.3 — ideal gas, harmonic oscillators, two-level systems, quantum statistics intro
- [ ] Week 45: Phase 7.3 — Fermi-Dirac, Bose-Einstein distributions, Fermi gas — *solve 3 quantum statistics problems*
- **Checkpoint:** Can you derive the ideal gas equation of state from the partition function?

#### Jan 2027 (Weeks 46–49): Review + Phase 7 Completion
> 10 hrs/week: CM+EM deepening (4 hrs) + Phase 7.3 (4 hrs) + integration/notes (2 hrs)

- [ ] Week 46: Phase 5 (CM) deepening — solve 5 problems (central force, oscillations, Lagrangian/Hamiltonian)
- [ ] Week 47: Phase 6 (EM) deepening — solve 5 problems (Maxwell, waves, potentials)
- [ ] Week 48: Phase 7.3 — Fermi gas, blackbody radiation, phase transitions
- [ ] Week 49: Cross-subject self-assessment — identify weakest areas for Stage 2 planning

#### Feb–Mar 2027 (Weeks 50–58): Consolidation + Targeted Strengthening
> 8–10 hrs/week: targeted problem-solving (6 hrs) + review (2–4 hrs)

- [ ] Week 50–51: Patch weakest topics from self-assessment (1–2 focused gaps)
- [ ] Week 52–53: Problem-solving across all 4 exam subjects — *solve 2 problems per subject per week*
- [ ] Week 54–55: Re-read Tran (2018) evidence chain + update summary
- [ ] Week 56–57: Continue problem-solving, focus on speed and accuracy
- [ ] Week 58: Draft Stage 2 study outline (topics, resources, hours, diagnostic problem sets)
- **Checkpoint:** Can you explain your thesis work and the Z=6 evidence chain clearly in 5 minutes?

#### Apr 2027 (Weeks 59–62): Thesis Defense + Maintenance
> Thesis defense takes priority. Keep study maintenance only.

- [ ] Weeks 59–60: Thesis defense preparation and defense (~April)
- [ ] Weeks 61–62: Light review only (flashcards/notes), no new topics

#### May–Jun 2027 (Weeks 63–71): Graduation + Maintenance
> Light load — stabilize and maintain.

- [ ] Week 63–67: Light review, maintain knowledge, no intensive study
- [ ] Week 68: Graduation (~June)
- [ ] Week 69–71: Stage 2 planning refinement (resources, schedule, diagnostics)

#### Jul–Sep 2027 (Weeks 72–84): Stage 2 Planning + Light Prep
> Transition period — bridge to intensive exam prep

- [ ] Finalize Stage 2 exam-prep roadmap (Math, QM, StatMech, CM+EM — all equal priority)
- [ ] Take a diagnostic exam using a past paper under timed conditions — score and identify gaps
- [ ] Begin light deepening of weakest subject(s) identified by diagnostic
- [ ] Prepare problem set lists and resources for Oct 2027 Stage 2 kickoff

## Fall-Behind Protocol

> [!warning] If you fall behind schedule, use these rules instead of panicking.

1. **< 2 weeks behind:** Compress the current phase by skipping "concept level" items - focus on items with bold markers
2. **2-4 weeks behind:** Use Dec buffer weeks (39-40) to catch up. If buffer already used, compress Phase 4 (ab initio) to concept-only level - it's the least critical for thesis comprehension
3. **A phase feels too easy:** Skip remaining items, move to next phase. Don't waste time on mastered material
4. **A phase feels impossible:** Spend max 1 extra week, then move on and mark items for revisit. Momentum matters more than perfection
5. **Phase 1 specific:** If stuck on Clebsch-Gordan coefficients after 1 week, skip to using tabulated CG tables. If stuck on angular momentum algebra after 2 weeks total, use worked examples from Griffiths as templates - copy the method, don't reinvent it

## Study Approach

> [!tip] Flexible daily blocks — not fixed days

**Budget:** ~10 hrs/week average (8–12 range)

**Rules:**
- Study whenever you have free time — no fixed day assignments
- Track weekly hours, not daily hours. Hit 10 hrs/week by any combination
- Longer sessions (2+ hrs) for deep topics (angular momentum, shell model). Shorter sessions (30–60 min) for review and light reading
- If a week is bad (<6 hrs), compensate the following week. Two bad weeks in a row = re-evaluate and use fall-behind protocol
- Update this checklist every Sunday (or whenever convenient) — mark completed items and log progress

**Phase transition rule:** Before starting a new phase, check the previous phase's checkpoint. If you can't pass the checkpoint, spend 1 more week on the previous phase before moving on.

---

## Progress Log

| Date | What | Notes |
|------|------|-------|
| 2026-02-13 | Initial assessment | Math: weak LA, basic calculus, intro QM. Physics: forgot SO math, no ab initio. StatMech: not learned. EM: basic only |
| 2026-02-13 | Timeline v2 | 72-week plan, added StatMech + EM phases, buffer weeks, fall-behind protocol |
| 2026-02-13 | Timeline v3 | Restructured for Stage 1 learning focus. Phase 1 extended to 5 weeks. Phases 5-7 reduced to conversational level. Added variational method, integrated Fourier into Week 6. Protected Dec buffer. Added concrete deliverables per week. |
| 2026-02-17 | Exam structure confirmed | UTokyo PhD exam: 4 mandatory problems (Math, QM, StatMech, CM+EM), 100 pts each. Past papers saved. |
| 2026-02-17 | Timeline v4 | Added Phase 0.5 (complex analysis — exam-critical). Rebalanced Phases 5–7 from "conversational" to "working foundations" with increased parallel hours (2→3 hrs/wk). Added persistent exam structure callout. Updated all week numbers (+2 shift from complex analysis insertion). |

---

## Related

- [[Fundamental_Knowledge]] - Broader PhD prep plan
- [[Masters_Thesis]] - Current thesis work connecting to these topics
- [[UTokyo_RIKEN]] - Exam context and admissions pathway
- [[English_Learning]] - TOEFL requirement for the English score component

---

## Resources

**Math:**
- 3Blue1Brown "Essence of Linear Algebra" (YouTube) — geometric intuition
- MIT OCW 18.06 (Strang) — linear algebra course
- MIT OCW 18.02 — multivariable calculus

**QM:**
- Griffiths "Introduction to Quantum Mechanics" — Ch.4 (angular momentum), Ch.6 (perturbation), Ch.8 §8.1 (variational)
- Shankar "Principles of Quantum Mechanics" — more mathematical, good for Dirac notation

**Nuclear:**
- Krane "Introductory Nuclear Physics" — Ch.5 (shell model), readable
- Wong "Introductory Nuclear Physics" — alternative

**Classical Mechanics:**
- Taylor "Classical Mechanics" — accessible, good problems

**Electromagnetism:**
- Griffiths "Introduction to Electrodynamics" — the standard, Ch.7–9 for waves/radiation

**Statistical Mechanics:**
- Schroeder "An Introduction to Thermal Physics" — readable, great for self-study
- Pathria "Statistical Mechanics" — more rigorous, for Stage 2 exam prep

**Papers (in vault):**
- [[Evidence_for_prevalent_Z__6_magic_number_in_neutron_rich_carbon_isotopes_260213_195432|Tran et al. 2018]] — Z=6 magic number
- [[On_Closed_Shells_in_Nuclei_260213_201710|Mayer 1948]] — Original magic numbers paper
