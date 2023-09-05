---
title: '状态机制'
---

TiddlyWiki 的[状态机制](StateMechanism)是可从 WikiText 被创建的何其复杂的用户界面内核。

在浏览器中，是由动态呈现条目 [$:/core/ui/PageTemplate](#%24%3A/core/ui/PageTemplate) 来生成 TiddlyWiki 的显示。通过各种嵌入和其他小工具，呈现的整个用户界面。动态呈现是通过一种称为 "绑定" 的机制来完成︰在存储区中的条目的任何更改，都将动态地反映出在浏览器中显示。

组成 TiddlyWiki 显示的模板堆栈极为复杂，但我们会专注于显示打开中的条目︰

```
<$list filter="[list[$:/StoryList]]" history="$:/HistoryList" template="$:/core/ui/ViewTemplate" editTemplate="$:/core/ui/EditTemplate" storyview={{$:/view}} />
```

分解应用于清单小工具的属性︰

* **filter**: 于条目 [$:/StoryList](#%24%3A/StoryList) 的 `list` 字段中，选择条目清单。如果从该清单中添加或删除一个条目，则它将自动反映在显示的清单中
* **history**: 参考被用来存放历史堆栈的条目（见 HistoryMechanism）
* **template**: 标识要用于呈现清单中的每个条目的模板条目
* **editTemplate**: 标识要用于在[草稿模式](DraftMechanism)的呈现条目的不同模板条目
* **storyview**: 指定要使用的查看模式（例如，classic 或 zoomin）

[$:/StoryList]] 条目是一个[[状态条目](StateTiddler)的示例︰一个用来保存用户界面状态的条目。通过更改底层的状态条目，对用户界面进行间接更改，并让 TiddlyWiki 通过用户界面连带更改。

请注意，此方法如何使得在边栏中的''打开''选项卡非常易于实现︰它只是另一个引用相同的状态条目的清单小工具，但使用不同的模板︰

```
<$list filter="[list[$:/StoryList]]" history="$:/HistoryList" storyview="pop">
<$button message="tm-close-tiddler" class="tc-btn-invisible tc-btn-mini">&times;</$button> <$link />
</$list>
```

现在考虑条目模板内的信息面板的实现。我们希望能够切换信息面板的打开和关闭，这意味着我们必须在条目追踪其当前状态。

然而，我们不能追踪在一个称为 [$:/InfoPanelState](#%24%3A/InfoPanelState) 条目的状态，因为每个条目将共用相同的状态；更改条目的值会影响打开中的所有条目。

解决方法是，我们需要为每个状态条目动态生成一个唯一的名称。我们需要确保每次呈现用户界面元素都生成相同的状态条目名称。要做到这一点，我们将导致当前的呈现位置的每个嵌入的堆栈追加表示权杖在一起。然后将符号的字符串行哈希运算为一个简单的数值。

生成状态条目名称的过程系封装于 <<.mlink qualify>> 宏。
