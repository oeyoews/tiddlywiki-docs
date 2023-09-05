---
title: 'ActionCreateTiddlerWidget 示例三'
---

此示例使用一个基标题和一个模板：[ActionCreateTiddlerWidget Template](#ActionCreateTiddlerWidget%20Template)

其将创建："base", "base 1", "base 2" 等等 

<<wikitext-example-without-html src:"""\define testCreate()
<$action-createtiddler $basetitle="base" $template="ActionCreateTiddlerWidget Template"/>
\end

<$button actions=<<testCreate>> >
<$action-setfield $tiddler="$:/state/tab/sidebar--595412856" text="$:/core/ui/SideBar/Recent"/>
创建条目
</$button> - 点击此按钮也将打开右侧边栏："最近"选项卡
""">>