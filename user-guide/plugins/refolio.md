---
plugin: NebulaRaven/zotero-refolio
---

# Refolio

Refolio 是面向 Zotero 10 的期刊评级、文献图谱和阅读辅助插件，也是 [Ethereal Style](./style.md) 的完全开源分支，插件代码已完整迁移至 TypeScript。

[项目主页](https://github.com/NebulaRaven/zotero-refolio) · [中文说明](https://github.com/NebulaRaven/zotero-refolio/blob/main/README.zh-CN.md) · [下载安装包](https://github.com/NebulaRaven/zotero-refolio/releases/latest)

## 主要功能

- **期刊评级**：显示影响因子、JCR 分区等信息，支持手动补充、覆盖或隐藏单项评级。
- **文献图谱**：查看关联文献、共同作者与标签、笔记链接及引用关系，按年份筛选、展开关系，并从图中定位文献。
- **学术谱系**：查询 Wikidata 中的导师与学生关系，或手动建立和编辑本地谱系。
- **文献整理**：管理层级标签、评分和阅读状态，自定义列表列，切换已保存的布局。
- **阅读辅助**：调整 PDF 样式与批注颜色，按需启用阅读时间记录。

## 相较 Style 的改进

Refolio 内置北大核心、CSSCI 和 CSCD 的中英文刊名目录，合并不同名称下的期刊评级。在线查询存在冲突时，可以查看各来源及采用值；期刊更名或数据服务使用其他刊名时，可以手动指定查询名称。

文献图谱增加引用与谱系视图，提供关系层数、年份筛选和画布大小调整，并适配深浅主题。功能开关集中在设置面板中，可以搜索和按需启用。界面使用 Zotero 10 的原生颜色与控件，并减少重复刷新。

## 安装与设置

1. 从[最新版本](https://github.com/NebulaRaven/zotero-refolio/releases/latest)下载 `.xpi` 安装包。
2. 在 Zotero 中打开「工具 → 插件」。如果已安装 Style，先将其停用。
3. 点击齿轮菜单，选择「从文件安装插件…」，选中下载的安装包。
4. 打开「工具 → Refolio · 功能设置」，选择需要的功能。

功能开关更改后需重启 Zotero，期刊和图谱设置即时生效。阅读时间记录默认关闭，可以在设置中开启。

## 期刊评级

查询在线评级时，在设置中选择 EasyScholar 或 Garden，并填写对应服务的 API 密钥；在「查看 → 列」中启用需要显示的列。

右键文献，选择「Refolio → 编辑期刊评级…」，或在设置面板中打开「期刊设置」，即可调整评级。每个字段可以选择「手动」「自动」或「隐藏」；「查询刊名」用于指定在线检索使用的名称。

例如，一本中文期刊的英文名查询结果缺少北大核心标签时，Refolio 会结合内置目录查询中文名并合并结果。需要自行补充时，可将该字段设为「手动」并填写对应评级。
