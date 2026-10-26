# 论文 36 格：今天能填的和要训练的（2026-10-23）

写的人：负责人 mate-lead-p。不改 `10_Papers-Thesis/`。不打开运行目录，不读 H4.25 成绩，不连接，不入队。

已打开的笔记里，能对上这 36 格的判对数是 0。归因表 r3 的整数是 4He 对其余类，不是 13C/14C、径迹数、极角或动能。不把那些整数抄进这张表。六份盘上的 TRK 配置都是种子 42，成绩不在已打开的笔记里，今天不打开运行目录，所以对应格仍写未测。

| 任务 | 臂 | 42 | 0 | 1 | 今天 |
| --- | --- | --- | --- | --- | --- |
| 13C/14C | XA | 未测 | 未测 | 未测 | 盘上只有 HC、种子 42。HC 不是这一格 |
| 13C/14C | 同主干 RN | 未测 | 未测 | 未测 | 没有配置 |
| 13C/14C | 原样 RN | 未测 | 未测 | 未测 | 没有配置 |
| 径迹数 | XA | 未测 | 未测 | 未测 | 种子 42 的配置在盘上，成绩未打开。种子 0、1 没有配置 |
| 径迹数 | 同主干 RN | 未测 | 未测 | 未测 | 同上，融合 `none`，主干是 modified |
| 径迹数 | 原样 RN | 未测 | 未测 | 未测 | 没有配置 |
| 极角 | XA | 未测 | 未测 | 未测 | 种子 42 的 v2 配置在盘上，成绩未打开。种子 0、1 没有配置 |
| 极角 | 同主干 RN | 未测 | 未测 | 未测 | 同上 |
| 极角 | 原样 RN | 未测 | 未测 | 未测 | 没有配置 |
| 动能 | XA | 未测 | 未测 | 未测 | 种子 42 的配置在盘上，成绩未打开。种子 0、1 没有配置 |
| 动能 | 同主干 RN | 未测 | 未测 | 未测 | 同上 |
| 动能 | 原样 RN | 未测 | 未测 | 未测 | 没有配置 |

径迹三项若以后引用已有运行，写成蒙特卡洛步点的理想参照。13C/14C 的命中条件不是 HC。

今天判对数是 0。六格先打开成绩，再决定是否重训：径迹数的 `TRK2-XA-TrackClass` 与 `TRK1-ResNet-TrackClass`，极角的 `TRK4-v2-XA-AngleReg` 与 `TRK3-v2-ResNet-AngleReg`，动能的 `TRK6-XA-EnergyReg` 与 `TRK5-ResNet-EnergyReg`。没有配置的格才列入新训练。这不是 H4.26 的十八行，不写入已冻结的入队合同，现在不追加。时长不沿用 H4.25 的每行分钟数，那是另一项任务。预算不够时，去掉原样 RN 这一臂。原样 RN 是 12 格，去掉后剩下 24 格。极角另有不带 v2 的 `TRK4_XA_AngleReg.yaml` 与 `TRK3_ResNet_AngleReg.yaml`，也是种子 42、`TRK_Alpha`、主干 modified。dropout 是 0.3，v2 是 0.05。两份成绩都未打开，不另占格。

## 收件箱 806：能填的格和缺口对应的配置（2026-10-23）

今天能填进表里的判对数仍是 0。没有打开运行目录，没有读 H4.25 成绩，没有连接。下面只给缺口格对应的配置名。配置在盘上不等于成绩已测。

- 13C/14C，XA，种子 42：盘上有 [EXP2_CrossAtt_HC_100k_13C14C.yaml](/Users/leyi/.treehouse/MATE-Automation-8e6480/9/MATE-Automation/configs/EXP2_CrossAtt_HC_100k_13C14C.yaml:8)，`Garfield_HC`，主干 modified。HC 是 Hierarchy Cluster（层次聚类），不是这一格要的 Raw。种子 0、1 没有同任务配置。
- 13C/14C，同主干 RN 和原样 RN：三个种子都没有对上的配置。
- 径迹数，XA，种子 42：[TRK2_XA_TrackClass.yaml](/Users/leyi/.treehouse/MATE-Automation-8e6480/9/MATE-Automation/configs/TRK2_XA_TrackClass.yaml:7)，`TRK_Alpha`，`fusion_type` cross_attention，主干 modified。种子 0、1 没有配置。成绩未打开，格仍是未测。
- 径迹数，同主干 RN，种子 42：[TRK1_ResNet_TrackClass.yaml](/Users/leyi/.treehouse/MATE-Automation-8e6480/9/MATE-Automation/configs/TRK1_ResNet_TrackClass.yaml:6)，同一数据集，`fusion_type` none，主干 modified。种子 0、1 没有配置。
- 径迹数，原样 RN：三个种子都没有 `backbone_type` stock 的配置。
- 极角，XA，种子 42：[TRK4_v2_XA_AngleReg.yaml](/Users/leyi/.treehouse/MATE-Automation-8e6480/9/MATE-Automation/configs/TRK4_v2_XA_AngleReg.yaml:12)，`TRK_Alpha`，cross_attention，主干 modified。种子 0、1 没有配置。
- 极角，同主干 RN，种子 42：[TRK3_v2_ResNet_AngleReg.yaml](/Users/leyi/.treehouse/MATE-Automation-8e6480/9/MATE-Automation/configs/TRK3_v2_ResNet_AngleReg.yaml:11)，`TRK_Alpha`，fusion none，主干 modified。种子 0、1 没有配置。
- 极角，原样 RN：三个种子都没有 stock 配置。
- 动能，XA，种子 42：[TRK6.yaml](/Users/leyi/.treehouse/MATE-Automation-8e6480/9/MATE-Automation/configs/TRK6.yaml:12)，`TRK_Alpha_v2`，cross_attention，主干 modified。种子 0、1 没有配置。
- 动能，同主干 RN，种子 42：[TRK5.yaml](/Users/leyi/.treehouse/MATE-Automation-8e6480/9/MATE-Automation/configs/TRK5.yaml:13)，`TRK_Alpha_v2`，fusion none，主干 modified。种子 0、1 没有配置。
- 动能，原样 RN：三个种子都没有 stock 配置。

径迹数和极角的配置数据集名是 `TRK_Alpha`。动能的配置数据集名是 `TRK_Alpha_v2`。这里不把它们写成同一批文件。

## 下一波排队依据（不追加）

36 格都还是未测。下表是缺口格对应的训练行名，不是已经入队的行。已有配置的种子 42 行，成绩仍未打开，所以也不把它们写成已完成。

| 格 | 训练行 | 现在的配置 |
| --- | --- | --- |
| 13C/14C XA 42 | `13C14C-XA-Raw-s42` | 无 Raw 配置。HC 配置不是这一行 |
| 13C/14C XA 0 | `13C14C-XA-Raw-s0` | 无 |
| 13C/14C XA 1 | `13C14C-XA-Raw-s1` | 无 |
| 13C/14C 同主干 RN 42 | `13C14C-RN-matched-Raw-s42` | 无 |
| 13C/14C 同主干 RN 0 | `13C14C-RN-matched-Raw-s0` | 无 |
| 13C/14C 同主干 RN 1 | `13C14C-RN-matched-Raw-s1` | 无 |
| 13C/14C 原样 RN 42 | `13C14C-RN-stock-Raw-s42` | 无 |
| 13C/14C 原样 RN 0 | `13C14C-RN-stock-Raw-s0` | 无 |
| 13C/14C 原样 RN 1 | `13C14C-RN-stock-Raw-s1` | 无 |
| 径迹数 XA 42 | `TRK2-XA-TrackClass` | 已有，种子 42，成绩未打开 |
| 径迹数 XA 0 | `TRK2-XA-TrackClass-s0` | 无 |
| 径迹数 XA 1 | `TRK2-XA-TrackClass-s1` | 无 |
| 径迹数 同主干 RN 42 | `TRK1-ResNet-TrackClass` | 已有，种子 42，成绩未打开 |
| 径迹数 同主干 RN 0 | `TRK1-ResNet-TrackClass-s0` | 无 |
| 径迹数 同主干 RN 1 | `TRK1-ResNet-TrackClass-s1` | 无 |
| 径迹数 原样 RN 42 | `TRK-count-RN-stock-s42` | 无 |
| 径迹数 原样 RN 0 | `TRK-count-RN-stock-s0` | 无 |
| 径迹数 原样 RN 1 | `TRK-count-RN-stock-s1` | 无 |
| 极角 XA 42 | `TRK4-v2-XA-AngleReg` | 已有，种子 42，成绩未打开 |
| 极角 XA 0 | `TRK4-v2-XA-AngleReg-s0` | 无 |
| 极角 XA 1 | `TRK4-v2-XA-AngleReg-s1` | 无 |
| 极角 同主干 RN 42 | `TRK3-v2-ResNet-AngleReg` | 已有，种子 42，成绩未打开 |
| 极角 同主干 RN 0 | `TRK3-v2-ResNet-AngleReg-s0` | 无 |
| 极角 同主干 RN 1 | `TRK3-v2-ResNet-AngleReg-s1` | 无 |
| 极角 原样 RN 42 | `TRK-angle-RN-stock-s42` | 无 |
| 极角 原样 RN 0 | `TRK-angle-RN-stock-s0` | 无 |
| 极角 原样 RN 1 | `TRK-angle-RN-stock-s1` | 无 |
| 动能 XA 42 | `TRK6-XA-EnergyReg` | 已有，种子 42，成绩未打开 |
| 动能 XA 0 | `TRK6-XA-EnergyReg-s0` | 无 |
| 动能 XA 1 | `TRK6-XA-EnergyReg-s1` | 无 |
| 动能 同主干 RN 42 | `TRK5-ResNet-EnergyReg` | 已有，种子 42，成绩未打开 |
| 动能 同主干 RN 0 | `TRK5-ResNet-EnergyReg-s0` | 无 |
| 动能 同主干 RN 1 | `TRK5-ResNet-EnergyReg-s1` | 无 |
| 动能 原样 RN 42 | `TRK-energy-RN-stock-s42` | 无 |
| 动能 原样 RN 0 | `TRK-energy-RN-stock-s0` | 无 |
| 动能 原样 RN 1 | `TRK-energy-RN-stock-s1` | 无 |

原样 RN 指 stock 茎加单线性头。同主干 RN 指 modified 茎和该任务现有头。这 36 个行名现在不追加。
