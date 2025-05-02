# Linter for Zotero

::: info 关于插件

这个插件用来规范条目的字段数据，以在引用参考文献的时候可以生成正确的、规范的参考文献表。

- 项目主页：[GitHub](https://github.com/northword/zotero-format-metadata/)
- 插件下载地址
  - [GitHub Release](https://github.com/northword/zotero-format-metadata/releases)
  - [国内镜像](https://zotero-chinese.com/plugins/#search=linter)

:::

## 重复条目检查

当新增条目时，插件自动检查该条目是否与库中已有条目重复，若有重复，则提示用户确认。

## 快速设置上下标、粗体和斜体

Zotero 的参考文献表中的富文本内容需要手动插入 HTML 标签来实现（详见 [^rich_text_bibliography]），这对于不爱折腾的人来说非常麻烦，虽然 Zotero 的文档上提及将在后续版本支持富文本可视化编辑，然而数年过去了，该议题没有任何进展，故本插件提供了快捷插入这些 HTML 标签的途径。

[^rich_text_bibliography]: <https://www.zotero.org/support/kb/rich_text_bibliography>

### 快捷键

选中文本后，按下以下快捷键快速应用相应样式：

- 上标：`Ctrl` + `Shift` + `+`
- 下标：`Ctrl` + `=`
- 粗体：`Ctrl` + `B`
- 斜体：`Ctrl` + `I`
- 阻止大写：设置 `class="nocase"` 阻止某些专有名词在 CSL title case 时被大写

注：这些快捷键与 Word 中相应快捷键一致。

<!-- ![Set subscript via shoutcut](./assets/set-sub-via-shoutcut.gif) -->

### 工具条

编辑「标题」字段时，弹出工具条，编辑完成后单击空白处可以自动关闭工具条。该工具条可以在首选项中彻底关闭。

<!-- ![Set subscript via toolbar](./assets/set-sub-via-toolbar.gif) -->

## 将标题转为「句首大写」

Zotero 文档建议将标题存储为「句子式大写」的格式，这将有利于 CSL 对其执行「title case」变换 [^sentenceCase]。Zotero 7 内置了将标题转为「句子式大写」的功能，预置了一些特例识别，本插件在其基础上，增加了针对化学式等的专有名词识别。

[^sentenceCase]: <https://www.zotero.org/support/kb/sentence_casing>

## 期刊及其期刊缩写

对于期刊标题，插件将使相同的期刊统一。

插件内置了一个包含约 10 万条期刊缩写的数据集（来自 JabRef 和 Woodward Library），插件将首先在本地数据集里查询期刊缩写；

若无则根据 [ISSN List of Title Word Abbreviations](https://www.issn.org/services/online-services/access-to-the-ltwa/) 推断其缩写（可在首选项中关闭此行为）；

若仍没有找到缩写，则以期刊全称代替（可在首选项中关闭此行为）。

## 根据高校名称填写高校所在地

插件内置了国内高校的名单及其所在地，对于学位论文条目，根据论文的高校填写其所在地，这有利于满足 GB/T 7714-2015 中需要显示出版地的要求 [^gb7714]。

[^gb7714]: <http://www.cessp.org.cn/a258.html>

## 根据标识符补全条目的期、卷、页等信息

部分条目在添加时可能因为转换器未获取到、录入时未正式见刊等原因，导致期卷页等信息不完整，插件提供了根据 DOI 补全这些字段的功能。

对于书籍，可通过 ISBN 更新数据。预印本支持转为期刊文章（若有）。

## 自动填写条目语言

插件根据条目的标题判断其语言，并将识别结果填入「语言字段」，这对于 CSL 完成参考文献表双语排版（如 et al 与 等 混排）非常重要。[^csl-etal]。

默认的，插件被限制仅识别简体中文和英文，你可以在首选项中关闭语言限制或添加其他常用语言的 [ISO 639-1 代码]。

[^csl-etal]: <https://github.com/redleafnew/Chinese-STD-GB-T-7714-related-csl#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8>

[ISO 639-1 代码]: https://github.com/komodojp/tinyld/blob/develop/docs/langs.md
