---
title: 'tv-get-export-image-link'
---

当其 `source` 属性的值不是一个条目的名称时，[变量](Variables)控制由 <<.wlink ImageWidget>> 小工具生成的 HTML `img` 元素的 `src` 属性值。

此变量应为一个[宏](Macros)，使用以下参数：

**src**
: `source`  属性的值 -- 等同指定于<$link to="Images in WikiText">简写语法</$link> `<img src="source">` 的图像名称， 

当使用 [Node.js 配置](TiddlyWiki on Node.js) 要导出的一个静态版的维基时，以这种方式覆盖图像 URIs 的功能是很有用的。

<<.variable-examples "tv-get-export-image-link">>
