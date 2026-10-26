# 论文四项任务：现在能在本机做的部分（2026-10-23）

写的人：负责人 mate-lead-p。不改 `10_Papers-Thesis/`。不连接那台电脑。不排训练。

四项任务是 13C/14C 分类、径迹数分类、极角回归、动能回归。D84（[pipeline-plan.md](/Users/Reid%20Hu/firstmate/data/mate-gpu-lead/pipeline-plan.md:535)）把目标设计定为三臂：XA、同主干的 RN、原样 RN，四项任务乘三臂乘三个种子，共 36 行。预算不够时才明确改成 XA 与同主干 RN 的 24 行。计划第 6 节原来的「XA 对原样 RN」两臂不再是候选。XA 减同主干 RN 是整份模型的差，不叫融合单独的作用。行数还没定，表格一行都没有排。命中先在 4He 对其余类上宣布，再在 13C/14C 上确认。下面的配置盘点与这套三臂设计分开。

## 本机配置里实际有什么

工作树 `configs/` 今天能读到的文件如下。`backbone_type` 都是 `modified`，没有原样主干。

| 任务 | 本机文件 | `experiment_id` | 融合 |
| --- | --- | --- | --- |
| 13C/14C | `EXP2_CrossAtt_HC_100k_13C14C.yaml` | `EXP2-CrossAtt-HC-100k-13C14C` | `cross_attention` |
| 13C/14C | `EXP2_ConcatFusion_HC_100k_13C14C.yaml` | `EXP2-ConcatFusion-HC-100k-13C14C` | `concat` |
| 13C/14C | `EXP2_GatedFusion_HC_100k_13C14C.yaml` | `EXP2-GatedFusion-HC-100k-13C14C` | `gated` |
| 径迹数 | `TRK2_XA_TrackClass.yaml` | `TRK2-XA-TrackClass` | `cross_attention` |
| 径迹数 | `TRK1_ResNet_TrackClass.yaml` | `TRK1-ResNet-TrackClass` | `none` |
| 极角 | `TRK4_v2_XA_AngleReg.yaml` | `TRK4-v2-XA-AngleReg` | `cross_attention` |
| 极角 | `TRK3_v2_ResNet_AngleReg.yaml` | `TRK3-v2-ResNet-AngleReg` | `none` |
| 动能 | `TRK6.yaml` | `TRK6-XA-EnergyReg` | `cross_attention` |
| 动能 | `TRK5.yaml` | `TRK5-ResNet-EnergyReg` | `none` |

13C/14C 没有 RN 配置。三份都指向 `Garfield_HC_13C14C/`。HC 只作理想参照。径迹三项在盘上的第二臂是改过主干、融合 `none`，这是同主干 RN，不是原样 RN。旧的 `TRK3_ResNet_AngleReg.yaml` 与 `TRK4_XA_AngleReg.yaml` 还在，点名的是 v2 这一对。这九份（三份 EXP2 加六份 TRK；另有两份旧角配置，不在这九份里）只是盘点，不是 36 行设计。

## 现在可以写进表的话，以及不能写的话

可以写的限定，来自 2026-10-19 周报的保真节，本机没有新的测量：

- 径迹数、极角、动能：图像来自蒙特卡洛步点，没有探测器响应。表上这三行若引用已有 TRK 运行，要写成理想参照，不写成真实读出上的结果。
- 13C/14C：现有配置用 HC。HC 含真值聚类，不作命中条件。Raw 上的 13C/14C 还没有本机配置。
- 36 格里，原样主干一臂全部是「未测」。同主干 RN 与 XA 的 TRK 配置在盘上，它们的成绩不在这份笔记里填写：本机没有为这四项打开运行目录。

计划第 6 节要求的只读就绪（在那台电脑上对 8 份源配置做 `check-data`，并确认径迹文件是否开了扩散）现在不做。那一步要连接，今天的收件箱没有单独的只读窗口。

现在不产生论文图。空格写成「未测」，不画成零，也不把 HC 画成 Raw。这张未测骨架就是上面点名的文件，不是成绩表。

## 下一份非 GPU 工作，仍不占那台电脑

1. 36 格未测骨架已写在 [MATE_Paper_FourTasks_Skeleton_2026-10-23.md](/Users/Reid%20Hu/OrbitOS/20_Project/Auto_Research/MATE_Paper_FourTasks_Skeleton_2026-10-23.md:1)。它不是入队合同，不提交。盘点里的九份表内配置与这个骨架分开。
2. 13C/14C 的 Raw 转换仍留在 IMP。转换之前要有顾问同意的只读元数据合同。本机不下载数据。
3. 寻优归因的当前解释在 [attribution-table-r3.md](/Users/Reid%20Hu/firstmate/data/mate-lead-p/out/d614/attribution-table-r3.md:1) 6773/68/`747aeaf8780aaa6b8d4fcd4183c95e544d1f94086439b23eb24f4f7f0124cdec`。上一份 [attribution-table-r2.md](/Users/Reid%20Hu/firstmate/data/mate-lead-p/out/d611/attribution-table-r2.md:1) 与 [attribution-table.md](/Users/Reid%20Hu/firstmate/data/mate-lead-p/out/d604/attribution-table.md:1) 的整数不改。那张表是 4He 对其余类的寻优归因，不是这 36 格。

## 2026-10-23 续

36 格仍全部是「未测」。没有打开运行目录，没有新测量，不产生图，不改 `10_Papers-Thesis/`。`check-data` 仍要连接，这一步不做。13C/14C 的 Raw 配置仍没有。哪一格今天能填、哪一格要新训练，写在 [MATE_Paper_36Cell_Fill_2026-10-23.md](/Users/Reid%20Hu/OrbitOS/20_Project/Auto_Research/MATE_Paper_36Cell_Fill_2026-10-23.md:1)。
