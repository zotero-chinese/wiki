import base from "../.markdownlint-cli2.mjs";

export default {
  ...base.config,

  // 在 CSL 文档目录禁用 MarkdownLint no-space-in-code 规则，
  // 因为 CSL 部分属性值本身带有空格
  // https://github.com/zotero-chinese/wiki/issues/382
  md038: false,
};
