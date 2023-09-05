---
title: 'reduce'
---

op-input: 一些[甄选的名称](Title Selection)当作输入，传递给筛选器
op-output: 运行子筛选器 <<.place S>> 的最终结果
op-parameter: 一个[筛选器表达式](Filter Expression)。累加器初始值的可选第二个参数
op-parameter-name: S
op-purpose: 依次对每个输入标题套用子筛选器，以累积单个值
tags: [Filter Operators](#Filter%20Operators)
title: reduce Operator
type: text/vnd.tiddlywiki

<<.from-version "5.1.23">> <<.op reduce>> 操作符对每个输入名称，运行子筛选器，将上一个子筛选器运行的结果作为变量传递。可选择指定累加器的初始值。它返回最终的子筛选器运行的结果。

<<.op reduce>> 操作符用于通过重复应用公式，将项目清单平展到单个项目。典型的用途，是将一个条目清单的给定字段值相加。

子筛选器中提供以下变量:

* **accumulator** - 上一个子筛选器运行的结果
* **currentTiddler** - 输入名称
* **..currentTiddler** - 子筛选器外部的 <<.var currentTiddler>> 的值<<.from-version "5.2.0">>
* **index** - 当前列表项的数字索引 (零是列表中的第一项)
* **revIndex** - 当前列表项的反向数字索引 (零是列表中的最后一项)
* **length** - 输入列表的总长度

如果 <<.op reduce>> 操作符没接收任何输入，则其输出将为空。在这种情况下，[else 操作符](else Operator) 非常有用。

<<.tip "文本筛选器操作数不能包含方括弧，但您可以使用变量解决此问题：">>

```
<$set name="sum-input" value="[add<accumulator>]">
{{{ =1 =2 =3 +[reduce<sum-input>] }}}
</$set>
```

<<.tip "与类似的命名[筛选器 run 首码](Filter Expression) `:reduce` 进行比较">>

```
\define num-items() [get[quantity]add<accumulator>]

[tag[shopping]reduce<num-items>]
```

等同于：

```
[tag[shopping]] :reduce[get[quantity]add<accumulator>]
```

<$macrocall $name=".tip" _="""如果未指定可选的第二个参数，则累加器初始值将为空。数字操作符将空输入视为数字 0。请参阅 multiply-input 示例，了解这如何影响 <<.op reduce>> 的结果。"""/>

<<.operator-examples "reduce">>
