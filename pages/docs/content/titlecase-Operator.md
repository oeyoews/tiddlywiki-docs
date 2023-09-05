---
title: 'titlecase'
---

op-input: 一些[甄选的名称](Title Selection)
op-output: 输入名称的每个单字的第一个字母大写
op-purpose: 返回列表中的每个项目单字的第一个字母大写
tags: [Filter Operators](#Filter%20Operators)
title: titlecase Operator
type: text/vnd.tiddlywiki

<<.from-version "5.1.20">>

另请参阅 [lowercase Operator](#lowercase%20Operator)、[uppercase Operator](#uppercase%20Operator)、[sentencecase Operator](#sentencecase%20Operator)。

<<.tip "除了每个单字的第一个字母之外，此运算符不会改变任何东西，所以 `[aBcD eFgH](#aBcD%20eFgH)` 会变成 `[ABcD EFgH](#ABcD%20EFgH)`。如果你想要 `[Abcd Efgh](#Abcd%20Efgh)`，那么请使用像 `[lowercase[]titlecase[]]` 这样的筛选器。">>

<<.operator-examples "titlecase">>
