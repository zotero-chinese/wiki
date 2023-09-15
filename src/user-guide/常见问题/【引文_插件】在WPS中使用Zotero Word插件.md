---
title: 【引文|插件】在WPS中使用Zotero Word插件
date: 2023-06-28 21:14:03
updated: 2023-07-28 10:38:12
---
# 前言（很重要哦！）

**Zotero Word插件在WPS的使用操作与Office Word类似，因此不再展开说明，点击下方蓝字可查看 📝**[**在Word中插入引文**](https://zotero.yuque.com/staff-gkhviy/zotero/ms-office#%20%E3%80%8A%E5%9C%A8%20Word%20%E4%B8%AD%E6%8F%92%E5%85%A5%E5%BC%95%E6%96%87%E3%80%8B)

**🔊🔊🔊****必看！！！**：当新建一个空白的Word文档用WPS打开撰写论文等情况时：一定要先用WPS里的Zotero Word加载项插入几个文献，再点击**Add/Edit Citation等这6个按钮**，尤其是一定要多次点击**Refresh**和**Unlink Citations**按钮，检查是否正常使用！！！（无法正常使用请见本文档**四、Refresh/Unlink Citations莫名失效**）

**以下是WPS的Zotero Word加载项的常见问题及解决方法，均以Window系统为例演示📝：**

# 一、没有显示Zotero加载项

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667748490390-42a5f7b7-9704-4cd2-a501-ff7e372f953a.png" width="577" id="u1e5c34dd" class="ne-image">

**❓**如上图所示，WPS的文档界面不显示Zotero加载项。**解决办法如下**：

## 1、检查Microsoft Word加载项

检查Zotero是否已正常安装好 **Microsoft Word加载项**。安装此加载项的步骤，详见Zotero百科全书的[【引文|插件】Word 加载项相关问题](https://zotero.yuque.com/staff-gkhviy/zotero/bqx0x4)（点击左侧蓝字自查）

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667748202779-a8aea7aa-080e-4a30-a5cb-7070426fbf1c.png" width="576.6666666666666" id="u674174e5" class="ne-image">

1）若上图的【**文字处理软件/Word Processors**】没有内容显示，则需要在Zotero软件界面，单击打开【**工具/Tools**】-【**插件/Add-ons**】

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667748406119-5f1e453f-886c-47ed-8d0a-d05959f9f5e5.png" width="576.6666666666666" id="ub4ad0655" class="ne-image">

2）找到【**Zotero Word for Windows Integration**】插件，单击【**disable**】将其移除，再单击【**Restart now**】，重启后，再单击【**Enable**】完成安装。

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667748787044-313772dc-b20c-4566-b51c-f310439c46cd.png" width="576.6666666666666" id="ue292bba0" class="ne-image">

### <img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667748798250-a295e249-6e23-42b3-9159-854cafc18993.png" width="576.6666666666666" id="ubf23a321" class="ne-image">

## 2、WPS.VBA插件的安装

若WPS为**个人版**，需额外安装 [**VBA插件**](https://pan.baidu.com/s/1y-cjisA6Lxbnw3r3g_jmKA?pwd=moyu)（点击左侧蓝字获取插件）

**🏷️注**： WPS专业版等版本一般已自带VBA宏功能，Zotero加载项如有使用问题，也可选择安装VBA插件。

1）将WPS.VBA安装程序**下载并保存**到电脑，确保WPS程序是 **未运行** 状态。

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667749231967-94d82e15-95de-486a-9295-87a7257de424.png" width="576.6666666666666" id="uf9781559" class="ne-image">

2）**双击**打开WPS.VBA安装程序，依次单击【**Next**】，最后单击【**Finish**】。用WPS打开任意一个word文档，检查是否正常显示Zotero加载项。

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667749313952-db0fddc9-ecdd-4e10-bd32-ec2658f5a0d1.png" width="576.6666666666666" id="u4961383c" class="ne-image">

**🏷️注：** 若WPS.VBA安装后，仍未显示Zotero加载项，或需将【**宏安全性**】设成低（但不建议）。除此外可见下方**3、补充Zotero.dotm文件**

## 3、补充Zotero.dotm文件

1）在Zotero图标处**右键单击**，单击【**打开文件所在的位置**】打开Zotero安装路径

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667749409851-17306362-d725-4839-9a4a-b4a762d13e9e.png" width="576.6666666666666" id="ubcc99b2a" class="ne-image">

2）依次双击打开【**extensions**】-【**<zoteroWinWordIntegration@zotero.org>】-【install**】文件夹，复制 **Zotero.dotm** 文件。

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667749438417-ee20ee1e-c42b-4579-95fe-8efe8bb10277.png" width="576.6666666666666" id="u4645f1d8" class="ne-image">

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667749477243-592dc703-8dd3-4ad0-ac68-567d06a5d1c2.png" width="576.6666666666666" id="u005b92e3" class="ne-image">

**🏷️注**：如果上图文件夹位置没有Zotero.dotm，可点击右侧蓝字获取 [**Zotero.dotm**](https://pan.baidu.com/s/1EMfR5KRi8Mxxn9Wa7UR7Ag?pwd=moyu)

3）在WPS图标处**右键单击**，单击【**打开文件所在的位置**】打开WPS安装路径。

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667749545121-16745091-63ad-4985-86ec-16b69b4663b6.png" width="576.6666666666666" id="u16b1a76a" class="ne-image">

**🏷️注**：以上前提是确保WPS已关闭，不在运行中！！！

4）找到并打开**版本最新**的文件夹（即**数字最大**），再依次打开【**office6**】-【**startup**】

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667749815106-e4b80b63-4c73-46de-b382-1a5dc6319ecc.png" width="576.6666666666666" id="u5790f49b" class="ne-image">

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667749935889-62f78f53-9028-44ae-8fad-357c840db63b.png" width="576.6666666666666" id="u6b987069" class="ne-image">

5）在WPS的【**startup**】启动项文件夹内，粘贴 **Zotero.dotm** 文件。再次用WPS打开任一Word文档，检查WPS是否已显示Zotero加载项。

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667749944059-6e14ee33-f073-4d40-b665-f201f3d73a24.png" width="576.6666666666666" id="u98bfc2c9" class="ne-image">

# 二、Zotero加载项出现弹窗报错

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667750135987-8174736f-81d9-42b3-901d-18c2fe91d34f.png" width="576.6666666666666" id="u709173ae" class="ne-image">

**❓**如上图所示，在WPS使用Zotero加载项的各个按钮时，会出现弹窗警告。**解决方法如下**：

## 1、解决方法一

新建一个Word文档，先用 **Office** 打开此文档，用Zotero加载项 **插入一篇文献** 后，保存此文档即可。

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667750593374-121ea026-7596-48d1-852b-b0ca94d19dc9.png" width="576.6666666666666" id="u15c88aea" class="ne-image">

**🏷️注**：设置较简单，仅适用于**同时安装Office和WPS**。以后再使用时，可能还会报错。

如仍报错：可能是将光标置于插入引文Citaion和参考文献References位置的**前后或内部**

解决方法：将光标定位在远离上述位置如正文文字处

## 2、解决方法二

1）单击【**开发者工具**】-【**加载项**】，弹出的对话框单击【**选用**】。

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667750696602-8e894932-8fbc-43e1-ae0e-d6dda80f10d9.png" width="576.6666666666666" id="u5727d65a" class="ne-image">

**🏷️注**：设置较复杂，适用于 **同时装有Office和WPS** 或 **只装有WPS**

**🏷️注**：若【**开发工具**】选项卡的内容为灰色，即无法点击操作。

**解决方法**：安装WPS.VBA插件（详见本文档 **WPS.VBA插件的安装**）

或需升级更新WPS版本，以及可能需要安装使用WPS专业版等版本。

2）弹出对话框，双击进入上方地址栏并复制**地址**，或地址栏处右键单击，再单击【**将地址复制为文本**】。复制好地址后，即可关闭当前窗口。

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667750959238-fe939bd7-1dd0-4686-b34c-ecd1520b3f84.png" width="576.6666666666666" id="u411922eb" class="ne-image">

3）单击【**文件**】选项卡，再单击【**打开**】。将 **地址** 粘贴至【**文件名**】，【**文件类型**】选择 **所有文件**，然后单击【**打开**】。

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667751022773-52b2dfd5-e841-4483-bf26-28c61c5c425d.png" width="576.6666666666666" id="u0285997b" class="ne-image">

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667751032994-2e4552a2-f0d3-413b-8318-d48f013e02b6.png" width="576.6666666666666" id="ubf2dd8de" class="ne-image">

4）选中 **Normal.dotm** 文件，单击【**打开**】，随之打开名为 **Normal.dotm** 文档。

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667751136384-e1bb8768-58df-4f01-8e3f-9c6e87755ed8.png" width="576.6666666666666" id="u99b7a238" class="ne-image">

5）在 **Normal.dotm** 文档内，依次单击【**文件**】-【**文档加密**】-【**属性**】

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667751190158-0adef5ab-fb89-42a8-80b4-e70675d5d345.png" width="576.6666666666666" id="uddc954c4" class="ne-image">

6）在 **Normal.dotm** 属性对话框，切换到【**自定义**】窗口，【**名称**】和【**取值**】分别输入 **ZOTERO\_PREF\_1** 和 **1** ，点击【**添加**】。同理，再添加上 **ZOTERO\_PREF\_2** 和 **1** ，最后点击【**确定**】。

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667751268548-464f6c40-b91c-4a62-87ca-ec093271fd49.png" width="576.6666666666666" id="u8d563158" class="ne-image">

这一步完成的效果如下：

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667810795453-0d5c07d6-1be5-4abf-b11e-c2cc501177fe.png" width="638" id="uc5a1988a" class="ne-image">

7）左上角单击【**保存**】图标或快捷键 **Ctrl+S** 保存 **Normal.dotm** 文档。重新用WPS打开一个Word文档检查是否不再出现报错窗口。

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667751333802-365e6d97-e3e3-4a8e-a0b8-b3103250058f.png" width="576.6666666666666" id="ubeb6086e" class="ne-image">

**🏷️注**：如仍报错：可能是将光标置于插入引文Citaion和参考文献References位置的**前后或内部**

解决方法：将光标定位在远离上述位置如正文文字处

# **三、Refresh/Unlink Citations问号图标**

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667751390627-fac9b22d-4f9a-43c7-8686-558f9d95b633.png" width="576.6666666666666" id="udb9637df" class="ne-image">

**❓**如上图所示，**Refresh** 和 **Unlink Citations** 图标显示为问号，**解决办法如下**：

## 1、直接安装美化后的图标文件

1）我已创建5种 [Refresh和Unlink Citations图标](https://pan.baidu.com/s/1BXjo-ZOT971qlsY-zboIdA?pwd=moyu)（任选其一），可直接安装使用。点击上方蓝字即可获取，首先将其**下载并保存**到电脑（如下图所示）。

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667751634321-b759d33d-45cf-42aa-9919-57056da26e9a.png" width="576.6666666666666" id="u71a15b1a" class="ne-image">

**🏷️注**：只需选择使用一个自己喜爱的图标文件或可自己编辑设计图标。

下方是5个已编辑好的 **Refresh** 和 **Unlink Citations** 图标的图片展示。

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667751733381-8950187d-a9fb-4a08-bafb-c2c5648d0a7b.png" width="576.6666666666666" id="u6f1be5a5" class="ne-image">

2）将上述**任一Zotero**文件，粘贴至WPS的**启动项文件夹**内（详见本文档的 **补充Zotero.dotm文件**）

3）用WPS打开任一Word文档，但是会显示有2个Zotero加载项。

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667751818672-2896ac2f-cba1-4ea3-beb9-e6e18edb1076.png" width="576.6666666666666" id="u29200c8d" class="ne-image">

**🏷️注**：因为没更换Zotero安装路径的Zotero.dotm，且Office Word的启动项文件夹未放置Zotero.dotm。

这样做的考虑是：保持Office Word的Refresh和Unlink Citations图标不变动，同时保留原有的Zotero.dotm，以备不时之需。当然也可自己按喜好设置更换。

### 只保留1个Zotero加载项

1）依次单击【**开发者工具**】-【**加载项**】。 单击选中 **Zotero.dotm**，单击【**禁用**】。

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667752097046-2e776c9d-e21a-4a2b-96c4-2298b75d0d8f.png" width="576.6666666666666" id="u8ab88640" class="ne-image">

2）**Zotero.dotm** 前面方框，此刻已更改成 **取消勾选**，点击【**确定**】即可。

<img src="https://cdn.nlark.com/yuque/0/2022/png/33851096/1667752112655-50122662-9eb3-4e50-8660-8a6ff0250e41.png" width="576.6666666666666" id="ucc7c6f0b" class="ne-image">

# 四、Refresh/Unlink Citations莫名失效

有时新建Word文档，用WPS打开后，无故出现点击Refresh和Unlink Citations功能失效（即无响应或莫名删掉引文Citation）。

**解决方法**：

1）不要将光标置于插入引文Citaion和参考文献References的位置（即将光标定位在远离上述位置如正文文字处，再点击Refresh按钮）

2）重启WPS，或新建一个Word文档，再用WPS打开。或必要时重启电脑即可正常使用。

**🔊🔊🔊必看！！！**：当新建一个空白的Word文档用WPS打开撰写论文等情况时：一定要先用WPS里的Zotero Word加载项插入几个文献，再点击**Add/Edit Citation等这6个按钮**，尤其是一定要多次点击**Refresh**和**Unlink Citations**按钮，检查是否正常使用！！！

# 致谢

👍到这里，在WPS中使用Zotero Word加载项的使用已接近尾声。在此由衷地感谢来自b站、知乎、CSDN等网站的大神们分享的有关WPS的Zotero Word加载项使用的宝贵经验！！！
