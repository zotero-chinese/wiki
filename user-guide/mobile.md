# 移动端

## iOS

官方已经发布了 Zotero for iOS，并且支持支持 WebDAV 同步，iOS 端的设置相对比较简单，只需要登录 Zotero 账户和完成 WebDAV 网盘设置即可。

### 安装

见 [安装](./install.md#ios)。

### 配置

::: tip

在进行该部分操作时，请确保您拥有 `Zotero账户`、`具有WebDAV同步功能的网盘`、`完成PC端相关设置`。

:::

1. 在第一次打开 Zotero 时，会提醒登录，选择 Sign In（此时需要登录你的 Zotero 账户）

   ![登录 Zotero 账户](../assets/images/iOS登陆.jpg){width=50%}

2. 登录完成后，返回 app 主页，点击右上角的齿轮图标

   ![app 首页](../assets/images/iOS首页.png)

3. 点击 `account` 进入同步设置

4. 从上到下依次为：

   - 附件同步方式：`WebDAV`
   - WebDAV 地址：`dav.jianguoyun.com/dav`
   - 坚果云账户：邮箱
   - 密码：此处的密码是在坚果云中创建的应用密码，不是坚果云网盘的登录密码）

   ::: details 如何获取坚果云的应用密码

   1. 在[坚果云官网登录](https://www.jianguoyun.com/d/login)您的坚果云账户。

   2. 登录后点击 右侧用户名->账户信息

   ![账户信息](../assets/images/坚果云-账户信息.png)

   3. 选择安全选项，下滑到底，点击添加应用。

   ![添加应用](../assets/images/坚果云-添加应用.png)

   4. 完成后，记录下生成的密码。

   ![生成应用密码](../assets/images/坚果云-生成密码.png)

   ![复制应用密码](../assets/images/坚果云-密码.png)

   :::

   验证服务器后显示`Verified` 表示设置成功。

   ![iOS 同步登陆](../assets/images/iOS同步登陆.png)

5. 等待片刻文献即可同步成功。可以点击文献直接阅读，也点击文献右侧的 `i` 标志查看文献信息
   ![文献同步成功](../assets/images/iOS文献同步成功.png)

6. 在文献阅读时，可以进行高亮内容，任意划线等操作。完成阅读是直接返回，你的阅读记录会后台自动同步到其他客户端。
   ![文献阅读](../assets/images/iOS文献阅读.png)

## Android

::: tip

Zotero 官方已经在测试 Android 版本客户端，预计 2025 年发布。

:::

目前使用较多的 Android 客户端是 Zoo，开源免费，主要功能有：

- 查看不同文件目录分类，包括子文件目录。不能编辑
- 支持群组条目查看，不能编辑
- 支持创建，编辑和删除笔记。这里是笔记，不是 PDF 里的注释笔记
- 支持搜索功能，包括条目和笔记
- 支持 WebDAV 附件下载与上传

### 安装

见 [安装](./install.md#android)。

### 配置

#### Zotero 官方安卓客户端

Zotero 官方安卓客户端的配置方法与 iOS 端相同。详见 [iOS](#ios)。

#### Zoo 开源客户端

1. Zoo 安装成功后，需要使用 Zotero 授权的 API key 才能访问 Zotero 数据库。如果你已有一个 API key，可直接在下图中直接填入。一般刚使用 Zoo 的同学，都需要重新申请一下，输入 Zotero 账号和密码，点击 Got it，在授权页面注意需要选择 7 Save Key。如果不成功，可以多试几次。授权成功后，应用会开始下载文献库信息，文献越多，下载时间越长。如果等了 10-20 分钟还在 Loading，建议重启 APP 试试。详细说明参考下图

   ![为 Zoo 设置 Zotero API key](../assets/images/zoo添加zotero密钥.png){width=50%}

   ![Zoo 加载数据界面](../assets/images/zoo加载数据.png){width=50%}

2. 一般常用的附件同步方式是使用**WebDAV**，如果你使用 Zotero 的 300M 空间，可不必进行这一步设置。先打开右上角工作间 `Setting`，勾选下方的`Use webdav to access attachments`，再点击`Config Webdav`跳转到配置页面，填写好相应的网址，用户名和密码，请一定要注意核对网址，用户名和密码的空格，特殊符号等。这里里的网址后面会自动帮你加上 `Zotero`，填写时要注意

   ![Zoo 中配置 WebDAV](../assets/images/zoo-webdav设置.png){width=50%}

   ::: details 如何获取坚果云的应用密码

   1. 在[坚果云官网登录](https://www.jianguoyun.com/d/login)您的坚果云账户。

   2. 登录后点击 右侧用户名->账户信息

   ![账户信息](../assets/images/坚果云-账户信息.png)

   3. 选择安全选项，下滑到底，点击添加应用。

   ![添加应用](../assets/images/坚果云-添加应用.png)

   4. 完成后，记录下生成的密码。

   ![生成应用密码](../assets/images/坚果云-生成密码.png)

   ![复制应用密码](../assets/images/坚果云-密码.png)

   :::

3. 配置完毕，点开某个条目，点击 PDF 图标，会自动下载 PDF。有可能下载失败，重试即可

   ![Zoo 中下载 PDF](../assets/images/zoo-download-pdf.png){width=50%}
