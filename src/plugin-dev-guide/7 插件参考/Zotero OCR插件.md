---
title: Zotero OCR插件
date: 2023-08-26 10:06:59
updated: 2023-07-20 16:51:54
---
Zotero OCR插件

[插件官网](https://github.com/UB-Mannheim/zotero-ocr)

# 插件说明

This Zotero plugin adds the functionality to perform an OCR for the PDFs selected in Zotero. It can add a new PDF including the recognized text, a note with the recognized text only, and HTML (HOCR) file(s). Tesseract OCR is used for the text recognition itself.

# 如何使用

## Prerequisites

- Tesseract OCR is installed

- for Windows see https://github.com/UB-Mannheim/tesseract/wiki
- for Linux, Mac see https://tesseract-ocr.github.io/tessdoc/Installation.html

- pdftoppm from poppler library is downloaded and installed

- some hints for the installation: https://github.com/UB-Mannheim/zotero-ocr/wiki/Install-pdftoppm

## Installation

To install the extension:

- Download the XPI file of the [latest release](https://github.com/UB-Mannheim/zotero-ocr/releases).
- In Zotero, go to Tools → Add-ons and drag the .xpi onto the Add-ons window.
- Possibly, adjust the path to Tesseract in the add-on options.

## Configuration

The configuration can be accessed under Tools → Zotero OCR Preferences.

By default the fields for the paths to the OCR engine and pdftoppm are empty, which means, that the usual locations are looked at. If that does not work, then you should locate the tools on your local mashine and enter the full paths including the name of the tools itself.

The default language/script to use with Tesseract, can only be one of the installed models. If you leave that field empty, then the English model (eng) will be used, which is always installed with Tesseract.

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662264087436-762c31a6-87da-4af4-8aac-ea356f013f0a.png" width="616" id="u4d7807ee" class="ne-image">

Moreover, these options are saved as Zotero preferences variables, which are also available through the [Config Editor](https://www.zotero.org/support/preferences/advanced).