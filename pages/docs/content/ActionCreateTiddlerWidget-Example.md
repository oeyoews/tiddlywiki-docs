---
title: 'ActionCreateTiddlerWidget 示例'
---

<<wikitext-example-without-html src:"""新按钮的标题︰ <$edit-text tiddler="$:/state/new-button-caption" tag="input" default=""/>

<$button>
<$action-createtiddler $basetitle="Homemade Button" tags="$:/tags/PageControls" text={{$:/state/new-button-caption}}>
<$action-navigate $to=<<createTiddler-title>>/>
</$action-createtiddler>创建无功能的页面控制按钮，并打开条目
</$button>
""">>