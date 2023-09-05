---
title: 'regexp'
---

op-input: 一些[甄选的名称](Title Selection)
op-neg-output: 那些其字段 <<.place F>> <<.em 不>> 匹配 <<.place X>> 的输入条目
op-output: 那些其字段 <<.place F>> 匹配 <<.place X>> 的输入条目
op-parameter: 一个正则表达式
op-parameter-name: X
op-purpose: 由版型匹配的字段筛选输入
op-suffix: 一个[字段](TiddlerFields)的名称，默認為 <<.field title>>
op-suffix-name: F
tags: [Filter Operators](#Filter%20Operators) [Field Operators](#Field%20Operators) [Negatable Operators](#Negatable%20Operators)
title: regexp Operator
type: text/vnd.tiddlywiki

<<.def "正则表达式">> 是要搜索的字符的字符串简明的表示方式。~TiddlyWiki 中使用的格式，完全定义于[此 Mozilla 参考文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)。

[筛选器语法](Filter Run)使其无法直接指定包含方括弧的正则表达式。解决办法是将该表达式存放于[变量](Variables)。请参阅 <<.operator-examples "regexp" "示例">>。

该参数 <<.place X>> 可以选择一串旗标开始或结束：

<$railroad text=""" "(?" { ("i"|"m"|:"g") } ")" """/>

通常只用到 `i` 旗标：它强制大写字母和小写字母的区别被忽略。

如果 <<.place X>> 是空的，则 <<.op regexp>> 将匹配所有输入的条目。

<<.operator-examples "regexp">>
