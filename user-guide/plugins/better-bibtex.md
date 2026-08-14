# Better BibTeX

::: info 关于插件

Better BibTeX (BBT) 插件可帮助管理参考文献数据，主要配合 [LaTeX](https://latex-project.org)、[Markdown](https://markdownguide.org) 等围绕文本文件的工具链。

- 项目主页：[Better BibTeX for Zotero](https://retorque.re/zotero-better-bibtex/)
- 插件下载地址
  - [GitHub Release](https://github.com/retorquere/zotero-better-bibtex/releases)
  - [国内镜像](https://zotero-chinese.com/plugins/#search=Better+BibTeX+for+Zotero)

:::

<!--
## 典型工作流

此页按道理应该先介绍 LaTeX + Zotero 工作流；但目前方案繁多而未收敛，暂时难以介绍。
如果未来有人想介绍，可参考 2026 年春以下链接的讨论。
https://github.com/zotero-chinese/wiki/issues/443#issuecomment-4183799649
-->

## 导出`*.bib`时转换为标题大小写 {#title-case}

关于文献题名的大小写，历来有句子（Sentence case）、标题（Title Case）两种习惯。

由于 CSL 与 Bib(La)TeX 生成参考文献著录列表的原理不同，一般推荐[在 Zotero 中按「句子大小写」存储](../edit-items.md#标题的大小写)，而在`*.bib`中按「标题大小写」存储。因此，从 Zotero 导出`*.bib`时，[Better BibTeX 插件默认会将题名转换为标题大小写](https://retorque.re/zotero-better-bibtex/support/faq/index.html#bbt-is-changing-the-capitalization-of-my-titles--why)。

国家推荐性标准 [GB/T 7714《信息与文献 参考文献著录规则》](https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D8055ED3A7E05397BE0A0AB82A)的示例常用句子大小写，但正文仅要求「著录西文文献时，大写字母的使用应符合信息资源本身文种的习惯用法」（2015 版国标 §6.6、2025 版国标 §5.6）。考虑到国标的示例仅为辅助理解而列出，并非需要遵守的条款（[GB/T 1.1](https://std.samr.gov.cn/gb/search/gbDetailed?id=A24AF19F41445C2EE05397BE0A0A5E0D)），我们通常不必过分关注大小写，而只要保留默认设置，让 Bib(La)TeX 自动处理，再确认全篇一致即可。

如果实在有特殊需要，可前往「Zotero 设置 → Better BibTeX → 杂项」，取消勾选[「对标题应用标题大小写格式」](https://retorque.re/zotero-better-bibtex/preferences/export/index.html#apply-title-casing-to-titles)。
