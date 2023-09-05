---
title: 'getindex'
---

op-input: 一些[甄选的名称](Title Selection)
op-output: 每个输入名称的 <<.place P>> 属性的值
op-parameter: 一个[属性](DataTiddlers)的名称
op-parameter-name: P
op-purpose: 在输入名称中选择数据属性的所有值
tags: [Filter Operators](#Filter%20Operators) [Field Operators](#Field%20Operators)
title: getindex Operator

依次处理每个输入的名称。如果它并不表示一个[数据条目](DataTiddlers)则忽略之。如果对应的条目包含 <<.place P>> 属性，并且此属性的值不为空，则将其值附加到输出。。

<<.tip """与大多数其他[筛选器操作符](Filter Operators)不同，<<.op getindex>> [甄选的名称](Title Selection)的输出可以包含重复项。若为避免重复，请使用 `getindex[P]unique[]`。""">>

<<.operator-examples "getindex">>