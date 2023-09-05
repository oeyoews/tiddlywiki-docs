---
title: '如何创建一个自定义条目颜色规则'
---

在这里，我们展示了如何添加一个规则至[条目颜色级联](Tiddler Colour Cascade)，该规则导致带有标签 <<tag "TableOfContents">> 的条目，被赋予明亮的蓝色，以及带有标签 <<tag "Working with TiddlyWiki">> 的条目，被赋予深紫色。

<<.tip "[如何创建一个自定义条目图标规则](How to create a custom tiddler icon rule) 描述了如何为相同的条目提供自定义图标">>

首先，我们添加一个新步骤至条目颜色级联。新的筛选器步骤是：

```
[tag[TableOfContents]then[#1e90ff]]
[tag[Working with TiddlyWiki]then[darkorchid]]
```

它可以被理解为：

```
如果条目具有标签 "TableOfContents"，则返回颜色 #1e90ff
否则，如果条目具有标签 "Working with TiddlyWiki" ，则返回颜色 darkorchid
```

条目颜色级联由标签 <<tag "$:/tags/TiddlerColourFilter">> 定义，因此我们需要创建一个具有该标签的配置条目。

我们还需要确保它插入到级联中的正确位置：

* 新规则必须位于 "colour-field" 规则之后，以确保具有显式 **color** 字段的条目将尊重该字段的值
* 新规则必须在 "默认" 颜色之前，否则如果指定了默认颜色，则永远不会看到它

控制台「级联」选项卡显示，通过使用 `list-before` 字段，在默认步骤之前插入新步骤，可以实现这一点。

配置条目中的完整字段清单为：

<<.tiddler-fields "$:/_tw5.com/CustomTiddlerColourCascadeDemo">>
