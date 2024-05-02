import { defineConfig } from "vitepress";
import { sidebar } from "./config/sidebar";
import { nav } from "./config/navbar";
import { markdown } from "./config/markdown";

import { env } from "node:process";

export default defineConfig({
  title: `Zotero 中文文档（预览版）`,
  lang: "zh-CN",
  base: env.GITHUB_ACTIONS ? "/wiki/" : "/",
  markdown,

  themeConfig: {
    nav: nav,
    sidebar: sidebar,

    externalLinkIcon: true,

    footer: {
      message: `本工作以 CC BY-SA 协议授权，当前页面为开发预览版本，与实际上线版本略有差异。`,
      copyright: "版权所有 © 2019-至今 Zotero 中文社区及其贡献者",
    },

    outline: {
      label: "页面导航",
      level: [2, 3],
    },

    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});
