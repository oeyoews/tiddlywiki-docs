---
title: 'currentTiddler 变量（示例）'
---

下列两个示例具有相同的含义：

<$macrocall $name=".example" n="1" eg="""<$view field=title/>"""/>
<$macrocall $name=".example" n="2" eg="""<$view tiddler=<<currentTiddler>> field=title/>"""/>

下一个示例显示 <<.wlink ListWidget>> 小工具如何改变当前条目：

<$macrocall $name=".example" n="3"
eg="""<ol>
<$list filter="[prefix[J]]">
<li><<currentTiddler>></li>
</$list>
</ol>"""/>
