---
title: '创建子故事'
---

此示例演示如何在独立于主故事的条目中创建子故事。

代码如下：

```
<$navigator story="MySubStoryList" history="MySubHistoryList">

按下此链接开始：[[嗨，您好|HelloThere]]

<$list filter="[list[MySubStoryList]]" history="MySubHistoryList">
<div>

! <$button message="tm-close-tiddler" class="tc-btn-invisible">{{$:/core/images/close-button}}</$button> <$view field="title"/>

<$transclude/>
</div>
</$list>

</$navigator>
```

请注意，如何通过点击下面的链接，在子故事中打开[嗨，您好](HelloThere)条目。子故事中的链接在子故事中打开，而不是在主故事中打开。

<$navigator story="MySubStoryList" history="MySubHistoryList">

按下此链接开始：[嗨，您好](HelloThere)

<$list filter="[list[MySubStoryList]]" history="MySubHistoryList">
<div>

# <$button message="tm-close-tiddler" class="tc-btn-invisible">{{$:/core/images/close-button}}</$button> <$view field="title"/>

<$transclude/>

</div>
</$list>

</$navigator>
