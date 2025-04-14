---
redirectFrom: /user-guide/plugins/Zotero-scihub.html
---

# SciHub

## 插件介绍

这是 Zotero 的一个插件，会自动从 Sci-Hub 上为带有 DOI 的条目自动下载 PDF 格式的论文文件。

对于您在安装此插件后添加的任何新论文，将会在后台从 Sci-Hub 上自动下载对应的论文，并附加到 Zotero 中对应的条目下。

- Zotero SciHub 插件的 GitHub 地址：
  - 适配 Zotero 6：<https://github.com/ethanwillis/zotero-scihub>
  - 适配 Zotero 7：<https://github.com/syt2/zotero-scipdf>
- 插件下载：[Zotero 插件中文镜像](https://zotero-chinese.com/plugins/#search=sci-hub)
- Sci-Hub 镜像地址：`https://www.sci-hub.wf/`、`https://www.sci-hub.ee/`、`https://www.sci-hub.ren/`、`https://www.sci-hub.yt/`、`https://www.sci-hub.ru/`、`https://www.sci-hub.st/`、`https://www.wellesu.com`、`https://www.tesble.com`、`https://www.et-fine.com`

::: tip

由于不同地区的网络运营商可能存在访问限制，建议自行测试以确定可用的 Sci-Hub 镜像地址

:::

::: warning

请注意，提供的镜像地址仅用于下载学术论文。在使用过程中，不要轻信其中的捐款请求。

:::

::: warning Sci-Hub 的文献访问限制

自 2021 年以来，Sci-Hub 遇到了一些法律问题，导致它停止了对部分年份文献的支持，尤其是**2021 年及以后文献**的文献，这意味着无法通过 Sci-Hub 下载 2021 年及以后的出版的文献。

:::

## 插件使用方法

### Zotero-scipdf

::: tip

该插件只适用于 Zotero 7， Zotero 6 请使用 [Zotero-scihub](#zotero-scihub).

:::

Zotero-scipdf 插件利用了 Zotero 内自带的 [PDF resolvers](https://www.zotero.org/support/kb/custom_pdf_resolvers)方案，将 Sci-Hub 的 `resolver` 自动填入 `extensions.Zotero.findPDFs.resolvers` 字段，以实现在 Zotero 内从 Sci-Hub 下载 PDF。

#### 插件设置

首次安装时插件会内置部分常用的 Sci-Hub 站点，若需要添加其他 Sci-Hub 站点，或删除已有 Sci-Hub 站点的，可以在插件的设置界面内编辑，不同的站点以`,`或`，`分割。最新的 Sci-Hub 镜像地址详见 [插件介绍](#插件介绍)。

![插件设置](../../assets/images/zotero-scipdf.png)

#### 插件使用

对于安装插件前已经缺失附件的 item，右键该 item，点击查找全文即可

![查找全文](../../assets/images/查找全文.png)

对于新增的带有 DOI 的条目，如果在首选项内勾选了自动下载 PDF 选项，则 Zotero 会自动尝试下载附件

#### 常见问题

- 缺失 DOI 的条目没有查找全文选项，也无法通过 Sci-Hub 下载

- 已经关联了附件的条目没有查找全文选项

::: tip

使用该插件在下载 PDF 被 Sci-Hub 拒绝时不会出现任何提示。

:::

### Zotero-scihub

#### 插件设置及使用

::: tip

该插件只适用于 Zotero 6 ，Zotero 7 请使用 [Zotero-scipdf](#zotero-scipdf).

:::

![插件设置](../../assets/images/zotero-plugin-scihub/zotero-scihub.png)

`Automatic PDF Download`:勾选后，在添加条目以后会自动为带有 DOI 的条目下载 PDF 格式的论文。

`Scihub URL`：这里可自定义 Sci-Hub 镜像的网站的地址。

一旦你安装该插件，右键单击你收藏中的任何项目。现在将有一个名为`Update Scihub PDF`的菜单选项。点击后，将从 Sci-Hub 下载 PDF 格式的文件，并附加到 Zotero 中对应的条目下。

#### 常见问题

部分用户在使用过程中经常会碰到以下弹窗错误：

![插件报错](../../assets/images/zotero-plugin-scihub/scihub报错.png)
![插件报错](../../assets/images/zotero-plugin-scihub/scihub报错_1.png)

这种情况通常是访问次数过多以后，Sci-Hub 服务器识别到了机器人抓取从而出现了验证码验证，您需要访问 Sci-Hub 页面 输入出现的验证码信息。

建议在知网抓取文献的时候，建议关闭插件中的 `Automatic PDF Download`。部分中文文献带有 DOI 字段，在抓取这部分中文文献时，插件会访问 Sci-Hub 进行下载，但由于 Sci-Hub 网站基本上没有收录中文文献，所以插件也不会下载到 PDF 文件。对 Sci-Hub 网站过于频繁的访问会触发网站的验证机制。

![连接至服务器时发生错误](../../assets/images/zotero-plugin-scihub/scihub报错_2.png)

自 2024 年 1 月 23 日起，Sci-Hub 的部分域名被劫持到了 0.0.0.0 ，导致国内用户暂时无法直接搜索。请在插件设置中更新至最新的 Sci-Hub 镜像地址，镜像地址详见 [插件介绍](#插件介绍)。

::: warning

请勿在任何网站上使用批量抓取，严重时可能会使您的 IP 地址遭到封禁。

:::

## 自定义 PDF Resolvers

[PDF Resolvers](https://www.zotero.org/support/kb/custom_pdf_resolvers)可以通过修改配置中的 `extensions.zotero.findPDFs.resolvers` （首选项 - 配置编辑器）进行配置。该值应为一个包含配置对象数组的 JSON 字符串 ，支持 HTM L 和 JSON 格式的来源。

::: warning 谨慎使用此方法

此方法涉及修改隐藏首选项，请谨慎使用。

:::

### 操作步骤

1. 在 Zotero 依次点击`编辑`-`首选项`-`高级`-`常规`-`高级设置`-`编辑器`

   ![编辑器](../../assets/images/zotero-编辑器.png)

2. 弹出如下图所示的对话框。 点击`I accept the risk`

   ![同意承担风险](../../assets/images/zotero-我同意承担风险.png)

3. 在搜索框中输入 `extensions.zotero.findPDFs.resolvers`，双击搜索到的 `extensions.zotero.findPDFs.resolvers`

   ![同意承担风险](../../assets/images/zotero-findPDFs_resolvers.png)

4. 将下列代码粘贴进去直接替换原有内容

   ```json
   [
     {
       "name": "Sci-Hub",
       "method": "GET",
       "url": "https://sci-hub.se/{doi}",
       "mode": "html",
       "selector": "#pdf",
       "attribute": "src",
       "automatic": true
     }
   ]
   ```

   其中`"url":"https://sci-hub.se/{doi}"`, 可以替换为其他的 Sci-Hub 镜像地址。  
   如果想要从多个 Sci-Hub 地址抓取，按照如下格式添加

   ```json
   [
     {
       "name": "Sci-Hub",
       "method": "GET",
       "url": "https://sci-hub.se/{doi}",
       "mode": "html",
       "selector": "#pdf",
       "attribute": "src",
       "automatic": true
     },
     {
       "name": "Sci-Hub",
       "method": "GET",
       "url": "https://sci-hub.ru/{doi}",
       "mode": "html",
       "selector": "#pdf",
       "attribute": "src",
       "automatic": true
     }
   ]
   ```

5. 添加上述配置后
   - 对于新增的项目，Zotero 会自动增加 Sci-Hub 的源抓取 PDF。
   - 对于已存在的但缺失 PDF 的项目，可以右键点击`查找可用PDF`选项尝试重新抓取。
