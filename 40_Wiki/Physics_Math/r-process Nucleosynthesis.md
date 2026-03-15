---
type: wiki
area: "[[Physics]]"
aliases:
  - r-process
tags:
  - nuclear-astrophysics
  - nucleosynthesis
  - nuclear-physics
created: 2026-03-13
last_reviewed:
next_review:
review_interval: 0
---
# r-process Nucleosynthesis
## Definition

The **rapid neutron capture process** (r-process) is a nucleosynthesis mechanism responsible for creating approximately half of all elements heavier than iron. It proceeds through a sequence of rapid neutron captures on seed nuclei, faster than $\beta^-$ decay, driving the nuclear composition far to the neutron-rich side of the chart of nuclides before decaying back to stability.

## Mechanism

1. **Seed nuclei** (typically iron-group, $A \sim 56$) are exposed to an extreme neutron flux ($n_n > 10^{20}$ cm$^{-3}$)
2. Neutron captures $(n, \gamma)$ proceed faster than $\beta^-$ decay timescales, pushing nuclei along isotopic chains toward the neutron drip line
3. At **waiting points** — nuclei where the [[Neutron Capture Cross Section|neutron capture cross section]] drops sharply (particularly at [[Shell closure|shell closures]] $N = 50, 82, 126$) — $\beta^-$ decay competes with further capture, incrementing $Z$ by one
4. After the neutron flux ceases, nuclei $\beta$-decay back toward stability, producing the observed r-process abundance peaks at $A \approx 80, 130, 195$

## Astrophysical Sites

- **Neutron star mergers** (kilonovae): confirmed by multi-messenger observation of GW170817 (gravitational waves + kilonova optical/IR emission)
- **Core-collapse supernovae** (neutrino-driven winds): debated; may contribute to lighter r-process elements ($A < 130$)
- **Collapsars** (jet-driven supernovae from black hole formation): proposed additional site

## Nuclear Physics Inputs

R-process network calculations require thousands of nuclear properties for unstable nuclei:
- [[Neutron Capture Cross Section|Neutron capture cross sections]] $(n, \gamma)$ - often accessible only via [[Surrogate Reaction|surrogate methods]]
- $\beta$-decay half-lives and $\beta$-delayed neutron emission probabilities
- Nuclear masses (binding energies) determining neutron separation energies
- Fission barriers and fission fragment distributions for the heaviest nuclei

## Connection to RIKEN Research

The [[OEDO]]-[[SHARAQ Spectrometer|SHARAQ]] system at [[RIKEN Nishina Center for Accelerator-Based Science (RNC)|RIKEN RIBF]] enables [[Surrogate Reaction|surrogate]] $(d,p)$ measurements on [[Radioactive Isotope Beam|RI beams]] to constrain $(n, \gamma)$ cross sections on r-process path nuclei. Key result: ${}^{130}$Sn neutron capture near the $N = 82$ shell closure (PRC, 2024).

## Discussion Log (2026-03-14)

### Naming: why "r-process"?

The "r" stands for **rapid** — named by contrast with the **s-process** (slow neutron capture). The classification was introduced by Burbidge, Burbidge, Fowler & Hoyle (B²FH, 1957). The distinction is purely about **neutron capture speed relative to $\beta^-$ decay**: in the r-process, captures overwhelmingly outpace decay; in the s-process, each capture is followed by decay back to stability before the next neutron arrives.

### Unpacking the mechanism (step 1)

- **$A \sim 56$, not $Z \sim 56$:** The seed nuclei have mass number $A \approx 56$ (protons + neutrons). $Z = 26$ for iron — if it were $Z \sim 56$, that would be barium
- **Neutron density vs [[Flux|neutron flux]]:** Step 1 quotes the neutron number density $n_n > 10^{20}$ cm⁻³. The actual flux is $\phi = n_n \cdot v$; at r-process thermal speeds ($\sim 10^9$ cm/s), this gives $\phi \sim 10^{29}$ cm⁻²s⁻¹ — vastly more intense than a research reactor ($\sim 10^{14}$ cm⁻²s⁻¹)
- **Why this density is extreme:** $10^{20}$ free neutrons/cm³ may seem modest compared to air ($\sim 10^{19}$ molecules/cm³), but free neutrons normally **do not exist** in bulk — they $\beta$-decay in $\sim$10 minutes. Having $10^{20}$ of them per cm³ requires a catastrophic astrophysical event. The total matter density in these environments reaches $10^{6}$–$10^{11}$ g/cm³
- **[[Reaction Rate]]:** What matters is the capture timescale: $R \propto n_n \cdot \sigma \cdot v$. At $n_n > 10^{20}$ cm⁻³, captures happen on **millisecond** timescales — far faster than $\beta^-$ decay ([[Half-Life|half-lives]] of seconds to minutes), which is precisely what makes it "rapid"

### Why iron seeds, not lighter nuclei?

Stars fuse H → He → C → O → ... → Fe over millions of years. Fusion **stops** at the iron group because this region contains the most tightly bound nuclei on the [[B_A curve|B/A curve]] (the true peak is ${}^{62}$Ni, but silicon burning preferentially produces ${}^{56}$Ni, which decays to ${}^{56}$Fe) — further fusion is endothermic. Iron-group nuclei therefore **accumulate as the ash** of stellar evolution. By the time a catastrophic event occurs (core collapse, neutron star merger), lighter nuclei like helium have been largely consumed. Iron is simply **what's available** when the neutron flood begins — and starting from $A \sim 56$ is far more efficient than building from $A \sim 4$.

## Related Concepts

- [[Neutron Capture Cross Section]]
- [[Surrogate Reaction]]
- [[Shell closure]]
- [[Radioactive Isotope Beam]]
- [[Binding Energy]]
- [[Half-Life]]

## References

- E. M. Burbidge, G. R. Burbidge, W. A. Fowler & F. Hoyle, "Synthesis of the Elements in Stars," *Rev. Mod. Phys.* **29**, 547 (1957) — the foundational B²FH paper classifying r- and s-processes
- A. G. W. Cameron, "Nuclear Reactions in Stars and Nucleogenesis," *Publ. Astron. Soc. Pac.* **69**, 201 (1957) — independent, contemporaneous classification
- ${}^{130}$Sn$(d,p)$ neutron capture measurement: *Phys. Rev. C* **110** (2024) — OEDO-SHARAQ surrogate result constraining the $N = 82$ r-process path
