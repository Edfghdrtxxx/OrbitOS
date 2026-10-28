---
title: "r-Process Equilibrium Path - Gemini Session"
source: https://gemini.google.com/app/4216ed50c7400128
gemini_title: "Scaffolding Physics for High School Students"
captured: 2026-10-27
turns: 2
---
# r-Process Equilibrium Path - Gemini Session

Curated copy of the Gemini conversation **"Scaffolding Physics for High School Students"** ([source](https://gemini.google.com/app/4216ed50c7400128)), captured 2026-10-27. The conversation has 2 turns. The user attached `README` and `LECTURE_NOTE` (Markdown files of an *equilibrium r-process path* lab) to turn 1.

> [!note] Curation
> - Gemini's inline citation markers (`[cite: 1]`, `[cite: 2]`) are removed. They pointed to the attached files; Gemini's source chips list `README.md` and `LECTURE_NOTE.md`.
> - Both documents Gemini wrote inside Markdown code blocks are rendered as normal text, with headings demoted two levels.
> - In turn 2, a nested `bash` code fence in Gemini's output closed the workbook code block early. The workbook is rejoined here and the answer key follows it as normal text.
> - Figure links such as `figures/path_sensitivity.png` are relative to the user's lab repository and do not resolve in this vault.
> - Gemini's text is unchanged. Reviewer check (not by Gemini): the workbook constant $-80.70$ in $\ln(n_n\lambda_T^3/2)$ does not match $\lambda_T=(2\pi\hbar^2/m_u kT)^{1/2}$. With CODATA 2018 values ($\hbar c=197.327$ MeV fm, $m_uc^2=931.494$ MeV) the constant is $-78.46$, so the crowd term at $T_9=1.507$, $n_n=1.59\times10^{29}\,\text{cm}^{-3}$ is $-11.84$, not $-14.07$. With $-11.84$, the step into $^{135}\text{Sn}$ becomes $+0.08$ (climbing, not falling); $^{136}\text{Sn}$ ($N=86$) is still the winner.

## Contents

1. [Turn 1: Lecture note rewritten for high school students](#turn-1-lecture-note-rewritten-for-high-school-students)
2. [Turn 2: Hands-on student project and answer key](#turn-2-hands-on-student-project-and-answer-key)

---

## Turn 1: Lecture note rewritten for high school students

**User prompt:**

> Refine the lecture note so that even the high school students can understand the physics

**Attachments:** `README`, `LECTURE_NOTE`

**Gemini:**

This refined version of `LECTURE_NOTE.md` retains all the exact equations, figure links, simulation presets, and software conventions so it stays 100% compatible with your lab repository, while scaffolding the physics with intuitive analogies (tug-of-war, mass-energy conversion via $E=mc^2$, and Le Chatelier's principle) so high school students can follow the physical meaning behind every term.

### The Equilibrium r-Process Path: Forging Heavy Elements in the Cosmos

#### Learning Goals

After completing this lab and reading this note, you should be able to:

1. **Explain the cosmic tug-of-war** between neutron capture and photon knockout—known as $(n,\gamma)\rightleftarrows(\gamma,n)$ equilibrium—and use the Saha equation to calculate which isotopes win;
2. **Understand why the path follows a constant "neutron glue strength"** (neutron-separation energy, $S_n$) rather than staying near ordinary, stable atoms;
3. **Predict how astrophysical dials** (temperature and neutron density) shift the path across the chart of nuclides;
4. **Distinguish between an instant "equilibrium snapshot"** and a full time-dependent reaction-network movie; and
5. **Use real nuclear physics data** (WinNet masses, spins, and partition functions) in the interactive GUI to explore how heavy elements are born.

---

#### 0. Background Primer: Atoms at the Extreme

Where do the gold in a ring, the platinum in a catalytic converter, or the uranium in a nuclear reactor come from? Normal stars can fuse elements only up to iron ($Z=26$). To build the heaviest elements in the universe, nature relies on the **rapid neutron-capture process (r-process)**, which happens during cataclysmic cosmic events like neutron star mergers or rare, ultra-magnetic supernova explosions.

Before diving into the equations, let's establish four core building blocks:

* **Counting Nucleons ($Z$, $N$, and $A$):** Every atomic nucleus is made of **$Z$ protons** (which define what chemical element it is) and **$N$ neutrons**. The total number of particles in the nucleus is the **mass number, $A = Z + N$**. Nuclei with the same $Z$ but different $N$ are called **isotopes** of that element—they sit in the same horizontal row (an *isotopic chain*) on the nuclear chart.
* **Beta ($\beta^-$) Decay (Climbing the Periodic Table):** If a nucleus packs in too many neutrons, it becomes unstable. To fix this, one of its neutrons transforms into a proton (shooting out an electron and an antineutrino):
  $$(Z, N) \longrightarrow (Z+1, N-1) + e^- + \bar{\nu}_e$$
  Notice that $Z$ increases by 1! Beta decay is the "escalator" that moves matter up to heavier elements.
* **Neutron Separation Energy ($S_n$ — The Nuclear Glue):** When a nucleus $(Z,N)$ grabs a free neutron to become $(Z,N+1)$, it releases binding energy in the form of a high-energy light particle called a **gamma-ray photon ($\gamma$)**. By Einstein's famous $E = mc^2$, the new nucleus actually weighs slightly *less* than the original nucleus plus the separate neutron! That missing mass—converted into energy—is the **one-neutron separation energy ($S_n$)**:
  $$S_n(Z,N+1) = \left[M(Z,N) + m_n - M(Z,N+1)\right]c^2$$
  Think of $S_n$ as **how tightly the last neutron is glued to the nucleus**:
  * **High $S_n$ (near stable nuclei):** The neutron is glued in very tightly. It takes a huge energy kick to knock it loose.
  * **Low $S_n$ (very neutron-rich nuclei):** As you pack more and more neutrons into the same element, the nucleus gets crowded. Each new neutron is held more loosely, so $S_n$ drops toward zero.

---

#### 1. The Physical Picture: A Cosmic Tug-of-War

Imagine being inside the ultra-hot, ultra-dense fireball of a supernova or neutron star merger. The soup is packed with free neutrons ($n$) and blistering with high-energy gamma-ray photons ($\gamma$). Two opposite reactions happen furiously fast:

1. **Neutron Capture $(n,\gamma)$:** A nucleus swallows a neutron and spits out a gamma ray.
2. **Photodissociation $(\gamma,n)$:** A ferocious gamma ray slams into the nucleus and knocks a neutron right back out.

We write this two-way street as:

$$(Z,N) + n \rightleftarrows (Z,N+1) + \gamma$$

In a hot r-process, both of these reactions happen **millions of times faster than beta decay**. Because they are so fast, they reach a dynamic balance—called **chemical equilibrium** (or **detailed balance**)—long before the nucleus has time to beta-decay into the next element.

Think of an isotopic chain (a single row of fixed $Z$) as a hallway of rooms. Neutrons push nuclei into rooms further to the right (higher $N$), while hot photons kick them back to the left (lower $N$). When those two pushes balance out, nuclei pile up in one specific "favorite" room where the forward and backward rates match.

The **equilibrium r-process path** is simply the collection of these most crowded rooms—the single most abundant isotope for each element $Z$. Meanwhile, slow beta decays act like tiny doors between hallways, gradually moving nuclei up from row $Z$ to row $Z+1$.

> **Terminology Check:** Astrophysicists are careful to distinguish this from *full Nuclear Statistical Equilibrium (NSE)*. In full NSE (which happens at even higher temperatures), protons, alpha particles, and all elements freely rearrange into one another. Here, protons are locked inside their elements because electric repulsion (the Coulomb barrier) is too strong to overcome easily; **only neutrons and photons are in equilibrium within each individual element's row (fixed $Z$)**. The precise name for this state is the **$(n,\gamma)\rightleftarrows(\gamma,n)$ equilibrium path**.

![Equilibrium path and one isotopic chain](figures/equilibrium_path_concept.png)

In the figure above, the colored squares show the neutron glue strength $S_n$. Notice an important subtlety: **the path does not mean a single nucleus literally walks along that purple line one step at a time.** Instead, inside every horizontal row $Z$, nuclei are rapidly sloshing back and forth between neighboring boxes, and the purple path marks the **ridge (the peak)** of the population at that exact instant.

---

#### 2. Counting the Winners: The Saha Equation

How do we calculate exactly which isotope wins the tug-of-war in row $Z$? In chemistry and physics, when a reversible reaction $A + B \rightleftarrows C$ reaches equilibrium at temperature $T$, the balance between the two sides is governed by **chemical potentials ($\mu$)**, which measure how strongly particles want to react:

$$\mu(Z,N) + \mu_n = \mu(Z,N+1)$$

When we translate this thermodynamic rule into actual particle counts for an ideal gas of nuclei and neutrons (known in astrophysics as the **Saha equation**), we get the ratio of populations between two neighboring isotopes:

$$\frac{Y(Z,N+1)}{Y(Z,N)} = n_n \left(\frac{2\pi\hbar^2}{m_u kT}\right)^{3/2} \left(\frac{A+1}{A}\right)^{3/2} \frac{G(Z,N+1)}{2G(Z,N)} \exp\!\left[\frac{S_n(Z,N+1)}{kT}\right] \tag{1}$$

Equation (1) looks intimidating at first glance, so let's break down what every piece actually means physically:

* **$\dfrac{Y(Z,N+1)}{Y(Z,N)}$ (The Population Ratio):** $Y$ measures the abundance of an isotope. If this ratio is **greater than 1**, isotope $(N+1)$ has more nuclei than isotope $(N)$, meaning the tug-of-war is pushing material to the right. If the ratio is **less than 1**, photons are winning and pushing material back to the left.
* **$n_n = \rho N_A Y_n$ (Neutron Crowd Density):** The number of free neutrons packed into each cubic centimeter ($\text{cm}^{-3}$), calculated from the total matter density $\rho$, Avogadro's number $N_A$, and the free-neutron fraction $Y_n$. More neutrons in the room means more captures!
* **$\lambda_T = \left(\dfrac{2\pi\hbar^2}{m_u kT}\right)^{1/2}$ (The Thermal Wavelength):** In quantum mechanics, every moving particle has a wave-like size called its *de Broglie wavelength* ($\hbar$ is Planck's constant, $m_u$ is the atomic mass unit, and $k$ is Boltzmann's constant). Thus, $\lambda_T^3$ is the effective "quantum personal space" volume of a neutron at temperature $T$. The product **$n_n \lambda_T^3$** simply measures how crowded the free neutrons are compared to their quantum size. Since free neutrons are usually spread out compared to their tiny quantum volume, $n_n \lambda_T^3$ is a very small number ($\ll 1$).
* **$\left(\dfrac{A+1}{A}\right)^{3/2}$ (Mass Recoil Factor):** A tiny correction (very close to $1$) accounting for the slight increase in mass when the nucleus absorbs a neutron.
* **$\dfrac{G(Z,N+1)}{2G(Z,N)}$ (Internal Energy States / Spin Factor):** Just like atoms have electron energy levels, nuclei have internal quantum spin states ($J$) and excited states. $G = (2J+1)G_{\mathrm{part}}(T)$ counts how many internal "shelves" a nucleus has available to store energy at temperature $T$. The factor of $2$ in the denominator accounts for the two possible spin directions (up/down) of the free neutron.
* **$\exp\!\left[\dfrac{S_n(Z,N+1)}{kT}\right]$ (The Boltzmann Tug-of-War Factor):** **This is the most important term in the equation!** It compares the glue energy holding the neutron in ($S_n$) against the average thermal kick of the surrounding heat bath ($kT$). Because it sits inside an exponential ($\mathrm{e}^x$), even a small change in $S_n$ or $T$ makes this number skyrocket or plummet.

##### Why Computers Use Logarithms

Because the exponential term can easily be $10^{10}$ or $10^{-10}$, multiplying these ratios directly across dozens of isotopes in a computer program can cause numbers to overflow to infinity (`inf`) or underflow to zero (`0.0`). To keep the math safe and exact, the code takes the natural logarithm ($\ln$) of Equation (1), turning multiplication into simple addition:

$$\begin{split}
\ln R_N ={}& \ln(n_n\lambda_T^3) + \frac{3}{2}\ln\left(\frac{A+1}{A}\right) + \ln\left(\frac{G_{N+1}}{2G_N}\right) + \frac{S_n(Z,N+1)}{kT},\\
R_N ={}& \frac{Y(Z,N+1)}{Y(Z,N)}.
\end{split} \tag{2}$$

To find the winner in a row $Z$, the computer starts at the first isotope $N_0$ with a baseline score of $\ln Y(Z,N_0) = 0$, steps rightward by adding $\ln R_N$ one box at a time:
$$\ln Y(Z,N+1) = \ln Y(Z,N) + \ln R_N$$
and simply picks the isotope with the highest score! Because we only care about which box is *largest* relative to its neighbors in the same row, the starting baseline cancels out completely.

---

##### The Golden Rule: Why the Path Follows Constant "Glue Strength" ($S_n^*$)

Let's see how the peak forms along a single row $Z$:
1. Near stable nuclei (small $N$), neutrons are glued in very tightly ($S_n$ is large, around $8\text{ MeV}$). The exponential $\exp(S_n/kT)$ is huge, so $R_N > 1$ ($\ln R_N > 0$). Every step to the right *increases* the population.
2. Far from stability (huge $N$), the nucleus is stuffed with neutrons and can barely hold another one ($S_n$ drops near $0\text{ MeV}$). Now the tiny neutron-crowding factor $n_n\lambda_T^3 \ll 1$ wins, making $R_N < 1$ ($\ln R_N < 0$). Every step to the right *decreases* the population.
3. **The Peak (Winner):** Just like climbing a hill, the very top of the population hill happens right where you stop going up and start going down—that is, where **$R_N \approx 1$** (or $\ln R_N \approx 0$)!

If we set $R_N = 1$ in Equation (1) and ignore the small spin and mass-ratio factors ($\frac{A+1}{A} \approx 1$ and $\frac{G_{N+1}}{G_N} \approx 1$), we can solve directly for the winning glue strength $S_n^*$:

$$S_n^*(T,n_n) \simeq -kT\ln\left[\frac{n_n\lambda_T^3}{2}\right] \tag{3}$$

*(Note: Since $n_n\lambda_T^3 / 2 < 1$, its logarithm is negative, which cancels the minus sign in front to give a positive energy $S_n^*$, typically around $1.5\text{ to }3\text{ MeV}$ during an r-process).*

**What does Equation (3) tell us?** Notice that $Z$ and $A$ don't appear anywhere on the right-hand side! The winning neutron separation energy $S_n^*$ depends **only on the temperature $T$ and the neutron density $n_n$ of the environment**. Therefore, across the entire chart of nuclides, the equilibrium r-process path tracks a contour of **approximately constant neutron separation energy $S_n^*$**.

* **Why does the real path zig-zag?** In nature, neutrons like to pair up with opposite spins. A nucleus with an **even** number of neutrons has all its neutrons happily paired, so its $S_n$ is extra high. A nucleus with an **odd** number of neutrons has one lone, unpaired neutron that is easier to knock out (lower $S_n$). Because $S_n$ jumps up and down between even and odd $N$ (**odd-even staggering**), the real equilibrium path zig-zags back and forth around the smooth $S_n^*$ contour, strongly preferring even-$N$ nuclei!

---

#### 3. How the Astrophysical Dials Move the Path

In chemistry, **Le Chatelier's Principle** says that if you push on a system in equilibrium, it shifts to push back. Look at our reaction again, keeping in mind that heat (photons $\gamma$) is on the right side:

$$(Z,N) + n \rightleftarrows (Z,N+1) + \gamma \text{ (heat)}$$

Using Le Chatelier's Principle and Equation (1), we can easily predict what happens when you move the sliders in the GUI:

* **Turn UP Neutron Density ($n_n \uparrow$):** You are flooding the left side of the reaction with more neutrons. Captures speed up, pushing the equilibrium to the **right (larger $N$, farther from stability)** where $S_n$ is smaller.
* **Turn DOWN Neutron Density ($n_n \downarrow$):** Neutrons become scarce. Photons win the tug-of-war and strip neutrons off, pulling the path **left (smaller $N$, closer to stability)**.
* **Turn UP Temperature ($T \uparrow$):** Higher temperature means the photon bath is hotter and more violent (more $\gamma$ on the right side). Photodissociation blasts loosely bound neutrons off the nuclei, forcing the path **left toward more tightly bound nuclei (higher $S_n$, closer to stability)**.
* **Magic Neutron Numbers ($N = 50, 82, 126$):** Just like noble gases (Helium, Neon, Argon) have completely full, ultra-stable electron shells in chemistry, nuclei have **closed neutron shells** at "magic numbers" $N = 50, 82,$ and $126$. Once a nucleus hits a magic number of neutrons, its shell is full—the *next* neutron ($N = 51, 83, 127$) barely sticks at all ($S_n$ drops off a cliff!). As a result, the r-process path hits a wall at $N=50, 82, 126$ and turns sharp vertical corners, climbing straight up in $Z$ via beta decay before it can add more neutrons. Because these magic nuclei also beta-decay relatively slowly, matter piles up at these **waiting points**, creating the famous abundance peaks of heavy elements (like gold and platinum near $N=126$) that we observe in stars and on Earth today!

![Path sensitivity](figures/path_sensitivity.png)

> **Important Limitation:** Equation (1) finds where the equilibrium ridge sits at a given $T$ and $n_n$, assuming reactions are infinitely fast. It does **not** calculate *how fast* neutron capture, photodissociation, beta decay, nuclear fission, or the expansion of the fireball actually happen in real time. For that, astrophysicists use a full time-dependent reaction network like **WinNet**.

---

#### 4. A Real Cosmic Event: The MRSN Simulation

To see how this works in a real astrophysical explosion, the GUI includes five time-snapshots (presets) taken directly from a **Magnetorotational Supernova (MRSN)** simulation (`runs/Example_MRSN_r_process_winteler/mainout.dat`).

In the table below, **$T_9$** is the temperature in **billions of Kelvin** ($T_9 = T / 10^9\text{ K}$), $\rho$ is the density in grams per cubic centimeter, $Y_n$ is the fraction of all nucleons that are free neutrons, and $n_n$ is the resulting number of free neutrons per $\text{cm}^3$:

| Phase | time (s) | $T_9$ ($10^9\text{ K}$) | $\rho$ ($\text{g cm}^{-3}$) | $Y_n$ | $n_n$ ($\text{cm}^{-3}$) |
|---|---:|---:|---:|---:|---:|
| **1. Hot equilibrium** | 0.03795 | 2.517 | $3.196\times10^6$ | 0.4616 | $8.88\times10^{29}$ |
| **2. Active r-process** | 0.05316 | 1.990 | $1.579\times10^6$ | 0.4392 | $4.18\times10^{29}$ |
| **3. Cooling r-process** | 0.07646 | 1.507 | $6.853\times10^5$ | 0.3859 | $1.59\times10^{29}$ |
| **4. Near freeze-out** | 0.1249 | 1.001 | $2.012\times10^5$ | 0.2368 | $2.87\times10^{28}$ |
| **5. After freeze-out** | 0.2697 | 0.4999 | $2.503\times10^4$ | $4.42\times10^{-8}$ | $6.66\times10^{20}$ |

![MRSN path evolution](figures/mrsn_path_evolution.png)

##### Watch Out for "Freeze-Out"!
Look closely at the **5th preset (`after freeze-out`)** in the table above. In less than a quarter of a second, the expanding fireball has cooled to half a billion Kelvin ($T_9 \approx 0.5$) and almost all the free neutrons have been gobbled up ($Y_n$ plunged from $0.46$ down to $4.42\times 10^{-8}$, and $n_n$ dropped by a factor of a billion!).

At this stage, the soup is too cold and too empty of neutrons for $(n,\gamma)\rightleftarrows(\gamma,n)$ reactions to keep going. **The cosmic tug-of-war has stopped.** In astrophysics, when reactions become slower than the expansion of the fireball or slower than beta decay, we say the equilibrium has **frozen out**.

Equation (1) is just a math formula—if you plug in the `after freeze-out` numbers, it will happily draw a purple line near the valley of stability showing where equilibrium *would* be if reactions were still fast. **But in reality, the nuclei are stranded far out on the neutron-rich side and simply beta-decay step-by-step back toward stability!** Comparing the formula's hypothetical curve to what the real nuclei are doing teaches a vital lesson in physics: always check whether the physical assumptions behind an equation still hold true.

---

#### 5. A Real-World Code Detective Note: The WinNet Movie Convention

Even professional research codes sometimes have subtle quirks! The existing movie script in the WinNet repository (`bin/movie_script/src_files/ngamma_eq.py`) writes the nuclear spin factor in the Saha equation upside-down:

$$\frac{G_N}{2G_{N+1}} \quad \text{(WinNet movie script)}$$

whereas the standard textbook Saha derivation in Equation (1) puts $(N+1)$ on top and $(N)$ on the bottom:

$$\frac{G_{N+1}}{2G_N} \quad \text{(Standard textbook physics)}$$

In our lab GUI, the checkbox **"Match WinNet movie statistical-factor convention"** is turned **ON** by default so that the purple curve on your screen matches the official WinNet simulation movies pixel-for-pixel. Uncheck that box to switch to the standard textbook formula!

Why didn't this upside-down spin ratio ruin the WinNet movies? Try toggling the checkbox back and forth in the GUI: you'll see that the path barely changes at all! That's because the **exponential glue-energy term $\exp(S_n/kT)$ is so huge that it completely dominates the tug-of-war**, while the spin ratio only nudges borderline cases by a neutron or two.

---

#### 6. Hands-On Lab Exercises

Launch the GUI and explore these six questions:

1. **Find the Peak of the Hill:** Select the **`cooling r-process` ($T_9 \simeq 1.5$)** MRSN preset and click on the Tin isotopic chain (**$Z=50$**). Look at the bottom panel showing $\ln R_N$ and abundance across the chain. Where does the ratio $R_N$ cross from greater than $1$ ($\ln R_N > 0$, climbing up) to less than $1$ ($\ln R_N < 0$, going down)? Verify that this crossover marks the winning isotope on the path!
2. **Starve the Neutrons:** Starting from that same preset, decrease the neutron abundance slider **$\log_{10}Y_n$ by $-2$** (which reduces the neutron density by a factor of $100$) while keeping temperature and total density fixed. Does the purple path move toward stability (left) or away from stability (right)? Use Le Chatelier's Principle and Equation (2) to explain why.
3. **Heat Up the Photon Bath:** Hold the free-neutron density $n_n$ roughly constant while raising and lowering the temperature slider **$T_9$**. How does the GUI path move, and how well does it match the simple constant-$S_n^*$ rule from Equation (3)?
4. **Test the Code Quirk:** Toggle the **"Match WinNet movie statistical-factor convention"** checkbox on and off. Look closely along the purple path—can you spot an element $Z$ whose winning isotope shifts when you flip the spin factor? Why do most chains stay in the exact same place?
5. **Explore Nuclear Data Uncertainties:** Many of the ultra-neutron-rich nuclei along the r-process path have never been created in a laboratory on Earth; their masses and spins come from theoretical nuclear models. If you load a different `winvn` nuclear data file (using `--data`), which shifts in the path come from different predicted nuclear masses ($S_n$), and which come from partition functions ($G$)?
6. **The Freeze-Out Trap:** Click on the **`after freeze-out`** preset. Explain in your own words why the GUI is still able to draw a mathematical equilibrium path, and why trusting that curve to tell you where the elements actually are at $t = 0.27\text{ s}$ would be physically misleading.

---

#### 7. Summary of Approximations (When Does This Model Work?)

Like every good toy model in physics, our equilibrium-path calculator makes several simplifying assumptions:
* **Ideal, non-degenerate gas:** Assumes nuclei and neutrons bounce around freely like a normal gas and obey classical Maxwell-Boltzmann statistics.
* **Instantaneous $(n,\gamma)\rightleftarrows(\gamma,n)$ equilibrium:** Assumes neutron capture and photon knockout are infinitely fast compared to everything else.
* **Independent rows ($Z$):** Calculates the winner *inside* each element row $Z$ separately. It does **not** calculate how much total matter is in row $Z$ compared to row $Z+1$, nor does it track beta-decay rates, neutrino interactions, electron screening, or nuclear fission.

Think of this calculator as an **instantaneous GPS snapshot** showing where the r-process wants to go at a given temperature and neutron density—a fast, intuitive diagnostic tool to help you understand full supercomputer simulations like WinNet!

---

#### References & Further Reading

- E. M. Burbidge, G. R. Burbidge, W. A. Fowler, and F. Hoyle, *Synthesis of the Elements in Stars*, Reviews of Modern Physics **29**, 547 (1957) — The legendary "$\mathrm{B^2FH}$" paper that first mapped out how stars forge the periodic table.
- A. G. W. Cameron, *Nuclear Reactions in Stars and Nucleogenesis*, Chalk River Report CRL-41 (1957) — Independently co-discovered the theory of stellar nucleosynthesis and the r-process.
- J. J. Cowan et al., *Origin of the heaviest elements: The rapid neutron-capture process*, Reviews of Modern Physics **93**, 015002 (2021) — Modern comprehensive review of r-process physics, observations, and simulations.
- WinNet nuclear-network source code and the local `ngamma_eq.py` implementation.

### Key Refinements Made for High School Accessibility

* **Added Section 0 (Background Primer):** Defines $Z$, $N$, $A$, isotopic chains, $\beta^-$ decay as an "escalator" up the periodic table, and $S_n$ via $E=mc^2$ ("nuclear glue strength") so students aren't dropped cold into nuclear astrophysics notation.
* **Physical Analogies for Equilibrium & Saha:** Framed $(n,\gamma)\rightleftarrows(\gamma,n)$ as a cosmic tug-of-war in a hallway of rooms, and translated chemical potential / the Saha equation terms into physical concepts (quantum personal space $\lambda_T^3$, internal energy shelves $G$, and the Boltzmann glue-vs-heat factor $\exp(S_n/kT)$).
* **Intuitive Calculus-Free Peak Finding:** Explained why $R_N \approx 1$ ($\ln R_N \approx 0$) corresponds to the top of the abundance hill (where ratios stop climbing and start falling), making the constant-$S_n^*$ approximation and odd-even pairing zig-zags immediately visual.
* **Connected Controls to Le Chatelier's Principle:** High school students learn Le Chatelier's Principle and noble gas electron shells in introductory chemistry; linking neutron density, photon temperature, and magic numbers ($N=50, 82, 126$) to those familiar concepts makes Section 3 click effortlessly.

---

## Turn 2: Hands-on student project and answer key

**User prompt:**

> the hands-on project to let students understand the physics

**Gemini:**

To make the physics genuinely click for high school students, a hands-on project needs to **bridge the gap between clicking sliders in a black-box GUI and doing the physics themselves**.

Below is a complete, 4-part **Student Lab Workbook & Hands-On Project** designed to accompany your `equilibrium_path_gui.py` tool and the refined lecture note. You can append this directly to `LECTURE_NOTE.md` or hand it out as a standalone `STUDENT_PROJECT.md` worksheet.

It scaffolds the learning into four progressive missions:

1. **Mission 1 (Pencil, Paper & Calculator):** Students calculate the peak of a single miniature Tin ($Z=50$) chain by hand so they see *why* odd-even staggering and the $\ln R_N \approx 0$ crossover happen.
2. **Mission 2 (GUI Hypothesis Testing):** Students apply Le Chatelier's Principle from high school chemistry to predict and test how the path shifts.
3. **Mission 3 (The "Waiting Point" Traffic Jam):** Students discover why gold and platinum exist by mapping the $N=50, 82, 126$ shell closures.
4. **Mission 4 (Astrophysical Forensics — Freeze-Out & Code Detective):** Students investigate the MRSN supernova time-evolution and uncover the WinNet spin-factor convention quirk.

### Hands-On Lab Project: Forging Heavy Elements in a Supernova

**Name:** ___________________________ **Date:** _______________

#### Project Overview
In this project, you will act as a nuclear astrophysicist investigating how a **Magnetorotational Supernova (MRSN)** creates the heaviest elements in the periodic table. You will start by calculating a miniature isotopic chain by hand to see how the **Saha Equation** works under the hood, and then use the **Equilibrium Path GUI (`equilibrium_path_gui.py`)** to explore real supernova data.

##### Useful Shortcuts & Constants for Your Calculator
In nuclear astrophysics, temperature is measured in **billions of Kelvin ($T_9 = T / 10^9\text{ K}$)** and energy is measured in **Mega-electron-volts ($\text{MeV}$)**.
* **Thermal Energy ($kT$):** At $T_9 = 1.0$, the thermal energy is $kT = 0.08617\text{ MeV}$.
  $$kT\text{ (in MeV)} = 0.08617 \times T_9$$
* **Quantum Crowd Term:** For a neutron gas at temperature $T_9$ and neutron density $n_n$ (in $\text{cm}^{-3}$), the logarithm of the quantum crowding factor is:
  $$\ln\!\left(\frac{n_n \lambda_T^3}{2}\right) = \ln(n_n) - \frac{3}{2}\ln(T_9) - 80.70$$

---

#### Mission 1: Unplug the Black Box (Pencil & Calculator)

Before trusting the computer, let's see how nature picks a winning isotope along the **Tin chain ($Z = 50$, symbol $\text{Sn}$)**!

Suppose we are inside a cooling supernova where:
* **Temperature:** $T_9 = 1.507$ (so $kT = 0.08617 \times 1.507 = \mathbf{0.130\text{ MeV}}$)
* **Neutron Density:** $n_n = 1.59 \times 10^{29}\text{ cm}^{-3}$

Under these exact conditions, the quantum crowd term is already calculated for you:
$$\ln\!\left(\frac{n_n \lambda_T^3}{2}\right) = \mathbf{-14.07}$$

Ignoring tiny spin and mass-recoil corrections, our simplified log-Saha equation from Equation (2) is just a battle between the negative crowd term ($-14.07$) and the positive neutron glue term ($S_n / kT$):
$$\ln R_N \approx -14.07 + \frac{S_n}{0.130\text{ MeV}}$$

##### Step 1.1: Complete the Tin ($Z=50$) Tug-of-War Table
Start at $^{130}\text{Sn}$ ($N=80$) with a baseline score of $\ln Y = 0.00$. Fill in the missing blanks in the table below using your calculator, adding $\ln R_N$ at each step to climb the hill ($\ln Y_{\text{new}} = \ln Y_{\text{old}} + \ln R_N$):

| Isotope | Neutrons ($N$) | Glue Strength $S_n$ ($\text{MeV}$) | Glue vs. Heat ($S_n / 0.130$) | Step Score ($\ln R_N = -14.07 + S_n/0.130$) | Cumulative Score ($\ln Y$) | Direction (Climbing $\uparrow$ or Falling $\downarrow$?) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| $^{130}\text{Sn}$ | $80$ | — | — | — | **$0.00$** | *(Starting Baseline)* |
| $^{131}\text{Sn}$ | $81$ | $5.20$ | $+40.00$ | $+25.93$ | **$+25.93$** | Climbing $\uparrow$ |
| $^{132}\text{Sn}$ | $82$ | $7.31$ | $+56.23$ | $+42.16$ | **$+68.09$** | Climbing $\uparrow$ |
| $^{133}\text{Sn}$ | $83$ | $2.40$ | $+18.46$ | **1.** _______ | **2.** _______ | **3.** _______ |
| $^{134}\text{Sn}$ | $84$ | $3.62$ | $+27.85$ | **4.** _______ | **5.** _______ | **6.** _______ |
| $^{135}\text{Sn}$ | $85$ | $1.55$ | $+11.92$ | $-2.15$ | **7.** _______ | Falling $\downarrow$ |
| $^{136}\text{Sn}$ | $86$ | $2.85$ | $+21.92$ | $+7.85$ | **8.** _______ | Climbing $\uparrow$ |
| $^{137}\text{Sn}$ | $87$ | $1.10$ | $+8.46$ | $-5.61$ | **9.** _______ | Falling $\downarrow$ |

##### Step 1.2: Analyze Your Hand Calculation
1. **Which Tin isotope has the highest cumulative score ($\ln Y$)?** _________________
2. **Look at the $S_n$ column.** Why does $S_n$ jump up at $N=82, 84, 86$ and drop down at $N=81, 83, 85, 87$? What quantum phenomenon causes this zig-zag?
   ____________________________________________________________________________________
3. **Look at the transition from $N=82$ ($^{132}\text{Sn}$) to $N=83$ ($^{133}\text{Sn}$).** $S_n$ plummets from $7.31\text{ MeV}$ to $2.40\text{ MeV}$! Based on Section 3 of the lecture note, why is $N=82$ so special?
   ____________________________________________________________________________________

---

#### Mission 2: Le Chatelier's Cosmic Dials (GUI Exploration)

Now launch the interactive simulator from your terminal:
```bash
python education/equilibrium_path_lab/equilibrium_path_gui.py
```

Select the **`cooling r-process` ($T_9 = 1.507$)** preset and click on the **$Z=50$** chain to verify your hand calculation from Mission 1!

Next, treat the r-process reversible reaction like a high school chemistry equilibrium experiment:

$$
\text{Nucleus }(Z,N) + \text{Neutron }(n) \rightleftarrows \text{Nucleus }(Z,N+1) + \text{Heat }(\gamma\text{ photon}) \tag{Reaction A}
$$

##### Step 2.1: Predict First, Then Test!

Before touching the sliders, fill in the **Prediction** column using Le Chatelier's Principle. Then move the sliders in the GUI and record what actually happens to the winning neutron number $N$ for Tin ($Z=50$) and the target separation energy $S_n^*$:

| Experiment | What You Change in the GUI | Your Prediction: Will the path shift Left (smaller $N$) or Right (larger $N$)? Why? | Measured Winning $N$ at $Z=50$ | Measured Constant-$S_n^*$ Estimate ($\text{MeV}$) |
|---|---|---|---|---|
| **Baseline** | Select `cooling r-process` preset ($T_9 \simeq 1.51$, $\log_{10}Y_n \simeq -0.41$) | *(Baseline reference)* |  |  |
| **Test A: Neutron Starvation** | Decrease $\log_{10}Y_n$ by **$-2.0$** (100× fewer neutrons) at fixed $T_9$ and $\rho$ |  |  |  |
| **Test B: Neutron Flood** | Increase $\log_{10}\rho$ by **$+2.0$** (100× denser) at fixed $T_9$ and $Y_n$ |  |  |  |
| **Test C: Photon Inferno** | Increase temperature $T_9$ to **$2.50$** while adjusting $\rho$ to keep $n_n$ roughly constant |  |  |  |

##### Step 2.2: Reflection Question

In **Test C**, you kept the number of neutrons in the room ($n_n$) fixed, but turned up the temperature ($T_9$). Why does heating up the room strip neutrons *off* the nuclei instead of helping neutrons fuse *into* the nuclei? *(Hint: Look at where heat $\gamma$ sits in Reaction A and look at $\exp(S_n/kT)$ in Equation 1!)*

#### Mission 3: The "Waiting Point" Traffic Jam (Where Does Gold Come From?)

Set the GUI back to the **`active r-process` ($T_9 = 1.990$)** preset. Look at the full purple equilibrium path across the entire nuclear chart.

1. **Spot the Staircases:** Instead of a smooth diagonal line, the purple path forms three steep, nearly vertical "staircase walls" at three specific neutron numbers. Find them on the horizontal axis ($N$) and record the range of elements ($Z$) piled up along each vertical wall:

   * **First Magic Wall ($N = 50$):** Spans from $Z =$ _____ to $Z =$ _____
   * **Second Magic Wall ($N = 82$):** Spans from $Z =$ _____ to $Z =$ _____
   * **Third Magic Wall ($N = 126$):** Spans from $Z =$ _____ to $Z =$ _____
2. **Solve the Cosmic Mystery:** Once the supernova cools and runs out of neutrons, all the unstable nuclei stuck at the **$N = 126$ wall** will beta-decay ($\beta^-$) step-by-step back to the black squares (stable nuclei) without changing their total mass number $A = Z + N$.

   * Pick a nucleus sitting on the $N = 126$ waiting-point wall in the GUI: $Z =$ _____, $N = 126$.
   * Calculate its total mass number: $A = Z + 126 =$ _____.
   * Look up which **stable element on the periodic table** has an atomic mass around that $A$ (between $A = 190$ and $A = 198$): _________________________.
   * **Conclusion:** Why is the universe enriched in precious metals like **Platinum ($A \approx 195$)** and **Gold ($A = 197$)** right around this mass number? Explain using the concept of a magic-number "traffic jam"!

#### Mission 4: Astrophysical Forensics (Freeze-Out & Code Detective)

##### Part A: The Freeze-Out Trap

Click through all five **MRSN Simulation Presets** in chronological order (from `hot equilibrium` at $t = 0.038\text{ s}$ to `after freeze-out` at $t = 0.270\text{ s}$).

1. Between `near freeze-out` ($t = 0.125\text{ s}$) and `after freeze-out` ($t = 0.270\text{ s}$), the free-neutron density $n_n$ drops from $2.87 \times 10^{28}\text{ cm}^{-3}$ down to $6.66 \times 10^{20}\text{ cm}^{-3}$—a drop of more than **40 million times** in just $0.14\text{ seconds}$! Where did all the free neutrons go?
2. When you click `after freeze-out`, the GUI draws the purple path right on top of the stable nuclei. Suppose a classmate says: *"Look! By $t = 0.27\text{ seconds}$, photodissociation $(\gamma,n)$ knocked all the extra neutrons off and pushed the nuclei back to stability!"* Why is your classmate's statement physically wrong? What assumption of the Saha Equation broke down when $T_9$ dropped to $0.5$ and $n_n$ dropped by a factor of $40\text{ million}$?

##### Part B: Code Detective — The Upside-Down Spin Factor

Select the **`cooling r-process` ($T_9 = 1.507$)** preset. Locate the checkbox labeled **"Match WinNet movie statistical-factor convention"**.

1. Toggle the checkbox **ON** (uses $\frac{G_N}{2G_{N+1}}$) and **OFF** (uses textbook $\frac{G_{N+1}}{2G_N}$). Watch the purple path closely across all elements $Z$.
2. Find **at least one element $Z$** where the winning isotope shifts when you toggle the box:

   * **Element $Z =$** _____
   * **Winning $N$ (WinNet Movie Convention ON):** _____
   * **Winning $N$ (Textbook Convention OFF):** _____
3. For this specific element $Z$, click on its isotopic chain and inspect the bottom plot. Why was this particular chain sensitive enough to flip when the spin factor was inverted, whereas $95\%$ of the other elements didn't budge at all? *(Hint: Compare the heights of the top two isotopes in that chain, and compare the size of $\ln(G_{N+1}/2G_N)$ to the size of $S_n/kT$ in Equation 2!)*

---

### Teacher's Quick Answer Key (For Your Reference)

* **Mission 1 (Table Answers):**
  * **1.** $\ln R_{82\to 83} = -14.07 + 18.46 = \mathbf{+4.39}$
  * **2.** $\ln Y(83) = 68.09 + 4.39 = \mathbf{+72.48}$ (**3.** Climbing $\uparrow$)
  * **4.** $\ln R_{83\to 84} = -14.07 + 27.85 = \mathbf{+13.78}$
  * **5.** $\ln Y(84) = 72.48 + 13.78 = \mathbf{+86.26}$ (**6.** Climbing $\uparrow$)
  * **7.** $\ln Y(85) = 86.26 - 2.15 = \mathbf{+84.11}$
  * **8.** $\ln Y(86) = 84.11 + 7.85 = \mathbf{+91.96}$ *(Peak / Winner!)*
  * **9.** $\ln Y(87) = 91.96 - 5.61 = \mathbf{+86.35}$
  * *Takeaway:* Students see firsthand how an odd-$N$ isotope ($N=85$) can dip ($\ln R_N < 0$) and the next even-$N$ isotope ($N=86$) can surge back up ($\ln R_N > 0$) to claim the global maximum because of neutron pairing!
* **Mission 2 (Le Chatelier):**
  * **Test A (Lower $Y_n$):** Shifts **Left** (smaller $N$, higher $S_n^*$). Fewer reactants ($n$) pull equilibrium left.
  * **Test B (Higher $\rho$):** Shifts **Right** (larger $N$, lower $S_n^*$). Higher density packs more neutrons per $\text{cm}^3$ ($n_n = \rho N_A Y_n$).
  * **Test C (Higher $T_9$):** Shifts **Left** (smaller $N$, higher $S_n^*$). Photons ($\gamma$) are on the product side; increasing $T$ strengthens photodissociation $(\gamma,n)$.
* **Mission 3 (Gold & Platinum):**
  * The $N=126$ waiting-point wall sits around $Z \approx 64\text{ to }72$, giving total mass numbers $A = Z + 126 \approx 190\text{ to }198$. When these nuclei beta-decay back to stability after freeze-out (preserving $A$), they land squarely on **Osmium ($Z=76$), Iridium ($Z=77$), Platinum ($Z=78$), and Gold ($Z=79$)** ($A \approx 192 - 197$).
* **Mission 4 (Freeze-Out & Code Quirk):**
  * **Part A:** The neutrons were captured onto seed nuclei to build heavy elements. At $T_9 = 0.5$, there are neither enough high-energy photons for $(\gamma,n)$ nor enough free neutrons for $(n,\gamma)$—reaction rates are much slower than expansion/beta decay, so equilibrium is frozen out.
  * **Part B:** Chains only flip when two neighboring even-$N$ isotopes are in a near-tie right on the $S_n \approx S_n^*$ boundary, allowing the small $\pm\ln(G_{N+1}/G_N)$ perturbation to tip the balance.
