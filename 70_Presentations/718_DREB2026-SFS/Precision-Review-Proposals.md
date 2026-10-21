# 精确性审查：给 DREB2026 报告（报告人 Fushuai Shi）的修改建议

以下只是建议，每一条由报告人决定是否采纳。

- "v2" 指报告人原稿 [DREB_Meeting_SFS_v2.pptx](assets/src/DREB_Meeting_SFS_v2.pptx)。
- "原型" 指 [DREB2026_SFS.pptx](DREB2026_SFS.pptx)。

核实状态：
- **已核实**：2026-10-21 亲自查过原文引文。
- **评审意见**：来自精确性审查子代理，未再次核对。
- **读图**：从渲染图上读出的数值，不是拟合结果。

术语：
- Sₙ：中子分离能。
- Eₓ：激发能。
- FWHM：半高全宽。
- EWSR：能量加权求和规则。
- IS：同位旋标量。
- NB / NP：NEBULA / NEBULA-Plus 中子探测墙。
- TUNL：Triangle Universities Nuclear Laboratory 的轻核能级评价表；Eb 是该表中某个衰变道的阈值能量。
- DWIA：扭曲波冲量近似。
- AMD / THSR：反对称化分子动力学 / Tohsaki–Horiuchi–Schuck–Röpke 波函数，两种 α 集团结构模型。
- Kπ：转动带的 K 量子数（角动量在对称轴上的投影）和宇称。

引文保留英文原文。建议改成的幻灯片文字也用英文，因为幻灯片是英文。

## A. 报告前建议修改

1. **Chen et al. 2025 的结论被转述错了。**
   - 位置：v2 第 4 页写 "The new assignment (7.27 MeV 1-) conflicts with the NNDC 7.37 MeV."。原型第 2 页备注和第 4 页第 3 条要点也沿用了"新态"的说法。
   - 依据（已核实，[arXiv:2501.05231v1](https://arxiv.org/html/2501.05231v1)）：
     - "The fourth peak at 7.27(10) MeV may correspond to the 7.37-MeV state observed before."
     - "The present result cast doubt on the previous spin assignment."
     - 能量分辨为 "a resolution of approximately 700 keV (FWHM)"。
     - 束流能量为 "9.06 MeV/u"，在 NSCL 的 ReA6 上测量。
   - 也就是说，原文把 7.27 MeV 的峰对应到已知的 7.37 MeV 能级（用词是 "may correspond"），并对这个能级原来的 3⁻ 自旋指定提出怀疑。
   - 建议改为："Chen et al. 2025 assign 1⁻ to a peak at 7.27(10) MeV, probably the known 7.37 MeV level (≈ 700 keV FWHM)."

2. **支持 3⁻ 的证据不只有同位旋相似态，而且有一部分就来自 ⁹Be + n 衰变道。**
   - 位置：v2 第 4 页写 "used completely different probe (p-induced, ⁹Be+n coincidence + invariant mass)"。
   - 依据（已核实，[TUNL ¹⁰Be](https://nucldata.tunl.duke.edu/nucldata/HTML/A=10/10Be_2004.shtml)）：
     - ⁹Be(n,n) 测量："Analysis of polarization and differential cross section data leads to the Jπ = 3-, 2+ assignments … for 10Be*(7.37, 7.55)"。
     - ⁹Be(n,γ) 测量："En = 622 keV neutrons to populate the Jπ = 3- D-wave resonance at 10Be*(7.372)"。
   - 建议：
     - 在 ¹⁰B 同位旋相似态旁边加上 "⁹Be(n,n) polarization: 3⁻" 作为 3⁻ 的证据。
     - 说明新的是探针（230 MeV/u 的质子），⁹Be + n 衰变道本身以前已经研究过。

3. **峰的位置。**
   - 位置：v2 第 9 页写 "a single peak-like structure centred at Eₓ ≈ 7.37 MeV"。
   - 依据（读图，两次独立读数）：
     - 直方图最高点约在 7.50–7.51 MeV。
     - 半高处约在 7.24 和 7.83 MeV，即 FWHM 约 0.59 MeV（此项为评审意见）。
     - 最高点落在 7.542 MeV 的 2⁺ 上，比 7.371 MeV 高 0.14 MeV。
   - 建议：
     - 给出拟合得到的峰心和 σ。
     - 把峰心同时与 7.371 MeV 和 7.542 MeV 比较。
     - 说明 Eₓ 刻度是怎样检验的。

4. **角分布检验需要加上 L = 2。**
   - 位置：v2 第 10 页写 "Next: … dσ/dΩ"。原型第 9 页只列了 L = 1 和 L = 3。
   - 依据：
     - 7.542 MeV 的 2⁺ 落在峰内（见第 3 条）。
     - Chen et al. 自己的角分布图（原型第 5 页）画了 1⁻、2⁺、3⁻ 三条曲线。
   - 建议：
     - 改为 "Angular distribution of the peak against L = 1, 2 and 3 calculations."。
     - 补上"只有一个能级"的结果："L = 1 shape, no extra term → the 7.37 MeV level is 1⁻"。

5. **总结页的 "First ⁹Be + n coincidence measurement"。**
   - 位置：v2 第 10 页。
   - 依据：
     - 第 2 条里的中子共振实验已经在 ⁹Be + n 衰变道里研究过中子分离能以上的 ¹⁰Be。
     - 2026-10-21 做了两次网络检索，没找到更早的 ⁹Be + n 不变质量测量，但这不能证明没有。
   - 建议：
     - 去掉 "First"。
     - 如果要保留，先做文献核查并请导师确认，再写明它的确切范围，例如 "first invariant-mass measurement of ¹⁰Be(p,p′) → ⁹Be + n"。

6. **NB-only / NP-only 图例。**
   - 位置：v2 第 9 页的图。
   - 依据（读图，两位评审独立读出）：
     - 在 7.51 MeV 处，NB∪NP 约 1204 计数，而 NB-only + NP-only 约 515 + 774 = 1289。
     - 9.0 MeV 和 10.0 MeV 处也是两者相加大于并集。
     - 如果两个 "only" 集合互不重叠，它们相加不可能大于并集。
   - 建议：
     - 检查两个直方图的定义。
     - 如果两个集合有重叠，把图例改成 "NB" 和 "NP"。

7. **中子探测器的数值。**
   - 位置：
     - v2 第 5 页写 "NEBULA ε(1n)~40% / σ(γ)~170 ps / σ(n)~340 ps"，引用 Kobayashi 2013。
     - v2 第 8 页写 "σ = 258 ps"。
   - 依据（已核实，[APR 58 S26](https://www.nishina.riken.jp/researcher/APR/APR058/pdf/S26.pdf)）：
     - NEBULA-Plus "is a 90-element two-wall" array，"installed at SAMURAI … in Summer-Autumn 2022"。
     - 它的效率："Further detailed analysis is underway"。
     - 所以 2013 年给出的数值只适用于 NEBULA 本身。
   - 评审意见（未再次核对）：
     - 时间刻度图只覆盖 NEBULA_ID 1–120，也就是只有 NEBULA，没有显示 NEBULA-Plus 的时间对齐。
     - 在能读到的资料里没有找到 170 ps 和 340 ps 这两个数值。
   - 建议：
     - 把参考值标为 "NEBULA (2013)"。
     - 给出 Kobayashi 2013 的页码。
     - 展示或说明 NEBULA-Plus 的时间对齐。
     - 准备一句话，解释这次测量为什么是 258 ps。

## B. 建议修改

8. **Y:X 图的坐标轴标签。**
   - 位置：v2 束流径迹页的 "Y:X at Target" 图。
   - 问题：ROOT 里 `Draw("Y:X")` 把 Y 放在纵轴，但图的纵轴写的是 "X[mm]"。
   - 建议：把轴标签或图标题对调。

9. **"P [GeV/c]"。**
   - 位置：v2 第 7 页的动量分布图。
   - 问题（原稿没给依据，这是物理估算）：按约 220 MeV/u 估算，⁹Be 的动量约 6.1 GeV/c，除以电荷 Q = 4 得 1.52 GeV/c。所以图上 1.53 处的峰是 p/Q（动量除以电荷），不是 p。
   - 建议：标为 "p/Q [GeV/c]"。

10. **靶厚。**
    - 位置：v2 第 5 页写 "T=140 mg/cm2"。
    - 问题（评审意见，原稿没给依据）：18.8 mm 厚、20 K 的液氢约为 133 mg/cm²。
    - 建议：确认靶厚和运行温度。

11. **装置图里的 "d, ⁴He" 径迹。**
    - 问题：这些径迹属于同一次实验的其他反应道。
    - 建议：在图注里说明，否则听众会问为什么 (p,p′) 的报告里出现它们。

12. **X. Wang et al., NIMA (2026) 172066。**
    - 建议：补上卷号。2026-10-21 在网上没有找到这篇文章。

13. **Runge–Kutta 拟合里的 u、v。**
    - 位置：v2 第 7 页。
    - 建议：写出定义（u = dx/dz，v = dy/dz）。

14. **同位旋标量偶极强度。**
    - 位置：原型第 2 页的卡片。
    - 依据（已核实，摘要）：Chen et al. 写的是 "exhausts approximately 5%-15% of the isoscalar dipole energy-weighted sum rule"。
    - 建议卡片改为："Exhausts ≈ 5–15 % of the IS-dipole EWSR: suggests α clustering."

15. **阈值要注明来源。**
    - 位置：原型第 2 页。
    - 依据（已核实）：TUNL 给出 Eb = 6.8122 MeV（⁹Be + n）和 7.4133 MeV（⁶He + α）。
    - 建议：加上 "(TUNL)"，或者引用原子质量评估表。

16. **(p,pα) 备用页。**
    - 位置：v2 第 3 页。
    - 建议：把 "validates" 改为 "supports"。
    - 评审意见：该测量在 150 MeV/u 下进行，比较对象是使用 THSR 和 AMD 波函数的 DWIA 计算。请核对 [arXiv:2311.13129](https://arxiv.org/abs/2311.13129)。

17. **能带图细节。**
    - 位置：原型第 4 页。评审意见，未再次核对。
    - 问题：
      - Kuchera 的图里是 "(3⁻, 4⁺) 10.15"，能带图写的是 "(4⁺) 10.2"。
      - Kuchera 指出，相似态的 α 集团结构与该 3⁻ 属于 Kπ = 1⁻ 转动带的结论 "appears to contradict"。

## 未核实的文献内容

以下文献的正文页内容没有读到：
- Kobayashi, NIMB 317, 294 (2013)
- von Oertzen, Phys. Rep. 432, 43 (2006)
- Lyu, PRC 93, 054308 (2016)
- X. Wang 的 NIMA 文章
