---
title: '筛选器参数'
---

<$railroad text="""
( "[" [:{/"   ] 以外的任何字符   "/}] "]"
  |
  "{" [:{/"   } 以外的任何字符   "/}] "}"
  |
  "<" [:{/"   > 以外的任何字符   "/}] ">"
)
"""/>

[筛选器操作符](Filter Operators)的参数可以是：

**<<.def 硬式>>**
: `[like this]`
: 该参数为中括号之间的文本。
**<<.def 软式>>**
: <<.def 间接>>
:: `{like this}`
:: 该参数是由位于大括号之间的[文本引用](TextReference)表示的文本，即一指定条目的一个[字段](TiddlerFields)，或指定的[数据条目](DataTiddlers)的属性值。
: <<.def 变量>>
:: `<like this>`
:: 该参数是[变量](Variables)当前的值，角括号之间的文本为参数名称。在 ~TiddlyWiki v5.1.23 之前（含该版本），<<.em 不>>支持宏参数。
::<<.from-version "5.2.0">>  支持文本宏参数。例如：`[<now [UTC]YYYY0MM0DD0hh0mm0ssXXX>]`。

<<.from-version "5.1.23">> 筛选器操作符支持多个参数，这些参数由一个 `,` 字符分隔。

例如：`[param1],[param2]` 或 `<param1>,{param2}`