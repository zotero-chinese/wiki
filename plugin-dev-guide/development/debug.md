---
authors:
  - windingwind
  - ShareStuff
  - northword
---

# 调试代码

## 通过 Run JavaScript 调试

从 「菜单栏」->「工具」->「开发者」->「Run JavaScript」 打开界面。

在左侧键入代码，点击运行即可在右侧看到输出。

如果代码中包含异步语法（async），需要将结果 return 才能在右侧看见。

## 通过 `Zotero.debug` 输出日志

- 使用 `Zotero.debug` 输出到 「菜单栏」->「帮助」->「输出日志排错」->「查看输出文件」；
- 使用 `Zotero.log` 输出到 「菜单栏」->「工具」->「开发者」->「Error Console」。

::: tip 不推荐使用 `console` 作为调试/日志输出

- Zotero 插件环境没有默认将 `console` 作为一个全局对象
- `console.log` 是性能昂贵的

如果可能，请使用辅助函数，仅在开发环境打印日志，可参考 `ztoolkit.log`。

:::

## 通过开发者工具

由于 Zotero 基于 Firefox，因此可以使用 [Firefox 开发者工具](https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/What_are_browser_developer_tools) 与 DOM 交互、设置代码断点、跟踪网络请求等。

Zotero 7 beta 版本内建 Firefox 115 开发者工具。要在启动 Zotero 时打开开发者工具，请在命令行上传递 `-jsdebugger` 标志：

```bash
/Applications/Zotero\ Beta.app/Contents/MacOS/zotero -ZoteroDebugText -jsdebugger
```

::: tip 依赖 beta 版本 Zotero

需要 [Zotero beta builds](https://www.zotero.org/support/beta_builds) 。Windows 开发者可下载 zip 版本，解压缩后即可使用，不会将正式版覆盖。

:::

::: info 即将实现：在菜单栏中直接打开开发者工具

Zotero 团队正在添加「浏览器工具箱」菜单，以便直接从菜单呼出开发者工具，而无需在启动时传入 `--jsdebugger` 标志，见 [PR #3387](https://github.com/zotero/zotero/pull/3387)。

:::

::: info 模板用户无需手动配置

模板的启动脚本中已经进行了相关配置，`npm start` 后即可打开开发者工具。

:::

## 通过火狐浏览器远程调试 <Badge text='已弃用' />

:::: details 已过时：通过火狐浏览器远程调试连接到 Zotero

::: warning 该方法已过时

该方法已过时，Zotero 测试版现已内建 `Browser Toolbox`，请参阅 [通过开发者工具](#通过开发者工具)。

:::

截止至最后编辑日期，Zotero 底层基于 Firefox 115 ESR。

1. 打开 Zotero Beta，打开 「菜单栏」->「编辑」->「设置」->「高级」->「设置编辑器」，搜索 `debug` 并将 `devtools.debugger.remote-enable` 和 `devtools.debugger.remote-websocket` 设置为 `true`。

2. 使用 `--debugger` 参数启动 Zotero。
   也可以将启动参数写入快捷方式。

3. 在 FireFox 115 ESR 中，找到「设置」->「更多工具」->「远程调试」（或者浏览器中输入：`about:debugging#/setup`），找到网络位置，输入 `localhost:6100`，点击确定添加即可。

   ::: tip

   端口与第一步打开的高级编辑器中 `devtools.debugger.remote-port` 一致。

   注意，自 Zotero 7.0.0-beta.104 开始，Zotero 不再固定使用 6100 作为端口号，而是使用随机端口号。

   :::

4. 选择 `localhost:6100`，然后点击进程中的多线程工具箱进行检查，可进入控制台、无障碍环境等进行调试

::::
