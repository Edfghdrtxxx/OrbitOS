---
area:
tags: [pinn, scientific-ml, deep-learning, inverse-problems]
created: 2026-07-05
last_reviewed:
next_review: 2026-07-05
review_interval: 0
---
# Physics-Informed Neural Network

## Definition

A Physics-Informed Neural Network (PINN) is a neural network that approximates the solution of a differential equation by minimizing a composite loss combining data mismatch with the residual of the governing PDE, evaluated at collocation points via [[Automatic Differentiation]]. It is the central soft-constraint ("learning bias") instantiation of physics-informed machine learning: prior physical knowledge is injected as a penalty in the loss rather than hard-wired into the architecture. PINNs are mesh-free and are strongest on ill-posed and inverse problems in the small-data regime, where classical grid-based solvers fail or data are too scarce for purely data-driven learning.

## Key Points

- Composite training objective: $\mathcal{L} = w_{\text{data}}\,\mathcal{L}_{\text{data}} + w_{\text{PDE}}\,\mathcal{L}_{\text{PDE}}$, where $\mathcal{L}_{\text{data}} = \frac{1}{N_{\text{data}}}\sum_{i=1}^{N_{\text{data}}}\left(u(x_i,t_i)-u_i\right)^2$ penalizes mismatch with observations and $\mathcal{L}_{\text{PDE}}$ penalizes the PDE residual at collocation points; minimized with Adam / L-BFGS.
- Canonical illustration on the viscous Burgers equation $\frac{\partial u}{\partial t} + u\frac{\partial u}{\partial x} = \nu\frac{\partial^2 u}{\partial x^2}$: the residual $\mathcal{L}_{\text{PDE}} = \frac{1}{N_{\text{PDE}}}\sum_{j=1}^{N_{\text{PDE}}}\left(\frac{\partial u}{\partial t} + u\frac{\partial u}{\partial x} - \nu\frac{\partial^2 u}{\partial x^2}\right)^2\Big|_{(x_j,t_j)}$ is computed exactly by automatic differentiation of the network $u(x,t;\theta)$.
- Sits within a broader taxonomy of physics embedding: **observational biases** (data that reflect the physics), **inductive biases** (architectures hard-encoding symmetries, e.g. equivariant CNNs, FermiNet anti-symmetry), and **learning biases** (soft residual penalties — the PINN route).
- Mesh-free and strongest on ill-posed/inverse problems and small-data settings; well-posed forward problems are still solved faster and more accurately by classical grid-based solvers, and NN training can be orders of magnitude slower than FEM.
- Known training pathologies: spectral bias (F-principle) against high-frequency solution components, competing loss terms causing stiff/unstable optimization (diagnosed via the neural tangent kernel view), and the cost of high-order derivatives.
- Physics-constrained extensions handle discontinuous coefficients by adding interface conditions as extra penalty terms — e.g. flux continuity $\phi_l = \phi_r$ and current continuity $-D_l\nabla\phi_l\cdot\mathbf{n} = -D_r\nabla\phi_r\cdot\mathbf{n}$ in PC-GIPMNN, with one output neuron per material subdomain.
- Backbones are often [[ResNet]]-style (residual blocks with skip connections interpretable as forward-Euler ODE discretization); for learning solution *operators* rather than single solutions, [[DeepONet]] is the companion approach.
- Bayesian variants (B-PINNs) fold in uncertainty quantification across physics, data (aleatoric/epistemic), and model-error sources.

## Examples

- **Reactor criticality (nuclear physics):** PC-GIPMNN solves the one-group neutron diffusion K-eigenvalue problem $-\nabla \cdot (D\nabla\phi) + \Sigma^{a}\phi = \frac{1}{k_{\text{eff}}}\, \nu\Sigma^{f}\phi$ data-free, enforcing interface continuity as penalties; it beat GIPMNN and the Deep Ritz Method on all 12 two-dimensional reactor configurations and on the 2D IAEA benchmark eigenfunction error.
- **Inverse problems from sparse sensing:** a PINN supervised with 5 MHz ultrasonic surface-acoustic-wave data identified and characterized a surface-breaking crack in a metal plate; the Tomo-BOS experiment inferred continuous 3D velocity and pressure fields around an espresso cup from temperature-gradient video alone, without boundary conditions.
- **Small-data detector ML at IMP:** the same learning-bias recipe — adding soft physics-residual penalties (e.g. known energy-loss relations) to a supervised loss — is a transferable regularization strategy for [[Particle Identification]] networks trained on scarce labeled [[Time Projection Chamber]] data.

## Papers

- [[Karniadakis 2021 — Physics-Informed Machine Learning]] (2021) — defining review of PINNs: weighted data-mismatch + PDE-residual loss trained via automatic differentiation, strongest on ill-posed/inverse and small-data problems; physics-informed committor learning solved a **144-dimensional** Allen–Cahn metastable-transition system.
- [[Yang 2023 — Physics-Constrained Neural Network for K-Eigenvalue Problems]] (2023) — PC-GIPMNN enforces neutron flux and current continuity at material interfaces as penalty losses (one output neuron per subdomain), beating GIPMNN and Deep Ritz on **all 12 two-dimensional reactor configurations** (e.g., R7 k_eff relative error **2.1827 × 10⁻⁴** vs 8.0309 × 10⁻³ for the unconstrained variant).

## Related Concepts

- [[ResNet]]
- [[Convolutional Neural Network]]
- [[Attention Mechanism]]
- [[DeepONet]]
- [[Deep Ritz Method]]
- [[Automatic Differentiation]]
- [[Domain Adaptation]]
- [[Particle Identification]]
- [[Time Projection Chamber]]

## References

- Karniadakis, G. E., Kevrekidis, I. G., Lu, L., Perdikaris, P., Wang, S. & Yang, L. Physics-informed machine learning. *Nature Reviews Physics* **3** (2021). DOI: 10.1038/s42254-021-00314-5.
- Yang, Q.-H., Yang, Y., Deng, Y.-T., He, Q.-L., Gong, H.-L., et al. Physics-constrained neural network for solving discontinuous interface K-eigenvalue problem with application to reactor physics (2023).
