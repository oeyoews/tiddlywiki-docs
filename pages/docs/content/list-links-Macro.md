---
title: 'list-links'
---

<<.def list-links>> [宏](Macros)返回一个链接到[甄选条目](Title Selection)的格式化清单。

如果条目具有 <<.field caption>> 字段，则显示此字段而非条目名称。如果字段 <<.field caption>> 为空, 则显示一个空白项。

注意：没有给定任何输入标题的[筛选器 run](Filter Run) 的每个第一个 [step](Filter Step) 都会接受 <$link to="all Operator">[all[tiddlers]]</$link> 的输出作为输入。这意味着全部现有的非[影子](ShadowTiddlers)条目。

## 参数

**filter**
: 一个选择要包括哪些条目的[筛选器](Filters)
**field**
: 为每个清单项嵌入的字段名称，默认为 `caption`
**type**
: 一个用于清单中每个项目的 HTML 元素，默认为 `ul`
**subtype**
: 一个用于清单中每个项目的 HTML 元素，默认为 `li`
**class**
: 一个整体的清单元素的 [CSS](Cascading Style Sheets) 类别
**emptyMessage**
: 若无具有指定标签的条目，可选的用以显示的维基文本

<<.macro-examples "list-links">>
