---
type: learning-progress
topic: "Capacitor energy"
area: Electrodynamics
status: active
created: 2026-09-14
tags:
  - physics
  - electrodynamics
  - capacitors
  - gre-physics
  - work-energy
---
# Capacitor energy — charging work to $U_C$

**Why this note exists:** GRE Physics formula-recall item from today's daily note: understand and derive
$$U_C = \frac{1}{2}\frac{Q^2}{C} = \frac{1}{2} C V^2$$

**Target:**
1. Derive $U_C$ as the work to charge empty plates, using $\mathrm{d}W = V\,\mathrm{d}q$ with $V(q)=q/C$ (not a fixed final $V$).
2. Recover the two equivalent forms from $Q=CV$.
3. Later: match Kahn's field-energy path $U_E=\frac{\epsilon_0}{2}\int|\mathbf{E}|^2\,\mathrm{d}^3r$ on a parallel-plate capacitor, and GRE traps (isolated $Q$ vs battery-fixed $V$ when $C$ changes).

**Active 2026-09-14.** Targets 1–2 and the $Q$-fixed / $V$-fixed trap locked. Drill Batch 1 issued. Field-energy path after drills.

### Prior context
- **Already computable:** $C$ is a property of the plates; $V$ tracks $q$, so $V(q)=q/C$ at each instant. Charging work $U_C=\int_0^Q (q/C)\,\mathrm{d}q=Q^2/(2C)=\frac12 C V^2$ via $Q=CV$. Isolated: grab $Q^2/(2C)$. Battery: grab $\frac12 C V^2$.
- **What broke:**
- **New object had to:**

---

## Turns

### Turn 1 — 2026-09-14 (learner)

> $U_C = \dfrac{1}{2}\dfrac{Q^2}{C} = \dfrac{1}{2} C V^2$

### Tutor

You already have a work formula that works when the potential is *fixed*: moving charge $\mathrm{d}q$ across a potential difference $V$ costs
$$\mathrm{d}W = V\,\mathrm{d}q$$
If $V$ never changed, assembling charge $Q$ would cost $QV$. The stored-energy formula is half of that.

The difference is that a capacitor is not a fixed-$V$ object while you charge it. Start from empty plates ($q=0$). As you move charge across, the voltage on the plates is whatever $q$ currently demands: $V(q)=q/C$. Early bits of charge are cheap; later bits are expensive.

Write the work to go from empty plates to final charge $Q$ as an integral in $q$ and $C$. Don't evaluate it yet.

### Turn 2 — 2026-09-14 (learner)

> I don't understand this. Capacitor is always a confusion in my mind's eyes
>
> [Image attachment: crop of the previous tutor line]
>
> **Transcript:**
> $$V(q) = q/C.$$
>
> **Visual / marks:** Serif brown formula on a cream background; only this equation fragment is in frame, with a period after $C$. No other marks.

### Tutor

Parking the energy formula. The piece that didn't land is not the integral — it is the object.

Forget $U_C$ for a minute. A capacitor is two pieces of metal facing each other. Nothing else.

```
   +q                      -q
  ========                ========
  plate A                  plate B
       |<------ gap ------>|
                E
```

You move some charge from B onto A, so A has $+q$ and B has $-q$. That charge makes an electric field in the gap. A voltmeter from A to B reads some number $V$.

$C$ is not a third physical thing sitting in the gap. It is just the name for the ratio
$$C = \frac{q}{V}$$
For a given pair of plates (area, gap), that ratio is the same no matter how much $q$ you have parked so far. Rearranged, that is $V(q)=q/C$: *right now*, if the plates hold charge $q$, the meter reads $q/C$.

Same two plates. You double $q$. What happens to $C$, and what happens to the voltmeter reading $V$?

Forked to [[2026-09-14-0828 Capacitance]]. Resume this note only when that picture is usable.

### Turn 3 — 2026-09-14 (learner)

> The capacitor C stays the same, and the potential V double.

### Tutor

$C$ stays put. $V$ doubles. That is the whole claim of $V(q)=q/C$: $C$ is the pair of plates; $V$ is the meter, and it tracks $q$.

Work to push a little extra charge $\mathrm{d}q$ across the gap is still
$$\mathrm{d}W = V\,\mathrm{d}q$$
with $V$ the meter reading *at that moment*, so $V=q/C$.

Write the total work from empty plates ($q=0$) to final charge $Q$ as an integral in $q$ and $C$. Don't evaluate it yet.

### Turn 4 — 2026-09-14 (learner)

> W = integral dw = integral from 0 to Q (q/c)• dq = (1/2) (Q^2)/C

### Tutor

The integral and the evaluation are both right:
$$U_C = \int_0^Q \frac{q}{C}\,\mathrm{d}q = \frac{1}{2}\frac{Q^2}{C}$$
The $\frac{1}{2}$ is $\int q\,\mathrm{d}q$, not a fudge factor. That stored work is $U_C$.

At the *end* of charging you also have $Q=CV$ (final charge, final meter reading).

Rewrite $\dfrac{1}{2}Q^2/C$ using only $C$ and that final $V$.

### Turn 5 — 2026-09-14 (learner)

> U_C = (1/2)•[(CV)^2]/C = (1/2)•CV^2

### Tutor

That's the second form:
$$U_C = \frac{1}{2} C V^2$$
Same energy, two writings. (The third writing, $U_C=\frac12 QV$, is $Q=CV$ one more time.)

The GRE cares which writing you grab when something changes. Pull the plates apart: $C$ drops.
- Isolated (disconnected): $Q$ is stuck.
- Battery still connected: $V$ is stuck.

In each case, does $U_C$ go up or down? Name which writing makes it obvious.

### Turn 6 — 2026-09-14 (learner)

> 1. Isolated: U_C = 1/2 QV Q fixed, C drops -> (Q = CV) V increases -> U_C increases
> 2. Battery: Q = CV -> Q drops -> U_C = 1/2 QV -> U_C drops

### Tutor

Directions are both right: isolated $U_C$ up, battery $U_C$ down.

You used $\frac12 QV$ both times, so you had to chase the unstuck variable ($V$ up, or $Q$ down). The two writings exist so you *don't* do that.

Name the writing that already contains the stuck quantity, for each case.

### Turn 7 — 2026-09-14 (learner)

> 1. Isolated, Q fixed, C drops : U_C = 1/2 Q^2 over C
> 2. Battery, V fixed, C drops: U_C = 1/2 CV^2

### Tutor

Those are the two writings:
- Isolated, $Q$ stuck: $U_C=\dfrac{1}{2}Q^2/C$. $C$ drops $\Rightarrow$ $U_C$ up.
- Battery, $V$ stuck: $U_C=\dfrac12 C V^2$. $C$ drops $\Rightarrow$ $U_C$ down.

That's the formula and the GRE fork. You can derive $U_C$ from charging work, rewrite it with $Q=CV$, and pick the writing that holds the stuck quantity.

Next, if you want it: the same $U_C$ as field energy $\dfrac{\epsilon_0}{2}\int E^2\,\mathrm{d}V$ in the gap (Kahn's path), or mixed GRE items (dielectric, series/parallel). Otherwise this thread can stop here.

### Turn 8 — 2026-09-14 (learner)

> Record progress in the  daily note first, then drills what we learned. After that, learn field energy

### Tutor

Recorded in today's daily note: derivation locked; error-analysis subtask still open through these drills.

**Drill Batch 1** (Physics GRE level: mixed judgment — no section labels). What we locked this session only — not field energy yet.

---

#### Item 1
A parallel-plate capacitor is charged to stored energy $U$ and then disconnected from the battery. You slowly **double** the plate separation.
1. What is the new stored energy in terms of $U$?
2. The same doubling is instead done with the battery still connected (initial energy still $U$). What is the new stored energy in terms of $U$?

#### Item 2
An initially uncharged capacitor is charged to final charge $Q$ and final potential $V$. A student writes $W=QV$ for the work done, arguing $\mathrm{d}W=V\,\mathrm{d}q$ with the *final* $V$.
What is the actual work, in terms of $Q$ and $V$, and what did the student treat as constant that is not?

#### Item 3
A capacitor $C$ is charged to $Q$ and disconnected. An identical uncharged capacitor is then connected in parallel with it. What is the final *total* stored energy, in terms of $Q$ and $C$?

Take them one at a time or all three — your call.

### Turn 9 — 2026-09-14 (learner)

> 1.1 The separation is double, E stays the same, V = Ed, V double , Q fixed -> C half. Based on U = 1/2 Q^2 / C, U double , new stored energy is U
> 1.2 When V is fixed, Q can flow between 2 electrodes. V = Ed -> E half -> Q half -> C half -> based on 1/2 CV^2, it is -1/2 U

### Tutor

The chains and the writings are the right ones: isolated $\to Q^2/(2C)$, battery $\to \frac12 C V^2$. $C$ halves both times because $d$ doubled.

The last line of each fight the question.
- 1.1: you already have "$U$ double," then you wrote the new energy is $U$. Those two clauses disagree. The question wants $U_{\mathrm{new}}$ as a multiple of the original $U$.
- 1.2: $\frac12 C V^2$ drops, but the question wants the new energy (a positive multiple of $U$), not a signed change $\Delta U$.

Write $U_{\mathrm{new}}$ for 1.1 and for 1.2.

### Turn 10 — 2026-09-14 (learner)

> 2U and 1/2 U

### Tutor

Those are the new energies: isolated $U_{\mathrm{new}}=2U$, battery $U_{\mathrm{new}}=\frac12 U$.

Watch: ETS asks for the new energy, not $\Delta U$. A minus sign is a different answer.

Items 2 and 3 are still open.

### Turn 11 — 2026-09-14 (learner)

> W = integral dw = integral from 0 to Q q/C dq = 1/2 Q^2 / C . What the student treated as constant that is not is q, or rather, he ignored the relation between q and V, treating V as a constant as well.

### Tutor

The false constant is $V$, not $q$. $q$ is the dummy you integrate; the student plugged in the *final* meter reading for every $\mathrm{d}q$.

You have $W=\frac12 Q^2/C$. The question asked in terms of $Q$ and $V$. Rewrite it.

### Turn 12 — 2026-09-14 (learner)

> 1/2 QV and the constant was V

### Tutor

$W=\frac12 QV$. The student treated the final $V$ as if it applied to every $\mathrm{d}q$.

Item 3 is still open.
