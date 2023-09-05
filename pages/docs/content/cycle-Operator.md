---
title: 'cycle'
---

op-input: 一个项目清单
op-output: 输入列表，其参数中指定的标题以循环方式切换
op-parameter: <<.op cycle>> 操作符接受 1 或 2 个参数，详见下文
op-purpose: 在输入中切换，以循环方式在第一个操作数中指定的标题
tags: [Filter Operators](#Filter%20Operators) [Listops Operators](#Listops%20Operators) [Order Operators](#Order%20Operators)
title: cycle Operator
type: text/vnd.tiddlywiki

<<.from-version "5.1.23">>

<<.op cycle>> 操作符至少需要一个参数。

```
[cycle[<titles>],[step-size]]
```
* **titles** : 要循环切换输入列表中的标题列表。如果输入中没有参数的标题，将添加第一个标题。如果输入中存在参数的标题，它替换为参数中的下一个标题。请注意，此参数中指定的所有标题应是唯一的。
* **step-size**: （可选）。默认值为 1。指定参数清单中每次要移动的步骤数。可以是负数。

<$macrocall $name=".tip" _="<<.op cycle>> 操作符将其第一个参数解译为要循环的标题列表，[toggle 操作符](toggle Operator)接受无限数量的不同参数，并提供类似的功能。"/>

<<.operator-examples "cycle">>
