---
title: 'ActionCreateTiddlerWidget 示例四'
---

此示例使用一个基标题 "base" 和一个模板：[ActionCreateTiddlerWidget Template](#ActionCreateTiddlerWidget%20Template)。

还会有新的字段 "aa" 和 "bb" 添加到新条目 。

<<wikitext-example-without-html src:"""\define testCreate()
<$action-createtiddler $basetitle="base" $template="ActionCreateTiddlerWidget Template" aa="new field aa" bb="new field bb" />
\end

<$button actions=<<testCreate>> >
<$action-setfield $tiddler="$:/state/tab/sidebar--595412856" text="$:/core/ui/SideBar/Recent"/>
创建条目
</$button> - 点击此按钮也将打开右侧边栏："最近"选项卡
""">>