---
title: 自动根据DOI下载PDF：Zotero-scihub
date: 2023-06-28 21:14:03
updated: 2023-07-28 10:38:12
---

## 一、项目地址

### （一）GitHub地址

#### [ethanwillis/zotero-scihub: A plugin that will automatically download PDFs of zotero items from sci-hub (github.com)](https://github.com/ethanwillis/zotero-scihub)

### （二）下载地址

#### <https://zotero-chinese.gitee.io/zotero-plugins/#/>

#### 在这个页面中选择Zotero Scihub，访问不了GitHub可以选择国内源就可以下载了

## 二、使用注意

### （一）常见设置

<img src="https://cdn.nlark.com/yuque/0/2022/png/22339621/1668314383739-eca3abee-8d0a-442a-89e3-30dac0a2aa80.png" width="809" id="u639e540f" class="ne-image">

### （二）常见问题

#### 1.会弹个Error Javascipt弹窗

##### 最新版这个弹窗

<img src="https://cdn.nlark.com/yuque/0/2022/png/22339621/1668314403635-ab16595c-c1be-4883-be9d-6422da3295df.png" width="250" id="u027663c2" class="ne-image">

##### 旧版这个弹窗

<img src="https://cdn.nlark.com/yuque/0/2022/png/22339621/1668314417294-fddf8447-6aa2-4a61-acbe-fc447c096a2b.png" width="1002" id="ucba73160" class="ne-image">

#### 2.出现的原因

##### 出自于ethanwillis/zotero-scihub/-/blob/master/content/scihub.ts中写到，当scihub网站要求验证码时候，会中断程序弹出error

<img src="https://cdn.nlark.com/yuque/0/2022/png/22339621/1668314430934-fe807f0d-f482-4ef2-8c3c-11854c9d962a.png" width="885" id="ue2c8b123" class="ne-image">

#### 3.建议在知网抓取文献的时候，要把scihub自动抓取给关闭了，因为没有scihub一般没有收录中文文献。有时候一些英文文献很早的以及很新的没有收录的，还有一种情况就是访问次数过多以后，Sichub服务器识别到了就拒绝了你的请求，就只有换另一个服务器了

#### 4\. 一个小的建议，毕竟scihub是一个免费的网站，不要短时间一下子下载太多了，这样子既能确保你可以愉快的下载，又不会对于scihub服务器造成压力，理性下载

## 三、不使用插件的原始方法

### （一）操作步骤

#### 1.在右上角点击编辑选项

<img src="https://cdn.nlark.com/yuque/0/2022/png/22339621/1668314450735-adf1cd99-1977-412b-b061-10e0f9300b4e.png" width="290" id="u3c42a67d" class="ne-image">

#### 2.在编辑选择中，选择高级选项卡，最好点击“配置编辑器”

<img src="https://cdn.nlark.com/yuque/0/2022/png/22339621/1668314459289-b52df6a3-89f5-4ba6-b0f2-6ba88bb1b12c.png" width="815" id="u5469a729" class="ne-image">

#### 3.同意警告

<img src="https://cdn.nlark.com/yuque/0/2022/png/22339621/1668314466905-091d1a02-5379-4a4f-816c-d64cc5007bb1.png" width="928" id="ub11d1553" class="ne-image">

#### 4.搜索 extensions.zotero.findPDFs.resolvers

<img src="https://cdn.nlark.com/yuque/0/2022/png/22339621/1668314475896-dbe02925-6963-44ff-add2-de9eb720ff2f.png" width="1255" id="u7bede0b7" class="ne-image">

#### 5.将这一串代码粘贴进去

{"name":"Sci-Hub","method":"GET","url":"[https://sci-hub.ru/{doi}","mode":"html","selector":"#pdf","attribute":"src","automatic](https://sci-hub.ru/%7Bdoi%7D%22,%22mode%22:%22html%22,%22selector%22:%22#pdf%22,%22attribute%22:%22src%22,%22automatic)":false}

```
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

### （三）被scihub拒绝了，都还是一样抓取不到文献

## 五、Scihub官方镜像地址

[sci-hub.se](https://sci-hub.se/)
[sci-hub.st](https://sci-hub.st/)
[sci-hub.ru](https://sci-hub.ru/)

## 六、补充资料

### 代码原截图

<img src="https://cdn.nlark.com/yuque/0/2022/png/22339621/1668314522908-1d561f55-9ada-486e-a7b7-474c0374af33.png" width="910" id="u853de226" class="ne-image">
