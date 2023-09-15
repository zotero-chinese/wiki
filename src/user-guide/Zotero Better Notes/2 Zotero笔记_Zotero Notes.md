---
title: Zotero笔记/Zotero Notes
date: 2023-06-28 21:14:03
updated: 2023-07-28 10:38:12
---
2 Zotero笔记/Zotero Notes

# 关于Zotero笔记

除了前文介绍的创建主笔记，还可以创建普通笔记。普通笔记分为两种：

- 独立笔记。没有父条目，在主界面库视图中，不需要展开即可看到。
- 条目笔记。具有父条目，一般在某条文献下，展开可看到。

## 创建笔记

创建笔记有多种方式：

1.  在Zotero主界面，中央上方工具栏选择新建笔记=>新建独立笔记/添加子笔记；仅在选中条目时可以创建子笔记。

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662107282932-29e0d5f6-8a4f-4d36-abf0-c12b78456383.png" width="507" id="u09f415a7" class="ne-image">

2.  在主界面，选中条目，从右键菜单创建条目子笔记；

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662107282722-45ce9889-81e8-4517-968c-e4d535482f89.png" width="421" id="u805f5232" class="ne-image">

3.  在PDF阅读器中，右侧笔记栏右上角的'+'按钮可创建条目子笔记；

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662107282664-979230bd-9a7c-431a-9b0a-368cd58b8d14.png" width="2560" id="u120a74a0" class="ne-image">

4.  在PDF阅读器中，左侧注释栏的每一个注释右上角的黄色花形按钮，参见[4.3 从注释创建快速笔记/Quick Note from Annotation](https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/pavzsz)

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662107282661-de60feaa-eaad-4781-85cd-4a15538daeeb.png" width="2560" id="u33f48459" class="ne-image">

5.  部分Better Notes笔记模板可能会创建笔记。

## 导出笔记

Zotero提供了一项笔记导出为markdown的功能，但图片及许多格式不会被处理。

建议使用Better Notes提供的导出功能，可导出单条或多条笔记为markdown文件，或通过剪贴板复制到富文本编辑器（如OneNote，Word），或导出为PDF，并且支持自动同步更改（Zotero=>外部导出目录）。关于导出，详见[4.8 笔记导出/Export](https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/nxlngg)；关于同步，详见[4.9 笔记同步/Sycn](https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/aid2c3)。

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662107283016-aac5e05c-f191-4f85-8220-2afcdcf309ed.png" width="604" id="uba43eaba" class="ne-image">

可通过以下三种方式导出笔记：

1.  在主界面，选中一个或多个笔记条目，在右键菜单中通过"导出笔记及条目子笔记"或"导出多个笔记"；

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662107283502-9da68282-4a8e-42f1-b39b-bdbfd950ff42.png" width="358" id="u7f17ae0d" class="ne-image">

2.  在笔记编辑器中，右上角工具栏导出按钮；

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662107284338-80ba60e0-ae55-4d06-9d48-ff847ed693f6.png" width="892" id="u1bde1ecf" class="ne-image">

3.  （不推荐）在主界面中，通过右键菜单使用Zotero自带的笔记导出功能。

# 关于Zotero笔记编辑器

## 常见编辑器比较

常见的编辑器有三类：

- 纯文本编辑器。例如记事本，vim，notepad++，sublime等。
- markdown编辑器。在纯文本（markdown源码）上编写内容，通过渲染得到具有格式的文档。这类编辑器是笔记软件的主流，包括Obsidian，LogSeq，Typora等。优势是无需为格式费心，便于专心于内容。缺陷是md形式的笔记源码可读性较差，不便于分享。
- 富文本编辑器（或称标记语言编辑器）。优势是所见所得一致，没有使用和学习门槛。例如MS OneNote，MS Word等。

## 认识Zotero笔记编辑器

Zotero笔记编辑器自从6.0版本后与过去有较大不同。目前的编辑器基于ProseMirror，是一种富文本编辑器。因此，对于不喜欢markdown的代码形式，或习惯使用类似Word的编辑方式的用户来说，几乎没有使用学习成本。正如Word一样，笔记的格式选项如高亮、标题、加粗等均在上方工具栏。

同时，Zotero笔记编辑器支持许多markdown语法，以一种类似Obsidian实时编辑模式的方式，将markdown转化为对应格式。例如，你可以使用#来编写标题，或使用>来插入引用格式。

Better Notes为笔记编辑器增加了许多其他功能及语法上的支持。Zotero6.14+已内置支持LaTex。最重要的一项也许是对LaTeX的支持。在上方菜单栏中，单击TEX按钮或快捷键Ctrl/⌘+'/'即可切换编辑模式与预览模式。

💡请注意，本文档提到的"笔记"（Note）与PDF附件中的高亮、框选等注释（Annotation）不同，请注意区分

## 使用笔记编辑器

Zotero中，可以在四处使用笔记编辑器：

1.  在主界面中，选中某条笔记，右侧会打开一个笔记编辑器；
2.  在内置PDF阅读器中，右侧笔记栏可打开笔记；
3.  在Better Notes的工作区，有主笔记与预览笔记两栏；
4.  在主界面双击笔记条目，或在任意笔记编辑器右上角'...'按钮，可在单独窗口打开笔记。

## 笔记功能

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662107284715-ef6967fe-8d17-4d20-8a00-46e557b8a0a9.png" width="892" id="ue094871d" class="ne-image">

关于快捷键：Ctrl键在MacOS对应⌘command键。

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| **名称** | **功能位置** | **markdown语法** | **快捷键** | **效果** |
| 标题  | <img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662205985904-cbcfed0a-34a8-4f14-8cd4-b904461cc052.png" width="24" id="u3b5f4b5f" class="ne-image"> | 1-6个#+空格 | Ctrl+Shift+{1-6} | 设置1-6级标题 |
| 加粗  | <img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662205988141-e3f71c29-fd1f-4fc3-ae32-e65e81fbcbf8.png" width="24" id="uc1130e72" class="ne-image"> | -   | 选中文本Ctrl+B | **test** |
| 斜体  | <img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662205989869-2c7d8821-314c-49cf-9451-3e2aea412a06.png" width="24" id="ua1ebc02e" class="ne-image"> | -   | 选中文本Ctrl+I | *test* |
| 下划线 | <img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662205991863-55b0a7b9-35af-4dbd-90d0-abbce9ae7728.png" width="24" id="ua2bba267" class="ne-image"> | -   | 选中文本Ctrl+U | test |
| 上标  | <img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662205993604-7628ebf5-0a62-4781-8dd9-23c6cc25ed87.png" width="24" id="u85522050" class="ne-image"> | -   | -   | test1 |
| 下标  | <img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662206002669-f989a3ed-ae0a-4f23-b288-4b9f11139727.png" width="24" id="ud1fdbb66" class="ne-image"> | -   | -   | test1 |
| 引用  | <img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662206004277-c5faf87b-3f78-4010-8250-e82e3df18ec4.png" width="24" id="u2396adff" class="ne-image"> | '>'+空格 | -   | test |
| 单行（行内） | -   | '`'+文本+'`' | -   | `test` |
| 单行  | <img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662206007637-1107b230-22b4-493e-bbcc-d42b0ed92352.png" width="24" id="u6781b89a" class="ne-image"> | 3个'```'+回车 | -   | ```<br>test<br>``` |
| 项目符号（无序列表） | <img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662206010066-ed362058-0e4c-4f27-9b1d-efa881361da3.png" width="24" id="uf42f1749" class="ne-image"> | '-'+空格 | -   | - test |
| 编号（有序列表） | <img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662206011560-3c3f7a4d-d89c-420c-bbf4-0b31f860f7e8.png" width="24" id="ue6e12a64" class="ne-image"> | 数字序号+'.'+空格 | -   | 1.  test |
| 表格  | 右键插入或参见自定义表格 | -   | -   | 表格  |
| 高亮颜色 | <img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662206043617-4e841258-eea3-4a3c-9984-72f123361a3b.png" width="24" id="u8017ba11" class="ne-image"> | -   | -   | test |
| 清除格式 | <img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662206048157-e5c1b550-4f02-4a6e-a51c-5d9d3e1f7fb7.png" width="24" id="uc1298da6" class="ne-image"> | -   | -   |     |
| 插入链接 | <img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662206052333-9b7c8eba-db53-470d-af38-dae46102adcd.png" width="24" id="ue22539ea" class="ne-image"> | -   | -   |     |
| 插入文献 | <img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662206056648-bcf63930-9237-4b32-8ff5-826285587b68.png" width="24" id="ucdae93a8" class="ne-image"> | -   | -   |     |
| 搜索  | <img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662206061293-e98eabef-591c-44c2-87cc-ebe3801daa5c.png" width="24" id="ufa2d316f" class="ne-image"> | -   | Ctrl+F |     |
| 公式  | -   | 一对'$'或'$$' | -   |     |
| 插入引文 | <img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662206066506-40055380-09be-4cef-bbd6-9bdbd9f7169a.png" width="24" id="uef8daf71" class="ne-image"> | -   | -   | 参见[4.7 快速插入引文/Quick Cite](https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/pcoes1) |
| 切换编辑/预览公式（在插件v0.7.0及以后被弃用） | <img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662206431019-1222b886-54e7-436f-b0af-041c22abe96c.png" width="28.5" id="u64dc8b86" class="ne-image"> | -   | Ctrl+'/' |     |
| 打开工作区 | <img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662206377992-351af287-c4a7-4675-a54a-87c73d2c950f.png" width="24" id="ubd84856c" class="ne-image">表示当前为工作区笔记，<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662206393239-f77b0d5f-ccb3-43fc-b601-33af2ec080af.png" width="24" id="ue6b1668c" class="ne-image">表示为普通笔记 | -   | -   | 参见[3 工作区/Workspace](https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/yul2qm) |
| 打开笔记的父PDF（仅工作区预览） | <img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662206174755-70fa8bd5-99dc-4411-a623-8a13adfb6955.png" width="24" id="u6ee4921d" class="ne-image"> |     |     |     |
| 导出笔记 | <img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662206374539-138a1a2b-1e05-4558-b451-ca06800d542c.png" width="24" id="ua5f59393" class="ne-image"> | -   | -   | 参见[4.8 笔记导出/Export](https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/nxlngg) |
| 缩起预览（仅工作区预览） | <img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662206170673-5829cccc-cb08-4877-ba2c-20b6795ab53b.png" width="24" id="uc4229fc5" class="ne-image"> |     |     |     |
| 添加双链 | <img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662206181466-7235b312-6e8b-4727-b836-6c3f6545bd77.png" width="24" id="ud33bca8a" class="ne-image"> | -   | -   | 参见[4.1 双链笔记/Bi-directional Link](https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/yxpiew) |
| 刷新编辑器 | 右侧<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662205934281-3a930450-5759-43a5-b89f-cccee3032985.png" width="24" id="ufd6cb785" class="ne-image">下拉菜单 | -   | -   |     |
| 复制链接 | 右侧<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662205934281-3a930450-5759-43a5-b89f-cccee3032985.png" width="24" id="YV2FO" class="ne-image">下拉菜单 | -   | -   |     |
| 复制当前行链接 | 右侧<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662205934281-3a930450-5759-43a5-b89f-cccee3032985.png" width="24" id="VBR0W" class="ne-image">下拉菜单 | -   | -   |     |

笔记编辑器中的部分功能将在接下来的文档中详细介绍。