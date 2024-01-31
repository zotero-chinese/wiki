# 插件清单

`manifest.json`：<https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json>

````json
{
	"manifest_version": 2,
	"name": "Make It Red",
	"version": "2.0",
	"description": "Makes everything red",
	"homepage_url": "https://github.com/zotero/make-it-red",
	"applications": {
		"zotero": {
			"id": "make-it-red@example.com",
			"update_url": "https://zotero-download.s3.amazonaws.com/tmp/make-it-red/updates-2.0.json",
			"strict_min_version": "6.999",
			"strict_max_version": "7.0.*"
		}
	}
}```
````
