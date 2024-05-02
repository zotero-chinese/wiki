# Zotero 条目

Item（条目）是 Zotero 中的基础数据元素。条目根据类型又可分为普通条目 (regular item)，附件 (attachment item)，笔记 (note item) 和注释 (annotation item)。Zotero 中，小到一个 PDF 附件中的一条高亮，大到一个集合（collection），都可以抽象为一个条目（Item）。

大多数插件的最终目的就是修改这些条目，例如，添加标签，修改信息，等等。

## 创建条目

```javascript
new Zotero.Item(itemType);
```

## 获取条目

```typescript
declare Zotero.Items.get: (ids: Number | Number[]) => ZoteroItem | ZoteroItem[];
declare Zotero.Items.getByLibraryAndKeyAsync: (
  libraryID: Number,
  itemKey: String
) => Promise<ZoteroItem>;
declare ZoteroPane.getSelectedItems: () => ZoteroItem[];
```

通过 `Zotero.Items.get` / `getByLibraryAndKeyAsync` 来从 ID 获取条目；
通过 `ZoteroPane.getSelectedItems` 获取当前选中的条目。

```javascript
ZoteroPane.itemsView.getRow(2).ref;
```

## 修改条目

对条目内容进行修改后，请使用 `item.save` / `item.saveTx()`来保存。

```javascript
var item = new Zotero.Item("computerProgram");
item.setType(Zotero.ItemTypes.getID("note"));
```

## PDF 批注

> Zotero 中的批注也是 Item 类型！

```javascript
Zotero.Items.getAll(1).then((i) => i.filter((t) => t.isAnnotation()));
```

注释的属性：

- annotationText：高亮注释的内容
- parentItem：获得 pdf 条目

```javascript
const annotations = Zotero.Items.get(reader.itemID).getAnnotations();
reader.navigate({ annotationKey: annotations[0].key });
```

## 从对话框选择条目

```javascript
let io = { dataIn: null, dataOut: null, deferred: Zotero.Promise.defer() };
window.openDialog(
  "chrome://zotero/content/selectItemsDialog.xhtml",
  "",
  "chrome,dialog=no,centerscreen,resizable=yes",
  io
);
io.deferred.promise.then(() => console.debug(io));
```
