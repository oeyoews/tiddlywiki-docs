---
title: '硬式与软式链接'
---

<<.def "硬式链接">>是一种可以由 WikiText 表面检查被检测到的链接。

若为下列情形则为 <<.def "软式链接">>：

* 包含于从别处[嵌入](Transclusion)的文本
* 由[宏](Macros)或[变量](Variables)提供
* 由其 <<.attr to>> 属性是嵌入、宏或变量的链接小工具生成

<$macrocall $name=".warning" _="""软式链接为链接相关的筛选器运算符未检测到的链接，例如，<<.olink backlinks>>、<<.olink links>>、<<.olink all>> 和 <<.olink is>>。"""/>