import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  { text: "百科全书", link: "/user-guide/", activeMatch: "/user-guide/" },
  { text: "插件开发指南", link: "/plugin-dev-guide/" },
  { text: "CSL 开发指南", link: "/csl-dev-guide/" },
  {
    text: "Translator 开发指南",
    link: "/translator-dev-guide/",
  },
  { text: "贡献指南", link: "/contributing/" },
];
