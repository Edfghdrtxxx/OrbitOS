---
type: learning-index
purpose: Terse cross-agent index of what the learner has solidly learned. Agents running /learn MUST read this first.
updated: 2026-09-21
---
# Learning Progress — Context Index

> Analogy of MEMORY.md: short durable pointers only. Full dialogue lives in session notes under `60_Learning_Progress/<topic>/`.
> Retention checks live in [[Retention-context]] (`/retention`). This file is the learning index only.
> **Update rule:** after a turn advances understanding, promote mastered concepts into the thread's **Known solid** bullets; keep the **In progress** row until all open work for that thread is finished (a thread may appear in both sections). Bump `updated:` in frontmatter on changes.
> **Conventions:** `#### Thread` heading, inline `Session: [[...]]` immediately below, followed by compact labeled bullets (typically 2–8) with LaTeX ($...$). No math in GFM pipe tables. Epistemic flags `(self-report)`, `(drill re-locked)`, `(verified)` are strictly preserved.

## Known solid

### Physics

#### QM — Dirac / operators

Session: [[2026-07-26-2030 Displacement operator]]

- **Dirac notation:** Stated by learner (self-report) — not the same as position representation solid.
- **Hermitian operators:** Stated by learner (self-report) — links to real eigenvalues.

#### QM — position representation

Session: [[2026-07-27-1331 Position representation]]

- **Projection definition:** $\Psi(x) = \langle x|\Psi\rangle$ as geometric projection / inner product; abstract ket $|\Psi\rangle \neq$ position wavefunction.
- **Full state at $t$:** $\Psi(x)$ is the entire function across all $x$, not a single spatial sample (drill re-locked).

#### QM — TISE

Session: [[2026-07-26-2126 Time-independent Schrödinger equation]]

- **Eigenvalue equation:** $\hat{H}|\psi\rangle = E|\psi\rangle$; $E$ is a scalar eigenvalue.
- **Reality:** Hermitian $\hat{H} \implies E \in \mathbb{R}$ (energy eigenvalues are real).
- **Stationary state:** Energy eigenstate has time-independent probability density $P(E)$.
- **Position representation (1D):** $-\frac{\hbar^2}{2m}\psi''(x) + V(x)\psi(x) = E\psi(x)$.

#### QM — superposition / measurement

Session: [[2026-07-26-2112 Harmonic oscillator]]

- **Equal-weight probabilities:** For $|\psi\rangle = \frac{1}{\sqrt{2}}(|E_1\rangle + |E_2\rangle)$, $P(E_1) = \frac{1}{2}$.
- **Expectation value vs probability:** $\langle\hat{H}\rangle \neq P(E_1)$ (distinct mathematical types); $\langle\hat{H}\rangle = \sum_i P(E_i)E_i$.
- **Two-level expectation:** For $E_1 = \hbar\omega, E_2 = 3\hbar\omega$ with equal weights, $\langle\hat{H}\rangle = 2\hbar\omega$.

#### QM — harmonic oscillator

Session: [[2026-07-26-2112 Harmonic oscillator]]

- **Zero-point energy:** $E_0 = \frac{1}{2}\hbar\omega > 0$; strictly positive due to Heisenberg uncertainty $\Delta x \Delta p \ge \hbar/2$ (drill re-locked).
- **Spectrum spacing:** Equal ladder spacing $E_{n+1} - E_n = \hbar\omega$; general level $E_n = \hbar\omega(n + \frac{1}{2})$.
- **Ground state boundary:** $n \ge 0$; $n = -1$ is unphysical ($E_{-1} < E_0$).

#### QM — ladder operators

Session: [[2026-07-26-2113 Ladder operators]]

- **Action on states:** $a|n\rangle = \sqrt{n}|n-1\rangle$; $a^\dagger|n\rangle = \sqrt{n+1}|n+1\rangle$.
- **Vacuum annihilation:** $a|0\rangle = 0$ (null vector, not $|0\rangle$).
- **Number operator:** $\hat{N} = a^\dagger a$, $\hat{N}|n\rangle = n|n\rangle$; Hamiltonian $\hat{H} = \hbar\omega(\hat{N} + \frac{1}{2})$.
- **Commutation relation:** $[a, a^\dagger] = 1$, $[a^\dagger, a] = -1$; $a a^\dagger|n\rangle = (n+1)|n\rangle$.
- **Hermitian adjoint:** $a$ is not Hermitian; $(a^\dagger a)^\dagger = a^\dagger a \implies \hat{N}^\dagger = \hat{N}$.
- **Position & momentum inversion:** $a, a^\dagger \propto \hat{x} \mp i\hat{p}/(m\omega)$; $\hat{p} = i\sqrt{\frac{\hbar m\omega}{2}}(a^\dagger - a)$; under dagger $i \to -i$.

#### Exp. tech NP — radioactive beams

Session: [[2026-08-07-1538 Radioactive beams projectile fragmentation]] (thread still active)

- **Kinematic velocity matching:** Same fragment velocity $v \approx v_{\text{beam}} \implies$ magnetic rigidity $B\rho \propto A/q$.
- **Rigidity ratio:** Fully stripped ions $A/Z$; $^{11}\mathrm{Be}$ ($Z=4$) vs $^{11}\mathrm{C}$ ($Z=6$) is stiffer by $3:2$.

#### Fluids — Bernoulli / Venturi

Session: [[2026-09-10-1522 Bernoulli equation]] (thread still active)

- **Horizontal Venturi, $R_2=R_1/2$:** $v_2=4v_1$; $\Delta P=P_1-P_2=\frac{15}{2}\rho v_1^2$
- **Piezometer:** $h=(P-P_{\mathrm{atm}})/(\rho g)$; taller on the wide (high-$P$) side, not the throat; $\Delta h=15 v_1^2/(2g)$
- **Trap:** $P=C-\rho g y$ is “higher point, lower $P$” along a filled column — not the rise height of an open standpipe

#### E&M — capacitors

Session: [[2026-09-14-0828 Capacitance]] · parent [[2026-09-14-0816 Capacitor energy]]

- **C is geometry:** doubling $q$ leaves $C$ unchanged; $V$ doubles
- **Charging work:** $U_C=\int_0^Q (q/C)\,\mathrm{d}q = Q^2/(2C)=\frac12 C V^2$ via $Q=CV$
- **Plates apart:** isolated ($Q$ fixed) $U_C$ up; battery ($V$ fixed) $U_C$ down
- **Form choice:** $Q$ stuck $\to Q^2/(2C)$; $V$ stuck $\to \frac12 C V^2$
- **Double the gap:** isolated $U\to 2U$; battery $U\to U/2$
- **QV trap:** work is $\frac12 QV$, not $QV$; $V$ is not constant while charging

#### E&M — magnetic dipole moment of a current loop

Session: [[2026-09-17-1537 Magnetic dipole moment of a current loop]]

- **Definition & turns:** $\mathbf{m} = N I \mathbf{A}$; $\mathbf{A}$ normal to plane via RHR (curl fingers along $I$, thumb points along $\mathbf{m}$ / North pole)
- **Torque & angle trap:** $\boldsymbol{\tau} = \mathbf{m} \times \mathbf{B}$; $\theta$ is between normal $\mathbf{m}$ and $\mathbf{B}$ (GRE trap: loop plane at angle $\alpha \implies \theta = 90^\circ - \alpha$)
- **Potential energy:** $U = -\mathbf{m}\cdot\mathbf{B} = -m B \cos\theta$; ground state is aligned ($\theta = 0^\circ, U_{\min} = -m B$)
- **Forces in B-field:** Uniform $\mathbf{B} \implies \mathbf{F}_{\text{net}} = \mathbf{0}$ (pure torque); non-uniform $\mathbf{B} \implies \mathbf{F} = \nabla(\mathbf{m}\cdot\mathbf{B})$
- **Drill Batch 1 complete (2026-09-17):** 3 patterns locked: normal vs plane angle, $\Delta U = 2 m B$ for $180^\circ$ flip, and $\mathbf{F} = \mathbf{0}$ (uniform) vs $\mathbf{F} = \nabla(\mathbf{m}\cdot\mathbf{B})$ (gradient).

#### E&M — inductors and magnetic energy

Session: [[2026-09-17-2129 Self-induced emf across an inductor]]

- **Definition of L:** $\Phi_{\text{total}} = L I$; $L$ is a purely geometric invariant due to linearity of Biot-Savart/Ampère ($\mathbf{B} \propto I$)
- **Self-induced EMF:** $\mathcal{E} = -\frac{\mathrm{d}\Phi_B}{\mathrm{d}t} = -L \frac{\mathrm{d}I}{\mathrm{d}t}$; minus sign is Lenz's law (energy conservation back-emf)
- **Solenoid geometry trap:** $B = \mu_0 n I \implies \Phi_{\text{total}} = N(BA) = \frac{\mu_0 N^2 A}{l} I \implies L = \frac{\mu_0 N^2 A}{l}$ (scales with $N^2$, logged in [[Trap-Log]])
- **Stored energy:** $U_L = \int L I \,\mathrm{d}I = \frac{1}{2} L I^2$; field energy density $u_B = \frac{B^2}{2\mu_0} \implies U_B = \int \frac{B^2}{2\mu_0}\,\mathrm{d}^3 r$


#### E&M — mutual inductance

Session: [[2026-09-18-0843 Mutual inductance]]

- **Sign freedom ($M \lessgtr 0$ vs $L > 0$):** Self-inductance locks $\mathbf{B}$ and $\mathrm{d}\mathbf{a}$ to the same current loop via RHR ($\mathbf{B}\cdot\mathrm{d}\mathbf{a} > 0$ strictly); mutual inductance couples two independent loops whose relative orientation allows $\mathbf{B}_1\cdot\mathrm{d}\mathbf{a}_2 < 0$.
- **Neumann reciprocity ($M_{12} = M_{21}$):** Stated by learner unprompted (mutual coupling is inherently symmetric); calculation asymmetry shortcut exploits this by driving current in whichever loop produces a simpler/uniform field.
- **Concentric loops scaling ($r \ll R$):** $M \approx \frac{\mu_0 \pi r^2}{2R} \propto \frac{r^2}{R}$; derived via uniform field $B = \frac{\mu_0 I}{2R}$ across tiny loop area $\pi r^2$.
- **Geometric bound on $M$ ($M \le \sqrt{L_1 L_2}$):** Total field energy $U \ge 0$ for all currents requires $\Delta \le 0$ / AM–GM on $U=0 \implies M \le \sqrt{L_1 L_2}$; coupling coefficient $k \equiv \frac{M}{\sqrt{L_1 L_2}} \le 1$.
- **Ideal coupling ($k = 1$):** Total field cancellation $\mathbf{B}_1 + \mathbf{B}_2 = \mathbf{0} \implies U = 0$ requires 100% flux linkage (zero leakage flux), the ideal transformer limit.
- **Coaxial solenoids derivation:** $M = \frac{\mu_0 N_1 N_2 \pi r^2}{l}$ (handwritten derivation verified); outer solenoid uniform field $B = \mu_0 \frac{N_2}{l} I$ linked through $N_1$ turns of area $\pi r^2$.


#### E&M — polarization and bound charge densities

Session: [[2026-09-19-1816 Polarization and bound surface charge density]]

- **Polarization definition & units:** $\mathbf{P} \equiv \frac{\sum \mathbf{p}}{\Delta V}$ (dipole moment per unit volume); units are $\frac{\text{C}\cdot\text{m}}{\text{m}^3} = \frac{\text{C}}{\text{m}^2}$ (identical dimensions to surface charge density).
- **Bound surface charge density:** $\sigma_b = \mathbf{P}\cdot\hat{\mathbf{n}}$; arises from uncompensated dipole ends at material boundary (projection along outward normal $\hat{\mathbf{n}}$).
- **Bound volume charge density:** $\rho_b = -\nabla\cdot\mathbf{P}$; bulk cancellation is exact in uniform dielectrics ($\nabla\cdot\mathbf{P}=0 \implies \rho_b = 0$); outward divergence ($\nabla\cdot\mathbf{P} > 0$) pushes positive charge out, leaving behind a negative deficit ($\rho_b < 0$).
- **Uniformly polarized sphere ($R$, $\mathbf{P} = P_0\hat{\mathbf{z}}$):** $\rho_b = -\frac{\partial P_0}{\partial z} = 0$ throughout bulk; $\sigma_b(\theta) = P_0 \hat{\mathbf{z}}\cdot\hat{\mathbf{r}} = P_0 \cos\theta$ on surface (handwritten derivation verified).
- **Polarized slab field cancellation & reinforcement:** Outside a thin polarized slab ($d^2 \ll A$), fields from opposite bound charge sheets ($\sigma_{\text{top}} = +P, \sigma_{\text{bottom}} = -P$) point oppositely and exactly cancel ($\mathbf{E}_{\text{out}} = \mathbf{0}$); inside the slab, both sheets push/pull in the same direction, reinforcing to $\mathbf{E}_{\text{in}} = -\frac{\mathbf{P}}{\epsilon_0}$ (opposing $\mathbf{P}$).
- **Capacitor dielectric insertion work:** At constant voltage $V$, inserting a dielectric increases stored energy by $\Delta U = \frac{1}{2}\Delta C V^2$, while the battery supplies $\Delta Q = \Delta C \cdot V$ doing work $W_{\text{battery}} = \Delta C V^2$ (no factor of $1/2$); by conservation of energy, external work is $W_{\text{ext}} = \Delta U - W_{\text{battery}} = -\frac{1}{2}\Delta C V^2$ (negative work because fringing fields suck the dielectric in).

#### E&M — electric displacement D and linear dielectrics

Session: [[2026-09-20-1803 Electric displacement D and linear dielectrics]]

- **Gauss's law for displacement:** $\oint \mathbf{D}\cdot\mathrm{d}\mathbf{a} = Q_{\text{free, encl}}$ bypasses unknown bound charge; for pillbox straddling conductor interface with $\mathbf{D}_{\text{in}} = \mathbf{0}$, flux yields $D = \sigma$ directly (handwritten derivation verified).
- **Linear constitutive relation & screening:** $\mathbf{D} = \epsilon\mathbf{E} = K\epsilon_0\mathbf{E} \implies E = \frac{\sigma}{K\epsilon_0}$ (electric field reduced by $1/K$ due to dielectric screening).
- **Polarization vector:** $\mathbf{D} = \epsilon_0\mathbf{E} + \mathbf{P} \implies \mathbf{P} = \epsilon_0(K-1)\mathbf{E} = \sigma\frac{K-1}{K}\hat{\mathbf{n}}$ (handwritten derivation verified).
- **Conductor electrostatic invariants:** 5 invariants locked and recorded to Prep Studio formula card `cpgf-2.15a` via Grok 4.6 ($\mathbf{E}=\mathbf{0}, \rho=0, V=\text{const}, \mathbf{E}=\frac{\sigma}{\epsilon_0}\hat{\mathbf{n}}, E_\parallel=0$, cavity shielding).
- **Pillbox flux vs superposition:** Isolated sheet flux passes through two faces ($2ES = \sigma S/\epsilon_0 \implies E=\sigma/(2\epsilon_0)$); conductor forces $\mathbf{E}_{\text{in}}=\mathbf{0}$, channeling all flux through one face ($1ES = \sigma S/\epsilon_0 \implies E=\sigma/\epsilon_0$) (handwritten derivation verified).
- **Spherical dielectric shell & bound charge:** $D(r) = \frac{Q}{4\pi r^2}, E(r) = \frac{Q}{4\pi\epsilon_0 K r^2}, \mathbf{P}(r) = \frac{K-1}{K}\frac{Q}{4\pi r^2}\hat{\mathbf{r}}$; inner bound surface charge $Q_{b,\text{inner}} = -\frac{K-1}{K}Q$ (negative sign from inward normal $\hat{\mathbf{n}}=-\hat{\mathbf{r}}$ / screening) (handwritten derivation verified).

#### E&M — spherical coordinates (volume integral)

Session: [[2026-09-21-1447 Volume integral of rho from div E]]

- **$r$ vs $s$:** spherical $r$ = origin-to-point; cylindrical $s$ = axis-to-point
- **Replacement triple:** $(r,\theta,\phi)$, not leftover $(x,y)$ plus $\theta$ (trap reworked)
- **$\theta$ landmarks:** north $\theta=0$, equator $\theta=\pi/2$, south $\theta=\pi$
- **$z=r\cos\theta$:** north / equator / south landmarks all match
- **Spherical edges:** $\mathrm{d}r$, $r\mathrm{d}\theta$, $r\sin\theta\,\mathrm{d}\phi$ (trap reworked: not $(r, r\mathrm{d}\theta, r\sin\theta\phi)$)
- **Volume element:** $\mathrm{d}^3 r=r^2\sin\theta\,\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}\phi$ (handwritten product verified)
- **GRE move:** $\rho\propto z$ odd on a sphere symmetric about $z=0$ $\implies Q=0$ (no triple slog)
- **Hemisphere transfer:** upper hemisphere has no negative $\rho$ to cancel $\implies Q\neq 0$ (verified)

#### E&M — series reactance and voltage budget

Session: [[2026-09-21-0933 AC maximum power transfer]]

- **Voltage budget:** series $L$ takes $V_L = L\mathrm{d}I/\mathrm{d}t \neq 0$ while $I$ oscillates; $V = V_R + V_L$; $I = V_R/R$ drops even though $L$ dissipates no average heat (verified)
- **$L$ scales the cut:** bigger $L$, same oscillating $I$ $\implies$ larger $|V_L| = |\mathcal{E}| = L|\mathrm{d}I/\mathrm{d}t|$ (stated)
- **Lenz / harder push:** $\mathrm{d}I/\mathrm{d}t > 0 \implies \mathcal{E}$ opposes the increase; the source covers an extra drop (stated)

#### CM — constrained sliding

Session: [[2026-09-14-1657 Tangential acceleration on a curve]]

- **Frictionless track:** $a_t = g\sin\theta$ ($N$ has no tangential piece).
- **Slope relation & trap:** $\tan\theta = y'$; GRE trap is predicting $g\tan\theta$ (option C on $y=x^2/4$).
- **Parabolic profile ($y=x^2/4$, $+y$ down):** $a_t = gx/\sqrt{x^2+4}$ (option D).

#### CM — effective potential and circular orbits

Session: [[2026-09-18-1705 Circular orbit and effective potential]]

- **Circular orbit equilibrium:** $r = \text{const} \implies \ddot{r} = 0 \implies V'(r_0) = 0$ in equivalent 1D radial equation of motion $m\ddot{r} = -V'(r)$
- **Radial stability:** $V''(r_0) > 0$ is a potential well (stable circular orbit with epicycles); $V''(r_0) < 0$ is a local maximum (runaway perturbation / collapse or unbinding)
- **Power-law force stability ($F \propto -1/r^n$):** Stable circular orbits $\iff n < 3$; Newtonian gravity ($n=2$) is strictly stable ($V''(r_0) = +GMm/r_0^3 > 0$); $n \ge 3$ gives $V''(r_0) \le 0$ (unstable/runaway)

#### CM — pendulum coordinate choice ($\theta$ vs $x$) and effective spring

Session: [[2026-09-19-1609 Pendulum angular vs linear displacement]]

- **Equivalence:** Small-angle $x \approx L\theta \implies m\ddot{x} = -(mg/L)x$ maps directly to $\ddot{\theta} + (g/L)\theta = 0$.
- **Coordinate selection rule:** Use $\theta$ for pure rotation / rigid bodies (torque $\tau = I\ddot{\theta}$); use $x$ when coupled to linear elements (springs, carts) where gravity behaves as an effective spring with $k_{\text{eff}} = mg/L$.
- **Hanging vs inverted coupling:** Hanging pendulum gravity restores ($+mg/L$ stiffness $\implies k_{\text{tot}} = k + mg/L$, frequency increases); inverted pendulum gravity destabilizes ($-mg/L$ stiffness $\implies k_{\text{tot}} = k - mg/L$, stable $\iff k > mg/L$, topples to ground if $k < mg/L$) (trap reworked).
- **Physical pendulum discrete mass scaling:** $\omega^2 = \frac{\tau_{\text{restoring}}}{I_{\text{pivot}}} = \frac{g\sum m_i x_i}{\sum m_i x_i^2} = \frac{M_{\text{tot}} g d_{\text{CM}}}{I_{\text{pivot}}}$; moving mass toward pivot shrinks $I$ ($\propto x^2$) faster than torque ($\propto x$), increasing frequency; verified via $\sqrt{2}$ and $\sqrt{6/5}$ without formula memorization (trap reworked).

## In progress

Only threads with unfinished core work (verified against session notes).

- **QM: displacement operator $D(\alpha)$:** [next — unblocked] Resume [[2026-07-26-2030 Displacement operator]] $\to$ derivation of $D(\alpha) = e^{\alpha a^\dagger - \alpha^* a}$ (HO/ladder foundations solid).
- **Exp. tech NP: radioactive beams / projectile fragmentation:** [active] Turn 5 relativistic kinematics of $\sigma(P_\parallel)/P$ plateau vs $\sigma(P_t)/P$ falloff $\to$ [[2026-08-07-1538 Radioactive beams projectile fragmentation]].
- **Bead on a rotating hoop:** [active] Small-$\theta$ centrifugal piece ($mg\sin\theta$ vs $F_{\mathrm{cf}}\cos\theta$) stability sign $\to$ [[2026-09-08-1247 Bead on a rotating hoop]].
- **Fluid dynamics: Bernoulli & continuity:** [paused] Venturi locked; Torricelli, viscous $\Delta P$, and $r^4$ coupling open $\to$ [[2026-09-10-1522 Bernoulli equation]] · parent [[2026-09-10-1501 Fluid continuity equation]].
- **Capacitor energy ($U_C$):** [active] Drill Batch 1 Item 3 (parallel share) $\to$ [[2026-09-14-0816 Capacitor energy]].
- **Capacitance (two conductors):** [paused] Geometry invariant solid ($C$ fixed, $V$ doubles); resume energy parent $\to$ [[2026-09-14-0828 Capacitance]].
- **Boundary condition on normal E:** [active] Turn 1 Gauss pillbox sheet vs conductor jump $\to$ [[2026-09-15-0916 Boundary condition on normal E]].
- **Circular orbit and effective potential:** [active] Stability for $F \propto -1/r^n$ ($n < 3$) locked; orbital mechanics drills $\to$ [[2026-09-18-1705 Circular orbit and effective potential]].
- **E&M: AC maximum power transfer:** [active] Turn 9 — back-emf $\implies$ harder push locked; asking whether cancelling leftover $L$ with load $C$ raises $|I|$ $\to$ [[2026-09-21-0933 AC maximum power transfer]].
- **E&M: magnetic energy of a square-cross-section toroid:** [active] Turn 2 — GRE clock ≠ slog or memorize; still locating cylindrical $s$ $\to$ [[2026-09-21-2048 Magnetic energy of a square-cross-section toroid]]


## Archived domains

- **English & TOEFL (frozen 2026-09-15):** [[English-Progress-context]] — complete grammar, collocations, and exam traps index (excluded from default /learn and /retention queues; review explicitly by name).
