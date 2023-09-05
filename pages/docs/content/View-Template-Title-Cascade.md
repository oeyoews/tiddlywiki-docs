---
title: '查看模板标题级联'
---

查看模板标题级联是一个[级联](Cascades)，由默认查看模板用于选择用于显示条目名称的模板。

内核查看模板标题级联可以在 $:/core/ui/ViewTemplate/title 中找到

默认查看模板标题级联包括：

1. 如果条目标题以 `$:/` 开头，则使用模板 $:/core/ui/ViewTemplate/title/system，这会导致 `$:/` 前缀以浅色文本显示
1. 否则，请使用模板 $:/core/ui/ViewTemplate/title/default，该模板以纯文本形式显示标题

您可以在[控制台]($:/ControlPanel)的''信息''->''高级''->''级联''->''查看模板标题'' 选项卡下，查看查看模板标题级联的当前设置。

<<list-links "[tag[View Template Title Cascade]]">>