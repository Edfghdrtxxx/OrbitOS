---
type: learning-index
purpose: Terse cross-agent index of what the learner has solidly learned. Agents running /learn MUST read this first.
updated: 2026-07-29
---
# Learning Progress — Context Index

> Analogy of MEMORY.md: short durable pointers only. Full dialogue lives in session notes under `60_Learning_Progress/<topic>/`.
> **Update rule:** after a turn advances understanding, add/move one-line entries. Prefer moving **In progress → Known solid** when the learner states/uses it correctly.

## Known solid

| Item | Notes |
|------|--------|
| Dirac notation | Stated by learner (self-report) — **not** the same as position representation solid |
| Position rep: $\Psi=\langle x\|\Psi\rangle$ as projection | Inner product / geometric projection; ket ≠ “original wavefunction” |
| Position rep: full $\Psi(x)$ = full state at $t$ | Drill re-locked: entire function of all $x$ (not one sample) |
| Hermitian operators | Stated by learner (self-report) |
| TISE: $E$ is a scalar eigenvalue | Learner stated correctly; $\hat{H}\|\psi\rangle=E\|\psi\rangle$ |
| Hermitian $\hat{H}$ $\Rightarrow$ $E$ real | Learner linked Hermitian to real (not complex) eigenvalues |
| Stationary state: $P(E)$ time-independent | Learner: measuring $E$ on eigenstate does not change with $t$ |
| Superposition: $P(E_1)=\frac{1}{2}$ for equal weights | Learner correct for $\frac{1}{\sqrt{2}}(\|E_1\rangle+\|E_2\rangle)$ |
| $P(E)$ vs $\langle\hat{H}\rangle$ are different types | Learner: $\langle\hat{H}\rangle\neq P(E_1)$ as conclusion |
| Superposition: $\langle\hat{H}\rangle=\sum_i P(E_i)E_i$ | Learner: $P=\frac{1}{2},\frac{1}{2}$ and $\langle\hat{H}\rangle=2\hbar\omega$ for $E=\hbar\omega,3\hbar\omega$ |
| TISE in position representation (1D) | Learner wrote $-\frac{\hbar^2}{2m}\psi''+V\psi=E\psi$ (structure correct) |
| HO: $E_0>0$ (zero-point) via uncertainty | Uncertainty reason + value $E_0=\frac{1}{2}\hbar\omega$ (drill re-locked) |
| HO: equal spacing $E_{n+1}-E_n=\hbar\omega$ | Learner derived from $E_n$; checked $E_2-E_1=E_1-E_0$ |
| HO: $n\ge 0$ (no $n=-1$) | Learner: $n=-1$ not a physical energy level; $E_{-1}<E_0$ |
| TOEFL AD: one-claim opening | Names a single impact that answers the professor (not a list) |
| TOEFL AD: why = stuck → tool → keep going | Can draft a mini-example chain for “learning momentum” (language polish next) |

## In progress

| Topic | Status | Notes |
|-------|--------|--------|
| TOEFL: Academic Discussion writing | **active** — clean close next | Claim + why drafted; next: one-sentence close without filler, then optional proofread pass |
| QM: position representation | **solid enough** — resume TISE | Full $\Psi(x)$ = full $\|\Psi\rangle$ at $t$; one $x$ = one component |
| QM: time-independent Schrödinger equation (TISE) | **solid enough** — resume HO | Abstract + superposition + 1D differential form |
| QM: harmonic oscillator | **solid enough** — foundations locked | Spectrum, spacing, zero-point, $n\ge 0$; next thread: ladder ops |
| QM: ladder operators $a,a^\dagger$ | **next** | Needed for $D(\alpha)$; note ready: [[2026-07-26-2113 Ladder operators]] |
| QM: displacement operator $D(\alpha)$ | **paused** — blocked on ladder ops | Target $D(\alpha)=e^{\alpha a^\dagger-\alpha^* a}$ |

## Session notes

| Thread | Path |
|--------|------|
| Position representation (solid enough) | [[2026-07-27-1331 Position representation]] · `60_Learning_Progress/Quantum Mechanics/2026-07-27-1331 Position representation.md` |
| TISE (solid enough) | [[2026-07-26-2126 Time-independent Schrödinger equation]] · `60_Learning_Progress/Quantum Mechanics/2026-07-26-2126 Time-independent Schrödinger equation.md` |
| Harmonic oscillator (solid enough) | [[2026-07-26-2112 Harmonic oscillator]] · `60_Learning_Progress/Quantum Mechanics/2026-07-26-2112 Harmonic oscillator.md` |
| TOEFL Academic Discussion (active) | [[2026-07-26-2233 TOEFL Academic Discussion]] · `60_Learning_Progress/English Learning/2026-07-26-2233 TOEFL Academic Discussion.md` |
| Ladder operators | [[2026-07-26-2113 Ladder operators]] · `60_Learning_Progress/Quantum Mechanics/2026-07-26-2113 Ladder operators.md` |
| Displacement operator (paused) | [[2026-07-26-2030 Displacement operator]] · `60_Learning_Progress/Quantum Mechanics/2026-07-26-2030 Displacement operator.md` |

## Gaps / next

1. TOEFL AD: one closing sentence (learning momentum, no filler); then optional 60s proofread
2. Ladder operators $a,a^\dagger$ (HO solid enough) → then resume $D(\alpha)$
3. QM drill complete (pos + TISE + HO solid enough) → ladder ops next
