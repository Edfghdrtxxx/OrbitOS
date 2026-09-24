<!-- Verbatim source section; overview: [[../fm-ar-code-audit]] -->
<!-- SOURCE-BODY-START -->
## Additional seed evidence from surviving counterfactual artifacts

Counterfactual files exist for the three XA-HC seeds and for XA-Raw seeds 0, 42, plus the corrected-label seed42 run. Their exact `conditions` values are:

- XA-HC s0: original .9530; permuted-q .9535; zero-cls .7975; zero-q .8955.
- XA-HC s1: original .9605; permuted-q .9605; zero-cls .9570; zero-q .5775.
- XA-HC s42: original .9530; permuted-q .9525; zero-cls .9540; zero-q .4905.
- XA-Raw legacy s0: original .8675; permuted-q .8675; zero-cls .4105; zero-q .2970.
- XA-Raw legacy s42: original .8715; permuted-q .8715; zero-cls .1935; zero-q .8065.
- XA-Raw label-fix s42: original .9275; permuted-q .9275; zero-cls .1935; zero-q .8065.

The permutation result is consistent with query-poisoning being absent on these 2,000-event subsets, but the classifier-side physics effect is not seed-stable on HC: zero-cls deltas are −15.55 pp, −0.35 pp, and +0.10 pp. Raw legacy zero-cls deltas are −45.70 pp and −67.80 pp, with only two legacy seeds and a separate corrected-label run. A paper claim that physics is load-bearing on Raw is supported as a repeated diagnostic pattern for the two legacy seeds; “redundant on HC” is not seed-robust from these artifacts because the HC zero-cls result spans a large negative effect to parity. These are diagnostic-subset results, not full-val or paired-arm CIs.

<!-- SOURCE-BODY-END -->
