---
title: '历史记录机制'
---

系统条目 [$:/HistoryList](#%24%3A/HistoryList) 追踪包含导航历史记录的条目清单。每次按一下指向条目的链接时，目标条目的标题都会添加到堆栈的顶端。

历史记录清单存放在 JSON，以允许有关初始导航的 DOM 节点座标的其他详细信息。

历史记录清单还维护包含堆栈顶部的条目名称的字段 **current-tiddler** 。此字段可以如此使用:

```
<$list filter="[list[$:/StoryList]]" history="$:/HistoryList" storyview="pop">

<$button message="tm-close-tiddler" class="tc-btn-invisible tc-btn-mini">&times;</$button> <$link><$view field="title"/> <$reveal type="match" state="$:/HistoryList!!current-tiddler" text=<<currentTiddler>>>&#x2713;</$reveal></$link>

</$list>
```

与"打开"边栏选项卡的渲染相同，同时对上次导航到的条目添加一个刻度。

<$list filter="[list[$:/StoryList]]" history="$:/HistoryList" storyview="pop">

<$button message="tm-close-tiddler" class="tc-btn-invisible tc-btn-mini">&times;</$button> <$link><$view field="title"/> <$reveal type="match" state="$:/HistoryList!!current-tiddler" text=<<currentTiddler>>>&#x2713;</$reveal></$link>

</$list>

## 空的故事

若要在故事为空时显示内容，请创建 $:/config/EmptyStoryMessage，并输入所需内容。若其内容如下，当所有其他操作关闭时，将显示 GettingStarted 条目。

```
{{GettingStarted||$:/core/ui/ViewTemplate}}
```