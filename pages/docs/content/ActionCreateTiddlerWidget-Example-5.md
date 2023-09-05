---
title: 'ActionCreateTiddlerWidget 示例五'
---

此示例将使用 [ActionCreateTiddlerWidget Template](#ActionCreateTiddlerWidget%20Template) 中定义的基本标题。

它将创建："base"、"base 1"、"base 2" 等，并以草稿模式导航到此条目。

<<wikitext-example-without-html src:"""\define testCreate()
<$action-createtiddler $basetitle="base" $template="ActionCreateTiddlerWidget Template">
	<$action-sendmessage $message="tm-edit-tiddler" $param=<<createTiddler-title>>/>
</$action-createtiddler>
\end

<$button actions=<<testCreate>> >
<$action-setfield $tiddler="$:/state/tab/sidebar--595412856" text="$:/core/ui/SideBar/Recent"/>
创建条目
</$button> - 点击此按钮也将打开右侧边栏："最近"选项卡
""">>
