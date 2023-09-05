---
title: 'each'
---

op-input: 一些[甄选的名称](Title Selection)
op-output: 所选包含输入名称遇到 <<.place F>> 字段为不同值的首个名称
op-parameter: 一个[字段](TiddlerFields)的名称
op-parameter-name: F
op-purpose: 选择输入名称依字段分组的每个群组之一
op-suffix: 可选的，`list-item` 或 `value`
tags: [Filter Operators](#Filter%20Operators) [Group Operators](#Group%20Operators)
title: each Operator
type: text/vnd.tiddlywiki

依次处理每个输入名称。相应的条目的 <<.place F>> 字段值会被检验。

**each**
:只要字段的值是唯一的（即之前未曾遇到），即追加该名称到输出。

**each:list-item**
:其值如同[条目名称列表](Title List)被处理。清单中的每个名称会依次被考虑。只要之前未曾遇到的，即追加该名称到输出。

**each:value**
:只要条目名称是唯一的, 就会追加到输出中，无论是否存在相应的条目。

请注意，如果一条目不包含字段 <<.place F>>，被视为字段的值为空值。因此，像 `[each[motovun]]` 这样的筛选器表达式将返回一个没有 `motovun` 字段的条目，以及一个条目具有该字段每个不同值，如果有的话。要只获取具有非空白值的 `motovun` 字段的条目，可以使用 `[each[motovun]has[motovun]]`。

<<.operator-examples "each">>
