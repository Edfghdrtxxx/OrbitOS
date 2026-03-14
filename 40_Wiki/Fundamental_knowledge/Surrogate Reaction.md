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

> [!Feynman]- Feynman Technique
> **The goal:** Measure ${}^{79}\text{Se}(n,\gamma)$ — how readily ⁷⁹Se captures a neutron.
>
> **The problem:** You'd need a ⁷⁹Se *target*. But ⁷⁹Se is radioactive — you can't accumulate enough of it to make a foil and shoot neutrons at it. The experiment is physically impossible in normal kinematics.
>
> **The workaround — two ideas stacked together:**
>
> 1. **Inverse kinematics** solves the target problem. Flip the setup: accelerate ⁷⁹Se into a *beam* and slam it into a stable deuterium (CD₂) target. The RI beam only needs to survive nanoseconds in flight — even nuclei with half-lives of seconds are fine. *(This is the part you simulate in LISE++ — fragment production, energy degradation through [[OEDO]], beam purity.)*
>
> 2. **Surrogate substitution** solves the neutron problem. You wanted ${}^{79}\text{Se} + n$, but now you're doing ${}^{79}\text{Se} + d$. A deuteron is a loosely-bound $n + p$. In the $(d,p)$ reaction, the neutron is transferred to ⁷⁹Se while the proton flies away — so the ⁷⁹Se *did* capture a neutron, just one that was delivered inside a deuteron instead of as a free beam. The compound nucleus ⁸⁰Se* is formed either way.
>
> **Why this is valid (Weisskopf-Ewing):** The compound nucleus is so highly excited that it "forgets" how it was formed. Its decay probabilities ($\gamma$-emission, fission, etc.) depend only on its excitation energy, not on whether the neutron arrived freely or via $(d,p)$. So you measure the decay branching from the surrogate and combine it with *calculated* formation cross sections → out comes the desired $(n,\gamma)$ cross section.
>
> **When it breaks:** At low excitation energy or for light nuclei, specific spin-parity states dominate. The $(d,p)$ reaction populates a *different* spin-parity distribution than $(n,\gamma)$ would — the nucleus *does* remember how it was formed. You then need [[DWBA]] to model the angular momentum transfer and correct for this mismatch.

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
