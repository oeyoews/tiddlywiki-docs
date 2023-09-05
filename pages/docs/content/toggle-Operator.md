---
title: 'toggle'
---

op-input: 一个项目列表
op-output: 输入列表，其标题在参数中切换
op-parameter: <<.op toggle>> 操作符接受 1 或 更多个参数，详见下文
op-purpose: 切换在输入中的操作数中指定的标题
tags: [Filter Operators](#Filter%20Operators) [Listops Operators](#Listops%20Operators) [Order Operators](#Order%20Operators)
title: toggle Operator
type: text/vnd.tiddlywiki

<<.from-version "5.1.23">>

<<.op toggle>> 操作符至少需要一个参数，可以接受其他可选参数。通过第二个可选参数，可以在一对标题之间切换：

```
[toggle[<title1>],[<title2>]]
```
* **title1** : 一个要在输入清单中切换的标题。如果已存在，则将其删除。否则，将添加它。
* **title2**: (可选)。当提供第二个参数时，操作符在输入清单中的两个值之间切换。如果两者都不存在，则第一个参数优先添加到清单中。

具有两个以上的参数， <<.op toggle>> 的行为类似于 [cycle](cycle Operator)，可用于在值列表中循环。请注意，所有操作数都应该是唯一的。

<$macrocall $name=".tip" _="<<.op cycle>> 操作符将其第一个参数解译为要循环浏览的标题列表，并提供相似的功能，而 <<.op toggle>> 操作符接受无限数量的不同参数。"/>

<<.operator-examples "toggle">>
