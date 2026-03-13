---
type: wiki
tags:
  - nuclear-physics
  - reaction-mechanism
  - nuclear-astrophysics
created: 2026-03-13
---
# Surrogate Reaction
## Definition

A surrogate reaction is an indirect method for determining neutron-induced cross sections on unstable nuclei by using a different reaction that populates the same compound nucleus. The technique bypasses the need for a neutron beam impinging on a radioactive target -- which is impractical for short-lived isotopes -- by instead using a charged-particle reaction in inverse kinematics.

## Core Principle

To measure the cross section for $A(n, \gamma)B$, one uses a surrogate reaction such as $A(d, p)B^*$ that forms the same compound nucleus $B^*$. Under the Weisskopf-Ewing approximation (valid when the compound nucleus formation and decay are independent), the decay probabilities measured from the surrogate can be combined with calculated formation cross sections to extract the desired $(n, \gamma)$ cross section.

## Why It Matters

Many nuclei on the [[r-process Nucleosynthesis|r-process]] path have half-lives of seconds or less, making direct [[Neutron Capture Cross Section|neutron capture]] measurements impossible. Surrogate $(d,p)$ reactions on [[Radioactive Isotope Beam|RI beams]] in inverse kinematics provide the only experimental access to these cross sections. These data are critical inputs for astrophysical nucleosynthesis network calculations.

## Applications at RIKEN

The **SAKURA** project (Study of Astrophysical Key reactions in the Universe with low-energy RI beam Apparatus) at [[UTokyo CNS]] uses the [[OEDO]] beamline to produce low-energy RI beams (10--30 MeV/u) for surrogate $(d,p)$ measurements.

**Flagship result**: Imai et al. (PLB, 2024) measured ${}^{79}\text{Se}(d,p)$ to extract the ${}^{79}\text{Se}(n, \gamma)$ cross section -- relevant to nuclear waste transmutation of the long-lived fission product ${}^{79}$Se.

## Limitations

- The Weisskopf-Ewing approximation breaks down when spin-parity selectivity matters (low excitation energy, light nuclei)
- Requires careful modeling of the compound nucleus spin-parity population in the surrogate vs. direct reaction
- [[DWBA]] analysis needed to extract angular momentum transfer and constrain populated states

## Related Concepts

- [[Neutron Capture Cross Section]]
- [[r-process Nucleosynthesis]]
- [[Transfer Reactions]]
- [[OEDO]]
- [[SHARAQ Spectrometer]]
- [[Radioactive Isotope Beam]]
- [[DWBA]]
