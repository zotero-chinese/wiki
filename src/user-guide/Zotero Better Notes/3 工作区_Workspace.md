---
title: 工作区/Workspace
date: 2023-06-28 21:14:03
updated: 2023-07-28 10:38:12
---
3 工作区/Workspace

# 工作区

我们在先前的章节中已经介绍过工作区。快速回顾一下：

工作区是一个单独的Zotero标签页或单独窗口，分为三栏，从左到右依次为：大纲区，主笔记区，预览笔记区。

本章将介绍工作区的具体功能。

# 工作区菜单栏

菜单栏位于窗口顶部（Windows）或屏幕顶部（MacOS）。

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662107857649-4028abce-fa79-4ecc-a7ea-4767044aff8c.png" width="2560" id="ue63fdd2a" class="ne-image">

此处列举了工作区菜单栏功能。其中大多数功能将在后续详细介绍。

部分功能仅限于在工作区标签页/窗口打开时使用，另一些功能可以在Zotero任意标签页打开时使用。

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| **菜单** | **选项** | **功能** | **快捷键** | **使用范围** |
| **文件** | 创建新主笔记 | 创建主笔记 | Ctrl+N | 工作区 |
| 打开主笔记 | 设置另一个笔记为主笔记 | Ctrl+O | 工作区 |
| 导出主笔记 | 导出主笔记 | Ctrl+E | 工作区 |
| 同步主笔记 | 导出并设置主笔记同步 | Ctrl+S | 工作区 |
| Better Notes同步管理 | 管理所有笔记的同步，参见[4.9 笔记同步/Sycn](https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/aid2c3) |     | 所有位置 |
| **编辑** | 插入模板/使用模板插入多条笔记/使用模板插入多个条目 | 使用模板功能，参见[4.2 笔记模板/Note Template](https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/un54wc) |     | 所有位置 |
| 笔记模板编辑器 | 打开笔记模板编辑器，参见[4.2 笔记模板/Note Template](https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/un54wc) |     | 所有位置 |
| 笔记引用格式 | 设置笔记引文格式，参见[4.7 快速插入引文/Quick Cite](https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/pcoes1) |     | 所有位置 |
| 插入标题/降低/提升标题层级 | 调整大纲栏中选中的标题层级 | Tab/Shift+Tab | 工作区 |
| 自动插入新注释到笔记 | 参见[4.4 自动插入新注释到笔记/Auto-insert New Annotations to Note](https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/ncnkfs) |     | 所有位置 |
| 转换剪贴板中的MarkDown内容 | 将剪贴板中的Markdown纯文本转化为可粘贴的格式文本。参见[4.6 快速插入markdown或AsciiDoc/Quick Insert MD&AsciiDoc](https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/gwgug8) |     | 所有位置 |
| **查看** | 笔记字体大小 | 调整笔记字体大小 |     | 所有位置 |
| 在独立窗口中打开工作区 | 将工作区标签页在独立窗口打开 |     | 工作区标签页 |
| 大纲视图 | 切换大纲栏视图 |     | 工作区 |
| 字数统计 | 主笔记字数统计 |     | 工作区 |
| **帮助** | Better Notes用户指引 | 重新打开用户指引 |     | 所有位置 |
| 关于Better Notes | 查看Better Notes版本信息 |     | 所有位置 |

# 大纲栏

工作区左侧为大纲栏。

大纲栏中的内容为主笔记的标题（1-6级）。至少有一个一级标题的情况下，大纲栏能够正常显示内容。

💡如果大纲栏为空，请在主笔记中添加几个标题试试。

大纲栏具有三种视图：树视图，思维导图和气泡导图。可点击大纲栏左下角按钮切换，或在菜单栏=>查看=>大纲视图切换。

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662107857165-6bd49687-c837-4358-88cd-67a185c5edcc.png" width="2560" id="u9363afe1" class="ne-image">

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662107857184-aebaa0cf-32ca-45bf-969b-d954f72b4abf.png" width="1134" id="uff948c22" class="ne-image">

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662107857147-34574242-01ac-48d7-bf86-9fc4cfa2e540.png" width="1100" id="u6d3798c5" class="ne-image">

点击大纲栏中的标题，可转跳主笔记中对应的行；拖拽树视图中的标题层级，可快速移动段落。

大纲栏目前是只读的，不可编辑。

可点击下方按钮导出思维导图：矢量图SVG格式或FreeMind导图格式。

# 主笔记栏

主笔记栏位于工作区中央，被设为“主笔记”的笔记条目将出现在这里，这也是主要的编辑区域。

除了在[2 Zotero笔记/Zotero Notes](https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/palqgb)章节介绍过的笔记编辑器功能以外，工作区主笔记栏还具有一些额外的功能。

## 笔记链接快速预览

笔记链接是形如zotero://note/的链接，关于笔记链接的介绍，详见[4.1 双链笔记/Bi-directional Link](https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/yxpiew)。光标位于笔记链接上时，浮窗将会预览链接笔记的部分纯文本内容。

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662107857886-302172b3-f226-43a6-8fa8-b32d67e1124d.png" width="1325" id="ue08fbc9d" class="ne-image">

## 插入笔记链接内容

浮窗中还可以对笔记链接执行操作。点击从左往右第三个按钮，可将链接笔记内容插入主笔记。

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662107858208-b0e0dc32-8d80-4ea2-8d69-feb1f12aa4fa.png" width="778" id="ubf08e7a7" class="ne-image">

💡如果需要将主笔记中的所有笔记链接都插入内容，请使用导出笔记中的【导出到新笔记】+【嵌入链接的子笔记】。详见[4.8 笔记导出/Export](https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/nxlngg)

🤔插入笔记链接内容的格式受系统模板QuickImport控制，支持自定义。参见[4.2 笔记模板/Note Template](https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/un54wc)

## 更新链接文本

点击最右侧按钮，可更新笔记链接的文本。

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662107858205-e561a0c7-7825-48b8-813b-09882eb86fad.png" width="673" id="u23c62a04" class="ne-image">

💡如果链接的笔记的标题（首行文本）与主笔记中链接文本一致，将不会起作用。

# 预览笔记栏

预览笔记栏位于工作区右侧，点击笔记链接后，对应的笔记条目将出现在这里。

预览笔记栏的左上角按钮为“打开PDF”（如果该预览的笔记具有父条目PDF），右上角按钮为关闭预览。

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662107859070-e970545f-274e-4edf-b526-d846823e06b9.png" width="2560" id="u199f5aa3" class="ne-image">

# 下一步

至此，Better Notes的基础与核心功能已介绍完毕。

第四章将继续介绍Better Notes的其他功能。

如果你对功能细节与自定义功能不感兴趣，或者希望尽快了解如何使用，可直接阅读第五章。第五章将围绕不同的笔记策略与使用方式，提供几种常用的笔记案例，供用户参考。
