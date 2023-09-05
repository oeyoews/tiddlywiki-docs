---
title: '小工具'
---

~TiddlyWiki 的显示是由一些底层的<<.def 小工具>>驱动。这些小工具都组织成树状结构：每个小工具有一个父层工具，以及零或更多的子层小工具。

~TiddlyWiki 经由解析条目的 WikiText 生成此 <<.def 小工具树>>。每个 WikiText 语法的组件，甚至包括普通文本的简单案例，生成对应的小工具。小工具树是后续化为实际显示的中间表示。

小工具是类似于 HTML 文档中的元素。事实上，WikiText 中的 HTML 标记生成专用的 <<.def 元素小工具>>。

每个小工具的类别贡献一个特定功能，例如 <<.wlink2 显示图像 ImageWidget>> 的功能、或是 <<.wlink2 一个按钮 ButtonWidget>>、<<.wlink2 调用一个宏 MacroCallWidget>>、<<.wlink2 从别处嵌入片段 TranscludeWidget>>，或 [标示一段文本作为标题](HTML in WikiText)。

这些更专业化的小工具使用通用的[小工具语法](Widgets in WikiText) 作为他们唯一可能的 WikiText 表示。

核心内置以下几类小工具：

<<list-links "[tag[Widgets]]">>
