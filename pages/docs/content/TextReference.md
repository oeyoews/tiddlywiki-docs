---
title: '文本引用'
---

TextReference 是一个通用的方法，描述一个文本片段为一个条目的字段，或一个[数据条目](DataTiddlers)内的一个索引。

在不同的情况下，文本引用可用于检索值，或指定一个应被更改的值。

文本引用组成的几个部分，其中大部分可以是可选的：

* `tiddlerTitle` - 指定条目的名称[字段](TiddlerFields)
* `tiddlerTitle!!field` - 一个[条目的字段](TiddlerFields) (例如，`modified`、`modifier`、`type` 等)
* `!!field` - 当前条目的[字段](TiddlerFields)
* `tiddlerTitle##propertyIndex` - 从[数据条目](DataTiddlers)中提取的记名属性

文本引用可以用在几个地方：

* 当作[筛选器](Filters)里的[间接参数](Filter Parameter) (例如，`<$list filter="[tag{MyTag!!name}]"/>`)
* 当作元素或小工具的[间接属性](HTML in WikiText) (例如，`<$widget attrib={{Title!!description}}/>`)
* 当作快捷嵌入的操作数 (例如，`{{MyTiddler!!title}}`)
* 当作 RevealWidget 与 LinkCatcherWidget 的 `state` 属性

<$macrocall $name=".tip" _="""请注意文本引用如 `foo!!bar` 和文本引用的嵌入如  `{{foo!!bar}}` 之间的区别"""/>
