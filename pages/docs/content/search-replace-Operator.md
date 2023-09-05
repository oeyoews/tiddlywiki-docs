---
title: 'search-replace'
---

op-input: 一些[甄选的标题](Title Selection)
op-output: 输入标题，其中将搜索字符串取代为替换字符串的
op-parameter: <<.op search-replace>> 操作符需要 2 个参数，详见下文
op-purpose: 返回清单中的每个项目，其中每个标题，将第一个参数指定的字符串替换为第二个参数
op-suffix: <<.op search-replace>> 操作符使用丰富的尾码，详见下文
tags: [Filter Operators](#Filter%20Operators) [String Operators](#String%20Operators)
title: search-replace Operator
type: text/vnd.tiddlywiki

<<.from-version "5.1.23">>

<<.op search-replace>> 操作符使用允许传递多个尾码和参数的延伸语法：

```
[search-replace:<flag list>:<regexp-mode>[<search-term>],[<replacement>]]
```

* **flag-list**: **g** 用于全域模式以替换所有匹配项，''i'' 用于不区分大小写模式，<<.from-version "5.2.0">> **m** 用于多行模式, "gim" 用于全部。(选择性的)
* **regexp-mode**: **regexp** 将第一个参数视为正则表达式 (可选)。
* **search-term**: 应被替换的字符串或正则表达式
* **replacement**: 应替换搜索词的字符串

<<.tip "[参数](Filter Parameter) 可以是字符串、文本引用或变量">>

<<.operator-examples "search-replace">>