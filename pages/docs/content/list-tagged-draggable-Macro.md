---
title: 'list-tagged-draggable'
---

<<.def list-tagged-draggable>> [宏](Macros) 将具有特定标签的条目呈现为可以通过[拖放](Drag and Drop)重新排序的链接清单。

## 参数

**tag**
: 标签的标题
**subFilter**
: 可选子筛选器，筛选出不需要的项目的 (例如 `!tag[done]`)
**itemTemplate**
: 可选的条目名称，用作呈现清单项目的范本
**emptyMessage**
: 若无具有指定标签的条目，可选的用以显示的维基文字

请注意，[排序](Order of Tagged Tiddlers)是通过将一个新的清单分配给标签条目的 `list` 字段来实现。任何带有该标签的其他条目的 `list-before` 或`list-after` 字段也被会删除，以确保遵守 `list` 字段的排序。

若未提供 `itemTemplate` 参数，则将清单项目呈现为简单的链接。在 `itemTemplate` 中，[currentTiddler 变量](currentTiddler Variable)参照至当前清单项目。

<<.macro-examples "list-tagged-draggable">>
