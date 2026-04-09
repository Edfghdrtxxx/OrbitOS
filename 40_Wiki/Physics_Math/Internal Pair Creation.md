---
area: "[[Physics]]"
tags: [nuclear-physics, electromagnetic-transitions, pair-creation]
created: 2026-04-03
last_reviewed:
next_review: 2026-04-03
review_interval: 0
---
# Internal Pair Creation

## Schematics

*No suitable open-license schematics found on Wikimedia Commons for this topic.*

## Definition

Internal pair creation (IPC), also called internal pair conversion, is a nuclear de-excitation process in which an excited nucleus transitions to a lower energy state by emitting a **virtual photon** that converts into an [[Pair Production|electron-positron pair]] ($e^+e^-$) within the [[Electric Field|Coulomb field]] of the nucleus itself. Unlike external [[Pair Production]], no real photon is involved — the virtual photon is an intermediate state of the electromagnetic interaction between the nucleus and the created pair.

> [!Feynman]- Why a "Virtual Photon"?
> **Q:** Why we need a "virtual photon" schematic to explain the process?
> **Language note:** More natural phrasing: *"Why do we need the 'virtual photon' picture to explain this process?"* — add auxiliary "do" for question grammar; "schematic" → "picture" (schematic usually means a diagram; here you mean the conceptual framework).
>
> Think of it this way. In quantum electrodynamics (QED — the theory that describes how charged particles and light interact), there is a strict rule: **charged matter never creates or destroys other charged matter "directly."** Every electromagnetic interaction must be carried by a photon — that is how the electromagnetic force works at the quantum level.
>
> So the nucleus cannot just "hand" its extra energy to an electron-positron pair out of nothing. Instead, the energy first becomes a photon, and *that* photon then converts into the $e^+e^-$ pair. This is the only language QED allows.
>
> But here is the key twist: that photon never escapes to a detector. It is created and consumed inside the same process — born and gone in the same instant. That is exactly what "virtual" means: it is a real participant in the calculation, but not something you can ever catch and measure on its own. A real photon satisfies $E = pc$; a virtual one does not have to — it can carry any combination of energy and momentum that the process demands.
>
> Why bother with this seemingly invisible middleman? Because without it, we cannot calculate the probability of the process correctly. The virtual photon carries all the quantum numbers (spin, parity, multipolarity) from the nuclear transition, and those quantum numbers determine *how* the $e^+e^-$ pair comes out — their angular distribution, energy sharing, and total rate. Remove the virtual photon from the picture, and you lose the machinery that connects "what the nucleus did" to "what the detectors see."
>
> Here is what trips people up: the virtual photon is not a "real thing flying through space" — it is a bookkeeping tool that encodes the electromagnetic interaction. But it is not optional bookkeeping. It is the *only* consistent way QED lets us describe one chunk of charge-neutral matter (the nucleus) creating another chunk of charge-neutral matter (the $e^+e^-$ pair) through the electromagnetic force.

## Key Points

- Along with [[Internal Conversion|internal conversion]] (IC), IPC is one of only **two electromagnetic channels** available for [[E0 Transition|E0 transitions]] ($0^+ \to 0^+$), since single [[Gamma Ray|gamma-ray]] emission is strictly forbidden for $\Delta J = 0$, no parity change. IPC is the only channel that produces an $e^+e^-$ pair
- The process requires a minimum transition energy of $E_\text{tr} > 2m_e c^2 \approx 1.022\;\text{MeV}$ to produce the $e^+e^-$ pair
- The IPC coefficient $\Omega$ (ratio of pair emission rate to gamma emission rate) increases with transition energy and [[Quantum Numbers|multipolarity]], and scales roughly as $Z^2$ with the atomic number
- For non-E0 transitions, IPC competes with [[Gamma Ray|gamma emission]] and [[Internal Conversion|internal conversion]] as a de-excitation mechanism, but is typically much less probable except at high transition energies
- IPC is a key experimental signature for identifying [[Low-lying 0+ Excited State|low-lying $0^+$ excited states]] and probing [[Deformation Coexistence|shape coexistence]] in nuclei

## Examples

- The $0^+_2 \to 0^+_1$ transition in $^{16}\text{O}$ at $E_x = 6.05\;\text{MeV}$ is a classic $E0$ transition observable only via IPC (or internal conversion to atomic electrons). Measuring the $e^+e^-$ opening angle and energy sharing provides the [[Nuclear Matrix Element|monopole matrix element]] $\rho^2(E0)$
- In [[HPGe Detector|germanium detector]] arrays, IPC events produce characteristic signatures: the $e^+$ annihilates producing two 511 keV [[Gamma Ray|gamma rays]] in [[Coincidence Detection|coincidence]], enabling identification of E0 transitions in [[Gamma Spectroscopy|spectroscopy]] experiments

## Related Concepts

- [[E0 Transition]]
- [[Pair Production]]
- [[Nuclear Transition]]
- [[Gamma Ray]]
- [[Gamma Spectroscopy]]
- [[Low-lying 0+ Excited State]]
- [[Deformation Coexistence]]
- [[Nuclear Matrix Element]]
- [[Internal Conversion]]
- [[Binding Energy]]
- [[Coincidence Detection]]

## References

- Kibedi, T. & Spear, R.H. "Electric monopole transitions between $0^+$ states for nuclei throughout the periodic table." *Atomic Data and Nuclear Data Tables* (2005)
- Krane, K.S. *Introductory Nuclear Physics*, Chapter 10 — Electromagnetic transitions. Wiley (1988)
