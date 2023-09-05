---
title: '语言旗帜示例'
---

这是一个使用 ListWidget 和 TranscludeWidget 来显示所有语言图标网格的示例，那些条目含标签为 <<tag Language>> 和 <<tag Icon>>。

<style>
.language-gallery img {
width: 5em;
height: auto;
margin: 0.5em;
-webkit-box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
    -moz-box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
}
</style>
<div class="language-gallery">
<$list filter="[all[tiddlers+shadows]tag[Language]tag[Icon]]">
<span title=<<currentTiddler>>>
<$transclude/>
</span>
</$list>
</div>
