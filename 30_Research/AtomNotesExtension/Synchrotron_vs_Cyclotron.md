---
type: research
area: "[[Physics]]"
tags: [accelerator-physics, nuclear-physics, comparison]
created: 2026-03-13
sources:
  - "[[Synchrotron]]"
  - "[[Cyclotron]]"
---
# Synchrotron vs Cyclotron

## At a Glance

| Property | [[Cyclotron]] | [[Synchrotron]] |
|---|---|---|
| Definition | Constant $B$, fixed RF frequency, spiral orbit outward | Ramping $B$, variable RF frequency, fixed-radius orbit |
| Key formula | $f_c = \dfrac{qB}{2\pi m}$ (non-relativistic) | $B\rho = p/q$ maintained at design radius |
| Orbit geometry | Expanding spiral from centre to extraction radius | Fixed closed orbit in a narrow ring |
| Energy regime | Low-to-medium ($\lesssim 1\;\text{GeV/u}$ for heavy ions) | Medium-to-ultra-high (up to $\text{TeV}$) |
| Relativistic limit | Resonance breaks as $\gamma$ rises; isochronous variant partially compensates | No intrinsic limit — $B$ and $f_\text{RF}$ track $\gamma$ continuously |
| Magnet design | Large solid dipole covering full orbit area | Ring of discrete bending + focusing magnets |
| Beam structure | Continuous (CW) or quasi-CW | Pulsed (fill → accelerate → extract cycle) |
| Typical use case | RIB production, medical isotopes, proton therapy | High-energy physics, heavy-ion storage rings, synchrotron light sources |

## Definition Comparison

A [[Cyclotron]] exploits the fact that, non-relativistically, the orbit frequency $f_c = qB/(2\pi m)$ is independent of energy — so a single fixed RF frequency accelerates particles on every half-turn as they spiral outward through a uniform magnetic field. The machine is conceptually simple but hits a wall once $v$ becomes a significant fraction of $c$: the relativistic mass increase $\gamma m$ lowers $f_c$, and the particle slips out of phase with the RF. The **isochronous cyclotron** partially solves this by radially shaping $B(r)$ so that $B(r)\propto\gamma(r)$, restoring constant $f_c$.

A [[Synchrotron]] sidesteps the relativistic limit entirely. Instead of a single large magnet, it uses a ring of discrete dipoles whose field ramps in time to keep the orbit at a fixed radius as the particle gains energy. The RF frequency also ramps (or stays fixed once $v \approx c$). This decoupling of orbit radius from energy means synchrotrons can reach arbitrarily high energies — limited only by magnet strength and ring circumference.

## Mathematical Relationships

Both machines obey the same underlying relation for circular motion of a charged particle:

$$qvB = \frac{\gamma m v^2}{r} \quad\Longrightarrow\quad B r = \frac{p}{q} = \frac{\gamma m v}{q}$$

**Cyclotron (non-relativistic, $\gamma \approx 1$):**

$$r = \frac{mv}{qB} \propto v, \qquad f_c = \frac{qB}{2\pi m} = \text{const}$$

Energy grows with radius: $T = \frac{q^2 B^2 r^2}{2m}$, and maximum energy is set by the pole radius $R$.

**Synchrotron ($r = R_0 = \text{const}$):**

$$B(t) = \frac{p(t)}{qR_0}, \qquad f_\text{RF}(t) = h \cdot \frac{v(t)}{2\pi R_0}$$

where $h$ is the harmonic number. $B$ must ramp from injection to extraction values; the ratio $B_\text{max}/B_\text{min}$ (dynamic range) is a key design parameter.

**Connecting limit:** At low energy ($\gamma \to 1$), a synchrotron with $R_0$ fixed and $B$ ramping is formally equivalent to extracting from a cyclotron at the single radius $R_0$ — the physics is identical, only the engineering differs.

## When to Use Which

- **Choose a [[Cyclotron]] when:**
  - You need continuous (CW) beam — e.g., low-energy nuclear reactions requiring high beam current
  - The required energy is modest ($\lesssim 500\;\text{MeV}$ for protons, $\lesssim 1\;\text{GeV/u}$ for heavy ions)
  - Compactness matters — medical isotope cyclotrons fit in a hospital basement
  - You are producing [[Superconducting Electron Cyclotron Resonance|ECR]]-injected radioactive ion beams via projectile fragmentation (e.g., RIBF at [[RIKEN Nishina Center for Accelerator-Based Science (RNC)|RIKEN]], HIRFL at [[Institute of Modern Physics|IMP]])

- **Choose a [[Synchrotron]] when:**
  - You need high or ultra-high energy ($\text{GeV}$ to $\text{TeV}$)
  - Variable extraction energy is required (ramp to any intermediate $B$)
  - You want a storage ring for beam cooling, accumulation, or internal-target experiments (e.g., CSR at [[Institute of Modern Physics|IMP]])
  - The application is synchrotron radiation / light-source science (electron synchrotrons)
  - Pulsed beam is acceptable

- **Hybrid chains** are common: a cyclotron serves as the injector (providing high-current, moderate-energy beam) and a synchrotron boosts to the final energy — e.g., the HIRFL-CSR complex at IMP.

## Related Concepts

- [[Bethe-Bloch Formula]] — energy loss of the accelerated beam in targets and detectors
- [[Superconducting Electron Cyclotron Resonance]] — ECR ion sources inject into both cyclotrons and synchrotrons
- [[Phase Stability]] — the principle that keeps bunched beams stable in synchrotrons
- [[Synchrotron Radiation]] — photon emission by relativistic electrons in bending magnets
- [[Lorentz Force]] — the fundamental force governing circular orbits in both machines
- [[Fermi energy]] — sets the nuclear energy scale relevant to beam-target interactions
- [[Institute of Modern Physics]] — operates both cyclotron (HIRFL) and synchrotron (CSR) facilities
- [[RIKEN Nishina Center for Accelerator-Based Science (RNC)]] — operates the world's most powerful RI beam factory (cyclotron-based)