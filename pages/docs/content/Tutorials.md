---
title: '教学'
---

这里是一些有关 ~TiddlyWiki 技巧与教学的网页。

<div class="tc-link-info">

<$list filter="[tag[Tutorials]!sort[modified]]">

<div class="tc-link-info-item">

# <$link><$view field="title"/></$link>

### <a href={{!!url}} target="_blank"><$text text={{!!url}}/></a>

<div class="tc-subtitle">发布于 <$view field="modified" format="relativedate"/></div>

<$transclude/>

</div>

</$list>

</div>
