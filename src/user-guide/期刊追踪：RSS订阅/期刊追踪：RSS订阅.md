---

title: 期刊追踪：RSS订阅
date: 2023-06-28 21:14:03
updated: 2023-07-28 10:38:12
---
期刊追踪：RSS订阅

# 功能简介

- 追踪期刊目录更新
- 追踪数据库中某些【关键词】相关的文献更新情况
- 订阅任意网站的内容更新，例如b站up主的视频更新...

# 1.Zotero订阅设置

在Zotero主界面，左上角工具栏选择<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1665542750005-8ce5c3dd-8af7-4b2a-9cc8-b9110f15c163.png" width="48" id="u185c180f" class="ne-image">**=>新建订阅=>来自URL订阅**

<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1665832702948-e3660b80-d517-49fb-85d3-1d165afeba2a.png" width="330" id="u4826b7a0" class="ne-image">

之后会弹出以下窗口，需要填入**URL，**zotero识别成功之后会自动填入**标题（**可以自己手动更改）并且进行**高级设置，保存**之后即可在主界面左侧**订阅**处看到订阅的内容及更新**。**

<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1665830539524-c8364316-4c87-4a98-9be2-fc02200741ce.png" width="1237" id="u916a71c5" class="ne-image">

<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1665830671151-df889d50-fedb-4cd8-b998-17873685f7dd.png" width="1239" id="yEWEX" class="ne-image">

## 1.1 URL订阅

**“来自URL”是最直接、最方便的添加RSS订阅的方式，只需要提供订阅源的链接即可，是我们用zotero追踪期刊更新时最常用的方式，以下涉及的实例也将基于此方式进行。**

## 1.2 OPML订阅

“**来自OPML**”主要用于之前有使用其它RSS阅读器，从其它阅读器中导入已经订阅的内容至Zotero中，一般用户不会使用此方式，故不过多介绍。

## 1.3 高级设置

<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1665832115963-e5fb38ef-2061-42ae-ae14-0bd014fc2cdc.png" width="397" id="WrcE6" class="ne-image">

【更新订阅每**N**小时】，即设定订阅间隔，每**N**个小时从订阅URL爬取期刊目录，加载在该【订阅】界面。例如《社会学研究》为双月刊，建议从其发刊日时添加订阅，N设定为2X30X24小时。如果N设置为24，则每24小时会刷新一遍订阅，订阅界面会24小时加载一次期刊目录，导致期刊【订阅】界面出现重复文献条目。以下为【订阅】界面因为设置**订阅间隔N**并不契合期刊更新间隔时出现的条目重复示例。

<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1665831246395-fbc56138-0ef9-4435-8fad-1128d8a0f9fa.png" width="525" id="BaQsK" class="ne-image">

订阅间隔设置不当导致的条目重复问题尚未完美的解决方案，只能根据期刊更新周期设定订阅间隔

【删除已读提要题目于之后N天】，即点击了该条目查看右侧的条目详细信息（zotero会自动设置为“已读”状态）N天后在期刊订阅界面删除该条目，如果不想删除已读条目，则将N设置为一个较大的数值，例如1000000。

【删除未读提要条目于之后N天】，即该条目一直处于未点击查看该条目的具体信息，N天后在期刊订阅界面删除该条目。如果不想删除未读条目，则将N设置为一个较大的数值，例如1000000。

以上三项订阅参数的默认设置入口：

Win：**编辑****=>首选项=>高级=>订阅**

Mac：**Zotero****=>首选项=>高级=>订阅**

<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1665835957363-f1b76dcd-b622-414d-bac8-1478379cfb45.png" width="422" id="u3f4eb0f4" class="ne-image">

## 1.4 填入URL后不能自动识别与保存的解决方法

检查或更换网络，重启zotero后第一时间进入订阅填入URL，能够自动识别并填充标题即可成功订阅；部分URL需要在科学网络的情况下才能识别成功，因此此时需要保证自己的网络足够科学。

# 2.中文期刊订阅——以知网为例

进入[知网期刊导航界面](https://navi.cnki.net/knavi/journals/index?uniplatform=NZKPT)，在【搜索框🔍】输入想要订阅的【中文期刊全称】，并点击【出版来源检索】

<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1665831655647-0d386e5f-8462-4e01-82ae-00c8c3e09387.png" width="1278" id="uc01984aa" class="ne-image">

在搜索结果界面，点击进入期刊页面

<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1665831684722-dcb6f3c7-70f2-4930-a1f1-8165e0a8cee7.png" width="844" id="A1M5d" class="ne-image">

在期刊主页左上角找到并点击【RSS订阅】

<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1665831750438-08dc9529-929d-4380-80d1-39a3c22a4437.png" width="1202" id="u7c58de7f" class="ne-image">

复制浏览器地址栏中的URL，进入zotero

<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1665831858914-62eb0643-978b-4ff4-a52a-e12356c259a1.png" width="1112" id="u7f780c73" class="ne-image">

在Zotero主界面，左上角工具栏选择<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1665542750005-8ce5c3dd-8af7-4b2a-9cc8-b9110f15c163.png" width="48" id="MVnNT" class="ne-image">**=>新建订阅=>来自URL订阅，在弹出的界面填入URL，自动识别好标题之后自己根据需要修改标题**（zotero不会根据期刊订阅先后排序，可以手动在期刊名前面加上1234或者字母来排序），并且设置好订阅参数，点击【保存】，即可在左侧订阅界面看到该期刊的目录

<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1665832115963-e5fb38ef-2061-42ae-ae14-0bd014fc2cdc.png" width="397" id="u30bfa7bf" class="ne-image">

<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1665832846805-231b29ca-1142-458d-9842-b29e06216761.png" width="903" id="u514456e1" class="ne-image">

# 3.英文期刊订阅——以Annual Review of Psychology为例

打开[Annual Review of Psychology](https://www.annualreviews.org/journal/psych)网页，找到右上角的RSS feed<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1666180901638-d766e1a7-4334-41e1-b177-faf1fde7aab1.png" width="21" id="udc050c3b" class="ne-image">符号，点击打开

<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1666181020361-eef9eaaa-50f1-4bd6-ac1f-2a79a3a94cc8.png" width="1426" id="u5c68fea0" class="ne-image">

打开之后如下图示，**复制浏览器地址栏的URL链接**

<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1666181123966-9f4abfa9-7ccc-48dc-a496-fe9ae2433bf0.png" width="1157" id="u5f4fa689" class="ne-image">

在Zotero主界面，左上角工具栏选择<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1665542750005-8ce5c3dd-8af7-4b2a-9cc8-b9110f15c163.png" width="48" id="ghkMC" class="ne-image">**=>新建订阅=>来自URL订阅，在弹出的窗口中把刚刚复制的链接粘贴到“URL”中，**zotero会自动识别并填入标题（标题出来之后自己可以自定义修改）**，并参照本章1.3设置好高级选项**的内容，**点击保存**，即可在主界面**“订阅”**处看到该期刊的最新期刊目录。

<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1666181092973-1d1b0f5d-668a-4dcd-9582-b1c1c5606be6.png" width="403" id="u63d43f43" class="ne-image">

# 4.关键词订阅（PubMed专属）

打开[PubMed](https://pubmed.ncbi.nlm.nih.gov/) 官网，在搜索栏输入你想追踪的文献关键词，例如“heat wave”，点击搜索

<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1666181427364-8ea87f26-62b4-487f-9856-75f8a3a15aab.png" width="1408" id="u5dd141f1" class="ne-image">

如下图示，点击搜索框下面的**“Create RSS”，进入该关键词订阅的设置界面**

<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1666181482157-91b059b8-be4f-462e-9dd2-43a49cdbd961.png" width="1213" id="u4f63ce51" class="ne-image">

在设置界面，修改为合适“Number of items displayed”（追踪的文献条目数量），点击**“Create RSS”,生成“RSS Feed link”后点击copy，将其在zotero订阅设置中填入，**即可订阅追踪该关键词的相关文献进展。<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1666181647659-1b16a761-ff1c-409c-b64b-4f4c433a4241.png" width="1058" id="uf1f2cf69" class="ne-image">

# 5.配合RSSHub Radar订阅任意网站内容——以b站为例

## 5.1 RSSHub Radar 简介

RSSHub Radar 是 [RSSHub](https://www.appinn.com/rssbud-with-rsshub-for-ios/) 的衍生项目，用来快速发现当前网页的 RSS 地址，如果支持 RSSHub 则显示 RSSHub 地址，支持包括**Zotero**、 [Tiny Tiny RSS](https://www.appinn.com/tiny-tiny-rss/)、FreshRSS、Feedly、Inoreader 在内的 11 款阅读器一键订阅。

主要功能：

- 快速发现和订阅当前页面自带的 RSS
- 快速发现和订阅当前页面支持的 RSSHub
- 快速发现当前网站支持的 RSSHub
- 支持一键订阅 RSS 到Tiny Tiny RSS、Miniflux、FreshRSS、Feedly、Inoreader、Feedbin、The Old Reader、Feeds.Pub、本地阅读器

一旦检测出 RSS 地址，RSSHub Radar 就会在角标上显示出数量。

**RSSHub Radar浏览器插件下载与安装（含教程）：**[**Github主页**](https://github.com/DIYgod/RSSHub-Radar)**、**[**Gitee镜像主页**](https://gitee.com/mirrors/RSSHub-Radar)

## 5.2 RSSHub Radar 与Zotero联动

<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1666341763431-210d6992-1373-4c80-8570-8423efb10a51.png" width="1342" id="ue970fd55" class="ne-image">

打开你想关注的UP主（以sharestuff为例），点击浏览器右上角的RSSHub Radar插件图标

<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1666341896376-a528c456-3280-4d1d-b4da-727b6e06d23c.png" width="626" id="u484ab2bd" class="ne-image">

选择所需要订阅的内容，点击**“复制”，进入zotero进行URL订阅**即可

# 6.从“订阅”添加文献条目到“我的文库”/“群组”

<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1666342189334-2303af8b-daa4-4074-936e-ebf7076167a9.png" width="1239" id="u1cb928c1" class="ne-image">

点开zotero某一期刊/RSS订阅内容，点击具体条目，看到右侧的信息栏，**点击右侧信息栏的▽倒三角图标**，选择你想要保存到的本地文库文件夹📂/在线群组文件夹📂，再点击**“添加到XXXX”**，即可从订阅中添加到自己的文献库中。<img src="https://cdn.nlark.com/yuque/0/2022/png/33624520/1666683574440-97bbd270-c1e9-4829-a0eb-baa85cb3d1f0.png" width="200" id="udb72ea7e" class="ne-image">
