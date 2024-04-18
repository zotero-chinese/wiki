import { defineConfig } from "vitepress";
import { sidebar } from "./config/sidebar";
import { nav } from "./config/navbar";
import { footnote } from "@mdit/plugin-footnote";

export default defineConfig({
  title: `Zotero 中文文档（开发）`,
  lang: "zh-CN",

  themeConfig: {
    // logo: "/logo.png",
    nav: nav,
    sidebar: sidebar,

    editLink: {
      pattern: "https://github.com/zotero-chinese/wiki/edit/main/docs/:path",
      text: "Suggest changes to this page",
    },

    externalLinkIcon: true,

    footer: {
      message: `本工作以 CC BY-SA 协议授权`,
      copyright: "版权所有 © 2019-至今 Zotero 中文社区及其贡献者",
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
      level: [2, 3],
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },

  markdown: {
    // codeTransformers: [transformerTwoslash()],
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      cautionLabel: "危险",
      infoLabel: "信息",
      noteLabel: "注",
      detailsLabel: "详细信息",
    },
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
    config: (md) => {
      md.use(footnote);
    },
  },
});
