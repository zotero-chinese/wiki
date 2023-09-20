import { arraySidebar } from "vuepress-theme-hope";

export const userGuide = arraySidebar([
  //   "",
  "why-use-zotero",
  "quick-start",
  {
    text: "基础使用",
    icon: "module",
    // prefix: "basic-usage",
    collapsible: true,
    children: ["install", "add-items", "organize-library", "take-notes"],
  },
  {
    text: "创建参考文献",
    icon: "code",
    // prefix: "generate-bibliography",
    collapsible: true,
    children: [
      "create-bibliographies-within-zotero",
      "ms-word-plugin",
      "citation-styles",
    ],
  },
  {
    text: "同步、协作与备份",
    icon: "language",
    // prefix: "sync-collaboration-backup",
    collapsible: true,
    children: ["sync", "group", "backup"],
  },
  {
    text: "插件",
    icon: "plugin",
    prefix: "plugins",
    collapsible: true,
    children: "structure",
  },
  {
    text: "常见问题",
    icon: "question",
    prefix: "faqs",
    collapsible: true,
    children: "structure",
  },
  {
    text: "杂项",
    icon: "advance",
    prefix: "misc",
    collapsible: true,
    children: "structure",
  },
]);
