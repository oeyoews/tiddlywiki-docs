---
title: '创建与编辑条目'
---

# 创建条目

创建一个条目，可点击侧边栏的 <<.icon $:/core/images/new-button>> 按钮，或点击链接到一个佚失条目。链接到佚失条目显示为[蓝色斜体](blue italics)。

另请参阅：

* [创建日志条目](Creating journal tiddlers)

# 编辑条目

欲编辑现有的条目，请点击该条目右上方的 <<.icon $:/core/images/edit-button>> 按钮。

## 草稿模式

当您创建一个新的条目或编辑一个现有条目时，该条目将进入草稿模式。这会以各种方式，显现一个修改该条目的控制面板。其包含几个部分，由上至下：

*''名称字段'' - 用于更改条目名称
*''标签选择器'' - 用于添加或移除标签。当您在框中输入标签的名称，下拉清单将显示匹配的现有标签，您可以从该清单中选择，或创建一个新的标签，然后点击添加按钮或按下 <kbd>Enter</kbd> 键 ，将标签添加至条目。每个标签显示为彩色丸，可点击标签丸中的 "×" 来移除该标签。
*''本文区域'' - 用于编辑条目的主要内容。点击''预览''按钮 (<<.icon $:/core/images/preview-closed>> / <<.icon $:/core/images/preview-open>>)，预览您的更改。
*''类型选择器'' - 用于当一条目需要以特殊的方式显示，例如图像。 选项的清单，请参阅[内容类型](ContentType)。其默认值为 `text/vnd.tiddlywiki`，这表示该条目包含 WikiText。
*''字段选择器'' - 用于添加或删除条目的字段。例如，如果您正在编辑的条目用于标记其他条目，您可以添加一个 [''list'' 字段](ListField)用于改变这些将被列出的条目的顺序

# 保存、取消或删除

完成编辑后，点击条目右上方的按钮：

* **确定**按钮 (<<.icon $:/core/images/done-button>>) 保存您对此条目的更改并离开草稿模式。若您的维基配置为[自动保存](AutoSave)，则您的更改将永久保存。否则，他们将只是暂存于您的网页浏览器。而且，如果关闭您的 ~TiddlyWiki 页面之前，不先点击侧边栏的''保存变更''按钮 (<<.icon $:/core/images/save-button-dynamic>>)，您将失去这些变更。
* **取消**按钮 (<<.icon $:/core/images/cancel-button>>) 放弃您的更改 (在询问您确认之后) 且离开草稿模式。
* **删除**按钮 (<<.icon $:/core/images/delete-button>>) 删除整个条目 (在询问您确认之后)。
