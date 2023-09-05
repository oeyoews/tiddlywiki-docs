---
title: 'qualify 宏（示例）'
---

<<.mlink qualify>> 宏返回的结果，取决于其在嵌入堆栈中的位置。

下列两个示例是相同的，但生成不同的结果，因为第二个是由[另一个条目]($:/editions/tw5.com/macro-examples/qualify-transcluded)嵌入。

每个示例显示调用 <<.var qualify>> 的结果，然后 <<.vlink transclusion>> 变量的值。

<$macrocall $name=".example" n="1"
eg="""<ul>
<li><code><<qualify "BaseTiddler">></code></li>
<li><code><<transclusion>></code></li>
</ul>"""/>

{{$:/editions/tw5.com/macro-examples/qualify-transcluded}}
