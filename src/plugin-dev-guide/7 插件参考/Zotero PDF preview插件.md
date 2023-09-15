---
title: Zotero PDF preview插件
date: 2023-08-26 10:06:59
updated: 2023-07-20 16:51:54
---
Zotero PDF preview插件

[插件官网](https://github.com/windingwind/zotero-pdf-preview)

# 插件说明

Preview PDF attachments in the library view.

Fast & easy. Do not require any third-party softwares.

# 如何使用

## Install

- Download the latest release (.xpi file) from the Releases PageNote If you're using Firefox as your browser, right-click the .xpi and select "Save As.."
- In Zotero click Tools in the top menu bar and then click Addons
- Go to the Extensions page and then click the gear icon in the top right.
- Select Install Add-on from file.
- Browse to where you downloaded the .xpi file and select it.
- Restart Zotero, by clicking restart now in the extensions list where the Zotero PDF Translate plugin is now listed.

### Settings

Find settings here: Menubar -> Edit -> Preferences -> Preview

|     |     |     |
| --- | --- | --- |
| **Setting** | **Details** | **Default Value** |
| Enable Preview | Enable to allow the preview behavior. | TRUE |
| Preview in Info Tab | Enable to show the preview in a split view under 'info' tab. | TRUE |
| Preview Position | Preview position in the Info Tab | bottom |
| Preview in 'Preview' Tab | Enable show the preview in a new tab of right sidebar. | TRUE |
| Auto Focus Preview Tab | Enable to focus the preview tab automatically when you select a valid preview item. | FALSE |
| Show Annotations | Enable to show annotations of the PDF files. May slow down the preview speed. | FALSE |
| Show Hovered Page Style | Enable extra style of the hovered page: box shadow and hand cursor. | TRUE |
| Double-click Preview Page to Open/Jump PDF | Enable double-click to open/jump to the selected page of PDF. | TRUE |
| Dark Mode | Enable to preview PDF files in dark mode. This is a naive dark mode and images color may not be displayed correctly. | FALSE |
| Preview First N Pages | See [below](https://github.com/windingwind/zotero-pdf-preview#advanced-usage-of-preview-page-index) | 10  |
| Preview Tab Name | Set the tab label. | preview |

### Advanced Usage of Preview Page Index

A python-style slice command is supported.

Syntax: command1,command2,... Supported Commands:

- Number Number from 1 to last page
- Example: 1 preview page 1

* * *

- Example: 10 preview page 10
- Slice startIndex:stopIndex. The startIndex page is included while the stopIndex page is excluded.
- startIndex or stopIndex may be a negative number, which means it counts from the end of the file instead of the beginning.
- The startIndex or stopIndex may be missing to indicate that starts from the first page or ends at the last page.
- Example: 1:11 preview page 1-10

* * *

- Example: :11 preview page first page(1)-10

* * *

- Example: 10: preview page 10-last page

* * *

- Example: -3: preview last 3 pages

* * *

- Example: :-3 preview page first page(1)-last 3rd page(excluded)

* * *

- Example: : preview every page