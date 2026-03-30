---
area: "[[Physics]]"
tags: [classical-mechanics, forces]
created: 2026-03-30
last_reviewed:
next_review: 2026-03-30
review_interval: 0
---
# Non-conservative Force

## Schematics

![[Non-conservative_Force_graph.png]]
*Force vs time graph for friction: the force rises steeply during the static friction phase (blue), peaks, then drops to a lower steady kinetic friction level (red). This path- and velocity-dependent behavior is characteristic of non-conservative forces. (CC BY-SA 3.0, Wikimedia Commons)*

## Definition

A non-conservative force is a force for which the work done on a particle depends on the path taken between two points. The work around a closed loop is generally nonzero: $\oint \mathbf{F} \cdot d\mathbf{r} \neq 0$. No scalar potential energy function exists for such forces, so they cannot be written as $\mathbf{F} = -\nabla U$.

## Key Points

- **Path dependence:** The same start and end points can yield different amounts of work depending on the trajectory — longer paths through friction dissipate more energy
- **Energy dissipation:** Non-conservative forces convert mechanical energy into other forms (heat, sound, deformation), so total mechanical energy $E = T + U$ is **not** conserved
- **Work-energy modification:** With non-conservative forces present, $W_{\text{nc}} = \Delta E_{\text{mech}} = \Delta T + \Delta U$, where $W_{\text{nc}}$ is the work done by non-conservative forces
- **Nonzero curl:** In general $\nabla \times \mathbf{F} \neq 0$, though velocity-dependent forces like friction do not even admit a simple field description

## Examples

- **Kinetic friction:** $\mathbf{F}_f = -\mu_k N \hat{v}$, always opposes motion — the classic dissipative force
- **Air resistance / viscous drag:** $\mathbf{F} \propto -v$ (low speed) or $\mathbf{F} \propto -v^2$ (high speed)
- **Tension in a string with internal losses** and other contact forces with irreversible deformation

## Related Concepts

- [[Conservative Force]] — the complementary class where work is path-independent
- [[Stopping Power]] — energy loss rate of charged particles in matter (non-conservative)
- [[Bethe-Bloch Formula]] — describes the mean energy loss per unit path length
- [[Linear Energy Transfer]]
- [[Potential Energy Surface]] — exists only for [[Conservative Force|conservative forces]]
- [[Euler-Lagrange-Equation]] — generalized to include non-conservative forces via the Rayleigh dissipation function
- [[Lorentz Force]] — magnetic component $q\mathbf{v}\times\mathbf{B}$ does zero work (always perpendicular to velocity), making it neither conservative nor dissipative

## References

- Goldstein, Poole & Safko, *Classical Mechanics*, 3rd ed., Ch. 1
- Taylor, *Classical Mechanics*, Ch. 4
