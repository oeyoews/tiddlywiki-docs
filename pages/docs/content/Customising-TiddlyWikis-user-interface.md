---
title: '自定义 TiddlyWiki 的用户界面'
---

~TiddlyWiki 的用户界面被设计为高度可扩充。每个元素都可以扩充、删除或重新排列。

有几种不同的机制来实现这一点：

* 特定字段
* 特定条目
* 特定标签

在这里，我们提供这些机制的概述，以及它们如何相互关联。

## 特定字段

特定字段用于为个别条目指定外观或行为。它们可以被视为直接控制其所应用的条目的标志或值。

例如：

* 将 `icon` 字段设置为一个图像条目的名称，用于作为此条目的图标
* 将 `color` 字段设置为一个 CSS 颜色，然后用于与此条目相关的图标和标签丸
* 将 `hide-body` 字段设置为 `yes`，以隐藏此条目的查看模板内容

请参阅[条目字段](TiddlerFields)，以获取所有特殊字段的详细信息。

## 特定条目

某些特定条目标识自定义 ~TiddlyWiki 的外观或行为的配置条目。它们可以被认为是影响整个维基的全域设置。

例如：

* $:/DefaultTiddlers 是一个筛选器，生成应在启动时显示的条目名称
* $:/SiteTitle 指定维基标题的文本
* $:/config/Tags/MinLength 控制触发标签自动完成的最小字符数

~TiddlyWiki 的许多配置条目，在[控制台]($:/ControlPanel)中显示为选项。不太常用的配置条目，没有用户界面，但记录在[隐藏设置](Hidden Settings) 中。

## 特定标签

特定标签为应用它们的所有条目，指定特殊行为或外观。它们可以被视为，创建以特定方式处理、或显示的有序的条目清单。

例如：

* $:/tags/Global 使在条目中的定义，全域可用
* $:/tags/Stylesheet 使条目解译为 CSS 样式表
* $:/tags/SideBar 使条目显示为侧边栏选项卡

所有特定标签的详细信息，请参阅系统标签。

整个 ~TiddlyWiki 用户界面，是由特殊系统标签，形成的清单构成的。

这些清单的顺序，由[标签条目的顺序](Order of Tagged Tiddlers)规则决定。用户可以使用标签下拉清单中的拖放功能，对标签进行重新排序。

## 级联

级联提供了一种根据灵活、可扩充的条件，选择多个值之一的方法。它们可以被视为依次评估的条件清单，直到其中一个匹配为止。

例如，内核使用模板 $:/core/ui/ViewTemplate 在查看模式下显示条目，使用 $:/core/ui/EditTemplate 在编辑模式下显示条目。一个级联用于选择用于特定条目的模板：

1. 如果条目是草稿，则使用 $:/core/ui/EditTemplate
1. 否则，使用 $:/core/ui/ViewTemplate

条件清单是通过一个特殊的标签定义的，可以在清单中的任何位置插入附加条件。

例如，插件可以通过插入其他规则，为具有标签 [$:/tags/map](#%24%3A/tags/map) 的条目，添加一个特殊模板 $:/plugins/example/map-template：

1. 如果条目是草稿，则使用 $:/core/ui/EditTemplate
1. @@background: yellow; 如果条目标签为 $:/tags/Map，则使用 $:/plugins/example/map-template@@
1. 否则，使用 $:/core/ui/ViewTemplate

有关更多详细信息，请参阅 [级联](Cascades)。