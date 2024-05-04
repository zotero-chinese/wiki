import { h } from "vue";
import DefaultTheme from "vitepress/theme";

const tip = h("div", { class: "warning custom-block" }, [
  h("p", { class: "custom-block-title" }, "非正式文档页面"),
  "该页面仅供文档撰写和协作时预览之用，不是正式发布的文档，正式发布的文档请访问：",
  h("a", { href: "https://zotero-chinese.com/" }, "Zotero 中文文档"),
  "。",
]);

export default {
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "home-hero-image": () => h(tip),
      "doc-footer-before": () => h(tip),
    });
  },
};
