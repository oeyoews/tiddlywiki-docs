---
title: 'match'
---

op-input: 一些[甄选的名称](Title Selection)
op-neg-output: 输入清单中与操作数字符串不匹配的每个项目
op-output: 输入清单中与操作数字符串匹配的每个项目 (可能包括重复项)
op-parameter: 要匹配的字符串
op-purpose: 返回清单中与操作数字符串匹配的每个项目
op-suffix: <<.op match>>运算符使用丰富的尾码，请参阅底下的详细信息
tags: [Filter Operators](#Filter%20Operators)
title: match Operator
type: text/vnd.tiddlywiki

<<.from-version "5.1.20">>

<<.op match>> 运算符使用允许传递多个标志的扩充语法:

```
[match:<flag list>[<operand>]]
```

* **flag list**: 一个以逗号分隔的标志清单
* **operand**: 筛检器操作数

可用的标志包括:

* **casesensitive**: (默认)，此标志强制区分大小写匹配，其中大写字母和小写字母被视为不同
* **caseinsensitive**: 覆盖默认值，以使大写和小写字母，在匹配时被视为相同

<<.operator-examples "match">>
