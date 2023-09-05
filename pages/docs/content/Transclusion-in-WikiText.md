---
title: '维基文本中的嵌入'
---

# 简介

您可以使用[嵌入](Transclusion)方式，将一个条目的内容合并显示在另一个条目：

* `{{MyTiddler}}` 嵌入单一个条目
* `{{MyTiddler||TemplateTitle}}` 显示条目且指定 [模板条目](TemplateTiddlers)
* `{{||TemplateTitle}}` 显示指定样板条目而不改变[当前条目](Current Tiddler)
* `{{MyTiddler|Parameter}}` 使用单个参数嵌入单个模板条目
* `{{MyTiddler||TemplateTitle|Parameter|SecondParameter}}` 通过具有两个参数的指定[模板条目](TemplateTiddlers)嵌入单个条目

## 嵌入文本引用

您还可以使用 TextReference 而不是条目的名称：

* `{{MyTiddler!!field}}` 嵌入一个指定的条目字段
* `{{!!field}}` 嵌入一个现行条目的字段
* `{{MyTiddler##index}}` 嵌入一个指定的[数据条目](DataTiddlers)的索引属性
* `{{##index}}` 嵌入一个指定的现行[数据条目](DataTiddlers)的索引属性

## 筛选器嵌入

相同的语法可用于嵌入一组符合指定[筛选器](Filters)的条目清单。

```
{{{ [tag[WikiText]] }}}
{{{ [tag[WikiText]] ||TemplateTitle}}}
```

# 生成小工具

该 WikiText 的嵌入语法生成一个 TiddlerWidget 包裹着一个 TiddlerWidget。例如， `{{MyTiddler||MyTemplate!!myField}}` 生成下列成对的小工具：

```
<$tiddler tiddler="MyTiddler">
<$transclude $tiddler="MyTemplate" $field="myField"/>
</$tiddler>
```

另请参阅：

* [嵌入基本用法](Transclusion Basic Usage)
* [使用模板嵌入](Transclusion with Templates)
* [模板条目](TemplateTiddlers)
* [嵌入小工具](TranscludeWidget)
* [嵌入与替换](Transclusion and Substitution)
* [维基文本解析器模式：嵌入示例](WikiText parser mode: transclusion examples)