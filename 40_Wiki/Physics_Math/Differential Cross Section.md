---
area: "[[Physics]]"
tags: [nuclear-reactions, scattering]
created: 2026-03-07
last_reviewed:
next_review: 2026-03-07
review_interval: 0
---
# Differential Cross Section

## Definition

The differential cross section $d\sigma/d\Omega$ quantifies the probability of a scattering or reaction event per unit solid angle, measuring how the reaction yield varies as a function of the scattering angle $\theta$. It has units of area per steradian (typically mb/sr in nuclear physics).

## Key Points

- Related to the total cross section by integration: $\sigma = \int (d\sigma/d\Omega)\, d\Omega$
- In [[Direct Reactions]], the angular distribution shape encodes the transferred orbital angular momentum $\ell$ — different $\ell$ values produce distinct diffraction patterns
- Experimentally determined from: $\frac{d\sigma}{d\Omega} = \frac{N_{\text{detected}}}{N_{\text{beam}} \cdot n_{\text{target}} \cdot \Delta\Omega \cdot \epsilon}$, where $\epsilon$ is the detection efficiency
- Comparing measured $d\sigma/d\Omega$ with [[DWBA]] predictions is the standard method for extracting [[Spectroscopic Factor|spectroscopic factors]]
- Must be transformed between lab and center-of-mass frames using the Jacobian $d\sigma/d\Omega_{\text{CM}} = (d\sigma/d\Omega_{\text{lab}}) \cdot |d\Omega_{\text{lab}}/d\Omega_{\text{CM}}|$

## Examples

- A $(d,p)$ [[Transfer Reactions|transfer reaction]] with $\ell = 0$ transfer shows a forward-peaked angular distribution with no diffraction minimum, while $\ell = 2$ shows a characteristic peak at $\sim$20-30 degrees
- [[Particle Identification]] + angle reconstruction in a TPC enables measurement of differential cross sections for exotic beam experiments

## Related Concepts

- [[Direct Reactions]]
- [[DWBA]]
- [[Spectroscopic Factor]]
- [[Transfer Reactions]]
- [[Particle Identification]]
- [[Solid Angle]]

## References

- Krane, K.S. *Introductory Nuclear Physics* (Wiley, 1988)
- Satchler, G.R. *Direct Nuclear Reactions* (Oxford University Press, 1983)