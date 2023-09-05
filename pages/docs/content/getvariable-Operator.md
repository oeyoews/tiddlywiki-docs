---
title: 'getvariable'
---

op-input: 一些甄选的变量名称
op-output: 输入标题中命名的每个变量的值 (如果变量未定义，则为空)
op-parameter: 忽视
op-purpose: 选择输入标题中命名的所有变量的值
tags: [Filter Operators](#Filter%20Operators) [Special Operators](#Special%20Operators)
title: getvariable Operator
type: text/vnd.tiddlywiki

<<.from-version "5.1.20">> 在筛选器中检索变量值的常用方法，是使用角括弧标记法。例如,`[<currentTiddler>]` 将检索名为 `currentTiddler` 的变量的值。。

`getvariable` 筛选器运算符提供了另一种方法来检索变量。例如，`[currentTiddler]getvariable[](#currentTiddler%5Dgetvariable%5B)` 是检索变量 `currentTiddler` 值的另一种方法.

`getvariable` 的优点是能够使用名称已计算的变量，且事先并不知道该变量名称。例如，`[<myvariable>getvariable[]]` 取得在变量 `myvariable` 中给定其名称的变量的值。

<<.operator-examples "getvariable">>
