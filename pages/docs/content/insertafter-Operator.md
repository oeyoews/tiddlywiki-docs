---
title: 'insertafter'
---

op-input: 一些[甄选的名称](Title Selection)
op-output: 输入的条目清单加上新插入的项目
op-parameter: <<.op insertafter>> 操作符接受 1 个或 2 个参数，详细信息请见下文
op-purpose: 加入一个项目 <<.place T>> 至一个列表的项目 <<.place A>> 之后
op-suffix: <<.from-version "5.2.3">> (可选的) 一个变量的名称，其包含在此尾码之后的插入条目名称
tags: [Filter Operators](#Filter%20Operators) [Order Operators](#Order%20Operators) [Listops Operators](#Listops%20Operators)
title: insertafter Operator
type: text/vnd.tiddlywiki

<<.from-version "5.2.3">>

<<.op insertafter>> 操作符需要至少一个参数，该参数指定要插入到输入清单中的标题。第二个参数可用于指定应在其后插入新标题的标题。

尾码还可用于指定 <<.place A>>，即应在其后插入新标题的标题，但此形式已弃用。取而代之，建议使用双参数形式。如果使用双参数形式，则尾码 **start** 和 **end** 在找不到 <<.place A>> 时，可用于指定项目应插入的位置。

```
insertafter:<after-title-variable>[<title>]
insertafter:<missing-location>[<title>],[<after-title>]
```

* **title** :  一个要插入到输入清单中的标题 <<.place T>>。
* **after-title** : (可选的)。在输入清单中的此标题 <<.place A>> 之后插入 <<.place T>> 
* **after-title-variable** : (可选的)。指定变量的名称  <<.place A>>，而不是 `after-title` 参数。
* **missing-location** :（可选的）。`start` 或 `end`：如果在清单中找不到 <<.place A>>，则其为插入 <<.place T>> 的位置。

若项目 <<.place A>> 不存在于输入清单中，则新项目将被插入到清单的末尾。<<.from-version "5.2.3">> 尾码 **start** 和 **end** 可以加速以控制在找不到 <<.place A>> 时，插入新项目的位置。尾码  **end** 是默认值，在清单末尾插入新项目。如果未找到 <<.place A>>，尾码  **start** 将导致在清单的开头插入新项目。

<<.tip "[参数](Filter Parameter) 可以是字符串、文本引用或变量">>

<<.tip "若 <<.place A>> 被同时指定为一个尾码和一个参数，则参数优先">>

<<.operator-examples "insertafter">>
