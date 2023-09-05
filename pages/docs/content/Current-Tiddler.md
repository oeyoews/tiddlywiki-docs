---
title: '当前条目'
---

<<.def "当前条目">>提供了于 WikiText 的几个方面的上下文解释。

例如，无论当前条目为何，`{{!!title}}` 皆表示其 <<.field title>> 字段的值。这种技术可以用于创建通用的[范本条目](TemplateTiddlers).

当前条目的名称总是可以在 <<.vlink currentTiddler>> 变量找到。

更改当前条目的两个最常见的方式是：

* <<.wlink TiddlerWidget>> 小工具
* <<.wlink ListWidget>> 小工具 (当其 <<.attr variable>> 属性未被覆写时)

当前条目因此往往<<.em 不>>同于 [条目正被查看或编辑](storyTiddler Variable)。
