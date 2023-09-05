---
title: 'image-picker'
---

<<.def image-picker>> [宏](Macros)显示一个交互式图像选取器，在内核文本编辑器中可以看到。

## 参数

**actions**
: 当用户选取一个图像时，应运行的动作小工具的 Wikitext。在本文中，变量 `imageTitle` 包含所选的图像的条目名称。
**subfilter**
: 一个可选的额外的[过滤步骤](Filter Step)，例如 `tag[MyTag]`

图像用[筛选器表达式](Filter Expression)被选取至 <<.param subfilter>> 参数拼接如下︰

> `[all[shadows+tiddlers]is[image]$subfilter$!has[draft.of]] -[type[application/pdf]] +[sort[title]]`

<<.macro-examples "image-picker">>
