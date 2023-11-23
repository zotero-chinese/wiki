import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { baiduTongjiPlugin } from "./plugins/baiduTongji.js";

export default defineUserConfig({
  base: process.env.NETLIFY ? "/" : "/wiki/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Zotero 中文小组",
      description: "Zotero 非官方中文维护小组",
    },
  },

  theme,

  markdown: {
    headers: {
      level: [2, 3, 4, 5],
    },
  },

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
    }),

    baiduTongjiPlugin({
      keys:
        process.env.CONTEXT === "production"
          ? [
              "fc5b45ae006a231c1d5cff4610df7267", // lin
              "fc904ee59939c7c2284063619b0ef533", // northword
            ]
          : [],
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
