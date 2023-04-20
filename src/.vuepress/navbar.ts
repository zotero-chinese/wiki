import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "Zotero 百科全书", icon: "discover", link: "/user-guide/" },
  {
    text: "中文插件商店",
    icon: "note",
    link: "https://zotero-chinese.gitee.io/zotero-plugins/",
  },
  {
    text: "中文 CSL 样式",
    icon: "note",
    link: "https://github.com/redleafnew/Chinese-STD-GB-T-7714-related-csl/",
  },
  {
    text: "开发手册",
    icon: "creative",
    children: [
      {
        text: "插件开发手册",
        icon: "creative",
        link: "/plugin-dev-guide/"
      },
      {
        text: "CSL 中文文档",
        icon: "config",
        link: "/csl-dev-guide/"
      },
    ],
  },
  {
    text: "更多",
    icon: "more",
    children: [
      {
        text: "贡献指南",
        icon: "creative",
        link: "/contribution-guide/"
      },
      {
        text: "关于",
        icon: "about",
        link: "/about/"
      }
    ]
  },
]);
