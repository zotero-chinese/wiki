import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

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

    // Enable it with pwa
    // shouldPrefetch: false,
});
