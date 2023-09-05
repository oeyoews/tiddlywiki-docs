---
title: 'decodehtml'
---

from-version: 5.1.14
modified: 20161019043812179
op-input: 一些[甄选的名称](Title Selection)
op-output: 已套用解码的带有 HTML 的输入
op-parameter: 
op-parameter-name: 
op-purpose: 套用 HTML 解码为一个字符串
tags: [Filter Operators](#Filter%20Operators) [String Operators](#String%20Operators)
title: decodehtml Operator
type: text/vnd.tiddlywiki

"HTML 解码" 意思是替换 HTML 实体呈现特殊字符为该字符︰

* `&amp;` 替换为 `&`
* `&nbsp;` 替换为 ` ` (不分行空格)
* `&lt;`替换为 `<`
* `&gt;` 替换为 `>`
* `&quot;` 替换为 `"`

<<.operator-examples "decodehtml">>
