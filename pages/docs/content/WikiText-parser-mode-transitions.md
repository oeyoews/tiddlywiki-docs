---
title: '维基文本解析器模式转换'
---

这是一个<<.em 粗略>>的图表，其线条主要对应于下面描述的解析器模式转换：
<$railroad text="""
{<"  编译指示模式  ">
{(
  {<" 内联模式 "> +} |
  ({<" 区块模式 ">
    +("<<<" | "@@" | "$$$")
  }
  "    其他区块模式起始符号    ")
  {<" 内联模式 "> +}
  )
  +(
    "   区块模式结束符号   " |
    (" 空行 " " html 起始标记 ")
  )}
  +("  嵌入小工具  " | " 宏调用 ")
}
"""/>

## 起始模式

默认情况下，解析器起始为[区块模式](Block Mode WikiText)。然而，一个条目在[块模式维基文本](Block Mode WikiText)无法识别情况下，可以改为使用[内联模式](Inline Mode WikiText)。

只有在条目主体的开头，解析器还将识别任何[编译指示模式维基文本](Pragmas)。

## 从编译指示模式转换

在条目主体的开头，解析器将识别任何[编译指示](Pragmas)。如果未找到任何内容，则它将移动到[内联](Inline Mode WikiText)或[区块](Block Mode WikiText)模式，这取决于嵌入模式。如果发现[编译指示](Pragmas)，则将继续寻找[编译指示]](Pragmas)，直到找到一个或多个空白行，其后没有新编译指示的开头。

## 从区块模式转换

当解析器遇到大多数[区块模式](Block Mode WikiText)的起始符号，它转换到[内联模式](Inline Mode WikiText)。这意味着由大多数[区块模式](Block Mode WikiText)构造包含的文本，将使用[内联模式](Inline Mode WikiText)解析。

<<.tip """一个段落的起始「符号「是「看不见的」。即使对于段落，解析器移到[内联模式](Inline Mode WikiText)""">>

但是，有一些构造的封闭文本使用[区块模式](Block Mode WikiText)：

* [多行引言区块](Block Quotes in WikiText)
* [多行样式区块](Styles and Classes in WikiText)
* [类型区块](Typed Blocks in WikiText)

当遇到这些的起始符号时，随附的文本将继续以[区块模式](Block Mode WikiText)解析。

[水平分隔线](Horizontal Rules in WikiText)是另一个特例。它们不包含任何文本，因此解析器没有机会转换为[内联模式](Inline Mode WikiText)。

[小工具](Widgets in WikiText)或 [HTML](HTML in WikiText) 的起始标记，提供解析器可以转换的另一种方式。当这样的标记<<.em 不>>是后跟一个空行，则标记所包含的内容将被解析为[内联模式](Inline Mode WikiText)。请参阅 [HTML 示例](WikiText parser mode: HTML examples)。

## 从内联模式转换

* 维基文本解析器将移回[区块模式](Block Mode WikiText)，行尾之后终止[区块模式](Block Mode WikiText)。换句话说，当遇到区块模式的结束符号时。
* 当[小工具](Widgets in WikiText)或 [HTML](HTML in WikiText) 的起始标记后跟一个空行，则标记所包含的内容将被解析为[区块模式](Block Mode WikiText)。请参阅 [HTML 示例](WikiText parser mode: HTML examples).
* 迁入文本和通过宏调用拉入的文本，可以将解析器从[内联模式](Inline Mode WikiText)转换。详见[嵌入示例](WikiText parser mode: transclusion examples)和[宏示例](WikiText parser mode: macro examples)。