# AGENTS.md

Zotero 中文社区文档站。全部内容为中文 Markdown，由 VitePress 构建，经 GitHub Actions 部署到 Netlify。协议：文档 CC BY-SA，代码 MIT。

## 技术栈

- Node.js + pnpm（需自行安装并配置 pnpm，如 `npm i -g pnpm`）。
- VitePress 1.6 静态站点；脚本用 TypeScript + tsx（如 `scripts/compress-images.ts`）。
- 格式检查：Prettier（`@zotero-chinese/prettier-config`）、autocorrect（CJK 排版）、markdownlint-cli2（`@zotero-chinese/markdownlint-config`）。
- 图片压缩用 sharp，部署走 GitHub Actions → Netlify。

## 常用命令（pnpm）

```bash
pnpm i                 # 首次准备：安装依赖项
pnpm docs:dev          # 本地预览（--open 自动打开浏览器）
pnpm docs:build        # 构建到 .vitepress/dist；图片路径/链接错误会导致构建失败
pnpm lint:fix          # prettier --write + autocorrect --fix + markdownlint-cli2 --fix
pnpm lint:check        # 只检查不修改（CI 使用）
pnpm compress-images   # 压缩 assets/images 下的图片（jpg/jpeg/png/webp）
pnpm compress-images --check  # 检查模式，有可压缩图片时以退出码 1 结束（CI 使用）
```

CI 顺序：`lint:check` → `compress-images --check` → `docs:build`。husky 在 pre-commit 运行 lint-staged（prettier + autocorrect）。提交前务必运行 `pnpm lint:fix`。

## 格式约束（CI 会拦截，需自动工具修复）

- 中文与英文/数字之间必须有空格；标点用全角；中文使用直角引号 `「」` 和 `『』`，不使用弯引号 `“”`。
- 以上由 `autocorrect` 强制，配置在 `.autocorrectrc`；markdownlint 配置在 `.markdownlint-cli2.mjs`，prettier 配置引用 `@zotero-chinese/prettier-config`。
- 图片必须用标准 Markdown 语法，禁止 `<img>`；图片资源放 `assets/images/`（通用图标在 `assets/icons/`）。
- 新增图片需运行 `pnpm compress-images`（会改写原图并更新 `assets/compressed-images.json` 缓存）。
- 详细排版规范见 `contributing/markdown.md`（文档风格指南）。

## 内容结构

- `user-guide/` 用户文档、`plugin-dev-guide/` 插件开发、`csl-dev-guide/` CSL 规范、`translator-dev-guide/` 转换器、`contributing/` 贡献指南。
- 新增/删除页面后必须同步编辑 `.vitepress/sidebar.ts`（否则侧边栏不更新）。页面作者别名在 `.vitepress/contributors.ts` 中配置。
- 文件名小写、多个单词用连字符 `-` 连接、用全称不用缩写。
- FrontMatter 可选：`title`、`authors`、`date`。
- 构建/部署流程见 `contributing/build.md`。

## 其他

- `main` 分支受保护，只能通过 PR 合并。
- 运行预览时会注入「非正式文档页面」警告块（见 `.vitepress/config.ts` 中的 vite 插件），属正常现象。
- `pnpm git:sync-force` 用于把 fork 的 main 强制同步到 upstream（会丢弃本地差异，谨慎使用）。
