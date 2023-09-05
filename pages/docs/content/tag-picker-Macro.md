---
title: 'tag-picker'
---

<<.def tag-picker>> [宏](Macros)生成一个文本方块和一个按钮的组合，允许选定和添加的标签。

## 参数

**actions**
: 点击标签丸时，被触发的动作小工具。在本文中，变量 **tag** 包含选定的标签名称
**tagField**
: <<.from-version 5.1.23>> 使用所选标签更新的''字段'' 。默认值为 **tags**。

<<.macro-examples "tag-picker">>
