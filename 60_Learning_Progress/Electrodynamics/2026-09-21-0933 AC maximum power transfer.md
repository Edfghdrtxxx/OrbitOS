---
type: learning-progress
topic: "AC maximum power transfer"
area: Electrodynamics
status: in-progress
created: 2026-09-21
tags:
  - physics
  - electrodynamics
  - ac-circuits
  - impedance
  - maximum-power-transfer
  - gre-physics
---
# AC maximum power transfer — conjugate match $X_\ell = -X_g$

**Why this note exists:** Missed GRE-style AC maximum-power-transfer item (guessed; 598 s vs target 103 s). Generator $R_g + j X_g$ feeds a passive load $R_g + j X_\ell$; asked for the $X_\ell$ that maximizes transferred power.

**Target:**
1. Recover why leftover series reactance suppresses $|I|$ without contributing to average power $P = I_{\mathrm{rms}}^2 R$.
2. State the conjugate-match condition $Z_\ell = Z_g^*$ and why, with $R_\ell$ already fixed at $R_g$, only $X_\ell = -X_g$ remains.
3. Distinguish the trap $X_\ell = 0$ (purely resistive *load*) from a purely resistive *loop*.

**Active 2026-09-21.** Turn 5: "no heat $\Rightarrow$ $|I|$ unchanged" is wrong. Voltage-budget carrier ($V = V_R + V_L$).

### Prior context
- **Already computable:** Extra series $R$ lowers $I$ (harder fight). $P = I_{\mathrm{rms}}^2 R_\ell$.
- **What broke:**
- **New object had to:**

---

## Context (image)

**Transcript:**

An alternating current electrical generator has a fixed internal impedance $R_g + j X_g$ and is used to supply power to a passive load that has an impedance $R_g + j X_\ell$, where $j = \sqrt{-1}$, $R_g \neq 0$, and $X_g \neq 0$. For maximum power transfer between the generator and the load, $X_\ell$ should be equal to

- A  $0$
- B  $X_g$
- C  $-X_g$
- D  $R_g$
- E  $-R_g$

Incorrect — the answer is C. +2 XP.

598 s — over pace (target 103 s).

Your self-assessment: Guessed · Too slow.

SOLUTION

By the AC maximum-power-transfer theorem the load impedance must be the complex conjugate of the source impedance. The source is $R_g + j X_g$, so the matched load is $R_g - j X_g$; since the load resistance is already fixed at $R_g$, the only condition left is on the reactance, $X_\ell = -X_g$. This makes the total series reactance $j(X_g + X_\ell) = 0$, leaving a purely resistive loop that maximizes the current and hence the delivered power, giving choice (C).

**Visual / marks:** Option A has a reddish/pink selected background (chosen wrong answer). Option C has a green background (correct). Red banner: "Incorrect — the answer is C". Timing chip "598 s — over pace (target 103 s)". Self-assessment chip "Guessed · Too slow". SOLUTION box sits below.

---

## Turns

### Turn 1 — 2026-09-21 (learner)

> [Image: GRE AC generator / max power transfer MCQ]
>
> An alternating current electrical generator has a fixed internal impedance $R_g + j X_g$ and is used to supply power to a passive load that has an impedance $R_g + j X_\ell$, where $j = \sqrt{-1}$, $R_g \neq 0$, and $X_g \neq 0$. For maximum power transfer between the generator and the load, $X_\ell$ should be equal to
>
> A  $0$
>
> B  $X_g$
>
> C  $-X_g$
>
> D  $R_g$
>
> E  $-R_g$
>
> Incorrect — the answer is C. Guessed · Too slow (598 s / target 103 s). Selected A.

### Tutor

You already know the DC result: maximum power into the load when $R_L = R_{\mathrm{th}}$. Average AC power is still only $P = I_{\mathrm{rms}}^2 R_\ell$ — a reactance stores and returns energy each cycle, so it dissipates nothing.

You picked $X_\ell = 0$. The generator already has $X_g \neq 0$ sitting in series, and this problem locks $R_\ell$ at $R_g$. If you leave that $X_g$ uncancelled, what happens to $|I|$ — and therefore to $P$ — compared with cancelling it?

### Turn 2 — 2026-09-21 (learner)

> WHy haven't you noticed the 9-20 evolution lession?
> 1. I don't know what the DC result is. What is the DC? What is DC result?
> 2. The answer I picked is my guess.
> 3. I have no idea about this. I have no fundamental knowledge on this part.

### Tutor

You're right: I assumed a prior you don't have, treated a guess as a theory, and dumped Turn 1 into the terminal against the 2026-09-20 lesson. "DC" just means constant voltage — a battery — with no inductors or capacitors. The "DC result" was the purely-resistive theorem $R_L = R_{\mathrm{source}}$ for maximum load power. That is not in your toolkit. That frame is dead.

Foothold: generator and load sit in one series loop, so there is one current $I$ everywhere. Average power into the load is $P = I_{\mathrm{rms}}^2 R_\ell$, and this problem already locks $R_\ell = R_g$. If that resistance cannot change, $P$ only moves when $I$ moves. In a series loop, what sets how large $I$ is?

### Turn 3 — 2026-09-21 (learner)

> Augment the lesson inline so that the next session will not repeat the failure.
> 1. Does rms represent for root mean square?
> 2. I lack the foundational knowledge for the concept of impedance and it's formula.
> 3. What is passive load?
> 4. In a serious loop, the voltage sets how large i is.

### Tutor

Yes: RMS = root mean square. Passive load: no source of its own — it cannot generate power, only dissipate ($R$) or store ($L$, $C$). The generator is the active piece.

Voltage is one factor, not the whole story. Same source, more series obstruction, smaller $I$. Current is (how hard the source pushes) divided by (how much the loop fights). Impedance is the name of that fight; its formula stays parked — you flagged it as missing, and we are not writing $Z$ this turn.

Fixed source. You add another resistor in series. Does $I$ go up, down, or stay the same?

### Turn 4 — 2026-09-21 (learner)

> Go down, because the fight is more intensive after adding.

### Tutor

Right. Extra series $R$ makes the fight harder, so $I$ drops.

A resistor fights by turning energy into heat. A series inductor stores energy in $B$ and gives it back each cycle — no average heat. Same fixed source: you add a series inductor instead of a resistor. Does $|I|$ go down, stay the same, or go up?

### Turn 5 — 2026-09-21 (learner)

> The current stays the same. I don't have a very clear understanding of this part yet.

### Tutor

That mapping is the miss: no heat does not mean no effect on $I$. The "fight = heat" picture is retired.

You already have $\mathcal{E} = -L\,\mathrm{d}I/\mathrm{d}t$. While $I$ oscillates, that voltage is not zero. Kirchhoff: the source is spent on $V_R$ *and* $V_L$. Current through the resistor is $I = V_R / R$, not $V_{\mathrm{source}}/R$.

If $V_L$ takes a cut of a fixed source, is $V_R$ smaller or the same — and therefore does $|I|$ go down or stay?
