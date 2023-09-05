---
title: 'list'
---

op-input: 忽略
op-neg-input: 一些[甄选的名称](Title Selection)
op-neg-output: 些输入名称<<.em 未>>于 <<.place R>> 提及
op-output: 名称存放为一[名称列表](Title List) 于 <<.place R>>
op-parameter: 一个[参考](TextReference)到指定条目的一个[字段](TiddlerFields)或[属性](DataTiddlers)
op-parameter-name: R
op-purpose: 由列表字段选择名称
tags: [Filter Operators](#Filter%20Operators) [Field Operators](#Field%20Operators) [Selection Constructors](#Selection%20Constructors) [Negatable Operators](#Negatable%20Operators)
title: list Operator
type: text/vnd.tiddlywiki

<<.place R>> 可以引用一个字段或属性。语法请参阅 [TextReference](#TextReference)。

* 如果没有指定，则缺省使用 <<.field list>> 字段。所以 `[list[T]]` 输出列于条目 T 的 <<.field list>> 字段中的名称。
* 如果 <<.place R>> <<.em 仅>> 由字段或属性组成，则引用的条目部分缺省为[当前条目](Current Tiddler)。所以 `[list[!!tags]]` 输出列于当前条目的 <<.field tags>> 字段中的名称。

<<.operator-examples "list">>
