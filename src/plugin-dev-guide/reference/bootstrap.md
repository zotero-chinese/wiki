---
author:
  - name: windingwind
    url: https://github.com/windingwind/
  - name: northword
    url: https://github.com/northword/
---

# 引导脚本

引导脚本即 `bootstrap.js`，这是 Zotero 插件的入口脚本文件，此文件必须存在，否则插件将无法被安装。

## 内容

这个文件里必须包含以下几个函数，Zotero 将在对应动作发生时调用对应的函数。

```js
// 插件被安装时调用
function install(data, reason) {}

// 插件启动时调用
function startup(data, reason) {}

// Zotero 主窗口加载完毕时调用
function onMainWindowLoad({ window }) {}

// Zotero 主窗口被关闭时调用
function onMainWindowUnload({ window }) {}

// 插件被禁用时或 Zotero 被关闭时调用
function shutdown(data, reason) {}

// 插件被卸载时调用
function uninstall(data, reason) {}
```

一般而言，`startup` 与 `shutdown` 将分别在插件被启用（包括安装后启动）与关闭（包括程序退出，手动禁用，更新，卸载等情况）时被调用，较为重要。在 `startup` 中初始化插件代码，在 `shutdown` 中清理插件代码，并需要移除添加的界面元素。

通常地，在 `startup` 中初始化插件地本地化系统、首选项、兼容性等，在 `onMainWindowLoad` 中初始化与 Zotero UI 有关的组件，如菜单、侧边栏、自定义列等。

## 样例

关于 `bootstrap.js` 的样例，可参考前章提到的插件框架。它将插件的根对象注册到全局变量 `Zotero` 中，在任何引入了 Zotero 的位置均可使用。 或参考 Zutilo 插件。它将插件的根对象注册为一个全局变量。缺陷是在非主窗口内引入插件代码将较为复杂。

- [Zotero-addon-template/bootstrap.js at bootstrap · windingwind/Zotero-addon-template](https://github.com/windingwind/zotero-addon-template/blob/main/addon/bootstrap.js)
- [Zutilo/bootstrap.js at master · wshanks/Zutilo](https://github.com/wshanks/Zutilo/blob/master/addon/bootstrap.js)

下面是以官方示例 `Make It Red` 的 `bootstrap.js`，它在 `startup()` 中通过 `Services.scriptloader.loadSubScript(rootURI + "make-it-red.js");` 将插件脚本载入，在 `make-it-red.js` 中，在 `Zotero` 下定义了一个对象 `MakeItRed`。在 `make-it-red.js` 加载完成后，调用 `MakeItRed` 对象下的方法完成插件初始化。

```js
var MakeItRed;

function log(msg) {
  Zotero.debug("Make It Red: " + msg);
}

function install() {
  log("Installed 2.0");
}

async function startup({ id, version, rootURI }) {
  log("Starting 2.0");

  Services.scriptloader.loadSubScript(rootURI + "make-it-red.js");
  MakeItRed.init({ id, version, rootURI });
  MakeItRed.addToAllWindows();
  await MakeItRed.main();
}

function onMainWindowLoad({ window }) {
  MakeItRed.addToWindow(window);
}

function onMainWindowUnload({ window }) {
  MakeItRed.removeFromWindow(window);
}

function shutdown() {
  log("Shutting down 2.0");
  MakeItRed.removeFromAllWindows();
  MakeItRed = undefined;
}

function uninstall() {
  log("Uninstalled 2.0");
}
```
