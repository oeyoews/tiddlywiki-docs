---
title: 'ActionCreateTiddlerWidget 示例一'
---

此示例将创建 "{{$:/language/DefaultNewTiddlerTitle}}"、"{{$:/language/DefaultNewTiddlerTitle}} 1"、"{{$:/language/DefaultNewTiddlerTitle}} 2" 等等

<<wikitext-example-without-html src:"""\define testCreate()
<$action-createtiddler />
\end

<$button actions=<<testCreate>> >
<$action-setfield $tiddler="$:/state/tab/sidebar--595412856" text="$:/core/ui/SideBar/Recent"/>
创建条目
</$button> - 点击此按钮也将打开右侧边栏："最近"选项卡
""">>
