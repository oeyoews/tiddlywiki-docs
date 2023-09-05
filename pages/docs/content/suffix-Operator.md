---
title: 'suffix'
---

op-input: 一些[甄选的名称](Title Selection)
op-neg-output: 那些尾码<<.em 不是>> <<.place S>> 的输入名称
op-output: 那些尾码为 <<.place S>> 的输入名称
op-parameter: 一个字符串
op-parameter-name: S
op-purpose: 以其尾码筛选输入名称
op-suffix: <<.op suffix>> 操作符使用丰富的后缀，详细信息请见下文
tags: [Filter Operators](#Filter%20Operators) [String Operators](#String%20Operators) [Negatable Operators](#Negatable%20Operators)
title: suffix Operator
type: text/vnd.tiddlywiki

<<.from-version "5.2.2">>

<<.op suffix>> 操作符使用一个允许传递多个标志的扩充语法：

```
[suffix:<flag list>[<operand>]]
```

* **flag list**: 以逗号分隔的标志清单
* **operand**: 筛选器操作数

可用标志包括：

* **casesensitive**: （默认值），此标志强制区分大小写的匹配，其中大写和小写字母被视为不同
* **caseinsensitive**: 覆盖默认值，出于匹配目的，将大写和小写字母视为相同

<<.operator-examples "suffix">>
