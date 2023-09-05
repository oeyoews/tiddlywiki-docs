---
title: 'trim'
---

op-input: 一些[甄选的名称](Title Selection)
op-output: 输入名称为 <<.place S>>，或若未指定 <<.place S>> 则为空白，从开头和结尾修剪空白
op-parameter: <<.from-version "5.1.23">> 一个字符串
op-parameter-name: S
op-purpose: 返回列表中的每个项目，从其开头和结尾修剪空白或给定的字符串
op-suffix: <<.from-version "5.1.23">> `prefix` 只从开头修剪，`suffix` 仅从结尾修剪。如果省略（默认值），则从开始和结尾修剪
op-suffix-name: T
tags: [Filter Operators](#Filter%20Operators) [String Operators](#String%20Operators)
title: trim Operator
type: text/vnd.tiddlywiki

<<.from-version "5.1.20">>
<<.from-version "5.1.23">> <<.op trim>> 筛选器允许指定一个要修剪的字符串为参数。

<<.operator-examples "trim">>
