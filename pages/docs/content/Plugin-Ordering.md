---
title: '插件排序'
---

使用 Node.js 主从式设置插件，按以下顺序启动：

1. 使用操作系统的环境变量找到插件
    * 见: [插件文件夹](PluginFolders)
    * 和: [用于 Node.js 的环境变量](Environment Variables on Node.js)

1. 存放在维基 `/plugins` 路径中的插件
    * 见: [插件文件夹](PluginFolders)

1. 命令行中指定的插件
    * 见: [在 Node.js 上使用 TiddlyWiki](Using TiddlyWiki on Node.js) ... 关于 <<.from-version "5.1.20">>

1. 通过拖放导入的插件作为维基内容
    * 见: [从插件程序库安装一个插件](Installing a plugin from the plugin library) 或 [手动安装一个插件](Manually installing a plugin)

**重要：**

* **清单中较低的元素优先**

* 通过将插件拖放到浏览器中，包括插件为一个普通条目，将导致插件仅在浏览器中处于活动状态
    * 其在 Node.js 下不可用

选项 1:

* 使用 Node.js 配置选项 1 是最常见的配置
* 降低维护，因为所有插件都可以一次性更新

选项 2:

* 选项 2 是首选，如果要使用固定配置
* 插件更新只影响对应的维基

选项 3:

* 此选项允许''添加并启动''一个版本，而无需覆盖现有的 `tiddlywiki.info` 文件
* 允许您启动任何版本为主从式版本，即使 `tiddlywiki.info` 文件未指定它。

选项 4:

* 与单档维基使用的机制完全相同
* 此机制应仅用于 Node.js 配置中，用于''测试和调试''目的，因为插件存放在 `tiddlers/` 目录中
