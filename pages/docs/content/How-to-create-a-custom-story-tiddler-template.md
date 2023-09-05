---
title: '如何创建一个自定义故事条目模板'
---

在这里，我们展示了如何添加一个规则至[故事条目模板级联](Story Tiddler Template Cascade)，该规则导致带有标签 <<tag "$:/tags/TiddlerList">> 的条目，以自定义外观显示，其中包含 <<.field list>> 字段中命名的条目的缩略图。

打开 [使用自定义故事条目模板的演示条目清单](Demo Tiddler List with Custom Story Tiddler Template) 查看演示。

首先，我们添加一个新步骤至故事条目模板级联。新的筛选器步骤是：

```
[tag[$:/tags/TiddlerList]then[$:/_tw5.com/CustomStoryTiddlerTemplateDemo/Template]]
```

它可以被理解为：

```
如果条目具有标签 $:/tags/TiddlerList，则返回 $:/_tw5.com/CustomStoryTiddlerTemplateDemo/Template
```

> The template $:/_tw5.com/CustomStoryTiddlerTemplateDemo/Template also depends on styles defined in [$:/_tw5.com/CustomStoryTiddlerTemplateDemo/Styles](#%24%3A/_tw5.com/CustomStoryTiddlerTemplateDemo/Styles).

故事条目模板级联由标签 <<tag "$:/tags/StoryTiddlerTemplateFilter">> 定义，因此我们需要创建一个具有该标签的配置条目。

我们还需要确保它插入到级联中的正确位置：

 新规则必须位于 "draft" 规则之后，以确保可以编辑具有标签 $:/tags/TiddlerList 的草稿条目
* 新规则必须在 "default" 规则之前，否则它永远不会被运行

控制台「级联」选项卡显示，通过使用 `list-before` 字段，在默认步骤之前插入新步骤，可以实现这一点。

配置条目中的完整字段清单为：

<<.tiddler-fields "$:/_tw5.com/CustomStoryTiddlerTemplateDemo/Filter">>

最后，我们需要创建示范条目本身：

<<.tiddler-fields "Demo Tiddler List with Custom Story Tiddler Template">>
