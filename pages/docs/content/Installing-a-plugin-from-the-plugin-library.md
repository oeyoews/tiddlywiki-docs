---
title: '从插件程序库安装插件'
---

\rules except wikilink

如果您想按照步骤//并排查看//，您可以<<open-tiddler-in-window>>。

使用 TiddlyWiki 为一个独立的单一文件维基时，请遵循这些说明︰

1. 在浏览器中打开您的 TiddlyWiki
1. 创建当前维基文件的备份 ([只是以防万一](The First Rule of Using TiddlyWiki))
1. 打开 <<controlPanel-plugin-link>>
    * 点击''插件''选项卡，然后
    * 点击 <<.icon $:/core/images/download-button>> **获取更多插件**按钮
1. 点击 <<.icon $:/core/images/chevron-right>> **打开插件程序库**以打开官方的插件程序库
1. 当程序库清单加载后：
    1. 使用选项卡选择''插件''、''布景主题''或''语言''
    1. 使用''搜索''框，查找插件的详细信息
1. 点击''安装''按钮，安装插件
1. 保存您的 TiddlyWiki <<.icon $:/core/images/save-button-dynamic>>
1. 如果窗口顶部出现黄色警告条，刷新窗口，使 TiddlyWiki 完成该插件安装 <<.icon $:/core/images/refresh-button>>
    * <<.from-version "5.1.22">> 安装支持动态加载的插件时，不再需要刷新 TiddlyWiki。相关详细信息，请参阅[插件机制](PluginMechanism)
1. 该插件现在应该可供使用

<<.note _:"""如果您使用 ~TiddlyWiki 于 **Node.js**，请仔细查看[在 Node 上安装官方插件](Installing official plugins on Node.js)<br>概述可以在[插件](Plugins)找到""">>
