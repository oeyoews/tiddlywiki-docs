---
title: 'image-picker 宏（示例二）'
---

图像: <$edit-text tiddler='$:/_MyImage' tag='input' placeholder='(未设置)' default=''/>

<$transclude tiddler={{$:/_MyImage}}/>

---

<$macrocall $name='image-picker' actions="

<$action-setfield $tiddler='$:/_MyImage' $value=<<imageTitle>>/>

" subfilter="prefix[Language]"/>
