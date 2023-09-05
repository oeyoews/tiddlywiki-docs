---
title: 'tabs'
---

<<.def tabs>> [宏](Macros) 呈现一些[甄选的条目](Title Selection)作为用户可于其间切换的一组选项卡。

若条目具有 <<.field caption>> 字段，则选项卡显示该字段，否则显示条目名称。若指定提示，则选项卡显示条目的 <<.field tooltip>> 字段为各自按钮的提示。

默认为选项卡水平排列于内容之上。设置 <<.param class>> 参数值为 <<.value tc-vertical>> 则可为垂直选项卡。

## 参数

**tabsList**
: 一个选择要包括哪些条目的[筛选器](Filters)
**default**
: 如果[状态条目](StateMechanism)不存在，选定为默认选项卡的条目名称。状态条目优先于此设置
**state**
: 用于指出当前所选条目的[状态条目](StateMechanism)名称的前缀，默认为 `$:/state/tab`。建议此为一[系统条目](SystemTiddlers)
**class**
: 用于生成 `div` 元素的附加 [CSS](Cascading Style Sheets) 类别。可用空格区隔多个类别。
**template**
: 可选的条目名称，当作[模板](TemplateTiddlers)用以嵌入所选选项卡内容
**buttonTemplate**
: 可选的条目名称，当作[模板](TemplateTiddlers)用于嵌入所选选项卡的按钮内容
**retain**
: 可选的，在切换到另一个选项卡时，"yes" 指定应保留的选项卡的内容，避免重新呈现它 (有助于避免视频或音频源意外重置)
**actions**
: 可选的，可以指定更改选项卡时触发的操作。在操作内，所选选项卡的标题可用于 <<.var currentTab>> 变量，且 <<.mtitle tabs>>外的 `currentTiddler` 变量可用于 <<.var save-currentTiddler>>
**explicitState**
: 可选的，可以指定一个明确的状态条目名称。优先于内部计算的（合格的）状态条目名称

在模板中，选定的选项卡的标题可用于 <<.var currentTab>> 变量。

<<.vlink currentTiddler>> 变量不受 <<.var tabs>> 宏影响。如果选项卡列表包含依赖 <<.vlink currentTiddler>> 值的条目，例如条目基于其自己的名称列出子条目，这可能会导致麻烦。为了克服这个问题，您可以使用[模板条目](TemplateTiddlers) ，如下所示：

```
<$tiddler tiddler=<<currentTab>>>
<$transclude mode="block" />
</$tiddler>
```

<<.macro-examples "tabs">>
