import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Zotero 中文小组",
      description: "Zotero 非官方中文维护小组",
    },
  },

  theme,
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
