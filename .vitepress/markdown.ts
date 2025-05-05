import { footnote } from "@mdit/plugin-footnote";
import { mark } from "@mdit/plugin-mark";
import type { UserConfig } from "vitepress";

export const markdown: UserConfig["markdown"] = {
  container: {
    tipLabel: "提示",
    warningLabel: "警告",
    dangerLabel: "危险",
    cautionLabel: "危险",
    infoLabel: "信息",
    noteLabel: "注",
    detailsLabel: "详细信息",
  },
  image: {
    lazyLoading: true,
  },
  config: (md) => {
    // 不要在内联代码中使用 Vue 插值语法
    // https://github.com/vuejs/vitepress/discussions/3724#discussioncomment-8963669
    // https://github.com/vuejs/vitepress/discussions/480
    // https://github.com/vuejs/vitepress/issues/559
    const defaultCodeInline = md.renderer.rules.code_inline!;
    md.renderer.rules.code_inline = (tokens, idx, options, env, self) => {
      tokens[idx].attrSet("v-pre", "");
      return defaultCodeInline(tokens, idx, options, env, self);
    };
    md.use(footnote);
    md.use(mark);
  },
};
