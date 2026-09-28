---
type: learning-session
topic: Velocity filters — in-flight separation of fusion residues (Exp. Techniques NP Ch. 11 §III.B)
source: "[[ExperimentTechniquesNP_Chapter10-11]]"
status: active
updated: 2026-09-28
---
# Velocity filters

**Source:** `50_Resources/Physics/Courses/ExperimentTechniquesNP_Chapter10-11/ExperimentTechniquesNP_Chapter10-11.md`, Ch. 11 §III.B "Velocity filters" (SHIP, Figs. 12–14; HECK; Daresbury, Figs. 15–17). Kinematics come from §I.B, Eqs. (2) and (5).

**Purpose:** "Understand all the details" for the learning-group deck `70_Presentations/717_Learning Group-20260916/Velocity Filters.pptx`. Another agent built the deck; the learner is building the picture now. Tutor turns cite slide numbers from the built deck.

**Index:** [[Progress-context]] · related thread [[2026-08-07-1538 Radioactive beams projectile fragmentation]] (known solid: at fixed $v$, $B\rho \propto A/q$)

### Prior context
- **Already computable:** (Turns 4–5, learner) a magnet bends by $B\rho=p/q$; in complete fusion $p_{\mathrm{CN}}=p_{\mathrm{beam}}$, so a magnet can only use $q$, and the overlapping charge-state distributions make that useless
- **What broke:** (Turn 3, learner) a bare detector behind the target can't pick 3 fusion events out of $0.6\times10^{18}$ beam particles, because the residues fly forward inside the beam
- **New object had to:** (Turns 4–6, learner) select on velocity, where $v_{\mathrm{CN}}/v_{\mathrm p}=A_{\mathrm p}/A_{\mathrm c}\approx0.22$, while staying blind to $q$ and $m$. Crossed fields do this: $qE=qvB\Rightarrow v=E/B$

### Parked branches
- [ ] **Delayed coincidence** (implant–decay correlation; Fig. 14, slide 14). Parked in Turn 4; also due when the thread reaches pillar 4, identification.
- [ ] **Why superheavy fusion cross sections are tiny** (quasi-fission + fission survival; no resonances because levels overlap at high excitation). Parked in Turn 4; open as a child note when resumed.

---

### Turn 1 — 2026-09-28 (learner)

> /learn The velocity filters section in 50_Resources/Physics/Courses/ExperimentTechniquesNP_Chapter10-11/ExperimentTechniquesNP_Chapter10-11

### Tutor

You've already built the deck for this section, so I won't walk through it from the top. The section rests on four ideas:

1. **Kinematic signature.** In complete fusion the compound nucleus takes the whole projectile momentum, so it moves at the centre-of-mass velocity, $v_{\mathrm{CN}} = \frac{A_{\mathrm p}}{A_{\mathrm c}}\,v_{\mathrm p}$. Eq. (2), $E_{\mathrm r} = \frac{A_{\mathrm p}}{A_{\mathrm c}}E_{\mathrm p}$, is the energy form of this. The residue is well separated in velocity from the beam and from binary products such as transfer and fission.
2. **No charge or mass dispersion.** A filter that selects on $v$ alone passes every charge state and every isotope from fusion. That's the transmission advantage over recoil mass separators, and the reason for the sub-10 pb sensitivity.
3. **Architecture.** SHIP uses separated fields: a plate condenser first, then dipoles, in two stages. Daresbury (and the LISE upgrade) use crossed $\mathbf E\times\mathbf B$ fields.
4. **Identification afterwards.** Nothing measures mass in flight, so isotopes are assigned by decay spectroscopy at the focal plane: the $^{151}$Lu proton line and the correlated α chains of element 108.

Your index already has one relevant result from the fragmentation thread: at fixed $v$, a magnet alone sorts by $A/q$. Keep that in mind.

**Which of the four would you least trust yourself to explain if someone in the group asked "why?"**

### Turn 2 — 2026-09-28 (learner)

> That's the deck build by another claude, not mine. It is good that you perceived it. Your tutor process could mention the specific slides and elements to let me have a look.
> I have not built up the full picture of it now.
> What problem does velocity filters solve? How is the problem produced?

### Tutor

Correction noted: another agent built the deck. From now on I'll point to specific slides.

Your question is about why the device exists, so we'll rebuild it from the experiment that needed it, not start from its definition. Look at **slide 2** ("Ten days of beam produced three atoms of element 108") and its illustration (blue = beam, red = fusion residues). The numbers come from the text around Fig. 14. A $^{58}\mathrm{Fe}$ beam hits a thin $^{208}\mathrm{Pb}$ target for $240\ \mathrm{h}$, with $0.6\times10^{18}$ projectiles in total. That works out to about $7\times10^{11}$ per second. Complete fusion made three atoms of $^{265}108$. Nearly every projectile passes through the thin target without reacting. The few fused nuclei also fly forward along the beam direction; **slide 6** covers this (the narrow forward cone).

**Question:** Suppose you put a silicon detector directly behind the target to catch the element-108 atom and watch it decay. What goes wrong? Use the numbers to estimate how bad it is.

### Turn 3 — 2026-09-28 (learner)

> [image: Fig. 14, element-108 alpha spectra; see Context below]
> 1. I am confused by "the implantation of a heavy nucleus". What does it mean?
> 2. Why the cross section of this fussion reaction is so small? No resonance?
> 3. In that supposition, I could not distinguish the sole three fusion reaction from the penetrating beam particles. Number: 3 over 0.6 times 10 to the 18

#### Context — attached image (transcribed)

![[vf-turn3-fig14-element108-alpha-spectra.png|700]]

- **Title:** "Alpha Spectra $^{265}108$ from: $^{58}$Fe+$^{208}$Pb"
- **Layout:** four stacked panels sharing one x-axis, "Energy / MeV", from 8 to 12. The y-axis is "Counts".
- **Panel 1, "pause"** (y from 0 to about 16): a busy spectrum of 1–4-count bins spread over 8–12 MeV. Labelled peaks: $^{213}$Rn near 8.1 MeV (tallest, about 13 counts), $^{213}$Po near 8.4–8.5 MeV (about 9), $^{212m}$Po near 10.15 MeV (about 6), and $^{212m}$Po near 11.65 MeV (about 4).
- **Panel 2, "ER-correlated"** (y 0–4): only a few bins. $^{257}104$ near 8.8 MeV (2), $^{261}106$ near 9.6 MeV (2), and $^{265}108$ near 10.35 MeV (two adjacent bins of 2).
- **Panel 3, "1st generation"** (y 0–4): only $^{265}108$ near 10.35 MeV.
- **Panel 4, "2nd and 3rd generation"** (y 0–2): $^{257}104$ near 8.75 MeV (two adjacent bins). Dashed vertical lines near 8.15 MeV and 10.05 MeV mark the window.
- **Caption (verbatim):** "Fig. 14. Decay spectra collected in an experiment on the discovery of element 108. Uppermost spectrum: ungated decay spectra collected between the accelerator beam pulses; below: decays measured in delayed coincidence to the implantation of a heavy nucleus; next spectrum: the same spectrum with a window on the mass of the correlated residue; the two bottom spectra show later generations of correlated decays."

### Tutor

**Your answer (3): right, and it's worse than you said.** $3/(0.6\times10^{18}) = 5\times10^{-18}$, so the signal is about one part in $2\times10^{17}$. There's also a second failure: at about $7\times10^{11}$ beam ions per second, a silicon detector sitting in the beam would saturate immediately and be radiation-damaged within minutes. You couldn't pick out the signal, and you couldn't even keep the detector running. Direction doesn't help either, because the residues come out inside the beam cone (slide 2 illustration, slide 6). I've written this into "What broke" at the top of the note.

**(1) "Implantation of a heavy nucleus."** In the real setup, SHIP sits between the target and the detector. A residue that gets through SHIP reaches the focal-plane silicon detector with a few tens of MeV. It stops a few µm inside the silicon and stays there. That stopping is the "implantation", and it is itself a detected event with an energy, a position (strip), and a time. Minutes or milliseconds later the stuck nucleus α-decays **at the same position**. "Delayed coincidence" means you only accept a decay if an implant happened earlier at that same spot. Your image shows what this does. Panel 1 (ungated) is full of $^{213}$Rn and $^{212m}$Po lines from other reactions. Panel 2 (implant-correlated) keeps only a handful of counts, including $^{265}108$ at about 10.35 MeV. **Slide 14**, step 2, is this cut. We'll come back to it when we reach identification.

**(2) Why the cross section is so small.** This is a side branch, so here's the short version; I can open a child note if you want the full mechanism. Two steps must both succeed. First, after the nuclei touch, the dinuclear system has to become one compact compound nucleus instead of re-separating (quasi-fission). For heavy, fairly symmetric partners like Fe + Pb, re-separation usually wins. Second, the excited $^{266}108$ has to cool by emitting a neutron instead of fissioning. Its fission barrier is small, so fission usually wins. That's why the beam energy is kept near the Coulomb barrier, keeping the excitation energy as low as possible (§I.B, around Eq. 3). On resonances: at about 10–20 MeV of excitation in an $A\approx266$ nucleus, the levels are so dense that their widths overlap. There are no isolated levels to hit, so the cross section is smooth and statistical, not resonant.

**Next step: what tool was already on the shelf.** From your fragmentation thread you already know a magnet bends by rigidity, $B\rho = p/q$. Before you open **slide 5** (its title gives the answer away), work this out. **Question:** In complete fusion, how does the compound nucleus's momentum compare with one beam particle's momentum, and what does that mean for separating residues from beam with a magnet alone?

### Turn 4 — 2026-09-28 (learner)

> 1. Does the saturation of silicon detector relate to dead time?
> 2. Simply explain the mechanism of radiation-damge here.
> 3. Add delayed coincidence learning plan to daily note. Park it in this session.
> 4. Also add that cross section branch note to daily note. Park.
> 5. "Kept near the coulomb barrier" Whose coulomb barrier? Element 108? What's its name and pronunciation?
> 6. Moment comparison: same, since moment conservation. That means the velocity of compound nucleus and beam particles differ a lot, as their mass diverge considerably. It is easier to separate them by velocity filters.

### Tutor

**(1) Saturation and dead time: yes, dead time is one part of it.** Each hit produces a pulse lasting about a microsecond through the preamp and shaper, plus several µs for conversion and readout. At $7\times10^{11}\ \mathrm{s^{-1}}$ the mean gap between hits is about 1.4 ps. That is $10^6$ times shorter than one pulse, so pulses pile on top of each other without end. The electronics are effectively 100% dead: for a paralyzable system, the recorded rate *drops* toward zero as the true rate rises. Saturation also includes pile-up, which destroys the energy information, and a large beam-induced current in the silicon.

**(2) Radiation damage, simply.** A beam ion slows down in the silicon mainly by ionizing it. That part is the signal, and it heals by itself. A small fraction of its energy goes into nuclear collisions that knock Si atoms off their lattice sites, and this is dense near the end of a heavy ion's track. The displaced atoms leave vacancy–interstitial defects, which put energy levels in the middle of the band gap. Those levels (a) thermally generate carriers, so leakage current and noise rise, and (b) trap the signal electrons and holes, so charge is lost and energy resolution degrades. **Correction to Turn 3:** I said "within minutes". At this rate a surface-barrier detector reaches damaging heavy-ion fluence far faster than that, likely in well under a second. The exact number depends on the beam-spot size; treat this as an order-of-magnitude estimate.

**(3), (4) Parked.** Both are now under "Parked branches" at the top of this note and nested under the velocity-filters item in today's daily note.

**(5) Whose Coulomb barrier?** The barrier between the projectile and the target as they approach, $^{58}$Fe ($Z=26$) and $^{208}$Pb ($Z=82$), not a property of element 108. A rough estimate from two touching charged spheres, with $R=r_0A^{1/3}$ and $r_0\approx1.3\ \mathrm{fm}$:

$$V_C\approx\frac{Z_{\mathrm p}Z_{\mathrm t}\,e^2}{4\pi\varepsilon_0\,(R_{\mathrm p}+R_{\mathrm t})}\approx\frac{26\cdot82\cdot1.44\ \mathrm{MeV\,fm}}{12.7\ \mathrm{fm}}\approx240\ \mathrm{MeV}\ \text{(CM)}$$

In the lab frame that is $\times\frac{266}{208}\approx310\ \mathrm{MeV}\approx5.3\ \mathrm{MeV}/u$, which matches the text's "$E_{\mathrm p}\approx5\ \mathrm{MeV}/A$" (Eq. 3). Element 108 is **hassium**, Hs, pronounced **HASS-ee-əm** (/ˈhæsiəm/). It is named after Hesse (Latin *Hassia*), the German state where GSI in Darmstadt stands. Fig. 14 is from that discovery experiment (1984).

**(6) Your momentum answer: first half right, last step skipped.** $p_{\mathrm{CN}}=p_{\mathrm{beam}}$ is exactly right, and so is the consequence $v_{\mathrm{CN}}/v_{\mathrm p}=A_{\mathrm p}/A_{\mathrm c}=58/266\approx0.22$. But I asked about a **magnet alone**, and you jumped straight to the answer (velocity filter) without showing why the magnet fails. That missing step is the reason the device exists, so it's worth saying out loud. Scaffold: a magnet bends by $B\rho=p/q$, and ions leave the target foil in a spread of charge states. **Slide 7** shows the residues arriving in about five states, roughly $q\approx18$–$22$.

**Question:** With $p$ identical for residue and beam, what is the only quantity a magnet can still use to tell them apart, and why is that a poor handle?

### Turn 5 — 2026-09-28 (learner)

> The only quantity a magnet can still use to tell them apart is the charge value. It takes little effects in this case because the charge state has a distribution, and we can't align the difference between them.

### Tutor

Right: $q$ is the only handle left, and it fails for the reason you gave. To sharpen "can't align the difference": the residues and the beam each leave the target foil with a *spread* of charge states. Since $p$ is the same for both, for almost any beam charge state there's a residue charge state with nearly the same $p/q$, so their $B\rho$ distributions overlap. You need to reject the beam by something like $10^{12}$ or more (the SHIP figures in §III.B). Even a tiny overlapping tail of the beam buries three atoms. I've added this to "Already computable" at the top of the note.

So the new device has to do two things: select on $v$, where residue and beam differ by a factor of about 4.6, and be **blind to $q$** so every charge state passes together. That second requirement is the whole point of **slide 8**, and slide 7 shows what's lost without it. Here's the building block. Send the ion through a region with an electric field $\mathbf E$ and a magnetic field $\mathbf B$ crossed at right angles (this is the Daresbury layout, **slide 11**), arranged so the two forces point in opposite directions.

**Question:** Write the two forces on an ion of charge $q$ moving at $v$. What condition lets it go straight through, and does that condition depend on $q$ or on the mass?

### Turn 6 — 2026-09-28 (learner)

> F_E = qE; F_B = qvB
> And the condition lets it go straight through is v = E/B, which doesn't depend on q or on the mass

### Tutor

Exactly. $q$ multiplies *both* forces, so it cancels from the balance $qE=qvB$, and the mass never enters a force balance at all. That's the core of the device: it selects $v_0=E/B$, and **every** charge state and isotope moving at $v_0$ goes straight through together (slide 8). The prior-context frame is now complete (top of note): the problem, why a magnet alone fails, and what the new object had to do.

One caveat for your talk. The *selected* velocity is independent of $q$ and $m$, but how hard an off-velocity ion gets pushed aside is not: its sideways acceleration is $\frac{q}{m}(E-vB)$. So the filter has one pass condition for all ions, while its sorting strength differs between them.

**Next: SHIP isn't crossed-field.** **Slide 10** and Fig. 12 show SHIP with separated fields: a plate condenser first, then a magnet bending the other way. For small deflections, an ion's deflection angle is (sideways impulse) / (forward momentum). Here's the condenser worked out. The ion spends time $L_E/v$ in the field, so it gets an impulse $qE\,L_E/v$, and

$$\theta_E\approx\frac{qE\,L_E/v}{mv}=\frac{qE\,L_E}{mv^2}.$$

**Question:** Do the same for a magnet of length $L_B$ to get $\theta_B$. Then find the condition for zero net deflection, $\theta_E=\theta_B$. Does $q/m$ still cancel, and what velocity gets selected?

### Turn 7 — 2026-09-28 (learner)

> 1. Draw a digram by inserting the original figures and adding term callouts there to explain the figures of the beam line on slide 10 and 12.
> 2. What is the plate condenser? Dipole works for condensing?
> 3. It is essentially still qE = qvB. So q/m still cancels and v = E/B gets selected.

### Tutor

**(1) Diagrams.** Slide 12 is an outline slide with no figure. I read "slide 10 and 12" as slide 10's Fig. 12 (SHIP) and also annotated the other beam-line figure, Fig. 15 on slide 11 (Daresbury), so both readings are covered. Each diagram embeds the original drawing, with callouts outside it. Labels marked *(inferred)* are not printed on the original figure. I identified them from their shape and the text.

![[vf-ship-fig12-callouts.excalidraw|1000]]

Follow SHIP left to right. The condenser plates push ions sideways, the diaphragms and velocity slit keep only the chosen path, the dipole bends ions back, and the unreacted beam ends in the beam dump. The residues go on through the exit triplet and NASE to the focal-plane detector.

![[vf-daresbury-fig15-callouts.excalidraw|1000]]

At Daresbury the beam runs **right to left**: target and γ array, then two crossed-field filters where $\mathbf E$ and $\mathbf B$ overlap, then the DQQQ spectrometer and the focal plane.

**(2) Plate condenser, and do dipoles condense?** "Condenser" is the old word for **capacitor**. A plate condenser is two parallel metal plates at $\pm$ high voltage, giving a uniform $\mathbf E$ between them that pushes ions sideways. It is an *electric deflector*, and it doesn't condense or focus anything. The dipole doesn't condense either: it's a *magnetic deflector* that bends the path. Focusing, which is the lens job you may be thinking of, is done by the **quadrupole triplets** at the entrance and exit.

**(3) Half right.** $q/m$ does cancel. But "$v=E/B$" doesn't follow, because you skipped the step I asked for. In SHIP the two fields are in *different places*, so nothing balances forces at a single point. What has to match is the total **angle** each element gives the ion, and an angle builds up over the element's length. That's why $L_E$ appeared in $\theta_E=\frac{qE\,L_E}{mv^2}$. (Logged in [[Trap-Log]].) Narrowed hint: in the magnet the sideways force is $qvB$, it acts for a time $L_B/v$, and you divide the impulse by the forward momentum $mv$.

**Question:** Write $\theta_B$, set it equal to $\theta_E$, and solve for $v$. Is the selected velocity $E/B$, and when would it be?
