---
title: 'enlist'
---

op-input: 忽略
op-neg-input: 一些[甄选的名称](Title Selection)
op-neg-output: 这些输入名称 <<.em 不>> 被列于 <<.place L>>
op-output: 这些名称存成 [名称清单](Title List) 于 <<.place L>>
op-parameter: 一个[名称清单](Title List)
op-parameter-name: L
op-purpose: 从操作数选择名称解译为一个[名称清单](Title List)
op-suffix: <<.from-version "5.1.20">> `dedupe` (默认值) 删除重复项，`raw` 保持重复项不变
op-suffix-name: D
tags: [Filter Operators](#Filter%20Operators) [Field Operators](#Field%20Operators) [Selection Constructors](#Selection%20Constructors) [Negatable Operators](#Negatable%20Operators)
title: enlist Operator
type: text/vnd.tiddlywiki

<<.tip """文本筛选器操作数不能包含方括弧，但您可以解决此问题，通过使用一个变量。''了解更多信息于：'' [SetWidget](#SetWidget) 文档的 "筛选后的清单变量赋值" 标题下""">>

```
<$set name="myList" value="first [[second with a space]] third">
<$list filter="[enlist<myList>]">
...
```


<<.operator-examples "enlist">>
