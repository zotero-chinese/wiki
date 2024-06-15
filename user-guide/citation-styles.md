---
title: 引文的格式
icon: wand-magic-sparkles
date: 2023-06-28 21:17:47
---

# 引文的格式

Zotero 使用 Citation Style Language 来生成引文格式，Zotero 官方提供了一组 CSL 样式，可以在 Zotero 内下载安装。

但是官方的 CSL 样式对国内期刊支持不全，且目前（CSL 1.0.2）仍未支持双语排版（“et al”与“等”混排），所以国内有热心开发者维护了一份第三方 CSL 样式，读者可以按需下载使用。

## 官方 CSL 样式下载

::: tip

适用于外文期刊、SCI 期刊等。

不支持双语排版。

:::

1. 打开 Zotero 软件，选择“编辑—设置”，在弹出窗口中选择“引用”

   ![引文格式管理](../assets/images/image-zotero-引文格式管理.png)

2. 若样式管理器中无符合的样式，可以通过“获取更多样式”，搜索期刊名，即可导入期刊要求的样式

   ![获取更多引文格式](../assets/images/image-zotero-获取更多引文格式.png)

   ![官方引文格式下载](../assets/images/image-zotero-官方引文格式.png)

## 第三方 CSL 样式下载

::: tip

适用于中文期刊、国内学位论文等。

支持双语排版。

:::

如果上述 CSL 样式不符合你的要求，可到 [中文 CSL 样式](https://zotero-chinese.com/styles) 下载更多 CSL 样式：

1. 首先你需要在 [中文 CSL 样式](https://zotero-chinese.com/styles) 页面上找到合适的 CSL 样式。

   你可以通过搜索和筛选快速找到你需要的样式，把鼠标放在样式的名称上来预览其引注和参考文献表，点击样式名称进入详情页可以查看更多条目的显示效果。

   如果没有你想要的样式，可以点击页首的 “请求新样式 / 报告 CSL 样式问题” 来获取社区帮助。

2. 单击样式名进入样式详情页，然后下滑找到 “下载链接” 小节，点击任意安装链接将样式安装到 Zotero。

   <!-- ![下载引文](../assets/images/image-github下载引文格式.png) -->

   ::: warning 确保 Zotero 启动

   注意需要在 Zotero 处于启动状态时点击，可以直接安装。若 Zotero 没有弹出窗口，则右击 - 另存为，将其保存为 `.csl` 文件，然后双击打开 CSL 文件。

   :::

   ::: tip 自行选择可用链接

   网站为每一个样式提供了多个下载链接，请自行选择可用的链接。

   :::

3. 在弹出的窗口中点击“确定”后即可将想要的 CSL 样式添加到 Zotero，供后续引用使用。

   ![确认安装引文格式](../assets/images/image-确认安装引文格式.png)

   由于这些 CSL 样式使用了 citeproc-js 提供了 CSL-M 扩展功能，因此安装时会出现“xxx.csl 不是一个有效的 CSL 1.0.2 样式文件，可能不能和 Zotero 一起正常工作”的警告，**属于正常现象，选择“OK”即可**。

   ![安装引文格式](../assets/images/image-安装引文格式.png)

---

随后，你就可以在字处理软件中将样式切换为刚刚安装的，请参阅 [在 Word 中使用](./ms-word-plugin.md) 了解详情。
