export interface WikiContributor {
  /**
   * 贡献者的显示名称
   */
  name: string;
  /**
   * 贡献者的 GitHub 用户名
   *
   * 如果没有配置 links 和 avatar，网站将根据这个属性生成链接和头像
   */
  github: string;
  /**
   * 名称别名
   *
   * 主要针对多个账号属于同一个人的情况
   */
  alias?: string[];
  /**
   * 邮箱别名
   *
   * 主要针对多个账号属于同一个人的情况
   */
  emailAlias?: string[];
  /**
   * 主页
   *
   * 可以连接到个人主页，如果不填，默认使用 GitHub 主页
   */
  links?: string[];
  /**
   * 头像
   *
   * 如果不填，网站将根据 `github` 生成头像
   */
  avatar?: string;
}

export const wikiContributors: WikiContributor[] = [
  {
    name: "Northword",
    github: "northword",
    alias: ["northword"],
    emailAlias: ["44738481+northword@users.noreply.github.com"],
  },
  {
    name: "Chikit-L",
    github: "Chikit-L",
    alias: ["Chikit_L", "Chikit"],
  },
  {
    name: "l0o0",
    github: "l0o0",
  },
  {
    name: "阿狸",
    github: "Comte0825",
    alias: ["Comte0825", "Ali"],
  },
  {
    name: "Maple-YZ",
    github: "Maple-YZ",
  },
  {
    name: "jiaojiaodubai",
    github: "jiaojiaodubai",
  },
  {
    name: "可口可乐",
    github: "wakewon",
    alias: ["Victor", "wakewon"],
  },
  {
    name: "syt2",
    github: "syt2",
  },
  {
    name: "windingwind",
    github: "windingwind",
    alias: ["winding"],
  },
  {
    name: "X木林森 Z2.3",
    github: "MoYuXianR",
    alias: ["MoYuXianR"],
  },
  {
    name: "zepinglee",
    github: "zepinglee",
  },
  {
    name: "redleafnew",
    github: "redleafnew",
    alias: ["韩小土"],
    emailAlias: ["redleafnew@163.com"],
  },
];
