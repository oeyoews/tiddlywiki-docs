---
title: '问：如果有 "this" 与 "that" 标签，该如何设置一个条目样式？'
---

**答：** <<.from-version "5.1.16">>

如果条目有两个标签：`this` 和 `that`，创建一个橙色边框。

```
[data-tags*="bar"][data-tags*="froz"] {
  border: 2px solid orange;
}
```

**如果您的 CSS 看起来像这样：**

```
[data-tags~="this"] {
  border: 2px solid blue;
}

[data-tags~="that"] {
  border: 2px solid red;
}
```

"""
`this` 创建蓝色边框
`that` 创建红色边框
如果互换位置，您可以用另一种方式。
"""

[了解有关可能的属性的更多信息！](Attribute Selectors)