---
area: "[[Physics]]"
tags:
  - special-relativity
  - kinematics
  - relativistic-mechanics
  - review/physics
created: 2026-05-21
last_reviewed:
next_review: 2026-05-21
review_interval: 0
sr-due: 2026-05-21
sr-interval: 1
sr-ease: 230
---
# Relativistic Force

> [!important] All math expressions, equations, and formulas **must** use LaTeX notation (`$...$` for inline, `$$...$$` for display blocks).

## Schematics

![[Relativistic_Force_diagram.jpg]]
*Relativistic mechanical quantities versus velocity (Portuguese axis labels; "Velocidade" = velocity, "Energia/momento ou Massa" = energy/momentum or mass). Top to bottom near $v = 0$: transverse mass $T = m/\sqrt{1-v^{2}/c^{2}} = \gamma m$ (violet); longitudinal mass $L = m/(1-v^{2}/c^{2})^{3/2} = \gamma^{3} m$ (red); momentum $p = \gamma m v$ (green); total energy $E = \gamma mc^{2}$ (black, upper); kinetic energy $K = (\gamma - 1)mc^{2}$ (black, lower). The $\gamma^{3}$ vs $\gamma$ split visible between longitudinal and transverse curves is the geometric source of the asymmetric force law $F_{\parallel} = \gamma^{3} m a$, $F_{\perp} = \gamma m a$. (CC BY-SA 4.0, Wikimedia Commons)*

![[Relativistic_Force_comparison.png]]
*Log–log plot of relativistic-kinematics parameters versus proper velocity $w/c = p/(mc)$: $\gamma = \mathrm{d}t/\mathrm{d}\tau = E/(mc^{2})$ (blue, solid); ordinary velocity ratio $v/c = \tanh\eta$ (cyan, saturating at 1); rapidity $\eta$ (yellow); kinetic-energy fraction $(\gamma - 1) = K/(mc^{2})$ (red, dashed); relativistic Doppler factor $e^{-\eta}$ (magenta). The diverging $\gamma$ and $\gamma - 1$ at large $w/c$ make the longitudinal inertia $\gamma^{3} m$ run away — the dynamical reason classical [[Cyclotron]] acceleration breaks down when $\gamma \gtrsim 1.1$. (CC BY-SA 4.0, Wikimedia Commons)*

## Definition

**Relativistic force** is Newton's second law restated as the time-derivative of [[Relativistic Momentum]] rather than $m\mathbf{a}$:
$$\mathbf{F} \;=\; \frac{\mathrm{d}\mathbf{p}}{\mathrm{d}t} \;=\; \frac{\mathrm{d}}{\mathrm{d}t}\!\bigl(\gamma m \mathbf{v}\bigr).$$
Because $\gamma = (1 - v^{2}/c^{2})^{-1/2}$ depends on $\mathbf{v}$, differentiation yields a velocity-dependent inertia: the same force produces different accelerations depending on whether it is aligned with or perpendicular to the instantaneous velocity.

## Key Points

- **Longitudinal vs transverse split.** For $\mathbf{F} \parallel \mathbf{v}$: $F_{\parallel} = \gamma^{3} m a$. For $\mathbf{F} \perp \mathbf{v}$: $F_{\perp} = \gamma m a$. The longitudinal inertia grows as $\gamma^{3}$ — the dynamical reason cyclotron acceleration becomes inefficient at relativistic energies.
- **Why $\mathbf{F} = m\mathbf{a}$ fails.** Rest mass $m$ is constant, but $\gamma m$ behaves like a velocity-dependent inertia, and even that picture is wrong directionally — only the $\mathrm{d}\mathbf{p}/\mathrm{d}t$ form is Lorentz-covariant.
- **Cyclotron frequency shift.** Circular motion in a uniform $\mathbf{B}$ field: $\omega = qB/(\gamma m)$ — the orbital frequency decreases as $\gamma$ rises, breaking the isochronism that classical [[Cyclotron]]s depend on.
- **Four-force.** The manifestly covariant generalization is $F^{\mu} = \mathrm{d}p^{\mu}/\mathrm{d}\tau$ with proper time $\tau$ — used in relativistic field theory and the covariant form of the [[Lorentz Force]].
- **Same impulse-momentum theorem.** $\int \mathbf{F}\,\mathrm{d}t = \Delta \mathbf{p}$ still holds — momentum, not acceleration, is the universal currency.

## Examples

- **Cyclotron breakdown at $\gamma \gtrsim 1.1$.** As ions accelerate, $\omega = qB/(\gamma m)$ drifts below the fixed RF cavity frequency. Two cures: **synchrocyclotrons** modulate the RF to track $\omega(\gamma)$; **isochronous cyclotrons** ([[Isochronous Cyclotron]], [[Superconducting Ring Cyclotron]]) shape $B(r)$ so that $B(r) \propto \gamma(r)$, holding $\omega$ constant.
- **Magnetic spectrometer rigidity.** A particle of momentum $\mathbf{p}$ in a uniform $\mathbf{B}$ field curves with radius $\rho = p/(qB)$ — independent of $\gamma$ when expressed in $p$ rather than $v$, the kinematic basis of [[Magnetic Rigidity]] and the $B\rho$ leg of [[DeltaE-Brho-TOF-Identification]].

## Related Concepts

- [[Lorentz Factor]]
- [[Relativistic Momentum]]
- [[Relativistic Kinetic Energy]]
- [[Relativistic Total Energy]]
- [[Energy-Momentum Relation]]
- [[Relativistic Forms of Physical Quantities]]
- [[Lorentz Force]]
- [[Magnetic Rigidity]]
- [[Cyclotron]]
- [[Isochronous Cyclotron]]
- [[Synchrotron]]
- [[Superconducting Ring Cyclotron]]
- [[Magnetic Spectrometer]]
- [[Special Relativity]]

## References

- K. S. Krane, *Introductory Nuclear Physics* (Wiley, 1988) — Appendix on relativistic kinematics.
- D. J. Griffiths, *Introduction to Electrodynamics*, 4th ed. (Cambridge, 2017) — §12.2.4, relativistic dynamics.
- J. D. Jackson, *Classical Electrodynamics*, 3rd ed. (Wiley, 1999) — Ch. 11, special theory of relativity.
- Wikipedia: [Four-force](https://en.wikipedia.org/wiki/Four-force).
