---
title: 'insertbefore'
---

op-input: 一些[甄选的名称](Title Selection)
op-output: 输入的条目清单加上新插入的项目
op-parameter: <<.from-version "5.2.2">> <<.op insertbefore>> 操作符接受 1 个或 2 个参数，详细信息请见下文
op-purpose: 加入一个项目 <<.place T>> 至一个列表的项目 <<.place B>> 之前
op-suffix: <<.from-version "5.2.3">>（可选的）一个变量的名称，其包含在此尾码之前的插入条目名称
tags: [Filter Operators](#Filter%20Operators) [Order Operators](#Order%20Operators) [Listops Operators](#Listops%20Operators)
title: insertbefore Operator
type: text/vnd.tiddlywiki

<<.from-version "5.2.2">>

<<.op insertbefore>> 操作符需要至少一个参数，该参数指定要插入到输入清单中的标题。第二个参数可用于指定应在其前插入新标题的标题。

<<.from-version "5.2.3">>

使用尾码指定 <<.place B>>，则应在其前插入新标题的标题已弃用。取而代之，建议使用双参数形式。如果使用双参数形式，则尾码 **start** 和 **end** 如果未找到 <<.place B>>，可用于指定项目应插入的位置。

```
insertbefore:<before-title-variable>[<title>]
insertbefore:<missing-location>[<title>],[<before-title>]
```

* **title** : 一个要插入到输入清单中的标题 <<.place T>> 。
* **before-title** :（可选的）。在输入清单中的此标题 <<.place B>> 之前插入 <<.place T>> 
* **before-title-variable** :（可选的）。指定变量的名称 <<.place B>>，而不是 `before-title` 参数。
* **missing-location** :（可选的）。`start` 或 `end`：如果在清单中找不到 <<.place B>>，则其为插入 <<.place T>> 的位置。

若项目 <<.place B>> 不存在于输入清单中，则新项目将被插入到清单的末尾。<<.from-version "5.2.3">>尾码 **start** 和 **end** 可以加速以控制在找不到 <<.place B>> 时，插入新项目的位置。尾码 **end** 是默认值，在清单末尾插入新项目。如果未找到 <<.place B>>，尾码 **start** 将导致在清单的开头插入新项目。

<<.tip "[参数](Filter Parameter) 可以是字符串、文本引用或变量">>

<<.tip "若 <<.place B>> 被同时指定为一个尾码和一个参数，则参数优先">>

<<.operator-examples "insertbefore">>