---
title: homepage footer
---

<hr>
<div style="font-weight: regular; border-radius: 4px;background:;font-size:60%; padding: 2px 5px 2px;user-select: none;text-align:center;">

<!--
<i style="color: red;" class="fa-beat-fade fa-solid fa-microchip"></i>
<i style="color: cyan" class="fab fa-shake fa-git"></i>
-->
<i style="color: #07ff07" class="fa-spin fas fa-sync"></i>
<$list filter="[!is[system]!has[draft.of]!sort[modified]limit[1]]">
Updated
<$view field="modified" format="relativedate"/>

and have
<$count filter="[!is[system]sort[title]]"/> tiddlers ! 
</$list> &nbsp; 
</div>
