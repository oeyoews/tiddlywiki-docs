---
title: '嵌入与替换'
---

WikiText 的力量来自于在一个条目里面使用另一个条目内容的能力。这种能力需要几种很容易混淆的不同形式。

嵌入与文本替换的主要区别是：

* 嵌入是动态替换任一属性的值：
    * 一个条目字段
    * 一个变量
* 文本替换在其使用前进行替换宏定义的文本

# 条目字段嵌入

[Transclusion in WikiText](#Transclusion%20in%20WikiText)说明了嵌入的基本知识。例如：

```
{{MyTiddler}}
```

如[内嵌 HTML](HTML in WikiText) 中所述，您还可以嵌入条目字段值为 HTML 元素和小工具的属性。例如：

```
<$text text={{MyTiddler}}/>
```

如[筛选器符号概述](Introduction to filter notation)中所述，您还可以嵌入条目字段值为筛选操作数。例如：

```
{{{ [tag{TiddlerContainingMyTag}] }}}
```

# 变量/宏 嵌入

被以参数或变量替换定义的变量称为 "宏"。变量/宏的值可被嵌入的语法：

```
<<myMacro param:"Value of parameter">>
```

如[内嵌 HTML](HTML in WikiText) 中所述，，您还可以嵌入变量为 HTML 元素和小工具的属性的值。例如：

```
<$text text=<<myMacro>>/>
```

如[筛选器符号概述](Introduction to filter notation)中所述，您还可以嵌入变量为筛选操作数的值。例如：

```
{{{ [tag<myMacro>] }}}
```

# 文本替换

文本替换发生于宏/变量的值被使用时。此于[宏](Macros)中说明。

替代和嵌入之间的关键区别是替代发生在 WikiText 解析之前。这意味着您可以使用替换构建 WikiText 结构。嵌入则是独立处理，不能组合连续的文本来定义 WikiText 结构。
