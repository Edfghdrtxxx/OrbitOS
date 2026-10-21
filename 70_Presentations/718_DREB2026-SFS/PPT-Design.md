# PPT-Design — Probing Exotic Structures in ¹⁰Be via ⁹Be + n Coincidence Measurements with the SAMURAI Spectrometer

## 1. Context
- Occasion / stakes: contributed oral talk at DREB2026 (13th International Conference on Direct Reactions with Exotic Beams), Shenzhen, 1–6 Nov 2026. Presenter: Fushuai Shi (IMP).
- Audience / what they already know: specialists in direct reactions with radioactive beams. They know invariant-mass spectroscopy, SAMURAI and NEBULA, and α clustering in Be isotopes. Many may not know the 2025 claim of a 1⁻ state at 7.27 MeV in ¹⁰Be, or that the evaluated 3⁻ at 7.371 MeV sits 1σ away.
- Duration: 20 min including questions (**assumption**: DREB2026 has not published talk lengths; DREB2022 contributed talks had 20-minute slots, e.g. session FRI1, 11:00–11:20, https://indico.global/event/6138/sessions/9004/session-timetable.pdf) → slide budget: 10 main slides + 4 backup (heuristic ~2 min/slide)
- Language: English (non-native audience; short sentences)

## 2. Story
- **Core conclusion (one sentence):** A ⁹Be + n invariant-mass spectrum from ¹⁰Be(p,p′) shows one peak just above Sₙ, where a 2025 1⁻ assignment at 7.27(10) MeV and the evaluated 3⁻ at 7.371 MeV compete; angular distributions and a lineshape fit will test which one it is.
- **Empowerment promise** (spoken in the first minute): By the end of this talk you will know what our ⁹Be + n spectrum shows near 7.3 MeV and what will decide between 1⁻ and 3⁻.
- **Fence** (what this could be confused with, and how it differs): Chen et al. 2025 measured ¹⁰Be(d,d′) by missing mass with the AT-TPC + SOLARIS (≈ 700 keV FWHM); ⁹Be(n,n) polarization gave the 3⁻; this work uses a proton probe at 230 MeV/u and reconstructs the decay ⁹Be + n by invariant mass.
- **Cut list** (deliberately excluded, and why): (p,pα) ground-state result, beam tracking, Runge–Kutta tracking and NEBULA timing details → backup slides 11–14; they support the method but not the spin question. The original Thank-you slide → replaced by Contributions.

## 3. Narrative spine
- Beginning (stakes, slide 2): two spin assignments compete near 7.3 MeV. **Cycle point 1:** one level with a disputed spin, or two levels.
- Middle 1 (slides 4–5): cluster bands already contain a 3⁻ and a 2⁺ there; angular data say 1⁻, isobaric analogs say 3⁻. Verbal punctuation: the four outline questions, "first of four … second of four".
- Middle 2 (slides 6–7): the proton probe and the ⁹Be + n coincidence; selections.
- Middle 3 (slide 8): one peak just above Sₙ; the three levels are not resolved. **Cycle point 2:** the spectrum alone cannot tell the spins apart.
- End (slides 9–10): angular distributions and a lineshape fit decide; Contributions. **Cycle point 3:** the 1⁻ assignment is tested by an independent probe.

## 4. Slide plan
Titles, card text and Contributions wording are candidates for the user's audit; none is recorded in `30_Research/Humanize/Registers.md`.

| # | Title (full sentence) | Purpose (delete-test justification) | Elements (each will be spoken to) | Layout hint | Notes seed (逐字稿 kernel) |
|---|---|---|---|---|---|
| 1 | Probing Exotic Structures in ¹⁰Be via ⁹Be + n Coincidence Measurements with the SAMURAI Spectrometer | Programme title; states the question | Kicker, title, question line, name, date, TBD co-author line | 717 navy cover, cover palette only | Promise: what the spectrum shows and what will decide |
| 2 | Two spin assignments compete near 7.3 MeV in ¹⁰Be. | Stakes before method | Native level diagram (7.27(10) ±1σ, 7.371, 7.542, thresholds); IF 1⁻ / IF 3⁻ cards; question | Diagram left, cards right | One level with a disputed spin, or two levels? |
| 3 | Outline | Question chain | Four questions linked by therefore / therefore / but | Presenter's contents chrome | Each question is raised by the one before |
| 4 | ¹⁰Be's cluster bands already contain a 3⁻ and a 2⁺ near 7.3 MeV. | Why the spin matters for structure | Native band scheme (von Oertzen 2006) + Chen 2025 column; three bullets | Scheme left, bullets right | A 1⁻ adds a state outside the scheme |
| 5 | The angular distribution points to 1⁻, isobaric analogs to 3⁻. | The dispute itself | Chen spectrum + angular distribution; Kuchera analog scheme; "Our test" bar | Two columns + bottom bar | Therefore a different probe |
| 6 | SAMURAI and NEBULA detect ⁹Be + n from ¹⁰Be(p,p′) in coincidence. | Method; answers outline Q2 | Setup figure; reaction; beam, target, fragment, neutron rows; invariant-mass and Eₓ equations with glosses | Figure left, facts right, equations bottom | Projectile, target, ejectile, residue named |
| 7 | Beam ID, fragment ID, and NEBULA timing select ⁹Be + n events. | Event selection | Beam PID, fragment PID, NEBULA dT; three stat cards | Three columns | Details in backup 12–14 |
| 8 | The ⁹Be + n spectrum shows one peak just above the neutron threshold. | The result | Zoomed Eₓ spectrum with level ticks (untried annotation type: user to confirm); four "what we can say" rows with TBD chips | Figure left, rows right | Fill centroid and σ; the maximum sits near 7.5 MeV |
| 9 | Angular distributions and a lineshape fit can distinguish 1⁻ from 3⁻. | Next steps; answers outline Q4 | Three step cards; two outcome cards | Three cards + two outcomes | Clean, measure dσ/dΩ, fit the lineshape |
| 10 | Contributions | Last image during questions | Three numbered statements | Numbered list | The three points to take away |
| 11–14 | Backup: (p,pα); beam tracking; Runge–Kutta tracking; NEBULA timing | Answers to likely questions | Presenter's figures | Figure grids | — |

- Slide 1 states the promise. Last slide = **Contributions**.
- Five S's — Salient idea: one peak where two spins compete. Symbol: the coral (1⁻) band touching the teal (3⁻) line.

## 5. /academic-ppt handoff
- Profile: Generic academic, with the presenter's own header band (title, gradient rule, IMP logo) and footer band (starfield, "DREB meeting", slide number) kept unchanged
- Font/math: Times New Roman body; header title keeps the presenter's Arial; display equations as LaTeX PNG (Times New Roman + `texgyretermes-math.otf`, `render_eq.py`)
- Slide count: 10 main + 4 backup
- Output folder: `70_Presentations/718_DREB2026-SFS/`
- Gold clone: `717_…` (cover, `render_eq.py`); builder `build_dreb_pptx.js` + `apply_chrome.py`
- Constraints for the author: no number without a source; TBD chips for the peak centroid, the resolution σ and the co-author / collaboration / experiment-ID line; no "First" claim until a literature check supports it; Contributions last, no Thank-you slide.
