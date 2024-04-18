import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
  "/user-guide/": [
    {
      text: "简介",
      collapsed: false,
      items: [
        //   "",
        { text: "为什么使用 Zotero?", link: "/user-guide/why-use-zotero" },
        { text: "安装", link: "/user-guide/install" },
        { text: "快速开始", link: "/user-guide/quick-start" },
      ],
    },
    {
      text: "基础使用",
      // prefix: "basic-usage",
      collapsed: true,
      items: [
        { text: "添加条目", link: "/user-guide/add-items" },
        { text: "编辑条目", link: "/user-guide/edit-items" },
        { text: "添加附件", link: "/user-guide/add-attachments" },
        { text: "管理文库", link: "/user-guide/organize-library" },
        { text: "阅读与笔记", link: "/user-guide/take-notes" },
        { text: "订阅流", link: "/user-guide/feed" },
        {
          text: "从其他软件导入",
          link: "/user-guide/import-from-other-software",
        },
      ],
    },
    {
      text: "创建参考文献",
      // prefix: "generate-bibliography",
      collapsed: true,
      items: [
        { text: "引文风格", link: "/user-guide/citation-styles" },
        { text: "在 Word 中使用", link: "/user-guide/ms-word-plugin" },
        { text: "在 WPS 中使用", link: "/user-guide/wps-plugin" },
        {
          text: "直接创建参考文献表",
          link: "/user-guide/create-bibliographies-within-zotero",
        },
        {
          text: "通过 ZBib 创建",
          link: "/user-guide/create-bibliographies-via-zbib",
        },
      ],
    },
    {
      text: "同步、协作与备份",
      // prefix: "sync-collaboration-backup",
      collapsed: true,
      items: [
        { text: "同步", link: "/user-guide/sync" },
        { text: "群组与协作", link: "/user-guide/group" },
        { text: "备份", link: "/user-guide/backup" },
      ],
    },
    {
      text: "插件",
      collapsed: true,
      items: "structure",
    },
    {
      text: "常见问题",
      icon: "question",
      prefix: "faqs",
      collapsed: true,
      items: "structure",
    },
    // {
    //   text: "进阶教程",
    //   icon: "creative",
    //   // prefix: "advanced",
    //   collapsed: true,
    //   items: ["add-items-adv", "import-from-other-software.html"],
    // },
    {
      text: "杂项",
      icon: "advance",
      prefix: "misc",
      collapsed: true,
      items: "structure",
    },
  ],
  "/plugin-dev-guide/": [
    {
      text: "快速开始",
      collapsed: true,
      items: [
        { text: "从 Make It Red 开始", link: "/plugin-dev-guide/quick-start/" },
        { text: "使用社区框架", link: "/plugin-dev-guide/use-template/" },
      ],
    },
    {
      text: "调试代码",
      collapsed: true,
      items: [
        { text: "调试代码", link: "/plugin-dev-guide/development/debug" },
        { text: "侧载插件", link: "/plugin-dev-guide/development/sideloading" },
      ],
    },
    {
      text: "参考",
      collapsed: true,
      items: [
        { text: "清单文件", link: "/plugin-dev-guide/reference/manifest" },
        { text: "引导文件", link: "/plugin-dev-guide/reference/bootstrap" },
        { text: "本地化", link: "/plugin-dev-guide/reference/localization" },
        { text: "自动更新", link: "/plugin-dev-guide/reference/update" },
        { text: "Zotero", link: "/plugin-dev-guide/reference/zotero" },
        { text: "首选项", link: "/plugin-dev-guide/reference/preference" },
        { text: "消息事件", link: "/plugin-dev-guide/reference/notify" },
        { text: "条目", link: "/plugin-dev-guide/reference/item" },
        { text: "更多", link: "/plugin-dev-guide/reference/more" },
      ],
    },
  ],
  "/csl-dev-guide/": [
    { text: "序言", link: "/csl-dev-guide/" },
    { text: "CSL 介绍", link: "csl-dev-guide/primer" },
    { text: "术语对照表", link: "csl-dev-guide/glossary" },
    { text: "XML 基础", link: "csl-dev-guide/xml-basic" },
    { text: "CSL 规范", link: "csl-dev-guide/specification" },
    { text: "本地化", link: "csl-dev-guide/translating-locale-files" },
  ],
  "/": [
    { text: "关于", link: "/about" },
    { text: "贡献者名单", link: "/contributors" },
  ],
};
