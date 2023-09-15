---
title: 深入了解Zotero插件结构
date: 2023-08-26 10:06:59
updated: 2023-07-20 16:51:54
---
4 深入了解Zotero插件结构

本章将对Zotero插件目录的重要文件进行介绍。阅读本章节有助于增加对插件的理解，如果你希望增加额外的页面或资源文件，将会有所帮助。

对于第二章的插件框架来说，插件目录是`插件根目录/addon`。对于直接编辑源码的开发者来说，则是插件根目录。

本章展示代码时以第二章插件框架为例，其中一些字段以双下划线开头与结尾，例如`__addonRef__`，使用插件框架的开发者不需要替换它们，框架在编译时将会自动替换；直接编辑源码的开发者应该将它们替换为自己插件的对应字段。

Mozilla XUL插件结构说明文档 [https://udn.realityripple.com/docs/Archive/Add-ons/Overlay\_Extensions/XUL\_School/The\_Essentials\_of\_an\_Extension](https://udn.realityripple.com/docs/Archive/Add-ons/Overlay_Extensions/XUL_School/The_Essentials_of_an_Extension)