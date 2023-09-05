---
title: '使用 SVG'
---

TiddlyWiki5 允许您使用 SVG 以两种方式显示矢量图形：

* 类型为 `image/svg+xml` 的条目被解译为 SVG 图像，并显示和嵌入为自足的 `<img>` 元素以 data URI 形式嵌入在 `src` 属性的 SVG。
    * 关于 SVG 图像的例子请查看 [Motovun Jack.svg](#Motovun%20Jack.svg) 和 [Tiddler Fishes.svg](#Tiddler%20Fishes.svg)
* WikiText 也可以直接包含内嵌 SVG 元素。请参阅下面的一个例子。

# 嵌入 SVG 条目

您可以使用一般的嵌入语法嵌入 SVG 图像条目：

```
{{Motovun Jack.jpg}}
```

您也可以使用 [Typed Blocks in WikiText](#Typed%20Blocks%20in%20WikiText) 嵌入一个内嵌 SVG 条目。

`<img>` 元素中所呈现的图像的影响为，它是沙盒；它不能从父文档中使用 CSS 样式，例如。图像也不可以使用 WikiText 的功能，例如嵌入。

# 嵌入 SVG 元素

使用 SVG 的另一种方法是直接嵌入 `<svg>` 元素。例如：

<svg width="150" height="100">
  <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
</svg>

请注意，内嵌 SVG 元素不需要 `<?xml version="1.0"?>` 指令。

# 包含 HTML 或 wikitext 内容于 SVG 图像

您可以使用 `<text>` 元素包含简单的文本串于 SVG 图像：

<svg width="100px" height="30px" viewBox="0 0 1000 300"><text x="250" y="150" font-family="Verdana" font-size="55">Hello, out there</text><rect x="1" y="1" width="998" height="298" fill="none" stroke-width="2" /></svg>

HTML 或 WikiText 内容可以包括使用 `<foreignObject>` 元素于内嵌 SVG 图像中。例如：

<svg width="260px" height="260px"><circle cx="150" cy="150" r="100" fill="blue" stoke="red"/><foreignObject x="70" y="110" width="150" height="180"><body>Here is some text that requires a word wrap, and includes a [link to a tiddler](HelloThere).</body></foreignObject></svg>

# 嵌入 SVG 元素

当嵌入 SVG 元素时，你也可以使用 WikiText 的功能，例如嵌入。举例来说，这里是一个 SVG 圆，其半径值设置于条目 [$:/SVGExampleRadius](#%24%3A/SVGExampleRadius)：

<svg width="150" height="150"><circle cx="75" cy="75" r={{$:/SVGExampleRadius}} stroke="black" stroke-width="2" fill="green"/></svg>

您可以在这里编辑半径的值：<$edit-text tiddler="$:/SVGExampleRadius" tag="input"/>

# 使用 SVG 制作弯曲的文本

{{Making curved text with SVG}}