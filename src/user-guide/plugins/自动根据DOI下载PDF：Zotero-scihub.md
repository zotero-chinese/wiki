---
title: 自动根据DOI下载PDF：Zotero-scihub
date: 2023-06-28 21:14:03
updated: 2023-07-28 10:38:12
---

## 一、项目地址

### （一）GitHub 地址

#### [ethanwillis/zotero-scihub: A plugin that will automatically download PDFs of zotero items from sci-hub (github.com)](https://github.com/ethanwillis/zotero-scihub)

### （二）下载地址

#### <https://zotero-chinese.gitee.io/zotero-plugins/#/>

#### 在这个页面中选择 Zotero Scihub，访问不了 GitHub 可以选择国内源就可以下载了

## 二、使用注意

### （一）常见设置

<img src="assets/20230922T210554/20230922T210554_23989.png" width="809" id="u639e540f" class="ne-image">

### （二）常见问题

#### 1.会弹个 Error Javascipt 弹窗

##### 最新版这个弹窗

<img src="assets/20230922T210554/20230922T210554_60386.png" width="250" id="u027663c2" class="ne-image">

##### 旧版这个弹窗

<img src="assets/20230922T210554/20230922T210554_47842.png" width="1002" id="ucba73160" class="ne-image">

#### 2.出现的原因

##### 出自于 ethanwillis/zotero-scihub/-/blob/master/content/scihub.ts 中写到，当 scihub 网站要求验证码时候，会中断程序弹出 error

<img src="assets/20230922T210554/20230922T210554_97959.png" width="885" id="ue2c8b123" class="ne-image">

#### 3.建议在知网抓取文献的时候，要把 scihub 自动抓取给关闭了，因为没有 scihub 一般没有收录中文文献。有时候一些英文文献很早的以及很新的没有收录的，还有一种情况就是访问次数过多以后，Sichub 服务器识别到了就拒绝了你的请求，就只有换另一个服务器了

#### 4. 一个小的建议，毕竟 scihub 是一个免费的网站，不要短时间一下子下载太多了，这样子既能确保你可以愉快的下载，又不会对于 scihub 服务器造成压力，理性下载

## 三、不使用插件的原始方法

### （一）操作步骤

#### 1.在右上角点击编辑选项

<img src="assets/20230922T210554/20230922T210554_42479.png" width="290" id="u3c42a67d" class="ne-image">

#### 2.在编辑选择中，选择高级选项卡，最好点击“配置编辑器”

<img src="assets/20230922T210554/20230922T210554_06872.png" width="815" id="u5469a729" class="ne-image">

#### 3.同意警告

<img src="assets/20230922T210554/20230922T210554_41121.png" width="928" id="ub11d1553" class="ne-image">

#### 4.搜索 extensions.zotero.findPDFs.resolvers

<img src="assets/20230922T210554/20230922T210554_04617.png" width="1255" id="u7bede0b7" class="ne-image">

#### 5.将这一串代码粘贴进去

{"name":"Sci-Hub","method":"GET","url":"[https://sci-hub.ru/{doi}","mode":"html","selector":"#pdf","attribute":"src","automatic](https://sci-hub.ru/%7Bdoi%7D%22,%22mode%22:%22html%22,%22selector%22:%22#pdf%22,%22attribute%22:%22src%22,%22automatic)":false}

```plain
{
    "name":"Sci-Hub",
    "method":"GET",
    "url":"https://sci-hub.ru/{doi}",
    "mode":"html",
    "selector":"#pdf",
    "attribute":"src",
    "automatic":true
}
```

#### 6.其中"url":"[https://sci-hub.ru/{doi}](https://sci-hub.ru/%7Bdoi%7D)", 可以进行替换源"url":"[https://sci-hub.st/{doi}](https://sci-hub.st/%7Bdoi%7D)"

## 四、两种方法的区别

### （一）插件直接在首选项插件选项里面，修改镜像网址就行了。而使用第二种的方式进行配置如果镜像寄了，还需要在重新来一遍进行配置替换镜像地址，操作更加繁琐

### （二）抓不到或者被拒绝访问以后，第二种不会弹弹窗

### （三）被 scihub 拒绝了，都还是一样抓取不到文献

## 五、Scihub 官方镜像地址

[sci-hub.se](https://sci-hub.se/)
[sci-hub.st](https://sci-hub.st/)
[sci-hub.ru](https://sci-hub.ru/)

## 六、补充资料

### 代码原截图

<img src="assets/20230922T210554/20230922T210554_95854.png" width="910" id="u853de226" class="ne-image">
