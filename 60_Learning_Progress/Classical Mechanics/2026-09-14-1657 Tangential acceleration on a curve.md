---
type: learning-progress
topic: "Tangential acceleration on a frictionless curve"
area: Classical Mechanics
status: done
created: 2026-09-14
tags:
  - physics
  - classical-mechanics
  - gre-physics
  - constrained-motion
  - tangential-acceleration
related: "[[2026-09-08-1247 Bead on a rotating hoop]]"
---
# Tangential acceleration on a frictionless curve

**Why this note exists:** Physics GRE item: particle slides from rest on $y=x^2/4$ (frictionless; $+y$ downward). Learner tried Lagrangian in $y$ and called it too slow; still not sure of the 60s method.

**Target:**
1. $a_t$ on a frictionless constraint is the tangential projection of $mg$ only — same Newton projection as the hoop, not $\ddot y$.
2. Locally an incline: $a_t = g\sin\theta$, with $\tan\theta = \mathrm{d}y/\mathrm{d}x$. GRE trap: stop at $\tan\theta$ (option C).
3. Timed recipe: slope $\to$ $\sin\theta$ from the rise-run-hyp triangle $\to$ match an option. Energy is for $v$, not $a_t$.

**Done 2026-09-14.** Learner: $a_t=gx/\sqrt{x^2+4}$, option D. 60s recipe locked. Resume hoop [[2026-09-08-1247 Bead on a rotating hoop]].

---

## Context (Verbatim transcription from screenshots)

- **Source:** Physics GRE practice item (Prep Studio style UI). Learner selected **D** (orange border).
- **Stem:**
  A particle is initially at rest at the top of a curved frictionless track. The $x$- and $y$-coordinates of the track are related in dimensionless units by $y = \dfrac{x^2}{4}$, where the positive $y$-axis is in the vertical downward direction. As the particle slides down the track, what is its tangential acceleration?
- **Figure:** Origin $O$ at the top. Horizontal arrow $+x$ to the right. Vertical arrow $+y$ downward. A curve starts at $O$ and falls away to the lower right, labeled "Track".
- **Options:**
  - A $0$
  - B $g$
  - C $\dfrac{gx}{2}$
  - D $\dfrac{gx}{\sqrt{x^2+4}}$ (selected, orange border)
  - E $\dfrac{gx^2}{\sqrt{x^2+16}}$
- **Footer:** A–E or 1–5 to answer.

**Handwritten attempt (Image 3):** Lined paper, three columns, working right $\to$ left. Some strikethrough on the left. No boxed $a_t$. Readable algebra:

- $L = \frac12 m(\dot x^2+\dot y^2)+mgy$
- $V(r)=-mgy$
- $y=x^2/4$
- $\dot y = \frac12 x\cdot\dot x$
- $\dot x = 2\dot y/x$
- cramped rewrite of $\dot x$ in terms of $\dot y,y$ (looks like $\dot x = 2\sqrt{\dot y/y}$ or equivalent from $x=2\sqrt{y}$)
- $L = \frac12 m(\dot y^2/y + \dot y^2)+mgy = \frac12 m\dot y^2(1/y+1)+mgy$
- $\partial L/\partial\dot y = m\dot y(1/y+1)$
- $\frac{\mathrm{d}}{\mathrm{d}t}(\partial L/\partial\dot y) = m\ddot y(1/y+1)+m\dot y(-1)y^{-2}\dot y$
- $\partial L/\partial y = \frac12 m\dot y^2(-1/y^2)+mg$

**Visual / marks the transcription misses:** Photo is a phone shot of paper on a desk (keyboard edge visible). Columns are dense; left column has a crossed-out E–L start. No option letter written on the page.

---

## Turns

### Turn 1 — 2026-09-14 (learner)

> How to solve the problem within 60s in GRE test? My method is clearly and definitely over complicated for solving this multi-choice problem. Even though I still cannot figure it out.
>
> [Image 1: problem stem + track figure]
> [Image 2: options A–E, D selected]
> [Image 3: Lagrangian attempt on paper]

### Tutor

The Lagrangian is the wrong object, not just too slow. You were heading for $\ddot y$, the vertical Cartesian acceleration. The question wants $a_t$ — along the track. Frictionless constraint: the normal force has no tangential piece, so this is the same Newton projection as on the hoop ([[2026-09-08-1247 Bead on a rotating hoop]]): only $mg$ contributes along $\hat t$.

Locally the track is a straight frictionless incline. So
$$a_t = g\sin\theta$$
where $\theta$ is the angle between the tangent and the horizontal. Positive $y$ is already downward, so no extra minus sign. "Initially at rest" is for speed (energy), not for $a_t$.

The curve $y=x^2/4$ is only there to produce $\theta(x)$. Differentiate: $\mathrm{d}y/\mathrm{d}x = x/2$. That derivative is $\tan\theta$, not $\sin\theta$ — option C is the trap that stops there.

```
        /|
       / |  rise  = x/2   (in units of run)
      /  |
     /___|  run   = 1
     hyp  = ?
```

You have D selected. Don't defend the letter yet. From that triangle, what is $\sin\theta$ in terms of $x$? Then $a_t = g\sin\theta$ is an option.

### Turn 2 — 2026-09-14 (learner)

> When the thread is over, let's continue to the rotating hoop session. I forgot that before. Let's finish the current one first.
>
> Since tangent theta equals tangent theta square equals sin theta square minus 1, sin theta equals the square root of 1 plus x square over 4.

### Tutor

Hoop stays parked until this item is done.

$\sqrt{1+x^2/4}$ is the right length — it is the hypotenuse of that triangle. It is not $\sin\theta$. (The identity you wanted is $1+\tan^2\theta=\sec^2\theta$, not $\tan^2\theta=\sin^2\theta-1$. With $\tan\theta=x/2$ and run $=1$, that hypotenuse is $\sec\theta$.)

$\sin\theta$ is rise over that hyp:

```
        /|
       / |  rise = x/2
      /  |
     /___|  run  = 1
     hyp = √(1 + x²/4)
```

Write $\sin\theta$ as rise/hyp, then $a_t=g\sin\theta$. After you pull the $2$ out of the square root, it should match an option.

### Turn 3 — 2026-09-14 (learner)

> Here is another relation I remember which is 1 over tangent theta square plus 1 over sin theta square equals 1. Here we can get sin theta equals x over square root of x square minus 2.

### Tutor

Stop hunting identities. That relation is false, and $x/\sqrt{x^2-2}$ is imaginary near the top ($x=0$), where the track is flat so $a_t$ must be $0$.

From the triangle, opposite over hypotenuse:
$$\sin\theta = \frac{x/2}{\sqrt{1+x^2/4}}$$
Then $a_t = g\sin\theta$. Rewrite the denominator as a single square root (pull the $2$ out of $1+x^2/4=(x^2+4)/4$) and name the option.

### Turn 4 — 2026-09-14 (learner)

> Firstly, you should tell me what are the correct identities or relation. There is a long time that I haven't recalled them.
> The sin theta equals x over square root of 4 plus x squared.

### Tutor

The pack you actually need (GRE: draw the triangle first; these are backup):

Definitions:
- $\sin\theta=\mathrm{opp}/\mathrm{hyp}$, $\cos\theta=\mathrm{adj}/\mathrm{hyp}$, $\tan\theta=\mathrm{opp}/\mathrm{adj}$
- $\csc\theta=1/\sin\theta$, $\sec\theta=1/\cos\theta$, $\cot\theta=1/\tan\theta$

Pythagorean:
- $\sin^2\theta+\cos^2\theta=1$
- $1+\tan^2\theta=\sec^2\theta$
- $1+\cot^2\theta=\csc^2\theta$

Bridge from a known $\tan\theta$ to $\sin\theta$:
$$\sin\theta=\frac{\tan\theta}{\sqrt{1+\tan^2\theta}}$$
(because $\sqrt{1+\tan^2\theta}=\sec\theta$, and $\sin=\tan\cos=\tan/\sec$). Equivalent: $1+\cot^2\theta=\csc^2\theta$.

What you wrote last turns is not in that pack: $\tan^2\theta=\sin^2\theta-1$ is false, and $1/\tan^2\theta+1/\sin^2\theta=1$ is false.

Your $\sin\theta$ is right:
$$\sqrt{1+\frac{x^2}{4}}=\frac{\sqrt{x^2+4}}{2}\implies\sin\theta=\frac{x/2}{\sqrt{x^2+4}/2}=\frac{x}{\sqrt{x^2+4}}$$

Write $a_t$ in one line and name the option.

### Turn 5 — 2026-09-14 (learner)

> The acceleration equals G times X over square root of 4 plus X square and the option is D.

### Tutor

Locked. $a_t = g\sin\theta = gx/\sqrt{x^2+4}$ is D.

60s recipe: frictionless $\Rightarrow$ $N$ drops out of the tangent; locally an incline $\Rightarrow$ $a_t=g\sin\theta$; $y'=x/2$ is $\tan\theta$; triangle (or $1+\tan^2=\sec^2$) for $\sin\theta$. C is $g\tan\theta$. Energy is for $v$, not $a_t$. Lagrangian was $\ddot y$.

This item is done. Hoop next.
