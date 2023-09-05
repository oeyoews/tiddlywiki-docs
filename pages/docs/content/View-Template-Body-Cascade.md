---
title: '查看模板主体级联'
---

查看模板主体级联是一个[级联](Cascades)，由默认查看模板用于选择用于显示条目主体的模板。

默认查看模板主体级联包括：

1. 如果条目名称以已知系统条目前缀清单中的任何一个开头，则使用模板 $:/core/ui/ViewTemplate/body/code，将正文显示为预先格式化的代码
1. 如果条目具有字段 **plugin-type** 设置为 **import**，则使用模板 $:/core/ui/ViewTemplate/body/import， 显示自定义导入用户界面
1. 如果条目具有字段 **plugin-type**，则使用模板 $:/core/ui/ViewTemplate/body/plugin，显示插件信息徽章
1. 如果条目具有字段 **hide-body** 设置为 **yes**，则使用模板 $:/core/ui/ViewTemplate/body/blank，隐藏正文

1. 否则，请使用默认模板 $:/core/ui/ViewTemplate/body/default

您可以在[控制台]($:/ControlPanel)的''信息''->''高级''->''级联''->''查看模板主体'' 选项卡下，查看查看模板主体级联的当前设置。

<<list-links "[tag[View Template Body Cascade]]">>