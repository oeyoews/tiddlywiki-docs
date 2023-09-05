---
title: 'sortsub'
---

op-input: 一些[甄选的名称](Title Selection)
op-neg-output: 同输入项，但依计算子筛选器 <<.param S>> 的结果的反顺序排序
op-output: 同输入项，但依计算子筛选器 <<.param S>> 的结果的升幂排序
op-parameter: 要计算的子筛选器
op-parameter-name: S
op-purpose: 依计算每个项目子筛选器的结果，对输入进行排序
op-suffix: 用于比较的型态(字符串、数字、整数、日期、版本)，默认为字符串
op-suffix-name: T
tags: [Filter Operators](#Filter%20Operators) [Field Operators](#Field%20Operators) [Order Operators](#Order%20Operators) [Negatable Operators](#Negatable%20Operators)
title: sortsub Operator
type: text/vnd.tiddlywiki

输入标题清单中的每个项目依次传递给子筛选器。子筛选器将输入名称转换为排序所需的形式。例如，子筛选器 `[length[]]` 将每个输入名称转换为表示其长度的数字中的每个输入名称，从而根据它们的长度对输入名称排序。

请注意，在子筛选器中， "<<.var currentTiddler>>" 变量设为正在处理的条目名称。这样就可以将像 `[{!!value}divide{!!cost}]` 之类的子筛选器用于计算。

子筛选器外部的 <<.var currentTiddler>> 的值可用于 "<<.var ..currentTiddler>>" 变量中。<<.from-version "5.2.0">>

后缀 <<.place T>> 确定如何比较项目，可为：

* "string" (默认值)
* "number" - 无效的数字被解译为零
* "integer" - 无效整数被解译为零
* "date" - 无效日期被解译为 1st January 1970
* "version" - 无效版本被解译为 "v0.0.0"
* "alphanumeric" - 将输入项视为文数字 <<.from-version "5.2.0">>

请注意，子筛选器应返回与传递的项数相同。任何缺少的项将被视为零或空字符串。特别是，当使用 [get 操作符](get Operator) 检索字段的值时，使用 [else 操作符](else Operator) 有助于防止缺少字段值。例如 `[get[myfield]else[default-value]...`。

<<.operator-examples "sortsub">>
