---
title: '列表简介'
---

制作项目列表在使用 TiddlyWiki 起着内核作用。以下是一些较为常用的技巧的简要介绍。

~TiddlyWiki [内部](ListField)[使用](Extended Listops Filters)列表有很多用途，所以这个词可以有多个含义。这里我们关心的是显示项目串行，但不一定是作为一个传统的项目符号列表。

# 手动输入列表

## ~WikiText

WikiText 列表是手动输入的列表，它们使用特殊字符来指定它是什么类型的列表，以及它应该如何显示。

示例包括用星号（*）和编号列表（＃）创建的项目符号列表。在幕后， ~WikiText 列表是基于标准的 `<ul>` 和 `<li>`  HTML 元素。更多相关信息，请参阅 [Lists in WikiText](#Lists%20in%20WikiText)。

WikiText 的输入列表的一个例子：

<<wikitext-example-without-html """* Greatest Movies of All Time
    * Casa Blanca
    * Pride and Prejudice and Zombies""">>

# 生成列表

可以使用[筛选器操作符](Filter Operators)中的[筛选器](Filters)，以 ListWidget 自动生成列表
指定选择哪些条目作为输出的标准。为一些常见类型的列表提供了快捷宏。

## ~ListWidget

ListWidget 是创建列表最强大的工具。它允许操作筛选的输出，并将其样式化为看起来完全不像列表的表单，例如表格或复杂文本。更多相关详细信息，请参阅 [ListWidget](#ListWidget)。

一个显示具有 "HelloThere" 标签的所有条目的示例，可能如下所示：

<<wikitext-example-without-html """<$list filter="[tag[HelloThere]]"><$view field="title"/><br/></$list>""">>

<<.tip """即使条目本身是由 ~ListWidget 生成，[ViewTemplate]($:/core/ui/ViewTemplate) 使用 ListWidget 来取得用于显示条目名称、标签、内容等的所有指定模板。""">>

## 筛选器的转换

筛选器的转换 `{{{...}}}` 的语法，将一个筛选器作为输入，并输出匹配标题的链接列表。您还可以应用[模板](Transclusion with Templates), 例如:

<<wikitext-example-without-html """{{{ [tag[HelloThere]] || $:/core/ui/TagTemplate }}}""">>

## list-links 宏

[list-links](list-links Macro) 宏以比使用 ListWidget 更简单的方式，提供预先格式化的列表 (通常是符号列表)。幕后, 它真的是 ListWidget 套用默认模板至每个列表项目。

<$macrocall $name="wikitext-example-without-html" src="""<<list-links "[tag[HelloThere]]">>"""/>

# 其他 “列表相关” 功能

[list](ListField)、[list-before](Order of Tagged Tiddlers) 和 [list-after](Order of Tagged Tiddlers) 是所有控制条目在列表中的位置的字段名称。[字段](TiddlerFields)是一种将结构化信息 (如日期、数量、类别等) 的附加位添加到条目的方法。

[list](list Operator) 和 [listed](listed Operator) 分别为选择和查找列表中的标题的//筛选器操作符//。

