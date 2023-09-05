---
title: 'indexes'
---

op-input: 一些[甄选的名称](Title Selection)
op-output: 输入的数据条目包含的所有属性名称或索引
op-parameter: 无
op-purpose: 选择输入名称的所有数据属性
tags: [Filter Operators](#Filter%20Operators)
title: indexes Operator
type: text/vnd.tiddlywiki

依次处理每个输入名称，若非[数据条目](DataTiddlers)则忽略之。从数据条目检索属性名称的排序清单，然后[主导追加](Dominant Append)到操作符的输出。

请注意，在幕后，字典条目中成对的名称/值表示为一个 [JSON 对象](JSONTiddlers)。JSON 对象不维护有保证的排序，因此我们无法可靠地保留文件中数据的顺序。

其中，条目的内容是以数组为根的 JSON 格式，<<.op indexes>> 操作符会改为检索一待选的整数索引。

<<.operator-examples "indexes">>
