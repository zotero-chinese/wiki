---
title: CSL 介绍
order: 1
date: 2022-08-01 16:23:04
updated: 2023-07-22 20:42:39
---

# CSL 介绍

> [!warning] WORK IN PROGRESS
> 此页面正在施工中。

### 前言

`CSL` 是一种基于 `XML` 的开放 (开源) 语言，用来描述引用和参考文献的格式。对 `CSL` 更加技术和详细的描述见 [CSL 规范](specification.md)。

### CSL 是什么

如果你写过论文的话，你可能在其中引用了别人的论文。参考文献在学术交流中很重要，因为它可以提供引用的来源，并且可以把已经发表的研究联系到一起。但是，手动设置引用格式和参考文献目录非常耗时，而且不同的期刊有自己的引用格式。

参考文献管理软件可以解决上面的问题。像 Zotero、Mendeley、Papers 等软件不仅能帮助你管理参考文献，而且可以自动地生成引用的参考文献目录。为了设置特定的引用格式，这些软件需要能识别的对引用格式的描述，这种描述就是 Citation Style Language（CSL）。

## 引文格式

> [!warning] WORK IN PROGRESS
> 此页面正在施工中。

引文格式有很多很多种，我们最常用的就是国标（信息与文献 参考文献著录规则），最新的国标代号是 `(GB/T 7714-2015)`。大多数的引用格式都属于几个基本类别，如下：

### In-text Styles

引用格式可以分为两个主要的类型。第一种就是 `in-text styles`，正文中的引用直接指向参考文献目录中的一个或者多个条目。`in-text styles` 还可以细分为 `author-date,author,numeric` 和 `label` 格式。

在 `CSL` 中，每个单独的 `pointer` 称为一个引用。例如，引文 `“(Doe et al. 2002, Smith 1997)”` 包含两个引用：一个是 `Doe et al.` 在 2002 年发表的文献，另外一个是 `Smith`1997 年发表的文献。

#### “author-date” 和 “author” 格式

`author-date` 引用格式会显示作者的名字和发表的日期，比如：`(Van der Klei et al. 1991; Zwart et al. 1983)`。`author` 只显示作者名字，例如：`(Gidijala et al.)`。参考文献条目一般使用字母表顺序对作者进行排序。

应该注意的是，许多引用格式使用了令人疑惑的 `Harvard` 术语来指代 `author-date` 格式，但是大多数这些格式与哈佛大学并没有关系。而且也并不存在一个官方的 `Harvard` 格式。

**参考文献条目实例**

> Gidijala L, Bovenberg RA, Klaassen P, van der Klei IJ, Veenhuis M, et al. (2008) Production of functionally active *Penicillium chrysogenum* isopenicillin N synthase in the yeast *Hansenula polymorpha*. BMC Biotechnol 8: 29.
>
> van der Klei IJ, Harder W, Veenhuis M (1991) Methanol metabolism in a peroxisome-deficient mutant of *Hansenula polymorpha*: a physiological study. Arch Microbiol 156: 15-23.
>
> Zwart KB, Veenhuis M, Harder W (1983) Significance of yeast peroxisomes in the metabolism of choline and ethanolamine. Antonie van Leeuwenhoek 49: 369-385.

#### “numeric”格式

`numeric` 格式由数字组成，比如 `[1,2]` 和 `[3]`。参考文献条目一般使用作者首字母排序或者使用第一次在正文中的引用顺序排序。国标就是一种典型的 `numeric` 格式。

**参考文献条目实例**

>1. Gidijala L, Bovenberg RA, Klaassen P, van der Klei IJ, Veenhuis M, et al. (2008) Production of functionally active *Penicillium chrysogenum* isopenicillin N synthase in the yeast *Hansenula polymorpha*. BMC Biotechnol 8: 29.

>2. Zwart KB, Veenhuis M, Harder W (1983) Significance of yeast peroxisomes in the metabolism of choline and ethanolamine. Antonie van Leeuwenhoek 49: 369-385.

>3. van der Klei IJ, Harder W, Veenhuis M (1991) Methanol metabolism in a peroxisome-deficient mutant of *Hansenula polymorpha*: a physiological study. Arch Microbiol 156: 15-23.

#### "numeric" 复合格式

复合格式是 `numeric` 格式的变体。这种风格在化学领域很流行。`CSL` 中暂时不支持这种格式，这里也不多作介绍。

**参考文献条目实例**

>1. Gidijala L, et al. (2008) BMC Biotechnol 8: 29.

>2. a) Zwart KB, et al. (1983) Antonie van Leeuwenhoek 49: 369-385, b) van der Klei IJ, et al. (1991) Arch Microbiol 156: 15-23.

#### 标签格式

这种引用格式由 `keys` 构成，例 `GBKv2008]` 和 `[ZwVH1983; vaHV1991]`。`CSL` 对这种格式支持有限，这里也不多作介绍。

**参考文献条目实例**

> [GBKv2008] Gidijala L, Bovenberg RA, Klaassen P, van der Klei IJ, Veenhuis M, et al. (2008) Production of functionally active *Penicillium chrysogenum* isopenicillin N synthase in the yeast *Hansenula polymorpha*. BMC Biotechnol 8: 29.
>
> [vaHV1991] van der Klei IJ, Harder W, Veenhuis M (1991) Methanol metabolism in a peroxisome-deficient mutant of *Hansenula polymorpha*: a physiological study. Arch Microbiol 156: 15-23.
>
> [ZwVH1983] Zwart KB, Veenhuis M, Harder W (1983) Significance of yeast peroxisomes in the metabolism of choline and ethanolamine. Antonie van Leeuwenhoek 49: 369-385.

### Note Styles

引用格式的第二类为 `Note` 格式。引用中的 `marker` 可以是数字或者符号，例如 `[*]` 或者 `[†]`。每个 `marker` 指向脚注或者尾注。`CSL` 不能设置使用哪些数字或者符号用于 `marker`，这些应该用字处理软件 (比如 `word`) 设置。与上面的 `in-text` 格式不同，尾注或者脚注通常显示的信息更多。

**参考文献条目实例**

> [*]  Voyage to St. Kilda’ (3rd edit. 1753), p. 37.
>
> [†]  Sir J. E. Tennent, ‘Ceylon,’ vol. ii. 1859, p. 107.

## CSL 生态

> [!warning] WORK IN PROGRESS
> 此页面正在施工中。

要明白 `CSL` 是怎么运作的，首先要了解 `CSL` 的生态。`Style` 指的是 CSL 样式，`Item Metadata` 指的是每篇参考文献的作者，题目等信息，`Locale Files` 是为实现与语言无关（指英语，汉语等）的格式的本地化文件，`Citation Details` 指的是影响引文信息或参考文献列表表现的细节，比如顺序，位置等。

![](https://docs.citationstyles.org/en/stable/_images/csl-infrastructure.png)

### 独立格式和从属格式

`CSL` 的一切都是围绕 `style` 的，但是并不是所有的 `style` 都是相似的。主要包括两种格式：独立格式 `(independent styles)` 和从属格式 `(dependent styles)`。

独立格式有 2 种功能，首先，需要先定义一种引用格式。具体格式是什么样的，是 `author-date` 格式还是 `note` 格式？ 引用的顺序是按字母排序还是按日期排序？参考文献条目中是不是包含 `DOI`？使用什么标点符号以及使用大写还是小写？文献发表年限在文献题目前还是后？等等，这些都是引用格式定义的。第二个功能是：`CSL` 必须是能自我解释的，可以称之为格式的**元数据**。元数据中可以包括该 `CSL` 对应的期刊标题，以及该期刊的联接，该 `CSL` 的创建者等。

从属格式则仅包括格式的元数据，没有对引用格式的定义。从属格式必须指定它的参考格式 (父格式)，从属格式的引用将使用它的父格式的引用格式。

当多个格式使用相同的引用格式时，从属格式非常有用。以一个出版社旗下的不同期刊为例，如果每个期刊都使用独立格式，则每个 `CSL` 都要完整的对引用格式的描述，即使他们的引用格式都是相同的。这样就导致 `CSL` 太庞大，冗余太多。这种情况下，从属格式就比较适合。例如，`"Nature"`，`"Nature Biotechnology"` 和 `"Nature Chemistry"` 都使用同样的引用格式。因此，只需要创建一个 `"Nature"` 的独立格式，将 `"Nature Biotechnology"` 和 `"Nature Chemistry"` 格式都定义为 `"Nature"` 格式的从属格式。这样，如果 `"Nature"` 的出版社想改变引用格式，只需要改变 `"Nature"` 期刊格式的 `CSL` 就可以，不需要改变它的从属格式对应的 `CSL`。

### Locale 文件

事实上，大多数独立格式并不是完全独立的。

以下面的条目为例：

> Hartman, P., Bezos, J. P., Kaphan, S., & Spiegel, J. (1999, September 28). Method and system for placing a purchase order via a communications network. Retrieved from <https://www.google.com/patents/US5960411>

你可以使用一种独立的 `CSL` 格式来描述这个条目，在格式种编码就可以实现。例如，在最后的链接前加上 `"Retrieved from"`，或者使用 `"YYYY, Month DD"` 作为日期的格式。但是这样的一种 `CSL`，只能在美式英语中使用，如果使用德语写作，就必须修改样式中对应的翻译和日期格式。

幸运的是，独立格式可以依据 `CSL locale files`(以下也翻译为 本地化文件 ) 来实现通用项的翻译，日期格式和语法的转换。例如：我们可以重写 `CSL` 格式使用 `"retrieved"` 和 `"from"` 项，并使用本地化的日期格式。如果我们将 `CSL` 样式 (同格式) 的使用环境设置为美式英语，该样式将从 `US English locale file` 检索和翻译对应的项，并生成上述引用。如果将英语换为德语，就会使用德语对应的 `locale file`，生成的引用如下：

>Hartman, P., Bezos, J. P., Kaphan, S., & Spiegel, J. (28. September 1999). Method and system for placing a purchase order via a communications network. Abgerufen von <https://www.google.com/patents/US5960411>

因此，使用 `CSL locale files` ，可以编写与语言无关的 `CSL` 样式。如上面展示的，这样的格式可以轻易的在不同的语言中转换。但是语言是很复杂的，`CSL automatic localization` 并不能支持所有的语言特色。但是，语言无关的样式仍然是有意义的，如果你要自己修改 `CSL` 样式来适应自己选择的语言环境，参考这些语言无关的样式将更容易实现。

`Locale file` 还有一个好处，那就是，我们只需要为每种语言定义一次通用的翻译，日期格式和语法。这样可以保证样式紧凑，并使 `locale file` 更容易维护。由于给定语言的引用格式并不是一直和 `locale file` 中定义的转换格式一致，因此，我们也可以自己选择性的重写任何在 `locale file` 中定义的项目。下面独立格式解析中的 `locale` 元素就是为实现这一功能设置的。

### Item Metadata

接下来就是引用中需要的参考文献条目的细节：条目元数据。

例如：一篇期刊文章可能需要作者的名字，发表的年份，文章题目，期刊名称，卷和期，出现的页码范围以及 `DOI`（数字文献唯一标识），所有这些信息都有助于读者识别和查找这篇文章。

参考文献管理软件可以轻松的创建文献的这些细节信息。但是，很多参考文献管理软件都有自己的格式来存储这些元素据，大多数都支持通用的 `bibliographic exchange formats`，比如 `BixTex` 和 `RIS`。` citeproc-js `CSL 处理器引入了一种基于 `JSON` 的格式，用于以 `citeproc-js` 可以理解的方式来存储元数据。其他的一些 `CSL` 处理器后来采用了这种 `“CSL JSON”` 格式（也称为 `“citeproc JSON”`）。

译者注：这里讲的似乎有些繁琐。总的来说，是我们需要每篇文章的作者，题目，发表期刊等信息来生成对应的条目。文献管理软件可以很方便的提供这些信息。至于其内部存储的方式，使用的时候并不需要关心，类似 `Zotero` 的文献管理软件会自动使用这些信息和 `CSL` 生成引用信息。

### 引用细节

对于给定的引用格式，引文和条目的展示不仅取决于被引用项的元数据，还取决于这些项被引用的上下文。我们将这类特定于上下文的信息称为引用细节。

例如：引用时对条目的排序会影响他们在参考文献中的位置（在下面独立格式的 `citation` 和 `bibliography` 章节中提到）。

### CSL 处理器

有了 CSL 样式，`locale file`，元数据和引用细节，我们现在需要一个软件来解析这些信息，并以正确的格式生成引用和参考文献条目。用来完成这些功能的软件就是 `CSL` 处理器。

大多数的参考文献管理软件使用的是免费开源的 `CSL` 处理器，比如：`citeproc-js`。

## 理解 CSL 格式

> [!warning] WORK IN PROGRESS
> 此页面正在施工中。

到现在为止，我们已经知道什么是 `CSL`、怎么使用它、以及它怎么运作的。接下来我们将深入到 `CSL` 文件内部，分析它的 `XML` 代码。`XML基础.md` 文件中简单介绍了 `XML`，看完后可以读懂并编辑简单的 `XML` 文件。如果想更多的了解 `XML`，可以在网上查找 `XML` 教程。

### 从属格式解析

下面是一个 `CSL` 从属格式文件：

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

如 `XML基础.md` 文件中的描述：一行给出了 `xml` 的声明。根元素为 `style`，其中包含了一个子元素 `info`。`info` 元素中又包含了很多元素，其中很多元素都有内容和属性。`xmlns、version` 和 `defaults-locale` 都是元素 `style` 的属性，分别指定了??、版本和使用的语言，这里为美国英语。

大多数从属格式都是电子表格自动生成的，下面的注释也给出了指向电子表格的联接。

```xml
 <!-- Generated with https://github.com/citation-style-language/utilities/tree/master/generate_dependent_styles/data/asm -->
```

元素 `info` 里包含了大多数 `style` 的元数据，比如：

`style` 的题目（也是期刊的题目）：

```xml
<title>Applied and Environmental Microbiology</title>
```

样式的 ID，是文献管理软件用来区分不同 `style` 的标志：

```xml
<id>http://www.zotero.org/styles/applied-and-environmental-microbiology</id>
```

`style` 自己的链接。该链接指向了网上的副本。

```xml
<link href="http://www.zotero.org/styles/applied-and-environmental-microbiology" rel="self"/>
```

从属格式需要指定它的父格式，父格式为独立格式。这里的父格式为 `American Society for Microbiology`

```xml
<link href="http://www.zotero.org/styles/american-society-for-microbiology" rel="independent-parent"/>
```

为了更好的维护格式，因此需要指定格式的文档链接。这里文档的链接转到了期刊的主页。

```xml
<link href="http://aem.asm.org/" rel="documentation"/>
```

为了便于分类，还可以在 `category` 元素中设置它的属性。这里分别设置了引用格式为 `numeric`，领域为 `biology`。

```xml
<category citation-format="numeric"/>
<category field="biology"/>
```

当期刊创建格式的时候，可以在 `issn` 元素和 `eissn` 元素中保存其打印标准国际连续出版物号 `(ISSN)` 和其电子版本 `(ESSIN)`。

```xml
<issn>0099-2240</issn>
<eissn>1098-5336</eissn>
```

`updated` 元素保存了最后一次更新的时间戳：

```xml
<updated>2014-04-30T03:45:36+00:00</updated>
```

`rights` 元素中保存了该 CSL 格式的证书：

```xml
<rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
```

### 独立格式解析

下面是一个独立格式的实例，实例中定义了引用格式，所以要比从属格式要大一些。这里的示例只是一个简化的例子，实际的格式比这个还要大很多。但这个简化的例子仍然是完整有效的。

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

#### 结构

首先看一下根元素 `style` 的子元素。

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

相比于从属格式只有 `info` 一个子元素，独立格式的根元素有除了 `info·` 以外，还有 `locale 、 macro 、citation、bibliography` 四个子元素。

这些子元素的作用分别是：

- `info` 该元素在独立格式中的作用和从属格式中相同，都是用来保存基本的格式元数据。
- `locale` 该元素可以用来从 `locale file` 中重写 `locale data`
- `macro` 用来存储 CSL 代码，这些代码可能应用在 `citation 、bibliography` 或者其他的 `macro` 元素中。
- `citation` 定义文中引用的格式。
- `bibliography` 定义参考文献目录的格式。

以下从 `style` 根元素开始分析。

#### 根元素/style 元素

```xml
<style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0">
  ...
</style>
```

在从属格式中我们已经了解了 `xmlns` 和 `version` 属性，`class` 是新的属性，用来告诉 `CSL processor`(CSL 处理器) 使用的引用格式是什么。

#### info 元素

独立格式的元数据通常比从属格式的元数据更加全面：

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

`title、style ID、"self" link、categories、time stamp、license` 和从属格式作用都是相同的，但有些许差别。首先，独立格式不依赖父格式，通常是提供一个 `template(模板)` 链接，表明当前的独立格式是以模板格式链接创建的（这样写的原因是，通常情况下，凭空写一个 `CSL` 比较困难，但是借助一个模板改写则容易的多）。这里的模板是 `APA style`。此外，`info` 还倾向于给定一个或者多个 `document` 链接，用来指向引文格式的在线描述。

为了致谢 `CSL` 格式的创建者，他们的名字和联系方式也可以添加到格式文件中。在当前的例子中，有一个作者和两个贡献者。作者通常完成了创建格式的大部分工作，贡献者一般只提供了一些小的改进。

#### citation 元素和 macro 元素

接下来分析 `macros` 和 `citation` 元素。`citation` 元素用来描述引用的格式。

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

上面的代码可以生成类似 `“(A.C. Smith et al., 2002; W. Wallace, J. Snow, 1999)”` 这样的格式。为了理解这种引用格式在 CSL 中式如何编码的，要先分析 `citation` 元素中的 `layout` 元素。`layout` 元素中的 `prefix`、`suffix` 和 `delimiter` 属性分别定义了前缀（这里为 `(`），后缀（这里为 `)`）以及条目分隔符（这里为 `;`）。也就是说整个条目要放在圆括号中，条目之间以 `;` 分隔。每个条目的格式在 `layout` 元素的内容中定义。其内容中的 `group` 元素包括了 `author` 和 `issue-year` macros，并且以 `,` 分隔。

`macro` 元素是一种辅助元素，在其他元素或者其他 `macro` 元素中使用。通过其名字也可以看出，其与其他语言中的 **宏** 类似，这里暂不翻译。每个 `macro` 都含有 `name` 属性。

**注：**以下为了方便描述，将对应的 `macro` 元素直接以 `name` 指代，例：`name` 为 `author` 的 `macro` 元素直接称为 `author` 元素。

``author` 元素的 `name`的属性指定了名称，`variable`属性保存了具体的作者值，`initialize-with` 表明作者值为首字母缩写，每个首字母后面为 `.`。

`issued-year` 元素以分支语句开始，分支语句以 `choose` 元素定义，其中包含 `if` 和 `else` 元素。如果参考文献有日期，则保存在 `issued` 变量中，如果 `issued-year` 元素被引用，日期的年份将被印出，否则就印出 `no date`。

`layout` 元素中的 `group` 元素的 `author` 用来印出在 `author` 元素中存储的值，`issued-year` 则用来印出 `issued-year` 元素储存的值。

为什么不直接把 `macro` 中的内容放在 `citation` 元素中呢？使用 `macro` 有什么好处呢？在上面的例子中，`macro` 的使用简化了 `citation` 元素的结构。此外，上述的两个 `macro` 总共被调用了 4 次（两次在 `citation` 元素中，两次在 `bibliography` 元素中），如果不使用 `macro`，必须多次重复这些代码。因此 `macro` 的使用提供了更紧凑的样式。

再看 `citation` 元素，其中含有两个属性 `et-al-min` 和 `et-al-use-first`。这里的值分别为 `3、1`，表示作者大于等于 `3` 个的时候，使用印出第一个作者，后面跟 `et al` 术语。

`citation` 元素中还包括了 `sort` 元素，其中包括了两个 `key` 元素，用来表明引用的排列顺序。第一个 `key` 元素中引用了 `author` 宏，第二个宏引用了 `issued-year` 宏，表明，先按作者作者字母排序，然后按文献发表年份排序。

#### bibliography 元素

`citation` 元素定义了引用的格式，`bibliography` 定义了参考文献条目的格式。

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

上述的例子中的 `bibliography` 实际上只适用于一种类型：期刊文章。它生成的条目的格式是：

> A.C. Smith, D. Williams, T. Johnson. 2002. Story of my life. Journal of Biographies, 12(2), 24—27. W. Wallace, J. Snow. 1999. Winter is coming. Journal of Climate Dynamics, 6(9), 97—102.

我们怎么定义这种格式呢？首先，`bibliography` 元素的结构和 `citation` 元素很相似，不同的是，这里的 `layout` 元素用来定义参考文献条目的格式。除了给出 `author` 和 `issued-year`，参考文献条目还需要给出每个条目的 `title`、`container-title`(对期刊文章来说，就是期刊的名称)、`volume`、`issue` 和 `page`。这里 `layout` 元素使用属性 `suffix` 和 `delimiter` 分别指定了 `group` 的后缀为 `.`，以及 `group` 之间的分隔符为 `,`。

和 `citation` 元素相同，`bibliography` 也包括了一个 `sort` 元素，用来对参考文献条目进行排序。这里的三个 `key` 分别为 `author`、`issued-year` 和 `title`。

#### locale 元素

最后介绍的是 `loacle` 元素。正如上面写道的，`CSL locale file` 允许 `CSL` 样式快速转换为不同的语言。但是，有时需要覆盖默认翻译。

```xml
<locale xml:lang="en">
  <terms>
    <term name="no date">without date</term>
  </terms>
</locale>
```

对 US English 来说，`"no date"` 项的内容就是 `"no date"`。但是在我们的例子中，我们想使用 `"without date"` 去替换它。为了重写默认的翻译，我们可以使用类似上面的 `locale` 元素。对一个没有日期的条目来说，这种重写会导致引用变为像 `(D. Williams, without date)` 这样的格式。

`locale` 的 `xml:lang` 属性被设置为 `en`，这告诉 CSL 样式当样式被用于英语写作的时候，重写 `"no date"`。如果我们在德语写作的时候使用该 `CSL`，该样式将会依据 `German locale file` 印出德语的翻译 (`ohne Datum`)

## 更进一步

这里只给出了一个基本的介绍。有关 `CSL` 更详细的介绍可以查看 `CSL` 标准文档或者其他参考文档。
