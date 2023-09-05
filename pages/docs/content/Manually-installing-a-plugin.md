---
title: '手动安装插件'
---

\rules except wikilink

如果您想按照步骤//并排查看//，您可以<<open-external-window "https://tiddlywiki.com/plugins/tiddlywiki/katex">>。

1. 创建当前 TiddlyWiki HTML 文件的备份 ([只是以防万一](The First Rule of Using TiddlyWiki))
1. 在浏览器中打开您的 TiddlyWiki
1. 在另一个浏览器窗口中，找到该插件的链接，例如：<https://tiddlywiki.com/plugins/tiddlywiki/katex.>。通常您可以在该插件的主页上找到其链接。
1. 拖动类似于 `$:/plugins/tiddlywiki/example` 的链接到包含您的 TiddlyWiki 的浏览器窗口
1. 导入 $:/Import 条目中显示的新插件
1. 保存您的 TiddlyWiki (<<.icon $:/core/images/save-button>>)
1. 如果窗口顶部出现黄色警告条，刷新窗口，使 TiddlyWiki 完成该插件安装 <<.icon $:/core/images/refresh-button>>
    * <<.from-version "5.1.22">> 安装支持动态加载的插件时，不再需要刷新 TiddlyWiki。相关详细信息，请参阅[插件机制](PluginMechanism)
1. 该插件现在应该可供使用

<<.note _:"有关从官方插件程序库中安装插件的更多信息，可以在找到[从插件程序库安装插件](Installing a plugin from the plugin library)找到<br>概述可以在[插件](Plugins)找到">>
