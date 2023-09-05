---
title: '内核图标'
---


## 简介

~TiddlyWiki 包括 100 多个自定义矢量图标。它们出现在用户界面中，也可供作者在他们自己的应用程序中使用。有关完整列表，请参阅 [图标库](Icon Gallery)。

## 用法

内核图标通过嵌入它们来使用。例如：

<<wikitext-example-without-html """{{$:/core/images/new-image-button}}
""">>

内核图标已参数化。第一个参数 `size` 指定了图标应该呈现的大小：

<<wikitext-example-without-html """{{$:/core/images/picture|64px}}
<$transclude $tiddler="$:/core/images/picture" size="32px"/>
""">>

这是动态调整图标大小的示例：

<<wikitext-example-without-html """<$list filter="[range[24,56,8]]" variable=iconSize>
<$text text={{{ [<iconSize>addsuffix[px]] }}} />
<$transclude $tiddler="$:/core/icon" size=<<iconSize>>/>
</$list>
""">>

一些图标采用更多参数来自定义其呈现方式。例如，$:/core/images/new-journal-button 图标有一个额外的参数 `day`，它指定应该在日历上显示的该月中的某一天。如果未指定，则默认为当前日期

<<wikitext-example-without-html """{{$:/core/images/new-journal-button|48px|17}}
<$transclude $tiddler="$:/core/images/new-journal-button" day="17"/>
""">>

内核图标标实作为嵌入式 [SVG 元素](Using SVG)，而不是成熟的 SVG 图像。这意味着它们可以使用 CSS 设置样式。例如，CSS 属性 `fill` 可用于更改图标的颜色。例如：

<<wikitext-example-without-html """<span style="fill: red;">{{$:/core/images/opacity}}</span>
""">>
