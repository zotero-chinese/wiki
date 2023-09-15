---
title: 标签管理：Tag插件
date: 2023-06-28 21:14:03
updated: 2023-07-28 10:38:12
---



# [<img src="https://github.com/windingwind/zotero-tag/raw/master/addon/chrome/skin/default/zoterotag/favicon.png" width="32" class="ne-image jop-noMdConv">](https://github.com/windingwind/zotero-tag/blob/master/addon/chrome/skin/default/zoterotag/favicon.png)Zotero Tag插件介绍

主页与下载：<https://github.com/windingwind/zotero-tag>

*One add-on to rule Tags all.*
用一个插件管理Zotero中的标签。

- 自定义动作（添加文献，关闭阅读器等）时自动添加已读、未读标签
- 标签批处理
- 自定义标签组与快捷键
- 批量导出标签为CSV/从CSV批量导入标签

## 使用

安装插件后，可在库视图中选中数个条目，右键菜单选择管理标签，即可批量添加、移除、检查较少使用标签、导入导出标签。

[<img src="https://github.com/windingwind/zotero-tag/raw/master/imgs/readme-settings-rightclickmenu.png" width="1551" class="ne-image jop-noMdConv">](https://github.com/windingwind/zotero-tag/blob/master/imgs/readme-settings-rightclickmenu.png)

其他设置可在编辑->首选项找到。

## 设置

## 标签组规则

使用标签组规则来批量管理标签。为每个标签组分配指定动作: 条目添加时/条目打开时/条目关闭时……，并在动作触发时为对应条目添加/移除标签组；

使用半角逗号’,’(comma)分隔标签组中的多个标签；在标签前加前缀’~~’ 以指明该标签的行为是移除，默认是添加;

**例:** 要为新添加的条目设置 /unread 标签，并在阅读完成（关闭Zotero阅读器）时移除未读标签，则：

|     |     |
| --- | --- |
| **标签** | **动作** |
| /unread | add on item add |
| /unread | remove on item close |

[<img src="https://github.com/windingwind/zotero-tag/raw/master/imgs/readme-settings-rule.png" width="1354" class="ne-image jop-noMdConv">](https://github.com/windingwind/zotero-tag/blob/master/imgs/readme-settings-rule.png)

## 快捷键

Alt+(1-9) 可分配给标签组。

[<img src="https://github.com/windingwind/zotero-tag/raw/master/imgs/readme-settings-shortcuts.png" width="510" class="ne-image jop-noMdConv">](https://github.com/windingwind/zotero-tag/blob/master/imgs/readme-settings-shortcuts.png)

## 彩色标签

[Colorize Guide](https://github.com/windingwind/zotero-tag/blob/master/docs/tag-color.md)

## 星级

[Setting Guide](https://github.com/windingwind/zotero-tag/blob/master/docs/item-star.md)

[<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1666511824202-029bfaaa-8ed9-4bfe-88b0-947d7a86124c.png" width="349" class="ne-image jop-noMdConv">](https://user-images.githubusercontent.com/33902321/159643528-9eb77420-9c93-4244-b6e5-f9720af7698e.png)

## 高级能力

- 在库视图中右键点击条目或分类
- 点击’Manage Tags/管理标签’

[<img src="https://github.com/windingwind/zotero-tag/raw/master/imgs/readme-manage-tags.png" width="1004" class="ne-image jop-noMdConv">](https://github.com/windingwind/zotero-tag/blob/master/imgs/readme-manage-tags.png)

### 添加/移除标签

输入标签(半角逗号`,`分隔)并点击OK.

### 检查较少使用的标签

单击“较少使用的标签”并输入阈值N。所选分类中的标签将被计数，使用次数少于N次的标签将填入输入框和剪贴板(半角逗号`,`分隔)。

### 导出标签

单击“导出标签”。如果您还想导出子分类中的所有标签，请选中“包含子分类”。

CSV文件列为：标签名、计数、条目名称、条目id。

### 导入标签

从CSV文件导入标签并将其应用于当前分类/库中的所有项目。

CSV文件列必须为：

- 模式（+表示添加，-表示删除，=表示替换）
- 目标标签。
- 匹配的标签(半角逗号`,`分隔)，。如果一个项目具有这些标签中的一个，目标标签将被添加到其中（添加模式）/从中移除（移除模式）/相应地替换匹配的标签（替换模式）。如果匹配的标签为空，则将匹配所有项目。

不需要标题行。

CSV文件内容示例：

```
+,/unread,/new
-,toremove,
=,BIM,building information modeling,Building Information Modeling (BIM)
=,this is comma($COMMA$),$COMMA$
```

每行的说明：

1. 带有标签`/new`的条目将被添加标签`/unread`
2. 所有条目将移除`toremove`标签。
3. `building information modeling`和`Building Information Modeling (BIM)`标签将被替换为`BIM`标签。
4. `,`标签将替换为`this is comma(,)`。在输入CSV文件中，标签中的半角逗号应替换为`$COMMA$`。
