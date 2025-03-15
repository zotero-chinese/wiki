import type { DefaultTheme } from "vitepress";

/* 在增删 Markdown 文件后，请编辑此文件以编辑文档的侧边栏 */

// @ts-ignore 此类型用于说明侧边栏的数据结构
type SidebarItem = {
  /**
   * 侧边栏项的文本标签
   */
  text?: string;

  /**
   * 侧边栏项的链接
   *
   * 相对于项目根路径的绝对路径，不需要加 `.md`
   */
  link?: string;

  /**
   * 侧边栏项的子项
   */
  items?: SidebarItem[];

  /**
   * 如果未指定，侧边栏组不可折叠
   *
   * 如果为 `true`，则侧边栏组可折叠并且默认折叠
   *
   * 如果为 `false`，则侧边栏组可折叠但默认展开
   */
  collapsed?: boolean;
};

export const sidebar = {
  "/user-guide/": [
    {
      text: "简介",
      collapsed: false,
      items: [
        //   "",
        { text: "为什么使用 Zotero?", link: "/user-guide/why-use-zotero" },
        { text: "安装", link: "/user-guide/install" },
        { text: "快速开始", link: "/user-guide/quick-start" },
      ],
    },
    {
      text: "基础使用",
      collapsed: true,
      items: [
        { text: "添加条目", link: "/user-guide/add-items" },
        { text: "编辑条目", link: "/user-guide/edit-items" },
        { text: "添加附件", link: "/user-guide/add-attachments" },
        { text: "管理文库", link: "/user-guide/organize-library" },
        { text: "阅读与笔记", link: "/user-guide/take-notes" },
        { text: "订阅流", link: "/user-guide/feed" },
        { text: "从其他软件导入", link: "/user-guide/import-from-other-software" },
      ],
    },
    {
      text: "创建参考文献",
      collapsed: true,
      items: [
        { text: "引文风格", link: "/user-guide/citation-styles" },
        { text: "在 Word 中使用", link: "/user-guide/ms-word-plugin" },
        { text: "在 WPS 中使用", link: "/user-guide/wps-plugin" },
        { text: "直接创建参考文献表", link: "/user-guide/create-bibliographies-within-zotero" },
        { text: "通过 ZBib 创建", link: "/user-guide/create-bibliographies-via-zbib" },
      ],
    },
    {
      text: "同步、协作与备份",
      collapsed: true,
      items: [
        { text: "同步", link: "/user-guide/sync" },
        { text: "群组与协作", link: "/user-guide/group" },
        { text: "备份", link: "/user-guide/backup" },
      ],
    },
    {
      text: "插件",
      collapsed: true,
      items: [
        { text: "关于插件", link: "/user-guide/plugins/about-plugin" },
        { text: "Better Notes", link: "/user-guide/plugins/better-notes" },
        { text: "Easier Citation", link: "/user-guide/plugins/easier-citation" },
        { text: "茉莉花", link: "/user-guide/plugins/jasminum" },
        { text: "Linter", link: "/user-guide/plugins/linter" },
        { text: "Magic 全文翻译", link: "/user-guide/plugins/magic" },
        { text: "Style", link: "/user-guide/plugins/style" },
        {
          text: "翻译插件",
          collapsed: true,
          items: [
            { text: "插件介绍", link: "/user-guide/plugins/translate/index" },
            { text: "接口申请：阿里", link: "/user-guide/plugins/translate/aliyun" },
            { text: "接口申请：百度", link: "/user-guide/plugins/translate/baidu" },
            { text: "接口申请：火山", link: "/user-guide/plugins/translate/volcengine" },
            { text: "接口申请：腾讯", link: "/user-guide/plugins/translate/tencent" },
            { text: "接口申请：微软", link: "/user-guide/plugins/translate/microsoft" },
            { text: "接口申请：小牛", link: "/user-guide/plugins/translate/niutrans" },
            // { text: "常见问题", link: "/user-guide/plugins/translate/faqs" },
          ],
        },
        { text: "Awesome GPT", link: "/user-guide/plugins/zotero-gpt" },
        { text: "SCI Hub", link: "/user-guide/plugins/zotero-scihub" },
        { text: "蒲公英", link: "/user-guide/plugins/tara" },
        { text: "ZotMoov", link: "/user-guide/plugins/zotmoov" },
        { text: "插件市场", link: "/user-guide/plugins/zotero-addons" },
      ],
    },
    {
      text: "第三方软件集成",
      collapsed: true,
      items: [
        {
          text: "利用 Obsidian Web Clipper 保存网页",
          link: "/user-guide/integration/obsidian-web-clipper",
        },
      ],
    },
    {
      text: "常见问题",
      collapsed: true,
      items: [
        {
          text: "与安装有关的",
          collapsed: true,
          items: [{ text: "Zotero 7 历史版本下载", link: "/user-guide/faqs/zotero-7-beta-versions" }],
        },
        { text: "与插件相关的", link: "/user-guide/faqs/plugins" },
        { text: "与抓取文献条目相关的", link: "/user-guide/faqs/update-translators" },
        { text: "与 Word 引用相关的", link: "/user-guide/faqs/word-addon" },
        {
          text: "与阅读器相关",
          items: [{ text: "PDF 上存在黑色遮罩", link: "/user-guide/faqs/pdf-black-mask" }],
        },
        {
          text: "其他问题",
          items: [
            { text: "无法打开“获取更多样式”", link: "/user-guide/faqs/get-more-style-cannot-open" },
            { text: "Emoji 变成了黑白的", link: "/user-guide/faqs/monochrome-emoji" },
            { text: "将 CAJ 转为 PDF", link: "/user-guide/faqs/caj2pdf" },
          ],
        },
      ],
    },
    {
      text: "杂项",
      collapsed: true,
      items: [
        { text: "高级选项", link: "/user-guide/misc/preference" },
        { text: "通过 VBA 在 WPS 中插入引文", link: "/user-guide/misc/wps-plugin-vba" },
        { text: "将引注链接到参考文献表", link: "/user-guide/misc/link-citation-to-bibliography" },
      ],
    },
  ],
  "/plugin-dev-guide/": [
    {
      text: "快速开始",
      collapsed: true,
      items: [
        { text: "从 Make It Red 开始", link: "/plugin-dev-guide/quick-start/" },
        { text: "使用社区框架", link: "/plugin-dev-guide/use-template/" },
      ],
    },
    {
      text: "调试代码",
      collapsed: true,
      items: [
        { text: "调试代码", link: "/plugin-dev-guide/development/debug" },
        { text: "侧载插件", link: "/plugin-dev-guide/development/sideloading" },
      ],
    },
    {
      text: "参考",
      collapsed: true,
      items: [
        { text: "清单文件", link: "/plugin-dev-guide/reference/manifest" },
        { text: "引导文件", link: "/plugin-dev-guide/reference/bootstrap" },
        { text: "本地化", link: "/plugin-dev-guide/reference/localization" },
        { text: "自动更新", link: "/plugin-dev-guide/reference/update" },
        { text: "Zotero", link: "/plugin-dev-guide/reference/zotero" },
        { text: "首选项", link: "/plugin-dev-guide/reference/preference" },
        { text: "消息事件", link: "/plugin-dev-guide/reference/notify" },
        { text: "条目", link: "/plugin-dev-guide/reference/item" },
        { text: "更多", link: "/plugin-dev-guide/reference/more" },
      ],
    },
  ],
  "/csl-dev-guide/": [
    { text: "序言", link: "/csl-dev-guide/" },
    { text: "CSL 介绍", link: "csl-dev-guide/primer" },
    { text: "术语对照表", link: "csl-dev-guide/glossary" },
    { text: "XML 基础", link: "csl-dev-guide/xml-basic" },
    { text: "CSL 规范", link: "csl-dev-guide/specification" },
    { text: "本地化", link: "csl-dev-guide/translating-locale-files" },
  ],
  "/translator-dev-guide/": [
    { text: "引言", link: "/translator-dev-guide/" },
    { text: "转换器概述", link: "/translator-dev-guide/translators" },
    { text: "编写转换器", link: "/translator-dev-guide/coding" },
    { text: "脚手架", link: "/translator-dev-guide/scaffold" },
  ],
  "/contributing/": [
    { text: "参与指南", link: "/contributing/" },
    { text: "文档贡献指南", link: "/contributing/wiki" },
    { text: "文档语法风格", link: "/contributing/markdown" },
    { text: "通过 GitHub 代码空间在线修改文档", link: "/contributing/github-codespace" },
    { text: "通过 VS Code 在线修改文档", link: "/contributing/vscode-dev" },
    { text: "完整构建指南", link: "/contributing/build" },
  ],
} satisfies DefaultTheme.Sidebar;
