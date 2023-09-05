---
title: 'listed'
---

op-input: 一些[甄选的名称](Title Selection)
op-output: 于字段 <<.place F>> 中提及任何输入名称的条目
op-parameter: 一个[字段](TiddlerFields)名称，缺省为 <<.field list>>
op-parameter-name: F
op-purpose: 找出列出输入名称的条目
tags: [Filter Operators](#Filter%20Operators) [Field Operators](#Field%20Operators)
title: listed Operator
type: text/vnd.tiddlywiki

<<.field F>> 被假设是一个[名称清单](Title List)。

依次处理每个输入的名称。生成一个于 <<.place F>> 字段中提及它的条目的清单（没有特定的顺序），并[主导追加](Dominant Append)到运算符的整体输出。

<<.operator-examples "listed">>
