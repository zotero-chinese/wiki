---
title: Markdown 示例
icon: markdown
order: 2.1
date: 2023-07-21 17:57:47
updated: 2023-07-21 18:15:30
---

<!-- markdownlint-disable -->

# 一级标题 {style="display: block;"}

<!-- markdownlint-restore -->

```md
# 一级标题
```

## 二级标题

```md
## 二级标题
```

### 三级标题

```md
### 三级标题
```

#### 四级标题

```md
#### 四级标题
```

##### 五级标题

```md
##### 五级标题
```

###### 六级标题

```md
###### 六级标题
```

## 文本

这句话里拥有**加粗**、*倾斜*和~~删除~~

```md
这句话里拥有**加粗**、*倾斜*和~~删除~~
```

## 段落

这是一个段落。

这是另一个段落。

```md
这是一个段落
(空一行)
这是另一个段落。
```

## 换行

这是一句话不过我要在这里  
换行且\

再次换行

```md
这是一句话不过我要在这里(空格)(空格)
换行且\
再次换行
```

::: tip

上方的代码中 `这里` 后面有两个空格

:::

## 引用

> 引用也可以连用
>
> > 可以添加额外的大于号制造更深的引用

```md
> 引用也可以连用
>
> > 可以添加额外的大于号制造更深的引用
```

## 列表

### 无序列表

- 无序列表项
- 无序列表项
  - 列表中的列表项
    - 更多的列表项
    - 更多的列表项
    - 更多的列表项
  - 列表中的长列表项，这个列表项很长。

    而且由很多个段落构成。

    甚至最后一个段落还包含了 [链接](#链接)。

- 无序列表项

```md
- 无序列表项
- 无序列表项

  - 列表中的列表项
    - 更多的列表项
    - 更多的列表项
    - 更多的列表项
  - 列表中的长列表项，这个列表项很长。

    而且由很多个段落构成。

    甚至最后一个段落还包含了[链接](#链接)。

- 无序列表项
```

### 有序列表

1. 有序列表第一项
1. 有序列表第二项  
   第二项的需要换行\
   再次换行
1. 有序列表第三项

```md
1. 有序列表第一项
1. 有序列表第二项  
   第二项的需要换行\
   再次换行
1. 有序列表第三项
```

::: tip

上方的代码中 `换行` 后面有也两个空格

:::

## 分割线

---

```md
---
```

## 链接

[相对路径访问主页](../../README.md)

[相对路径访问贡献指南](./CONTRIBUTING.md)

```md
[相对路径访问主页](../../README.md)

[相对路径访问贡献指南](./CONTRIBUTING.md)

```

## 图片

![Logo](../../.vuepress/public/assets/icon/chrome-192.png)

```md
![Logo](../../.vuepress/public/assets/icon/chrome-192.png)
```

## Emoji

经典方式:

:wink: :cry: :laughing: :yum:

```md
:wink: :cry: :laughing: :yum:
```

简写:

8-) :) :\* :( :-) :-( ;)

```md
8-) :) :\* :( :-) :-( ;)
```

::: tip

更多详见 [emoji 列表](https://theme-hope.vuejs.press/zh/cookbook/markdown/emoji/)

:::

## 表格

|     居中      |         右对齐 | 左对齐         |
| :-----------: | -------------: | :------------- |
| 居中使用 `:-:` | 右对齐使用 `-:` | 左对齐使用 `:-` |
|       b       |      aaaaaaaaa | aaaa           |
|       c       |           aaaa | a              |

```md
|     居中      |         右对齐 | 左对齐         |
| :-----------: | -------------: | :------------- |
| 居中使用`:-:` | 右对齐使用`-:` | 左对齐使用`:-` |
|       b       |      aaaaaaaaa | aaaa           |
|       c       |           aaaa | a              |
```

## 代码

行内代码效果: `code`

```md
行内代码效果: `code`
```

缩进代码:

```
// Some comments
line 1 of code
line 2 of code
line 3 of code
```

实际代码:

```md
    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code
```

块级代码

```md
Sample text here...
```

````md
块级代码

```
Sample text here...
```
````

高亮格式:

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

````md
高亮格式:

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```
````

## 告示块

### 提示

::: tip

这是一个提示

:::

```md
::: tip

这是一个提示

:::
```

### 备注

::: note

这是一个备注

:::

```md
::: note

这是一个备注

:::
```

### 注意

::: warning

这是一个警告

:::

```md
::: warning

这是一个警告

:::
```

### 警告

::: danger

这是一个警告

:::

```md
::: danger

这是一个警告

:::
```

## 代码块

::: code-tabs

@tab pnpm

```bash

pnpm add -D vuepress-theme-hope

```

@tab yarn

```bash

yarn add -D vuepress-theme-hope

```

@tab:active npm

```bash

npm i -D vuepress-theme-hope

```

:::

````md
::: code-tabs

@tab pnpm

```bash

pnpm add -D vuepress-theme-hope

```

@tab yarn

```bash

yarn add -D vuepress-theme-hope

```

@tab:active npm

```bash

npm i -D vuepress-theme-hope

```

:::
````

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code-tabs.html)

## 上下角标

19^th^ H~2~O

```md
19^th^ H~2~O
```

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/sup-sub.html)

## 脚注

此文字有脚注.[^first]

[^first]: 这是脚注内容

```md
此文字有脚注.[^first]

[^first]: 这是脚注内容
```

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/footnote.html)

## 标记

你可以标记 ==重要的内容== 。

```md
你可以标记 ==重要的内容== 。
```

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/mark.html)

## 任务列表

- [x] 计划 1
- [ ] 计划 2

```md
- [x] 计划 1
- [ ] 计划 2
```

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/tasklist.html)

## 样式化

向 Mr. Hope 捐赠一杯咖啡。 *Recommended*

```md
向 Mr. Hope 捐赠一杯咖啡。 *Recommended*
```

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize.html)
