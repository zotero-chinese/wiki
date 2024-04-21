# 快速开始

此节以官方插件示例 [Make It Red](https://github.com/zotero/make-it-red/tree/main/src-2.0) 为例，说明 Zotero 插件的工作过程。

::: info Todo

待完善，请参阅插件仓库：[Make It Red](https://github.com/zotero/make-it-red/tree/main/src-2.0)

:::

## Zotero 插件的经典目录结构

```bash
northword@Yoga-Northword MINGW64 /d/Code/Zotero/make-it-red-main/src-2.0
$ tree
.
|-- bootstrap.js
|-- locale
|   `-- en-US
|       `-- make-it-red.ftl
|-- make-it-red.js
|-- manifest.json
|-- prefs.js
`-- style.css

2 directories, 6 files
```

其中，`manifest.json` 和 `bootstrap.js` 两个文件是一个 Zotero 插件必须包含的文件。前者是插件的清单文件，用来描述插件的名称、ID 等信息，后者是插件的引导文件，告诉 Zotero 应如何启动和关闭插件。

`locale/` 目录存放了 Zotero 的本地化文件，这个目录下，每种语言都有一个单独的文件夹，在每种语言的子目录下，存放了包含本地化后的字符串。

`prefs.js` 包含了插件的默认设置。

`make-it-red.js` 包含了插件的主要逻辑代码。

`style.css` 是插件的样式文件。

对于每种文件详细的说明可以在 [参考](../reference/index) 中了解。在本节，我们仅关注 `manifest.json`, `bootstrap.js` 和 `make-it-red.js` 三个文件。

## 基本逻辑解析

### 插件清单

在 `manifest.json` 中，

```json
{
  "manifest_version": 2,
  "name": "Make It Red",
  "version": "2.0",
  "description": "Makes everything red",
  "homepage_url": "https://github.com/zotero/make-it-red",
  "applications": {
    "zotero": {
      "id": "make-it-red@example.com",
      "update_url": "https://zotero-download.s3.amazonaws.com/tmp/make-it-red/updates-2.0.json",
      "strict_min_version": "6.999",
      "strict_max_version": "7.0.*"
    }
  }
}
```

`name` 规定了插件名为 `Make It Red`，`version` 规定插件的版本号为 `2.0`，`applications.zotero.id` 定义插件的 ID [^id] 为 `make-it-red@example.com`。其他字段的含义暂不深究，读者可在 [清单文件](../reference/manifest.md) 中了解。

[^id]: ID 是插件的身份证号码，是 Zotero 识别插件的唯一代码。

### 逻辑代码

在 `bootstrap.js` 中，有这样几个钩子：

```js
async function startup({ id, version, rootURI }) {
  log("Starting 2.0");

  Services.scriptloader.loadSubScript(rootURI + "make-it-red.js");
  MakeItRed.init({ id, version, rootURI });
  MakeItRed.addToAllWindows();
  await MakeItRed.main();
}
```

将在插件被启用时调用，在这个钩子中，加载了 `make-it-red.js` 脚本（这个脚本中定义了 `MakeItRed` 对象，见后文）。然后依次调用了 `MakeItRed` 对象的 `init`, `addToAllWindows` 和 `main` 三个方法。

在 `make-it-red.js` 中，定义了对象 `MakeItRed` ，其中

```js
var MakeItRed = {
  addToWindow(window) {
    let doc = window.document;

    // Add a stylesheet to the main Zotero pane
    let link1 = doc.createElement("link");
    link1.id = "make-it-red-stylesheet";
    link1.type = "text/css";
    link1.rel = "stylesheet";
    link1.href = this.rootURI + "style.css";
    doc.documentElement.appendChild(link1);
    this.storeAddedElement(link1);

    // ...
  },
};
```

创建了一个 `<link>` 元素，如下，

```html
<link
  id="make-it-red-stylesheet"
  type="text/css"
  rel="stylesheet"
  href="chrome://make-it-red/style.css"
/>
```

并将其附加到了 `window.document` 上。
