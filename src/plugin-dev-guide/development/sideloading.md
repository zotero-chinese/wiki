# 侧载插件

Zotero 基于 Firefox，与其相同的，Zotero 侧载插件也有两种方式，分别是通过代理文件在启动时加载插件，和通过远程调试以临时插件的形式载入插件。

::: tip

使用社区模板的开发者，无需配置这些环境，只需要按照模板要求配置 Zotero 可执行文件路径和配置文件地址即可。模板中的启动脚本将为你自动侧载插件。

:::

## 通过代理文件载入插件

::: note Todo

此节说明如何通过代理文件将插件侧载入 Zotero，待完善，请参阅：[Setting Up a Plugin Development Environment](https://www.zotero.org/support/dev/client_coding/plugin_development#setting_up_a_plugin_development_environment)。

:::

## 通过安装临时插件载入

::: note Todo

Zotero 官方尚未提供此种方式的文档，但此种方式是 Firefox 较为推荐的方式，社区维护的框架等也正在逐步迁移至此种方式，在迁移完成之前，可以参考 [web-ext](https://github.com/mozilla/web-ext/) 包来实现。

:::
