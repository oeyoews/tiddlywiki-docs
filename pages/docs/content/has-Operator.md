---
title: 'has'
---

op-input: 一些[甄选的名称](Title Selection)
op-neg-output: **无尾码**<br>&raquo; 那些输入条目的字段 <<.place F>> <<.em 不>>存在，或具有空的值<br>''尾码 `field`''<br>&raquo; 那些输入条目的字段 <<.place F>> <<.em 不>>存在<br>''尾码 `index`''<br>&raquo; 那些输入数据条目的索引 <<.place F>> <<.em 不>>存在
op-output: **无尾码**<br>&raquo; 那些输入条目的字段 <<.place F>> 具有非空的值<br>''尾码 `field`''<br>&raquo; 那些输入条目的字段 <<.place F>> 存在<br>''尾码 `index`''<br>&raquo; 那些输入数据条目的索引 <<.place F>> 存在
op-parameter: 一个[字段](TiddlerFields)名称，或一个可选的[索引](TextReference)
op-parameter-name: F
op-purpose: 依字段存在与否筛选输入
op-suffix: <<.from-version "5.1.14">> 可选的，关键字 `field` 或 <<.from-version "5.1.22">> 可选的，关键字 `index`
op-suffix-name: S
tags: [Filter Operators](#Filter%20Operators) [Common Operators](#Common%20Operators) [Field Operators](#Field%20Operators) [Negatable Operators](#Negatable%20Operators)
title: has Operator
type: text/vnd.tiddlywiki

<<.operator-examples "has">>
