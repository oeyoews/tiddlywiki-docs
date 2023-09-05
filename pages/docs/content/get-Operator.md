---
title: 'get'
---

op-input: 一些[甄选的名称](Title Selection)
op-output: 在每个输入条目的字段 <<.place F>> 的值
op-parameter: 一个[字段](TiddlerFields)名称
op-parameter-name: F
op-purpose: 选择在输入名称中某个字段的所有值
tags: [Filter Operators](#Filter%20Operators) [Field Operators](#Field%20Operators)
title: get Operator
type: text/vnd.tiddlywiki

依次处理每个输入的名称。如果对应的条目包含字段 <<.place F>>，且此字段的值不是空的，则将其值追加到输出。

<<.tip "不同于大多数其他的[筛选器操作符](Filter Operators)，由 <<.op get>> [选择](Title Selection)的输出可以包含重复项目。使用 `get[F]unique[]` 可避免重复。">>

<<.operator-examples "get">>
