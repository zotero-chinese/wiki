---
title: Zotero mdnote插件
date: 2023-08-26 10:06:59
updated: 2023-07-20 16:51:54
---
Zotero mdnote插件

[插件官网](https://github.com/argenos/zotero-mdnotes)

# 插件说明

A Zotero plugin to export item metadata and notes as markdown files.

# 如何使用

Right now the menu is not context-aware, so read below to see what has to be selected for the menu to correctly create the files. Note that the output of the following options depends on your [configuration](https://github.com/argenos/zotero-mdnotes/blob/master/docs/getting-started/configuration.md), the options below apply for the default settings:

|     |     |     |
| --- | --- | --- |
| **What you want to do** | **What to select** | **Menu** |
| [Export Zotero item metadata file](https://github.com/argenos/zotero-mdnotes/blob/master/docs/getting-started/README.md#export-a-zotero-item-or-notes-to-markdown) | Zotero Item | Export to markdown |
| [Export Zotero notes to markdown](https://github.com/argenos/zotero-mdnotes/blob/master/docs/getting-started/README.md#export-a-zotero-item-or-notes-to-markdown) | Zotero Note | Export to markdown |
| [Create a file for your own notes](https://github.com/argenos/zotero-mdnotes/blob/master/docs/getting-started/README.md#create-a-file-for-your-own-notes) | Zotero Item | Create mdnotes file |
| [Batch export all of the above](http://argenos.github.io/zotero-mdnotes/#batch-export-all-metadata-and-notes) | Zotero Item | Batch export to markdown |

With the exception of Create mdnotes file (for your own notes), you will be asked to choose a path. The file name(s) are automatically chosen based on the naming convention described in the section for each menu.

To access the menu right-click on an item or note:

<img src="https://cdn.nlark.com/yuque/0/2022/gif/32594373/1662264226365-e5371a88-aff0-4829-b761-1e405453ab90.gif" width="1430" id="u735edb8d" class="ne-image">

## Requirements

Tested with Zotero v5.0.89 in Ubuntu 18.04.

It is highly recommended that you have the following plugins installed:

- [Zotfile](http://zotfile.com/)
- [BetterBibtex](https://retorque.re/zotero-better-bibtex/)

I have not tested without them, so I can't guarantee nothing will break.

## Installation

You can install the plugin in Zotero as described [here](https://www.zotero.org/support/plugins):

To install a plugin in Zotero, download its .xpi file to your computer. Then, in Zotero, click “Tools → Add-Ons”, then drag the .xpi for the plugin onto the Add-Ons window that opens

You can grab the latest version of zotero-mdnotes[here](https://github.com/argenos/zotero-mdnotes/releases/latest).