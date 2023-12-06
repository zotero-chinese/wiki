---
title: 密钥申请：OpenL
date: 2023-06-28 21:14:03
updated: 2023-07-28 10:38:12
---

密钥申请：OpenL

# 申请步骤

申请：<https://my.openl.club/login?next=/>

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1664880800951-2e53cbd2-e2d2-416a-b770-bd935d035f5d.png" width="1280" id="u089ea327" class="ne-image">

# 密钥格式

service1,service2,...#API 密钥(service codes 用','分隔).

支持的 service codes: deepl,youdao,tencent,aliyun,baidu,caiyun,wechat,sogou,azure,ibm,aws,google, 见[Service Code](https://docs.openl.club/#/API/format?id=%e7%bf%bb%e8%af%91%e6%9c%8d%e5%8a%a1%e4%bb%a3%e7%a0%81%e5%90%8d)

例如，你需要使用 deepl 和 youdao，你的 API 密钥（上图粉红色一长串）是 112233，则填写`deepl,youdao#112233`。其他更多或更少服务同理。
