---
type: resource
topic: "Paper Writing — PID Parameter Selection"
date: 2026-03-06
tags:
  - paper-writing
  - pid
  - nuclear-physics
---
# Discussion Log

## 2026-03-06 — A/Z vs ΔA/A in Abstract ([[dE-dx]]-based [[Particle Identification|PID]])

**Context:** Abstract sentence under review:

> "Conventional particle identification, which relies on cuts in aggregate [[dE-dx|dE/dx]]-vs-E space, degrades as the mass-to-charge ratio difference Δ(A/Z) decreases…"

**Issue raised:** Gemini flagged that Δ(A/Z) is the governing parameter for [[Magnetic Rigidity|Bρ]]-[[Time-of-Flight|TOF]] identification, not for [[dE-dx|dE/dx]]-based PID.

### Investigation Findings

1. **Tassan-Got (NIM B194, 2002)** — gold-standard [[ΔE-E Method|ΔE-E]] PID reference — derives [[Stopping Power|stopping power]] as `dE/dX = Z² f(E/A)`. The identification parameter extracted from (ΔE, E) pairs is **Z²Aᵘ** (μ ≈ 1). A/Z never appears in this formalism.

2. **[[Range-Energy Relation]]** in [[Time Projection Chamber|TPCs]]: `R = (A/Z²) G(E/A)`. The scaling factor is **A/Z²**, not A/Z.

3. **A/Z belongs to [[Magnetic Rigidity|magnetic rigidity]]**: Bρ = p/(Ze) ∝ A/Z at fixed velocity. This is the [[Magnetic Rigidity|Bρ]]-[[Time-of-Flight|TOF]] parameter (e.g., [[BigRIPS]] at [[RIKEN Nishina Center for Accelerator-Based Science (RNC)|RIKEN]]).

4. **For same-Z isotopes** (all comparisons in this paper), Δ(A/Z)/mean(A/Z) ≡ ΔA/mean(A), so the ranking of difficulty is numerically equivalent — the sentence is not wrong in practice, but attributes the physics to the wrong parameter.

5. **Counterexample:** d (A/Z=2) and ⁴He (A/Z=2) have identical A/Z but Z²A = 2 vs 16 — trivially separated in [[dE-dx|dE/dx]]-E space. This breaks the A/Z narrative for cross-element comparisons.

### Decision

Rather than engaging in precise [[Bethe-Bloch Formula|Bethe-Bloch]] parameterization in the abstract, soften the conventional-method critique to focus on practical drawbacks (labor-intensive, scalability, information loss) and pivot quickly to introducing the proposed framework. Detailed physics of [[Isotope Separation|isotope separation]] is already covered in the Introduction (§1, paragraphs 2–3).
