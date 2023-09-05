---
title: 'makedatauri'
---

<<.def makedatauri>> [宏](Macros)取一段文本和相关的[内容类型](ContentType)，并返回对应的 [data URI](Data URI)。

<<.var makedatauri>> 用来实现 <<.mlink datauri >> 宏。

## 参数

**text**
: 欲转换成 data URI 的内容
**type**
: [内容类型](ContentType)
**_canonical_uri**
: 可选的 **_canonical_uri** 内容地址

<<.macro-examples "makedatauri">>
