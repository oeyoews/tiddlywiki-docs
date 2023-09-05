---
title: 'list-links-draggable'
---

<<.def list-links-draggable>> [宏](Macros) 将条目的 ListField 呈现为可以通过[拖放](Drag and Drop)重新排序的链接清单。

## 参数

**tiddler**
: 包含该清单的条目名称
**field**
: 包含该清单的字段名称 (默认为 `list`)
**emptyMessage**
: 如果没有输出（条目不存在、字段不存在或为空），则显示可选的维基文本
**type**
: 要用于该清单包装的元素标记 (默认为 `ul`)
**subtype**
: 要用于列表项目的元素标记 (默认为 `li`)
**class**
: 可选的要添加到包装元素得空格分隔类别
**itemTemplate**
: 可选的条目名称作为用于呈现清单项目的模板

若未提供 `itemTemplate` 参数，则将清单项目呈现为简单的链接。在 `itemTemplate` 中，[currentTiddler 变量](currentTiddler Variable)参照至当前清单项目。

<<.macro-examples "list-links-draggable">>
