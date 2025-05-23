---
title: CSL 1.0.2 规范
order: 2
date: 2022-08-01 16:55:26
updated: 2023-07-22 20:49:04
---

# CSL 1.0.2 规范

主要作者：[Rintze M. Zelle, PhD](https://twitter.com/rintzezelle)、 [Brenton M. Wiernik](https://twitter.com/bmwiernik)、Frank G. Bennett, Jr.、 Bruce D’Arcus、Denis Maier

其他贡献者：Julien Gonzalez、Sebastian Karcher、Sylvester Keil、Cormac Relf、Lars Willighagen and other CSL contributors.

译者：[Mao Zhou](https://github.com/ZMAlt)、 [Northword](https://github.com/northword)、[jiaojiaodubai](https://github.com/jiaojiaodubai)。

此工作以  [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/) 授权。

## 介绍

引注样式语言（Citation Style Language，CSL）是一种基于 [XML](./xml-basic.md) 的格式，用于描述引注、注释和参考文献表的格式，它带来了：

- 一种开放（开源）的格式
- 紧凑、稳定的样式
- 对样式需求的广泛支持
- 样式的自动本地化
- 对样式发布和更新的基本支持
- 数千种免费提供的样式（CC BY-SA 授权）

更多文档，如 CSL 纲要、样式和本地化，请访问 [CSL 项目主页](https://citationstyles.org/)。

## 术语

::: info 译者注

本节是英文文档中对所用情态动词的说明，本文已经将这些单词翻译为中文，读者可以直接跳过这部分。

:::

本文涉及的情态动词 MUST、MUST NOT、REQUIRED、SHALL、SHALL NOT、SHOULD、SHOULD NOT、RECOMMENDED、MAY 和 OPTIONAL 的含义按照 [IETF RFC 2119](http://tools.ietf.org/html/rfc2119) 中的描述来理解。

::: info IETF RFC 2119

国际互联网工程任务组（[The Internet Engineering Task Force](http://www.ietf.org/)，IETF）是一个致力于推动互联网可持续发展的国际组织。意见征求稿（[Request for Comments](https://www.ietf.org/standards/rfcs/)，RFC）是由 IETF 发布的技术文档，其中许多互联网技术协议已在互联网技术领域得到广泛应用。

现对 RFC 2119 的内容摘录如下：

**MUST**：必须。在规范中用于描述强制执行的规定。REQUIRED 和 SHALL 与它同义。

**MUST NOT**：不得。在规范中用于描述强制禁止的规定。SHALL NOT 与它同义。

**SHOULD**：建议。在特殊情况下，可能有合理的理由忽略所述事项，但在选择相悖的做法之前，必须充分认识其将造成的影响，并在采取行动前仔细权衡。RECOMMENDED 与它同义义。

**SHOULD NOT**：不建议。在特殊情况下，当特定行为可以接受、甚至只是有用的时候，可能有合理的理由去做所述事项，但在将本词组所述行为付诸实践之前，必须充分认识其将造成的影响，并在采取行动前仔细权衡。NOT RECOMMENDED 与它同义。

**MAY**：完全可选的事项，行为主体可以自行选择是否执行。OPTIONAL 与它同义。

:::

## 命名空间

CSL XML 命名空间的 URI 是 <http://purl.org/net/xbiblio/csl>。

::: info URI 和 URL

统一资源标识符（Uniform Resource Identifier，URI），是标识资源的字符序列，所谓「资源」既可以是实际存在的物理资源，也可以是虚拟的互联网资源，一个特定的 URI 对应一个确定的资源。

统一资源定位符（Uniform Resource Locator，URL），是用于定位和访问互联网资源的地址。URL 常被称为「网址」或「链接」，但应对此予以区分。

- 网址：「网址」是「网站地址」的简称，通常指一个网站的域名，如 Zotero 中文小组的网址是：<https://zotero-chinese.com>。
- URL：《Zotero 百科全书》是 Zotero 中文小组发布的资源，它首页的 URL 是 <https://zotero-chinese.com/user-guide>。
- 链接：链接是指向 URL 的东西，例如你点击本站左上角挂着中国结的[「Z」图标](https://zotero-chinese.com/logo.png) 时，你就能跳转到 Zotero 中文小组的 [主页](https://zotero-chinese.com)（网址的主页也是以互联网资源的形式呈现的），此时这个图标就是联系你和主页的「链接」。

显然，URL 是 一种限定了资源类型并提供了访问方式的 URI。

:::

当提及 CSL 元素时，本规范始终使用 `cs:` 作为命名空间前缀，但根元素 `cs:style` 或 `cs:locale` 则通常省略前缀，因为它们已经有（使用 `xlsns` 属性设置的）默认命名空间声明。

## 空格处理

CSL 样式是有效的 XML，但是对于那些旨在输出文本的属性，CSL 处理器不会通过修剪这些属性值前后的空格来满足规范化：

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

::: info 属性值规范化

XML 是对格式要求较为严格的标记语言，万维网联盟（The World Wide Web Consortium，W3C）在 [XML 1.0 推荐标准](https://www.w3.org/TR/xml/#AVNormalize) 和 [XML 1.1 推荐标准](https://www.w3.org/TR/2006/REC-xml11-20060816/#AVNormalize) 中要求 XML 的属性值需要满足一系列规范，其中提到：

> If the attribute type is not [CDATA](https://www.w3.org/TR/xml/#sec-cdata-sect), then the XML processor must further process the normalized attribute value by discarding any leading and trailing space (#x20) characters, and by replacing sequences of space (#x20) characters by a single space (#x20) character.

也就是说，对于不是 CDATA 类型的属性值（CSL 中的属性值就不属于 CDATA），W3C 的相关标准要求 XML 解析器必须进一步处理规范化后的属性值，包括去除属性值前后的空格、将连续的空格替换为一个空格。但上面列出的属性值有可能确实要输出前后带空格文本，因此 CSL 处理器将它们作为例外，不修剪它们前后的空格（但输出时仍会将多个连续空格规范化为一个空格）。

:::

## 文件类型

有 3 种 CSL 文件：独立样式和从属样式（都使用 `.csl` 作为扩展名），以及本地化文件（名为 `locales-xx-XX.xml`，其中 `xx-XX` 表示语言及其方言，例如 `en-US` 表示美式英语）。

::: info 译者注

这里的「方言」主要是依据世界各地区的词汇、字型和语法进行划分的。例如中国台湾地区使用繁体字，词汇习惯和大陆地区也有所不同，就划分为中文的一种方言（`zh-TW`）；除特别行政区外，中国各省市的口音虽有差异，但正式的书面语使用相同的词汇、字型和语法（即普通话），因此划分为同一种「方言」（`zh-CN`）。

:::

### 独立样式

独立样式包含了对引注、注释以及参考文献表的格式指令。虽然它们大多数都是自成一体的（即不依赖其他样式），但是区域化数据（默认）依赖于本地化文件。

### 从属样式

从属样式是独立样式的别名（alias），其内容仅限于样式元数据，不包括任何格式指令（唯一的例外是：从属样式可以重新指定样式区域）。

::: info 译者注

这里提到的「别名」并不意味着「从属样式就是独立样式的另一种叫法」。从属样式和独立样式是两个不同的概念，它们的代码结构也不同，但任何一个从属样式总是对应一个独立样式，并且采用那个独立样式的格式指令。因此从使用效果来看，某个从属样式就如同它所对应的那个独立样式。

:::

一些期刊（例如《Nature Biotechnology》、《Nature Nanotechnology》）具有相同引用格式，通过将这些期刊的从属样式链接到一个单独的独立样式（例如《Nature Journals》），就无需再重复同样的格式指令。

### 本地化文件

每个本地化文件包含一系列对某种特定方言的本地化数据（术语翻译、本地化日期格式以及语法选项）。

::: info 译者注

本地化文件使同一个 CSL 样式适用不同的语言环境，比如在中文环境中使用，中文的本地化文件可以将英文中的 `et al.` 替换为 `等` 。

:::

## XML 声明

每个样式或者本地化文件应该以 XML 声明开头，指定具体的 XML 版本以及字符编码。多数情况下，XML 声明可以是：

```xml
<?xml version="1.0" encoding="UTF-8"?>
```

::: info XML 声明的格式

XML 声明不属于 XML 元素，故其书写格式与元素有所不同，既不是 `<tag>…</tag>` 这样成对的结构，也不是 `<tag/>` 这样的自闭合结构。需要注意，XML 声明必须包含版本和编码属性，并且作为 XML 文件的第一个非空行出现。

:::

## 样式的结构

### 根元素—— `cs:style`

样式的根元素是 `cs:style`。在 [独立样式](#独立样式) 中，根元素有以下几种属性：

#### `class`

决定样式的 [引注格式](./primer.md#csstyle-根元素) 是 in-text 风格（值 `in-text`）还是 note 风格（值 `note`）。

::: info 译者注

in-text 表示引注在正文中，note 则表示引注不在正文中，可能是脚注等。

:::

#### `default-locale`（可选）

为样式的本地化设值默认的地区。取值必须是 [语言 - 地区代码](http://books.xmlschemata.org/relaxng/ch19-77191.html)。

::: tip 常用语言 - 地区代码

en-US：美式英语
zh-CN：中文（中国大陆）
zh-TW：中文（台湾）
zh：中文

更多语言 - 地区代码可以参阅 [语言代码参考手册](https://www.runoob.com/tags/html-language-codes.html) 和 [国家/地区参考手册](https://www.runoob.com/tags/ref-country-codes.html)。

:::

#### `version`

样式的 CSL 版本。对于兼容 CSL 1.0 的样式，其值必须设置为 `1.0`。

此外，`cs:style` 可以携带任意的 [全局选项](#全局选项) 和 [可继承的名称选项](#可继承的名称选项) 。

在这些属性中，只有 `version` 对于 [从属样式](#从属样式) 内的 `cs:style` 是必须的，而 `default-locale` 属性则可以用来设置样式的地区。`cs:style` 还有其他属性可以设置，但此处先省略。

下面是一个 [独立样式](#独立样式) 的 `cs:style` 示例，其位于 XML 声明之后：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<style xmlns="http://purl.org/net/xbiblio/csl" version="1.0" class="in-text" default-locale="fr-FR"/>
```

### `cs:style` 的子元素

在 [独立样式](#独立样式) 中，`cs:style` 有以下子元素：

#### `cs:info`

必须作为 `cs:style` 的第一个子元素出现。用以容纳样式的元数据（样式的名称、样式 ID、作者等）。

#### `cs:citation`

必须出现一次。用于描述 in-text 引注或者 notes 的格式。

#### `cs:bibliography`（可选）

可能会出现一次。描述参考文献表的格式。

`cs:macro`（可选）

可能出现多次。宏使格式指令得以重复使用，令样式更加紧凑和易于维护。

`cs:locale`（可选）

可能出现多次。用于指定（重写）本地化数据。

在 [从属样式](#从属样式) 中，`cs:style` 只有一个子元素，即 `cs:info`。

#### 样式信息（Info）

`cs:info` 包含了样式的元数据。其结构基于 [Atom Syndication Format](http://tools.ietf.org/html/rfc4287)。

在独立样式中，`cs:info` 有下面的几个子元素：

##### `cs:author` 和 `cs:contributor`（可选）

`cs:author` 和 `cs:contributor` 分别用来致谢样式的作者和贡献者，可能被使用多次。使用这两个元素时，子元素 `cs:name` 必须出现一次，而 `cs:email` 和 `cs:uri` 和可能各出现一次。这些子元素应当分别包含作者或贡献者的姓名、电子邮箱和 URL。

##### `cs:category`（可选）

样式可以分配到一个或者多个类别。通过将 `citation-format` 属性设为以下的值的其中之一，`cs:category` 可以被使用一次，用于描述如何渲染正文中的引注

- `author-date` - 如「… (Doe, 1999)」
- `author` - 如「… (Doe)」
- `numeric` - 如「… [1]」
- `label` - 如「… [doe99]」
- `note` - 引注将以脚注或尾注的形式出现。

`cs:categroy` 也可以在携带 `field` 属性时被多次使用，用来对学科进行分类（见 [附录 I 学科分类](#附录-i-学科分类)）。

##### `cs:id`

必须出现一次，并且包含一个稳定、唯一的标识符来确定样式的身份。出于历史原因，目前的样式可能使用 URI 作为 id，但新的样式应当使用 UUID 来保证稳定性和唯一性。

##### `cs:issn/cs:essn/cs:issnl`（可选）

`cs:issn` 元素可以被多次使用，用来指出该样式所对应期刊的 ISSN 码。`cs:eissn` 和 `cs:issnl` 可以分别被使用一次，用来表示相应的 eISSN 和 [ISSN-L](http://www.issn.org/2-22637-What-is-an-ISSN-L.php) 。

##### `cs:link`（可选）

可以被多次使用。`cs:link` 必须携带两个属性：`href` 用来设置 URI（通常情况下为 URL），`rel` 的值表示该 URI 与当前样式的关系。`rel` 可能的值为：

- `self` - 样式本身的 URI
- `template` - 当前样式源自某个模板，这是那个模板的 URI
- `documentation` - 样式说明文档的 URI

##### `cs:published`（可选）

可能出现一次。`cs:published` 的内容必须是一个 [时间戳](http://books.xmlschemata.org/relaxng/ch19-77049.html)，用来表明样式创建的时间或者可获得的时间。

##### `cs:rights`（可选）

可能出现一次。`cs:rights` 的内容指定了该样式在哪一个版权协议下发布。这个元素可能会会携带一个 `license` 属性来明确协议的 URI。

##### `cs:summary`（可选）

可能出现一次。`cs:summary` 的内容给出了该样式的（简短）描述。

##### `cs:title`

必须出现一次。`cs:title` 的内容应当是该样式展示给用户的名称。

##### `cs:title-short`（可选）

可能出现一次。`cs:title-short` 的内容应当是样式名的简称（例如「APA」）。

##### `cs:updated`

必须出现一次。`cs:updated` 的内容是一个 [时间戳](http://books.xmlschemata.org/relaxng/ch19-77049.html)，用来表示该样式最后更新的时间。

`cs:link`，`cs:rights`，`cs:summary`， `cs:title` 和 `cs:title-short` 元素可以携带 `xml:lang` 属性用来表示元素内容的语言（其值必须是一个 [语言 - 地区代码](http://books.xmlschemata.org/relaxng/ch19-77191.html)）。对于 `cs:link`，该属性也可以用来表示链接目标的语言。

在从属样式中，独立父样式的 URI 时设置到 `cs:link` 的 `href` 属性时，`cs:link` 的 `rel` 属性必须设置为 `independent-parent`。此外，从属样式的 `ref` 不能设置为 `template`。

下面是一个独立样式的 `cs:info` 的例子：

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

#### 引注（Citation）

引注由一个或多个参考信息源的引用组成，`cs:citation` 元素描述了引注的格式。引注的形式可能是 in-text 风格（`author` 例如「Doe」、`author-date`例如「Doe 1999」、`label` 例如「doe99」，或者 `number`例如「1」）或者 notes 风格。必要的 `cs:layout` 子元素描述了引注中什么样的参考文献数据应该怎么被引用（见 [Layout](#布局layout) ）。在 `cs:layout` 之前可能会有 `cs:sort` 元素，它可以用来确定一个引注中的引用应该如何排序（见 [排序](#排序)）。此外，`cs:style` 可能携带任意的 [引注选项](#引注选项) 和 [可继承的名称选项](#可继承的名称选项) 中的属性。下面是一个 `cs:citation` 元素的例子：

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

**CSL 处理器开发者注意**

在 note 风格中，引注通常是一个自成一体的句子。因此，当注释前面没有内容时，引注的首字母最好大写。在其他情况下（例如，当一个引注被插入到一个已经存在的脚注的后面），引注应该保持原样输出。

#### 参考文献表（Bioliography）

`cs:bioliography` 元素描述了参考文献表的格式，而参考文献表则列出了一个或多个参考信息源。必要的 `cs:layout` 子元素描述了每一个参考文献条目应当如何被格式化。`cs:layout` 之前可能会前置一个 `cs:sort` 元素，该元素可用于指定参考文献表内的参考文献应当如何被排序（见[排序](#排序)）。`cs:bibliography` 可能携带任意的 [参考文献表选项](#参考文献表选项) 和 [可继承名称选项](#可继承的名称选项) 中的属性。下面是一个 `cs:bioliography` 的例子：

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

#### 宏（Macro）

使用 `cs:macro` 元素定义的宏包含了格式化指令。宏可以被 `cs:text` 调用，而这个 `cs:text` 可能来自其他宏、`cs:citation` 和 `cs:bioliography` 内的 `cs:layout` 元素、位于 `cs:citation` 和 `cs:bioliography` 内的 `cs:sort` 的 `cs:key`。建议将宏放置在 `cs:locale` 元素之后以及 `cs:citation` 元素之前。

宏通过 `cs:macro` 的必要属性 `name` 的值来调用。`cs:macro` 必须包含一个或者多个 [渲染元素](#渲染元素)。

使用宏可以提高样式的可读性、紧凑性和可维护性。建议通过过宏调用来实现 `cs:citation` 和 `cs:bioliography` 的内容的紧凑性以及某种条目类型（例如图书、期刊等）的定义。为了在其他样式中方便地复用宏，建议使用通用的宏名称。

下面是一个实例：引用中包含条目标题，当条目类型为 `book` 时，标题以意大利体渲染。

::: info Italics 和 Slanted

由于「意大利体」（Italics）风格的字体略微倾斜，因而又常常被称为「斜体」。但「意大利体」和「斜体」（Slanted）之间有一些区别，详细讨论可参考 [此处](https://tex.stackexchange.com/questions/68931/what-is-the-difference-between-italics-and-slanted-tex)。简而言之，「意大利体」是一种接近手写的字体风格，类似中文里的「楷体」，与之相提并论的「罗马体」则类似中文里的「宋体」，而「斜体」仅表示在某种字体的基础上增加倾斜效果。

:::

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

任何来自外层元素的分隔符都不会应用到 `<text macro="...">` 元素的输出内（见 [分隔符](#分隔符delimiter)）。

::: tip 什么时候使用宏？

宏的作用在于命名一段较长的代码，之后就可以使用这个名称来引用这段代码。利用好宏的特性，可以让你的样式文件更加简洁易读。可以考虑在两种情况下使用宏：

- 当一段代码需要被重复使用时。例如，我们往往会为文献作者、标题、日期创建一个宏，这样在不同的文献类型的格式指令中就不需要再重复书写相同的代码。
- 当一段代码的逻辑比较复杂时。例如，为复杂的排序变量创建一个宏，这样我们就可以避免在排序变量中书写复杂的表达式而影响代码的可读性。

:::

#### 本地化（Locale）

默认来自本地化文件「locales-xx-XX.xml」的本地化数据可以通过 `cs:locale` 元素重新定义或者补充定义。`cs:locale` 元素应该直接放在 `cs:info` 元素之后。

`cs:locale` 元素的可选属性 `xml:lang` 必须设置为 [语言 - 地区代码](http://books.xmlschemata.org/relaxng/ch19-77191.html)，用于确定样式受哪种语言或方言影响（见[地区回退](#地区回退)）。

对于 `cs:locale` 元素的更多使用细节，另见 [术语](#术语)、[本地化日期格式](#本地化的日期格式) 和 [本地化选项](#本地化选项)。

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

::: info HTML 字符实体

在上面的例子中，你可能注意到 `&amp;` 这段奇怪的文本，它其实是一个 [HTML 字符实体](https://developer.mozilla.org/zh-CN/docs/Glossary/Entity)。XML 和 HTML 等文件中使用一些字符（如 `<`、`>`等）来编写代码，但有时我们不得不显示这些字符，为了避免和正常的代码产生混淆，需要用 HTML 字符实体来代表这些字符，`&amp;` 就是字符 `&`对应的 HTML 字符实体。如果你编写的 CSL 样式文件无法被正常解析，可以排查一下是不是没有正确使用 HTML 字符实体来转述特殊字符。

:::

#### 地区回退

本地化文件为语言方言提供了本地化数据（例如「en-US」代表美式英语），而样式中可选的 `cs:locale` 元素可以省略 `xml:lang` 属性，或者设置为某种语言（如「en」代表英语）或方言而具备这一属性。地区回退是一种用于确定从上述哪一个数据源（本地化文件或 `cs:locale`）中检索可本地化单元（日期格式、本地化选项或者术语的特定形式）的机制。

对于同一种语言的方言，其中一种被定义为主要方言，其他则都是次级方言。截至本文档编辑前，包含次级方言的本地化文件包括：

| 主要方言          | 次级方言                       |
| ----------------- | ------------------------------ |
| de-DE（德语）     | de-AT（奥地利），de-CH（瑞士） |
| en-US（英语）     | en-GB（英国）                  |
| es-ES（西班牙语） | es-CL（智利），es-MX（墨西哥） |
| fr-FR（法语）     | fr-CA（加拿大）                |
| pt-PT（葡萄牙语） | pt-BR（巴西）                  |
| zh-CN（中文）     | zh-TW（台湾）                  |

用一个例子来解释地区回退再好不过了。如果所选的使用地区为「de-AT」（奥地利），本地化单元分别来自下面的源（优先级逐渐降低）：

A. 样式内的 `cs:locale` 元素

- `xml:lang` 设置为所选的方言 `de-AT`
- `xml:lang` 设置为对应的语言 `de`（德语）
- `xml:lang` 不设置

B. 本地化文件

- `xml:lang` 设置为所选的方言 `de-AT`
- `xml:lang` 设置为对应的主要方言 `de-DE` (标准德语)（仅在所选地区是次级语言时可以应用）
- `xml:lang` 设置为 `en-US`（美式英语）

也就是说，如果已选择的输出地区是一种语言（例如「de」），则首先采用（主要）方言（例如「de-DE」）作为可本地化单元的输出源。

一旦某个可本地化单元被找到，回退就会停止。对于术语来说，当它们被设置为空字符串（例如 `<term name="and"/>` 或者 `<term name="and"></term>`）的时候也满足这个规则。地区回退在术语形式的回退之前进行（见 [术语](#术语)）。

::: info Fallback

Fallback（回退）是一种经常在编程中使用的机制，即准备一系列方案（A、B、C…），并预先设定方案的优先级，当 A 方案失效时就自动采用 B 方案……依此类推。

CSL 样式设计为可以兼容不同地区的语言表达习惯，本地化就是将日期或术语表达为当地的形式。在地区回退的各种方案中，越具体的方案优先级越高，如样式文件中 `xml:lang` 设置为方言 `de-AT` 的优先级是最高的，因为它的作用范围具体到当前样式，且目标语言具体到某个地区。

:::

## 本地化文件的结构

尽管本地化数据可以放在样式中 (见 [Locale](#本地化locale))，但本地化文件方便地提供了包括术语、日期格式以及语法选项在内的一整套默认本地化数据。

每个本地化文件包含一种语言方言的本地化数据。这种方言的 [语言 - 地区代码](http://books.xmlschemata.org/relaxng/ch19-77191.html) 设置在根元素 `cs:locale` 的必要属性 `xml:lang` 之上。还必须把同样的 [语言 - 地区代码](http://books.xmlschemata.org/relaxng/ch19-77191.html) 用作本地化文件的文件名（代码 `xx-XX` 对应的文件名为 `locales-xx-XX.xml`）。此外，根元素必须携带 `version` 属性，以表明本地化文件的 CSL 版本（对 CSL 1.0 兼容的本地化文件，其值必须设为 `1.0`）。本地化文件和样式一样需要 [命名空间](#命名空间)。`cs:locale` 元素可能包含 `cs:info` 作为其第一个子元素，同时还需要 `cs:terms`、`cs:date` 和 `cs:style-options` 子元素。下面是一个本地化文件的部分示例：

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

### 文件信息（Info）

`cs:info` 元素可以用来给出本地化文件的元数据。它具有以下子元素：

#### `cs:translator`（可选）

​ `cs:translator` 用来向本地化文件的翻译者致谢，可以使用多次。在这个元素中，子元素 `cs:name` 必须出现一次，而 `cs:email` 和 `cs:uri` 可能各出现一次。这些子元素应该分别包括翻译者的名字、邮箱地址和 URI。

#### `cs:rights`（可选）

可能出现一次。`cs:rights` 的内容指定了本地化文件在哪一个版权协议下发布。该元素可能会携带一个 `license` 属性来指定上述协议的 URI，`xml:lang` 属性则用来指定元素内容的语言（其值必须是 [语言 - 地区代码](http://books.xmlschemata.org/relaxng/ch19-77191.html)）。

#### `cs:updates`（可选）

可能出现一次。​`cs:updated` 的内容必须是一个用来指定本地化文件最后一次更新时间的[时间戳](http://books.xmlschemata.org/relaxng/ch19-77049.html)。

### 术语容器（Terms）

术语是本地化的字符串（比如，通过使用 `and` 术语，当样式的使用地区从英语切换至德语时，`Doe and Smith` 会自动变为 `Doe und Smith`）。术语使用 `cs:terms` 元素的子元素 `cs:term` 元素定义。每个 `cs:term` 元素必须携带一个 `name` 属性，其属性值可以设置为 [附录 II 术语](#附录-ii-术语) 列表中的值。

术语可以直接在 `cs:term` 的内容中定义，或者在需要单数和复数形式（例如「page」和「pages」）的情况下可以分别在子元素 `cs:single` 和 `cs:multiple` 中定义。

术语可以使用带有可选属性 `form` 的 `cs:term` 来设置特定形式，`form` 属性可以设置为：

- `long` - （默认），例如「editors」和「editor」相对于术语 `editor`
- `short` - 例如「ed.」和「eds.」相对于术语 `editor`
- `verb` - 例如「edited by」相对于术语 `editor`
- `verb-short` - 例如「ed.」相对于术语 `editor`
- `symbol` - 例如「§」和「§§」相对于术语 `section`

如果样式使用了未定义的术语形式（即使经过 [地区回退](#地区回退) 仍未发现定义），则这个术语会回退到其他形式，比如 `werb-short` 会回退到 `verb`，`symbol` 会回退到 `short`，`verb` 和 `short` 都会回退到 `long`。此外，术语 `long-ordinal-01` 到 `long-ordinal-10` 回退到序数后缀术语。如果没有可用的地区回退或者词形回退，则术语渲染为空字符串。

可以在 `cs:term` 中使用 `match`，`gender` 和 `gender-form` 属性来设置数字变量渲染为序数（比如，`first`，`2nd`）时的格式。具体见下面的 [序数后缀](#序数后缀) 和 [性别决定的序数](#性别决定的序数)。

术语的内容不应包含类似 Latex 或 HTML 这样的标记。[Unicode 上标字符](http://unicode.org/reports/tr30/datafiles/SuperscriptFolding.txt) 可以作为上标使用。

#### 序数后缀

数字变量可以随 `cs:number` 以 `ordinal` 形式（即序数形式）渲染，比如：`2nd`（见 [数字](#数字number)）。序数后缀（对 `2nd` 而言是 `nd`）通过术语来定义。

`ordinal` 术语定义了默认的序数后缀，但这些默认的后缀可以被下面的术语对某些数字进行覆盖：

- `ordinal-00` 到 `ordinal-09` - 默认地，当术语名称的最后一位数字与要渲染的数字的最后一位相同时，将使用在这个范围内的后缀术语。比如：`ordinal-00` 能够匹配数字 0、10、20 等等。通过设置属性 `match` 为 `ast-two-digits`（默认为 `last-digit`），匹配范围将为变为两位，例如：0、100、200 等。当 `match` 术语设置为 `whole-number` 时，只有术语与要渲染的数字完全相同时，才会适用这个范围内的后缀。
- `ordinal-10` 到 `ordinal-99`- 默认地，当要渲染的数字的最后两位和术语中相同时，使用这个范围的后缀术语。当 `match` 属性设置为 `whole-number` 时（默认为 `last-two-digits`），只有术语与要渲染的数字完全相同时，才会适用这个范围内的后缀。

当要渲染的数字与上面的两组术语都匹配时（比如：`13` 可以同时匹配 `ordinal-03` 和 `ordinal-13`），则采用 `ordinal-10` 到 `ordinal-99` 分组内的术语。

序数术语在 CSL 1.0 中的表现和 CSL 1.0.1 及之后的版本中的有所不同。当样式和本地化文件中都没有定义 `ordinal` 术语，但是定义了 `ordinal-00` 到 `ordinal-04`，CSL 1.0 采用的方案是：`orginal-01` 用于以 `1` 结尾的数字（以 `11` 结尾的数字除外），`ordinal-02` 用于以 `2` 结尾的数字（以 `12` 结尾的数字除外），`ordinal -03` 表示以 `3` 结尾（以 `13` 结尾的数字除外），`ordinal-04` 表示所有其他数字。

当进行到 [地区回退](#地区回退)，`ordinal` 术语、`ordinal-00` 到 `ordinal-99` 的术语的表现和其他术语有所不同。其他术语可以被单独地（重新）定义，但通过 `cs:locale` （重新）定义的任何序数术语都将替换先前已经定义过的序数术语。

::: info 译者注

以上关于序数后缀的特性主要是考虑到了英语中序数「1st, 2nd, 3rd, nth…」的表达方式。英语的数字 - 序数转换已经内置在 CSL 的本地化文件中，但中文的序数采用「第」作为前缀，因而无法用本节特性来实现，制作中文样式的读者可以不必细究以上内容。

:::

#### 长序数

数字变量可以随 `cs:number` 以 `long-ordinal` 形式渲染，比如「second」（见 [数字](#数字number)）。长序数术语（对「2」而言是「second」）通过 `long-ordinal-01` 到 `long-ordinal-10` 的术语来定义。

长序数形式仅适用于数字 1 到 10。其他数字的 `long-ordinal` 形式会回退到 `ordinal`。

对于数字 1 到 10 的 `long-ordinal` 形式，`match` 属性始终被视为 `whole-nameber`。对于其他使用 `long-ordinal` 形式渲染的数字，可选的 `match` 属性的行为和 [序数后缀](#序数后缀) 中描述的一样（默认值为 `last-two-digits`）。

#### 性别决定的序数

一些语言使用性别决定的序数。例如，如果目标名词是阳性的，英语中的「1st」和「first」在法语中就翻译为「1er」和「premier」，如果目标名词是阴性的，就翻译为「1re」和「première」。

序数术语（见 [序数](#ordinals-序数)）中的阳性和阴性可以通过设置 `gender-form` 属性为 `feminine` 或 `masculine` 来指定（不含 `gender-form` 的术语表示中性）。这里涉及到两类目标名词：

1. [数字变量](#数字变量) 中附带的术语

2. 月份术语（见 [Months 月](#months-月)

这些名词的阴阳性可以通过在术语的 `long`（默认）形式上使用 `gender` 属性（设置为 `feminine` 或 `masculine`）来指定。当数字变量随 `cs:number` 渲染为 `ordinal` 或者 `long-ordinal` 形式时，序数词将使用原来的阴阳性，如果没有定义阳性或阴性变体，则回退到中性变体。当 `day` 日期成分以 `ordinal` 形式呈现时，日期序数的阴阳性和月份术语的阴阳性相匹配。

下面给出「1re éd.」（「1st ed.」）、「1er janvier」（「January 1st」）和「3e édition」（「3rd edition」）的示例：

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

### 本地化的日期格式

可以在 `cs:date` 中定义两种本地化的日期格式：一种是 `numeric`（例如「12-15-2005」），另一种是 `text`（例如「December 15, 2005」）。这些格式在带有必要属性 `form` 的 `cs:date` 元素中设置。

日期格式使用 `cs:date-part` 子元素来构造（见 [日期成分](#日期成分date-part)）。当 `cs:date-part` 的 `name` 属性设置为 `day`、`month` 或 `year` 时，这些元素的顺序会反映到对应的日、月和年的显示顺序上。可以在 `cs:date` 和 `cs:date-part` 元素上设置 [格式化](#格式化formatting) 和 [文本大小写](#文本大小写text-case) 属性来将日期格式化。可以在 `cs:date` 元素上设置 `delimiter` 属性以指定 `cs:date-part` 元素之间的分隔符，并且 [词缀](#词缀affixes) 也可以应用于 `cs:date-part` 元素。

**注意**：定义本地化日期格式时，不允许在 `cs:date` 上使用词缀。此限制是为了将语言环境决定的词缀（设置在 `cs：date-part` 元素上）与样式决定的词缀（设置在调用 `cs:date` 元素的元素上，例如括号）区分开。在宏中调用本地化日期格式的例子如下：

```xml
<macro name="issued">
 <date variable="issued" form="numeric" prefix="(" suffix=")"/>
</macro>
```

### 本地化的选项

本地化选项有两个，即 `limit-day-ordinals-to-day-1` 和 `punctuation-in-quote` （详见 [本地化选项](#本地化选项)）。这些全局选项（同时影响引注和参考文献表）在 `cs:style-options` 中被设置为可选属性。

## 渲染元素

渲染元素指定了在引注或参考文献表中需要包含哪些参考文献条目元数据，以及以何种方式排序，并对其格式进行控制。

### 布局（Layout）

`cs:layout` 渲染元素是 `cs:citation` 和 `cs:bibliography` 的必要子元素。`cs:layout` 必须包含一个或者多个渲染元素，并且可能携带 [词缀](#词缀affixes) 和 [格式化](#格式化formatting) 属性。在使用 `cs:citation` 时，[delimiter](#分隔符delimiter) 属性可以用来指定一个引注内不同引用的分隔符。例如：一个类似「(1, 2)」的引注可以使用下面的代码实现：

```xml
<citation>
  <layout prefix="(" suffix=")" delimiter=", ">
    <text variable="citation-number"/>
  </layout>
</citation>
```

### 文本（Text）

`cs:text` 渲染元素用来输出文本。其必须携带下列属性中的一个来确定渲染什么内容：

- `variable`- 渲染一个变量的文本内容。属性值必须是 [标准变量](#标准变量)。可以与 `form` 属性一起选择变量的 `long`（默认）或 `short` 形式（例如：设置标题或者短标题）。如果选择了 `short` 形式，但数据源却没有提供短标题，则以 `long` 形式渲染。
- `macro` - 渲染一个宏的输出文本。属性值必须和 `cs:macro` 元素（见 [宏](#宏macro)）的 `name` 属性值相匹配。
- `term` - 渲染一个术语。属性值必须是 [附录 II 术语](#附录-ii-术语) 的其中之一。可以连同 `pural` 属性来选择单数（默认为 `false`）或复数（默认为 `true`）形式的术语变量。还可以连同 `form` 属性来选择变量的 `long`（默认）、`short`、`verb`、`verb-shor` 或 `symbol` 形式（见 [术语](#术语)）。
- `value` - 渲染属性值本身。

一个 `cs:text` 渲染 `title` 变量的例子：

```xml
<text variable="title"/>
```

`cs:text` 可以携带 [词缀](#词缀affixes)、[显示](#显示display)、[格式化](#格式化formatting)、[引述](#引述quotes)、[剥除句点](#剥除句点strip-periods) 和 [文本大小写](#文本大小写text-case) 属性。

### 日期（Date）

`cs:date` 渲染元素随必要属性 `variable` 输出选自 [日期变量](#日期变量) 中的日期。日期可以渲染为本地化或者非本地化格式。

[本地化的日期格式](#本地化的日期格式) 通过可选的 `form` 属性进行选择，其值必须设置为 `numeric`（完全以数字表示的格式，例如「12-15-2005」）或者 `text`（含有非数字的月份格式，例如「December 15, 2005」）。本地化日期格式可以用两种方式进行自定义。第一种方式，可以使用 `date-parts` 属性来显示几个日期成分。其值可以设置为：

- `year-month-day` - （默认）渲染年、月、日
- `year-month` - 渲染年月
- `year` - 只渲染年

第二种方式，`cs:date` 可以含有一个或者多个 `cs:date-part` 子元素（见 [日期成分](#日期成分date-part)）。设置在这些元素之上的属性会覆盖那些本地化日期格式指定过的属性（例如：要对所有语言地区都输出缩写的月份，可以将月份 `cs:date-part` 元素的 `form` 属性设置为 `short`）。对于本地化日期格式而言，这些 `cs:date-part` 子元素并不能决定对应的日期成分是否会被渲染，也不决定该日期成分的渲染顺序。[词缀](#词缀affixes) 非常具有地区特色，因此不允许出现在 `cs:date-part` 元素中。

未设置属性 `form` 时，`cs:date` 则显示一个完备的非本地化日期格式。在这种情况下，其日期格式使用 `cs:date-part` 子元素来创建。在必要属性 `name` 属性设置为 `day`、`month` 或 `year` 时，这些元素的顺序对应地反应了日、月和年的显示顺序。可以通过在 `cs:date-part` 元素中使用 [格式化](#格式化formatting) 属性和若干个 `cs:date-part` 的特定属性（见 [日期成分](#日期成分date-part)）来将日期格式化。可以在 `cs:date` 上设置 [分隔符](#分隔符delimiter) 属性以设置 `cs:date-part` 元素不同日期成分的分隔符。此外，还可以在 `cs:date-part` 元素上应用 [词缀](#词缀affixes)。

对于本地化或非本地化的日期，`cs:date` 都可能携带 [词缀](#词缀affixes)、[显示](#显示display)、[格式化](#格式化formatting) 和 [文本大小写](#文本大小写text-case) 属性。

#### 日期成分（Date-part）

`cs:date-part` 元素控制日期的各个部分如何渲染。除非其父元素 `cs:date` 调用了本地化的日期格式，否则它们还能决定哪一个日期成分以何种顺序显示。`cs:date-part` 元素描述了必要属性 `name` 所选择的日期成分，可选的属性值为：

`day`

​ 对于 `day` 来说，`cs:date-part` 可以携带取以下值的 `form` 属性：

- `numeric` - （默认）即数字，例如「1」
- `numeric-leading-zeros` - 即前面带有零的数字，例如「01」
- `ordinal` - 即序数，例如，`1st`

有的语言，比如法语，只在月份的第一天使用 `oridinal` 形式（「1er janvier」、"「2 janvier」、「3 janvier」等）。这种输出可以通过使用 `oridinal` 形式和 `limit-day-oridinals-to-day-1` 属性来实现（见[本地化选项](#本地化选项)）。

`month`

​ 对于 `month` 来说，`cs:date-part` 可以携带 [`strip-periods`](#剥除句点strip-periods) 和 `form` 属性。在本地化文件中，如果符合使用习惯的话，月份缩写应该随句点一同定义（例如： 「Jan.」、「Feb.」）。这些句点可以通过设置 `strip-periods` 为 `true` （默认为 `false`）来去除掉。`form` 属性可以设置为：

- `long` - （默认）即完整的名场，例如：「January」
- `short` - 即缩写，例如「Jan.」
- `numeric` - 即数字，例如「1」
- `numeric-leading-zeros` - 即前面带有零的数字，例如「01」

`year`

​ 对 `year` 来说，`cs:date-part` 可以携带取以下值的 `form` 属性：

- `long` - （默认）即完整的年份数字，例如「2020」
- `short` - 即不含世纪的年份数字，例如「20」

`cs:date-part` 还可能携带 [格式化](#格式化formatting)、[文本大小写](#文本大小写text-case) 和 `range-delimiter`（见[日期范围](#日期范围date-ranges)）属性。除非 `cs:date` 调用了本地化的日期格式，否则 `cs:date-part` 可以使用 [词缀](#词缀affixes)属性。

#### 日期范围（Date Ranges）

日期范围中的分隔符默认为短横线（例如「May–July 2008」）。可以设置 `cs:date-part` 元素的可选属性 `range-delimiter` 来自定义范围分隔符。当日期范围被渲染时，范围分隔符来自两个日期之间有差别且单位最大的日期成分的 `cs:date-part` 元素（`year`、`month` 或 `day`）。例如

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

将会渲染出「1-4 May 2008」、「May–July 2008」和「May 2008/June 2009」。

#### 公元后（AD）和公元前（BC）

`ad` 术语（Anno Domini）自动附加到小于四位数的正数年份（例如，「79」变为「79AD」）。`bc` 术语（Before Christ）自动附加到负数年份（例如，「-2500」变为「2500BC」）。

#### 季节（Seasons）

如果日期中包含了季节而不是月份，季节术语 (`season-01` 到 `season-04`, 分别代表春夏秋冬) 将取代月份术语。比如：

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

将会输出「May 2008」和「Winter 2009」。

#### 近似日期（Approximate Dates）

在 `is-uncertain-date` 条件（见 [选择语句](#选择语句choose)）为 `true` 时表示为近似日期。例如，

```xml
<style>
  <citation>
    <layout>
      <choose>
        <if is-uncertain-date="issued">
          <text term="circa" form="short" suffix=" "/>
        </if>
      </choose>
      <date variable="issued">
        <date-part name="year"/>
      </date>
    </layout>
  </citation>
</style>
```

将输出「2005」（正常日期）和「ca.2003」（近似日期）。

### 数字（Number）

`cs:number` 渲染元素输出必要属性 `variable` 所选的数字变量。[数字变量](#数字变量) 是 [标准变量](#标准变量) 的子集。

使用 `cs:number` 元素来渲染数字变量时，如果该变量只包含数字内容（由 `is-numeric` 的规则来决定，见 [选择语句](#选择语句choose)），数字会被提取出来。当变量内容包含非数字内容（例如「特别版」）时，变量内容将被渲染为原样。

在提取的过程中，用连字符分隔的数字将被去除中间的空格（「2 - 4」变为「2-4」）。对于用逗号分隔的数字，在逗号后保留一个空格（「2,3」和「2 , 3」变为「2, 3」）。而对于使用「&」字符分隔的数字，在「&」符号前后应用一个空格（「2&3」变为「2 & 3」）。

提取出来的数字可以通过可选的 `form` 属性行进格式化，其值可以设置为：

- `numeric` - （默认），例如：「1」、「2」、「3」
- `ordinal` - 即序数，例如「1st」、「2nd」、「3rd」。序数后缀可以使用术语定义（见 [序数后缀](#序数后缀)）.
- `long-ordinal` - 即长序数，例如「first」、「second」、「third」。长序数使用术语 `long-ordinal-01` 至 `long-ordinal-10` 定义，用来给数字 1 到 10 使用。对于其他数字，`long-ordinal` 回退至 `ordinal`。
- `roman` - 即罗马数字，例如「i」、「ii」、「iii」

带有前缀或者后缀的数字不能序数化或者以罗马数字渲染（例如：「2E」仍然渲染为「2E」）。不带词缀的数字会被独立地转换（「2, 3」可以转换为「2nd, 3rd」、「second, third」、或者「ii, iii」）。

`cs:number` 可能会携带 [词缀](#词缀affixes)、[显示](#显示display)、[格式化](#格式化formatting) 和 [文本大小写](#文本大小写text-case) 属性。

### 名称容器（Names）

`cs:names` 渲染元素输出一个或多个 [名称变量](#名称变量)（通过必选属性 `variable` 来选择）的内容，其中每一个变量可以包含一个或者多个名称（例如，`author` 变量包含被引条目的作者）。如果选择了多个变量（使用单个空格分隔，见下面的例子），每个变量将会按指定的顺序单独渲染，但是有一个例外：当选择的变量中包括 `editor` 和 `translator`，且这两个名称变量的内容相同，则只有一个名称变量会被渲染。在此基础上，如果 `cs:names` 元素中包含一个 `cs:label` 元素，则 `editortranslator` 术语将替换掉默认的 `editor` 和 `translator` 术语（例如输出结果为「Doe(editor & tranlator)」）。设置在 `cs:names` 上的 [`delimiter`](#分隔符delimiter) 属性可以用来分隔不同的名称变量（例如，「Doe, Smith (editors); Johnson (translator)」中间使用了分号隔开）。

```xml
<names variable="editor translator" delimiter="; ">
  <label prefix=" (" suffix=")"/>
</names>
```

`cs:names` 有四个子元素（下面将讨论）：`cs:name`、`cs:et-al`、`cs:substitute` 和 `cs:label`。 `cs:names` 元素可能会携带 [词缀](#词缀affixes)、[显示](#显示display) 和 [格式化](#格式化formatting) 属性。

::: info 译者注

考虑到文献的创建者并不一定是有名有姓的个人，还有可能是组织，此处将「name」译为「名称」而非「名字」。

:::

#### 名称（Name）

`cs:name` 元素的，`cs:names` 元素的可选子元素，可以用来描述单个名称的格式以及带有名称变量的名称中的分隔符。`cs:name` 可以携带以下属性：

##### `and`

指定名称变量中倒数第二个名称和倒数第一个名称的分隔符。可选的值为 `text`（选用 `and` 术语，例如「Doe, Johnson and Smith」）或者 `symbol`（例如「Doe, Johnson & Smith」）。

##### `delimiter`

指定用于分隔名称变量中的名称的文本字符串。默认为 `, `(例如「Doe, Smith」)。

##### `delimiter-precedes-et-al`

在使用 `et-al` 缩写的情况下，指定在截断的名称列表和 `et-al` 术语之间何时使用分隔符或者空格。允许的值有：

- `contextual` - （默认）, 在名称列表中有 2 个及以上的名称时使用
  - 1 个名称：「J. Doe et al.」
  - 2 个名称：「J. Doe, S. Smith, et al.」
- `after-inverted-name` - 在 `name-as-sort-order` 属性使当前的名称发生了颠倒时使用。例如：当 `name-as-sort-order` 属性设置为 `first` 时，第一个名字的前后部分 Doe 和 J 发生了反转，因此在第一个名字后面使用了分隔符 `, `
  - 「1Doe, J., et al.」
  - 「Doe, J., S. Smith et al.」
- `always` - 始终使用名称分隔符
  - 1 个名称：「J. Doe, et al.」
  - 2 个名称：「J. Doe, S. Smith, et al.」
- `never` - 永不使用名称分隔符
  - 1 个名称：「J. Doe et al.」
  - 2 个名称：「J. Doe, S. Smith et al.」

##### `delimiter-precedes-last`

确定何时使用分隔符来分割名称列表中的倒数第二个名称和最后一个名称（如果没有设置 `and`，则不论 `delimiter-precedes-last` 属性的值如何，名称分隔符总是使用）。

- `contextual` - （默认），当名称列表中的名称有 3 个或以上时使用。
  - 2 个名称：「J. Doe and T. Williams」
  - 3 个名称：「J. Doe, S. Smith, and T. Williams」
- `after-inverted-name` - 在 `name-as-sort-order` 属性使上一个名字发生了颠倒时使用。例如：当 `name-as-sort-order` 属性设置为 `first` 时
  - 「Doe, J., and T. Williams」
  - 「Doe, J., S. Smith and T. Williams」
- `always` - 始终使用分隔符
  - 2 个名称：「J. Doe, and T. Williams」
  - 3 个名称：「J. Doe, S. Smith, and T. Williams」
- `never` - 永不使用名称分隔符
  - 2 个名称：「J. Doe and T. Williams」
  - 3 个名称：「J. Doe, S. Smith and T. Williams」

##### `et-al-min`/`et-al-use-first`

通过设置这两个属性，可以启用 et-al 式的缩写。如果名称变量中的名称的数目超过了 `et-al-min` 属性设置的值，则达到 `et-al-use-first` 设置的名称数量后，渲染的名称列表将被截断。`et-al`（或者 `and others`）术语用来添加到截断列表的后面（见 [et-al](#等et-al)）。默认地，当名称列表被截断到单个名称，则名称和 `et-al` 术语之间使用空格分隔（例如：Doe et al.）。当一个名称列表被截断为两个及以上的名称，则使用名称分隔符（例如：Doe, Smith, et al.）。这些行为可以使用 `delimiter-precedes-et-al` 属性来设置。

##### `et-al-subsequent-min`/`et-al-subsequent-use-first`

如果使用了这两个属性，则在二次引注时用这两个属性的值分别代替 `et-al-min` 和 `et-al-use-first` 的值。

::: info 二次引注

为了便于表述，如果一个引注引用了之前已经被引用过的条目，本文就称这个引注为「二次引注」。

:::

##### `et-al-use-last`

当该属性设置为 `true`（默认为 `false`）时，et-al 缩写所截断的名称列表后将跟着名称分隔符、省略号以及原先名称列表中的最后一个名称。这个属性只能在初始名称列表比截断后的名称列表至少多两个名称时才会起效。例如：

```
A. Goffeau, B. G. Barrell, H. Bussey, R. W. Davis, B. Dujon, H.
Feldmann, … S. G. Oliver
```

---

下面所讨论的这些剩下的属性，只对人名有影响。这里先给出名字的组成部分。人名需要一个「姓（family）」姓名成分，还可能包含「名（given）」、「后缀（suffix）」、「不可省略小品词（non-droping-particle）」和「可省略小品词（dropping-particle）」姓名成分。这些姓名成分定义如下：

- 「family」 - 去掉所有小品词和后缀的姓
- 「given」 - 可以使全名「John Edward」或者缩写「J. E.」
- 「suffix」 - 名字后缀，比如「John Smith Jr.」中的「Jr」或者「Bill Gates III」的「III」
- 「non-dropping-particle」 - 显示姓氏的时不能省略的小品词（例如德国人名「van Gogh」中的「van」），但也可以独立于姓氏来看待，例如排序姓名时
- "dropping-particle" - 当只显示姓时，可省略的小品词（例如「Ludwig van Beethoven」中的「van」，这个名字在只显示姓氏时变成「Beethoven」；又如「Alexander von Humboldt」中的「von」，这个名字在只显示姓氏时变成「Humboldt」）

::: info 小品词

> 小品词是句法上不能独立，要依附于其他句法成分，词汇意义上比较虚，但是具有语法意义或特定语气表达功能的词。——[《中国大百科全书》](https://www.zgbk.com/ecph/words?SiteID=1&ID=518031&Type=bkzyb&SubID=224216)

:::

::: info 译者注

上面例子中：

1. 「John Smith Jr.」中的「Jr」是「Junior」的缩写，表示此人与另一位较年长的家庭成员同名，可译为「小约翰·史密斯」
2. 「Bill Gates III」中的「III」是「IIIrd」的缩写，表示此人是家族中第三个使用此名称的人，可译为「比尔·盖茨三世」。

:::

影响人名的属性有：

##### `form`

指定是否显示名字的所有部分（默认值 `long`），或者只显示姓氏和不可省略小品词（值 `short`）。第三个可能的值 `count`，则会返回使用 `cs:names` 元素所渲染的名称总数（考虑 `et-al` 缩写和编者/译者折叠的影响）。

##### `initialize`

设置了 `initialize-with` 属性时，如果该属性设置为 `false`（默认的结果为 `true`），则名不会被缩写。但是，`initialize-with` 的值依然会添加到名的首字母后（例如：当 `initialize` 设置为 `false`，并且`initialize-with` 设置为 `.` 时，「James T kirk」将会变为「James T. Kirk」）。

::: info 首字母

在和姓名有关的语境里，「首字母」（initial）即名的第一个字母，往往特指全名中每一个单词的第一个字母。
:::

##### `initialize-with`

当该属性被设置时，名将会使用缩写。属性值添加在每个首字母后（属性值 `.` 将得到「J. J. Dne」这样的结果）。对于合成的名（例如「Jean-Luc」），可以使用全局的带有连字符的 `initialize-with-hyphen` 属性来设置其缩写形式（见 [缩写名中的连字符](#缩写名中的连字符)）。

##### `name-as-sort-order`

指定名字的显示顺序为先姓后名（例如「John Doe」会变成「Doe, John」）。这个属性有两个可能的值：

- `first` - 属性只影响名称变量中的第一个名字
- `all` - 属性将会影响所有的名字

注意：即使 `name-as-sort-order` 改变了姓名成分的顺序，最终显示的顺序不一定与包含小品词和后缀的姓名中的顺序相同（见 [姓名成分顺序](#姓名成分顺序)）。而且，`name-as-sort-order` 只影响那些名通常在姓前面的书写系统，例如拉丁文、希腊文、西里尔文和阿拉伯文。相反，亚洲书写系统中的姓名总是按照先姓后名的顺序显示。

::: info 译者注

`name-as-sort-order` 可以直译为「按照排序顺序显示姓名」。即使在先名后姓的书写系统中，正式文档中也往往按姓氏来对人名进行排序，因此先姓后名的顺序就是所谓「排序顺序」。

:::

##### `sort-separator`

为那些被 `name-as-sort-order` 属性交换了位置的姓名成分设置分隔符，默认值为 `, `（Doe, John）。和 `name-as-sort-order` 属性的情况一样，该属性只影响那些「先名后姓」书写系统中的姓名。

`cs:name` 元素还可以携带 [词缀](#词缀affixes) 和 [格式化](#格式化formatting) 属性。

#### 姓名成分顺序

姓名成分的顺序取决于 `cs:name` 元素中 `form` 和 `name-as-sort-order` 属性的值、 `cs:style` 元素中的 `demote-non-droping-particle` 属性（一个 [全局选项](#全局选项) ）的值，以及单个名字所在的书写系统。注意，姓名成分的显示和排序顺序通常是不同的，可能的顺序概述如下：

**「先名后姓」书写系统（拉丁文等）中的姓名显示顺序**

---

1. 条件：`form` 属性设置为 `long`

   - 顺序：1. 名 2. 可省略小品词 3. 不可省略小品词 4. 姓 5. 后缀
   - 示例：[Vincent] [] [van] [Gogh] [III]
   - 示例：[Alexander] [von] [] [Humboldt] [Jr.]

---

2. 条件：`form` 属性设置为 `long`，`name-as-sort-order` 属性激活，`demote-non-dropping-particle` 属性设置为 `never` 或者 `sort-only`

   - 顺序：1. 不可省略小品词 2. 姓 3. 名 4. 可省略小品词 5. 后缀
   - 示例：[van] [Gogh], [Vincent] [], [III]

---

3. 条件：`form` 属性设置为 `long`，`name-as-sort-order` 属性激活，`demote-non-dropping-particle` 属性设置为 `display-and-sort`

   - 顺序：1. 姓 2. 名 3. 可省略小品词 4. 不可省略小品词 5. 后缀
   - 示例：[Gogh], [Vincent] [] [van], [III]

---

4. 条件：`form` 属性设置为 `short`

   - 顺序：1. 不可省略小品词 2. 姓
   - 示例：[van] [Gogh]

---

**「先名后姓」书写系统（拉丁文等）中的姓名排序顺序**

---

1. 条件：`demote-non-dropping-particle` 属性设置为 `never`

   - 顺序：1. 不可省略小品词 + 姓 2. 可省略小品词 3. 名 4. 后缀
   - 示例：[van Gogh] [] [Vincent] [III]

---

2. 条件：`demote-non-dropping-particle` 属性设置为 `sort-only` 或者 `display-and-sort`

   - 顺序：1. 姓 2. 可省略小品词 + 不可省略小品词 3. 名 4. 后缀
   - 示例：[Gogh] [van] [Vincent] [III]

---

**「先姓后名」书写系统（中文等）中的姓名显示和排序顺序**

---

1. 条件：`form` 属性设置为 `long`

   - 顺序：1. 姓 2. 名
   - 示例：张三

---

条件：`form` 属性设置为 `short`

顺序：1. 姓

示例：张

---

没有姓名成分的非人名按原样排序，但前面的英语冠词（「a」、「an」、「the」）会被去掉。例如「The New York Times」会被当作「New York Times」来排序。

#### 名字格式化

`cs:name` 元素可能会携带一个或者两个 `cs:name-part` 子元素来针对特定姓名成分进行格式化。`cs:name-part` 必须携带 `name` 属性，设置为 `given` 或者 `family`。

如果设置为 `given`，`cs:name-part` 元素的 [格式化](#格式化formatting) 和 [文字大小写](#文本大小写text-case) 属性会影响 `given` 和 `dropping-particle` 姓名成分。[词缀](#词缀affixes) 包围 `given` 成分，包括反转姓名中所有后续的姓名小品词。

如果设置为 `family`，`cs:name-part` 元素的 [格式化](#格式化formatting) 和 [文字大小写](#文本大小写text-case) 属性会影响 `family` 和 `non-dropping-particle` 部分。[词缀](#词缀affixes) 包围在 `family` 成分，包括未反转姓名中所有前置的小品词和「suffix」成分。

姓名成分格式化不适用于 `suffix` 成分。`cs:name-part` 元素的使用不影响哪一个姓名成分以何种顺序渲染。下面的代码，将产生类似「Jane DOE」的效果：

```xml
<names variable="author">
  <name>
    <name-part name="family" text-case="uppercase"/>
  </name>
</names>
```

#### 等（Et-al）

Et-al 缩写通过 `et-al-…` 属性来控制（见[名称](#名称name)），它可以进一步使用可选的 `cs:et-al` 元素来自定义，该元素必须放在 `cs:name` 元素后面（如果存在的话）。

[格式化](#格式化formatting)属性可以用在 `cs:et-al` 元素上，例如将 `at-al` 术语斜体化：

```xml
<names variable="author">
  <et-al font-style="italic"/>
</names>
```

`term` 属性还可以被设置为 `et-al`（默认）或者 `and others`，以便使用另一个术语：

```xml

<names variable="author">
  <et-al term="and others"/>
</names>

```

#### 替补（Substitute）

可选的 `cs:substitute` 元素，必须当作 `cs:name` 的最后一个子元素来使用，如果父元素 `cs:names` 中指定的 [名称变量](#名称变量) 为空则加以取代。用于取代的内容通过 `cs:substitute` 的子元素来确定，并且必须包含一个或者多个渲染元素（除了 `cs:layout`）。可以用一个没有子元素的简洁版 `cs:names` 作为子元素，它继承了最初那个 `cs:names` 元素在子元素 `cs:name` 和 `cs:et-al` 上设置的属性值。如果 `cs:substitute` 元素包含多个子元素，并且第一个元素返回了非空的结果用于替换，则其他替代变量会在剩下的输出中被抑制以避免重复。替代变量还会被视为空值以便决定是否抑制封闭的 `cs:group`。下面的例子中：`author` 名称变量为空时，就被 `editor` 名称变量替换，当没有编者时，则使用 `title` 宏替换。

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

::: info 译者注

此处的「替代变量」泛指 `cs:substitute` 内部的子元素，而非附录中提到的 CSL 标准变量。`cs:substitute` 默认为空，且只输出首个非空子元素。

:::

#### `cs:names` 中的标签

`cs:names` 里可以放一个 `cs:label` 元素（见 [Label](#标签label)）。它必须出现在 `cs:substitute` 元素之前。`cs:label` 相对于 `cs:name`的位置决定了输出文本中名称和标签的顺序。当 `cs:label` 作为 `cs:names` 元素的子元素时，`cs:label` 不能携带 `variable` 属性，而是使用父元素 `cs:names` 中的变量。和在别处使用 `cs:label` 的第二个区别是：`form` 属性可以设置为 `verb` 或者 `verb-short`，因此所有允许的值为：

- `long` - （默认）, 例如，对于「editor」术语，渲染为「editor」和「editors」
- `short` - 例如，对于「editor」术语，渲染为「ed.」「eds」
- `verb` - 例如，对于「editor」术语，渲染为「edited by」
- `verb-short` - 例如，对于「editor」术语，渲染为「ed.」
- `symbol` - 例如，对于「section」术语，渲染为「§」和「§§」

### 标签（Label）

`cs:label` 渲染元素输出与其必要属性 `variable` 所选变量相匹配的术语，该属性必须设为 `locator`、`page` 或 [数字变量](#数字变量) 之一。只有当选择的变量是非空的时候，术语才会渲染。例如：

```xml
<group delimiter=" ">
  <label variable="page"/>
  <text variable="page"/>
</group>
```

可以输出 `page 3` 或者 `pages 5-7`。`cs:label` 可能会携带下面的属性：

#### `form`

​ 选择术语的形式，允许的值为：

- `long` - （默认），例如：对于「page」术语，渲染为「page」或「pages」
- `short` - 例如：对于「page」术语，渲染为「p.」者「pp.」
- `symbol` - 例如：对于「section」术语，渲染为「§」者「§§」

#### `plural`

设置术语的复数形式，允许的值为：

- `contextual` - （默认），术语的复数形式和变量内容相匹配。当内容中包含多个数字时，使用复数形式。如下面的渲染结果：「page 1」、「pages 1-3」、「volume 2」、「volumes 2 & 4」。或者在使用 `number-of-pages` 和 `number-of-volumes` 变量时，数字大于 1（「1 volume」和「3 volumes」）。
- `always` - 永远使用复数形式，例如：「pages 1」和「pages 1-3」
- `never` - 永远使用单数形式，例如”page 1”和「page 1-3」

`cs:label` 也可能携带 [词缀](#词缀affixes)、[格式化](#格式化formatting)、[文本大小写](#文本大小写text-case) 和 [剥除句点](#剥除句点strip-periods) 属性。

### 编组（Group）

`cs:group` 元素必须包含一个或者多个渲染元素（除了 `cs:layout`）。`cs:group` 可以携带 `delimiter` 属性来分隔子元素，此外还能携带 [词缀](#词缀affixes)、[显示](#显示display) 和 [格式化](#格式化formatting) 属性（作用于整个组的输出）。`cs:group` 隐式地表现为一个有条件的元素，当以下情况同时出现时，`cs:group` 及其子元素将会被抑制：a) 在 `cs:group` 中至少一个渲染元素调用了变量（直接或者通过宏调用），b) 所有被调用的变量都为空。例如，

```xml
<layout>
  <group delimiter=" ">
    <text term="retrieved"/>
    <text term="from"/>
    <text variable="URL"/>
  </group>
</layout>
```

输出「retrieved from <http://dx.doi.org/10.1128/AEM.02591-07>」，但是当 URL 为空候，不生成结果。

### 选择语句（Choose）

`cs:choose` 元素允许有条件的渲染 [渲染元素](#渲染元素)。下面的例子在 `issud` 日期变量存在时就渲染它，否则渲染 `no date` 术语：

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

`cs:choose` 元素中必须有一个 `cs:if` 子元素，它后面还可以跟一个或者多个 `cs:else-if` 子元素，以及一个可选的 `cs:else` 结束元素。`cs:if` 和 `cs:else-if` 元素可以包含任意个 [渲染元素](#渲染元素)（除了 `cs:layout`）。由于空的 `cs:else` 元素是多余的，所以 `cs:else` 元素必须至少包含一个渲染元素。`cs:if` 和 `cs:else-if` 元素必须含有一个或多个判断条件，这些条件可以使用下面的属性设置：

#### `disambiguate`

当该属性设置为 `true`（唯一允许的值）时，只有当它消除了两个相同的引注时才会渲染元素的内容。只有其他消歧方法都未能使目标源能被唯一识别时，才进行 [消除歧义](#消除歧义) 中所述的这种尝试。

#### `is-numeric`

测试给定的变量（[附录 IV 变量](#附录-iv-变量)）是否包含数字内容。如果内容仅由数字构成，则识别为数字。数字可以带有前缀和后缀（「D2」、「2b」、「L2d」），并且可能被逗号、连字符或「&」符号分隔（「2, 3」、「2-4」、「2 & 4」）。例如，「2nd」被识别为「true」，但「second」「2nd edition」识别为「false」

#### `is-uncertain-date`

判断给定的 [日期变量](#日期变量) 是否包含 [近似日期](#近似日期approximate-dates)。

#### `locator`

判断定位词是否和给定的定位词类型相匹配（见 [定位词](#定位词locators)）。比如，使用「sub-verbo」判断是不是「sub-verbo」类型的定位符

#### `position`

判断引用的位置是否和给定的位置匹配（术语：引注由一个或多个指向单独条目的引用组成）。当在 `cs:bibliography` 范围内调用时，`position` 的结果为「false」。位置可以使用下面的选项测试：

- `first`: 第一次引用某个条目的引注所在位置
- `ibid`/`ibid-with-locator`/`subsequent`: 引注在引用了先前引用过的条目时具有 `subsequen` 位置。当处于以下情况时，这样的引注还可能具有 `ibid` 或者 `ibid-with-locator` 位置：

  1.  在同一个引注中，当前引用紧跟在另一个指向相同条目的引用之后
  2.  当前的引用是引注中的第一个引用，而且上一个引注包含一个指向相同条目的单独引用

  如果满足上面任何一种情况，定位词的出现决定了这个引注会被指定为哪种位置：

  - **前一个引用没有定位词**：如果当前引用有定位词，则当前引用的位置是 `ibid-with-locator`，否则是 `ibid` 。
  - **前一个引用有定位词**: 如果当前引用具有相同的定位词，则当前引用的位置是 `ibid`。如果二者的定位词不同，则当前引用的位置是 `ibid-with-locator`。如果当前引用缺少定位词，则当前引用的位置是 `subsequent`。

- `near-note`：一个引用跟在另一个指向相同条目的引用后。两个引用都必须在脚注或尾注中，并且两个引用的距离没有超过 `near-note-distance` 选项（见 [注释距离](#注释距离)）中定义的最大距离（使用脚注或尾注的数量计算）。

当 `position="ibid-with-locator"` 检测为真时，`position="ibid"` 也会检测为真。而且当 `position="ibid"` 或者 `position="near-note"` 检测为真时，`position="subsequent"` 也会检测为真。

::: info 译者注

「ibid.」是拉丁语「ibidem」的缩写，意思是「出处同上」，用于在重复引用时简化引注内容。`subsequent` 是指「二次引用」，只要本次引用中包含已经引用过的条目就可归为此类。从语义上讲，「同上」不宜用在相距过远的引用之间，否则难以找出上文。因此规定只有两个引用之间没有其他引用的时候才是 `ibid`，即「相邻且相同」。特别地，如果这两个引用不在同一个引注中，要求前一个引用单独成注，如此才能指代明确。`near-note` 则对使用位置作了限定，但只要求彼此不超过某个预设的距离，而不要求它们直接相邻，即「相近且相同」。

:::

#### `type`

​测试条目是否和给定的类型匹配（[附录 III 条目类型](#附录-iii-条目类型)）。

#### `variable`

​测试给定变量（[附录 IV 变量](#附录-iv-变量)）的默认的形式（`long`）是否为空。

---

除了 `disambiguate` 外，所有的条件都允许有多个测试值（使用空格分隔，例如`book thesis`）。

`cs:if` 元素和 `cs:else-if` 元素可能会携带 `match` 属性用来控制判断的逻辑，`match` 可设置的值为：

- `all` - （默认），仅当所有给定测试值都为 `true` 的时候，结果才为 `true`
- `any` - 当任意一个值为 `true` 的时候，结果就为 `true`
- `none` - 当没有值测试为 `true` 的时候，结果为 `true`

## 样式的行为

### 选项

被作为属性设置在 `cs:citation` 上的 [引注选项](#引注选项) 、设置在 `cs:bibliography` 上的 [参考文献表选项](#参考文献表选项) 和设置在 `cs:style` 上的 [全局选项](#全局选项)（同时影响引注和参考文献表）可以用来配置样式。[可继承的名称选项](#可继承的名称选项) 可以设置在 `cs:style`、`cs:style` 和 `cs:bibliography` 之上。最后，[本地化选项](#本地化选项) 可以在 `cs:locale` 元素上设置。

#### 引注选项

##### 消除歧义

当一个引用对应多个参考文献表题注的时候会产生歧义。有四种可行的方法来消除这样的歧义，这些方法按下面的顺序被依次尝试：

1. 扩展姓名（添加首字母或者名）
2. 显示更多姓名
3. 渲染 `cs:choose` 条件语句上 `disambiguate` 属性测试为 `true` 的引注。
4. 添加年份后缀

::: info 译者注

简便起见，套用计算机语言学的概念，下文会将「消除歧义」简称为「消歧」。相应地，「消除歧义的方法」简称为「消歧方法」，「消除了歧义的引用」则称之为「已消歧引用」。

:::

方法 1 还可以出于全局 _姓名消歧_ 的目的来使用，把整个文档中混淆的和未混淆的引注都进行转换。

这四种消歧方法可以通过下面的选项属性来单独激活：

##### `disambiguate-add-givenname` [方法 1]

如果设置为 `true`（默认为 `false`），产生歧义的名字（它们在 `short` 形式或首字母缩写的 `long` 形式时相同，但加上首字母或显示全名后不同）将被扩展。名字扩展可以使用 `givenname-disambiguation-rule` 设置。下面是一个例子。

| 含有歧义的引用               | 消除歧义的引用                     |
| ---------------------------- | ---------------------------------- |
| (Simpson 2005; Simpson 2005) | (H. Simpson 2005; B. Simpson 2005) |
| (Doe 1950; Doe 1950)         | (John Doe 1950; Jane Doe 1950)     |

`givenname-disambiguation-rule`

用来指定 a) 名字扩展的目的是仅限于消除引用歧义，还是额外包括消除姓名歧义（只有在后面的情况中，才会在未混淆的引用中扩展有歧义的名字，例如：从 (Doe 1950; Doe 2000) 扩展到 (Jane Doe 1950; John Doe 2000)）b) 名字扩展是针对所有名字启用，还是只对每个引用的第一个名字启用 c) 扩展每一个名字的方法。

::: info 译者注

「引用歧义」是指同一个 author-date 引注中，两条引用的作者名和年份都相同，但实际指代的文献不同，此时无法分辨引注所对应的题注。

「姓名歧义」则是指同一个 autho-date 引注中，两条引用的作者名相同、年份不同，可以通过对照年份来判断该引用所对应的题注。

:::

**扩展单个名字**

​ 扩展单个名字的步骤是：

1. 如果设置了 `initialize-with`，并且 `initialize` 具有默认值 `true`：
   (a) 通过将名字显然为 `long` 而非 `short` 来显示首字母（例如「Doe」变为「J. Doe」）。
   (b) 当 `initialize` 被设为 `flase`，渲染完整的名而非首字母（例如「J. Doe」变为「John Doe」）。
2. 如果没有设置 `initialize-with`，使用 `long` 形式渲染完整的姓名（「Doe」变为「John Doe」）。

**消除歧义法则**

​ `givenname-disambiguation-rule` 允许的值为：

​ `all-names`

​名字扩展具有消除引用歧义和消除姓名歧义的双重目的。在混淆和未混淆的引用中，所有渲染后有歧义的名字都需要消除歧义。所有姓名都逐步转换，直到不再有歧义。无法消除歧义的名字将保持不变。

`​all-names-with-initials`

​和 `all-names` 一样，但是名字扩展的手段仅限于显示首字母（见前文步骤 1(a)）。`initialize-with` 没有被设置或者 `initialize` 被设置为 `false` 时，不会进行消除歧义的尝试。

`primary-name`

​和 `all-names` 一样，但是仅对每个引用的第一个名字消除歧义。

`primary-name-with-initials`

​和 `all-names-with-initials` 一样，但是仅对每个引用的第一个名字消除歧义。

`by-cite`

​默认值。和 `all-names` 一样，但是名字扩展的目的仅限于消除引用的歧义，只有处在混淆引用中有歧义的名字才会受影响，并且消歧行为中止于消除了引用歧义的名字后。

##### `disambiguate-add-names` [方法 2]

如果设置为 `true`（默认为 `false`），原本会因 et-al 缩写而隐藏的名字将会被逐一添加到混淆的引用中，直到不再有引用可以通过添加名称来消除歧义为止。

如果 `disambiguate-add-names` 和 `disambiguate-add-names` 同时被设为 `true`，则首先采用姓名扩展来渲染姓名。如果引用无法通过扩展所渲染的名字来（完全）消除歧义，则由于 et-al 缩写而隐藏的姓名将被逐个添加到混淆的引注中。如果有助于消除混淆的引用，则被添加的名字也会被扩展。这个流程将会持续到不再有引用可以通过添加扩展的姓名来消除歧义。

在上面对消歧方法 (1) 和 方法 (2) 的描述中，我们假设每一个（消除了歧义的）引注都有明确的关联指向其参考文献表题录。为了确保每一个引用都确实唯一地标识其在参考文献表中的题注，这些用于区分引用的详细信息（例如姓名、首字母和全名）必须显示在对应的参考文献表题注中。如果没有满足这个要求，消歧方法 (1) 和方法 (2) 还会应用于所有混淆引用的参考文献表题录，直到不再有可通过添加（扩展）姓名来消除歧义的题录。每种方法只在已经被用于消除引用歧义后才会对所涉及的参考文献表题录生效。

##### `disambiguate` 条件 [方法 3]

还可以通过渲染 `disambiguate` 条件测试为 `true` 的引用来尝试消除歧义（见 [选择语句](#选择语句choose)）。

##### `disambiguate-add-year-suffix` [方法 4]

如果设置为 `true`（默认为 `false`），以字母表为序列的年份后缀会被添加到混淆的引用（例如「Doe 2007, Doe 2007」变成「Doe 2007a, Doe 2007b」）及其对应的参考文献表条目中。这个最终消歧方法总能成功。年份后缀的添加顺序遵从参考文献表中的题注顺序，一旦用到了「z」，则将继续添加额外的字母（「z」、「aa」、「ab」、...、「az」、「ba」、...）。默认情况下，年份后缀追加到引用或题注中由 `cs:date` 渲染的第一个年份后，但它的位置还可以通过使用 `cs:text` 明确渲染「year-suffix」变量来进行控制。如果「year-suffix」是通过 `cs:citation` 范围内的 `cs:text` 渲染得到的，则它在 `cs:bibliography` 中被抑制，除非它也被 `cs:bibliography` 范围内的 `cs:text` 所渲染，反之亦然。

::: info 译者注

`cs:citations` 中使用 `cs:text` 渲染的「year-suffix」处于自定义位置，CSL 引擎无法判断这个位置对应 `cs:bibliography` 题注的哪一部分，因此需要我们手动指定。

:::

##### 引用分组

通过引用分组，可以将相同名称的文本引用放在一起，比如：(Doe 1999; Smith 2002; Doe 2006; Doe et al. 2007) 将会变为 (Doe 1999; Doe 2006; Smith 2002; Doe et al. 2007)。引用分组在引用排序和消除歧义后执行。分组后的引用保持其相对顺序，并移到第一个改组中引用出现的第一个位置。

引用分组可以在 `cs:citation` 元素中通过设置 `cite-group-delimiter` 属性或者 `collapse` 属性（见 [cite collapsing](#引用折叠)）激活。

`cite-group-delimiter`

激活引用分组并为引用组中的引用指定分隔符，默认为 `, `。例如，当 `cs:citation` 元素中的 `cs:layout` 中的 `delimiter` 设置为 `;` 时，`collapse` 设置为 `year`，`cite-group-delimiter` 设置为 `, `，将生成类似 "(Doe 1999,2001; Jones 2000)" 的引用。

##### 引用折叠

author 或者 author-date 类型的引用格式中的引用分组和数字格式中的引用范围可以通过 `collapse` 属性来折叠。折叠引用组中分隔符可以是使用 `year-suffix-delimiter` 和 `after-collapse-delimiter` 属性来设置：

`collapse`

激活引用分组和折叠。允许的值为：

- "citation-number" - 当使用数字样式的时候，折叠引用数字的范围（通过 `citation-number` 变量来渲染） ，例如：`[1, 2, 3, 5]` 变为 `[1–3, 5]`。只有升序的引用才可以折叠，比如： `[3, 2, 1]` 将不会折叠。
- "year" - 通过压缩相同的名字来折叠引用分组，例如： "(Doe 2000, Doe 2001)" 变为 "(Doe 2000, 2001)"。
- "year-suffix" - 对名字相同的折叠项，折叠相同的年份，例如： "(Doe 2000a, 2000b)" 变为 "(Doe 2000a, b)"。
- "year-suffix-ranged" - 对名字相同的折叠项，折叠年份范围，例如： "(Doe 2000a, b, c, e)" 变为 "(Doe 2000a–c,e)"。

当 `disambiguate-add-year-suffix` 设置为 `false` 时，或者引用中包含位置（例如：「(Doe 2000a-c, 2000d, p. 5, 2000e,f)」，"Doe 2000d" 有一个页码位置），"year-suffix" 和 "year-suffix-ranged" 回退到 "year"。

`year-suffix-delimiter`

​ 设置年份后缀的分隔符。默认在 `cs:citation` 元素的 `cs:layout` 中设置。例如：当 `collapse` 设置为 `year-suffix`，`cs:citation` 中的 `cs:layout` 的 `delimiter` 元素设置为 `;`，并且 `year-suffix-delimiter` 设置为 `, ` 时，渲染结果将类似于 "(Doe 1999a,b; Jones 2000)"。

`after-collapse-delimiter`

​ 设置折叠后的引用组要使用的分隔符。默认在 `cs:citation` 元素的 `cs:layout` 中设置。例如：当 `collapse` 设置为 `year`，`cs:citation` 中的 `cs:layout` 的 `delimiter` 元素设置为 `, `，并且 `after-collapse-delimiter` 设置为 `;` 时，渲染结果将类似于 "(Doe 1999, 2001; Jones 2000, Brown 2001)"。

##### 注释距离

`near-note-distance`

当有一个预先的标注时，`near-note` 位置是我引用被判断为真，这种预先的标注可以为 a) 指向同一个项目 b) 当前注视以前的脚注或尾注。（译注：不知道讲了什么）

#### 参考文献表选项

##### 空白

`hanging-indent`

​ 如果设置为 `true`（默认为 `false`），参考文献列表将采用悬挂缩进渲染。

`second-field-align`

​ 如果该属性被设置，则书目条目的后续行沿第二字段对齐。使用 "flush" 时，第一个字段与边距齐平。对于 "margin"，第一个字段放在 margin 中，随后的行与 margin 对齐。例如，当第一个字段设置为 `<text variable="citation-number" suffix=". "/>`

```
9.  Adams, D. (2002). The Ultimate Hitchhiker's Guide to the
    Galaxy (1st ed.).
10. Asimov, I. (1951). Foundation.
```

`line-spacing`

​ 指定垂直方向的行距。默认值为 `1`，即单倍行距。可以被设置为任意正整数，用来表示对应倍数的行距。

`entry-spacing`

​ 指定不同条目垂直方向的距离，默认值为 `1`，即一倍距离，可以被设置为任意正整数，用来表示对应倍数的距离。

##### 参考文献分组

`subsequent-author-substitute`

​ 如果该属性被设置，则此属性将用上一条条目中的名称替换参考文献条目中的名字。具体的代替方案取决于 `subsequent-author-substitute-rule` 属性的值。替换仅限于 `cs:names` 元素中渲染的第一个名字。

`subsequent-author-substitute-rule`

​ 用来指定 `subsequent-author-substitute` 的结果怎么替换。允许的值为：

- "complete-all" - 默认值，当名称变量中的所有渲染的名字和上一个参考文献条目相同时，`subsequent-author-substitute` 属性的值将代替整个名字列表（包括标点和术语，比如 et-al 和 and 等术语），但 `cs:names` 元素中设置的后缀将不会被代替。
- "complete-each" - 和 "complete-all" 一样，需要完整的匹配，但是 `subsequent-author-substitute` 属性的值将会代替所有被渲染的名字。
- "partial-each" - 当有一个或者多个名称变量中的渲染名字和上一个条目中相同时，使用 `subsequent-author-substitute` 属性代替对应的值。匹配从第一个名字开始，直到不匹配的名字为止。
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

当 `subsequent-author-substitute` 设置为 `-`，并且 `subsequent-author-substitute-rule` 设置为 `complete-all`，渲染结果将变为：

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

当 `subsequent-author-substitute-rule` 设置为 `complete-each` 时，渲染的结果为：

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

当 `subsequent-author-substitute-rule` 设置为 `partial-each` 时，渲染的结果为：

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

当 `subsequent-author-substitute-rule` 设置为 `partial-first` 时，渲染的结果为：

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

##### 缩写名中的连字符

`initialize-with-hyphen`

​ 该属性用来制定合成名字中间是不是使用连字符。例如，`Jean-Luc` 是一个合成名字，如果该属性设置为 `true`（默认），渲染结果为 `J.-L.`，如果设置为 `false`，渲染结果为 `J.L.`。

##### 页码范围

`page-range-format`

​ 用来设置页码范围的格式，是不是使用简写来压缩。其可选的值有：`chicago` ("321–28")， `expanded` ( "321–328")， `minimal` ("321–8")，或者 `minimal-two` ("321–28")。每一组值前面表示可选的属性值，后面是渲染结果的例子。也可见 [附录 V 页码范围格式](#附录-v-页码范围格式)。使用 `page-range-delimiter` 属性可以用来设置页面范围分割的符号，该属性在 CSL 1.0.1 中引入，默认是一个破折号。如果改属性没有设置，就默认使用破折号。

##### 姓名小品词

​ 西方人的名字中经常包括一个或者多个小部分，例如，`de` 在荷兰人的名字中 `W. de Koning`。在仅显示姓氏时，这些小部分可以分为必须保留和可删除（或译为不可省略和可省略）两种类型：这两种类型分别称为 `non-dropping` 部分和 `dropping` 部分。一个单个的名字可以同时包括这两种类型（不能删除的类型始终位于可删除类型的后面）。例如，`W. de Koning` 和法国名字 `Jean de la Fontaine` 可以被解构为：

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

在仅显示姓氏的时候，只保留不能删除的部分，`De koning` 和 `La Fontaine`。

在名字倒写的情况下，即姓氏在名字之前，在姓氏后面始终添加 `dropping particle`，但是 `non-dropping` 部分可以前置（例如，`de Koning, W.`）或者后置（`Koning, W. de`）。在名字倒写，不可省略粒子前置时，可以使用下面的方式对名字进行排序：排序 A：将不可省略粒子和姓一起保留作为主排序键值的一部分；排序 B：通过将不可省略粒子和姓分开，并使其成为二级排序键值，并加入可省略粒子（如果有):

**Sort order A: 不可省略粒子不降级**

- 主排序键值 "La Fontaine"
- 次排序键值 "de"
- 第三排序键值："Jean"

**Sort order B: 不可省略粒子降级**

- 主排序键值 "Fontaine"
- 次排序键值 "de La"
- 第三排序键值 "Jean"

对不可省略粒子的设置可以使用 `demote-non-dropping-particle` 选项：

`demote-non-dropping-particle`

​ 用来设置在倒写的名字中不可省略粒子的显示和排序方式（例如 Koning W. de）。可设置的值为：

- "never": 不可省略粒子被作为姓中的一部分对待，并附加可省略粒子（"de Koning, W." "La Fontaine, Jean de"）。不可省略粒子作为主排序键值的一部分 (排序 A，例如。"de Koning, W." 将出现在首字母 "D" 的区域).
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

#### 本地化选项

`limit-day-ordinals-to-day-1`

​ 日期格式在 `cs:date` 和 `cs:date-part` 元素中定义。默认地，当 `cs:date-part` 元素中的 `name` 设置为 `day`，`form` 属性设置为 `ordinal` 时，所有的天（1 到 31）将会以序数形式渲染，例如："January 1st"，"January 2nd" 等等。通过将 `limit-day-ordinals-to-day-1` 属性设置为 `true`（默认值为 `false`），序数格式将仅限于每个月的第一天，其他的天将不使用序数格式。这在某些语言中出现，比如法语，"1er janvier"，"2 janvier"，"3 janvier"。

`punctuation-in-quote`

​ 当 `cs:text` 元素渲染时，如果 `quotes` 属性设置为 `true`（见 [格式化](#格式化formatting)），并且在输出后有逗号或者句号，`punctuation-in-quote` 属性可以控制标点放在括号的内还是外，`false` 为外（默认），`true` 为内。

### 排序

​ `cs:citation` 和 `cs:bibliography` 元素可以在 `cs:layout` 元素之前携带一个 `cs:sort` 子元素，来实现对引文或者参考文献条目的排序。在缺失 `cs:sort` 元素时，引文和文献条目将会使用他们在文章中出现的顺序来排序。

​ `cs:sort` 元素必须包含一个或者多个 `cs:key` 子元素，可以在该元素中设置变量（[附录 IV 变量](#附录 IV 变量)）或者宏名来实现排序。对于每个 `cs:key` 元素，排序的顺序可以通过设置 `sort` 属性来设置为升序（`ascending`，默认）或者降序（`descending`）。属性 `names-min`、`names-use-first`、`names-use-last` 可以用来覆盖 `et-al-min`/`et-al-subsequent-min`, `et-al-use-first`/`et-al-subsequent-use-first` 和 `et-al-use-last` 属性的值，并且可以通过 `cs:key` 影响所有的名字。

​ 排序的键值是按顺序求值的，也就是说：首先，使用第一个排序键值对所有的项目进行排序。然后使用第二个键值对第一个键值排序后的结果进行排序，直到所有的键值都完成排序为止。如果键值为空，就放到最后。

​ 这里给出一个例子：其中首先引用 `author` 宏进行排序，并且使用 `et al.` 来对较长的作者序列进行代替。然后，使用 `issued` 变量来进行第二次排序，使用降序：

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

​ 变量或者宏的排序键值可以与 `normal` 渲染的输出不同，具体要依赖下面的细节：

#### 排序变量

​ `cs:key` 元素通过 `variable` 变量属性调用变量的排序键值。名称变量、日期变量和数字变量除外：

**名称**: [名称变量](#名称变量) 通过变量属性被调用，例如 `<key variable="author"/>`，当 `form` 属性设置为 `long`，`name-as-sort-order` 属性设置为 `all`，返回名字列表字符串。

**日期**：[日期变量](#日期变量) 通过 `variable` 属性被调用，返回 `YYYYMMDD` 格式。使用 0 代替缺失的日期成分，例如：`December 2000` 渲染为 `20001200`。因此，简略的日期在升序排列的时候更加靠前，例如：2000, May 2000, May 1st 2000。负数的年份（即公元前）将被反向排序，比如：100BC, 50BC, 50AD, 100AD。排序过程中，季节将被忽略，因为南北半球的季节顺序不同。在日期范围中，开始的日期用于主要排序，结束日期用于次要排序，例如：2000–2001, 2000–2005, 2002–2003, 2002–2009。在具有相同的开始日期时，日期范围将放在单独的日期后，例如：2000, 2000–2002。

**数字**：[数字变量](#数字变量) 通过 `variable` 属性来调用，返回整数（`form` 设置为 `numeric`）如果原始的变量值仅由非数字文本组成，则将该值作为文本字符串返回。

#### 排序宏

​ 变量排序的键值是由字符串值组成，没有富文本标记。通过宏属性中的键值 `cs:key` 来调用。下面为一些特殊情况。

​ 对于名字排序，使用相同的宏而不是直接使用名称变量来渲染和排序有 4 个好处。第一，可以使用替换，例如：可以使用 `editor` 变量代替空的 `author` 变量。第二，可以使用 et-al 缩写，在宏里使用 `et-al-min`/`et-al-subsequent-min`, `et-al-use-first`/`et-al-subsequent-use-first` 和 `et-al-use-last` 可选属性，或者覆盖 `cs:key` 元素中的 `names-min`, `names-use-first` 和 `names-use-last` 。当 et-al 缩写出现的时候，`et-al` 和 `and others` 术语不会包括在排序键值中。第三，名字可以只使用姓来排序，即使用宏，其中的 `cs:name` 扽 `form` 属性设置为 `short`。最后，通过调用宏，将 `cs:name` 中的 `form` 属性设置为 `count`，可以按姓名列表中姓名的数目进行排序。至于使用 `variable` 属性对姓名进行排序，将 `cs:name` 中的 `name-as-sort-order` 属性设置为 `all`，返回值为排序后的名称列表。

在宏中带有 `cs:number` 的 [数字变量](#数字变量) 的和日期变量的渲染方法和通过变量的调用相同。唯一的区别是：如果通过 `variable` 属性调用日期变量，将返回完整的日期。相反地，宏调用则只返回原本要渲染的日期成分。例如：

### 范围分隔符

​ "citation-number" 和 "year-suffix" 变量的折叠范围以短划线分隔，例如 "（1-3，5）" 和 "（Doe 2000a-c，e）"。

​ "locator" 变量总是使用一个短划线代替任意的连字符。对 "page" 变量来说，只有 `cs:style` 中的 `page-ran ge-format` 属性被设置时，替换才会执行（见 [页码范围](#范围分隔符)）。

### 格式化（formatting）

​ 下面的属性可以在 `cs:date`, `cs:date-part`, `cs:et-al`, `cs:group`, `cs:label`, `cs:layout`, `cs:name`, `cs:name-part`, `cs:names`, `cs:number` 和 `cs:text` 中设置：

`font-style`

用来设置字体，可能的值为：

- "normal" 默认
- "italic" 设置文字的斜体
- "oblique" 设置没有斜体的文字倾斜

`font-variant`

Allows for the use of small capitals, 值可以设置为：

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

### 词缀（affixes）

​ 前缀属性 `prefix` 和后缀属性 `suffix` 可以在 `cs:date`（使用 `cs:date` 定义本地化格式除外），`cs:date-part`（`cs:date` 调用本地化格式除外）、`cs:group`、`cs:label`、`cs:layout`、`cs:name`、`cs:names`、`cs:number` 以及 `cs:text` 中设置。属性值用来在输出的前面或者后面添加东西，但是只有输出的时候才会渲染。除在 `cs:layout` 中设置外，词缀将出现在同一个元素的 [格式化](#格式化formatting)、[引用](#引述quotes)、[strip-periods](#剥除句点strip-periods) 和 [text-case](#文本大小写text-case) 的影响范围的外面，也就是这些属性的设置对前缀和后缀没有影响。作为一种解决方法，在父元素 `cs:group` 中设置上述属性，会产生影响。

### 分隔符（delimiter）

​ `delimiter` 属性可以在 `cs:date`（用来分隔日期的各部分，如年和月；在 `cs:date` 调用本地化格日期格式时，分隔符将被禁用）、`cs:name`（分隔名称变量中不同的名字列表）、`cs:name`（分隔名字列表中的名字）、`cs:group` 以及 `cs;layout`（分隔子元素的输出）中设置分隔符。

### 显示（display）

`display` 属性可用于将各个参考文献条目构成一个或者多个文本块。如果使用该属性，所有的渲染元素都在该属性的控制下。（译注：是用来设置对齐效果的）属性可能的值为：

- "block" - 两边对其
- "left-margin" - 左对齐。
- "right-inline" - 右对齐
- "indent" - 缩进。

**例**

A. 除使用 `second-field-align` 外，使用 `left-margin` 和 `roght-inline` 可以实现相同的渲染效果。这种操作方式潜在的好处是，可以在最终的输出中进一步控制块的格式，例如，在 HTML 的 CSS 或者 Word 的样式中。

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

### 引述（quotes）

​ `quotes` 属性可以在 `cs:text` 中设置。当设置为 `true` 时（默认为 `false`），渲染文本将会被包含在引用中。本地化的 `punctuation-in-quote` 选项控制用来连接的逗号或者句号是出现在引号的内部还是外部（默认外部），见 [Locale options](#本地化选项)。

### 剥除句点（Strip-periods）

​ `strip-periods` 属性可以在 `cs:label` 或者 `cd:text` 中设置，此外，当 `name` 被设置为 `month` 时，也可以在 `cs:date-part` 中设置。当该属性被设置为 `true` 的时候（默认的是 `false`），所有文本中的句号（英文中为点）将会被删除。

### 文本大小写（text-case）

​ `text-case` 属性可以在 `cs:date`、`cs:date-part`、`cs:label`、`cs:name-part`、`cs:number` 和 `cs:text` 中设置，可设置的值为：

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

两种情况下，`stop words` 必须是小写的，除非他们是第一个或者对后一个单词，或者跟在冒号后面。`stop words` 包括：`a", "an", "and", "as", "at", "but", "by", "down", "for", "from", "in", "into", "nor", "of", "on", "onto", "or", "over", "so", "the", "till", "to", "up", "via", "with",  "yet`.

**非英语项目**

​ 由于许多语言不使用标题大小写，标题大小写转换 (在 "Text-case" 中设置为 "title") 仅影响英语项目。

​ 如果 `cs:style` 中的 `default-locale` 属性没有设置，或者设置为 `en` 开头的单词，则假定为英语环境。如果某项的元数据包含一个语言字段，而且该字段不是以 `en` 开头的，才被视为是非英语环境。

​ 同样的，`default-locale` 被这是为除 `en` 开头的字段，就假定为非英语。如果项目是以 `en` 开头的字段，就被视为是英语。

## 附录 I 学科分类

::: info WIP
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

::: info WIP
此小节正在施工中
:::

术语在本地化文件中使用

### 定位词（Locators）

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

## 附录 III 条目类型

::: info WIP
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

::: info WIP
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

### 名称变量

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

::: info WIP
此小节正在施工中
:::

`cs:style` 元素中的 `page-range-format` 表示了页码的缩写规则，其取值可能是：

`chicago`

| 第一个数字                              | 第二个数字                                         | 例                                   |
| --------------------------------------- | -------------------------------------------------- | ------------------------------------ |
| 小于 100                                | 使用所有的位数                                     | 3–10; 71–72                          |
| 100 或者 100 的整数                     | 使用所有的位数                                     | 100–104; 600–613; 1100–1123          |
| 100 到 109（包括对应 100 的倍数的范围） | 仅使用有变化的部分，忽略不需要的 0                 | 107–8; 505–17; 1002–6                |
| 110 到 199（包括对应 100 的倍数的范围） | 根据需要使用两位数或者更多                         | 321–25; 415–532; 11564–68; 13792–803 |
| 4 位数                                  | 如果数字是 4 位并且其中有 3 位不同，使用所有的位数 | 1496–1504; 2787–2816                 |

`expanded`

​ 扩展模式，不适用缩写。eg. 「42–45」、「321–328」、「2787–2816」

`minimal`

​ 第二个数字中重复的所有数字都被省略：「42–5」，「321–8」，「2787–816」

`minimal-two`

​ 和 `minimal` 类似，但当第二个数字有两个或者两个以上的数字时，第二个数字至少保留两位。

## 附录 VI 链接

::: info WIP
此小节正在施工中
:::

The CSL syntax does not have support for configuration of links. However, processors should include links on bibliographic references, using the following rules:

If the bibliography entry for an item renders any of the following identifiers, the identifier should be anchored as a link, with the target of the link as follows:

1. `url`: output as is
2. `doi`: prepend with `https://doi.org/`
3. `pmid`: prepend with `https://www.ncbi.nlm.nih.gov/pubmed/`
4. `pmcid`: prepend with `https://www.ncbi.nlm.nih.gov/pmc/articles/`

If the identifier is rendered as a URI, include rendered URI components (e.g. `https://doi.org/`) in the link anchor. Do not include any other affix text in the link anchor (e.g. 「Available from: 」, 「doi: 」, 「PMID: 」).

Citation processors should include an option flag for calling applications to disable bibliography linking behavior.
