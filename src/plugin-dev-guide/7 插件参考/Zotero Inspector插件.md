---
title: Zotero Inspector插件
date: 2023-08-26 10:06:59
updated: 2023-07-20 16:51:54
---
Zotero Inspector插件

# Zotero DOM Inspector

Add [dom-inspector](https://github.com/luoye-fe/dom-inspector) to Zotero.

<img src="https://cdn.nlark.com/yuque/0/2022/png/1818941/1662522132369-83854c76-2e77-48dd-8f1b-5d8a48f42228.png" width="722" id="ubc9c72b5" class="ne-image">

## Usage

- main menu

- tools

- developer

- Show DOM Inspector

<img src="https://cdn.nlark.com/yuque/0/2022/png/1818941/1662522141607-ec2fbd13-736f-480e-9b96-5784b931402b.png" width="778" id="u13bff258" class="ne-image">

```
const reader = Zotero.Reader.getByTabID(Zotero_Tabs.selectedID);
        
reader._iframeWindow.eval('inspector.disable()')  // pdf viewer
reader._window[3].eval('inspector.enable()')  // note editor
```