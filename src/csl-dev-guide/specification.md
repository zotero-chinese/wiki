---
title: CSL 1.0.2 规范
order: 2
date: 2022-08-01 16:55:26
updated: 2023-07-22 20:49:04
---

# CSL 1.0.2 规范

主要作者：[Rintze M. Zelle， PhD](https://twitter.com/rintzezelle)、 [Brenton M. Wiernik](https://twitter.com/bmwiernik)、Frank G. Bennett， Jr.、 Bruce D’Arcus、Denis Maier

其他贡献者：Julien Gonzalez、Sebastian Karcher、Sylvester Keil、Cormac Relf、Lars Willighagen and other CSL contributors.

译者：[Mao Zhou](https://github.com/ZMAlt)、 [Northword](https://github.com/northword)。

此工作以  [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/) 授权。

## 介绍

CSL（Citation Style Language，引文样式语言） 是一种基于 XML 的格式，用来描述引文、注释和参考文献的格式，他提供了：

- 一种开放的 (开源的) 格式
- 紧凑、稳定的样式
- 对样式要求的广泛支持
- 样式自动本地化
- 对样式发布和更新的基本支持
- 数千种免费提供的样式（CC BY-SA 授权）

有关的其他文档，CSL 议程，样式和本地化文件详见 [CSL 项目主页](https://citationstyles.org/)。

## 术语

关键字 MUST，MUST NOT，REQUIRED，SHALL，SHALL NOT，SHOULD，SHOULD NOT，RECOMMENDED，MAY 和 OPTIONAL 按 [IETF RFC 2119](http://tools.ietf.org/html/rfc2119) 中的描述解释。

::: note 译者注：关于 IETF RFC 2119 协议

RFC ，即 **R**equest **f**or **C**omments，意见征求稿，是由 [The Internet Engineering Task Force](http://www.ietf.org/) 制作的文档，其中许多是各种 Internet 协议的官方标准。

RFC 2119 协议全文：<<https://www.ietf.org/rfc/rfc2119.txt>

**MUST**：必须的。通过它描述的对象，是强制要求的。它与 REQUIRED 和 SHALL 含义相同。

**MUST NOT**：不允许的。通过它描述的对象也是强制的。与 SHALL NOT 同义。

**SHOULD**：在通常情况下，应当这样。但是，特殊情况下除外。与 RECOMMENDED 同义。

**SHOULD NOT**：在通常情况下，不是这样。但是，特殊情况下除外。与 NOT RECOMMENDED 同义。

**MAY**：可选的描述对象。与 OPTIONAL 同义。

:::

## 命名空间

> Namespacing

CSL XML 命名空间 URI 是 <http://purl.org/net/xbiblio/csl>。

在本规范中，当提及 CSL 元素时，命名空间前缀为 `cs:` ，但对于根元素 `cs:style` 或 `cs:locale` 的默认命名空间声明（用 `xmlns` 属性设置），通常省略 `cs:`。

## 空格处理

::: warning

Whitespace Handling
翻译有一些疑惑，请参阅原文，欢迎提出改善意见。

:::

CSL styles are valid XML, but CSL processors MUST NOT normalize attribute values by trimming leading or trailing whitespace from attributes which define text that is intended for output:

CSL 样式是有效的 XML，但是 CSL 处理器不会（MUST NOT）通过修剪以下属性值前后的空格来规范输出。

- after-collapse-delimiter
- cite-group-delimiter
- delimiter
- initialize-with
- name-delimiter
- names-delimiter
- prefix
- range-delimiter
- sort-separator
- suffix
- year-suffix-delimiter
- value

## 文件类型

CSL 文件有 3 种类型：独立样式、从属样式（都使用 `.csl` 作为扩展名），以及 本地化文件（名字为 `locales-xx-XX.xml`，其中 `xx-XX` 表示语言以及其方言，例如 `en-US` 表示美式英语）。

### 独立样式

独立样式包含了对引文，笔记以及参考书目的描述。虽然它们大多数都是自成一体的（即不依赖其他样式），但是（默认）依赖于本地化文件。

### 从属样式

从属样式是独立样式的别名（alias），其仅包含样式元数据，不包括任何格式的指示。

通过将具有相同引用风格的期刊（例如 "Nature Biotechnology"，"Nature Nanotechnology"）的从属样式链接到一个单独的独立样式（例如 "Nature Journals"），从属样式就不再需要再重复一遍格式说明。

::: note 译者注

也就是说从属样式是依赖其他样式的，被依赖的样式成为称为**父样式**。

:::

### 本地化文件

每个本地化文件包含一系列对某种特定的语言 / 方言的本地化数据（术语翻译，本地化日期格式以及语法选项）。

::: note 译者注

本地化文件主要用于在不同的语言环境中使用样式，比如在中文环境中使用，中文对应的本地化文件可以将英文中的 `et al.` 替换为 `等` 。

:::

## XML 声明

> XML Declaration

每个样式或者本地化文件应该以 XML 声明开头，指定具体的 XML 版本以及字符编码。多数情况下，XML 声明可以是：

```xml
<?xml version="1.0" encoding="UTF-8"?>
```

## 样式的结构

::: warning

此节尚未校对完成

:::

### 根元素 `cs:style`

样式的根元素是 `cs:style`。在 [独立样式](#独立样式) 中，根元素有以下几种属性：

#### `class`

🏳️ Default: *none* — 决定样式的 [引文格式](./primer.md#csstyle-根元素) 是 in-text 类型（值 `in-text`） 或者 note 类型（值 `note`）。

::: note 译者注

in-text 表示引文在文字中，note 表示引文不在文字中，可能是脚注等。

:::

#### `default-locale`

🏳️ Default: *none* · Optional — 为本地化设值默认的 locale。值必须是 [locale code](http://books.xmlschemata.org/relaxng/ch19-77191.html)。

::: tip 译者注：常用 local_code

zh-CN：中文（中国）
zh-hk：中文（台湾）
zh：中文
en-US：
可以参阅 [Language Strings | Microsoft Docs](https://docs.microsoft.com/zh-cn/windows/win32/wmformat/language-strings)

:::

#### `version`

🏳️ Default: *none* · ⚠ Required — 样式的 CSL 版本。对于 CSL 1.0 兼容样式，必须是 `1.0`。

此外，`cs:style` 可能携带任意的 [全局选项](specification.md#全局选项) 和 [可继承的名称选项](specification.md#可继承的名称选项) 。

在这些属性中，[从属样式](#从属样式) 中，只有 `version` 是必须的， `default-locale` 属性可以设置用来代替的默认的本地化文件 。其他的属性是可以忽略的。

下面是一个 [独立样式](#独立样式) 的 `cs:style` 示例，第一行是 XML 声明：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<style xmlns="http://purl.org/net/xbiblio/csl" version="1.0" class="in-text" default-locale="fr-FR"/>
```

### `cs:style` 的子元素

在 [独立样式](#独立样式) 中，`cs:style` 有以下子元素：

`cs:info`

🏳️ Default: *none* · ⚠ Required · ⚠ 必须为第一个子元素 — 描述样式的元数据 ：样式名称（style name）、样式 ID（ID）、样式作者（authors）。

`cs:citation`

🏳️ Default: *none* · ⚠ Required — 用来描述 in-text 引文或者 notes 引文的具体格式。

`cs:bibliography`

🏳️ Default: *none* · Optional — 可能会出现一次。描述参考文献列表的格式。

`cs:macro`

🏳️ Default: *none* · Optional — 可能出现多次。宏可以将格式指示重复使用，使样式更加的紧凑和易维护。

`cs:locale`

🏳️ Default: *none* · Optional — 可能出现多次。用于指定或者覆盖当前的本地化数据。

在 [从属样式](#从属样式) 中，`cs:style` 只有 `cs:info` 一个子元素。

#### Info

`cs:info` 包含了样式的元数据。其结构基于 [Atom Syndication Format](http://tools.ietf.org/html/rfc4287)。在独立样式中，`cs:info` 有下面的几个子元素：

##### `cs:author` 和 `cs:contributor`

🏳️ Default: *none* · Optional — `cs:author` 和 `cs:contributor` 分别用来致谢样式的作者和贡献者，可能被使用多次。

     `cs:name`

     🏳️ Default: _none_ ·  ⚠ Required — 作者或贡献者的姓名。

     `cs:email` 和 `cs:uri`

     🏳️ Default: _none_ ·  Optional — 作者或者贡献者邮箱和 URI。

##### `cs:category`

🏳️ Default: *none* · Optional — 样式可能被分类到一个或者多个类别，`cs:category` 可能被使用一次，用来描述 in-text 引文怎么渲染。使用 `citation-format` 属性设置其为以下几种情形：

- `author-date` - 例如 `… (Doe, 1999)`
- `author` - 例如 `… (Doe)`
- `numeric` - 例如 `… [1]`
- `label` - 例如 `… [doe99]`
- `note` - 因为在边注或者脚注出现。

  `cs:categroy` 也可能在携带 `field` 属性时多次使用，用来对学科进行分类（见 [附录 I 学科分类](附录 I 学科分类)）。

##### `cs:id`

🏳️ Default: *none* · ⚠ Required — 必须出现一次。该元素应该包含一个 URI 以建立样式的 `ID`，对于公开可用的样式，需要一个稳定、唯一的并可以引用的 URI。

##### `cs:issn/cs:essn/cs:issnl`

🏳️ Default: *none* · Optional — `cs:issn` 元素可以多次使用，用来表示该 CSL 对应的期刊的 ISSN 。 `cs:eissn` 和 `cs:issnl` 可以分别用来表示 eISSN 和 [ISSN-L](http://www.issn.org/2-22637-What-is-an-ISSN-L.php) 。

##### `cs:link`

🏳️ Default: *none* · Optional — 可以使用多次。`cs:link` 必须携带两个属性 `href` 和 `rel`。

    `href`
    ⚠ Required — 用来设置 URI （通常情况下为 URL）

    `rel`
    ⚠ Required — 表明 URI 与当前样式的关系，它的值有：

        - `self` - 该 URI 值为样式本身的 URI
        - `template` - 该 URI 是用来编写该样式的模板的 URI
        - `documentation` - 该 URI 是该样式的文档

##### `cs:published`

🏳️ Default: *none* · Optional — `cs:published` 必须是一个 [时间戳](http://books.xmlschemata.org/relaxng/ch19-77049.html)，用来表明样式创建的时间或者可获得的时间。

##### `cs:rights`

🏳️ Default: *none* · Optional — `cs:rights` 表明了该 CSL 的 license，可能会携带 `license` 属性。

##### `cs:summary`

🏳️ Default: *none* · Optional — 给出该 CSL 的简单描述。

##### `cs:title`

🏳️ Default: *none* · ⚠ Required — 其内容应该是该 CSL 展示给使用者的名字。

##### `cs:title-short`

🏳️ Default: *none* · Optional — 是上述名字的缩写，比如 `APA`

##### `cs:updated`

🏳️ Default: *none* · — 内容是一个 [时间戳](http://books.xmlschemata.org/relaxng/ch19-77049.html)，用来表示该 CSL 的最后更新时间。

`cs:link`，`cs:rights`，`cs:summary`， `cs:title` 和 `cs:title-short` 元素可以携带 `xml:lang` 属性用来表示元素内容的语言（值必须是 [xsd:language locale code](http://books.xmlschemata.org/relaxng/ch19-77191.html) 中的一个）。对于 `cs:link`，该属性可以用来表示链接目标的语言。

在从属格式中，当 `cs:link` 中的 `href` 为其父格式的 URI 时，`rel` 属性必须设置为 `"independent-parent"`。此外，从属格式的 `ref` 不能设置为 `template`，这在独立格式中才能使用。

下面是一个独立样式 `cs:info` 的例子：

```xml
<info>
  <title>Style Title</title>
  <id>http://www.zotero.org/styles/style-title</id>
  <link href="http://www.zotero.org/styles/style-title" rel="self"/>
  <author>
    <name>Author Name</name>
    <email>name@domain.com</email>
    <uri>http://www.domain.com/name</uri>
  </author>
  <category citation-format="author-date"/>
  <category field="zoology"/>
  <updated>2008-10-29T21:01:24+00:00</updated>
  <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work
  is licensed under a Creative Commons Attribution-Share Alike 3.0 Unported
  License</rights>
</info>
```

#### Citation

`cs:citation` 元素描述了引注的格式，其中引注可以是一条或者多条。引注的格式可能是 in-text citations（即文字中的引注）和 notes（注记）。in-text citations 包括 (`author`，例: `[Doe]`，`author-date`，例: `[Doe 1999]`，`label`，例: `[doe99]`，或者 `number`，例:`[1]` ) 。这要求 `cs:layout` 子元素来描述什么样的数据，以及怎么被引用（见 [Layout](specification.md#Layout) ）。在 `cs:layout` 之前可能会有 `cs:sort` 元素，用来描述引文的排序（见 [排序](#排序)）。此外，`cs:style` 可能携带任意的 [引文选项](specification.md#引文选项) 和 [可继承的名称选项](specification.md#可继承的名称选项) 中的属性。下面是一个 `cs:citation` 的例子：

```xml
<citation>
  <sort>
    <key variable="citation-number"/>
  </sort>
  <layout>
    <text variable="citation-number"/>
  </layout>
</citation>
```

**对 CSL 处理器开发者的一个建议**

在 note 格式中，引文通常是一个句子。因此，当注释前面没有内容时，引文的首字母最好大写。在其他情况，引文应该是用原样打印。

#### Bioliography

`cs:bioliography` 元素描述了参考文献条目的格式。同 `cs:citation` 相同，其子元素 `cs:layout` 用来描述每个条目的格式，`cs:sort` 元素用来描述条目的排序。此外，`cs:bibliography` 可能携带任意的 [参考文献目录选项](#参考文献目录选项) 和 [可继承名称选项](#可继承的名称选项) 中的属性。下面是一个 `cs:bioliography` 的例子：

```xml
<bibliography>
  <sort>
    <key macro="author"/>
  </sort>
  <layout>
    <group delimiter=". ">
      <text macro="author"/>
      <text variable="title"/>
    </group>
  </layout>
</bibliography>
```

#### Macro

宏，使用 `cs:macro` 元素定义，包含了格式的指令。宏可以在其他宏，`cs:layout` 元素 (`cs:citation` 和 `cs:bioliography` 中)，`cs:key` 元素 (`cs:sort` 元素) 中通过 `cs:text` 调用。宏在文件中位置的通常建议是：放在 `cs:locale` 元素后以及 `cs:citation` 元素前。

宏通过 `cs:macro` 元素的属性 `name` 的值来调用。`cs:macro` 必须包含一个或者多个 [渲染元素](#渲染元素)。

使用宏可以提高样式的可读性，紧凑性以及可维护性。通过过宏调用来保持 `cs:citation` 元素和 `cs:bioliography` 元素的内容紧凑通常是推荐的做法。为了在其他样式中方便的重复使用，宏名字建议使用通用的名字。

下面是一个实例：引文中包括项目题目，并当条目为 `"book"` 时，设置字体为 `italic`。

```xml
<style>
  <macro name="title">
    <choose>
      <if type="book">
        <text variable="title" font-style="italic"/>
      </if>
      <else>
        <text variable="title"/>
      </else>
    </choose>
  </macro>
  <citation>
    <layout>
      <text macro="title"/>
    </layout>
  </citation>
</style>
```

#### Locale

来自 `"locales-xx-XX.xml"`locale file 的本地化数据可以通过 `cs:locale` 元素来重定义或者补充定义。`cs:locale` 元素应该放在 `cs:info` 元素后。

`cs:locale` 元素的 `xml:lang` 属性是可选的，必须设置为 [xsd:language locale code](http://books.xmlschemata.org/relaxng/ch19-77191.html) 中的一种，用来确定使用的语言环境（或方言，见 [locale fallback](locale fallback)）。

对于 `cs:locale` 元素的详细使用，另见 [术语](#术语)、[本地化日期格式](#本地化日期格式) 和 [本地化选项](#本地化选项)。

下面是一个 `cs:locale` 元素的例子：

```xml
<style>
  <locale xml:lang="en">
    <terms>
      <term name="editortranslator" form="short">
        <single>ed. &amp; trans.</single>
        <multiple>eds. &amp; trans.</multiple>
      </term>
    </terms>
  </locale>
</style>
```

**Locale Fallback**

本地化文件为语言方言提供了本地化数据；可选的 `cs:locale` 元素的 `xml:lang` 属性设置为一种语言 (例如， `"en"` 代表英语 ) 或者方言 (例如， `"en-US"` 代表美式英语 ) ，`xml:lang` 属性也可能缺失。Localr fallback 是一种在上述的属性设置中检索来确定本地化单元的机制。这些本地化单元包括日期格式，本地化选项或者术语的特定形式。

对于同一种语言的方言，一种被称为初级方言，其他都是二级方言。下面展示了部分语言的初级方言和二级方言：

| 初级方言 | 二级方言     |
| -------- | ------------ |
| de-DE    | de-AT, de-CH |
| en-US    | en-GB        |
| pt-PT    | pt-BR        |
| zh-CN    | zh-TW        |

这里用一个例子来描述 Locale fallback。如果要选择 `"de-AT"`(Austrian German) 作为使用环境，本地化单元可以来自下面的源（优先级逐渐降低）：

A. 样式文件中的 `cs:locale` 元素

- `xml:lang` 设置为方言 `"de-AT"`
- `xml:lang` 设置为 `"de"`
- `xml:lang` 不设置

B. Locale files/本地化文件

- `xml:lang` 设置为方言 `"de-AT"`
- `xml:lang` 设置为对应的初级方言 `"de-DE"` (standard german)
- `xml:lang` 设置为 `"en-US"`

也就是说，如果要使用 `"de-AT"` 语言，首先在 Locale files 中寻找 `"de"` 对应的 `locales-de-XX.xml` 文件，即 `"locales-de-AT.xml"` 和 `"locales-de-DE.xml"`，由于要设置的语言环境是方言 `"de-AT"`，所以选择 `de-AT` 对应的 locale file `locales-de-AT.xml`。接下来，如果 csl 文件中包含 `cs:locale` 元素，将会覆盖 `locales-de-AT.xml` 文件的设置。

## 本地化文件的结构

::: warning WORK IN PROGRESS

此页面正在施工中。

:::

尽管本地化数据可以包括在 csl 文件中 (见 [Locale](#locale))，但是本地化文件可以方便的提供本地化数据的设置，包括术语，日期格式以及语法选项。

每个本地化文件包括了一种语言方言的本地化数据。本地化文件中根元素为 `cs:locale`（样式/style 中则为 `cs:style` 元素）。在 `cs:locale` 根元素中，属性 `xml:lang` 用来设置方言。同时这一设置选项也用来对本地化文件命名（`"xx-XX"` 文件名为 `locales-xx-XX.xml`）。此外，根元素必须携带 `version` 属性，表明本地化文件的 CSL 版本（对 CSL 1.0 兼容的 locale file 必须设置为 `"1.0"`）。本地化文件有和样式同样的命名空间。`cs:locale` 元素可能包含 `cs:info` 作为第一个子元素，同时，必须含有 `cs:terms`、`cs:date`、`cs:style-options` 子元素。下面是一个 本地化文件的部分示例：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<locale xml:lang="en-US" version="1.0" xmlns="http://purl.org/net/xbiblio/csl">
  <style-options punctuation-in-quote="true"/>
  <date form="text">
    <date-part name="month" suffix=" "/>
    <date-part name="day" suffix=", "/>
    <date-part name="year"/>
  </date>
  <date form="numeric">
    <date-part name="year"/>
    <date-part name="month" form="numeric" prefix="-" range-delimiter="/"/>
    <date-part name="day" prefix="-" range-delimiter="/"/>
  </date>
  <terms>
    <term name="no date">n.d.</term>
    <term name="et-al">et al.</term>
    <term name="page">
      <single>page</single>
      <multiple>pages</multiple>
    </term>
    <term name="page" form="short">
      <single>p.</single>
      <multiple>pp.</multiple>
    </term>
  </terms>
</locale>
```

### Info

`cs:info` 元素用来给出本地化文件的元数据。它含有以下子元素：

`cs:translator`(可选)

​ `cs:translator` 用来致谢翻译者，并且能使用多次。在这个元素中。子元素 `cs:name` 必须出现一次，`cs:uri` 则是可选的。这些子元素应该分别包括翻译者的名字，地址和 URI。（与样式中类似）

`cs:rights`(可选)

​ 可能出现一次。`cs:rights` 的内容用来指定本地化文件发布版本的 license。该元素可能会携带 `license` 属性来指定 `license` 的 URI，`xml:lang` 属性则用来指定元素内容的语言（值必须是 [xsd:language locale code](http://books.xmlschemata.org/relaxng/ch19-77191.html)）。

`cs:updates`(可选)

​ `cs:updated` 元素的内容必须是一个 `[时间戳]` 来指定本地化文件最后一次更新的时间。

### Terms(术语)

术语是本地化的字符串，比如通过使用 `"and"` 术语，`"Doe and Smith"` 在语言环境从英语到德语的转换中会自动变为 `"Doe und Smith"`。术语用 `cs:term` 元素定义，是 `cs:terms` 元素的子元素。每个 `cs:term` 元素必须携带一个 `name` 属性，其属性值可以设置为 [附录 II 术语](#附录 II 术语) 列表中的值。

术语可以直接在 `cs:term` 的内容中定义，或者，在某些情况下，比如在需要单数和复数的情况下可以分别在子元素 `cs:single` 和 `cs:multiple` 中定义， (例如:`"page"` 和 `"pages"`)。

术语必须使用 `cs:term` 元素来定义，并在其中使用 `form` 属性来设置特定格式，`form` 可以设置的值为：

- `"long"` - （默认值）, e.g. "editor" and "editors" for the "editor" term
- `"short"` - e.g. "ed." and "eds." for the term "editor"
- `"verb"` - e.g. "edited by" for the term "editor"
- `"verb-short"` - e.g. "ed." for the term "editor"
- `"symbol"` - e.g. "§" and "§§" for the term "section"

如果一个样式使用了一个没有定义的格式，则会会退到其他形式，比如 `"werb-short"` 会回退到 `"verb"`，`"symbol"` 会回退到 `"short"`，`"verb"` 和 `"short"` 都会回退到 `"long"`。如果没有可以用的语言环境或者 form 格式，改术语的渲染结果就会显示为空字符串。

`cs:term` 元素可以使用 `match`，`gender` 和 `gender-form` 属性来设置数字变量渲染为序数（比如，`first`，`2nd`）。具体见下面的 [序数后缀](#序数后缀) 和 [特定序数](#性别特定序数)。

术语内容不应该包括 Latex 以及 HTML 等标记。上标可以使用 Unicode 上标字符。

#### 序数后缀

数字变量可以使用 `cs:number` 元素以 `"ordinal"` 格式（即序数格式）渲染，比如：`2nd`。序数的后缀则是使用术语来定义的。

`"ordinal"` 术语定义了默认的序数后缀格式，但这些默认的后缀可以被下面的术语对某些数字进行覆盖：

- `"ordinal-00"` 到 `"ordinal-09"` - 默认地，当术语名称的最后一位数字与要渲染的数字的最后一个数字相同时，将使用在这个范围内的对应的术语。比如：`"ordinal-00"` 能够匹配数字 0 、10、20 等等。通过设置属性 `match` 为 `"last-two-difits"`（默认值为 `"last-digit"`），匹配范围将为变为两位，例如：0、100、200 等。当 `match` 术语设置为 `"whole-number"` 时，只有术语与要渲染的数字相同时，才会实现匹配。
- `"ordinal-10"` 到 `"ordinal-99"`- 默认地，当要渲染的数字的最后两位和术语中相同时，使用这个范围的术语。当 `match` 属性设置为 `"whole-number"` 时（默认为 `"last-two-digits"`），只有术语与要渲染的数字相同时，才会实现匹配。

当渲染的数据对上面的两组都匹配时（比如：13 可以同时匹配 `"ordinal-03"` 和 `"ordinal-13"`），则使用 `"ordinal-10"` 到 `"ordinal-99"`。

序数术语在 CSL 1.0.1 和 CSL 1.0 中表现时不同的。当样式和本地化文件中都没有定义 `"ordinal"` 术语，但是定义了 `"ordinal-00"` 到 `"ordinal-04"`，原始的 CSL 1.0 的方案被使用，`"ordinal-01"` 用于以 1 结尾的数字（以 11 结尾的数字除外），`" ordinal-02"` 用于以 2 结尾的数字（以 12 结尾的数字除外），`"ordinal -03"` 表示以 3 结尾（那些以 13 结尾的除外），`"ordinal-04"` 表示所有其他数字。

#### 性别特定序数

一些语言使用特定的有别于性别的序数。例如，如果目标名词是男性，英语中的 "1st" 和 "first" 在法语中就翻译为 "1er" 和 "premier"，如果目标名词是女性，就翻译为 "1re" 和 "première"。

女性和男性在术语使用上的不同可以使用性别格式 `gender-form` 的属性来设置（分别设置为 `feminine` 和 `masculine`），详情见 [Ordinals 序数](#ordinals-序数)（没有性别的术语表示中性）。这里涉及到两类目标名词：

1. [数字变量](#数字变量) 附带的术语

2. 月份术语（见 [Months 月](#months-月)）。

在术语设置为 `"long"`（默认），并且在 `gender` 属性被设置时（设置为 `"feminine"` 和 `"masculine"`），这些名词即使用相应的性别变体。当数字变量以序数 `"ordinal"` 或者 `long-ordinal` 形式时，将使用相同性别的序数词，如果没定义女性或男性变体，则使用中性变体。当 `"day"` 日期部分以序数 `"ordinal"` 形式呈现时，序数性别和月的术语匹配。

下面给出 `1re éd.`（`"1st ed."`）、`"1er janvier"`（`"January 1st"`）和 `"3e édition"`（`"3rd edition"`）的示例：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<locale xml:lang="fr-FR">
  <terms>
    <term name="edition" gender="feminine">
      <single>édition</single>
      <multiple>éditions</multiple>
    </term>
    <term name="edition" form="short">éd.</term>
    <term name="month-01" gender="masculine">janvier</term>
    <term name="ordinal">e</term>
    <term name="ordinal-01" gender-form="feminine" match="whole-number">re</term>
    <term name="ordinal-01" gender-form="masculine" match="whole-number">er</term>
  </terms>
</locale>
```

### 本地化日期格式

在 `cs:date` 元素中，本地化数据格式有两种格式：一种是 `"numeric"`（例：`12-15-2005`），另外一种是 `"text"`（例：`December 15,2005`）。格式在 `cs:date` 元素中，使用 `form` 属性来设置。

日期格式使用 `cs:date-part` 子元素来构建（见 [Date-part](https://docs.citationstyles.org/en/stable/specification.html#date-part)）。当 `cs:date-part` 的 `name` 属性设置为 `"day"`、`"month"`、或 `"year"` 时，反应了日期显示的顺序为日、月河年。日期可以使用 `cs:date` 和 `cs:date-part` 元素中的 [formatting](https://docs.citationstyles.org/en/stable/specification.html#formatting) 和 [text-case](https://docs.citationstyles.org/en/stable/specification.html#text-case) 属性设置。`cs:date` 元素中的 `delimiter` 属性用来设置 `cs:date-part` 中不同部分的间隔，并且词缀也可以应用于 `cs:date-part` 元素。（译注：这里的词缀指的是前后的括号等等。）

**注**：定义本地化日期格式时，不允许在 `cs:date` 上使用词缀。此限制适用于将特定于语言环境的词缀（在 cs：date-part 元素上设置）与任何特定于样式的词缀（在调用 cs：date 元素上设置）分开，例如括号：

```xml
<macro name="issued">
 <date variable="issued" form="numeric" prefix="(" suffix=")"/>
</macro>
```

### 本地化选项

本地化选项有两个，`limit-day-ordinals-to-day-1` 和 `punctuation-in-quote` （见 [Locale Options](https://docs.citationstyles.org/en/stable/specification.html#locale-options)）。这些全局选项（同时影响引文和参考文献条目）在 `cs:style-options` 中被设置为可选属性。

## 渲染元素

::: warning WORK IN PROGRESS

此页面正在施工中。

:::

渲染元素指定了在引文或参考文献条目中需要包含哪些条目元数据，以及以何种方式排序，并对其格式进行控制。

### Layout

`cs:layout` 渲染元素是 `cs:citation` 元素和 `cs:bibliography` 元素的的必要子元素。`cs:layout` 必须包含一个或者多个渲染元素，并且可能携带 [`affixes`](#词缀) 和 [`formattig`](#格式化) 属性。在 `cs:citation` 元素中，[`delimiter`](#分隔符-delimiter) 属性用来指定一个引文中的不同引用的间隔符。例如：一个 `"(1,2)"` 类型的引文可以使用下面的代码实现：

```xml
<citation>
  <layout prefix="(" suffix=")" delimiter=", ">
    <text variable="citation-number"/>
  </layout>
</citation>
```

### Text

`cs:text` 渲染元素用来输出文字。其必须携带下面的属性来确定什么部分需要渲染：

- `variable`- 渲染一个变量的文本内容。属性值必须是 [标准变量](#标准变量)。可以与 `form` 属性一起选择变量的 `"long"`（默认）或 `"short"` 形式（例如：设置题目，完整题目或者简写）。如果选择了 `"short"` 形式，但是却没法获得，就使用 `"long"` 形式来渲染。
- `macro` - 渲染宏的文字输出。属性值必须和 `cs:macro` 元素的 `name` 属性的值相匹配。
- `term` - 渲染术语。属性必须是 [附录 II 术语](#附录 II 术语) 中的术语列表中的一个。通过设置复数属性 `plura l` 来这只其使用单数还是复数形式，其中 `"true"` 为默认，表示使用复数形式，设置为 `"false"` 表示使用单数形式。 使用 `form` 属性可以设置术语的形式，其值可以为 `"long"` （默认）、`"short"`、`"verb"`、`"verb-short"` 或者 `"symbol"` （见 [术语](#术语)）.
- `value` - 渲染属性值自己。

一个 `cs:text` 的渲染 `title` 变量的例子：

```xml
<text variable="title"/>
```

`cs:text` 可能会携带 [affixes](https://docs.citationstyles.org/en/stable/specification.html#affixes)，[display](https://docs.citationstyles.org/en/stable/specification.html#display)，[formatting](https://docs.citationstyles.org/en/stable/specification.html#formatting)，[quotes](https://docs.citationstyles.org/en/stable/specification.html#quotes)，[strip-periods](https://docs.citationstyles.org/en/stable/specification.html#strip-periods) 和 [text-case](https://docs.citationstyles.org/en/stable/specification.html#text-case) 属性。

### Date

`cs:date` 渲染元素输出必须从 [日期变量](#日期变量) 列表中的选择。日期可以以本地化或者非本地化格式呈现。

[本地化的日期格式](#本地化日期格式) 通过可选的 `form` 属性来选择，其值必须设置为 `"numeric"`（完全的数字格式 ，例如：12-15-2005）或者 `"text"`（非数字的月份格式，例如： December 15, 2005）。本地化日期格式可以通过两种方式进行自定义。第一种：`date-parts` 属性可以用来设置不同的日期组成部分。其值可以设置为：

- `"year-month-day"` - 默认值，渲染年，月，日
- `"year-month"` - 渲染年月
- `"year"` - 只渲染年

第二种，`cs:date` 可以含有一个或者多个 `cs:date-part` 子元素（见 [Date-part](#date-part)）。在这些子元素中可以设置属性来覆盖之前的本地化设置（例如：要获得所有语言环境的缩写月份，可以将月份的 `cs:date-part` 元素的 `form` 属性设置为 `"short"`）。这些 `cs:date-part` 子元素不影响各个日期部分渲染的顺序和以及其是否渲染。`cs:date-part` 元素中不能使用词缀 [Affixes](#词缀).

没有属性 `form` 的情况下，`cs:date` 则描述了一个自带的非本地化的日期格式。其日期格式使用 `cs:date-part` 子元素来构建。在使用 `name` 属性并设置为 `day`，`month` 或 `year` 时，这些元素的顺序反应了其显示顺序。日期可以在 `cs:date-part` 元素中使用 [`formatting`](#格式化) 属性以及多个 `cs:date-part` 的属性来格式化（见 [Date-part](#date-part)）。`cs:date` 中的 `delimiter` 属性可以用来设置 `cs:date-part` 元素不同日期部分的分隔符，此外，[词缀](#词缀) 可以用在 `cs:date-part` elements。

本地化的日期或者是非本地化的日期，, `cs:date` 都可能携带 [affixes](https://docs.citationstyles.org/en/stable/specification.html#affixes)，[display](https://docs.citationstyles.org/en/stable/specification.html#display)，[formatting](https://docs.citationstyles.org/en/stable/specification.html#formatting) 和 [text-case](https://docs.citationstyles.org/en/stable/specification.html#text-case) 属性。

#### Date-part

`cs:date-part` 元素用来控制日期的各个部分怎么渲染。除了其父元素 `cs:date` 调用了本地化日期格式，这些子元素同样可以决定哪些部分出现以及各部分的渲染顺序。`cs:date-part` 元素描述了 `name` 属性选择的日期部分，其 `name` 值可以是：

**"day"**

​ 对于 `"day"` 来说，`cs:date-part` 可能会携带 `form` 属性，值可以设置为：

- "numeric" - （默认），例如，每个月第一天显示为 `1`
- "numeric-leading-zeros" - 不够的位数用 0 补齐，例如，`01`
- "ordinal" - 使用序数形式，例如，`1st`

  有的语言种，比如法语，只在月份的第一天使用 `"oridinal"` 也就是序数形式（"1er janvier"，"2 janvier"，"3 janvier" 等)。这种输出可以通过 `"oridinal"` 以及 `limit-day-oridinals-to-day-1` 属性来设置 (see [本地化选项](#本地化选项))。

**"month"**

​ 对于 `"month"` 来说，`cs:date-part` 可能会携带 [`strip-periods`](#strip-periods) 和 `form` 属性。在 locale files 中，月份缩写应该后面要加点（例如： "Jan.", "Feb."）。点可以设置 `strip-periods` 为 `"true"` 去掉。`form` 属性可以设置为：

- "long" - 默认，例如：`January`
- "short" - 例如：`Jan.`
- "numeric" - 例如：`1`
- "numeric-leading-zeros" - 例如：`01`

**"year"**

​ 对 `"year"` 来说，`cs:date-part` 可能会携带 `form` 属性，值可以设置为：

- "long" - 默认，例如：`2020`
- "short" - 例如：`20`

`cs:date-part` 也可能携带 [formatting](https://docs.citationstyles.org/en/stable/specification.html#formatting)，[text-case](https://docs.citationstyles.org/en/stable/specification.html#text-case) 和 `range-delimiter` 属性。除在 `cs:date` 元素中使用，其他情况下，`cs:date-part` 是可以使用词缀的。

#### Date Ranges

默认的日期范围中的分隔符是短线（en-dash），比如：`May–July 2008`。可以在 `cs:date-part` 元素中通过 `range-delimiter` 属性来设置常用的分隔符。当日期范围被渲染的时候，范围分隔符从 `cs:date-part` 元素中提取，并且匹配两个日期差别中最大的部分（"year"，"month"，或 "day"）。如下面的例子，将会渲染出类似 `"1-4 May 2008", "May–July 2008"` 和 `"May 2008/June 2009"` 的日期范围。

```xml
<style>
  <citation>
    <layout>
      <date variable="issued">
        <date-part name="day" suffix=" " range-delimiter="-"/>
        <date-part name="month" suffix=" "/>
        <date-part name="year" range-delimiter="/"/>
      </date>
    </layout>
  </citation>
</style>
```

#### AD and BC

`"ad"` 一词（Anno Domini）自动附加到小于四位数的正年份（例如，`"79"` 变为 `"79AD"`）。`"bc"` 一词（Before Christ）自动附加到负年份（例如，`"-2500"` 变为 `"2500BC"`）。

#### Seasons

如果日期中包含了季节而不是月份，日期术语 (`"season-01"` 到 `"season-04"`, 分别代表春夏秋冬) 将取代月份术语。比如，下面将会被渲染为 `"May 2008"` 和 `"Winter 2009"`。

```xml
<style>
  <citation>
    <layout>
      <date variable="issued">
        <date-part name="month" suffix=" "/>
        <date-part name="year"/>
      </date>
    </layout>
  </citation>
</style>
```

#### Approximate Dates

近似日期，在 `is-uncertain-date` 属性设置为 `"true"` 时即渲染（见 [choose](#choose)）。例如：下面的例子讲渲染出 `2005`（正常日期）和 `ca.2003`（近似日期）的结果。

```xml
<style>
  <citation>
    <layout>
      <choose>
        <if is-uncertain-date="issued">
          <text term="circa" form="short" suffix=" "/> ## circa 是大约的意思
        </if>
      </choose>
      <date variable="issued">
        <date-part name="year"/>
      </date>
    </layout>
  </citation>
</style>
```

### Number

`cs:number` 渲染元素输出 `variable` 属性选择的数字变量。[数字变量](#数字变量) 是 [标准变量](#标准变量) 的子集。

使用 `cs:number` 元素来渲染数字变量时，如果只包含数字内容 (使用 `is-numeric` 属性设置，见 [Choose](https://docs.citationstyles.org/en/stable/specification.html#choose))，数字就被提取出来并渲染。变量内容包含非数字内容时，变量内容将呈现为原样。

在提取的过程中，用连字符分隔的数字将去掉中间的空格（"2 - 4" 变为 "2-4"）。用逗号分隔的数字在逗号后会添加一个空格，并删掉其余的空格 ("2,3" 和 "2 , 3" 变为 "2, 3")。当数字使用 `&` 分隔时，在前后各添加一个空格 ("2&3" 变为 "2 & 3")。

提取的数字可以通过 `form` 属性行进格式化，其值可以设置为：

- "numeric" - 默认，例如： "1", "2", "3"
- "ordinal" - 序数数字，例如： "1st", "2nd", "3rd"。序数后缀可以使用术语定义 (见 [序数后缀](#序数后缀).
- "long-ordinal" - 长序数，例如： "first", "second", "third"。畅序数使用术语 "long-ordinal-01" 到 "long-ordinal-10" 定义, 用来在数字 1 到 10 使用。对于其他的数字，长序数渲染的结果讲和序数相同.
- "roman" - 罗马数字，例如："i", "ii", "iii"

带有前缀或者后缀的数字不能使用罗马数字进行排序或者渲染（例如："2E" 仍然时 "2E"）。没有词缀的数字可以被分别转换（"2, 3" 可以转换为 "2nd, 3rd", "second, third" 或者 "ii, iii"）。

`cs:number` 元素可能会携带 [affixes](https://docs.citationstyles.org/en/stable/specification.html#affixes)，[display](https://docs.citationstyles.org/en/stable/specification.html#display)，[formatting](https://docs.citationstyles.org/en/stable/specification.html#formatting) 和 [text-case](https://docs.citationstyles.org/en/stable/specification.html#text-case) 属性。

### Names

`cs:names` 元素用来输出一个或多个 [名字变量](#名字变量)的内容（通过必选属性 `variable` 来选择），每个 `names` 元素可以包含一个或者多个名称变量（例如：`"author"` 名称变量会携带引用项中所有的作者名称）。如果选择了多个变量，每个变量将会按顺序单独渲染，但当选择中包括编辑和翻译（`"editor"` 和 `"translator"`）不适用。当包含的内容中有两个名字变量相同时，则只渲染一个。另外，如果 `cs:names` 元素中包含 `cs:label` 元素，`"editortranslator"` 将用来代替 `"editor"` 和 `"translator"`（例如：Doe(editor & tranlator)）。`cs:names` 元素中的 [`delimiter`](#分隔符-delimiter) 属性可以用来分割不同的名字变量（例如：`Doe, Smith (editors); Johnson (translator)` 中间使用了分号隔开）。

```xml
<names variable="editor translator" delimiter="; ">
  <label prefix=" (" suffix=")"/>
</names>
```

`cs:names` 有四个子元素:`cs:name`，`cs:et-al`，`cs:substitute` 和 `cs:label`。 `cs:names` 元素可能会携带 [affixes](https://docs.citationstyles.org/en/stable/specification.html#affixes), [display](https://docs.citationstyles.org/en/stable/specification.html#display) 和 [formatting](https://docs.citationstyles.org/en/stable/specification.html#formatting) 属性。

#### Name

`cs:name` 元素的一个可选的子元素 `cs:names` 可以用来描述单个 `names` 的格式，以及名称变量中不同 `names` 的分隔。`cs:name` 可能携带下面的属性：

`and`

​ 在名称变量中用来设置倒数第二个名字和倒数第一个名字的分隔符。可选的值为 `"text"`("Doe, Johnson and Smith") 或者 `"symbol"`(eg: "Doe, Johnson & Smith")。

`delimiter`

​ 在名称变量中设置字符串来分隔名称。默认的是 `","`(e.g. "Doe, Smith")。

`delimiter-precedes-et-al`

​ 确定在使用 `et-al` 缩写的情况下，在截断的姓名列表和 `et-al` 术语之间何时使用分隔符或者空格。该属性可选的值有：

- "contextual" - (default), 在作者列表中有 2 个及以上的人时使用
  - 1 name: "J. Doe et al."
  - 2 names: "J. Doe, S. Smith, et al." 两个人，则在最后一个人名和 `et-al` 间使用 `,` 分隔
- "after-inverted-name" - 在 `name-as-sort-order` 属性使当前的名字发生了颠倒时使用。例如：当 `name-as-sort-order` 属性设置为 `"first"` 时，第一个名字的前后部分 Doe 和 J 发生了反转，因此在第一个名字后面使用了分隔符 `,`
  - "Doe, J., et al."
  - "Doe, J., S. Smith et al."
- "always" - 不论几个名字或者怎样的设置，总是使用
  - 1 name: "J. Doe, et al."
  - 2 names: "J. Doe, S. Smith, et al."
- "never" - 禁止使用分隔符，不论几个名字。
  - 1 name: "J. Doe et al."
  - 2 names: "J. Doe, S. Smith et al."

`delimiter-precedes-last`

在名字列表中确定何时使用分隔符来分割最后一个作者和倒数第二个作者。如果 `and` 没有被设置，则不论 `delimiter-precedes-last` 属性的值，名字分隔符总是使用。

- "contextual" - 默认，当名字列表中的名字有 3 个或以上时使用。下面在使用 3 个名字时，在 `and` 前使用了分隔符 `,`
  - 2 个名字: "J. Doe and T. Williams"
  - 3 个名字: "J. Doe, S. Smith, and T. Williams"
- "after-inverted-name" - 在 `name-as-sort-order` 属性使当前的名字发生了颠倒时使用。例如：当 `name-as-sort-order` 属性设置为 `"first"` 时，仅在第一个名字后使用了分隔符 `,`
  - "Doe, J., and T. Williams"
  - "Doe, J., S. Smith and T. Williams"
- "always" - 分隔符一直使用。
  - 2 names: "J. Doe, and T. Williams"
  - 3 names: "J. Doe, S. Smith, and T. Williams"
- "never" - 禁用分隔符
  - 2 names: "J. Doe and T. Williams"
  - 3 names: "J. Doe, S. Smith and T. Williams"

`et-al-min`/`et-al-use-first`

通过设置这两个属性，可是使用 `et-al` 对名字列表进行缩写。如果名字变量中的名字的数目超过了 `et-al-min` 属性设置的值，则达到 `et-al-use-first` 设置的名称数量后，渲染的名字列表将被截断。`"et-al"`（或者 `"and others"`）术语用来添加到截断列表的后面（见 [et-al](#et-al)）。默认地，当名字列表被截断到单个名字，则名字和 `"et-al"` 术语之间使用空格进行隔开（例如：Doe et al.）。当一个名字列表被截断到两个或者三个名字，则使用分隔符（例如：Doe, Smith, et al.）。这些行为可以使用 `delimiter-precedes-et-al` 属性来设置。

`et-al-subsequent-min`/`st-al-subsequent-use-first`

如果使用了这两个属性，则属性的值分别替换 `et-al-min` 和 `et-al-use-first` 的值以便后续引用。

`et-al-use-last`

当该属性设置为 `"true"` 时，（默认为 `"false"`），则使用下面的格式：截断的名称列表，分隔符，省略号，名称列表最后一个名字。这个属性只能在名称列表有多余两个的名称时使用。例：

```
A. Goffeau, B. G. Barrell, H. Bussey, R. W. Davis, B. Dujon, H.
Feldmann, … S. G. Oliver
```

---

下面讨论的属性将只会影响单个人的名字，这里先给出名字的组成部分。单个人的名字必须含有 "family" 部分，还可以含有 "given"，"suffix"，"non-dropping-particle"，和 "dropping particle" 等部分。下面对这些部分分别进行解释：

- "family" - 姓氏，必须去掉 particle（译注：暂译为粒子）和后缀
- "given" - 全名 "John Edward" 或者 J. E.
- "suffix" - 名字后缀，比如：外国人常用的 Jr 或者罗马数字（经常翻译为 xx 世，比如伊丽莎白二世） "Jr." in "John Smith Jr." 或者 "III" in "Bill Gates III"
- "non-dropping-particle" - 不可删除（省略）的粒子。当只显示姓氏的时候，不能省略 ("de" in the Dutch surname "de Koning") ，但是可能会在姓氏中分别对待，比如在排序的时候
- "dropping-particle" - 可删除的粒子。当只显示姓氏的是欧，可以省略 ("van" in "Ludwig van Beethoven", which becomes "Beethoven")

下面的属性将会影响单个人的名称的渲染：

`form`

指定是否显示名字的所有部分（默认为 `"long"`），或者只显示姓氏和不可省略粒子（值为 `"short"`）。除这两种情况外，还可以设置为 `"count"`，返回使用 `cs:names` 元素渲染的部分的总数（考虑 `et-al` 缩写和编辑/翻译等折叠的影响）。

`initialize`

当该属性设置为 `"false` 时（默认的结果为 `"true"`），并且 `"initialize-with"` 属性被设置时，全名将不使用缩写。但是，如果在全名中有单独的大写字母的时候，仍然会添加 ``"initialize-with"` 的值。例如：当 `initialize` 设置为 `"false"`，并且`initialize-with` 设置为 `"."` 时，James T kirk 将会变为 James T. Kirk。

`initialize-with`

当该实行被设置时，全名将会使用缩写。该属性将会在每个首字母后添加属性值，比如：上述的名字会变为 J.J. Doe。对于合成的全名，例如：Jean-luc，可以使用全局的带有连字符的 `initialize-with-hyphen` 属性来设置其缩写形式（见 [人名中的连字符](#人名中的连字符)）。

`name-as-sort-order`

指定名字的显示顺序为：姓，然后是名，例如：John Doe 变为 Doe,John。该属性值可以设置为：

- "first" - 属性只影响名字变量中的第一个名字
- "all" - 属性将会影响所有的名字

注意：即使 `name-as-sort-order` 改变了名字内部的顺序，最终显示的顺序不一定与包含粒子和后缀的名字的相同（见 [名字内部顺序](#名字内部顺序)）。`name-as-sort-order` 只影响以拉丁字母或者西里尔字母书写的名字。其他字母书写的名字（比如，亚洲的大部分名字）总是将全名中的姓显示在前面。

`sort-separator`

设置名字的不同部分由于 `name-as-sort-order` 属性导致的内部位置变换后的分隔符。默认值为 `","`（Doe, John）。和 `name-as-sort-order` 属性相同，该属性只适用于拉丁字母和西里尔字母的名字。

`cs:name` 元素也可以携带 [词缀](#词缀) 和 [格式化](#格式化)。

#### 名字内部顺序

名字内部各部分的顺序取决于 `cs:name` 元素中 `form` 和 `name-as-sort-order` 属性和 `cs:style` 元素中的 `demote-non-droping-particle` 属性的设置。名称各部分的显示和排序的属性通常是不同的。下面将对名字顺序进行简单的介绍：

**拉丁/西里尔名字的显示顺序**

---

条件：`form` 属性设置为 `"long"`

顺序：1. 名 2. 可省略粒子 3. 不可省略粒子 4. 姓 5. 后缀

示例：Jean de La Fontaine III

---

条件：`form` 属性设置为 `"long"`，`name-as-sort-order` 属性激活，`demote-non-dropping-particle` 属性设置为 `"never"` 或者 `"sort-only"`

顺序：1. 不可省略粒子 2. 姓 3. 名 4. 可省略粒子 5. 后缀

示例：La Fontaine, Jean de, III

---

条件：`form` 属性设置为 `"long"`，`name-as-sort-order` 属性激活，`demote-non-dropping-particle` 属性设置为 `"display-and-sort"`

顺序：1. 姓 2. 名 3. 可省略粒子 4. 不可省略粒子 5. 后缀

示例：Fontaine, Jean de La III

---

条件：`form` 属性设置为 `"short"`

顺序：1. 不可省略粒子 2. 姓

示例：La Fontaine

---

**拉丁/西里尔名字的排序顺序**

---

条件：`demote-non-dropping-particle` 属性设置为 `"never"`

顺序：1. 不可省略粒子 + 姓 2. 可省略粒子 3. 名 4. 后缀

示例：La Fontaine de Jean III

---

条件：`demote-non-dropping-particle` 属性设置为 `"sort-only"` 或者 `"display-and-sort"`

顺序：1. 姓 2. 可省略粒子 + 不可省略粒子 3. 名 4. 后缀

示例：Fontaine de La Jean III

---

**非拉丁和非西里尔名字的显示和排序顺序**

---

条件：`form` 属性设置为 `"long"`

顺序：1. 姓 2. 名

示例：张三 或者 Zhang San

---

条件：`form` 属性设置为 `"short"`

顺序：1. 姓

示例：张 或者 Zhang

---

#### 名字格式化

`cs:name` 元素可能会携带一个或者两个 `cs:name-part` 子元素来对名字的小部分进行特定的格式化。`cs:name-part` 必须携带 `name` 属性，设置为 `"given"` 或者 `"family"`。

如果设置为 `"given"`，`cs:name-part` 元素的 [格式化](#格式化) 和 [文字大小写](#文字大小写) 属性会影响 `"given"` 和 `"dropping-particle"` 部分。[词缀](#词缀) 出现在 `"given"` 左右，将该部分扩起来。

如果设置为 `"family"`，`cs:name-part` 元素的 [格式化](#格式化) 和 [文字大小写](#文字大小写) 属性会影响 `"given"` 和 `"non-dropping-particle"` 部分。[词缀](#词缀) 出现在 `"family"` 左右，将该部分扩起来。

`"suffix"` 部分不受 name-part 部分格式限制。`cs:name-part` 元素不影响 name-part 渲染的顺序。下面的代码，将产生类似 Jane DOE 的效果：

```xml
<names variable="author">
  <name>
    <name-part name="family" text-case="uppercase"/>
  </name>
</names>
```

#### Et-al

Et-al 缩写通过 `et-al-…` 属性来控制（见 [Name](#name)），同时也可以使用可选的 `cs:et-al` 元素设置，`cs:et-al` 元素必须放在 `cs:name` 元素后。`term` 属性可以被设置为 `"et-al"`（默认）或者 `"and others"`。[格式化](#格式化) 属性可以用来设置 et-al 的格式，下面是 `"et-al"` 术语的一个例子：

```xml
<names variable="author">
  <et-al term="and others" font-style="italic"/>
</names>
```

#### Substitute

可选的 `cs:substitute` 元素，是 `cs:names` 的子元素，且必须是最后一个子元素，在父元素 `cs:names` 中指定的 [名字变量](#名字变量) 为空时添加替换。替换必须放在 `cs:substitute` 元素中，并且必须包含一个或者多个渲染元素（除 `cs:layout`）。`cs:names` 的简洁版本没有子元素，继承了 `cs:names` 元素中在 `cs:name` 和 `cs:et-al` 子元素的属性值。如果 `cs:substitute` 元素包含了多个子元素，第一个非空的元素用于替换。替换变量在输出的其余部分被抑制，以防止重复。下面的例子中：`"author"` 名称变量为空时，就被 `"editor"` 名称变量替换，在没有 editor 时，则使用 `"title"` 宏替换。

```xml
<macro name="author">
  <names variable="author">
    <substitute>
      <names variable="editor"/>
      <text macro="title"/>
    </substitute>
  </names>
</macro>
```

#### Label in `cs:names`

`cs:label` 元素是可选的（见 [Label](#label)），而且必须位于 `cs:name` 和 `cs:et-al` 元素后，在 `cs:substitute` 元素前。当 `cs:label` 作为 `cs:names` 元素的子元素时，`cs:label` 不能携带 `variable` 属性，而是使用父元素 `cs:names` 中的变量。第二个区别是：`form` 属性可以设置为 `"verb"` 或者 `"verb-short"`，其所有允许的值为：

- "long" - （默认）, 例如， "editor" 术语渲染为 "editor" 和 "editors"
- "short" - 例如，"editor" 术语渲染为 "ed." 和 "eds"
- "verb" - 例如，"editor" 术语渲染为 "edited by"
- "verb-short" - 例如，"editor" 术语渲染为 "ed."
- "symbol" - 例如，"section" 术语渲染为 "§" 和 "§§"

### Label

`cs:label` 渲染元素输出与所选变量匹配的术语，该属性必须设置为 "locator"、"page" 或数字变量之一。只有当选择的变量是非空的时候，术语才会渲染。例如：

```xml
<group delimiter=" ">
  <label variable="page"/>
  <text variable="page"/>
</group>
```

可以生成 `"page 3"` 或者 `"pages 5-7"`。`cs:label` 可能会携带下面的属性:

`form`

​ 选择术语的形式，可以设置为下面的值：

- "long" - （默认）， 例如： "page" 术语渲染为 "page"/"pages"
- "short" - 例如： "page" 术语渲染为 "p."/"pp."
- "symbol" - 例如： "section" 术语渲染为 "§"/"§§"

`plural`

​ 设置术语的复数形式，可以使用下面的值：

- "contextual" - （默认），复数形式的渲染和具体的内容相匹配。当内容中包含多个数字时，使用复数形式。如下面的渲染结果："page 1"，"pages 1-3"，"volume 2"，"volumes 2 & 4"。或者在使用 `number-of-pages` 和 `number-of-volumes` 时，数字大于 1，例如： ("1 volume" 和 "3 volumes"。
- "always" - 总是使用复数形式，不管具体的内容如何。例如："pages 1" 和 "pages 1-3"
- "never" - 禁止使用复数形式，不管具体内容： "page 1" 和 "page 1-3"

`cs:label` 也可能会携带 [affixes](https://docs.citationstyles.org/en/stable/specification.html#affixes), [formatting](https://docs.citationstyles.org/en/stable/specification.html#formatting), [text-case](https://docs.citationstyles.org/en/stable/specification.html#text-case) 和 [strip-periods](https://docs.citationstyles.org/en/stable/specification.html#strip-periods) 属性。

### Group

`cs:group` 元素必须包含一个或者多个渲染元素（除了 `cs:layout`）。`cs:group` 可以携带 `delimiter` 属性来分隔子元素以及 `affixes`、`display` 和 `formatting` 属性。`cs:group` 隐含的条件，当以下情况出现时，`cs:group` 和它的子元素将会被抑制：a) 在 `cs:group` 中至少一个渲染元素调用了变量（直接地或者通过宏调用），b) 所有被调用得变量都为空。

```xml
<layout>
  <group delimiter=" ">
    <text term="retrieved"/>
    <text term="from"/>
    <text variable="URL"/>
  </group>
</layout>
```

上述代码可以生成 `"retrieved from http://dx.doi.org/10.1128/AEM.02591-07"` 类似得结果，但是当 URL 为空的时候，不生成结果。

### Choose

`cs:choose` 元素允许有条件的渲染元素。下面的例子的意思为：在 `"issud"` 日期变量存在的情况下，就实施渲染，如果不存在，就给出 `"no date"` 术语：

```xml
<choose>
  <if variable="issued">
    <date variable="issued" form="numeric"/>
  </if>
  <else>
    <text term="no date"/>
  </else>
</choose>
```

`cs:choose` 元素中必须还有 `cs:if` 子元素，后面还可以有一个或者多个 `cs:else-if` 子元素以及一个可选的用来结尾的 `cs:else` 元素。`cs:if` 和 `cs:else-if` 元素可能回包含任意个除 `cs:layout` 的渲染元素。由于空的 `cs:else` 元素是多余的，所以 `cs:else` 元素必须至少包含一个渲染元素。`cs:if` 和 `cs:else-if` 元素必须含有一个或多个判断条件，这些条件可以使用下买的属性设置：

`disambiguate`

​ 当改属性设置为 `"true"`(唯一允许的值) 的时候，在元素内容消除了两个相同的引用时渲染。当所有其他消除歧义的方法都不能识别唯一的目标时，才进行消除歧义的尝试。

`is-numeric`

​ 测试给定的变量（[附录 IV 变量](#附录 IV 变量)）是不是包含数字部分。如果内容仅由数字构成，则识别为数字。数字可以带有前缀、后缀（"D2"，"2b"，"L2d"）、并且可能被逗号，连字符或 `&` 分隔（"2, 3"，"2-4"，"2 & 4"）。 例如， "2nd" 被识别为 "true" ，但 "second" 和 "2nd edition" 被识别为 "false".

`is-uncertain-date`

​ 判断给定的 [日期变量](#日期变量) 是不是包含 [近似日期](#Approximate Dates)。

`locator`

​ 判断位置是不是和给定的位置符合。这里的位置主要是在一个文档中的位置，比如，题目，第几段。使用 "sub-verbo" 判断是不是 "sub-verbo" 类型

`position`

​ 判断引用的位置湿否和给定的位置匹配。当在 `cs:bibliography` 中调用时，`position` 的结果为 "false"。位置可以使用下面的选项测试：

- "first": 第一个引用项的位置
- "ibid"/"ibid-with-locator"/"subsequent": 引用先前引用的项目的引用，Such cites may also have the "ibid" or "ibid-with-locator" position when:

  1. the current cite immediately follows on another cite, within the same citation, that references the same item

  or

  1. the current cite is the first cite in the citation, and the previous citation consists of a single cite referencing the same item

  If either requirement is met, the presence of locators determines which position is assigned:

  - **Preceding cite does not have a locator**: if the current cite has a locator, the position of the current cite is "ibid-with-locator". Otherwise the position is "ibid".
  - **Preceding cite does have a locator**: if the current cite has the same locator, the position of the current cite is "ibid". If the locator differs the position is "ibid-with-locator". If the current cite lacks a locator its only position is "subsequent".

- "near-note": position of a cite following another cite referencing the same item. Both cites have to be located in foot or endnotes, and the distance between both cites may not exceed the maximum distance (measured in number of foot or endnotes) set with the `near-note-distance` option (see [Note Distance](https://docs.citationstyles.org/en/stable/specification.html#note-distance)).

Whenever position="ibid-with-locator" tests true, position="ibid" also tests true. And whenever position="ibid" or position="near-note" test true, position="subsequent" also tests true.

`type`

​ 测试项目是不是和给定的类型匹配（[附录 III 类型](#附录 III 类型)）。这里的类型指条目的类型，例如，书，期刊文献，学位论文。

`variable`

​ 测试给定变量（[附录 IV 变量](#附录 IV 变量)）的默认的形式 (long) 是不是为空。

---

除了 `disambiguate` 外，所有的条件都允许有多个测试值，多个测试值使用空格分隔（"book thesis"）。

`cs:if` 元素和 `cs:else-if` 元素可能会携带 `match` 属性用来控制判断的逻辑，`match` 可设置的值为：

- "all" - 默认，仅当所有给定测试值都为 true 的时候结果才为 true
- "any" - 当任意一个值为 true 的时候，结果就为 true
- "none" - 当没有值测试为 true 的时候，结果为 true

## 样式的行为

::: warning WORK IN PROGRESS

此页面正在施工中。

:::

### 选项

样式可以使用不同的元素来进行特定的配置。在 `cs:citation` 元素中设置元素可以配置特定的 [引文选项](#引文选项)；在 `cs:bibliography` 元素和 [全局选项](#全局选项)（同时影响引文和参考文献条目）中，可以配置特定的参考文献条目。继承的名字选项可以在 `cs:style`,`cs:style` 和 `cs:bibliography` 中设置。最后，[本地化选项](#本地化选项) 可以在 `cs:locale` 元素中设置。

#### 引文选项

##### 消除歧义

当一个引用对应多个参考文献条目的时候会产生歧义。下面有四种方法用来消除歧义：

1. 显示更多作者姓名
2. 扩展姓名（添加缩写或者完整的名）
3. 添加年份后缀
4. 在 `cs:choose` 的 `disambiguate` 属性为 true 的时候，实行渲染

方法 2 也可以在全局名称歧义消除异己整个文档中有歧义的地方。

消除歧义的方法在下面属性被设置的时候，将会被激活，并且按上述列表中的方法进行尝试：

`disambiguate-add-names` 步骤 1

​ 如果设置为 `"true"`（默认为 `false`），使用 et-al 缩写锁代替的名字列表会逐个的加入到渲染列表中，知道添加的名字可以消除引用歧义为止。

`disambiguate-add-givenname` 步骤 2

​ 如果设置为 `"true"`（默认为 `false`），产生歧义的名字将被扩展。名字扩展可以使用 `givenname-disambiguation-rule` 设置。下面是一个例子。

| 含有歧义的引用               | 消除歧义的引用                     |
| ---------------------------- | ---------------------------------- |
| (Simpson 2005; Simpson 2005) | (H. Simpson 2005; B. Simpson 2005) |
| (Doe 1950; Doe 1950)         | (John Doe 1950; Jane Doe 1950)     |

如果不能通过扩展名字来实现消除歧义，当 `disambiguate-add-names` 属性设置为 `"true"`， the names still hidden as a result of et-al abbreviation after the disambiguation attempt of `disambiguate-add-names` are added one by one to all members of a set of ambiguous cites, until no more cites in the set can be disambiguated by adding expanded names.

`givenname-disambiguation-rule`

用来指定 a) 名字扩展的目的是不是仅限于消除歧义，还是对消除歧义的名字有其他的目的 (只有在后面的情况中，有歧义的名字才会在明确的引用中扩展，例如：从 (Doe 1950; Doe 2000) 扩展到 (Jane Doe 1950; John Doe 2000)) b) 名称扩展是针对全部还是针对每个引用的名字 c) 扩展名字的方法。

**扩展单个名字**

​ 扩展单个名字的步骤是：

1. 如果 `initialize-with` 被设置并且 `initialize` 的值为默认的 true：
   (a) 可以通过 `"long"` 而不是 `"short"` 的形式来渲染首字母 (e.g. Doe 变为 J. Doe)
   (b) 如果 `initialize` 设置为 `"flase"`，完整的姓名被渲染，而不是首字母（J. Doe 变为 John Doe）
2. 如果 `initialize-with` 没有被设置，使用 `"long"` 格式渲染完整的姓名（Doe 变为 John Doe）

**消除歧义法则**

​ `givenname-disambiguation-rule` 属性可设置的值为：

​ "all-name"

​ 名字扩展具有消除名字歧义和消除引用歧义的双重目的。在渲染的有歧义的名称中，所有的有歧义的或者没有歧义的名字都将被消除歧义。

​ "all-names-with-initials"

​ 和 "all-name" 一样，但是名称的扩展仅限于缩写。当 `initialize-with` 没被设置或者 `initialize` 被设置为 `"false"` 时，不会进行消除歧义的尝试。

​ "primary-name"

​ 和 "all-name" 一样，但是消除歧义仅限于每个引用的第一个名字。

​ "primary-name-with-initials"

​ 和 "all-names-with-initials" 一样，但是消除歧义仅限于每个引用的第一个名字。

​ "by-cite"

​ 默认，和 "all-name" 一样，但是名称扩展的目的仅限于消除引用的歧义，只有有歧义的名字在有歧义的引用中才会被影响，并且在引用的第一个名字消除歧义后就停止消除歧义。

`disambiguate-add-year-suffix` 步骤 3

如果设置为 `"true"`（默认为 `"false"`），字母序的年后缀将会被添加到有歧义的名字上（"Doe 2007, Doe 2007" 变为 "Doe 2007a, Doe 2007b"）。当字母序到达 `"z"`，后，就会启用两个字母（"z", "aa", "ab", …, "az", "ba" 等等）。

---

如果应用上述的歧义消除方法后仍然存在歧义，则尝试通过 `disambiguate` 条件来渲染不同的引用 [步骤 4] (见 [choose](#choose))。

##### 引用分组

通过引用分组，可以将相同名称的文本引用放在一起，比如：(Doe 1999; Smith 2002; Doe 2006; Doe et al. 2007) 将会变为 (Doe 1999; Doe 2006; Smith 2002; Doe et al. 2007)。引用分组在引用排序和消除歧义后执行。分组后的引用保持其相对顺序，并移到第一个改组中引用出现的第一个位置。

引用分组可以在 `cs:citation` 元素中通过设置 `cite-group-delimiter` 属性或者 `collapse` 属性（见 [cite collapsing](#cite collapsing)）激活。

`cite-group-delimiter`

激活引用分组并为引用组中的引用指定分隔符，默认为 `","`。例如，当 `cs:citation` 元素中的 `cs:layout` 中的 `delimiter` 设置为 `";"` 时，`collapse` 设置为 `"year"`，`cite-group-delimiter` 设置为 `","`，将生成类似 "(Doe 1999,2001; Jones 2000)" 的引用。

##### cite collapsing/引用折叠

author 或者 author-date 类型的引用格式中的引用分组和数字格式中的引用范围可以通过 `collapse` 属性来折叠。折叠引用组中分隔符可以是使用 `year-suffix-delimiter` 和 `after-collapse-delimiter` 属性来设置：

`collapse`

激活引用分组和折叠。允许的值为：

- "citation-number" - 当使用数字样式的时候，折叠引用数字的范围（通过 `"citation-number"` 变量来渲染） ，例如：`[1, 2, 3, 5]` 变为 `[1–3, 5]`。只有升序的引用才可以折叠，比如： `[3, 2, 1]` 将不会折叠。
- "year" - 通过压缩相同的名字来折叠引用分组，例如： "(Doe 2000, Doe 2001)" 变为 "(Doe 2000, 2001)"。
- "year-suffix" - 对名字相同的折叠项，折叠相同的年份，例如： "(Doe 2000a, 2000b)" 变为 "(Doe 2000a, b)"。
- "year-suffix-ranged" - 对名字相同的折叠项，折叠年份范围，例如： "(Doe 2000a, b, c, e)" 变为 "(Doe 2000a–c,e)"。

当 `disambiguate-add-year-suffix` 设置为 `"false"` 时，或者引用中包含位置（例如：“(Doe 2000a-c, 2000d, p. 5, 2000e,f)”，"Doe 2000d" 有一个页码位置），"year-suffix" 和 "year-suffix-ranged" 回退到 "year"。

`year-suffix-delimiter`

​ 设置年份后缀的分隔符。默认在 `cs:citation` 元素的 `cs:layout` 中设置。例如：当 `collapse` 设置为 `"year-suffix"`，`cs:citation` 中的 `cs:layout` 的 `delimiter` 元素设置为 `";"`，并且 `year-suffix-delimiter` 设置为 `","` 时，渲染结果将类似于 "(Doe 1999a,b; Jones 2000)"。

`after-collapse-delimiter`

​ 设置折叠后的引用组要使用的分隔符。默认在 `cs:citation` 元素的 `cs:layout` 中设置。例如：当 `collapse` 设置为 `"year"`，`cs:citation` 中的 `cs:layout` 的 `delimiter` 元素设置为 `","`，并且 `after-collapse-delimiter` 设置为 `";"` 时，渲染结果将类似于 "(Doe 1999, 2001; Jones 2000, Brown 2001)"。

##### 标注距离

`near-note-distance`

当有一个预先的标注时，`"near-note"` 位置是我引用被判断为真，这种预先的标注可以为 a) 指向同一个项目 b) 当前注视以前的脚注或尾注。（译注：不知道讲了什么）

#### 参考文献目录选项

##### 空白

`hanging-indent`

​ 如果设置为 `"true"`（默认为 `"false"`），参考文献列表将采用悬挂缩进渲染。

`second-field-align`

​ 如果该属性被设置，则书目条目的后续行沿第二字段对齐。 使用 "flush" 时，第一个字段与边距齐平。 对于 "margin"，第一个字段放在 margin 中，随后的行与 margin 对齐。例如，当第一个字段设置为 `<text variable="citation-number" suffix=". "/>`

```
9.  Adams, D. (2002). The Ultimate Hitchhiker's Guide to the
    Galaxy (1st ed.).
10. Asimov, I. (1951). Foundation.
```

`line-spacing`

​ 指定垂直方向的行距。默认值为 `"1"`，即单倍行距。可以被设置为任意正整数，用来表示对应倍数的行距。

`entry-spacing`

​ 指定不同条目垂直方向的距离，默认值为 `"1"`，即一倍距离，可以被设置为任意正整数，用来表示对应倍数的距离。

##### 参考文献分组

`subsequent-author-substitute`

​ 如果该属性被设置，则此属性将用上一条条目中的名称替换参考文献条目中的名字。具体的代替方案取决于 `subsequent-author-substitute-rule` 属性的值。替换仅限于 `cs:names` 元素中渲染的第一个名字。

`subsequent-author-substitute-rule`

​ 用来指定 `subsequent-author-substitute` 的结果怎么替换。允许的值为：

- "complete-all" - 默认值，当名字变量中的所有渲染的名字和上一个参考文献条目相同时，`subsequent-author-substitute` 属性的值将代替整个名字列表（包括标点和术语，比如 et-al 和 and 等术语），但 `cs:names` 元素中设置的后缀将不会被代替。
- "complete-each" - 和 "complete-all" 一样，需要完整的匹配，但是 `subsequent-author-substitute` 属性的值将会代替所有被渲染的名字。
- "partial-each" - 当有一个或者多个名字变量中的渲染名字和上一个条目中相同时，使用 `subsequent-author-substitute` 属性代替对应的值。匹配从第一个名字开始，直到不匹配的名字为止。
- "partial-first" - 和 "partial-each" 相同，但是替换仅限于第一个名字。

对下面的例子：

```xml
Doe. 1999.
Doe. 2000.
Doe, Johnson & Williams. 2001.
Doe & Smith. 2002.
Doe, Stevens & Miller. 2003.
Doe, Stevens & Miller. 2004.
Doe, Williams et al. 2005.
Doe, Williams et al. 2006.
```

当 `subsequent-author-substitute` 设置为 `"-"`，并且 `subsequent-author-substitute-rule` 设置为 `"complete-all"`，渲染结果将变为：

```xml
Doe. 1999.
---. 2000.
Doe, Johnson & Williams. 2001.
Doe & Smith. 2002.
Doe, Stevens & Miller. 2003.
---. 2004.
Doe, Williams et al. 2005.
---. 2005.
```

当 `subsequent-author-substitute-rule` 设置为 `"complete-each"` 时，渲染的结果为：

```xml
Doe. 1999.
---. 2000.
Doe, Johnson & Williams. 2001.
Doe & Smith. 2002.
Doe, Stevens & Miller. 2003.
---, --- & ---. 2004.
Doe, Williams et al. 2005.
---, --- et al. 2006.
```

当 `subsequent-author-substitute-rule` 设置为 `"partial-each"` 时，渲染的结果为：

```xml
Doe. 1999.
---. 2000.
Doe, Johnson & Williams. 2001.
--- & Smith. 2002.
Doe, Stevens & Miller. 2003.
---, --- & ---. 2004.
Doe, Williams et al. 2005.
---, --- et al. 2005.
```

当 `subsequent-author-substitute-rule` 设置为 `"partial-first"` 时，渲染的结果为：

```xml
Doe. 1999.
---. 2000.
Doe, Johnson & Williams. 2001.
--- & Smith. 2002.
Doe, Stevens & Miller. 2003.
---, Stevens & Miller. 2004.
Doe, Williams et al. 2005.
---, Williams et al. 2005.
```

#### 全局选项

##### 人名中的连字符

`initialize-with-hyphen`

​ 该属性用来制定合成名字中间是不是使用连字符。例如，`"Jean-Luc"` 是一个合成名字，如果该属性设置为 `"true"`（默认），渲染结果为 `"J.-L."`，如果设置为 `"false"`，渲染结果为 `"J.L."`。

##### 页码范围

`page-range-format`

​ 用来设置页码范围的格式，是不是使用简写来压缩。其可选的值有：`"chicago"` ("321–28")， `"expanded"` ( "321–328")， `"minimal"` ("321–8")， 或者 `" minimal-two"` ("321–28")。每一组值前面表示可选的属性值，后面是渲染结果的例子。也可见 [附录 V 页码范围格式](#附录 V 页码范围格式)。使用 `page-range-delimiter` 属性可以用来设置页面范围分割的符号，该属性在 CSL 1.0.1 中引入，默认是一个破折号。如果改属性没有设置，就默认使用破折号。

##### Name Particles

​ 西方人的名字中经常包括一个或者多个小部分，例如,`"de"` 在荷兰人的名字中 `"W. de Koning"`。在仅显示姓氏时，这些小部分可以分为必须保留和可删除（或译为不可省略和可省略）两种类型：这两种类型分别称为 `non-dropping` 部分和 `dropping` 部分。一个单个的名字可以同时包括这两种类型（不能删除的类型始终位于可删除类型的后面）。例如，`"W. de Koning"` 和法国名字 `"Jean de la Fontaine"` 可以被解构为：

```json
{
  "author": [
    {
      "given": "W.",
      "non-dropping-particle": "de",
      "family": "Koning"
    },
    {
      "given": "Jean",
      "dropping-particle": "de",
      "non-dropping-particle": "La",
      "family": "Fontaine"
    }
  ]
}
```

在仅显示姓氏的时候，只保留不能删除的部分，`"De koning"` 和 `"La Fontaine"`。

在名字倒写的情况下，即姓氏在名字之前，在姓氏后面始终添加 `dropping particle`，但是 `non-dropping` 部分可以前置（例如，`"de Koning, W."`）或者后置（`Koning, W. de`）。在名字倒写，不可省略粒子前置时，可以使用下面的方式对名字进行排序：排序 A：将不可省略粒子和姓一起保留作为主排序键值的一部分；排序 B：通过将不可省略粒子和姓分开，并使其成为二级排序键值，并加入可省略粒子（如果有):

**Sort order A: 不可省略粒子不降级**

- 主排序键值 "La Fontaine"
- 次排序键值 "de"
- 第三排序键值: "Jean"

**Sort order B: 不可省略粒子降级**

- 主排序键值 "Fontaine"
- 次排序键值 "de La"
- 第三排序键值 "Jean"

对不可省略粒子的设置可以使用 `demote-non-dropping-particle` 选项：

`demote-non-dropping-particle`

​ 用来设置在倒写的名字中不可省略粒子的显示和排序方式（例如 Koning W. de）。可设置的值为：

- "never": 不可省略粒子被作为姓中的一部分对待，并附加可省略粒子（"de Koning, W." "La Fontaine, Jean de"）。不可省略粒子作为主排序键值的一部分 (排序 A，例如. "de Koning, W." 将出现在首字母 "D" 的区域).
- "sort-only": 显示的方式和 "never" 相同，但是不可省略粒子降级作为二级排序键值。（排序 B, "de Koning, W." 出现在首字母 "K" 的区域).
- "display-and-sort" （默认），可省略粒子和不可省略粒子在最后（ "Koning, W. de" 和 "Fontaine, Jean de La"）。对名字排序，所有的粒子都是二级排序键值的一部分。（排序 B，"Koning, W. de" 出现在首字母 "K" 的区域).

某些名字中包含的粒子禁止被降级。在这些情况中，粒子将和姓合并到一起，比如，对于法国名字 Charles de Gaulle

```json
{
  "author": [
    {
      "family": "de Gaulle",
      "given": "Charles"
    }
  ]
}
```

#### 可继承的名称选项

​ `cs:names` 和 `cs:name` 元素的属性也可以在 `cs:style`、`cs:citation` 和 `cs:bibliography` 元素中设置。这样就不需要每次在 `cs:names` 和 `cs:name` 出现的时候赋值。

​ 可以在 `cs:name` 元素中继承的属性有 `and`, `delimiter-precedes-et-al`, `delimiter-precedes-last`, `et-al-min`, `et-al-use-first`, `et-al-use-last`, `et-al-subsequent-min`, `et-al-subsequent-use-first`, `initialize`, `initialize-with`, `name-as-sort-order` 和 `sort-separator`。`name-form` 属性和 `name-delimiter` 属性对英语 `cs:name` 元素中的 `form` 和 `delimiter` 属性。同样地，`names-delimiter` 属性对应 `cs:names` 元素中的 `delimiter` 属性。

​ 当一个可继承的名称属性在 `cs:style`，`cs:citation` 和 `cs:bibliography` 中设置时，其值将作用于改元素包含的所有的 `cs:names` 元素。如果一个属性在多个可继承的层次设置，最底层的值发挥作用。

#### 局部选项

`limit-day-ordinals-to-day-1`

​ 日期格式在 `cs:date` 和 `cs:date-part` 元素中定义。默认地，当 `cs:date-part` 元素中的 `name` 设置为 `"day"`，`form` 属性设置为 `"ordinal"` 时，所有的天（1 到 31）将会以序数形式渲染，例如："January 1st"，"January 2nd" 等等。通过将 `limit-day-ordinals-to-day-1` 属性设置为 `"true"`（默认值为 `"false"`），序数格式将仅限于每个月的第一天，其他的天将不使用序数格式。这在某些语言中出现，比如法语，"1er janvier"，"2 janvier"，"3 janvier"。

`punctuation-in-quote`

​ 当 `cs:text` 元素渲染时，如果 `quotes` 属性设置为 `"true"`（见 [格式化](#格式化)），并且在输出后有逗号或者句号，`punctuation-in-quote` 属性可以控制标点放在括号的内还是外，`"false"` 为外（默认），`"true"` 为内。

### 排序

​ `cs:citation` 和 `cs:bibliography` 元素可以在 `cs:layout` 元素之前携带一个 `cs:sort` 子元素，来实现对引文或者参考文献条目的排序。在缺失 `cs:sort` 元素时，引文和文献条目将会使用他们在文章中出现的顺序来排序。

​ `cs:sort` 元素必须包含一个或者多个 `cs:key` 子元素，可以在该元素中设置变量（[附录 IV 变量](#附录 IV 变量)）或者宏名来实现排序。对于每个 `cs:key` 元素，排序的顺序可以通过设置 `sort` 属性来设置为升序（`"ascending"`，默认）或者降序（`"descending"`）。属性 `names-min`,`names-use-first`,`names-use-last` 可以用来覆盖 `et-al-min`/`et-al-subsequent-min`, `et-al-use-first`/`et-al-subsequent-use-first` 和 `et-al-use-last` 属性的值，并且可以通过 `cs:key` 影响所有的名字.

​ 排序的键值是按顺序求值的，也就是说：首先，使用第一个排序键值对所有的项目进行排序。然后使用第二个键值对第一个键值排序后的结果进行排序，直到所有的键值都完成排序为止。如果键值为空，就放到最后。

​ 这里给出一个例子：其中首先引用 `"author"` 宏进行排序，并且使用 `et al.` 来对较长的作者序列进行代替。然后，使用 `"issued"` 变量来进行第二次排序，使用降序：

```xml
<citation>
  <sort>
    <key macro="author" names-min="3" names-use-first="3"/>
    <key variable="issued" sort="descending"/>
  </sort>
  <layout>
    <!-- rendering elements -->
  </layout>
</citation>
```

​ 变量或者宏的排序键值可以与 `"normal"` 渲染的输出不同，具体要依赖下面的细节：

#### 排序变量

​ `cs:key` 元素通过 `variable` 变量属性调用变量的排序键值。名称变量、日期变量和数字变量除外：

**名称**: [名字变量](#名字变量) 通过变量属性被调用，例如 `<key variable="author"/>`，当 `form` 属性设置为 `"long"`，`name-as-sort-order` 属性设置为 `"all"`，返回名字列表字符串。

**日期**：[日期变量](#日期变量) 通过 `variable` 属性被调用，返回 `YYYYMMDD` 格式。使用 0 代替缺失的日期部分，例如：`December 2000` 渲染为 `20001200`。因此，简略的日期在升序排列的时候更加靠前，例如：2000, May 2000, May 1st 2000。负数的年份（即公元前）将被反向排序，比如：100BC, 50BC, 50AD, 100AD。排序过程中，季节将被忽略，因为南北半球的季节顺序不同。在日期范围中，开始的日期用于主要排序，结束日期用于次要排序，例如：2000–2001, 2000–2005, 2002–2003, 2002–2009。在具有相同的开始日期时，日期范围将放在单独的日期后，例如：2000, 2000–2002。

**数字**：[数字变量](#数字变量) 通过 `variable` 属性来调用，返回整数（`form` 设置为 `"numeric"`）如果原始的变量值仅由非数字文本组成，则将该值作为文本字符串返回。

#### 排序宏

​ 变量排序的键值是由字符串值组成，没有富文本标记。通过宏属性中的键值 `cs:key` 来调用。下面为一些特殊情况。

​ 对于名字排序，使用相同的宏而不是直接使用名字变量来渲染和排序有 4 个好处。第一，可以使用替换，例如：可以使用 `"editor"` 变量代替空的 `"author"` 变量。第二，可以使用 et-al 缩写，在宏里使用 `et-al-min`/`et-al-subsequent-min`, `et-al-use-first`/`et-al-subsequent-use-first` 和 `et-al-use-last` 可选属性，或者覆盖 `cs:key` 元素中的 `names-min`, `names-use-first` 和 `names-use-last` 。当 et-al 缩写出现的时候，`"et-al"` 和 `"and others"` 术语不会包括在排序键值中。第三，名字可以只使用姓来排序，即使用宏，其中的 `cs:name` 扽 `form` 属性设置为 `"short"`。最后，通过调用宏，将 `cs:name` 中的 `form` 属性设置为 `"count"`，可以按姓名列表中姓名的数目进行排序。至于使用 `variable` 属性对姓名进行排序，将 `cs:name` 中的 `name-as-sort-order` 属性设置为 `"all"`，返回值为排序后的名称列表。

​ 在宏中带有 `cs:number` 的 [数字变量](#数字变量) 的和日期变量的渲染方法和通过变量的调用相同。唯一的区别是：如果通过 `variable` 属性调用日期变量，将返回完整的日期。相反地，宏调用则只返回原本要渲染的日期部分。例如：

### 范围分隔符

​ "citation-number" 和 "year-suffix" 变量的折叠范围以短划线分隔，例如 "（1-3，5）" 和 "（Doe 2000a-c，e）"。

​ "locator" 变量总是使用一个短划线代替任意的连字符。 对 "page" 变量来说，只有 `cs:style` 中的 `page-ran ge-format` 属性被设置时，替换才会执行（见 [页码范围](#范围分隔符)）。

### 格式化

​ 下面的属性可以在 `cs:date`, `cs:date-part`, `cs:et-al`, `cs:group`, `cs:label`, `cs:layout`, `cs:name`, `cs:name-part`, `cs:names`, `cs:number` 和 `cs:text` 中设置：

`font-style`

用来设置字体，可能的值为：

- "normal" 默认
- "italic" 设置文字的斜体
- "oblique" 设置没有斜体的文字倾斜

`font-variant`

Allows for the use of small capitals, 值可以设置为:

- "normal" 默认
- "small-caps"

`font-weight`

设置字宽，值可以为：

- "normal" 默认
- "bold"
- "light"

`text-decoration`

设置下划线，值可以为：

- "none" 默认
- "underline"

`vertical-align`

设置垂直对齐，值可以为：

- "baseline" 默认
- "sup" 上标
- "sub" 下标

### 词缀

​ 前缀属性 `prefix` 和后缀属性 `suffix` 可以在 `cs:date`（使用 `cs:date` 定义本地化格式除外），`cs:date-part`（`cs:date` 调用本地化格式除外）、`cs:group`、`cs:label`、`cs:layout`、`cs:name`、`cs:names`、`cs:number` 以及 `cs:text` 中设置。属性值用来在输出的前面或者后面添加东西，但是只有输出的时候才会渲染。除在 `cs:layout` 中设置外，词缀将出现在同一个元素的 [格式化](#格式化)、[引用](#引用-quotes)、[strip-periods](#strip-periods) 和 [text-case](#文字大小写) 的影响范围的外面，也就是这些属性的设置对前缀和后缀没有影响。作为一种解决方法，在父元素 `cs:group` 中设置上述属性，会产生影响。

### 分隔符 delimiter

​ `delimiter` 属性可以在 `cs:date`（用来分隔日期的各部分，如年和月；在 `cs:date` 调用本地化格日期格式时，分隔符将被禁用）、`cs:name`（分隔名字变量中不同的名字列表）、`cs:name`（分隔名字列表中的名字）、`cs:group` 以及 `cs;layout`（分隔子元素的输出）中设置分隔符。

### 显示 display

`display` 属性可用于将各个参考文献条目构成一个或者多个文本块。如果使用该属性，所有的渲染元素都在该属性的控制下。（译注：是用来设置对齐效果的）属性可能的值为：

- "block" - 两边对其
- "left-margin" - 左对齐。
- "right-inline" - 右对齐
- "indent" - 缩进。

**例**

A. 除使用 `second-field-align` 外，使用 `"left-margin"` 和 `"roght-inline"` 可以实现相同的渲染效果。这种操作方式潜在的好处是，可以在最终的输出中进一步控制块的格式，例如，在 HTML 的 CSS 或者 Word 的样式中。

```xml
<bibliography>
  <layout>
    <text display="left-margin" variable="citation-number"
        prefix="[" suffix="]"/>
    <group display="right-inline">
      <!-- rendering elements -->
    </group>
  </layout>
</bibliography>
```

B. 每个作者的出版物列表。当 `subsequent-author-substitute` 设置为空字符串时，具有相同作者的条目的作者名字只渲染一次。

```xml
<bibliography subsequent-author-substitute="">
  <sort>
    <key variable="author"/>
    <key variable="issued"/>
  </sort>
  <layout>
    <group display="block">
      <names variable="author"/>
    </group>
    <group display="left-margin">
      <date variable="issued">
        <date-part name="year" />
      </date>
    </group>
    <group display="right-inline">
      <text variable="title"/>
    </group>
  </layout>
</bibliography>
```

渲染结果将类似下面：

| Author1           |                    |
| ----------------- | ------------------ |
| year-publication1 | title-publication1 |
| year-publication2 | title-publication2 |
| Author2           |                    |
| year-publication3 | title-publication3 |
| year-publication4 | title-publication4 |

C. 带有注释的条目，注释显示在参下方的缩进块中。

```xml
<bibliography>
  <layout>
    <group display="block">
      <!-- rendering elements -->
    </group>
    <text display="indent" variable="abstract" />
  </layout>
</bibliography>
```

### 引用 quotes

​ `quotes` 属性可以在 `cs:text` 中设置。当设置为 `"true"` 时（默认为 `"false"`），渲染文本将会被包含在引用中。本地化的 `punctuation-in-quote` 选项控制用来连接的逗号或者句号是出现在引号的内部还是外部（默认外部），见 [Locale options](#Locale options)。

### Strip-periods

​ `strip-periods` 属性可以在 `cs:label` 或者 `cd:text` 中设置，此外，当 `name` 被设置为 `"month"` 时，也可以在 `cs:date-part` 中设置。当该属性被设置为 `true` 的时候（默认的是 `"false"`），所有文本中的句号（英文中为点）将会被删除。

### 文字大小写

​ `text-case` 属性可以在 `cs:date`,`cs:date-part`,`cs:label`,`cs:name-part`,`cs:number` 和 `cs:text` 中设置，可设置的值为：

- "lowercase": 使用小写字母渲染文本
- "uppercase": 使用大写字母渲染文本
- "capitalize-first": 如果第一个词是小写的，将首字母设置为大写
- "capitalize-all": 将每个小写词的首字母设置为大写
- "sentence": renders text in sentence case(以句子的格式设置？)
- "title": renders text in title case(以标题的格式来设置？)

#### 句子大小写转换

句子大小写转换 (在 "Text-case" 中设置为 "sentence"),

1. 对于大写字符串，字符串的第一个字符保持为大写。其它字母表示为小写
2. 对于大小写混合的字符串，如果单词是小写，第一个单词的首字符大写，其它所有单词的大小写保持不变。

CSL 处理器不能识别专有名词。因此，可以将句子大小写的字符转缺的转换为标题大小写，反之亦然。因此，通常最好在句子大小写的情况下存储注入标题之类的字符串，并且仅在样式需要其它大小写的情况下菜使用文本大小写。

#### 标题大小写转换

标题大小写转换 (在 "Text-case" 中设置为 "title") 对英语来说：

1. 对大写的字符串，每个单词的第一个字母保持大写，其它的字母保持小写。
2. 对于小写或者是混合的字符串，每个小写字符串的首字母大写。大写的字符串或者是混合的字符串保持原样。

两种情况下，`stop words` 必须是小写的，除非他们是第一个或者对后一个单词，或者跟在冒号后面。`stop words` 包括：`"a", "an", "and", "as", "at", "but", "by", "down", "for", "from", "in", "into", "nor", "of", "on", "onto", "or", "over", "so", "the", "till", "to", "up", "via", "with",  "yet"`.

**非英语项目**

​ 由于许多语言不使用标题大小写，标题大小写转换 (在 "Text-case" 中设置为 "title") 仅影响英语项目。

​ 如果 `cs:style` 中的 `default-locale` 属性没有设置，或者设置为 `en` 开头的单词，则假定为英语环境。如果某项的元数据包含一个语言字段，而且该字段不是以 `"en"` 开头的，才被视为是非英语环境。

​ 同样的，`default-locale` 被这是为除 `en` 开头的字段，就假定为非英语。如果项目是以 `en` 开头的字段，就被视为是英语。

## 附录 I 学科分类

::: note WIP
此小节正在施工中
:::

- anthropology 人类学
- astronomy 天文学
- biology 生物学
- botany 植物学
- chemistry 化学
- communications 通讯
- engineering 工程学
- generic-base - used for generic styles like Harvard and APA 通用基础 - 用于通用样式，像哈弗和 `APA`
- geography 地理学
- geology 地质学
- history 历史
- humanities 人文学科
- law 法学
- linguistics 语言学
- literature 文学
- math 数学
- medicine 药物学
- philosophy 哲学
- physics 物理学
- political_science 政治科学
- psychology 心理学
- science 科学
- social_science 社会科学
- sociology 社会学
- theology 神学
- zoology 动物学

## 附录 II 术语

::: note WIP
此小节正在施工中
:::

术语在本地化文件中使用

### Locators 用来定位的术语

- book 书
- chapter 章
- column
- figure 图
- folio 作品集
- issue 议题/问题
- line 行
- note 笔记/注记
- opus 作品（音乐作品）
- page 页
- paragraph 段
- part 部分
- section 节
- sub verbo 词条
- verse 诗
- volume 卷

### Months 月

- month-01
- month-02
- month-03
- month-04
- month-05
- month-06
- month-07
- month-08
- month-09
- month-10
- month-11
- month-12

### Ordinals 序数

- ordinal
- ordinal-00 through ordinal-99
- long-ordinal-01
- long-ordinal-02
- long-ordinal-03
- long-ordinal-04
- long-ordinal-05
- long-ordinal-06
- long-ordinal-07
- long-ordinal-08
- long-ordinal-09
- long-ordinal-10

### Quotation marks 引号

- open-quote
- close-quote
- open-inner-quote
- close-inner-quote

### Roles 角色

- author 作者
- collection-editor 文集编辑
- composer 作曲者
- container-author 文章作者
- director 主任/导演
- editor 编辑
- editorial-director 编辑部主任
- editortranslator
- illustrator 插画者
- interviewer 采访者
- original-author 原作者
- recipient 收件人
- reviewed-author 复查作者
- translator 译者

### Seasons 季节

- season-01
- season-02
- season-03
- season-04

### Miscellaneous 其他

- accessed
- ad
- and
- and others
- anonymous
- at
- available at
- bc
- by
- circa
- cited
- edition
- et-al
- forthcoming
- from
- ibid
- in
- in press
- internet
- interview
- letter
- no date
- online
- presented at
- reference
- retrieved
- scale
- version

## 附录 III 文献类型

::: note WIP
此小节正在施工中
:::

- article 文章
- article-magazine 杂志文章
- article-newspaper 新闻文章
- article-journal 期刊文章
- bill
- book 书
- broadcast
- chapter 章节
- dataset 数据集
- entry
- entry-dictionary
- entry-encyclopedia
- figure 图
- graphic
- interview 采访
- legislation
- legal_case
- manuscript
- map 地图
- motion_picture
- musical_score
- pamphlet
- paper-conference
- patent
- post 海报
- post-weblog
- personal_communication 私人交流
- report 报告
- review
- review-book
- song 歌曲
- speech 演讲
- thesis 学位论文
- treaty
- webpage 网页

## 附录 IV 变量

::: note WIP
此小节正在施工中
:::

### 标准变量

- abstract 项目的摘要（例：期刊文章的摘要）

- annote 读者关于项目内容的笔记

- archive 保存项目的存档

- archive_location 存档的位置

- archive-place 存档的地理位置

- authority

- call-number

  call number (to locate the item in a library)

- citation-label

  label identifying the item in in-text citations of label styles (e.g. "Ferr78"). May be assigned by the CSL processor based on item metadata.

- citation-number

  index (starting at 1) of the cited reference in the bibliography (generated by the CSL processor)

- collection-title

  title of the collection holding the item (e.g. the series title for a book)

- container-title

  title of the container holding the item (e.g. the book title for a book chapter, the journal title for a journal article)

- container-title-short

  short/abbreviated form of "container-title" (also accessible through the "short" form of the "container-title" variable)

- dimensions

  physical (e.g. size) or temporal (e.g. running time) dimensions of the item

- DOI

  Digital Object Identifier (e.g. "10.1128/AEM.02591-07")

- event

  name of the related event (e.g. the conference name when citing a conference paper)

- event-place

  geographic location of the related event (e.g. "Amsterdam, the Netherlands")

- first-reference-note-number

  number of a preceding note containing the first reference to the item. Assigned by the CSL processor. The variable holds no value for non-note-based styles, or when the item hasn’t been cited in any preceding notes.

- genre

  class, type or genre of the item (e.g. "adventure" for an adventure movie, "PhD dissertation" for a PhD thesis)

- ISBN

  International Standard Book Number

- ISSN

  International Standard Serial Number

- jurisdiction

  geographic scope of relevance (e.g. "US" for a US patent)

- keyword 关键字

- locator

  a cite-specific pinpointer within the item (e.g. a page number within a book, or a volume in a multi-volume work). Must be accompanied in the input data by a label indicating the locator type (see the [Locators](https://docs.citationstyles.org/en/stable/specification.html#locators) term list), which determines which term is rendered by `cs:label` when the "locator" variable is selected.

- medium

  medium description (e.g. "CD", "DVD", etc.)

- note

  (short) inline note giving additional item details (e.g. a concise summary or commentary)

- original-publisher

  original publisher, for items that have been republished by a different publisher

- original-publisher-place

  geographic location of the original publisher (e.g. "London, UK")

- original-title 最初版本的题目

- page 项目的页码范围

- page-first 页码范围的第一个页码

- PMCID

  PubMed Central reference number

- PMID

  PubMed reference number

- publisher 出版商/出版社

- publisher-place 出版社的地理位置

- references

  resources related to the procedural history of a legal case

- reviewed-title

  title of the item reviewed by the current item

- scale

  scale of e.g. a map

- section

  container section holding the item (e.g. "politics" for a newspaper article)

- source

  from whence the item originates (e.g. a library catalog or database)

- status

  (publication) status of the item (e.g. "forthcoming")

- title

  primary title of the item

- title-short

  short/abbreviated form of "title" (also accessible through the "short" form of the "title" variable)

- URL 链接

- version 版本

- year-suffix

  disambiguating year suffix in author-date styles (e.g. "a" in "Doe, 1999a")

### 数字变量

Number variables are a subset of the [Standard Variables](https://docs.citationstyles.org/en/stable/specification.html#standard-variables).

- chapter-number

  章序号

- collection-number

  number identifying the collection holding the item (e.g. the series number for a book)

- edition

  版本序号（注意和 version 的区别）

- issue

  (container) issue holding the item (e.g. "5" when citing a journal article from journal volume 2, issue 5)

- number

  number identifying the item (e.g. a report number)

- number-of-pages

  引用项目的总的页数

- number-of-volumes

  total number of volumes, usable for citing multi-volume books and such

- volume

  (container) volume holding the item (e.g. "2" when citing a chapter from book volume 2)

### 日期变量

- accessed

  date the item has been accessed

- container

  ?

- event-date

  date the related event took place

- issued

  date the item was issued/published

- original-date

  (issue) date of the original version

- submitted

  date the item (e.g. a manuscript) has been submitted for publication

### 名字变量

- author

- collection-editor

  editor of the collection holding the item (e.g. the series editor for a book)

- composer

  composer (e.g. of a musical score)

- container-author

  author of the container holding the item (e.g. the book author for a book chapter)

- director

  director (e.g. of a film)

- editor

- editorial-director

  managing editor ("Directeur de la Publication" in French)

- illustrator

  illustrator (e.g. of a children’s book)

- interviewer

  interviewer (e.g. of an interview)

- original-author

- recipient

  recipient (e.g. of a letter)

- reviewed-author

  author of the item reviewed by the current item

- translator

## 附录 V 页码范围格式

::: note WIP
此小节正在施工中
:::

`cs:style` 元素中的 `page-range-format` 表示了页码的缩写规则，其取值可能是：

`"chicago"`

| 第一个数字                               | 第二个数字                                         | 例                                   |
| ---------------------------------------- | -------------------------------------------------- | ------------------------------------ |
| 小于 100                                 | 使用所有的位数                                     | 3–10; 71–72                          |
| 100 或者 100 的整数                      | 使用所有的位数                                     | 100–104; 600–613; 1100–1123          |
| 100 到 109 （包括对应 100 的倍数的范围） | 仅使用有变化的部分，忽略不需要的 0                 | 107–8; 505–17; 1002–6                |
| 110 到 199 （包括对应 100 的倍数的范围） | 根据需要使用两位数或者更多                         | 321–25; 415–532; 11564–68; 13792–803 |
| 4 位数                                   | 如果数字是 4 位并且其中有 3 位不同，使用所有的位数 | 1496–1504; 2787–2816                 |

`"expanded"`

​ 扩展模式，不适用缩写。eg. 42–45、321–328、2787–2816

`"minimal"`

​ 第二个数字中重复的所有数字都被省略：42–5，321–8，2787–816

`"minimal-two"`

​ 和 `"minimal"` 类似，但当第二个数字有两个或者两个以上的数字时，第二个数字至少保留两位。

## 附录 VI 链接

::: note WIP
此小节正在施工中
:::

The CSL syntax does not have support for configuration of links. However, processors should include links on bibliographic references, using the following rules:

If the bibliography entry for an item renders any of the following identifiers, the identifier should be anchored as a link, with the target of the link as follows:

1. `url`: output as is
2. `doi`: prepend with “[https://doi.org/](https://doi.org/)”
3. `pmid`: prepend with “[https://www.ncbi.nlm.nih.gov/pubmed/](https://www.ncbi.nlm.nih.gov/pubmed/)”
4. `pmcid`: prepend with “[https://www.ncbi.nlm.nih.gov/pmc/articles/](https://www.ncbi.nlm.nih.gov/pmc/articles/)”

If the identifier is rendered as a URI, include rendered URI components (e.g. “[https://doi.org/](https://doi.org/)”) in the link anchor. Do not include any other affix text in the link anchor (e.g. “Available from: “, “doi: “, “PMID: “).

Citation processors should include an option flag for calling applications to disable bibliography linking behavior.
