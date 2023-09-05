---
title: 'pad'
---

op-input: 一些[甄选的名称](Title Selection)
op-output: 填充到指定长度的输入名称
op-parameter: <<.op pad>> 操作符接受 1 个或更多参数，请参阅下文了解详细信息
op-purpose: 返回清单中填充到指定长度的每个项
op-suffix: （可选的）。是否填充，通过添加 "suffix" 或 "prefix"。默认值为 "prefix"。
tags: [Filter Operators](#Filter%20Operators) [String Operators](#String%20Operators)
title: pad Operator
type: text/vnd.tiddlywiki

<<.from-version "5.1.23">>

<<.op pad>> 操作符至少需要一个参数，指定输入名称的所需长度。第二个可选参数，可用于指定要填充的字符串（默认值为 "0"）。

```
[pad[<length>],[<padding-string>]]
```
* **length** : 输入名称所需的最终长度。
* **padding-string**: （可选）。要填充到所需长度的字符串。默认值为 "0"。

<<.operator-examples "pad">>
