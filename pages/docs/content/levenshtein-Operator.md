---
title: 'levenshtein'
---

op-input: 一些[甄选的名称](Title Selection)
op-output: 输入标题和 <<.place S>> 之间的 Levenshtein 距离
op-parameter: 一个字符串
op-parameter-name: S
op-purpose: 确定输入标题和给定字符串的 Levenshtein 距离
tags: [Filter Operators](#Filter%20Operators) [String Operators](#String%20Operators)
title: levenshtein Operator
type: text/vnd.tiddlywiki

<<.from-version "5.2.6">>

Levenshtein 距离是衡量两个字符串之间差异的指针。非正式地，两个字符串之间的 Levenshtein 距离是将一个字符串更改为另一个所需的//最小//单字符编辑数。

<<.operator-examples "levenshtein">>
