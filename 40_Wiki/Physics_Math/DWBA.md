---
area: "[[Physics]]"
tags: [nuclear-reactions, reaction-theory]
created: 2026-03-07
last_reviewed:
next_review: 2026-03-07
review_interval: 0
---
# DWBA

## Definition

The Distorted Wave Born Approximation (DWBA) is a quantum-mechanical framework for calculating [[Differential Cross Section|differential cross sections]] of [[Direct Reactions]], treating the transfer or excitation process as a first-order perturbation while using optical-model potentials to generate distorted waves for the entrance and exit channels.

## Key Points

- "Distorted waves" means the incoming and outgoing scattering states are not plane waves but solutions of the optical-model Schrodinger equation, which accounts for nuclear absorption and refraction
- The "Born approximation" treats the reaction mechanism (nucleon transfer, excitation) to first order — valid when the reaction is weak compared to elastic scattering
- The calculated single-particle cross section $(d\sigma/d\Omega)_{\text{DWBA}}$ is compared to experiment to extract [[Spectroscopic Factor|spectroscopic factors]]: $C^2S = (d\sigma/d\Omega)_{\text{exp}} / (d\sigma/d\Omega)_{\text{DWBA}}$
- Requires inputs: optical-model parameters (entrance/exit channels), bound-state geometry (radius, diffuseness), and the transferred quantum numbers ($n, \ell, j$)
- Standard codes: DWUCK, FRESCO, TWOFNR

## Examples

- Calculating the angular distribution for $^{16}\text{O}(d,p)^{17}\text{O}$ to determine whether the transferred neutron occupies the $1d_{5/2}$ or $2s_{1/2}$ orbital (different $\ell$ values produce distinct diffraction patterns)

## Related Concepts

- [[Direct Reactions]]
- [[Transfer Reactions]]
- [[Knockout Reactions]]
- [[Spectroscopic Factor]]
- [[Differential Cross Section]]
- [[Optical Model]]

## References

- Satchler, G.R. *Direct Nuclear Reactions* (Oxford University Press, 1983)
- Thompson, I.J. & Nunes, F.M. *Nuclear Reactions for Astrophysics* (Cambridge University Press, 2009)