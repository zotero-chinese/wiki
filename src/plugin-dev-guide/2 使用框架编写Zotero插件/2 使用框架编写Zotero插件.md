---
title: 使用框架编写Zotero插件
date: 2023-08-26 10:06:59
updated: 2023-07-20 16:51:54
---
2 使用框架编写Zotero插件

通过上一章的实践，相信你已经尝试完成了一个简单的插件功能，并能够顺利在Zotero中运行。

如果你使用过其他前端框架，也许你会发现这样的插件编写方式有一些缺点：

- 难以划分模块。所有代码写在一个文件里，冗长、杂乱且难以维护。
- 无法使用NPM等第三方包。由于Zotero在插件运行时不支持import，且许多NPM包基于TypeScript(TS)，无法使用社区提供的海量第三方包。
- 部分插件配置文件（install.rdf, update.rdf）中的版本号等信息需要每次手动更新。
- JavaScript(JS)不支持类型系统，在编写代码时自动补全与语法检查功能较弱，并常常导致一些难以检查的类型错误。
- 每次提交插件更新时需要手动发布Release，手动维护版本号，非常繁复。

为此，@windingwind 配置了一个Zotero插件框架（Zotero Addon Template），用以解决上述问题。如果你准备公开发布自己的插件，强烈建议使用框架创建你的Zotero插件。

# 传统方式与使用框架对比

<img src="https://cdn.nlark.com/yuque/0/2022/svg/32594373/1662259335586-b90077c3-b307-4424-9a7c-6c04ab3db54e.svg" width="760" id="uf14306f0" class="ne-image">

传统方式：代码深度耦合，难以维护，需要手动操作

<img src="https://cdn.nlark.com/yuque/0/2022/svg/32594373/1662259358485-d65aa789-6820-48ab-99e9-f2310dc572fe.svg" width="673" id="u9a8ab35b" class="ne-image">

使用框架：代码解耦合模块化，方便维护，支持第三方包，可自动构建自动发布

同时，插件框架也通过TypeScript的类型能力支持丰富的Zotero接口自动补全与语法检查。

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662259304130-520eb163-f922-4c59-b4b8-2e25e0f9dac4.png" width="1705" id="u3a343930" class="ne-image">

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662259304180-29b4d51f-7a64-4495-85a2-dcef394035c6.png" width="1758" id="u6cc9de9d" class="ne-image">

在本章节中，将介绍如何利用插件框架创建你的Zotero插件，如何通过简单的配置提高插件开发效率。

插件框架主页：https://github.com/windingwind/zotero-addon-template