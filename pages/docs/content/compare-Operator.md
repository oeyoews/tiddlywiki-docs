---
title: 'compare'
---

op-input: 一些[甄选的名称](Title Selection)
op-neg-output: 与指定比较<<.em 不>>符合的输入名称
op-output: 与指定比较符合的输入名称
op-parameter: 要比较的值
op-purpose: 通过将每个项目与操作数进行比较来筛选输入
op-suffix: <<.op compare>> 运算符使用丰富的后缀，详细信息请参阅下文
tags: [Filter Operators](#Filter%20Operators) [Mathematics Operators](#Mathematics%20Operators) [String Operators](#String%20Operators) [Negatable Operators](#Negatable%20Operators)
title: compare Operator
type: text/vnd.tiddlywiki

<<.from-version "5.1.22">> <<.op compare>> 筛选器允许运行数字、字符串和日期比较。

<<.op compare>> 运算符使用延伸语法指定所有选项：

```
[compare:<type>:<mode>[<operand>]]
```

**type** 可以是：

* "number" - 无效的数字被解译为零
* "integer" - 无效的整数被解译为零
* "string"
* "date" - 无效的日期被解译为 1st January 1970
* "version" - 无效的版本被解译为 "v0.0.0"

**mode** 可以是：

* "eq" - 等于
* "ne" - 不等于
* "gteq" - 大于或等于
* "gt" - 大于
* "lteq" - 小于或等于
* "lt" - 小于

运算符将选定的每个项与参数的值进行比较，仅保留通过指定条件的项目。

例如：

```
[[2]compare:number:eq[3]] returns nothing
[[2]compare:number:lt[3]] returns "2"
[[2]compare:number:eq[2]] returns "2"
```

请注意，<<.op compare>> 运算符的多个变体与一些现有运算符的同义，其提供是为了一致性。例如， `compare:string:eq[x]` 与 `match[x]` 同义。

<<.operator-examples "compare">>
