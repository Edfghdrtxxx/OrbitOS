<!-- Verbatim source section; overview: [[../fm-ar-maxh-confound]] -->
<!-- SOURCE-BODY-START -->
## 5. Cheapest decisive check on the GPU box (exact command)

The box has `data/exp8/*.h5`, the auditfix runs, and the keyed caches (`*_penultimate_<key>.npz`). The check is torch-free (h5py+numpy+pandas only): rebuild the deterministic sample, compute per-event observables, join to cached max|h|, report observable AUROCs and residual AUROC. Save this as `scripts/analysis/exp8_maxh_observable_join.py` on the box:

```python
"""Join cached EXP8 penultimate max|h| to per-event input observables."""
import sys, json
from pathlib import Path
import numpy as np, pandas as pd
ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "scripts" / "plotting"))
import exp8_inference_utils as U
from exp8_artifacts import resolve_arm_pair

GROUPS = [("A", ("A",)), ("B", ("B",)), ("C+D", ("C", "D")),
          ("E", ("E",)), ("F+G+H", ("F", "G", "H"))]
N_PER_GROUP, SEED = 1500, 42

def auroc(pos, neg):
    r = pd.Series(np.concatenate([pos, neg])).rank().to_numpy()
    n1, n0 = len(pos), len(neg)
    return float((r[:n1].sum() - n1 * (n1 + 1) / 2) / (n0 * n1))

def spearman(a, b):
    return float(pd.Series(a).corr(pd.Series(b), method="spearman"))

resnet_run, _ = resolve_arm_pair()
U.RUN_DIRS.configure({"ResNet": resnet_run, "CrossAtt": resnet_run})
preds = U.load_predictions("ResNet")
rng = np.random.default_rng(SEED)
rows = []  # (group, channel, global_idx) in cache row order
for label, tags in GROUPS:
    sub = preds[preds["channel"].isin(list(tags))]
    take = rng.choice(len(sub), size=min(N_PER_GROUP, len(sub)), replace=False)
    chosen = sub.iloc[np.sort(take)]
    for ch in tags:
        idx = chosen.loc[chosen["channel"] == ch, "global_idx"].to_numpy(np.int64)
        rows += [(label, ch, i) for i in idx]

obs = {k: [] for k in ["sum_q", "n_hit", "z_extent", "y_extent", "max_pix",
                       "Iyy", "Izz", "Iyz", "total_mass"]}
for ch in dict.fromkeys(r[1] for r in rows):
    idx = np.array([r[2] for r in rows if r[1] == ch])
    imgs, phys = U.load_events(ch, idx, normalized=False, return_physics=True)
    q = np.expm1(imgs[:, 0])                      # undo log1p compression
    hit = q > 0
    obs["sum_q"] += q.sum((1, 2)).tolist()
    obs["n_hit"] += hit.sum((1, 2)).tolist()
    ys = np.where(hit.any(2), np.arange(80)[None, :, None] + 1, 0)
    zs = np.where(hit.any(1), np.arange(48)[None, None, :] + 1, 0)
    obs["y_extent"] += (ys.max((1, 2)) - np.where(ys.max((1,2))>0, ys[ys>0].reshape(len(idx),-1).min(1), 0)).tolist()
    obs["z_extent"] += (zs.max((1, 2)) - np.where(zs.max((1,2))>0, zs[zs>0].reshape(len(idx),-1).min(1), 0)).tolist()
    obs["max_pix"] += q.max((1, 2)).tolist()
    for j, k in enumerate(["Iyy", "Izz", "Iyz", "total_mass"]):
        obs[k] += phys[:, j].tolist()

ch_arr = np.array([r[1] for r in rows])
grp = np.array([r[0] for r in rows])
cd = np.isin(ch_arr, ["C", "D"]); fgh = np.isin(ch_arr, ["F", "G", "H"])
seen_all = np.isin(grp, ["A", "B", "C+D"]); un_all = np.isin(grp, ["E", "F+G+H"])

for npz in sorted((ROOT / "outputs/figures/EXP8/_cache_feature_embedding").glob("*_penultimate*.npz")):
    X = np.load(npz)["X"].astype(np.float64)
    m = np.abs(X).max(1)
    print(f"== {npz.name}")
    print(f"  max|h| FGH vs C+D: {auroc(m[fgh], m[cd]):.3f}   unseen vs all-seen: {auroc(m[un_all], m[seen_all]):.3f}")
    for k, v in obs.items():
        v = np.asarray(v)
        print(f"  {k:10s} AUROC FGH vs C+D: {auroc(v[fgh], v[cd]):.3f}   "
              f"spearman(max|h|, {k}) pooled: {spearman(m, v):+.3f}")
    # residual: rank of max|h| minus OLS fit on all observables -> AUROC
    O = np.column_stack([np.asarray(v) for v in obs.values()])
    O = np.column_stack([np.ones(len(O)), O])
    beta = np.linalg.lstsq(O, pd.Series(m).rank().to_numpy(), rcond=None)[0]
    resid = pd.Series(m).rank().to_numpy() - O @ beta
    print(f"  residual max|h| AUROC FGH vs C+D: {auroc(resid[fgh], resid[cd]):.3f}   "
          f"unseen vs all-seen: {auroc(resid[un_all], resid[seen_all]):.3f}")
```

Run (from repo root on the box):

```
cd /root/autodl-tmp/MATE-Automation-V4 && python scripts/analysis/exp8_maxh_observable_join.py
```

**Decision rule:** if any observable (or the linear combination) reaches AUROC ≈ 0.90 for FGH vs C+D **and** the residual max|h| AUROC drops to ≈ 0.5, the signal is a trivial-observable proxy. If the residual stays ≳ 0.8, the penultimate peak encodes learned structure beyond the checked observables. Runtime ≈ minutes (9 channel slices × ≤1500 events, h5py reads only).

<!-- SOURCE-BODY-END -->
