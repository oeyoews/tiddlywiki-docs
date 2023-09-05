---
title: '问：如何使用自订字段来设置条目样式？'
---


**考虑下列用例：** <<.from-version "5.1.16">>

一个名为 `rank` 的字段，可以有不同的值，例如：`species`。

**答：**

现在的想法是：我们动态地创建样式表。该样式表如下：

"""
title: `myStyles`
tags: `$:/tags/Stylesheet`
"""

```
<$list filter="[rank[species]]"> 
[data-tiddler-title^="<$view field=title/>"] .tc-tiddler-body {
    column-count: 2;
}
</$list> 
```

此为每个条目名称创建一个 CSS 规则，其具有一个字段 `rank` 和值 `species`。

[了解有关可能的属性的更多信息！](Attribute Selectors)