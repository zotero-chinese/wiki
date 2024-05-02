---
title: CSL 介绍
order: 1
date: 2022-08-01 16:23:04
updated: 2023-07-22 20:42:39
---

# CSL 介绍

## 前言

本节是对 [Citation Style Language](http://citationstyles.org/)（CSL）的简单介绍，CSL 是一种基于 XML 的开放 (开源) 语言，用于描述引注和参考文献表的格式。对 CSL 更技术性、更深入的说明见 [CSL 规范](specification.md)。

## 什么是 CSL

如果你写过论文的话，你很可能在其中引用了别人的工作。参考文献在学术交流中至关重要，它可以交代缘由，并且把已发表的研究联系到一起。但是，手动设置引注格式和参考文献表非常耗时，尤其是当你面对的期刊都有他们自己的引用格式的时候。

好在参考文献管理软件可以解决这样的问题。像 Zotero、Mendeley、Papers 等软件不仅能帮助你管理研究资料，而且可以自动生成引注和参考文献表。但要想设置特定的引用格式，这些程序需要使用一种可被计算机理解的语言来描述各种引用格式，也许你已经猜到，这种语言就是 Citation Style Language（CSL）。

## 引用格式

世界上有成百上千种不同的引用格式。

::: tip (GB/T 7714-2015)

在中国，最常见的引用格式是国家标准《[信息与文献　参考文献著录规则](https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D8055ED3A7E05397BE0A0AB82A)》，最新的标准号是 `(GB/T 7714-2015)`。

:::

可幸的是，绝大多数引用格式都属于几个基本类别，CSL 将引用格式分为以下类型：

### In-text 风格

引用格式可以分为两个主要的类型。第一种类型就是 `in-text` 风格，在这种风格中，一个引注直接指向参考文献表中的一个或者多个条目。CSL 继续将这种风格细分为 `author-date`、`author`、`numeric` 和 `label` 风格。

每个引注都指向一个或者多个参考文献条目。在 CSL 中，每个独立的指向关系称为一个引用。例如，引注 `(Doe et al. 2002, Smith 1997)` 包含两个引用：一个是 `Doe et al.` 在 2002 年发表的文献，另一个是 Smith 于 1997 年发表的文献。在 CSL 的语境中，参考文献表中的条目有时也称为参考文献。

#### author-date 和 author 风格

`author-date` 风格的引用会显示作者名字和发表的日期，例如：`(Van der Klei et al. 1991; Zwart et al. 1983)`。而 `author` 风格的引用只显示作者名字，例如：`(Gidijala et al.)`。参考文献条目一般使用字母表顺序对作者进行排序。

::: tip 著者-出版年制

国标中的“著者-出版年制”就属于 `author-date` 风格。

:::

应该注意的是，即使这些风格中的大多数与哈佛大学并没有联系，许多风格指南仍使用了令人疑惑的术语“Harvard”来指代”`author-date` 格式。而且，并不存在一个所谓的官方 Harvard 格式。

::: info 参考文献条目实例

Gidijala L, Bovenberg RA, Klaassen P, van der Klei IJ, Veenhuis M, et al. (2008) Production of functionally active _Penicillium chrysogenum_ isopenicillin N synthase in the yeast _Hansenula polymorpha_. BMC Biotechnol 8: 29.

van der Klei IJ, Harder W, Veenhuis M (1991) Methanol metabolism in a peroxisome-deficient mutant of _Hansenula polymorpha_: a physiological study. Arch Microbiol 156: 15-23.

Zwart KB, Veenhuis M, Harder W (1983) Significance of yeast peroxisomes in the metabolism of choline and ethanolamine. Antonie van Leeuwenhoek 49: 369-385.

:::

#### numeric 风格

`numeric` 风格的引用由数字组成，比如 `[1,2]` 和 `[3]`。参考文献条目一般按照作者首字母或者首次引用的次序来进行排序。

::: tip 顺序编码制

国标中的“顺序编码制”就属于 `numeric` 风格。

:::

::: info 参考文献条目实例

1. Gidijala L, Bovenberg RA, Klaassen P, van der Klei IJ, Veenhuis M, et al. (2008) Production of functionally active _Penicillium chrysogenum_ isopenicillin N synthase in the yeast _Hansenula polymorpha_. BMC Biotechnol 8: 29.

2. Zwart KB, Veenhuis M, Harder W (1983) Significance of yeast peroxisomes in the metabolism of choline and ethanolamine. Antonie van Leeuwenhoek 49: 369-385.

3. van der Klei IJ, Harder W, Veenhuis M (1991) Methanol metabolism in a peroxisome-deficient mutant of _Hansenula polymorpha_: a physiological study. Arch Microbiol 156: 15-23.

:::

#### numeric 复合风格

复合风格是 `numeric` 风格的变体。这种风格在化学领域很流行，参考文献条目可能会包含多个参考文献。一旦某个引注定义了一个这样的参考文献条目（如 `[2]`），就可以单独引用条目中的项目（如 `[2b]`）。

::: warning

CSL 尚未支持这种格式。

:::

::: info 参考文献条目实例

1. Gidijala L, et al. (2008) BMC Biotechnol 8: 29.

2. a) Zwart KB, et al. (1983) Antonie van Leeuwenhoek 49: 369-385, b) van der Klei IJ, et al. (1991) Arch Microbiol 156: 15-23.

:::

#### Label 风格

`Label` 风格的引注由简短的**键**构成，例如 `[GBKv2008]` 和 `[ZwVH1983; vaHV1991]`。这些键也出现在参考文献条目中。因为目前不支持（特定风格的）自定义键格式，CSL 对这种格式支持有限。

::: tip 键（key）

“键”在计算机领域具有丰富的含义，在这里，它是指一串代表被引文献的字符。

:::

::: info 参考文献条目实例

\[GBKv2008] Gidijala L, Bovenberg RA, Klaassen P, van der Klei IJ, Veenhuis M, et al. (2008) Production of functionally active _Penicillium chrysogenum_ isopenicillin N synthase in the yeast _Hansenula polymorpha_. BMC Biotechnol 8: 29.

\[vaHV1991] van der Klei IJ, Harder W, Veenhuis M (1991) Methanol metabolism in a peroxisome-deficient mutant of _Hansenula polymorpha_: a physiological study. Arch Microbiol 156: 15-23.

\[ZwVH1983] Zwart KB, Veenhuis M, Harder W (1983) Significance of yeast peroxisomes in the metabolism of choline and ethanolamine. Antonie van Leeuwenhoek 49: 369-385.

:::

### Note 风格

引用格式的第二类为 `note` 风格。这种风格中，引用文献时会在句子中插入一个标记，这个标记可以是数字或者符号，例如 `[*]` 和 `[†]`。每个标记都指向脚注或者尾注。CSL 不限制采用哪些数字格式或者符号作为标记，这些应该留交文字处理软件来完成。与前面的 `in-text` 风格的引注不同，尾注或脚注通常包含辨识引用文献所需的所有信息。有些 `note` 风格还包含一个参考文献表以显示所有被引文献的概貌，并对文献作更详细的描述。

:::tip 字处理软件

字处理软件，即用于将文字格式化和排版的办公软件，如 Microsoft Word，国内常见的 WPS 就是“文字处理软件（Word Process Software）”的英文缩写。

:::

::: info 参考文献条目实例

\[\*] Voyage to St. Kilda’ (3rd edit. 1753), p. 37.

\[†] Sir J. E. Tennent, ‘Ceylon,’ vol. ii. 1859, p. 107.

:::

## CSL 生态

要明白 CSL 是怎么运作的，首先来看看 CSL 生态系统的各个部分。

![csl-infrastructure](https://docs.citationstyles.org/en/stable/_images/csl-infrastructure.png)

:::tip 图注

“Style”指的是 CSL 样式，“Item Metadata”指的是每篇参考文献的作者，题目等信息，“Locale Files”是为实现与语言无关（指英语、汉语等）的格式的本地化文件，“Citation Details”指的是影响引注信息或参考文献表表现的细节，比如顺序、位置等。

:::

### 独立样式和从属样式

CSL 世界中的一切都是围绕样式展开的，但是并不是所有的样式都是相似的。主要包括两种样式：独立样式（independent styles）和从属样（dependent styles）。

独立样式有 2 个职责，首先，需要先定义一种引用格式。具体格式是什么样的，是 `author-date` 风格还是 `note` 风格？ 引用是按字母排序还是按日期排序？参考文献条目中是不是包含 DOI？使用什么标点符号以及大小写？文献发表年限在文献标题之前还是之后？等等。其次，CSL 样式必须描述它本身，我们称这个自我描述的信息为**样式元数据**。元数据中可以包括该 CSL 样式对应的期刊标题，以及该期刊的网站，该 CSL 样式的创建者等。

从属样式则仅包括样式元数据。从属样式仅需引用一个独立样式 (其“父样式”)，且应用父样式的引用格式，而无需提供对引用格式的定义。

当多个 CSL 样式共享相同的引用格式时，从属格式非常有用。以一个出版社旗下的不同期刊为例，如果限制只能使用独立样式，则虽然他们的引用格式都是相同的，但每个期刊的 CSL 样式都要包含对引用格式的完整定义。这会产生大量难以维护的 CSL 样式。如果出版社对它的引用格式作了一点小改动，我们将不得不更新每一个独立样式。

从属样式正是用来解决这些问题的。例如，《Nature》、《Nature Biotechnology》和 《Nature Chemistry》期刊都使用同样的引用格式。那么，只需为《Nature Biotechnology》和《Nature Chemistry》都创建指向《Nature》的从属样式即可。这样一来，如果 Nature 出版集团想修改《Nature》及其关联期刊的引用格式，只需更改《Nature》 CSL 样式中的引用格式，而无需触及其从属样式。

### 本地化文件

事实上，大多数独立格式并不是完全独立的。

以下面的参考文献为例：

> Hartman, P., Bezos, J. P., Kaphan, S., & Spiegel, J. (1999, September 28). Method and system for placing a purchase order via a communications network. Retrieved from <https://www.google.com/patents/US5960411>

你可以在独立样式中将各种特定语言的信息强行编码到样式中来描述这个引用格式。例如，在最后的链接前加上 `Retrieved from` 这段文本，或者采用 `YYYY, Month DD` 作为日期的格式。但是这样的样式只能在美式英语中使用，如果使你想要这个引用格式的德语版，就必须修改样式中所有对应的翻译和日期格式。

幸运的是，独立样式可以依据 CSL locale file（以下也翻译为“本地化文件”）来实现通用术语的翻译以及日期格式和语法的转换。例如：我们可以重写 CSL 样式以便使用 `retrieved` 和 `from` 的 CSL 术语，并使用本地化的日期格式。如果我们将 CSL 样式的区域设置为美式英语，该样式将从美式英语的本地化文件检索术语的译文和本地化的日期格式，并生成上述引用。但如果将样式区域从英语切换至德语，就会使用德语对应的本地化文件，生成的引用如下：

> Hartman, P., Bezos, J. P., Kaphan, S., & Spiegel, J. (28. September 1999). Method and system for placing a purchase order via a communications network. Abgerufen von <https://www.google.com/patents/US5960411>

因此，通过本地化文件，可以编写与语言无关的 CSL 样式。正如上面所展示的那样，这样的样式可以在不同的语言中轻松切换。但是语言是很复杂的，对于那些已经有本地化文件的语言，CSL 的自动本地化并不能支持所有语言的特性。不过，如果你要自己修改一个 CSL 样式使其满足你所选的语言，语言无关的样式仍然是有意义的。

本地化文件还带来一个好处，我们只需要为每种语言定义一次通用的翻译、日期格式和语法。这样可以保证样式紧凑，并使本地化文件更易于维护。由于给定语言的引用格式并不总是采用某种翻译和日期格式，CSL 样式也可以选择性的重写任何在本地化文件中定义过的数据。

### 条目元数据

接下来就是你所要引用的条目在参考文献表中的具体内容：条目元数据。

例如，一篇期刊文章的参考文献条目可能会显示作者的名字、发表的年份、文章标题、期刊名称、卷和期、出现的页码范围以及 DOI，所有这些信息都有助于读者识别和查找这篇文章。

参考文献管理软件使创建条目的文库变得简单。虽然许多参考文献管理软件都有它们自己存储条目元数据的方式，但大多数都支持例如 BixTex 和 RIS 这样通用的参考文献数据交换格式。citeproc-js CSL 处理器引入了一种基于 JSON 的格式，这种格式以 citeproc-js 可以理解的方式来存储元数据。一些其他的 CSL 处理器也已经开始采用这种 CSL JSON 格式（又名 citeproc JSON）。

### 引用细节

对于一种给定的引用格式，引注和参考文献表的展现方式不仅取决于被引用条目的元数据，还取决于这些条目被引用处的上下文。我们将这类特定于上下文的信息称为**引用细节**。

例如，条目的引用顺序会影响他们在参考文献表中的位置。在 `Note` 风格中，之前已被引用的条目在被继续引用时会写为更紧凑的形式。另一个例子是定位词，其引导读者到被引工作的特定位置，比方说章节中某个参数被提出的页码，例如 `(Doe 2000, pp.43-44)`。

### CSL 处理器

有了 CSL 样式、locale file、元数据和引用细节，我们现在需要一个软件来解析这些信息，并以正确的格式生成引注和参考文献表条目，那就是 CSL 处理器。

大多数的参考文献管理软件使用的是像 `citeproc-js` 这样免费开源的 CSL 处理器。

## 理解 CSL 样式

到现在为止，我们已经了解了什么是 CSL、怎么使用它、以及它是如何运作的。接下来我们将深入到 CSL 样式文件内部，分析它的 XML 代码。

《XML 基础》一章中简单介绍了 XML，看完后可以读懂并编辑简单的 XML 文件。如果想深入了解 XML，可以在网上查找 XML 教程。

### 从属样式解析

正如前文所述，从属样式比相对的独立样式更紧凑，因为它们并未真正地定义一个引用格式。此外，从属样式还非常常见，并且它们的样式元数据和独立样式中的相似，因此对学习 CSL 而言是一个好的出发点。我们将进一步逐行观察下面这个 CSL 从属样式文件：

```xml
<?xml version="1.0" encoding="utf-8"?>
<style xmlns="http://purl.org/net/xbiblio/csl" version="1.0" default-locale="en-US">
  <!-- Generated with https://github.com/citation-style-language/utilities/tree/master/generate_dependent_styles/data/asm -->
  <info>
    <title>Applied and Environmental Microbiology</title>
    <id>http://www.zotero.org/styles/applied-and-environmental-microbiology</id>
    <link href="http://www.zotero.org/styles/applied-and-environmental-microbiology" rel="self"/>
    <link href="http://www.zotero.org/styles/american-society-for-microbiology" rel="independent-parent"/>
    <link href="http://aem.asm.org/" rel="documentation"/>
    <category citation-format="numeric"/>
    <category field="biology"/>
    <issn>0099-2240</issn>
    <eissn>1098-5336</eissn>
    <updated>2014-04-30T03:45:36+00:00</updated>
    <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
  </info>
</style>
```

```xml
<?xml version="1.0" encoding="utf-8"?>
```

XML 格式声明。

```xml
<style xmlns="http://purl.org/net/xbiblio/csl" version="1.0" default-locale="en-US">
    ...
</style>
```

`cs:style` 根元素的起始标签和结束标签。`xmlns` 属性指定 `style` 中的所有元素都是 CSL 的一部分，而 `version` 则表明了 CSL 版本的兼容性。`defaults-locale` 告诉样式才有特定的语言来生成引注和参考文献表（美式英语）。

:::tip

`xmlns` 是 XML name space 的缩写，“name space”一般译为**命名空间**，即一些名称的集合。XML 标记语言允许创建者自定义各种标签和属性的名称，同一个名称在不同场合可能有不同的含义，因此有必要向读者交代这些名称的定义。虽然可以通过在 XML 中书写注释来阐述这些名称，但为了方便起见，一般在一个网页给出这一系列名称的定义和说明，并通过 `xmlns` 属性链接到 XML 文件中，基于 XML 的 `CSL Style` 也不例外。

本文用 `cs:style` 特指 CSL 命名空间中的 `style` 元素（因为我们可能会引入其他命名空间），实际书写代码时并不需要写成 `<cs:style>...</cs:style>`。

:::

```xml
 <!-- Generated with https://github.com/citation-style-language/utilities/tree/master/generate_dependent_styles/data/asm -->
```

大多数从属格式都是电子表格自动生成的。这个 XML 注释明确地指出这个样式已经被生成，并包含了一个指向电子表格的链接。

```xml
<info>
  ...
</info>
```

`cs:info` 小节用于存储样式的大部分元数据。

```xml
<title>Applied and Environmental Microbiology</title>
```

样式的标题（通常也是该样式所适用的期刊的名称）。

```xml
<id>http://www.zotero.org/styles/applied-and-environmental-microbiology</id>
```

样式的 ID，是文献管理软件用来区分不同样式的标志。

```xml
<link href="http://www.zotero.org/styles/applied-and-environmental-microbiology" rel="self"/>
```

样式自身的链接。该链接指向了网上的副本。简便起见，对于我们代码仓库中的样式，我们采用相同的 URL 作为样式 ID 和自身链接。

```xml
<link href="http://www.zotero.org/styles/american-society-for-microbiology" rel="independent-parent"/>
```

从属样式需要链接到一个独立的父样式，父样式为的引用格式将会应用到这个从属样式中。此处，我们使用 American Society for Microbiology 的样式作为父样式。

```xml
<link href="http://aem.asm.org/" rel="documentation"/>
```

如果每一个样式的意图都是清晰的，那维护起一大堆 CSL 样式将更方便。因此我们要求我们的代码仓库中的样式都必须至少包含一个“说明文档”的链接。在本例中，该链接指向期刊主页。

```xml
<category citation-format="numeric"/>
<category field="biology"/>
```

为了便于对我们的样式进行分类，我们用 `cs:category` 元素的 `citation-format` 属性中指定引用格式。出于同样的目的，我们使用 `field` 属性为每个样式文件分配一个或多个研究领域。

```xml
<issn>0099-2240</issn>
<eissn>1098-5336</eissn>
```

当为某个期刊创建样式时，可以在 `cs:issn` 元素和 `cs:eissn` 元素中保存其印刷品的 `ISSN`（国际标准连续出版物号）和电子版的 `ESSIN`（电子国际标准连续出版物号）。

```xml
<updated>2014-04-30T03:45:36+00:00</updated>
```

`updated` 的内容是一个时间戳，指明样式最后一次更新的时间。

```xml
<rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
```

本文最后一个介绍，但不一定是样式的 `cs:info` 中的最后一个元素，表示这个样式在哪一个版权协议下发布。

### 独立样式解析

最后是一个真正的独立样式，它确切地定义了引用格式（虽然并不是一个实用的样式）。我们代码仓库中的大多数独立样式都比下面这个简化过的例子还要大很多。但我们下面这个 `author-date` 样式仍然是一个有效的样式，并且具有与其他独立样式相同的整体结构。

```xml
<?xml version="1.0" encoding="utf-8"?>
<style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0">
  <info>
    <title>Example Style</title>
    <id>http://www.zotero.org/styles/example</id>
    <link href="http://www.zotero.org/styles/example" rel="self"/>
    <link href="http://www.zotero.org/styles/apa" rel="template"/>
    <link href="http://www.example.com/style-guide/" rel="documentation"/>
    <author>
      <name>John Doe</name>
      <email>JohnDoe@example.com</email>
    </author>
    <contributor>
      <name>Jane Doe</name>
    </contributor>
    <contributor>
      <name>Bill Johnson</name>
    </contributor>
    <category citation-format="author-date"/>
    <category field="science">
    <updated>2014-10-15T18:17:09+00:00</updated>
    <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
  </info>
  <locale xml:lang="en">
    <terms>
      <term name="no date">without date</term>
    </terms>
  </locale>
  <macro name="author">
    <names variable="author">
      <name initialize-with="."/>
    </names>
  </macro>
  <macro name="issued-year">
    <choose>
      <if variable="issued">
        <date variable="issued">
          <date-part name="year"/>
        </date>
      </if>
      <else>
        <text term="no date"/>
      </else>
    </choose>
  </macro>
  <citation et-al-min="3" et-al-use-first="1">
    <sort>
      <key macro="author"/>
      <key macro="issued-year"/>
    </sort>
    <layout prefix="(" suffix=")" delimiter="; ">
      <group delimiter=", ">
        <text macro="author"/>
        <text macro="issued-year"/>
      </group>
    </layout>
  </citation>
  <bibliography>
    <sort>
      <key macro="author"/>
      <key macro="issued-year"/>
      <key variable="title"/>
    </sort>
    <layout suffix="." delimiter=", ">
      <group delimiter=". ">
        <text macro="author"/>
        <text macro="issued-year"/>
        <text variable="title"/>
        <text variable="container-title"/>
      </group>
      <group>
        <text variable="volume"/>
        <text variable="issue" prefix="(" suffix=")"/>
      </group>
      <text variable="page"/>
    </layout>
  </bibliography>
</style>
```

#### 样式结构

要理解上面的样式，首先看一下根元素 `cs:style` 的子元素。

```xml
<?xml version="1.0" encoding="utf-8"?>
<style>
  <info/>
  <locale/>
  <macro/>
  <macro/>
  <citation/>
  <bibliography/>
</style>
```

相比于只有 `cs:info` 一个子元素的从属样式，可以看到这里还有其他几个元素。除了 `cs:info` 以外，还有 `cs:locale`、`cs:macro`、`cs:citation` 和 `cs:bibliography`。

这些元素的作用是什么呢？

- 必需的 `cs:info` 元素在在独立样式中的作用和其在从属格式中的相同，都是用来保存样式元数据。
- 可选的 `cs:locale` 元素可以用来**重写**本地化文件中定义过的数据。
- 可选的 `cs:macro` 用来存储 CSL 代码，这些代码可能应用在 `cs:citation`、`cs:bibliography` 或者其他 `cs:macro` 元素中。
- 必需的 `cs:citation` 元素定义引注的格式。
- 可选的 `cs:bibliography` 元素定义参考文献表的格式。

::: tip 重写

"重写"（override）原本是 OOP（一种编程思想）中的概念，指的是重新定义一个已有的方法（即函数）。本文原文写为“overwrite”，即重新定义本地化文件中已有的任何翻译、日期格式，严格来说与译为“重写”的 override 并不是同一个意思。

:::

有了以上简单的认识，下面从 `cs:style` 根元素开始分析。

#### cs:style 根元素

```xml
<style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0">
  ...
</style>
```

我们已经在从属样式的 `cs:style` 元素中见到过 `xmlns` 和 `version` 属性，这个 `class` 是新出现的属性。CSL 处理器通过 `class` 属性区分本样式是 `in-text` 风格还是 `note` 风格。

#### info 元素

独立样式的元数据通常比从属样式的元数据更加全面：

```xml
<info>
  <title>Example Style</title>
  <id>http://www.zotero.org/styles/example</id>
  <link href="http://www.zotero.org/styles/example" rel="self"/>
  <link href="http://www.zotero.org/styles/apa" rel="template"/>
  <link href="http://www.example.com/style-guide/" rel="documentation"/>
  <author>
    <name>John Doe</name>
    <email>JohnDoe@example.com</email>
  </author>
  <contributor>
    <name>Jane Doe</name>
  </contributor>
  <contributor>
    <name>Bill Johnson</name>
  </contributor>
  <category citation-format="author-date"/>
  <category field="science">
  <updated>2014-10-15T18:17:09+00:00</updated>
  <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
</info>
```

`title`、样式 `ID`、`self` 链接、`category`、时间戳和 `license`，其作用与先前介绍的一致，但还是有些许差别。首先，独立样式不依赖父样式。相反，我们通常是提供一个 `template` （模板）链接，以表明当前的独立样式是基于哪一个样式来创建的（CSL 样式很少从头写起，因为改写已有的样式往往比较快速）。本例中，所链接的模板是 APA 样式。此外，我们还倾向于放一个或多个 `documentation` 链接，其指向有关引用格式的在线描述。

为向 CSL 格式的创建者致以谢意，也可以把他们的名字和联系方式添加到样式文件中。在当前的例子中，有一个作者和两个贡献者。通常来说，作者完成了创建样式的大部分工作，而贡献者只对此作了一些小的改进。

#### cs:citation 元素和 cs:macro 元素

接下来分析 `cs:macros` 和 `cs:citation` 元素。`cs:citation` 元素旨在描述引注的格式（对于 `note` 风格而言，就是脚注或者尾注的格式）。

```xml
<macro name="author">
  <names variable="author">
    <name initialize-with="."/>
  </names>
</macro>
<macro name="issued-year">
  <choose>
    <if variable="issued">
      <date variable="issued">
        <date-part name="year"/>
      </date>
    </if>
    <else>
      <text term="no date"/>
    </else>
  </choose>
</macro>
<citation et-al-min="3" et-al-use-first="1">
  <sort>
    <key macro="author"/>
    <key macro="issued-year"/>
  </sort>
  <layout prefix="(" suffix=")" delimiter="; ">
    <group delimiter=", ">
      <text macro="author"/>
      <text macro="issued-year"/>
    </group>
  </layout>
</citation>
```

上面的代码生成类似 `(A.C. Smith et al., 2002; W. Wallace, J. Snow, 1999)` 这样的引注。要理解这种引注格式在 CSL 中是如何编码的，我们首先着眼于 `cs:citation` 元素中的 `cs:layout` 元素。`cs:layout` 元素中的 `prefix` 和 `suffix` 属性定义了引注周围的圆括号，而 `delimiter` 属性的值（`;`）将相邻的引用分开。每个单独的引用都是由 `cs:layout` 的内容来决定的，引用由 `author` 和 `issue-year` 宏的输出组成，并以`cs:group` 元素上的 `delimiter` 属性（`,`）分隔。

::: tip 宏（macro）

在英语中，macro 一词的本义是“巨大的、大量的”，与之对应的是 micro “微小的”。在计算机领域，macro 来源于 macro-instruction（宏命令），与之对应的是 micro-instruction（微命令）。micro-instruction 可以理解为基本的、小段的、零碎的代码，而 macro-instruction 就是**一系列需要反复使用的小段代码**的总称——一大段代码。对于支持 macro 的编程语言，当某段代码需要反复使用时，只需将这段代码定义为 macro，随后的代码中就可以用这个 macro 的名称来代表这一大段代码。之后，这些 macro 会被计算机替换为它所代表的小段代码，这一过程称为**宏展开**。

在 CSL 中，我们使用 `cs:macro` 元素来定义 macro，`name` 属性的值就是这个 macro 的名字，这个名字一般由短横杠连接的小写单词（因为空格用于分隔属性或属性值）组成，`cs:macro` 的子元素就是它所代表的代码。在这里，我们把 `cs:macro` 元素显示的结果称为它的**输出**。

:::

`author` 宏输出那些存储于所引条目的名称变量 `author` 的名字。`cs:name` 的 `initialize-with` 属性指定**名**应当以缩写显示，并且每个缩写后面附带属性值（`.`）。

::: tip 名称变量（name variable）

名称变量是 CSL 众多变量类型中的一种，即那些代表了某个事物的名称的变量。有关 CSL 的变量类型，详见附录 Ⅳ。

:::

`issued-year` 元素以一个`cs:choose` 元素定义的分支语句开始。如果被引条目具有保存在日期变量 `issued` 的日期，则输出这个日期的年份，否则输出 `no date` 术语的值。

`layout` 元素中的 `group` 元素的 `author` 用来印出在 `author` 元素中存储的值，`issued-year` 则用来印出 `issued-year` 元素储存的值。

你可能会感到奇怪，为什么不直接把上面两个宏中的 CSL 代码放在 `cs:citation` 元素中呢？使用宏有什么好处呢？在上面的例子中，宏的使用简化了 `cs:citation` 元素的结构，使其更易于拓展。此外，上述的两个宏总共被调用了 4 次（两次在 `cs:citation` 元素中，两次在 `cs:bibliography` 元素中），如果不使用宏，必须多次重复这些 CSL 代码。因此宏的使用带来了更紧凑的样式。

还没完，再看 `cs:citation` 元素，它含有两个属性，即 `et-al-min` 和 `et-al-use-first`。这两个属性共同决定了当条目的`author` 名字大于等于 `3` 个的时候，只有第一个名字会被输出，并尾随 `et al` 术语。

最后，`cs:citation` 元素中还包含了 `cs:sort` 元素，`cs:sort` 又包含了两个 `cs:key` 元素。这一部分用来决定一个带有引注的引用如何排序。第一个用来排序的**键**由 `author` 宏的输出组成（CSL 足够智能，可以先根据姓、再根据名进行排序）第一个键具有相同输出的引用将继续根据第二个键进行排序，即 `issued-year` 宏的输出。

::: tip 键（key）

到了这里，“键”是指被引注献中那些用于排序的信息。

:::

#### cs:bibliography 元素

`cs:citation` 负责输出引注和协调引用，`cs:bibliography` 则用于定义参考文献条目的格式。

```xml
<macro name="author">
  <names variable="author">
    <name initialize-with="."/>
  </names>
</macro>
<macro name="issued-year">
  <choose>
    <if variable="issued">
      <date variable="issued">
        <date-part name="year"/>
      </date>
    </if>
    <else>
      <text term="no date"/>
    </else>
  </choose>
</macro>
...
<bibliography>
  <sort>
    <key macro="author"/>
    <key macro="issued-year"/>
    <key variable="title"/>
  </sort>
  <layout suffix="." delimiter=", ">
    <group delimiter=". ">
      <text macro="author"/>
      <text macro="issued-year"/>
      <text variable="title"/>
      <text variable="container-title"/>
    </group>
    <group>
      <text variable="volume"/>
      <text variable="issue" prefix="(" suffix=")"/>
    </group>
    <text variable="page"/>
  </layout>
</bibliography>
```

上述的例子中的 `cs:bibliography` 小节实际上只适用于一种类型：期刊文章。它生成的参考文献条目格式为：

> A.C. Smith, D. Williams, T. Johnson. 2002. Story of my life. Journal of Biographies, 12(2), 24—27. W. Wallace, J. Snow. 1999. Winter is coming. Journal of Climate Dynamics, 6(9), 97—102.

我们是如何定义这种格式的呢？首先，`cs:bibliography` 元素和 `cs:citation` 元素的结构很相似，但这里的 `cs:layout` 元素用来定义每一个独立的参考文献条目的格式。除了 `author` 宏和 `issued-year` 宏，参考文献条目还显示每个条目的 `title` 和 `container-title`（对期刊文章来说，就是期刊的名称），以及这篇文章见刊的 `volume`、`issue`，还有文章所在的页码（`page`）。样式使用 `prefix` 和 `suffix` 属性来将期刊期号括到圆括号里，并依据 `cs:layout` 和 `cs:group` 元素的 `suffix`和 `delimiter` 属性放置了其它的标点。

`cs:bibliography` 也含有一个 `cs:sort` 元素，它有三个键：`author` 和 `issued-year` 宏，以及第三个键——条目的 `title`。

#### cs:locale 元素

我们这个样式的最后一节是 `cs:loacle`。正如我们前面提到的那样，CSL 的本地化文件可以将 CSL 样式快速转换为不同的语言。但是，有时需要重写默认的翻译。

```xml
<locale xml:lang="en">
  <terms>
    <term name="no date">without date</term>
  </terms>
</locale>
```

不出所料，在美式英语的本地化文件中，对 `no date` 术语的输出就是 `no date`。但是在我们的示例样式中，我们想使用 `without date` 来代替它。为了重写默认的翻译，我们可以使用上面所示的 `cs:locale` 元素。对一个没有发行日期的条目，这种重写会导致引注变成这样： `(D. Williams, without date)` 。

`cs:locale` 的 `xml:lang` 属性被设置为 `en`，当样式被用于英语写作的时候，这个属性使 CSL 样式重写 `no date`。如果我们在德语环境中使用这个样式，它将会依据德语的本地化文件输出翻译(`ohne Datum`)。

## 更进一步

这里只对 CSL 进行了简单的介绍，有关 CSL 的更多知识可以查看 CSL 标准文档或者其他参考文档。
