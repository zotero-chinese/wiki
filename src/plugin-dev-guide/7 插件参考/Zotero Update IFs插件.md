---
title: Zotero Update IFs插件
date: 2023-08-26 10:06:59
updated: 2023-07-20 16:51:54
---
Zotero Update IFs插件

[插件官网](https://github.com/redleafnew/zotero-updateifs)

# 插件说明

使用[easyScholar](https://easyscholar.cc/)数据接口版本可见：https://github.com/redleafnew/zotero-updateifsE。

1.  使用期刊名称从唯问(http://sci.justscience.cn/)更新期刊英文期刊的JCR分区、中科院分区、影响因子和5年影响因子，对于中文期刊更新是否CSCD收录、北大核心、科技核心、复合影响因子、综合影响因子。插件主体来源于Zotero Scholar Citations(https://github.com/beloglazov/zotero-scholar-citations)，获取核心期刊信息部分代码来源于茉莉花（https://github.com/l0o0/jasminum/），在此表示感谢。插件安装后在分类及条目上右击会出现从唯问更新期刊信息，点击即可从唯问(http://sci.justscience.cn/)获取JCR分区、中科院分区、影响因子和5年影响因子及中文期刊更新是否南南农大核心期刊、南农大高质量期刊（仅含食品科学与工程）、CSCD收录、北大/南大核心、科技核心、复合影响因子、综合影响因子，并分别写入到档案、存档位置、馆藏目录、索书号、版权字段（可进行设置是否显示和存贮位置），如果没有获取到数据，请核实该期刊有无被SCI索引或直接访问唯问(http://sci.justscience.cn/)查看。
2.  使用期刊名称从唯问(http://sci.justscience.cn/)更新期刊英文期刊的缩写，写入到刊名缩写 （需要在工具-更新期刊信息设置...中进行相关选项设置）。
3.  清除其它字段内容（工具-清除其它内容...）。
4.  给作者加粗、加星、清除加粗、清除加星；将文献题目改为首字母大写；更改期刊题目；更改期刊题目大小写；作者姓名改为词首字母大写；交换作者姓和名；显示配置目录，显示数据目录等小工具（工具-工具箱）。

# 如何使用

从https://github.com/redleafnew/zotero-updateifs/releases下载xpi，然后在Zotero或JurisM中通过Tools-Addons-Install Add-on From File安装。

1.  Update JCR Quartile, CAS Quartile, impact factor and 5 year impact factor using name of the journal from Justscience (http://sci.justscience.cn/). The framework of the present plugin is from Zotero Scholar Citations(https://github.com/beloglazov/zotero-scholar-citations). A context menu Update Journal Infomation from Justscience appears, the JCR Quartile, CAS Quartile, impact factor and 5 year impact factor will be fetched from Justscience (http://sci.justscience.cn/) and stored into the Archive, Loc. in Archive, Library Catalog, Call Number, Rights field (you can set show or not and the target field) if it doesn't work, please check if the journal is indexed or browse Justscience (http://sci.justscience.cn/) for more information.
2.  Get journal abbreviation using name of the journal from Justscience (http://sci.justscience.cn/), set as Journal Abbr (Use Tools-Update IFs Preferences... to set the options).
3.  Remove Extra field content (Tools-Clean Extra Field...).
4.  Bold, asterisk, remove bold, remove asterisk for author name; Change the item(s) title to sentence case; Change publication title; Change publication title case; Author name to title case; Swap author name first and last name; Show the profile and data directory (Use Tools-Toolbox).