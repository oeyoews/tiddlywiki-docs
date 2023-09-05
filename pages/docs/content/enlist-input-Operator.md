---
title: 'enlist-input'
---

op-input: 一些[甄选的名称](Title Selection)
op-output: 名称存放为在每个输入名称中的一个[名称清单](Title List)
op-purpose: 通过将每个输入名称解释为一个[名称清单](Title List)，选择一些名称
op-suffix: `dedupe` （默认值）删除重复项， `raw` 保持重复不变
op-suffix-name: D
tags: [Filter Operators](#Filter%20Operators) [String Operators](#String%20Operators)
title: enlist-input Operator
type: text/vnd.tiddlywiki

<<.from-version "5.1.23">>

<<.tip " 与 [enlist](enlist Operator) 操作符比较，解释其操作数为一个名称清单">>

```
<$vars days={{{ [[Days of the Week]get[list]] }}}>

{{{ [enlist<days>] }}}

</$vars>
```

等效于:

```
{{{ [[Days of the Week]get[list]enlist-input[]] }}}
```

<<.operator-examples "enlist-input">>
