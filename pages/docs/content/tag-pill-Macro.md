---
title: 'tag-pill'
---

<<.def tag-pill>> [宏](Macros)生成一个显示指定标签的静态标签丸，但没有 [tag 宏](tag Macro)提供的下拉操作。

## 参数

**tag**
: 标签的名称
**element-tag**
: 用于标签丸的元素名称（默认值为 "span"）
**element-attributes**
: 标签丸元素的附加属性
**actions**
: 点击标签丸时，被触发的动作小工具。在本文中，宏参数 **tag** 包含选定的标签名称。
<<.macro-examples "tag-pill">>
