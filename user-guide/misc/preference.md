# 首选项：高级设置

> 本节是 [https://www.zotero.org/support/preferences/hidden_preferences](https://www.zotero.org/support/preferences/hidden_preferences) 的翻译版本。

您可以通过 Zotero 中的首选项窗口编辑大多数 Zotero 设置。但是，Zotero 和 Zotero 连接器都支持额外的隐藏首选项。这些设置可能接受的测试较少和/或旨在用于更高级的用途。

## Zotero

要查看 Zotero 首选项的完整列表，包括许多隐藏的首选项，请转到 Zotero 首选项的高级窗格并单击「设置编辑器」。在出现的列表顶部的过滤器字段中输入「Zotero」。用户可以安全更改的首选项如下所述。
大多数 Zotero 隐藏首选项都以 `extensions.zotero` 开头。

### 通用设置

这些通用隐藏设置允许您定制化 Zotero。

| 设置名称                         | 默认值                   | 描述                                                                                                                                                                                                                                                                                   |
| -------------------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `attachmentRenameFormatString`   | `{%c - }{%y - }{%t{50}}` | Zotero 自动重命名从连接器（又称 translator 浏览器扩展，见相关章节）保存的附件。此字符串控制这些名称的格式。 `%c` 是创建者，%y 是年份，`%t` 是标题，每个部分周围的花括号表示「仅当内部指定的字段非空时才包含此部分」，`{50}` 表示「截断 50 个字符」。您可以重新排列这些以满足您的需要。 |
| `backup.interval`                | `1440`                   | Zotero 自动备份数据库的最长间隔（以分钟为单位）。默认值为每 24 小时（1440 分钟）                                                                                                                                                                                                       |
| `backup.numBackups`              | `2`                      | Zotero 应该保留多少自动数据库备份。多余的备份最先删除。这不包括在数据库升级期间进行的备份。请注意，将其设置得太高可能会导致数据库升级备份被覆盖。                                                                                                                                      |
| `capitalizeTitles`               | `true`                   | 默认情况下，Zotero 将重新命名您抓取条目的标题（例如，删除所有大写字母）。将此首选项切换为 false，您将保留标题的原始信息。                                                                                                                                                              |
| `debug.level`                    | `5`                      | 启用 debug.log 时，确定显示的调试级别中的最低值（1-5，其中 5 为最低）                                                                                                                                                                                                                  |
| `debug.log`                      | `false`                  | 用于调试 Zotero。见[debug output](https://www.zotero.org/support/debug_output).                                                                                                                                                                                                        |
| `debug.time`                     | `false`                  | 启用 debug.log 时，显示上一次调试调用的毫秒数                                                                                                                                                                                                                                          |
| `fontSize`                       | `1.0`                    | 此首选项允许您增加或减少 Zotero 界面中文本的大小。                                                                                                                                                                                                                                     |
| `httpServer.enabled`             | `true`                   | 如果设置为 true，Zotero 将侦听来自 Zotero 连接器的请求（例如，允许将项目从连接器保存到 Zotero）。                                                                                                                                                                                      |
| `httpServer.port`                | `23119`                  | 如果启用了 httpServer.enabled，这是 Zotero 将侦听来自 Zotero 连接器的连接的端口。                                                                                                                                                                                                      |
| `sortAttachmentsChronologically` | `false`                  | 如果设置为 true，您的附件将按您添加它们的顺序而不是按字母顺序排序。                                                                                                                                                                                                                    |
| `sortNotesChronologically`       | `false`                  | 如果设置为 true，您的笔记将按您添加它们的顺序而不是按字母顺序排序。                                                                                                                                                                                                                    |

### PDF Reader 阅读器

| 设置名称                          | 默认值 | 描述                                                       |
| --------------------------------- | ------ | ---------------------------------------------------------- |
| `sortNotesChronologically.reader` | `true` | 按时间倒序对条目进行排序。如果为 false，则按字母顺序排序。 |

### Note Editor 笔记编辑器

| 设置名称           | 默认值 | 描述                                                                  |
| ------------------ | ------ | --------------------------------------------------------------------- |
| `note.fontSize`    | `14`   | 注意字体大小 — 可从「查看」菜单设置，但其他值（包括小数）可以手动设置 |
| `note.smartQuotes` | `true` | 自动将 straight quotes 转换为 typographic quotes                      |

### Translator 转换器设置

这些隐藏设置允许您控制某些特定条目格式的导入/导出转换器的行为。所有翻译器隐藏首选项都以 `extensions.zotero.translators` 开头。

| 设置名称                               | 默认值  | 描述                                                                                                                                                                                                                                    | 应用于                   |
| -------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `RIS.import.ignoreUnknown`             | `true`  | 不要在注释中存储无法映射到 Zotero 字段的值。                                                                                                                                                                                            | `RIS import translator`  |
| `RIS.import.keepID`                    | `false` | 不要从「ID -」标签中删除值。可用于在 EndNote 中查找项目。                                                                                                                                                                               | RIS import translator    |
| `BibTeX.export.dontProtectInitialCase` | `false` | 如果只有第一个字母大写，则不要用大括号将单词括起来。如果您在 Zotero 中以标题大小写输入标题，则很有用（不推荐）。 `false: {Tame {The} {BeaST}}`, `true: {Tame The {BeaST}}` 请注意，如果第一个单词不包含内部大写字母，则永远不会被{}包围 | BibTeX export translator |
| `BibTeX.export.simpleCitekey`          | `null`  | 默认情况下，仅对新添加的条目使用 citekey 的新简单格式（不允许除破折号和下划线之外的任何特殊字符）。将此隐藏键设置为 true，将始终使用这种简单的 citekeys。                                                                               | BibTeX export translator |

### 全文索引

这些设置处理 Zotero 从导入文件创建全文索引的能力。

| 设置名称              | 默认值 | 描述                                                                                                                                                    |
| --------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `search.useLeftBound` | `true` | 确定 Zotero 是仅根据左边界查找单词匹配，还是在单词中的任何位置查找匹配。将此设置为 false 可能对英语以外的语言有益，但可能会显着减慢 Zotero 的搜索功能。 |

### Report

这些选项允许您自定义您的 report 显示行为。

| 设置名称                      | 默认值 | 描述                                                                                                                                                                                         |
| ----------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `report.includeAllChildItems` | `true` | 默认情况下，仅选择报告的父项会导致这些项的子注释和附件也包含在内。如果 includeAllChildItems 设置为 false，则仅包含您选择的项目。无论此设置如何，选择父项和子项的组合都将导致仅显示选定的项。 |
| `report.combineChildItems`    | `true` | 默认情况下，Zotero 将报告中的子注释和附件分组在其父项下。将此切换为 false 将导致注释与其父项分开显示。这对于有兴趣将 Zotero 的笔记功能用作大纲工具的人很有帮助。                             |

### 引文快速复制设置

| 设置名称                                           | 默认值  | 描述                                                                                                       |
| -------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `export.quickCopy.compatibility.indentBlockquotes` | `true`  | Word 和 TextEdit 不会自行缩进块引用，需要启用此功能。在 LibreOffice 中产生额外的缩进，可以正确处理块引用。 |
| `export.quickCopy.compatibility.Word`              | `false` | 将 Word Normal 样式添加到段落并启用双倍行距。LibreOffice 将条件样式代码作为文档注释插入。                  |
| `quickCopy.quoteBlockquotes.plainText`             | `true`  | 在纯文本输出中的块引用段落周围添加引号                                                                     |
| `quickCopy.quoteBlockquotes.richText`              | `true`  | 在富文本输出中为块引用段落添加引号                                                                         |

### Word 插件

| 设置名称                                  | 默认值  | 描述                                                                                                                     |
| ----------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------ |
| `integration.keepAddCitationDialogRaised` | `false` | 如果将其切换为 true，则可以将 Zotero Word 插件界面用于添加引文始终位于最前面。并防止它隐藏在您正在使用的 Word 窗口后面。 |

## Zotero 连接器 Connector

要查看 Zotero 连接器的隐藏设置，请打开连接器的首选项（通过右键单击保存按钮并在 Chrome 和 Firefox 中选择首选项/选项，或在 Safari 中长按保存按钮）。然后，单击「高级」，然后单击「配置编辑器」。

### 转换器设置

Zotero 连接器支持一些通常适用于所有转换器或特定网站转换器的设置。要使用这些设置，在 Zotero 连接器配置编辑器中，单击「添加设置」。键入或粘贴首选项的名称，然后单击「确定」。从下表中输入适当的首选项值（例如，true 或 1），然后再次单击「确定」。

| 设置名称                          | 默认值  | 描述                                                                                                                                                                          | 应用于                                                                                                                                 |
| --------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `translators.attachSupplementary` | `false` | 转换器在导入项目时应尝试附加补充数据。                                                                                                                                        | [All web translators implementing this behavior](https://forums.zotero.org/discussion/21880/supplementary-information/#Comment_153889) |
| `translators.supplementaryAsLink` | `false` | 补充数据附件应作为链接附加，而不是下载。如果禁用 attachSupplementary，则此选项无效。将此选项设置为「true」可以保持快速访问补充数据的便利性，但可以加快从 Web 保存项目的速度。 | [All web translators implementing this behavior](https://forums.zotero.org/discussion/21880/supplementary-information/#Comment_153889) |
| `translators.ACS.highResPDF`      | `0`     | 确定附加的全文 PDF 版本：0 - 带链接的 PDF；1 - 高分辨率 PDF；2 - 两者                                                                                                         | ACS Publications                                                                                                                       |

注意：补充数据首选项仅适用于转换器支持此行为的网站。如果您遇到没有导入补充数据的站点，请在 Zotero 论坛上报告： [Zotero forums](https://www.zotero.org/forum)。
