---
type: learning-progress
topic: "Displacement operator"
area: Quantum Mechanics
status: active
created: 2026-07-26
---
# Displacement operator — derivation

**Target form:** $D(\alpha)=e^{\alpha a^\dagger-\alpha^* a}$  
**Path:** guided derivation from HO ladder operators  
**Status:** **paused** — missing prerequisites; forked to separate notes

**Prerequisite threads (open these first):**
- [[2026-07-26-2112 Harmonic oscillator]]
- [[2026-07-26-2113 Ladder operators]]

**Known premises (learner):** Dirac notation, Hermitian operators  
**Missing:** harmonic-oscillator ladder operators $a$, $a^\dagger$

---

## Turn 1 — 2026-07-26 (learner)

> /learn displacement operator in quantum mechanics

### Tutor

We're going for a guided derivation of the displacement operator

$$
D(\alpha)=e^{\alpha a^\dagger-\alpha^* a}.
$$

Physically, $D(\alpha)$ is the **unitary that translates a state in phase space** by the complex amplitude $\alpha$. The cleanest way in is through the harmonic-oscillator ladder operators $a$ and $a^\dagger$, because the whole algebra of $D(\alpha)$ is built from $[a,a^\dagger]=1$.

Before we construct $D$, one checkpoint:

**Can you state what $a|n\rangle$ and $a^\dagger|n\rangle$ give, and what the commutator $[a,a^\dagger]$ is?**  
If those are rusty, say so and we'll do a 30-second recap first — no shame, that is the scaffolding the derivation stands on.

---

## Turn 2 — 2026-07-26 (learner)

> I don't understand what is harmonic-oscillator ladder operators, but I know Dirac notation and Hermitian operators.

> I think in this case, it is better to create two new notes to record ladder operators and harmonic oscillator respectively. /evolve-skills to record this lesson on the singularity I need.

### Tutor (process)

Agreed. Do not cram HO + ladder ops into this note. Forked:

| Thread | Path |
|--------|------|
| Harmonic oscillator | [[2026-07-26-2112 Harmonic oscillator]] |
| Ladder operators | [[2026-07-26-2113 Ladder operators]] |

Resume this displacement thread only after those foundations are usable.
