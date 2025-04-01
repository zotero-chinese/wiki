# 茉莉花

::: info 关于插件

这个插件用来增强 Zotero 对中文文献的支持能力，包括自动更新中文转换器（translators）、根据中文文献名检索其元数据等。

- 项目主页：[GitHub](https://github.com/l0o0/jasminum)
- 插件下载地址
  - [GitHub Release](https://github.com/l0o0/jasminum/releases)
  - [国内镜像](https://zotero-chinese.com/plugins/#search=jasminum)

:::

与国内的文献管理软件相比，原生的 Zotero 对中文网站的抓取能力较为有限。但是得益于开源社区的维护，我们可以通过第三方中文转换器库 [GitHub.com/l0o0/translators_CN](https://github.com/l0o0/translators_CN) 极大的提高其中文文献抓取能力。
该库的主要维护者还开发了插件 [Jasminum - 茉莉花](https://github.com/l0o0/jasminum) 来继续增强 Zotero 的中文支持，茉莉花插件提供了如下功能：

> 1. 拆分或合并 Zotero 中条目作者姓和名
> 2. 为中文 PDF/CAJ 文件来检索文献元数据（检索依赖文件名）
> 3. 添加中文 PDF/CAJ 时，自动检索文献元数据。该功能默认关闭。需要到设置中开启，本功能要求添加的文件名需要含有中文，全英文可能不会自动触发抓取（检索依赖文件名）
> 4. 更新中文转换器
> 5. 拉取文献引用次数，是否核心期刊等信息
> 6. ~~为知网的学位论文 PDF 添加书签~~（这一功能已弃用。知网的学位论文现在大多已经自带目录书签，且对 PDF 进行了加密，无法由茉莉花直接添加书签）

## 安装茉莉花

在 [Zotero 插件商店](https://zotero-chinese.com/plugins/#search=Jasminum) 下载 `jasminum` ，插件安装见 [插件与功能扩展](./about-plugin.md) 。

### 使用教程

### 01. 安装/更新 中文转换器

教程详见 [一键自动更新中文转换器](../faqs/update-translators.md#更新抓取文献信息的转换器) 。

### 02. 为中文 PDF/CAJ 检索元数据

教程详见 [为中文 PDF/CAJ 检索元数据](../add-items#中文文献附件自动识别) 。
