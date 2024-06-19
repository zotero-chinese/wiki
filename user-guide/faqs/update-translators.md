---
title: 如何更新 Translator
date: 2023-09-14 21:17:47
redirectFrom: /user-guide/faqs/update-translators.html
---

# 如何更新 Translator

在使用 Zotero 的过程中，我们经常需要更新 translators 来实现从网页快速抓取文献信息。通常，我们可以借助 Zotero 本身的功能以及 茉莉花 插件快速完成该操作。但当 Zotero 或 茉莉花 插件出现故障无法完成一键自动更新时，我们也可以手动下载新版的 translators 文件，并进行手动更新。

::: info 提醒

这里的 translator 指的是 Zotero 从浏览器网页抓取文献信息时所需的转换器，在 Zotero 中有时也被称作是“翻译器”。如果你遇到的是语言翻译问题（如标题翻译、摘要翻译、文献阅读中的句段翻译等），通常与本文讲的 translator 无关，请参照 Translate for Zotero 插件的教程进行排查。

:::

## 方法 1：一键自动更新 <Badge text='推荐' />

### 步骤 1. 更新官方转换器

在 `Zotero 设置` 中，进入 `高级` 设置，点击下方“自动检查转换器和样式的更新”后面的 `立即更新` 按钮。

![更新官方 translator](../../assets/images/image-update-official-translators.jpg)

::: tip 推荐保持自动更新

我们推荐保持勾选 “自动检查转换器和样式的更新” 以获得最新的官方转换器。

:::

::: warning “更新转换器” 和 “重置转换器” 是不同的！

注意：如无必要，不要点设置页下面的“数据库维护 -> 重置转换器 (Reset Translators)” 按钮，这会删除整个 translators 文件夹。

:::

### 步骤 2. 更新中文转换器

1. 安装新版茉莉花插件

   更新 translator 之前请确保你安装的 茉莉花 插件已经是最新版本。如果你的 茉莉花 插件版本过低，更新可能会失败。最新的 茉莉花 插件安装包可在这里下载，然后覆盖安装即可：

   中文插件商店：[https://plugins.zotero-chinese.com/](https://plugins.zotero-chinese.com/)

   茉莉花 插件主页：[https://github.com/l0o0/jasminum](https://github.com/l0o0/jasminum)

   ::: tip

   如果你在安装插件中遇到问题，请阅读 [插件安装教程](../plugins/about-plugin.md) 。

   :::

2. 进入 茉莉花 插件的设置，转到 “非官方维护中文翻译器” 部分，然后点击 “更新全部” 按钮。

   ![更新非官网维护中文翻译器](../../assets/images/image-update-unofficial-translators.jpg)

### 步骤 3. 更新 Zotero Connecter 的缓存

1. 更新 **每一个浏览器** 中 Zotero Connector 插件里的 translators。

   ::: tip

   从 Zotero Connector v5.0.124 开始，官方移除了 `Update Translaors` 按钮，如果你的浏览器扩展中仍然保留 `Update Translaors` 按钮，请务必先升级 Zotero Connector 浏览器扩展再进行后续操作。

   [获取 Zotero Connector 下载链接](../install.md#浏览器插件-zotero-connector)

   :::

   请根据您使用的浏览器点开下面相应的说明，并按照说明中的步骤操作。（360 极速浏览器等国内厂商推出的浏览器请参照 Google Chrome 的步骤操作）

   ::: details Google Chrome、 Microsoft Edge 和 Mozilla Firefox

   1. 右键点击 Zotero Connector 按钮，然后点击 选项/Preference

      ![打开 Zotero Connector 的选项](../../assets/images/image-update-translator-chrome-1.jpg)

   2. 点击 Advanced 中的 Reset Translators 按钮

      ![更新 Zotero Connector 中的 translators](../../assets/images/image-update-translator-ResetTranslators.jpg)

   :::

   ::: details Apple Safari

   3. 在网页空白处点鼠标右键，然后点击 Zotero Preference

      ![打开 Zotero Connector 的选项](../../assets/images/image-update-translator-safari-1.jpg)

   4. 点击 Advanced 中的 Reset Translators 按钮

      ![更新 Zotero Connector 中的 translators](../../assets/images/image-update-translator-ResetTranslators.jpg)

   :::

   ::: warning

   **这一步骤非常关键！** 请务必确保为 **每一个浏览器** 中的 Zotero Connector 插件更新 translators！

   点击 Reset Translators 按钮时，你也可以通过检查日志的方式确保转换器成功更新

   ![通过日志确保转换器成功更新](../../assets/images/image-update-translator-如何确保更新成功.jpg)

   :::

2. 重启浏览器。

3. 此时你已经完成了 translators 的更新。此时如果你的浏览器仍然不能完成对文献的识别，在确保步骤 1-2 正确的前提下，可重复几次步骤 3 。

## 方法 2：手动替换文件更新

::: warning 不推荐这种方法

我们推荐使用 “方法 1：自动更新” 完成转换器更新。

:::

1. 在 Zotero-编辑-设置-高级-文件和文件夹 找到自己的数据储存位置。

   例如，下图中的数据储存位置就是 `E:\Zotero File`，这里也可以点击“打开数据文件夹”快速打开你的数据文件夹。

   ![数据储存位置](../../assets/images/image-zotero-数据储存位置.png)

2. 找到数据文件夹中的 translators 文件夹（对上图而言就是 `E:\Zotero File\translators`），这里是 Zotero translators 的存放位置

   ![translators的存放位置](../../assets/images/image-数据储存位置translators文件夹.png)

3. 在 [Zotero translators 中文维护小组](https://github.com/l0o0/translators_CN) 下载最新的 translators

   ![手动在GitHub上下载translators](../../assets/images/image-手动在github下载translators.png)

4. 将下载的 zip 文件解压后选择其中所有的 translators 文件（.js 文件），并复制

   ![选择所有的translators文件](../../assets/images/image-translators文件.png)

5. 将所有的 translators 粘贴到第 1 步中 translators 文件夹并替换，此时已经完成 Zotero 中 translators 文件的更新

   ![替换旧的translators](../../assets/images/image-手动更新translators.png)

6. 更新 **每一个浏览器** 中 Zotero Connector 插件里的 translators。

   ::: tip

   在 Zotero Connector v5.0.124 中，官方移除了`Update Translaors`按钮，如果你的浏览器扩展中仍然保留`Update Translaors`按钮，建议升级浏览器扩展

   [获取 Zotero Connector 下载链接](../install.md#浏览器插件-zotero-connector)

   :::

   ::: details Google Chrome 和 Microsoft Edge

   1. 右键点击 Zotero Connector 按钮，然后点击 选项

      ![打开 Zotero Connector 的选项](../../assets/images/image-update-translator-chrome-1.jpg)

   2. 点击 Advanced 中的 Reset Translators 按钮

      ![更新 Zotero Connector 中的 translators](../../assets/images/image-update-translator-ResetTranslators.jpg)

   :::

   ::: details Apple Safari

   3. 在网页空白处点鼠标右键，然后点击 Zotero Preference

      ![打开 Zotero Connector 的选项](../../assets/images/image-update-translator-safari-1.jpg)

   4. 点击 Advanced 中的 Reset Translators 按钮

      ![更新 Zotero Connector 中的 translators](../../assets/images/image-update-translator-ResetTranslators.jpg)

   :::

   ::: warning

   **这一步骤非常关键！** 请务必确保为 **每一个浏览器** 中的 Zotero Connector 插件更新 translators！

   点击 Reset Translators 按钮时

   你也可以通过检查日志的方式确保转换器成功更新

   ![通过日志确保转换器成功更新](../../assets/images/image-update-translator-如何确保更新成功.jpg)
   :::

此时你已经完成了 translators 的更新，此时如果你的浏览器仍然不能完成对文献的识别，在确保步骤 1-5 正确的前提下，可重复几次步骤 6。

## 更新以后仍然有问题？你可能需要重装 Zotero Connector

如果按照上面的步骤更新后仍然无法正常抓取，建议卸载并重装最新版本的 Zotero Connector 浏览器插件。
