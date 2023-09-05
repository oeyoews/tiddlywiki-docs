---
title: '依自订类别的自订样式'
---

**条目字段：<<.field class>>** <<.from-version "5.1.16">>

[标签管理器]($:/TagManager)允许我们设置一个条目 <<.field color>> 字段，用于定义 "标签丸" 的颜色。自 <<.from-version "5.1.16">> 起，我们可以定义一个 <<.field class>> 字段，直接插入于 [ViewTemplate]($:/core/ui/ViewTemplate)，且可以用于样式：

"""
title: `anyName`
tags: `$:/tags/Stylesheet`
class: `myClass`
"""

每个具有 <<.field class>> 字段的条目，可以这样的订制样式!

```
.myClass {
  border: 2px solid blue;
}

```

了解更多信息：[如何套用自订样式](How to apply custom styles)