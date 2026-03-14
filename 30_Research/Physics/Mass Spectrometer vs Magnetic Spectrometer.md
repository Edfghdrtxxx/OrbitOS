---
area: "[[Physics]]"
tags: [nuclear-physics, instrumentation, spectrometer, comparison]
created: 2026-03-14
last_reviewed:
next_review: 2026-03-14
review_interval: 0
---
# Mass Spectrometer vs Magnetic Spectrometer

## Definition

A [[Magnetic Spectrometer]] and a [[Mass Spectrometer]] both exploit the [[Magnetic Rigidity]] relation $B\rho = p/q$ to bend charged particles in magnetic fields, but they answer fundamentally different experimental questions: the magnetic spectrometer measures **momentum** ($p/q$) when the particle identity is already known, while the mass spectrometer measures **mass** ($m/q$) when the particle identity is unknown or its mass is not precisely determined.

## Key Points

- **Magnetic spectrometer** — you **know** the particle (species, charge state); you want its **kinematics** (momentum, scattering angle, excitation energy via missing mass). Used in reaction spectroscopy: [[SHARAQ Spectrometer]], Grand Raiden at [[RCNP]], and the S800 at NSCL/FRIB
- **Mass spectrometer** — you **do not know** the mass precisely; you want to **determine** $m/q$. Techniques include [[Penning Trap]] cyclotron-frequency measurement ($\omega_c = qB/m$), storage-ring mass spectrometry (IMS/SMS at CSRe, [[Institute of Modern Physics]]), and combined [[Time-of-Flight]] + [[ΔE-E Method]] + $B\rho$ at [[BigRIPS]]
- **Shared physics**: both rely on $B\rho = p/q$; the distinction is whether the unknown is the momentum (magnetic spectrometer) or the mass (mass spectrometer)
- **The overlap — BigRIPS**: [[BigRIPS]] acts simultaneously as an in-flight [[Isotope Separation]] separator *and* a [[Particle Identification]] device, combining $B\rho$, [[Time-of-Flight]], and [[ΔE-E Method]] to identify exotic nuclei event-by-event — making it function as both separator and mass identifier
- Resolution emphasis differs: magnetic spectrometers optimize momentum resolving power ($p/\Delta p \sim 15000$ for SHARAQ), while mass spectrometers optimize mass precision ($\delta m/m \sim 10^{-9}$ for Penning traps)

## Examples

- Grand Raiden performs $(p,p')$ inelastic scattering at high energy resolution ($\Delta E \sim 30$ keV) — the proton identity is known, and the spectrometer extracts the excitation-energy spectrum of the target nucleus
- The CSRe storage ring at IMP measures revolution periods of exotic ions produced by [[Projectile Fragmentation]] to determine their masses with ~10 keV uncertainty — here the mass is the unknown

## Related Concepts

- [[Magnetic Spectrometer]]
- [[Mass Spectrometer]]
- [[Magnetic Rigidity]]
- [[BigRIPS]]
- [[Particle Identification]]
- [[Time-of-Flight]]
- [[ΔE-E Method]]
- [[Penning Trap]]
- [[SHARAQ Spectrometer]]
- [[Isotope Separation]]
- [[Binding Energy]]
- [[Isochronous Mass Spectrometry]]
- [[Schottky Mass Spectrometry]]

## References

- K. Blaum, "High-accuracy mass spectrometry with stored ions," Physics Reports 425 (2006) 1–78
- T. Kubo, "In-flight RI beam separator BigRIPS at RIKEN and elsewhere in Japan," Nuclear Instruments and Methods B 204 (2003) 97
