---
title: Locale File
date: 2022-08-02 16:02:13
updated: 2022-08-03 10:17:57
---

# Locale File

> [!warning] WORK IN PROGRESS
> 此页面正在施工中。

## 前言

​ 这篇文档描述了如何帮助改进 CSL 样式的语言支持，主要是将 CSL locale file 翻译为需要的语言。

​ 用户总是会选择一个特定的语言环境或者 CSL 语言环境，例如："British Psychological Society" 的 CSL 样式将会生成英式英语的引文和参考文献目录，中国使用的国标将会生成中文的引文和参考文献目录（可以有英文条目）。在使用的语言环境不是 CSL 定义的语言环境时，使用 Locale file 就会实现自动的本地化。

​ 所有的 CSL 样式，都依赖于 locale file，这些本地化文件中包含了本地化数据，用来指定引文和参考文献目录中的术语，日期格式和语法规则怎么本地化。在单独的本地化文件保存这些数据，而不是在 CSL 样式文件中（尽管 CSL 样式文件中可以使用 `cs:locale` 元素对本地化文件中的设置进行覆盖），有很多好处：1. 本地化更加容易维护；2. 样式文件更加的紧凑; 3. 样式可以是语言无关的。

​ 下面，我们将描述本地化文件的结构，给出如何转换所有部分的指示，并且解释如何提交这些转换。如果想获得更多的有关本地化的信息，可以查看 [CSL规范](./specification.md)。

## 开始

​ CSL 本地化文件在 Github 的仓库地址为<https://github.com/citation-style-language/locales/>。

​ 每个本地化文件都包含一种对应语言的本地化数据。本地化文件的名字为 "locales-xx-XX.xml"，这里的 "xx-XX" 是 [BCP 47 langues code 语言代码](http://people.w3.org/rishida/utils/subtags/) 中的一种。这个 [github wiki仓库](https://github.com/citation-style-language/locales/wiki) 列出了本地化 code，对应的语言和该仓库中储存的所有语言环境的软换状态（是否完成，或在制作中）。

## 转换 Locale Files

> todo
