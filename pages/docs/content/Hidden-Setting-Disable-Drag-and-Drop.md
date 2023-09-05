---
title: '隐藏设置：禁用拖放'
---

<<.from-version "5.1.22">> 要禁用内核内置的所有拖放操作，请将以下条目设置为 "no"：

$:/config/DragAndDrop/Enable

选择性地重新激活 [list-tagged-draggable Macro](#list-tagged-draggable%20Macro) 或 [list-links-draggable Macro](#list-links-draggable%20Macro) 实例的拖放，必须确保变量 `tv-enable-drag-and-drop` 设置为 `yes` ，用于宏调用的范围。例如，请注意，即使 $:/config/DragAndDrop/Enable 设置为 "no"，仍可在此清单中使用拖放：

<$macrocall $name="wikitext-example-without-html" src="""<$set name="tv-enable-drag-and-drop" value="yes">

<<list-tagged-draggable tag:"HelloThere">>

</$set>"""/>

请注意，当直接使用 DropzoneWidget 和 DropableWidget 时， **enable** 属性独立运作于全域设置。
