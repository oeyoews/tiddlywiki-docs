---
title: '快捷键条目'
---

一个''快捷键条目''是由三个部分组成：

* **标签** <<tag-pill $:/tags/KeyboardShortcut>>
* **字段** `key` 以一个[快捷键描述](Keyboard Shortcut Descriptor)为其''值''
* **text** 字段中的动作

<<.tip """<<.from-version "5.2.4">> 默认情况下，<<.wlink KeyboardWidget>> 和文本编辑器快捷键优先，可以通过将''字段'' `priority` 设置为 `yes` 规避之。""">>

若该[快捷键描述](Keyboard Shortcut Descriptor) 格式为 `((my-shortcut))`， 则是''参考''到存放相应的[快捷键](KeyboardShortcuts)的''配置条目''

为了使''快捷键''可编辑，通过在[控制台]($:/ControlPanel)中的 <<.controlpanel-tab KeyboardShortcuts>> 选项卡，只需创建一个 `$:/config/ShortcutInfo/my-shortcut`， 其中''尾码''为用于[快捷键](KeyboardShortcuts)的''参考''

## 关于维基导航的说明

如果要创建用于导航的快捷键，请记住以下两点：

* 如果您的快捷键使用 <kbd>Ctrl</kbd>, 您需要在 [ActionNavigateWidget](ActionNavigateWidget) 的属性包括 `$scroll="yes"` ，否则操作将被忽略。
* 这些操作需要包装在 [NavigatorWidget]] 中，就像在此[[添加条目快捷键]($:/core/ui/KeyboardShortcuts/new-tiddler)中一样。