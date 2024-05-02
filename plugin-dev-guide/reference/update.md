# 更新清单

`update.json` 列出了插件各版本插件兼容的 Zotero 版本及插件的更新地址。

::: info Todo

待完善，请参考：[Updating your extension - Extension Workshop](https://extensionworkshop.com/documentation/manage/updating-your-extension/)

:::

```json
{
  "addons": {
    "make-it-red@example.com": {
      "updates": [
        {
          "version": "2.0",
          "update_link": "https://zotero-download.s3.amazonaws.com/tmp/make-it-red/make-it-red-2.0.xpi",
          "update_hash": "sha256:e5ac442c4a3cffc4ffec8b764673b7036d5984690978faa7df66d78b030761c2",
          "applications": {
            "zotero": {
              "strict_min_version": "6.999"
            }
          }
        }
      ]
    }
  }
}
```
