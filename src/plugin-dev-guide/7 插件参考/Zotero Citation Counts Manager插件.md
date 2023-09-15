---
title: Zotero Citation Counts Manager插件
date: 2023-08-26 10:06:59
updated: 2023-07-20 16:51:54
---
Zotero Citation Counts Manager插件

[插件官网](https://github.com/eschnett/zotero-citationcounts)

# 插件说明

This is an add-on for [Zotero](https://www.zotero.org/), a research source management tool. The add-on can auto-fetch citation counts for journal articles using various APIs, including [Crossref](https://www.crossref.org/), [Inspire HEP](https://inspirehep.net/),

and [Semantic Scholar](https://www.semanticscholar.org/). [Google Scholar](https://scholar.google.com/) is not supported because automated access is against its terms of service.

Please report any bugs, questions, or feature requests in the Github repository.

Code for this extension is based on the [Zotero DOI Manager](https://github.com/bwiernik/zotero-shortdoi), which is based in part on [Zotero Google Scholar Citations](https://github.com/beloglazov/zotero-scholar-citations) by Anton Beloglazov.

# 如何使用

## Plugin Functions

- Get citation counts: Right-click selected Zotero items and select from "Manage Citation Counts" options. This will replace stored citation counts (if any) and tag results with the current date.
- Currently, Zotero doesn't have any special field for the number of citations, so they are stored in the "Extra" field.

## Installing

- Download the add-on (the .xpi file) from the latest release: https://github.com/eschnett/zotero-citationcounts/releases
- To download the .xpi file, right click it and select 'Save link as'
- Run Zotero (version 6.x)
- Go to Tools -> Add-ons
- Install Add-on From File
- Choose the file zotero-citationcounts-1.3.0.xpi
- Restart Zotero