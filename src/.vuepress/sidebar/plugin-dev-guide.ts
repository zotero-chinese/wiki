import { arraySidebar } from "vuepress-theme-hope";

export const pluginDevGuide = arraySidebar([
  "",
  {
    text: "从 Make It Red 开始",
    collapsible: true,
    children: ["quick-start/"],
  },
  {
    text: "使用社区框架",
    collapsible: true,
    children: ["use-template/"],
  },
  {
    text: "调试代码",
    collapsible: true,
    children: ["development/debug", "development/sideloading"],
  },
  {
    text: "参考",
    collapsible: true,
    children: [
      "reference/manifest",
      "reference/bootstrap",
      "reference/localization",
      "reference/update",
      "reference/zotero",
      "reference/preference",
      "reference/notify",
      "reference/item",
      "reference/more",
    ],
  },
]);
