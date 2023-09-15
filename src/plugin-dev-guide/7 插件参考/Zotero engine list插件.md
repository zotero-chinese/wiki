---
title: Zotero engine list插件
date: 2023-08-26 10:06:59
updated: 2023-07-20 16:51:54
---
Zotero engine list插件

[插件官网](https://github.com/arvinxx/zotero-engine-list/)

# 插件说明

一份实用的 Zotero 检索引擎

|     |     |     |     |
| --- | --- | --- | --- |
| **检索引擎** | **简介** | **用处/领域** | **状态** |
| Google | 略   | 通用检索 | ✅   |
| Wikipedia | 维基百科 | 通用检索 | ✅   |
| Google Scholar | 谷歌学术 | 通用论文 | ✅   |
| [Semantic Scholar](https://www.yuque.com/arvinxx/research/semantic-scholar) | 一个基于 AI 构建的论文检索工具，用来找关键论文挺方便 | 通用论文 | ✅   |
| CrossRef | DOI 的综合检索网站，只要有 DOI，用这个检索一般都能找到源网站 | 通用论文 | ✅   |
| ProQuest | 收录了全球各个学科的英文硕士和博士学位论文，并主要提供 1997 年之后学位论文的全文下载。 | 通用论文(硕博) | ✅ ️ |
| [Sci-Hub](https://www.yuque.com/arvinxx/research/sci-hub) | 论文免费下载 | 通用论文 | ✅   |
| ACM | 计算机 HCI 领域论文检索专用 | 计算机/HCI 论文 | ✅   |
| Connected Papers | 这个比较有意思,可以根据一篇论文查询其引用关系,论文综述检索时比较有用 | 文献综述 | ✅   |
| LibGen | 查英文 PDF 的唯一权威 | 英文书籍 | ✅   |
| 豆瓣读书 | 一般用于录入书籍元数据 | 中文书籍 | ✅   |
| 全国图书馆参考咨询联盟 | 查中文书是否有 PDF 的权威网站 | 中文书籍 | ✅   |
| World Cat | 世界最大的图书馆目录网站，豆瓣上查不到的 ISBN 这上面都能查到 | 通用书籍 | ✅   |
| iJournal 爱期刊 | 期刊影响因子检索 | 论文  | ✅   |
| CNKI | 中文论文的检索网，但估计以后是用不到了 | 国内论文 | ✅   |
| 豆瓣电影 | 搜电影,个人用不到 | 电影  | ⛔️  |
| Web of Science | 没用过 | 自然科学/社会科学/人文科学类论文 | ⛔️  |

✅ ：启用状态； ⛔️ ：禁用状态

# 如何使用

### 下载

方法一：直接点击 \[Code\] -> \[Download ZIP\] 下载整个压缩包。解压后，在 src 文件夹下找到 engines.json 文件。

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662264750549-245ccc73-e212-48b4-86d2-62d11faf96f9.png" width="1299" id="u88f66b12" class="ne-image">

方法二：点击右侧 [Releases](https://github.com/arvinxx/zotero-engine-list/releases) 最新版,然后点击 engines.json 进行下载。

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662264750233-8ba6496c-0628-45d1-9285-8601f4dfc8e9.png" width="1182" id="ub7417ace" class="ne-image">

## 手动创建

如果因为网络问题无法下载，可以手动创建一个 engines.json 文本文件，然后将 [src/engines.json](https://github.com/arvinxx/zotero-engine-list/blob/master/src/engines.json) 中所有文本内容复制保存即可。

### 安装

下载完成该引擎文件后，需要将该文件放到 Zotero 库的 locate 目录下面，方可完成安装。 例如，如果 Zotero 路径为 /Users/arvinxx/Zotero，那么把上述文件放到以下目录：

/Users/arvinxx/Zotero/locate

完成放置后，重启 Zotero 即可。

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662264750169-f7a70c25-9a53-45fd-9cb6-d66104fb5c50.png" width="886" id="u0dc04949" class="ne-image">

## 启用的引擎清单

本引擎清单所启用的引擎如下：（只有选中条目后方可查看）

### 图书

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662264750192-8065e81b-0d2f-45c7-8a46-c1b87eb79972.png" width="336" id="uc1ff5982" class="ne-image">

### 论文

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662264750253-d968b813-4bcd-4cc6-8677-77db7577a1b4.png" width="336" id="u79ab2172" class="ne-image">

### 如何添加新引擎

请移步 [创建 Zotero 引擎](https://www.yuque.com/arvinxx/research/create-new-engine)