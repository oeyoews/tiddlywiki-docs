---
title: 'datauri 宏（示例）'
---

<$macrocall $name=".example" n="2"
eg="""<style>
.jack {
	background: url(<$macrocall $name="datauri" title="Motovun Jack.jpg" $output="text/plain"/>);
	height: 300px;
}
</style>

<div class="jack"/>"""/>

该示例由 <<.wid macrocall>> 小工具调用 <<.var datauri>>。它需要防止宏的输出被解析为 WikiText，因为这会将 data URI 转成一个 <<.wlink LinkWidget>> 小工具而破坏该示例。如果该示例是在 CSS 条目，你可以简单地写成：

> `background: url(<<datauri "Motovun Jack.jpg">>);`
