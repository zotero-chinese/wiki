---
title: 备份
icon: database
authors:
  - Chikit-L
  - Northword
date: 2023-06-28 21:19:25
updated: 2023-10-04 18:38:54
---

# 备份

我们强烈建议您定期备份 Zotero 数据目录。虽然同步是确保您可以在计算机发生问题时恢复库的好方法，但它并不能完全替代正确的备份：Zotero 服务器仅存储库的最新版本，并且只需要一个（可能是自动）同步以更改服务器副本（尽管可以从 Zotero 的自动备份恢复一些无意的更改）。

在本页中，我们首先介绍 Zotero 运行所需的三类文件，然后介绍若干种备份这些文件的方式。

## 概述

我们将构成 Zotero 正常运行的文件分为三部分：

- Zotero 程序文件 (Program Files)
- Zotero 数据文件 (Zotero Data Folder)
- Zotero 用户配置文件 (Zotero Profile Directory)

### 程序文件

这些文件构成 Zotero 程序的主体，包含了 Zotero 程序的二进制文件（例如 `zotero.exe` 等） 和相关的库文件，不包括您的数据和个性化设置。

这些文件由安装包释放，通常无需额外备份。

### 数据文件

这个目录包含了 Zotero 存储的所有数据，包括您的文献条目信息、笔记、附件、标签、文件夹结构、转换器和引文样式等。这是最重要的部分，因为它包含了您的研究资料。备份数据文件可确保您不会失去已收集的所有信息。

#### 数据文件位置

除非您在 Zotero 设置的高级窗格中选择了自定义数据目录，否则您的 Zotero 数据将存储在以下与操作系统相关的目录中：

| 系统类型                     | 默认位置                                      |
| ---------------------------- | --------------------------------------------- |
| macOS                        | `/Users/<username>/Zotero`                    |
| Windows 7 and higher Windows | `C:\Users\<User Name>\Zotero`                 |
| Windows XP/2000              | `C:\Documents and Settings\<username>\Zotero` |
| Linux                        | `~/Zotero`                                    |

::: tip

查找 Zotero 数据的最简单、最可靠的方法是单击 `Zotero 设置` 的 `高级` 选项卡中的 `显示数据目录` 按钮。这将始终显示当前正在使用的数据目录，并且是查找数据目录的推荐方法。

如果您无法访问 Zotero 设置，搜索文件名`zotero.sqlite`也可以帮助您找到 Zotero 数据目录。

:::

#### 数据文件内容

```bash
northword@Yoga-Northword MINGW64 /d/Northword/Documents/Zotero
$ tree -L 1
.
|-- about config.xul
|-- cache
|-- locate
|-- logs
|-- storage
|-- styles
|-- translators
|-- zotero.sqlite
`-- zotero.sqlite.bak
```

数据目录中最重要的文件是 `zotero.sqlite` 文件，它是包含大部分数据的数据库：项目元数据、注释、标签等。当 Zotero 启动时，它会读取 `zotero.sqlite` 文件。

该目录还包含一个 `storage` 文件夹，其中包含 8 个字符的子文件夹（例如`N7SMB24A`），其中包含所有文件附件，例如 PDF、网页快照、音频文件或您导入的任何其他文件。 （链接的文件不会复制到此子文件夹中。）

您的数据目录可能包含其他几个文件和文件夹。其中可以包括 `zotero.sqlite.bak` （ `zotero.sqlite` 的自动备份，如果现有 `zotero.sqlite.bak` 文件在过去 12 小时内未更新，则定期更新）和 `zotero.sqlite.[number].bak` 文件（在某些 Zotero 更新期间创建的 `zotero.sqlite` 自动备份），以及诸如 `locate` 、 `logs` 等文件夹， `pipes` 、 `styles` 和 `translators` 在 Zotero 启动时自动创建。

::: warning

在复制、删除或移动任何这些文件之前，请确保 Zotero 已关闭。如果在移动这些文件之前不这样做可能会损坏您的数据。

:::

### 用户配置文件

用户配置文件包括您的个性化设置、插件及其配置、数据库位置等。备份用户配置文件可确保您可以轻松地还原您的个性化 Zotero 设置和工作环境。

#### 用户配置文件位置

| 系统类型                     | 默认位置                                                                                      |
| ---------------------------- | --------------------------------------------------------------------------------------------- |
| macOS                        | `/Users/<username>/Library/Application Support/Zotero/Profiles/<randomstring>`                |
| Windows 7 and higher Windows | `C:\Users\<用户名>\AppData\Roaming\Zotero\Zotero\Profiles\<8位随机字符>.default`              |
| Windows XP/2000              | `C:\Documents and Settings\<username>\Application Data\Zotero\Zotero\Profiles\<randomstring>` |
| Linux                        | `~/.zotero/zotero/<randomstring>`                                                             |

::: tip macOS

默认情况下，`/Users/<用户名>/Library` 文件夹是隐藏的。要访问它，请单击桌面，按住 `Option` 键，单击 Finder 的 `转到` 菜单，然后从菜单中选择 `资源库`。

:::

::: tip Windows

默认情况下， `AppData` 是隐藏的，可以在资源管理器搜索栏键入 `%appdata%`，然后按回车，即可进入 `AppData\Roaming` 目录。

:::

#### 用户配置文件内容

这个目录包含 Zotero 的配置、插件信息及插件配置等。下面列出了部分目录文件：

```bash
northword@Yoga-Northword MINGW64 ~/AppData/Roaming/Zotero/Zotero/Profiles/1y2hj8ud.default
$ tree -L 1
.
|-- bookmarkbackups
|-- browser-extension-data
|-- extensions
|-- extensions.json
|-- prefs.js
|-- times.json
|-- treePrefs.json
|-- webappsstore.sqlite
`-- xulstore.json
```

其中 `prefs.js` 包含 Zotero 的所有设置，`extensions/` 目录 和 `extensions.json` 包含 Zotero 插件的安装包和安装、启用等信息。

::: warning

如无必要，不要修改这个目录里的任何文件，不当的修改可能导致 Zotero 无法正常启动。

:::

## 手动备份

手动备份可以实现数据的无损备份，包括但不仅限于账户、插件、设置、文献等数据。

首先您需要在新电脑上安装 Zotero，然后将下列表格中旧电脑的数据文件拷贝到新电脑的同一位置。

| 旧电脑                                                                     | 新电脑                                                                 |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `C:\Users<用户名>\AppData\Roaming\Zotero\Zotero\Profiles\*.default` 中文件 | `C:\Users<用户名>\AppData\Roaming\Zotero\Zotero\Profiles\*.default` 中 |
| Zotero-`设置`-`高级`-`文件和文件夹`-`数据储存位置`中的文件                 | 同一路径                                                               |

例如：电脑的用户名为`zotero-chinese`，旧电脑将 Zotero 安装在 `D:\Program Files\Zotero` 目录下，数据储存位置设置为 `C:\Users\zotero-chinese\Zotero`。

在新电脑中，应该要做的是

1. 安装 Zotero，并确保 Zotero 处于关闭状态。

2. 将 **旧电脑** `****.default` 中的文件 拷贝至 **新电脑** `****.default` 中（注意不是复制文件夹本身，而是替换其文件和子文件夹）

3. 将 **旧电脑** `C:\Users\zotero-chinese\Zotero` 拷贝至 **新电脑** `C:\Users\zotero-chinese\Zotero`中

4. 打开 Zotero，即可。

## 使用插件蒲公英 `Tara` 进行数据的备份和恢复

请参阅 [使用 Tara 备份数据](./plugins/tara.md)。

## 从备份恢复数据

::: info 施工中

请参阅：[Restoring Your Zotero Data From a Backup - Zotero Documentation](https://www.zotero.org/support/zotero_data#restoring_your_zotero_data_from_a_backup)

- Restoring Your Zotero Data Using Zotero Syncing
- Restoring Your Zotero Data From a Backup
- Restoring Your Zotero Data From a Backup and Overwriting Synced Changes
- Restoring From the Last Automatic Backup
- Restoring From the Last Upgrade Backup
- Locating Missing Zotero Data

:::
