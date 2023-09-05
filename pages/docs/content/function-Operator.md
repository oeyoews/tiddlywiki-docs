---
title: 'function'
---

op-input: 一些[甄选的名称](Title Selection)当作输入，传递给函数 <<.place F>>
op-output: 从函数 <<.place F>> 返回该[甄选的名称](Title Selection)
op-parameter: 第一个参数是[函数名](Functions)，后续参数按位置传递给函数
op-parameter-name: F
op-purpose: 将一个[函数](Functions)应用于输入列表，并返回结果
tags: [Filter Operators](#Filter%20Operators)
title: function Operator
type: text/vnd.tiddlywiki

<<.from-version "5.3.0">> <<.op function>> 操作符将命名的[函数](Functions)应用于输入标题，并返回函数的结果。该函数对所有输入标题调用一次（相比之下，[筛选器操作符](filter Operator)为每个输入标题单独调用其函数）。

<<.op function>> 操作符的第一个参数指定要调用的函数的名称。后续参数将传递给该函数。

参数之间的映射是//定位的//，函数调用中指定的每个连续参数映射到函数定义中的相应参数。未提供的任何参数均赋予其默认值。

<<.tip "与类似的[筛选器](filter Operator)和[子筛选器](subfilter Operator)操作符比较，它们将筛选器字符串作为参数而不是命名函数，并且不允许传递参数">>

<<.operator-examples "function">>
