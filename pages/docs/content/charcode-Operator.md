---
title: 'charcode'
---

op-input: 忽略
op-output: 由操作数中给定的数字代码所指定的字符串联而成的字符串
op-parameter: 字符的数字代码
op-parameter-name: C
op-purpose: 从其字符的数字代码生成字符串字符
tags: [Filter Operators](#Filter%20Operators)
title: charcode Operator
type: text/vnd.tiddlywiki

<<.from-version "5.2.0">>

此操作符返回一个字符串，该字符串是由一个或多个操作数中给定的数字代码指定的字符串联而成。它对于生成特殊字符（例如，定位字符 (`charcode[9]`) 或换行字符 (`charcode[13],[10]`) 非常有用。

<<.operator-examples "charcode">>
