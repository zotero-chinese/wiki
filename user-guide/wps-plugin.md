---
title: 在 WPS 中插入参考文献
date: 2023-09-22 20:36:31
---

# 在 WPS 中插入参考文献

在 WPS 中使用插件参考文献，目前有两种方法：

- 使用普通版本的 WPS，通过 Zotero WPSJS 项目完成参考文献插入 <Badge text="推荐" />
- 使用带有 VBA 的 WPS，运行为 Word 适配的加载项

## 通过 Zotero WPS JS 项目

Zotero WPSJS 项目是一个「WPS 文字」的加载项，该加载项利用 WPS 提供的 JavaScript API 从 Zotero 获取引文信息，并写入到 WPS 文档中。

它最初是由 [@tankwyn](https://github.com/tankwyn) 开发并发布在 [tankwyn/WPS-Zotero](https://github.com/tankwyn/WPS-Zotero) 的，随后 [@初心不忘](https://gitee.com/wangrui5015) 接手了其维护，将修改版本发布在 [wangrui5015/Zotero-WPSJS](https://gitee.com/wangrui5015/Zotero-WPSJS)。

### 安装

作者初心不忘已经录制了安装视频，请观看视频教程了解安装步骤：

- [macOS](https://www.bilibili.com/video/BV12SFXeJEJV)
- [Windows](https://www.bilibili.com/video/BV12SFXeJEJV?p=2)
- [Linux](https://www.bilibili.com/video/BV12SFXeJEJV?p=3)

### 使用

WPS 插件的按钮与 Word 插件类似，具体的操作过程，请参考 [在 Word 中插入参考文献](./ms-word-plugin.md)。

## 常见问题

### 1. Zotero 不会自动出现

使用中可能点击按钮后，Zotero 的窗口不会自动出现，可以手动点击一下任务栏中的 Zotero 图标，让 Zotero 的窗口跳到最前。

### 2. 插件安装后 WPS 内不显示 Zotero 选项卡

该部分教程来自与[官方文档](https://p.kdocs.cn/s/ZPIJCBAABE)

若安装 Zotero 插件后，打开 WPS 不显示，请按照以下步骤操作：

1.  **关闭 WPS Office 的所有程序**（如文字、表格、演示）。

2.  **找到 Zotero.dotm 文件并复制它：**

    - **对于 Zotero 7 及更新版本：**
      - 路径通常为： `[Zotero安装盘符]:\Program Files\Zotero\integration\word-for-windows\`
      - 例如，如果您 Zotero 安装在 D 盘，路径则为 `D:\Program Files\Zotero\integration\word-for-windows\Zotero.dotm`
      - 如果您 Zotero 安装在 C 盘，路径则为 `C:\Program Files\Zotero\integration\word-for-windows\Zotero.dotm`
      - **注意：** `Program Files` 也可能是 `Program Files (x86)`，取决于您的 Zotero 安装版本（32 位或 64 位）和系统。请检查您的实际安装目录。
    - **对于 Zotero 6 及更早版本：**
      - 路径通常为： `[Zotero安装盘符]:\Program Files (x86)\Zotero\extensions\zoteroWinWordIntegration@zotero.org\install\`
      - 例如：`C:\Program Files (x86)\Zotero\extensions\zoteroWinWordIntegration@zotero.org\install\Zotero.dotm`
    - **如何找到 Zotero 安装目录？**
      - 如果您不确定 Zotero 安装在哪里，可以尝试右键点击 Zotero 桌面快捷方式，选择「打开文件所在位置」来找到 Zotero 的主安装目录，然后根据您的 Zotero 版本进入上述相应的子文件夹。
    - 在上述路径中找到 `Zotero.dotm` 文件后，选中它并按 `Ctrl+C` 复制。
      ![image](../assets/images/WPS_Problems.png)

3.  **将 Zotero.dotm 文件粘贴到 WPS 的启动 (startup) 文件夹：**

    - 打开文件资源管理器，在地址栏输入以下路径并按回车键：
      `%APPDATA%\kingsoft\wps\startup`
      或者，您也可以手动导航到这个路径，它通常是：
      `C:\Users\[您的用户名]\AppData\Roaming\kingsoft\wps\startup`
      (请将 `[您的用户名]` 替换为您实际的 Windows 用户名，例如 `Administrator`, `YourName` 等。)
    - **注意：** `AppData` 文件夹默认是隐藏的。如果您在 `C:\Users\[您的用户名]\` 目录下看不到 `AppData` 文件夹，请在文件资源管理器的菜单栏中点击「查看」（或类似选项卡），然后在「显示/隐藏」区域勾选「隐藏的项目」（或类似选项）即可使其显示出来。
      ![image](../assets/images/WPS_Problems-1.png)
    - 在打开的 `startup` 文件夹内，按 `Ctrl+V` 粘贴刚刚复制的 `Zotero.dotm` 文件。

4.  - 重启 WPS，即可看到 Zotero 插件
      ![image](../assets/images/WPS_Problems-2.png)

### 3. 有多个 Zotero 选项卡

如果你之前安装把 Word 里的 Zotero 插件强行安装到 WPS，那样出现多个的 Zotero 选项

![多个 Zotero 选择](../assets/images/wps/wps-plugin-ui.png)

先打开 `C:\Users\你的用户名\AppData\Roaming\kingsoft\wps` 目录 (注意用户名换成你自己的)，找到 `startup` 目录，删掉里面的 `zotero.dotm` 文件，这个文件是直接从 Zotero 的 Word 插件里复制到 WPS 里，需要 WPS 有 VBA 环境，现在已经不需要了，可以删掉。

![WPS 插件安装路径](../assets/images/wps/wps-vba-plugin-install-path.png)

## 通过 VBA 使用

使用 WPS 的 VBA 插件插入参考这篇：[完美在 WPS 中使用 Zotero 的方法](https://zhuanlan.zhihu.com/p/579975093)，该方法这个方法需要依赖 WPS 的 VBA 环境，需要升级到某些付费版本才行（当然也有破解版）。
