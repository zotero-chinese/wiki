---
title: KeepZotero插件
date: 2023-08-26 10:06:59
updated: 2023-07-20 16:51:54
---
KeepZotero插件

[插件官网](https://github.com/yhmtsai/KeepZotero)

# 插件说明

KeepZotero is a zotero plugin to keep zotero in taskbar by changing close to minimize or disabling shortcut

# 如何使用

- Ctrl+W, close button, and Alt+F4 lead minimization
- Ctrl+Q closes Zotero
- close Zotero when it is minimization

# Installation

1.  Download the *.xpi from Release
2.  Start Zotero: Tools -> Add-ons
3.  select "Install Add-on From File..." from the wheel on top right corner
4.  choose the xpi file

# Usage

There are some options to decide KeepZotero's behavior

1.  (Default: yes) When window is not minialized, normal close way lead minialization. This will change the normal close way - the closs button of the window, alt + F4 (Windows), close from taskbar such that they minimized the window. When Zotero is minimized, close from taskbar terminates Zotero.
2.  (Default: yes) Make shortcut Ctrl/Command + W to be minimization Note. this shortcut still works on pdf reader or other place out of the main panel. Clicking File/Close or File/Exit still close the Zotero.
3.  (Default: no) Give a confirmation dialog to avoid Exit. If it is selected, user need to confirm exit to close Zotero. (Unstable, especially MacOS) The followings only have effect on Windows or Linux:
4.  (Default: no) Enable the shortcut Alt + F4 to close entire Zotero. Note. Without this option, Alt + F4 minimizes Zotero.
5.  (Default: yes) Enable the shortcut Ctrl + Q to close entire Zotero. Note. MacOS Command + Q always closes entire Zotero.

Note. When only enable the third option, the Alt + F4 and clicking close button on titlebar will not have the confirmation dialog. However, if also enable the forth option, the Alt + F4 will give the confirmation dialog.

# Different keyboard layout

If the current shortcut is not your usual shortcut (not the personal shortcut) to close the panel, please create an issue with the shortcut.