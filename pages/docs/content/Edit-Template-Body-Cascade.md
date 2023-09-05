---
title: '编辑模板主体级联'
---

编辑模板主体级联是一个[级联](Cascades)，由默认编辑模板用于选择用于编辑条目主体的模板。

内核编辑模板主体级联可以在 $:/core/ui/EditTemplate/body 中找到

默认编辑模板主体级联包括：

1. 如果条目具有字段 **_canonical_uri**，则使用模板 $:/core/ui/EditTemplate/body/canonical-uri 显示远程网址
1. 否则，请使用模板 $:/core/ui/EditTemplate/body/default，它提供了默认的编辑界面

您可以在[控制台]($:/ControlPanel)的''信息''->''高级''->''级联''->''编辑模板主体'' 选项卡下，查看编辑模板主体级联的当前设置。

<<list-links "[tag[Edit Template Body Cascade]]">>