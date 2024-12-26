# 百度翻译接口申请和配置

百度翻译和垂直领域翻译免费额度：

- [通用翻译](https://fanyi-api.baidu.com/product/111)：完成个人认证可升级使用高级版服务，提供基础文本翻译服务，支持自定义术语翻译功能。**每月 100 万字符免费**，QPS 为 10，单次最长请求 6000 字符，支持 28 个常见语种。
- [垂直领域翻译](https://fanyi-api.baidu.com/product/12): 开通并认证后，即享**每月 50 万免费字符**。目前已开通学术论文、生物医药、信息技术、金融财经、机械制造、网络文学（仅支持中英）、新闻资讯、人文社科（仅支持中英）、航空航天、法律法规、合同共 11 个垂直领域。

以上接口，超出部分按 49 元/百万字符计费，垂直领域接口申请成功后的提示：高级版是每月 100W 字符。

## 1. 账号注册

直接访问 [https://fanyi-api.baidu.com/product/11](https://fanyi-api.baidu.com/product/11)，如果未登录，点击右上角登录。没百度账号的同学，就直接新注册一个。

![登录按钮](../../../assets/images/zotero-plugin-translate/baidu-3.png)

网页上直接列出了通用文本翻译和领域翻译，这两个就是常说的百度翻译和百度垂直领域翻译。这两个的区别是：

- 免费额度不同，垂直领域相比通用文本翻译免费额度少，每月只有 50W
- 精细度不同。为了提升特定领域机器翻译的准确度，百度翻译针对多个垂直领域模型进行了优化，特定领域术语翻译相较于通用文本翻译 API 结果更为准确，句式更加符合该行业特点。

目前已开通科技电子、水利机械、生物医药等 3 个垂直领域，不过只有生物医药支持中英互译，剩下两个只支持中文到英文。建议生物医药相关专业的同学，可以试试使用垂直领域翻译接口。

访问 [https://fanyi-api.baidu.com/product/11](https://fanyi-api.baidu.com/product/11)，直接点击下方立即使用：

![开通通用文本翻译API](../../../assets/images/zotero-plugin-translate/baidu-4.png)

点击之后可能出现验证（手机或实名制认证），请按照说明进行验证，提升免费额度。

![实名认证窗口](../../../assets/images/zotero-plugin-translate/baidu-5.png)

然后需要注册成为百度翻译开发者，请选择个人开发者，并如实填下方表格中的信息。

![个人开发者注册表格](../../../assets/images/zotero-plugin-translate/baidu-6.png)

选择下方高级版，每月 100W 免费额度。

![选择高级版](../../../assets/images/zotero-plugin-translate/baidu-7.png)

## 2. 百度翻译（通用文本翻译）接口申请

访问 [https://fanyi-api.baidu.com/choose](https://fanyi-api.baidu.com/choose) ，选择通用文本翻译，点下一步：

![通用文本翻译API开通](../../../assets/images/zotero-plugin-translate/baidu-8.png)

![开通高级版](../../../assets/images/zotero-plugin-translate/baidu-9.png)

![申请认证](../../../assets/images/zotero-plugin-translate/baidu-10.png)

应用名称是必填的，其他随意写。最后点击提交申请。

![提交申请](../../../assets/images/zotero-plugin-translate/baidu-11.png)

![开通成功后的个人页面](../../../assets/images/zotero-plugin-translate/baidu-12.png)

上图是开通成功后的页面。

## 3. 百度垂直领域（领域翻译）接口申请

打开这个网页 [https://fanyi-api.baidu.com/choose](https://fanyi-api.baidu.com/choose)，选择领域翻译，点下一步：

![垂直领域翻译接口开通](../../../assets/images/zotero-plugin-translate/baidu-13.png)

![申请表格](../../../assets/images/zotero-plugin-translate/baidu-14.png)

![垂直领域翻译接口开通成功后的个人页面](../../../assets/images/zotero-plugin-translate/baidu-15.png)

[https://fanyi-api.baidu.com/api/trans/product/desktop?req=field](https://fanyi-api.baidu.com/api/trans/product/desktop?req=field) 垂直领域的后台界面，上面有对应的使用明细。

## 4. 接口密钥查询

打开 [https://fanyi-api.baidu.com/api/trans/product/desktop](https://fanyi-api.baidu.com/api/trans/product/desktop)，可以在最下面看到配置使用的 APP ID 和密钥。

![接口密钥查看页面](../../../assets/images/zotero-plugin-translate/baidu-16.png)

垂直领域翻译还需要一个领域参数，具体领域信息如下：

| 支持传入值 | 描述         | 支持语言方向                          |
| ---------- | ------------ | ------------------------------------- |
| it         | 信息技术领域 | 中文（简）-> 英语、英语 -> 中文（简） |
| finance    | 金融财经领域 | 中文（简）-> 英语、英语 -> 中文（简） |
| machinery  | 机械制造领域 | 中文（简）-> 英语、英语 -> 中文（简） |
| senimed    | 生物医药领域 | 中文（简）-> 英语、英语 -> 中文（简） |
| novel      | 网络文学领域 | 中文（简）-> 英语                     |
| academic   | 学术论文领域 | 中文（简）-> 英语、英语 -> 中文（简） |
| aerospace  | 航空航天领域 | 中文（简）-> 英语、英语 -> 中文（简） |
| wiki       | 人文社科领域 | 中文（简）-> 英语                     |
| news       | 新闻资讯领域 | 中文（简）-> 英语、英语 -> 中文（简） |
| law        | 法律法规领域 | 中文（简）-> 英语、英语 -> 中文（简） |
| contract   | 合同领域     | 中文（简）-> 英语、英语 -> 中文（简） |

以上信息参考 [百度开发文档](https://fanyi-api.baidu.com/product/123)。

这里假设我申请到的 APP ID 为 `12345`，密钥为 `abcde`，选择生物医药领域为 `medicine`。介绍如何在 Zotero 翻译插件中设置。

### 4.1 百度翻译设置

![翻译插件设置窗口](../../../assets/images/zotero-plugin-translate/baidu-18.png)

提示窗口点 OK：

![弹窗提示](../../../assets/images/zotero-plugin-translate/baidu-19.png)

![密钥填写处](../../../assets/images/zotero-plugin-translate/baidu-20.png)

这里填入 `12345#abcde`。

### 4.2 百度垂直领域（领域翻译）设置

![垂直领域密钥设置窗口](../../../assets/images/zotero-plugin-translate/baidu-21.png)

![密钥填写处](../../../assets/images/zotero-plugin-translate/baidu-22.png)

密钥处填入 `12345#abcde#medicine`。

## 5. 接口测试

这里以百度垂直领域引擎为例进行测试，在 Zotero 中打开一篇英文 PDF，划词翻译，如下图正常翻译，就说明配置正常。

![配置翻译服务](../../../assets/images/zotero-plugin-translate/baidu-23.png)
