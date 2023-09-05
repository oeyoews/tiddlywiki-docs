---
title: '保存机制'
---

[保存机制](SavingMechanism)是 TiddlyWiki 生成一个新的 HTML 文件并将其保存的机制，其不同于[同步机制](SyncMechanism)之对个别条目的更动同步回服务器。(详见 <https://tiddlywiki.com/dev/#SyncAdaptorModule>s)。

涉及以下步骤:

1. 保存机制使用定义于 $:/config/SaverFilter 的筛选器，指定更动的条目触发维基的已更动而未保存状态。(未保存状态反映在侧栏中变红色的 "保存变更" 按钮)。
1. ButtonWidget 用于生成一个 [tm-save-wiki](WidgetMessage: tm-save-wiki) 小工具消息以触发保存操作
1. 该小工具消息的可选参数指定一范本，用于生成 HTML 文件，缺省为 $:/core/save/all
    * 在主从式配置的插件 $:/plugins/tiddlywiki/tiddlyweb 以 $:/plugins/tiddlywiki/tiddlyweb/save/offline 替换缺省的范本
1. 该范本包含一个变量赋值，其指定一个筛选器选择条目应该包含于被保存的文件。然后引用主页面范本 `$:/core/templates/tiddlywiki5.html`
    * 该范本包含对 `$(publishFilter)$` 的引用，允许筛选器经由一个全域变量客制化
1. [tm-save-wiki](WidgetMessage: tm-save-wiki) 处理常式呈现范本以生成 HTML 文件
1. 该小工具消息处理常式，选择可处理保存文件的最优先级的 "保存器" 模块
    * 详见 <https://tiddlywiki.com/dev/#Saver>
