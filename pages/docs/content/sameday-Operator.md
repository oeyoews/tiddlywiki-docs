---
title: 'sameday'
---

op-input: 一些[甄选的名称](Title Selection)
op-output: 些输入条目的字段 <<.place F>> 的值为 <<.place D>>，忽略时间
op-parameter: 一个日期，[格式](DateFormat) 为 `YYYYMMDD`
op-parameter-name: D
op-purpose: 依日期筛选输入
op-suffix: 一个[日期字段](Date Fields)的名称，缺省为 <<.field modified>>
op-suffix-name: F
tags: [Filter Operators](#Filter%20Operators) [Date Operators](#Date%20Operators)
title: sameday Operator
type: text/vnd.tiddlywiki

如果 <<.place D>> 不是一个有效的日期，则输出是空的。

<<.place D>> 可能包括日期的时间，但这将被忽略。

<<.operator-examples "sameday">>
