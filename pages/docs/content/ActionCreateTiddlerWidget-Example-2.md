---
title: 'ActionCreateTiddlerWidget 示例二'
---

此示例将使用定义于 [$:/language/DefaultNewTiddlerTitle](#%24%3A/language/DefaultNewTiddlerTitle) 的基标题。

如果按钮被点击数次，它会覆盖该条目。

<<wikitext-example-without-html src:"""\define testCreate()
<$action-createtiddler $basetitle={{$:/language/DefaultNewTiddlerTitle}} $overwrite="yes"/>
\end

<$button actions=<<testCreate>> >
<$action-setfield $tiddler="$:/state/tab/sidebar--595412856" text="$:/core/ui/SideBar/Recent"/>
创建条目
</$button> - 点击此按钮也将打开右侧边栏："最近"选项卡
""">>