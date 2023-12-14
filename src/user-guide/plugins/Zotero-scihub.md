# zotero-scihub

## 插件介绍

这是Zotero的一个附加组件，会自动从scihub上为带有DOI的条目自动下载pdf格式的论文文件。

一旦你安装该插件，右键单击你收藏中的任何项目。现在将有一个名为`Update Scihub PDF`的菜单选项。点击后，将从Scihub下载PDF格式的文件，并附加到Zotero中对应的条目下。

同时对于您在安装此插件后添加的任何新论文，将会在后台从scihub上自动下载对应的论文，并附加到Zotero中对应的条目下。

- zotero-scihubGitHub地址：<https://github.com/ethanwillis/zotero-scihub>
- 插件下载：[https://plugins.zotero-chinese.com/#/](https://plugins.zotero-chinese.com/#/)
- Scihub镜像地址：<https://sci-hub.se/、https://sci-hub.st/、https://sci-hub.ru/、https://www.sci-hub.ren/>

## 插件使用方法

### 插件设置  

![插件设置](../../assets/image-zotero-scihub.png)

`Automatic PDF Download`:勾选后，在添加条目以后会自动为带有DOI的条目下载Pdf格式的论文。

`Scihub URL`：这里可自定义Scihub镜像的网站的地址。

### 常见问题  

部分用户在使用过程中经常会碰到以下弹窗错误：

![插件报错](../../assets/image-scihub报错.png)
![插件报错](../../assets/image-scihub报错_1.png)

这种情况通常是访问次数过多以后，Sichub服务器识别到了机器人抓取从而出现了验证码验证，您需要登陆Scihub输入出现的验证码信息。

建议在知网抓取文献的时候，建议关闭插件中的`Automatic PDF Download`。部分中文文献带有Doi字段，在抓取这部分中文文献时，插件会访问Scihub进行下载，但由于Scihub网站基本上没有收录中文文献，所以插件也不会下载到Pdf文件。对Scihub网站过于频繁的访问会触发网站的验证机制。

::: warning

请勿在任何网站上使用批量抓取，严重时可能会使您的IP地址遭到封禁。

:::

## 不使用插件的原始方法  

::: tip

💡 Tips

这种方法在修改Scihub地址时较为繁琐，但优点是不会遇到Scihub验证码弹窗。

当被Scihub拒绝时，两种方法都无法抓取文献。

:::

### 操作步骤  

1. 在Zotero依次点击`编辑`-`首选项`-`高级`-`常规`-`高级设置`-`编辑器`
   ![编辑器](../../assets/image-zotero-编辑器.png)
2. 弹出如下图所示的对话框。
   点击`I accept the risk`
   ![同意承担风险](../../assets/image-zotero-我同意承担风险.png)
3. 在搜索框中输入  `extensions.zotero.findPDFs.resolvers`，双击搜索到的 `extensions.zotero.findPDFs.resolvers`
   ![同意承担风险](../../assets/image-zotero-findPDFs_resolvers.png)

4.将下列代码粘贴进去，然后重新启动 Zotero。

```
{
    "name":"Sci-Hub",
    "method":"GET",
    "url":"https://sci-hub.se/{doi}",
    "mode":"html",
    "selector":"#pdf",
    "attribute":"src",
    "automatic":true
}
```

6.其中`"url":"https://sci-hub.se/{doi}"`, 可以进行为其他的Scihub镜像地址。
