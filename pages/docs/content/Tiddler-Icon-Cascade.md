---
title: '条目图标级联'
---

条目图标级联是一个[级联](Cascades)，用于选择是一个特定条目应使用哪种图标。

内核条目图标级联可以在 $:/core/ui/TiddlerIcon 中找到

默认条目图标级联包括：

1. 如果条目有一个 **icon** 字段，请使用该值作为图标
1. 如果条目 $:/config/DefaultTiddlerIcon 存在，请使用该值作为图标

您可以在[控制台]($:/ControlPanel)的''信息''->''高级''->''级联''->''条目图标'' 选项卡，查看条目图标级联的当前设置。

<<list-links "[tag[Tiddler Icon Cascade]]">>