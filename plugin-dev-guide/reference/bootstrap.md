---
authors:
  - windingwind
  - northword
---

# 引导脚本

引导脚本即 `bootstrap.js`，这是 Zotero 插件的入口脚本文件，此文件必须存在，否则插件将无法被安装。

## 内容

这个文件里必须包含以下几个钩子，Zotero 将在对应动作发生时调用对应的钩子。

### 生命周期钩子

```js
// 插件被安装时调用
function install(data, reason) {}

// 插件启动时调用
function startup(data, reason) {}

// 插件被禁用时或 Zotero 被关闭时调用
function shutdown(data, reason) {}

// 插件被卸载时调用
function uninstall(data, reason) {}
```

插件生命周期挂钩传递两个参数：

- `data`: 具有以下属性的对象：
  - `id` ，插件 ID
  - `version` ，插件版本
  - `rootURI` ，指向插件文件的字符串 URL。对于 XPI，这将是 `jar:file:///` URL。该值始终以斜杠结尾，因此您可以附加相对路径来获取与插件捆绑的文件的 URL（例如 `rootURI + 'style.css'` ）。
- `reason`: 表示事件原因的数字，可以根据以下常量进行检查： `APP_STARTUP` 、 `APP_SHUTDOWN` 、 `ADDON_ENABLE` 、 `ADDON_DISABLE` 、 `ADDON_INSTALL` 、 `ADDON_UNINSTALL` 、 `ADDON_UPGRADE` 、 `ADDON_DOWNGRADE`

任何与特定窗口无关的初始化都应由 `startup` 触发，删除应由 `shutdown` 触发。

### 窗口钩子

```js
// Zotero 主窗口加载完毕时调用
function onMainWindowLoad({ window }) {}

// Zotero 主窗口被关闭时调用
function onMainWindowUnload({ window }) {}
```

窗口钩子传递一个参数：

- 具有包含目标窗口的 window 属性的对象

在某些平台上，主窗口可以在 Zotero 会话期间多次打开和关闭，因此任何与窗口相关的活动，例如修改主 UI、添加菜单或绑定快捷方式都必须由 `onMainWindowLoad` 执行以便新的主窗口包含您的更改。

然后，当调用 `onMainWindowUnload` 时，您必须删除对窗口或其中的对象的所有引用，取消任何计时器等，否则每次关闭窗口时都会有造成内存泄漏的风险。添加到窗口的 DOM 元素会在窗口关闭时自动销毁，因此只需删除 `shutdown()` 中的元素即可，可以通过循环遍历所有窗口来完成：

```js
function shutdown() {
  var windows = Zotero.getMainWindows();
  for (let win of windows) {
    win.document.getElementById("make-it-red-stylesheet")?.remove();
  }
}
```

（目前仅支持一个主窗口，但有些用户可能会找到打开多个主窗口的方法，这将在未来版本中正式支持。）

::: tip

通常地，在 `startup` 中初始化插件地本地化系统、设置、兼容性等，在 `onMainWindowLoad` 中初始化与 Zotero UI 有关的组件，如菜单、侧边栏、自定义列等。

:::

## 样例

关于 `bootstrap.js` 的样例，可参考前章提到的插件框架。它将插件的根对象注册到全局变量 `Zotero` 中，在任何引入了 Zotero 的位置均可使用。或参考 Zutilo 插件。它将插件的根对象注册为一个全局变量。缺陷是在非主窗口内引入插件代码将较为复杂。

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

## 参考资料

- [Zotero 7 for developers](https://www.zotero.org/support/dev/zotero_7_for_developers)
- [bootstrapped-extension framework](https://www.devdoc.net/web/developer.mozilla.org/en-US/docs/Mozilla/Add-ons/Bootstrapped_Extensions.html#Bootstrap_entry_points)
