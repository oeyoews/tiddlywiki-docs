---
title: 'fixed'
---

op-input: 一些[甄选的名称](Title Selection)
op-output: 输入数字转换为定点数，小数点后面 <<.place N>> 位数
op-parameter: 一个数字
op-parameter-name: N
op-purpose: 每个数字转换为定点数，小数点后面 <<.place N>> 位数
tags: [Filter Operators](#Filter%20Operators) [Mathematics Operators](#Mathematics%20Operators) [Binary Mathematics Operators](#Binary%20Mathematics%20Operators)
title: fixed Operator
type: text/vnd.tiddlywiki

<<.from-version "5.1.20">> 相关概述，请参阅[数学运算符](Mathematics Operators)。

**fixed** 运算符返回不使用指数表示法的输入数字的字符串表示，且小数点后面为准确指定的位数。如有必要，数字将四舍五入，如有必要，小数部分补零，使其具有指定的长度。

<<.operator-examples "fixed">>
