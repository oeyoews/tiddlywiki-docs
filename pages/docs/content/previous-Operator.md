---
title: 'previous'
---

op-input: 一些[甄选的名称](Title Selection)
op-output: 所选包含每个在 <<.place T>> 的 <<.field list>> 字段中的每个输入名称之前的名称
op-parameter: 一个条目名称
op-parameter-name: T
op-purpose: 找出于 <<.field list>> 字段中于各输入名称之前的条目名称
tags: [Filter Operators](#Filter%20Operators) [Field Operators](#Field%20Operators) [Order Operators](#Order%20Operators)
title: previous Operator
type: text/vnd.tiddlywiki

依序处理每个输入名称，并将位于 <<.field list>> 字段中其前者追加到输出。如果名称没有列于该字段，或者是里面第一个名称，则无输出。

<<.operator-examples "previous">>
