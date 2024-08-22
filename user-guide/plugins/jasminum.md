# 茉莉花

::: info 关于插件

这个插件用来增强 Zotero 对中文文献的支持能力，包括自动更新中文 translators、根据中文文献名检索其元数据等。

- 项目主页：[GitHub](https://github.com/l0o0/jasminum)
- 插件下载地址
  - [GitHub Release](https://github.com/l0o0/jasminum/releases)
  - [国内镜像](https://zotero-chinese.com/plugins/#search=jasminum)

:::

比起其他的文献管理软件，原生的 Zotero 对中文支持并没有好到哪里去，但是得益于开源社区的维护，我们可以通过第三方 translator 库 [GitHub.com/l0o0/translators_CN](https://github.com/l0o0/translators_CN) 极大的提高其中文文献抓取能力。
该库的主要维护者还开发了插件 [Jasminum - 茉莉花](https://github.com/l0o0/jasminum) 来继续增强 Zotero 的中文支持，茉莉花插件提供了如下功能：

> 1. 拆分或合并 Zotero 中条目作者姓和名
> 2. 根据知网上下载的文献文件来抓取引用信息（就是根据文件名）
> 3. 添加中文 PDF/CAJ 时，自动拉取知网数据，该功能默认关闭。需要到设置中开启，注意添加的文件名需要含有中文，全英文没有效果（还是根据文件名）
> 4. 为知网的学位论文 PDF 添加书签
> 5. 更新中文 translators
> 6. 拉取文献引用次数，是否核心期刊

## 安装茉莉花

### 01. 下载安装 Jasminum 插件

在 [Zotero 插件商店](https://zotero-chinese.com/plugins/#search=Jasminum) 下载 `jasminum` ，插件安装见 [插件与功能扩展](./about-plugin.md) 。

### 02. 配置 PDFtk

#### 2.1 下载与安装 PDFtk

**Windows**
下载并安装 [PDFtk server](https://www.pdflabs.com/tools/pdftk-server/) ，并记录 PDFtk 的安装路径（例如安装在 `C: \Program Files (x86)\PDFtk`）。
**macOS**
MAC 用户参考 [这里](https://github.com/l0o0/jasminum#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8) 。

#### 2.2 在茉莉花中配置 PDFtk 路径

在 「Zotero」->「编辑」->「设置」->「茉莉花」->「PDFtk Server 路径设置」中填写 `<PDFtk install dir>/bin` （例如 `C: \Program Files (x86)\PDFtk\bin`）（即 PDFtk 可执行文件所在目录）。

### 03. 安装/更新 中文 Translator

教程详见 [一键自动更新 Translator](../faqs/update-translators.md#更新抓取文献信息的转换器) 。
