---
title: 'transclusion'
---

# 机制 

<<.def transclusion>> [变量](Variables) 由 <<.wlink TranscludeWidget>> 小工具设置为一个标识[小工具树](Widgets)中的位置的字符串。

~TiddlyWiki 核心用其侦测递归[嵌入](Transclusion)，也用于实现 <<.mlink qualify>> 宏。

该字符串具有以下语法：

<$railroad text="""
"{" a "|" b "|" c "|" d "|" e "|" "}"
"""/>

<ol style="list-style-type: lower-alpha;">
<li>[当前条目](Current Tiddler)的名称</li>
<li>正被嵌入的条目名称</li>
<li>正被嵌入的字段名称</li>
<li>正被嵌入的属性名称或索引</li>
<li>正被嵌入的插件子条目名称</li>
</ol>

此五个项目，多数经常是空白的。

在侧边栏中，<<.var transclusion >> 的值为：

> `{|$:/core/ui/PageTemplate/sidebar|||}`

当条目 <<.tid HelloThere>> 显示在故事河时，<<.var transclusion>> 被设为：

> `{HelloThere|HelloThere|||}`

<<.variable-examples "transclusion">>
