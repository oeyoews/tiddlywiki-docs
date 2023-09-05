---
title: '维基文本中的小工具'
---

# 小工具

小工具提供 WikiText 更丰富的功能。它们与 [HTML 元素](HTML in WikiText) 使用相同的标记方式，但是标记的名称前包含一个 `$` 符号，例如：

<$macrocall $name=".example" n="1"
eg="""<$button message="tm-navigate" to="HelloThere">打开 ~HelloThere</$button>
"""/>

需注意的是小工具继承 [HTML in WikiText](#HTML%20in%20WikiText) 的所有功能：

* 小工具的属性可被指定为：
    * 不带引号的字符串 (不可含有空白字符)
    * 单、双引号引述的字符串
    * 连续三个双引号引述的字符串
    * 调用宏 (例如：`attr=<<myMacro>>`)
    * 嵌入条目、字段 (例如：`attr={{MyTiddler!!field}}`)
    * 筛选器的嵌入 (例如：`attr={{{ [filter[op]] }}}`)
    * <<.from-version "5.3.0">> [替换的属性值](Substituted Attribute Values)
* 小工具的内文将在 [inline 模式](Inline Mode WikiText)下进行[解析](WikiText Parser Modes)，除非开始标记之前是两个换行符号，这会强制为 [block 模式](Block Mode WikiText)。
    * [inline 模式](Inline Mode WikiText)意味着 [block 模式](Block Mode WikiText)的格式不会被识别，例如表格、列表和标题。

详见 [HTML in WikiText](#HTML%20in%20WikiText)。

可用的小工具：

<<list-links "[tag[Widgets]]">>
