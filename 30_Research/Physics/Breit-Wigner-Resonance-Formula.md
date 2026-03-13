---
type: derivation
area: "[[Physics]]"
premises:
  - "Time-dependent perturbation theory (Fermi's golden rule)"
  - "Quasi-stationary (metastable) state decaying exponentially"
  - "Single isolated resonance (no overlapping resonances)"
result: "\\sigma(E) = \\pi \\lambdabar^2 \\frac{\\Gamma_a \\Gamma_b}{(E - E_0)^2 + (\\Gamma/2)^2}"
tags:
  - derivation
  - nuclear-physics
  - scattering
  - resonance
aliases:
  - "Breit-Wigner formula"
  - "Breit-Wigner distribution"
  - "Lorentzian resonance"
created: 2026-03-10
last_reviewed:
next_review:
review_interval: 0
---
# Breit-Wigner Resonance Formula

> [!important] All math expressions use LaTeX: `$...$` inline, `$$...$$` display. Final results in `\boxed{}`.

## Setup

**Goal:** Derive the Breit-Wigner single-level resonance cross-section $\sigma(E)$ for a reaction $a + A \to \text{compound state} \to b + B$, showing that the cross-section near a resonance has a Lorentzian shape.

**Starting from:**
- A quasi-stationary (metastable) quantum state with complex energy $E_0 - i\Gamma/2$
- Time-dependent quantum mechanics: an unstable state decays exponentially
- The scattering amplitude is determined by the time-evolution of the compound state
- Partial-wave decomposition of the scattering cross-section

**Strategy:** We begin from the time-evolution of an unstable state, Fourier-transform to obtain the energy-domain amplitude, compute the scattering probability, and embed the result in the partial-wave cross-section formula. This is the standard "decaying state" derivation used in nuclear physics (as in Krane, Blatt & Weisskopf).

## Derivation

### Step 1 — Time evolution of a decaying state

**Assumption:** The compound nucleus formed at resonance energy $E_0$ is a quasi-stationary state. It is not a true energy eigenstate of the full Hamiltonian but decays with a total width $\Gamma$ (equivalently, a mean lifetime $\tau = \hbar/\Gamma$).

We write the time-dependent wave function of the compound state (for $t \geq 0$) as:

$$
\Psi(t) = \Psi(0)\, e^{-iE_0 t/\hbar}\, e^{-\Gamma t/(2\hbar)} \tag{1}
$$

The probability of finding the system in the compound state decays as:

$$
|\Psi(t)|^2 = |\Psi(0)|^2\, e^{-\Gamma t/\hbar} \tag{2}
$$

This is exponential decay with decay constant $\lambda = \Gamma/\hbar$, confirming the identification $\tau = \hbar/\Gamma$.

**Physical insight:** The factor $e^{-\Gamma t/(2\hbar)}$ in the amplitude (not the probability) is crucial. The width $\Gamma$ encodes how quickly the compound state "leaks" into all available exit channels.

**Assumption flagged:** We assume $t \geq 0$ (causal: the state is formed at $t = 0$). For $t < 0$, $\Psi(t) = 0$. This is the key to obtaining a non-trivial Fourier transform.

### Step 2 — Fourier transform to the energy domain

To find the energy-domain amplitude, we take the Fourier transform of $\Psi(t)$. The amplitude for the system to have energy $E$ is:

$$
A(E) = \frac{1}{\sqrt{2\pi\hbar}} \int_0^{\infty} \Psi(0)\, e^{-iE_0 t/\hbar}\, e^{-\Gamma t/(2\hbar)}\, e^{iEt/\hbar}\, \mathrm{d}t \tag{3}
$$

We combine the exponentials:

$$
A(E) = \frac{\Psi(0)}{\sqrt{2\pi\hbar}} \int_0^{\infty} \exp\!\left[\frac{i(E - E_0)t}{\hbar} - \frac{\Gamma t}{2\hbar}\right] \mathrm{d}t \tag{4}
$$

**Identity used:** $\int_0^\infty e^{-\alpha t}\,\mathrm{d}t = 1/\alpha$ for $\operatorname{Re}(\alpha) > 0$.

Here $\alpha = \Gamma/(2\hbar) - i(E - E_0)/\hbar$, and $\operatorname{Re}(\alpha) = \Gamma/(2\hbar) > 0$ since $\Gamma > 0$, so the integral converges:

$$
A(E) = \frac{\Psi(0)}{\sqrt{2\pi\hbar}} \cdot \frac{1}{\frac{\Gamma}{2\hbar} - \frac{i(E - E_0)}{\hbar}} \tag{5}
$$

Multiplying numerator and denominator by $\hbar$:

$$
A(E) = \frac{\Psi(0)}{\sqrt{2\pi\hbar}} \cdot \frac{\hbar}{\frac{\Gamma}{2} - i(E - E_0)} \tag{6}
$$

Rearranging with $i$ in the standard convention:

$$
A(E) \propto \frac{1}{(E - E_0) + i\Gamma/2} \tag{7}
$$

**Physical insight:** The energy spectrum of an unstable state is *not* a delta function (as it would be for a true eigenstate) but a Lorentzian centered at $E_0$ with half-width $\Gamma/2$. This is the energy-time uncertainty relation made concrete: $\Delta E \cdot \Delta t \sim \hbar$ gives $\Gamma \cdot \tau \sim \hbar$.

### Step 3 — Probability distribution in energy

The probability of finding the compound state with energy $E$ is $|A(E)|^2$:

$$
|A(E)|^2 \propto \frac{1}{(E - E_0)^2 + (\Gamma/2)^2} \tag{8}
$$

This is the **Lorentzian (Breit-Wigner) line shape**. It has:
- A maximum at $E = E_0$
- Full width at half maximum (FWHM) equal to $\Gamma$

### Step 4 — Connecting to scattering cross-section via partial waves

**Assumption:** We consider a reaction $a + A \to C^* \to b + B$ proceeding through a single resonance of the compound nucleus $C^*$ with definite angular momentum $\ell$.

From partial-wave scattering theory, the cross-section for a reaction proceeding through a single partial wave $\ell$ is:

$$
\sigma_\ell = \pi \lambdabar^2 (2\ell + 1)\, |S_\ell|^2 \tag{9}
$$

where $\lambdabar = \lambda/(2\pi) = \hbar/(p)$ is the reduced de Broglie wavelength of the projectile in the center-of-mass frame, $p$ is the CM momentum, and $S_\ell$ is the $S$-matrix element for the reaction channel.

**Assumption flagged:** We use the compound-nucleus hypothesis: formation and decay of the compound state are independent. This means the amplitude for the full process factorizes into an entrance-channel amplitude and an exit-channel amplitude.

### Step 5 — Factorization of the resonant amplitude

By the independence hypothesis, the $S$-matrix element for the reaction $a \to b$ through the resonance is proportional to:

$$
S_\ell^{(a \to b)} \propto \frac{\text{(formation amplitude)} \times \text{(decay amplitude)}}{(E - E_0) + i\Gamma/2} \tag{10}
$$

The formation amplitude is proportional to $\sqrt{\Gamma_a}$ (the partial width for channel $a$), and the decay amplitude is proportional to $\sqrt{\Gamma_b}$ (the partial width for channel $b$).

**Definition:** The total width $\Gamma$ is the sum of all partial widths:

$$
\Gamma = \sum_c \Gamma_c \tag{11}
$$

where $c$ runs over all open channels. Each $\Gamma_c$ is the decay rate (in energy units) into channel $c$.

**Justification for $\sqrt{\Gamma_c}$:** From Fermi's golden rule, the decay rate into channel $c$ is $\Gamma_c/\hbar \propto |V_{c}|^2 \rho_c$, where $V_c$ is the matrix element coupling the compound state to channel $c$. Thus the *amplitude* for forming or decaying through channel $c$ scales as $|V_c| \propto \sqrt{\Gamma_c}$.

Therefore:

$$
S_\ell^{(a \to b)} = \frac{i\sqrt{\Gamma_a \Gamma_b}}{(E - E_0) + i\Gamma/2} \tag{12}
$$

The factor $i$ is a phase convention ensuring unitarity of the $S$-matrix at resonance.

### Step 6 — Computing the cross-section

Substituting Eq. (12) into Eq. (9):

$$
\sigma_{a \to b}(E) = \pi \lambdabar^2 (2\ell + 1) \left|\frac{i\sqrt{\Gamma_a \Gamma_b}}{(E - E_0) + i\Gamma/2}\right|^2 \tag{13}
$$

Since $|i|^2 = 1$:

$$
\sigma_{a \to b}(E) = \pi \lambdabar^2 (2\ell + 1) \frac{\Gamma_a \Gamma_b}{(E - E_0)^2 + (\Gamma/2)^2} \tag{14}
$$

### Step 7 — Including spin: the statistical factor

**Assumption flagged:** If the projectile and target have spins $s$ and $I$ respectively, and the compound state has total angular momentum $J$, we must include the statistical spin factor $g_J$.

The number of magnetic substates of the compound state is $(2J+1)$, while the number of initial spin states is $(2s+1)(2I+1)$. The statistical factor is:

$$
g_J = \frac{2J + 1}{(2s + 1)(2I + 1)} \tag{15}
$$

This replaces the $(2\ell + 1)$ factor when spins are present. The full single-level Breit-Wigner formula becomes:

$$
\sigma_{a \to b}(E) = \pi \lambdabar^2\, g_J \frac{\Gamma_a \Gamma_b}{(E - E_0)^2 + (\Gamma/2)^2} \tag{16}
$$

## Result

$$
\boxed{\sigma_{a \to b}(E) = \pi \lambdabar^2 \frac{(2J+1)}{(2s+1)(2I+1)} \frac{\Gamma_a \Gamma_b}{(E - E_0)^2 + (\Gamma/2)^2}}
$$

where:
- $E_0$ is the resonance energy
- $\Gamma$ is the total width (sum of all partial widths $\Gamma_c$)
- $\Gamma_a$, $\Gamma_b$ are the partial widths for the entrance and exit channels
- $\lambdabar = \hbar/p$ is the reduced de Broglie wavelength in the CM frame
- $g_J = (2J+1)/[(2s+1)(2I+1)]$ is the spin statistical factor

**Special case — elastic scattering** ($a = b$): $\Gamma_a \Gamma_b \to \Gamma_a^2$, so the peak elastic cross-section at $E = E_0$ is $\sigma_{\text{el}}^{\text{peak}} = \pi \lambdabar^2 g_J \cdot 4\Gamma_a^2/\Gamma^2$.

**Special case — total cross-section** (sum over all exit channels): $\sum_b \Gamma_b = \Gamma$, so $\sigma_{\text{tot}} = \pi \lambdabar^2 g_J \cdot 4\Gamma_a/\Gamma$ at resonance.

**Valid when:**
- The resonance is isolated (spacing between levels $D \gg \Gamma$)
- The compound nucleus hypothesis holds (formation and decay are independent)
- Only a single partial wave $\ell$ (or equivalently, a single $J^\pi$) dominates near resonance
- The energy $E$ is in the vicinity of $E_0$ (within a few $\Gamma$)

**Breaks when:**
- Overlapping resonances: need multi-level Breit-Wigner or R-matrix theory
- Direct reactions compete with compound-nucleus formation (e.g., stripping, pickup)
- Very broad resonances where $\Gamma \sim E_0$ (the energy dependence of $\Gamma_a$, $\Gamma_b$, and $\lambdabar$ cannot be neglected)
- Near threshold: partial widths acquire strong energy dependence via penetrability factors $P_\ell(E)$
- Coulomb/centrifugal effects modify the line shape (need to include penetration factors explicitly)

## Pitfalls

1. **Confusing $\Gamma$ with $\Gamma/2$:** The FWHM of the Lorentzian is $\Gamma$, but the denominator contains $(\Gamma/2)^2$. On exams, writing $(E - E_0)^2 + \Gamma^2$ (missing the factor of 2) is the most common error and gives the wrong width by a factor of 2.

2. **Forgetting the spin statistical factor $g_J$:** The factor $(2\ell+1)$ from partial-wave theory becomes $g_J = (2J+1)/[(2s+1)(2I+1)]$ when particle spins are included. Omitting this gives wrong absolute magnitudes. For spinless particles ($s = I = 0$, $J = \ell$), $g_J$ reduces back to $(2\ell + 1)$.

3. **Treating $\Gamma_a$ and $\Gamma_b$ as energy-independent near threshold:** The partial widths have strong energy dependence via the penetrability factor $P_\ell(E)$, especially for charged particles or higher $\ell$. Near threshold, $\Gamma_\ell(E) \propto P_\ell(E)$, and the naive Breit-Wigner shape becomes asymmetric. This is critical in nuclear astrophysics (e.g., ${}^{12}\mathrm{C}(\alpha,\gamma){}^{16}\mathrm{O}$).

## Related

- [[Fermi's Golden Rule]]
- [[Compound Nucleus Model]]
- [[Partial Wave Analysis]]
- [[R-Matrix Theory]]
- [[Resonance Scattering]]
