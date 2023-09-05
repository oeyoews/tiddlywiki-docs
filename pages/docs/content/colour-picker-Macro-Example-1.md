---
title: 'colour-picker 宏（示例一）'
---

颜色: <$edit-text tiddler='$:/_MyColour' tag='input' placeholder='(未设置)' default=''/>

---

<$macrocall $name='colour-picker' actions="

<$action-setfield $tiddler='$:/_MyColour' $value=<<colour-picker-value>>/>

"/>