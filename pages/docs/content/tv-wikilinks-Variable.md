---
title: 'tv-wikilinks'
---

<<.def tv-wikilinks>> [变量](Variables)控制 <<.wlink LinkWidget>> 小工具的行为。

这个小工具通常会生成到一个条目的链接。但是如果此变量的值为 <<.value no>>，则小工具取消链接而只显示文本，否则显示为链接。

您可以通过将下列行放置在条目的本文的开头，以抑制整个条目中的链接：

> `\define tv-wikilinks() no`

此变量不会影响外部链接，一如那些不涉及 <<.wid link>> 小工具的链接。

<<.variable-examples "tv-wikilinks">>
