---
title: 微软翻译接口申请及配置
---

# 微软翻译接口申请及配置

## 1. 接口申请

打开微软的接口平台 [https://azure.microsoft.com/zh-cn/pricing/purchase-options/azure-account/?icid=ai-services](https://azure.microsoft.com/zh-cn/pricing/purchase-options/azure-account/?icid=ai-services)

点击 免费试用 Azure，会提示你登录微软账号，如果你没有账号，可以申请一个后再登录。

![](../../../assets/images/zotero-plugin-translate/微软翻译接口申请及配置-1.png)

跳转到登录页面，并使用账号登录。

![](../../../assets/images/zotero-plugin-translate/微软翻译接口申请及配置-2.png)

弹出开通服务的窗口，勾选第一个同意，点击下一步

![](../../../assets/images/zotero-plugin-translate/微软翻译接口申请及配置-3.png)

进行短信验证

![](../../../assets/images/zotero-plugin-translate/微软翻译接口申请及配置-4.png)

可能需要绑定信用卡

![](../../../assets/images/zotero-plugin-translate/微软翻译接口申请及配置-5.png)

然后直接下一步，可能会遇到邮箱或其他验证方式，直接按照操作说明进行验证。

打开 [https://portal.azure.com/#create/Microsoft.CognitiveServicesTextTranslation](https://portal.azure.com/#create/Microsoft.CognitiveServicesTextTranslation) 申请翻译服务

![](../../../assets/images/zotero-plugin-translate/微软翻译接口申请及配置-6.png)

![](../../../assets/images/zotero-plugin-translate/微软翻译接口申请及配置-7.png)

注意上面请选择 East Asia，后面密钥设置时需要用到这个参数

点击审阅并创建

![](../../../assets/images/zotero-plugin-translate/微软翻译接口申请及配置-8.png)

等待服务创建完成，你可以在 Azure 主页中看到你的新翻译服务，点击下面的链接 [https://portal.azure.com/#home](https://portal.azure.com/#home)

![](../../../assets/images/zotero-plugin-translate/微软翻译接口申请及配置-9.png)

![](../../../assets/images/zotero-plugin-translate/微软翻译接口申请及配置-10.png)

如果上面第 4 个 位置/区域 是全球，可不必复制。

## 2. 翻译插件配置

打开翻译插件的设置

![](../../../assets/images/zotero-plugin-translate/微软翻译接口申请及配置-11.png)

上图第三步，复制密钥时，请按照 secretKey#region 的格式进行。scretKey 是下图的第三步，rgion 是下图第四步。注意如果 region 是全球 global，可以不必填 region，只复制 scretKey 即可。

![](../../../assets/images/zotero-plugin-translate/微软翻译接口申请及配置-12.png)
