---
title: '维基文本解析器模式：嵌入示例'
---

给定条目 [table-example](#table-example) 定义这些内容：
<$codeblock code={{table-example}}/>
则
<table><<wikitext-example-table-header>><tbody>
<<wikitext-example-table-row 1 "* {{table-example}}">>
<<wikitext-example-table-row 2 """* <div>

{{table-example}}
</div>
""">>
<<wikitext-example-table-row 3 "* <$transclude tiddler=table-example/>">>
<<wikitext-example-table-row 4 "* <$transclude tiddler=table-example></$transclude>">>
<<wikitext-example-table-row 5 """* <$transclude tiddler=table-example>

</$transclude>""">>
<<wikitext-example-table-row  6 "* <$transclude tiddler=table-example mode=block/>">>
</tbody></table>

清单语法被识别于[区块模式](Block Mode WikiText)，并使用[内联模式](Inline Mode WikiText)解析随附的内容。当解析器遇到一个[维基文本嵌入](Transclusion in WikiText)，其将使用当前的解析模式，来解析嵌入的条目内容。示例条目内容包含的表格语法，只有在[区块模式](Block Mode WikiText)下可被识别的。

因此，在上面的 #1 中，无法识别表格语法。在上面的 #2 中，打开 `div` 标记后面的空行，将解析器移回[区块模式](Block Mode WikiText)，被嵌入的文本继承之，并且该表格可被识别。

当使用[小工具](TranscludeWidget)嵌入条目，解析模式将是内联 (上面 #3 和 #4 ) 除非它被写为其后跟随空行的起始标记 (上面 #5)。

<<.tip "有关类似示例，另请参阅[维基文本解析器模式：宏](示例WikiText parser mode: macro examples)。这里唯一的区别是 <<.wlink TranscludeWidget>> 有一个 <<.attr mode>> 属性 (额外示例 #6)，这允许显式覆盖解析模式，而不是根据标记的编写方式隐式显现">>

---

在这些示例中，嵌入位于顶层，而不是包含在清单项中：

<table><<wikitext-example-table-header>><tbody>
<<wikitext-example-table-row 1 "{{table-example}}">>
<<wikitext-example-table-row 2 """<div>

{{table-example}}
</div>
""">>
<<wikitext-example-table-row 3 "<$transclude tiddler=table-example/>">>
<<wikitext-example-table-row 4 "<$transclude tiddler=table-example></$transclude>">>
<<wikitext-example-table-row 5 """<$transclude tiddler=table-example>

</$transclude>""">>
<<wikitext-example-table-row  6 "<$transclude tiddler=table-example mode=inline/>">>
</tbody></table>

在这些示例中，只有两个 <<.wlink TranscludeWidget>>标签，未后跟随一空行，且小工具调用使用 <<.attr mode>>=<<.value inline>> 被解析为使用[内联模式](Inline Mode WikiText)。

<<.tip "有关类似示例，另请参阅[维基文本解析器模式：宏示例](WikiText parser mode: macro examples)">>