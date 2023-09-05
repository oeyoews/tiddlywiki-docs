---
title: 'render'
---

{{$:/language/Help/render}}

<$button class="tc-btn-invisible" style="text-decoration:underline">
显示可用的呈现模板条目
<$action-setfield $tiddler="$:/temp/advancedsearch" text="[all[shadows]prefix[$:/core/templates/]]"/>
<$action-setfield $tiddler="$:/state/tab--1498284803" text="$:/core/ui/AdvancedSearch/Filter"/>
<$action-navigate $to="$:/AdvancedSearch"/>
</$button>