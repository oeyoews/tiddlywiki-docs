---
title: 'days'
---

op-input: 一些[甄选的名称](Title Selection)
op-neg-output: 这些输入的条目，在指定字段 <<.place F>> 至少为 <<.place D>> { 未来 | 过去 } 天
op-output: 这些输入的条目，在指定字段 <<.place F>> 为 { 未来 | 过去 } 或任何时间之 { 前 | 后 } <<.place D>> 天，包含 { 过去 | 未来 }
op-parameter: 一个 { 正 | 负 } 天数，默认为 0
op-parameter-name: D
op-purpose: 按日期筛选输入
op-suffix: 一个[日期字段](Date Fields)的名称，默认为 <<.field modified>>
op-suffix-name: F
tags: [Filter Operators](#Filter%20Operators) [Date Operators](#Date%20Operators) [Negatable Operators](#Negatable%20Operators)
title: days Operator
type: text/vnd.tiddlywiki

选择指定的日期字段 (默认为 "modified") 于指定的日期范围的条目。时间部分将被忽略。

<<.operator-examples "days">>
