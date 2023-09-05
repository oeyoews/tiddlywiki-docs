---
title: '图标图库'
---

\define copyActions() <$action-sendmessage $message="tm-copy-to-clipboard" $param=<<imageTitle>>/>

<<.tip "点击图标将标题拷贝到剪贴板">>

<div class="tc-image-chooser">
<$macrocall $name="image-picker-list" filter="[all[shadows+tiddlers]tag[$:/tags/Image]]" actions=<<copyActions>> />
</div>

