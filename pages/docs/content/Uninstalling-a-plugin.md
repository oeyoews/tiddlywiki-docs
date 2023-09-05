---
title: '反安装插件'
---

\rules except wikilink

如果您想按照步骤//并排查看//，您可以<<open-tiddler-in-window>>。

使用 TiddlyWiki 为一个独立的单一文件维基时，请遵循这些说明︰

1. 创建当前 TiddlyWiki HTML 文件的备份 ([只是以防万一](The First Rule of Using TiddlyWiki))
1. 打开<<controlPanel-plugin-link>>，点击''插件''选项卡
1. 点击您想要删除的插件，如同打开一个独立的条目
1. 点击该条目工具栏的 <<.icon $:/core/images/down-arrow>> **更多**按钮和 <<.icon $:/core/images/delete-button>> **删除**条目
1. 保存您的 TiddlyWiki (<<.icon $:/core/images/save-button-dynamic>>)
1. 如果窗口顶部出现黄色警告条，刷新窗口，使 TiddlyWiki 完成移除该插件 <<.icon $:/core/images/refresh-button>>
    * <<.from-version "5.1.22">> 删除支持动态加载的插件时，不再需要重新加载 TiddlyWiki。相关详细信息，请参阅[插件机制](PluginMechanism)
1. 该插件应该不再有效或可用

<<.note _:"""如果您使用 ~TiddlyWiki 于 **Node.js**，请仔细查看[使用 Node.js 反安装插件]]<br>可以在[[插件](Plugins)中，找到一个使用插件的概述""">>