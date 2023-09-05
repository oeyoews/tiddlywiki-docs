---
title: '为查看工具栏和页面控件创建新按钮'
---

假设您有一个名为 '食谱模板' 的骨架条目，并且您希望在条目查看工具栏中，有一个按钮可以按需创建新的食谱条目。这将需要以下步骤：

1. 您要一个按钮图像。如果内核图像（具有前缀 $:/core/images/的影子条目）没有适合您的图像，那么您将需要创建或取得一个 SVG 图像（例如，<http://flaticon.com> 中的一个图像），将它拖入您的文件，使其成为一个条目，编辑条目并将高度和宽度调整为 22px
1. 您要创建包含您的条目的条目。创建、输入名称，并添加按钮代码（请参阅此条目底部的代码以获取示例，其中提示您需要对其进行调整）。设其标签为 [$:/tags/ViewToolbar](#%24%3A/tags/ViewToolbar)
1. 您要创建一个条目，告诉 ~TiddlyWiki 您的按钮是在工具栏中显示还是隐藏。使其名称为 [$:/config/ViewToolbarButtons/Visibility/Recipe](#%24%3A/config/ViewToolbarButtons/Visibility/Recipe)。在 <<.field text>> 区域键入 `show`，然后保存。如果要隐藏它，请在文本区域中键入 `hide` 并保存存。该按钮也可从''控制台 : 视觉外观 : 工具栏 : 查看工具栏''选项卡访问。
1. 您要正确定位按钮。打开条目 $:/tags/ViewToolbar 并将您的按钮条目的名称，插入至 <<.field list>> 字段中的适当位置。

```
\define newHereButtonTags()
[[$(currentTiddler)$]]
\end
\define newHereButton()
<$button class=<<tv-config-toolbar-class>>>
<$action-sendmessage
  $message="tm-new-tiddler"
$param="TITLE OF YOUR SKELETON BUTTON"
title="New tiddler"
  tags=<<newHereButtonTags>> />
<$list filter="[<tv-config-toolbar-icons>match[yes]]">
{{TITLE OF YOUR SVG IMAGE TIDDLER}}
</$list>
<$list filter="[<tv-config-toolbar-text>match[yes]]">
<span class="tc-btn-text"><$text text="CAPTION FOR YOUR BUTTON"/></span>
</$list>
</$button>
\end

<<newHereButton>>
```
