---
type: learning-session
topic: Radioactive beams — projectile fragmentation (Exp. Techniques NP Ch. 10)
source: "[[ExperimentTechniquesNP_Chapter10-11]]"
status: active
updated: 2026-08-11
---
# Radioactive beams — projectile fragmentation

**Source:** `50_Resources/Physics/Courses/ExperimentTechniquesNP_Chapter10-11/ExperimentTechniquesNP_Chapter10-11.md` (Tanihata Ch. 10 excerpt; through §II.B.1 mid-sentence). Related callout already in note: Feynman “Why Momentum Distribution Matters” + Fig. F1.

**Index:** [[Progress-context]]

---

## Turn 1 — open (2026-08-07)

**User:** `/learn` on the chapter note (full path → Ch. 10–11 excerpt).

**Tutor:**

This note is Tanihata on **production and use of radioactive beams**, currently filled through projectile fragmentation + separation principles + target choice (text cuts mid §II.B.1). Prior work already parked a deep Feynman callout on why the fragment **momentum cloud** matters for separator acceptance and delivered intensity.

Nothing on RIB / fragmentation is in your learning index yet — all solid items are QM + English — so we start clean on this thread.

**Where are you with this material?** Pick the closest:
1. First pass — want a structured map of Ch. 10 before digging in  
2. Know the storyline; stuck on a specific piece (Goldhaber $\sigma$, target $A^{-1/3}$, $B\rho$ separation, angular acceptance, …)  
3. Can already teach most of §II.A–B; want a GRE-level check or a walk toward reacceleration / physics applications  

Reply with 1 / 2 / 3 (or your own anchor), and if 2 name the stuck sentence or equation.

---

## Turn 2 — Ch. 10 map (2026-08-07)

**User:** 1 (first pass — structured map)

**Tutor:**

### Ch. 10 at one glance

**Problem the chapter solves.** Classical nuclear experiments used *stable* beam + *stable* target → only the narrow valley of stability is well measured (radii, moments, scattering, reactions…). Radioactive ion beams (RIB) put a $\beta$-unstable nucleus in the **entrance channel**, so you can study structure and reactions far from stability (and astrophysical paths that never sit on stable ground).

**Two production routes** (both aim for beam energy high enough for *reactions*, not only decay spectroscopy):

| Route | Core idea | Ch. section |
|-------|-----------|-------------|
| **Secondary / in-flight** | Primary HI beam → production target → **projectile fragments** fly forward → **separator** selects $A,Z$ → secondary beam on reaction target | §II |
| **Reacceleration (ISOL-like)** | Produce radioactives (often stopped / ionized) → reaccelerate to desired energy | §III |

Your excerpt is thickest on §II; §III–IV are TOC + later text not fully in the file yet.

---

### §II Secondary-beam method — the working chain

```
primary beam  →  production target  →  fragment cloud (p, θ)  →  separator  →  pure secondary beam  →  physics target
```

**A. Projectile fragmentation** (why this reaction wins for in-flight RIB)

Three practical facts the text stresses:

1. **Many species**, including nuclei far from stability, with usable cross sections.  
2. Fragments leave with **nearly the projectile velocity**, in a **narrow forward cone** → high collection efficiency, “simple” magnetic separation.  
3. Fragmentation cross section is **roughly energy-independent** (once above the relevant scale).

**Why the momentum distribution is not optional.** Fragments form a cloud in $(p_\parallel, p_t)$. Goldhaber-style width:

$$\sigma(P_\parallel)=\sigma_0\sqrt{\frac{A_F(A_p-A_F)}{A_p-1}},\quad \sigma_0\sim 90~\mathrm{MeV}/c$$

Narrow cloud + high $p$ $\Rightarrow$ small lab angles $\theta\sim p_t/p_\parallel$ $\Rightarrow$ more of the yield fits inside the separator’s $(\Delta p,\Delta\Omega)$ acceptance. Your note’s Feynman callout already unpacks: **production rate** vs **delivered intensity** ($\varepsilon_\mathrm{collection}$), angle window vs $B\rho$ cut.

**B. Separation principles** (design checklist)

1. Target / reaction choice → keep $\sigma_p$ and $\sigma_\theta$ small.  
2. Separator **acceptance** as large as practical.  
3. Prefer **achromatic** delivery to the secondary target (momentum spread does not become a position smear at the physics focus).

**B.1 Target material** (excerpt ends here): low-$Z$ (e.g. Be) preferred — thicker for same $\Delta E$, yield $\propto A^{-1/3}$ favoring light targets, less multiple scattering / emittance growth.

**B.2–3** (TOC only in your file): separation methods (typically $B\rho$ + energy loss / ToF style) and facilities.

---

### §III Reacceleration — contrast only (map level)

Same goal (energetic radioactive beam), different trade: often better optical quality / energy control after reacceleration, but limited by production, ionization, half-life, and charge breeding — not “one shot through a fragment separator.”

---

### §IV Why anyone builds this (payoff map)

- **Structure:** neutron halo, thick neutron skin, exclusive reactions, isospin dependence of radii.  
- **Astrophysics:** hot CNO, Big Bang nucleosynthesis paths with unstable nuclei.  
- **Other uses of separators:** new isotopes, masses, magnetic moments of $\beta$-emitters (even when the “beam” is not used for a secondary reaction).

---

### What is *in* your note vs TOC

| In the markdown now | TOC but not fully extracted |
|---------------------|-----------------------------|
| §I intro, §II.A PF + Goldhaber, §II.B principles, start of target choice | §II.B.2–3 methods/facilities, §III reacceleration, §IV applications |

---

**Check (one step):** In your own words — why does “fragments have almost the same *velocity* as the projectile” make magnetic separation practical, even though many different $A,Z$ are produced at once?

---

## Turn 3 — check: same velocity → separator (2026-08-11)

**User:** When the velocity of all the fragments are almost the same, it is possible to use separator, such as mass spectrometer, to separate and identify them precisely, since the fundamental working mechanism of the spectrometer is based on momentum.

**Tutor:**

**What's solid.** Same $v$ for (almost) every fragment → magnetic / recoil-mass separation becomes practical; the line selects on a momentum-related quantity, not on “species labels” written on the ions.

**One refinement.** The dipole does not select raw momentum $p$ alone. It selects **magnetic rigidity**

$$B\rho \propto \frac{p}{q}.$$

With nearly common velocity $v$ (or $\beta$), the momenta of different species are *not* equal — they scale with mass:

$$p \approx A\,m_u\,v \quad \Rightarrow \quad B\rho \propto \frac{A}{q}$$

(for fully stripped ions, $q=Ze$, so $B\rho \propto A/Z$). Different $(A,Z)$ therefore land at different $B\rho$ **because** $v$ is shared and $A$ (and $q$) differ. If each species had a wildly different $v$, the product $p=mv$ would scramble and $B\rho$ would no longer map cleanly onto $A/q$.

(“Mass spectrometer” is the right family of idea; in RIB language the tool is a **fragment separator** / magnetic spectrometer — same $p/q$ principle.)

**Check (one step):** Fully stripped $^{11}\mathrm{Be}$ and $^{11}\mathrm{C}$ leave the target at the *same* $\beta$ as the primary beam. Which has the larger $B\rho$, and by roughly what factor?

---

## Turn 4 — $B\rho$ check locked (2026-08-11)

**User:** $^{11}\mathrm{Be}$ has the larger $A/Z$ ratio, so it has the larger $B\rho$ by roughly $3:2$.

**Tutor:**

**Locked.** Fully stripped: $^{11}\mathrm{Be}$ $\Rightarrow A/Z=11/4$, $^{11}\mathrm{C}$ $\Rightarrow 11/6$. Same $\beta$ $\Rightarrow$

$$\frac{(B\rho)_{\mathrm{Be}}}{(B\rho)_{\mathrm{C}}}=\frac{11/4}{11/6}=\frac{3}{2}.$$

So $^{11}\mathrm{Be}$ is stiffer by $3:2$ — dipole + slits can put one species through and dump the other even though both fly at the same speed.

**Bundle so far (say-back complete):**
1. Projectile fragments $\approx$ projectile velocity $\Rightarrow$ forward, collectable.
2. Same $v$ $\Rightarrow$ $B\rho\propto A/q$ (fully stripped: $A/Z$) separates species.
3. Cloud width (Goldhaber) still sets *how much* of that yield fits the separator acceptance.

---

**Where next?** Pick:
1. Dig: Goldhaber $\sigma$ + why high energy helps relative width / angular acceptance  
2. Dig: target choice (low-$Z$, $A^{-1/3}$, $\mathrm{d}E/\mathrm{d}x$ trade)  
3. Map onward: separation methods / achromatic delivery (§II.B.2–3)  
4. GRE-style mini-drill on what you have  
5. Stop here for now
