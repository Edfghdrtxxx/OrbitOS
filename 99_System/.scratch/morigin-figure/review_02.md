needs-revision

## Findings

### Finding 1: The "Derivative" rating may be too generous -- "Close Copy" of the conceptual composite should be considered
- File: 02_integrity_audit.md
- Issue: The audit rates the figure as "Derivative" primarily because no single published figure is copied directly. However, the threshold between "Derivative" and "Close Copy" should consider whether the *composite conceptual narrative* (not just individual panel layouts) is substantially reproduced. The figure's entire logic -- left panels showing NN potential and mean-field potential, right panel showing decomposed momentum distribution with color-coded connections between coordinate-space features and momentum-space regions -- closely follows the standard pedagogical presentation given in talks and lecture slides within the SRC community. The audit gives significant credit for the two-panel-left / one-panel-right layout and color-coded connecting lines as "original compositional choices," but these are relatively minor presentational decisions that do not alter the intellectual content. A figure that reproduces the same conceptual mapping with only layout rearrangement and color changes is arguably closer to "Close Copy of a concept" than "Derivative." The audit should explicitly address whether rearranging panels and changing colors is sufficient to constitute a derivative work rather than a close copy.
- Why it matters: If the figure is closer to a close copy of a well-known pedagogical schematic, the attribution requirements become stronger -- a caption saying "following the conceptual framework" is insufficient, and the figure may need to be cited as "adapted from" or "after" a specific source, or permission may be required.
- Confidence: medium -- This depends on whether one evaluates originality at the level of visual execution or conceptual content. The audit conflates these. However, I cannot confirm the existence of a single published figure that uses this exact composite layout, so the audit's position is defensible.

### Finding 2: Incomplete survey of SRC schematic figures in the literature
- File: 02_integrity_audit.md
- Issue: The audit compares MORIGIN to Hen et al. (2017), Ciofi degli Atti, Subedi et al., Frankfurt & Strikman, and Rios et al. It does not consider several potentially important sources of similar schematic figures:
  1. **Arrington, Higinbotham, Rosner & Sargsian (2012)** -- Prog. Part. Nucl. Phys. 67, 898. This SRC review contains conceptual schematics connecting NN correlations to momentum distributions and is a commonly cited source in the field.
  2. **Fomin, Higinbotham, Sargsian et al. (2017)** -- Annu. Rev. Nucl. Part. Sci. 67, 129. Another review that uses pedagogical figures for SRC concepts.
  3. **Atti & Simula (2015)** -- Phys. Rev. C 91, 034325, and related Ciofi degli Atti single-author reviews that sometimes include schematic decompositions of n(k).
  4. **Conference/workshop talk slides** from CLAS, JLab, and SRC collaboration meetings, which frequently use exactly this type of coordinate-to-momentum mapping schematic. These are not formally published but are widely circulated and could be the actual origin of this visual convention.
  5. **Ryckebusch et al. or Cosyn et al.** who have published schematic decompositions of momentum distributions showing mean-field vs. SRC contributions.
  The audit states it checked "standard nuclear physics textbooks" but did not check the most relevant review articles beyond Hen et al. (2017). The closest published schematic to MORIGIN is more likely found in one of these reviews or in widely-circulated talk slides than in Hen et al.'s specific figures.
- Why it matters: If a closer visual match exists in the literature that was not checked, the "Derivative" rating could be wrong -- the figure might be a close copy of a specific source the audit did not examine. Missing the actual source of the visual convention undermines the entire comparison.
- Confidence: medium -- I believe these reviews exist and contain relevant schematics, but I cannot confirm from memory whether any single figure in them is a closer match to MORIGIN than Hen et al. Fig. 1/2. The audit should have flagged this uncertainty rather than presenting its survey as comprehensive.

### Finding 3: The audit misidentifies the color-coding in the actual figure
- File: 02_integrity_audit.md
- Issue: In paragraph 3 of the Originality Rating section, the audit describes the color scheme as "green for repulsive core -> green flat region, blue for attractive well -> blue high-momentum bump, orange for mean-field -> orange low-momentum contribution." Looking at the actual figure, this mapping does not match what is shown. In the figure:
  - The **green** arrow in the NN potential panel points downward into the **attractive well** (not the repulsive core). The green connecting line goes to the green curve in rho(p) around 2-3 fm^-1.
  - The **blue** arrow points deeper, toward the bottom of the attractive region or the transition zone. The blue curve in rho(p) appears at the highest momenta (~3+ fm^-1).
  - The physics audit (01_physics_audit.md) actually flags the blue arrow placement as problematic, noting it should point at the repulsive core but instead points near the attractive well.
  The integrity audit's description of the color-coding contradicts what is visually present in the figure and contradicts the companion physics audit. This factual error weakens the audit's ability to assess similarity to published figures, since it is comparing a mischaracterized version of the figure.
- Why it matters: An integrity assessment that misdescribes the figure it is auditing cannot reliably assess similarity to published sources. The color-to-physics mapping is central to the figure's originality claim.
- Confidence: high -- I am comparing the audit text directly against the visible figure. The green arrow clearly points at the attractive well region, not the repulsive core.

### Finding 4: Attribution recommendation understates what is needed
- File: 02_integrity_audit.md
- Issue: The audit recommends citing Hen et al. (2017) and Ciofi degli Atti & Simula (1996) as mandatory, with Wiringa et al. (1995) and Frankfurt & Strikman (1988) as recommended. It then says "redesign not strictly required" and suggests a caption phrase "following the conceptual framework described in [Hen et al.]." This framing is too permissive. If the figure is derivative of a well-known pedagogical device from the SRC community, the appropriate attribution is "adapted from" or "after [source]," not merely "following the conceptual framework." The phrase "following the conceptual framework" could be read as acknowledging the physics, not the visual-pedagogical device. For a master's thesis, the safer and more honest attribution would be:
  - "Schematic adapted from [specific source] with modifications" if a close source can be identified, or
  - "Schematic created by the author, inspired by the pedagogical presentation in [Hen et al. (2017)] and related SRC reviews" if no single source is close enough.
  The current recommendation splits the difference in a way that could appear evasive.
- Why it matters: Insufficient attribution in a thesis is an academic integrity risk. The recommendation should err on the side of more explicit credit, not less.
- Confidence: high -- This is a matter of attribution best practice, not a factual claim about the literature.

### Finding 5: Differentiation suggestions are reasonable but one is circular
- File: 02_integrity_audit.md
- Issue: Suggestion 2 ("Label the momentum regions explicitly with Mean-field, 2N-SRC, 3N-SRC") is described as something that "would make the figure more informative and more clearly the author's own pedagogical creation." This reasoning is circular -- adding standard labels that appear in every SRC review does not make a figure more original; it makes it more closely resemble the standard literature presentation. Similarly, suggestion 1 (adding quantitative annotations) does differentiate, but it also transforms the figure from a schematic into a semi-quantitative plot, which may not serve the author's pedagogical purpose. The audit should acknowledge this tradeoff rather than presenting all suggestions as unambiguously positive.
- Why it matters: If the author follows suggestion 2 thinking it increases originality, they may inadvertently make the figure look more like a direct reproduction of standard SRC review figures. The advice could backfire.
- Confidence: medium -- Whether adding labels increases or decreases perceived originality depends on what specific published figures look like, which I cannot exhaustively verify.

### Finding 6: The audit does not address the "n-n interaction" label
- File: 02_integrity_audit.md
- Issue: The figure labels the NN potential as "n-n interaction" (neutron-neutron), which is physically misleading since SRC are dominated by np (neutron-proton) pairs due to the tensor force. This is noted in the physics audit but not in the integrity audit. From an integrity standpoint, this label actually *differentiates* the figure from standard SRC schematics (which typically label it as "NN interaction" or "nucleon-nucleon potential"), but it does so by being physically incorrect. The integrity audit should note that this label, while a point of visual difference from published figures, should not be counted as a mark of originality because it appears to be an error rather than a deliberate choice.
- Why it matters: An integrity audit should not inadvertently count errors as evidence of originality. The "n-n" label should be flagged as a differentiating feature that is also a physics mistake, so the author does not retain it thinking it helps their originality case.
- Confidence: high -- The physics of np dominance in SRC is well-established, and the label discrepancy is visible in the figure.
