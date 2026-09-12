---
title: GRE Physics Formula Recall Decks & Routine
type: reference
status: active
area: "[[Japan_Itinerary]]"
updated: 2026-09-11
tags: [gre, physics, formulas]
---
# GRE Physics Formula Recall Decks & Cadence

## Daily Recall Target
- **Volume:** 20 formulas / session (~50 mins, hedge from 2026-09-14) `(0/6) #weekly`.
- **Methodology:** SM-2 spaced repetition via Prep Studio (`view-formulas.js` and `formula-checkin.js`) or manual flashcards.
- **Reference Doc:** [[FORMULA-MEMORIZATION-SURVEY]]

## Numbered 20-Formula Batches

### CM Batch 1: Kinematics, Dynamics & Energy (20 formulas)
1. 1D constant acceleration: $v = v_0 + at$, $x = x_0 + v_0 t + \frac{1}{2}at^2$, $v^2 = v_0^2 + 2a(x - x_0)$
2. Projectile motion range: $R = \frac{v_0^2 \sin(2\theta)}{g}$, maximum height $H = \frac{v_0^2 \sin^2\theta}{2g}$
3. Uniform circular motion acceleration: $a_c = \frac{v^2}{r} = \omega^2 r$
4. Polar coordinates acceleration: $a_r = \ddot{r} - r\dot{\theta}^2$, $a_\theta = r\ddot{\theta} + 2\dot{r}\dot{\theta}$
5. Friction: $f_s \le \mu_s N$, $f_k = \mu_k N$
6. Work-kinetic energy theorem: $W_{\text{net}} = \Delta K = \frac{1}{2}m v_f^2 - \frac{1}{2}m v_i^2$
7. Conservative force: $\mathbf{F} = -\nabla V$, $W = -\Delta V$
8. Power: $P = \mathbf{F} \cdot \mathbf{v} = \frac{dW}{dt}$
9. Center of mass: $\mathbf{R}_{\text{cm}} = \frac{1}{M}\sum m_i \mathbf{r}_i = \frac{1}{M}\int \mathbf{r}\,dm$
10. Reduced mass: $\mu = \frac{m_1 m_2}{m_1 + m_2}$
11. 1D elastic collision velocity: $v_{1f} = \frac{m_1 - m_2}{m_1 + m_2}v_{1i} + \frac{2m_2}{m_1 + m_2}v_{2i}$
12. Impulse: $\mathbf{J} = \int \mathbf{F}\,dt = \Delta\mathbf{p}$
13. Variable mass rocket equation: $v_f - v_i = v_{\text{ex}} \ln(m_0 / m_f)$
14. Simple harmonic oscillator: $\ddot{x} + \omega^2 x = 0$, $\omega = \sqrt{k/m}$, period $T = 2\pi\sqrt{m/k}$
15. Simple pendulum: $\omega = \sqrt{g/L}$, physical pendulum: $\omega = \sqrt{mgd / I}$
16. Torsional pendulum: $\omega = \sqrt{\kappa / I}$
17. Damped harmonic oscillator: $\ddot{x} + 2\beta\dot{x} + \omega_0^2 x = 0$, $\omega_d = \sqrt{\omega_0^2 - \beta^2}$
18. Quality factor: $Q = \frac{\omega_0}{2\beta} = \frac{\omega_0}{\Delta\omega}$
19. Resonance amplitude frequency: $\omega_r = \sqrt{\omega_0^2 - 2\beta^2}$
20. Potential energy Taylor expansion about equilibrium: $V(x) \approx V(x_0) + \frac{1}{2}V''(x_0)(x - x_0)^2 \implies k_{\text{eff}} = V''(x_0)$

### CM Batch 2: Gravity, Rotation & Formalism (20 formulas)
1. Newton's law of gravitation: $\mathbf{F} = -\frac{G M m}{r^2}\hat{\mathbf{r}}$, potential $V(r) = -\frac{GMm}{r}$
2. Gravitational escape speed: $v_{\text{esc}} = \sqrt{\frac{2GM}{R}}$
3. Circular orbit speed: $v_{\text{circ}} = \sqrt{\frac{GM}{r}}$
4. Kepler's third law: $T^2 = \frac{4\pi^2}{G(M+m)}a^3$
5. Vis-viva equation: $v^2 = GM\left(\frac{2}{r} - \frac{1}{a}\right)$
6. Effective potential: $V_{\text{eff}}(r) = V(r) + \frac{L^2}{2\mu r^2}$
7. Moment of inertia definition: $I = \sum m_i r_i^2 = \int r_\perp^2\,dm$
8. Parallel axis theorem: $I = I_{\text{cm}} + M d^2$
9. Perpendicular axis theorem (planar lamina): $I_z = I_x + I_y$
10. Standard moments of inertia: hoop $M R^2$, solid cylinder/disk $\frac{1}{2}M R^2$, solid sphere $\frac{2}{5}M R^2$, spherical shell $\frac{2}{3}M R^2$, rod center $\frac{1}{12}M L^2$
11. Rotational kinetic energy: $K = \frac{1}{2}I \omega^2$
12. Angular momentum: $\mathbf{L} = \mathbf{r} \times \mathbf{p} = I\boldsymbol{\omega}$
13. Torque: $\boldsymbol{\tau} = \mathbf{r} \times \mathbf{F} = \frac{d\mathbf{L}}{dt} = I\boldsymbol{\alpha}$
14. Rolling without slipping: $v_{\text{cm}} = \omega R$, $a_{\text{cm}} = \alpha R$, $K_{\text{tot}} = \frac{1}{2}M v_{\text{cm}}^2 + \frac{1}{2}I_{\text{cm}}\omega^2$
15. Lagrangian: $L = T - V$, Euler-Lagrange equations: $\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = 0$
16. Generalized momentum: $p_i = \frac{\partial L}{\partial \dot{q}_i}$
17. Hamiltonian: $H = \sum p_i \dot{q}_i - L$, Hamilton's equations: $\dot{q}_i = \frac{\partial H}{\partial p_i}$, $\dot{p}_i = -\frac{\partial H}{\partial q_i}$
18. Centrifugal force: $\mathbf{F}_{\text{cent}} = -m \boldsymbol{\omega} \times (\boldsymbol{\omega} \times \mathbf{r})$
19. Coriolis force: $\mathbf{F}_{\text{cor}} = -2m (\boldsymbol{\omega} \times \mathbf{v})$
20. Fluid mechanics: continuity equation $A_1 v_1 = A_2 v_2$, Bernoulli equation $P + \frac{1}{2}\rho v^2 + \rho g y = \text{const}$

### EM Batch 1: Electrostatics, Capacitors & DC (20 formulas)
1. Coulomb's law: $\mathbf{E} = \frac{1}{4\pi\epsilon_0}\frac{q}{r^2}\hat{\mathbf{r}}$
2. Gauss's law (integral): $\oint \mathbf{E}\cdot d\mathbf{A} = \frac{Q_{\text{enc}}}{\epsilon_0}$, differential: $\nabla\cdot\mathbf{E} = \frac{\rho}{\epsilon_0}$
3. Electric potential: $V(\mathbf{r}) = -\int_\infty^\mathbf{r}\mathbf{E}\cdot d\mathbf{l}$, $\mathbf{E} = -\nabla V$, Poisson equation $\nabla^2 V = -\frac{\rho}{\epsilon_0}$
4. Field of infinite line charge: $E = \frac{\lambda}{2\pi\epsilon_0 r}$
5. Field of infinite plane charge: $E = \frac{\sigma}{2\epsilon_0}$, conductor surface: $E = \frac{\sigma}{\epsilon_0}$
6. Electric dipole potential: $V = \frac{\mathbf{p}\cdot\hat{\mathbf{r}}}{4\pi\epsilon_0 r^2}$, field on axis $E \approx \frac{2p}{4\pi\epsilon_0 r^3}$, on equator $E \approx \frac{p}{4\pi\epsilon_0 r^3}$
7. Dipole torque & energy: $\boldsymbol{\tau} = \mathbf{p} \times \mathbf{E}$, $U = -\mathbf{p}\cdot\mathbf{E}$
8. Parallel plate capacitance: $C = \frac{\epsilon_0 A}{d}$, with dielectric $C = \kappa \frac{\epsilon_0 A}{d}$
9. Cylindrical capacitor: $C = \frac{2\pi\epsilon_0 L}{\ln(b/a)}$, spherical capacitor: $C = 4\pi\epsilon_0 \frac{ab}{b-a}$
10. Capacitors in series: $1/C_{\text{eq}} = \sum 1/C_i$, parallel: $C_{\text{eq}} = \sum C_i$
11. Energy stored in capacitor: $U = \frac{1}{2}Q V = \frac{1}{2}C V^2 = \frac{Q^2}{2C}$
12. Electrostatic energy density: $u_E = \frac{1}{2}\epsilon_0 E^2$
13. Conductor boundary conditions: $E_\parallel^{\text{above}} = E_\parallel^{\text{below}}$, $E_\perp^{\text{above}} - E_\perp^{\text{below}} = \frac{\sigma}{\epsilon_0}$
14. Method of images (grounded conducting plane): $q' = -q$ at $-d$
15. Current density & Ohm's law: $\mathbf{J} = \sigma \mathbf{E} = n q \mathbf{v}_d$, microscopic resistivity $\rho = \frac{m}{n q^2 \tau}$
16. Resistance of conductor: $R = \rho \frac{L}{A}$
17. Kirchhoff's rules: junction $\sum I_{\text{in}} = \sum I_{\text{out}}$, loop $\sum \Delta V_i = 0$
18. Electric power: $P = IV = I^2 R = \frac{V^2}{R}$
19. RC circuit charging: $q(t) = C\mathcal{E}(1 - e^{-t/RC})$, $I(t) = \frac{\mathcal{E}}{R}e^{-t/RC}$
20. RC circuit discharging: $q(t) = Q_0 e^{-t/RC}$, $I(t) = \frac{Q_0}{RC}e^{-t/RC}$
