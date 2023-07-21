---
title: Markdown
icon: markdown
order: 2
date: 2023-07-20 23:46:54
updated: 2023-07-21 18:39:41
---

# Markdown

## Markdown 介绍

如果你是一个新手，还不会编写 Markdown，请先阅读 [Markdown 介绍](https://theme-hope.vuejs.press/zh/cookbook/markdown/) 。

本文档中，Markdown 文件分为两种，一种是普通的撰写内容的 Markdown 文件，就比如本文件；另一种是每个目录下的 `README.md`，它们没有内容，仅为每个目录配置这个目录的名称。与其他 md 文件类似，二者均由 Frontmatter 和内容主体组成。

## Markdown 配置

VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。

Frontmatter 必须在 Markdown 文件的顶部，并且被包裹在一对三短划线中间。下面是一个基本的示例:

```md
---
title: 页面的标题
---

<!-- 这里是 Markdown 内容 -->

...
```

### 通用的 Frontmatter 键

| 键         | 类型   | 必填 | 默认值         | 描述                                                                                                             |
| ---------- | ------ | ---- | -------------- | ---------------------------------------------------------------------------------------------------------------- |
| title      | string | 否   | 第一个一级标题 | 页面的标题。如果你不在 Frontmatter 中设置 title ，那么页面中第一个一级标题（即 # title）的内容会被当作标题使用。 |
| shortTitle | string | 否   | 标题           | 当前页面的短标题，会在导航栏、侧边栏和路径导航中作为首选。                                                       |

更多可以参考：[信息 Frontmatter 配置 | vuepress-theme-hope (vuejs.press)](https://theme-hope.vuejs.press/zh/config/frontmatter/info.html)

### 对于每个目录下的 `README.md`

| 键    | 类型    | 必填 | 默认值 | 描述                                                                                                             |
| ----- | ------- | ---- | ------ | ---------------------------------------------------------------------------------------------------------------- |
| title | string  | 否   |        | 页面的标题。如果你不在 Frontmatter 中设置 title ，那么页面中第一个一级标题（即 # title）的内容会被当作标题使用。 |
| index | boolean | 否   | true   | 是否在侧边栏中索引当前页面。                                                                                     |

更多可以参考：[布局 Frontmatter 配置 | vuepress-theme-hope (vuejs.press)](https://theme-hope.vuejs.press/zh/config/frontmatter/layout.html#dir)

## Markdown 内容语法

查看 [Markdown 语法预览](./markdown-demo.md)
