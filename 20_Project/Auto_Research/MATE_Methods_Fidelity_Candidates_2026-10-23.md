# 方法、保真规则，以及四个后继候选的物理动机（2026-10-23）

写的人：负责人 mate-lead-p。收件箱 770 的第 2 项。顾问 441 号之后改了电荷门控那一节：算子是占有率加权，不是空键掩膜。441 号核过的上一版是 5734/50/`b1a39f7bb52411af5995d1cd19c42d4a33ebedce102c369512efddf8cc094a78`。这是草稿，放在 OrbitOS 的 Auto_Research，不写入 `10_Papers-Thesis/`。不含 H4.25 或 H4.26 的判对数、损失或筛选结果。图是示意，不是成绩。

论文要比较的是带物理量的网络和通用网络。四项任务（13C/14C、径迹数、极角、动能）的格子仍是未测，骨架在 [MATE_Paper_FourTasks_Skeleton_2026-10-23.md](/Users/Reid%20Hu/OrbitOS/20_Project/Auto_Research/MATE_Paper_FourTasks_Skeleton_2026-10-23.md:1)。本草稿不填那些格子。

## 存盘图像

一张图是形状 `(80, 48, 2)` 的 float32，布局 NHWC。通道 0 在设计上解释为存盘的 log1p 电荷。通道 1 在设计上解释为漂移代理。这两句是设计上的解释，不是对真实时间投影室读出的认证。采用的算子只用矩阵轴 0（长度 80）和轴 1（长度 48）。不把这两根轴叫成 Z 或 Y。`input_drift_range` 是元数据，不是对通道 1 的一次测量。

Raw 在这里指理想读出代理：没有扩散、电子学响应和阈值，格子是矩形。不能把 Raw 说成已经认证的真实读出。HC 是 Hierarchy Cluster，只作理想参照，含真值聚类，不作命中条件。

## 两条臂各自是整份模型

XA 指 `fusion_type` 为 `cross_attention`、`physics_norm` 为 `zscore`。RN 指 `fusion_type` 为 `none`、`physics_norm` 为 `none`。XA 减 RN 是物理向量加上融合这一整条路径。不能把这个差写成注意力单独的因果效应。分类器仍接收原来的四个矩。四个候选都还不是入队行。H4.26 的十八行结束之前不加行。可追加行数是 0。

## 保真规则用在这四个候选上

项目所有者 2026-10-09 的规则：模型看到的每个输入都要能从真实时间投影室的读出得到；模拟真值不得进入图像、通道或物理向量。写一个新输入之前，先点名它读的上游量，并说明那个量是测到的。

四个候选读的上游：

| 候选 | 读什么 | 不读什么 |
| --- | --- | --- |
| 电荷门控 | 通道 0，以及 8×8 分块的矩阵下标 | 通道 1，模拟真值 |
| 轴 0 卷积 | 通道 0 | 通道 1，模拟真值 |
| 轴 1 电荷和 | 通道 0，沿轴 1 求和 | 通道 1，模拟真值 |
| 轴 0 位置通道 | 矩阵行号 | 两个通道里的存盘值，模拟真值 |

位置通道是矩阵下标，不是校准过的长度。所以它满足「不读模拟真值」，不满足「这是一次测量」。这是它排在最后的原因。

生产链仍未绑定。五个训练 H5 的内容身份还没有对应到具体 ROOT、宏、转换器字节和事件映射。科学标志仍开，本机搜索这一项已经收掉，见 [b2-work-item-close.md](/Users/Reid%20Hu/firstmate/data/mate-lead-p/out/d636/b2-work-item-close.md:1)。这个缺口是外推限制，不是一条已经证实的、要停下数据管线的结论。

明确不作为新训练输入的：按真值角度旋转或沿径迹方向做卷积；把 HC 或第二台探测器当成第二视图；把电子学、扩散或阈值做成新的训练输入。

## 四个候选为什么值得试

要缩小的是增广匹配之后 XA 减 RN 的差。RN 的融合是 `none`，不接收物理向量。卷积和位置通道加在图像上，两臂都看得到。电荷门控和轴 1 电荷和只进 XA 的融合路径。顾问 437 号与 441 号都把「以后若只许一行」放在电荷门控。这条次序没有锁成入队次序。可追加行数仍是 0。H4.26 结束之前不写定稿清单。

电荷门控乘在 softmax 之前。通道 0 先取与 0 的较大值，再按 8×8 做平均，得到 10×6 共 60 个数，除以其中的最大值。通道全不超过 0 时，60 个门都是 1。负的分数乘以 0 变成 0，分数被抬高。这是占有率加权，不是空键掩膜。算子在 [h427_charge_gate.py](/Users/Reid%20Hu/firstmate/data/mate-lead-p/out/d632/h427_charge_gate.py:21) 与 [gate_scores](/Users/Reid%20Hu/firstmate/data/mate-lead-p/out/d632/h427_charge_gate.py:29)。特征图是 `(512, 10, 6)`，令牌按轴 0 再轴 1 排成 60 个，见 [model.py](/Users/Reid%20Hu/firstmate/data/mate-lead-p/out/d575/src82/src/models/model.py:431) 与 [cross_attention.py](/Users/Reid%20Hu/firstmate/data/mate-lead-p/out/d575/src82/src/models/cross_attention.py:239)。8×8 平均的 10×6 与这张格子对齐。不把一块 8×8 说成该令牌的全部感受野。

现算子不能保证注意力跟着电荷走。本机复算写在 [gate-occupancy-note.md](/Users/Reid%20Hu/firstmate/data/mate-lead-p/out/d638/gate-occupancy-note.md:9)：电荷键 −1、一个空键 −2、其余 0，门只在电荷键为 1。门控后空键权重高于电荷键。把空键改成 −∞ 时电荷键权重才是 1。那是另一件改动，不换进这一行，现在也不另写一行。

轴 0 卷积测的是表示。XA 和 RN 都可以用它，所以它最不可能单独关掉上面那个差。核固定为 `[1, 2, 3, 2, 1] / 9`，不学习。轴 0 两端各补 2 个 0，卷积结果加回通道 0。见 [h427_axis0_conv.py](/Users/Reid%20Hu/firstmate/data/mate-lead-p/out/d633/h427_axis0_conv.py:11)。

轴 1 电荷和是 `max(通道 0, 0)` 沿轴 1 的和，80 个数，接在四个矩之后。这是沿轴 0 的行电荷投影，不是沿通道 1 的漂移曲线。漂移形状已经留给 H4.26 的分箱。`physics_dim` 从 4 变为 84，形状和容量仍混在一起。见 [h427_axis1_profile.py](/Users/Reid%20Hu/firstmate/data/mate-lead-p/out/d634/h427_axis1_profile.py:18)。存盘四列的名字是 `Iyy, Izz, Iyz, total_mass`，见 [dataset.py](/Users/Reid%20Hu/firstmate/data/mate-lead-p/out/d575/src82/src/data/dataset.py:11)。这四个数重建不出沿轴 0 的双峰或一端峰。从图像重算的 [physics_from_raw_image](/Users/Reid%20Hu/firstmate/data/mate-lead-p/out/d575/src82/src/data/normalization.py:171) 先减加权平均再算二阶矩，那一条是对质心。权重是 max(通道 0, 0) 乘以通道 1 大于 0.1 的命中，offbeam 模式还去掉轴 1 下标 22 至 25，第 211 行的平均是这个命中门之后的质心，不是通道 0 的全部像素，所以存盘的 Iyy 不能读成通道 0 全体像素的质心二阶矩。它不是存盘列公式的证明。存盘列对原点还是对质心，本回合没有从转换器再证。

轴 0 位置通道最弱。第 r 行的值是 `r / 79`，沿轴 1 复制。第 0 行是 0，第 79 行是 1。输入通道数从 2 变为 3。见 [h427_axis0_position.py](/Users/Reid%20Hu/firstmate/data/mate-lead-p/out/d635/h427_axis0_position.py:12)。它是矩阵下标，不是测量。加在图像上时两臂都看得到。

## 图

[candidate_reads.png](/Users/leyi/.treehouse/MATE-Automation-8e6480/9/MATE-Automation/outputs/figures/H427/candidate_reads.png:1) 与同名 pdf。脚本 [plot_H427_candidate_reads.py](/Users/leyi/.treehouse/MATE-Automation-8e6480/9/MATE-Automation/scripts/plotting/plot_H427_candidate_reads.py:1)。灰底为主，只有电荷门控用强调色。强调色标的是以后若只许一行时先排的那一个，不是成绩。四条箭头从「Stored image」的右缘分别进入四个方框的左缘。箭头上不写字。标题是 Candidate reads。这张图不放进论文稿。
