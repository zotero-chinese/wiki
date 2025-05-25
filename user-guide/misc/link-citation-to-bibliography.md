---
title: 在 Word 中把引注链接到参考文献表
date: 2022-07-29 20:23:17
---

# 在 Word 中把引注链接到参考文献表

## 描述

建立引注（citation）与参考文献表（bibliography）之间的单向超链接，类似于 endnotes 的「Link in-text citations to references in the bibliography」。

[Zotero 官方已为该功能立项](https://github.com/zotero/zotero/issues/4263)，但最终实现可能还需要较长时间。以下提供两种方法来实现为 citation 添加超链接的功能。

::: danger 确保备份数据

请在使用前，认真了解注意事项，并确保已经备份文档！

:::

## Word 宏

通过 Word 宏代码来实现此功能最初是由网友 @antikorpo、@cjac1、@freim86 等人在 [Zotero 论坛](https://forums.zotero.org/discussion/comment/324312/#Comment_324312) 中提出的。@altairwei 重构了这些代码并发布到了 [GitHub](https://github.com/altairwei/ZoteroLinkCitation)。

### 配置及使用

#### 0. 前置条件

- Microsoft Word（推荐使用 2016 或更高版本以确保兼容性）。
- [下载 `ZoteroLinkCitation.bas` 文件](https://raw.githubusercontent.com/altairwei/ZoteroLinkCitation/master/ZoteroLinkCitation.bas)。

#### 1. 打开 VBA 编辑器

1. 打开 Microsoft Word。
2. 按下 `Alt` + `F11` 打开 VBA 编辑器。

#### 2. 导入 VB 脚本

1. 在 VBA 编辑器中，找到左侧的 `Normal` 项，右键点击它并选择 `导入文件（Import File...）`。
2. 找到并选择您的 `ZoteroLinkCitation.bas` 文件，然后点击 `打开` 进行导入。

#### 3. 保存宏启用文档

1. 退出 VBA 编辑器，返回 Word 文档。
2. 将文档保存为启用宏的文档（`.docm`）：
   1. 点击 `文件` > `另存为`。
   2. 选择保存位置。
   3. 在「保存类型」下拉菜单中选择 `启用宏的 Word 文档（*.docm）`。
   4. 点击 `保存`。

#### 4. 调整宏安全设置

1. 转到 `文件` > `选项` > `信任中心` > `信任中心设置...` > `宏设置`。
2. 选择 `禁用所有宏但通知`，以便在保证安全的同时允许宏运行。
3. 点击 `确定`。

#### 5. 运行 `ZoteroLinkCitationAll` 宏

##### 方法一：使用「开发工具」选项卡

1. 如「开发工具」选项卡未显示：
   1. 前往 `文件` > `选项` > `自定义功能区`。
   2. 在右侧勾选 `开发工具`，点击 `确定`。
2. 点击「开发工具」选项卡中的 `宏` 按钮。
3. 从列表中找到并选择 `ZoteroLinkCitationAll`，点击 `运行`。

##### 方法二：快捷键方式

按 `Alt` + `F8`，找到并选择 `ZoteroLinkCitationAll`，点击 `运行`。

##### 方法三：添加快捷按钮

1. 点击 `文件` > `选项` > `快速访问工具栏`。
2. 在「从下列位置选择命令」中选择 `宏`。
3. 选择 `ZoteroLinkCitationAll` 宏。
4. 点击 `添加` 将其添加到快速访问工具栏。

#### 6. 选择一个已有的 Word 文本样式（可选）

`ZoteroLinkCitationAll` 宏运行时会弹出对话框，允许你设置新建超链接所使用的统一 Word 文本样式，方便统一修改链接的颜色、字体、字号等。

### 注意事项

- **宏安全**：仅运行来自可信来源的宏，宏可能包含恶意代码。
- **测试使用**：建议先在非重要文档上测试运行宏，熟悉其效果后再正式使用。
- 手动更新引注时会出现引注已被修改的弹窗。
- 无法实现从参考文献表跳转到引注。
- 同一引注内包含多个引文时，可能链接到错误的参考文献表。

### 已知问题

#### 手动修改引文链接或删除引号可能导致「下标超出范围（Subscript out of range）」错误

如果您手动在引文中添加超链接，或去除了方括号/圆括号，可能会触发「下标超出范围」错误。`ZoteroLinkCitation` 依赖 `[]` 或 `()` 来识别 Zotero 引文的边界，并通过文本解析匹配引文与 CSL 数据。因此，请确保使用该宏前文档处于 Zotero 原始状态。

#### 同一字段中多个引文链接错误到错误的参考文献

该错误通常发生在同一个引文字段中包含多个引文，且文档在「作者 - 日期」期「数字」字”样式之间切换过。

解决方法是定位所有错误匹配的字段，并使用 Zotero Word 插件逐个编辑这些字段。在 Zotero 插件弹出的对话框中，反复勾选/取消勾选「保持来源排序（Keep Sources Sorted）」，以更新引文对象的顺序，使其与 Word 文档中实际引文文本的顺序一致。更新完所有问题字段后，重新运行 `ZoteroLinkCitationAll` 宏。

出现该问题的原因在于，`ZoteroLinkCitation` 依赖引文字段中的顺序，从字段中的 CSL JSON 数据中提取引文标题，并建立与参考文献的链接。

此问题几乎无法通过 VBA 脚本自动解决，目前也没有办法强制 Zotero 在所有字段中更新 CSL JSON 数据中引文对象的顺序。

### 支持的引文样式

#### 作者 - 年份样式

- [美国政治学会 (APSA)](http://www.zotero.org/styles/american-political-science-association) **†**
- [美国心理学会 APA 第七版](http://www.zotero.org/styles/apa) **†**
- [美国社会学会第六/七版](http://www.zotero.org/styles/american-sociological-association) **†**
- [芝加哥手册第 17 版（作者 - 年份）](http://www.zotero.org/styles/chicago-author-date)
- [中国国家标准 GB/T 7714-2015（作者 - 年份）](http://www.zotero.org/styles/china-national-standard-gb-t-7714-2015-author-date) **†**
- [Harvard Cite Them Right 第十二版](http://www.zotero.org/styles/harvard-cite-them-right) **†**
- [Elsevier - Harvard（含标题）](http://www.zotero.org/styles/elsevier-harvard)
- [Molecular Plant](http://www.zotero.org/styles/molecular-plant)

**†** 对于这些样式，默认情况下只有年份部分会链接至参考文献。你可以通过手动修改脚本中的 [参数](https://github.com/altairwei/ZoteroLinkCitation/blob/v0.1.1/ZoteroLinkCitation.bas#L578) `onlyYear` 来更改此默认行为。

#### 数字样式

- [美国化学会 (ACS)](http://www.zotero.org/styles/american-chemical-society)
- [美国医学会 AMA 第十一版](http://www.zotero.org/styles/american-medical-association)
- [中国国家标准 GB/T 7714-2015（数字型）](http://www.zotero.org/styles/china-national-standard-gb-t-7714-2015-numeric)
- [IEEE](http://www.zotero.org/styles/ieee)
- [Nature](http://www.zotero.org/styles/nature)
- [Vancouver](http://www.zotero.org/styles/vancouver)

#### 作者名称样式

- [现代语言协会第九版 (MLA)](http://www.zotero.org/styles/modern-language-association)

## Python 脚本

Python 包 [noterools](https://github.com/Syize/noterools) 提供了可以 Zotero 的引用添加超链接的函数。更多关于该 Python 包的信息请查看 [GitHub 仓库](https://github.com/Syize/noterools)。

- **仅支持 Windows 环境**：由于依赖包限制，该方法仅支持 Windows。
- 为引注创建到参考文献表的链接，支持「顺序编码制」和「作者 - 年份」两种格式。
- 修正参考文献表中没有被正确设置为斜体的刊物名称或出版商名称，仅支持「作者 - 年份」格式，不支持「顺序编码制」。

### 使用方法

1. 使用 pip 安装 `noterools`

```bash
pip install -U noterools
```

2. 创建一个简单的 Python 脚本调用其中的函数，以下是一个简单的示例：

```python
from noterools import Word, add_citation_cross_ref_hook, add_cross_ref_style_hook

if __name__ == '__main__':
    # 你想要添加超链接的 Word 文档路径
    word_file_path = r"E:\Documents\Word\test.docx"
    # 新文档的保存路径
    new_file_path = r"E:\Documents\Word\test_new.docx"

    with Word(word_file_path, save_path=new_file_path) as word:
        # 为顺序引用格式添加超链接
        add_citation_cross_ref_hook(word, is_numbered=True)

        # 为 (作者，年份) 引用格式添加超链接，默认会将参考文献表中没有被正确设置为斜体的刊物名称或出版商设置为斜体
        # 由于 Word 中的超链接默认为蓝色，而 noterools 仅会将超链接添加到 年份 上，所以 作者名称 和 年份 的颜色会不一致
        # add_citation_cross_ref_hook(word, is_numbered=False)

        # 通过设置 color 的值，可以设置整个引用的颜色 (不包含括号)
        # 0: 黑色
        # 16711680: 蓝色
        # 更多颜色请参考 Word 中的颜色枚举类型：https://learn.microsoft.com/en-us/office/vba/api/word.wdcolor
        # add_citation_cross_ref_hook(word, is_numbered=False, color=0)

        # set_container_title_italic 用于控制是否修正参考文献表中没有正确设置为斜体的名称
        # 你可以通过将其设置为 False 来关闭这项功能
        # add_citation_cross_ref_hook(word, is_numbered=False, set_container_title_italic=False)

        # 执行操作
        word.perform()
```

### 缺陷和注意事项

- 手动更新引注时会出现引注已被修改的弹窗。
- 无法实现从参考文献表跳转到引注。
- 当你选择 Unlink Citations 时，添加的所有超链接会失效。
