import { defineConfig } from "vitepress";
import { sidebar } from "./sidebar";
import { markdown } from "./markdown";

export default defineConfig({
  title: `Zotero 中文文档（预览版）`,
  lang: "zh-CN",
  markdown,

  themeConfig: {
    nav: [
      { text: "百科全书", link: "/user-guide/", activeMatch: "/user-guide/" },
      { text: "插件开发指南", link: "/plugin-dev-guide/" },
      { text: "CSL 开发指南", link: "/csl-dev-guide/" },
      {
        text: "Translator 开发指南",
        link: "/translator-dev-guide/",
      },
      { text: "贡献指南", link: "/contributing/" },
    ],

    sidebar,

    externalLinkIcon: true,

    footer: {
      message: `本工作以 CC BY-SA 协议授权，当前页面为开发预览版本，与实际上线版本略有差异。`,
      copyright: "版权所有 © 2019-至今 Zotero 中文社区及其贡献者",
    },
    outline: {
      label: "页面导航",
      level: [2, 3],
    },
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },

  vite: {
    plugins: [
      {
        name: "zotero-chinese",
        enforce: "pre",
        transform(code, id) {
          // id 为文件磁盘绝对路径
          if (!id.match(/\.md\b/)) return null;

          code = [
            code,
            "---",
            "::: warning 非正式文档页面",
            "该页面仅供文档撰写和协作时预览之用，不是正式发布的文档，正式发布的文档请访问：[Zotero 中文文档](https://zotero-chinese.com/)",
            ":::",
          ].join("\n");

          // 插件文档（frontmatter 含 `plugin` 字段）：在一级标题后注入提示块，
          // 说明该位置为插件信息区，正式网站（zotero-chinese.com）将在此显示
          // 插件的下载地址、中文镜像与反馈入口。
          // 注：此提示仅供预览站展示，正式网站的构建（website 仓库的
          // markdownTransform）会另行注入完整的插件信息组件，二者互不依赖。
          const pluginRepo = extractPluginRepo(code);
          if (pluginRepo) {
            const lines = code.split("\n");
            const headingIndex = lines.findIndex((line) => /^#\s+/.test(line));
            if (headingIndex !== -1) {
              lines.splice(
                headingIndex + 1,
                0,
                "",
                "::: tip 插件信息区",
                "",
                "此处为插件信息区，正式网站（[Zotero 中文社区](https://zotero-chinese.com/plugins/)）将在此显示该插件的下载地址、中文镜像与反馈入口。",
                ":::",
              );
            }
            code = lines.join("\n");
          }

          return code;
        },
      },
    ],
  },
});

/** 从 md 的 frontmatter 中提取 `plugin` 字段（插件仓库） */
function extractPluginRepo(code: string): string | undefined {
  const fm = code.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) return undefined;
  const line = fm[1].match(/^plugin:\s*(.+)$/m);
  if (!line) return undefined;
  return line[1].trim().replace(/^["']|["']$/g, "");
}
