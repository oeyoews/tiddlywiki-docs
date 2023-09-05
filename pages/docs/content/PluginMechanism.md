---
title: '插件机制'
---

# 简介

[插件](Plugins) 是成捆的条目，当成单一单元被散布和管理。用户可以拖放安装之，或使用 [插件程序库 ](Installing a plugin from the plugin library)。

<<.from-version "5.1.22">> 包含 JavaScript 模块的插件，需要重新加载维基，才能运作。不包含 JavaScript 模块的插件，自动动态加载和卸载。 

插件可用于打包任何条目内容，包含扩充和加强 TiddlyWiki5 内核功能的 JavaScript [模块](Modules)。已注册插件内的条目是[影子条目](ShadowTiddlers)：他们可以经由创建一个具有相同名称的条目，随意改写之。但删除该条目，则从插件的底层条目值还原之

按照惯例，插件名称的格式为 `$:/plugins/publisher/name`。插件是内核 TiddlyWiki 发行版的一部分，其名称格式为 `$:/plugins/tiddlywiki/name`。

当[运行 TiddlyWiki 于 Node.js](TiddlyWiki on Node.js)，插件也可存放为各别条目文件于[插件文件夹](PluginFolders).

# 插件类型

{{Plugin Types}}

# 插件相依性

{{Plugin Dependencies}}

# 插件顺序

{{Plugin Ordering}}

# 插件字段

{{Plugin Fields}}

# 更多的信息

<<list-links "[tag[PluginMechanism]]">>
