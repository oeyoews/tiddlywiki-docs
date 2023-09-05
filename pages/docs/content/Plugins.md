---
title: '插件'
---

# 简介

TiddlyWiki5 中的插件可用于散布可选的组件，自定义和扩充维基。您可以从[官方插件程序库](Installing a plugin from the plugin library)或从社群网站安装插件。

在内部，插件是一些条目被打包成可被安装、拷贝、禁用或删除的单一条目。插件中的个别条目呈现为[影子条目](ShadowTiddlers)。

插件可以包含 ~JavaScript 模块、样式表和模板。 插件也可以用于散布普通的文本、图片或其他内容。

# 使用单档维基处理插件

<<list-links "[tag[Plugins]] -[has[draft.of]]">>

# 使用主从式配置处理插件 (Node.js)

<<list-links "[tag[PluginsCS]] -[has[draft.of]]">>

# 插件机制

[插件机制](PluginMechanism)条目包含有关如何在内部实现插件的更多详细信息。

有一个名为 $:/core 的插件，其中包含 ~TiddlyWiki 的主要内核代码。它始终存在，为[默认条目](ShadowTiddlers)的来源。
