---
title: Zotero Scihub插件
date: 2023-08-26 10:06:59
updated: 2023-07-20 16:51:54
---
Zotero Scihub插件

[插件官网](https://github.com/ethanwillis/zotero-scihub)

# 插件说明

This is an add-on for [Zotero](https://www.zotero.org/) and [Juris-M](https://juris-m.github.io/) that enables automatic download of PDFs for items with a DOI.

# 如何使用

#### Install

- Download the latest release (.xpi file) from the [Releases Page](https://github.com/ethanwillis/zotero-scihub/releases)*Note* If you're using Firefox as your browser, right click the xpi and select "Save As.."
- In Zotero click "Tools" in the top menu bar and then click "Addons"
- Go to the Extensions page and then click the gear icon in the top right.
- Select Install Add-on from file.
- Browse to where you downloaded the .xpi file and select it.
- Restart Zotero, by clicking "restart now" in the extensions list where the scihub plugin is now listed.

#### Usage

Once you have the plugin installed simply, right click any item in your collections. There will now be a new context menu option titled "Update Scihub PDF." Once you click this, a PDF of the file will be downloaded from Scihub and attached to your item in Zotero.

For any new papers you add after this plugin is installed, the scihub pdf will be automatically downloaded.

#### Configuration

Plugin is configured through the dedicated tab:

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662264201463-bad9b3b8-7ebd-4de8-b2ba-d84b84c7e3af.png" width="1564" id="uacecf7c7" class="ne-image">

#### DNS-over-HTTPS

In case of malfunctioning or unsafe local DNS server, Zotero (as it's built on Firefox) might be configured with [Trusted Recursive Resolver](https://wiki.mozilla.org/Trusted_Recursive_Resolver) or DNS-over-HTTPS, where you could set your own DNS server just for Zotero without modifying network settings.

*Preferences > Advanced > Config Editor*

1.  set network.trr.mode to 2 or 3, this enables DNS-over-HTTPS (2 enables it with fallback)
2.  set network.trr.uri to https://cloudflare-dns.com/dns-query, this is the provider’s URL
3.  set network.trr.bootstrapAddress to 1.1.1.1, this is cloudflare’s normal DNS server (only) used to retrieve the IP of cloudfaire-dns.com
4.  Restart zotero, wait for a DNS cache to clean up.