---
title: 'transclusion 变量（示例）'
---

此示例演示如何区分侧边栏和其他环境：

<$macrocall $name=".example" n="1"
eg="""We are
<$list
filter="[<transclusion>prefix[{|$:/core/ui/PageTemplate/sidebar|||}]]"
emptyMessage="in the story river.">
in the sidebar.
</$list>"""/>

在侧边栏中，这会显示 `We are in the sidebar`。
