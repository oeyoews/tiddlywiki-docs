---
title: '内联解析器模式'
---

某些维基文本仅在解析器处于内联模式时才能被识别。

这些维基文本类型，可以在没有整行文本的情况下表达。它们不需要全部在一行上，只是它们<<.em 可以>>在一行中表示。因此，单一行中可以出现多个。 换句话说，当解析器尝试查找特定维基文本的开始和结束位置时，不涉及行尾，当解析器处于内联模式时，它将识别这些维基文本类型的符号：

* [破折号](Dashes in WikiText)
* [文本格式](Formatting in WikiText)
* [HTML](HTML in WikiText)
* [图片](Images in WikiText)
* [链接](Linking in WikiText)
* [宏调用](Macro Calls)
* [样式及 CSS 类别](Styles and Classes in WikiText) (仅限单一行版本)
* [嵌入](Transclusion in WikiText)
* [变量](Variables in WikiText)
* [小工具](Widgets in WikiText)

<<.tip """如果宏调用或嵌入跨越整行，则[宏调用](Macro Calls)和[嵌入](Transclusion in WikiText)会在区块模式下被识别。""">>
<<.tip """其他''内联模式''维基文本类型，在技术上，<<.em 只有>>解析器处于''内联模式''时侦测到。但是，开头的符号也会触发开始[段落](Paragraphs in WikiText)，这将自动导致解析器进入''内联模式''。因此，实际上，当解析器处于''内联模式''或''区块模式''中时，将这些维基文本类型视为可识别的维基文本类型同样有用。""">>

在处理这些维基文本类型的//随附//文本时，解析器[不会寻找新的维基文本](Places where the parser ignores WikiText)。但是对于这些维基文本类型的其余部分，对于//随附//文本，解析器将继续"内联模式"。解析该文本时，可能会遇到[将其转换到区块模式](WikiText parser mode transitions)的东西。