---
title: 'splitbefore'
---

op-input: 一些[甄选的名称](Title Selection)
op-output: 每个输入名称的前缀到且包括 <<.place S>> 为止
op-parameter: 一个标记前缀结束的字符串
op-parameter-name: S
op-purpose: 从每个输入名称选择一个分隔的前缀
tags: [Filter Operators](#Filter%20Operators) [String Operators](#String%20Operators)
title: splitbefore Operator
type: text/vnd.tiddlywiki

依次处理每个输入的名称。

* 包含 <<.place S>> 的名称提供一切直至并包括 <<.place S>>。
* 不包含 <<.place S>> 的名称干脆提供自身到输出。

每个[主导追加](Dominant Append)到输出。

<<.clink "`toc`" "Table-of-Contents Macros">> 宏使用此运算符用 `/` 当作其参数。

<<.operator-examples "splitbefore">>
