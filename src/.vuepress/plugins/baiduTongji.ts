/**
 * 百度统计
 * @see https://www.npmjs.com/package/@vuepress-plume/vuepress-plugin-baidu-tongji
 *
 */
export function baiduTongjiPlugin(arg: { keys: string[] }) {
  return {
    name: "vuepress-plugin-baidu-tongji",
    extendsPage: (page) => {
      if (arg.keys.length == 0) {
        return;
      }
      page.frontmatter.head = page.frontmatter.head || [];
      page.frontmatter.head?.push([
        "script",
        {
          type: "text/javascript",
        },
        "var _hmt = _hmt || []",
      ]);
      arg.keys.forEach((key) => {
        page.frontmatter.head?.push([
          "script",
          { src: `https://hm.baidu.com/hm.js?${key}` },
        ]);
      });
    },
  };
}
