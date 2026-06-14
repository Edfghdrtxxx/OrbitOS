---
area: "[[Physics]]"
tags: [statistics, regression, goodness-of-fit]
created: 2026-06-14
last_reviewed:
next_review: 2026-06-14
review_interval: 0
---
# R-Squared (Coefficient of Determination)

## Schematics

![[R-Squared_diagram.svg]]
*The better the model fit, the smaller the residuals (blue squares, sum = $SS_\text{res}$ about the fit line $f$) relative to the total variation (red squares, sum = $SS_\text{tot}$ about the mean $\bar y$). $R^2$ is one minus the ratio of the blue area to the red area. (CC BY-SA 3.0, Wikimedia Commons — Orzetto)*

![[R-Squared_graph.svg]]
*Two datasets fit by linear regression: the tight, low-scatter fit (top) has a high $R^2$ near 1, while the diffuse fit (bottom) has a low $R^2$. Identical regression lines can yield very different $R^2$ depending on residual spread. (CC BY-SA 4.0, Wikimedia Commons)*

## Definition

The **coefficient of determination** $R^2$ is a [[Goodness of Fit]] statistic giving the proportion of the variance in the dependent variable that is predictable from (explained by) the model. It is defined as one minus the ratio of the residual sum of squares to the total sum of squares:
$$R^2 = 1 - \frac{SS_\text{res}}{SS_\text{tot}}, \qquad SS_\text{res} = \sum_i (y_i - f_i)^2, \quad SS_\text{tot} = \sum_i (y_i - \bar{y})^2$$
where $y_i$ are the observed values, $f_i$ the model-predicted values, and $\bar{y}$ the mean of the observations.

## Key Points

- **Interpretation:** $R^2 = 1$ is a perfect fit (zero [[Residual|residuals]]); $R^2 = 0$ means the model does no better than predicting the mean $\bar{y}$. $R^2$ can be **negative** when the model fits worse than a horizontal line (common for non-OLS fits or out-of-sample evaluation).
- **Variance explained:** equals $1 - \dfrac{\text{unexplained variance}}{\text{total variance}}$; it measures explained variation, not predictive accuracy in absolute units (unlike [[Mean Squared Error]]).
- **Link to correlation:** in simple [[Linear Regression]] with an intercept (ordinary [[Least Squares]]), $R^2$ equals the square of the Pearson [[Correlation]] coefficient, $R^2 = r^2$.
- **Monotonic in predictors:** adding regressors never decreases $R^2$, so it cannot detect [[Overfitting]] — use the **adjusted** form, which penalizes the number of predictors $p$ over $n$ samples:
$$\bar{R}^2 = 1 - (1 - R^2)\,\frac{n - 1}{n - p - 1}$$
- **Limitations:** a high $R^2$ does not imply the model is correct, unbiased, or causal; always inspect residual plots alongside it.

## Examples

- **Physics fitting:** quoting $R^2$ (or reduced [[Chi-Squared]] for weighted fits) when fitting a calibration curve or decay spectrum to assess how well the functional form captures the data.
- **Machine learning:** the default regression score in scikit-learn (`model.score(X, y)`) returns $R^2$ on the held-out set; a negative value flags a model worse than the naive mean baseline.
- **Worked value:** if $SS_\text{tot} = 200$ and the fit leaves $SS_\text{res} = 30$, then $R^2 = 1 - 30/200 = 0.85$ — the model explains 85% of the variance.

## Related Concepts

- [[Goodness of Fit]]
- [[Linear Regression]]
- [[Least Squares]]
- [[Residual]]
- [[Mean Squared Error]]
- [[Chi-Squared]]
- [[Correlation]]
- [[Overfitting]]

## References

- Draper, N. R. & Smith, H. (1998). *Applied Regression Analysis* (3rd ed.). Wiley. (Ch. 1–2, sums of squares and $R^2$).
- Wikipedia: [Coefficient of determination](https://en.wikipedia.org/wiki/Coefficient_of_determination).
