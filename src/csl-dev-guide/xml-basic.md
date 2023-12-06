---
title: XML 基础
date: 2022-08-01 16:23:04
updated: 2022-08-03 10:17:53
---

# XML 基础

> [!warning]
> 此页面正在施工中。

`CSL` 基于 `XML(eXtensible Markup Language)`。`XML` 是一种标记语言，这里只介绍基本的术语，以理解 `CSL` 文件格式。

```xml
<?xml version="1.0" encoding="utf-8" standalone="yes" ?>  # 文档声明

<!-- 这是一个注释 -->  # 注释

<hello> # 根元素，文档的第一个元素，有且仅有一个
    # 子元素
    # 属性
    # 元素文本
</hello>
```

上面的代码时一个简单的 `XML` 结构。为了方便说明使用了 `#`符号作为注释符号，`#`并不是真正的注释符号，`XML`的注释格式为文档中的第二行所示的形式。

第一行为声明，或者称为序言，总是在文档的最前面。包括了`XML` 的版本、编码信息以及是否依赖外部文档等。这一行代码会告诉解析器或浏览器这个文件应该按照 XML 规则进行解析。

第二行为 `XML` 文档的注释。格式为 `<!-- 注释-->`。

剩下的代码为 `XML` 文件的根元素，根元素也是元素，根元素是文档的第一个元素，有且仅有一个。

## 元素

元素由开始标签，元素内容和结束标签构成。其中可以包含属性、元素和注释。根元素包含了其他所有元素。

```xml
<title>内容</title>
```

`title` 为元素名。

元素有 4 种形式。

```xml
1. 空元素
<RAM> </RAM>  或者 <RAM/>

2. 带有属性的空元素
<RAM width="100"/>  或者 <RAM width="100"> <RAM/>

3. 带有内容的元素
<Price>21000</Price>

4. 带有内容和属性的元素
<Price MoneyKind="RMB">21000</Price>  # MoneyKind 为属性  21000为元素值
或者是
<NotebookComputer>
Style =" LX2000"
CPU =" PIII600"
RAM ="128M "
</NotebookComputer>

```

所有的元素都包含在根元素中，为根元素的子元素，子元素还还可以包含子元素。

## 属性

属性是对元素及其内容的描述，用 `=` 隔开。属性必须包含在一对单引号或者双引号之间。

```xml
<Movie ID="09001">   # 其中的 id 就是属性  后面的值就是属性值
<title>非诚勿扰</title>  # 子元素
<price>70</price>
</Movie>

# 空元素的属性
<Rectangle Width="100" Height="80"/>

# 属性的另外一种形式
<NotebookComputer>
Style =" LX2000"
CPU =" PIII600"
RAM ="128M "
</NotebookComputer>
```

每个元素中，一个属性最多出现一次，一个属性只能有一个值。

如果属性有多个值，这需要采取 `XML` 协议以外的方式来表示，如采用逗号或分号间隔，对于 [CSS](https://zh.wikipedia.org/wiki/CSS) 类或标识符的名字可用空格来分隔。

## 预定义实体表

`xml` 文件中某些符号无法正常表达，比如 `<` 或者 `>`，不处理的话会导致混乱。

| 所定义的实体 | 所代表的字符 |
| ------------ | ------------ |
| `&lt;`       | <            |
| `&gt;`       | >``          |
| `&quot;`     | "            |
| `&apos;`     | '            |
| `&amp;`      | &            |

```xml
<Para1>John asked &quot;What&apos;s your name?&quot;</Para1>

中间的结果:
John asked "What's your name? "
```
