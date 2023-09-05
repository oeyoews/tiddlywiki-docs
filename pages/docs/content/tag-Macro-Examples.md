---
title: 'tag 宏（示例）'
---

<$macrocall $name=".example" n="1" eg="""<<tag>>"""/>
<$macrocall $name=".example" n="2" eg="""<<tag Concepts>>"""/>

如果一个 [list 小工具](ListWidget) 为同一标签生成多个标签宏，点击其中一个，将打开所有标签宏的下拉功能表，如下例所示。这通常是不需要的。
<$macrocall $name=".example" n="3" eg="""<$list filter="[tag[HelloThere]]">

* <$link/> is tagged with: <$list filter="[<currentTiddler>tags[]]"> <<tag>> </$list>

</$list>"""/>

添加 `counter="transclusion"` 属性到生成多个相同标签宏的列表小工具中，会导致每个标签宏宏都被标识为唯一的。点击其中任何一个，只会打开一个下拉功能表。
<$macrocall $name=".example" n="4" eg="""<$list filter="[tag[HelloThere]]" counter="transclusion">

* <$link/> is tagged with: <$list filter="[<currentTiddler>tags[]]"> <<tag>> </$list>

</$list>"""/>

性能稍高的选项是，在列表小工具中使用 `variable="transclusion"` 属性。在这种情况下，必须在列表小工具内部使用变量 `<<transclusion>>` ，而不是 `<<currentTiddler>>` 。
<$macrocall $name=".example" n="5" eg="""<$list filter="[tag[HelloThere]]" variable="transclusion">

* <$link to=<<transclusion>>/> is tagged with: <$list filter="[<transclusion>tags[]]"> <<tag>> </$list>

</$list>"""/>