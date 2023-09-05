---
title: 'subfilter'
---

op-input: 一些[甄选的名称](Title Selection)当作输入，传递给 subfilter 筛选器
op-neg-input: 那些[甄选的名称](Title Selection)<<.em 不是>>当作输入，传递给 subfilter 筛选器
op-neg-output: 那些<<.em 不是>>从 subfilter 筛选器 <<.place S>> 返回的输入的名称
op-output: 从 subfilter 筛选器 <<.place S>> 返回的[甄选的名称](Title Selection)
op-parameter: 一个[筛选器表达式](Filter Expression)
op-parameter-name: S
op-purpose: 甄选的名称从操作数解译为[筛选器表达式](Filter Expression)
tags: [Filter Operators](#Filter%20Operators) [Field Operators](#Field%20Operators) [Selection Constructors](#Selection%20Constructors) [Negatable Operators](#Negatable%20Operators) [Selection Constructors: Conditional](#Selection%20Constructors%3A%20Conditional)
title: subfilter Operator
type: text/vnd.tiddlywiki

<<.from-version "5.1.18">> 请注意，<<.op subfilter>> 筛选器操作符是在 5.1.18 版本中引入的，在早期版本中不可用。
<<.tip "文本筛选器操作数不能包含方括弧，但您可以通过使用变量来解决此问题：">>

```
<$set name="myFilter" value="[tag[one]]">
<$list filter="[all[tiddlers]subfilter<myFilter>]">
...
```

<<.tip "与对每个名称运行一个子筛选器，返回那些返回非空列表的名称 (并丢弃子筛选器的结果) 的类似[筛选器](filter Operator)进行比较">>

The <<.op subfilter>> 操作符将作为一个[搆造函数](Selection Constructors)，无论何时是由其操作数是一个[构造函数](Selection Constructors)来定义。否则，它将作为一个[修改器](Selection Constructors).

<<.operator-examples "subfilter">>
