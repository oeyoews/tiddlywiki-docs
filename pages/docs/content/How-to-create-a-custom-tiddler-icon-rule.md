---
title: '如何创建一个自定义条目图标规则'
---

在这里，我们展示了如何添加一个规则至[条目图标级联](Tiddler Icon Cascade)，该规则导致带有标签 <<tag "TableOfContents">> 的条目，被赋予 "globe" 图标 <<.icon $:/core/images/globe>>，以及带有标签 <<tag "Working with TiddlyWiki">> 的条目，被赋予 "说明" 图标 <<.icon $:/core/images/help>>。

<<.tip "[如何创建一个自定义条目颜色规则](How to create a custom tiddler colour rule) 描述了如何为相同的条目提供自定义颜色">>

首先，我们添加一个新步骤至条目图标级联。新的筛选器步骤是：

```
[tag[TableOfContents]then[$:/core/images/globe]]
[tag[Working with TiddlyWiki]then[$:/core/images/help]] 
```

它可以被理解为：

```
如果条目具有标签 "TableOfContents"，则返回 $:/core/images/globe
否则，如果条目具有标签 "Working with TiddlyWiki" ，则返回 $:/core/images/help
```

条目图标级联由标签 <<tag "$:/tags/TiddlerIconFilter">> 定义，因此我们需要创建一个具有该标签的配置条目。

我们还需要确保它插入到级联中的正确位置：

* 新规则必须位于 "icon-field" 规则之后，以确保具有显式 **icon** 字段的条目将尊重该字段的值
* 新规则必须在 "默认" 图标之前，否则如果指定了默认图标，则永远不会看到它

控制台「级联」选项卡显示，通过使用 `list-before` 字段，在默认步骤之前插入新步骤，可以实现这一点。

配置条目中的完整字段清单为：

<<.tiddler-fields "$:/_tw5.com/CustomTiddlerIconCascadeDemo">>
