---
title: 'title'
---

op-input: 忽略
op-neg-input: 一些[甄选的名称](Title Selection)
op-neg-output: 输入，若其存在于此维基，筛选出条目 <<.place T>>
op-output: 所选内容仅包含 <<.place T>>
op-parameter: 一个条目名称
op-parameter-name: T
op-purpose: 选择一个单一的名称
tags: [Filter Operators](#Filter%20Operators) [Common Operators](#Common%20Operators) [Selection Constructors](#Selection%20Constructors) [Negatable Operators](#Negatable%20Operators)
title: title Operator
type: text/vnd.tiddlywiki

`[title[An Example]]` 可以缩短为 `[An Example](#An%20Example)`，因为 <<.op title>> 是默认的筛选器操作符。相应地，`[!title[An Example]]` 可以缩短为 `[![An Example]]`.

<<.op title>> 为一[建构子](Selection Constructors) (除了格式为 `!title`)，但是 <<.olink2 "field:title" field>> 是一个[修饰子](Selection Constructors)。

<<.operator-examples "title">>
