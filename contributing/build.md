---
title: 构建指南
icon: fab fa-dev
date: 2023-07-21 11:08:04
updated: 2023-09-22 15:23:36
---

# 构建指南

此页面记录了本项目的完整构建步骤，主要针对喜欢本地开发的同学。

为了降低操作门槛，本指南所述操作步骤均尽可能使用了图形化界面。对于熟悉 Git 的同学，仍可使用自己喜欢的方式进行操作。

## 项目概览

本文档使用 Markdown 语法编写，产生的 Markdown 文件托管在 GitHub 上，使用 VitePress 作为静态页面生成器将 Markdown 文件构建为 HTML，使用 Netlify 作为持续集成供应商。

目前仓库地址为 <https://github.com/zotero-chinese/wiki/> ，

## 环境配置

### 所需软件安装

本文的需要 Node.js 和 Git 安装在你的电脑上，后续步骤假定你已经安装这些程序且可以简单使用，若没有安装这些软件请跟随本小节指引完成安装。

为了方便编辑和提交，我们还推荐安装 `VS Code` 和 `GitHub Desktop` 两个软件。

:::: details 安装 Git

所有文档均使用 `Git` 进行版本控制。以下步骤假定

用户已安装 git。若未安装，可以使用以下命令安装或更新 git：

::: code-group

```bash [Fedora]
sudo dnf install git
```

```bash [Ubuntu/Debian]
sudo apt install git
```

```bash [macOS]
brew install git
```

```md [Windows]
打开 <https://git-scm.com/downloads/> ，下载并安装 Git for Windows。
```

:::

安装完成后，还需设置个人信息。打开终端，运行以下命令

（将 `zotero-user` 和 `<zotero-user@gmail.com>` 替换成个人对应的信息）:

```bash
# 设置用户姓名和邮箱
$ git config --global user.name "zotero-user"
$ git config --global user.email "zotero-user@gmail.com"

# 查看 ~/.gitconfig
$ cat ~/.gitconfig
[user]
    name = zotero-user
    email = zotero-user@gmail.com
```

::: details Git 和 GitHub 学习资料

以下修改文档并提交的步骤中使用了 Git 的一些常用选项，可以参考以下资料学习更多用法：

- [git 简明指南](http://rogerdudler.github.io/git-guide/index.zh.html)
- [廖雪峰的 Git 教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
- [GotGitHub](http://www.worldhello.net/gotgithub/index.html)
- [How to Use Git and Git Workflows – a Practical Guide](https://www.freecodecamp.org/news/practical-git-and-git-workflows/amp/)
- [Pro Git](https://git-scm.com/book/zh/)

GitHub 相关资料：

- [GitHub 中文文档](https://docs.github.com/cn/github)
- [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)

:::

::::

::: details 安装 Node.js

安装 Node. js：[Node.js 官网](https://nodejs.org/en)

:::

::: details 安装 VS Code

<https://code.visualstudio.com/>

:::

::: details 安装 GitHub Desktop

安装 <https://desktop.github.com/>

:::

### 克隆和复制仓库

1. 复制 (fork) 仓库至个人 GitHub 帐号

   点击项目主页 <https://github.com/zotero-chinese/wiki/> 右上角的 Fork 按钮，将该项目复刻到个人 GitHub 账户下。

   ![复刻仓库](../assets/images/image-fork-repo-1.png)

   ![复刻仓库2](../assets/images/image-fork-repo-2-1.png)

   复制完成后，个人 GitHub 帐号下便有了 <https://github.com/zotero-user/wiki/> 仓库。

2. 克隆个人 GitHub 帐号下的复刻仓库到本地（复刻仓库默认是本地克隆仓库的远程 origin）

   打开 VS Code，点击 `欢迎页面` 的 `克隆 Git 仓库…`，在弹出窗口中选中 `从 GitHub 克隆`，然后选择自己账户下的 fork 仓库，确认，克隆完成后根据提示打开文件夹。

   ![克隆Git仓库](../assets/images/8c581efa5ed9f3ac9d5771b89204bd6b_MD5.png)

   ![从GitHub克隆](../assets/images/741b873973ac5df93faf93cd1a195db2_MD5.png)

   ![选择仓库](../assets/images/28f02608aa879ed189ecfecfcab57d16_MD5.png)

   ::: tip

   如果你对 Git 或命令行不了解，可以考虑使用 [GitHub 客户端](https://desktop.github.com/) 或 VS Code 提供的图形化版本控制管理器作为命令行的替代。

   :::

### 安装依赖

通过下面的命令安装依赖项。

```bash
npm install -g pnpm
pnpm install
```

![安装依赖](../assets/images/image-build-安装依赖-1.png)

::: info

上述“环境配置”步骤只需在第一次修改代码时执行一次，一旦复制或克隆某仓库后，就无需再次复制或克隆。

:::

## 修改文档

::: tip 请参阅《使用代码空间修改》

该小节请参阅 [通过 GitHub Codespace 在线修改文档 #修改和提交](./github-codespace.md#2-修改和提交) 了解详情。

:::

:::: details

1. 在本地创建并切换至新分支，假定新分支名为 `pr-workflow`（分支名需简短、描述性且独特）:

   ![创建新分支](../assets/images/image-build-创建新分支-1.png)

2. 启动开发服务器
   使用以下命令启动开发服务器，如下图，开发服务器启动后，会给出几个本地链接，访问任一链接（通常为 Local）即可得到预览。

   ```bash
   pnpm run docs:dev
   ```

   ![启动开服务器](../assets/images/image-build-启动开发服务器-1.png)

   开发服务器会监听所有 `.md` 文件的修改，当有文件发生保存时，服务器会自动更新预览并刷新网页。

   ![开发服务器](../assets/images/image-build-dev-server-1.png)

3. 在新建分支中对文档做修改，修改过程中，可以随时在浏览器中检查修改效果

   使用 Markdown 语法编写文档，如果你不清楚本文档所用的 Markdown 语法，请参阅 [Markdown 语法](markdown.md)。

4. 提交 commit

   在左侧 " 源代码管理 " 选项卡中，输入一个简短的提交描述，点击提交，然后将修改推送到线上。

   ![提交修改](../assets/images/image-build-提交修改-1.png)

   ![推送修改](../assets/images/image-build-推送修改-1.png)

   ::: tip

   如前所述，提交命令也可以在 GitHub Desktop 中完成。

   :::

   ::: warning

   不建议直接在 main 分支中进行修改和提交，这可能会给你自己造成麻烦。

   仓库对 main 分支开启了推送保护，对 main 分支的修改只能通过 Pull Request 进行，无法直接 Push。

   :::

::::

## Pull Request

1. 提交 PR

   进入个人 GitHub 帐号下的复制仓库（即 <https://github.com/你的名字/wiki/>）。

   一般 GitHub 会自动提示有可提交的 PR，点击 “Compare & pull request”，输入此 PR 的标题和具体描述，

   最后点击 “Create pull request” 即可。

2. 审核、评论以及修改 PR

   文档维护者收到 PR 后，会对代码进行审核、评论以及修改，并决定是否接受（merge）或结束该 PR。

   PR 发起后，Netlify 机器人会自动部署一个预览版本，可以在这里查看预览。

   ![netlify预览pr](../assets/images/image-build-pr预览-1.png)

   提交的 PR 在接收前可能需要读者多次修改。这种情况并不要创建新 PR，只需继续本地 pr-workflow 分支中修改并提交，然后再次推送 pr-workflow 分支至远程 origin 即可，修改将自动添加到已提交的 PR 中。

   推送新的修改后，可以选择在该 PR 中留言，以通知维护者已提交新的修改。

3. PR 被接受并合并至官方 main 分支后，则可以更新 main 分支，并删除 pr-workflow 分支

   ![更新main分支](../assets/images/image-build-更新main分支-1.png)

## 其他的脚本

### pnpm run docs:build

构建脚本，用于将 markdown 构建为网页。

贡献者可以在提交前运行一次，查看是否有报错。

一般情况下，图片路径错误、链接错误会导致报错。

### pnpm run lint:fix

运行 Markdown Lint 和 Prettier，并修复可以自动修复的错误。
