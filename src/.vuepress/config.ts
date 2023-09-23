import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { baiduTongjiPlugin } from "@vuepress-plume/vuepress-plugin-baidu-tongji";

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

    /** @see https://www.npmjs.com/package/@vuepress-plume/vuepress-plugin-baidu-tongji */
    baiduTongjiPlugin({
      key: "fc5b45ae006a231c1d5cff4610df7267", // 百度统计使用的 key
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
