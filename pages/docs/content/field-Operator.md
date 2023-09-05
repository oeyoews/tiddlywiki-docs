---
title: 'field'
---

op-input: 一些[甄选的名称](Title Selection)
op-neg-output: 那些输入条目的字段 <<.place F>> 并<<.em 不>> 具有值 <<.place S>>
op-output: 那些输入条目的字段 <<.place F>> 具有值 <<.place S>>
op-parameter: 可能的字段值 <<.place F>>
op-parameter-name: S
op-purpose: 筛选输入条目的字段
op-suffix: 一个[字段](TiddlerFields)名称
op-suffix-name: F
tags: [Filter Operators](#Filter%20Operators) [Common Operators](#Common%20Operators) [Field Operators](#Field%20Operators) [Negatable Operators](#Negatable%20Operators)
title: field Operator
type: text/vnd.tiddlywiki

如果 <<.place S>> 是空的 <<.op 字段>> 将匹配以下两者：

* 不包含字段 <<.place F>> 的条目
* 条目具有字段 <<.place F>>，但为空的值

[筛选器 step](Filter Step) 的语法对于任何无法识别的[筛选器运算符](Filter Operators)，视为 <<.op field>> 运算符的尾码。

<<.operator-examples "field">>
