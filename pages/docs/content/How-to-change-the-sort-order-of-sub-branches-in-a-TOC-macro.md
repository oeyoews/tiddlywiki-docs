---
title: '如何更改 TOC 宏里的子分支的排序'
---

想像一下，您正在使用类似的[目录](Table-of-Contents Macros)宏︰

```
<<toc-selective-expandable  "TableOfContents" "sort[title]">>
```

该排序适合大多数情况，但您想让所有标签为 `Journal` 的项目依 `created` 字段排序。您如何套用一个单独排序到只有那些标签为 `Journal`的子项目？

诀窍就是将字段增加至父标签条目（即 `Journal`）指向一个不同的排序条件。让我们称此字段为 `fuzzy`，并填入 `created` 的值 (`created` 是包含一个条目创建日期的一个字段名称)。

现在，改变您的[目录](Table-of-Contents Macros)，看起来像这样︰

```
<<toc-selective-expandable  "TableOfContents" "sort{!!fuzzy}">>
```

现在您的目录将依条目名称排序，除了 `Journal` 条目的子条目是依 `created` 日期排序。

这个技巧的缺点是，您不能套用基于只有一个特殊字段的反向排序。如果反转排序顺序，它将处处反向排序。
