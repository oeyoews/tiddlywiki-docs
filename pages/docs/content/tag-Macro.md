---
title: 'tag'
---

<<.def tag>> [宏](Macros) 生成一个指定标签的标签丸。按一下标签丸，将打开一个下拉清单。这可以与 [tag-pill 宏](tag-pill Macro)进行比较，后者还具有其他参数。

<<.tip """如果 [list 小工具](ListWidget) 为同一标签生成多个标签宏，点击其中一个，将打开所有标签宏的下拉功能表。防止这种情况的最简单方法是，添加 `counter="transclusion"` 属性到列表小工具。有关更多详细信息，请参阅下面的示例。""">>

## 参数

**tag**
: 标签名称，默认为[标签名称](Current Tiddler)

<<.macro-examples "tag">>
