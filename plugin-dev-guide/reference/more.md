# 更多接口

::: tip Zotero Types

关于接口定义，请参见接口定义包：[https://github.com/windingwind/zotero-types](https://github.com/windingwind/zotero-types)

如果使用插件模板，该 NPM 包已经内置了；否则，你需要自行安装，请 `npm install -D zotero-types` 并将其加入 includes 路径。

:::

## ZoteroPane

`ZoteroPane` 是 Zotero 中主界面项目视图的抽象。可用于获取选中的项目，等等。

源码位置：[chrome/content/Zotero/zoteroPane.js](https://github.com/zotero/zotero/blob/master/chrome/content/zotero/zoteroPane.js)

可通过 `ZoteroPane.getSelectedItems()` 获取选中的条目；
通过 `ZoteroPane.itemsView.onSelect.addListener` 添加条目选中事件监听。

```javascript
ZoteroPane.selectItem(itemID); // 必须先切换到文库标签页
```

## Zotero.Collections 与 Zotero.Collection

Collection（集合）是 Zotero 中所有条目的父层级，是 Library（库）的子层级。

- [chrome\content\Zotero\xpcom\data\collection.js](https://github.com/zotero/zotero/blob/master/chrome/content/zotero/xpcom/data/collection.js) 定义了 Zotero.Collection 类
- [chrome\content\Zotero\xpcom\data\collections.js](https://github.com/zotero/zotero/blob/master/chrome/content/zotero/xpcom/data/collections.js) 定义了 Zotero.Collections 对象，用于访问相关方法

## Zotero.Libraries 与 Zotero.Library

Libray（库）是 Zotero 中所有条目最终的父层级。Zotero 库分为用户库（`id=1`）与群组库，库之间的内容存储方式可能具有较大不同。

- [chrome\content\Zotero\xpcom\data\library.js](https://github.com/zotero/zotero/blob/master/chrome/content/zotero/xpcom/data/library.js) 定义了 Zotero.Library 类
- [chrome\content\Zotero\xpcom\data\librarys.js](https://github.com/zotero/zotero/blob/master/chrome/content/zotero/xpcom/data/libraries.js) 定义了 Zotero.Libraries 方法，用于访问相关方法

## Zotero.Reader

`Zotero.Reader` 是 PDF 阅读器的接口，但对于阅读器中诸如选中、高亮等许多功能在 `viewer.html` 内，无法直接从 Zotero 中调用，相关源码在 pdf-reader 仓库。本节仅作介绍 Zotero.Reader。

源码位置：[chrome/content/Zotero/xpcom/reader.js](https://github.com/zotero/zotero/blob/master/chrome/content/zotero/xpcom/reader.js)

### 基本使用

通过 `Zotero.Reader._readers` 访问当前的 ReaderInstance 对象，每个对象有 `_iframeWindow` 属性，可对其执行界面操作。

```javascript
Zotero.Reader.getByTabID(Zotero_Tabs.selectedID);
```

```javascript
const cont = document.getElementById(`${Zotero_Tabs.selectedID}-context`);
const box = cont.querySelector("tabbox");
box.tabs.append(tab);
box.tabpanels.append(panel);
```

### 调用 pdf.js 接口

ReaderInstance 对象的 `_iframeWindow` 属性是阅读器的 `window` 对象，也就是在网页版所看到的内容，它包含了整个 pdf 阅读器的 document 对象与 wrappedJSObject 字段。

通过调用 `._iframeWindow.wrappedJSObject` 可在阅读器命名空间外访问其局部变量，其中的方法有 `zoteroCopyImage` 和 `zoteroSaveImageAs` 等。同时他包含了 `PDFViewerApplication` 对象。

该部分源码在 [pdf-reader/src at master · Zotero/pdf-reader](https://github.com/zotero/pdf-reader/tree/master/src)

```javascript
._iframeWindow.wrappedJSObject.PDFViewerApplication.pdfViewer.currentPageNumber
```

此外，通过注入脚本的方式可以直接访问 `PDFViewerApplication` 对象来操作阅读器：[chartero | chrome/content/reader.js](https://gitee.com/const_volatile/chartero/blob/master/chrome/content/reader.js)

#### 案例

##### 1. 获取 pdf 指定页面所有文字

以第一页为例，索引为 0：

```typescript
const reader = Zotero.Reader.getByTabID(Zotero_Tabs.selectedID);
const PDFViewerApplication =
  reader._iframeWindow.wrappedJSObject.PDFViewerApplication;
await PDFViewerApplication.pdfLoadingTask.promise;
await PDFViewerApplication.pdfViewer.pagesPromise;
let pages = PDFViewerApplication.pdfViewer._pages;
let pdfPage = pages[0].pdfPage;
let items = (await pdfPage.getTextContent()).items;
```

这里以 `item=items[0]` 为例：

```json
{
  chars: Array(63) [ {…}, {…}, {…}, … ]
	dir: "ltr"
	fontName: "g_d0_f1"
	height: 6.376
	str: "Ma, Z., Hu, X., Huang, L., Bi, J., Liu, Y., 2014."
	transform: [6.376, 0, 0, 6.376, 42.5197, 732.5289]
	width: 202.367864
}
```

这里的 `item.chars` 记录了 `item.str` 的每个字符对应的渲染信息。除了宽高外，`item.transform` 还提供了 (`x=item.transform[4]`, `y=item.transform[5]`) 位置信息。这个位置以 pdf 页面左下角为原点。

根据 pdf 页面内的文字可以解析出所有参考文献，详见：[GitHub - MuiseDestiny/Zotero-reference: Zotero 插件，侧边栏显示正在阅读文献的所有参考文献](https://github.com/MuiseDestiny/zotero-reference)

## Zotero.Notes

`Zotero.EditorInstance` 类是笔记编辑器的抽象；`Zotero.EditorInstanceUtilities` 对象包括了笔记中一些转换等基础功能。

源码位置：[chrome/content/Zotero/xpcom/editorInstance.js](https://github.com/zotero/zotero/blob/master/chrome/content/zotero/xpcom/editorInstance.js)

`Zotero.Notes` 是所有 EditorInstance 实例的管理器。

源码位置：[chrome/content/Zotero/xpcom/data/notes.js](https://github.com/zotero/zotero/blob/master/chrome/content/zotero/xpcom/data/notes.js)

## Zotero_Tabs

Zotero 6 以后的版本引入了标签页（tab）。当打开 PDF 时，默认在新标签页打开。
源码位置：[chrome/content/Zotero/tabs.js](https://github.com/zotero/zotero/blob/master/chrome/content/zotero/tabs.js)

### 基本使用

通过 Zotero_Tabs 访问当前打开的标签页。

#### 新增标签页

通过 `Zotero_Tabs.add` 方法新增标签页，例如 Better Notes 插件中的一段代码：

```typescript
let { id, container } = Zotero_Tabs.add({
  type: "betternotes",
  title: Zotero.locale.includes("zh") ? "工作区" : "Workspace",
  index: 1,
  data: {},
  select: select,
  onClose: undefined,
});
```

请注意此处的 type 将影响菜单栏的显示/隐藏。截至文档更新（2022.08.22），在离开标签时，自定义的标签类型不会被正确隐藏，但在进入标签页时会被显示（相关代码在 `ZoteroStandalone.switchMenuType`）。因此需要手动处理离开标签页时隐藏自定义标签的部分菜单。

```typescript
switchRealMenuBar(hidden: boolean) {
    // We only handle hide. The show will be handled by the ZoteroStandalone.switchMenuType
    document
      .querySelectorAll(".menu-type-betternotes")
      .forEach((el) => ((el as HTMLElement).hidden = hidden));

    // Disable Zotero pdf export
    (document.getElementById("menu_export_files") as XUL.Element).disabled =
      !hidden;
}
```

#### 标签页操作

通过 `select` / `jump` / `move` / `close` 等相关方法进行操作。

```javascript
Zotero_Tabs.select("zotero-pane");
```

## 文件操作

::: info Todo

文件读写已迁移至 [IOUtils](https://firefox-source-docs.mozilla.org/dom/ioutils_migration.html) 和 [PathUtils](https://searchfox.org/mozilla-esr102/source/dom/chrome-webidl/PathUtils.webidl) 。

:::

## Clipboard API

Zotero 中关于剪切板的相关接口。由于 Zotero 目前基于 FireFox60，因此无法使用现代浏览器的剪切板接口。
样例代码为 Better Notes 插件提供的剪切板包装：

```typescript
class CopyHelper {
  transferable: any;
  clipboardService: any;

  constructor() {
    this.transferable = Components.classes[
      "@mozilla.org/widget/transferable;1"
    ].createInstance(Components.interfaces.nsITransferable);
    this.clipboardService = Components.classes[
      "@mozilla.org/widget/clipboard;1"
    ].getService(Components.interfaces.nsIClipboard);
  }

  public addText(source: string, type: "text/html" | "text/unicode") {
    const str = Components.classes[
      "@mozilla.org/supports-string;1"
    ].createInstance(Components.interfaces.nsISupportsString);
    str.data = source;
    this.transferable.addDataFlavor(type);
    this.transferable.setTransferData(type, str, source.length * 2);
    return this;
  }

  // Only Windows
  public addImage(source: string) {
    const io = Components.classes[
      "@mozilla.org/network/io-service;1"
    ].getService(Components.interfaces.nsIIOService);
    const channel = io.newChannel(source, null, null);
    const input = channel.open();
    const imgTools = Components.classes[
      "@mozilla.org/image/tools;1"
    ].getService(Components.interfaces.imgITools);

    const buffer = NetUtil.readInputStreamToString(input, input.available());
    const container = imgTools.decodeImageFromBuffer(
      buffer,
      buffer.length,
      channel.contentType,
    );

    this.transferable.addDataFlavor(channel.contentType);
    this.transferable.setTransferData(channel.contentType, container, -1);
    return this;
  }

  public copy() {
    this.clipboardService.setData(
      this.transferable,
      null,
      Components.interfaces.nsIClipboard.kGlobalClipboard,
    );
  }
}
```

使用样例：

```typescript
new CopyHelper()
  .addText(html, "text/html")
  .addText(this._Addon.parse.parseHTMLToMD(html), "text/unicode")
  .copy();
```

## 弹出通知

```javascript
const popMsg = new Zotero.ProgressWindow({ closeOnClick: false });
popMsg.changeHeadline("[Error]", "", "Chartero");
popMsg.addDescription("----------");

let prog = new popMsg.ItemProgress("chrome://zotero/skin/cross.png", "No!");
prog.setProgress(100); // 默认 0 是灰色图标，100 是正常图标，其他是进度条
popMsg.addDescription('<a href="http://github.com">link</a>');

// 指定父元素实现缩进
let prog1 = new popMsg.ItemProgress(
  "chrome://chartero/skin/bookmark.png",
  "hello",
  prog,
);

popMsg.show();
popMsg.startCloseTimer(6666); // 毫秒
```
