---
area: "[[Physics]]"
tags:
  - classical-mechanics
  - rotating-frames
  - kinematics
  - review/physics
created: 2026-06-12
---
# Fictitious Forces

## Schematics

![[Fictitious_Forces_schematic.svg|1000]]
*Trajectory of a ball rolling on a rotating disc. **Left (external/inertial observer):** the ball moves in a straight line. **Right (rotating observer):** the same motion appears as a curved path, deflected by the Coriolis force — illustrating that the force is an artifact of the rotating frame. (CC BY-SA 4.0, Wikimedia Commons)*

![[Fictitious_Forces_diagram.svg|1000]]
*Coriolis force (red arrows) acting on air flowing around a low-pressure area. In the rotating Earth frame, the inward pressure-gradient force (blue) is balanced by the outward-deflecting Coriolis force, producing rotational (geostrophic) flow. (CC BY-SA 3.0, Wikimedia Commons)*

## Definition

**Fictitious forces** (also *pseudo-forces*, *inertial forces*, or *d'Alembert forces*) are apparent forces that must be introduced to make [[Newton's Laws of Motion|Newton's second law]] hold in a **non-inertial** (accelerating or rotating) [[Reference Frame|reference frame]]. They have no physical agent and arise purely from the acceleration of the frame itself; in an [[Inertial Frame of Reference|inertial frame]] they vanish. The two most important examples in a uniformly rotating frame are the **centrifugal force** and the **Coriolis force**.

## Key Points

- **General form (rotating frame):** For a frame rotating with angular velocity $\vec{\Omega}$, the total fictitious force on a mass $m$ is
$$\vec{F}_{\text{fict}} = \underbrace{-m\,\vec{a}_{0}}_{\text{translational}} \;\underbrace{-\,m\,\vec{\Omega}\times(\vec{\Omega}\times\vec{r})}_{\text{centrifugal}} \;\underbrace{-\,2m\,\vec{\Omega}\times\vec{v}_{\text{rot}}}_{\text{Coriolis}} \;\underbrace{-\,m\,\frac{d\vec{\Omega}}{dt}\times\vec{r}}_{\text{Euler}}$$
where $\vec{v}_{\text{rot}}$ is the velocity measured in the rotating frame and $\vec{a}_0$ the translational acceleration of the frame's origin.
- **Centrifugal force:** $\vec{F}_{\text{cf}} = -m\,\vec{\Omega}\times(\vec{\Omega}\times\vec{r}) = m\,\Omega^{2}\vec{r}_{\perp}$, directed radially *outward* with magnitude $m\Omega^{2}r_{\perp}$ (where $r_{\perp}$ is the distance from the rotation axis). It acts on *all* bodies in the frame regardless of their motion.
- **Coriolis force:** $\vec{F}_{\text{Cor}} = -2m\,\vec{\Omega}\times\vec{v}_{\text{rot}}$, with magnitude $2m\Omega v_{\text{rot}}\sin\theta$ ($\theta$ = angle between $\vec{\Omega}$ and $\vec{v}_{\text{rot}}$). It acts *only* on bodies moving within the frame and is always perpendicular to their velocity, so it does no work.
- **Proportional to mass:** Every fictitious force scales with $m$, so it produces the same acceleration on all bodies — mathematically indistinguishable from a real gravitational field (the basis of Einstein's [[Equivalence Principle]]).
- **Frame-dependent, not [[Conservative Force|conservative]] in general:** The Coriolis term is velocity-dependent and resembles a [[Non-conservative Force|non-conservative force]]; the centrifugal term, by contrast, derives from an effective potential $-\tfrac{1}{2}m\Omega^{2}r_{\perp}^{2}$.

## Examples

- **Earth's rotation:** The Coriolis force deflects winds, ocean currents, and long-range projectiles — clockwise in the Northern Hemisphere, counter-clockwise in the Southern — and governs cyclonic circulation. The centrifugal force flattens Earth into an oblate spheroid and slightly reduces apparent gravity at the equator.
- **Foucault pendulum:** Its slowly rotating swing plane is a direct visualization of the Coriolis force in Earth's rotating frame.
- **Carousel / spinning disc:** A person on a merry-go-round feels thrown outward (centrifugal); a ball rolled across it curves sideways (Coriolis), as in the schematic above.

## Related Concepts

- [[Inertial Frame of Reference]]
- [[Reference Frame]]
- [[Centripetal Force]]
- [[Angular Momentum]]
- [[Newton's Laws of Motion]]
- [[Euler Force]]
- [[Equivalence Principle]]
- [[Non-conservative Force]]

## References

- Goldstein, Poole & Safko, *Classical Mechanics*, 3rd ed., Ch. 4–5 (rotating frames, Coriolis effect).
- Taylor, *Classical Mechanics* (2005), Ch. 9 (non-inertial reference frames).
- Marion & Thornton, *Classical Dynamics of Particles and Systems*, Ch. 10.
