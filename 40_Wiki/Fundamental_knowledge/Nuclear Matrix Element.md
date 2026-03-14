---
area: "[[Physics]]"
tags: [nuclear-physics, nuclear-structure, transition-amplitude]
created: 2026-03-14
last_reviewed:
next_review: 2026-03-14
review_interval: 0
---
# Nuclear Matrix Element

> [!important] All math expressions, equations, and formulas **must** use LaTeX notation (`$...$` for inline, `$$...$$` for display blocks).

## Definition

A nuclear matrix element (NME) is the quantum-mechanical overlap integral $M = \langle \Psi_f | \hat{O} | \Psi_i \rangle$ that quantifies the amplitude for a nuclear transition from an initial state $|\Psi_i\rangle$ to a final state $|\Psi_f\rangle$ under a given transition operator $\hat{O}$. NMEs encode all the nuclear-structure information needed to connect measured observables (cross sections, decay rates) to the underlying interaction, and their accurate calculation is one of the central challenges in nuclear theory.

## Key Points

- **Role in decay rates:** Transition rates and cross sections are proportional to $|M|^2$. For example, the $\beta$-decay rate depends on the Gamow-Teller matrix element $M_{GT} = \langle \Psi_f | \sum_k \sigma_k \tau_k^\pm | \Psi_i \rangle$, and the [[Neutrinoless Double-Beta Decay]] [[Half-Life]] depends on $|M^{0\nu}|^2$.
- **Model dependence:** NMEs cannot be measured directly — they are extracted from data using a nuclear-structure model. Different frameworks (nuclear shell model, quasiparticle random-phase approximation / QRPA, interacting boson model / IBM, ab initio methods) can yield values differing by factors of 2--3 for the same transition, especially for $0\nu\beta\beta$.
- **Electromagnetic NMEs:** For [[Coulomb Excitation]], the reduced transition probability $B(E\lambda)$ is directly related to the square of the electric multipole matrix element, providing a model-independent measurement when the excitation is purely electromagnetic.
- **Sensitivity to correlations:** NMEs are highly sensitive to short-range nucleon-nucleon correlations, pairing correlations, and deformation — making them a stringent test of nuclear wave functions and effective interactions.
- **Connection to experiments:** Charge-exchange reactions (e.g., $(p, n)$, $({}^3\text{He}, t)$) and muon capture are used to constrain NMEs experimentally, particularly the Gamow-Teller components relevant to [[Neutrinoless Double-Beta Decay]].

## Examples

- **$0\nu\beta\beta$ of ${}^{76}\text{Ge}$:** Shell-model calculations give $M^{0\nu} \approx 2.8$--$3.5$, while QRPA estimates range from $\sim 4$ to $\sim 6$, directly affecting the extracted limit on the Majorana neutrino mass.
- **$B(E2; 0^+ \to 2^+)$ in even-even nuclei:** Measured via [[Coulomb Excitation]], this electromagnetic NME maps out nuclear deformation across the chart of nuclides and benchmarks shell-model and collective-model predictions.

## Related Concepts

- [[Neutrinoless Double-Beta Decay]]
- [[Coulomb Excitation]]
- [[Half-Life]]
- [[Liquid Drop Model]]
- [[Mean-Field Potential]]
- [[Probability Amplitude]]
- [[Hilbert Space]]
- [[Eigenvalues and Eigenvectors]]
- [[Shell Model]]
- [[Gamow-Teller Transition]]

## References

- J. Engel and J. Menendez, "Status and future of nuclear matrix elements for neutrinoless double-beta decay: a review," *Reports on Progress in Physics* **80** (2017) 046301.
- B. A. Brown and W. A. Richter, "New 'USD' Hamiltonians for the sd shell," *Physical Review C* **74** (2006) 034315.
