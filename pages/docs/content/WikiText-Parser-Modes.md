---
title: '维基文本解析器模式'
---

为了显示条目（通常是 <<.field text>> 字段），维基文本解析器读取和解释内容，并应用维基文本规则。 解析器有三种模式：

* **编译指示模式** - 解析器将仅识别[编译指示模式维基文本](Pragmas)符号
* **区块模式** - 解析器将仅识别[区块模式维基文本](Block Mode WikiText)符号
* **内联模式** - 解析器将仅识别[内联模式维基文本](Inline Mode WikiText)

解析器[转换于这些模式之间](WikiText parser mode transitions)，基于其所遇到的文本。此外，[有些地方解析器忽略维基文本](Places where the parser ignores WikiText)符号。解析器模式也可以直接用[编译指示: \parsermode](Pragma: \parsermode)。

<<.tip "内联以及区块的概念也适用于标准 HTML 元素。 对于 HTML，这[两种版面模式](https://www.w3schools.com/html/html_blocks.asp)决定输出流动是否在同一行上。

大多数[区块模式维基文本](Block Mode WikiText)对应至[区块层级的 HTML 元素](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)，而大多数[内联模式维基文本](Inline Mode WikiText)对应至[内联层级的 HTML 元素](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)。然而对于维基文本，这两种模式对于决定解析器将识别哪些语法，和其对于维基文本输出将如何流动同样重要。">>
