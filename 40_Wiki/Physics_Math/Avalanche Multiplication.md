---
area: "[[Physics]]"
tags: [gas-detector, plasma-physics, ionization]
created: 2026-03-31
last_reviewed:
next_review: 2026-03-31
review_interval: 0
---
# Avalanche Multiplication

## Schematics

![[Avalanche_Multiplication_electron_avalanche.gif]]
*Animation of an electron avalanche (Townsend discharge): a single free electron accelerated by an [[Electric Field]] ionizes gas molecules, producing secondary electrons that repeat the process exponentially. (CC BY-SA 3.0, Dougsim / Wikimedia Commons)*

![[Avalanche_Multiplication_detector_regions.gif]]
*Ion-pair current vs. applied voltage in a wire-cylinder gas detector, showing the [[Ionisation Chamber]] region (no gain), the proportional region (avalanche multiplication), and the [[Geiger Mode]] region (saturated discharge). (CC BY-SA 3.0, Doug Sim / Wikimedia Commons)*

![[Avalanche_Multiplication_glow_discharge_IV_curve.svg]]
*Current–voltage characteristic of a gas discharge (neon), illustrating the transition from Townsend (dark) discharge through normal and abnormal glow to arc discharge. (CC BY-SA 3.0, Wikimedia Commons)*

## Definition

Avalanche multiplication is the process by which a free electron drifting through a gas under a sufficiently strong [[Electric Field]] gains enough kinetic energy between collisions to ionize a gas molecule, liberating a secondary electron. Each secondary electron is itself accelerated and can ionize further molecules, producing an exponential cascade — an **electron avalanche**. This is the fundamental internal-gain mechanism in gaseous radiation detectors such as [[Micromegas]], [[GEM Detector]]s, and multi-wire proportional chambers ([[PPAC]]).

## Key Points

- **First Townsend coefficient $\alpha$**: The number of ionizing collisions per unit path length ($\text{cm}^{-1}$), depending on the reduced field $E/p$. Empirical form: $\alpha = A\, p\, \exp(-B\,p/E)$ where $A$, $B$ are gas-dependent constants.
- **Gas gain**: For a uniform field of length $d$, $G = e^{\alpha\, d}$. In wire chambers with radial field: $\ln G = \int \alpha(E(r))\, dr$. Typical proportional-mode gains are $10^3$–$10^4$; beyond $\sim 10^6$ enters [[Geiger Mode]].
- **Paschen curve**: The breakdown voltage $V_{\text{bd}}$ depends on $p \cdot d$; [[Micromegas]] exploits a narrow gap ($\sim 128\;\mu\text{m}$) near the Paschen minimum for stable high-gain operation.
- **Avalanche statistics**: Single-avalanche electron counts follow a **Polya distribution**; these fluctuations, together with the **Fano factor** for primary ionisation, set fundamental limits on [[Energy Resolution]].
- **Gas mixture & quenching**: Noble gases provide the ionisation medium; a quencher (e.g., [[Isobutane|isobutane]], CO$_2$, CF$_4$) absorbs UV photons to suppress photon feedback and secondary avalanches.

## Examples

- **[[Micromegas]]:** Amplification gap $\sim 128\;\mu\text{m}$, field $\sim 40\;\text{kV/cm}$, gain $\sim 10^4$ — fast signals ($\sim 100\;\text{ns}$) ideal for [[Time Projection Chamber]] readout.
- **Multi-Wire Proportional Chamber (MWPC):** Avalanche occurs in the $1/r$ field near thin anode wires ($\sim 20\;\mu\text{m}$ diameter); the original high-rate gaseous detector (Charpak, 1992 Nobel Prize).

## Related Concepts

- [[Electric Field]] — drives electron acceleration between collisions
- [[Ionizing Radiation]] — creates the primary electron–ion pairs that seed the avalanche
- [[Ionisation Chamber]] — operates below the avalanche threshold (unity gain)
- [[Geiger Mode]] — saturated avalanche regime with complete discharge of the detector
- [[Drift Velocity]] — electron transport velocity between ionizing collisions
- [[Diffusion]] — transverse and longitudinal spread of the electron cloud during drift
- [[Energy Resolution]] — limited by avalanche gain fluctuations
- [[Dead Time]] — recovery period after large avalanches or Geiger discharges
- [[Time Projection Chamber]] — primary application of avalanche-based gain stages
- [[Silicon Photomultiplier]] — array of [[Single-Photon Avalanche Diode]]s exploiting solid-state avalanche multiplication

## References

- Sauli, F. (2014). *Gaseous Radiation Detectors: Fundamentals and Applications.* Cambridge University Press.
- Blum, W., Riegler, W., & Rolandi, L. (2008). *Particle Detection with Drift Chambers.* 2nd ed., Springer.
- Giomataris, Y. et al. (1996). "MICROMEGAS: a high-granularity position-sensitive gaseous detector for high particle-flux environments." *Nucl. Instrum. Methods A* **376**, 29–35.
- Townsend, J. S. (1910). *The Theory of Ionization of Gases by Collision.* Constable & Co.
- Wikipedia: [Electron avalanche](https://en.wikipedia.org/wiki/Electron_avalanche), [Townsend discharge](https://en.wikipedia.org/wiki/Townsend_discharge).
