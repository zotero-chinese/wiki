---
title: 关于 Zotero 插件
date: 2023-11-10 11:48:00
updated: 2023-11-28 15:29:00
---

# 关于 Zotero 插件

## 什么是插件？插件可以做什么？

谈到 Zotero 插件，可能指的有三种东西：

- 安装在 Zotero 里的，用于增强 Zotero 的功能，一般大家提起 `Zotero 插件` 都指的是这一类。本文档中提到的 Zotero 插件都指这一种。
- （不是 Zotero 插件，是浏览器扩展）安装在浏览器里的 Zotero Connecter，用于从网页上抓取文献元数据并存到 Zotero 里。
- （不是 Zotero 插件，是 Word 加载项）在 Microsoft Word 中的，正确称呼是 Word 加载项，用来插入引用和参考文献信息。

## 获取插件

- 官方插件收录链接：<https://www.zotero.org/support/plugins>
- Zotero 中文社区插件商店：[https://zotero-chinese.com/plugins/](https://zotero-chinese.com/plugins/)

- 插件的 GitHub 主页

  ::: details 点击此处了解 如何在 GitHub 上下载 Zotero 插件

  1. 访问插件的 GitHub 页面

     搜索你要的 Zotero 插件。例如你可以直接搜索「Zotero Style」。

  2. 查找插件的 Release 页面

     进入插件的 GitHub 仓库页面后，点击页面右下角的「Releases」标签。

     如果没有看到 Release 标签，可以直接在页面 URL 后加上 `/releases`，例如：<https://github.com/MuiseDestiny/zotero-style/releases>

     ![Releases](../../assets/images/about-plugin-github-releases.png)

  3. 下载插件文件

     在 Releases 页面，你会看到插件的发布版本列表。每个版本可能会有不同的文件，例如 `.xpi` 文件（这是 Zotero 插件的安装文件）。

     找到需要的版本，点击 Assets 下的可下载文件。通常是 `.xpi` 文件，点击即可下载。

     ![下载插件](../../assets/images/about-plugin-github-download-xpi.jpg)

  :::

::: tip 火狐浏览器用户请选择另存为

插件的后缀名为 `.xpi` ， 如果下载到后缀为 `.xpi` 的文件，不要解压，解压后会导致插件无法安装。

`.xpi` 也是火狐浏览器的插件后缀，因此火狐浏览器无法直接通过点击链接进行下载，需要右击链接，选择另存为，才可将插件保存至本地。

:::

::: tip Zotero 6 与 Zotero 7 的插件互不兼容

Zotero 6（上一版本）和 Zotero 7（最新版本）的插件互不兼容，请在下载插件安装包时下载与你 Zotero 版本适配的版本。[中文插件商店](https://zotero-chinese.com/plugins/) 中有注明兼容的目标 Zotero 版本，下载时请务必注意。

:::

::: tip

你可以通过 [插件市场（Add-on Market for Zotero）](./zotero-addons.md) 更便捷地安装、更新和卸载插件。不过，您仍需根据以下教程完成该插件的安装步骤。

:::

## 安装插件

依次点击 「Zotero 菜单栏」->「工具（Tools）」->「插件（Plugins）」，然后将下载的 xpi 文件拖入插件窗口，即可完成安装。

或者点击 「右上角的齿轮」->「Install plugin From File...」->「选择刚刚下载的 xpi 文件」，即可安装成功。

![安装插件](../../assets/images/zotero-plugin-install.png)

::: tip

对于部分老版本的插件，可能需要点击 `Restart now` 或者手动重启 Zotero 才可生效。

:::

## 更新插件

![升级插件](../../assets/images/zotero-plugin-update.png)

依次点击 「Zotero 菜单栏」->「工具（Tools）」->「插件（Plugins）」->「右上角的齿轮」->「Check for Updates」 后 Zotero 会对插件的版本进行检查，并自动对插件进行更新。

::: tip

由于大部分插件的更新页面在 GitHub，国内部分地区可能无法直接访问，从而无法通过以上方式实现对插件的更新。如果无法直接访问插件的更新，可在此处下载最新版：<https://zotero-chinese.com/plugins/>

下载后，无需卸载原插件，按照安装插件的流程直接覆盖安装即可实现对插件的更新。

:::

## 常见问题

请见 [插件安装的常见问题](../faqs/plugins.md)。
