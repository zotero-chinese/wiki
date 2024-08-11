---
authors:
  - northword
---

# 插件清单

`manifest.json` 是插件的清单文件，它是一个允许使用 `//` 撰写单行注释的、特殊的 JSON 文件。此文件必须存在，否则插件无效。

在这个文件中定义了插件的名称、ID、描述、图标、更新地址、兼容版本等信息。

此文件与 [Web Extension 的 manifest.json](https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 基本一致，只是减少了一些字段。

## 示例

下面是一个典型的 `manifest.json` 文件，内容来源于官方插件示例 `Make It Red`。

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

## 属性参考

### `manifest_version`

- 类型：`number`
- 强制性：强制

此键指定扩展使用的 `manifest.json` 的版本。

值须是且仅能是 `2`。

### `name`

- 类型：`string`
- 强制性：强制

插件的名称，本地化可参考 [manifest 的本地化](#manifest-的本地化)。

### `version`

- 类型：`string`
- 强制性：强制

插件的版本，一般格式为由点分隔的数字组成的 ASCII 字符串。

#### 版本格式

版本字符串由 1 到 4 个数字组成，数字之间用点分隔，例如 `1.2.3.4` 。非零数字不得包含前导零。例如，不允许使用 `2.01` ；但是， `0.2` 、 `2.0.1` 和 `2.10` 是允许的。

#### 版本比较

为了确定两个扩展版本中哪一个是最新的，需要从左到右比较版本字符串号。缺少版本字符串元素相当于 `0` 。例如，`1.0` 相当于 `1.0.0.0`。第一个版本字符串的编号大于另一个版本字符串中对应编号的版本字符串是最新的。例如，`1.10` 是比 `1.9` 更新的版本。

### `applications`

类型：`object`
强制性：强制

此项必须包含属性 `zotero`。

#### `zotero`

##### `id`

`id` 即扩展 ID。必填项。通常的，大家都使用邮箱格式来命名插件 ID

##### `strict_min_version`

插件所能支持的 Zotero 的最小版本号。不允许使用 `*` 来定义版本号。默认值为 "42a1"。

##### `strict_max_version`

插件所能支持的 Zotero 的最大版本号。如果安装或运行插件的 Firefox 版本号高于这个最大版本号，插件将不能运行或不允许被安装。默认值为 `*`，意思为不对最大版本号做检查。

##### `update_url`

链接到插件 [更新清单](./update.md) 的链接。注意链接必须以「https」开头。这是为了使你自己就能够管理插件的更新。

### `author`

- 类型：`string`
- 强制性：非强制

插件的作者，用于在浏览器用户界面上显示，这样别人下载安装使用该插件的时候，就能看见你的大名了。

### `description`

- 类型：`string`
- 强制性：非强制

用于在用户下载安装使用界面中显示的一段简短的关于该插件的描述。

这是一个可本地化的键。

### `homepage_url`

- 类型：`string`
- 强制性：非强制

如果 developer 键存在且包含 `url` 属性，它将会覆盖 `homepage_url` 键。

这是一个可本地化的键。

## manifest 的本地化

::: tip Todo

参考：<https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Internationalization#%E5%9B%BD%E9%99%85%E5%8C%96_manifest.json>

:::

## 参考资料

- [Web Extension 的 manifest.json](https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
- [Zotero 7 for developers](https://www.zotero.org/support/dev/zotero_7_for_developers)
