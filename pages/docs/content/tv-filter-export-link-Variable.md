---
title: 'tv-filter-export-link'
---

<<.from-version "5.1.15">> <<.def tv-filter-export-link>> [变量](Variables)控制由 <<.wlink LinkWidget>> 小工具生成的 HTML `a` 元素的 `href` 属性值。若定义，则其将优先于 <<.vlink tv-wikilink-template>> 变量。

<<.this-is-static-link-variable>>

该变量被视为一个筛选器，给定目标条目名称为输入。计算该筛选器时，第一个结果用作 `href` 属性。

例如：

```
\define tv-filter-export-link() [encodeuricomponent[]encodeuricomponent[]addsuffix[.html]]
```

另请参阅 <<.vlink tv-get-export-link>> 变量，其主导地位超过此变量。