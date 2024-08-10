---
title: 如何解决 Zotero 中 pdf 文件图片上有黑色遮挡的问题
date: 2023-09-14 21:17:47
updated: 2023-09-14 16:51:54
# redirectFrom: /user-guide/faqs/解决pdf图片上的黑色遮挡.html
redirectFrom: /user-guide/faqs/%E8%A7%A3%E5%86%B3pdf%E5%9B%BE%E7%89%87%E4%B8%8A%E7%9A%84%E9%BB%91%E8%89%B2%E9%81%AE%E6%8C%A1.html
---

# 如何解决 Zotero 中 pdf 文件图片上有黑色遮挡的问题

部分同学在使用 Zotero 官方阅读器阅读 pdf 的时候，可能会碰到图片出现黑色遮挡的情况。

![黑色遮挡](../../assets/images/zotero-黑色遮挡.png)

根据 [Zotero 官方答复](https://forums.zotero.org/discussion/97306/black-shade-on-the-figures-when-opening-pdf-by-zotero-report-id-942401037) ，这个问题可能是由显卡不兼容导致，可以尝试通过更新显卡驱动来解决，或者通过修改 Zotero 设置，以降低部分图形性能为代价，解决这个问题。

具体操作步骤如下：

1. 在菜单编辑选择“设置”：
   ![编辑器](../../assets/images/zotero-编辑器.png)
1. 弹出如下图所示的对话框。
   点击“I accept the risk”
   ![同意承担风险](../../assets/images/zotero-我同意承担风险.png)
1. 在搜索框中输入 acceleration，双击搜索到的 layers.acceleration.disabled，Value 将变为 true。然后重新启动 Zotero，即可解决问题。
   ![将 layers.acceleration.disabled 设置为 true](../../assets/images/zotero-layers.acceleration.disabled.png)
