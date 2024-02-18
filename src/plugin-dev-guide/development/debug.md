---
author:
  - name: windingwind
    url: https://github.com/windingwind/
  - name: ShareStuff
  - name: northword
    url: https://github.com/northword/
---

# 调试代码

## 通过 Run JavaScript 调试

从 `菜单栏` -> `工具` -> `开发者` -> `Run JavaScript` 打开界面。

在左侧键入代码，点击运行即可在右侧看到输出。

如果代码中包含异步语法（async），需要将结果 return 才能在右侧看见。

## 通过 Zotero.debug 输出日志

- 使用 `Zotero.debug` 输出到 `菜单栏` -> `帮助` -> `输出日志排错` -> `查看输出文件`；
- 使用 `Zotero.log` 输出到 `菜单栏` -> `工具` -> `开发者` -> `Error Console`。

## 通过开发者工具

如果你不熟悉开发者工具，可参看[什么是浏览器开发者工具？ - 学习 Web 开发 | MDN](https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/What_are_browser_developer_tools)

::: tip 远程调试依赖 beta 版本 Zotero

远程调试需要 [Zotero beta builds](https://www.zotero.org/support/beta_builds) 。Windows 开发者可下载 zip 版本，解压缩后即可使用，不会将正式版覆盖。

:::

截止至最后编辑日期，Zotero 底层基于 Firefox 102 ESR。

1. 打开 Zotero Beta，打开 `菜单栏` -> `编辑` -> `首选项` -> `高级` -> `设置编辑器`，搜索 `debug` 并开启 `devtools.debugger.remote-enable` 和 `devtools.debugger.remote-websocket`。

2. 使用 `--debugger` 参数启动 Zotero。
   也可以将启动参数写入快捷方式。

3. 在 FireFox 102 ESR 中，找到`设置` -> `更多工具` -> `远程调试`（或者浏览器中输入：`about:debugging#/setup`），找到网络位置，输入 `localhost:6000`，点击确定添加即可。

   ::: tip

   端口与第一步打开的高级编辑器中 `devtools.debugger.remotr-port` 一致。

   :::

4. 选择 `localhost:6000`，然后点击进程中的多线程工具箱进行检查，可进入控制台、无障碍环境等进行调试

::: tip Zotero 正在包含此功能

Zotero 团队正在将开发者工具嵌入 Zotero，见 [PR #3387](https://github.com/zotero/zotero/pull/3387)，此 PR 合并后即可直接从菜单呼出开发者工具，而无需安装 FireFox。

:::

::: tip 模板用户无需手动配置

模板的启动脚本中已经进行了相关配置，部分实现了上述 PR 的功能，因此你无需再手动执行以上步骤，也不需要安装 Firefox，`npm start` 后即可打开开发者工具。

:::
