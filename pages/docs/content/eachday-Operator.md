---
title: 'eachday'
---

op-input: 一些[甄选的名称](Title Selection)
op-output: 所选为包含第一个输入的名称的字段 <<.place F>> 遇到的每个不同的值（忽略日期的时间）
op-parameter: 一个[日期字段](Date Fields)的名称，缺省为 <<.field modified>>
op-parameter-name: F
op-purpose: 依日期选择输入名称的每个群组之一
tags: [Filter Operators](#Filter%20Operators) [Group Operators](#Group%20Operators) [Date Operators](#Date%20Operators)
title: eachday Operator
type: text/vnd.tiddlywiki

依次处理每个输入的名称。检查相应条目的 <<.place F>> 字段值，且只要遇到之前没有的日期，即追加名称到输出。

如果一个条目不包含字段 <<.place F>>，则不输出。

<<.operator-examples "eachday">>
