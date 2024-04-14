import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "首页", icon: "home", link: "/" },
  { text: "Zotero 百科全书", icon: "book", link: "/user-guide/" },
  {
    text: "中文插件商店",
    icon: "store",
    link: "https://plugins.zotero-chinese.com/",
  },
  {
    text: "中文 CSL 样式",
    icon: "wand-magic-sparkles",
    link: "https://github.com/redleafnew/Chinese-STD-GB-T-7714-related-csl/",
  },
  {
    text: "更多",
    icon: "star",
    children: [
      {
        text: "开发手册",
        icon: "code",
        children: [
          {
            text: "插件开发手册",
            icon: "code",
            link: "/plugin-dev-guide/",
          },
          {
            text: "CSL 中文文档",
            icon: "code",
            link: "/csl-dev-guide/",
          },
        ],
      },
      {
        text: "关于",
        icon: "more",
        children: [
          {
            text: "贡献指南",
            icon: "star",
            link: "/contributing/",
          },
          {
            text: "贡献者名单",
            icon: "heart",
            link: "/contributors",
          },
          {
            text: "关于 Zotero 中文小组",
            icon: "lightbulb",
            link: "/about",
          },
        ],
      },
    ],
  },
]);
