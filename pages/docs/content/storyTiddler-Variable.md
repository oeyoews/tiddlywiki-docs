---
title: 'storyTiddler'
---

当条目被查看或编辑时，在[小工具树](Widgets)分支中的 <<.def storyTiddler>> [变量](Variables)包含该条目的名称。

缺省的[查看范本]($:/core/ui/ViewTemplate)和[编辑范本]($:/core/ui/EditTemplate) 初始化 <<.var storyTiddler>> 为 <<.vlink currentTiddler>> 变量的值。这将依序由 <<.wlink ListWidget>> 小工具设置于[页面范本的相关部分]($:/core/ui/PageTemplate/story)。

<<.var storyTiddler>> 未定义于故事河之外，例如在侧边栏。

<<.variable-examples "storyTiddler">>
