---
title: 'splitregexp'
---

op-input: 一些[甄选的名称](Title Selection)
op-output: 根据指定的正则表达式 <<.place R>> 将输入名称拆分为单独的项目
op-parameter: 用于拆分每个名称的正则表达式
op-parameter-name: R
op-purpose: 根据指定的正则表达式 <<.place R>>，返回列表中的每个项目拆分为单独的字符串
op-suffix: flags：''m'' 用于多行模式，''i' 用于不区分大小写模式
tags: [Filter Operators](#Filter%20Operators)
title: splitregexp Operator
type: text/vnd.tiddlywiki

<<.from-version "5.1.20">>

请注意，在某些情况下， <<.op splitregexp>> 运算符将在结果列表中包含空白项。例如，

```
[[the band thethe are the best the]splitregexp[the]]
```

返回以下结果：

```
["", " band ", "", " are ", " best ", ""]
```

预期结果为：

```
[" band ", " are ", " best "]
```

空白项标记匹配之间的边界。如果它们不是必需的，可以用 [is Operator](#is%20Operator) 的 **blank** 类别删除之：`[the band thethe are the best the]splitregexp[the]!is[blank](#the%20band%20thethe%20are%20the%20best%20the%5Dsplitregexp%5Bthe%5D%21is%5Bblank)`。

空白项可能有用的原因，是它们允许从 [split operator](#split%20operator) 或 [splitregexp Operator](#splitregexp%20Operator) 和 [join Operator](#join%20Operator) 的组合建构搜索和替换操作。例如：

<<.operator-example 1 "[[nobody, really; wants; to see -- all this \punctuation]splitregexp[,|;|-|\\]join[...]]">>

正则表达式中的语法错误，将导致筛选器返回错误消息。例如：

<<.operator-example 2 "[the cat sat on the mat]splitregexp[\](#the%20cat%20sat%20on%20the%20mat%5Dsplitregexp%5B%5C)">>


<<.operator-examples "splitregexp">>
