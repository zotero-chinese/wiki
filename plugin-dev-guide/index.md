---
title: 插件开发指南
date: 2023-04-20 10:06:59
updated: 2023-07-20 16:51:54
authors:
  - windingwind
---

# 插件开发指南

::: tip

待完善，前托管于语雀的开发者文档主要针对 Zotero 6，鉴于插件在 Zotero 7 相对 Zotero 6 变动较大，因此插件开发者文档需要重写。

:::

本文档所述内容仅适用于 Zotero 7 插件开发，Zotero 6 插件开发文档请参阅 [Zotero 6 插件开发文档](https://zotero.yuque.com/staff-gkhviy/developer/)。

## 前置基础知识

Zotero 插件遵循 Firefox 插件的要求。此处列举了编写插件的基础知识。并非所有知识都需要掌握，只需要在遇到问题时能通过查阅文档找到解决方法即可。

### Firefox 插件

[Introduction: Welcome to Software Development the Mozilla Way](http://mb.eschew.org/intro)

[Web 浏览器扩展](https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions)

### HTML / XUL

关于 HTML，可参考网上的任意教程，只需理解基本的树结构，大致清楚元素类型与通用属性即可。
参考文档：[HTML 教程 | 菜鸟教程](https://www.runoob.com/html/html-tutorial.html)
关于 XUL，在了解 HTML 的基础上只需大概浏览文档即可。在使用时可随时查阅文档。
参考文档：[Huihoo - XML User Interface Language (XUL)](https://docs.huihoo.com/xul/)，[XUL School Tutorial - Archive of obsolete content](https://udn.realityripple.com/docs/Archive/Add-ons/Overlay_Extensions/XUL_School)

### JavaScript / TypeScript

如果对其他编程语言有了解，上手 JavaScript 很快，看一下基本语法即可。
参考文档：[JavaScript 教程](https://www.w3school.com.cn/js/index.asp)

（非必需）也可以直接学习 TypeScript，它是 JS 的超集，提供了更多特性，并对习惯于 C++/JAVA 等强类型语言的开发者而言更加熟悉。第二章将要介绍的的 Zotero 插件框架支持 TS。
参考文档：[TypeScript 中文网 · TypeScript——JavaScript 的超集](https://www.tslang.cn/)

### Git

Git 是版本管理的常用工具。
参考文档：[Git 教程 | 菜鸟教程](https://www.runoob.com/git/git-tutorial.html)

### Zotero 官方资料

Zoero 文档（部分过时或不全）：[start [Zotero Documentation]](https://www.zotero.org/support/)
Zotero 社区：[Recent Discussions](https://forums.zotero.org/discussions)
Zotero 贡献文档：[Zotero | Get Involved](https://www.zotero.org/getinvolved/)
Zotero 开发者群组：[https://groups.google.com/g/zotero-dev](https://groups.google.com/g/zotero-dev)
社区维护的 Zotero Types 接口类型定义包：[windingwind / Zotero-types](https://github.com/windingwind/zotero-types) [Zotero-types](https://www.npmjs.com/package/zotero-types)

## 本文档的结构

> todo
