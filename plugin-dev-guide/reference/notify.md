---
authors:
  - windingwind
---

# Zotero 事件机制

Notify 事件是 Zotero 内部的一种事件机制，在包括条目创建修改删除，文件打开关闭，标签页打开选中关闭，同步触发等情况下将发送 Notify 事件。

大部分插件都会用到 Notify 事件，可通过 `Zotero.Notifier.registerObserver` 添加事件，`Zotero.Notifier.unregisterObserver` 移除事件。

Notifier 支持的事件类型包括（可能不全）：

```typescript
type Event =
  | "add"
  | "modify"
  | "delete"
  | "move"
  | "remove"
  | "refresh"
  | "redraw"
  | "trash"
  | "unreadCountUpdated"
  | "index"
  | "open"
  | "close"
  | "select";
```

支持的事件对象包括：

```typescript
type Type =
  | "collection"
  | "search"
  | "share"
  | "share-items"
  | "item"
  | "file"
  | "collection-item"
  | "item-tag"
  | "tag"
  | "setting"
  | "group"
  | "trash"
  | "bucket"
  | "relation"
  | "feed"
  | "feedItem"
  | "sync"
  | "api-key"
  | "tab";
```

源码位置：[chrome\content\Zotero\xpcom\notifier.js](https://github.com/zotero/zotero/blob/master/chrome/content/zotero/xpcom/notifier.js)

## 注册监听器

```typescript
declare namespace _ZoteroTypes {
  interface Notifier {
    /**
     * @param {Object} [ref] signature {notify: function(event, type, ids, extraData) {}}
     * @param {Array} [types] a list of types of events observer should be triggered on
     * @param {String} [id] an id of the observer used in debug output
     * @param {Integer} [priority] lower numbers correspond to higher priority of observer execution
     * @returns {string}
     */
    registerObserver(
      ref: { notify: Notifier.Notify },
      types?: Notifier.Type[],
      id?: string,
      priority?: number
    ): string;
  }
}
```

为 types 事件设置回调 ref，返回监听器 id。

例：

```typescript
notifierCallback = {
  notify: async (
    event: string,
    type: string,
    ids: Array<string>,
    extraData: object
  ) => {
    // You can add your code to the corresponding notify type
    if (
      event == "select" &&
      type == "tab" &&
      extraData[ids[0]].type == "reader"
    ) {
      // Select a reader tab
    }
    if (event == "add" && type == "item") {
      // Add an item
    }
  },
};

let notifierID = Zotero.Notifier.registerObserver(notifierCallback, [
  "tab",
  "item",
  "file",
]);
```

## 注销监听器

```typescript
declare namespace _ZoteroTypes {
  interface Notifier {
    unregisterObserver(id: String): void;
  }
}
```

取消对应 id 的监听器

例：

```typescript
Zotero.Notifier.unregisterObserver(notifierID);
```

## 触发 Notify 事件

一般情况下，不需要手动触发。

### 单个触发

```typescript
/**
* Trigger a notification to the appropriate observers
*
* Possible values:
*
*   event: 'add', 'modify', 'delete', 'move' ('c', for changing parent),
*       'remove' (ci, it), 'refresh', 'redraw', 'trash', 'unreadCountUpdated', 'index'
*   type - 'collection', 'search', 'item', 'collection-item', 'item-tag', 'tag',
*       'group', 'relation', 'feed', 'feedItem'
*   ids - single id or array of ids
*
* Notes:
*
* - If event queuing is on, events will not fire until commit() is called
* unless _force_ is true.
*
* - New events and types should be added to the order arrays in commit()
**/
declare Zotero.Notifier.trigger(event: String, type: String, ids: Number | Number[], extraData?: any, force?: Boolean);

/**
 * Queue an event until the end of the current notifier transaction
 *
 * Takes the same parameters as trigger()
 *
 * @throws If a notifier transaction isn't currently open
 */
declare Zotero.Notifier.queue(event: String, type: String, ids: Number | Number[], extraData?: any, force?: Boolean);
```

例：

```typescript
Zotero.Notifier.trigger("add", "tab", [id], { [id]: data }, true);
```

### 队列触发

```typescript
Zotero.Notifier.commit(queues, (transactionID = true));
```

例：

```typescript
const notifierQueue = new Zotero.Notifier.Queue(); // Initialize a notifier queue
// Do something
await Zotero.Notifier.commit(notifierQueue); // Trigger the queued notifies
```
