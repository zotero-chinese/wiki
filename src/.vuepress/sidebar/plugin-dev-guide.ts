import { arraySidebar } from "vuepress-theme-hope";

export const pluginDevGuide = arraySidebar([
  "",
  {
    text: "从 Mark-It-Red 开始",
    collapsible: true,
    children: ["quick-start/"],
  },
  {
    text: "使用社区框架",
    collapsible: true,
    children: [],
  },
  {
    text: "参考",
    collapsible: true,
    children: [
      "reference/manifest",
      "reference/bootstrap",
      "reference/locale",
      "reference/update",
      "reference/zotero",
      "reference/preference",
      "reference/notify",
      "reference/item",
      "reference/more",
    ],
  },
]);
