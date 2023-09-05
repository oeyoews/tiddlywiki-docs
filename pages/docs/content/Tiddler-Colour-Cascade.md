---
title: '条目颜色级联'
---

条目颜色级联是一个[级联](Cascades)，用于选择是一个特定条目应使用哪种颜色。

内核条目颜色级联可以在 $:/core/macros/tag、$:/core/ui/Components/tag-link、$:/core/ui/EditTemplate/tags、$:/core/ui/TagPickerTagTemplate、$:/core/ui/TagTemplate 和 $:/core/ui/ViewTemplate/title 找到

默认的条目颜色级联包括：

1. 如果条目有一个 **color** 字段，请使用该值作为颜色
1. 如果条目 $:/config/DefaultTiddlerColour 存在，请使用该值作为颜色

您可以在[控制台]($:/ControlPanel)的''信息''->''高级''->''级联''->''条目颜色'' 选项卡，查看条目颜色级联的当前设置。

<<list-links "[tag[Tiddler Colour Cascade]]">>