---
title: 'datauri'
---

<<.def datauri>> [宏](Macros)传回一个条目内容的 [data URI](Data URI) 

此宏常用于[样式表](Cascading Style Sheets)条目，例如引用行内图像和字体：

> `background: url(<<datauri "Motovun Jack.jpg">>);`

 对于非文本的条目，data URI自动为 [base64](Base64) 编码。

## 参数

**title**
: 一个条目的名称，例如图像

<<.macro-examples "datauri">>
