---
title: 'butlast'
---

op-input: 一些[甄选的名称](Title Selection)
op-output: 所有，但最后 <<.place N>> 个输入名称除外
op-parameter: 一个整数，默认为 1
op-parameter-name: N
op-purpose: 放弃最后 <<.place N>> 个输入名称
tags: [Filter Operators](#Filter%20Operators) [Order Operators](#Order%20Operators)
title: butlast Operator
type: text/vnd.tiddlywiki

<<.from-version "5.2.2">> 如果 <<.place N>> 为 0，<<.op butlast>> 操作符返回输入清单不变。这与 [rest 操作符](rest Operator) 的行为一致。

<<.operator-examples "butlast">>
