---
title: '问：如果有 "this" 或 "that" 标签，该如何设置一个条目样式？'
---

**答：** <<.from-version "5.1.16">>

标签 `this` 或标签 `that` 创建一个红色边框。

```
[data-tags~="this"],
[data-tags~="that"] {
  border: 2px solid red;
}
```

[了解有关可能的属性的更多信息!](Attribute Selectors)