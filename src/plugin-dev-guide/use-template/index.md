# 使用社区模板

::: info Todo

社区模板地址：<https://github.com/windingwind/zotero-plugin-template>

考虑到 Zotero 7 后续仍会有一次比较大的底层架构变更，因此该部分内容暂时挂起，开发者可参考仓库的自述文档来配置模板。

:::

## 为什么使用该模板

- 事件驱动、函数式编程的可扩展框架；
- 简单易用，开箱即用；
- ⭐[新特性!]自动热重载！当修改源码时，都会自动编译并重新加载插件；
- `src/modules/examples.ts` 中有丰富的示例，涵盖了插件中常用的大部分 API 使用的插件工具包 [Zotero-plugin-toolkit](https://github.com/windingwind/zotero-plugin-toolkit)；
- TypeScript 支持:
  - 为使用 JavaScript 编写的 Zotero 源码提供全面的类型定义支持 （使用类型定义包 [Zotero-types](https://github.com/windingwind/zotero-types)）
  - 全局变量和环境设置；
- 插件开发/构建/发布工作流:
  - 自动生成/更新插件 id 和版本、更新配置和设置环境变量 (`development`/`production`)；
  - 自动在 Zotero 中构建和重新加载代码；
  - 自动发布到 GitHub (使用 [release-it](https://github.com/release-it/release-it));
- 集成 Prettier 和 ES Lint;
