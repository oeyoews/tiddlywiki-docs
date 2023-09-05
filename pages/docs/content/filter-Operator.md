---
title: 'filter'
---

op-input: 一些[甄选的名称](Title Selection)当作输入，传递给筛选器
op-neg-input: 一些[甄选的名称](Title Selection)当作输入，传递给筛选器
op-neg-output: 那些<<.em "不">>通过筛选器 <<.place S>> 的输入名称
op-output: 通过筛选器 <<.place S>> 的[甄选的名称](Title Selection)
op-parameter: 一个[筛选器表达式](Filter Expression)
op-parameter-name: S
op-purpose: 将子筛选器套用于每个输入名称，并返回从子筛选器返回非空结果的名称。
tags: [Filter Operators](#Filter%20Operators) [Negatable Operators](#Negatable%20Operators)
title: filter Operator
type: text/vnd.tiddlywiki

<<.from-version "5.1.23">> <<.op filter>> 操作符为每个输入名称运行一个子筛选器，并返回子筛选器返回非空结果的那些输入名称 (换句话说，结果不是空清单)。子筛选器的结果将被扔掉。

简单的筛选操作可以直接连接在一起 (例如 `[tag[HelloThere]search[po]]`)，但是当筛选操作需要计算中间结果时，这不起作用。<<.op filter>> 操作符可用于筛选被丢弃的中间结果。举同一个示例，并由 <<.field text>> 字段超过 1000 个字符的条目进行筛选:

```
<$vars myfilter="[get[text]length[]compare:integer:gteq[1000]]">
<$list filter="[tag[HelloThere]search[po]filter<myfilter>]">
<div>
<$link>
<$text text=<<currentTiddler>>/>
</$link>
</div>
</$list>
</$vars>
```

请注意，在子筛选器中，"<<.var currentTiddler>>" 变量设置为正在处理的条目名称。子筛选器外部的 <<.var currentTiddler>> 的值可用于 "<<.var ..currentTiddler>>" 变量中。<<.from-version "5.2.0">>

<<.tip "与运行一个子筛选器，并直接返回结果的类似[子筛选器](subfilter Operator)进行比较。">>

<<.tip "与类似的命名筛选器 run 前置码 `:filter` 进行比较">>

```
\define larger-than-1k() [get[text]length[]compare:integer:gteq[1000]]

{{{ [tag[HelloThere]filter<larger-than-1k>] }}}
```

等效于：

```
{{{ [tag[HelloThere]] :filter[get[text]length[]compare:integer:gteq[1000]] }}}
```

<<.operator-examples "filter">>
