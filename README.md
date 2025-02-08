# Zotero 中文文档仓库

[![Static Badge](https://img.shields.io/badge/Author-Zotero%20Chinese-blue)](#贡献者)
[![GitHub contributors](https://img.shields.io/github/contributors-anon/zotero-chinese/wiki)](#贡献者)
[![GitHub License](https://img.shields.io/github/license/zotero-chinese/wiki)](#协议)
[![GitHub repo size](https://img.shields.io/github/repo-size/zotero-chinese/wiki)](#zotero-中文文档仓库)
[![GitHub last commit (branch)](https://img.shields.io/github/last-commit/zotero-chinese/wiki/main)](#zotero-中文文档仓库)

[![在 GitHub Codespaces 中打开](https://github.com/codespaces/badge.svg)](https://codespaces.new/zotero-chinese/wiki?quickstart=1)

本仓库存储 Zotero 中文社区所建立的各种文档，包括 Zotero 用户文档、Zotero 插件开发文档、CSL 规范中文译文等。

## 访问

请访问在线网站：[Zotero 中文社区 (https://zotero-chinese.com)](https://zotero-chinese.com)。

备用地址：<https://zotero-chinese.github.io>。

## 协议

所有文档采用均采用 [知识共享 署名-相同方式共享 4.0 国际](https://creativecommons.org/licenses/by-sa/4.0/legalcode.zh-hans) 协议共享，代码采用 MIT 协议共享。

<!-- markdownlint-disable -->

<a href="http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"></a>

<!-- markdownlint-restore -->

## 行为准则

见 [贡献者公约](https://zotero-chinese.com/code_of_conduct.html)。

## 贡献指南

本项目接收多种方式的贡献，下面是一个简单的操作提示，详细内容请参阅 [文档贡献指南](https://zotero-chinese.com/contributing/wiki)。

```bash
# 克隆代码仓库
git clone https://github.com/zotero-chinese/wiki.git wiki/
cd wiki/

# 启用 pnpm 包管理器
corepack enable

# 安装依赖项
pnpm i

# 预览
pnpm docs:dev

# 格式修复
pnpm lint:fix
```

当无法启动预览时，请在确保本地仓库是最新的前提下，重新运行以下两个命令：

```bash
corepack enable
pnpm i
```

若仍存在问题，可以在 ISSUE 开贴讨论。

## 贡献者

感谢所有贡献者！

[![contributors](https://cdn.jsdelivr.net/gh/zotero-chinese/.github@main/.github-contributors/zotero-chinese_wiki.svg)](https://github.com/zotero-chinese/wiki/graphs/contributors)

## 致谢

[![netlify](https://www.netlify.com/v3/img/components/netlify-color-bg.svg)](https://www.netlify.com)
