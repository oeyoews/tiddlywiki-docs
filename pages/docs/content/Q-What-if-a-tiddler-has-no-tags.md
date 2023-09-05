---
title: '问：如果条目没有标签怎么办？'
---

**答：** <<.from-version "5.1.16">>

* 如果条目没有标签，但需要设置样式，请使用：`data-tiddler-title` 作为 CSS 选取器
    * 只有一个条目
* 如果用户希望以自订方式设置系统条目的样式，请使用：`[data-tiddler-title^="$:"/]` 作为 CSS 选取器
    * 使用 TW 命名空间功能

* 如果用户想要具标签的条目的特殊行为。例如：Learning
    * 请使用：`[data-tags*="Learning"]` 作为 CSS 选取器

使用的名称仅用于文档目的，而不更改现有的维基。不希望文档有副作用。

[了解有关可能的属性的更多信息！](Attribute Selectors)