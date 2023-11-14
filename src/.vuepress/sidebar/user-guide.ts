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
    children: [
      "install",
      "add-items",
      "organize-library",
      "take-notes",
      "feed",
    ],
  },
  {
    text: "创建参考文献",
    icon: "code",
    // prefix: "generate-bibliography",
    collapsible: true,
    children: [
      "citation-styles",
      "ms-word-plugin",
      "wps-plugin",
      "create-bibliographies-within-zotero",
      "create-bibliographies-via-zbib",
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
