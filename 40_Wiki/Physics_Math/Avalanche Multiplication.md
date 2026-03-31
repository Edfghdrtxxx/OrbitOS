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

### First Townsend Coefficient $\alpha$

- The **first Townsend ionization coefficient** $\alpha$ (units: $\text{cm}^{-1}$) gives the number of ionizing collisions per unit path length traveled by an electron along the [[Electric Field]] direction
- It depends on the reduced electric field $E/p$ (or $E/N$), where $E$ is the field strength, $p$ the gas pressure, and $N$ the number density
- Empirical parameterization (Townsend form):

$$\alpha = A\, p\, \exp\!\Bigl(-\frac{B\,p}{E}\Bigr)$$

where $A$ and $B$ are gas-dependent constants

### Gas Gain

- For a uniform field of length $d$ (e.g., the amplification gap in [[Micromegas]]):

$$G = e^{\alpha\, d}$$

- In a cylindrical geometry (wire chambers) with radially varying field $E(r)$:

$$\ln G = \int_{r_{\min}}^{r_{\max}} \alpha\bigl(E(r)\bigr)\, dr$$

- Typical operating gains: $10^3$–$10^4$ in proportional mode; gains beyond $\sim 10^6$–$10^8$ enter the [[Geiger Mode]] (saturated avalanche, loss of proportionality)

### Paschen-Like Considerations

- The **Paschen curve** relates the breakdown voltage $V_{\text{bd}}$ to the product $p \cdot d$ (pressure $\times$ gap distance), showing a minimum at an optimal $p\cdot d$
- Below the Paschen minimum, electrons undergo too few collisions to sustain an avalanche; above it, electrons lose energy to non-ionizing collisions before gaining enough for ionization
- [[Micromegas]] exploits a very narrow gap ($\sim 128\;\mu\text{m}$) at atmospheric pressure, operating near the Paschen minimum for stable, high-gain amplification

### Avalanche Statistics

- The number of electrons in a single avalanche follows a **Polya distribution** (generalization of the exponential / Furry distribution) due to stochastic fluctuations in ionization spacing
- These fluctuations set a fundamental limit on [[Energy Resolution]] in proportional counters, characterized by the **Fano factor** for primary ionization and the **single-electron gain variance** for the multiplication stage

### Gas Mixture Effects

- Noble gases (Ar, Ne, Xe) provide the primary ionization medium; a **quencher** (e.g., [[Isobutane|isobutane]], CO$_2$, CF$_4$) absorbs UV photons from de-excitation to suppress secondary avalanches and photon feedback
- The choice of gas mixture directly affects $\alpha$, maximum stable gain, [[Drift Velocity]], and [[Diffusion]] properties

## Examples

- **[[Micromegas]]:** Amplification gap $\sim 128\;\mu\text{m}$, field $\sim 40\;\text{kV/cm}$, gain $\sim 10^4$ — fast signals ($\sim 100\;\text{ns}$) ideal for [[Time Projection Chamber]] readout
- **[[GEM Detector]]:** Electrons avalanche inside $50$–$70\;\mu\text{m}$ holes in a kapton foil; multiple GEM stages can be cascaded for gains up to $\sim 10^5$ while suppressing ion backflow
- **Multi-Wire Proportional Chamber (MWPC):** Avalanche occurs in the $1/r$ field near thin anode wires ($\sim 20\;\mu\text{m}$ diameter); the original high-rate gaseous detector (Charpak, 1968 Nobel Prize)
- **[[Single-Photon Avalanche Diode]]:** Solid-state analog — a reverse-biased p–n junction above breakdown voltage triggers a self-sustaining avalanche from a single photon-generated carrier (operates in [[Geiger Mode]])

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
