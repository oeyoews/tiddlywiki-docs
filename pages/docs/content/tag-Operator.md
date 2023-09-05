---
title: 'tag'
---

op-input: 一些[甄选的名称](Title Selection)
op-neg-output: 那些<<.em 不>>具有标签 <<.place T>> 的输入条目
op-output: 那些具有标签 <<.place T>> 的输入条目
op-parameter: 一个[标签](Tagging)的名称
op-parameter-name: T
op-purpose: 依标签筛选输入
op-suffix: <<.from-version "5.1.14">> 可选的 `strict` 旗标
op-suffix-name: S
tags: [Filter Operators](#Filter%20Operators) [Common Operators](#Common%20Operators) [Tag Operators](#Tag%20Operators) [Negatable Operators](#Negatable%20Operators)
title: tag Operator
type: text/vnd.tiddlywiki

输出是使用该标签的 <<.field list>> 字段及该条目的 <<.field list-before>> 和 <<.field list-after>> 字段[排序](Order of Tagged Tiddlers)。

<<.Place T>> 为空时的行为取决于 <<.place S>> 的可选尾码的设置︰

* 若缺少 <<.place T>> 且 <<.place S>> 未设或设置为 "loose"，则该 `tag` 的输出是空的，且。
* <<.from-version "5.1.14">> 若缺少 <<.place T>> 且 <<.place S>> 设置为 "strict"，则 `tag` 和 `!tag` 两者的输出是该输入的一个副本

<<.operator-examples "tag">>
