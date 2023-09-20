import { arraySidebar } from "vuepress-theme-hope";

export const cslDevGuide = arraySidebar([
  //   "",
  "primer",
  "xml-basic",
  "specification",
  {
    text: "附录",
    prefix: "appendix/",
    collapsible: true,
    children: "structure",
  },
  "translating-locale-files",
]);
