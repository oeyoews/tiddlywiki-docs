---
title: 'translink'
---

<<.def translink>> [宏](Macros)返回一个框架，其中包含所选的条目名称和[嵌入](Transclusion)的文本。标题链接到嵌入的条目。

如果所选的条目丢失，将显示适当的消息而不是嵌入的文本。

这是[剪切](Using Excise)文本并用宏替换它时，使用的默认宏。

## 参数

**title**
: 要嵌入的条目名称
**mode**
: 宏内部使用的 [transclude 小工具](TranscludeWidget)的模式，默认为 `block`

<<.macro-examples "translink">>
