---
authors:
  - Morimiue
date: 2024-11-25 23:00:00
---

# ZotMoov

::: tip 简介

用于管理 Zotero 7 的文献附件，它支持以下功能：
- 自动/手动将附件移动/复制到指定目录
- 在 Zotero 中删除附件时，自动将其从计算机中删除
- 轻松将指定目录中最后修改的文件添加进 Zotero 条目

:::

::: info 关于

- 作者：[Wiley Yu](https://github.com/wileyyugioh)
- 项目主页：[https://github.com/wileyyugioh/zotmoov](https://github.com/wileyyugioh/zotmoov)
- 下载地址：
  - [GitHub Release](https://github.com/wileyyugioh/zotmoov/releases/latest)
  - [国内镜像](https://zotero-chinese.com/plugins/#search=zotmoov)

:::

## 为什么要用 ZotMoov

### 搭配云同步

::: warning 警告

如果您的主要用途是云同步，请注意：
- 这种同步方案并非首选，我们优先推荐使用支持 WebDAV 的网盘来进行同步（请参阅[通过 WebDAV 同步附件](https://zotero-chinese.com/user-guide/sync#通过-webdav-同步附件)文档章节）；推荐仅当拟使用的同步服务不支持 WebDAV 时，再使用这种方式。
- 这种方式不支持同步到 Zotero 官方 iOS 和 Android 客户端。

:::

如果想在多台设备上看文献，云同步必不可少。然而，Zotero 提供的 300MB 免费空间捉襟见肘；虽然 Zotero 也兼容 WebDAV 协议，但是很多云存储服务（如 OneDrive、百度网盘等）并不提供稳定的 WebDAV 服务；如果想使用 Syncthing 等 P2P 同步更是无从谈起。

ZotMoov 可以将所有附件聚合在指定文件夹下，从而方便地使用各种云同步软件。

### 更清晰的文件目录结构

原版 Zotero 是将文件存储在一串数字与字母组成的文件夹中，想在 Zotero 以外打开附件的话，完全无法手动找到，往往需要打开 Zotero 再显示文件位置。

而使用 ZotMoov 后，附件的组织方式将更加具有人类可读性。

## 使用方法

安装插件后，

1. 打开`设置 -> ZotMoov`，将 `移动附件到以下目录` 选项设置为你想要的目录。
2. 如果需要在多台设备之间同步，打开`设置 -> 高级`，将`文件和文件夹 -> 已链接附件的根目录`选项也设置为这个目录。
3. ZotMoov 默认只作用于新增的附件，旧有的附件并不会自动更新，你可以按 `Ctrl+A` 全选所有文献后，点击右键菜单的 `ZotMoov：移动附件到预设目录`来更新所有文件。

其他选项请根据自己的需求设置。

## 从 Zotero 6 的 ZotFile 插件迁移

在 Zotero 6 时代，我们常用的类似功能的插件是 [ZotFile](https://github.com/jlegewie/zotfile)，然而，[作者已明确表示暂无计划适配 Zotero 7](https://github.com/jlegewie/zotfile/issues/655#issuecomment-1595364307)，因此原来的 ZotFile 用户可能会考虑迁移到 ZotMoov。

（以下内容译自 [ZotMoov 官方 README](https://github.com/wileyyugioh/zotmoov#migrating-from-zotfile)）

ZotMoov 按理说应该不会破坏 ZotFile 现有的链接文件。但为了确保安全，在更新到 Zotero 7 之前，请[对 Zotero 数据进行备份](https://www.zotero.org/support/zotero_data#backing_up_your_zotero_data)，并对 ZotFile 文件夹进行备份。

如果你不介意新旧文件混在一起，ZotMoov 的数据目录可以就是之前的 ZotFile 目录；或者，如果你想将文件分开存放，可以选择一个新的数据目录。

而对于 ZotFile 的 tablet 文件，你可以使用官方的 [ZotFile Recovery 插件](https://github.com/jlegewie/ZotFile-Recovery) 来恢复。

有一个可能会出现的问题是[已链接附件的根目录](https://www.zotero.org/support/preferences/advanced#linked_attachment_base_directory)功能。如果你之前使用了这个功能（请检查`设置 -> 高级 -> 文件和文件夹 -> 已链接附件的根目录`），你可能需要修改根目录，改成一个既包含 ZotFile 文件又包含 ZotMoov 文件的文件夹。

最简单的方法是直接复用 ZotFile 文件夹，或者将 ZotMoov 文件夹放在之前的 ZotFile 文件夹内。例如，ZotMoov 数据文件夹可以是 `ZotFile/` 或 `ZotFile/ZotMoov/`。
