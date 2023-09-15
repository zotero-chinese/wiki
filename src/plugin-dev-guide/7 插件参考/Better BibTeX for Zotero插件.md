---
title: Better BibTeX for Zotero插件
date: 2023-08-26 10:06:59
updated: 2023-07-20 16:51:54
---
Better BibTeX for Zotero插件

[插件官网](https://retorque.re/zotero-better-bibtex/)

# 插件说明

Better BibTeX (BBT) is an extension for [Zotero](https://www.zotero.org/) and [Juris-M](https://juris-m.github.io/) that makes it easier to manage bibliographic data, especially for people authoring documents using text-based toolchains (e.g. based on [LaTeX](https://www.latex-project.org/) / [Markdown](https://www.markdownguide.org/)).

# 如何使用

## Features

### Facilities for generating citation keys

- Automatically generate [citation keys](https://retorque.re/zotero-better-bibtex/citing/) without key clashes! Generate citation keys that take into account existing keys in your library even when they are not part of the items you export. Prevent random breakage!
- Generate citation keys based on contents of your items using [citekey formulas](https://retorque.re/zotero-better-bibtex/citing/#configurable-citekey-generator).
- Set your own, stable citation keys, drag and drop LaTeX citations, add other custom BibLaTeX fields.

### Conversion between formats and encodings

- Zotero does all its work in UTF-8 Unicode, which is absolutely the right thing to do. Unfortunately, for those shackled to BibTeX and who cannot (yet) move to BibLaTeX, unicode is a major PITA. Also, Zotero supports some simple HTML markup in your items that Bib(La)TeX won’t understand.
- BBT will convert from/to HTML/LaTeX:

- &lt;i&gt;...&lt;/i&gt;⇔\\emph{...}/\\textit{...}
- &lt;b&gt;...&lt;/b&gt;⇔\\textbf{...}
- &lt;sup&gt;...&lt;/sup&gt;⇔\\textsuperscript{...} and &lt;sub&gt;...&lt;/sub&gt;⇔\\textsubscript{...}.

- More can be added on request.
- BBT contains a comprehensive list of LaTeX constructs, so stuff like \\"{o} or \\"o will be converted to their unicode equivalents on import (e.g., \\"{o} to ö), and their unicode equivalents back to \\"{o} if you have that option enabled (but you don’t have to if you use BibLaTeX, which has fairly good Unicode support).
- If you need literal LaTeX in your export: surround it with &lt;script&gt;…&lt;/script&gt; (or &lt;pre&gt;…&lt;/pre&gt;, which do the same) markers.

### Facilities for exporting data from Zotero

- Highly [customized exports](https://retorque.re/zotero-better-bibtex/exporting/).
- Fixes date field exports: export dates like ‘forthcoming’ as ‘forthcoming’ instead of empty, but normalize valid dates to unambiguous international format.
- [Auto export](https://retorque.re/zotero-better-bibtex/exporting/auto/) of collections or entire libraries when they change.
- [Pull export](https://retorque.re/zotero-better-bibtex/exporting/pull/) from the embedded webserver.
- Automatic [journal abbreviation](https://retorque.re/zotero-better-bibtex/citing/).

## Getting started

To get started, read the [installation instructions](https://retorque.re/zotero-better-bibtex/installation/).
