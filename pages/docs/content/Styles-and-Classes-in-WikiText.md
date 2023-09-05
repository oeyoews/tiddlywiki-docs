---
title: '样式及 CSS 类别'
---

# 样式及 CSS 类别

CSS 样式和类可以应用于包含在 `@@double atSigns@@` 中的内联或区块内容。类可以应用于某些区块[维基文本](WikiText)元素。

_内联内容_在没有指定样式或类的情况下，用 `@@`双标志`@@` 包裹的内联内容将被分配 `.tc-inline-style`，并显示为突出显示的文本。突出显示文本的前景色和背景颜色，在当前调色板中定义为 `highlight-foreground` 和 `highlight-background` 。

<<wikitext-example src:"@@Highlighted text@@">>

## 样式

多种样式属性，例如 `color`，每个后跟 `;` 分号，可以在开头的 `@@` 之后立即引入，中间没有空格。。

<<wikitext-example src:"@@color:steelblue;background-color:lightcyan;some styled text@@">>

同样地，样式可以应用于//区块内容//。在不指定样式或类的情况下，将区块内容包装在 `@@` 中没有任何效果。

<<wikitext-example src:"@@background-color:lightcyan;
* Item one
* Item two
@@
">>

## Classes

为了演示目的，在此条目中定义了以下 `coloured-text` 和 `coloured-bg` 类：

```
.coloured-text {color: darkkhaki;}
.coloured-bg {background-color: cornsilk;}
```

<style>
.coloured-text {color: darkkhaki;}
.coloured-bg {background-color: cornsilk;}
</style>

可以在开头的 `@@` 之后立即引入多个类，每个类都以 `.`为前缀，后跟一个 ` ` 空格。这适用于内联和块区内容：

<<wikitext-example src:"@@.coloured-text.coloured-bg Inline content with two assigned classes@@">>

<<wikitext-example src:"@@.coloured-bg
* Block content
* With one assigned class
@@">>



可以同时应用多个类和样式。对于内联内容，必须先定义样式，然后定义类。

<<wikitext-example src:"@@font-size:1.5em;.coloured-text.coloured-bg Text with custom style and classes@@">>

对于区块内容，样式和类可以在开头的 `@@` 之后的单行中定义，与内联内容相同，也可以在单独的行中定义，每行以 `@@` 开头：

<<wikitext-example src:"@@font-size:1.5em;
@@.coloured-text
@@.coloured-bg
* Block content
* With custom style and classes
@@">>

以类似的方式，类（但不是样式）可以应用于通过行开头的字符引入的区块[维基文本](WikiText)元素。以 `.` 为前缀的类紧跟在特殊字符之后指定，后跟一个 ` ` 空格。

<<wikitext-example src:"!!!.coloured-bg Heading with a custom background class.

* Standard list element.
*.coloured-bg List element with a custom background colour class.
*.coloured-text List element with a custom text colour class.
*.coloured-bg.coloured-text List element with both of the custom classes.
">> 