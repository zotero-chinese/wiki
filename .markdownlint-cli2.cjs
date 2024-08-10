// @ts-check

module.exports = {
  // Disable some built-in rules
  config: {
    // 定义文档中涉及的专有名词
    MD044: {
      code_blocks: false,
      html_elements: false,
      names: [
        "Zotero",
        "JavaScript",
        "GitHub",
        "WebDAV",
        "Android",
        "iOS",
        "macOS",
        "WPS",
        "Word",
        "ZotFile",
        "Zotero Chinese",
      ],
    },

    "search-replace": {
      rules: [
        {
          name: "直角引号",
          message: "请使用直角引号「」而不是弯引号",
          searchPattern: `/\s*“([^“”]+?)”\s*/g`,
          replace: "「$1」",
          searchScope: "text",
        },
        {
          name: "中括号",
          message: "不使用中括号【】",
          searchPattern: `/\s*【([^【】]+?)】\s*/g`,
          replace: "「$1」",
          searchScope: "text",
        },
        // {
        //   name: "->",
        //   message: "请使用 '->' 而不是 '=>'",
        //   searchPattern: `/=>|=》/g`,
        //   replace: "->",
        //   searchScope: "text",
        // },
        // {
        //   name: "链接空格",
        //   message: "链接周围应有空格",
        //   searchPattern: `/(\S)(\[.*\]\(.*\))(\S)/g`,
        //   replace: "$1 $2 $3",
        //   searchScope: "text",
        // },
      ],
    },

    // 兼容 Prettier
    // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Prettier.md
    "blanks-around-fences": false,
    "blanks-around-headings": false,
    "blanks-around-lists": false,
    "code-fence-style": false,
    "emphasis-style": false,
    "heading-start-left": false,
    "hr-style": false,
    "line-length": false,
    "list-indent": false,
    "list-marker-space": false,
    "no-blanks-blockquote": false,
    "no-hard-tabs": false,
    "no-missing-space-atx": false,
    "no-missing-space-closed-atx": false,
    "no-multiple-blanks": false,
    "no-multiple-space-atx": false,
    "no-multiple-space-blockquote": false,
    "no-multiple-space-closed-atx": false,
    "no-trailing-spaces": false,
    "ol-prefix": false,
    "strong-style": false,
    "ul-indent": false,

    // 其他规则配置
    // @see https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/.markdownlint.json
    default: true,
    MD003: {
      style: "atx",
    },
    MD004: {
      style: "dash",
    },
    MD013: false,
    MD024: {
      siblings_only: true,
    },
    MD025: {
      front_matter_title: "",
    },
    MD033: {
      allowed_elements: [
        "br",
        "template",
        "script",
        "style",
        "ArtPlayer",
        "AudioPlayer",
        "AutoCatalog",
        "Badge",
        "BiliBili",
        "Catalog",
        "CodePen",
        "DemoProject",
        "FontIcon",
        "ProjectLink",
        "PDF",
        "Replit",
        "Share",
        "SiteInfo",
        "StackBlitz",
        "XiGua",
        "VideoPlayer",
        "YouTube",
        "AppearanceSwitch",
        "HopeIcon",
        "FlowChartPlayground",
        "IconDisplay",
        "KatexPlayground",
        "NetlifyBadge",
        "PrintButton",
        "ThemeColorPicker",
        "ToggleFullScreenButton",
        "ToggleRTLButton",
      ],
    },
    // 兼容 Prettier 禁用
    // "MD035": {
    //   "style": "---"
    // },
    MD036: false,
    MD040: false,
    MD046: false,
    MD049: false,
  },
  customRules: ["markdownlint-rule-search-replace"],

  // Ignore files referenced by .gitignore (only valid at root)
  gitignore: true,
};
