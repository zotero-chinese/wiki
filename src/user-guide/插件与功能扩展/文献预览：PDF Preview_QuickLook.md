---

title: 文献预览：PDF Preview/QuickLook
date: 2023-06-28 21:14:03
updated: 2023-07-28 10:38:12
---

# Zotero PDF Preview插件

[<img src="https://github.com/windingwind/zotero-pdf-preview/raw/master/image/README/teaser.gif" width="1920" class="ne-image">](https://github.com/windingwind/zotero-pdf-preview/blob/master/image/README/teaser.gif)

在库视图中预览PDF附件。

快速方便。不需要任何第三方软件。

主页及下载：<https://github.com/windingwind/zotero-pdf-preview>

## 使用

预览可以在Zotero主窗口的右侧面板中找到。您可以在信息窗格的顶部/底部或预览窗格中预览项目。请参见设置以自定义预览位置。

## 快捷键

要在信息窗格中显示/隐藏预览，请使用快捷键P或拖动/单击切换栏。

要放大或缩小，请按住ctrl/cmd并滚动，或按住ctrl/cmd与+/-；

要重置缩放，请使用ctrl/cmd+0。

## 设置

在此处查看设置：菜单栏->编辑->首选项->预览

|     |     |     |
| --- | --- | --- |
| **设置** | **描述** | **默认值** |
| 启用预览 | Enable to allow the preview behavior. | true |
| 在信息面板中预览 | Enable to show the preview in a split view under 'info' tab. | true |
| 预览位置 | Preview position in the Info Tab | bottom |
| 在独立预览面板中预览 | Enable show the preview in a new tab of right sidebar. | true |
| 在信息/独立预览面板中显示工具 | Enable show the toolbar there. | true |
| 显示注释 | Enable to show annotations of the PDF files. May slow down the preview speed. | false |
| 显示悬停页面样式 | Enable extra style of the hovered page: box shadow and hand cursor. | true |
| 双击预览页面以打开/转跳PDF | Enable double-click to open/jump to the selected page of PDF. | true |
| 黑暗模式 | Enable to preview PDF files in dark mode. This is a naive dark mode and images color may not be displayed correctly. | false |
| *预览前N*页 | See  [below](https://github.com/windingwind/zotero-pdf-preview#advanced-usage-of-preview-page-index) | 10  |
| 预览面板名称 | Set the tab label. | preview |

### 预览页面索引的高级用法

除了直接填写数字（前N页）外，支持python风格的切片语法，例如`:3,-4:`（前三页与末四页），`2:5`（第2-5页）等。

详见<https://github.com/windingwind/zotero-pdf-preview#advanced-usage-of-preview-page-index>

# ZoteroQuickLook插件

调用外部预览功能（在非MacOS系统上依赖第三方软件QuickLook）。

无法预览Zotero内的注释高亮。

主页及下载：<https://github.com/404neko/ZoteroQuickLookReload>
